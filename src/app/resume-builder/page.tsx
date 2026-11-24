'use client';

import React, { useState, useEffect } from 'react';
import {
  FileText,
  Printer,
  Save,
  Plus,
  Trash2,
  CheckCircle2,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { getUserResume, saveUserResume, defaultResumeData } from '@/lib/storage';
import { UserResumeData } from '@/types';

export default function ResumeBuilderPage() {
  const [resume, setResume] = useState<UserResumeData>(defaultResumeData);
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    const saved = getUserResume();
    if (saved) {
      setResume(saved);
    }
  }, []);

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
          title: 'Practical Simulation Project',
          description: 'Documented process workflow and delivered verified outputs adhering to corporate guidelines.',
          tools: 'MS Excel, Cloud Tools'
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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Top Header */}
      <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-6 print:hidden">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-100">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>ATS-Friendly Resume Generator</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Entry-Level Career Switcher Resume Builder
          </h1>
          <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
            Format your practical projects and course certifications cleanly for corporate Applicant Tracking Systems (ATS). No confusing graphics or unreadable columns.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={handleSave}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm"
          >
            <Save className="w-4 h-4 text-emerald-600" />
            <span>{saveSuccess ? 'Saved!' : 'Save Progress'}</span>
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

      {/* Editor & Preview Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Input Editor */}
        <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm print:hidden">
          <h2 className="text-lg font-bold text-slate-900 pb-3 border-b border-slate-100">
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
                className="w-full p-2.5 rounded-lg border border-slate-200"
              />
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={resume.email}
                  onChange={(e) => setResume({ ...resume, email: e.target.value })}
                  className="w-full p-2.5 rounded-lg border border-slate-200"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  value={resume.phone}
                  onChange={(e) => setResume({ ...resume, phone: e.target.value })}
                  className="w-full p-2.5 rounded-lg border border-slate-200"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="City, State"
                  value={resume.city}
                  onChange={(e) => setResume({ ...resume, city: e.target.value })}
                  className="w-full p-2.5 rounded-lg border border-slate-200"
                />
                <input
                  type="text"
                  placeholder="Target Role"
                  value={resume.targetRole}
                  onChange={(e) => setResume({ ...resume, targetRole: e.target.value })}
                  className="w-full p-2.5 rounded-lg border border-slate-200"
                />
              </div>
            </div>

            {/* Professional Summary */}
            <div className="space-y-2 pt-2">
              <h3 className="font-bold text-slate-700 uppercase tracking-wider text-[11px]">Professional Summary</h3>
              <textarea
                rows={4}
                value={resume.summary}
                onChange={(e) => setResume({ ...resume, summary: e.target.value })}
                className="w-full p-2.5 rounded-lg border border-slate-200 leading-relaxed"
              />
            </div>

            {/* Skills */}
            <div className="space-y-2 pt-2">
              <h3 className="font-bold text-slate-700 uppercase tracking-wider text-[11px]">Skills (Comma-separated)</h3>
              <input
                type="text"
                value={resume.skills.join(', ')}
                onChange={(e) => setResume({ ...resume, skills: e.target.value.split(',').map(s => s.trim()) })}
                className="w-full p-2.5 rounded-lg border border-slate-200"
              />
            </div>

            {/* Practical Projects */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-slate-700 uppercase tracking-wider text-[11px]">Practical Projects</h3>
                <button
                  onClick={addProject}
                  className="text-emerald-700 font-bold hover:underline flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Project</span>
                </button>
              </div>

              {resume.projects.map((proj, pIdx) => (
                <div key={pIdx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <input
                      type="text"
                      placeholder="Project Title"
                      value={proj.title}
                      onChange={(e) => {
                        const updated = [...resume.projects];
                        updated[pIdx].title = e.target.value;
                        setResume({ ...resume, projects: updated });
                      }}
                      className="font-bold bg-white p-1.5 rounded border border-slate-200 w-3/4"
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
                    placeholder="Tools used (e.g. Zoho Books, Excel)"
                    value={proj.tools}
                    onChange={(e) => {
                      const updated = [...resume.projects];
                      updated[pIdx].tools = e.target.value;
                      setResume({ ...resume, projects: updated });
                    }}
                    className="w-full bg-white p-1.5 rounded border border-slate-200"
                  />
                  <textarea
                    rows={2}
                    placeholder="What did you build/reconcile?"
                    value={proj.description}
                    onChange={(e) => {
                      const updated = [...resume.projects];
                      updated[pIdx].description = e.target.value;
                      setResume({ ...resume, projects: updated });
                    }}
                    className="w-full bg-white p-1.5 rounded border border-slate-200"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: ATS Real-Time Printable Preview */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 shadow-lg p-8 sm:p-12 space-y-6 text-slate-800 font-sans print:shadow-none print:border-none print:p-0">
          {/* Header */}
          <div className="text-center space-y-1.5 pb-4 border-b-2 border-slate-900">
            <h2 className="text-2xl font-bold uppercase tracking-wider text-slate-900">
              {resume.fullName || 'YOUR NAME'}
            </h2>
            <div className="text-xs text-slate-600 font-medium space-x-2">
              <span>{resume.city || 'Kochi, Kerala'}</span>
              <span>&bull;</span>
              <span>{resume.phone || '+91 98470 00000'}</span>
              <span>&bull;</span>
              <span>{resume.email || 'your.email@example.com'}</span>
            </div>
            <div className="text-xs font-bold text-emerald-800 tracking-wide pt-1">
              {resume.targetRole || 'Junior Operations Assistant'}
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-1">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">
              Professional Summary
            </h3>
            <p className="text-xs text-slate-700 leading-relaxed pt-1">
              {resume.summary}
            </p>
          </div>

          {/* Core Competencies & Skills */}
          <div className="space-y-1.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">
              Core Competencies & Tools
            </h3>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {resume.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="text-[11px] font-semibold bg-slate-100 text-slate-800 px-2.5 py-0.5 rounded border border-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Practical Projects */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">
              Hands-On Practical Projects & Workplace Simulations
            </h3>
            <div className="space-y-3 pt-1">
              {resume.projects.map((proj, idx) => (
                <div key={idx} className="space-y-0.5 text-xs">
                  <div className="flex items-center justify-between font-bold text-slate-900">
                    <span>{proj.title}</span>
                    <span className="text-[10px] text-slate-500 font-normal italic">Tools: {proj.tools}</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed text-[11px]">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">
              Education & Foundational Training
            </h3>
            <div className="space-y-1 pt-1 text-xs">
              {resume.education.map((edu, eIdx) => (
                <div key={eIdx} className="flex items-center justify-between text-slate-800">
                  <span className="font-semibold">{edu.degree} &mdash; {edu.institution}</span>
                  <span className="text-slate-500">{edu.year}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-1.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">
              Verified Certifications
            </h3>
            <div className="space-y-1 pt-1 text-xs text-slate-700">
              {resume.certifications.map((cert, cIdx) => (
                <div key={cIdx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
