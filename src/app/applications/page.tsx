'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import {
  Briefcase,
  Plus,
  Building,
  Calendar,
  CheckCircle2,
  Clock,
  ArrowRight,
  Trash2,
  Sparkles,
  Search,
  ExternalLink,
  ChevronRight,
  X,
  Trophy,
  Laptop,
  Check,
  LayoutGrid,
  Table as TableIcon,
  Filter,
  MapPin,
  FileText
} from 'lucide-react';
import {
  getApplications,
  addApplication,
  updateApplicationStatus,
  deleteApplication
} from '@/lib/storage';
import { ApplicationItem } from '@/types';

type KanbanStage = 'Saved' | 'Applied' | 'HR Screen' | 'Technical' | 'Offer' | 'Closed';

export default function ApplicationsPage() {
  const [apps, setApps] = useState<ApplicationItem[]>([]);
  const [viewMode, setViewMode] = useState<'board' | 'table'>('board');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStageFilter, setSelectedStageFilter] = useState<string>('all');
  const [showAddModal, setShowAddModal] = useState(false);

  // New Application Form State
  const [newTitle, setNewTitle] = useState('');
  const [newCompany, setNewCompany] = useState('');
  const [newLocation, setNewLocation] = useState('Remote');
  const [newSalary, setNewSalary] = useState('');
  const [newLink, setNewLink] = useState('');
  const [newStage, setNewStage] = useState<KanbanStage>('Applied');
  const [newNotes, setNewNotes] = useState('');

  useEffect(() => {
    setApps(getApplications());
  }, []);

  const handleStatusChange = (id: string, newStatus: ApplicationItem['status']) => {
    updateApplicationStatus(id, newStatus);
    setApps(getApplications());
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to remove this application card?')) {
      deleteApplication(id);
      setApps(getApplications());
    }
  };

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newCompany.trim()) return;

    addApplication({
      jobId: `custom-${Date.now()}`,
      jobTitle: newTitle.trim(),
      company: newCompany.trim(),
      status: newStage,
      location: newLocation.trim() || 'Remote',
      salary: newSalary.trim(),
      link: newLink.trim(),
      notes: newNotes.trim()
    });

    setApps(getApplications());
    setNewTitle('');
    setNewCompany('');
    setNewLocation('Remote');
    setNewSalary('');
    setNewLink('');
    setNewNotes('');
    setNewStage('Applied');
    setShowAddModal(false);
  };

  // Normalization helper for legacy statuses
  const normalizeStage = (status: ApplicationItem['status']): KanbanStage => {
    if (status === 'Saved') return 'Saved';
    if (status === 'Applied') return 'Applied';
    if (status === 'Reviewing' || status === 'HR Screen') return 'HR Screen';
    if (status === 'Interview Scheduled' || status === 'Technical') return 'Technical';
    if (status === 'Offer') return 'Offer';
    if (status === 'Rejected' || status === 'Closed') return 'Closed';
    return 'Applied';
  };

  const filteredApps = useMemo(() => {
    return apps.filter(app => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q ||
        app.jobTitle.toLowerCase().includes(q) ||
        app.company.toLowerCase().includes(q) ||
        (app.location && app.location.toLowerCase().includes(q)) ||
        (app.notes && app.notes.toLowerCase().includes(q));

      if (!matchesSearch) return false;

      if (selectedStageFilter !== 'all') {
        if (normalizeStage(app.status) !== selectedStageFilter) return false;
      }

      return true;
    });
  }, [apps, searchQuery, selectedStageFilter]);

  // Stage Metrics Calculations
  const stats = useMemo(() => {
    const total = apps.length;
    const saved = apps.filter(a => normalizeStage(a.status) === 'Saved').length;
    const applied = apps.filter(a => normalizeStage(a.status) === 'Applied').length;
    const interviews = apps.filter(a => {
      const s = normalizeStage(a.status);
      return s === 'HR Screen' || s === 'Technical';
    }).length;
    const offers = apps.filter(a => normalizeStage(a.status) === 'Offer').length;

    return { total, saved, applied, interviews, offers };
  }, [apps]);

  const stages: Array<{
    id: KanbanStage;
    label: string;
    color: string;
    borderAccent: string;
    badgeBg: string;
  }> = [
    { id: 'Saved', label: 'Saved', color: 'text-slate-700', borderAccent: 'border-slate-300', badgeBg: 'bg-slate-100 text-slate-700' },
    { id: 'Applied', label: 'Applied', color: 'text-emerald-700', borderAccent: 'border-emerald-500', badgeBg: 'bg-emerald-100 text-emerald-800' },
    { id: 'HR Screen', label: 'HR Screen', color: 'text-blue-700', borderAccent: 'border-blue-500', badgeBg: 'bg-blue-100 text-blue-800' },
    { id: 'Technical', label: 'Technical', color: 'text-purple-700', borderAccent: 'border-purple-500', badgeBg: 'bg-purple-100 text-purple-800' },
    { id: 'Offer', label: 'Offer', color: 'text-amber-700', borderAccent: 'border-amber-500', badgeBg: 'bg-amber-100 text-amber-800' },
    { id: 'Closed', label: 'Closed', color: 'text-red-700', borderAccent: 'border-red-500', badgeBg: 'bg-red-100 text-red-800' },
  ];

  const getNextStage = (current: KanbanStage): KanbanStage | null => {
    const order: KanbanStage[] = ['Saved', 'Applied', 'HR Screen', 'Technical', 'Offer'];
    const idx = order.indexOf(current);
    if (idx >= 0 && idx < order.length - 1) {
      return order[idx + 1];
    }
    return null;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Top Header & Search Bar (My Board Style) */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-5">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-emerald-600 text-white font-extrabold flex items-center justify-center text-lg shadow-sm">
            <Briefcase className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                My Board
              </h1>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                Live Tracker
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Manage your job search pipeline, interview stages, and offers with persistent local progress.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search applications..."
              className="pl-9 pr-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500 w-48 sm:w-56"
            />
          </div>

          <button
            onClick={() => setShowAddModal(true)}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-md shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>Create Application</span>
          </button>

          <Link
            href="/jobs"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors shrink-0"
          >
            <span>Explore Jobs</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Top 5 Metric Cards (Matching Uploaded Reference UI) */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        {/* Total */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center font-bold">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <div className="text-2xl font-black text-slate-900 leading-none">{stats.total}</div>
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-1">Total</div>
          </div>
        </div>

        {/* Saved */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center font-bold">
            <Building className="w-5 h-5" />
          </div>
          <div>
            <div className="text-2xl font-black text-slate-800 leading-none">{stats.saved}</div>
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-1">Saved</div>
          </div>
        </div>

        {/* Applied */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <div className="text-2xl font-black text-emerald-700 leading-none">{stats.applied}</div>
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-1">Applied</div>
          </div>
        </div>

        {/* Interviews */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold">
            <Laptop className="w-5 h-5" />
          </div>
          <div>
            <div className="text-2xl font-black text-purple-700 leading-none">{stats.interviews}</div>
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-1">Interviews</div>
          </div>
        </div>

        {/* Offers */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3 col-span-2 sm:col-span-1">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
            <Trophy className="w-5 h-5" />
          </div>
          <div>
            <div className="text-2xl font-black text-amber-600 leading-none">{stats.offers}</div>
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-1">Offers</div>
          </div>
        </div>
      </div>

      {/* Filter and View Switcher Row */}
      <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-slate-400" />
          <select
            value={selectedStageFilter}
            onChange={(e) => setSelectedStageFilter(e.target.value)}
            className="p-1.5 rounded-lg border border-slate-200 font-semibold text-slate-700 focus:outline-none focus:ring-1 focus:ring-emerald-500"
          >
            <option value="all">All Stages ({filteredApps.length} jobs)</option>
            {stages.map(s => (
              <option key={s.id} value={s.id}>{s.label}</option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
          <button
            onClick={() => setViewMode('board')}
            className={`px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 transition-all ${
              viewMode === 'board' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>Board</span>
          </button>
          <button
            onClick={() => setViewMode('table')}
            className={`px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 transition-all ${
              viewMode === 'table' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <TableIcon className="w-3.5 h-3.5" />
            <span>Table</span>
          </button>
        </div>
      </div>

      {/* Kanban Board Mode (6 Columns matching Reference UI) */}
      {viewMode === 'board' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 items-start">
          {stages.map((stage) => {
            const stageApps = filteredApps.filter(a => normalizeStage(a.status) === stage.id);

            return (
              <div
                key={stage.id}
                className="bg-slate-50/70 rounded-2xl border border-slate-200/80 p-3.5 space-y-3 min-h-[420px] flex flex-col"
              >
                {/* Column Header */}
                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-4 rounded-full ${stage.borderAccent.replace('border-', 'bg-')}`} />
                    <span className="font-extrabold text-xs text-slate-800">{stage.label}</span>
                  </div>
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${stage.badgeBg}`}>
                    {stageApps.length}
                  </span>
                </div>

                {/* Cards Container */}
                <div className="space-y-3 flex-1">
                  {stageApps.map((item) => {
                    const nextStage = getNextStage(stage.id);

                    return (
                      <div
                        key={item.id}
                        className="bg-white rounded-xl border border-slate-200 p-3.5 shadow-xs hover:shadow-md transition-all space-y-2.5 relative group"
                      >
                        {/* Company & Link */}
                        <div className="flex items-start justify-between gap-2">
                          <span className="font-bold text-xs text-slate-800 flex items-center gap-1 truncate">
                            <Building className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                            <span className="truncate">{item.company}</span>
                          </span>
                          {item.link && (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-slate-400 hover:text-emerald-700"
                            >
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </div>

                        {/* Title */}
                        <h4 className="font-extrabold text-xs text-slate-900 leading-tight">
                          {item.jobTitle}
                        </h4>

                        {/* Location / Salary */}
                        <div className="flex items-center gap-2 text-[10px] text-slate-500 flex-wrap">
                          {item.location && (
                            <span className="flex items-center gap-0.5">
                              <MapPin className="w-3 h-3 text-slate-400" />
                              <span>{item.location}</span>
                            </span>
                          )}
                          {item.salary && (
                            <span className="font-bold text-emerald-700">
                              {item.salary}
                            </span>
                          )}
                        </div>

                        {/* Notes if any */}
                        {item.notes && (
                          <p className="text-[10px] text-slate-500 bg-slate-50 p-1.5 rounded-md line-clamp-2">
                            {item.notes}
                          </p>
                        )}

                        {/* Card Footer: Status Chip, Date, Stage Shift */}
                        <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px]">
                          <span className="text-slate-400">
                            {item.appliedDate ? new Date(item.appliedDate).toLocaleDateString(undefined, { month: 'short', day: 'numeric' }) : 'Recent'}
                          </span>

                          <div className="flex items-center gap-1">
                            {/* Advance Stage Button */}
                            {nextStage && (
                              <button
                                onClick={() => handleStatusChange(item.id, nextStage)}
                                title={`Advance to ${nextStage}`}
                                className="px-2 py-0.5 rounded bg-slate-100 hover:bg-emerald-100 text-slate-700 hover:text-emerald-800 font-bold transition-colors flex items-center gap-0.5"
                              >
                                <span>&rarr; {nextStage}</span>
                              </button>
                            )}

                            {/* Delete Card */}
                            <button
                              onClick={() => handleDelete(item.id)}
                              title="Delete application"
                              className="p-1 rounded text-slate-300 hover:text-red-600 transition-colors"
                            >
                              <Trash2 className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  {stageApps.length === 0 && (
                    <div className="text-center py-8 text-slate-400 text-[11px] space-y-1">
                      <div>No applications</div>
                      <button
                        onClick={() => {
                          setNewStage(stage.id);
                          setShowAddModal(true);
                        }}
                        className="text-emerald-700 font-bold hover:underline"
                      >
                        + Add application
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Table Mode */}
      {viewMode === 'table' && (
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase tracking-wider font-bold">
                <tr>
                  <th className="p-3.5">Company & Job Title</th>
                  <th className="p-3.5">Stage</th>
                  <th className="p-3.5">Location</th>
                  <th className="p-3.5">Salary Band</th>
                  <th className="p-3.5">Date Added</th>
                  <th className="p-3.5">Notes</th>
                  <th className="p-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredApps.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/70">
                    <td className="p-3.5">
                      <div className="font-extrabold text-slate-900">{item.jobTitle}</div>
                      <div className="text-slate-500 flex items-center gap-1 mt-0.5">
                        <span>{item.company}</span>
                        {item.link && (
                          <a href={item.link} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-emerald-700">
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </td>
                    <td className="p-3.5">
                      <select
                        value={normalizeStage(item.status)}
                        onChange={(e) => handleStatusChange(item.id, e.target.value as any)}
                        className="p-1 rounded-md border border-slate-200 font-semibold text-slate-700 text-xs focus:ring-1 focus:ring-emerald-500"
                      >
                        {stages.map(s => (
                          <option key={s.id} value={s.id}>{s.label}</option>
                        ))}
                      </select>
                    </td>
                    <td className="p-3.5 text-slate-600">{item.location || 'Remote'}</td>
                    <td className="p-3.5 font-bold text-emerald-700">{item.salary || '—'}</td>
                    <td className="p-3.5 text-slate-500">{item.appliedDate}</td>
                    <td className="p-3.5 text-slate-600 max-w-xs truncate">{item.notes || '—'}</td>
                    <td className="p-3.5 text-right">
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="text-slate-400 hover:text-red-600 p-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Create Application Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border border-slate-200 max-w-md w-full p-6 space-y-5 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="font-extrabold text-base text-slate-900">Add New Job Application</h3>
              <button onClick={() => setShowAddModal(false)} className="text-slate-400 hover:text-slate-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreate} className="space-y-3.5 text-xs">
              <div className="space-y-1">
                <label className="font-bold text-slate-700">Job Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Junior Bookkeeper / Billing Assistant"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700">Company Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Malabar Logistics Pvt Ltd"
                  value={newCompany}
                  onChange={(e) => setNewCompany(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Location</label>
                  <input
                    type="text"
                    placeholder="e.g. Kochi / Remote"
                    value={newLocation}
                    onChange={(e) => setNewLocation(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-200"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Salary</label>
                  <input
                    type="text"
                    placeholder="e.g. ₹22,000 / mo"
                    value={newSalary}
                    onChange={(e) => setNewSalary(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-200"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700">Stage</label>
                <select
                  value={newStage}
                  onChange={(e) => setNewStage(e.target.value as KanbanStage)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 font-semibold"
                >
                  {stages.map(s => (
                    <option key={s.id} value={s.id}>{s.label}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700">Job Link / Source URL</label>
                <input
                  type="url"
                  placeholder="https://..."
                  value={newLink}
                  onChange={(e) => setNewLink(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700">Follow-up Notes</label>
                <textarea
                  rows={2}
                  placeholder="HR contact, assignment deadlines, interview tips..."
                  value={newNotes}
                  onChange={(e) => setNewNotes(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-xl border border-slate-200 font-bold text-slate-600 hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold shadow-sm"
                >
                  Save Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
