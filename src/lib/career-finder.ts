import { Career, CareerFinderCriteria, CareerRecommendation } from '@/types';
import { allCareers } from '@/data/careers';

export function calculateCareerMatches(criteria: CareerFinderCriteria): CareerRecommendation[] {
  const recommendations: CareerRecommendation[] = allCareers.map((career: Career) => {
    let score = 50; // Baseline
    const matchReasons: string[] = [];
    const unmetPrerequisites: string[] = [];

    // 1. Duration Track Match
    if (career.durationTrack === criteria.learningTime) {
      score += 25;
      matchReasons.push(`Matches your desired ${criteria.learningTime} learning timeline.`);
    } else {
      score -= 10;
    }

    // 2. Coding preference
    const techCareers = ['software-qa-tester', 'frontend-web-developer', 'wordpress-content-manager', 'python-data-analyst', 'cybersecurity-analyst', 'fullstack-engineer'];
    const isTechCareer = techCareers.some(slug => career.slug.includes(slug) || career.category === 'Technology & Development');

    if (criteria.codingPreference === 'No Coding') {
      if (isTechCareer && !career.slug.includes('wordpress')) {
        score -= 30;
        unmetPrerequisites.push('Requires learning programming logic or code syntax.');
      } else {
        score += 15;
        matchReasons.push('100% code-free role matching your preference.');
      }
    } else if (criteria.codingPreference === 'Wants to Code') {
      if (isTechCareer) {
        score += 25;
        matchReasons.push('Involves coding, web development or technical scripting.');
      }
    }

    // 3. Creative Preference
    const isCreative = career.category === 'Design & Creative' || career.slug.includes('canva') || career.slug.includes('video') || career.slug.includes('ui-ux');
    if (criteria.creativePreference === 'High' && isCreative) {
      score += 20;
      matchReasons.push('High visual creativity and design project focus.');
    } else if (criteria.creativePreference === 'Low / Business Focused' && isCreative) {
      score -= 15;
    }

    // 4. Remote & Employment Preference
    if (criteria.workPreference === 'Remote' && career.remotePotential === 'High') {
      score += 15;
      matchReasons.push('Exceptional remote work availability with global clients.');
    }

    // 5. English Level
    if (criteria.englishLevel === 'Basic') {
      if (career.slug.includes('chat') || career.slug.includes('market-research')) {
        unmetPrerequisites.push('Requires intermediate written business English for client interactions.');
      } else if (career.slug.includes('bookkeeping') || career.slug.includes('excel')) {
        score += 10;
        matchReasons.push('Success relies more on numerical accuracy and tool mastery than complex conversational English.');
      }
    }

    // 6. Ethical screening
    if (criteria.ethicalRequirement) {
      if (career.ethicalCompliance.status === 'Meets Criteria') {
        score += 10;
        matchReasons.push('100% ethically verified: halal-compliant and transparent.');
      }
    }

    // Clamp score between 10 and 99
    const finalScore = Math.min(99, Math.max(15, score));

    return {
      career,
      matchScore: finalScore,
      matchReasons,
      unmetPrerequisites
    };
  });

  // Sort by highest match score
  return recommendations.sort((a, b) => b.matchScore - a.matchScore);
}
