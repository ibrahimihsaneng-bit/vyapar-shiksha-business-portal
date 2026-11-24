import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  Clock,
  TrendingUp,
  Laptop,
  CheckCircle2,
  ShieldCheck,
  Briefcase,
  PlayCircle,
  FileCheck,
  AlertCircle,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { allCareers, getCareerBySlug } from '@/data/careers';
import { getCourseBySlug } from '@/data/courses';
import { verifiedJobListings } from '@/data/jobs';
import { getCareerRoadmap } from '@/data/career-roadmaps';
import { getCareerIntelligenceBySlug } from '@/data/career-intelligence';

export function generateStaticParams() {
  return allCareers.map((c) => ({ slug: c.slug }));
}

export default async function CareerDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const career = getCareerBySlug(slug);

  if (!career) {
    notFound();
  }

  const course = getCourseBySlug(slug);
  const matchingJobs = verifiedJobListings.filter(j => j.careerSlug === slug);
  const roadmap = getCareerRoadmap(slug);
  const intel = getCareerIntelligenceBySlug(slug);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Back button */}
      <div>
        <Link
          href="/careers"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-emerald-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Careers</span>
        </Link>
      </div>

      {/* Hero Header */}
      <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm space-y-6">
        <div className="relative h-56 sm:h-72 w-full bg-slate-100 border-b border-slate-100 overflow-hidden">
          <Image
            src={`/images/thumbnails/thumb-${career.slug}.svg`}
            alt={career.title}
            width={800}
            height={320}
            className="w-full h-full object-cover"
            priority
            unoptimized
          />
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-900/80 text-white backdrop-blur-xs uppercase tracking-wider">
              {career.durationTrack.replace('-', ' ')} Track
            </span>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/90 text-slate-800 shadow-xs">
              {career.category}
            </span>
          </div>
          <div className="absolute top-4 right-4">
            <span className="text-xs font-bold text-white bg-emerald-600 px-3 py-1 rounded-full shadow-xs">
              Remote: {career.remotePotential}
            </span>
          </div>
        </div>

        <div className="p-8 sm:p-10 pt-2 space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {career.title}
          </h1>
          <p className="text-sm sm:text-base font-semibold text-emerald-800">
            {career.titleMl}
          </p>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed pt-2">
            {career.overview}
          </p>
        </div>

        {/* Salary & Quick Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/70 space-y-1">
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <TrendingUp className="w-4 h-4 text-emerald-600" />
              <span>Entry-Level Monthly Salary</span>
            </div>
            <div className="text-lg font-extrabold text-slate-900">
              ₹{career.salaryRangeInr.entryMin.toLocaleString()} - ₹{career.salaryRangeInr.entryMax.toLocaleString()}
            </div>
            <div className="text-[10px] text-slate-400">0 - 1 year experience (Verified)</div>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/70 space-y-1">
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <Clock className="w-4 h-4 text-emerald-600" />
              <span>Estimated Learning Time</span>
            </div>
            <div className="text-lg font-extrabold text-slate-900">
              {career.durationTrack.replace('-', ' ')}
            </div>
            <div className="text-[10px] text-slate-400">At 2 to 3 hours of daily practice</div>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/70 space-y-1">
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Ethical Compliance</span>
            </div>
            <div className="text-lg font-extrabold text-emerald-700">
              {career.ethicalCompliance.status}
            </div>
            <div className="text-[10px] text-slate-400">Halal & Non-Deceptive verified</div>
          </div>
        </div>

        {/* Action Callout if 30-Day Course is ready */}
        {course && (
          <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-md">
            <div className="space-y-0.5">
              <div className="font-bold text-base flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-emerald-200" />
                <span>Full 30-Day Course Available for this Career</span>
              </div>
              <p className="text-xs text-emerald-100">
                20 daily lessons, downloadable datasets, weekly quizzes, and 3 portfolio projects.
              </p>
            </div>
            <Link
              href={`/courses/${slug}`}
              className="px-5 py-2.5 rounded-xl bg-white text-emerald-900 text-xs font-bold hover:bg-emerald-50 transition-colors shadow-sm shrink-0"
            >
              Start Free Course Now &rarr;
            </Link>
          </div>
        )}
        </div>
      </div>

      {/* Malayalam Learning Guidance Banner */}
      <div className="p-6 rounded-2xl bg-amber-50/80 border border-amber-200/80 space-y-2 text-xs sm:text-sm">
        <div className="font-bold text-amber-900 flex items-center gap-2 text-sm sm:text-base">
          <span>മലയാളം ഗൈഡൻസ് കുറിപ്പ് (Malayalam Career Note)</span>
        </div>
        <p className="text-amber-800 leading-relaxed">
          ഈ കരിയർ ആരംഭിക്കുന്നതിന് മുൻപ് യാതൊരുവിധ മുൻപരിചയവും ആവശ്യമില്ല. സാധാരണ കമ്പ്യൂട്ടറും അടിസ്ഥാന ഇന്റർനെറ്റ് അറിവുമുള്ള ആർക്കും ഈ കോഴ്‌സ് പരിശീലിക്കാവുന്നതാണ്. ആവശ്യമായ എല്ലാ ടൂളുകളും സൗജന്യമായി ഉപയോഗിക്കാവുന്നതാണ്.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column (Details) */}
        <div className="lg:col-span-2 space-y-8">
          {/* Zero-Knowledge Orientation */}
          {roadmap?.zeroKnowledgeOrientation && (
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 space-y-5 shadow-sm">
              <div className="flex items-center gap-2 text-teal-800 font-bold text-base">
                <Sparkles className="w-5 h-5 text-teal-600" />
                <span>Zero-Knowledge Beginner Orientation</span>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="p-4 rounded-2xl bg-teal-50/60 border border-teal-100 space-y-1">
                  <span className="font-bold text-teal-950 block">What This Profession Actually Means:</span>
                  <p className="text-slate-700 leading-relaxed">{roadmap.zeroKnowledgeOrientation.meaning}</p>
                  <p className="text-teal-900 font-medium text-xs pt-1">{roadmap.zeroKnowledgeOrientation.meaningMl}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                    <span className="font-bold text-slate-900 block text-xs">Why Businesses Hire This Role:</span>
                    <p className="text-slate-600 text-xs leading-normal">{roadmap.zeroKnowledgeOrientation.whyBusinessesHire}</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                    <span className="font-bold text-slate-900 block text-xs">First Software Access Step:</span>
                    <p className="text-slate-600 text-xs leading-normal">{roadmap.zeroKnowledgeOrientation.firstSoftwareStep}</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-100 space-y-1">
                  <span className="font-bold text-emerald-950 block text-xs">Your First Beginner Milestone Task:</span>
                  <p className="text-slate-700 text-xs leading-normal">{roadmap.zeroKnowledgeOrientation.firstPracticalTask}</p>
                </div>

                <div className="space-y-2 pt-1">
                  <span className="font-bold text-slate-800 block text-xs">Common Beginner Mistakes to Avoid:</span>
                  <ul className="space-y-1 text-xs text-slate-600">
                    {roadmap.zeroKnowledgeOrientation.commonBeginnerMistakes.map((m, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-amber-600 font-bold">&bull;</span>
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 rounded-xl bg-slate-100 text-slate-700 text-xs flex items-center gap-2">
                  <span className="font-bold text-slate-900 shrink-0">Workplace Communication Rule:</span>
                  <span>{roadmap.zeroKnowledgeOrientation.workplaceCommunicationTip}</span>
                </div>
              </div>
            </div>
          )}

          {/* Structured Learning Roadmap (#roadmap) */}
          <div id="roadmap" className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200/60">
                  Preparation Roadmap
                </span>
                <h2 className="text-xl font-black text-slate-900 tracking-tight">
                  Step-by-Step Learning Milestones
                </h2>
              </div>
              <span className="text-xs font-semibold text-slate-500">
                {career.durationTrack.replace('-', ' ')}
              </span>
            </div>

            {roadmap?.phases ? (
              <div className="space-y-4">
                {roadmap.phases.map((phase) => (
                  <div
                    key={phase.phaseNumber}
                    className="p-5 rounded-2xl border border-slate-200/90 bg-slate-50/40 space-y-3"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-teal-700 text-white font-bold text-xs flex items-center justify-center">
                          {phase.phaseNumber}
                        </div>
                        <div>
                          <h4 className="font-bold text-sm text-slate-900">{phase.title}</h4>
                          <span className="text-[11px] text-teal-800 font-medium">{phase.titleMl}</span>
                        </div>
                      </div>
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-slate-700">
                        {phase.durationLabel}
                      </span>
                    </div>

                    <div className="space-y-1 pt-1">
                      <span className="text-xs font-bold text-slate-700">Key Focus Topics:</span>
                      <div className="flex flex-wrap gap-1.5 pt-0.5">
                        {phase.keyTopics.map((topic, i) => (
                          <span key={i} className="text-[11px] bg-white border border-slate-200/80 text-slate-700 px-2 py-0.5 rounded-md">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-white border border-teal-100 flex items-start gap-2 text-xs">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-teal-950">Milestone Deliverable: </span>
                        <span className="text-slate-700">{phase.handsOnDeliverable}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-xs">
                      <div className="flex items-center gap-1.5 text-slate-500 text-[11px]">
                        <span>Tools:</span>
                        <strong className="text-slate-700">{phase.recommendedTools.join(', ')}</strong>
                      </div>
                      <a
                        href={phase.freeLearningLink.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-teal-700 hover:text-teal-900 hover:underline"
                      >
                        <span>{phase.freeLearningLink.title}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-3">
                {career.progressionRoadmap.map((step, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-xs sm:text-sm text-slate-900">{step.role}</div>
                      <div className="text-[11px] text-slate-500">{step.timeline}</div>
                    </div>
                    <div className="font-bold text-xs text-teal-800">{step.expectedSalary}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Day in the Life */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">Typical Daily Responsibilities</h2>
            <div className="space-y-3">
              {career.dayInTheLifeDuties.map((duty, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{duty}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Prerequisites */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">Required Software & Tools</h2>
            <p className="text-xs text-slate-500">
              All tools listed have free tiers or open-source software so you can practice without purchasing subscriptions.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
              {career.toolsRequired.map((tool) => (
                <div
                  key={tool}
                  className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-800 text-center"
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>

          {/* Portfolio Deliverables */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">What to Build for Your Portfolio</h2>
            <p className="text-xs text-slate-500">
              Employers hire based on proven evidence. Here is what your portfolio must demonstrate to land your first role:
            </p>
            <div className="space-y-3 pt-1">
              {career.portfolioDeliverables.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-100 text-xs sm:text-sm text-emerald-950 flex items-start gap-3">
                  <FileCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <span className="leading-relaxed font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Ethical Verification */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3 shadow-sm">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-base">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <span>Ethical Review & Halal Compliance</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {career.ethicalCompliance.notes}
            </p>
          </div>
        </div>

        {/* Right Sidebar (Hardware, Jobs & Tools) */}
        <div className="space-y-6">
          {/* Priority Intelligence Card */}
          {intel && (
            <div className="bg-white rounded-3xl border border-teal-200/90 p-6 space-y-4 shadow-sm text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <span className="font-bold text-slate-900 text-sm">Career Priority Intelligence</span>
                <span className="px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-900 font-black text-xs">
                  Rank #{intel.rank}
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Zero-Knowledge Score:</span>
                  <span className="font-extrabold text-emerald-700">{intel.accessibilityScore} / 10</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Hiring Demand:</span>
                  <span className="font-bold text-slate-800">{intel.entryDemandRating}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Software Monthly Cost:</span>
                  <span className="font-bold text-emerald-700">{intel.softwareCostMonthly}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">English Level:</span>
                  <span className="font-bold text-slate-800">{intel.englishRequirement}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Min Education:</span>
                  <span className="font-bold text-slate-800 text-right">{intel.minEducationRequirement}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Scam Risk:</span>
                  <span className="font-bold text-emerald-800">{intel.scamRiskScore}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <Link
                  href="/careers/priority-rankings"
                  className="block text-center py-2 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-800 font-bold text-[11px] transition-colors"
                >
                  View All Priority Rankings &rarr;
                </Link>
              </div>
            </div>
          )}

          {/* Hardware Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3 shadow-sm text-xs">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
              <Laptop className="w-4 h-4 text-emerald-600" />
              <span>Computer Requirements</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              {career.hardwareRequirements}
            </p>
          </div>

          {/* Simulator Link */}
          <div className="p-5 rounded-2xl bg-slate-900 text-white space-y-3 shadow-md">
            <div className="font-bold text-sm text-emerald-400">
              Workplace Simulator
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Test your practical problem solving with realistic office scenarios before sending out resumes.
            </p>
            <Link
              href="/simulator"
              className="inline-block w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold text-center transition-colors"
            >
              Try Simulation Tasks &rarr;
            </Link>
          </div>

          {/* Verified Jobs Matching This Career */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 font-bold text-slate-900 text-sm">
                <Briefcase className="w-4 h-4 text-emerald-600" />
                <span>Verified Jobs ({matchingJobs.length})</span>
              </div>
              <Link href="/jobs" className="text-[11px] font-semibold text-emerald-700 hover:underline">
                View all
              </Link>
            </div>

            {matchingJobs.length > 0 ? (
              <div className="space-y-3">
                {matchingJobs.map((job) => (
                  <div key={job.id} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                    <div className="font-bold text-slate-900">{job.title}</div>
                    <div className="text-slate-500">{job.company} &bull; {job.location}</div>
                    <div className="font-semibold text-emerald-700">{job.salaryText}</div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-slate-500">
                Browse our curated job board for open entry-level positions in this category.
              </p>
            )}

            <Link
              href="/jobs"
              className="block text-center py-2 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Browse Job Openings
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
