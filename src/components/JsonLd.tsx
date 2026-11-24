import React from 'react';

export default function JsonLd() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://careerlaunchpad.org/#organization',
        'name': 'Career Launchpad',
        'url': 'https://careerlaunchpad.org',
        'logo': 'https://careerlaunchpad.org/favicon.ico',
        'description': 'Zero-knowledge career training and employment platform connecting structured 30 to 120-day learning, practical workplace simulations, and ethically audited jobs in Kerala and globally.',
        'sameAs': [
          'https://linkedin.com/company/career-launchpad',
          'https://github.com/career-launchpad'
        ],
        'contactPoint': {
          '@type': 'ContactPoint',
          'contactType': 'Customer Support & Career Guidance',
          'email': 'support@careerlaunchpad.org',
          'availableLanguage': ['English', 'Malayalam']
        }
      },
      {
        '@type': 'WebSite',
        '@id': 'https://careerlaunchpad.org/#website',
        'url': 'https://careerlaunchpad.org',
        'name': 'Career Launchpad',
        'description': 'From Zero Knowledge to Your First Career — Structured Training & Ethical Jobs',
        'publisher': {
          '@id': 'https://careerlaunchpad.org/#organization'
        },
        'potentialAction': {
          '@type': 'SearchAction',
          'target': 'https://careerlaunchpad.org/careers?q={search_term_string}',
          'query-input': 'required name=search_term_string'
        }
      },
      {
        '@type': 'EducationalOccupationalProgram',
        'name': '30-Day Practical Career Training Program',
        'description': 'Practical intensive training programs with hands-on simulated office tasks and zero upfront fees.',
        'provider': {
          '@id': 'https://careerlaunchpad.org/#organization'
        },
        'educationalCredentialAwarded': 'Verified Practical Competency Badge',
        'timeToComplete': 'P30D',
        'occupationalCategory': 'Operational Bookkeeping, Virtual Assistance, E-Commerce Operations, QA Testing'
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
