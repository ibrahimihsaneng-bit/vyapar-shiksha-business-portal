'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  GraduationCap,
  BookOpen,
  Briefcase,
  FileText,
  Laptop,
  CheckCircle2,
  TrendingUp,
  Award,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { allCourses } from '@/data/courses';
import { allCareers } from '@/data/careers';
import {
  getSavedCareers,
  getApplications,
  getCourseProgress,
  CourseProgressRecord
} from '@/lib/storage';

export default function DashboardPage() {
  const [savedCareerSlugs, setSavedCareerSlugs] = useState<string[]>([]);
  const [applicationsCount, setApplicationsCount] = useState<number>(0);
  const [courseStats, setCourseStats] = useState<Array<{
    course: typeof allCourses[0];
    completedCount: number;
    percent: number;
  }>>([]);

  useEffect(() => {
    setSavedCareerSlugs(getSavedCareers());
    setApplicationsCount(getApplications().length);

    const stats = allCourses.map((c) => {
      const p = getCourseProgress(c.id);
      const totalLessons = c.modules.flatMap(m => m.lessons).length || 20;
      const count = p.completedLessonIds.length;
      return {
        course: c,
        completedCount: count,
        percent: Math.min(100, Math.round((count / totalLessons) * 100))
      };
    });
    setCourseStats(stats);
  }, []);

  const savedCareers = allCareers.filter(c => savedCareerSlugs.includes(c.slug));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Top Banner */}
      <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-100">
            <GraduationCap className="w-3.5 h-3.5 text-emerald-600" />
            <span>Learner Central</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Welcome to Your Career Dashboard
          </h1>
          <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
            Monitor your daily lesson progress, test your practical readiness in the simulator, and manage your job applications.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/simulator"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
          >
            <Laptop className="w-4 h-4 text-emerald-600" />
            <span>Simulator</span>
          </Link>
          <Link
            href="/resume-builder"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-md"
          >
            <FileText className="w-4 h-4" />
            <span>Edit ATS Resume</span>
          </Link>
        </div>
      </div>

      {/* Stats Counter Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-1">
          <div className="text-xs font-semibold text-slate-500">Active Applications</div>
          <div className="text-3xl font-extrabold text-slate-900">{applicationsCount}</div>
          <Link href="/applications" className="text-xs font-semibold text-emerald-700 hover:underline inline-block pt-1">
            View application pipeline &rarr;
          </Link>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-1">
          <div className="text-xs font-semibold text-slate-500">Available 30-Day Programs</div>
          <div className="text-3xl font-extrabold text-slate-900">{allCourses.length}</div>
          <div className="text-xs text-slate-400 pt-1">Zero prior experience needed</div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-1">
          <div className="text-xs font-semibold text-slate-500">Saved Careers</div>
          <div className="text-3xl font-extrabold text-slate-900">{savedCareers.length}</div>
          <Link href="/careers" className="text-xs font-semibold text-emerald-700 hover:underline inline-block pt-1">
            Browse all 40 careers &rarr;
          </Link>
        </div>
      </div>

      {/* 30-Day Courses List */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <h2 className="text-xl font-bold text-slate-900">Your 30-Day Intensive Courses</h2>
            <p className="text-xs text-slate-500">Continue where you left off or start a new skill module.</p>
          </div>
          <span className="text-xs font-semibold bg-emerald-50 text-emerald-800 px-3 py-1 rounded-full">
            All 10 Included Free
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {courseStats.map(({ course, completedCount, percent }) => (
            <div
              key={course.id}
              className="p-5 rounded-2xl border border-slate-200/80 bg-slate-50/60 hover:bg-emerald-50/40 transition-all space-y-3"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-bold text-sm text-slate-900 leading-snug">
                    {course.title.replace(' (30 Days)', '')}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">{course.titleMl}</p>
                </div>
                <span className="text-xs font-bold text-emerald-700 bg-white px-2 py-0.5 rounded border border-slate-200 shrink-0">
                  {percent}%
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full h-1.5 rounded-full bg-slate-200 overflow-hidden">
                <div
                  className="h-full bg-emerald-500 transition-all"
                  style={{ width: `${percent}%` }}
                />
              </div>

              <div className="flex items-center justify-between pt-1 text-xs">
                <span className="text-slate-500">{completedCount} of 20 Lessons Done</span>
                <Link
                  href={`/courses/${course.careerSlug}`}
                  className="font-bold text-emerald-700 hover:text-emerald-900 inline-flex items-center gap-1"
                >
                  <span>{percent > 0 ? 'Resume Course' : 'Start Course'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
