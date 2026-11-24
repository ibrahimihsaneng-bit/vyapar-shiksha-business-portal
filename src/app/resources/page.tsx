'use client';

import React, { useState } from 'react';
import { BookOpen, ExternalLink, CheckCircle2, Search, Filter } from 'lucide-react';
import { freeLearningResources } from '@/data/resources';

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = freeLearningResources.filter((res) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      res.title.toLowerCase().includes(q) ||
      res.provider.toLowerCase().includes(q) ||
      res.topic.toLowerCase().includes(q)
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-100">
          <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
          <span>Curated Learning Directory &bull; 100% Free Resources</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Free Learning Resource Library
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          You don&apos;t need to pay for expensive bootcamps. Access verified, 100% free official documentation, YouTube courses, and vendor training from Zoho, Microsoft, Google, HubSpot, and Mozilla.
        </p>
      </div>

      {/* Search */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search resources by topic (Accounting, Excel, Shopify, CRM, HTML)..."
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
          />
        </div>
      </div>

      {/* Resource Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((res) => (
          <div
            key={res.id}
            className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                  {res.costStatus}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {res.duration}
                </span>
              </div>

              <div>
                <h3 className="font-bold text-base text-slate-900">{res.title}</h3>
                <p className="text-xs text-slate-500 font-medium mt-0.5">By {res.provider}</p>
              </div>

              <div className="flex flex-wrap gap-2 text-xs pt-1">
                <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-medium">
                  Topic: {res.topic}
                </span>
                <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-medium">
                  Level: {res.difficulty}
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-400">Account required: {res.accountRequired ? 'Yes (Free)' : 'No'}</span>
              <a
                href={res.directUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-emerald-700 hover:text-emerald-900 hover:underline"
              >
                <span>Access Free Resource</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
