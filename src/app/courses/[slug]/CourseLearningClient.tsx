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
  Briefcase
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

  // State
  const [selectedLessonId, setSelectedLessonId] = useState<string>(allLessons[0]?.id || '');
  const [activeTab, setActiveTab] = useState<'lessons' | 'quiz' | 'projects' | 'datasets' | 'interview'>('lessons');
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

  // Load progress from storage
  useEffect(() => {
    if (course) {
      const saved = getCourseProgress(course.id);
      setProgress(saved);
    }
  }, [course]);

  const activeLesson = allLessons.find(l => l.id === selectedLessonId) || allLessons[0];
  const activeQuiz = course.quizzes?.find(q => q.weekNumber === selectedQuizWeek);

  const handleLessonComplete = (lessonId: string) => {
    if (!course) return;
    const updated = markLessonComplete(course.id, lessonId);
    setProgress(updated);
    
    // Confetti celebration
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.8 }
      });
    } catch {}

    // Move to next lesson if available
    const currentIndex = allLessons.findIndex(l => l.id === lessonId);
    if (currentIndex < allLessons.length - 1) {
      setSelectedLessonId(allLessons[currentIndex + 1].id);
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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Top Breadcrumb & Return */}
      <div className="flex items-center justify-between text-xs text-slate-500">
        <Link
          href={`/careers/${course.careerSlug}`}
          className="inline-flex items-center gap-1.5 hover:text-emerald-700 font-semibold"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Career Blueprint</span>
        </Link>
        <span className="font-medium text-slate-700">
          30-Day Practical Intensive &bull; 100% Free
        </span>
      </div>

      {/* Course Banner */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-3 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                30-Day Training Program
              </span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                {career?.category || 'Operations'}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {course.title}
            </h1>
            <p className="text-xs sm:text-sm font-semibold text-emerald-800">
              {course.titleMl}
            </p>
          </div>

          {/* Progress Card */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 min-w-[240px] space-y-2 shrink-0">
            <div className="flex items-center justify-between text-xs font-bold text-slate-700">
              <span>Your Course Progress</span>
              <span className="text-emerald-700">{progressPercent}%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
              <div
                className="h-full bg-emerald-500 transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <div className="flex items-center justify-between text-[11px] text-slate-500 pt-0.5">
              <span>{completedCount} of {allLessons.length} Lessons done</span>
              <span>3 Projects</span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-t border-slate-100 pt-4 text-xs font-semibold">
          {[
            { id: 'lessons', label: 'Daily Lessons (Days 1 - 20)', icon: BookOpen },
            { id: 'quiz', label: 'Weekly Quizzes', icon: Award },
            { id: 'projects', label: '3 Portfolio Projects', icon: FileCheck },
            { id: 'datasets', label: 'Downloadable Sample Data', icon: Download },
            { id: 'interview', label: 'Workplace & Interview Prep', icon: Briefcase },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id as any);
                  setQuizSubmitted(false);
                }}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl transition-all ${
                  activeTab === tab.id
                    ? 'bg-emerald-600 text-white shadow-sm font-bold'
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

      {/* Tab 1: Daily Lessons */}
      {activeTab === 'lessons' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Lesson Directory */}
          <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 p-4 space-y-4 shadow-sm max-h-[750px] overflow-y-auto">
            <div className="font-bold text-xs uppercase tracking-wider text-slate-500 px-2">
              Curriculum Modules
            </div>

            <div className="space-y-4">
              {course.modules.map((module) => (
                <div key={module.id} className="space-y-1.5">
                  <div className="text-xs font-bold text-slate-800 bg-slate-50 p-2 rounded-lg border border-slate-100">
                    Week {module.weekNumber}: {module.title.replace(`Week ${module.weekNumber}: `, '')}
                  </div>

                  <div className="space-y-1 pl-1">
                    {module.lessons.map((lesson) => {
                      const isComplete = progress.completedLessonIds.includes(lesson.id);
                      const isSelected = selectedLessonId === lesson.id;

                      return (
                        <button
                          key={lesson.id}
                          onClick={() => setSelectedLessonId(lesson.id)}
                          className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left text-xs transition-all ${
                            isSelected
                              ? 'bg-emerald-50 text-emerald-950 font-bold border border-emerald-200 shadow-sm'
                              : 'text-slate-700 hover:bg-slate-50 border border-transparent'
                          }`}
                        >
                          <div className="flex items-center gap-2 pr-2">
                            <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-[10px] shrink-0">
                              {lesson.dayNumber}
                            </span>
                            <span className="line-clamp-1">{lesson.title}</span>
                          </div>
                          {isComplete ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          ) : (
                            <div className="w-2 h-2 rounded-full bg-slate-200 shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Active Lesson Content */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
            {activeLesson ? (
              <div className="space-y-6">
                {/* Lesson Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                        Day {activeLesson.dayNumber}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        {activeLesson.durationMinutes} Minutes
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                      {activeLesson.title}
                    </h2>
                    <p className="text-xs font-medium text-emerald-800">
                      {activeLesson.titleMl}
                    </p>
                  </div>

                  <button
                    onClick={() => handleLessonComplete(activeLesson.id)}
                    className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                      progress.completedLessonIds.includes(activeLesson.id)
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                        : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm'
                    }`}
                  >
                    <Check className="w-4 h-4" />
                    <span>
                      {progress.completedLessonIds.includes(activeLesson.id)
                        ? 'Completed'
                        : 'Mark as Complete'}
                    </span>
                  </button>
                </div>

                {/* Lesson Overview */}
                <div className="space-y-2">
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Lesson Overview</h3>
                  <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                    {activeLesson.overview}
                  </p>
                </div>

                {/* Core Concepts */}
                <div className="space-y-2">
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Key Concepts</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeLesson.concepts.map((concept, idx) => (
                      <div key={idx} className="flex items-start gap-2 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-800">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{concept}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plain English Guide */}
                <div className="space-y-2">
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Simple Explanation</h3>
                  <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-100 text-xs sm:text-sm text-emerald-950 leading-relaxed">
                    {activeLesson.simpleEnglishGuide}
                  </div>
                </div>

                {/* Malayalam Notes */}
                {activeLesson.malayalamNotes && (
                  <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/70 text-xs text-amber-900 space-y-1">
                    <div className="font-bold text-amber-800">മലയാളം ഗൈഡൻസ് കുറിപ്പ്:</div>
                    <p className="leading-relaxed">{activeLesson.malayalamNotes}</p>
                  </div>
                )}

                {/* Video & Documentation Links */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {/* Official Docs */}
                  <div className="space-y-2">
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Official Documentation</h3>
                    <div className="space-y-1.5">
                      {activeLesson.officialDocLinks.map((doc, idx) => (
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

                  {/* Video Tutorials */}
                  <div className="space-y-2">
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Recommended Video Guides</h3>
                    <div className="space-y-1.5">
                      {activeLesson.videoResources.map((vid, idx) => (
                        <a
                          key={idx}
                          href={vid.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-800 transition-colors"
                        >
                          <div className="flex items-center gap-2 pr-2">
                            <PlayCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span className="line-clamp-1">{vid.title}</span>
                          </div>
                          <span className="text-[10px] text-slate-400 shrink-0">
                            {vid.durationMinutes ? `${vid.durationMinutes}m` : 'Video'}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Practical Hands-on Exercise */}
                {activeLesson.exercise && (
                  <div className="p-5 rounded-2xl bg-slate-900 text-white space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="font-bold text-sm text-emerald-400 flex items-center gap-2">
                        <Laptop className="w-4 h-4" />
                        <span>Today\'s Hands-On Exercise</span>
                      </div>
                      <span className="text-xs text-slate-400">
                        {activeLesson.exercise.estimatedMinutes} Mins
                      </span>
                    </div>

                    <div className="font-semibold text-sm text-slate-100">
                      {activeLesson.exercise.title}
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {activeLesson.exercise.description}
                    </p>

                    <div className="pt-2 border-t border-slate-800 text-xs flex items-center justify-between text-slate-400">
                      <span>Expected Deliverable:</span>
                      <strong className="text-emerald-300">{activeLesson.exercise.deliverable}</strong>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-12 text-slate-400">Select a lesson from the left directory to begin.</div>
            )}
          </div>
        </div>
      )}

      {/* Tab 2: Weekly Quizzes */}
      {activeTab === 'quiz' && (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8">
          <div className="flex flex-wrap items-center gap-2 pb-4 border-b border-slate-100">
            <span className="text-xs font-bold text-slate-500 mr-2">Select Week:</span>
            {[1, 2, 3, 4].map((wk) => (
              <button
                key={wk}
                onClick={() => {
                  setSelectedQuizWeek(wk);
                  setQuizSubmitted(false);
                  setQuizAnswers({});
                }}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedQuizWeek === wk
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Week {wk} Assessment {progress.quizScores[wk] ? `(${progress.quizScores[wk]}%)` : ''}
              </button>
            ))}
          </div>

          {activeQuiz ? (
            <div className="space-y-8">
              <div className="space-y-1">
                <h2 className="text-xl font-bold text-slate-900">{activeQuiz.title}</h2>
                <p className="text-xs text-slate-500">
                  5 multiple choice questions evaluating your theoretical and practical comprehension.
                </p>
              </div>

              <div className="space-y-6">
                {activeQuiz.questions.map((q, qIdx) => {
                  const correct = q.correctIndex !== undefined ? q.correctIndex : q.correctOptionIndex;
                  const selected = quizAnswers[q.id];

                  return (
                    <div key={q.id} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4">
                      <div>
                        <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                          Question {qIdx + 1}
                        </div>
                        <h3 className="font-bold text-sm sm:text-base text-slate-900 mt-1">
                          {q.question}
                        </h3>
                        {q.questionMl && (
                          <p className="text-xs font-medium text-emerald-800 mt-0.5">{q.questionMl}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        {q.options.map((opt, optIdx) => {
                          const isOptionSelected = selected === optIdx;
                          let btnStyle = 'border-slate-200 bg-white text-slate-800 hover:bg-slate-100';

                          if (quizSubmitted) {
                            if (optIdx === correct) {
                              btnStyle = 'border-emerald-600 bg-emerald-100/70 text-emerald-950 font-bold';
                            } else if (isOptionSelected) {
                              btnStyle = 'border-red-400 bg-red-50 text-red-900';
                            }
                          } else if (isOptionSelected) {
                            btnStyle = 'border-emerald-600 bg-emerald-50 text-emerald-900 font-bold ring-1 ring-emerald-600';
                          }

                          return (
                            <button
                              key={optIdx}
                              disabled={quizSubmitted}
                              onClick={() => setQuizAnswers({ ...quizAnswers, [q.id]: optIdx })}
                              className={`w-full p-3 rounded-xl border text-left text-xs sm:text-sm transition-all ${btnStyle}`}
                            >
                              <div className="flex items-center gap-2">
                                <span className="w-5 h-5 rounded-full border border-slate-300 flex items-center justify-center text-[10px] shrink-0 font-mono">
                                  {String.fromCharCode(65 + optIdx)}
                                </span>
                                <span>{opt}</span>
                              </div>
                            </button>
                          );
                        })}
                      </div>

                      {quizSubmitted && (
                        <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 space-y-1">
                          <span className="font-bold text-emerald-800 block">Explanation:</span>
                          <p className="leading-relaxed">{q.explanation}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                {!quizSubmitted ? (
                  <button
                    onClick={handleQuizSubmit}
                    disabled={Object.keys(quizAnswers).length < activeQuiz.questions.length}
                    className="px-6 py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm transition-all"
                  >
                    Submit Week {selectedQuizWeek} Quiz & See Results
                  </button>
                ) : (
                  <div className="flex items-center gap-4">
                    <div className="text-sm font-bold text-slate-900">
                      Your Score: <span className="text-emerald-600 font-extrabold">{quizScore}%</span>
                    </div>
                    <button
                      onClick={() => {
                        setQuizSubmitted(false);
                        setQuizAnswers({});
                      }}
                      className="px-4 py-2 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                    >
                      Retake Quiz
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <p className="text-slate-500 text-sm">No quiz found for this week.</p>
          )}
        </div>
      )}

      {/* Tab 3: 3 Portfolio Projects */}
      {activeTab === 'projects' && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-2">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              3 Mandatory Portfolio Projects
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Complete these three realistic deliverables to prove your competence to employers without needing previous corporate work history.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {course.projects.map((proj, pIdx) => (
              <div
                key={proj.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                  <div>
                    <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">
                      Portfolio Project #{pIdx + 1}
                    </span>
                    <h3 className="font-bold text-lg sm:text-xl text-slate-900 mt-0.5">
                      {proj.title}
                    </h3>
                    {proj.titleMl && (
                      <p className="text-xs font-medium text-emerald-800">{proj.titleMl}</p>
                    )}
                  </div>
                  {proj.durationHours && (
                    <span className="text-xs font-semibold bg-slate-100 text-slate-700 px-3 py-1 rounded-full self-start sm:self-auto">
                      Estimated: {proj.durationHours} Hours
                    </span>
                  )}
                </div>

                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Project Brief</h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                    {proj.description}
                  </p>
                </div>

                {proj.objectives && (
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Key Objectives</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {proj.objectives.map((obj, oIdx) => (
                        <div key={oIdx} className="flex items-start gap-2 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-800">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{obj}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {proj.rubric && (
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Grading Rubric</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {proj.rubric.map((r, rIdx) => (
                        <div key={rIdx} className="p-3.5 rounded-xl border border-slate-200 bg-white text-xs space-y-1">
                          <div className="flex items-center justify-between font-bold text-slate-900">
                            <span>{r.criteria}</span>
                            <span className="text-emerald-700">{r.maxScore} Pts</span>
                          </div>
                          <p className="text-slate-500 leading-normal">{r.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/80 text-xs text-emerald-950 flex items-start gap-3">
                  <FileCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">Final Portfolio Deliverable:</span>
                    <span className="leading-relaxed block mt-0.5">{proj.deliverable || proj.deliverables?.join(', ')}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 4: Downloadable Datasets */}
      {activeTab === 'datasets' && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-2">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Downloadable Sample Datasets & Templates
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Practice directly on real data. Download or copy these pre-formatted CSV and JSON datasets to complete your exercises.
            </p>
          </div>

          <div className="space-y-6">
            {course.sampleDatasets?.map((ds, dIdx) => (
              <div key={dIdx} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                  <div>
                    <h3 className="font-bold text-base text-slate-900">{ds.title}</h3>
                    <p className="text-xs text-slate-500 mt-0.5">{ds.description}</p>
                  </div>
                  <button
                    onClick={() => {
                      const blob = new Blob([ds.data], { type: 'text/plain;charset=utf-8' });
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement('a');
                      a.href = url;
                      a.download = ds.filename;
                      a.click();
                    }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition-colors shrink-0"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download {ds.filename}</span>
                  </button>
                </div>

                <div className="space-y-1">
                  <div className="text-[11px] font-mono text-slate-500 font-semibold">Preview:</div>
                  <pre className="p-4 rounded-xl bg-slate-900 text-slate-200 font-mono text-xs overflow-x-auto max-h-64 leading-relaxed">
                    {ds.data}
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 5: Workplace & Interview Prep */}
      {activeTab === 'interview' && (
        <div className="space-y-8">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-2">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Interview Q&A & First-Month Workplace Survival Guide
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Know exactly how to answer interview questions and what to do during your first week on the job.
            </p>
          </div>

          {course.workplaceFirstMonthGuide && (
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
              <h3 className="text-lg font-bold text-slate-900">First Week on the Job Checklist</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {course.workplaceFirstMonthGuide.week1Checklist.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-3">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Pitfalls to Avoid</h4>
                <div className="space-y-2">
                  {course.workplaceFirstMonthGuide.commonPitfallsToAvoid.map((pitfall, pIdx) => (
                    <div key={pIdx} className="p-3 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900 leading-relaxed">
                      &bull; {pitfall}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {course.interviewPreparation && (
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
              <h3 className="text-lg font-bold text-slate-900">Common Technical & Behavioral Interview Questions</h3>
              <div className="space-y-4">
                {course.interviewPreparation.commonQuestions.map((q, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                    <div className="font-bold text-sm text-slate-900">
                      Q{idx + 1}: {q.question}
                    </div>
                    <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 leading-relaxed space-y-1">
                      <span className="font-bold text-emerald-800 block">Recommended Model Answer:</span>
                      <p>{q.suggestedAnswer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
