'use client';

import React, { useState } from 'react';
import {
  Users,
  Building,
  Phone,
  Mail,
  Calendar,
  DollarSign,
  Plus,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  Filter,
  FileEdit
} from 'lucide-react';

interface ContactLead {
  id: string;
  name: string;
  title: string;
  company: string;
  email: string;
  phone: string;
  dealValue: number;
  stage: 'New Lead' | 'Qualified' | 'Proposal Sent' | 'Negotiation' | 'Closed Won';
  lastActivity: string;
  timeline: Array<{ date: string; type: string; note: string }>;
}

const INITIAL_CONTACTS: ContactLead[] = [
  {
    id: 'crm-01',
    name: 'Vikram Rao',
    title: 'Managing Director',
    company: 'Aura Tech Labs Pvt Ltd',
    email: 'vikram.rao@auratech.in',
    phone: '+91 98470 88120',
    dealValue: 180000,
    stage: 'Negotiation',
    lastActivity: '2 hours ago',
    timeline: [
      { date: 'Oct 28', type: 'Call', note: 'Discussed annual cloud accounting setup and multi-user licenses.' },
      { date: 'Oct 29', type: 'Email', note: 'Sent formal pricing proposal with 10% annual prepay discount.' }
    ]
  },
  {
    id: 'crm-02',
    name: 'Dr. Priya Nambiar',
    title: 'Procurement Lead',
    company: 'City Care Hospital',
    email: 'p.nambiar@citycare.org',
    phone: '+91 98471 99234',
    dealValue: 240000,
    stage: 'Proposal Sent',
    lastActivity: 'Yesterday',
    timeline: [
      { date: 'Oct 26', type: 'Meeting', note: 'In-person meeting discussing monthly surgical consumables replenishment.' }
    ]
  },
  {
    id: 'crm-03',
    name: 'Sameer K.',
    title: 'Operations VP',
    company: 'Malabar Logistics LLP',
    email: 'sameer@malabarlogistics.com',
    phone: '+91 98950 44102',
    dealValue: 95000,
    stage: 'Qualified',
    lastActivity: '3 days ago',
    timeline: [
      { date: 'Oct 24', type: 'Call', note: 'Initial qualification call. Needs automated 3-way PO matching.' }
    ]
  },
  {
    id: 'crm-04',
    name: 'Elena Rostova',
    title: 'VP Acquisitions',
    company: 'Aspen Real Estate Advisory',
    email: 'elena.rostova@aspenadvisory.com',
    phone: '+44 20 7946 0991',
    dealValue: 450000,
    stage: 'New Lead',
    lastActivity: '5 days ago',
    timeline: [
      { date: 'Oct 22', type: 'Form', note: 'Inbound website inquiry for virtual assistant executive support.' }
    ]
  }
];

export default function CrmConsoleTool() {
  const [contacts, setContacts] = useState<ContactLead[]>(INITIAL_CONTACTS);
  const [selectedId, setSelectedId] = useState<string>(INITIAL_CONTACTS[0].id);
  const [filterStage, setFilterStage] = useState<string>('All');
  const [newNote, setNewNote] = useState<string>('');
  const [activityType, setActivityType] = useState<string>('Call');

  const activeContact = contacts.find(c => c.id === selectedId) || contacts[0];

  const filteredContacts = filterStage === 'All'
    ? contacts
    : contacts.filter(c => c.stage === filterStage);

  const handleStageChange = (newStage: ContactLead['stage']) => {
    setContacts(contacts.map(c => {
      if (c.id === selectedId) {
        return {
          ...c,
          stage: newStage,
          lastActivity: 'Just now',
          timeline: [
            { date: 'Today', type: 'Stage Change', note: `Moved pipeline stage to ${newStage}` },
            ...c.timeline
          ]
        };
      }
      return c;
    }));
  };

  const handleAddActivity = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNote.trim()) return;

    setContacts(contacts.map(c => {
      if (c.id === selectedId) {
        return {
          ...c,
          lastActivity: 'Just now',
          timeline: [
            { date: 'Today', type: activityType, note: newNote },
            ...c.timeline
          ]
        };
      }
      return c;
    }));
    setNewNote('');
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden space-y-6">
      {/* Top Banner */}
      <div className="p-6 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold mb-2">
            <Users className="w-3.5 h-3.5" />
            <span>Interactive CRM Training Console</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
            Customer Relationship Management (CRM) Pipeline
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Practice lead qualification, deal pipeline updates, and contact activity logging (HubSpot & Salesforce style).
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-300">
            Total Pipeline Value:{' '}
            <strong className="text-white font-bold">
              ₹{contacts.reduce((acc, c) => acc + c.dealValue, 0).toLocaleString('en-IN')}
            </strong>
          </span>
        </div>
      </div>

      {/* Main Console */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 pt-0">
        {/* Contact List (5 cols) */}
        <div className="lg:col-span-5 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Accounts Directory ({filteredContacts.length})
            </h3>
            <select
              value={filterStage}
              onChange={(e) => setFilterStage(e.target.value)}
              className="text-xs font-semibold bg-slate-50 border border-slate-200 rounded-lg px-2 py-1 text-slate-700"
            >
              <option value="All">All Stages</option>
              <option value="New Lead">New Lead</option>
              <option value="Qualified">Qualified</option>
              <option value="Proposal Sent">Proposal Sent</option>
              <option value="Negotiation">Negotiation</option>
              <option value="Closed Won">Closed Won</option>
            </select>
          </div>

          <div className="space-y-2.5">
            {filteredContacts.map(c => {
              const isSelected = c.id === selectedId;

              return (
                <div
                  key={c.id}
                  onClick={() => setSelectedId(c.id)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'border-indigo-600 bg-indigo-50/50 shadow-xs ring-1 ring-indigo-600'
                      : 'border-slate-200 bg-white hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-xs sm:text-sm text-slate-900">
                      {c.name}
                    </span>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      c.stage === 'Closed Won' ? 'bg-emerald-100 text-emerald-800' :
                      c.stage === 'Negotiation' ? 'bg-amber-100 text-amber-800' :
                      c.stage === 'Proposal Sent' ? 'bg-blue-100 text-blue-800' : 'bg-slate-100 text-slate-700'
                    }`}>
                      {c.stage}
                    </span>
                  </div>

                  <div className="text-xs text-slate-600 flex items-center gap-1.5 mb-2">
                    <Building className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{c.company}</span>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-100">
                    <span className="font-semibold text-slate-700">₹{c.dealValue.toLocaleString('en-IN')}</span>
                    <span>Active: {c.lastActivity}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Lead Details & Activity Log (7 cols) */}
        <div className="lg:col-span-7 space-y-5">
          {/* Top Lead Profile Card */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  {activeContact.name}
                </h3>
                <p className="text-xs text-slate-600">
                  {activeContact.title} at <strong className="text-slate-800">{activeContact.company}</strong>
                </p>
              </div>

              {/* Pipeline Stage Selector */}
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-semibold text-slate-600">Stage:</span>
                <select
                  value={activeContact.stage}
                  onChange={(e) => handleStageChange(e.target.value as any)}
                  className="text-xs font-bold bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-indigo-700 focus:outline-none focus:border-indigo-500"
                >
                  <option value="New Lead">New Lead</option>
                  <option value="Qualified">Qualified</option>
                  <option value="Proposal Sent">Proposal Sent</option>
                  <option value="Negotiation">Negotiation</option>
                  <option value="Closed Won">Closed Won</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-slate-200/80 text-xs">
              <div className="flex items-center gap-2 text-slate-700">
                <Mail className="w-4 h-4 text-slate-400" />
                <span>{activeContact.email}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Phone className="w-4 h-4 text-slate-400" />
                <span>{activeContact.phone}</span>
              </div>
            </div>
          </div>

          {/* Activity Timeline */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Interaction History Timeline
            </h4>

            <div className="space-y-2">
              {activeContact.timeline.map((act, idx) => (
                <div key={idx} className="p-3.5 rounded-xl border border-slate-200 bg-white flex items-start gap-3 text-xs">
                  <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 font-bold text-[10px]">
                    {act.type[0]}
                  </div>
                  <div className="space-y-0.5 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900">{act.type}</span>
                      <span className="text-[10px] text-slate-400">{act.date}</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed">{act.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Add Activity Form */}
          <form onSubmit={handleAddActivity} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-800">Log Interaction Note</span>
              <div className="flex items-center gap-2">
                {['Call', 'Email', 'Meeting', 'Note'].map(t => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setActivityType(t)}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-colors ${
                      activityType === t ? 'bg-indigo-600 text-white' : 'bg-white text-slate-600 border border-slate-200'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <textarea
              rows={2}
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              placeholder="e.g. Discussed revised proposal timeline; client will sign by Friday..."
              className="w-full text-xs text-slate-900 bg-white border border-slate-300 rounded-xl p-3 focus:outline-none focus:border-indigo-500"
            />

            <button
              type="submit"
              disabled={!newNote.trim()}
              className="w-full py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-white text-xs font-bold transition-all shadow-xs"
            >
              Log to CRM Timeline
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
