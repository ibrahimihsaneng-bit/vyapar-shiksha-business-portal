import React from 'react';
import Link from 'next/link';
import { GraduationCap, ShieldCheck, HeartHandshake, AlertTriangle, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand & Manifesto */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-white shadow-md">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">Career Launchpad</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              An open, transparent career education and employment platform designed for beginners with zero prior knowledge. We connect foundational learning, hands-on workplace simulations, and ethical job discovery.
            </p>
            <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300 space-y-1">
              <div className="flex items-center gap-1.5 font-semibold text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                <span>മലയാളം & ഇംഗ്ലീഷ് ഭാഷാ പിന്തുണ</span>
              </div>
              <p className="text-slate-400 text-[11px] leading-normal">
                കേരളത്തിലെ വിദ്യാർത്ഥികൾക്കും തുടക്കക്കാർക്കും വേണ്ടി മലയാളം നിർദ്ദേശങ്ങളും വോയ്‌സ് വിശദീകരണങ്ങളും ലഭ്യമാക്കിയിരിക്കുന്നു.
              </p>
            </div>
          </div>

          {/* Career Tracks */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">Training Tracks</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/tracks/30-days" className="hover:text-emerald-400 transition-colors flex items-center justify-between">
                  <span>30-Day Fast Track</span>
                  <span className="text-[10px] bg-emerald-950 text-emerald-400 px-1.5 py-0.5 rounded font-mono">10 Careers</span>
                </Link>
              </li>
              <li>
                <Link href="/tracks/60-days" className="hover:text-emerald-400 transition-colors flex items-center justify-between">
                  <span>60-Day Foundation</span>
                  <span className="text-[10px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded font-mono">10 Careers</span>
                </Link>
              </li>
              <li>
                <Link href="/tracks/90-days" className="hover:text-emerald-400 transition-colors flex items-center justify-between">
                  <span>90-Day Professional</span>
                  <span className="text-[10px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded font-mono">10 Careers</span>
                </Link>
              </li>
              <li>
                <Link href="/tracks/120-days" className="hover:text-emerald-400 transition-colors flex items-center justify-between">
                  <span>120-Day Advanced</span>
                  <span className="text-[10px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded font-mono">10 Careers</span>
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-emerald-400 hover:underline inline-flex items-center gap-1 font-medium pt-1">
                  Browse All 40 Careers &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Interactive Tools */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">Hands-on Tools</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/career-finder" className="hover:text-emerald-400 transition-colors">
                  AI Career Finder
                </Link>
              </li>
              <li>
                <Link href="/simulator" className="hover:text-emerald-400 transition-colors">
                  Workplace Simulator
                </Link>
              </li>
              <li>
                <Link href="/resume-builder" className="hover:text-emerald-400 transition-colors">
                  ATS Resume Builder
                </Link>
              </li>
              <li>
                <Link href="/portfolio-builder" className="hover:text-emerald-400 transition-colors">
                  Portfolio Builder
                </Link>
              </li>
              <li>
                <Link href="/applications" className="hover:text-emerald-400 transition-colors">
                  Application Tracker
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-emerald-400 transition-colors">
                  Free Resource Library
                </Link>
              </li>
            </ul>
          </div>

          {/* Ethical Standards & Trust */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">Trust & Ethics</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/ethical-policy" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <HeartHandshake className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Ethical Job Policy</span>
                </Link>
              </li>
              <li>
                <Link href="/anti-scam" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                  <span>Anti-Scam Protection</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-emerald-400 transition-colors">
                  About Our Mission
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-400 transition-colors">
                  Contact & Support
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-emerald-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-emerald-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Notice */}
        <div className="pt-8 space-y-4 text-xs text-slate-500">
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-slate-400 space-y-1.5">
            <p className="font-semibold text-slate-300">
              Disclaimer on Employment & Realistic Learning Expectations:
            </p>
            <p className="leading-relaxed">
              Course durations (30, 60, 90, 120 days) represent estimated preparation periods required to acquire practical, hands-on entry-level competencies through dedicated daily study. Completion does not guarantee job placement, as hiring depends on individual portfolio execution, interview performance, and prevailing market dynamics. Reported salary ranges represent verified entry-level market medians (INR per month) in India and remote markets, cited from AmbitionBox, Glassdoor, and Naukri.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <p>&copy; 2026 Career Launchpad. Built for open education and ethical career empowerment.</p>
            <div className="flex items-center gap-4 text-xs">
              <Link href="/ethical-policy" className="hover:text-slate-300">Ethical Framework</Link>
              <span>&bull;</span>
              <Link href="/anti-scam" className="hover:text-slate-300">Anti-Scam Hub</Link>
              <span>&bull;</span>
              <Link href="/admin" className="hover:text-slate-300 text-slate-600">Admin</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
