'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Compass,
  GraduationCap,
  Briefcase,
  Layers,
  FileText,
  ShieldCheck,
  Menu,
  X,
  Sparkles,
  BookOpen,
  Laptop,
  Search,
  Globe
} from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Careers', href: '/careers', icon: Compass },
    { name: 'Finder', href: '/career-finder', icon: Sparkles, badge: 'Match' },
    { name: 'Simulator', href: '/simulator', icon: Laptop, badge: 'Hands-on' },
    { name: 'Jobs', href: '/jobs', icon: Briefcase },
    { name: 'My Board', href: '/applications', icon: Layers },
    { name: 'Interview', href: '/interview-prep', icon: FileText },
  ];

  const allLinks = [
    ...navLinks,
    { name: 'Resume Builder', href: '/resume-builder', icon: FileText },
    { name: 'For Recruiters', href: '/recruiter', icon: Briefcase },
    { name: 'Anti-Scam Guide', href: '/anti-scam', icon: ShieldCheck },
    { name: 'Ethical Standards', href: '/ethical-policy', icon: ShieldCheck },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-3">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-teal-700 via-teal-600 to-emerald-500 flex items-center justify-center text-white shadow-md shadow-teal-700/20 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 leading-none">
                <span className="font-bold text-base sm:text-lg text-slate-900 tracking-tight whitespace-nowrap">
                  Career Launchpad
                </span>
                <span className="hidden sm:inline-block text-[10px] font-bold uppercase px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  Verified
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium tracking-tight whitespace-nowrap hidden lg:block mt-0.5">
                From Zero Knowledge to Your First Career
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap ${
                    isActive
                      ? 'bg-teal-50 text-teal-800'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="text-[9px] font-bold px-1.5 py-0.2 rounded-full bg-emerald-100 text-emerald-800">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Bar */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            {/* Quick Search Button */}
            <Link
              href="/careers"
              className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-200/80 text-slate-500 hover:text-slate-800 transition-colors"
              title="Search careers"
              aria-label="Search careers"
            >
              <Search className="w-3.5 h-3.5" />
            </Link>

            {/* Bilingual Indicator */}
            <div
              className="hidden xl:flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200/60 text-xs font-bold text-emerald-800"
              title="English and Malayalam support"
            >
              <Globe className="w-3.5 h-3.5 text-emerald-600" />
              <span>EN | മലയാളം</span>
            </div>

            {/* My Dashboard CTA */}
            <Link
              href="/dashboard"
              className="px-3.5 py-2 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold shadow-xs transition-all whitespace-nowrap"
            >
              My Dashboard
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-lg">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md">
              <Globe className="w-3.5 h-3.5" />
              <span>Bilingual Guidance: English & Malayalam</span>
            </div>
          </div>

          <div className="space-y-1">
            {allLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium ${
                    isActive ? 'bg-teal-50 text-teal-800 font-semibold' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-teal-600" />
                    <span>{link.name}</span>
                  </div>
                  {link.badge && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <Link
              href="/resume-builder"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-slate-200 text-slate-800 text-sm font-semibold hover:bg-slate-50"
            >
              <FileText className="w-4 h-4 text-teal-600" />
              <span>Resume Builder</span>
            </Link>
            <Link
              href="/dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center w-full py-2.5 rounded-lg bg-teal-700 hover:bg-teal-800 text-white text-sm font-semibold shadow-sm"
            >
              Go to Learner Dashboard
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
