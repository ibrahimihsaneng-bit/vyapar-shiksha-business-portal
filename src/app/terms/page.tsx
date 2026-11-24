import React from 'react';

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6 text-slate-800">
      <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Terms of Service</h1>
      <p className="text-xs text-slate-500">Effective Date: November 2026</p>

      <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm space-y-6 text-sm leading-relaxed">
        <section className="space-y-2">
          <h2 className="font-bold text-base text-slate-900">1. Educational Disclaimer</h2>
          <p className="text-slate-600">
            Career Launchpad provides open educational materials, simulations, and career guidelines for informational purposes. While our curricula represent industry standards, course completion does not constitute an express guarantee of employment or specific salary level. Hiring outcomes depend entirely upon individual portfolio execution, interview competence, and employer requirements.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-bold text-base text-slate-900">2. Free Access Guarantee</h2>
          <p className="text-slate-600">
            All 10 foundational 30-day courses, quizzes, and downloadable datasets provided directly on Career Launchpad are 100% free. No user shall be charged mandatory fees to access core educational materials.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-bold text-base text-slate-900">3. Prohibition of Malicious Use</h2>
          <p className="text-slate-600">
            Users may not post deceptive job listings, spam recruiter contact lists, or attempt to compromise the automated grading simulator.
          </p>
        </section>
      </div>
    </div>
  );
}
