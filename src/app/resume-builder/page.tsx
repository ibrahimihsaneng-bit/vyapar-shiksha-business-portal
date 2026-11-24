'use client';

import React, { useState, useEffect, useMemo } from 'react';
import {
  FileText,
  Printer,
  Save,
  Plus,
  Trash2,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
  RotateCcw,
  BookOpen,
  Award,
  Layers,
  Check,
  SlidersHorizontal,
  Download
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { getUserResume, saveUserResume, defaultResumeData, getSimulatorScores } from '@/lib/storage';
import { UserResumeData } from '@/types';

const rolePresets: Record<string, {
  summary: string;
  skills: string[];
  suggestedProjects: Array<{ title: string; description: string; tools: string }>;
}> = {
  'Junior Accounts & Billing Assistant': {
    summary: 'Discipline-driven accounts and billing assistant trained in cloud accounting, GST tax compliance, and double-entry bookkeeping. Completed rigorous practical workplace simulation projects reconciling 1 month of corporate banking transactions and generating compliant sales invoices in Zoho Books.',
    skills: ['Zoho Books', 'Tally Prime', 'GST Invoicing (HSN codes)', 'Bank Reconciliation', 'MS Excel (VLOOKUP, Pivot)', 'Accounts Payable/Receivable'],
    suggestedProjects: [
      {
        title: 'Monthly Bank Reconciliation & Trial Balance Audit',
        description: 'Reconciled 40+ line items between bank statement and cash book ledger with 100% variance resolution in Zoho Books.',
        tools: 'Zoho Books, MS Excel'
      },
      {
        title: 'Corporate GST Invoicing & Tax Ledger Filing',
        description: 'Generated 25 sales invoices applying correct CGST/SGST 18% splits and prepared supplier payment vouchers.',
        tools: 'Zoho Books, Google Sheets'
      }
    ]
  },
  'Remote Executive Virtual Assistant': {
    summary: 'Organized and proactive virtual assistant adept in executive calendar management, travel itinerary planning, and multi-channel communication triage. Completed intensive simulations coordinating international client schedules across Google Workspace and Notion.',
    skills: ['Google Workspace (Calendar, Docs, Sheets)', 'Notion', 'Slack / Zoom', 'Email Inbox Triage', 'Travel Itinerary Coordination', 'Meeting Minutes'],
    suggestedProjects: [
      {
        title: 'Multi-Timezone Executive Calendar & Meeting Triage',
        description: 'Managed 30 weekly client appointments across US/UK timezones, resolving 4 scheduling conflicts seamlessly.',
        tools: 'Google Calendar, Zoom, Notion'
      },
      {
        title: 'B2B Client Travel Dossier & Expense Tracking',
        description: 'Coordinated international flight itineraries, accommodation vouchers, and automated expense receipts.',
        tools: 'Google Sheets, Expensify'
      }
    ]
  },
  'Shopify E-Commerce Operations Assistant': {
    summary: 'E-commerce operations assistant skilled in Shopify catalog management, Shiprocket shipping fulfillment, and inventory stock auditing. Hands-on experience preparing bulk CSV product uploads and handling customer order logistics.',
    skills: ['Shopify Admin', 'Inventory Auditing', 'Shiprocket Logistics', 'Product Catalog CSV', 'Canva Product Resizing', 'Customer Order Processing'],
    suggestedProjects: [
      {
        title: '50-SKU Shopify Product Catalog Migration',
        description: 'Uploaded, formatted, and optimized 50 product listings with SEO descriptions, image alt tags, and variant pricing.',
        tools: 'Shopify, Google Sheets, Canva'
      },
      {
        title: 'Courier Shipping Manifest & Return Triage',
        description: 'Processed 35 customer orders through Shiprocket courier integrations, generating shipping labels and tracking airway bills.',
        tools: 'Shiprocket, Shopify Admin'
      }
    ]
  },
  'Customer Support & Chat Specialist': {
    summary: 'Empathetic customer support professional with 40+ WPM typing speed and hands-on experience resolving tickets via Freshdesk and WhatsApp Business. Trained in customer de-escalation, order tracking, and FAQ documentation.',
    skills: ['Freshdesk / Zendesk', 'WhatsApp Business', 'Customer De-escalation', 'Typing 40+ WPM', 'Ticket Tagging', 'Live Chat Support'],
    suggestedProjects: [
      {
        title: 'Inbound Customer Helpdesk Triage Simulation',
        description: 'Handled 25 simulated customer inquiries regarding delivery delays and payment failures, achieving a 96% first-contact resolution score.',
        tools: 'Freshdesk, WhatsApp Business'
      }
    ]
  },
  'Junior QA Manual Software Tester': {
    summary: 'Analytical manual software QA tester knowledgeable in STLC, test case authoring, cross-browser regression testing, and defect life cycles. Hands-on practice inspecting web console logs and reporting reproducible defects in Jira/TestRail.',
    skills: ['Manual Testing', 'Test Case Design', 'Bug Life Cycle', 'Chrome DevTools', 'Jira / TestRail', 'Cross-Browser Testing'],
    suggestedProjects: [
      {
        title: 'Full E-Commerce Checkout Regression Test Suite',
        description: 'Authored 30 comprehensive manual test cases covering shopping cart, coupon codes, and payment gateways with 100% bug reproduction videos.',
        tools: 'Jira, Chrome DevTools, Google Sheets'
      }
    ]
  }
};

export default function ResumeBuilderPage() {
  const [resume, setResume] = useState<UserResumeData>(defaultResumeData);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [selectedPresetRole, setSelectedPresetRole] = useState('Junior Accounts & Billing Assistant');

  useEffect(() => {
    const saved = getUserResume();
    if (saved) {
      setResume(saved);
    }
  }, []);

  const handleApplyPreset = (roleName: string) => {
    setSelectedPresetRole(roleName);
    const preset = rolePresets[roleName];
    if (preset) {
      setResume({
        ...resume,
        targetRole: roleName,
        summary: preset.summary,
        skills: Array.from(new Set([...resume.skills, ...preset.skills])),
        projects: [
          ...resume.projects,
          ...preset.suggestedProjects.filter(p => !resume.projects.some(rp => rp.title === p.title))
        ]
      });
    }
  };

  const handleSave = () => {
    saveUserResume(resume);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
    try {
      confetti({
        particleCount: 50,
        spread: 50,
        origin: { y: 0.8 }
      });
    } catch {}
  };

  const handlePrint = () => {
    window.print();
  };

  const addProject = () => {
    setResume({
      ...resume,
      projects: [
        ...resume.projects,
        {
          title: 'Practical Workplace Simulation Project',
          description: 'Executed simulated business workflow, reconciling records and delivering outputs in accordance with standard operating procedures.',
          tools: 'Zoho Books, MS Excel'
        }
      ]
    });
  };

  const removeProject = (index: number) => {
    setResume({
      ...resume,
      projects: resume.projects.filter((_, i) => i !== index)
    });
  };

  // ATS Compatibility Audit Engine
  const atsAudit = useMemo(() => {
    const checks: Array<{ title: string; passed: boolean; tip: string }> = [];

    // Check 1: Contact Info
    const hasName = Boolean(resume.fullName?.trim());
    const hasEmail = Boolean(resume.email?.trim() && resume.email.includes('@'));
    const hasPhone = Boolean(resume.phone?.trim());
    const hasCity = Boolean(resume.city?.trim());
    const contactComplete = hasName && hasEmail && hasPhone && hasCity;
    checks.push({
      title: 'Complete Contact Details (Name, Email, Phone, City)',
      passed: contactComplete,
      tip: contactComplete ? 'All primary contact fields verified.' : 'Fill in all contact fields so ATS can parse your profile.'
    });

    // Check 2: Professional Summary Length
    const summaryWords = resume.summary ? resume.summary.trim().split(/\s+/).length : 0;
    const summaryGood = summaryWords >= 20 && summaryWords <= 75;
    checks.push({
      title: 'Targeted Professional Summary (20-75 words)',
      passed: summaryGood,
      tip: summaryGood ? `Optimal summary length (${summaryWords} words).` : `Currently ${summaryWords} words. Aim for 2-4 punchy sentences.`
    });

    // Check 3: Skills Count & Density
    const skillCount = resume.skills.length;
    const skillsGood = skillCount >= 4 && skillCount <= 12;
    checks.push({
      title: 'Standard Skills Keywords (4 to 12 skills)',
      passed: skillsGood,
      tip: skillsGood ? `${skillCount} skills listed.` : 'Add between 4 and 10 specific industry tools.'
    });

    // Check 4: Practical Projects / Experience
    const hasProjects = resume.projects.length >= 1;
    checks.push({
      title: 'Practical Demonstrable Projects Listed',
      passed: hasProjects,
      tip: hasProjects ? `${resume.projects.length} project deliverables documented.` : 'Add at least one simulation project from training.'
    });

    // Check 5: Total Word Count (Single Page Fresher Target: 200 - 450 words)
    const fullText = `${resume.fullName} ${resume.summary} ${resume.skills.join(' ')} ${resume.projects.map(p => `${p.title} ${p.description}`).join(' ')}`;
    const totalWords = fullText.trim().split(/\s+/).length;
    const lengthGood = totalWords >= 150 && totalWords <= 450;
    checks.push({
      title: 'Optimal 1-Page Fresher Density (150-450 total words)',
      passed: lengthGood,
      tip: lengthGood ? `Total ~${totalWords} words fits a clean single-page format.` : `Word count is ~${totalWords}. Keep under 450 words for 1 page.`
    });

    const passedCount = checks.filter(c => c.passed).length;
    const score = Math.round((passedCount / checks.length) * 100);

    return { checks, score };
  }, [resume]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Header */}
      <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-6 print:hidden">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-100">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>ATS-Optimized Fresher Resume Builder</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Single-Column ATS Resume Builder
          </h1>
          <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
            Format your course certifications, simulation projects, and tool proficiencies cleanly. Designed strictly to pass Applicant Tracking Systems without graphical parsing errors.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={handleSave}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm"
          >
            <Save className="w-4 h-4 text-emerald-600" />
            <span>{saveSuccess ? 'Saved to LocalStorage!' : 'Save Progress'}</span>
          </button>
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-md"
          >
            <Printer className="w-4 h-4" />
            <span>Print / Save as PDF</span>
          </button>
        </div>
      </div>

      {/* Preset Target Role Selector Bar (Print: Hidden) */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm space-y-2 print:hidden">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
            <SlidersHorizontal className="w-4 h-4 text-emerald-600" />
            <span>One-Click Role Template Autofill:</span>
          </span>
          <span className="text-[11px] text-slate-500">Injects verified skills and simulation deliverables</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {Object.keys(rolePresets).map((r) => (
            <button
              key={r}
              onClick={() => handleApplyPreset(r)}
              className={`px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all ${
                selectedPresetRole === r
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-800 font-bold'
                  : 'border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      {/* Editor & Preview Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Input Editor (Col Span 5) */}
        <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 space-y-6 shadow-sm print:hidden">
          {/* ATS Audit Score Pill */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-xs text-slate-900 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>ATS Format Compliance Score</span>
              </span>
              <span className="font-extrabold text-sm text-emerald-700">{atsAudit.score}%</span>
            </div>
            <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-emerald-600 transition-all duration-300"
                style={{ width: `${atsAudit.score}%` }}
              />
            </div>
            <div className="space-y-1 pt-1 text-[11px]">
              {atsAudit.checks.map((chk, i) => (
                <div key={i} className="flex items-start gap-1.5 text-slate-600">
                  {chk.passed ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                  )}
                  <span>{chk.tip}</span>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-base font-bold text-slate-900 pb-2 border-b border-slate-100">
            Edit Your Resume Content
          </h2>

          <div className="space-y-4 text-xs">
            {/* Contact Info */}
            <div className="space-y-3">
              <h3 className="font-bold text-slate-700 uppercase tracking-wider text-[11px]">Personal Information</h3>
              <input
                type="text"
                placeholder="Full Name"
                value={resume.fullName}
                onChange={(e) => setResume({ ...resume, fullName: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-1 focus:ring-emerald-500 font-semibold"
              />
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={resume.email}
                  onChange={(e) => setResume({ ...resume, email: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  value={resume.phone}
                  onChange={(e) => setResume({ ...resume, phone: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="City, State"
                  value={resume.city}
                  onChange={(e) => setResume({ ...resume, city: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200"
                />
                <input
                  type="text"
                  placeholder="Target Role"
                  value={resume.targetRole}
                  onChange={(e) => setResume({ ...resume, targetRole: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200"
                />
              </div>
            </div>

            {/* Professional Summary */}
            <div className="space-y-1.5 pt-2">
              <h3 className="font-bold text-slate-700 uppercase tracking-wider text-[11px]">Professional Summary</h3>
              <textarea
                rows={4}
                value={resume.summary}
                onChange={(e) => setResume({ ...resume, summary: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 leading-relaxed focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
            </div>

            {/* Skills */}
            <div className="space-y-1.5 pt-2">
              <h3 className="font-bold text-slate-700 uppercase tracking-wider text-[11px]">Skills (Comma-separated)</h3>
              <input
                type="text"
                value={resume.skills.join(', ')}
                onChange={(e) => setResume({ ...resume, skills: e.target.value.split(',').map(s => s.trim()).filter(Boolean) })}
                className="w-full p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
            </div>

            {/* Practical Projects */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-slate-700 uppercase tracking-wider text-[11px]">Practical Simulation Projects</h3>
                <button
                  onClick={addProject}
                  className="text-emerald-700 font-bold hover:underline flex items-center gap-1 text-[11px]"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>+ Add Project</span>
                </button>
              </div>

              {resume.projects.map((proj, pIdx) => (
                <div key={pIdx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <input
                      type="text"
                      placeholder="Project Title"
                      value={proj.title}
                      onChange={(e) => {
                        const updated = [...resume.projects];
                        updated[pIdx].title = e.target.value;
                        setResume({ ...resume, projects: updated });
                      }}
                      className="font-bold bg-white p-1.5 rounded-lg border border-slate-200 w-3/4 text-xs"
                    />
                    <button
                      onClick={() => removeProject(pIdx)}
                      className="text-red-500 hover:text-red-700 p-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <input
                    type="text"
                    placeholder="Tools used (e.g. Zoho Books, Excel, Notion)"
                    value={proj.tools}
                    onChange={(e) => {
                      const updated = [...resume.projects];
                      updated[pIdx].tools = e.target.value;
                      setResume({ ...resume, projects: updated });
                    }}
                    className="w-full bg-white p-1.5 rounded-lg border border-slate-200 text-xs"
                  />
                  <textarea
                    rows={2}
                    placeholder="Deliverable description (what did you build or reconcile?)"
                    value={proj.description}
                    onChange={(e) => {
                      const updated = [...resume.projects];
                      updated[pIdx].description = e.target.value;
                      setResume({ ...resume, projects: updated });
                    }}
                    className="w-full bg-white p-1.5 rounded-lg border border-slate-200 text-xs leading-relaxed"
                  />
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="space-y-2 pt-2">
              <h3 className="font-bold text-slate-700 uppercase tracking-wider text-[11px]">Education</h3>
              {resume.education.map((edu, eIdx) => (
                <div key={eIdx} className="grid grid-cols-3 gap-2">
                  <input
                    type="text"
                    placeholder="Degree / Course"
                    value={edu.degree}
                    onChange={(e) => {
                      const updated = [...resume.education];
                      updated[eIdx].degree = e.target.value;
                      setResume({ ...resume, education: updated });
                    }}
                    className="p-2 rounded-lg border border-slate-200 text-xs"
                  />
                  <input
                    type="text"
                    placeholder="School / College"
                    value={edu.institution}
                    onChange={(e) => {
                      const updated = [...resume.education];
                      updated[eIdx].institution = e.target.value;
                      setResume({ ...resume, education: updated });
                    }}
                    className="p-2 rounded-lg border border-slate-200 text-xs"
                  />
                  <input
                    type="text"
                    placeholder="Year"
                    value={edu.year}
                    onChange={(e) => {
                      const updated = [...resume.education];
                      updated[eIdx].year = e.target.value;
                      setResume({ ...resume, education: updated });
                    }}
                    className="p-2 rounded-lg border border-slate-200 text-xs"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: ATS Printable Preview (Col Span 7) */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 shadow-lg p-8 sm:p-12 space-y-6 text-slate-900 font-sans print:shadow-none print:border-none print:p-0">
          {/* Header */}
          <div className="text-center space-y-1.5 pb-4 border-b-2 border-slate-900">
            <h2 className="text-2xl font-black uppercase tracking-wider text-slate-900">
              {resume.fullName || 'YOUR NAME'}
            </h2>
            <div className="text-xs text-slate-600 font-medium space-x-2">
              <span>{resume.city || 'Kochi, Kerala'}</span>
              <span>&bull;</span>
              <span>{resume.phone || '+91 98470 00000'}</span>
              <span>&bull;</span>
              <span>{resume.email || 'your.email@gmail.com'}</span>
            </div>
            {resume.targetRole && (
              <div className="text-xs font-bold uppercase tracking-widest text-emerald-800 pt-0.5">
                Target Role: {resume.targetRole}
              </div>
            )}
          </div>

          {/* Professional Summary */}
          {resume.summary && (
            <div className="space-y-1.5">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">
                Professional Profile
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                {resume.summary}
              </p>
            </div>
          )}

          {/* Key Demonstrated Skills */}
          {resume.skills.length > 0 && (
            <div className="space-y-1.5">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">
                Core Competencies & Software Tools
              </h3>
              <div className="text-xs text-slate-700 leading-relaxed">
                {resume.skills.join('  •  ')}
              </div>
            </div>
          )}

          {/* Practical Simulation Projects (The core differentiator for career switchers) */}
          {resume.projects.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">
                Practical Workplace Simulation Deliverables
              </h3>
              <div className="space-y-3">
                {resume.projects.map((proj, pIdx) => (
                  <div key={pIdx} className="space-y-1 text-xs">
                    <div className="flex items-center justify-between font-bold text-slate-900">
                      <span>{proj.title}</span>
                      <span className="text-[11px] font-normal text-slate-500 italic">Tools: {proj.tools}</span>
                    </div>
                    <p className="text-slate-700 leading-relaxed">
                      {proj.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {resume.education.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">
                Education
              </h3>
              <div className="space-y-1 text-xs">
                {resume.education.map((edu, eIdx) => (
                  <div key={eIdx} className="flex items-center justify-between">
                    <div>
                      <strong className="text-slate-900">{edu.degree}</strong> &bull; {edu.institution}
                    </div>
                    <span className="text-slate-500 font-medium">{edu.year}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Certifications */}
          {resume.certifications && resume.certifications.length > 0 && (
            <div className="space-y-1.5">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">
                Verified Certifications & Training
              </h3>
              <ul className="list-disc list-inside space-y-0.5 text-xs text-slate-700">
                {resume.certifications.map((cert, cIdx) => (
                  <li key={cIdx}>{cert}</li>
                ))}
              </ul>
            </div>
          )}

          {/* ATS Compliance Watermark Stamp */}
          <div className="pt-4 border-t border-slate-200 text-center text-[10px] text-slate-400">
            Standard Format Optimized for Corporate Applicant Tracking Systems &bull; Built with Career Launchpad
          </div>
        </div>
      </div>
    </div>
  );
}
