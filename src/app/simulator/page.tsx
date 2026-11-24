'use client';

import React, { useState, useEffect } from 'react';
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
  ChevronRight,
  Calculator,
  FileText,
  LifeBuoy,
  Users,
  Package,
  Mail,
  Kanban,
  Download,
  Filter,
  Search,
  ExternalLink,
  ShieldCheck,
  Check,
  Building2,
  DollarSign,
  TrendingUp,
  FileCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { simulationTasks } from '@/data/simulator';
import { simulatedWorkplaceProjects, WorkplaceProjectDossier } from '@/data/simulated-projects';
import { WorkplaceSimulatorTask } from '@/types';
import { saveSimulatorScore, getSimulatorScores, addPortfolioProject } from '@/lib/storage';

// Interactive Tools
import AccountingStatementTool from '@/components/simulator/AccountingStatementTool';
import InvoiceGeneratorTool from '@/components/simulator/InvoiceGeneratorTool';
import SpreadsheetTool from '@/components/simulator/SpreadsheetTool';
import HelpdeskConsoleTool from '@/components/simulator/HelpdeskConsoleTool';
import CrmConsoleTool from '@/components/simulator/CrmConsoleTool';
import InventoryTrackerTool from '@/components/simulator/InventoryTrackerTool';
import EmailInterfaceTool from '@/components/simulator/EmailInterfaceTool';
import TaskDashboardTool from '@/components/simulator/TaskDashboardTool';

export default function SimulatorPage() {
  const [activeTab, setActiveTab] = useState<'simulations' | 'tools' | 'projects'>('simulations');
  const [selectedDept, setSelectedDept] = useState<string>('All');

  // Simulation State
  const [selectedTaskId, setSelectedTaskId] = useState<string>(simulationTasks[0].id);
  const [formInputs, setFormInputs] = useState<Record<string, any>>({});
  const [submissionResult, setSubmissionResult] = useState<{
    score: number;
    breakdown: Array<{ field: string; pointsAwarded: number; maxPoints: number; feedback: string }>;
  } | null>(null);
  const [completedScores, setCompletedScores] = useState<Record<string, any>>({});

  // Active Tool Sub-tab
  const [activeToolId, setActiveToolId] = useState<string>('accounting');

  // Project Dossiers State
  const [projectSearch, setProjectSearch] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<WorkplaceProjectDossier | null>(null);
  const [addedProjectIds, setAddedProjectIds] = useState<string[]>([]);

  useEffect(() => {
    setCompletedScores(getSimulatorScores());
  }, []);

  const activeTask = simulationTasks.find(t => t.id === selectedTaskId) || simulationTasks[0];

  const filteredTasks = selectedDept === 'All'
    ? simulationTasks
    : simulationTasks.filter(t => t.department.toLowerCase() === selectedDept.toLowerCase());

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
            feedback = `Correct! Exact match with benchmark (${targetVal}).`;
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
        if (userVal && String(userVal).trim().length > 25) {
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

    // Persist score in localStorage
    saveSimulatorScore(activeTask.id, totalScore, activeTask.department, activeTask.title);
    setCompletedScores(getSimulatorScores());

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

  const handleDownloadDataset = (fileName: string, content: string, type: string) => {
    const mime = type === 'csv' ? 'text/csv' : 'application/json';
    const blob = new Blob([content], { type: `${mime};charset=utf-8;` });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleImportToPortfolio = (project: WorkplaceProjectDossier) => {
    addPortfolioProject({
      title: project.title,
      category: `${project.department} Practice Project`,
      department: project.department,
      tools: project.requiredTools.join(', '),
      description: `${project.brief} Completed 100% verified deliverable with sample data calculations for ${project.company.name}.`,
      evidenceUrl: 'https://github.com/career-launchpad/verified-projects',
      isVerifiedWorkplace: true
    });
    setAddedProjectIds([...addedProjectIds, project.id]);
  };

  const departments = ['All', 'Accounting', 'E-commerce', 'Virtual Office', 'Customer Support', 'Design Studio', 'Technology'];

  const filteredProjects = simulatedWorkplaceProjects.filter(p => {
    const matchesDept = selectedDept === 'All' || p.department.toLowerCase() === selectedDept.toLowerCase();
    const matchesSearch = !projectSearch.trim() ||
      p.title.toLowerCase().includes(projectSearch.toLowerCase()) ||
      p.company.name.toLowerCase().includes(projectSearch.toLowerCase()) ||
      p.requiredTools.some(t => t.toLowerCase().includes(projectSearch.toLowerCase()));
    return matchesDept && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Top Hero Card */}
      <div className="bg-slate-900 rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden shadow-xl border border-slate-800">
        <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />

        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Workplace Experience</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Virtual Workplace & Practical Simulator
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Practice realistic employee responsibilities across 6 corporate departments. Audit financial reconciliations, triage urgent support tickets, manage e-commerce inventories, and author professional deliverables with instant objective evaluation.
          </p>

          {/* Quick Metrics */}
          <div className="flex flex-wrap gap-4 pt-2 text-xs text-slate-300">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span><strong>11</strong> Interactive Simulations</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700">
              <Laptop className="w-4 h-4 text-teal-400" />
              <span><strong>8</strong> Browser Training Tools</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700">
              <FileCheck className="w-4 h-4 text-blue-400" />
              <span><strong>30</strong> Downloadable Project Dossiers</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mode Switcher Tabs & Department Filters */}
      <div className="space-y-4 border-b border-slate-200 pb-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-2xl w-fit">
            <button
              onClick={() => setActiveTab('simulations')}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'simulations'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Department Simulations ({simulationTasks.length})
            </button>
            <button
              onClick={() => setActiveTab('tools')}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'tools'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Training Simulators (8)
            </button>
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'projects'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Project Dossiers (30)
            </button>
          </div>

          <div className="text-xs text-slate-500 font-medium">
            {activeTab === 'simulations' && <span>Filter by department:</span>}
            {activeTab === 'tools' && <span>8 Interactive educational training consoles</span>}
            {activeTab === 'projects' && <span>Filter by department:</span>}
          </div>
        </div>

        {/* Department Filter Pills (shown for simulations and projects) */}
        {activeTab !== 'tools' && (
          <div className="flex flex-wrap items-center gap-2 pt-1">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedDept === dept
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: DEPARTMENT SIMULATIONS */}
      {/* ========================================================================= */}
      {activeTab === 'simulations' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Tasks Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-4 lg:max-h-[860px] lg:overflow-y-auto pr-1">
            <div className="flex items-center justify-between px-1">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Department Workplace Scenarios ({filteredTasks.length})
              </span>
            </div>

            <div className="space-y-3">
              {filteredTasks.map((task) => {
                const isSelected = task.id === activeTask.id;
                const pastScore = completedScores[task.id]?.score;

                return (
                  <div
                    key={task.id}
                    onClick={() => {
                      setSelectedTaskId(task.id);
                      setFormInputs({});
                      setSubmissionResult(null);
                    }}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer text-left ${
                      isSelected
                        ? 'border-emerald-600 bg-white shadow-md ring-2 ring-emerald-600/20'
                        : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-xs'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700">
                        {task.department}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <span className="flex items-center gap-1 text-[11px] text-slate-400 font-medium">
                          <Clock className="w-3 h-3" />
                          <span>{task.estimatedMinutes}m</span>
                        </span>
                        {pastScore !== undefined && (
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                            pastScore >= 80 ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                          }`}>
                            {pastScore}%
                          </span>
                        )}
                      </div>
                    </div>

                    <h3 className="font-bold text-sm text-slate-900 leading-snug mb-1">
                      {task.title}
                    </h3>

                    <p className="text-xs text-slate-500 mb-2 font-medium">
                      Company: {task.companyName}
                    </p>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {task.brief}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Active Simulation Workplace Pane (8 cols) */}
          <div className="lg:col-span-8 space-y-6 lg:sticky lg:top-20">
            {/* Simulation Header & Brief */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-100">
                      {activeTask.department} Department
                    </span>
                    <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{activeTask.estimatedMinutes} Minutes</span>
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    {activeTask.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                    Assigned Workplace: <strong className="text-slate-800">{activeTask.companyName}</strong>
                  </p>
                </div>

                {completedScores[activeTask.id] && (
                  <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold shrink-0">
                    <Award className="w-4 h-4 text-emerald-600" />
                    <span>Best Score: {completedScores[activeTask.id].score}%</span>
                  </div>
                )}
              </div>

              {/* Instructions List */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Workplace Instructions & Procedure:
                </h4>
                <div className="space-y-2">
                  {activeTask.instructions.map((inst, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed">{inst}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dual-Pane Ledger (Inspired by Docyt reference for Accounting) */}
              {Boolean((activeTask.inputData as any).ledgerTransactions) && (
                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-emerald-600" />
                      <span>ICICI Corporate Ledger Transaction Feed (DocytBot Reconciliation)</span>
                    </h4>
                    <span className="text-[11px] font-semibold text-slate-500">
                      Showing 6 verified transactions
                    </span>
                  </div>

                  <div className="overflow-x-auto rounded-2xl border border-slate-200">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-slate-50 text-slate-600 font-bold border-b border-slate-200">
                        <tr>
                          <th className="py-2.5 px-3">Date</th>
                          <th className="py-2.5 px-3">Vendor / Entity</th>
                          <th className="py-2.5 px-3">Category</th>
                          <th className="py-2.5 px-3">Account</th>
                          <th className="py-2.5 px-3 text-right">Amount (₹)</th>
                          <th className="py-2.5 px-3 text-center">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                        {((activeTask.inputData as any).ledgerTransactions as any[]).map((tx) => (
                          <tr key={tx.id} className="hover:bg-slate-50/70">
                            <td className="py-2.5 px-3 text-slate-500 font-mono">{tx.date}</td>
                            <td className="py-2.5 px-3 font-bold text-slate-900">{tx.vendor}</td>
                            <td className="py-2.5 px-3 text-slate-600">{tx.category}</td>
                            <td className="py-2.5 px-3 text-slate-500 font-mono text-[11px]">{tx.account}</td>
                            <td className={`py-2.5 px-3 text-right font-bold ${tx.amount < 0 ? 'text-slate-900' : 'text-emerald-700'}`}>
                              {tx.amount < 0 ? `-₹${Math.abs(tx.amount).toLocaleString('en-IN')}` : `+₹${tx.amount.toLocaleString('en-IN')}`}
                            </td>
                            <td className="py-2.5 px-3 text-center">
                              <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                tx.status === 'Matched' ? 'bg-emerald-100 text-emerald-800' :
                                tx.status === 'Uncleared' ? 'bg-amber-100 text-amber-800' : 'bg-blue-100 text-blue-800'
                              }`}>
                                {tx.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Raw Input Data Box (if not table) */}
              {!(activeTask.inputData as any).ledgerTransactions && (
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <span className="text-xs font-bold text-slate-700 block uppercase tracking-wider">
                    Workplace Scenario Telemetry:
                  </span>
                  <pre className="text-xs font-mono text-slate-800 bg-white p-3 rounded-xl border border-slate-200 overflow-x-auto">
                    {JSON.stringify(activeTask.inputData, null, 2)}
                  </pre>
                </div>
              )}

              {/* Interactive Submission Form */}
              <form onSubmit={handleGradeTask} className="space-y-4 pt-4 border-t border-slate-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Deliverable Submission & Validation Entry:
                </h4>

                <div className="grid grid-cols-1 gap-4">
                  {activeTask.formFields.map((field) => (
                    <div key={field.id} className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">
                        {field.label}
                      </label>

                      {field.type === 'select' ? (
                        <select
                          required
                          value={formInputs[field.id] || ''}
                          onChange={(e) => handleInputChange(field.id, e.target.value)}
                          className="w-full text-xs sm:text-sm font-medium text-slate-900 bg-white border border-slate-300 rounded-xl px-4 py-2.5 focus:outline-none focus:border-emerald-600"
                        >
                          <option value="">{field.placeholder || 'Select option...'}</option>
                          {field.options?.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      ) : field.type === 'textarea' ? (
                        <textarea
                          required
                          rows={3}
                          value={formInputs[field.id] || ''}
                          onChange={(e) => handleInputChange(field.id, e.target.value)}
                          placeholder={field.placeholder}
                          className="w-full text-xs sm:text-sm font-medium text-slate-900 bg-white border border-slate-300 rounded-xl p-3.5 focus:outline-none focus:border-emerald-600 leading-relaxed"
                        />
                      ) : (
                        <input
                          required
                          type={field.type}
                          value={formInputs[field.id] || ''}
                          onChange={(e) => handleInputChange(field.id, e.target.value)}
                          placeholder={field.placeholder}
                          className="w-full text-xs sm:text-sm font-medium text-slate-900 bg-white border border-slate-300 rounded-xl px-4 py-2.5 focus:outline-none focus:border-emerald-600"
                        />
                      )}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-3">
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold transition-all shadow-md flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Validate & Grade Simulation</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleResetTask}
                    className="px-4 py-3 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 text-xs sm:text-sm font-semibold transition-colors flex items-center gap-1.5"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Clear Form</span>
                  </button>
                </div>
              </form>

              {/* Rubric Evaluation Results Card */}
              {submissionResult && (
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <div className="flex items-center gap-2">
                      <Award className={`w-6 h-6 ${submissionResult.score >= 70 ? 'text-emerald-600' : 'text-amber-600'}`} />
                      <h3 className="text-base font-bold text-slate-900">
                        Objective Assessment Score: {submissionResult.score} / 100
                      </h3>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-extrabold ${
                      submissionResult.score >= 80 ? 'bg-emerald-100 text-emerald-800' :
                      submissionResult.score >= 60 ? 'bg-amber-100 text-amber-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {submissionResult.score >= 80 ? 'Verified Workplace Ready' :
                       submissionResult.score >= 60 ? 'Passing with Revisions' : 'Needs Practice'}
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    {submissionResult.breakdown.map((item, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-white border border-slate-200 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="space-y-0.5">
                          <span className="font-bold text-slate-800 block capitalize">
                            {item.field.replace(/([A-Z])/g, ' $1')}
                          </span>
                          <p className="text-slate-600">{item.feedback}</p>
                        </div>
                        <span className="font-mono font-bold text-xs shrink-0 text-slate-900">
                          {item.pointsAwarded} / {item.maxPoints} pts
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: TRAINING SIMULATORS (7 FUNCTIONAL BROWSER TOOLS) */}
      {/* ========================================================================= */}
      {activeTab === 'tools' && (
        <div className="space-y-6">
          {/* Sub-tabs for 8 Tools */}
          <div className="flex flex-wrap items-center gap-2 pb-2">
            {[
              { id: 'accounting', label: 'Accounting Statements', icon: Calculator },
              { id: 'invoice', label: 'Invoice Generator', icon: FileText },
              { id: 'spreadsheet', label: 'Spreadsheet Grid', icon: FileCheck },
              { id: 'helpdesk', label: 'Helpdesk Console', icon: LifeBuoy },
              { id: 'crm', label: 'CRM Contacts', icon: Users },
              { id: 'inventory', label: 'Inventory Tracker', icon: Package },
              { id: 'email', label: 'Email Interface', icon: Mail },
              { id: 'kanban', label: 'Task Dashboard', icon: Kanban }
            ].map(tool => {
              const Icon = tool.icon;
              const isSelected = activeToolId === tool.id;

              return (
                <button
                  key={tool.id}
                  onClick={() => setActiveToolId(tool.id)}
                  className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
                    isSelected
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tool.label}</span>
                </button>
              );
            })}
          </div>

          {/* Render Active Tool */}
          {activeToolId === 'accounting' && <AccountingStatementTool />}
          {activeToolId === 'invoice' && <InvoiceGeneratorTool />}
          {activeToolId === 'spreadsheet' && <SpreadsheetTool />}
          {activeToolId === 'helpdesk' && <HelpdeskConsoleTool />}
          {activeToolId === 'crm' && <CrmConsoleTool />}
          {activeToolId === 'inventory' && <InventoryTrackerTool />}
          {activeToolId === 'email' && <EmailInterfaceTool />}
          {activeToolId === 'kanban' && <TaskDashboardTool />}
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: PROJECT DOSSIERS (30 WORKPLACE PROJECTS) */}
      {/* ========================================================================= */}
      {activeTab === 'projects' && (
        <div className="space-y-6">
          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
            <div className="relative w-full sm:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                value={projectSearch}
                onChange={(e) => setProjectSearch(e.target.value)}
                placeholder="Search 30 projects by title, tool, company..."
                className="w-full bg-white border border-slate-300 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-emerald-600"
              />
            </div>
            <span className="text-xs text-slate-500 font-medium self-end sm:self-center">
              Showing {filteredProjects.length} of {simulatedWorkplaceProjects.length} workplace dossiers
            </span>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((proj) => {
              const isAdded = addedProjectIds.includes(proj.id);

              return (
                <div
                  key={proj.id}
                  className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700">
                        {proj.department}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-400">
                        {proj.estimatedHours} Hours
                      </span>
                    </div>

                    <h3 className="font-bold text-base text-slate-900 leading-snug">
                      {proj.title}
                    </h3>

                    <p className="text-xs text-emerald-700 font-semibold">
                      Client: {proj.company.name} ({proj.company.location})
                    </p>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {proj.brief}
                    </p>

                    {/* Tools Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {proj.requiredTools.map(t => (
                        <span key={t} className="text-[10px] px-2 py-0.5 rounded-md bg-slate-50 text-slate-600 border border-slate-200">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions & Dataset Download */}
                  <div className="pt-4 border-t border-slate-100 space-y-2">
                    {proj.sampleDataFiles.length > 0 && (
                      <button
                        onClick={() => handleDownloadDataset(
                          proj.sampleDataFiles[0].name,
                          proj.sampleDataFiles[0].downloadContent,
                          proj.sampleDataFiles[0].type
                        )}
                        className="w-full py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Download Dataset ({proj.sampleDataFiles[0].name})</span>
                      </button>
                    )}

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setSelectedProject(proj)}
                        className="flex-1 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold transition-colors text-center"
                      >
                        View Full Dossier
                      </button>

                      <button
                        onClick={() => handleImportToPortfolio(proj)}
                        disabled={isAdded}
                        className={`px-3 py-2 rounded-xl text-xs font-bold transition-colors ${
                          isAdded
                            ? 'bg-emerald-600 text-white'
                            : 'bg-slate-900 hover:bg-slate-800 text-white'
                        }`}
                        title="Add to My Portfolio Builder"
                      >
                        {isAdded ? <Check className="w-4 h-4" /> : '+ Portfolio'}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Project Modal Dossier View */}
          {selectedProject && (
            <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
              <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl">
                <div className="flex items-start justify-between pb-4 border-b border-slate-100">
                  <div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700">
                      {selectedProject.department}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                      {selectedProject.title}
                    </h2>
                    <p className="text-xs text-slate-500">
                      Fictional Client: <strong className="text-slate-800">{selectedProject.company.name}</strong> • Contact: {selectedProject.company.contactPerson} ({selectedProject.company.role})
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600"
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <div>
                    <h4 className="font-bold text-slate-900 uppercase text-xs tracking-wider mb-1">Company Background:</h4>
                    <p>{selectedProject.company.background}</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 uppercase text-xs tracking-wider mb-1">Project Brief:</h4>
                    <p>{selectedProject.brief}</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 uppercase text-xs tracking-wider mb-1">Learning Objectives:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {selectedProject.learningObjectives.map((obj, i) => (
                        <li key={i}>{obj}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 uppercase text-xs tracking-wider mb-1">Evaluation Rubric:</h4>
                    <div className="space-y-2">
                      {selectedProject.rubric.map((r, i) => (
                        <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex justify-between gap-2">
                          <span>{r.criterion}: <span className="text-slate-500">{r.description}</span></span>
                          <span className="font-bold font-mono shrink-0">{r.points} pts</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 uppercase text-xs tracking-wider mb-1">Model Solution Walkthrough:</h4>
                    <p className="text-slate-600 mb-2">{selectedProject.solutionWalkthrough.overview}</p>
                    <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100 font-mono text-xs text-emerald-900">
                      {selectedProject.solutionWalkthrough.sampleOutputSnippet}
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs"
                  >
                    Close Dossier
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
