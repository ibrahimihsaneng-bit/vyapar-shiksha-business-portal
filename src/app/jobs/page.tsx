'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
  Clock,
  Filter,
  RotateCcw,
  Sparkles,
  BookmarkCheck,
  X,
  ChevronRight,
  SlidersHorizontal,
  Check,
  Share2
} from 'lucide-react';
import { verifiedJobListings } from '@/data/jobs';
import { addApplication, getApplications } from '@/lib/storage';
import { JobListing } from '@/types';

export default function JobsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<string>('all');
  const [selectedMode, setSelectedMode] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSalary, setSelectedSalary] = useState<string>('all');
  const [ethicalOnly, setEthicalOnly] = useState<boolean>(true);
  const [activeJobId, setActiveJobId] = useState<string>(verifiedJobListings[0]?.id || '');
  const [trackedJobIds, setTrackedJobIds] = useState<string[]>([]);
  const [mobileDetailOpen, setMobileDetailOpen] = useState<boolean>(false);

  useEffect(() => {
    const existing = getApplications();
    const ids = existing.map(a => a.jobId || '').filter(Boolean);
    setTrackedJobIds(ids);
  }, []);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedLocation('all');
    setSelectedMode('all');
    setSelectedType('all');
    setSelectedCategory('all');
    setSelectedSalary('all');
    setEthicalOnly(false);
  };

  const filteredJobs = useMemo(() => {
    return verifiedJobListings.filter((job) => {
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = job.title.toLowerCase().includes(q);
        const matchesCompany = job.company.toLowerCase().includes(q);
        const matchesLocation = job.location.toLowerCase().includes(q);
        const matchesSkills = job.skillsRequired.some(s => s.toLowerCase().includes(q));
        const matchesCategory = job.category.toLowerCase().includes(q);
        if (!matchesTitle && !matchesCompany && !matchesLocation && !matchesSkills && !matchesCategory) {
          return false;
        }
      }

      if (selectedLocation !== 'all') {
        if (selectedLocation === 'remote' && job.workMode !== 'Remote') return false;
        if (selectedLocation === 'kerala' && !job.location.toLowerCase().includes('kerala') && !job.location.toLowerCase().includes('kochi') && !job.location.toLowerCase().includes('calicut') && !job.location.toLowerCase().includes('trivandrum')) return false;
        if (selectedLocation === 'bangalore' && !job.location.toLowerCase().includes('bangalore') && !job.location.toLowerCase().includes('bengaluru')) return false;
      }

      if (selectedMode !== 'all' && job.workMode !== selectedMode) {
        return false;
      }

      if (selectedType !== 'all' && job.jobType !== selectedType) {
        return false;
      }

      if (selectedCategory !== 'all' && job.category !== selectedCategory) {
        return false;
      }

      if (ethicalOnly && job.ethicalStatus !== 'Meets Criteria') {
        return false;
      }

      return true;
    });
  }, [searchQuery, selectedLocation, selectedMode, selectedType, selectedCategory, selectedSalary, ethicalOnly]);

  const activeJob = useMemo(() => {
    return verifiedJobListings.find(j => j.id === activeJobId) || filteredJobs[0] || verifiedJobListings[0];
  }, [activeJobId, filteredJobs]);

  const handleTrackJob = (job: JobListing) => {
    if (trackedJobIds.includes(job.id)) return;
    addApplication({
      jobId: job.id,
      jobTitle: job.title,
      company: job.company,
      location: job.location,
      salary: job.salaryText,
      link: job.directApplyUrl,
      status: 'Applied',
      notes: `Applied on ${new Date().toLocaleDateString()} via ${job.source}. Direct URL: ${job.directApplyUrl}`
    });
    setTrackedJobIds([...trackedJobIds, job.id]);
  };

  const getCompanyAvatarColor = (initials: string) => {
    const colors = [
      'bg-emerald-600 text-white',
      'bg-teal-700 text-white',
      'bg-slate-900 text-white',
      'bg-blue-700 text-white',
      'bg-indigo-700 text-white',
      'bg-cyan-800 text-white'
    ];
    let hash = 0;
    for (let i = 0; i < initials.length; i++) {
      hash = initials.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Top Banner Alert */}
      <div className="bg-gradient-to-r from-emerald-900 to-teal-900 rounded-3xl text-white p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/80 text-emerald-200 text-xs font-bold border border-emerald-700">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>100% Anti-Scam Audited &bull; Zero Registration Fees &bull; Direct Employer Links</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Verified Entry-Level & Remote Career Vacancies
          </h1>
          <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
            Every job listed here is hand-screened for ethical compliance and connects directly to genuine employers. We map each vacancy directly to our 30-Day and 60-Day practical training curricula.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/anti-scam"
            className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-bold text-white transition-all backdrop-blur-sm"
          >
            Anti-Scam Guide
          </Link>
          <Link
            href="/applications"
            className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-extrabold transition-all shadow-md"
          >
            My Applications Tracker ({trackedJobIds.length})
          </Link>
        </div>
      </div>

      {/* Main Split-Pane Layout (RemoteFind / Talently Architecture) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Pane: Filters (Col Span 3) */}
        <div className="lg:col-span-3 bg-white rounded-3xl border border-slate-200 p-5 shadow-sm space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
              <SlidersHorizontal className="w-4 h-4 text-emerald-600" />
              <span>Filters</span>
            </div>
            <button
              onClick={resetFilters}
              className="text-[11px] font-bold text-emerald-700 hover:underline flex items-center gap-1"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          </div>

          {/* Quick Search */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700">Keywords</label>
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Title, skill, tool..."
                className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
            </div>
          </div>

          {/* Location Filter */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700">Location Focus</label>
            <div className="space-y-1 text-xs">
              {[
                { id: 'all', label: 'All Locations' },
                { id: 'remote', label: '100% Remote / Pan-India' },
                { id: 'kerala', label: 'Kerala (Kochi, Calicut, TVM)' },
                { id: 'bangalore', label: 'Bengaluru / Tech Hubs' }
              ].map((loc) => (
                <button
                  key={loc.id}
                  onClick={() => setSelectedLocation(loc.id)}
                  className={`w-full text-left px-3 py-1.5 rounded-lg transition-colors text-xs font-medium ${
                    selectedLocation === loc.id
                      ? 'bg-emerald-50 text-emerald-900 font-bold'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {loc.label}
                </button>
              ))}
            </div>
          </div>

          {/* Work Mode */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700">Work Arrangement</label>
            <div className="grid grid-cols-3 gap-1.5 text-xs">
              {['all', 'Remote', 'Hybrid', 'Onsite'].map((mode) => (
                <button
                  key={mode}
                  onClick={() => setSelectedMode(mode)}
                  className={`py-1.5 rounded-lg border text-center transition-all capitalize font-medium text-[11px] ${
                    selectedMode === mode
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-900 font-bold'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {mode === 'all' ? 'All' : mode}
                </button>
              ))}
            </div>
          </div>

          {/* Job Type */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700">Employment Type</label>
            <div className="space-y-1 text-xs">
              {['all', 'Entry-Level', 'Trainee', 'Part-time', 'Freelance'].map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedType(t)}
                  className={`w-full text-left px-3 py-1.5 rounded-lg transition-colors text-xs font-medium ${
                    selectedType === t
                      ? 'bg-emerald-50 text-emerald-900 font-bold'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {t === 'all' ? 'All Types' : t}
                </button>
              ))}
            </div>
          </div>

          {/* Category */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700">Career Domain</label>
            <div className="space-y-1 text-xs">
              {[
                { id: 'all', label: 'All Categories' },
                { id: 'Finance & Administration', label: 'Finance & Accounts' },
                { id: 'Digital Operations & Commerce', label: 'E-commerce & Ops' },
                { id: 'Customer Support & Sales', label: 'Customer Chat & CRM' },
                { id: 'Design & Creative', label: 'Canva & WordPress Design' },
                { id: 'Data & Analytics', label: 'Data & Market Research' },
                { id: 'Technology & Development', label: 'QA Testing & Web Dev' }
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`w-full text-left px-3 py-1.5 rounded-lg transition-colors text-xs font-medium truncate ${
                    selectedCategory === cat.id
                      ? 'bg-emerald-50 text-emerald-900 font-bold'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Ethical Filter Switch */}
          <div className="pt-2 border-t border-slate-100">
            <label className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-200 cursor-pointer text-xs">
              <span className="font-bold text-emerald-950 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Ethically Verified Only</span>
              </span>
              <input
                type="checkbox"
                checked={ethicalOnly}
                onChange={(e) => setEthicalOnly(e.target.checked)}
                className="rounded text-emerald-600 focus:ring-emerald-500 w-4 h-4"
              />
            </label>
          </div>
        </div>

        {/* Center Pane: Job List Feed (Col Span 5) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Search Header Banner */}
          <div className="bg-white rounded-3xl border border-slate-200 p-5 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-base font-extrabold text-slate-900">
                  {filteredJobs.length} Verified Vacancies
                </h2>
                <p className="text-[11px] text-slate-500">
                  Targeted entry-level and trainee openings matching course curricula
                </p>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-100">
                Live Feed
              </span>
            </div>
          </div>

          {/* Job Cards */}
          <div className="space-y-3">
            {filteredJobs.map((job) => {
              const isSelected = activeJob.id === job.id;
              const isTracked = trackedJobIds.includes(job.id);
              const avatarColor = getCompanyAvatarColor(job.companyInitial || job.company.slice(0, 2));

              return (
                <div
                  key={job.id}
                  onClick={() => {
                    setActiveJobId(job.id);
                    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
                      setMobileDetailOpen(true);
                    }
                  }}
                  className={`bg-white rounded-2xl border p-4 sm:p-5 transition-all cursor-pointer relative ${
                    isSelected
                      ? 'border-emerald-500 ring-2 ring-emerald-500/20 shadow-md'
                      : 'border-slate-200 hover:border-slate-300 hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-xl ${avatarColor} flex items-center justify-center font-extrabold text-xs shrink-0 shadow-sm`}>
                        {job.companyInitial || job.company.slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <h3 className="font-bold text-sm text-slate-900 leading-snug hover:text-emerald-700">
                            {job.title}
                          </h3>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-slate-500 mt-0.5">
                          <span className="font-medium">{job.company}</span>
                          <span>&bull;</span>
                          <span className="flex items-center gap-0.5 text-emerald-700 font-semibold text-[11px]">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                            <span>Verified</span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleTrackJob(job);
                      }}
                      title={isTracked ? 'Saved in Applications' : 'Track Application'}
                      className={`p-1.5 rounded-lg border transition-all ${
                        isTracked
                          ? 'bg-emerald-50 border-emerald-300 text-emerald-700'
                          : 'border-slate-200 text-slate-400 hover:text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {isTracked ? <BookmarkCheck className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Pills */}
                  <div className="flex items-center gap-1.5 flex-wrap mt-3 text-[11px]">
                    <span className={`px-2 py-0.5 rounded-md font-semibold ${
                      job.workMode === 'Remote' ? 'bg-emerald-50 text-emerald-800 border border-emerald-100' :
                      job.workMode === 'Hybrid' ? 'bg-blue-50 text-blue-800 border border-blue-100' :
                      'bg-slate-100 text-slate-700'
                    }`}>
                      {job.workMode}
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-medium">
                      {job.jobType}
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-slate-50 text-slate-600 font-medium truncate max-w-[140px]">
                      {job.location}
                    </span>
                  </div>

                  {/* Bottom Row: Salary & Match */}
                  <div className="flex items-center justify-between pt-3 mt-3 border-t border-slate-100 text-xs">
                    <span className="font-extrabold text-emerald-700">
                      {job.salaryText}
                    </span>

                    <div className="flex items-center gap-2">
                      {job.courseMatchScore && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded-md border border-teal-100">
                          <Sparkles className="w-3 h-3 text-teal-600" />
                          <span>{job.courseMatchScore}% Match</span>
                        </span>
                      )}
                      <span className="text-[11px] font-bold text-emerald-700 flex items-center gap-0.5">
                        <span>Details</span>
                        <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}

            {filteredJobs.length === 0 && (
              <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center space-y-4">
                <div className="relative w-40 h-28 mx-auto">
                  <Image
                    src="/images/upgrade/empty-jobs.svg"
                    alt="No matching vacancies"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-bold text-slate-900 text-base">No Matching Vacancies Found</h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                  No active vacancies currently match your filter criteria. We audit job feeds weekly to ensure only genuine, non-scam opportunities are displayed.
                </p>
                <button
                  onClick={resetFilters}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right Pane: Persistent Active Job Details (Col Span 4) */}
        <div className={`lg:col-span-4 bg-white rounded-3xl border border-slate-200 p-6 shadow-sm sticky top-6 space-y-6 ${
          mobileDetailOpen ? 'fixed inset-0 z-50 overflow-y-auto rounded-none lg:relative lg:inset-auto lg:z-auto lg:rounded-3xl lg:overflow-visible' : 'hidden lg:block'
        }`}>
          {/* Mobile Close Button */}
          <div className="lg:hidden flex items-center justify-between pb-3 border-b border-slate-100">
            <span className="font-bold text-xs text-slate-500 uppercase tracking-wider">Job Details View</span>
            <button
              onClick={() => setMobileDetailOpen(false)}
              className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-600"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {activeJob ? (
            <div className="space-y-6">
              {/* Header Box */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-2xl ${getCompanyAvatarColor(activeJob.companyInitial || activeJob.company.slice(0, 2))} flex items-center justify-center font-extrabold text-sm shadow-sm`}>
                    {activeJob.companyInitial || activeJob.company.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h2 className="text-lg font-extrabold text-slate-900 leading-tight">
                      {activeJob.title}
                    </h2>
                    <div className="flex items-center gap-1.5 text-xs text-slate-600 mt-0.5">
                      <span className="font-semibold text-slate-800">{activeJob.company}</span>
                      <span>&bull;</span>
                      <span className="flex items-center gap-0.5 text-emerald-700 font-bold text-[11px]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Audited Employer</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Quick Spec Matrix */}
                <div className="grid grid-cols-2 gap-2 pt-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Location</span>
                    <span className="font-bold text-slate-800 truncate block mt-0.5">{activeJob.location}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Work Mode</span>
                    <span className="font-bold text-emerald-800 block mt-0.5">{activeJob.workMode}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Job Type</span>
                    <span className="font-bold text-slate-800 block mt-0.5">{activeJob.jobType}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Salary Band</span>
                    <span className="font-bold text-emerald-700 block mt-0.5">{activeJob.salaryText}</span>
                  </div>
                </div>

                {/* Primary Action Buttons */}
                <div className="flex items-center gap-2 pt-1">
                  <a
                    href={activeJob.directApplyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all"
                  >
                    <span>Explore Live Vacancies</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => handleTrackJob(activeJob)}
                    className={`px-4 py-3 rounded-xl border text-xs font-bold transition-all flex items-center gap-1.5 ${
                      trackedJobIds.includes(activeJob.id)
                        ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
                        : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {trackedJobIds.includes(activeJob.id) ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span>Tracked</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4" />
                        <span>Track</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <h3 className="font-bold text-xs uppercase tracking-wider text-slate-900">
                  Role Description
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {activeJob.description}
                </p>
              </div>

              {/* Core Responsibilities */}
              {activeJob.responsibilities && activeJob.responsibilities.length > 0 && (
                <div className="space-y-2">
                  <h3 className="font-bold text-xs uppercase tracking-wider text-slate-900">
                    Day-to-Day Responsibilities
                  </h3>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {activeJob.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Requirements & Skills */}
              <div className="space-y-2">
                <h3 className="font-bold text-xs uppercase tracking-wider text-slate-900">
                  Required Competencies & Tools
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {activeJob.skillsRequired.map((s, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-[11px] font-medium">
                      {s}
                    </span>
                  ))}
                </div>
                {activeJob.requirements && (
                  <ul className="space-y-1 pt-1 text-xs text-slate-600">
                    {activeJob.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                        <span className="leading-relaxed">{req}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Ethical Audit Box */}
              <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-xs space-y-1.5">
                <div className="flex items-center gap-1.5 font-bold text-emerald-950">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Ethical Audit: {activeJob.ethicalStatus}</span>
                </div>
                <p className="text-emerald-800 text-[11px] leading-relaxed">
                  {activeJob.ethicalReviewNotes}
                </p>
                <div className="text-[10px] text-emerald-700 font-semibold pt-1 border-t border-emerald-200/50">
                  Verified: {activeJob.lastVerifiedDate} &bull; Source: {activeJob.source}
                </div>
              </div>

              {/* Anti-Scam Guarantee Badge */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-slate-900">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Anti-Scam Verified Vacancy</span>
                </div>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  Zero recruitment fees, no advance training charges, and genuine registered corporate entity.
                </p>
              </div>

              {/* Link to matching course */}
              <div className="pt-2">
                <Link
                  href={`/courses/${activeJob.careerSlug}`}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-emerald-200 bg-emerald-50/50 hover:bg-emerald-50 text-emerald-800 font-bold text-xs transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Train For This Role (Free 30-Day Course) &rarr;</span>
                </Link>
              </div>
            </div>
          ) : (
            <div className="text-center py-12 text-slate-400 text-xs">
              Select a vacancy to inspect complete details.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
