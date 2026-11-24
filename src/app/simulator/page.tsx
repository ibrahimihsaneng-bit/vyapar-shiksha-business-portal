'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Laptop,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  RotateCcw,
  AlertCircle,
  Award,
  ChevronRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { simulationTasks } from '@/data/simulator';
import { WorkplaceSimulatorTask } from '@/types';

export default function SimulatorPage() {
  const [selectedTaskId, setSelectedTaskId] = useState<string>(simulationTasks[0].id);
  const [formInputs, setFormInputs] = useState<Record<string, any>>({});
  const [submissionResult, setSubmissionResult] = useState<{
    score: number;
    breakdown: Array<{ field: string; pointsAwarded: number; maxPoints: number; feedback: string }>;
  } | null>(null);

  const activeTask = simulationTasks.find(t => t.id === selectedTaskId) || simulationTasks[0];

  const handleInputChange = (fieldId: string, value: any) => {
    setFormInputs({
      ...formInputs,
      [fieldId]: value
    });
  };

  const handleGradeTask = (e: React.FormEvent) => {
    e.preventDefault();
    let totalScore = 0;
    const breakdown: Array<{ field: string; pointsAwarded: number; maxPoints: number; feedback: string }> = [];

    activeTask.gradingRubric.forEach((rubric) => {
      const userVal = formInputs[rubric.field];
      const targetVal = activeTask.solutionKey[rubric.field];
      let awarded = 0;
      let feedback = '';

      if (targetVal !== undefined) {
        if (typeof targetVal === 'number') {
          const numUser = Number(userVal);
          if (!isNaN(numUser) && Math.abs(numUser - (targetVal as number)) < 0.01) {
            awarded = rubric.points;
            feedback = `Correct! Exact match with accounting standard (${targetVal}).`;
          } else {
            feedback = `Incorrect calculation. Expected ${targetVal}, got ${userVal || 'empty'}.`;
          }
        } else if (typeof targetVal === 'string') {
          if (String(userVal).trim().toLowerCase() === String(targetVal).trim().toLowerCase()) {
            awarded = rubric.points;
            feedback = `Correct match: "${targetVal}".`;
          } else {
            feedback = `Expected "${targetVal}".`;
          }
        }
      } else {
        // Freeform textarea evaluation
        if (userVal && String(userVal).trim().length > 20) {
          awarded = rubric.points;
          feedback = 'Detailed professional reasoning accepted.';
        } else {
          awarded = Math.round(rubric.points * 0.4);
          feedback = 'Response too brief. Provide more thorough documentation.';
        }
      }

      totalScore += awarded;
      breakdown.push({
        field: rubric.field,
        pointsAwarded: awarded,
        maxPoints: rubric.points,
        feedback
      });
    });

    setSubmissionResult({ score: totalScore, breakdown });

    if (totalScore >= 70) {
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.7 }
        });
      } catch {}
    }
  };

  const handleResetTask = () => {
    setFormInputs({});
    setSubmissionResult(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-100">
          <Laptop className="w-3.5 h-3.5 text-emerald-600" />
          <span>Virtual Workplace Simulator &bull; Instant Grading</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Test Your Practical Skills on Real Tasks
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          Employers don&apos;t just care about certificates; they care whether you can solve actual problems on day one. Practice bank reconciliation, e-commerce catalog audits, and customer support de-escalation with simulated workplace datasets.
        </p>
      </div>

      {/* Task Selector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {simulationTasks.map((task) => (
          <button
            key={task.id}
            onClick={() => {
              setSelectedTaskId(task.id);
              handleResetTask();
            }}
            className={`p-5 rounded-2xl border text-left transition-all space-y-2 ${
              selectedTaskId === task.id
                ? 'border-emerald-600 bg-emerald-50/70 shadow-sm ring-1 ring-emerald-600'
                : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
            }`}
          >
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-emerald-800 uppercase tracking-wider">{task.department}</span>
              <span className="text-slate-400 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{task.estimatedMinutes}m</span>
              </span>
            </div>
            <h3 className="font-bold text-sm text-slate-900 leading-snug">{task.title}</h3>
            <p className="text-xs text-slate-500 line-clamp-1">{task.companyName}</p>
          </button>
        ))}
      </div>

      {/* Active Simulation Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Brief & Instructions */}
        <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Client Context</div>
            <h2 className="text-xl font-extrabold text-slate-900 mt-0.5">{activeTask.companyName}</h2>
            <p className="text-xs text-emerald-700 font-semibold">{activeTask.department} Department</p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Task Brief:</h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
              {activeTask.brief}
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Instructions:</h3>
            <div className="space-y-2">
              {activeTask.instructions.map((inst, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                  <span className="w-4 h-4 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="leading-snug">{inst}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Raw Input Data */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Simulated Workplace Data:</h3>
            <pre className="p-4 rounded-xl bg-slate-900 text-emerald-400 font-mono text-xs overflow-x-auto leading-relaxed">
              {JSON.stringify(activeTask.inputData, null, 2)}
            </pre>
          </div>
        </div>

        {/* Right Column: Interactive Submission Form & Grading */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <h2 className="text-lg font-bold text-slate-900">Your Deliverable Workspace</h2>
            <button
              onClick={handleResetTask}
              className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-slate-800"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>

          <form onSubmit={handleGradeTask} className="space-y-5">
            {activeTask.formFields.map((field) => (
              <div key={field.id} className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-800">{field.label}</label>

                {field.type === 'textarea' ? (
                  <textarea
                    rows={4}
                    value={formInputs[field.id] || ''}
                    onChange={(e) => handleInputChange(field.id, e.target.value)}
                    placeholder={field.placeholder}
                    className="w-full p-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 placeholder:text-slate-400"
                    required
                  />
                ) : field.type === 'select' ? (
                  <select
                    value={formInputs[field.id] || ''}
                    onChange={(e) => handleInputChange(field.id, e.target.value)}
                    className="w-full p-3 rounded-xl border border-slate-200 text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                    required
                  >
                    <option value="">{field.placeholder || 'Select an option'}</option>
                    {field.options?.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type}
                    value={formInputs[field.id] || ''}
                    onChange={(e) => handleInputChange(field.id, e.target.value)}
                    placeholder={field.placeholder}
                    className="w-full p-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 placeholder:text-slate-400"
                    required
                  />
                )}
              </div>
            ))}

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2"
            >
              <Award className="w-4 h-4" />
              <span>Submit & Check Automated Grading</span>
            </button>
          </form>

          {/* Submission Feedback Result */}
          {submissionResult && (
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 pt-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div className="space-y-0.5">
                  <div className="text-xs font-bold text-slate-500 uppercase">Assessment Score</div>
                  <div className="text-2xl font-extrabold text-slate-900">
                    {submissionResult.score} / 100
                  </div>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                  submissionResult.score >= 70
                    ? 'bg-emerald-100 text-emerald-800'
                    : 'bg-amber-100 text-amber-800'
                }`}>
                  {submissionResult.score >= 70 ? 'Passed Simulation' : 'Needs Review'}
                </div>
              </div>

              {/* Breakdown */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">Criteria Breakdown:</div>
                {submissionResult.breakdown.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white border border-slate-200 text-xs space-y-1">
                    <div className="flex items-center justify-between font-bold text-slate-800">
                      <span>{item.field}</span>
                      <span className={item.pointsAwarded === item.maxPoints ? 'text-emerald-700' : 'text-slate-500'}>
                        {item.pointsAwarded} / {item.maxPoints} pts
                      </span>
                    </div>
                    <p className="text-slate-600 text-[11px] leading-relaxed">{item.feedback}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
