import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Clock, TrendingUp, ArrowRight, CheckCircle2, Sparkles, Compass } from 'lucide-react';
import { allCareers } from '@/data/careers';
import { DurationTrack } from '@/types';

export function generateStaticParams() {
  return [
    { track: '30-days' },
    { track: '60-days' },
    { track: '90-days' },
    { track: '120-days' }
  ];
}

const trackMetadata: Record<string, {
  title: string;
  titleMl: string;
  subtitle: string;
  dailyHours: string;
  targetRole: string;
  description: string;
}> = {
  '30-days': {
    title: '30-Day Fast Track Career Pathways',
    titleMl: '30 ദിവസം കൊണ്ട് നേടാവുന്ന കരിയറുകൾ',
    subtitle: 'Operational & Entry-Level Roles Designed for Fast Employment',
    dailyHours: '2 - 3 Hours / Day',
    targetRole: 'Junior Assistant / Operations Specialist / Remote Support',
    description: 'Master practical, code-free business tools (Zoho Books, Shopify, Excel, HubSpot, WordPress) with daily structured exercises and portfolio projects.'
  },
  '60-days': {
    title: '60-Day Foundation Career Pathways',
    titleMl: '60 ദിവസത്തെ ഫൗണ്ടേഷൻ കരിയർ വഴികൾ',
    subtitle: 'Specialized Assistants & Domain Coordinators',
    dailyHours: '2 - 3 Hours / Day',
    targetRole: 'Domain Coordinator / Specialized Executive',
    description: 'Deepen functional expertise in search engine optimization, content writing, social media coordination, and foundational data operations.'
  },
  '90-days': {
    title: '90-Day Professional Career Pathways',
    titleMl: '90 ദിവസത്തെ പ്രൊഫഷണൽ കരിയർ വഴികൾ',
    subtitle: 'Technical, Design & Analytical Specializations',
    dailyHours: '3 - 4 Hours / Day',
    targetRole: 'Junior QA Tester / UI-UX Designer / Cloud Tech Associate',
    description: 'Acquire rigorous software testing, interface design, data analysis, and digital marketing specializations with comprehensive case studies.'
  },
  '120-days': {
    title: '120-Day Advanced Career Pathways',
    titleMl: '120 ദിവസത്തെ അഡ്വാൻസ്ഡ് കരിയർ വഴികൾ',
    subtitle: 'Full Software Development, Data Science & Cybersecurity',
    dailyHours: '3 - 5 Hours / Day',
    targetRole: 'Junior Frontend Developer / Python Data Analyst / Security Associate',
    description: 'Complete hands-on engineering programs covering modern JavaScript/React, Python data pipelines, Git version control, and production architectures.'
  }
};

export default async function TrackPage({
  params,
}: {
  params: Promise<{ track: string }>;
}) {
  const { track } = await params;
  const meta = trackMetadata[track];

  if (!meta) {
    notFound();
  }

  const trackCareers = allCareers.filter(c => c.durationTrack === track);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Track Selector Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-slate-100 rounded-2xl max-w-2xl mx-auto border border-slate-200">
        {[
          { id: '30-days', label: '30-Day Track' },
          { id: '60-days', label: '60-Day Track' },
          { id: '90-days', label: '90-Day Track' },
          { id: '120-days', label: '120-Day Track' },
        ].map((t) => (
          <Link
            key={t.id}
            href={`/tracks/${t.id}`}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              track === t.id
                ? 'bg-white text-slate-900 shadow-sm border border-slate-200 font-bold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
            }`}
          >
            {t.label}
          </Link>
        ))}
      </div>

      {/* Hero Header */}
      <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-100">
          <Clock className="w-3.5 h-3.5 text-emerald-600" />
          <span>{meta.subtitle}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          {meta.title}
        </h1>
        <p className="text-base font-semibold text-emerald-800">
          {meta.titleMl}
        </p>
        <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          {meta.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-800">Daily Study Requirement:</span>
            <span>{meta.dailyHours}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-800">Target Outcome:</span>
            <span>{meta.targetRole}</span>
          </div>
        </div>
      </div>

      {/* Careers Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">
            {trackCareers.length} Careers in this Track
          </h2>
          <Link href="/careers" className="text-xs font-semibold text-emerald-700 hover:underline">
            View all 40 careers &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trackCareers.map((career) => (
            <div
              key={career.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-lg hover:border-emerald-300 transition-all space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                    {career.category}
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                    Remote: {career.remotePotential}
                  </span>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {career.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">{career.titleMl}</p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                  {career.overview}
                </p>

                <div className="pt-3 border-t border-slate-100 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                      Entry Monthly Salary:
                    </span>
                    <span className="font-bold text-slate-900">
                      ₹{career.salaryRangeInr.entryMin.toLocaleString()} - ₹{career.salaryRangeInr.entryMax.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {career.toolsRequired.map((tool) => (
                      <span key={tool} className="text-[10px] font-medium bg-slate-50 border border-slate-200 text-slate-700 px-2 py-0.5 rounded">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                <Link
                  href={`/careers/${career.slug}`}
                  className="flex-1 text-center py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                >
                  Full Roadmap
                </Link>
                {track === '30-days' ? (
                  <Link
                    href={`/courses/${career.slug}`}
                    className="flex-1 text-center py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 shadow-sm transition-colors"
                  >
                    Start Course &rarr;
                  </Link>
                ) : (
                  <Link
                    href={`/careers/${career.slug}`}
                    className="flex-1 text-center py-2.5 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors"
                  >
                    View Curriculum
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
