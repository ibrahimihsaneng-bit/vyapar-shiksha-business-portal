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
  AlertCircle,
  BookOpen,
  Scale,
  X,
  ExternalLink,
  Layers,
  SlidersHorizontal,
  ChevronRight,
  Compass
} from 'lucide-react';
import { calculateCareerMatches } from '@/lib/career-finder';
import { CareerFinderCriteria, CareerRecommendation, DurationTrack, Career } from '@/types';
import { allCareers } from '@/data/careers';

export default function CareerFinderPage() {
  const [step, setStep] = useState(1);
  const [criteria, setCriteria] = useState<CareerFinderCriteria>({
    learningTime: '30-days',
    dailyHours: 2,
    educationLevel: 'Plus Two / 12th',
    existingKnowledge: 'Basic PC & Web',
    englishLevel: 'Intermediate',
    preferredLanguage: 'Both',
    computerAvailability: 'Basic Laptop / PC',
    learningBudget: 'Zero Cost Free Only',
    technicalInterests: 'Spreadsheets & Data',
    creativeInterests: 'Graphic Design & Branding',
    codingPreference: 'No Coding',
    creativePreference: 'Medium',
    workPreference: 'Remote',
    partTimeAvailability: 'Full-Time Job',
    incomeExpectation: 'Entry ₹15k-₹25k',
    employmentType: 'Full-Time Job',
    ethicalRequirement: true
  });

  const [results, setResults] = useState<CareerRecommendation[] | null>(null);
  const [selectedForCompare, setSelectedForCompare] = useState<Career[]>([]);
  const [showCompareModal, setShowCompareModal] = useState(false);

  const handleCalculate = () => {
    const matches = calculateCareerMatches(criteria);
    setResults(matches);
    // Pre-populate comparison with top 2 matches
    if (matches.length >= 2) {
      setSelectedForCompare([matches[0].career, matches[1].career]);
    }
    setStep(6); // Results view
  };

  const handleReset = () => {
    setResults(null);
    setStep(1);
    setSelectedForCompare([]);
    setShowCompareModal(false);
  };

  const toggleCompare = (career: Career) => {
    if (selectedForCompare.some(c => c.id === career.id)) {
      setSelectedForCompare(selectedForCompare.filter(c => c.id !== career.id));
    } else {
      if (selectedForCompare.length >= 4) {
        alert('You can compare a maximum of 4 careers side-by-side.');
        return;
      }
      setSelectedForCompare([...selectedForCompare, career]);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          <span>Intelligent Career Finder &bull; 14-Factor Matching</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Discover Your Ideal Career Pathway
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Answer a few transparent questions about your schedule, computer setup, language skills, and salary expectations. We match you with realistic, verified careers with zero unrealistic promises.
        </p>

        {/* Visual Graph Discovery CTA */}
        <div className="flex items-center justify-center gap-3 pt-1">
          <Link
            href="/careers/graph"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-xs"
          >
            <Compass className="w-3.5 h-3.5 text-emerald-400" />
            <span>Explore Interactive Career Graph & AI Roadmap</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
          </Link>
        </div>
      </div>

      {/* Wizard Container */}
      {step <= 5 ? (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8">
          {/* Progress Header */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
              <span className="font-bold text-emerald-800 uppercase tracking-wider">
                Step {step} of 5 &bull; {
                  step === 1 ? 'Schedule & Timeline' :
                  step === 2 ? 'Education & Language' :
                  step === 3 ? 'Hardware & Budget' :
                  step === 4 ? 'Technical & Creative Passions' : 'Work Style & Ethics'
                }
              </span>
              <span>{Math.round((step / 5) * 100)}% Complete</span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
              <div
                className="h-full bg-emerald-600 transition-all duration-300"
                style={{ width: `${(step / 5) * 100}%` }}
              />
            </div>
          </div>

          {/* Step 1: Learning Availability */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="space-y-1">
                <h2 className="text-xl font-bold text-slate-900">
                  How much time can you dedicate to preparation?
                </h2>
                <p className="text-xs text-slate-500">
                  Select a realistic training duration and daily commitment you can maintain consistently.
                </p>
              </div>

              {/* Criterion 1: Learning Duration */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  1. Desired Training Duration
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { value: '30-days', title: '30 Days (Fast Track)', desc: 'Operational assistant roles: bookkeeping, virtual assistance, e-commerce ops.' },
                    { value: '60-days', title: '60 Days (Foundation)', desc: 'Specialized coordinators in SEO, Shopify management, cloud accounting.' },
                    { value: '90-days', title: '90 Days (Professional)', desc: 'Manual software QA testing, UI design, digital marketing analytics.' },
                    { value: '120-days', title: '120 Days (Advanced)', desc: 'Full-stack web development, Python data analytics, cybersecurity.' }
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

              {/* Criterion 2: Daily Hours */}
              <div className="space-y-2 pt-3">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  2. Daily Available Study Hours
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { hours: 1, title: '1 - 2 Hours / Day', desc: 'Best for working professionals or college students doing evening study.' },
                    { hours: 3, title: '3 - 4 Hours / Day', desc: 'Ideal balance for completing lessons and practical hands-on exercises.' },
                    { hours: 5, title: '5+ Hours / Day', desc: 'Full-time immersive bootcamp style for rapid job readiness.' }
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
            </div>
          )}

          {/* Step 2: Education & Baseline Knowledge */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="space-y-1">
                <h2 className="text-xl font-bold text-slate-900">
                  Your Background & Current Language Comfort
                </h2>
                <p className="text-xs text-slate-500">
                  Every career pathway has different prerequisites. We help match you with roles that fit your background.
                </p>
              </div>

              {/* Criterion 3: Education */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  3. Formal Education Level
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { value: 'School / 10th', label: '10th / SSLC' },
                    { value: 'Plus Two / 12th', label: 'Plus Two / 12th' },
                    { value: 'Graduate', label: 'College Degree / Diploma' },
                    { value: 'Any', label: 'Non-formal / Self-Taught' }
                  ].map((e) => (
                    <button
                      key={e.value}
                      onClick={() => setCriteria({ ...criteria, educationLevel: e.value as any })}
                      className={`p-3.5 rounded-xl border text-center text-xs font-bold transition-all ${
                        criteria.educationLevel === e.value
                          ? 'border-emerald-600 bg-emerald-50 text-emerald-900 ring-1 ring-emerald-600'
                          : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {e.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Criterion 4: Existing Knowledge */}
              <div className="space-y-2 pt-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  4. Existing Computer & Office Knowledge
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { value: 'Zero / Beginner', title: 'Complete Beginner', desc: 'No previous technical experience. Only basic smartphone use.' },
                    { value: 'Basic PC & Web', title: 'Basic PC & Web Browsing', desc: 'Can use a mouse, type reasonably, download files, and browse websites.' },
                    { value: 'Office & Spreadsheets', title: 'Office & Spreadsheets', desc: 'Familiar with basic Excel/Word formulas, tables, and email.' },
                    { value: 'Some Technical / Coding', title: 'Some Technical / Coding', desc: 'Have explored HTML/CSS, basic programming, or software tools.' }
                  ].map((k) => (
                    <button
                      key={k.value}
                      onClick={() => setCriteria({ ...criteria, existingKnowledge: k.value as any })}
                      className={`p-3.5 rounded-xl border text-left transition-all ${
                        criteria.existingKnowledge === k.value
                          ? 'border-emerald-600 bg-emerald-50/70 shadow-sm ring-1 ring-emerald-600'
                          : 'border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      <div className="font-bold text-xs text-slate-900">{k.title}</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">{k.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Criterion 5 & 6: Language */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    5. English Comfort Level
                  </label>
                  <div className="space-y-2">
                    {[
                      { value: 'Basic', label: 'Basic (Prefer regional language notes)' },
                      { value: 'Intermediate', label: 'Intermediate (Can write simple emails)' },
                      { value: 'Fluent', label: 'Fluent (Comfortable chatting with clients)' }
                    ].map((l) => (
                      <button
                        key={l.value}
                        onClick={() => setCriteria({ ...criteria, englishLevel: l.value as any })}
                        className={`w-full p-2.5 rounded-xl border text-left text-xs font-semibold ${
                          criteria.englishLevel === l.value
                            ? 'border-emerald-600 bg-emerald-50 text-emerald-900'
                            : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        {l.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    6. Preferred Learning Language
                  </label>
                  <div className="space-y-2">
                    {[
                      { value: 'Malayalam', label: 'മലയാളം (Malayalam Explanations)' },
                      { value: 'English', label: 'English Only' },
                      { value: 'Both', label: 'Bilingual (Malayalam + English)' }
                    ].map((p) => (
                      <button
                        key={p.value}
                        onClick={() => setCriteria({ ...criteria, preferredLanguage: p.value as any })}
                        className={`w-full p-2.5 rounded-xl border text-left text-xs font-semibold ${
                          criteria.preferredLanguage === p.value
                            ? 'border-emerald-600 bg-emerald-50 text-emerald-900'
                            : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Hardware & Budget */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="space-y-1">
                <h2 className="text-xl font-bold text-slate-900">
                  Equipment, Budget & Financial Expectations
                </h2>
                <p className="text-xs text-slate-500">
                  We ensure you only choose careers that run on the computer you actually own.
                </p>
              </div>

              {/* Criterion 7: Computer Availability */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  7. Computer Hardware Availability
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { value: 'Smartphone Only', title: 'Smartphone Only', desc: 'No computer currently. Can study mobile theory, need cafe for labs.' },
                    { value: 'Basic Laptop / PC', title: 'Standard Laptop / PC', desc: '4GB-8GB RAM computer. Perfect for office tools, spreadsheets, web tools.' },
                    { value: 'Dedicated High-End PC', title: 'High-End Desktop / Laptop', desc: '16GB+ RAM, fast processor or GPU for video editing and heavy coding.' }
                  ].map((c) => (
                    <button
                      key={c.value}
                      onClick={() => setCriteria({ ...criteria, computerAvailability: c.value as any })}
                      className={`p-4 rounded-2xl border text-left transition-all ${
                        criteria.computerAvailability === c.value
                          ? 'border-emerald-600 bg-emerald-50/70 shadow-sm ring-1 ring-emerald-600'
                          : 'border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      <div className="font-bold text-xs text-slate-900">{c.title}</div>
                      <div className="text-[11px] text-slate-500 mt-1">{c.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Criterion 8: Learning Budget */}
              <div className="space-y-2 pt-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  8. Training Budget
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { value: 'Zero Cost Free Only', title: '100% Free / Zero Budget', desc: 'Learn only with open-source software, free official tiers, and YouTube resources.' },
                    { value: 'Low Budget / Affordable', title: 'Affordable / Low Budget', desc: 'Can afford small tool subscriptions or ₹500 - ₹1,000 for domain/hosting.' },
                    { value: 'Flexible', title: 'Flexible Budget', desc: 'Can purchase certified exam vouchers or specialized software if necessary.' }
                  ].map((b) => (
                    <button
                      key={b.value}
                      onClick={() => setCriteria({ ...criteria, learningBudget: b.value as any })}
                      className={`p-4 rounded-2xl border text-left transition-all ${
                        criteria.learningBudget === b.value
                          ? 'border-emerald-600 bg-emerald-50/70 shadow-sm ring-1 ring-emerald-600'
                          : 'border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      <div className="font-bold text-xs text-slate-900">{b.title}</div>
                      <div className="text-[11px] text-slate-500 mt-1">{b.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Criterion 13: Income Expectations */}
              <div className="space-y-2 pt-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  9. Realistic Initial Income Expectation (First 6 Months)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { value: 'Entry ₹15k-₹25k', title: '₹15,000 - ₹25,000 / mo', desc: 'Realistic entry-level range for freshers in assistant & operational roles.' },
                    { value: 'Mid ₹25k-₹45k', title: '₹25,000 - ₹45,000 / mo', desc: 'Attainable with technical QA, Shopify store management, or bilingual support.' },
                    { value: 'High ₹50k+', title: '₹50,000+ / mo', desc: 'Higher technical barrier (web development, specialized analytics, foreign clients).' }
                  ].map((i) => (
                    <button
                      key={i.value}
                      onClick={() => setCriteria({ ...criteria, incomeExpectation: i.value as any })}
                      className={`p-4 rounded-2xl border text-left transition-all ${
                        criteria.incomeExpectation === i.value
                          ? 'border-emerald-600 bg-emerald-50/70 shadow-sm ring-1 ring-emerald-600'
                          : 'border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      <div className="font-bold text-xs text-slate-900">{i.title}</div>
                      <div className="text-[11px] text-slate-500 mt-1">{i.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Technical & Creative Passions */}
          {step === 4 && (
            <div className="space-y-6">
              <div className="space-y-1">
                <h2 className="text-xl font-bold text-slate-900">
                  What type of work genuinely excites you?
                </h2>
                <p className="text-xs text-slate-500">
                  Do you lean towards visual aesthetics, organizational spreadsheets, or technology?
                </p>
              </div>

              {/* Criterion 9: Technical Interests */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  10. Technical & Logical Affinity
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { value: 'Spreadsheets & Data', title: 'Spreadsheets & Numbers', desc: 'I like organizing data, calculating finances, formulas, and balance sheets.' },
                    { value: 'Web & Automation', title: 'Web Development & Apps', desc: 'I want to build web pages, understand how the internet works, and learn code.' },
                    { value: 'IT Support & QA', title: 'Software Testing & IT Support', desc: 'I like finding bugs, testing apps, and helping users resolve tech difficulties.' },
                    { value: 'No Technical', title: 'No Technical / Clerical Only', desc: 'I prefer simple document typing, customer service chats, and basic email filing.' }
                  ].map((t) => (
                    <button
                      key={t.value}
                      onClick={() => {
                        setCriteria({
                          ...criteria,
                          technicalInterests: t.value as any,
                          codingPreference: t.value === 'Web & Automation' ? 'Wants to Code' : 'No Coding'
                        });
                      }}
                      className={`p-4 rounded-2xl border text-left transition-all ${
                        criteria.technicalInterests === t.value
                          ? 'border-emerald-600 bg-emerald-50/70 shadow-sm ring-1 ring-emerald-600'
                          : 'border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      <div className="font-bold text-xs text-slate-900">{t.title}</div>
                      <div className="text-[11px] text-slate-500 mt-1">{t.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Criterion 10: Creative Interests */}
              <div className="space-y-2 pt-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  11. Creative & Visual Interests
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { value: 'Graphic Design & Branding', title: 'Social Media Graphics & Layouts', desc: 'I enjoy making flyers, Instagram posts, posters, and choosing color palettes.' },
                    { value: 'Video Editing & Motion', title: 'Short-Form Video & Reels', desc: 'I enjoy cutting video clips, adding captions, and storytelling on YouTube/TikTok.' },
                    { value: 'Content & Copywriting', title: 'Writing & Document Crafting', desc: 'I like writing clear guides, summaries, emails, and product descriptions.' },
                    { value: 'None / Business Operations', title: 'None / Business Operations Only', desc: 'I prefer practical operational tasks without having to generate visual designs.' }
                  ].map((cr) => (
                    <button
                      key={cr.value}
                      onClick={() => setCriteria({ ...criteria, creativeInterests: cr.value as any })}
                      className={`p-4 rounded-2xl border text-left transition-all ${
                        criteria.creativeInterests === cr.value
                          ? 'border-emerald-600 bg-emerald-50/70 shadow-sm ring-1 ring-emerald-600'
                          : 'border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      <div className="font-bold text-xs text-slate-900">{cr.title}</div>
                      <div className="text-[11px] text-slate-500 mt-1">{cr.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Work Format & Ethical Requirements */}
          {step === 5 && (
            <div className="space-y-6">
              <div className="space-y-1">
                <h2 className="text-xl font-bold text-slate-900">
                  Workplace Preference & Ethical Employment Standards
                </h2>
                <p className="text-xs text-slate-500">
                  Final questions: specify where you want to work and confirm our strict non-exploitative standards.
                </p>
              </div>

              {/* Criterion 11 & 12: Work Format */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    12. Workplace Location
                  </label>
                  <div className="space-y-2">
                    {[
                      { value: 'Remote', label: '100% Work From Home (Remote)' },
                      { value: 'Flexible', label: 'Hybrid (Part Remote / Part Office)' },
                      { value: 'Offline', label: 'Traditional In-Person Office' }
                    ].map((w) => (
                      <button
                        key={w.value}
                        onClick={() => setCriteria({ ...criteria, workPreference: w.value as any })}
                        className={`w-full p-3 rounded-xl border text-left text-xs font-semibold ${
                          criteria.workPreference === w.value
                            ? 'border-emerald-600 bg-emerald-50 text-emerald-900'
                            : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        {w.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    13. Employment Type
                  </label>
                  <div className="space-y-2">
                    {[
                      { value: 'Full-Time Job', label: 'Permanent Full-Time Job' },
                      { value: 'Part-Time / Freelance', label: 'Part-Time / Freelance Client Work' },
                      { value: 'Internship / Trainee', label: 'Paid Trainee / Internship Program' }
                    ].map((p) => (
                      <button
                        key={p.value}
                        onClick={() => setCriteria({ ...criteria, partTimeAvailability: p.value as any })}
                        className={`w-full p-3 rounded-xl border text-left text-xs font-semibold ${
                          criteria.partTimeAvailability === p.value
                            ? 'border-emerald-600 bg-emerald-50 text-emerald-900'
                            : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Criterion 14: Ethical Requirement */}
              <div className="pt-4 border-t border-slate-100">
                <label className="flex items-start gap-3 p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={criteria.ethicalRequirement}
                    onChange={(e) => setCriteria({ ...criteria, ethicalRequirement: e.target.checked })}
                    className="mt-1 rounded text-emerald-600 focus:ring-emerald-500 w-4 h-4"
                  />
                  <div className="text-xs">
                    <span className="font-bold text-emerald-950 text-sm block">
                      14. Strict Ethical & Halal Employment Filter (Recommended)
                    </span>
                    <span className="text-emerald-800 leading-relaxed block mt-1">
                      Exclude any role associated with gambling platforms, predatory interest lending (Riba), adult content, MLM schemes, or deceptive review farming. Only recommend morally upright, sustainable employment.
                    </span>
                  </div>
                </label>
              </div>
            </div>
          )}

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-6 border-t border-slate-100">
            {step > 1 ? (
              <button
                onClick={() => setStep(step - 1)}
                className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-colors"
              >
                &larr; Back to Step {step - 1}
              </button>
            ) : <div />}

            {step < 5 ? (
              <button
                onClick={() => setStep(step + 1)}
                className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 shadow-sm transition-all"
              >
                <span>Continue</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleCalculate}
                className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold shadow-md transition-all"
              >
                <Sparkles className="w-4 h-4" />
                <span>Calculate My Top Career Matches &rarr;</span>
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Step 6: Comprehensive Results & Comparison Matrix */
        <div className="space-y-8">
          {/* Results Summary Bar */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>14-Factor Analysis Completed</span>
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 mt-1">
                Your Recommended Career Pathways
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Ranked by alignment with your {criteria.learningTime} timeline, {criteria.dailyHours} daily hours, hardware, and preferences.
              </p>
            </div>
            <div className="flex items-center gap-3">
              {selectedForCompare.length >= 2 && (
                <button
                  onClick={() => setShowCompareModal(true)}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 shadow-sm transition-all"
                >
                  <Scale className="w-4 h-4 text-emerald-400" />
                  <span>Compare ({selectedForCompare.length}/4)</span>
                </button>
              )}
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retake Quiz</span>
              </button>
            </div>
          </div>

          {/* Sticky Comparison Bar if items selected */}
          {selectedForCompare.length > 0 && (
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-bold text-emerald-950 flex items-center gap-1">
                  <Scale className="w-4 h-4 text-emerald-600" />
                  <span>Side-by-Side Comparison ({selectedForCompare.length}/4 selected):</span>
                </span>
                {selectedForCompare.map(c => (
                  <span key={c.id} className="inline-flex items-center gap-1 bg-white border border-emerald-300 text-emerald-900 px-2 py-1 rounded-md font-medium">
                    <span>{c.title}</span>
                    <button onClick={() => toggleCompare(c)} className="hover:text-red-600">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
              <button
                onClick={() => setShowCompareModal(true)}
                disabled={selectedForCompare.length < 2}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-bold rounded-xl shrink-0"
              >
                Open Comparison Matrix &rarr;
              </button>
            </div>
          )}

          {/* Results List */}
          <div className="space-y-5">
            {results?.slice(0, 6).map((item, idx) => {
              const isSelected = selectedForCompare.some(c => c.id === item.career.id);
              return (
                <div
                  key={item.career.id}
                  className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-sm hover:border-emerald-300 transition-all space-y-5"
                >
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-800 font-extrabold flex items-center justify-center text-sm border border-emerald-100 shrink-0">
                        #{idx + 1}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-bold text-lg text-slate-900">{item.career.title}</h3>
                          <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600">
                            {item.career.category}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 font-medium mt-0.5">{item.career.titleMl}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Match Score</div>
                        <div className="text-xl font-extrabold text-emerald-600">{item.matchScore}%</div>
                      </div>
                      <button
                        onClick={() => toggleCompare(item.career)}
                        className={`px-3 py-1.5 rounded-xl border text-xs font-semibold flex items-center gap-1 transition-all ${
                          isSelected
                            ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
                            : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <Scale className="w-3.5 h-3.5" />
                        <span>{isSelected ? 'In Comparison' : '+ Compare'}</span>
                      </button>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.career.overview}
                  </p>

                  {/* Why this is a great fit */}
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2 text-xs">
                    <div className="font-bold text-slate-800 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Why this pathway matches your profile:</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-600">
                      {item.matchReasons.map((reason, rIdx) => (
                        <div key={rIdx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                          <span>{reason}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Missing Prerequisites & Foundation Lessons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    {item.unmetPrerequisites.length > 0 ? (
                      <div className="bg-amber-50/70 p-3.5 rounded-xl border border-amber-200 text-amber-900 space-y-1">
                        <div className="font-bold flex items-center gap-1.5">
                          <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                          <span>Prerequisite Considerations:</span>
                        </div>
                        <ul className="list-disc list-inside space-y-0.5 text-amber-800">
                          {item.unmetPrerequisites.map((unmet, uIdx) => (
                            <li key={uIdx}>{unmet}</li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <div className="bg-emerald-50/50 p-3.5 rounded-xl border border-emerald-100 text-emerald-900 space-y-1">
                        <div className="font-bold flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Zero Entry Barrier:</span>
                        </div>
                        <p className="text-emerald-800">Your profile meets 100% of required prerequisites for this pathway.</p>
                      </div>
                    )}

                    <div className="bg-blue-50/60 p-3.5 rounded-xl border border-blue-200 text-blue-900 space-y-1">
                      <div className="font-bold flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                        <span>Recommended Foundation Modules:</span>
                      </div>
                      <ul className="list-disc list-inside space-y-0.5 text-blue-800">
                        {item.suggestedFoundationLessons.map((lesson, lIdx) => (
                          <li key={lIdx}>{lesson}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Career Metrics & Actions */}
                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 text-xs">
                    <div className="flex items-center gap-5 flex-wrap text-slate-600">
                      <div>
                        <span className="text-slate-400">Duration: </span>
                        <strong className="text-slate-900 font-bold">{item.career.durationTrack.replace('-', ' ')}</strong>
                      </div>
                      <div>
                        <span className="text-slate-400">Entry Salary: </span>
                        <strong className="text-emerald-700 font-bold">
                          ₹{item.career.salaryRangeInr.entryMin.toLocaleString()} - ₹{item.career.salaryRangeInr.entryMax.toLocaleString()} / mo
                        </strong>
                      </div>
                      <div>
                        <span className="text-slate-400">Remote: </span>
                        <strong className="text-slate-900 font-bold">{item.career.remotePotential}</strong>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Link
                        href={`/careers/${item.career.slug}`}
                        className="px-4 py-2 rounded-xl border border-slate-200 font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                      >
                        View Full Roadmap
                      </Link>
                      {(item.career.durationTrack === '30-days' || item.career.durationTrack === '30-day') && (
                        <Link
                          href={`/courses/${item.career.slug}`}
                          className="px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold hover:bg-emerald-700 shadow-sm transition-colors"
                        >
                          Start Free Course &rarr;
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 4-Way Career Comparison Modal */}
      {showCompareModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          <div className="bg-white rounded-3xl border border-slate-200 max-w-5xl w-full p-5 sm:p-7 space-y-4 shadow-2xl my-auto max-h-[92vh] flex flex-col">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 shrink-0">
              <div className="space-y-0.5">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[11px] font-bold">
                  <Scale className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Side-by-Side Evaluation</span>
                </div>
                <h2 className="text-xl font-extrabold text-slate-900">
                  Career Pathway Comparison Matrix
                </h2>
              </div>
              <button
                onClick={() => setShowCompareModal(false)}
                className="p-2 rounded-xl hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-x-auto overflow-y-auto flex-1 border border-slate-100 rounded-2xl">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 sticky top-0 bg-slate-50 z-10">
                    <th className="p-3 bg-slate-50 text-slate-500 uppercase tracking-wider font-bold w-40 shrink-0">Criteria</th>
                    {selectedForCompare.map(c => (
                      <th key={c.id} className="p-3 bg-slate-50 text-slate-900 font-extrabold text-xs sm:text-sm min-w-[170px] max-w-[210px]">
                        <div className="truncate">{c.title}</div>
                        <div className="text-[10px] text-slate-500 font-normal truncate">{c.category}</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="p-3 font-bold text-slate-700">Duration Track</td>
                    {selectedForCompare.map(c => (
                      <td key={c.id} className="p-3 font-semibold text-slate-900">
                        {c.durationTrack.replace('-', ' ')} ({c.durationDays} days)
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-slate-700">Entry Salary (INR)</td>
                    {selectedForCompare.map(c => (
                      <td key={c.id} className="p-3 font-extrabold text-emerald-700">
                        ₹{c.salaryRangeInr.entryMin.toLocaleString()} - ₹{c.salaryRangeInr.entryMax.toLocaleString()} / mo
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-slate-700">Remote Feasibility</td>
                    {selectedForCompare.map(c => (
                      <td key={c.id} className="p-3 text-slate-800">
                        <span className={`inline-block px-2 py-0.5 rounded text-[11px] font-bold ${
                          c.remotePotential === 'High' ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-700'
                        }`}>
                          {c.remotePotential} Potential
                        </span>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-slate-700">Primary Software Tools</td>
                    {selectedForCompare.map(c => (
                      <td key={c.id} className="p-3 text-slate-700 space-y-1">
                        {c.toolsRequired.slice(0, 4).map((t, i) => (
                          <div key={i}>&bull; {t}</div>
                        ))}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-slate-700">Education Barrier</td>
                    {selectedForCompare.map(c => (
                      <td key={c.id} className="p-3 text-slate-700">
                        {c.beginnerEligible ? 'Zero Degree Required (100% Skills-Based)' : '12th / Basic English Required'}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-slate-700">Core Daily Deliverable</td>
                    {selectedForCompare.map(c => (
                      <td key={c.id} className="p-3 text-slate-600 text-[11px] leading-relaxed">
                        {c.dailyResponsibilities[0] || c.summary}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-slate-700">Ethical Compliance</td>
                    {selectedForCompare.map(c => (
                      <td key={c.id} className="p-3 text-emerald-800 font-semibold">
                        <div className="flex items-center gap-1">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                          <span>{c.ethicalCompliance.status}</span>
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-slate-700">Curriculum Link</td>
                    {selectedForCompare.map(c => (
                      <td key={c.id} className="p-3">
                        <Link
                          href={`/careers/${c.slug}`}
                          className="inline-flex items-center gap-1 text-emerald-700 hover:text-emerald-800 font-bold"
                        >
                          <span>Explore Roadmap</span>
                          <ExternalLink className="w-3 h-3" />
                        </Link>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setShowCompareModal(false)}
                className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors"
              >
                Close Comparison
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
