import React from 'react';
import Link from 'next/link';
import {
  AlertTriangle,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowRight
} from 'lucide-react';

export default function AntiScamPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Header */}
      <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-900 text-xs font-bold border border-amber-200">
          <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
          <span>Job Seeker Safety Hub</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Online Job Anti-Scam Protection Guide
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Millions of job seekers in Kerala and across India lose their savings to online employment fraud every year. Understand how genuine recruiters operate and learn to detect scams in under 30 seconds.
        </p>
      </div>

      {/* Red Flags Checklist */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-slate-900">5 Immediate Red Flags of a Job Scam</h2>

        <div className="grid grid-cols-1 gap-4">
          {[
            {
              title: 'Red Flag 1: Asking for Registration, Training, or "Kit" Fees',
              desc: 'No genuine company in the world will ask a candidate to transfer ₹500, ₹1,500, or ₹5,000 for "document verification", "training portal login", or "laptop courier security deposit". If they ask for money, it is 100% a fraud.'
            },
            {
              title: 'Red Flag 2: "Earn ₹3,000 Daily by Typing Captchas or Clicking YouTube Likes"',
              desc: 'High payouts for brainless, repetitive tasks do not exist. Scammers use this bait to trick people into doing fake work, then demand a "withdrawal unlock fee" when you try to cash out.'
            },
            {
              title: 'Red Flag 3: Communication Strictly on Telegram or WhatsApp (No Official Email)',
              desc: 'Scammers avoid using corporate domain emails (@companyname.com). If a recruiter reaches out solely from a personal Gmail or asks you to join a private Telegram group, proceed with extreme caution.'
            },
            {
              title: 'Red Flag 4: Offering a Job Without an Interview or Skill Assessment',
              desc: 'Real businesses evaluate candidates through portfolio reviews, telephone interviews, or technical tests. Instant job offers sent via WhatsApp without any interview are always fake.'
            },
            {
              title: 'Red Flag 5: Legal Threats or Harassment if You Stop Doing Tasks',
              desc: 'Fake "data entry" scam rings often send fake legal notices claiming they will sue you under IPC Section 420 for breaching a contract. These notices are forged by criminals and hold zero legal validity. Block and report them.'
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-red-200 p-6 shadow-sm space-y-2">
              <div className="flex items-center gap-2 font-bold text-red-950 text-base">
                <XCircle className="w-5 h-5 text-red-600 shrink-0" />
                <span>{item.title}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-7">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Safety Protocol */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
        <h2 className="text-xl font-bold text-slate-900">The 3-Step Candidate Defense Protocol</h2>
        <div className="space-y-3 text-xs sm:text-sm text-slate-700">
          <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
            <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shrink-0">1</span>
            <div>
              <strong className="text-slate-900 block">Verify the Company on Google Maps & MCA Portal:</strong>
              Check whether the employer has an active physical address, an authentic website, and verifiable employees on LinkedIn.
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
            <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shrink-0">2</span>
            <div>
              <strong className="text-slate-900 block">Never Share Bank OTPs or Sign Blank Contracts:</strong>
              Employers only need your bank account number and IFSC for salary direct deposit; they never need your debit card CVV, ATM PIN, or OTP.
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
            <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shrink-0">3</span>
            <div>
              <strong className="text-slate-900 block">File Cyber Crime Complaints Immediately:</strong>
              If you have been defrauded, call the National Cyber Crime Helpline at <strong>1930</strong> or register an online complaint at <strong>cybercrime.gov.in</strong>.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
