'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Building2,
  ShieldCheck,
  CheckCircle2,
  Users,
  Briefcase,
  Sparkles,
  ArrowRight,
  Send,
  Lock,
  FileCheck2,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Award
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface RecruiterVacancySubmission {
  companyName: string;
  website: string;
  gstin: string;
  contactPerson: string;
  email: string;
  title: string;
  category: string;
  workMode: 'Remote' | 'Hybrid' | 'Onsite';
  jobType: 'Entry-Level' | 'Trainee' | 'Part-time' | 'Internship';
  salaryMin: string;
  salaryMax: string;
  skills: string;
  responsibilities: string;
  requirements: string;
  ethicalCertified: boolean;
  zeroFeeCertified: boolean;
}

export default function RecruiterPortalPage() {
  const [activeTab, setActiveTab] = useState<'post' | 'candidates'>('post');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<RecruiterVacancySubmission>({
    companyName: '',
    website: '',
    gstin: '',
    contactPerson: '',
    email: '',
    title: '',
    category: 'Finance & Administration',
    workMode: 'Remote',
    jobType: 'Entry-Level',
    salaryMin: '20000',
    salaryMax: '28000',
    skills: 'Zoho Books, GST Invoicing, MS Excel',
    responsibilities: 'Record supplier bills, prepare GST invoices, and reconcile bank statements.',
    requirements: 'Strong attention to numerical detail and completed practical simulation training.',
    ethicalCertified: false,
    zeroFeeCertified: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.ethicalCertified || !formData.zeroFeeCertified) {
      alert('You must accept the Mandatory Ethical & Anti-Scam Declarations to submit.');
      return;
    }
    setSubmitted(true);
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch {}
  };

  const vettedCandidates = [
    {
      id: 'cand-1',
      name: 'Arjun Das',
      role: 'Junior Accounts & Billing Assistant',
      location: 'Kochi, Kerala (Remote or Hybrid)',
      simScore: 96,
      topSkills: ['Zoho Books', 'GST Tax Splits', 'Bank Reconciliation', 'MS Excel (VLOOKUP)'],
      verifiedProject: 'Corporate Bank Reconciliation & Invoice Audit (30-Day Course)',
      available: 'Immediate'
    },
    {
      id: 'cand-2',
      name: 'Fatima Zahra',
      role: 'Shopify Store & Order Operations Assistant',
      location: 'Calicut, Kerala (Remote)',
      simScore: 98,
      topSkills: ['Shopify Admin', 'Shiprocket Logistics', 'Product Catalog CSV', 'Inventory Audits'],
      verifiedProject: '50-SKU Store Catalog Optimization & Order Dispatch (30-Day Course)',
      available: 'Immediate'
    },
    {
      id: 'cand-3',
      name: 'Rahul Nair',
      role: 'Customer Support & Chat Specialist',
      location: 'Trivandrum / Remote',
      simScore: 95,
      topSkills: ['Freshdesk', 'WhatsApp Business', 'Typing 42 WPM', 'Customer De-escalation'],
      verifiedProject: 'Multi-Channel Support Ticket Triage & Helpdesk FAQs',
      available: '1 Week Notice'
    },
    {
      id: 'cand-4',
      name: 'Meera Krishna',
      role: 'Junior QA Manual Software Tester',
      location: 'Kochi (Infopark) / Remote',
      simScore: 92,
      topSkills: ['TestRail', 'Jira Defect Logging', 'Chrome DevTools', 'Cross-Browser Testing'],
      verifiedProject: 'Full Web App Regression Suite with Bug Reproduction Proof',
      available: 'Immediate'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Hero */}
      <div className="bg-gradient-to-r from-slate-900 to-emerald-950 rounded-3xl text-white p-8 sm:p-12 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/80 text-emerald-200 text-xs font-bold border border-emerald-700">
            <Building2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Employer & Recruiter Portal &bull; Zero Placement Fees</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
            Hire Freshers Who Have Already Completed Real Work
          </h1>
          <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
            Stop sorting through fabricated CVs. Every candidate on Career Launchpad has completed rigorous 30-day workplace simulations—reconciling real ledgers, triaging actual customer tickets, and writing real test cases.
          </p>

          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={() => setActiveTab('post')}
              className={`px-5 py-2.5 rounded-xl text-xs font-extrabold transition-all ${
                activeTab === 'post'
                  ? 'bg-emerald-500 text-slate-950 shadow-md'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              Post an Entry-Level Vacancy
            </button>
            <button
              onClick={() => setActiveTab('candidates')}
              className={`px-5 py-2.5 rounded-xl text-xs font-extrabold transition-all ${
                activeTab === 'candidates'
                  ? 'bg-emerald-500 text-slate-950 shadow-md'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              Browse Simulation-Trained Talent ({vettedCandidates.length})
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 w-full md:w-auto shrink-0 text-center">
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
            <div className="text-2xl font-black text-emerald-400">100%</div>
            <div className="text-[10px] uppercase font-bold text-slate-300 mt-1">Ethically Audited</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
            <div className="text-2xl font-black text-white">₹0</div>
            <div className="text-[10px] uppercase font-bold text-slate-300 mt-1">Agency Commission</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
            <div className="text-2xl font-black text-white">40+</div>
            <div className="text-[10px] uppercase font-bold text-slate-300 mt-1">Skill Pathways</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
            <div className="text-2xl font-black text-emerald-400">90%+</div>
            <div className="text-[10px] uppercase font-bold text-slate-300 mt-1">Simulator Pass Rate</div>
          </div>
        </div>
      </div>

      {/* Tab 1: Post Vacancy Form */}
      {activeTab === 'post' && (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8">
          {submitted ? (
            <div className="text-center py-12 space-y-4 max-w-lg mx-auto">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Vacancy Successfully Submitted!
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Thank you, <strong>{formData.contactPerson}</strong>. Our compliance audit team will verify your corporate GSTIN and website within 2-4 business hours. Once verified, your opening for <strong>{formData.title}</strong> will be published live to our trained candidate directory.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs"
              >
                Submit Another Position
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 text-xs sm:text-sm">
              <div className="space-y-1 pb-4 border-b border-slate-100">
                <h2 className="text-xl font-extrabold text-slate-900">
                  Submit a Genuine Entry-Level Opening
                </h2>
                <p className="text-xs text-slate-500">
                  We only list genuine opportunities from verified companies. We charge no posting or recruitment fees.
                </p>
              </div>

              {/* Company Verification Information */}
              <div className="space-y-3">
                <h3 className="font-bold text-xs uppercase tracking-wider text-slate-900">
                  1. Corporate Identity & Legal Registration
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="font-semibold text-slate-700 text-xs">Registered Company Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Healthtech Solutions Pvt Ltd"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-200 text-xs"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-semibold text-slate-700 text-xs">Official Website URL *</label>
                    <input
                      type="url"
                      required
                      placeholder="https://company.com"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-200 text-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="space-y-1">
                    <label className="font-semibold text-slate-700 text-xs">MCA CIN or GSTIN *</label>
                    <input
                      type="text"
                      required
                      placeholder="32AAAAA0000A1Z5"
                      value={formData.gstin}
                      onChange={(e) => setFormData({ ...formData, gstin: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-200 text-xs"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-semibold text-slate-700 text-xs">HR / Recruiter Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sunita Menon"
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-200 text-xs"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-semibold text-slate-700 text-xs">Official Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="sunita@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-200 text-xs"
                    />
                  </div>
                </div>
              </div>

              {/* Vacancy Details */}
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <h3 className="font-bold text-xs uppercase tracking-wider text-slate-900">
                  2. Position Details
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="font-semibold text-slate-700 text-xs">Job Title *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Junior Bookkeeper & Billing Assistant"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-200 text-xs"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold text-slate-700 text-xs">Career Category *</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-200 text-xs font-semibold"
                    >
                      <option value="Finance & Administration">Finance & Administration</option>
                      <option value="Digital Operations & Commerce">Digital Operations & Commerce</option>
                      <option value="Customer Support & Sales">Customer Support & Sales</option>
                      <option value="Design & Creative">Design & Creative</option>
                      <option value="Data & Analytics">Data & Analytics</option>
                      <option value="Technology & Development">Technology & Development</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                  <div className="space-y-1">
                    <label className="font-semibold text-slate-700 text-xs">Work Mode</label>
                    <select
                      value={formData.workMode}
                      onChange={(e) => setFormData({ ...formData, workMode: e.target.value as any })}
                      className="w-full p-2.5 rounded-xl border border-slate-200 text-xs"
                    >
                      <option value="Remote">100% Remote</option>
                      <option value="Hybrid">Hybrid</option>
                      <option value="Onsite">Onsite</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold text-slate-700 text-xs">Job Type</label>
                    <select
                      value={formData.jobType}
                      onChange={(e) => setFormData({ ...formData, jobType: e.target.value as any })}
                      className="w-full p-2.5 rounded-xl border border-slate-200 text-xs"
                    >
                      <option value="Entry-Level">Entry-Level</option>
                      <option value="Trainee">Paid Trainee</option>
                      <option value="Part-time">Part-time</option>
                      <option value="Internship">Internship</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold text-slate-700 text-xs">Min Salary (INR / mo) *</label>
                    <input
                      type="number"
                      required
                      placeholder="18000"
                      value={formData.salaryMin}
                      onChange={(e) => setFormData({ ...formData, salaryMin: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-200 text-xs"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold text-slate-700 text-xs">Max Salary (INR / mo) *</label>
                    <input
                      type="number"
                      required
                      placeholder="28000"
                      value={formData.salaryMax}
                      onChange={(e) => setFormData({ ...formData, salaryMax: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-200 text-xs"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-slate-700 text-xs">Primary Tools & Skills *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Zoho Books, Tally, Excel, GST Invoicing"
                    value={formData.skills}
                    onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-200 text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-slate-700 text-xs">Daily Responsibilities *</label>
                  <textarea
                    rows={3}
                    required
                    value={formData.responsibilities}
                    onChange={(e) => setFormData({ ...formData, responsibilities: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-200 text-xs"
                  />
                </div>
              </div>

              {/* Mandatory Declarations */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <h3 className="font-bold text-xs uppercase tracking-wider text-slate-900">
                  3. Mandatory Recruiter Ethics Declarations
                </h3>

                <label className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={formData.zeroFeeCertified}
                    onChange={(e) => setFormData({ ...formData, zeroFeeCertified: e.target.checked })}
                    className="mt-0.5 rounded text-emerald-600 focus:ring-emerald-500 w-4 h-4"
                  />
                  <div className="text-xs">
                    <strong className="text-slate-900 block">Zero-Fee Candidate Guarantee:</strong>
                    <span className="text-slate-600 leading-relaxed block mt-0.5">
                      We solemnly certify that our company charges <strong>ZERO rupees</strong> from candidates for registration, onboarding kits, training portals, background checks, or laptop deposits.
                    </span>
                  </div>
                </label>

                <label className="flex items-start gap-3 p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={formData.ethicalCertified}
                    onChange={(e) => setFormData({ ...formData, ethicalCertified: e.target.checked })}
                    className="mt-0.5 rounded text-emerald-600 focus:ring-emerald-500 w-4 h-4"
                  />
                  <div className="text-xs">
                    <strong className="text-emerald-950 block">Ethical & Halal Compliance Certification:</strong>
                    <span className="text-emerald-800 leading-relaxed block mt-0.5">
                      We certify that this position does not involve online gambling apps, usurious debt collection (Riba), adult entertainment, multi-level marketing (MLM), or deceptive astroturfing.
                    </span>
                  </div>
                </label>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  className="px-8 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Vacancy for Audit & Publishing</span>
                </button>
              </div>
            </form>
          )}
        </div>
      )}

      {/* Tab 2: Vetted Candidates Pool */}
      {activeTab === 'candidates' && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-1">
            <h2 className="text-xl font-extrabold text-slate-900">
              Verified Candidate Showcase (Scored 90%+ in Simulation)
            </h2>
            <p className="text-xs text-slate-500">
              Candidates who have demonstrated competency in our practical workplace simulation departments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {vettedCandidates.map((cand) => (
              <div
                key={cand.id}
                className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-4 hover:border-emerald-300 transition-all"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-extrabold text-base text-slate-900">{cand.name}</h3>
                    <div className="text-xs font-bold text-emerald-700 mt-0.5">{cand.role}</div>
                    <div className="text-[11px] text-slate-500 flex items-center gap-1 mt-1">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      <span>{cand.location}</span>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Simulator Score</div>
                    <div className="text-xl font-extrabold text-emerald-600">{cand.simScore}%</div>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 text-xs space-y-1">
                  <span className="font-bold text-slate-700 text-[11px] uppercase tracking-wider block">Verified Simulation Project</span>
                  <p className="text-slate-800 font-medium">{cand.verifiedProject}</p>
                </div>

                <div className="space-y-1.5">
                  <span className="font-bold text-slate-700 text-[11px] uppercase tracking-wider block">Demonstrated Skills</span>
                  <div className="flex flex-wrap gap-1.5">
                    {cand.topSkills.map((s, idx) => (
                      <span key={idx} className="px-2.5 py-0.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-100 text-[11px] font-semibold">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs border-t border-slate-100">
                  <span className="text-slate-500">Availability: <strong className="text-slate-800">{cand.available}</strong></span>
                  <button
                    onClick={() => alert(`Interview invitation simulated for ${cand.name}! Contact details forwarded to your recruiter email.`)}
                    className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors"
                  >
                    Invite for Interview &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
