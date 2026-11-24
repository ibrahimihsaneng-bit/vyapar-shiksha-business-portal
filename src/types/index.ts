export type DurationTrack = '30-day' | '60-day' | '90-day' | '120-day' | '30-days' | '60-days' | '90-days' | '120-days';

export interface CareerCategory {
  id: string;
  slug: string;
  name: string;
  nameMl: string;
  description: string;
  descriptionMl: string;
  iconName: string;
  color: string;
  jobCountEstimate?: number;
  avgSalaryRange?: string;
}

export interface CareerSalaryRange {
  min: number;
  max: number;
  currency: string;
  period: 'month' | 'year' | 'project';
  source: string;
  verifiedDate: string;
}

export interface CareerEthicalStatus {
  status: 'Meets Criteria' | 'Requires Review';
  details: string;
  detailsMl: string;
  prohibitedActivities: string[];
}

export interface CareerProgressionStep {
  role: string;
  timeline: string;
  expectedSalary: string;
}

export interface Career {
  id: string;
  slug: string;
  title: string;
  titleMl: string;
  durationTrack: DurationTrack;
  durationDays: number;
  estimatedHours: number;
  categoryId: string;
  categoryName: string;
  category: string;
  tagline: string;
  taglineMl: string;
  summary: string;
  overview: string;
  overviewMl: string;
  dailyResponsibilities: string[];
  dayInTheLifeDuties: string[];
  beginnerEligible: boolean;
  requiredSoftware: Array<{
    name: string;
    url: string;
    isFree: boolean;
    tier: 'Free' | 'Freemium' | 'Open Source';
  }>;
  toolsRequired: string[];
  commonEmployerRequirements: string[];
  remoteOpportunities: string;
  remotePotential: 'High' | 'Medium' | 'Low';
  partTimeOpportunities: string;
  searchKeywords: string[];
  entrySalaryRange: CareerSalaryRange;
  salaryRangeInr: {
    entryMin: number;
    entryMax: number;
  };
  portfolioExpectations: string[];
  portfolioDeliverables: string[];
  englishProficiency: 'Basic' | 'Intermediate' | 'Fluent';
  equipmentRequirements: string[];
  hardwareRequirements: string;
  progressionRoadmap: CareerProgressionStep[];
  ethicalConsiderations: CareerEthicalStatus;
  ethicalCompliance: {
    status: 'Meets Criteria' | 'Requires Review';
    notes: string;
  };
  publicationStatus: 'Published' | 'In Development' | 'Planned';
  lastVerifiedDate: string;
  sourceUrls: string[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex?: number;
  correctOptionIndex?: number;
  explanation: string;
  questionMl?: string;
  optionsMl?: string[];
}

export interface WeeklyQuiz {
  weekNumber: number;
  title: string;
  questions: QuizQuestion[];
}

export interface CourseLesson {
  id: string;
  dayNumber: number;
  title: string;
  titleMl?: string;
  durationMinutes: number;
  overview: string;
  concepts: string[];
  simpleEnglishGuide: string;
  malayalamNotes?: string;
  officialDocLinks: Array<{ title: string; url: string }>;
  videoResources: Array<{
    title: string;
    url: string;
    platform?: string;
    durationMinutes?: number;
    provider?: string;
    language?: 'English' | 'Malayalam';
    duration?: string;
    isFree?: boolean;
  }>;
  exercise?: {
    title: string;
    description: string;
    estimatedMinutes: number;
    deliverable: string;
  };
  practicalExercise?: {
    instructions: string;
    tasks: string[];
    sampleDataFilename?: string;
    sampleDataJson?: unknown;
    sampleDataCsv?: string;
  };
  quiz?: QuizQuestion[];
}

export interface CourseModule {
  id: string;
  weekNumber: number;
  title: string;
  titleMl?: string;
  objective: string;
  lessons: CourseLesson[];
}

export interface CourseProject {
  id: string;
  title: string;
  titleMl?: string;
  durationHours?: number;
  description: string;
  scenario?: string;
  objectives?: string[];
  instructions?: string[];
  deliverable?: string;
  deliverables?: string[];
  downloadableDataFilename?: string;
  downloadableDataContent?: string;
  rubric?: Array<{
    criteria: string;
    maxScore: number;
    description: string;
  }>;
  gradingRubric?: Array<{
    criterion: string;
    weight: number;
    standard: string;
  }>;
  modelSolutionOverview?: string;
}

export interface SampleDataset {
  title: string;
  description: string;
  filename: string;
  data: string;
}

export interface Course {
  id: string;
  careerSlug: string;
  title: string;
  titleMl: string;
  durationDays: number;
  weeklyGoals: Array<{
    weekNumber: number;
    title: string;
    objective: string;
  }>;
  modules: CourseModule[];
  projects: CourseProject[];
  quizzes?: WeeklyQuiz[];
  sampleDatasets?: SampleDataset[];
  workplaceFirstMonthGuide?: {
    week1Checklist: string[];
    dailyRoutines: string[];
    commonPitfallsToAvoid: string[];
  };
  workplaceGuidance?: {
    firstWeek: string[];
    firstMonth: string[];
    commonMistakes: string[];
  };
  interviewPreparation?: {
    commonQuestions: Array<{
      question: string;
      suggestedAnswer: string;
    }>;
    technicalScenarios?: Array<{
      scenario: string;
      resolutionSteps: string[];
    }>;
  };
  interviewPrep?: Array<{
    question: string;
    answer: string;
    tips: string;
  }>;
}

export interface LearningResource {
  id: string;
  title: string;
  provider: string;
  directUrl: string;
  language: 'English' | 'Malayalam' | 'Bilingual';
  duration: string;
  difficulty: 'Beginner' | 'Intermediate';
  topic: string;
  costStatus: '100% Free' | 'Freemium / Free Trial' | 'Paid Certificate Optional';
  accountRequired: boolean;
  lastVerifiedDate: string;
  status: 'Active' | 'Under Review' | 'Reported Broken';
}

export interface JobListing {
  id: string;
  title: string;
  company: string;
  location: string;
  workMode: 'Remote' | 'Hybrid' | 'Onsite';
  jobType: 'Internship' | 'Entry-Level' | 'Trainee' | 'Part-time' | 'Freelance';
  salaryText: string;
  careerSlug: string;
  category: string;
  experienceRequired: string;
  skillsRequired: string[];
  description: string;
  directApplyUrl: string;
  source: string;
  lastVerifiedDate: string;
  isVerifiedVacancy: boolean;
  isExpired: boolean;
  ethicalStatus: 'Meets Criteria' | 'Under Review' | 'Flagged';
  ethicalReviewNotes: string;
  antiScamVerified: boolean;
}

export interface WorkplaceSimulatorTask {
  id: string;
  department: 'Accounting' | 'E-commerce' | 'Customer Support' | 'Virtual Assistance' | 'Design' | 'Technology';
  title: string;
  companyName: string;
  estimatedMinutes: number;
  brief: string;
  instructions: string[];
  inputData: Record<string, unknown>;
  formFields: Array<{
    id: string;
    label: string;
    type: 'text' | 'number' | 'textarea' | 'select';
    options?: string[];
    placeholder?: string;
  }>;
  solutionKey: Record<string, unknown>;
  gradingRubric: Array<{
    field: string;
    criteria: string;
    points: number;
  }>;
}

export interface CareerFinderCriteria {
  learningTime: DurationTrack;
  dailyHours: number;
  educationLevel: 'School / 10th' | 'Plus Two / 12th' | 'Graduate' | 'Any';
  englishLevel: 'Basic' | 'Intermediate' | 'Fluent';
  preferredLanguage: 'Malayalam' | 'English' | 'Both';
  codingPreference: 'No Coding' | 'Curious / Basic' | 'Wants to Code';
  creativePreference: 'High' | 'Medium' | 'Low / Business Focused';
  computerAvailability: 'Basic Laptop / PC' | 'Smartphone Only' | 'High-End PC';
  workPreference: 'Remote' | 'Flexible' | 'Offline';
  employmentType: 'Freelance' | 'Full-Time Job' | 'Part-Time' | 'Internship';
  ethicalRequirement: boolean;
}

export interface CareerRecommendation {
  career: Career;
  matchScore: number; // 0 to 100
  matchReasons: string[];
  unmetPrerequisites: string[];
}

export interface UserResumeData {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  country: string;
  summary: string;
  targetRole: string;
  skills: string[];
  education: Array<{ degree: string; institution: string; year: string }>;
  projects: Array<{ title: string; description: string; link?: string; tools: string }>;
  languages: Array<{ name: string; level: string }>;
  certifications: string[];
}

export interface JobApplicationTrackerItem {
  id: string;
  jobTitle: string;
  companyName: string;
  dateApplied: string;
  status: 'Saved' | 'Applied' | 'Screening' | 'Interview' | 'Offered' | 'Archived';
  notes: string;
  link: string;
  salaryOffered?: string;
}

export interface ApplicationItem {
  id: string;
  jobId?: string;
  jobTitle: string;
  company: string;
  appliedDate: string;
  status: 'Applied' | 'Reviewing' | 'Interview Scheduled' | 'Offer' | 'Rejected';
  notes?: string;
}
