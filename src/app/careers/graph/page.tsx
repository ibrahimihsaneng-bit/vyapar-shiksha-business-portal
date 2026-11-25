'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  Search,
  Compass,
  ArrowRight,
  TrendingUp,
  Award,
  Layers,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Clock,
  Briefcase,
  DollarSign,
  Laptop,
  Check,
  Building,
  Target,
  ExternalLink,
  Zap,
  Cpu,
  Calculator,
  Code,
  Palette,
  GraduationCap
} from 'lucide-react';
import { allCareers } from '@/data/careers';

export default function CareerGraphPage() {
  const [activeView, setActiveView] = useState<'graph' | 'pathfinder' | 'roadmap'>('graph');
  const [selectedNodeId, setSelectedNodeId] = useState<string>('bookkeeping');
  const [searchQuery, setSearchQuery] = useState('');

  // 3-Way Pathfinder comparison state (matching CareerHero)
  const [expandedSection, setExpandedSection] = useState<Record<string, boolean>>({
    skills: true,
    path: true,
    insights: false,
    companies: false
  });

  const toggleSection = (key: string) => {
    setExpandedSection(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const [selectedTrackFilter, setSelectedTrackFilter] = useState<string>('all');

  // Dynamically map all 60 careers into synaptic graph nodes
  const graphNodes = allCareers.map((c) => {
    const rawTrack = c.durationTrack.replace('-days', '').replace('-day', '');
    const trackNorm = `${rawTrack}-day`;
    const color = trackNorm === '30-day' ? '#14b8a6' :
                  trackNorm === '60-day' ? '#3b82f6' :
                  trackNorm === '90-day' ? '#a855f7' : '#f59e0b';

    const rawSkills = c.toolsRequired || (c.requiredSoftware ? c.requiredSoftware.map((s: any) => s.name) : []);
    const skills = rawSkills.length > 0
      ? rawSkills.slice(0, 3).map((t: string, idx: number) => ({ name: t, score: 96 - idx * 4 }))
      : [
          { name: 'Core Process Execution', score: 94 },
          { name: 'Industry Software Tools', score: 88 },
          { name: 'Quality & Deliverable Audit', score: 85 }
        ];

    const gaps = [
      { name: 'Cross-functional Workflows', percent: 45 },
      { name: 'Enterprise Best Practices', percent: 35 }
    ];

    return {
      id: c.slug,
      title: c.title,
      category: c.categoryName || 'General',
      color,
      track: trackNorm,
      skills,
      gaps,
      salary: c.entrySalaryRange ? `₹${(c.entrySalaryRange.min).toLocaleString('en-IN')} - ₹${(c.entrySalaryRange.max).toLocaleString('en-IN')}/mo` : '₹20,000 - ₹35,000/mo'
    };
  });

  const activeNode = graphNodes.find(n => n.id === selectedNodeId) || graphNodes[0];

  const filteredNodes = graphNodes.filter((n) => {
    const matchesTrack = selectedTrackFilter === 'all' || n.track === selectedTrackFilter;
    const matchesQuery = !searchQuery || n.title.toLowerCase().includes(searchQuery.toLowerCase()) || n.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTrack && matchesQuery;
  });

  return (
    <div className="space-y-8 pb-20 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Top Header & Breadcrumb */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold mb-1">
            <Link href="/" className="hover:text-slate-900">Home</Link>
            <span>&bull;</span>
            <Link href="/careers" className="hover:text-slate-900">Career Discovery</Link>
            <span>&bull;</span>
            <span className="text-emerald-700 font-bold">Interactive Exploration Graph</span>
          </div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Career Exploration & AI Roadmap
            </h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-200">
              PRO MAX Engine
            </span>
          </div>
        </div>

        {/* View Switcher Pills */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-2xl w-fit">
          <button
            onClick={() => setActiveView('graph')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeView === 'graph' ? 'bg-slate-900 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Exploration Graph
          </button>
          <button
            onClick={() => setActiveView('pathfinder')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeView === 'pathfinder' ? 'bg-slate-900 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Pathfinder Matrix (3-Way)
          </button>
          <button
            onClick={() => setActiveView('roadmap')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeView === 'roadmap' ? 'bg-slate-900 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Level Roadmap (L1–L4)
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* VIEW 1: CYBERPUNK / SCI-FI INTERACTIVE EXPLORATION GRAPH (Matching Image 6) */}
      {/* ========================================================================= */}
      {activeView === 'graph' && (
        <div className="space-y-6">
          {/* Main Visual Graph Canvas */}
          <div className="bg-slate-950 rounded-3xl p-6 sm:p-10 text-white border border-slate-800 shadow-2xl relative overflow-hidden">
            {/* Background Neural Grid and Glow Lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

            {/* Header Telemetry Bar */}
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center font-bold">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm sm:text-base text-white tracking-tight">
                    Synaptic Career Knowledge Graph
                  </h3>
                  <p className="text-xs text-slate-400">
                    Click any career node to inspect live competencies, skill gaps, and transition pathways.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-emerald-400 font-bold bg-emerald-950/80 border border-emerald-800 px-3 py-1 rounded-full">
                  {graphNodes.length} Nodes Indexed &bull; Live Telemetry
                </span>
              </div>
            </div>

            {/* Live Filter & Search Controls */}
            <div className="relative z-10 pt-4 pb-2 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 border-b border-slate-800/60">
              <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none w-full md:w-auto">
                {[
                  { id: 'all', label: `All Pathways (${graphNodes.length})` },
                  { id: '30-day', label: `30-Day (${graphNodes.filter(n => n.track === '30-day').length})` },
                  { id: '60-day', label: `60-Day (${graphNodes.filter(n => n.track === '60-day').length})` },
                  { id: '90-day', label: `90-Day (${graphNodes.filter(n => n.track === '90-day').length})` },
                  { id: '120-day', label: `120-Day (${graphNodes.filter(n => n.track === '120-day').length})` }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedTrackFilter(tab.id)}
                    className={`px-3 py-1 rounded-full text-[11px] font-mono font-bold transition-all whitespace-nowrap ${
                      selectedTrackFilter === tab.id
                        ? 'bg-emerald-500 text-slate-950 shadow-xs'
                        : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="relative w-full md:w-64">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter by title or skill..."
                  className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
              </div>
            </div>

            {/* Node Visual Grid Canvas (4 Dynamic Clusters) */}
            <div className="relative z-10 py-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
              {/* Cluster 1: 30-Day Foundation */}
              {(selectedTrackFilter === 'all' || selectedTrackFilter === '30-day') && (
                <div className="space-y-3">
                  <div className="text-xs font-mono uppercase tracking-wider text-teal-400 font-bold flex items-center justify-between pb-2 border-b border-slate-800">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                      <span>30-Day Foundation</span>
                    </span>
                    <span className="text-[10px] text-slate-400">
                      {filteredNodes.filter(n => n.track === '30-day').length} Nodes
                    </span>
                  </div>
                  <div className="max-h-[460px] overflow-y-auto pr-1 space-y-2.5 scrollbar-thin scrollbar-thumb-slate-800">
                    {filteredNodes.filter(n => n.track === '30-day').map(node => {
                      const isSelected = selectedNodeId === node.id;
                      return (
                        <div
                          key={node.id}
                          onClick={() => setSelectedNodeId(node.id)}
                          className={`p-3.5 rounded-2xl border transition-all cursor-pointer backdrop-blur-md relative ${
                            isSelected
                              ? 'bg-slate-900 border-teal-400 ring-2 ring-teal-500/30 shadow-[0_0_20px_rgba(20,184,166,0.3)]'
                              : 'bg-slate-900/60 border-slate-800/90 hover:border-slate-700 hover:bg-slate-900/90'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-bold truncate max-w-[120px]">
                              {node.category}
                            </span>
                            <span className="text-[10px] font-bold text-teal-400 font-mono">
                              30-Day
                            </span>
                          </div>
                          <h4 className="font-bold text-xs sm:text-sm text-white leading-tight">{node.title}</h4>
                          <div className="mt-2 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                            <span>Core Skill:</span>
                            <span className="text-teal-400 font-bold">{node.skills[0]?.name || 'Workflow'}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Cluster 2: 60-Day Mid-Tier Transition */}
              {(selectedTrackFilter === 'all' || selectedTrackFilter === '60-day') && (
                <div className="space-y-3">
                  <div className="text-xs font-mono uppercase tracking-wider text-blue-400 font-bold flex items-center justify-between pb-2 border-b border-slate-800">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                      <span>60-Day Mid-Tier</span>
                    </span>
                    <span className="text-[10px] text-slate-400">
                      {filteredNodes.filter(n => n.track === '60-day').length} Nodes
                    </span>
                  </div>
                  <div className="max-h-[460px] overflow-y-auto pr-1 space-y-2.5 scrollbar-thin scrollbar-thumb-slate-800">
                    {filteredNodes.filter(n => n.track === '60-day').map(node => {
                      const isSelected = selectedNodeId === node.id;
                      return (
                        <div
                          key={node.id}
                          onClick={() => setSelectedNodeId(node.id)}
                          className={`p-3.5 rounded-2xl border transition-all cursor-pointer backdrop-blur-md relative ${
                            isSelected
                              ? 'bg-slate-900 border-blue-400 ring-2 ring-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.3)]'
                              : 'bg-slate-900/60 border-slate-800/90 hover:border-slate-700 hover:bg-slate-900/90'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-bold truncate max-w-[120px]">
                              {node.category}
                            </span>
                            <span className="text-[10px] font-bold text-blue-400 font-mono">
                              60-Day
                            </span>
                          </div>
                          <h4 className="font-bold text-xs sm:text-sm text-white leading-tight">{node.title}</h4>
                          <div className="mt-2 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                            <span>Core Skill:</span>
                            <span className="text-blue-400 font-bold">{node.skills[0]?.name || 'Workflow'}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Cluster 3: 90-Day Advanced Specialization */}
              {(selectedTrackFilter === 'all' || selectedTrackFilter === '90-day') && (
                <div className="space-y-3">
                  <div className="text-xs font-mono uppercase tracking-wider text-purple-400 font-bold flex items-center justify-between pb-2 border-b border-slate-800">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                      <span>90-Day Specialization</span>
                    </span>
                    <span className="text-[10px] text-slate-400">
                      {filteredNodes.filter(n => n.track === '90-day').length} Nodes
                    </span>
                  </div>
                  <div className="max-h-[460px] overflow-y-auto pr-1 space-y-2.5 scrollbar-thin scrollbar-thumb-slate-800">
                    {filteredNodes.filter(n => n.track === '90-day').map(node => {
                      const isSelected = selectedNodeId === node.id;
                      return (
                        <div
                          key={node.id}
                          onClick={() => setSelectedNodeId(node.id)}
                          className={`p-3.5 rounded-2xl border transition-all cursor-pointer backdrop-blur-md relative ${
                            isSelected
                              ? 'bg-slate-900 border-purple-400 ring-2 ring-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.3)]'
                              : 'bg-slate-900/60 border-slate-800/90 hover:border-slate-700 hover:bg-slate-900/90'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-bold truncate max-w-[120px]">
                              {node.category}
                            </span>
                            <span className="text-[10px] font-bold text-purple-400 font-mono">
                              90-Day
                            </span>
                          </div>
                          <h4 className="font-bold text-xs sm:text-sm text-white leading-tight">{node.title}</h4>
                          <div className="mt-2 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                            <span>Core Skill:</span>
                            <span className="text-purple-400 font-bold">{node.skills[0]?.name || 'Workflow'}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Cluster 4: 120-Day Mastery & Leadership */}
              {(selectedTrackFilter === 'all' || selectedTrackFilter === '120-day') && (
                <div className="space-y-3">
                  <div className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold flex items-center justify-between pb-2 border-b border-slate-800">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                      <span>120-Day Mastery</span>
                    </span>
                    <span className="text-[10px] text-slate-400">
                      {filteredNodes.filter(n => n.track === '120-day').length} Nodes
                    </span>
                  </div>
                  <div className="max-h-[460px] overflow-y-auto pr-1 space-y-2.5 scrollbar-thin scrollbar-thumb-slate-800">
                    {filteredNodes.filter(n => n.track === '120-day').map(node => {
                      const isSelected = selectedNodeId === node.id;
                      return (
                        <div
                          key={node.id}
                          onClick={() => setSelectedNodeId(node.id)}
                          className={`p-3.5 rounded-2xl border transition-all cursor-pointer backdrop-blur-md relative ${
                            isSelected
                              ? 'bg-slate-900 border-amber-400 ring-2 ring-amber-500/30 shadow-[0_0_20px_rgba(245,158,11,0.3)]'
                              : 'bg-slate-900/60 border-slate-800/90 hover:border-slate-700 hover:bg-slate-900/90'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-bold truncate max-w-[120px]">
                              {node.category}
                            </span>
                            <span className="text-[10px] font-bold text-amber-400 font-mono">
                              120-Day
                            </span>
                          </div>
                          <h4 className="font-bold text-xs sm:text-sm text-white leading-tight">{node.title}</h4>
                          <div className="mt-2 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                            <span>Core Skill:</span>
                            <span className="text-amber-400 font-bold">{node.skills[0]?.name || 'Workflow'}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Bottom Telemetry & Gap Analysis Bar (Exact match to Image 6 Bottom Row) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* 1. Skill Mastery Breakdown (4 cols) */}
            <div className="lg:col-span-4 bg-slate-900 text-white rounded-3xl border border-slate-800 p-6 space-y-4 shadow-xl">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Skill Analysis: <strong className="text-white">{activeNode.title}</strong>
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>

              <div className="space-y-3">
                {activeNode.skills.map((skill, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center justify-between text-xs font-semibold">
                      <span className="text-slate-300">{skill.name}</span>
                      <span className="font-mono text-emerald-400 font-bold">{skill.score}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-500"
                        style={{ width: `${skill.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Skill Development Gaps (4 cols) */}
            <div className="lg:col-span-4 bg-slate-900 text-white rounded-3xl border border-slate-800 p-6 space-y-4 shadow-xl">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Skill Development Gaps
                </span>
                <span className="w-2 h-2 rounded-full bg-purple-400" />
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                {activeNode.gaps.map((gap, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col items-center justify-center text-center space-y-2">
                    <div className="relative w-16 h-16 flex items-center justify-center">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          className="text-slate-800"
                          strokeWidth="3"
                          stroke="currentColor"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path
                          className="text-purple-400"
                          strokeDasharray={`${gap.percent}, 100`}
                          strokeWidth="3"
                          strokeLinecap="round"
                          stroke="currentColor"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                      </svg>
                      <span className="absolute text-xs font-mono font-bold text-white">
                        {gap.percent}%
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-slate-300 leading-tight">
                      {gap.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Career Path Progress Timeline (4 cols) */}
            <div className="lg:col-span-4 bg-slate-900 text-white rounded-3xl border border-slate-800 p-6 space-y-4 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Trajectory Milestone Ladder
                  </span>
                  <span className="text-xs font-bold text-teal-400 font-mono">Level L1–L4</span>
                </div>

                <div className="space-y-2 pt-3 text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-emerald-500/40 flex items-center justify-between">
                    <span className="font-semibold text-slate-300">L1: Beginner Trainee</span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-[10px]">
                      Completed &bull; 100%
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-teal-500/40 flex items-center justify-between">
                    <span className="font-semibold text-white">L2: Junior Practitioner</span>
                    <span className="px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-400 font-bold text-[10px]">
                      Current Role &bull; 65%
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between text-slate-500">
                    <span>L3: Department Specialist</span>
                    <span className="text-[10px] font-mono flex items-center gap-1">
                      <Lock className="w-3 h-3" /> Locked
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-3">
                <Link
                  href={`/careers/${activeNode.id}`}
                  className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-black text-xs transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span>Launch {activeNode.title} Learning</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* VIEW 2: 3-WAY PATHFINDER COMPARISON MATRIX (Matching Image 2 CareerHero) */}
      {/* ========================================================================= */}
      {activeView === 'pathfinder' && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Your Personalized Career Transition Paths
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  Based on your skills, study hours, and ethical requirements, we identified these 3 high-affinity pathways.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-teal-50 border border-teal-200 text-teal-800">
                  AI-Powered Matching
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 border border-blue-200 text-blue-800">
                  Live Opportunities
                </span>
              </div>
            </div>

            {/* 3-Column Comparison Grid matching Reference Image */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 items-start">
              {/* Card 1: Virtual Assistant */}
              <div className="bg-slate-50/80 rounded-3xl border border-slate-200 p-6 space-y-5 shadow-xs flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                      30-Day Track
                    </span>
                    <span className="text-xs font-bold text-emerald-700">95% Match</span>
                  </div>
                  <h4 className="font-extrabold text-lg text-slate-900">Virtual Assistant</h4>
                  <div className="flex items-center gap-3 text-xs text-slate-500 font-semibold flex-wrap">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> 0-1 month transition
                    </span>
                    <span className="flex items-center gap-1 font-bold text-slate-800">
                      ₹18,000 - ₹32,000 / mo
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Provide remote executive support, manage client correspondence, calendar scheduling, and team workflows.
                  </p>

                  <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full w-[95%]" />
                  </div>

                  {/* Accordion Sections */}
                  <div className="pt-2 border-t border-slate-200 space-y-2 text-xs">
                    <div className="space-y-1">
                      <span className="font-bold text-slate-700 block">Required Skills:</span>
                      <p className="text-slate-500 text-[11px]">Google Calendar, Email Triage, Spreadsheet Tracking, Slack</p>
                    </div>

                    <div className="space-y-1 pt-1">
                      <span className="font-bold text-slate-700 block">Market Trends:</span>
                      <p className="text-slate-500 text-[11px]">&bull; High remote US/Gulf client demand for punctual coordinators</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <Link
                    href="/careers/virtual-assistant"
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-xs"
                  >
                    <span>Create Transition Plan</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Card 2: Basic Bookkeeping */}
              <div className="bg-slate-50/80 rounded-3xl border border-slate-200 p-6 space-y-5 shadow-xs flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-blue-800">
                      30-Day Track
                    </span>
                    <span className="text-xs font-bold text-blue-700">92% Match</span>
                  </div>
                  <h4 className="font-extrabold text-lg text-slate-900">Bookkeeping & Invoicing</h4>
                  <div className="flex items-center gap-3 text-xs text-slate-500 font-semibold flex-wrap">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> 1-2 months transition
                    </span>
                    <span className="flex items-center gap-1 font-bold text-slate-800">
                      ₹18,000 - ₹35,000 / mo
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Record day-to-day business transactions, manage customer invoicing, and reconcile monthly bank statements.
                  </p>

                  <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full w-[92%]" />
                  </div>

                  {/* Accordion Sections */}
                  <div className="pt-2 border-t border-slate-200 space-y-2 text-xs">
                    <div className="space-y-1">
                      <span className="font-bold text-slate-700 block">Required Skills:</span>
                      <p className="text-slate-500 text-[11px]">Double-Entry Ledger, BRS Statements, Zoho Books, Google Sheets</p>
                    </div>

                    <div className="space-y-1 pt-1">
                      <span className="font-bold text-slate-700 block">Market Trends:</span>
                      <p className="text-slate-500 text-[11px]">&bull; Shift toward cloud reconciliation platforms (Zoho, Xero)</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <Link
                    href="/careers/basic-bookkeeping"
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-xs"
                  >
                    <span>Create Transition Plan</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Card 3: E-commerce Operations */}
              <div className="bg-slate-50/80 rounded-3xl border border-slate-200 p-6 space-y-5 shadow-xs flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-purple-100 text-purple-800">
                      30-Day Track
                    </span>
                    <span className="text-xs font-bold text-purple-700">88% Match</span>
                  </div>
                  <h4 className="font-extrabold text-lg text-slate-900">E-commerce Store Specialist</h4>
                  <div className="flex items-center gap-3 text-xs text-slate-500 font-semibold flex-wrap">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> 1-2 months transition
                    </span>
                    <span className="flex items-center gap-1 font-bold text-slate-800">
                      ₹18,000 - ₹32,000 / mo
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Upload product listings, manage inventory levels, process customer orders, and update store catalogs.
                  </p>

                  <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
                    <div className="h-full bg-purple-500 rounded-full w-[88%]" />
                  </div>

                  {/* Accordion Sections */}
                  <div className="pt-2 border-t border-slate-200 space-y-2 text-xs">
                    <div className="space-y-1">
                      <span className="font-bold text-slate-700 block">Required Skills:</span>
                      <p className="text-slate-500 text-[11px]">Shopify Admin, Product Image Resizing, Inventory CSVs</p>
                    </div>

                    <div className="space-y-1 pt-1">
                      <span className="font-bold text-slate-700 block">Market Trends:</span>
                      <p className="text-slate-500 text-[11px]">&bull; Massive growth in direct-to-consumer online retail brands</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <Link
                    href="/careers/ecommerce-operations"
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-xs"
                  >
                    <span>Create Transition Plan</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* VIEW 3: LEVEL ROADMAP L1-L4 (Matching Image 5 Plano de Carreira) */}
      {/* ========================================================================= */}
      {activeView === 'roadmap' && (
        <div className="space-y-6">
          <div className="bg-slate-950 text-white rounded-3xl border border-slate-800 p-6 sm:p-10 shadow-2xl space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <h3 className="text-2xl font-black text-white tracking-tight">
                  Career Trajectory Roadmap
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  Track your progressive skill evolution from beginner entry to verified department leadership.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs">
                <span className="text-slate-400">Current Milestone:</span>
                <span className="font-bold text-emerald-400 font-mono">Level 02 &bull; 65% Completed</span>
              </div>
            </div>

            {/* Stepper Columns Grid (Matching Plano de Carreira Reference) */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start">
              {/* Level 1: Completed */}
              <div className="bg-slate-900 rounded-2xl border border-slate-800 p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-800 text-slate-300">
                    Level 01
                  </span>
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold border border-emerald-500/40">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div>
                  <h4 className="font-extrabold text-base text-white">Foundation Intern</h4>
                  <span className="text-xs text-emerald-400 font-semibold block mt-0.5">Status: Completed</span>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-slate-800/80 text-xs">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Required Competencies:
                  </span>
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Basic Accounting Ledger</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Google Sheets Formulas</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Workplace Email Etiquette</span>
                  </div>
                </div>
              </div>

              {/* Level 2: In-Progress */}
              <div className="bg-slate-900 rounded-2xl border-2 border-emerald-500/80 p-5 space-y-4 shadow-[0_0_20px_rgba(16,185,129,0.15)] relative">
                <div className="absolute -top-3 left-4 px-2.5 py-0.5 rounded-full bg-emerald-500 text-slate-950 font-black text-[10px] uppercase tracking-wider">
                  Active Sprint
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Level 02
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-400">65%</span>
                </div>

                <div>
                  <h4 className="font-extrabold text-base text-white">Junior Practitioner</h4>
                  <span className="text-xs text-teal-300 font-semibold block mt-0.5">Status: In Progress</span>
                </div>

                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full w-[65%]" />
                </div>

                <div className="space-y-1.5 pt-2 border-t border-slate-800/80 text-xs">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Required Competencies:
                  </span>
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Corporate BRS Reconciliation</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <div className="w-3.5 h-3.5 rounded-full border-2 border-emerald-400 flex items-center justify-center shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    </div>
                    <span className="text-white font-bold">Zoho Books Cloud Ledgers</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <div className="w-3.5 h-3.5 rounded-full border border-slate-600 shrink-0" />
                    <span>Quarterly Tax Audit Prep</span>
                  </div>
                </div>
              </div>

              {/* Level 3: Locked */}
              <div className="bg-slate-900/60 rounded-2xl border border-slate-800 p-5 space-y-4 opacity-75">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-800 text-slate-400">
                    Level 03
                  </span>
                  <Lock className="w-4 h-4 text-slate-500" />
                </div>

                <div>
                  <h4 className="font-extrabold text-base text-slate-300">Department Specialist</h4>
                  <span className="text-xs text-slate-500 font-semibold block mt-0.5">Locked &bull; Reqs Level 02</span>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-slate-800/80 text-xs text-slate-500">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                    Future Competencies:
                  </span>
                  <div>&bull; Multi-Entity Consolidation</div>
                  <div>&bull; Financial FP&A Forecasting</div>
                  <div>&bull; Team Quality Verification</div>
                </div>
              </div>

              {/* Level 4: Locked */}
              <div className="bg-slate-900/40 rounded-2xl border border-slate-800/80 p-5 space-y-4 opacity-50">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-800 text-slate-500">
                    Level 04
                  </span>
                  <Lock className="w-4 h-4 text-slate-600" />
                </div>

                <div>
                  <h4 className="font-extrabold text-base text-slate-400">Operations Director</h4>
                  <span className="text-xs text-slate-600 font-semibold block mt-0.5">Locked &bull; Executive</span>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-slate-800/80 text-xs text-slate-600">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 block">
                    Executive Skills:
                  </span>
                  <div>&bull; Strategic Budgeting</div>
                  <div>&bull; Cross-Border Regulatory Tax</div>
                  <div>&bull; Audit Firm Representation</div>
                </div>
              </div>
            </div>

            {/* Next Recommended Action Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950/80 to-slate-900 border border-emerald-500/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold">
                    Next Recommended Milestone Action:
                  </span>
                  <h4 className="font-extrabold text-base text-white">
                    Complete Module 3: Zoho Books Ledger Adjustments
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Estimated Time: 2h 15m &bull; Impact on Trajectory: +15% Progression to Level 03
                  </p>
                </div>
              </div>

              <Link
                href="/courses/bookkeeping-invoicing"
                className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs transition-all shadow-md shrink-0 inline-flex items-center gap-2"
              >
                <span>Resume Lesson Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
