'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Compass,
  GraduationCap,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  TrendingUp,
  Briefcase,
  Layers,
  Laptop,
  AlertTriangle,
  PlayCircle,
  FileCheck,
  Search,
  ChevronDown,
  ChevronUp,
  Award,
  Globe,
  BookOpen,
  DollarSign,
  Users,
  Target
} from 'lucide-react';
import { careerCategories } from '@/data/categories';
import { allCareers } from '@/data/careers';
import { allCourses } from '@/data/courses';

export default function HomePage() {
  const [selectedTrack, setSelectedTrack] = useState<'30-days' | '60-days' | '90-days' | '120-days'>('30-days');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Quick Career Recommender state
  const [recInterest, setRecInterest] = useState<'finance' | 'admin' | 'support' | 'tech'>('finance');
  const [recTime, setRecTime] = useState<'1hr' | '2hr' | '3hr'>('2hr');

  const filteredCareers = allCareers.filter(c => c.durationTrack === selectedTrack);

  const getCategorySvg = (slug: string) => {
    switch (slug) {
      case 'finance-bookkeeping':
        return '/images/categories/cat-finance.svg';
      case 'ecommerce-operations':
        return '/images/categories/cat-ecommerce.svg';
      case 'office-admin':
        return '/images/categories/cat-admin.svg';
      case 'customer-support':
        return '/images/categories/cat-support.svg';
      case 'design-creative':
        return '/images/categories/cat-design.svg';
      case 'technology-automation':
        return '/images/categories/cat-tech.svg';
      default:
        return '/images/categories/cat-admin.svg';
    }
  };

  const getTrackSvg = (trackId: string) => {
    switch (trackId) {
      case '30-days':
        return '/images/tracks/track-30-day.svg';
      case '60-days':
        return '/images/tracks/track-60-day.svg';
      case '90-days':
        return '/images/tracks/track-90-day.svg';
      case '120-days':
        return '/images/tracks/track-120-day.svg';
      default:
        return '/images/tracks/track-30-day.svg';
    }
  };

  const faqs = [
    {
      q: 'Do I need a college degree or prior computer background to start?',
      qMl: 'പഠനം തുടങ്ങാൻ എനിക്ക് കോളേജ് ബിരുദമോ മുൻപരിചയമോ ആവശ്യമുണ്ടോ?',
      a: 'No. Every program is explicitly engineered for learners with zero prior knowledge. We start from ground zero: foundational concepts, how to use modern cloud tools (Google Sheets, Zoho, WordPress, Canva), and progress step-by-step through practical workplace tasks.'
    },
    {
      q: 'Are all learning curriculums and tools genuinely 100% free?',
      qMl: 'എല്ലാ കോഴ്സുകളും ടൂളുകളും പൂർണ്ണമായും സൗജന്യമാണോ?',
      a: 'Yes, 100% free. Career Launchpad charges zero tuition fees, requires no credit card, and never locks lessons behind paywalls. We also link only to free software tiers, open-source utilities, and verified educational resources.'
    },
    {
      q: 'Is there support for Malayalam speakers?',
      qMl: 'മലയാളത്തിൽ നിർദ്ദേശങ്ങളും സഹായവും ലഭ്യമാണോ?',
      a: 'Yes! All 40 careers and 10 full 30-day courses provide complete dual English and Malayalam guidance, audio voiceover explanations, and local context tailored to the Kerala and Gulf job markets.'
    },
    {
      q: 'How does the platform ensure all jobs and careers are ethical and halal?',
      qMl: 'ജോലികൾ ഹലാൽ ആണെന്നും വഞ്ചനകളില്ലാത്തതാണെന്നും എങ്ങനെ ഉറപ്പാക്കുന്നു?',
      a: 'We strictly audit every career against our 6-point integrity charter. We prohibit jobs involving usury/interest-based banking, predatory lending, gambling/betting apps, adult content, fraudulent review writing, or MLM schemes.'
    },
    {
      q: 'What are the realistic starting salaries for beginners?',
      qMl: 'തുടക്കക്കാർക്ക് ലഭിക്കുന്ന യഥാർത്ഥ വരുമാനം എത്രയാണ്?',
      a: 'For 30-day roles (e.g. Invoicing Assistant, E-commerce Catalog Assistant, Chat Support), entry salaries in Kerala and remote Indian teams range from ₹15,000 to ₹25,000 per month. With 60-90 days preparation, technical and design roles range from ₹25,000 to ₹45,000 per month.'
    },
    {
      q: 'What is the Workplace Simulator and how does it help me get hired?',
      qMl: 'വർക്ക്‌പ്ലേസ് സിമുലേറ്റർ എന്താണ്? അത് ജോലി ലഭിക്കാൻ എങ്ങനെ സഹായിക്കും?',
      a: 'The Workplace Simulator provides realistic sandbox workplace scenarios—such as reconciling invoices, fulfilling Shopify orders, or responding to customer Zendesk tickets. Completing these generates proof of work for your resume and portfolio.'
    }
  ];

  return (
    <div className="space-y-24 pb-24">
      {/* 1. Hero Section - Inspired by Skillo & Zisaa Reference Designs */}
      <section className="relative overflow-hidden bg-gradient-to-b from-teal-50/70 via-slate-50/80 to-white pt-12 sm:pt-16 pb-20 border-b border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Dual-language verified pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100/80 border border-teal-200/80 text-teal-900 text-xs font-semibold shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-teal-700" />
                <span>Zero Experience Required &bull; 100% Free Open Education</span>
                <span className="hidden sm:inline-block px-1.5 py-0.2 rounded-full bg-emerald-700 text-white text-[10px] font-bold">
                  മലയാളം
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
                Your New Career Starts Here.{' '}
                <span className="text-gradient-teal block mt-1">
                  From Zero Knowledge to Your First Job.
                </span>
              </h1>

              {/* Malayalam Prominent Callout Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/90 border border-teal-100 shadow-sm space-y-1.5 backdrop-blur-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-teal-600" />
                  <p className="text-sm sm:text-base font-bold text-teal-950 leading-snug">
                    മുൻപരിചയം ഒന്നുമില്ലാത്തവർക്കും 30 ദിവസം കൊണ്ട് തൊഴിൽ നൈപുണ്യം നേടാം.
                  </p>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-4">
                  അക്കൗണ്ടിംഗ്, ഇ-കൊമേഴ്‌സ്, ഡാറ്റാ മാനേജ്‌മെന്റ്, കസ്റ്റമർ സപ്പോർട്ട്, വെബ്സൈറ്റ് മാനേജ്‌മെന്റ് തുടങ്ങിയ ഹലാൽ തൊഴിൽ മേഖലകളിൽ സൗജന്യ പരിശീലനവും പ്രാക്ടിക്കൽ പ്രോജക്റ്റുകളും.
                </p>
              </div>

              {/* English Description */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Structured 30, 60, 90 & 120-day learning pathways with daily bite-sized lessons, realistic workplace simulators, portfolio projects, and verified ethical job opportunities.
              </p>

              {/* Embedded Interactive Search Bar */}
              <div className="relative max-w-xl">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (searchQuery.trim()) {
                      window.location.href = `/careers?q=${encodeURIComponent(searchQuery)}`;
                    } else {
                      window.location.href = '/careers';
                    }
                  }}
                  className="flex items-center gap-2 p-1.5 rounded-2xl bg-white border-2 border-teal-600/40 focus-within:border-teal-600 shadow-md shadow-teal-900/5 transition-all"
                >
                  <Search className="w-5 h-5 text-teal-600 ml-3 shrink-0" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search beginner careers: Bookkeeping, Shopify, Chat Support..."
                    className="w-full text-xs sm:text-sm text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none px-2"
                  />
                  <button
                    type="submit"
                    className="px-4 sm:px-5 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-xs sm:text-sm font-semibold shrink-0 transition-colors shadow-xs"
                  >
                    Search
                  </button>
                </form>
                {/* Popular Search Tags */}
                <div className="flex flex-wrap items-center gap-1.5 mt-2.5 text-xs text-slate-500">
                  <span className="font-semibold text-slate-600">Popular:</span>
                  {['Invoicing Assistant', 'E-commerce Catalog', 'Virtual Assistant', 'Chat Support'].map((tag) => (
                    <Link
                      key={tag}
                      href={`/careers?q=${encodeURIComponent(tag)}`}
                      className="px-2 py-0.5 rounded-md bg-white border border-slate-200 hover:border-teal-400 text-slate-700 text-[11px] transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <Link
                  href="/career-finder"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm sm:text-base shadow-lg shadow-teal-800/20 transition-all hover:scale-[1.02]"
                >
                  <Sparkles className="w-4 h-4 text-emerald-300" />
                  <span>Find My Best Career (AI Quiz)</span>
                </Link>
                <Link
                  href="/tracks/30-days"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-bold text-sm sm:text-base transition-colors shadow-xs"
                >
                  <Clock className="w-4 h-4 text-teal-600" />
                  <span>Browse 30-Day Fast Tracks</span>
                </Link>
              </div>

              {/* Key Trust Signals */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-200/80 text-xs font-medium text-slate-700">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>40 Structured Careers</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>10 Interactive Courses</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Zero Tuition Fees</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>100% Halal Verified</span>
                </div>
              </div>
            </div>

            {/* Right Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Visual SVG Graphic */}
                <div className="rounded-3xl overflow-hidden border border-slate-200/80 bg-white shadow-2xl shadow-teal-950/10">
                  <Image
                    src="/images/heroes/hero-careers-main.svg"
                    alt="Career Launchpad Hero Graphic"
                    width={560}
                    height={400}
                    className="w-full h-auto object-cover"
                    priority
                    unoptimized
                  />
                  {/* Bottom quick interactive list */}
                  <div className="p-4 sm:p-5 bg-white border-t border-slate-100 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                        <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                          Top 30-Day Beginner Picks
                        </span>
                      </div>
                      <span className="text-[11px] font-semibold text-teal-800 bg-teal-50 px-2 py-0.5 rounded-md">
                        100% Free
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {allCourses.slice(0, 4).map((c) => (
                        <Link
                          key={c.id}
                          href={`/courses/${c.careerSlug}`}
                          className="p-2.5 rounded-xl bg-slate-50 hover:bg-teal-50/80 border border-slate-200/70 hover:border-teal-300 transition-all group block"
                        >
                          <div className="text-[10px] font-bold text-teal-700 uppercase">30 Days</div>
                          <div className="font-semibold text-xs text-slate-900 group-hover:text-teal-800 line-clamp-1">
                            {c.title.replace(' (30 Days)', '')}
                          </div>
                        </Link>
                      ))}
                    </div>

                    <Link
                      href="/simulator"
                      className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors"
                    >
                      <Laptop className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Try Virtual Workplace Simulator &rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Four Duration Pathways Section */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-3.5 py-1 rounded-full border border-teal-200/60">
            Honest Preparation Timelines
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Choose Your Learning Pathway
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            No false overnight claims. We organize 40 distinct careers by the honest time needed for an absolute beginner to gain verified, employable skills.
          </p>
        </div>

        {/* 4 Interactive Pathway Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              id: '30-days',
              title: '30-Day Fast Track',
              titleMl: '30 ദിവസത്തെ ഫാസ്റ്റ് ട്രാക്ക്',
              commitment: '2-3 hrs / day',
              badge: 'Entry Ready',
              color: 'border-teal-500 bg-teal-50/40',
              activeColor: 'ring-2 ring-teal-600 bg-teal-50/70',
              desc: 'Operational support, bookkeeping invoicing, data entry, customer chat.'
            },
            {
              id: '60-days',
              title: '60-Day Foundation',
              titleMl: '60 ദിവസത്തെ ഫൗണ്ടേഷൻ',
              commitment: '2-3 hrs / day',
              badge: 'Specialized Assistant',
              color: 'border-blue-500 bg-blue-50/40',
              activeColor: 'ring-2 ring-blue-600 bg-blue-50/70',
              desc: 'Social media coordinator, junior SEO, QA tester, CRM operator.'
            },
            {
              id: '90-days',
              title: '90-Day Professional',
              titleMl: '90 ദിവസത്തെ പ്രൊഫഷണൽ',
              commitment: '3-4 hrs / day',
              badge: 'Core Specialist',
              color: 'border-indigo-500 bg-indigo-50/40',
              activeColor: 'ring-2 ring-indigo-600 bg-indigo-50/70',
              desc: 'UI/UX designer, junior web developer, cloud accounting, media producer.'
            },
            {
              id: '120-days',
              title: '120-Day Advanced',
              titleMl: '120 ദിവസത്തെ അഡ്വാൻസ്ഡ്',
              commitment: '3-4 hrs / day',
              badge: 'Full Career Shift',
              color: 'border-emerald-500 bg-emerald-50/40',
              activeColor: 'ring-2 ring-emerald-600 bg-emerald-50/70',
              desc: 'Full-stack developer, business intelligence analyst, automation lead.'
            }
          ].map((track) => {
            const isSelected = selectedTrack === track.id;
            return (
              <button
                key={track.id}
                onClick={() => setSelectedTrack(track.id as any)}
                className={`p-5 rounded-2xl border text-left transition-all relative overflow-hidden group ${
                  isSelected
                    ? `${track.activeColor} shadow-md border-transparent`
                    : 'bg-white border-slate-200/90 hover:border-slate-300 hover:shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 rounded-xl overflow-hidden bg-white border border-slate-200 p-1 shrink-0">
                    <Image
                      src={getTrackSvg(track.id)}
                      alt={track.title}
                      width={48}
                      height={48}
                      className="w-full h-full object-contain"
                      unoptimized
                    />
                  </div>
                  <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${
                    isSelected ? 'bg-teal-700 text-white' : 'bg-slate-100 text-slate-700'
                  }`}>
                    {track.badge}
                  </span>
                </div>

                <h3 className="font-bold text-base text-slate-900 group-hover:text-teal-800 transition-colors">
                  {track.title}
                </h3>
                <p className="text-[11px] text-teal-800 font-medium mb-2">{track.titleMl}</p>
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-3">
                  {track.desc}
                </p>

                <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span>Commitment:</span>
                  <span className="font-semibold text-slate-800">{track.commitment}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Filtered Careers Grid with SVG Thumbnails */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {filteredCareers.slice(0, 6).map((career) => (
            <div
              key={career.id}
              className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden card-hover-lift flex flex-col justify-between"
            >
              {/* Career Thumbnail Header */}
              <div className="relative h-44 w-full bg-slate-100 overflow-hidden border-b border-slate-100">
                <Image
                  src={`/images/thumbnails/thumb-${career.slug}.svg`}
                  alt={career.title}
                  width={400}
                  height={180}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  unoptimized
                />
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-900/80 text-white backdrop-blur-xs">
                    {career.category}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-600 text-white shadow-xs">
                    Remote: {career.remotePotential}
                  </span>
                </div>
                <div className="absolute bottom-2 right-2">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white/90 text-teal-900 font-mono shadow-xs">
                    {career.durationTrack}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 hover:text-teal-800 transition-colors">
                      <Link href={`/careers/${career.slug}`}>
                        {career.title}
                      </Link>
                    </h3>
                    <p className="text-xs text-teal-800 font-semibold mt-0.5">{career.titleMl}</p>
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {career.overview}
                  </p>
                </div>

                {/* Salary & Tools */}
                <div className="pt-3 border-t border-slate-100 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5 text-teal-600" />
                      Entry Monthly Salary:
                    </span>
                    <span className="font-extrabold text-slate-900">
                      ₹{career.salaryRangeInr.entryMin.toLocaleString()} - ₹{career.salaryRangeInr.entryMax.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1 pt-1">
                    {career.toolsRequired.slice(0, 3).map((tool) => (
                      <span key={tool} className="text-[10px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 pt-0 border-t border-slate-100/80 flex items-center gap-2 mt-auto">
                <Link
                  href={`/careers/${career.slug}`}
                  className="flex-1 text-center py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                >
                  Blueprint
                </Link>
                {selectedTrack === '30-days' ? (
                  <Link
                    href={`/courses/${career.slug}`}
                    className="flex-1 text-center py-2.5 rounded-xl bg-teal-700 text-white text-xs font-bold hover:bg-teal-800 shadow-xs transition-colors"
                  >
                    Start Course
                  </Link>
                ) : (
                  <Link
                    href={`/careers/${career.slug}#roadmap`}
                    className="flex-1 text-center py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors"
                  >
                    Roadmap
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All In Track Link */}
        <div className="text-center pt-2">
          <Link
            href={`/tracks/${selectedTrack}`}
            className="inline-flex items-center gap-2 text-sm font-bold text-teal-700 hover:text-teal-800 hover:underline"
          >
            <span>Explore All 10 Careers in {selectedTrack} Track</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 3. 9-Stage Learning Journey Visualization */}
      <section className="bg-slate-900 text-white py-16 border-y border-slate-800">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400 bg-teal-950/80 border border-teal-800/80 px-3.5 py-1 rounded-full">
              Structured Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
              The 9-Stage Zero-to-Career Framework
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We replace random tutorials with a rigorous educational pipeline that transforms complete beginners into confident, employable professionals.
            </p>
          </div>

          {/* Infographic SVG Visual */}
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-950/60 p-4">
            <Image
              src="/images/infographics/infographic-zero-to-career.svg"
              alt="9-Stage Zero to Career Framework"
              width={800}
              height={450}
              className="w-full h-auto object-contain"
              unoptimized
            />
          </div>

          {/* 9 Stages Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-9 gap-3">
            {[
              { num: '01', title: 'Discover', desc: 'Assess skills & interests' },
              { num: '02', title: 'Foundation', desc: 'Core vocabulary & concepts' },
              { num: '03', title: 'Tools', desc: 'Software masteries' },
              { num: '04', title: 'Workflows', desc: 'Realistic business routines' },
              { num: '05', title: 'Simulations', desc: 'Hands-on task sandbox' },
              { num: '06', title: 'Assessments', desc: 'Self-grading quizzes' },
              { num: '07', title: 'Portfolio', desc: 'Tangible proof of work' },
              { num: '08', title: 'Resume', desc: 'ATS-optimized templates' },
              { num: '09', title: 'Employment', desc: 'Direct verified applications' },
            ].map((st) => (
              <div
                key={st.num}
                className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/60 flex flex-col justify-between"
              >
                <div className="text-xs font-mono font-bold text-teal-400">{st.num}</div>
                <div className="font-bold text-xs text-white my-1">{st.title}</div>
                <div className="text-[11px] text-slate-400 leading-tight">{st.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Career Category Exploration with Vector Illustrations */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-200/60">
            Industry Sectors
          </span>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Explore by Industry Category
          </h2>
          <p className="text-slate-600 text-sm">
            Discover verified career options tailored to your personal strengths and professional ambitions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careerCategories.map((cat) => (
            <Link
              key={cat.id}
              href={`/careers?category=${encodeURIComponent(cat.name)}`}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 card-hover-lift flex flex-col justify-between space-y-4 group"
            >
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-teal-50 border border-teal-100 p-2 overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Image
                    src={getCategorySvg(cat.slug)}
                    alt={cat.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                    unoptimized
                  />
                </div>
                <span className="text-xs font-bold text-teal-900 bg-teal-50 px-3 py-1 rounded-full border border-teal-200/60">
                  {cat.jobCountEstimate}+ Openings
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="font-bold text-lg text-slate-900 group-hover:text-teal-800 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs text-teal-800 font-semibold">{cat.nameMl}</p>
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed pt-1">
                  {cat.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Entry Monthly Range:</span>
                <span className="font-extrabold text-slate-800">{cat.avgSalaryRange}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 5. Interactive Career Recommendation Finder Widget */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-teal-900 via-slate-900 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold border border-teal-500/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Instant Career Matcher</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
                Not sure where to begin? Get an instant recommendation in 10 seconds.
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Select what suits you best and our intelligent matching logic will pinpoint your optimal starting point.
              </p>
            </div>

            {/* Step 1: Core Interest */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Step 1: What type of work naturally appeals to you?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: 'finance', label: 'Numbers & Organization', desc: 'Invoices, spreadsheets, bookkeeping' },
                  { id: 'admin', label: 'E-commerce & Store Ops', desc: 'Shopify, catalogs, order tracking' },
                  { id: 'support', label: 'Helping People & Chat', desc: 'Customer support, emails, tickets' },
                  { id: 'tech', label: 'Tech & Websites', desc: 'WordPress, QA testing, automation' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setRecInterest(item.id as any)}
                    className={`p-3 rounded-xl text-left border transition-all ${
                      recInterest === item.id
                        ? 'bg-teal-700/80 border-teal-400 text-white shadow-sm'
                        : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <div className="font-bold text-xs">{item.label}</div>
                    <div className="text-[10px] text-slate-300 mt-1">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Time Commitment */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Step 2: How many hours can you dedicate daily?
              </label>
              <div className="flex flex-wrap gap-2.5">
                {[
                  { id: '1hr', label: '1 - 2 Hours / day (Steady)' },
                  { id: '2hr', label: '2 - 3 Hours / day (Recommended)' },
                  { id: '3hr', label: '4+ Hours / day (Intensive Fast Track)' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setRecTime(item.id as any)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-bold border transition-all ${
                      recTime === item.id
                        ? 'bg-teal-700/80 border-teal-400 text-white shadow-sm'
                        : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Recommendation Result Card */}
            <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-teal-300">
                  Top Recommended Career For You:
                </div>
                <div className="text-lg font-bold text-white">
                  {recInterest === 'finance' && 'Bookkeeping & Invoicing Assistant (30 Days)'}
                  {recInterest === 'admin' && 'E-commerce Catalog & Store Assistant (30 Days)'}
                  {recInterest === 'support' && 'Customer Support & Live Chat Specialist (30 Days)'}
                  {recInterest === 'tech' && 'Website Content & QA Assistant (30 Days)'}
                </div>
                <div className="text-xs text-slate-300">
                  100% beginner friendly &bull; Expected starting salary: ₹18,000 - ₹30,000/month
                </div>
              </div>

              <Link
                href={
                  recInterest === 'finance'
                    ? '/courses/bookkeeping-invoicing'
                    : recInterest === 'admin'
                    ? '/courses/ecommerce-catalog'
                    : recInterest === 'support'
                    ? '/courses/customer-support'
                    : '/courses/wordpress-management'
                }
                className="px-5 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs sm:text-sm shrink-0 shadow-md transition-all"
              >
                Start Free Course Now &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Workplace Simulator Spotlight */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-12 shadow-xl">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-bold border border-teal-200/60">
              <Laptop className="w-3.5 h-3.5" />
              <span>Virtual Office Simulator</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Gain Real Experience Before Your First Interview.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Don’t just watch videos. Experience what accountants, e-commerce managers, and chat support agents actually do on the job. Complete realistic tasks with downloadable mock datasets and get instant grading.
            </p>

            <div className="space-y-3">
              {[
                { title: 'Reconcile Invoices with Tax & GST', sub: 'Inspect real invoice line items, calculate totals, and check balance sheets.' },
                { title: 'Upload Mock Shopify & WooCommerce Catalogs', sub: 'Format CSV product datasets, set inventory levels, and configure tags.' },
                { title: 'Handle Live Customer Escalation Tickets', sub: 'Resolve mock shipping delays and order inquiries with professional tone.' },
              ].map((sim, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-slate-900">{sim.title}</h4>
                    <p className="text-[11px] sm:text-xs text-slate-500 leading-normal">{sim.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/simulator"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm shadow-md shadow-teal-800/20 transition-all"
              >
                <span>Launch Workplace Simulator</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/resume-builder"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition-colors"
              >
                <span>ATS Resume Builder</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-50 p-2">
              <Image
                src="/images/scenarios/scenario-invoice-entry.svg"
                alt="Workplace Simulator Interactive Scenario"
                width={600}
                height={400}
                className="w-full h-auto object-contain rounded-xl"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. Free Learning Resources & Anti-Scam Shield Section */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Anti-scam & Halal Guarantee */}
          <div className="p-8 rounded-3xl bg-emerald-50/70 border border-emerald-200/80 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                <ShieldCheck className="w-5 h-5 text-emerald-700" />
                <span>Employment Integrity Charter</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                Our Non-Negotiable Ethical & Anti-Scam Standards
              </h3>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                We strictly protect job seekers from predatory schemes, typing deposit scams, fake review agencies, and usurious finance positions. Every listing and curriculum adheres to clear halal and ethical standards.
              </p>

              <div className="space-y-2.5 pt-2">
                {[
                  { title: 'Zero Scam Rule', desc: 'Legitimate employers never ask for registration fees, training deposits, or courier charges.' },
                  { title: 'Halal Screening', desc: 'No gambling apps, usury/interest accounting, or adult content moderation.' },
                  { title: 'Transparent Salaries', desc: 'All figures derived from verified Kerala & pan-India salary surveys (AmbitionBox, Glassdoor).' },
                ].map((it, i) => (
                  <div key={i} className="p-3 rounded-xl bg-white border border-emerald-100 shadow-xs">
                    <div className="font-bold text-xs text-emerald-950">{it.title}</div>
                    <div className="text-[11px] text-slate-600 mt-0.5">{it.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/ethical-policy"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950 underline pt-2"
            >
              <span>Read Our Full 6-Point Ethical Policy &rarr;</span>
            </Link>
          </div>

          {/* Curated Free Resources Showcase */}
          <div className="p-8 rounded-3xl bg-slate-900 text-white flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-teal-400 font-bold text-sm">
                <BookOpen className="w-5 h-5" />
                <span>Free Open Source Ecosystem</span>
              </div>
              <h3 className="text-2xl font-black text-white tracking-tight">
                Curated Free Learning Tools & Textbooks
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Never pay for overpriced certification bootcamps. We have compiled the highest quality free tools, documentation, mock spreadsheets, and video channels for you.
              </p>

              <div className="grid grid-cols-2 gap-2.5 pt-2">
                {[
                  { name: 'Google Sheets', desc: 'Free cloud spreadsheet engine', tag: 'Bookkeeping' },
                  { name: 'Canva Free', desc: 'Graphic & visual creator', tag: 'Design' },
                  { name: 'Zoho Books Free', desc: 'GST & small business invoicing', tag: 'Finance' },
                  { name: 'WordPress.org', desc: 'Open source website platform', tag: 'Technology' },
                ].map((res, i) => (
                  <div key={i} className="p-3 rounded-xl bg-slate-800/90 border border-slate-700/80">
                    <span className="text-[9px] font-bold uppercase text-teal-400 font-mono">{res.tag}</span>
                    <div className="font-bold text-xs text-white mt-0.5">{res.name}</div>
                    <div className="text-[10px] text-slate-400">{res.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/resources"
              className="inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold transition-colors"
            >
              <span>Access Full Free Resource Directory &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Frequently Asked Questions Accordion */}
      <section className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-200/60">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Got Questions? We Have Honest Answers.
          </h2>
          <p className="text-slate-600 text-sm">
            Everything you need to know about starting your career journey with zero experience.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-200/90 bg-white overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors"
                >
                  <div className="space-y-1">
                    <span className="font-bold text-sm sm:text-base text-slate-900 block">
                      {faq.q}
                    </span>
                    <span className="text-xs text-teal-800 font-medium block">
                      {faq.qMl}
                    </span>
                  </div>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-teal-700 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/40">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
