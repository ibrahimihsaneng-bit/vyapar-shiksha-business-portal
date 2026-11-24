'use client';

import React, { useState, useEffect } from 'react';
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
  Sparkles
} from 'lucide-react';
import {
  getApplications,
  addApplication,
  updateApplicationStatus
} from '@/lib/storage';
import { ApplicationItem } from '@/types';

export default function ApplicationsPage() {
  const [apps, setApps] = useState<ApplicationItem[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newCompany, setNewCompany] = useState('');
  const [newNotes, setNewNotes] = useState('');

  useEffect(() => {
    setApps(getApplications());
  }, []);

  const handleStatusChange = (id: string, newStatus: ApplicationItem['status']) => {
    updateApplicationStatus(id, newStatus);
    setApps(getApplications());
  };

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle || !newCompany) return;
    addApplication({
      jobId: `custom-${Date.now()}`,
      jobTitle: newTitle,
      company: newCompany,
      status: 'Applied',
      notes: newNotes
    });
    setApps(getApplications());
    setNewTitle('');
    setNewCompany('');
    setNewNotes('');
    setShowAddForm(false);
  };

  const statuses: ApplicationItem['status'][] = [
    'Applied',
    'Reviewing',
    'Interview Scheduled',
    'Offer',
    'Rejected'
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-100">
            <Briefcase className="w-3.5 h-3.5 text-emerald-600" />
            <span>Job Search Tracking</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            My Job Applications Tracker
          </h1>
          <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
            Keep track of every resume sent, recruiter interaction, interview stage, and offer letter in one place.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-md"
          >
            <Plus className="w-4 h-4" />
            <span>Add Application</span>
          </button>
          <Link
            href="/jobs"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
          >
            <span>Explore Jobs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Add New Form */}
      {showAddForm && (
        <form onSubmit={handleCreate} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
          <h3 className="font-bold text-sm text-slate-900">Add New Tracked Application</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <input
              type="text"
              placeholder="Job Title (e.g. Accounts Assistant)"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="p-3 rounded-xl border border-slate-200"
              required
            />
            <input
              type="text"
              placeholder="Company Name (e.g. Malabar Logistics)"
              value={newCompany}
              onChange={(e) => setNewCompany(e.target.value)}
              className="p-3 rounded-xl border border-slate-200"
              required
            />
          </div>
          <textarea
            rows={2}
            placeholder="Notes (e.g. Applied via LinkedIn with portfolio link)"
            value={newNotes}
            onChange={(e) => setNewNotes(e.target.value)}
            className="w-full p-3 rounded-xl border border-slate-200 text-xs"
          />
          <div className="flex items-center justify-end gap-2 text-xs">
            <button
              type="button"
              onClick={() => setShowAddForm(false)}
              className="px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700"
            >
              Save Application
            </button>
          </div>
        </form>
      )}

      {/* Applications List */}
      <div className="space-y-4">
        {apps.length > 0 ? (
          apps.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                    {item.company}
                  </span>
                  <span className="text-xs text-slate-400">
                    Applied on {item.appliedDate}
                  </span>
                </div>
                <h3 className="font-bold text-base text-slate-900">{item.jobTitle}</h3>
                {item.notes && (
                  <p className="text-xs text-slate-600 leading-relaxed pt-1">{item.notes}</p>
                )}
              </div>

              {/* Status Selector */}
              <div className="flex items-center gap-3 self-start sm:self-auto shrink-0">
                <label className="text-xs font-semibold text-slate-500">Status:</label>
                <select
                  value={item.status}
                  onChange={(e) => handleStatusChange(item.id, e.target.value as any)}
                  className="p-2 rounded-xl border border-slate-200 text-xs font-bold bg-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                >
                  {statuses.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 space-y-3">
            <p className="text-slate-500 text-sm">You haven&apos;t added any job applications yet.</p>
            <Link
              href="/jobs"
              className="inline-block px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700"
            >
              Browse Open Jobs & Track Your First &rarr;
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
