'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  GraduationCap,
  BookOpen,
  Briefcase,
  FileText,
  Laptop,
  CheckCircle2,
  TrendingUp,
  Award,
  ArrowRight,
  Sparkles,
  Calendar as CalendarIcon,
  Clock,
  Star,
  CheckSquare,
  Square,
  Flame,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Target,
  ExternalLink
} from 'lucide-react';
import { allCourses } from '@/data/courses';
import { allCareers } from '@/data/careers';
import {
  getSavedCareers,
  getApplications,
  getCourseProgress,
  getSimulatorScores,
  getPortfolioProjects,
  CourseProgressRecord,
  SimulatorScoreRecord
} from '@/lib/storage';
import { calculateCareerReadiness, CareerReadinessReport } from '@/lib/readiness-assessment';

export default function DashboardPage() {
  const [userName, setUserName] = useState<string>('Arjun');
  const [savedCareerSlugs, setSavedCareerSlugs] = useState<string[]>([]);
  const [applicationsCount, setApplicationsCount] = useState<number>(0);
  const [courseStats, setCourseStats] = useState<Array<{
    course: typeof allCourses[0];
    completedCount: number;
    percent: number;
  }>>([]);
  const [simScores, setSimScores] = useState<Record<string, SimulatorScoreRecord>>({});
  const [readiness, setReadiness] = useState<CareerReadinessReport | null>(null);

  // Time / Chart Mode
  const [chartMode, setChartMode] = useState<'monthly' | 'weekly'>('monthly');

  // Interactive Submissions / Assignments Checklist
  const [submissions, setSubmissions] = useState([
    { id: 'sub-1', title: 'Monthly Corporate Bank Reconciliation', role: 'Accounts Assistant', dueDate: 'Today, 6:00 PM', difficulty: 'Beginner', isDone: true, simulatorLink: '/simulator' },
    { id: 'sub-2', title: 'Shopify 50-Item Catalog SKU Standardization', role: 'E-commerce Specialist', dueDate: 'Tomorrow', difficulty: 'Beginner', isDone: true, simulatorLink: '/simulator' },
    { id: 'sub-3', title: 'De-escalate Anniversary Gift Courier Ticket #1042', role: 'Customer Care Lead', dueDate: 'Nov 27, 2026', difficulty: 'Medium', isDone: false, simulatorLink: '/simulator' },
    { id: 'sub-4', title: '5-Slide Instagram Educational Carousel Template', role: 'Digital Designer', dueDate: 'Nov 29, 2026', difficulty: 'Medium', isDone: false, simulatorLink: '/simulator' }
  ]);

  useEffect(() => {
    setSavedCareerSlugs(getSavedCareers());
    setApplicationsCount(getApplications().length);
    setSimScores(getSimulatorScores());
    setReadiness(calculateCareerReadiness());

    const stats = allCourses.map((c) => {
      const p = getCourseProgress(c.id);
      const totalLessons = c.modules.flatMap(m => m.lessons).length || 20;
      const count = p.completedLessonIds.length;
      return {
        course: c,
        completedCount: count,
        percent: Math.min(100, Math.round((count / totalLessons) * 100))
      };
    });
    setCourseStats(stats);
  }, []);

  const toggleSubmission = (id: string) => {
    setSubmissions(submissions.map(s => s.id === id ? { ...s, isDone: !s.isDone } : s));
  };

  // Monthly activity simulation bar heights
  const monthlyData = [
    { month: 'Dec', value: 45, count: 9 },
    { month: 'Jan', value: 65, count: 14 },
    { month: 'Feb', value: 50, count: 11 },
    { month: 'Mar', value: 80, count: 18 },
    { month: 'Apr', value: 35, count: 7 },
    { month: 'May', value: 70, count: 15 },
    { month: 'Jun', value: 90, count: 22 },
    { month: 'Jul', value: 40, count: 8 },
    { month: 'Aug', value: 75, count: 16 },
    { month: 'Sep', value: 85, count: 19 },
    { month: 'Oct', value: 60, count: 13 },
    { month: 'Nov', value: 95, count: 24 }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* ========================================================================= */}
      {/* 1. TOP HERO WELCOME BANNER (Inspired by reference "Welcome back, Anna") */}
      {/* ========================================================================= */}
      <div className="bg-slate-900 rounded-3xl p-6 sm:p-10 text-white relative overflow-hidden shadow-xl border border-slate-800">
        <div className="absolute right-0 top-0 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
          {/* Greeting */}
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
              <Flame className="w-4 h-4 text-amber-400" />
              <span>7 Day Active Learning Streak</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Welcome back, {userName}
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Your progress this week is exceptional! You have completed 3 practical workplace simulations and 14 lessons. Keep going to reach your Career Ready certification badge.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/courses/bookkeeping-invoicing"
                className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs sm:text-sm font-extrabold transition-all shadow-md inline-flex items-center gap-2"
              >
                <span>Resume Daily Lesson</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/simulator"
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold transition-all border border-slate-700 inline-flex items-center gap-2"
              >
                <Laptop className="w-4 h-4 text-emerald-400" />
                <span>Open Simulator</span>
              </Link>
            </div>
          </div>

          {/* Mini Course Cards (Directly matching reference design) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 shrink-0">
            {[
              { title: 'Basic Bookkeeping', progress: '78%', lessons: '30 lessons', color: 'from-emerald-500 to-teal-600', icon: '📊' },
              { title: 'Virtual Assistance', progress: '45%', lessons: '30 lessons', color: 'from-blue-500 to-indigo-600', icon: '💼' },
              { title: 'Excel & Data Ops', progress: '25%', lessons: '30 lessons', color: 'from-amber-500 to-orange-600', icon: '📈' }
            ].map((c, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3 min-w-[170px]"
              >
                <div className="text-2xl">{c.icon}</div>
                <div>
                  <h4 className="font-bold text-xs text-white leading-tight">{c.title}</h4>
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mt-1">
                    <span>Progress</span>
                    <span className="font-bold text-emerald-400">{c.progress}</span>
                  </div>
                </div>
                <div className="w-full h-1 rounded-full bg-slate-700 overflow-hidden">
                  <div className={`h-full bg-gradient-to-r ${c.color}`} style={{ width: c.progress }} />
                </div>
                <span className="text-[10px] text-slate-400 block">{c.lessons}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. CAREER READINESS ASSESSMENT REPORT (COMPETENCY SUMMARY) */}
      {/* ========================================================================= */}
      {readiness && (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-100 mb-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified Competency Assessment</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Career Readiness Diagnostic Score
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Objective multi-dimensional competency analysis across theory, simulator practicals, tools, and portfolio deliverables.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <div className="text-right">
                <span className="text-xs text-slate-400 font-medium block">Overall Readiness</span>
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {readiness.overallScore}<span className="text-emerald-600 text-lg">/100</span>
                </span>
              </div>
              <span className={`px-3 py-1.5 rounded-xl text-xs font-bold border ${readiness.tierColor}`}>
                {readiness.tier}
              </span>
            </div>
          </div>

          {/* 5 Competency Bars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {Object.values(readiness.dimensions).map((dim, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-slate-900">{dim.score}%</span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                    dim.score >= 75 ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                  }`}>
                    {dim.status}
                  </span>
                </div>

                <div className="w-full h-1.5 rounded-full bg-slate-200 overflow-hidden">
                  <div
                    className={`h-full ${dim.score >= 75 ? 'bg-emerald-600' : 'bg-amber-500'}`}
                    style={{ width: `${dim.score}%` }}
                  />
                </div>

                <h4 className="text-xs font-bold text-slate-800 leading-snug">
                  {dim.name}
                </h4>

                <p className="text-[11px] text-slate-500 leading-relaxed line-clamp-2">
                  {dim.feedback}
                </p>
              </div>
            ))}
          </div>

          {/* Actionable Next Steps & Disclaimer */}
          <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 text-xs text-slate-700 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-emerald-700 shrink-0" />
              <span><strong>Next Step:</strong> {readiness.priorityActionItems[0]}</span>
            </div>
            <Link
              href="/portfolio-builder"
              className="font-bold text-emerald-800 hover:text-emerald-950 inline-flex items-center gap-1 shrink-0"
            >
              <span>Update Portfolio &rarr;</span>
            </Link>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. MIDDLE SECTION: TASK COMPLETED ACTIVITY CHART + SKILL RANK WIDGET */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Task Completed Chart (8 cols, matching orange pill design) */}
        <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                Workplace Tasks Completed
              </h3>
              <p className="text-xs text-slate-500">
                Daily and monthly practice frequency across simulations and lessons.
              </p>
            </div>

            <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-100 text-xs font-semibold">
              <button
                onClick={() => setChartMode('monthly')}
                className={`px-3 py-1 rounded-lg transition-all ${
                  chartMode === 'monthly' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setChartMode('weekly')}
                className={`px-3 py-1 rounded-lg transition-all ${
                  chartMode === 'weekly' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600'
                }`}
              >
                Weekly
              </button>
            </div>
          </div>

          {/* Warm Orange Pill Bars (Inspired directly by uploaded reference image) */}
          <div className="p-4 sm:p-6 rounded-2xl bg-orange-50/60 border border-orange-100/80 overflow-x-auto scrollbar-none">
            <div className="h-44 min-w-[320px] flex items-end justify-between gap-1.5 sm:gap-4 px-1 sm:px-2">
              {monthlyData.map((d, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center gap-2 group relative">
                  {/* Tooltip on hover */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-8 bg-slate-900 text-white text-[10px] font-bold py-1 px-2 rounded-md shadow-md whitespace-nowrap z-20 pointer-events-none">
                    {d.count} tasks done
                  </div>

                  {/* Vertical Capsule Bar */}
                  <div className="w-full max-w-[20px] sm:max-w-[28px] h-36 bg-white/90 rounded-full p-0.5 sm:p-1 flex flex-col justify-end shadow-2xs border border-orange-200/60 overflow-hidden">
                    <div
                      className="w-full bg-gradient-to-t from-orange-500 to-amber-400 rounded-full transition-all duration-500"
                      style={{ height: `${d.value}%` }}
                    />
                  </div>

                  {/* Month Label */}
                  <span className="text-[10px] sm:text-[11px] font-semibold text-slate-600 select-none">
                    {d.month}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skill Rank & Star Points (4 cols, matching yellow card reference) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-amber-50 rounded-3xl border border-amber-200 p-6 space-y-5 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                Skill Rank Status
              </span>
              <span className="font-mono font-extrabold text-sm text-amber-950">
                14 / 50
              </span>
            </div>

            {/* Progress Slider Track */}
            <div className="w-full h-3 bg-amber-200/80 rounded-full relative p-0.5">
              <div className="h-full bg-slate-900 rounded-full w-[35%]" />
              <div className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] absolute top-1/2 -translate-y-1/2 left-[33%] shadow-md">
                ▶
              </div>
            </div>

            {/* Score Split Cards */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-amber-200/80 shadow-2xs space-y-1">
                <div className="flex items-center gap-1.5 text-amber-600">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
                  <span className="text-[11px] font-bold text-slate-700">Star Points</span>
                </div>
                <div className="text-xl font-extrabold text-slate-900">4,850</div>
                <span className="text-[10px] text-slate-400">Total earned</span>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-amber-200/80 shadow-2xs space-y-1">
                <div className="flex items-center gap-1.5 text-amber-600">
                  <Award className="w-4 h-4 text-amber-600" />
                  <span className="text-[11px] font-bold text-slate-700">Milestone</span>
                </div>
                <div className="text-xl font-extrabold text-slate-900">Rank #2</div>
                <span className="text-[10px] text-slate-400">Practitioner level</span>
              </div>
            </div>
          </div>

          {/* Quick Portfolio Promotion Card */}
          <div className="p-6 rounded-3xl bg-slate-900 text-white space-y-3">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Job Application Ready</span>
            </div>
            <h4 className="font-bold text-base">Your Practical Portfolio</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Employers value proven practical work over generic certificates. Showcase your completed reconciliations and e-commerce audits.
            </p>
            <Link
              href="/portfolio-builder"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 pt-1"
            >
              <span>Customize Public Portfolio</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 4. BOTTOM SECTION: UPCOMING SUBMISSIONS TABLE + STUDY CALENDAR */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Upcoming Submissions Table (8 cols, matching light-blue reference) */}
        <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <div>
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                Upcoming Workplace Submissions
              </h3>
              <p className="text-xs text-slate-500">
                Milestones and deliverable deadlines to keep you on schedule.
              </p>
            </div>
            <span className="px-3 py-1 rounded-xl bg-blue-50 text-blue-700 text-xs font-bold border border-blue-100">
              Active Sprint
            </span>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-600 font-bold border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4 w-10"></th>
                  <th className="py-3 px-3">Deliverable Name</th>
                  <th className="py-3 px-3">Role Target</th>
                  <th className="py-3 px-3">Due Date</th>
                  <th className="py-3 px-3">Skill Rank</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-800">
                {submissions.map((sub) => (
                  <tr key={sub.id} className="hover:bg-slate-50/70">
                    <td className="py-3 px-4 text-center">
                      <button
                        onClick={() => toggleSubmission(sub.id)}
                        className="text-slate-400 hover:text-emerald-600 transition-colors"
                      >
                        {sub.isDone ? (
                          <CheckSquare className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <Square className="w-4 h-4 text-slate-300" />
                        )}
                      </button>
                    </td>
                    <td className="py-3 px-3">
                      <span className={`font-bold block ${sub.isDone ? 'line-through text-slate-400' : 'text-slate-900'}`}>
                        {sub.title}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-slate-600">
                      {sub.role}
                    </td>
                    <td className="py-3 px-3 text-slate-500 font-medium">
                      {sub.dueDate}
                    </td>
                    <td className="py-3 px-3">
                      <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
                        sub.difficulty === 'Beginner' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                        'bg-blue-50 text-blue-700 border border-blue-200'
                      }`}>
                        {sub.difficulty}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <Link
                        href={sub.simulatorLink}
                        className="font-bold text-emerald-700 hover:text-emerald-800 hover:underline inline-flex items-center gap-1"
                      >
                        <span>Open Task</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Study Activity Calendar Widget (4 cols, matching pale mint reference) */}
        <div className="lg:col-span-4 bg-emerald-50/70 rounded-3xl border border-emerald-200/80 p-6 space-y-5 shadow-sm">
          <div className="flex items-center justify-between pb-2 border-b border-emerald-200/60">
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-4 h-4 text-emerald-800" />
              <span className="font-bold text-sm text-emerald-950">November 2026</span>
            </div>
            <div className="flex items-center gap-1">
              <button className="p-1 rounded-md text-emerald-800 hover:bg-emerald-100">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="p-1 rounded-md text-emerald-800 hover:bg-emerald-100">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="space-y-2 text-center text-xs">
            <div className="grid grid-cols-7 text-[11px] font-bold text-emerald-800">
              <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
            </div>

            <div className="grid grid-cols-7 gap-1 font-medium text-slate-700">
              {/* Empty leading padding */}
              <span className="py-1.5 opacity-30">27</span>
              <span className="py-1.5 opacity-30">28</span>
              <span className="py-1.5 opacity-30">29</span>
              <span className="py-1.5 opacity-30">30</span>
              <span className="py-1.5 opacity-30">31</span>
              <span className="py-1.5">1</span>
              <span className="py-1.5">2</span>

              {/* Weeks */}
              {[3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24].map(day => {
                const isToday = day === 24;
                const hasActivity = [10, 12, 15, 18, 20, 22, 23, 24].includes(day);

                return (
                  <div
                    key={day}
                    className={`py-1.5 rounded-full flex flex-col items-center justify-center text-xs font-semibold relative ${
                      isToday
                        ? 'bg-slate-900 text-white font-bold shadow-xs'
                        : 'hover:bg-emerald-100 text-slate-800'
                    }`}
                  >
                    <span>{day}</span>
                    {hasActivity && !isToday && (
                      <span className="w-1 h-1 rounded-full bg-emerald-600 absolute bottom-0.5" />
                    )}
                  </div>
                );
              })}

              <span className="py-1.5 opacity-30">25</span>
              <span className="py-1.5 opacity-30">26</span>
              <span className="py-1.5 opacity-30">27</span>
              <span className="py-1.5 opacity-30">28</span>
              <span className="py-1.5 opacity-30">29</span>
              <span className="py-1.5 opacity-30">30</span>
            </div>
          </div>

          {/* Daily Schedule Box */}
          <div className="p-3.5 rounded-2xl bg-white/90 border border-emerald-200 text-xs space-y-1.5">
            <span className="font-bold text-slate-900 block">Today's Study Goal:</span>
            <div className="flex items-center gap-2 text-slate-700">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Day 12 Lesson: Double-Entry Accruals</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Bank Statement Discrepancy Matching</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
