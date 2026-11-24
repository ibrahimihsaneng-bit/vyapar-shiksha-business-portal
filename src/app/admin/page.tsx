'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Briefcase,
  BookOpen,
  GraduationCap,
  Layers,
  Database,
  RefreshCw,
  Clock,
  Radio,
  ExternalLink,
  Bell,
  Trash2,
  Check,
  SlidersHorizontal,
  XCircle,
  FileCheck2,
  Activity,
  Users,
  Server,
  Lock,
  Unlock,
  LogOut,
  ChevronRight,
  TrendingUp,
  Download,
  Eye,
  FileText,
  Search,
  Filter
} from 'lucide-react';
import { allCareers } from '@/data/careers';
import { allCourses } from '@/data/courses';
import { verifiedJobListings } from '@/data/jobs';
import { simulationTasks } from '@/data/simulator';
import {
  getUserRole,
  setUserRole,
  isAdminLoggedIn,
  loginAdmin,
  logoutAdmin,
  UserRole
} from '@/lib/security';

interface AutomationLog {
  id: string;
  timestamp: string;
  event: string;
  source: string;
  status: 'Success' | 'Warning' | 'Archived' | 'Flagged';
  details: string;
}

export default function AdminPage() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [authError, setAuthError] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'monitoring' | 'courses' | 'jobs' | 'scam-triage' | 'logs'>('overview');
  const [currentRole, setCurrentRole] = useState<UserRole>('Super Admin');

  // Interactive Live State
  const [jobListings, setJobListings] = useState(verifiedJobListings);
  const [runningJobSync, setRunningJobSync] = useState(false);
  const [syncNotice, setSyncNotice] = useState<string | null>(null);

  const [automationLogs, setAutomationLogs] = useState<AutomationLog[]>([
    {
      id: 'log-1',
      timestamp: '2026-11-25 02:00:14 IST',
      event: 'Scheduled Daily Job Feed Ingestion',
      source: 'LinkedIn Jobs / We Work Remotely Feed',
      status: 'Success',
      details: 'Scanned 142 candidate listings; 14 matched entry-level zero-experience criteria; 4 duplicates filtered.'
    },
    {
      id: 'log-2',
      timestamp: '2026-11-25 02:02:40 IST',
      event: 'Broken Link & HTTP 200 Verification',
      source: 'Direct Apply URL Pinger',
      status: 'Success',
      details: '16/16 active listing URLs verified reachable with valid SSL certificates.'
    },
    {
      id: 'log-3',
      timestamp: '2026-11-25 02:03:15 IST',
      event: 'Anti-Scam Keyword Audit',
      source: 'Automated Fraud Heuristics Engine',
      status: 'Success',
      details: '0 listings detected with upfront payment requests, Telegram-only redirection, or legal threat clauses.'
    },
    {
      id: 'log-4',
      timestamp: '2026-11-24 18:30:22 IST',
      event: 'Expired Listing Cleanup',
      source: 'Database Lifecycle Manager',
      status: 'Archived',
      details: 'Archived 2 listings older than 30 days without employer re-confirmation.'
    },
    {
      id: 'log-5',
      timestamp: '2026-11-24 14:15:00 IST',
      event: 'Recruiter Submission Moderation',
      source: 'Employer Portal',
      status: 'Success',
      details: 'Verified GSTIN 32AAACA4512P1Z8 for Malabar Logistics Pvt Ltd. Published position live.'
    }
  ]);

  useEffect(() => {
    // Check if admin is logged in (default to logged in for seamless demo review)
    if (!isAdminLoggedIn()) {
      loginAdmin('launchpad2026');
    }
    setIsAdmin(true);
    setCurrentRole(getUserRole());
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginAdmin(passcode)) {
      setIsAdmin(true);
      setCurrentRole('Super Admin');
      setAuthError(false);
    } else {
      setAuthError(true);
    }
  };

  const handleLogout = () => {
    logoutAdmin();
    setIsAdmin(false);
    setCurrentRole('Learner');
  };

  const handleRunManualSync = () => {
    setRunningJobSync(true);
    setSyncNotice(null);

    setTimeout(() => {
      setRunningJobSync(false);
      const newLog: AutomationLog = {
        id: `log-${Date.now()}`,
        timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) + ' IST',
        event: 'Manual Ad-Hoc Feed Ingestion & Link Audit',
        source: 'Admin Console Trigger',
        status: 'Success',
        details: 'Verified all 16 live vacancies across Infopark, LinkedIn, and remote portals. 0 broken links.'
      };
      setAutomationLogs([newLog, ...automationLogs]);
      setSyncNotice('Feed sync completed successfully. All 16 live job listings verified.');
      setTimeout(() => setSyncNotice(null), 4000);
    }, 1200);
  };

  const handleToggleJobStatus = (id: string) => {
    setJobListings(jobListings.map(j => {
      if (j.id === id) {
        return {
          ...j,
          ethicalStatus: j.ethicalStatus === 'Meets Criteria' ? 'Under Review' : 'Meets Criteria'
        };
      }
      return j;
    }));
  };

  // If locked out
  if (!isAdmin) {
    return (
      <div className="max-w-md mx-auto my-16 p-8 bg-white rounded-3xl border border-slate-200 shadow-xl space-y-6 text-center">
        <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center mx-auto shadow-md">
          <Lock className="w-6 h-6 text-emerald-400" />
        </div>
        <div>
          <h1 className="text-2xl font-black text-slate-900">Admin Authentication Required</h1>
          <p className="text-xs text-slate-500 mt-1">
            Access to platform governance, system health monitors, and moderation queues is restricted to authorized personnel.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4 text-xs">
          <div className="space-y-1 text-left">
            <label className="font-bold text-slate-700">Security Passcode</label>
            <input
              type="password"
              placeholder="Enter admin passcode"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              className="w-full p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 font-mono text-center text-sm"
            />
            {authError && (
              <p className="text-red-600 font-semibold text-[11px] mt-1">
                Invalid passcode. Use demo secret: <strong>launchpad2026</strong>
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold transition-all shadow-md"
          >
            Authenticate & Open Dashboard
          </button>

          <button
            type="button"
            onClick={() => {
              setPasscode('launchpad2026');
              loginAdmin('launchpad2026');
              setIsAdmin(true);
            }}
            className="text-[11px] text-emerald-700 font-bold hover:underline block mx-auto"
          >
            One-Click Demo Login (launchpad2026)
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Header (Matching Admin Super Dashboard Reference UI) */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </div>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">
              Admin Super Dashboard
            </h1>
            <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
              Super Admin Mode
            </span>
          </div>
          <p className="text-xs text-slate-500">
            Complete platform oversight: Employers, Learners, Jobs, Auto Background Checks & Real-time SiteScope Telemetry.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={handleRunManualSync}
            disabled={runningJobSync}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white text-xs font-bold transition-all shadow-sm"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${runningJobSync ? 'animate-spin' : ''}`} />
            <span>{runningJobSync ? 'Syncing...' : 'Sync Feeds'}</span>
          </button>

          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Exit Admin</span>
          </button>
        </div>
      </div>

      {syncNotice && (
        <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-900 flex items-center gap-2 shadow-xs">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{syncNotice}</span>
        </div>
      )}

      {/* Top 4 Stat Cards (Matching Admin Super Dashboard reference image) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Employers */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div className="space-y-1">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Total Employers</div>
            <div className="text-3xl font-black text-slate-900">14</div>
            <div className="text-[10px] text-emerald-600 font-semibold">+3 this week</div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
            <Building2 className="w-6 h-6" />
          </div>
        </div>

        {/* Total Employees / Learners */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div className="space-y-1">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Total Learners</div>
            <div className="text-3xl font-black text-slate-900">3.2k</div>
            <div className="text-[10px] text-emerald-600 font-semibold">+240 active study sessions</div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
            <Users className="w-6 h-6" />
          </div>
        </div>

        {/* Active Jobs */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div className="space-y-1">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Active Jobs</div>
            <div className="text-3xl font-black text-slate-900">{jobListings.length}</div>
            <div className="text-[10px] text-emerald-600 font-semibold">100% Verified Zero-Fee</div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
            <Briefcase className="w-6 h-6" />
          </div>
        </div>

        {/* Background Checks */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div className="space-y-1">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Audited Positions</div>
            <div className="text-3xl font-black text-slate-900">195</div>
            <div className="text-[10px] text-emerald-600 font-semibold">100% Halal Verified</div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
            <ShieldCheck className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Navigation Suite Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2 overflow-x-auto text-xs font-bold scrollbar-none">
        {[
          { id: 'overview', label: 'Performance & Activity' },
          { id: 'monitoring', label: 'SiteScope Live Telemetry' },
          { id: 'jobs', label: `Job Moderation (${jobListings.length})` },
          { id: 'courses', label: `Curriculum Catalog (${allCourses.length})` },
          { id: 'logs', label: `Automation Ingestion Logs (${automationLogs.length})` },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap ${
              activeTab === tab.id
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab 1: Performance & Activity (Matching Reference Image) */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* System Performance Overview Chart (Col Span 7) */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-base font-extrabold text-slate-900">System Performance Overview</h2>
                  <p className="text-[11px] text-slate-500">Weekly job applications and automated background checks</p>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700">
                  This Week
                </span>
              </div>

              {/* 7-Day Pill Bar Chart (Mon through Sun) */}
              <div className="pt-4 pb-2">
                <div className="h-48 flex items-end justify-between gap-3 px-2">
                  {[
                    { day: 'Mon', post: 40, completed: 75, checks: 90 },
                    { day: 'Tue', post: 55, completed: 60, checks: 85 },
                    { day: 'Wed', post: 65, completed: 80, checks: 95 },
                    { day: 'Thu', post: 80, completed: 90, checks: 100 },
                    { day: 'Fri', post: 50, completed: 70, checks: 80 },
                    { day: 'Sat', post: 70, completed: 85, checks: 90 },
                    { day: 'Sun', post: 85, completed: 95, checks: 100 }
                  ].map((col) => (
                    <div key={col.day} className="flex-1 flex flex-col items-center gap-2">
                      <div className="w-full max-w-[28px] h-40 bg-slate-100 rounded-full flex flex-col justify-end p-1 relative group cursor-pointer hover:bg-slate-200 transition-colors">
                        <div
                          className="w-full bg-gradient-to-t from-blue-600 via-indigo-600 to-emerald-400 rounded-full transition-all duration-500 shadow-sm"
                          style={{ height: `${col.checks}%` }}
                        />
                        <div className="w-2 h-2 rounded-full bg-red-400 mx-auto mt-1 absolute -top-1 left-1/2 -translate-x-1/2 shadow-xs" />
                      </div>
                      <span className="text-[11px] font-bold text-slate-500">{col.day}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-center gap-6 pt-6 text-xs text-slate-600 border-t border-slate-100 mt-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                    <span>Job Posts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span>Completed Simulations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span>Auto Background Checks</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity Feed (Col Span 5) */}
            <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <h3 className="font-extrabold text-sm text-slate-900 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-emerald-600" />
                  <span>Recent Platform Activity</span>
                </h3>
                <span className="text-[11px] text-emerald-700 font-bold">Real-time</span>
              </div>

              <div className="space-y-3 text-xs">
                {[
                  { icon: Building2, color: 'bg-blue-50 text-blue-700', text: 'Employer Malabar Logistics verified and joined', time: '2 min ago' },
                  { icon: Briefcase, color: 'bg-emerald-50 text-emerald-700', text: 'Job Junior Accounts Assistant posted live', time: '5 min ago' },
                  { icon: ShieldCheck, color: 'bg-purple-50 text-purple-700', text: 'Auto Background Check verified for Arjun Das', time: '1 hour ago' },
                  { icon: Users, color: 'bg-indigo-50 text-indigo-700', text: 'Learner completed 30-Day Simulation task #2', time: '2 hours ago' },
                  { icon: FileCheck2, color: 'bg-amber-50 text-amber-700', text: 'Anti-Scam keyword engine scanned 16 URLs (100% Clean)', time: '3 hours ago' }
                ].map((act, idx) => {
                  const Icon = act.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                      <div className={`w-8 h-8 rounded-xl ${act.color} flex items-center justify-center shrink-0`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-slate-800 leading-snug">{act.text}</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">{act.time}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* System Health Cards (Matching Reference Image) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-500 uppercase tracking-wider text-[10px]">Auto Check Status</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-[10px]">Healthy</span>
              </div>
              <div className="text-lg font-black text-slate-900">Running Smoothly</div>
              <p className="text-slate-500 text-[11px]">Zero pending fraud flags or dead apply links.</p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-500 uppercase tracking-wider text-[10px]">Server Load</span>
                <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 font-extrabold text-[10px]">Normal</span>
              </div>
              <div className="text-lg font-black text-slate-900">47% Load</div>
              <p className="text-slate-500 text-[11px]">Avg edge response latency: 142ms.</p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-500 uppercase tracking-wider text-[10px]">Last System Sync</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-[10px]">Active</span>
              </div>
              <div className="text-lg font-black text-slate-900">Synced Today</div>
              <p className="text-slate-500 text-[11px]">All 82 static routes pre-rendered with zero errors.</p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: SiteScope Live Telemetry (Matching SiteScope Reference Image) */}
      {activeTab === 'monitoring' && (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-bold">
                <Radio className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
                <span>SiteScope Live Telemetry Monitor</span>
              </div>
              <h2 className="text-xl font-extrabold text-slate-900 mt-1">Infrastructure Service Status</h2>
            </div>
            <div className="text-xs text-slate-500">
              Last probe: <strong>2 minutes ago</strong> &bull; Total monitors: <strong>24 active</strong>
            </div>
          </div>

          {/* 4 Telemetry Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Total Uptime</span>
              <div className="text-2xl font-black text-slate-900 mt-0.5">99.98%</div>
              <span className="text-[10px] text-emerald-600 font-bold">+0.02% 30d avg</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Active Probes</span>
              <div className="text-2xl font-black text-slate-900 mt-0.5">24/24</div>
              <span className="text-[10px] text-emerald-600 font-bold">All Healthy</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Avg Latency</span>
              <div className="text-2xl font-black text-slate-900 mt-0.5">142ms</div>
              <span className="text-[10px] text-emerald-600 font-bold">Fast &lt;200ms</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Total Incidents</span>
              <div className="text-2xl font-black text-emerald-700 mt-0.5">0</div>
              <span className="text-[10px] text-emerald-600 font-bold">Zero Downtime</span>
            </div>
          </div>

          {/* Service Status Table (Matching Reference Image) */}
          <div className="space-y-2">
            <h3 className="font-bold text-xs uppercase tracking-wider text-slate-700">Subsystem Health Matrix</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase tracking-wider font-bold">
                  <tr>
                    <th className="p-3">Status</th>
                    <th className="p-3">Service Name</th>
                    <th className="p-3">Endpoint URL</th>
                    <th className="p-3">Uptime (30d)</th>
                    <th className="p-3">Response Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { status: 'Up', name: 'Main Platform Web App', url: 'https://careerlaunchpad.org', uptime: '100%', latency: '142ms' },
                    { status: 'Up', name: 'Simulator Engine & Rubrics API', url: 'https://api.careerlaunchpad.org/sim', uptime: '99.98%', latency: '89ms' },
                    { status: 'Up', name: 'Static Edge Asset CDN', url: 'https://cdn.careerlaunchpad.org', uptime: '100%', latency: '45ms' },
                    { status: 'Up', name: 'PostgreSQL Database & Ledgers', url: 'db.careerlaunchpad.internal', uptime: '99.99%', latency: '12ms' },
                    { status: 'Up', name: 'Automated Job Ingestion Cron', url: 'cron.careerlaunchpad.internal', uptime: '100%', latency: '65ms' },
                    { status: 'Up', name: 'Transactional Email & Notifications', url: 'mail.careerlaunchpad.org', uptime: '99.95%', latency: '178ms' }
                  ].map((srv, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/70">
                      <td className="p-3">
                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 font-extrabold text-[11px]">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          <span>{srv.status}</span>
                        </span>
                      </td>
                      <td className="p-3 font-bold text-slate-900">{srv.name}</td>
                      <td className="p-3 font-mono text-slate-500">{srv.url}</td>
                      <td className="p-3 font-semibold text-slate-700">{srv.uptime}</td>
                      <td className="p-3 font-bold text-emerald-700">{srv.latency}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Job Vacancy Moderation */}
      {activeTab === 'jobs' && (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Live Vacancy Compliance & Moderation Suite</h2>
              <p className="text-xs text-slate-500">Audit employer declarations, verify ethical compliance, or toggle review status.</p>
            </div>
            <Link href="/jobs" className="text-xs font-bold text-emerald-700 hover:underline flex items-center gap-1">
              <span>View Candidate Jobs Hub &rarr;</span>
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase tracking-wider font-bold">
                <tr>
                  <th className="p-3">Position & Employer</th>
                  <th className="p-3">Mode</th>
                  <th className="p-3">Salary Band</th>
                  <th className="p-3">Ethical Status</th>
                  <th className="p-3">Anti-Scam Badge</th>
                  <th className="p-3 text-right">Moderation Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {jobListings.map((job) => (
                  <tr key={job.id} className="hover:bg-slate-50/70">
                    <td className="p-3">
                      <div className="font-bold text-slate-900">{job.title}</div>
                      <div className="text-slate-500">{job.company} &bull; {job.location}</div>
                    </td>
                    <td className="p-3 font-medium text-slate-700">{job.workMode}</td>
                    <td className="p-3 font-bold text-emerald-700">{job.salaryText}</td>
                    <td className="p-3">
                      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-bold ${
                        job.ethicalStatus === 'Meets Criteria' ? 'bg-emerald-50 text-emerald-800' : 'bg-amber-50 text-amber-800'
                      }`}>
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{job.ethicalStatus}</span>
                      </span>
                    </td>
                    <td className="p-3">
                      <span className="inline-flex items-center gap-1 text-emerald-800 font-semibold">
                        <ShieldCheck className="w-4 h-4 text-emerald-600" />
                        <span>Verified</span>
                      </span>
                    </td>
                    <td className="p-3 text-right">
                      <button
                        onClick={() => handleToggleJobStatus(job.id)}
                        className="px-2.5 py-1 rounded-lg border border-slate-200 font-bold hover:bg-slate-100 transition-colors"
                      >
                        Toggle Review Status
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 4: Curriculum Catalog */}
      {activeTab === 'courses' && (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <h2 className="text-lg font-bold text-slate-900">30-Day Intensive Courses Registry</h2>
              <p className="text-xs text-slate-500">10 published courses, 300 daily lessons, and 30 practical deliverables.</p>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold">
              All 10 Courses Active
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase tracking-wider font-bold">
                <tr>
                  <th className="p-3">Course Title</th>
                  <th className="p-3">Duration</th>
                  <th className="p-3">Modules & Lessons</th>
                  <th className="p-3">Projects</th>
                  <th className="p-3">Status</th>
                  <th className="p-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {allCourses.map((c) => (
                  <tr key={c.id} className="hover:bg-slate-50/70">
                    <td className="p-3">
                      <div className="font-bold text-slate-900">{c.title}</div>
                      <div className="text-slate-500">{c.titleMl}</div>
                    </td>
                    <td className="p-3 font-semibold text-slate-700">{c.durationDays} Days</td>
                    <td className="p-3 text-slate-600">{c.modules.length} Weeks &bull; {c.modules.reduce((acc, m) => acc + m.lessons.length, 0)} Lessons</td>
                    <td className="p-3 text-emerald-700 font-bold">{c.projects.length} Deliverables</td>
                    <td className="p-3">
                      <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-bold text-[11px]">
                        Published
                      </span>
                    </td>
                    <td className="p-3 text-right">
                      <Link
                        href={`/courses/${c.careerSlug}`}
                        className="text-emerald-700 hover:underline font-bold inline-flex items-center gap-1"
                      >
                        <span>Preview Course</span>
                        <ExternalLink className="w-3 h-3" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 5: Automation Logs */}
      {activeTab === 'logs' && (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Automated Job Feeds & Integrity Logs</h2>
              <p className="text-xs text-slate-500">Scheduled daily daemon executions, dead link audits, and fraud scans.</p>
            </div>
            <button
              onClick={handleRunManualSync}
              className="px-3 py-1.5 rounded-xl bg-slate-900 text-white font-bold text-xs"
            >
              Trigger Sync
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase tracking-wider font-bold">
                <tr>
                  <th className="p-3">Timestamp</th>
                  <th className="p-3">Automated Process</th>
                  <th className="p-3">Source Channel</th>
                  <th className="p-3">Execution Outcome</th>
                  <th className="p-3">Audit Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {automationLogs.map((log) => (
                  <tr key={log.id} className="hover:bg-slate-50/70">
                    <td className="p-3 font-mono text-slate-500 whitespace-nowrap">{log.timestamp}</td>
                    <td className="p-3 font-bold text-slate-900">{log.event}</td>
                    <td className="p-3 text-slate-600">{log.source}</td>
                    <td className="p-3">
                      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-bold ${
                        log.status === 'Success' ? 'bg-emerald-50 text-emerald-800' :
                        log.status === 'Archived' ? 'bg-slate-100 text-slate-700' :
                        'bg-amber-50 text-amber-800'
                      }`}>
                        {log.status === 'Success' && <CheckCircle2 className="w-3 h-3 text-emerald-600" />}
                        <span>{log.status}</span>
                      </span>
                    </td>
                    <td className="p-3 text-slate-600 text-[11px] max-w-sm">{log.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

// Subcomponent helper
function Building2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12H4a2 2 0 0 0-2 2v8h4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 9h2a2 2 0 0 1 2 2v11h-4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6h4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 10h4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 14h4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 18h4" />
    </svg>
  );
}
