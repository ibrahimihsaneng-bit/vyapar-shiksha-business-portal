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
  ExternalLink,
  UploadCloud,
  Users,
  Search,
  Bot,
  Layers,
  Compass,
  ArrowUpRight,
  Play
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

  // CV Upload Drag state
  const [dragActive, setDragActive] = useState(false);
  const [uploadedCV, setUploadedCV] = useState<string | null>(null);

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

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedCV(e.target.files[0].name);
    }
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* ========================================================================= */}
      {/* 1. TOP HEADER & SEARCH / AI MENTOR CALLOUT */}
      {/* ========================================================================= */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-bold border border-emerald-100 inline-flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>7-Day Active Streak</span>
            </span>
            <span className="text-slate-400 text-xs">&bull;</span>
            <span className="text-xs text-slate-500 font-medium">Kerala & Remote Track</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Dashboard Overview
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/careers/graph"
            className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all inline-flex items-center gap-1.5 border border-slate-200"
          >
            <Compass className="w-3.5 h-3.5 text-indigo-600" />
            <span>Interactive Skill Graph</span>
          </Link>
          <Link
            href="/interview-prep"
            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-sm inline-flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>AI Interview Studio</span>
          </Link>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. ALVANCE BENTO GRID SECTION (Exact layout matching Reference Image 1) */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left Column Bento Items: Lessons Took + Skill Tracker (8 cols) */}
        <div className="lg:col-span-8 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Card 1: Lessons Took */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm relative overflow-hidden flex flex-col justify-between">
              <div className="flex items-center justify-between pb-3">
                <span className="text-xs font-bold text-slate-700">Lessons Took</span>
                <Link
                  href="/courses"
                  className="text-[11px] font-bold text-slate-500 hover:text-emerald-700 transition-colors"
                >
                  Details
                </Link>
              </div>

              <div className="flex items-baseline gap-3 my-2">
                <span className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">46</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-extrabold inline-flex items-center gap-0.5">
                  <TrendingUp className="w-3 h-3 text-emerald-600" />
                  <span>+7%</span>
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium">Lessons completed this term</p>

              {/* Sparkline Decorative Trend Line */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <div className="h-8 w-28">
                  <svg viewBox="0 0 100 30" className="w-full h-full stroke-amber-500 fill-none" strokeWidth="2.5">
                    <polyline points="0,25 20,20 40,24 60,10 80,18 100,5" />
                  </svg>
                </div>
                <span className="text-[10px] text-slate-400 font-mono">14 days consecutive</span>
              </div>
            </div>

            {/* Card 2: Skill Tracker (Hours & Category Bars) */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-700">Skill Tracker</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold inline-flex items-center gap-0.5">
                  <TrendingUp className="w-3 h-3 text-emerald-600" />
                  <span>+12%</span>
                </span>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">127h</span>
                <span className="text-xs text-slate-500 font-medium">Hours spent on practical classes</span>
              </div>

              {/* Multi-Domain Skill Breakdown Bars */}
              <div className="space-y-2.5 pt-1">
                <div>
                  <div className="flex justify-between text-[11px] font-semibold text-slate-600 mb-1">
                    <span>Accounting & Finance</span>
                    <span className="font-mono text-emerald-600 font-bold">46%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: '46%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] font-semibold text-slate-600 mb-1">
                    <span>E-Commerce & Digital Ops</span>
                    <span className="font-mono text-indigo-600 font-bold">27%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full bg-indigo-500 rounded-full" style={{ width: '27%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] font-semibold text-slate-600 mb-1">
                    <span>Software QA & Tech Support</span>
                    <span className="font-mono text-amber-600 font-bold">12%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full bg-amber-500 rounded-full" style={{ width: '12%' }} />
                  </div>
                </div>
              </div>

              <Link
                href="/careers/graph"
                className="text-[11px] font-bold text-emerald-700 hover:text-emerald-900 pt-1 inline-flex items-center gap-1"
              >
                <span>+ View full 60-pathway skill graph</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Row 2 in Left Col: Job Feed Card + Mock Interview Offer Card + Upload CV Zone */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {/* Job Feed (Dark Theme Card matching Alvance) */}
            <div className="bg-slate-900 rounded-3xl p-5 text-white flex flex-col justify-between shadow-sm border border-slate-800">
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Job Feed</span>
                <div className="p-3 rounded-2xl bg-slate-800/90 border border-slate-700 space-y-1.5 mt-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white">Accounts Assistant</span>
                    <span className="text-[10px] font-mono text-emerald-400 font-bold">₹22k - 30k/mo</span>
                  </div>
                  <p className="text-[10px] text-slate-300">Malabar Trading Co. &bull; Kochi / Remote</p>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <span className="text-[10px] text-slate-400">12 new matches</span>
                <Link
                  href="/jobs"
                  className="px-3 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs inline-flex items-center gap-1 transition-all"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Mock Interview Tool Offer Card (Matching Alvance purple/pink banner) */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl border border-indigo-100/80 p-5 flex flex-col justify-between shadow-sm">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs">
                    AI
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-purple-600 text-white text-[9px] font-extrabold uppercase tracking-wider">
                    NEW FEATURE
                  </span>
                </div>
                <h4 className="font-extrabold text-sm text-slate-900 leading-tight">
                  Try out our Mock Interview tool
                </h4>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Practice to handle fresher questions with verified STAR structure.
                </p>
              </div>

              <div className="pt-3">
                <Link
                  href="/interview-prep"
                  className="text-xs font-extrabold text-indigo-700 hover:text-indigo-900 inline-flex items-center gap-1"
                >
                  <span>Start Live Session &rarr;</span>
                </Link>
              </div>
            </div>

            {/* Upload CV Drag & Drop Area (Matching Alvance Upload CV Card) */}
            <div
              onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
              onDragLeave={() => setDragActive(false)}
              onDrop={(e) => {
                e.preventDefault();
                setDragActive(false);
                if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                  setUploadedCV(e.dataTransfer.files[0].name);
                }
              }}
              className={`rounded-3xl border-2 border-dashed p-5 flex flex-col items-center justify-center text-center transition-all ${
                dragActive ? 'border-emerald-500 bg-emerald-50/50' : 'border-slate-200 bg-slate-50/60 hover:bg-white'
              }`}
            >
              <div className="w-10 h-10 rounded-2xl bg-white shadow-2xs border border-slate-200 flex items-center justify-center text-emerald-600 mb-2">
                <UploadCloud className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-bold text-slate-900">Upload your CV</h4>
              <p className="text-[10px] text-slate-500 max-w-[150px] mt-0.5 leading-snug">
                {uploadedCV ? `Selected: ${uploadedCV}` : 'Drag & drop PDF here for instant AI resume check'}
              </p>
              <label className="mt-2.5 px-3 py-1 rounded-xl bg-white border border-slate-200 text-slate-700 font-bold text-[10px] hover:bg-slate-100 cursor-pointer shadow-2xs">
                Browse Files
                <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileUpload} className="hidden" />
              </label>
            </div>
          </div>
        </div>

        {/* Right Column Bento Items: Upcoming Lessons & Community (4 cols) */}
        <div className="lg:col-span-4 space-y-5">
          {/* Upcoming Lesson Card */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-700">Upcoming Lesson</span>
              <Link href="/courses" className="text-[11px] font-bold text-slate-400 hover:text-slate-600">
                View all
              </Link>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-bold text-base shadow-sm">
                  📊
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-slate-900 leading-tight">
                    Basic Bookkeeping & Invoicing
                  </h4>
                  <p className="text-[11px] text-slate-500">Real-world project-based learning</p>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-[11px] text-slate-600 font-medium">
                  <span>Module 3: Bank Reconciliation</span>
                  <span className="font-bold text-emerald-600">12 of 20 (60%)</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-200 overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: '60%' }} />
                </div>
              </div>

              <Link
                href="/courses/bookkeeping-invoicing"
                className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-sm"
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                <span>Join Lesson Now</span>
              </Link>
            </div>
          </div>

          {/* Community Card (Matching Alvance 1350+ Members Widget) */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xl sm:text-2xl font-black text-slate-900 block tracking-tight">1,350+</span>
                <span className="text-xs text-slate-500 font-medium">Members in our Kerala & Remote community</span>
              </div>
            </div>

            {/* Avatar Group Stack */}
            <div className="flex items-center justify-between pt-2">
              <div className="flex -space-x-2">
                {['👨‍💻', '👩‍💼', '👨‍🎓', '👩‍💻', '👨‍💼'].map((emoji, idx) => (
                  <div
                    key={idx}
                    className="w-8 h-8 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-xs shadow-2xs"
                  >
                    {emoji}
                  </div>
                ))}
              </div>

              <a
                href="https://telegram.org"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold transition-colors border border-emerald-200"
              >
                Join Community
              </a>
            </div>
          </div>

          {/* Interactive Skill Graph Fast-Jump */}
          <div className="p-5 rounded-3xl bg-gradient-to-br from-slate-900 to-indigo-950 text-white space-y-2.5 border border-indigo-900/60 shadow-sm">
            <div className="flex items-center gap-2 text-indigo-400 font-bold text-xs uppercase tracking-wider">
              <Compass className="w-4 h-4 text-emerald-400" />
              <span>Pathfinder & Visual Graph</span>
            </div>
            <h4 className="font-extrabold text-sm text-white">Explore 60 Career Nodes</h4>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              Compare 3 pathways side-by-side with market trends, salary ladders, and milestone progression.
            </p>
            <Link
              href="/careers/graph"
              className="inline-flex items-center gap-1.5 text-xs font-extrabold text-emerald-400 hover:text-emerald-300 pt-1"
            >
              <span>Launch Synaptic Graph</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. COURSE RECOMMENDATIONS (Isometric Card Row matching Alvance Reference) */}
      {/* ========================================================================= */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-900 tracking-tight">Course Recommendations</h3>
            <p className="text-xs text-slate-500">Hand-curated 30 to 90 day tracks aligned with your current learning pace</p>
          </div>
          <Link href="/courses" className="text-xs font-bold text-emerald-700 hover:underline">
            View all courses &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            {
              title: 'Basic Bookkeeping & Invoicing',
              desc: 'Master Zoho Books, GST e-invoices and debit/credit ledger basics.',
              duration: '30 Days',
              tag: '#accounting',
              color: 'from-emerald-50 to-teal-50 border-emerald-200',
              badgeColor: 'bg-emerald-100 text-emerald-800',
              icon: '📊',
              slug: 'bookkeeping-invoicing'
            },
            {
              title: 'Shopify Store Management',
              desc: 'Manage inventory, handle product variants and optimize store sales.',
              duration: '60 Days',
              tag: '#ecommerce',
              color: 'from-indigo-50 to-blue-50 border-indigo-200',
              badgeColor: 'bg-indigo-100 text-indigo-800',
              icon: '🛍️',
              slug: 'shopify-store-management'
            },
            {
              title: 'Manual Software Testing',
              desc: 'Write test cases, log Jira defect reports, and verify web apps.',
              duration: '60 Days',
              tag: '#qa-testing',
              color: 'from-amber-50 to-orange-50 border-amber-200',
              badgeColor: 'bg-amber-100 text-amber-800',
              icon: '🔍',
              slug: 'manual-software-testing'
            }
          ].map((rec, i) => (
            <Link
              key={i}
              href={`/courses/${rec.slug}`}
              className={`p-5 rounded-3xl bg-gradient-to-br ${rec.color} border shadow-2xs hover:shadow-md transition-all flex flex-col justify-between space-y-4 group`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{rec.icon}</span>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold ${rec.badgeColor}`}>
                    {rec.duration}
                  </span>
                </div>
                <h4 className="font-extrabold text-sm text-slate-900 group-hover:text-emerald-800 transition-colors">
                  {rec.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {rec.desc}
                </p>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-200/60">
                <span className="text-[11px] font-mono text-slate-500 font-semibold">{rec.tag}</span>
                <span className="text-xs font-bold text-slate-800 group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">
                  <span>Enroll</span>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-700" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 4. CAREER READINESS ASSESSMENT REPORT (5-DIMENSION DIAGNOSTIC) */}
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
      {/* 5. TASK ACTIVITY CHART + UPCOMING WORKPLACE SUBMISSIONS */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Task Completed Chart (8 cols, warm capsule bars) */}
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

          <div className="p-4 sm:p-6 rounded-2xl bg-orange-50/60 border border-orange-100/80 overflow-x-auto scrollbar-none">
            <div className="h-44 min-w-[320px] flex items-end justify-between gap-1.5 sm:gap-4 px-1 sm:px-2">
              {monthlyData.map((d, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center gap-2 group relative">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-8 bg-slate-900 text-white text-[10px] font-bold py-1 px-2 rounded-md shadow-md whitespace-nowrap z-20 pointer-events-none">
                    {d.count} tasks done
                  </div>

                  <div className="w-full max-w-[20px] sm:max-w-[28px] h-36 bg-white/90 rounded-full p-0.5 sm:p-1 flex flex-col justify-end shadow-2xs border border-orange-200/60 overflow-hidden">
                    <div
                      className="w-full bg-gradient-to-t from-orange-500 to-amber-400 rounded-full transition-all duration-500"
                      style={{ height: `${d.value}%` }}
                    />
                  </div>

                  <span className="text-[10px] sm:text-[11px] font-semibold text-slate-600 select-none">
                    {d.month}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Study Activity Calendar Widget (4 cols) */}
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

          <div className="space-y-2 text-center text-xs">
            <div className="grid grid-cols-7 text-[11px] font-bold text-emerald-800">
              <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
            </div>

            <div className="grid grid-cols-7 gap-1 font-medium text-slate-700">
              <span className="py-1.5 opacity-30">27</span>
              <span className="py-1.5 opacity-30">28</span>
              <span className="py-1.5 opacity-30">29</span>
              <span className="py-1.5 opacity-30">30</span>
              <span className="py-1.5 opacity-30">31</span>
              <span className="py-1.5">1</span>
              <span className="py-1.5">2</span>

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

      {/* ========================================================================= */}
      {/* 6. UPCOMING SUBMISSIONS TABLE */}
      {/* ========================================================================= */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
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
    </div>
  );
}
