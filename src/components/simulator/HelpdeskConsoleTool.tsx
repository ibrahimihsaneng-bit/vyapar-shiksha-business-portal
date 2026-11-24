'use client';

import React, { useState } from 'react';
import {
  LifeBuoy,
  MessageSquare,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Sparkles,
  Clock,
  Send,
  ShieldAlert,
  HeartHandshake,
  ArrowRight,
  User,
  RotateCcw
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface SimulatorTicket {
  id: string;
  ticketNumber: string;
  priority: 'Urgent' | 'High' | 'Medium' | 'Low';
  customerName: string;
  customerTier: string;
  category: 'Security' | 'Logistics' | 'Billing' | 'Product Damage';
  subject: string;
  customerMessage: string;
  options: Array<{
    id: 'A' | 'B' | 'C';
    text: string;
    isCorrect: boolean;
    feedback: string;
    tags: string[];
  }>;
  suggestedMacro: string;
}

const SAMPLE_TICKETS: SimulatorTicket[] = [
  {
    id: 'tick-1042',
    ticketNumber: '#1042',
    priority: 'High',
    customerName: 'Siddharth Varma (HR Director)',
    customerTier: 'Enterprise VIP',
    category: 'Security',
    subject: 'Locked out and payroll is due in 45 mins — just reset my password immediately!',
    customerMessage: 'I am locked out of the admin portal and 200 staff salaries must be approved within 45 minutes! I cannot access my registered authenticator app because my phone broke. Do not ask me 20 security questions, just reset my password and send to my personal Gmail right now!',
    options: [
      {
        id: 'A',
        text: 'Reset the password immediately and email to his personal Gmail since payroll is urgent.',
        isCorrect: false,
        feedback: 'Severe Security Breach! Never email credentials to an unverified personal address based on urgency. Attackers frequently use urgency to socially engineer unauthorized admin resets.',
        tags: ['Security Failure', 'Policy Violation']
      },
      {
        id: 'B',
        text: 'Verify identity through verified secondary corporate channel (Slack call or direct HR escalation), then initiate secure temporary recovery token.',
        isCorrect: true,
        feedback: 'Expert Choice! You adhered to security protocols without ignoring business urgency. Verifying through an established internal corporate channel prevents social engineering while keeping payroll on track.',
        tags: ['Security', 'Identity Verified', 'Urgency Managed']
      },
      {
        id: 'C',
        text: 'Send a generic macro stating password resets take 24-48 hours and refuse to assist.',
        isCorrect: false,
        feedback: 'Customer Service Failure! While strict, refusing to help an enterprise executive with an urgent payroll deadline without offering verified alternatives causes catastrophic customer churn.',
        tags: ['Zero Empathy', 'Escalation Risk']
      }
    ],
    suggestedMacro: 'Hi Siddharth, I completely understand the critical payroll urgency today. For company security, I cannot send credentials to personal email, but I am initiating an immediate verified Slack voice check with your designated account supervisor right now so we can unlock your portal in 5 minutes.'
  },
  {
    id: 'tick-1043',
    ticketNumber: '#1043',
    priority: 'Urgent',
    customerName: 'Rahul Sharma',
    customerTier: 'Gold Buyer (14 Orders)',
    category: 'Logistics',
    subject: 'Anniversary gift parcel stuck for 48 hours — threatening consumer court!',
    customerMessage: 'I paid ₹250 extra for 24-hour Express Shipping because today is my wedding anniversary! The tracking has been stuck at Delhi Hub 4 for two whole days. You completely ruined our celebration! If this is not delivered today I am canceling all my orders and filing a consumer court case!',
    options: [
      {
        id: 'A',
        text: 'Argue that courier delays due to regional weather are beyond company control as stated in Terms & Conditions.',
        isCorrect: false,
        feedback: 'Defensive Blunder! Quoting legal terms to an angry customer whose anniversary was ruined escalates conflict and guarantees negative public reviews.',
        tags: ['Defensive', 'Legalistic']
      },
      {
        id: 'B',
        text: 'Acknowledge anniversary distress empathetically, immediately refund the ₹250 express shipping, flag Hub 4 for priority dispatch, and provide ₹500 goodwill credit.',
        isCorrect: true,
        feedback: 'Mastery Response! You validated the emotional weight of his anniversary, refunded the unfulfilled service fee proactively, and protected the customer relationship.',
        tags: ['Empathy', 'De-escalation', 'Goodwill']
      },
      {
        id: 'C',
        text: 'Tell the customer to contact the third-party courier customer care number directly.',
        isCorrect: false,
        feedback: 'Pass-the-buck Failure! Customers buy from SwiftCart, not the courier. Shifting responsibility makes the brand look unprofessional and uncaring.',
        tags: ['Buck Passing', 'High Churn']
      }
    ],
    suggestedMacro: 'Dear Rahul, I am so truly sorry we let you down on your wedding anniversary. I have immediately refunded your ₹250 express shipping charge, credited ₹500 to your account, and personally contacted our Hub 4 manager to prioritize delivery.'
  },
  {
    id: 'tick-1044',
    ticketNumber: '#1044',
    priority: 'Medium',
    customerName: 'Pooja Hegde',
    customerTier: 'New Customer',
    category: 'Product Damage',
    subject: 'Crushed glass serum bottle inside courier box',
    customerMessage: 'I opened my beauty order and the glass dropper bottle was completely shattered. Liquid ruined the silk eye mask in the box and I got a tiny cut on my finger! What should I do with this package?',
    options: [
      {
        id: 'A',
        text: 'Instruct customer to pack the shattered glass securely and send it back to receive a refund.',
        isCorrect: false,
        feedback: 'Hazard Risk! Asking customers to ship broken glass creates physical safety liabilities for the customer and postal workers.',
        tags: ['Safety Hazard', 'Poor UX']
      },
      {
        id: 'B',
        text: 'Express deep concern for her finger cut, instruct safe disposal of the broken glass without return, and dispatch an express replacement for both serum and mask immediately.',
        isCorrect: true,
        feedback: 'Flawless Customer Safety & Care! You put physical safety first, waived the return of dangerous glass shards, and replaced all damaged items.',
        tags: ['Safety First', 'Instant Replacement']
      },
      {
        id: 'C',
        text: 'Ask for 5 additional high-resolution photos and an unboxing video before taking any action.',
        isCorrect: false,
        feedback: 'Excessive Friction! Demanding endless proof for an inexpensive damaged cosmetic item creates distrust and customer frustration.',
        tags: ['Excessive Friction']
      }
    ],
    suggestedMacro: 'Dear Pooja, I am so distressed to hear about your finger cut! Please set the box aside and safely discard it — you do NOT need to return broken glass. I have already dispatched a complimentary replacement set via Express Courier.'
  }
];

export default function HelpdeskConsoleTool() {
  const [selectedTicketId, setSelectedTicketId] = useState<string>(SAMPLE_TICKETS[0].id);
  const [selectedOption, setSelectedOption] = useState<'A' | 'B' | 'C' | null>(null);
  const [replyText, setReplyText] = useState<string>('');
  const [resolvedTicketIds, setResolvedTicketIds] = useState<string[]>([]);

  const activeTicket = SAMPLE_TICKETS.find(t => t.id === selectedTicketId) || SAMPLE_TICKETS[0];
  const activeSelection = activeTicket.options.find(o => o.id === selectedOption);

  const handleSelectOption = (optId: 'A' | 'B' | 'C') => {
    setSelectedOption(optId);
    const chosen = activeTicket.options.find(o => o.id === optId);
    if (chosen?.isCorrect) {
      try {
        confetti({ particleCount: 60, spread: 60, origin: { y: 0.8 } });
      } catch {}
    }
  };

  const handleInsertMacro = () => {
    setReplyText(activeTicket.suggestedMacro);
  };

  const handleResolveTicket = () => {
    if (!resolvedTicketIds.includes(activeTicket.id)) {
      setResolvedTicketIds([...resolvedTicketIds, activeTicket.id]);
    }
  };

  const handleResetSimulator = () => {
    setSelectedOption(null);
    setReplyText('');
    setResolvedTicketIds([]);
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden space-y-6">
      {/* Top Banner */}
      <div className="p-6 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold mb-2">
            <LifeBuoy className="w-3.5 h-3.5" />
            <span>Interactive Customer Support Simulator</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
            Customer Ticket Triage & De-escalation Console
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Practice handling realistic high-stakes support tickets with instant expert feedback on Security, Empathy, and Escalation.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold border border-slate-700">
            Resolved: {resolvedTicketIds.length} / {SAMPLE_TICKETS.length}
          </span>
          <button
            onClick={handleResetSimulator}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors border border-slate-700"
            title="Reset Simulator"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Console Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 pt-0">
        {/* Ticket Queue Sidebar (4 cols) */}
        <div className="lg:col-span-4 space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 px-1">
            Active Support Queue ({SAMPLE_TICKETS.length})
          </h3>

          <div className="space-y-2.5">
            {SAMPLE_TICKETS.map(ticket => {
              const isSelected = ticket.id === selectedTicketId;
              const isResolved = resolvedTicketIds.includes(ticket.id);

              return (
                <div
                  key={ticket.id}
                  onClick={() => {
                    setSelectedTicketId(ticket.id);
                    setSelectedOption(null);
                    setReplyText('');
                  }}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'border-blue-600 bg-blue-50/50 shadow-xs ring-1 ring-blue-600'
                      : 'border-slate-200 bg-white hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-xs font-bold text-slate-900">
                      {ticket.ticketNumber}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        ticket.priority === 'Urgent'
                          ? 'bg-red-100 text-red-800'
                          : ticket.priority === 'High'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-slate-100 text-slate-700'
                      }`}>
                        {ticket.priority}
                      </span>
                      {isResolved && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      )}
                    </div>
                  </div>

                  <p className="text-xs font-bold text-slate-900 line-clamp-1 mb-1">
                    {ticket.subject}
                  </p>
                  <div className="flex items-center justify-between text-[11px] text-slate-500">
                    <span>{ticket.customerName}</span>
                    <span className="font-medium text-slate-600">{ticket.category}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Active Ticket Workplace Pane (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Ticket Header Card */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-200/80">
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-sm text-slate-900">
                  Ticket {activeTicket.ticketNumber}
                </span>
                <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                  activeTicket.priority === 'Urgent' ? 'bg-red-100 text-red-800' : 'bg-amber-100 text-amber-800'
                }`}>
                  {activeTicket.priority}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-slate-200 text-slate-700 text-xs font-medium">
                  {activeTicket.category}
                </span>
              </div>
              <div className="text-xs text-slate-500 font-medium">
                Customer: <strong className="text-slate-900">{activeTicket.customerName}</strong> ({activeTicket.customerTier})
              </div>
            </div>

            {/* Customer Message Bubble */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center shrink-0 text-slate-600">
                <User className="w-4 h-4" />
              </div>
              <div className="flex-1 bg-white p-4 rounded-2xl rounded-tl-none border border-slate-200 text-xs sm:text-sm text-slate-800 shadow-2xs space-y-1">
                <div className="font-bold text-slate-900 text-xs">
                  {activeTicket.customerName} writes:
                </div>
                <p className="leading-relaxed">
                  "{activeTicket.customerMessage}"
                </p>
              </div>
            </div>
          </div>

          {/* Decision Strategy: Multiple Choice with Instant Expert Feedback */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Step 1: Select Optimal Professional Strategy
            </h4>

            <div className="space-y-2.5">
              {activeTicket.options.map((opt) => {
                const isPicked = selectedOption === opt.id;

                return (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectOption(opt.id)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-3 ${
                      isPicked
                        ? opt.isCorrect
                          ? 'border-emerald-600 bg-emerald-50/60 ring-2 ring-emerald-600'
                          : 'border-red-500 bg-red-50/60 ring-2 ring-red-500'
                        : 'border-slate-200 bg-white hover:bg-slate-50'
                    }`}
                  >
                    <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                      isPicked
                        ? opt.isCorrect ? 'bg-emerald-600 text-white' : 'bg-red-600 text-white'
                        : 'bg-slate-100 text-slate-700'
                    }`}>
                      {opt.id}
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-slate-900 leading-snug">
                      {opt.text}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Instant Expert Feedback Callout */}
            {activeSelection && (
              <div className={`p-4 rounded-2xl border flex items-start gap-3.5 text-xs sm:text-sm animate-in fade-in duration-200 ${
                activeSelection.isCorrect
                  ? 'bg-emerald-50 text-emerald-900 border-emerald-200'
                  : 'bg-red-50 text-red-900 border-red-200'
              }`}>
                {activeSelection.isCorrect ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                )}
                <div className="space-y-1">
                  <div className="font-bold flex items-center gap-2">
                    <span>{activeSelection.isCorrect ? 'Instant Expert Validation: Correct Strategy!' : 'Instant Expert Feedback: Policy Risk Detected'}</span>
                    <div className="flex gap-1">
                      {activeSelection.tags.map(t => (
                        <span key={t} className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/80 border border-slate-300/40">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="leading-relaxed">
                    {activeSelection.feedback}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Step 2: Response Composer */}
          <div className="space-y-3 pt-2 border-t border-slate-200">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Step 2: Compose Customer Response Message
              </h4>
              <button
                onClick={handleInsertMacro}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200 hover:bg-blue-100 transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Insert Model Empathy Macro</span>
              </button>
            </div>

            <textarea
              rows={4}
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              placeholder="Write your professional response acknowledging the customer's issue..."
              className="w-full text-xs sm:text-sm text-slate-900 bg-white border border-slate-300 rounded-2xl p-4 focus:outline-none focus:border-blue-600 leading-relaxed"
            />

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <div className="flex items-center gap-3 text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <HeartHandshake className="w-4 h-4 text-emerald-600" />
                  <span>Empathy Check: {replyText.length > 50 ? 'Strong' : 'Add context'}</span>
                </span>
                <span className="flex items-center gap-1">
                  <ShieldAlert className="w-4 h-4 text-blue-600" />
                  <span>Corporate Register: Professional</span>
                </span>
              </div>

              <button
                onClick={handleResolveTicket}
                disabled={!activeSelection?.isCorrect || replyText.trim().length < 20}
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white text-xs font-bold transition-all shadow-sm inline-flex items-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Mark Ticket Solved & Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
