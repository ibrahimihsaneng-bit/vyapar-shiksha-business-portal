'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  BookOpen,
  CheckCircle2,
  PlayCircle,
  FileText,
  Download,
  Award,
  ArrowRight,
  ArrowLeft,
  Laptop,
  Check,
  ExternalLink,
  Sparkles,
  Layers,
  FileCheck,
  Briefcase,
  Bookmark,
  BookmarkCheck,
  Clock,
  ChevronDown,
  ChevronUp,
  Volume2,
  Maximize,
  RotateCcw,
  Play,
  Pause,
  Save,
  Globe
} from 'lucide-react';
import confetti from 'canvas-confetti';
import {
  getCourseProgress,
  markLessonComplete,
  saveQuizScore,
  CourseProgressRecord
} from '@/lib/storage';
import { Course, Career } from '@/types';

export default function CourseLearningClient({
  course,
  career
}: {
  course: Course;
  career?: Career;
}) {
  const allLessons = course.modules.flatMap(m => m.lessons);

  // States
  const [selectedLessonId, setSelectedLessonId] = useState<string>(allLessons[0]?.id || '');
  const [mainTab, setMainTab] = useState<'lessons' | 'quiz' | 'projects' | 'datasets' | 'interview'>('lessons');
  const [lessonSubTab, setLessonSubTab] = useState<'overview' | 'malayalam' | 'notes' | 'downloads' | 'exercise'>('overview');
  
  // Media player state
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [activeTimestamp, setActiveTimestamp] = useState<string>('0:00');
  
  // Notes & Bookmarks persisted to localStorage
  const [personalNotes, setPersonalNotes] = useState<Record<string, string>>({});
  const [bookmarkedLessons, setBookmarkedLessons] = useState<string[]>([]);
  const [noteSavedMessage, setNoteSavedMessage] = useState<boolean>(false);
  
  // Module accordion collapse state (all open by default)
  const [expandedWeeks, setExpandedWeeks] = useState<Record<number, boolean>>({
    1: true, 2: true, 3: true, 4: true, 5: true, 6: true
  });

  // Quiz state
  const [selectedQuizWeek, setSelectedQuizWeek] = useState<number>(1);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);
  const [quizScore, setQuizScore] = useState<number>(0);

  const [progress, setProgress] = useState<CourseProgressRecord>({
    completedLessonIds: [],
    quizScores: {},
    enrolledAt: '',
    lastActiveAt: ''
  });

  // Load progress, notes, and bookmarks from storage
  useEffect(() => {
    if (course) {
      const savedProgress = getCourseProgress(course.id);
      setProgress(savedProgress);

      try {
        const savedNotes = localStorage.getItem(`course_notes_${course.id}`);
        if (savedNotes) setPersonalNotes(JSON.parse(savedNotes));

        const savedBookmarks = localStorage.getItem(`course_bookmarks_${course.id}`);
        if (savedBookmarks) setBookmarkedLessons(JSON.parse(savedBookmarks));

        // Auto-resume last incomplete lesson if available
        const firstIncomplete = allLessons.find(l => !savedProgress.completedLessonIds.includes(l.id));
        if (firstIncomplete) {
          setSelectedLessonId(firstIncomplete.id);
        }
      } catch (e) {
        // ignore
      }
    }
  }, [course]);

  const activeLesson = allLessons.find(l => l.id === selectedLessonId) || allLessons[0];
  const activeModule = course.modules.find(m => m.lessons.some(l => l.id === activeLesson?.id)) || course.modules[0];
  const activeQuiz = course.quizzes?.find(q => q.weekNumber === selectedQuizWeek);

  const currentLessonIndex = allLessons.findIndex(l => l.id === activeLesson?.id);
  const prevLesson = currentLessonIndex > 0 ? allLessons[currentLessonIndex - 1] : null;
  const nextLesson = currentLessonIndex < allLessons.length - 1 ? allLessons[currentLessonIndex + 1] : null;

  const toggleBookmark = (lessonId: string) => {
    const updated = bookmarkedLessons.includes(lessonId)
      ? bookmarkedLessons.filter(id => id !== lessonId)
      : [...bookmarkedLessons, lessonId];
    setBookmarkedLessons(updated);
    try {
      localStorage.setItem(`course_bookmarks_${course.id}`, JSON.stringify(updated));
    } catch (e) {}
  };

  const handleSaveNote = (lessonId: string, noteText: string) => {
    const updated = { ...personalNotes, [lessonId]: noteText };
    setPersonalNotes(updated);
    try {
      localStorage.setItem(`course_notes_${course.id}`, JSON.stringify(updated));
      setNoteSavedMessage(true);
      setTimeout(() => setNoteSavedMessage(false), 2500);
    } catch (e) {}
  };

  const toggleWeekExpand = (weekNum: number) => {
    setExpandedWeeks(prev => ({ ...prev, [weekNum]: !prev[weekNum] }));
  };

  const handleLessonComplete = (lessonId: string) => {
    if (!course) return;
    const updated = markLessonComplete(course.id, lessonId);
    setProgress(updated);

    try {
      confetti({
        particleCount: 75,
        spread: 60,
        origin: { y: 0.8 }
      });
    } catch {}

    if (nextLesson) {
      setSelectedLessonId(nextLesson.id);
    }
  };

  const handleQuizSubmit = () => {
    if (!activeQuiz || !course) return;
    let correctCount = 0;
    activeQuiz.questions.forEach((q) => {
      const selected = quizAnswers[q.id];
      const correct = q.correctIndex !== undefined ? q.correctIndex : q.correctOptionIndex;
      if (selected === correct) {
        correctCount++;
      }
    });

    const percentage = Math.round((correctCount / activeQuiz.questions.length) * 100);
    setQuizScore(percentage);
    setQuizSubmitted(true);
    const updated = saveQuizScore(course.id, selectedQuizWeek, percentage);
    setProgress(updated);

    if (percentage >= 70) {
      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch {}
    }
  };

  const completedCount = progress.completedLessonIds.length;
  const progressPercent = Math.min(100, Math.round((completedCount / (allLessons.length || 1)) * 100));

  // Resume learning action
  const handleResumeLearning = () => {
    const firstIncomplete = allLessons.find(l => !progress.completedLessonIds.includes(l.id));
    if (firstIncomplete) {
      setSelectedLessonId(firstIncomplete.id);
    }
  };

  const isBookmarked = bookmarkedLessons.includes(activeLesson?.id);
  const isLessonFinished = progress.completedLessonIds.includes(activeLesson?.id);

  // Video Chapter timestamps for BrightPath / Nexora experience
  const chapters = [
    { time: '0:00', title: 'Concepts & Foundation' },
    { time: '3:15', title: 'Software Workspace & Tools' },
    { time: '8:40', title: 'Practical Demonstration' },
    { time: '14:20', title: 'Workplace Rules & Mistakes' },
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* 1. Top Breadcrumb & Next Quick Nav */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 pb-2 border-b border-slate-200/80">
        <div className="flex items-center gap-2">
          <Link
            href="/careers"
            className="hover:text-teal-700 transition-colors"
          >
            Careers
          </Link>
          <span>/</span>
          <Link
            href={`/careers/${course.careerSlug}`}
            className="hover:text-teal-700 font-semibold line-clamp-1 max-w-[200px] sm:max-w-none"
          >
            {course.title.replace(' (30 Days)', '')}
          </Link>
          <span>/</span>
          <span className="text-teal-800 font-bold">
            Week {activeModule?.weekNumber || 1} &bull; Day {activeLesson?.dayNumber || 1}
          </span>
        </div>

        <div className="flex items-center gap-3">
          {nextLesson && (
            <button
              onClick={() => setSelectedLessonId(nextLesson.id)}
              className="inline-flex items-center gap-1 text-xs font-bold text-teal-700 hover:text-teal-900 transition-colors"
            >
              <span>Next: Day {nextLesson.dayNumber}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* 2. Course Header & Navigation Mode Bar */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold px-3 py-0.5 rounded-full bg-teal-100 text-teal-800">
                30-Day Training Pathway
              </span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                {career?.category || 'Operations'}
              </span>
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/60">
                100% Free Open Education
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {course.title}
            </h1>
            <p className="text-xs sm:text-sm font-semibold text-teal-800">
              {course.titleMl}
            </p>
          </div>

          {/* Progress Tracker Card */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 min-w-[260px] space-y-2 shrink-0">
            <div className="flex items-center justify-between text-xs font-bold text-slate-800">
              <span>Your Curriculum Progress</span>
              <span className="text-teal-700 font-extrabold">{progressPercent}%</span>
            </div>
            <div className="w-full h-2.5 rounded-full bg-slate-200 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-teal-600 to-emerald-500 transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <div className="flex items-center justify-between text-[11px] text-slate-500 pt-0.5">
              <span>{completedCount} of {allLessons.length} Lessons Finished</span>
              <button
                onClick={handleResumeLearning}
                className="text-teal-800 font-bold hover:underline"
              >
                Resume Learning &rarr;
              </button>
            </div>
          </div>
        </div>

        {/* Top-Level Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-t border-slate-100 pt-4 text-xs font-semibold">
          {[
            { id: 'lessons', label: `Daily Lessons (${allLessons.length} Days)`, icon: BookOpen },
            { id: 'quiz', label: 'Weekly Quizzes', icon: Award },
            { id: 'projects', label: 'Portfolio Projects', icon: FileCheck },
            { id: 'datasets', label: 'Sample Datasets', icon: Download },
            { id: 'interview', label: 'Interview & Workplace Prep', icon: Briefcase },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setMainTab(tab.id as any);
                  setQuizSubmitted(false);
                }}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl transition-all ${
                  mainTab === tab.id
                    ? 'bg-teal-700 text-white shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Main Learning View (Daily Lessons) */}
      {mainTab === 'lessons' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Nexora/BrightPath Curriculum Sidebar */}
          <div className="lg:col-span-4 bg-white rounded-3xl border border-slate-200/90 p-5 space-y-4 shadow-xs sticky top-20 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between px-1 pb-2 border-b border-slate-100">
              <div className="space-y-0.5">
                <span className="font-extrabold text-xs uppercase tracking-wider text-slate-900 block">
                  Course Modules
                </span>
                <span className="text-[11px] text-slate-500">
                  {completedCount} of {allLessons.length} units completed
                </span>
              </div>
              <button
                onClick={handleResumeLearning}
                className="text-[11px] font-bold px-2 py-1 rounded bg-teal-50 text-teal-800 hover:bg-teal-100 transition-colors"
              >
                Resume
              </button>
            </div>

            {/* Collapsible Weeks */}
            <div className="space-y-3">
              {course.modules.map((module) => {
                const isExpanded = expandedWeeks[module.weekNumber] ?? true;
                const moduleCompletedLessons = module.lessons.filter(l => progress.completedLessonIds.includes(l.id)).length;
                const isModuleFinished = moduleCompletedLessons === module.lessons.length && module.lessons.length > 0;

                return (
                  <div key={module.id} className="rounded-2xl border border-slate-200/80 overflow-hidden bg-slate-50/40">
                    <button
                      onClick={() => toggleWeekExpand(module.weekNumber)}
                      className="w-full p-3 flex items-center justify-between text-left hover:bg-slate-100/70 transition-colors bg-white border-b border-slate-100"
                    >
                      <div className="space-y-0.5 pr-2">
                        <div className="flex items-center gap-2">
                          <span className="font-extrabold text-xs text-slate-900">
                            Week {module.weekNumber}
                          </span>
                          {isModuleFinished && (
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          )}
                        </div>
                        <p className="text-[11px] text-slate-500 font-medium line-clamp-1">
                          {module.title.replace(`Week ${module.weekNumber}: `, '')}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                          {moduleCompletedLessons}/{module.lessons.length}
                        </span>
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 text-slate-400" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-400" />
                        )}
                      </div>
                    </button>

                    {/* Lesson Items */}
                    {isExpanded && (
                      <div className="p-1.5 space-y-1">
                        {module.lessons.map((lesson) => {
                          const isComplete = progress.completedLessonIds.includes(lesson.id);
                          const isSelected = selectedLessonId === lesson.id;

                          return (
                            <button
                              key={lesson.id}
                              onClick={() => setSelectedLessonId(lesson.id)}
                              className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left text-xs transition-all ${
                                isSelected
                                  ? 'bg-teal-50 text-teal-950 font-bold border border-teal-200 shadow-xs'
                                  : 'text-slate-700 hover:bg-slate-100/80 border border-transparent'
                              }`}
                            >
                              <div className="flex items-center gap-2.5 pr-2">
                                <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] shrink-0 ${
                                  isSelected ? 'bg-teal-700 text-white' : 'bg-slate-200 text-slate-600'
                                }`}>
                                  {lesson.dayNumber}
                                </span>
                                <div>
                                  <span className="line-clamp-1 block font-medium leading-tight">{lesson.title}</span>
                                  <span className="text-[10px] text-slate-400 font-normal">
                                    {lesson.durationMinutes} min &bull; Practical
                                  </span>
                                </div>
                              </div>
                              {isComplete ? (
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                              ) : (
                                <div className="w-2 h-2 rounded-full bg-slate-300 shrink-0" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Nexora/BrightPath Learning Player Stage */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs space-y-6">
            {/* Top Interactive Video / Media Player Frame */}
            <div className="relative w-full aspect-video bg-slate-950 text-white flex flex-col justify-between p-5 overflow-hidden group">
              {/* Background Ambient Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-950 via-slate-900 to-slate-950 opacity-90" />
              
              {/* Video Top Overlay Bar */}
              <div className="relative z-10 flex items-center justify-between text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 font-mono font-bold text-[10px] border border-teal-500/30">
                    DAY {activeLesson?.dayNumber || 1}
                  </span>
                  <span className="font-semibold text-white line-clamp-1">
                    {activeLesson?.title}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-slate-400">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{activeLesson?.durationMinutes} Mins</span>
                </div>
              </div>

              {/* Center Play Button & Title */}
              <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-3 my-auto">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-16 h-16 rounded-full bg-teal-600 hover:bg-teal-500 text-white flex items-center justify-center shadow-xl shadow-teal-900/50 hover:scale-105 transition-all"
                  aria-label={isPlaying ? 'Pause lesson' : 'Play lesson'}
                >
                  {isPlaying ? <Pause className="w-7 h-7" /> : <Play className="w-7 h-7 ml-1" />}
                </button>
                <div className="space-y-1 max-w-lg">
                  <p className="text-xs text-teal-300 font-semibold uppercase tracking-wider">
                    Practical Zero-Knowledge Masterclass
                  </p>
                  <p className="text-sm sm:text-base font-bold text-white leading-snug">
                    {activeLesson?.title}
                  </p>
                  <p className="text-xs text-slate-400 line-clamp-1">
                    {activeLesson?.titleMl}
                  </p>
                </div>
              </div>

              {/* Bottom Player Scrub Bar & Chapter Markers (BrightPath Style) */}
              <div className="relative z-10 space-y-2 pt-2">
                {/* Scrub line */}
                <div className="w-full h-1.5 rounded-full bg-slate-800 relative cursor-pointer overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-teal-500 to-emerald-400 w-1/3" />
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-white">08:22</span>
                    <span>/</span>
                    <span className="font-mono">{activeLesson?.durationMinutes}:00</span>
                  </div>

                  {/* Chapter Timestamps */}
                  <div className="hidden sm:flex items-center gap-3 text-[10px]">
                    {chapters.map((ch) => (
                      <button
                        key={ch.time}
                        onClick={() => setActiveTimestamp(ch.time)}
                        className={`hover:text-white transition-colors ${
                          activeTimestamp === ch.time ? 'text-teal-300 font-bold' : 'text-slate-400'
                        }`}
                      >
                        <span className="font-mono font-bold mr-1">{ch.time}</span>
                        <span>{ch.title}</span>
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-slate-300">
                    <Volume2 className="w-4 h-4 cursor-pointer hover:text-white" />
                    <Maximize className="w-4 h-4 cursor-pointer hover:text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Lesson Title & Action Header */}
            <div className="p-6 sm:p-8 pt-0 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-teal-100 text-teal-800">
                      Day {activeLesson?.dayNumber}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      {activeLesson?.durationMinutes} Minutes
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    {activeLesson?.title}
                  </h2>
                  <p className="text-xs font-semibold text-teal-800">
                    {activeLesson?.titleMl}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {/* Bookmark Button */}
                  <button
                    onClick={() => toggleBookmark(activeLesson?.id)}
                    title={isBookmarked ? 'Remove bookmark' : 'Bookmark lesson'}
                    className="p-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    {isBookmarked ? (
                      <BookmarkCheck className="w-4 h-4 text-teal-600 fill-teal-600" />
                    ) : (
                      <Bookmark className="w-4 h-4" />
                    )}
                  </button>

                  {/* Mark as Complete Button */}
                  <button
                    onClick={() => handleLessonComplete(activeLesson?.id)}
                    className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                      isLessonFinished
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                        : 'bg-teal-700 hover:bg-teal-800 text-white shadow-xs'
                    }`}
                  >
                    <Check className="w-4 h-4" />
                    <span>{isLessonFinished ? 'Completed' : 'Mark as Complete'}</span>
                  </button>
                </div>
              </div>

              {/* Lesson Sub-Tabs (Nexora Style: Overview, Malayalam, Notes, Downloads, Exercise) */}
              <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-3 text-xs font-semibold">
                {[
                  { id: 'overview', label: 'Overview & Guide' },
                  { id: 'malayalam', label: 'മലയാളം വിശദീകരണം' },
                  { id: 'notes', label: 'Personal Notes' },
                  { id: 'downloads', label: 'Downloads & Worksheets' },
                  { id: 'exercise', label: 'Hands-on Exercise' },
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setLessonSubTab(t.id as any)}
                    className={`px-3 py-1.5 rounded-lg transition-colors ${
                      lessonSubTab === t.id
                        ? 'bg-teal-700 text-white font-bold'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              {/* Sub-Tab 1: Overview & Guide */}
              {lessonSubTab === 'overview' && (
                <div className="space-y-6">
                  {/* Overview */}
                  <div className="space-y-2">
                    <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Lesson Goal</h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-100">
                      {activeLesson?.overview}
                    </p>
                  </div>

                  {/* Concepts */}
                  <div className="space-y-2">
                    <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Core Concepts Taught Today</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {activeLesson?.concepts.map((concept, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-800">
                          <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                          <span className="leading-snug font-medium">{concept}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Simple English Explanation */}
                  <div className="space-y-2">
                    <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Zero-Knowledge Explanation</h3>
                    <div className="p-4 rounded-2xl bg-teal-50/70 border border-teal-100 text-xs sm:text-sm text-teal-950 leading-relaxed">
                      {activeLesson?.simpleEnglishGuide}
                    </div>
                  </div>

                  {/* Official Docs & Video Guides */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {/* Official Docs */}
                    <div className="space-y-2">
                      <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Official Documentation</h3>
                      <div className="space-y-1.5">
                        {activeLesson?.officialDocLinks.map((doc, idx) => (
                          <a
                            key={idx}
                            href={doc.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-800 transition-colors"
                          >
                            <span className="line-clamp-1">{doc.title}</span>
                            <ExternalLink className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Video Guides */}
                    <div className="space-y-2">
                      <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Recommended Tutorials</h3>
                      <div className="space-y-1.5">
                        {activeLesson?.videoResources.map((vid, idx) => (
                          <a
                            key={idx}
                            href={vid.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-800 transition-colors"
                          >
                            <div className="flex items-center gap-2 pr-2">
                              <PlayCircle className="w-4 h-4 text-teal-600 shrink-0" />
                              <span className="line-clamp-1">{vid.title}</span>
                            </div>
                            <span className="text-[10px] text-slate-400 shrink-0">
                              {vid.duration || '25 min'}
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Sub-Tab 2: Malayalam Guidance */}
              {lessonSubTab === 'malayalam' && (
                <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-3 text-xs sm:text-sm text-amber-950">
                  <div className="flex items-center gap-2 font-bold text-amber-900 text-sm">
                    <Globe className="w-4 h-4 text-amber-700" />
                    <span>മലയാളം ഗൈഡൻസ് കുറിപ്പുകൾ (Malayalam Audio & Study Notes)</span>
                  </div>
                  <p className="leading-relaxed">
                    {activeLesson?.malayalamNotes || 'ഈ പാഠത്തിൽ പരാമർശിച്ചിരിക്കുന്ന ടൂളുകൾ സാധാരണ കമ്പ്യൂട്ടറുകളിൽ സൗജന്യമായി ഉപയോഗിക്കാവുന്നതാണ്. നൽകിയിരിക്കുന്ന നിർദ്ദേശങ്ങൾ പടിപടിയായി ചെയ്തു നോക്കുക.'}
                  </p>
                  <div className="p-3 bg-white/80 rounded-xl border border-amber-200/50 space-y-1 text-xs">
                    <span className="font-bold text-amber-900 block">ജോലിസ്ഥലത്തെ ഓർമ്മപ്പെടുത്തൽ:</span>
                    <span className="text-amber-800">
                      ജോലി ചെയ്യുമ്പോൾ സംശയങ്ങൾ വന്നാൽ സ്വന്തമായി മാറ്റങ്ങൾ വരുത്താതെ സീനിയർ സ്റ്റാഫിനോട് ചോദിച്ചു സ്ഥിരീകരിക്കുക. കൃത്യതയാണ് ഏറ്റവും പ്രധാനം.
                    </span>
                  </div>
                </div>
              )}

              {/* Sub-Tab 3: Personal Notes (Persisted to localStorage) */}
              {lessonSubTab === 'notes' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">Personal Study Notes</h3>
                      <p className="text-xs text-slate-500">Your notes are automatically saved locally on this browser for Day {activeLesson?.dayNumber}.</p>
                    </div>
                    {noteSavedMessage && (
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded animate-pulse">
                        Saved!
                      </span>
                    )}
                  </div>

                  <textarea
                    rows={6}
                    value={personalNotes[activeLesson?.id] || ''}
                    onChange={(e) => setPersonalNotes({ ...personalNotes, [activeLesson?.id]: e.target.value })}
                    placeholder="Type your personal observations, shortcuts, or questions here..."
                    className="w-full p-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 text-xs sm:text-sm font-sans"
                  />

                  <button
                    onClick={() => handleSaveNote(activeLesson?.id, personalNotes[activeLesson?.id] || '')}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold transition-colors shadow-xs"
                  >
                    <Save className="w-3.5 h-3.5" />
                    <span>Save Note</span>
                  </button>
                </div>
              )}

              {/* Sub-Tab 4: Downloads & Datasets */}
              {lessonSubTab === 'downloads' && (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Downloadable Exercise Materials</h3>
                    <p className="text-xs text-slate-500">Practice files and worksheets designed specifically for this lesson.</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-xs">
                        CSV
                      </div>
                      <div>
                        <div className="font-bold text-xs text-slate-900">
                          {course.careerSlug}_day_{activeLesson?.dayNumber}_worksheet.csv
                        </div>
                        <div className="text-[11px] text-slate-500">Sample dataset &bull; 15 rows of mock business entries</div>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        const blob = new Blob([`Date,Description,Category,Amount\n2026-01-05,Mock Entry 1,Operations,4500\n2026-01-08,Mock Entry 2,Supplies,1200\n`], { type: 'text/csv' });
                        const url = URL.createObjectURL(blob);
                        const a = document.createElement('a');
                        a.href = url;
                        a.download = `${course.careerSlug}_day_${activeLesson?.dayNumber}_worksheet.csv`;
                        a.click();
                      }}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-xs font-bold text-slate-700 transition-colors"
                    >
                      <Download className="w-3.5 h-3.5 text-teal-600" />
                      <span>Download</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Sub-Tab 5: Hands-on Exercise */}
              {lessonSubTab === 'exercise' && (
                <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="font-bold text-sm text-teal-400 flex items-center gap-2">
                      <Laptop className="w-4 h-4" />
                      <span>Today's Workplace Simulation Assignment</span>
                    </div>
                    <span className="text-xs text-slate-400">
                      {activeLesson?.durationMinutes} Mins
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {activeLesson?.practicalExercise?.instructions || activeLesson?.exercise?.description || 'Follow today’s software instructions, complete the tasks, and save output in your folder.'}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-800">
                    <span className="text-xs font-bold text-teal-300">Action Checklist:</span>
                    {(activeLesson?.practicalExercise?.tasks || ['Complete lesson exercise', 'Verify output against standards']).map((taskText, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{taskText}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Bottom Lesson Navigation (Prev / Next) */}
              <div className="flex items-center justify-between pt-6 border-t border-slate-200/80">
                {prevLesson ? (
                  <button
                    onClick={() => setSelectedLessonId(prevLesson.id)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Previous: Day {prevLesson.dayNumber}</span>
                  </button>
                ) : <div />}

                {nextLesson && (
                  <button
                    onClick={() => setSelectedLessonId(nextLesson.id)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold transition-colors shadow-xs"
                  >
                    <span>Next: Day {nextLesson.dayNumber}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Weekly Quizzes */}
      {mainTab === 'quiz' && (
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 space-y-6 shadow-xs max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <h2 className="text-xl font-black text-slate-900 tracking-tight">Weekly Milestone Assessments</h2>
              <p className="text-xs text-slate-500">Test your mastery of concepts and practical procedures.</p>
            </div>

            {/* Week Selector */}
            <div className="flex items-center gap-1.5">
              {[1, 2, 3, 4, 5, 6].map((w) => (
                <button
                  key={w}
                  onClick={() => {
                    setSelectedQuizWeek(w);
                    setQuizSubmitted(false);
                    setQuizAnswers({});
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                    selectedQuizWeek === w
                      ? 'bg-teal-700 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  Week {w}
                </button>
              ))}
            </div>
          </div>

          {activeQuiz ? (
            <div className="space-y-6">
              {activeQuiz.questions.map((q, idx) => (
                <div key={q.id} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                  <div className="font-bold text-sm text-slate-900 flex items-start gap-2">
                    <span className="text-teal-700 font-mono">Q{idx + 1}.</span>
                    <span>{q.question}</span>
                  </div>

                  <div className="space-y-2 pl-6">
                    {q.options.map((opt, oIdx) => {
                      const isSelected = quizAnswers[q.id] === oIdx;
                      const correct = q.correctIndex !== undefined ? q.correctIndex : q.correctOptionIndex;
                      const isCorrect = correct === oIdx;

                      return (
                        <button
                          key={oIdx}
                          disabled={quizSubmitted}
                          onClick={() => setQuizAnswers({ ...quizAnswers, [q.id]: oIdx })}
                          className={`w-full text-left p-3 rounded-xl text-xs transition-all border ${
                            quizSubmitted
                              ? isCorrect
                                ? 'bg-emerald-100 border-emerald-300 text-emerald-900 font-bold'
                                : isSelected
                                ? 'bg-red-50 border-red-200 text-red-800'
                                : 'bg-white border-slate-200 text-slate-600'
                              : isSelected
                              ? 'bg-teal-50 border-teal-500 text-teal-900 font-bold'
                              : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>

                  {quizSubmitted && (
                    <div className="pl-6 pt-1 text-xs text-slate-600 italic">
                      Explanation: {q.explanation}
                    </div>
                  )}
                </div>
              ))}

              {!quizSubmitted ? (
                <button
                  onClick={handleQuizSubmit}
                  className="px-6 py-3 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold shadow-xs transition-all"
                >
                  Submit Week {selectedQuizWeek} Quiz
                </button>
              ) : (
                <div className="p-4 rounded-2xl bg-teal-50 border border-teal-200 text-center space-y-1">
                  <div className="font-black text-lg text-teal-950">
                    Your Score: {quizScore}%
                  </div>
                  <p className="text-xs text-teal-800">
                    {quizScore >= 70 ? 'Excellent! You have passed this week’s assessment.' : 'Review today’s lessons and try again.'}
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="p-8 text-center text-slate-500 text-xs">
              Weekly quiz module available for this track. Select Week 1 or Week 2.
            </div>
          )}
        </div>
      )}

      {/* Tab 3: Portfolio Projects */}
      {mainTab === 'projects' && (
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 space-y-6 shadow-xs max-w-4xl mx-auto">
          <div>
            <h2 className="text-xl font-black text-slate-900 tracking-tight">Portfolio Projects</h2>
            <p className="text-xs text-slate-500">Real workplace deliverables that demonstrate your competency to employers.</p>
          </div>

          <div className="space-y-6">
            {course.projects.map((proj, idx) => (
              <div key={proj.id} className="p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">
                    Project {idx + 1}
                  </span>
                  <span className="text-xs text-slate-500">
                    Estimated Time: {proj.durationHours || 4} Hours
                  </span>
                </div>

                <div>
                  <h3 className="font-bold text-base text-slate-900">{proj.title}</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">{proj.description}</p>
                </div>

                {proj.deliverables && (
                  <div className="space-y-1.5 pt-2 border-t border-slate-200">
                    <span className="text-xs font-bold text-slate-800">Required Deliverables:</span>
                    {proj.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 4: Sample Datasets */}
      {mainTab === 'datasets' && (
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 space-y-6 shadow-xs max-w-4xl mx-auto">
          <div>
            <h2 className="text-xl font-black text-slate-900 tracking-tight">Downloadable Mock Datasets</h2>
            <p className="text-xs text-slate-500">Practice with realistic business data without using dummy lorem ipsum.</p>
          </div>

          <div className="space-y-4">
            {(course.sampleDatasets || [
              { title: 'Customer Transactions CSV', description: '50 real transaction records with GST and order IDs', filename: 'customer_orders_sample.csv', data: 'ID,Customer,Total,Status\n101,Kerala Organics,3500,Paid\n' }
            ]).map((ds, idx) => (
              <div key={idx} className="p-4 rounded-2xl border border-slate-200 bg-slate-50 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-xs text-slate-900">{ds.title}</h4>
                  <p className="text-[11px] text-slate-500">{ds.description}</p>
                </div>
                <button
                  onClick={() => {
                    const blob = new Blob([ds.data], { type: 'text/csv' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = ds.filename;
                    a.click();
                  }}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-100"
                >
                  <Download className="w-3.5 h-3.5 text-teal-600" />
                  <span>Download {ds.filename}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 5: Workplace & Interview Prep */}
      {mainTab === 'interview' && (
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 space-y-6 shadow-xs max-w-4xl mx-auto">
          <div>
            <h2 className="text-xl font-black text-slate-900 tracking-tight">Workplace Guidance & Interview Preparation</h2>
            <p className="text-xs text-slate-500">What to expect during your first 30 days on the job and how to answer technical questions.</p>
          </div>

          {/* First Month Advice */}
          {course.workplaceGuidance && (
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-teal-50/70 border border-teal-100 space-y-2">
                <span className="font-bold text-xs text-teal-950 uppercase tracking-wider block">First Week Survival Checklist</span>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {course.workplaceGuidance.firstWeek.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-teal-700 font-bold">&bull;</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Interview Q&A */}
          <div className="space-y-4 pt-2">
            <h3 className="font-bold text-sm text-slate-900">Common Technical Interview Questions & Suggested Answers</h3>
            {(course.interviewPrep || [
              { question: 'How do you ensure zero data entry errors?', answer: 'I utilize Excel data validation dropdowns, cross-check subtotals, and perform duplicate checks before final export.', tips: 'Shows methodical discipline.' }
            ]).map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl border border-slate-200 bg-slate-50 space-y-2">
                <div className="font-bold text-xs sm:text-sm text-slate-900">
                  Q: {item.question}
                </div>
                <div className="text-xs text-slate-700 leading-relaxed bg-white p-3 rounded-xl border border-slate-100">
                  <strong className="text-teal-800">Suggested Answer: </strong>
                  {item.answer}
                </div>
                <div className="text-[11px] text-slate-500 italic">
                  Tip: {item.tips}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
