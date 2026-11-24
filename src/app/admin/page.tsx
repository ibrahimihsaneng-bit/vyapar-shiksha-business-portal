'use client';

import React from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Briefcase,
  BookOpen,
  GraduationCap,
  Layers,
  Database
} from 'lucide-react';
import { allCareers } from '@/data/careers';
import { allCourses } from '@/data/courses';
import { verifiedJobListings } from '@/data/jobs';
import { freeLearningResources } from '@/data/resources';
import { simulationTasks } from '@/data/simulator';

export default function AdminPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Platform Governance & Audit Portal</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Career Launchpad Administration
          </h1>
          <p className="text-sm text-slate-600 max-w-2xl">
            Live catalog verification metrics, ethical compliance audit statuses, and job vacancy integrity monitors.
          </p>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-1">
          <div className="text-xs font-semibold text-slate-500">Career Pathways</div>
          <div className="text-3xl font-extrabold text-slate-900">{allCareers.length}</div>
          <div className="text-[11px] text-emerald-600 font-medium">100% Ethically Audited</div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-1">
          <div className="text-xs font-semibold text-slate-500">30-Day Intensive Courses</div>
          <div className="text-3xl font-extrabold text-slate-900">{allCourses.length}</div>
          <div className="text-[11px] text-emerald-600 font-medium">200 Lessons + 30 Projects</div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-1">
          <div className="text-xs font-semibold text-slate-500">Verified Vacancies</div>
          <div className="text-3xl font-extrabold text-slate-900">{verifiedJobListings.length}</div>
          <div className="text-[11px] text-emerald-600 font-medium">Zero Recruitment Fees</div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-1">
          <div className="text-xs font-semibold text-slate-500">Simulator Tasks</div>
          <div className="text-3xl font-extrabold text-slate-900">{simulationTasks.length}</div>
          <div className="text-[11px] text-emerald-600 font-medium">Instant Grading Engine</div>
        </div>
      </div>

      {/* Audit Table */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
        <h2 className="text-lg font-bold text-slate-900">Live Vacancy Compliance Registry</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider border-b border-slate-200">
              <tr>
                <th className="p-3">Job Title & Company</th>
                <th className="p-3">Mode</th>
                <th className="p-3">Salary Band</th>
                <th className="p-3">Ethical Audit</th>
                <th className="p-3">Anti-Scam Badge</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {verifiedJobListings.map((job) => (
                <tr key={job.id} className="hover:bg-slate-50/70">
                  <td className="p-3">
                    <div className="font-bold text-slate-900">{job.title}</div>
                    <div className="text-slate-500">{job.company} &bull; {job.location}</div>
                  </td>
                  <td className="p-3 font-medium text-slate-700">{job.workMode}</td>
                  <td className="p-3 font-bold text-emerald-700">{job.salaryText}</td>
                  <td className="p-3">
                    <span className="inline-flex items-center gap-1 text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded font-medium">
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
