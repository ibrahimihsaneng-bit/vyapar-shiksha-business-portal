import React from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  HeartHandshake,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  ArrowRight
} from 'lucide-react';

export default function EthicalPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Header */}
      <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-100">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Core Operational Framework</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Ethical & Halal Employment Policy
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Career Launchpad was founded on the fundamental principle that earning a livelihood must be honest, transparent, and beneficial to society. We strictly audit every career pathway, course curriculum, and job opening against universal ethical and Halal employment standards.
        </p>
      </div>

      {/* Malayalam Overview */}
      <div className="p-6 rounded-2xl bg-amber-50/80 border border-amber-200/80 space-y-2 text-xs sm:text-sm">
        <div className="font-bold text-amber-900 flex items-center gap-2 text-sm sm:text-base">
          <span>മലയാളം സംഗ്രഹം (Malayalam Summary)</span>
        </div>
        <p className="text-amber-800 leading-relaxed">
          പലിശ, ചൂതാട്ടം, വാതുവെപ്പ് ആപ്പുകൾ, വ്യാജ റിവ്യൂകൾ നിർമ്മിക്കൽ തുടങ്ങിയ നിയമവിരുദ്ധവും ധാർമ്മിക വിരുദ്ധവുമായ ജോലികൾ ഈ പ്ലാറ്റ്‌ഫോമിൽ കർശനമായി നിരോധിച്ചിരിക്കുന്നു. സമ്പൂർണ്ണമായും ഹലാലായതും സത്യസന്ധവുമായ തൊഴിൽ അവസരങ്ങളും പഠനവഴികളും മാത്രമേ ഇവിടെ നൽകുകയുള്ളൂ.
        </p>
      </div>

      {/* 6 Non-Negotiable Principles */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-slate-900">The 6 Pillars of Our Ethical Guarantee</h2>

        <div className="grid grid-cols-1 gap-6">
          {[
            {
              title: '1. Complete Prohibition of Usury (Riba) & Predatory Lending',
              desc: 'We do not teach or list roles within microfinance loan apps that charge compounding usurious interest or harass borrowers. Accounting curricula focus exclusively on transparent commercial trade, logistics, healthcare, and software services.'
            },
            {
              title: '2. Absolute Ban on Gambling, Betting Apps & Casino Mechanics',
              desc: 'Any job, game design, or marketing campaign associated with online rummy, sports prediction betting, crypto-casinos, or loot-box mechanics is strictly forbidden from our database.'
            },
            {
              title: '3. Zero Deceptive Content or Astroturfing',
              desc: 'We strictly reject tasks that require creating fake Google reviews, posting deceptive Amazon seller testimonials, or operating bot farms. All marketing and social media training teaches authentic, value-driven communication.'
            },
            {
              title: '4. Rejection of Multi-Level Marketing (MLM) & Pyramid Schemes',
              desc: 'No "recruit three friends to earn commissions" models are ever tolerated. True employment involves delivering a tangible product or professional service in exchange for fair compensation.'
            },
            {
              title: '5. Zero Upfront Fees for Job Seekers (Anti-Scam)',
              desc: 'Legitimate employers pay employees for their time; employees never pay employers for "security deposits", "registration fees", or "software keys".'
            },
            {
              title: '6. Fair Compensation & Dignity of Labor',
              desc: 'We only list vacancies meeting realistic minimum wage standards with transparent job descriptions and defined responsibilities.'
            }
          ].map((pillar, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-2">
              <h3 className="font-bold text-base text-slate-900">{pillar.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Comparison Grid */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
        <h2 className="text-xl font-bold text-slate-900">Permitted vs. Prohibited Employment Categories</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm">
          {/* Permitted */}
          <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-3">
            <div className="flex items-center gap-2 font-bold text-emerald-900 text-base">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Ethically Approved Pathways</span>
            </div>
            <ul className="space-y-2 text-emerald-950">
              <li>&bull; GST Invoicing & Cloud Accounting (Zoho Books, Tally)</li>
              <li>&bull; E-commerce Operations (Shopify, WooCommerce)</li>
              <li>&bull; Virtual Assistance & Executive Administration</li>
              <li>&bull; Customer Helpdesk & Support (Healthcare, Education)</li>
              <li>&bull; Web Development & Software Testing (QA)</li>
              <li>&bull; Graphic Design & Social Media Content (Canva)</li>
            </ul>
          </div>

          {/* Prohibited */}
          <div className="p-5 rounded-2xl bg-red-50/70 border border-red-200 space-y-3">
            <div className="flex items-center gap-2 font-bold text-red-900 text-base">
              <XCircle className="w-5 h-5 text-red-600" />
              <span>Strictly Prohibited on Our Platform</span>
            </div>
            <ul className="space-y-2 text-red-950">
              <li>&bull; Loan Recovery Harassment / Predatory Lending</li>
              <li>&bull; Sports Betting & Rummy App Customer Acquisition</li>
              <li>&bull; Writing Fake Reviews / Paid Google Reviews</li>
              <li>&bull; Pyramid Schemes / Network Marketing / MLM</li>
              <li>&bull; "Captcha Entry" / "Form Filling" Upfront Fee Scams</li>
              <li>&bull; Crypto Pump & Dump Promotional Schemes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
