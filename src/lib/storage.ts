'use client';

import { UserResumeData, ApplicationItem } from '@/types';

const STORAGE_KEYS = {
  SAVED_CAREERS: 'cl_saved_careers',
  COURSE_PROGRESS: 'cl_course_progress',
  APPLICATIONS: 'cl_applications',
  RESUME: 'cl_resume_data',
  LANGUAGE: 'cl_preferred_language',
  SIMULATOR_SCORES: 'cl_simulator_scores',
  PORTFOLIO_PROJECTS: 'cl_portfolio_projects',
  DAILY_STUDY_LOG: 'cl_daily_study_log',
};

export interface CourseProgressRecord {
  completedLessonIds: string[];
  quizScores: Record<number, number>; // weekNumber -> score percentage
  enrolledAt: string;
  lastActiveAt: string;
}

export const defaultResumeData: UserResumeData = {
  fullName: 'Arjun Das',
  email: 'arjun.das.work@gmail.com',
  phone: '+91 98470 12345',
  city: 'Kochi, Kerala',
  country: 'India',
  summary: 'Detail-oriented and disciplined entry-level operations professional trained in cloud accounting, financial documentation, and data management. Completed intensive hands-on practical simulations in Zoho Books and MS Excel.',
  targetRole: 'Junior Accounts & Billing Assistant',
  skills: ['Zoho Books', 'GST Invoicing', 'MS Excel (VLOOKUP, Pivot)', 'Bank Reconciliation', 'Data Entry'],
  education: [
    { degree: 'Higher Secondary (Commerce)', institution: 'Govt Model HSS, Kochi', year: '2023' }
  ],
  projects: [
    {
      title: 'Monthly Financial Invoicing & Bank Reconciliation',
      description: 'Reconciled 1 month of business banking transactions against cash book ledgers with 100% accuracy using Zoho Books.',
      tools: 'Zoho Books, MS Excel'
    },
    {
      title: 'E-commerce Inventory & SKU Audit',
      description: 'Audited 50-item product catalog, applied 12% GST tax brackets, and corrected duplicate SKU tags.',
      tools: 'Google Sheets, CSV'
    }
  ],
  languages: [
    { name: 'Malayalam', level: 'Native' },
    { name: 'English', level: 'Professional Working' }
  ],
  certifications: [
    'Career Launchpad 30-Day Practical Bookkeeping Certification (2026)',
    'MS Excel Basic Data Operations Badge'
  ]
};

export function getSavedCareers(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const data = localStorage.getItem(STORAGE_KEYS.SAVED_CAREERS);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function toggleSaveCareer(slug: string): boolean {
  if (typeof window === 'undefined') return false;
  const current = getSavedCareers();
  let updated: string[];
  let isSaved = false;
  if (current.includes(slug)) {
    updated = current.filter(s => s !== slug);
    isSaved = false;
  } else {
    updated = [...current, slug];
    isSaved = true;
  }
  localStorage.setItem(STORAGE_KEYS.SAVED_CAREERS, JSON.stringify(updated));
  return isSaved;
}

export function getCourseProgress(courseId: string): CourseProgressRecord {
  if (typeof window === 'undefined') {
    return { completedLessonIds: [], quizScores: {}, enrolledAt: '', lastActiveAt: '' };
  }
  try {
    const all = localStorage.getItem(STORAGE_KEYS.COURSE_PROGRESS);
    const parsed = all ? JSON.parse(all) : {};
    return parsed[courseId] || { completedLessonIds: [], quizScores: {}, enrolledAt: new Date().toISOString(), lastActiveAt: new Date().toISOString() };
  } catch {
    return { completedLessonIds: [], quizScores: {}, enrolledAt: '', lastActiveAt: '' };
  }
}

export function markLessonComplete(courseId: string, lessonId: string): CourseProgressRecord {
  if (typeof window === 'undefined') {
    return { completedLessonIds: [lessonId], quizScores: {}, enrolledAt: '', lastActiveAt: '' };
  }
  try {
    const all = localStorage.getItem(STORAGE_KEYS.COURSE_PROGRESS);
    const parsed = all ? JSON.parse(all) : {};
    const courseRec = parsed[courseId] || { completedLessonIds: [], quizScores: {}, enrolledAt: new Date().toISOString() };
    
    if (!courseRec.completedLessonIds.includes(lessonId)) {
      courseRec.completedLessonIds.push(lessonId);
    }
    courseRec.lastActiveAt = new Date().toISOString();
    parsed[courseId] = courseRec;
    localStorage.setItem(STORAGE_KEYS.COURSE_PROGRESS, JSON.stringify(parsed));
    return courseRec;
  } catch {
    return { completedLessonIds: [lessonId], quizScores: {}, enrolledAt: '', lastActiveAt: '' };
  }
}

export function saveQuizScore(courseId: string, weekNumber: number, percentage: number): CourseProgressRecord {
  if (typeof window === 'undefined') {
    return { completedLessonIds: [], quizScores: { [weekNumber]: percentage }, enrolledAt: '', lastActiveAt: '' };
  }
  try {
    const all = localStorage.getItem(STORAGE_KEYS.COURSE_PROGRESS);
    const parsed = all ? JSON.parse(all) : {};
    const courseRec = parsed[courseId] || { completedLessonIds: [], quizScores: {}, enrolledAt: new Date().toISOString() };
    courseRec.quizScores[weekNumber] = percentage;
    courseRec.lastActiveAt = new Date().toISOString();
    parsed[courseId] = courseRec;
    localStorage.setItem(STORAGE_KEYS.COURSE_PROGRESS, JSON.stringify(parsed));
    return courseRec;
  } catch {
    return { completedLessonIds: [], quizScores: { [weekNumber]: percentage }, enrolledAt: '', lastActiveAt: '' };
  }
}

export function getUserResume(): UserResumeData {
  if (typeof window === 'undefined') return defaultResumeData;
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.RESUME);
    return saved ? JSON.parse(saved) : defaultResumeData;
  } catch {
    return defaultResumeData;
  }
}

export function saveUserResume(data: UserResumeData): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEYS.RESUME, JSON.stringify(data));
}

export function getApplications(): ApplicationItem[] {
  if (typeof window === 'undefined') return [];
  try {
    const data = localStorage.getItem(STORAGE_KEYS.APPLICATIONS);
    if (!data) {
      // Seed with initial applications
      const initial: ApplicationItem[] = [
        {
          id: 'app-init-1',
          jobId: 'job-1',
          jobTitle: 'Junior Accounts & Billing Assistant',
          company: 'Malabar Logistics Pvt Ltd',
          appliedDate: '2026-11-20',
          status: 'Interview Scheduled',
          location: 'Kochi, Kerala (Hybrid)',
          salary: '₹18,000 - ₹25,000 / mo',
          link: 'https://www.linkedin.com/jobs/view/sample-accounts-assistant-kochi',
          notes: 'Completed technical simulation test. Interview with Lead Accountant on Thursday 3 PM.'
        },
        {
          id: 'app-init-2',
          jobId: 'job-2',
          jobTitle: 'Remote Executive Virtual Assistant',
          company: 'Nexus Digital Operations',
          appliedDate: '2026-11-22',
          status: 'Applied',
          location: 'Remote (Pan-India)',
          salary: '₹22,000 - ₹32,000 / mo',
          link: 'https://weworkremotely.com/sample-virtual-assistant',
          notes: 'Submitted portfolio of sample executive calendars and travel itineraries.'
        }
      ];
      localStorage.setItem(STORAGE_KEYS.APPLICATIONS, JSON.stringify(initial));
      return initial;
    }
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export function addApplication(app: Omit<ApplicationItem, 'id' | 'appliedDate'>): ApplicationItem {
  const current = getApplications();
  const newItem: ApplicationItem = {
    ...app,
    id: `app-${Date.now()}`,
    appliedDate: new Date().toISOString().split('T')[0]
  };
  const updated = [newItem, ...current];
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEYS.APPLICATIONS, JSON.stringify(updated));
  }
  return newItem;
}

export function updateApplicationStatus(id: string, status: ApplicationItem['status']): void {
  const current = getApplications();
  const updated = current.map(item => item.id === id ? { ...item, status } : item);
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEYS.APPLICATIONS, JSON.stringify(updated));
  }
}

export function deleteApplication(id: string): void {
  const current = getApplications();
  const updated = current.filter(item => item.id !== id);
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEYS.APPLICATIONS, JSON.stringify(updated));
  }
}

export interface SimulatorScoreRecord {
  score: number;
  completedAt: string;
  department: string;
  title: string;
}

export function getSimulatorScores(): Record<string, SimulatorScoreRecord> {
  if (typeof window === 'undefined') return {};
  try {
    const data = localStorage.getItem(STORAGE_KEYS.SIMULATOR_SCORES);
    if (!data) {
      // Seed with initial completed simulation so learner has baseline
      const initial: Record<string, SimulatorScoreRecord> = {
        'sim-acct-reconciliation': {
          score: 95,
          completedAt: '2026-11-23T14:30:00Z',
          department: 'Accounting',
          title: 'Corporate Bank Statement Reconciliation'
        }
      };
      localStorage.setItem(STORAGE_KEYS.SIMULATOR_SCORES, JSON.stringify(initial));
      return initial;
    }
    return JSON.parse(data);
  } catch {
    return {};
  }
}

export function saveSimulatorScore(taskId: string, score: number, department: string, title: string): void {
  if (typeof window === 'undefined') return;
  try {
    const current = getSimulatorScores();
    current[taskId] = {
      score,
      completedAt: new Date().toISOString(),
      department,
      title
    };
    localStorage.setItem(STORAGE_KEYS.SIMULATOR_SCORES, JSON.stringify(current));
  } catch {}
}

export interface PortfolioProjectItem {
  id: string;
  title: string;
  category: string;
  department?: string;
  tools: string;
  description: string;
  evidenceUrl?: string;
  completedDate?: string;
  isVerifiedWorkplace?: boolean;
}

export function getPortfolioProjects(): PortfolioProjectItem[] {
  if (typeof window === 'undefined') return [];
  try {
    const data = localStorage.getItem(STORAGE_KEYS.PORTFOLIO_PROJECTS);
    if (!data) {
      const initial: PortfolioProjectItem[] = [
        {
          id: 'proj-init-1',
          title: 'Monthly Financial Invoicing & Bank Reconciliation',
          category: 'Accounting & Finance',
          department: 'Accounting',
          tools: 'Zoho Books, MS Excel',
          description: 'Reconciled 1 month of business banking transactions against cash book ledgers with 100% balance accuracy. Prepared 5 GST-compliant customer invoices and generated Profit & Loss summary reports.',
          evidenceUrl: 'https://drive.google.com/sample-portfolio-deliverable-1',
          completedDate: '2026-11-20',
          isVerifiedWorkplace: true
        },
        {
          id: 'proj-init-2',
          title: 'E-commerce Store Catalog Audit & Missing SKU Resolution',
          category: 'E-commerce Operations',
          department: 'E-commerce',
          tools: 'Shopify Admin, Google Sheets',
          description: 'Audited 50-item product catalog, mapped 12% GST tax brackets, corrected broken image assets, and established structured SKU tags for multi-channel sales.',
          evidenceUrl: 'https://drive.google.com/sample-portfolio-deliverable-2',
          completedDate: '2026-11-22',
          isVerifiedWorkplace: true
        }
      ];
      localStorage.setItem(STORAGE_KEYS.PORTFOLIO_PROJECTS, JSON.stringify(initial));
      return initial;
    }
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export function savePortfolioProjects(projects: PortfolioProjectItem[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEYS.PORTFOLIO_PROJECTS, JSON.stringify(projects));
  } catch {}
}

export function addPortfolioProject(item: Omit<PortfolioProjectItem, 'id'>): PortfolioProjectItem {
  const current = getPortfolioProjects();
  const newItem: PortfolioProjectItem = {
    ...item,
    id: `proj-${Date.now()}`,
    completedDate: item.completedDate || new Date().toISOString().split('T')[0]
  };
  const updated = [newItem, ...current];
  savePortfolioProjects(updated);
  return newItem;
}

