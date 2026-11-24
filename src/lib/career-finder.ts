import { Career, CareerFinderCriteria, CareerRecommendation } from '@/types';
import { allCareers } from '@/data/careers';

export function calculateCareerMatches(criteria: CareerFinderCriteria): CareerRecommendation[] {
  const recommendations: CareerRecommendation[] = allCareers.map((career: Career) => {
    let score = 50; // Baseline
    const matchReasons: string[] = [];
    const unmetPrerequisites: string[] = [];
    const suggestedFoundationLessons: string[] = [];

    // 1. Duration Track Match
    const normTrack = career.durationTrack.replace('-days', '').replace('-day', '');
    const normCriteria = criteria.learningTime.replace('-days', '').replace('-day', '');
    if (normTrack === normCriteria) {
      score += 25;
      matchReasons.push(`Matches your targeted ${normCriteria}-day learning timeline.`);
    } else {
      const diff = Math.abs(parseInt(normTrack) - parseInt(normCriteria));
      if (diff <= 30) {
        score -= 5;
        matchReasons.push(`Slightly flexible: achievable within ~${normTrack} days.`);
      } else {
        score -= 20;
      }
    }

    // 2. Daily Study Hours
    if (criteria.dailyHours < 2 && (normTrack === '90' || normTrack === '120')) {
      score -= 15;
      unmetPrerequisites.push(`Requires 3-4 hours daily dedication for in-depth technical concepts.`);
      suggestedFoundationLessons.push('Time Management & Daily Study Habit Building');
    } else if (criteria.dailyHours >= 3) {
      score += 10;
      matchReasons.push('Your daily commitment allows accelerated practical hands-on project completion.');
    }

    // 3. Education Level
    if (criteria.educationLevel === 'School / 10th') {
      if (career.category === 'Technology & Development' || career.slug.includes('cybersecurity')) {
        score -= 10;
        unmetPrerequisites.push('May encounter employer preference for 12th/diploma for certain corporate tech positions.');
      } else {
        score += 10;
        matchReasons.push('100% skills-based entry: No formal college degree required.');
      }
    }

    // 4. Existing Knowledge
    if (criteria.existingKnowledge === 'Zero / Beginner') {
      if (career.durationTrack === '30-days' || career.durationTrack === '30-day') {
        score += 15;
        matchReasons.push('Designed ground-up for complete beginners with zero previous experience.');
      } else {
        suggestedFoundationLessons.push('Computer Basics & Windows File System Navigation');
        suggestedFoundationLessons.push('Touch Typing & Keyboard Speed (Goal: 30+ WPM)');
      }
    } else if (criteria.existingKnowledge === 'Office & Spreadsheets') {
      if (career.category === 'Finance & Administration' || career.category === 'Data & Analytics') {
        score += 20;
        matchReasons.push('Directly leverages your existing spreadsheet and office documentation familiarity.');
      }
    } else if (criteria.existingKnowledge === 'Some Technical / Coding') {
      if (career.category === 'Technology & Development') {
        score += 25;
        matchReasons.push('Accelerates your transition into software testing and web development.');
      }
    }

    // 5. English Proficiency
    if (criteria.englishLevel === 'Basic') {
      if (career.slug.includes('chat') || career.slug.includes('market-research') || career.slug.includes('virtual-assistant')) {
        score -= 15;
        unmetPrerequisites.push('Requires intermediate conversational English for direct client communications.');
        suggestedFoundationLessons.push('Business Email Etiquette & Professional Customer Communication');
      } else if (career.slug.includes('bookkeeping') || career.slug.includes('excel') || career.slug.includes('document')) {
        score += 15;
        matchReasons.push('Numerical accuracy and tool execution matter more than complex conversational English.');
      }
    } else if (criteria.englishLevel === 'Fluent') {
      score += 10;
      matchReasons.push('Qualifies you for premium international remote clients across the US, UK, and UAE.');
    }

    // 6. Computer Availability
    if (criteria.computerAvailability === 'Smartphone Only') {
      if (career.category === 'Technology & Development' || career.slug.includes('excel') || career.slug.includes('video')) {
        score -= 30;
        unmetPrerequisites.push('Requires a physical laptop or desktop computer with mouse for software operation.');
        suggestedFoundationLessons.push('Access a Shared Desktop / Local Cyber Cafe for Practical Labs');
      } else {
        score += 5;
        suggestedFoundationLessons.push('Theory & Mobile-Accessible Video Modules First');
      }
    } else if (criteria.computerAvailability === 'Dedicated High-End PC') {
      if (career.slug.includes('video') || career.category === 'Technology & Development') {
        score += 15;
        matchReasons.push('Your hardware meets the rendering/development specifications with ease.');
      }
    }

    // 7. Technical & Coding Interests
    const isTechCareer = career.category === 'Technology & Development' || career.slug.includes('qa') || career.slug.includes('web') || career.slug.includes('python');
    if (criteria.codingPreference === 'No Coding' || criteria.technicalInterests === 'No Technical') {
      if (isTechCareer && !career.slug.includes('wordpress')) {
        score -= 35;
        unmetPrerequisites.push('Involves code syntax and logic structures which contradict your preference.');
      } else {
        score += 15;
        matchReasons.push('100% code-free workflow utilizing intuitive graphical software.');
      }
    } else if (criteria.codingPreference === 'Wants to Code' || criteria.technicalInterests === 'Web & Automation') {
      if (isTechCareer) {
        score += 30;
        matchReasons.push('Provides high-demand programming, test automation, and web application skills.');
      }
    } else if (criteria.technicalInterests === 'Spreadsheets & Data') {
      if (career.slug.includes('excel') || career.slug.includes('bookkeeping') || career.slug.includes('crm') || career.category === 'Data & Analytics') {
        score += 25;
        matchReasons.push('Matches your passion for structured numbers, formulas, and databases.');
      }
    }

    // 8. Creative Interests
    const isCreative = career.category === 'Design & Creative' || career.slug.includes('canva') || career.slug.includes('video') || career.slug.includes('ui-ux');
    if (criteria.creativeInterests === 'Graphic Design & Branding' || criteria.creativeInterests === 'Video Editing & Motion') {
      if (isCreative) {
        score += 25;
        matchReasons.push('Directly channels visual storytelling, layout design, and digital media production.');
      }
    } else if (criteria.creativeInterests === 'None / Business Operations' && isCreative) {
      score -= 20;
    }

    // 9. Remote Work Potential
    if (criteria.workPreference === 'Remote' && (career.remotePotential === 'High' || career.remoteOpportunities.toLowerCase().includes('high') || career.remoteOpportunities.toLowerCase().includes('remote'))) {
      score += 15;
      matchReasons.push('Excellent remote work availability with global employers and freelance clients.');
    }

    // 10. Part-time / Freelance Availability
    if (criteria.partTimeAvailability === 'Part-Time / Freelance' || criteria.employmentType === 'Freelance') {
      if (career.slug.includes('canva') || career.slug.includes('virtual-assistant') || career.slug.includes('bookkeeping') || career.slug.includes('wordpress')) {
        score += 15;
        matchReasons.push('Highly suitable for flexible freelance gigs and hourly retainers.');
      }
    }

    // 11. Income Expectations
    if (criteria.incomeExpectation === 'Entry ₹15k-₹25k') {
      if (career.salaryRangeInr.entryMin <= 20000) {
        score += 10;
        matchReasons.push('Realistic, achievable entry-level compensation matching your financial target.');
      }
    } else if (criteria.incomeExpectation === 'High ₹50k+') {
      if (career.salaryRangeInr.entryMax >= 40000 || isTechCareer) {
        score += 15;
        matchReasons.push('Strong career trajectory reaching ₹50,000+ within 12-18 months of real experience.');
      } else {
        score -= 10;
        unmetPrerequisites.push('Typical fresher salary in this domain starts at ₹18,000 - ₹28,000 before bonuses.');
      }
    }

    // 12. Ethical Compliance Filter
    if (criteria.ethicalRequirement) {
      if (career.ethicalCompliance.status === 'Meets Criteria' || career.ethicalConsiderations?.status === 'Meets Criteria') {
        score += 10;
        matchReasons.push('Strictly halal-compliant and audited: 100% free of gambling, usury (Riba), and deception.');
      } else {
        score -= 50; // Heavy penalty if ethical filter is requested
      }
    }

    // Ensure default suggested foundation lessons if empty
    if (suggestedFoundationLessons.length === 0) {
      suggestedFoundationLessons.push('Professional Google Drive & Cloud File Management');
      suggestedFoundationLessons.push('Workplace Communication & Time Tracking Etiquette');
    }

    // Clamp score between 15 and 99
    const finalScore = Math.min(99, Math.max(15, score));

    return {
      career,
      matchScore: finalScore,
      matchReasons,
      unmetPrerequisites,
      suggestedFoundationLessons
    };
  });

  // Sort by highest match score
  return recommendations.sort((a, b) => b.matchScore - a.matchScore);
}
