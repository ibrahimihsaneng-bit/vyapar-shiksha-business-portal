'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  FileCheck,
  Plus,
  Trash2,
  Share2,
  ExternalLink,
  Laptop,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export default function PortfolioBuilderPage() {
  const [projects, setProjects] = useState([
    {
      title: 'Monthly Financial Invoicing & Bank Reconciliation',
      category: 'Accounting & Finance',
      tools: 'Zoho Books, MS Excel',
      description: 'Reconciled 1 month of business banking transactions against cash book ledgers with 100% balance accuracy. Prepared 5 GST-compliant customer invoices and generated Profit & Loss summary reports.',
      evidenceUrl: 'https://drive.google.com/sample-portfolio-deliverable-1'
    },
    {
      title: 'E-commerce Store Catalog Audit & Missing SKU Resolution',
      category: 'E-commerce Operations',
      tools: 'Shopify Admin, Google Sheets',
      description: 'Audited 50-item product catalog, mapped 12% GST tax brackets, corrected broken image assets, and established structured SKU tags for multi-channel sales.',
      evidenceUrl: 'https://drive.google.com/sample-portfolio-deliverable-2'
    }
  ]);

  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-100">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Showcase Practical Work</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Practical Project Portfolio Builder
          </h1>
          <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
            When you apply for entry-level roles without previous corporate jobs, your completed course projects are your primary proof of competence.
          </p>
        </div>

        <button
          onClick={handleCopyLink}
          className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-md shrink-0"
        >
          <Share2 className="w-4 h-4" />
          <span>{copied ? 'Link Copied!' : 'Share Portfolio Link'}</span>
        </button>
      </div>

      {/* Projects Showcase */}
      <div className="space-y-6">
        <h2 className="text-lg font-bold text-slate-900">Your Verified Workplace Projects</h2>

        <div className="grid grid-cols-1 gap-6">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                <div>
                  <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">
                    {proj.category}
                  </span>
                  <h3 className="font-bold text-lg text-slate-900 mt-0.5">{proj.title}</h3>
                </div>
                <span className="text-xs font-semibold bg-slate-100 text-slate-700 px-3 py-1 rounded-full self-start sm:self-auto">
                  Tools: {proj.tools}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                {proj.description}
              </p>

              <div className="pt-2 flex items-center justify-between text-xs">
                <a
                  href={proj.evidenceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-emerald-700 hover:text-emerald-900 hover:underline inline-flex items-center gap-1"
                >
                  <span>View Project Deliverable (Google Drive / PDF)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
