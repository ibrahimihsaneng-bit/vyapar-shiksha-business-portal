'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  AlertTriangle,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowRight,
  Sparkles,
  PhoneCall,
  Search,
  ExternalLink,
  ShieldAlert,
  FileWarning,
  RotateCcw,
  Info
} from 'lucide-react';

interface ScamAnalysisResult {
  riskScore: number; // 0 to 100
  riskLevel: 'Low Risk / Standard' | 'Moderate Concern' | 'High Risk Scam' | 'Severe Fraud Detected';
  flaggedPhrases: Array<{ phrase: string; explanation: string }>;
  recommendations: string[];
}

export default function AntiScamPage() {
  const [inputText, setInputText] = useState('');
  const [analysis, setAnalysis] = useState<ScamAnalysisResult | null>(null);

  const sampleScamOffers = [
    {
      label: 'Sample: Data Entry "Registration Fee" Scam',
      text: 'Dear Candidate, Congratulations! You have been selected for Home Based Data Entry Job. Salary is ₹35,000/month. Before dispatching company laptop and training kit, please transfer refundable security deposit of ₹1,499 via GooglePay to account verification officer. Contact strictly on WhatsApp.'
    },
    {
      label: 'Sample: Telegram "YouTube Like" Task Scam',
      text: 'Earn ₹2,000 - ₹5,000 daily by liking YouTube videos and rating hotels on Google Maps! Work only 20 mins from mobile. Join our private Telegram channel @DailyWealthTask to receive your first task payout immediately. No interview needed.'
    },
    {
      label: 'Sample: Fake "Legal Notice" Threat',
      text: 'URGENT LEGAL NOTICE: You failed to complete 500 pages of PDF data entry within 48 hours. As per contract clause 12, an FIR under IPC 420 is being registered at Delhi High Court. Pay penalty of ₹8,500 immediately to avoid arrest warrant.'
    }
  ];

  const handleAnalyze = () => {
    if (!inputText.trim()) return;

    const lower = inputText.toLowerCase();
    const flagged: Array<{ phrase: string; explanation: string }> = [];
    let score = 5;

    // Advance fee checks
    if (lower.includes('registration fee') || lower.includes('security deposit') || lower.includes('refundable') || lower.includes('kit fee') || lower.includes('processing fee') || lower.includes('transfer') || lower.includes('googlepay') || lower.includes('phonepe') || lower.includes('paytm')) {
      score += 45;
      flagged.push({
        phrase: 'Request for Upfront Payment / Security Deposit',
        explanation: 'Genuine employers NEVER ask candidates to pay money for registration, laptops, or verification.'
      });
    }

    // Communication channels
    if (lower.includes('telegram') || lower.includes('strictly on whatsapp') || lower.includes('dm on instagram') || lower.includes('private group')) {
      score += 25;
      flagged.push({
        phrase: 'Informal Channel Redirection (Telegram / WhatsApp Only)',
        explanation: 'Scammers avoid corporate domains (@company.com) and use untraceable Telegram handles.'
      });
    }

    // Unrealistic income for trivial tasks
    if (lower.includes('like youtube') || lower.includes('rating hotel') || lower.includes('typing captcha') || lower.includes('₹2,000 - ₹5,000 daily') || lower.includes('earn ₹3000 daily') || lower.includes('20 mins')) {
      score += 30;
      flagged.push({
        phrase: 'Unrealistic Pay for Trivial Repetitive Tasks',
        explanation: 'High payouts for simple mobile clicks do not exist. This is the hallmark bait of cyber investment syndicates.'
      });
    }

    // Legal intimidation
    if (lower.includes('legal notice') || lower.includes('ipc 420') || lower.includes('high court') || lower.includes('arrest warrant') || lower.includes('penalty of') || lower.includes('breach of contract')) {
      score += 45;
      flagged.push({
        phrase: 'Fabricated Legal Extortion / Intimidation',
        explanation: 'Fraudulent data-entry operators send forged legal notices to scare victims into paying bogus penalties.'
      });
    }

    // No interview / instant hire
    if (lower.includes('congratulations! you have been selected') || lower.includes('no interview needed') || lower.includes('selected without interview')) {
      score += 20;
      flagged.push({
        phrase: 'Hired Instantly Without Any Interview or Screening',
        explanation: 'Legitimate businesses always screen candidate resumes or conduct interviews before extending job offers.'
      });
    }

    // Sensitive data phishing
    if (lower.includes('otp') || lower.includes('cvv') || lower.includes('atm pin') || lower.includes('anydesk') || lower.includes('teamviewer')) {
      score += 50;
      flagged.push({
        phrase: 'Remote Access / Banking Phishing Threat',
        explanation: 'Extreme danger: Scammers use screen-sharing apps or OTP requests to drain personal bank accounts.'
      });
    }

    const finalScore = Math.min(100, score);
    let level: ScamAnalysisResult['riskLevel'] = 'Low Risk / Standard';
    if (finalScore >= 70) level = 'Severe Fraud Detected';
    else if (finalScore >= 45) level = 'High Risk Scam';
    else if (finalScore >= 20) level = 'Moderate Concern';

    const recommendations: string[] = [];
    if (finalScore >= 45) {
      recommendations.push('Do NOT send any money or share GooglePay / bank credentials under any circumstance.');
      recommendations.push('Block the sender immediately on WhatsApp, Telegram, and mobile call logs.');
      recommendations.push('If you already paid, call National Cyber Crime Helpline at 1930 immediately to freeze the transaction.');
      recommendations.push('Ignore any threats of legal action or police notices—they are 100% forged and legally void.');
    } else {
      recommendations.push('Verify the company on official channels (LinkedIn, MCA portal, Google Maps).');
      recommendations.push('Confirm communication arrives from an authentic domain email (e.g. name@company.com).');
      recommendations.push('Insist on a video or phone interview with the hiring manager.');
    }

    setAnalysis({
      riskScore: finalScore,
      riskLevel: level,
      flaggedPhrases: flagged,
      recommendations
    });
  };

  const handleReset = () => {
    setInputText('');
    setAnalysis(null);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-900 text-xs font-bold border border-amber-200">
          <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />
          <span>Job Seeker Safety & Scam Prevention Hub</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Detect Online Employment Fraud & Protect Your Career
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
          Online job fraud is a multi-crore illicit industry targeting job seekers across Kerala and India. We provide practical tools, red-flag checklists, and cyber defense protocols so you never fall victim to employment scammers.
        </p>

        {/* Emergency Helpline Banner */}
        <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-xs sm:text-sm text-red-950 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <PhoneCall className="w-5 h-5 text-red-600 shrink-0" />
            <div>
              <strong>Defrauded by a fake job?</strong> Call the Indian Cyber Crime Helpline immediately at{' '}
              <a href="tel:1930" className="underline font-extrabold text-red-700">1930</a> or visit{' '}
              <a href="https://cybercrime.gov.in" target="_blank" rel="noreferrer" className="underline font-bold text-red-700">
                cybercrime.gov.in
              </a>.
            </div>
          </div>
          <span className="text-[11px] font-bold px-2.5 py-1 bg-red-600 text-white rounded-lg self-start sm:self-auto shrink-0">
            24/7 Toll Free
          </span>
        </div>
      </div>

      {/* Interactive Tool: Job Scam Offer Checker */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-100">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Interactive Tool</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Job Offer & Message Scam Analyzer
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Paste any suspicious WhatsApp message, email offer, Telegram text, or employment contract below to scan for fraud triggers.
          </p>
        </div>

        {/* Sample Offer Quick-Buttons */}
        <div className="space-y-2">
          <span className="text-xs font-bold text-slate-700 block">Or try a common real-world scam pattern:</span>
          <div className="flex flex-wrap gap-2">
            {sampleScamOffers.map((sample, idx) => (
              <button
                key={idx}
                onClick={() => setInputText(sample.text)}
                className="text-[11px] font-semibold px-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 transition-colors text-left"
              >
                {sample.label}
              </button>
            ))}
          </div>
        </div>

        {/* Text Input */}
        <div className="space-y-2">
          <textarea
            rows={5}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Paste suspicious job offer, email message, or SMS here (e.g., 'Selected for work from home job, deposit registration fee...')"
            className="w-full p-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-xs sm:text-sm leading-relaxed"
          />
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleAnalyze}
            disabled={!inputText.trim()}
            className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Scan Offer for Scam Triggers</span>
          </button>
          {analysis && (
            <button
              onClick={handleReset}
              className="px-4 py-3 rounded-xl border border-slate-200 text-slate-700 font-semibold text-xs hover:bg-slate-50 transition-colors flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Clear</span>
            </button>
          )}
        </div>

        {/* Analysis Results Display */}
        {analysis && (
          <div className={`p-6 rounded-3xl border space-y-5 transition-all ${
            analysis.riskScore >= 70 ? 'bg-red-50/70 border-red-300' :
            analysis.riskScore >= 45 ? 'bg-amber-50/70 border-amber-300' :
            'bg-emerald-50/70 border-emerald-300'
          }`}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-black/10">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-extrabold text-white text-lg shadow-sm ${
                  analysis.riskScore >= 70 ? 'bg-red-600' :
                  analysis.riskScore >= 45 ? 'bg-amber-600' :
                  'bg-emerald-600'
                }`}>
                  {analysis.riskScore}%
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Fraud Probability Score</div>
                  <h3 className={`text-xl font-extrabold ${
                    analysis.riskScore >= 70 ? 'text-red-950' :
                    analysis.riskScore >= 45 ? 'text-amber-950' :
                    'text-emerald-950'
                  }`}>
                    {analysis.riskLevel}
                  </h3>
                </div>
              </div>

              <div className="text-xs text-slate-600">
                {analysis.flaggedPhrases.length} High-Risk Trigger(s) Detected
              </div>
            </div>

            {/* Flagged Snippets */}
            {analysis.flaggedPhrases.length > 0 && (
              <div className="space-y-3">
                <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900">
                  Flagged Scam Patterns Found in Text:
                </h4>
                <div className="space-y-2">
                  {analysis.flaggedPhrases.map((f, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-sm space-y-1">
                      <div className="flex items-center gap-2 font-bold text-xs text-red-700">
                        <XCircle className="w-4 h-4 shrink-0 text-red-600" />
                        <span>{f.phrase}</span>
                      </div>
                      <p className="text-xs text-slate-600 pl-6">{f.explanation}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Recommendations */}
            <div className="space-y-2 pt-2">
              <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900">
                Recommended Candidate Defense Actions:
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-800">
                {analysis.recommendations.map((rec, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${
                      analysis.riskScore >= 45 ? 'text-red-600' : 'text-emerald-600'
                    }`} />
                    <span className="font-medium leading-relaxed">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* 5 Non-Negotiable Scam Red Flags */}
      <div className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-extrabold text-slate-900">The 5 Definite Red Flags of Online Job Fraud</h2>
          <p className="text-xs sm:text-sm text-slate-500">Memorize these five patterns to spot 99% of digital recruitment fraud immediately.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              flag: '1. Upfront "Registration" or "Laptop Deposit" Fees',
              danger: 'CRITICAL',
              desc: 'No genuine company charges candidates money to apply, register, or ship a laptop. If a recruiter asks for ₹500, ₹1,500, or ₹5,000, it is 100% a criminal scam.'
            },
            {
              flag: '2. "Earn ₹3,000/Day for Liking YouTube Videos / Rating Hotels"',
              danger: 'CRITICAL',
              desc: 'High pay for mindless tasks is the primary trap of task-based fraud rings. They give you ₹150 first to gain your trust, then demand ₹5,000 to "unlock VIP withdrawal".'
            },
            {
              flag: '3. Communication Exclusively via Telegram or Personal WhatsApp',
              danger: 'HIGH',
              desc: 'Scammers avoid authentic company email addresses (@company.com) because domain emails are legally traceable. Genuine HR teams will send official emails.'
            },
            {
              flag: '4. Instant Job Offer Without an Interview or Assessment',
              danger: 'HIGH',
              desc: 'Legitimate employers verify candidate skills, review portfolios, or conduct video calls. Offers sent within 5 minutes of contacting an unknown number are always bogus.'
            },
            {
              flag: '5. "Legal Notices" & Court Threats for Incomplete Data Entry',
              danger: 'CRITICAL',
              desc: 'Fraudulent data-entry operators send forged legal notices threatening police arrest under IPC 420. These contracts are completely illegal, fraudulent, and unenforceable in court.'
            },
            {
              flag: '6. Asking for Screen Sharing (AnyDesk / TeamViewer) or Bank OTP',
              danger: 'FATAL',
              desc: 'Never download screen-sharing tools during an interview. Employers only need your account number and IFSC for salary credit; never ATM PINs or OTPs.'
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-red-200 p-5 shadow-sm space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-extrabold text-red-950 text-sm">{item.flag}</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-red-100 text-red-800">
                  {item.danger}
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Candidate Defense Protocol */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
        <h2 className="text-xl font-bold text-slate-900">How to Verify Any Recruiter in 3 Minutes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white font-extrabold flex items-center justify-center">1</div>
            <strong className="text-slate-900 block font-bold">Inspect Ministry of Corporate Affairs (MCA):</strong>
            <p className="text-slate-600 leading-relaxed">
              Check if the company is an active registered Private Limited or LLP entity on mca.gov.in with active Directors.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white font-extrabold flex items-center justify-center">2</div>
            <strong className="text-slate-900 block font-bold">Verify Employee Footprint on LinkedIn:</strong>
            <p className="text-slate-600 leading-relaxed">
              Search the company name on LinkedIn. A genuine firm has real employees with verified histories, not blank anonymous accounts.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white font-extrabold flex items-center justify-center">3</div>
            <strong className="text-slate-900 block font-bold">Examine Email Header Domains:</strong>
            <p className="text-slate-600 leading-relaxed">
              Beware of typosquatting domains (e.g. @infosys-careers.co instead of @infosys.com). Genuine HR communicates from official company domains.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
