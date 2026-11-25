'use client';

export interface AdaptiveRoadmapOptions {
  careerSlug: string;
  durationDays: number;
  dailyHours: number; // 1, 2, or 3
  daysCompleted: number;
  daysMissed?: number;
  averageQuizScore?: number; // 0 - 100
  struggledTopics?: string[];
  startDate?: string;
}

export interface AdaptiveRoadmapResult {
  careerSlug: string;
  totalProgramHours: number;
  completedHours: number;
  remainingHours: number;
  currentPaceDaysRemaining: number;
  adjustedTargetDate: string;
  originalTargetDate: string;
  daysDelayed: number;
  paceStatus: 'Ahead of Schedule' | 'On Track' | 'Minor Adjustment Needed' | 'Revision Recommended';
  paceColor: string;
  weeklyTargetHours: number;
  recommendedRevisionModules: Array<{
    title: string;
    reason: string;
    hours: number;
    lessonLink: string;
  }>;
  adaptiveSchedulePacing: Array<{
    week: number;
    label: string;
    focus: string;
    hours: number;
    status: 'completed' | 'current' | 'upcoming' | 'revision';
  }>;
}

const ADAPTIVE_STORAGE_KEY = 'career_launchpad_adaptive_pacing';

export function calculateAdaptiveRoadmap(options: AdaptiveRoadmapOptions): AdaptiveRoadmapResult {
  const {
    careerSlug,
    durationDays,
    dailyHours = 2,
    daysCompleted = 0,
    daysMissed = 0,
    averageQuizScore = 85,
    struggledTopics = [],
    startDate = new Date().toISOString()
  } = options;

  // Base hours = durationDays * 2 hours standard curriculum benchmark
  const totalProgramHours = durationDays * 2;
  const effectiveHoursPerDay = Math.max(0.5, dailyHours);
  
  // Calculate completed hours based on days completed
  const completedHours = Math.min(totalProgramHours, daysCompleted * 2);
  let remainingHours = Math.max(0, totalProgramHours - completedHours);

  // If learner scored below 70%, add adaptive revision without dropping core quality
  const recommendedRevisionModules: AdaptiveRoadmapResult['recommendedRevisionModules'] = [];
  if (averageQuizScore < 70) {
    const revisionHours = 6;
    remainingHours += revisionHours;
    recommendedRevisionModules.push({
      title: 'Foundational Concept Reinforcement & Drills',
      reason: `Quiz average is ${averageQuizScore}%. Additional practice recommended before advancing to workplace simulations.`,
      hours: revisionHours,
      lessonLink: `/courses/${careerSlug}`
    });
  }

  if (struggledTopics.length > 0) {
    struggledTopics.forEach(topic => {
      remainingHours += 3;
      recommendedRevisionModules.push({
        title: `Deep-Dive: ${topic}`,
        reason: 'Identified as high-friction concept in self-assessment.',
        hours: 3,
        lessonLink: `/courses/${careerSlug}`
      });
    });
  }

  // Calculate days needed to finish remaining hours
  const currentPaceDaysRemaining = Math.ceil(remainingHours / effectiveHoursPerDay);

  // Original target date calculation
  const start = new Date(startDate);
  const originalEnd = new Date(start);
  originalEnd.setDate(start.getDate() + durationDays);

  // Adjusted target date calculation
  const adjustedEnd = new Date();
  adjustedEnd.setDate(adjustedEnd.getDate() + currentPaceDaysRemaining);

  const daysDelayed = Math.max(0, Math.ceil((adjustedEnd.getTime() - originalEnd.getTime()) / (1000 * 60 * 60 * 24)));

  // Pace status determination
  let paceStatus: AdaptiveRoadmapResult['paceStatus'] = 'On Track';
  let paceColor = 'text-emerald-700 bg-emerald-50 border-emerald-200';

  if (averageQuizScore < 70) {
    paceStatus = 'Revision Recommended';
    paceColor = 'text-amber-800 bg-amber-50 border-amber-200';
  } else if (daysMissed > 4 || daysDelayed > 7) {
    paceStatus = 'Minor Adjustment Needed';
    paceColor = 'text-blue-800 bg-blue-50 border-blue-200';
  } else if (daysCompleted > (durationDays * 0.5) && daysDelayed === 0) {
    paceStatus = 'Ahead of Schedule';
    paceColor = 'text-teal-800 bg-teal-50 border-teal-200';
  }

  const weeklyTargetHours = Math.round(effectiveHoursPerDay * 6);

  // Generate weekly adaptive schedule pacing
  const totalWeeks = Math.ceil(durationDays / 7);
  const completedWeeks = Math.floor(daysCompleted / 7);

  const adaptiveSchedulePacing: AdaptiveRoadmapResult['adaptiveSchedulePacing'] = [];
  for (let w = 1; w <= totalWeeks; w++) {
    let status: 'completed' | 'current' | 'upcoming' | 'revision' = 'upcoming';
    if (w <= completedWeeks) {
      status = 'completed';
    } else if (w === completedWeeks + 1) {
      status = averageQuizScore < 70 ? 'revision' : 'current';
    }

    adaptiveSchedulePacing.push({
      week: w,
      label: `Week 0${w}`,
      focus: w === 1 ? 'Foundations & Tool Setup' :
             w === 2 ? 'Core Workflow & Methodologies' :
             w === 3 ? 'Practical Project Scenarios' :
             w === 4 ? 'Simulations & Portfolio Readiness' : `Advanced Practice & Capstone ${w}`,
      hours: weeklyTargetHours,
      status
    });
  }

  return {
    careerSlug,
    totalProgramHours,
    completedHours,
    remainingHours,
    currentPaceDaysRemaining,
    adjustedTargetDate: adjustedEnd.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    originalTargetDate: originalEnd.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    daysDelayed,
    paceStatus,
    paceColor,
    weeklyTargetHours,
    recommendedRevisionModules,
    adaptiveSchedulePacing
  };
}

export function saveLearnerPacing(slug: string, options: Partial<AdaptiveRoadmapOptions>): void {
  if (typeof window === 'undefined') return;
  try {
    const existing = getSavedLearnerPacing();
    existing[slug] = {
      ...(existing[slug] || {}),
      ...options,
      updatedAt: new Date().toISOString()
    };
    localStorage.setItem(ADAPTIVE_STORAGE_KEY, JSON.stringify(existing));
  } catch (e) {
    console.error('Failed to save adaptive pacing:', e);
  }
}

export function getSavedLearnerPacing(): Record<string, any> {
  if (typeof window === 'undefined') return {};
  try {
    const data = localStorage.getItem(ADAPTIVE_STORAGE_KEY);
    return data ? JSON.parse(data) : {};
  } catch {
    return {};
  }
}
