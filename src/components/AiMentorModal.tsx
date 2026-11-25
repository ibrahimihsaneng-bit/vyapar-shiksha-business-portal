'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  X,
  Send,
  Trash2,
  Settings2,
  ChevronRight,
  Clock,
  ShieldCheck,
  CheckCircle2,
  BookOpen,
  Volume2,
  RotateCcw,
  ExternalLink,
  Laptop,
  GraduationCap
} from 'lucide-react';
import {
  LearnerProfile,
  MentorMessage,
  getLearnerProfile,
  saveLearnerProfile,
  getMentorHistory,
  saveMentorMessage,
  clearMentorHistory,
  askCareerMentor
} from '@/lib/ai-mentor';

export default function AiMentorModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [profile, setProfile] = useState<LearnerProfile>(getLearnerProfile());
  const [messages, setMessages] = useState<MentorMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showProfileDrawer, setShowProfileDrawer] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setProfile(getLearnerProfile());
    setMessages(getMentorHistory());
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendMessage = async (customText?: string) => {
    const textToSend = customText || inputValue;
    if (!textToSend.trim() || isTyping) return;

    const userMsg: MentorMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      sourceType: 'verified-knowledge-base'
    };

    saveMentorMessage(userMsg);
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulate realistic advisory thinking time
    setTimeout(async () => {
      const response = await askCareerMentor(textToSend, profile);
      saveMentorMessage(response);
      setMessages(prev => [...prev, response]);
      setIsTyping(false);
    }, 700);
  };

  const handleClearHistory = () => {
    if (confirm('Clear your conversation history with the AI Career Mentor?')) {
      clearMentorHistory();
      setMessages(getMentorHistory());
    }
  };

  const handleProfileUpdate = (updates: Partial<LearnerProfile>) => {
    const updated = saveLearnerProfile(updates);
    setProfile(updated);
  };

  const quickPrompts = [
    'Suggest a 30-day remote career for beginners',
    'Explain Double-Entry Accounting in Malayalam (അക്കൗണ്ടിംഗ്)',
    'I missed 3 study days — recalculate my pace',
    'What tools are genuinely 100% free?'
  ];

  return (
    <>
      {/* Floating Trigger Pill (Inspired by Alvance & ElevateAI Reference) */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2.5 px-4 py-3 rounded-full bg-slate-900 text-white font-bold text-xs sm:text-sm shadow-2xl hover:bg-slate-800 transition-all transform hover:-translate-y-0.5 border border-slate-700/80 group"
        aria-label="Open AI Career Mentor"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <div className="flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-emerald-400 group-hover:rotate-12 transition-transform" />
          <span>AI Career Mentor</span>
        </div>
        <span className="hidden sm:inline-block px-1.5 py-0.5 rounded-full bg-emerald-950 text-emerald-300 text-[10px] font-extrabold border border-emerald-800">
          മലയാളം
        </span>
      </button>

      {/* Main Mentor Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-t-3xl sm:rounded-3xl border border-slate-200 w-full max-w-2xl h-[92vh] sm:h-[82vh] flex flex-col shadow-2xl overflow-hidden relative">
            
            {/* Header */}
            <div className="p-4 sm:p-5 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-bold">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-extrabold text-base text-white tracking-tight">
                      AI Career Mentor
                    </h3>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      Grounded KB
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Dual-language English & Malayalam Guidance &bull; 60 Careers
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => setShowProfileDrawer(!showProfileDrawer)}
                  title="Adjust My Learning Profile"
                  className={`p-2 rounded-xl text-xs font-semibold flex items-center gap-1 transition-colors ${
                    showProfileDrawer ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <Settings2 className="w-4 h-4" />
                  <span className="hidden sm:inline">Preferences</span>
                </button>
                <button
                  onClick={handleClearHistory}
                  title="Clear Chat History"
                  className="p-2 rounded-xl text-slate-400 hover:text-red-400 hover:bg-slate-800 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Profile Preferences Drawer (Collapsible) */}
            {showProfileDrawer && (
              <div className="p-4 bg-slate-50 border-b border-slate-200 text-xs space-y-3 shrink-0 animate-in slide-in-from-top-2 duration-150">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-800 uppercase tracking-wider text-[11px]">
                    Your Learning Context & Study Pacing:
                  </span>
                  <span className="text-[10px] text-slate-500">Auto-saved to your browser</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold text-slate-600 block mb-1">
                      Daily Study Hours:
                    </label>
                    <select
                      value={profile.dailyCommitmentHours}
                      onChange={(e) => handleProfileUpdate({ dailyCommitmentHours: Number(e.target.value) as any })}
                      className="w-full p-2 rounded-xl border border-slate-200 bg-white font-bold text-slate-800"
                    >
                      <option value={1}>1 Hour / Day (Relaxed)</option>
                      <option value={2}>2 Hours / Day (Standard)</option>
                      <option value={3}>3 Hours / Day (Accelerated)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-slate-600 block mb-1">
                      Language Mode:
                    </label>
                    <select
                      value={profile.preferredLanguage}
                      onChange={(e) => handleProfileUpdate({ preferredLanguage: e.target.value as any })}
                      className="w-full p-2 rounded-xl border border-slate-200 bg-white font-bold text-slate-800"
                    >
                      <option value="Bilingual (Both)">Bilingual (English + മലയാളം)</option>
                      <option value="English">Simple English Only</option>
                      <option value="Malayalam">മലയാളം പ്രാധാന്യം</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-slate-600 block mb-1">
                      Background:
                    </label>
                    <select
                      value={profile.educationLevel}
                      onChange={(e) => handleProfileUpdate({ educationLevel: e.target.value as any })}
                      className="w-full p-2 rounded-xl border border-slate-200 bg-white font-bold text-slate-800"
                    >
                      <option value="High School">High School Completed</option>
                      <option value="Degree / Graduate">College Degree / Graduate</option>
                      <option value="Non-Traditional / Self-Taught">Non-Traditional / Career Switch</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Chat Messages Stream */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 text-xs sm:text-sm">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'} space-y-1.5`}
                >
                  <div
                    className={`max-w-[88%] sm:max-w-[80%] rounded-2xl p-4 shadow-xs leading-relaxed space-y-2.5 ${
                      msg.sender === 'user'
                        ? 'bg-slate-900 text-white rounded-br-xs'
                        : 'bg-slate-100/90 text-slate-900 border border-slate-200/80 rounded-bl-xs'
                    }`}
                  >
                    {/* Primary English Content */}
                    <div className="whitespace-pre-line font-normal">
                      {msg.text}
                    </div>

                    {/* Malayalam Callout if present */}
                    {msg.textMl && (
                      <div className="p-3 rounded-xl bg-white/80 border border-teal-100 text-teal-950 font-medium text-xs leading-relaxed">
                        <span className="font-bold text-emerald-800 block text-[10px] uppercase tracking-wider mb-0.5">
                          മലയാളം വിവരണം:
                        </span>
                        {msg.textMl}
                      </div>
                    )}

                    {/* Grounded Career Recommendation Cards */}
                    {msg.recommendedCareers && msg.recommendedCareers.length > 0 && (
                      <div className="space-y-2 pt-1 border-t border-slate-200">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                          Verified Matching Pathways:
                        </span>
                        <div className="grid grid-cols-1 gap-2">
                          {msg.recommendedCareers.map((c) => (
                            <Link
                              key={c.slug}
                              href={`/careers/${c.slug}`}
                              onClick={() => setIsOpen(false)}
                              className="p-3 rounded-xl bg-white border border-slate-200 hover:border-emerald-500 hover:shadow-xs transition-all flex items-center justify-between text-left group"
                            >
                              <div>
                                <div className="flex items-center gap-2">
                                  <span className="font-extrabold text-xs text-slate-900 group-hover:text-emerald-700">
                                    {c.title}
                                  </span>
                                  <span className="px-1.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[10px] font-bold">
                                    {c.matchScore}% Match
                                  </span>
                                </div>
                                <p className="text-[11px] text-slate-500 mt-0.5">{c.reason}</p>
                              </div>
                              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 shrink-0" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Suggested Action CTA */}
                    {msg.suggestedAction && (
                      <div className="pt-1">
                        <Link
                          href={msg.suggestedAction.href}
                          onClick={() => setIsOpen(false)}
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-xs"
                        >
                          <span>{msg.suggestedAction.label}</span>
                          <ExternalLink className="w-3 h-3" />
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Timestamp & Source badge */}
                  <div className="flex items-center gap-2 text-[10px] text-slate-400 px-1">
                    <span>{msg.timestamp}</span>
                    {msg.sender === 'mentor' && (
                      <span>&bull; Verified Knowledge Base</span>
                    )}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-2 text-xs text-slate-500 p-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-600 animate-bounce" />
                  <div className="w-2 h-2 rounded-full bg-emerald-600 animate-bounce [animation-delay:0.2s]" />
                  <div className="w-2 h-2 rounded-full bg-emerald-600 animate-bounce [animation-delay:0.4s]" />
                  <span className="ml-1 text-[11px]">Counselor formulating grounded guidance...</span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompts Bar */}
            <div className="px-4 py-2 bg-slate-50 border-t border-slate-200 overflow-x-auto flex items-center gap-2 shrink-0">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider shrink-0">
                Quick Ask:
              </span>
              {quickPrompts.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => handleSendMessage(prompt)}
                  disabled={isTyping}
                  className="px-3 py-1 rounded-full bg-white border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/50 text-[11px] font-medium text-slate-700 whitespace-nowrap transition-all shrink-0 disabled:opacity-50"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-3 sm:p-4 bg-white border-t border-slate-200 flex items-center gap-2 shrink-0"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about careers, Malayalam advice, missed study days, or interview prep..."
                disabled={isTyping}
                className="flex-1 p-2.5 sm:p-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 disabled:bg-slate-50"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                className="p-2.5 sm:p-3 rounded-xl bg-slate-900 hover:bg-emerald-600 disabled:bg-slate-200 text-white font-bold transition-colors shadow-xs"
                aria-label="Send Message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
