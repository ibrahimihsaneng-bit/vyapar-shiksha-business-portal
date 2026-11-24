'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  FileCheck,
  Plus,
  Trash2,
  Share2,
  ExternalLink,
  Laptop,
  CheckCircle2,
  Sparkles,
  Eye,
  Edit3,
  Printer,
  Building2,
  Mail,
  Phone,
  MapPin,
  Globe,
  Award,
  Download,
  ShieldCheck,
  ArrowRight,
  Check
} from 'lucide-react';
import { getPortfolioProjects, savePortfolioProjects, PortfolioProjectItem } from '@/lib/storage';
import { simulatedWorkplaceProjects } from '@/data/simulated-projects';

export default function PortfolioBuilderPage() {
  const [viewMode, setViewMode] = useState<'editor' | 'preview'>('editor');
  const [copied, setCopied] = useState(false);

  // Profile Information
  const [fullName, setFullName] = useState('Arjun Das');
  const [targetRole, setTargetRole] = useState('Junior Accounts & Billing Assistant');
  const [location, setLocation] = useState('Kochi, Kerala, India');
  const [email, setEmail] = useState('arjun.das.work@gmail.com');
  const [phone, setPhone] = useState('+91 98470 12345');
  const [portfolioLink, setPortfolioLink] = useState('https://drive.google.com/sample-portfolio-deliverables');
  const [summary, setSummary] = useState(
    'Disciplined and detail-oriented operations professional trained in cloud accounting, financial documentation, and e-commerce administration. Completed verified practical workplace simulations in GST invoicing, bank reconciliation, and catalog auditing with 100% balance accuracy.'
  );

  // Skills
  const [skills, setSkills] = useState<string[]>([
    'Zoho Books',
    'GST Invoicing',
    'MS Excel (VLOOKUP, Pivot)',
    'Bank Reconciliation',
    'Shopify Catalog Audit',
    'Customer De-escalation',
    'Accounts Payable 3-Way Match'
  ]);
  const [newSkill, setNewSkill] = useState('');

  // Projects
  const [projects, setProjects] = useState<PortfolioProjectItem[]>([]);
  const [showImportModal, setShowImportModal] = useState(false);

  useEffect(() => {
    setProjects(getPortfolioProjects());
  }, []);

  const handleSaveProjects = (updated: PortfolioProjectItem[]) => {
    setProjects(updated);
    savePortfolioProjects(updated);
  };

  const handleRemoveProject = (id: string) => {
    const updated = projects.filter(p => p.id !== id);
    handleSaveProjects(updated);
  };

  const handleAddCustomProject = () => {
    const newProj: PortfolioProjectItem = {
      id: `proj-${Date.now()}`,
      title: 'Custom Workplace Practical Project',
      category: 'Operations & Data',
      tools: 'Excel, Google Sheets',
      description: 'Documented financial statement reconciliation and verified inventory velocity calculations.',
      evidenceUrl: 'https://drive.google.com/sample-deliverable',
      completedDate: new Date().toISOString().split('T')[0],
      isVerifiedWorkplace: true
    };
    handleSaveProjects([newProj, ...projects]);
  };

  const handleImportDossier = (dossier: typeof simulatedWorkplaceProjects[0]) => {
    const importedItem: PortfolioProjectItem = {
      id: `import-${dossier.id}-${Date.now()}`,
      title: dossier.title,
      category: `${dossier.department} Operations`,
      department: dossier.department,
      tools: dossier.requiredTools.join(', '),
      description: `${dossier.brief} Verified deliverable calculation conforming to ${dossier.company.name} operational benchmarks.`,
      evidenceUrl: 'https://drive.google.com/verified-workplace-deliverable',
      completedDate: new Date().toISOString().split('T')[0],
      isVerifiedWorkplace: true
    };
    handleSaveProjects([importedItem, ...projects]);
    setShowImportModal(false);
  };

  const handleAddSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSkill.trim() || skills.includes(newSkill.trim())) return;
    setSkills([...skills, newSkill.trim()]);
    setNewSkill('');
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setSkills(skills.filter(s => s !== skillToRemove));
  };

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header Bar */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-100">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Employment Proof of Competence</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Professional Project Portfolio Builder
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
            When applying for entry-level careers without previous jobs, verified project deliverables are your primary proof of competence.
          </p>
        </div>

        {/* View Mode Toggle & Share Buttons */}
        <div className="flex flex-wrap items-center gap-2.5 shrink-0">
          <div className="flex items-center bg-slate-100 p-1 rounded-xl">
            <button
              onClick={() => setViewMode('editor')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                viewMode === 'editor' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600'
              }`}
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Edit</span>
            </button>
            <button
              onClick={() => setViewMode('preview')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                viewMode === 'preview' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Live Preview</span>
            </button>
          </div>

          <button
            onClick={handlePrint}
            className="p-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 transition-colors"
            title="Print or Save PDF"
          >
            <Printer className="w-4 h-4" />
          </button>

          <button
            onClick={handleCopyLink}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-sm"
          >
            <Share2 className="w-4 h-4" />
            <span>{copied ? 'Link Copied!' : 'Share Portfolio'}</span>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 1. EDITOR VIEW */}
      {/* ========================================================================= */}
      {viewMode === 'editor' && (
        <div className="space-y-8">
          {/* Candidate Profile Details */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
            <h2 className="text-base font-bold text-slate-900 pb-2 border-b border-slate-100">
              Candidate Profile & Introduction
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Full Legal Name</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full text-xs sm:text-sm font-semibold text-slate-900 bg-white border border-slate-300 rounded-xl px-3.5 py-2 focus:outline-none focus:border-emerald-600"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Target Professional Role</label>
                <input
                  type="text"
                  value={targetRole}
                  onChange={(e) => setTargetRole(e.target.value)}
                  className="w-full text-xs sm:text-sm font-semibold text-slate-900 bg-white border border-slate-300 rounded-xl px-3.5 py-2 focus:outline-none focus:border-emerald-600"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-xs sm:text-sm text-slate-900 bg-white border border-slate-300 rounded-xl px-3.5 py-2 focus:outline-none focus:border-emerald-600"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Location / Base</label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full text-xs sm:text-sm text-slate-900 bg-white border border-slate-300 rounded-xl px-3.5 py-2 focus:outline-none focus:border-emerald-600"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">Professional Bio Summary</label>
              <textarea
                rows={3}
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                className="w-full text-xs sm:text-sm text-slate-900 bg-white border border-slate-300 rounded-xl p-3 focus:outline-none focus:border-emerald-600 leading-relaxed"
              />
            </div>
          </div>

          {/* Verified Skills Tags */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
            <h2 className="text-base font-bold text-slate-900 pb-2 border-b border-slate-100">
              Verified Technical & Workplace Skills ({skills.length})
            </h2>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-slate-100 text-slate-800 border border-slate-200"
                >
                  <span>{skill}</span>
                  <button
                    onClick={() => handleRemoveSkill(skill)}
                    className="text-slate-400 hover:text-red-600 font-bold ml-1"
                    title="Remove skill"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>

            <form onSubmit={handleAddSkill} className="flex gap-2 max-w-sm pt-2">
              <input
                type="text"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                placeholder="Add software tool or skill..."
                className="flex-1 text-xs text-slate-900 bg-white border border-slate-300 rounded-xl px-3 py-2 focus:outline-none focus:border-emerald-600"
              />
              <button
                type="submit"
                className="px-3.5 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors"
              >
                Add Skill
              </button>
            </form>
          </div>

          {/* Projects Management */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
              <div>
                <h2 className="text-base font-bold text-slate-900">
                  Featured Workplace Project Deliverables ({projects.length})
                </h2>
                <p className="text-xs text-slate-500">
                  Showcase deliverables from your practical training simulations.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowImportModal(true)}
                  className="px-3.5 py-2 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200 hover:bg-emerald-100 transition-colors flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Import from 30 Projects</span>
                </button>
                <button
                  onClick={handleAddCustomProject}
                  className="px-3.5 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors flex items-center gap-1.5"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Custom</span>
                </button>
              </div>
            </div>

            {/* Projects List */}
            <div className="space-y-4">
              {projects.map((proj, idx) => (
                <div
                  key={proj.id}
                  className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-3 relative group"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                          {proj.category}
                        </span>
                        {proj.isVerifiedWorkplace && (
                          <span className="text-[10px] font-semibold text-slate-500 flex items-center gap-1">
                            <ShieldCheck className="w-3 h-3 text-emerald-600" />
                            <span>Verified Simulator Artifact</span>
                          </span>
                        )}
                      </div>
                      <h3 className="font-bold text-sm sm:text-base text-slate-900">
                        {proj.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Tools: <strong className="text-slate-700">{proj.tools}</strong>
                      </p>
                    </div>

                    <button
                      onClick={() => handleRemoveProject(proj.id)}
                      className="text-slate-400 hover:text-red-600 transition-colors p-1"
                      title="Delete project"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-xs text-slate-700 leading-relaxed bg-white p-3 rounded-xl border border-slate-200">
                    {proj.description}
                  </p>

                  <div className="flex items-center justify-between text-xs pt-1">
                    <span className="text-slate-400">Completed: {proj.completedDate}</span>
                    <a
                      href={proj.evidenceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-emerald-700 hover:underline inline-flex items-center gap-1"
                    >
                      <span>View File Artifact</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Import Modal */}
          {showImportModal && (
            <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
              <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6 space-y-4 shadow-2xl">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h3 className="font-bold text-base text-slate-900">
                    Select a Completed Workplace Project to Import
                  </h3>
                  <button
                    onClick={() => setShowImportModal(false)}
                    className="p-1.5 rounded-xl bg-slate-100 text-slate-500"
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-3">
                  {simulatedWorkplaceProjects.slice(0, 10).map((dossier) => (
                    <div
                      key={dossier.id}
                      className="p-4 rounded-2xl border border-slate-200 hover:border-emerald-500 transition-all flex items-center justify-between gap-3 text-left"
                    >
                      <div className="space-y-0.5">
                        <span className="text-[10px] font-bold uppercase text-emerald-700">
                          {dossier.department}
                        </span>
                        <h4 className="font-bold text-xs sm:text-sm text-slate-900">
                          {dossier.title}
                        </h4>
                        <p className="text-xs text-slate-500">{dossier.company.name} • {dossier.requiredTools.join(', ')}</p>
                      </div>

                      <button
                        onClick={() => handleImportDossier(dossier)}
                        className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shrink-0 transition-colors"
                      >
                        Import
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. LIVE PUBLIC PREVIEW (WHAT RECRUITERS & EMPLOYERS SEE) */}
      {/* ========================================================================= */}
      {viewMode === 'preview' && (
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-md space-y-10 print:border-none print:shadow-none print:p-0">
          {/* Public Candidate Header */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 pb-8 border-b border-slate-200">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Verified Practical Competencies • Career Launchpad</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {fullName}
              </h1>

              <div className="text-base sm:text-lg font-bold text-emerald-700">
                {targetRole}
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pt-1">
                {summary}
              </p>

              <div className="flex flex-wrap gap-4 text-xs text-slate-500 pt-2 font-medium">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  <span>{location}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail className="w-4 h-4 text-slate-400" />
                  <span>{email}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone className="w-4 h-4 text-slate-400" />
                  <span>{phone}</span>
                </span>
              </div>
            </div>

            {/* Quick Action Contact Button */}
            <div className="flex flex-col gap-2 shrink-0">
              <a
                href={`mailto:${email}?subject=Job Opportunity for ${targetRole}`}
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold text-center transition-all shadow-sm"
              >
                Contact Candidate
              </a>
              <button
                onClick={handlePrint}
                className="px-5 py-2 rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-50 text-center transition-all"
              >
                Print PDF Copy
              </button>
            </div>
          </div>

          {/* Verified Skills Pill Grid */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Technical & Software Capabilities
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-slate-100 text-slate-800 border border-slate-200/80"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Workplace Project Deliverables Showcase */}
          <div className="space-y-6 pt-4 border-t border-slate-200">
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Verified Workplace Project Deliverables
              </h3>
              <p className="text-xs text-slate-500">
                Completed work samples evaluated against industry benchmarks.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {projects.map((proj) => (
                <div
                  key={proj.id}
                  className="p-6 rounded-2xl border border-slate-200 bg-slate-50/40 space-y-3 print:bg-white"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-200/60">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/60 px-2.5 py-0.5 rounded-full">
                        {proj.category}
                      </span>
                      <h4 className="text-base font-bold text-slate-900 mt-1">
                        {proj.title}
                      </h4>
                    </div>
                    <span className="text-xs font-semibold bg-white border border-slate-200 px-3 py-1 rounded-xl text-slate-700 shrink-0">
                      Tools: {proj.tools}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {proj.description}
                  </p>

                  <div className="pt-2 flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-medium">Verified Completion: {proj.completedDate}</span>
                    <a
                      href={proj.evidenceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-emerald-700 hover:text-emerald-900 hover:underline inline-flex items-center gap-1"
                    >
                      <span>Download Sample File / Spreadsheet</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
