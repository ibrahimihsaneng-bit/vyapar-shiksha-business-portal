import React from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  HeartHandshake,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Scale,
  FileCheck2,
  Sparkles
} from 'lucide-react';

export default function EthicalPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Header */}
      <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-100">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Core Operational Framework & Universal Moral Charter</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Ethical & Halal Employment Policy
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Career Launchpad was founded on the fundamental principle that earning a livelihood must be honest, transparent, and beneficial to society. We strictly audit every career pathway, course curriculum, and job opening against universal ethical and Halal employment standards.
        </p>
      </div>

      {/* Malayalam Overview Box */}
      <div className="p-6 rounded-3xl bg-amber-50/80 border border-amber-200/80 space-y-2 text-xs sm:text-sm">
        <div className="font-bold text-amber-950 flex items-center gap-2 text-sm sm:text-base">
          <span>മലയാളം സംഗ്രഹം (Malayalam Summary)</span>
        </div>
        <p className="text-amber-900 leading-relaxed">
          പലിശ, ചൂതാട്ടം, വാതുവെപ്പ് ആപ്പുകൾ, വ്യാജ റിവ്യൂകൾ നിർമ്മിക്കൽ തുടങ്ങിയ നിയമവിരുദ്ധവും ധാർമ്മിക വിരുദ്ധവുമായ ജോലികൾ ഈ പ്ലാറ്റ്‌ഫോമിൽ കർശനമായി നിരോധിച്ചിരിക്കുന്നു. സമ്പൂർണ്ണമായും ഹലാലായതും സത്യസന്ധവുമായ തൊഴിൽ അവസരങ്ങളും പഠനവഴികളും മാത്രമേ ഇവിടെ നൽകുകയുള്ളൂ.
        </p>
      </div>

      {/* 6 Non-Negotiable Principles */}
      <div className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-xl font-bold text-slate-900">The 6 Pillars of Our Ethical Guarantee</h2>
          <p className="text-xs text-slate-500">Every lesson, project, and vacancy is vetted against these fundamental pillars.</p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {[
            {
              title: '1. Complete Prohibition of Usury (Riba) & Predatory Lending',
              desc: 'We strictly exclude training or job listings that involve calculating compounding interest for predatory microfinance apps or debt harassment collection. Accounting curricula focus 100% on genuine commercial trade, logistics, healthcare, and software operations.'
            },
            {
              title: '2. Absolute Ban on Gambling, Betting Apps & Casino Mechanics',
              desc: 'Any software development, graphic design, or content marketing associated with online rummy, fantasy cricket betting, crypto-casinos, or loot-box monetization is strictly barred from our ecosystem.'
            },
            {
              title: '3. Zero Deceptive Content or Astroturfing',
              desc: 'We never promote click-farming, posting fake reviews on Google/Amazon, or operating deceptive social media bots. Our marketing and social media courses teach authentic value creation and honest storytelling.'
            },
            {
              title: '4. Rejection of Multi-Level Marketing (MLM) & Pyramid Schemes',
              desc: 'No "pay to join and recruit three friends" networks are tolerated. Legitimate careers involve delivering a tangible professional skill or product in exchange for transparent monetary compensation.'
            },
            {
              title: '5. Zero Upfront Fees for Job Seekers (Anti-Scam Guarantee)',
              desc: 'Legitimate employers pay workers for their productive time; workers never pay employers for "registration keys", "security deposits", or "courier charges".'
            },
            {
              title: '6. Dignity of Labor & Fair Compensation',
              desc: 'We only feature vacancies that respect employee work hours, offer transparent job descriptions, and provide fair compensation above living wage benchmarks.'
            }
          ].map((pillar, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-1.5">
              <h3 className="font-bold text-sm text-slate-900">{pillar.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Permitted vs Prohibited Comparison Grid */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="space-y-1">
          <h2 className="text-xl font-bold text-slate-900">Permitted vs. Prohibited Employment Categories</h2>
          <p className="text-xs text-slate-500">Clear transparency on what we approve vs. reject without exception.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm">
          {/* Permitted */}
          <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-3">
            <div className="flex items-center gap-2 font-bold text-emerald-950 text-sm sm:text-base">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Ethically Approved Domains</span>
            </div>
            <ul className="space-y-2 text-emerald-950 text-xs">
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-600 font-bold">&bull;</span>
                <span><strong>Cloud Bookkeeping & GST Invoicing:</strong> Trade, retail, logistics, manufacturing, and IT services.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-600 font-bold">&bull;</span>
                <span><strong>E-Commerce Operations:</strong> Shopify, Amazon, and WooCommerce catalogs for lawful consumer products.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-600 font-bold">&bull;</span>
                <span><strong>Executive Virtual Assistance:</strong> Calendar scheduling, email organization, travel planning, and meeting minutes.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-600 font-bold">&bull;</span>
                <span><strong>Customer Support Helpdesk:</strong> Healthcare, ed-tech, logistics, and SaaS software assistance.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-600 font-bold">&bull;</span>
                <span><strong>Web Development & QA Testing:</strong> Building accessible, fast web applications and verifying software quality.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-600 font-bold">&bull;</span>
                <span><strong>Visual Design & Canva:</strong> Educational infographics, social media carousels, and corporate flyers.</span>
              </li>
            </ul>
          </div>

          {/* Prohibited */}
          <div className="p-5 rounded-2xl bg-red-50/70 border border-red-200 space-y-3">
            <div className="flex items-center gap-2 font-bold text-red-950 text-sm sm:text-base">
              <XCircle className="w-5 h-5 text-red-600" />
              <span>Strictly Prohibited Domains</span>
            </div>
            <ul className="space-y-2 text-red-950 text-xs">
              <li className="flex items-start gap-1.5">
                <span className="text-red-600 font-bold">&bull;</span>
                <span><strong>Gambling & Betting Operations:</strong> Real-money rummy, sports betting odds, casino game algorithms.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-red-600 font-bold">&bull;</span>
                <span><strong>Predatory Loan Services:</strong> High-interest payday apps, debt collection harassment, usurious Riba instruments.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-red-600 font-bold">&bull;</span>
                <span><strong>Astroturfing & Fake Engagement:</strong> Review fabrication, click farms, bot engagement manipulation.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-red-600 font-bold">&bull;</span>
                <span><strong>Pyramid & MLM Schemes:</strong> Recruitment-dependent commissions without real underlying commerce.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-red-600 font-bold">&bull;</span>
                <span><strong>Exploitative Wage Schemes:</strong> Unpaid training bonds, registration fee traps, salary withholding.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Recruiter Declaration */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
        <h2 className="text-xl font-bold text-slate-900">Recruiter & Employer Ethical Declaration</h2>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Employers posting vacancies on Career Launchpad must sign a binding declaration confirming that their positions do not collect candidate fees, do not promote usurious lending or gambling, and honor all statutory labor standards.
        </p>
        <div className="pt-2">
          <Link
            href="/jobs"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-colors"
          >
            <span>Explore Audited Openings</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
