'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  MessageSquare,
  Sparkles,
  CheckCircle2,
  HelpCircle,
  BookOpen,
  ArrowRight,
  RotateCcw,
  Star,
  Layers,
  ChevronDown,
  ChevronUp,
  Award,
  Send,
  Lightbulb,
  FileText
} from 'lucide-react';

interface QuestionBankItem {
  id: string;
  category: 'General HR & Fresher' | 'Accounting & Finance' | 'Customer Support & Ops' | 'E-Commerce & Tech';
  role: string;
  question: string;
  type: 'Behavioral' | 'Technical' | 'Scenario' | 'Situational';
  simpleAnswer: string;
  starBreakdown: {
    situation: string;
    task: string;
    action: string;
    result: string;
  };
  keyAdvice: string;
}

const interviewQuestions: QuestionBankItem[] = [
  {
    id: 'q-1',
    category: 'General HR & Fresher',
    role: 'All Entry-Level Roles',
    question: 'Tell me about yourself and why you are switching careers into this domain.',
    type: 'Behavioral',
    simpleAnswer: 'I am a dedicated professional who recently completed an intensive 30-day practical curriculum in operational bookkeeping and cloud software. Although I am transitioning from a non-accounting background, I have already completed hands-on simulation projects reconciling real bank feeds and preparing GST invoices in Zoho Books. I am eager to apply my strong attention to detail to help your team manage day-to-day accounts accurately.',
    starBreakdown: {
      situation: 'Transitioning careers without previous corporate experience.',
      task: 'Present transferable skills and practical project experience confidently.',
      action: 'Highlighted practical simulation training, specific software tools mastered, and personal enthusiasm.',
      result: 'Conveyed competence and eagerness to learn without apologizing for being a fresher.'
    },
    keyAdvice: 'Keep it under 90 seconds. Focus 20% on your background, 50% on your practical hands-on projects, and 30% on why you want to work at this specific company.'
  },
  {
    id: 'q-2',
    category: 'Accounting & Finance',
    role: 'Junior Bookkeeper / Accounts Assistant',
    question: 'How do you handle a situation where bank balance and general ledger balance do not match during reconciliation?',
    type: 'Technical',
    simpleAnswer: 'When a bank statement and ledger do not reconcile, I first verify the opening and closing statement balances. Then, I check for timing differences such as unpresented cheques or deposits in transit. Next, I review for transaction recording errors, such as transposed numbers (e.g. typing ₹540 instead of ₹450) or duplicate bill entries. If the discrepancy persists, I isolate the date range and trace each line item individually against payment vouchers until the variance is identified and documented.',
    starBreakdown: {
      situation: 'Monthly bank feed shows an unexplained variance of ₹4,200 against ledger cash account.',
      task: 'Locate and correct the root cause of the difference systematically.',
      action: 'Checked timing differences, filtered for uncredited deposits, and verified invoice amounts line by line.',
      result: 'Discovered a duplicate bank debit entry and notified the manager with supporting documentation.'
    },
    keyAdvice: 'Demonstrate a structured, calm troubleshooting process. Never guess or force balances to match.'
  },
  {
    id: 'q-3',
    category: 'Customer Support & Ops',
    role: 'Customer Chat / Support Specialist',
    question: 'How would you handle an irate customer whose package was delayed and is demanding an immediate refund?',
    type: 'Scenario',
    simpleAnswer: 'I first acknowledge their frustration with empathy: "I completely understand how disappointing this delay is, especially when you were expecting the item on Tuesday." I avoid defensive arguments. Next, I check the live tracking status on Shiprocket to understand where the package currently is. If delayed by courier, I explain the situation transparently and offer a clear resolution—either an immediate courier escalation with guaranteed delivery within 24 hours, or initiating a refund if the delivery window has been breached. I follow up until the issue is fully closed.',
    starBreakdown: {
      situation: 'A customer sent multiple angry messages in chat because their gift order was 3 days late.',
      task: 'De-escalate the tension, investigate the shipment status, and provide a reassuring resolution.',
      action: 'Listened actively, validated their emotion, checked courier logistics, and waived express shipping fees.',
      result: 'Customer appreciated the honest proactive update and left a 5-star support satisfaction rating.'
    },
    keyAdvice: 'Use the HEAT framework: Hear, Empathize, Apologize (for the inconvenience), and Take action.'
  },
  {
    id: 'q-4',
    category: 'E-Commerce & Tech',
    role: 'Shopify / E-Commerce Operations Assistant',
    question: 'If you notice that a product was listed at ₹199 instead of ₹1,999 on Shopify and 15 orders were placed, what do you do?',
    type: 'Situational',
    simpleAnswer: 'I would immediately pause or update the live listing on Shopify to prevent further incorrect orders. Next, I would notify the store operations manager with the list of affected order IDs, total loss amount, and customer details. Rather than silently cancelling, I would draft a courteous communication explaining the genuine pricing glitch, offering a sincere apology and an exclusive 25% discount coupon if they choose to re-order at the correct price, following our company policy.',
    starBreakdown: {
      situation: 'A promotional product was mistakenly published with a missing zero, triggering rapid orders.',
      task: 'Contain the financial loss immediately while preserving customer goodwill and brand reputation.',
      action: 'Updated the price on Shopify within 2 minutes, gathered order data, and escalated to management with a polite draft message.',
      result: 'Prevented further losses of over ₹25,000 and 8 out of 15 customers accepted the discount re-order.'
    },
    keyAdvice: 'Show speed of action (stopping the leak first) combined with honest customer communication.'
  },
  {
    id: 'q-5',
    category: 'E-Commerce & Tech',
    role: 'Junior QA Manual Software Tester',
    question: 'What do you do if a developer rejects your bug report claiming "it works on my machine"?',
    type: 'Technical',
    simpleAnswer: 'I remain respectful and objective. I review my original bug report to ensure I provided exact environment details—such as browser version, operating system, screen resolution, and test account credentials. I then record a clean 15-second screen recording showing the steps to reproduce alongside open Chrome DevTools console logs. I share the video and offer to pair for 5 minutes on their local machine so we can see if environment differences (like cookies, staging cache, or local database seeds) caused the discrepancy.',
    starBreakdown: {
      situation: 'Developer closed a critical checkout button failure ticket as "Cannot Reproduce".',
      task: 'Provide undeniable proof of defect without creating friction with the engineering team.',
      action: 'Provided video evidence, inspected network request payload in DevTools, and demonstrated the issue on a clean browser profile.',
      result: 'Developer realized an unhandled cookie error was occurring in Incognito mode and deployed a fix within an hour.'
    },
    keyAdvice: 'Focus on facts and evidence, not personal conflict. The goal is product quality, not winning an argument.'
  }
];

export default function InterviewPrepPage() {
  const [selectedRole, setSelectedRole] = useState('Junior Bookkeeper / Accounts Assistant');
  const [openQuestionId, setOpenQuestionId] = useState<string>('q-1');
  const [activeTab, setActiveTab] = useState<'bank' | 'simulator'>('bank');

  // Simulator State
  const [simSituation, setSimSituation] = useState('');
  const [simTask, setSimTask] = useState('');
  const [simAction, setSimAction] = useState('');
  const [simResult, setSimResult] = useState('');
  const [simEvaluation, setSimEvaluation] = useState<{
    score: number;
    feedback: string[];
    strengths: string[];
    grade: string;
  } | null>(null);

  const handleEvaluateSimulation = () => {
    const feedback: string[] = [];
    const strengths: string[] = [];
    let score = 0;

    if (simSituation.trim().length > 30) {
      score += 25;
      strengths.push('Clear context and background problem established.');
    } else {
      feedback.push('Situation is too brief. Mention the company, client, or specific project setting.');
    }

    if (simTask.trim().length > 25) {
      score += 25;
      strengths.push('Defined clear responsibility and personal objective.');
    } else {
      feedback.push('Task needs more clarity. What specifically were YOU responsible for accomplishing?');
    }

    if (simAction.trim().length > 50) {
      score += 30;
      strengths.push('Detailed specific tools, software, or logical steps taken.');
    } else {
      feedback.push('Action is the most important part. Name the exact software (Excel, Zoho, Jira) and exact steps you executed.');
    }

    if (simResult.trim().length > 20) {
      score += 20;
      strengths.push('Quantified outcome or positive conclusion included.');
    } else {
      feedback.push('Result should ideally mention a measurable outcome (e.g. 100% reconciled, saved 2 hours, 5-star feedback).');
    }

    let grade = 'Needs Work';
    if (score >= 90) grade = 'Outstanding STAR Response (Hire Ready)';
    else if (score >= 70) grade = 'Solid Professional Answer';
    else if (score >= 50) grade = 'Fair (Add More Specifics)';

    setSimEvaluation({
      score,
      feedback,
      strengths,
      grade
    });
  };

  const handleResetSim = () => {
    setSimSituation('');
    setSimTask('');
    setSimAction('');
    setSimResult('');
    setSimEvaluation(null);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-100">
          <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
          <span>Interactive Interview Preparation Centre</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Master Entry-Level Interviews with the STAR Method
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
          Learn how to turn your 30-day simulation deliverables into compelling, confident interview stories. Practice structured responses and inspect verified model answers in clear, professional English.
        </p>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-3 pt-2">
          <button
            onClick={() => setActiveTab('bank')}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all ${
              activeTab === 'bank'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'border border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            Question Bank & Model Answers
          </button>
          <button
            onClick={() => setActiveTab('simulator')}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all flex items-center gap-1.5 ${
              activeTab === 'simulator'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'border border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
            <span>Interactive STAR Response Practice</span>
          </button>
        </div>
      </div>

      {/* Mode 1: Question Bank */}
      {activeTab === 'bank' && (
        <div className="space-y-6">
          {/* STAR Framework Guide Banner */}
          <div className="bg-gradient-to-r from-emerald-900 to-teal-900 rounded-3xl p-6 sm:p-8 text-white space-y-4 shadow-sm">
            <h2 className="text-xl font-extrabold">The STAR Formula for Fresher Interviews</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3 rounded-2xl bg-white/10 border border-white/10 space-y-1">
                <span className="font-extrabold text-emerald-300 block text-sm">S - Situation</span>
                <p className="text-emerald-100 text-[11px] leading-relaxed">Set the scene. Describe the specific challenge or simulation project.</p>
              </div>
              <div className="p-3 rounded-2xl bg-white/10 border border-white/10 space-y-1">
                <span className="font-extrabold text-emerald-300 block text-sm">T - Task</span>
                <p className="text-emerald-100 text-[11px] leading-relaxed">State your personal responsibility. What needed to be done?</p>
              </div>
              <div className="p-3 rounded-2xl bg-white/10 border border-white/10 space-y-1">
                <span className="font-extrabold text-emerald-300 block text-sm">A - Action</span>
                <p className="text-emerald-100 text-[11px] leading-relaxed">Explain the exact tools, software, and methods YOU executed.</p>
              </div>
              <div className="p-3 rounded-2xl bg-white/10 border border-white/10 space-y-1">
                <span className="font-extrabold text-emerald-300 block text-sm">R - Result</span>
                <p className="text-emerald-100 text-[11px] leading-relaxed">Share the positive outcome or learning lesson with numbers.</p>
              </div>
            </div>
          </div>

          {/* Questions Accordion */}
          <div className="space-y-4">
            {interviewQuestions.map((q) => {
              const isOpen = openQuestionId === q.id;
              return (
                <div
                  key={q.id}
                  className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => setOpenQuestionId(isOpen ? '' : q.id)}
                    className="w-full p-6 text-left flex items-start justify-between gap-4 hover:bg-slate-50/50 transition-colors"
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 flex-wrap text-[11px]">
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 font-bold border border-emerald-100">
                          {q.category}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-semibold">
                          {q.role}
                        </span>
                        <span className="text-slate-400">&bull; {q.type}</span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 leading-snug">
                        {q.question}
                      </h3>
                    </div>

                    <div className="p-2 rounded-xl bg-slate-100 text-slate-600 shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="p-6 pt-0 border-t border-slate-100 space-y-5 text-xs sm:text-sm">
                      {/* Simple English Model Answer */}
                      <div className="space-y-2 pt-4">
                        <span className="font-bold text-xs uppercase tracking-wider text-slate-900 block">
                          Simple English Model Answer:
                        </span>
                        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 leading-relaxed font-medium italic">
                          "{q.simpleAnswer}"
                        </div>
                      </div>

                      {/* STAR Breakdown */}
                      <div className="space-y-2">
                        <span className="font-bold text-xs uppercase tracking-wider text-slate-900 block">
                          How this Answer Follows STAR:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                          <div className="p-3 rounded-xl bg-emerald-50/50 border border-emerald-100 space-y-0.5">
                            <strong className="text-emerald-900 block">Situation:</strong>
                            <p className="text-emerald-800">{q.starBreakdown.situation}</p>
                          </div>
                          <div className="p-3 rounded-xl bg-blue-50/50 border border-blue-100 space-y-0.5">
                            <strong className="text-blue-900 block">Task:</strong>
                            <p className="text-blue-800">{q.starBreakdown.task}</p>
                          </div>
                          <div className="p-3 rounded-xl bg-purple-50/50 border border-purple-100 space-y-0.5">
                            <strong className="text-purple-900 block">Action:</strong>
                            <p className="text-purple-800">{q.starBreakdown.action}</p>
                          </div>
                          <div className="p-3 rounded-xl bg-amber-50/50 border border-amber-100 space-y-0.5">
                            <strong className="text-amber-900 block">Result:</strong>
                            <p className="text-amber-800">{q.starBreakdown.result}</p>
                          </div>
                        </div>
                      </div>

                      {/* Key Advice */}
                      <div className="p-3.5 rounded-xl bg-slate-100/80 text-xs text-slate-700 flex items-start gap-2.5">
                        <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-slate-900">Interviewer Insight: </strong>
                          {q.keyAdvice}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Mode 2: Interactive STAR Simulator */}
      {activeTab === 'simulator' && (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-100">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Interactive Response Builder</span>
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900">
              Practice Your Behavioral Interview Story
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Structure any workplace story or simulation project into the 4 STAR components. Get instant feedback on completeness and vocabulary.
            </p>
          </div>

          <div className="space-y-4 text-xs sm:text-sm">
            {/* Situation */}
            <div className="space-y-1.5">
              <label className="font-bold text-slate-800 flex items-center justify-between">
                <span>1. Situation (Where were you? What was the context?)</span>
                <span className="text-[11px] font-normal text-slate-400">Aim for 1-2 sentences</span>
              </label>
              <textarea
                rows={2}
                value={simSituation}
                onChange={(e) => setSimSituation(e.target.value)}
                placeholder="Example: During my practical simulation for Malabar Logistics, I was assigned to audit a month of messy supplier invoices..."
                className="w-full p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-xs"
              />
            </div>

            {/* Task */}
            <div className="space-y-1.5">
              <label className="font-bold text-slate-800 flex items-center justify-between">
                <span>2. Task (What was your specific goal or responsibility?)</span>
                <span className="text-[11px] font-normal text-slate-400">What needed fixing?</span>
              </label>
              <textarea
                rows={2}
                value={simTask}
                onChange={(e) => setSimTask(e.target.value)}
                placeholder="Example: My task was to identify duplicate bills, reconcile ₹1,50,000 in bank charges, and file a clean monthly ledger."
                className="w-full p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-xs"
              />
            </div>

            {/* Action */}
            <div className="space-y-1.5">
              <label className="font-bold text-slate-800 flex items-center justify-between">
                <span>3. Action (What specific software, steps, or methods did YOU execute?)</span>
                <span className="text-[11px] font-normal text-slate-400">Core 50% of your answer</span>
              </label>
              <textarea
                rows={3}
                value={simAction}
                onChange={(e) => setSimAction(e.target.value)}
                placeholder="Example: I imported the CSV bank export into Google Sheets, applied conditional formatting to isolate duplicate invoice numbers, and verified each discrepancy in Zoho Books..."
                className="w-full p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-xs"
              />
            </div>

            {/* Result */}
            <div className="space-y-1.5">
              <label className="font-bold text-slate-800 flex items-center justify-between">
                <span>4. Result (What was the measurable outcome or benefit?)</span>
                <span className="text-[11px] font-normal text-slate-400">Numbers, savings, feedback</span>
              </label>
              <textarea
                rows={2}
                value={simResult}
                onChange={(e) => setSimResult(e.target.value)}
                placeholder="Example: I caught ₹12,500 in duplicate supplier charges and reconciled the entire ledger with 100% accuracy ahead of the deadline."
                className="w-full p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-xs"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={handleEvaluateSimulation}
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Evaluate My Response</span>
            </button>
            <button
              onClick={handleResetSim}
              className="px-4 py-3 rounded-xl border border-slate-200 text-slate-700 font-semibold text-xs hover:bg-slate-50 transition-colors"
            >
              Reset
            </button>
          </div>

          {/* Evaluation Results Box */}
          {simEvaluation && (
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Evaluation Grade</span>
                  <h3 className="text-lg font-extrabold text-slate-900">{simEvaluation.grade}</h3>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white font-extrabold flex items-center justify-center text-base">
                  {simEvaluation.score}%
                </div>
              </div>

              {simEvaluation.strengths.length > 0 && (
                <div className="space-y-1 text-xs">
                  <span className="font-bold text-emerald-900 block">Strengths Detected:</span>
                  <ul className="space-y-1 text-emerald-800">
                    {simEvaluation.strengths.map((s, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {simEvaluation.feedback.length > 0 && (
                <div className="space-y-1 text-xs">
                  <span className="font-bold text-amber-900 block">Areas for Improvement:</span>
                  <ul className="space-y-1 text-amber-800">
                    {simEvaluation.feedback.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-amber-600 font-bold">&bull;</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
