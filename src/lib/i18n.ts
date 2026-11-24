'use client';

export type SupportedLanguage = 'en' | 'ml';

const STORAGE_KEYS = {
  PREF_LANG: 'cl_preferred_language',
  PREF_CURRENCY: 'cl_preferred_currency', // 'INR' | 'USD' | 'DUAL'
};

export const dictionary = {
  en: {
    siteTitle: 'Career Launchpad',
    tagline: 'From Zero Knowledge to Your First Career',
    findCareer: 'Find Your Career',
    exploreJobs: 'Explore Verified Jobs',
    simulator: 'Workplace Simulator',
    myBoard: 'My Board',
    interviewPrep: 'Interview Prep',
    antiScam: 'Anti-Scam Guide',
    ethicalPolicy: 'Ethical Standards',
    dashboard: 'My Dashboard',
    resumeBuilder: 'Resume Builder',
    applyNow: 'Apply on Employer Site',
    saveApplication: 'Track Application',
    verified: 'Verified Halal & Ethical',
    zeroFees: 'Zero Registration Fees',
    curriculum: 'Course Curriculum',
    duration: 'Duration',
    salaryBand: 'Entry Salary Band',
    freeNotice: '100% Free Training & Practice',
    disclaimer: 'Completion does not guarantee placement. Hiring depends on demonstrated skill and employer selection.'
  },
  ml: {
    siteTitle: 'കരിയർ ലോഞ്ച്പാഡ്',
    tagline: 'തുടക്കക്കാർക്കായി പൂജ്യത്തിൽ നിന്ന് പുതിയൊരു തൊഴിലിലേക്ക്',
    findCareer: 'അനുയോജ്യമായ തൊഴിൽ കണ്ടെത്തൂ',
    exploreJobs: 'സ്ഥിരീകരിച്ച തൊഴിലവസരങ്ങൾ',
    simulator: 'പ്രാക്ടിക്കൽ വർക്ക്പ്ലേസ് സിമുലേറ്റർ',
    myBoard: 'എന്റെ ആപ്ലിക്കേഷനുകൾ',
    interviewPrep: 'ഇന്റർവ്യൂ തയ്യാറെടുപ്പ്',
    antiScam: 'തൊഴിൽ തട്ടിപ്പ് പ്രതിരോധം',
    ethicalPolicy: 'ധാർമ്മിക തൊഴിൽ നയം',
    dashboard: 'ലേണർ ഡാഷ്‌ബോർഡ്',
    resumeBuilder: 'റെസ്യുമെ നിർമ്മാണം',
    applyNow: 'കമ്പനി വെബ്സൈറ്റിൽ അപേക്ഷിക്കൂ',
    saveApplication: 'ആപ്ലിക്കേഷൻ ട്രാക്ക് ചെയ്യുക',
    verified: '100% ഹലാലും ധാർമ്മികവുമായ തൊഴിൽ',
    zeroFees: 'ഫീസുകളോ ഡിപ്പോസിറ്റോ ഇല്ല',
    curriculum: 'പഠന പാഠ്യപദ്ധതി',
    duration: 'പഠന കാലാവധി',
    salaryBand: 'തുടക്ക ശമ്പള നിരക്ക്',
    freeNotice: 'സൗജന്യ പരിശീലനവും പ്രാക്ടീസും',
    disclaimer: 'പഠനം പൂർത്തിയാക്കുന്നത് നേരിട്ട് ജോലി ഉറപ്പുനൽകുന്നില്ല; യഥാർത്ഥ പ്രൊജക്റ്റുകളും അഭിമുഖ പ്രകടനവുമാണ് പ്രധാനം.'
  }
};

/**
 * Get active language
 */
export function getLanguage(): SupportedLanguage {
  if (typeof window === 'undefined') return 'en';
  try {
    const lang = localStorage.getItem(STORAGE_KEYS.PREF_LANG);
    return lang === 'ml' ? 'ml' : 'en';
  } catch {
    return 'en';
  }
}

/**
 * Set active language
 */
export function setLanguage(lang: SupportedLanguage): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEYS.PREF_LANG, lang);
}

/**
 * Format INR with Indian Comma System
 * e.g. 25000 -> "₹25,000"
 */
export function formatInr(amount: number): string {
  if (isNaN(amount)) return '₹0';
  return '₹' + amount.toLocaleString('en-IN');
}

/**
 * Dual Currency Display: INR + USD Equivalent (est. 1 USD = 85 INR)
 * e.g. 25000 -> "₹25,000 (~$295 USD)"
 */
export function formatDualCurrency(amountInr: number): string {
  if (isNaN(amountInr)) return '₹0';
  const usdEst = Math.round(amountInr / 85);
  return `₹${amountInr.toLocaleString('en-IN')} (~$${usdEst} USD)`;
}

/**
 * Salary Range Formatter
 */
export function formatSalaryRange(min: number, max: number, showUsd = false): string {
  if (showUsd) {
    const minUsd = Math.round(min / 85);
    const maxUsd = Math.round(max / 85);
    return `₹${min.toLocaleString('en-IN')} - ₹${max.toLocaleString('en-IN')} (~$${minUsd} - $${maxUsd} USD) / mo`;
  }
  return `₹${min.toLocaleString('en-IN')} - ₹${max.toLocaleString('en-IN')} / month`;
}

/**
 * Format Date to Indian Standard Time (IST)
 */
export function formatIstDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  } catch {
    return dateString;
  }
}
