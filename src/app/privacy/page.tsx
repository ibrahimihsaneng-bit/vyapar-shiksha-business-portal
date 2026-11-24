import React from 'react';

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6 text-slate-800">
      <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Privacy Policy</h1>
      <p className="text-xs text-slate-500">Last updated: November 2026</p>

      <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm space-y-6 text-sm leading-relaxed">
        <section className="space-y-2">
          <h2 className="font-bold text-base text-slate-900">1. Data Storage & Privacy-First Architecture</h2>
          <p className="text-slate-600">
            Career Launchpad operates primarily with client-side local storage (`localStorage`). Your resume details, course completion logs, and quiz results remain stored securely on your browser device unless you explicitly opt in to cloud synchronization. We do not sell, rent, or monetize candidate data.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-bold text-base text-slate-900">2. Analytics & Cookies</h2>
          <p className="text-slate-600">
            We use minimal, privacy-friendly analytics solely to understand which courses and learning tools are most helpful to our learners. We do not use third-party invasive trackers or advertising pixels.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-bold text-base text-slate-900">3. Job Application Outlinks</h2>
          <p className="text-slate-600">
            When you click external links to apply for verified vacancies on LinkedIn, Indeed, or direct employer career portals, your interaction on those external sites is governed by the respective platform&apos;s privacy policies.
          </p>
        </section>
      </div>
    </div>
  );
}
