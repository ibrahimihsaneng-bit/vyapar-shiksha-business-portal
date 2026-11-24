'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Briefcase,
  Search,
  MapPin,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Plus,
  AlertTriangle,
  Building,
  Clock
} from 'lucide-react';
import { verifiedJobListings } from '@/data/jobs';
import { addApplication } from '@/lib/storage';

export default function JobsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMode, setSelectedMode] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [addedJobs, setAddedJobs] = useState<string[]>([]);

  const filteredJobs = useMemo(() => {
    return verifiedJobListings.filter((job) => {
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = job.title.toLowerCase().includes(q);
        const matchesCompany = job.company.toLowerCase().includes(q);
        const matchesLocation = job.location.toLowerCase().includes(q);
        const matchesSkills = job.skillsRequired.some(s => s.toLowerCase().includes(q));
        if (!matchesTitle && !matchesCompany && !matchesLocation && !matchesSkills) {
          return false;
        }
      }

      if (selectedMode !== 'all' && job.workMode !== selectedMode) {
        return false;
      }

      if (selectedType !== 'all' && job.jobType !== selectedType) {
        return false;
      }

      return true;
    });
  }, [searchQuery, selectedMode, selectedType]);

  const handleTrackJob = (job: typeof verifiedJobListings[0]) => {
    addApplication({
      jobId: job.id,
      jobTitle: job.title,
      company: job.company,
      status: 'Applied',
      notes: `Applied on ${new Date().toLocaleDateString()} via ${job.source}.`
    });
    setAddedJobs([...addedJobs, job.id]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-100">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Ethically Audited &bull; Zero Recruitment Fees &bull; Anti-Scam Verified</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Verified Entry-Level & Remote Job Openings
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          Every job posted here is verified against our strict ethical standards: genuine corporate employers, zero data entry registration fees, transparent salaries, and safe working environments.
        </p>

        {/* Anti-Scam Notice */}
        <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200/80 text-xs text-amber-900 flex items-start gap-2.5">
          <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Important Safety Rule:</strong> Legitimate employers will <em>never</em> ask you to pay money for "registration", "software installation", or "security deposits". If any recruiter asks for payment, report them immediately.
          </p>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search jobs by title, skills (Excel, Zoho, Shopify), or city..."
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm placeholder:text-slate-400"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs">
          <div>
            <label className="block font-semibold text-slate-700 mb-1.5">Work Mode</label>
            <select
              value={selectedMode}
              onChange={(e) => setSelectedMode(e.target.value)}
              className="w-full p-2.5 rounded-lg border border-slate-200 bg-white font-medium text-slate-700"
            >
              <option value="all">All Modes (Remote, Hybrid, Onsite)</option>
              <option value="Remote">100% Remote / Work from Home</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Onsite">Onsite</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1.5">Job Type</label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full p-2.5 rounded-lg border border-slate-200 bg-white font-medium text-slate-700"
            >
              <option value="all">All Types</option>
              <option value="Entry-Level">Entry-Level</option>
              <option value="Internship">Internship</option>
              <option value="Trainee">Trainee</option>
              <option value="Part-time">Part-time</option>
            </select>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs text-slate-500">
          <span>Showing <strong className="text-slate-800">{filteredJobs.length}</strong> verified vacancies</span>
          <Link href="/applications" className="text-emerald-700 font-semibold hover:underline">
            View My Tracked Applications &rarr;
          </Link>
        </div>
      </div>

      {/* Jobs Grid */}
      <div className="space-y-4">
        {filteredJobs.map((job) => {
          const isTracked = addedJobs.includes(job.id);

          return (
            <div
              key={job.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-100">
                      {job.workMode}
                    </span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      {job.jobType}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg text-slate-900">{job.title}</h3>
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span className="flex items-center gap-1 font-semibold text-slate-700">
                      <Building className="w-3.5 h-3.5" />
                      {job.company}
                    </span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {job.location}
                    </span>
                  </div>
                </div>

                <div className="text-left sm:text-right self-start sm:self-auto">
                  <div className="text-xs text-slate-400">Monthly Compensation</div>
                  <div className="text-lg font-extrabold text-emerald-700">{job.salaryText}</div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {job.description}
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {job.skillsRequired.map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] font-medium bg-slate-50 border border-slate-200 text-slate-700 px-2 py-0.5 rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Trust Footer & Actions */}
              <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 text-slate-500">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{job.ethicalReviewNotes}</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <button
                    onClick={() => handleTrackJob(job)}
                    disabled={isTracked}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                      isTracked
                        ? 'bg-slate-100 text-slate-400 cursor-default'
                        : 'border border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {isTracked ? 'Tracked in Dashboard' : '+ Track Application'}
                  </button>

                  <a
                    href={job.directApplyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition-colors shadow-sm"
                  >
                    <span>Apply on {job.source.split(' ')[0]}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
