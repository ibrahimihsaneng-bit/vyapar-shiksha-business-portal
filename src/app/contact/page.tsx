'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm space-y-4">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Contact Career Launchpad Team
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Have questions about a course, want to report a suspicious job recruiter, or need career guidance in Malayalam? We are here to support you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4 text-xs sm:text-sm">
          <h2 className="text-base font-bold text-slate-900">Direct Support Channels</h2>
          <div className="space-y-3 text-slate-600">
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-emerald-600" />
              <span>support@careerlaunchpad.org</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-emerald-600" />
              <span>Kochi / Technopark Trivandrum, Kerala, India</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>Toll-Free Helpline: 1800-425-CARE</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-emerald-50 text-emerald-900 text-xs space-y-1">
            <strong>മലയാളം ഹെൽപ്പ്‌ഡെസ്ക്:</strong>
            <p>സംശയങ്ങൾ ചോദിക്കാനും സൗജന്യ കരിയർ കൗൺസിലിംഗിനുമായി ഞങ്ങളെ ബന്ധപ്പെടാം.</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          {submitted ? (
            <div className="p-6 text-center space-y-2">
              <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
              <h3 className="font-bold text-base text-slate-900">Message Received!</h3>
              <p className="text-xs text-slate-500">Our education team will reply within 24 business hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Your Name</label>
                <input type="text" required className="w-full p-2.5 rounded-lg border border-slate-200" />
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Email Address</label>
                <input type="email" required className="w-full p-2.5 rounded-lg border border-slate-200" />
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Message / Question</label>
                <textarea rows={4} required className="w-full p-2.5 rounded-lg border border-slate-200" />
              </div>
              <button
                type="submit"
                className="w-full py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-colors"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
