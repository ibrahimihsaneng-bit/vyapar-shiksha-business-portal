'use client';

export interface LearnerProfile {
  educationLevel: 'High School' | 'Degree / Graduate' | 'Non-Traditional / Self-Taught';
  englishProficiency: 'Basic (Simple Words)' | 'Intermediate (Conversational)' | 'Advanced';
  preferredLanguage: 'English' | 'Malayalam' | 'Bilingual (Both)';
  dailyCommitmentHours: 1 | 2 | 3;
  learningBudget: 'Zero (100% Free Open Education)';
  computerSpecs: 'Basic Laptop / Office PC' | 'Low-Spec / 4GB RAM' | 'Mobile Phone Primary';
  ethicalRequirement: 'Strict Halal & Ethical Charter (No Usury/Gambling/Scams)';
  primaryInterest: 'Finance & Office' | 'E-commerce & Store Ops' | 'Creative & Design' | 'Tech & Automation' | 'Undecided';
}

export interface MentorMessage {
  id: string;
  sender: 'user' | 'mentor';
  text: string;
  textMl?: string;
  timestamp: string;
  sourceType: 'verified-knowledge-base' | 'gemini-grounded-api';
  recommendedCareers?: Array<{
    slug: string;
    title: string;
    track: string;
    matchScore: number;
    reason: string;
  }>;
  suggestedAction?: {
    label: string;
    href: string;
  };
}

const MENTOR_HISTORY_KEY = 'career_launchpad_mentor_chat';
const MENTOR_PROFILE_KEY = 'career_launchpad_learner_profile';

export const defaultProfile: LearnerProfile = {
  educationLevel: 'Degree / Graduate',
  englishProficiency: 'Intermediate (Conversational)',
  preferredLanguage: 'Bilingual (Both)',
  dailyCommitmentHours: 2,
  learningBudget: 'Zero (100% Free Open Education)',
  computerSpecs: 'Basic Laptop / Office PC',
  ethicalRequirement: 'Strict Halal & Ethical Charter (No Usury/Gambling/Scams)',
  primaryInterest: 'Finance & Office'
};

export function getLearnerProfile(): LearnerProfile {
  if (typeof window === 'undefined') return defaultProfile;
  try {
    const data = localStorage.getItem(MENTOR_PROFILE_KEY);
    return data ? { ...defaultProfile, ...JSON.parse(data) } : defaultProfile;
  } catch {
    return defaultProfile;
  }
}

export function saveLearnerProfile(profile: Partial<LearnerProfile>): LearnerProfile {
  const current = getLearnerProfile();
  const updated = { ...current, ...profile };
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(MENTOR_PROFILE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save profile:', e);
    }
  }
  return updated;
}

export function getMentorHistory(): MentorMessage[] {
  if (typeof window === 'undefined') return [];
  try {
    const data = localStorage.getItem(MENTOR_HISTORY_KEY);
    if (!data) {
      const welcome: MentorMessage = {
        id: 'msg-welcome-01',
        sender: 'mentor',
        text: 'Assalamu alaikum and welcome! I am your AI Career Mentor. Whether you have zero prior experience or are switching careers, I can analyze your background, build an adaptive learning timetable, explain difficult concepts in simple English or Malayalam, and prepare you for genuine remote jobs. How can I help you today?',
        textMl: 'സ്വാഗതം! ഞാൻ നിങ്ങളുടെ കരിയർ മെന്ററാണ്. മുൻപരിചയം ഒന്നുമില്ലെങ്കിലും നിങ്ങൾക്ക് അനുയോജ്യമായ തൊഴിൽ കണ്ടെത്താനും, പഠന ടൈംടേബിൾ തയ്യാറാക്കാനും, മലയാളത്തിലും ലളിതമായ ഇംഗ്ലീഷിലും സംശയങ്ങൾ ദൂരീകരിക്കാനും ഞാൻ സഹായിക്കാം.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        sourceType: 'verified-knowledge-base',
        suggestedAction: {
          label: 'Explore 30-Day Careers',
          href: '/tracks/30-days'
        }
      };
      localStorage.setItem(MENTOR_HISTORY_KEY, JSON.stringify([welcome]));
      return [welcome];
    }
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export function saveMentorMessage(msg: MentorMessage): void {
  if (typeof window === 'undefined') return;
  try {
    const history = getMentorHistory();
    const updated = [...history, msg];
    localStorage.setItem(MENTOR_HISTORY_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to save message:', e);
  }
}

export function clearMentorHistory(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(MENTOR_HISTORY_KEY);
  } catch (e) {
    console.error('Failed to clear mentor history:', e);
  }
}

/**
 * Intelligent Career Mentor Processor
 * Uses grounded rule-based expert intelligence with optional Gemini API integration.
 */
export async function askCareerMentor(userQuery: string, profile?: LearnerProfile): Promise<MentorMessage> {
  const activeProfile = profile || getLearnerProfile();
  const q = userQuery.toLowerCase().trim();
  const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  // Check if Gemini API key exists
  const geminiApiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || (typeof window !== 'undefined' ? (window as any).__GEMINI_KEY__ : undefined);

  if (geminiApiKey) {
    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiApiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `You are the AI Career Mentor for Career Launchpad (a zero-tuition, ethical career education platform).
Learner Profile: Education=${activeProfile.educationLevel}, English=${activeProfile.englishProficiency}, DailyHours=${activeProfile.dailyCommitmentHours}, PreferredLang=${activeProfile.preferredLanguage}.
Strict rules:
1. Provide practical, zero-cost career guidance grounded in real beginner steps.
2. If learner asks in Malayalam or requested Malayalam, provide bilingual English + Malayalam response.
3. Never guarantee 100% placement or invent university degrees.
User question: ${userQuery}`
            }]
          }]
        })
      });
      const data = await response.json();
      const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
      if (text) {
        return {
          id: `mentor-${Date.now()}`,
          sender: 'mentor',
          text,
          timestamp: timeStr,
          sourceType: 'gemini-grounded-api'
        };
      }
    } catch {
      // Fall through to deterministic rule-based expert engine
    }
  }

  // =========================================================================
  // Deterministic Expert Rule-Based Counseling Engine (Offline / Local Mode)
  // =========================================================================

  // 1. Time commitment / schedule recalculation
  if (q.includes('hour') || q.includes('time') || q.includes('miss') || q.includes('schedule') || q.includes('days') || q.includes('ടൈം')) {
    return {
      id: `mentor-${Date.now()}`,
      sender: 'mentor',
      text: `Based on your profile commitment of ${activeProfile.dailyCommitmentHours} hour(s) per day, here is how our Adaptive Engine structures your trajectory:
• With ${activeProfile.dailyCommitmentHours} hr/day: A 30-Day pathway (60 total curriculum hours) completes in exactly ${Math.round(60 / activeProfile.dailyCommitmentHours)} days.
• If you missed days: Our curriculum never truncates lessons or rushes you. We simply shift your graduation milestone without dropping practical exercises.
• Recommended pace: 45 minutes on video/reading, 45 minutes practicing in our Workplace Simulator, and 30 minutes on portfolio deliverables.`,
      textMl: `ദിവസേന ${activeProfile.dailyCommitmentHours} മണിക്കൂർ പഠിക്കാൻ മാറ്റിവെച്ചാൽ 30 ദിവസത്തെ കോഴ്സ് ${Math.round(60 / activeProfile.dailyCommitmentHours)} ദിവസം കൊണ്ട് പൂർത്തിയാക്കാം. ദിവസങ്ങൾ നഷ്ടപ്പെട്ടാലും പാഠങ്ങൾ ചുരുക്കാതെ കൃത്യമായി പഠിച്ചുതീർക്കാൻ അഡാപ്റ്റീവ് ഷെഡ്യൂൾ സഹായിക്കും.`,
      timestamp: timeStr,
      sourceType: 'verified-knowledge-base',
      suggestedAction: {
        label: 'View Adaptive Schedule in Dashboard',
        href: '/dashboard'
      }
    };
  }

  // 2. Accounting / Bookkeeping / Finance questions
  if (q.includes('account') || q.includes('bookkeep') || q.includes('invoice') || q.includes('tally') || q.includes('അക്കൗണ്ടിംഗ്') || q.includes('finance')) {
    return {
      id: `mentor-${Date.now()}`,
      sender: 'mentor',
      text: `Accounting & Cloud Bookkeeping is our highest-demand 30-day pathway for beginners with zero prior finance background.
• Key Foundation: You learn Double-Entry principles (Debit = Credit) using Google Sheets and Zoho Books free tier.
• Practical Workplace Skills: Generating invoices, reconciling monthly bank statements against ledgers, and identifying duplicate vendor entries.
• Ethical Assurance: We focus purely on trade and operating accounts without usurious interest calculations (Riba-free / Halal compliance).
• Starting Salary: ₹18,000 to ₹25,000/month locally in Kerala, or ~$250-$400/month in Gulf remote client retainers.`,
      textMl: `മുൻപരിചയം ഇല്ലാത്തവർക്കും അക്കൗണ്ടിംഗ് പഠിക്കാം. ഗൂഗിൾ ഷീറ്റ്സ്, സോഹോ ബുക്സ് എന്നിവയിലൂടെ ഇൻവോയ്സിംഗ്, ബാങ്ക് റീകൺസിലിയേഷൻ തുടങ്ങിയ ജോലികൾ പഠിച്ച് പ്രതിമാസം ₹18,000 - ₹25,000 വരെ വരുമാനം നേടാം. പലിശ ഇടപാടുകളില്ലാത്ത ഹലാൽ രീതികളാണ് ഇതിൽ ഉൾപ്പെടുത്തിയിരിക്കുന്നത്.`,
      timestamp: timeStr,
      sourceType: 'verified-knowledge-base',
      recommendedCareers: [
        {
          slug: 'basic-bookkeeping',
          title: 'Basic Bookkeeping & Invoicing Assistant',
          track: '30-days',
          matchScore: 96,
          reason: 'Zero prior accounting required. High entry demand across local firms and remote SMBs.'
        },
        {
          slug: 'cloud-bookkeeping',
          title: 'Cloud Bookkeeping & Tax Assistant',
          track: '60-days',
          matchScore: 91,
          reason: 'Expands into Zoho Books & QuickBooks ledger balancing.'
        }
      ],
      suggestedAction: {
        label: 'Launch Accounting Simulator',
        href: '/simulator'
      }
    };
  }

  // 3. Remote work / Virtual Assistance
  if (q.includes('va') || q.includes('virtual assistant') || q.includes('remote') || q.includes('home') || q.includes('വീട്ടിലിരുന്ന്')) {
    return {
      id: `mentor-${Date.now()}`,
      sender: 'mentor',
      text: `Virtual Assistance is the fastest remote pathway for beginners. You do not need programming knowledge.
• Core Responsibilities: Executive calendar management (Google Calendar), email triage, organizing cloud folders (Google Drive), and customer communication.
• English Level: Intermediate conversational English is sufficient. Clear, polite written communication is the primary hiring factor.
• Deliverable: A portfolio with 3 sample executive schedules and a standardized meeting agenda document.`,
      textMl: `വീട്ടിലിരുന്ന് ചെയ്യാവുന്ന ഏറ്റവും മികച്ച ജോലിയാണ് വെർച്വൽ അസിസ്റ്റന്റ്. കോഡിംഗ് ആവശ്യമില്ല. ഇമെയിൽ മാനേജ്‌മെന്റ്, ഗൂഗിൾ കലണ്ടർ ഷെഡ്യൂളിംഗ്, ക്ലയന്റ് കമ്മ്യൂണിക്കേഷൻ എന്നിവയാണ് പ്രധാന ചുമതലകൾ.`,
      timestamp: timeStr,
      sourceType: 'verified-knowledge-base',
      recommendedCareers: [
        {
          slug: 'virtual-assistant',
          title: 'Virtual Assistant',
          track: '30-days',
          matchScore: 98,
          reason: '100% remote viability with flexible part-time and full-time contracts.'
        },
        {
          slug: 'transcription-audio-specialist',
          title: 'Transcription & Audio Quality Specialist',
          track: '30-days',
          matchScore: 89,
          reason: 'Independent audio listening and text typing from home.'
        }
      ],
      suggestedAction: {
        label: 'Open Virtual Assistant Pathway',
        href: '/careers/virtual-assistant'
      }
    };
  }

  // 4. Tech, Automation, No-Code or Web Dev
  if (q.includes('code') || q.includes('tech') || q.includes('program') || q.includes('web') || q.includes('python') || q.includes('devops') || q.includes('കോഡിംഗ്')) {
    return {
      id: `mentor-${Date.now()}`,
      sender: 'mentor',
      text: `For technology interests, we offer both No-Code pathways (immediate 30/60 day entry) and Full-Stack Engineering (90/120 day pathways):
• Fastest Entry (30-60 Days): WordPress Content Management, No-Code Web Design (Framer/Carrd), or Manual Software QA Testing.
• Deep Technical (90-120 Days): Front-End Web Development (HTML/CSS/JS), Python Automation, PostgreSQL Database Administration, or DevOps CI/CD.
• Zero Cost: All programming tracks use free open-source tools (VS Code, GitHub, Docker, PostgreSQL).`,
      textMl: `ടെക്നോളജിയിൽ താല്പര്യമുള്ളവർക്ക് കോഡിംഗ് ഇല്ലാതെ തുടങ്ങാൻ സാധിക്കുന്ന നോ-കോഡ് വെബ് ഡിസൈൻ, ക്യു.എ ടെസ്റ്റിംഗ് എന്നിവയും, ആഴത്തിൽ പഠിക്കാൻ താല്പര്യമുള്ളവർക്ക് പൈത്തൺ, വെബ് ഡെവലപ്‌മെന്റ് എന്നിവയും ലഭ്യമാണ്.`,
      timestamp: timeStr,
      sourceType: 'verified-knowledge-base',
      recommendedCareers: [
        {
          slug: 'no-code-website-designer',
          title: 'No-Code Website Designer',
          track: '60-days',
          matchScore: 93,
          reason: 'Build functional client websites using visual canvases without complex backend coding.'
        },
        {
          slug: 'manual-software-testing',
          title: 'Manual Software Testing & QA Assistant',
          track: '60-days',
          matchScore: 90,
          reason: 'Test websites and apps for bugs with zero prior coding required.'
        }
      ],
      suggestedAction: {
        label: 'Explore Technology Pathways',
        href: '/tracks/60-days'
      }
    };
  }

  // Default holistic recommendation based on profile
  return {
    id: `mentor-${Date.now()}`,
    sender: 'mentor',
    text: `I have analyzed your learner profile (${activeProfile.educationLevel}, ${activeProfile.englishProficiency} English, ${activeProfile.dailyCommitmentHours} hr/day).
Here is my personalized guidance:
1. Recommended Starting Pathway: Virtual Assistance or Basic Bookkeeping (30-day duration track). These offer the fastest time-to-income without educational prerequisites.
2. Verified Free Software: You will only need Google Workspace (Sheets, Docs) and free web tools.
3. Realistic Income: ₹18,000 to ₹30,000/month for beginner entry positions.
4. Next Practical Step: Take your Day 01 lesson and test yourself on your first workplace simulation.`,
    textMl: `താങ്കളുടെ പ്രൊഫൈൽ പ്രകാരം വെർച്വൽ അസിസ്റ്റന്റ് അല്ലെങ്കിൽ ബേസിക് ബുക്ക് കീപ്പിംഗ് ആണ് ഏറ്റവും അനുയോജ്യം. 30 ദിവസം കൊണ്ട് സൗജന്യ ടൂളുകൾ പഠിച്ച് പ്രൊഫഷണൽ രീതിയിൽ തുടങ്ങാം. അടുത്ത സ്റ്റെപ്പായി കോഴ്സ് പേജ് സന്ദർശിക്കുക.`,
    timestamp: timeStr,
    sourceType: 'verified-knowledge-base',
    recommendedCareers: [
      {
        slug: 'basic-bookkeeping',
        title: 'Basic Bookkeeping & Invoicing Assistant',
        track: '30-days',
        matchScore: 95,
        reason: 'Structured, logical and high local/Gulf market remote demand.'
      },
      {
        slug: 'virtual-assistant',
        title: 'Virtual Assistant',
        track: '30-days',
        matchScore: 94,
        reason: 'Flexible remote scheduling for beginners.'
      }
    ],
    suggestedAction: {
      label: 'Start 30-Day Foundation Pathway',
      href: '/tracks/30-days'
    }
  };
}
