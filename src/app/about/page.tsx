import React from 'react';
import Link from 'next/link';
import { GraduationCap, ShieldCheck, Heart, Sparkles, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-100">
          <GraduationCap className="w-3.5 h-3.5 text-emerald-600" />
          <span>Our Story & Mission</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          About Career Launchpad
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Career Launchpad was created to solve a critical problem: millions of capable individuals want to work, but standard college education does not teach the practical software tools required in modern digital workplaces. Meanwhile, the internet is flooded with misleading "work from home" scams and expensive bootcamps making unrealistic promises.
        </p>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
        <h2 className="text-xl font-bold text-slate-900">Our Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
            <h3 className="font-bold text-slate-900">100% Free Open Education</h3>
            <p className="text-slate-600 leading-relaxed">
              We believe foundational career training should be accessible to anyone with an internet connection, without hidden paywalls or upfront fees.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
            <h3 className="font-bold text-slate-900">Radical Honesty</h3>
            <p className="text-slate-600 leading-relaxed">
              We never guarantee overnight wealth. We clearly state realistic daily study hours, tool prerequisites, and entry-level salary medians.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
            <h3 className="font-bold text-slate-900">Hands-on Practice Over Theory</h3>
            <p className="text-slate-600 leading-relaxed">
              Watching videos alone doesn&apos;t build a career. We emphasize practical office task simulations and portfolio building from Day 1.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
            <h3 className="font-bold text-slate-900">Ethical & Halal Integrity</h3>
            <p className="text-slate-600 leading-relaxed">
              We rigorously screen against usury, predatory lending, gambling mechanics, fake reviews, and pyramid marketing schemes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
