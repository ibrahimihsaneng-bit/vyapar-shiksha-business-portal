'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  Clock,
  Code,
  Palette,
  Laptop,
  CheckCircle2,
  ArrowRight,
  RotateCcw,
  ShieldCheck,
  TrendingUp,
  AlertCircle
} from 'lucide-react';
import { calculateCareerMatches } from '@/lib/career-finder';
import { CareerFinderCriteria, CareerRecommendation, DurationTrack } from '@/types';

export default function CareerFinderPage() {
  const [step, setStep] = useState(1);
  const [criteria, setCriteria] = useState<CareerFinderCriteria>({
    learningTime: '30-days',
    dailyHours: 2,
    educationLevel: 'Plus Two / 12th',
    englishLevel: 'Intermediate',
    preferredLanguage: 'Both',
    codingPreference: 'No Coding',
    creativePreference: 'Medium',
    computerAvailability: 'Basic Laptop / PC',
    workPreference: 'Remote',
    employmentType: 'Full-Time Job',
    ethicalRequirement: true
  });

  const [results, setResults] = useState<CareerRecommendation[] | null>(null);

  const handleCalculate = () => {
    const matches = calculateCareerMatches(criteria);
    setResults(matches);
    setStep(7); // Results step
  };

  const handleReset = () => {
    setResults(null);
    setStep(1);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-100">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive Career Discovery</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Find Your Ideal Career Pathway
        </h1>
        <p className="text-slate-600 text-sm sm:text-base">
          Answer 6 simple questions about your schedule, technical preferences, and goals. We match you with realistic, verified careers.
        </p>
      </div>

      {/* Quiz Container */}
      {step < 7 ? (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8">
          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
              <span>Question {step} of 6</span>
              <span>{Math.round((step / 6) * 100)}% Complete</span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
              <div
                className="h-full bg-emerald-500 transition-all duration-300"
                style={{ width: `${(step / 6) * 100}%` }}
              />
            </div>
          </div>

          {/* Question 1: Learning Time */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="space-y-1">
                <h2 className="text-xl font-bold text-slate-900">
                  How much time can you commit to training before looking for work?
                </h2>
                <p className="text-xs text-slate-500">
                  Select a realistic timeframe you can dedicate consistently every day.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { value: '30-days', title: '30 Days (Fast Track)', desc: 'Operational assistant roles like bookkeeping, e-commerce, and support.' },
                  { value: '60-days', title: '60 Days (Foundation)', desc: 'Specialized coordinators in SEO, content, and data administration.' },
                  { value: '90-days', title: '90 Days (Professional)', desc: 'Software QA, UI design, and advanced digital marketing.' },
                  { value: '120-days', title: '120 Days (Advanced)', desc: 'Full-stack web development, Python data analytics, and cybersecurity.' },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setCriteria({ ...criteria, learningTime: opt.value as DurationTrack })}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      criteria.learningTime === opt.value
                        ? 'border-emerald-600 bg-emerald-50/70 shadow-sm ring-1 ring-emerald-600'
                        : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="font-bold text-sm text-slate-900">{opt.title}</div>
                    <div className="text-xs text-slate-500 mt-1">{opt.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Question 2: Daily Hours */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="space-y-1">
                <h2 className="text-xl font-bold text-slate-900">
                  How many hours can you dedicate each day?
                </h2>
                <p className="text-xs text-slate-500">
                  Consistency is more important than long irregular sessions.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { hours: 1, title: '1 - 2 Hours / Day', desc: 'Good for students and working professionals doing evening study.' },
                  { hours: 2, title: '2 - 3 Hours / Day', desc: 'The sweet spot for complete mastery within estimated timeframes.' },
                  { hours: 4, title: '4+ Hours / Day', desc: 'Full-time immersive study for rapid career transition.' },
                ].map((opt) => (
                  <button
                    key={opt.hours}
                    onClick={() => setCriteria({ ...criteria, dailyHours: opt.hours })}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      criteria.dailyHours === opt.hours
                        ? 'border-emerald-600 bg-emerald-50/70 shadow-sm ring-1 ring-emerald-600'
                        : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="font-bold text-sm text-slate-900">{opt.title}</div>
                    <div className="text-xs text-slate-500 mt-1">{opt.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Question 3: Coding Preference */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="space-y-1">
                <h2 className="text-xl font-bold text-slate-900">
                  What is your attitude towards computer programming / coding?
                </h2>
                <p className="text-xs text-slate-500">
                  There are dozens of high-paying remote roles that require 0% coding.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { value: 'No Coding', title: '100% Code-Free', desc: 'I want to work with business software (Excel, Zoho, Canva, Shopify, CRM) without writing code.' },
                  { value: 'Curious / Basic', title: 'Curious / Basic Code', desc: 'I am open to learning basic HTML/CSS or software testing logic.' },
                  { value: 'Wants to Code', title: 'I Want to Code', desc: 'I want to build web applications, write Python scripts, and learn programming.' },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setCriteria({ ...criteria, codingPreference: opt.value as any })}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      criteria.codingPreference === opt.value
                        ? 'border-emerald-600 bg-emerald-50/70 shadow-sm ring-1 ring-emerald-600'
                        : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="font-bold text-sm text-slate-900">{opt.title}</div>
                    <div className="text-xs text-slate-500 mt-1">{opt.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Question 4: Creative & Visual Design */}
          {step === 4 && (
            <div className="space-y-6">
              <div className="space-y-1">
                <h2 className="text-xl font-bold text-slate-900">
                  How interested are you in visual design and social media graphics?
                </h2>
                <p className="text-xs text-slate-500">
                  Helps differentiate between creative design roles and analytical/clerical roles.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { value: 'High', title: 'High Creative Interest', desc: 'I enjoy colors, typography, social media posts, and visual layouts.' },
                  { value: 'Medium', title: 'Balanced / Open', desc: 'I can do basic design when needed, but also like organizing data and tasks.' },
                  { value: 'Low / Business Focused', title: 'Analytical / Business Only', desc: 'I prefer numbers, spreadsheets, customer support, and administrative workflows.' },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setCriteria({ ...criteria, creativePreference: opt.value as any })}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      criteria.creativePreference === opt.value
                        ? 'border-emerald-600 bg-emerald-50/70 shadow-sm ring-1 ring-emerald-600'
                        : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="font-bold text-sm text-slate-900">{opt.title}</div>
                    <div className="text-xs text-slate-500 mt-1">{opt.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Question 5: Work Style */}
          {step === 5 && (
            <div className="space-y-6">
              <div className="space-y-1">
                <h2 className="text-xl font-bold text-slate-900">
                  Where would you prefer to work?
                </h2>
                <p className="text-xs text-slate-500">
                  Do you want to work from home, or work in an office?
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { value: 'Remote', title: 'Work From Home (100% Remote)', desc: 'Work from anywhere with an internet connection and laptop.' },
                  { value: 'Flexible', title: 'Hybrid / Flexible', desc: 'Comfortable working 2-3 days in office and remaining from home.' },
                  { value: 'Offline', title: 'In-Person Office Job', desc: 'Prefer going to a traditional office in Kochi, Technopark, or Bangalore.' },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setCriteria({ ...criteria, workPreference: opt.value as any })}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      criteria.workPreference === opt.value
                        ? 'border-emerald-600 bg-emerald-50/70 shadow-sm ring-1 ring-emerald-600'
                        : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="font-bold text-sm text-slate-900">{opt.title}</div>
                    <div className="text-xs text-slate-500 mt-1">{opt.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Question 6: English & Ethical Criteria */}
          {step === 6 && (
            <div className="space-y-6">
              <div className="space-y-1">
                <h2 className="text-xl font-bold text-slate-900">
                  Language Level & Ethical Employment Guarantee
                </h2>
                <p className="text-xs text-slate-500">
                  Last step: choose your written English comfort and verify ethical standards.
                </p>
              </div>

              <div className="space-y-4">
                <label className="block text-xs font-semibold text-slate-700">Written English Comfort</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { value: 'Basic', label: 'Basic English (Comfortable in Malayalam)' },
                    { value: 'Intermediate', label: 'Intermediate (Can write simple emails)' },
                    { value: 'Fluent', label: 'Fluent (Comfortable chatting with global clients)' },
                  ].map((l) => (
                    <button
                      key={l.value}
                      onClick={() => setCriteria({ ...criteria, englishLevel: l.value as any })}
                      className={`p-3 rounded-xl border text-left text-xs font-semibold ${
                        criteria.englishLevel === l.value
                          ? 'border-emerald-600 bg-emerald-50 text-emerald-900'
                          : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <label className="flex items-start gap-3 p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={criteria.ethicalRequirement}
                      onChange={(e) => setCriteria({ ...criteria, ethicalRequirement: e.target.checked })}
                      className="mt-0.5 rounded text-emerald-600 focus:ring-emerald-500"
                    />
                    <div className="text-xs">
                      <span className="font-bold text-emerald-900 block">
                        Strict Ethical & Halal Employment Filter (Recommended)
                      </span>
                      <span className="text-emerald-800 leading-relaxed block mt-0.5">
                        Only recommend careers that strictly exclude gambling apps, interest-bearing usury (Riba), click-farming, and deceptive marketing.
                      </span>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between pt-6 border-t border-slate-100">
            {step > 1 ? (
              <button
                onClick={() => setStep(step - 1)}
                className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-colors"
              >
                &larr; Previous Question
              </button>
            ) : <div />}

            {step < 6 ? (
              <button
                onClick={() => setStep(step + 1)}
                className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 shadow-sm transition-all"
              >
                <span>Next Question</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleCalculate}
                className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold shadow-md transition-all"
              >
                <Sparkles className="w-4 h-4" />
                <span>Show My Career Matches &rarr;</span>
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Results Section */
        <div className="space-y-8">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                Discovery Complete
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Top Career Recommendations for You
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Ranked by match percentage against your preferred timeline and technical preferences.
              </p>
            </div>
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors shrink-0"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Retake Quiz</span>
            </button>
          </div>

          {/* Results List */}
          <div className="space-y-4">
            {results?.slice(0, 5).map((item, idx) => (
              <div
                key={item.career.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 font-extrabold flex items-center justify-center text-sm border border-emerald-100">
                      #{idx + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-slate-900">{item.career.title}</h3>
                      <p className="text-xs text-slate-500 font-medium">{item.career.titleMl}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-start sm:self-auto">
                    <div className="text-right">
                      <div className="text-xs font-bold text-slate-500 uppercase">Match Score</div>
                      <div className="text-lg font-extrabold text-emerald-600">{item.matchScore}%</div>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-emerald-50 border-2 border-emerald-500 flex items-center justify-center font-bold text-xs text-emerald-800">
                      {item.matchScore}%
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.career.overview}
                </p>

                {/* Match Reasons */}
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 space-y-1.5 text-xs">
                  <div className="font-semibold text-slate-700">Why this is a great fit for you:</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-slate-600">
                    {item.matchReasons.map((reason, rIdx) => (
                      <div key={rIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{reason}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Unmet Prerequisites Warning if any */}
                {item.unmetPrerequisites.length > 0 && (
                  <div className="bg-amber-50 p-3 rounded-xl border border-amber-200 text-xs text-amber-800 space-y-1">
                    <div className="font-semibold flex items-center gap-1.5">
                      <AlertCircle className="w-4 h-4 text-amber-600" />
                      <span>Note on prerequisites:</span>
                    </div>
                    <ul className="list-disc list-inside space-y-0.5 text-amber-700">
                      {item.unmetPrerequisites.map((unmet, uIdx) => (
                        <li key={uIdx}>{unmet}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Stats & Actions */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 text-xs">
                  <div className="flex items-center gap-4 text-slate-600">
                    <div>
                      <span className="text-slate-400">Duration: </span>
                      <strong className="text-slate-800">{item.career.durationTrack.replace('-', ' ')}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400">Entry Salary: </span>
                      <strong className="text-emerald-700">₹{item.career.salaryRangeInr.entryMin.toLocaleString()} - ₹{item.career.salaryRangeInr.entryMax.toLocaleString()} / mo</strong>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Link
                      href={`/careers/${item.career.slug}`}
                      className="px-4 py-2 rounded-lg border border-slate-200 font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      Career Roadmap
                    </Link>
                    {item.career.durationTrack === '30-days' && (
                      <Link
                        href={`/courses/${item.career.slug}`}
                        className="px-4 py-2 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700 shadow-sm transition-colors"
                      >
                        Start Free 30-Day Course &rarr;
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
