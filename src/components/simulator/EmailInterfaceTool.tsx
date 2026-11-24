'use client';

import React, { useState } from 'react';
import {
  Mail,
  Inbox,
  Star,
  Archive,
  Trash2,
  Send,
  Reply,
  CheckCircle2,
  Sparkles,
  AlertCircle,
  Search,
  Tag
} from 'lucide-react';

interface EmailItem {
  id: string;
  senderName: string;
  senderEmail: string;
  subject: string;
  preview: string;
  body: string;
  time: string;
  isRead: boolean;
  isVip: boolean;
  folder: 'inbox' | 'vip' | 'archive' | 'spam';
}

const INITIAL_EMAILS: EmailItem[] = [
  {
    id: 'em-1',
    senderName: 'David Chen (Managing Partner)',
    senderEmail: 'david.chen@horizonventures.com',
    subject: 'URGENT: LP Meeting slot deconfliction for Tokyo trip',
    preview: 'Can you please review the Tokyo investor roadshow calendar...',
    body: 'Hi, please look over the Tokyo investor meeting requests. We have a conflict with Temasek Capital on Tuesday afternoon. Reschedule the Singapore pitch to Wednesday morning and ensure all flight confirmation codes are added to my executive itinerary.',
    time: '10:42 AM',
    isRead: false,
    isVip: true,
    folder: 'inbox'
  },
  {
    id: 'em-2',
    senderName: 'CFO - Emirates Port Authority',
    senderEmail: 'cfo@emiratesport.ae',
    subject: 'Contract Signature Required by 5:00 PM GST Today',
    preview: 'Our legal team completed review of Appendix B...',
    body: 'Dear Mr. Tariq, our internal legal team has approved Appendix B of the logistics concession agreement. Please sign and return the countersigned PDF prior to 5:00 PM GST so we can gazette the vessel operations schedule.',
    time: '09:15 AM',
    isRead: false,
    isVip: true,
    folder: 'inbox'
  },
  {
    id: 'em-3',
    senderName: 'GrowthHack Deals',
    senderEmail: 'sales@b2b-growthleads-fast.xyz',
    subject: 'Boost your agency revenue by 500% with automated AI scraping!',
    preview: 'Hi there, are you tired of slow sales cycles...',
    body: 'Hey Tariq, quick question: would you be open to an automated scraper that pulls 10,000 phone numbers daily? Book a quick 10-minute demo on my calendar link below.',
    time: '08:30 AM',
    isRead: true,
    isVip: false,
    folder: 'inbox'
  }
];

export default function EmailInterfaceTool() {
  const [emails, setEmails] = useState<EmailItem[]>(INITIAL_EMAILS);
  const [selectedEmailId, setSelectedEmailId] = useState<string>(INITIAL_EMAILS[0].id);
  const [activeFolder, setActiveFolder] = useState<'inbox' | 'vip' | 'archive' | 'spam'>('inbox');
  const [replyOpen, setReplyOpen] = useState(false);
  const [replyText, setReplyText] = useState('');
  const [feedback, setFeedback] = useState<string | null>(null);

  const activeEmail = emails.find(e => e.id === selectedEmailId) || emails[0];

  const visibleEmails = emails.filter(e => {
    if (activeFolder === 'vip') return e.isVip;
    return e.folder === activeFolder;
  });

  const handleArchive = (id: string) => {
    setEmails(emails.map(e => e.id === id ? { ...e, folder: 'archive' } : e));
    setFeedback('Email moved to Archive. Inbox Zero progress!');
    setTimeout(() => setFeedback(null), 3000);
  };

  const handleToggleVip = (id: string) => {
    setEmails(emails.map(e => e.id === id ? { ...e, isVip: !e.isVip } : e));
  };

  const handleSendReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyText.trim()) return;
    setReplyOpen(false);
    setReplyText('');
    setFeedback('Reply transmitted securely. Thread marked as Handled.');
    setTimeout(() => setFeedback(null), 4000);
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden space-y-6">
      {/* Top Banner */}
      <div className="p-6 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-violet-500/20 text-violet-300 text-xs font-semibold mb-2">
            <Mail className="w-3.5 h-3.5" />
            <span>Executive Mailbox Triage Simulator</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
            Corporate Email & Triage Interface
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Practice Inbox Zero triage, VIP tagging, spam filtering, and drafting high-stakes corporate responses.
          </p>
        </div>
      </div>

      {feedback && (
        <div className="mx-6 p-4 rounded-2xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs sm:text-sm font-medium flex items-center gap-2.5">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>{feedback}</span>
        </div>
      )}

      {/* Main Mailbox Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-0 border-t border-slate-200 min-h-[480px]">
        {/* Left Folder Nav (3 cols) */}
        <div className="md:col-span-3 border-r border-slate-200 p-4 space-y-1 bg-slate-50/60">
          <button
            onClick={() => setActiveFolder('inbox')}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
              activeFolder === 'inbox' ? 'bg-violet-600 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-200/60'
            }`}
          >
            <span className="flex items-center gap-2">
              <Inbox className="w-4 h-4" />
              <span>Inbox</span>
            </span>
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
              activeFolder === 'inbox' ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
            }`}>
              {emails.filter(e => e.folder === 'inbox').length}
            </span>
          </button>

          <button
            onClick={() => setActiveFolder('vip')}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
              activeFolder === 'vip' ? 'bg-violet-600 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-200/60'
            }`}
          >
            <span className="flex items-center gap-2">
              <Star className="w-4 h-4" />
              <span>VIP Priority</span>
            </span>
            <span className="text-[10px] font-bold">
              {emails.filter(e => e.isVip).length}
            </span>
          </button>

          <button
            onClick={() => setActiveFolder('archive')}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
              activeFolder === 'archive' ? 'bg-violet-600 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-200/60'
            }`}
          >
            <span className="flex items-center gap-2">
              <Archive className="w-4 h-4" />
              <span>Archive</span>
            </span>
            <span className="text-[10px]">
              {emails.filter(e => e.folder === 'archive').length}
            </span>
          </button>
        </div>

        {/* Middle Email List (4 cols) */}
        <div className="md:col-span-4 border-r border-slate-200 overflow-y-auto divide-y divide-slate-100 max-h-[500px]">
          {visibleEmails.length === 0 ? (
            <div className="p-8 text-center text-xs text-slate-400">
              Folder is empty. Inbox Zero achieved!
            </div>
          ) : (
            visibleEmails.map(e => {
              const isSelected = e.id === selectedEmailId;

              return (
                <div
                  key={e.id}
                  onClick={() => setSelectedEmailId(e.id)}
                  className={`p-4 cursor-pointer transition-colors ${
                    isSelected ? 'bg-violet-50/70 border-l-4 border-l-violet-600' : 'hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1 text-xs">
                    <span className="font-bold text-slate-900 truncate">
                      {e.senderName}
                    </span>
                    <span className="text-[10px] text-slate-400">{e.time}</span>
                  </div>
                  <h4 className="text-xs font-semibold text-slate-800 truncate mb-1">
                    {e.subject}
                  </h4>
                  <p className="text-[11px] text-slate-500 line-clamp-2">
                    {e.preview}
                  </p>
                </div>
              );
            })
          )}
        </div>

        {/* Right Reader Pane (5 cols) */}
        <div className="md:col-span-5 p-6 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-3 pb-3 border-b border-slate-100">
              <div>
                <h3 className="font-bold text-sm text-slate-900 leading-snug">
                  {activeEmail.subject}
                </h3>
                <div className="text-xs text-slate-500 mt-1">
                  From: <strong className="text-slate-800">{activeEmail.senderName}</strong> &lt;{activeEmail.senderEmail}&gt;
                </div>
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  onClick={() => handleToggleVip(activeEmail.id)}
                  className={`p-1.5 rounded-lg border transition-colors ${
                    activeEmail.isVip ? 'bg-amber-50 text-amber-600 border-amber-200' : 'text-slate-400 hover:text-slate-700 border-slate-200'
                  }`}
                  title="Toggle VIP"
                >
                  <Star className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleArchive(activeEmail.id)}
                  className="p-1.5 rounded-lg border border-slate-200 text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
                  title="Archive Email"
                >
                  <Archive className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="text-xs text-slate-700 leading-relaxed whitespace-pre-wrap">
              {activeEmail.body}
            </div>
          </div>

          {/* Quick Reply Form */}
          <div className="pt-4 border-t border-slate-100 space-y-3">
            {!replyOpen ? (
              <button
                onClick={() => setReplyOpen(true)}
                className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <Reply className="w-4 h-4" />
                <span>Compose Executive Reply</span>
              </button>
            ) : (
              <form onSubmit={handleSendReply} className="space-y-3">
                <textarea
                  rows={3}
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder={`Reply to ${activeEmail.senderName}...`}
                  className="w-full text-xs text-slate-900 bg-white border border-slate-300 rounded-xl p-3 focus:outline-none focus:border-violet-600"
                />
                <div className="flex justify-between items-center">
                  <button
                    type="button"
                    onClick={() => setReplyOpen(false)}
                    className="text-xs text-slate-500 hover:text-slate-800"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-xs font-bold transition-all shadow-xs inline-flex items-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Reply</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
