'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Award,
  TrendingUp,
  CheckCircle2,
  Clock,
  Laptop,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Filter,
  ExternalLink,
  ChevronRight,
  Info
} from 'lucide-react';
import { careerPriorityIntelligence } from '@/data/career-intelligence';

export default function CareerPriorityRankingsPage() {
  const [selectedSort, setSelectedSort] = useState<'rank' | 'accessibility' | 'salary'>('rank');

  const sortedCareers = [...careerPriorityIntelligence].sort((a, b) => {
    if (selectedSort === 'accessibility') {
      return b.accessibilityScore - a.accessibilityScore;
    }
    if (selectedSort === 'salary') {
      return b.compositeScore - a.compositeScore;
    }
    return a.rank - b.rank;
  });

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Page Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-bold border border-teal-200/60">
          <Award className="w-3.5 h-3.5 text-teal-600" />
          <span>Transparent Career Intelligence Matrix</span>
          <span className="px-1.5 py-0.2 rounded bg-emerald-700 text-white text-[10px] font-bold">
            മലയാളം
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Priority Career Intelligence & Ranking
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-3xl leading-relaxed">
          Not all careers offer equal paths for beginners. We rigorously rank pathways across 11 verifiable criteria: accessibility for zero-knowledge learners, verified hiring demand, remote feasibility, software costs, and ethical integrity.
        </p>
      </div>

      {/* Methodology Callout */}
      <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-3">
        <div className="flex items-center gap-2 text-teal-800 font-bold text-sm">
          <Info className="w-4 h-4 text-teal-600" />
          <span>Transparent Evaluation Methodology (No Invented Figures)</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600">
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
            <span className="font-bold text-slate-900 block mb-0.5">1. Zero-Knowledge Accessibility</span>
            Evaluates whether someone without coding skills or degrees can grasp the core software within 30 days.
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
            <span className="font-bold text-slate-900 block mb-0.5">2. Verified Entry Demand</span>
            Grounded in AmbitionBox India, Naukri, and Indeed verified postings in Kerala, pan-India, and remote teams.
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
            <span className="font-bold text-slate-900 block mb-0.5">3. 100% Halal & Anti-Scam Audit</span>
            Excludes all gambling apps, predatory lending schemes, usurious transactions, and multi-level marketing (MLM).
          </div>
        </div>
      </div>

      {/* Rankings Table / Cards */}
      <div className="space-y-4">
        {sortedCareers.map((c) => (
          <div
            key={c.slug}
            className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-teal-300 shadow-xs hover:shadow-md transition-all flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
          >
            {/* Rank & Title */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-700 text-white font-black text-xl flex items-center justify-center shrink-0 shadow-sm">
                #{c.rank}
              </div>
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-teal-50 text-teal-800 border border-teal-200/60">
                    {c.durationTrack}
                  </span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                    {c.category}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                    Accessibility: {c.accessibilityScore} / 10
                  </span>
                </div>
                <h3 className="font-bold text-lg text-slate-900 hover:text-teal-800 transition-colors">
                  <Link href={`/careers/${c.slug}`}>
                    {c.title}
                  </Link>
                </h3>
                <p className="text-xs text-teal-800 font-semibold">{c.titleMl}</p>
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 pt-1">
                  <span>Demand: <strong className="text-slate-800">{c.entryDemandRating}</strong></span>
                  <span>&bull;</span>
                  <span>Remote: <strong className="text-slate-800">{c.remotePotential}</strong></span>
                  <span>&bull;</span>
                  <span>Software Cost: <strong className="text-emerald-700">{c.softwareCostMonthly}</strong></span>
                </div>
              </div>
            </div>

            {/* Growth & Actions */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0 w-full lg:w-auto pt-3 lg:pt-0 border-t lg:border-t-0 border-slate-100">
              <div className="text-left sm:text-right space-y-0.5">
                <div className="text-[11px] text-slate-500">3-Year Career Ceiling</div>
                <div className="text-xs font-extrabold text-slate-900">{c.growthCeiling3YearInr}</div>
                <div className="text-[10px] text-emerald-700 font-bold">{c.ethicalIntegrityRating}</div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <Link
                  href={`/careers/${c.slug}`}
                  className="flex-1 sm:flex-none text-center px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  Blueprint
                </Link>
                <Link
                  href={`/courses/${c.slug}`}
                  className="flex-1 sm:flex-none text-center px-4 py-2 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold transition-colors shadow-xs"
                >
                  Start Course &rarr;
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
