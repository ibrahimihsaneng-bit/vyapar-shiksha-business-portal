export interface CareerIntelligenceRecord {
  rank: number;
  slug: string;
  title: string;
  titleMl: string;
  durationTrack: '30-days' | '60-days' | '90-days' | '120-days';
  category: string;
  accessibilityScore: number; // 1-10 (10 = absolute zero-knowledge beginner friendly)
  requiredLearningHours: number;
  entryDemandRating: 'High' | 'Very High' | 'Moderate';
  remotePotential: 'High' | 'Medium' | 'Low';
  partTimeFeasibility: 'High' | 'Medium' | 'Low';
  minEducationRequirement: string;
  competitionLevel: 'Low' | 'Moderate' | 'High';
  englishRequirement: 'Basic Functional' | 'Intermediate Written' | 'Fluent Professional';
  softwareCostMonthly: string;
  equipmentProfile: string;
  growthCeiling3YearInr: string;
  ethicalIntegrityRating: '100% Halal Verified' | 'Screened & Monitored';
  scamRiskScore: 'Zero (Standard Corporate)' | 'Low (Verify Upwork/Direct)';
  compositeScore: number; // 0-100 index
  keyStrengths: string[];
  watchoutsForBeginners: string[];
  sources: Array<{ name: string; report: string; url: string }>;
}

export const careerPriorityIntelligence: CareerIntelligenceRecord[] = [
  {
    rank: 1,
    slug: 'bookkeeping-invoicing',
    title: 'Basic Bookkeeping & Invoicing Assistant',
    titleMl: 'അടിസ്ഥാന ബുക്ക് കീപ്പിംഗ് & ഇൻവോയ്സിംഗ് അസിസ്റ്റന്റ്',
    durationTrack: '30-days',
    category: 'Finance & Bookkeeping',
    accessibilityScore: 9.5,
    requiredLearningHours: 60,
    entryDemandRating: 'Very High',
    remotePotential: 'High',
    partTimeFeasibility: 'High',
    minEducationRequirement: '10th / 12th standard (No B.Com mandatory for entry assistant roles)',
    competitionLevel: 'Moderate',
    englishRequirement: 'Basic Functional',
    softwareCostMonthly: '₹0 (Zoho Books Free tier & Google Sheets)',
    equipmentProfile: 'Basic Laptop / Desktop (Intel i3 / 4GB RAM)',
    growthCeiling3YearInr: '₹35,000 - ₹55,000 / mo (Cloud Accountant / Tax Assistant)',
    ethicalIntegrityRating: '100% Halal Verified',
    scamRiskScore: 'Zero (Standard Corporate)',
    compositeScore: 94,
    keyStrengths: [
      'Universal business necessity in India, Gulf, and Western remote firms',
      'No complex math required—software and spreadsheets handle calculations',
      'High freelance retention; small business clients pay monthly retainers'
    ],
    watchoutsForBeginners: [
      'Must maintain strict attention to detail when typing numbers and GSTINs',
      'Never accept jobs managing interest-based lending records or debt collection'
    ],
    sources: [
      { name: 'AmbitionBox India 2024', report: 'Accounts Assistant & Invoicing Salary Survey', url: 'https://www.ambitionbox.com' },
      { name: 'Naukri Gulf Hiring Index', report: 'SME Accounting & Tally/Zoho Demand', url: 'https://www.naukri.com' }
    ]
  },
  {
    rank: 2,
    slug: 'ecommerce-operations',
    title: 'E-commerce Catalog & Store Operations Associate',
    titleMl: 'ഇ-കൊമേഴ്‌സ് കാറ്റലോഗ് & സ്റ്റോർ ഓപ്പറേഷൻസ് അസോസിയേറ്റ്',
    durationTrack: '30-days',
    category: 'E-commerce & Store Operations',
    accessibilityScore: 9.3,
    requiredLearningHours: 60,
    entryDemandRating: 'Very High',
    remotePotential: 'High',
    partTimeFeasibility: 'High',
    minEducationRequirement: '10th / 12th standard (Zero college degree needed)',
    competitionLevel: 'Moderate',
    englishRequirement: 'Basic Functional',
    softwareCostMonthly: '₹0 (Shopify Partner Free Sandbox, Canva Free)',
    equipmentProfile: 'Basic Laptop / PC (4GB RAM, reliable internet)',
    growthCeiling3YearInr: '₹40,000 - ₹65,000 / mo (E-commerce Store Manager / Marketplace Lead)',
    ethicalIntegrityRating: '100% Halal Verified',
    scamRiskScore: 'Low (Verify Upwork/Direct)',
    compositeScore: 92,
    keyStrengths: [
      'Direct revenue generation role for D2C brands and Amazon/Flipkart sellers',
      'Visual, practical work that is easy to demonstrate via test stores',
      'High demand among Gulf retail brands launching regional online stores'
    ],
    watchoutsForBeginners: [
      'Screen products to avoid un-Islamic or prohibited goods (alcohol, gambling items)',
      'Watch for drop-shipping scams that ask operators to handle personal funds'
    ],
    sources: [
      { name: 'Indeed Hiring Insights', report: 'D2C E-commerce Operations Associate Report', url: 'https://www.indeed.com' },
      { name: 'Shopify Ecosystem Insights', report: 'Independent Partner Store Assistants Growth', url: 'https://www.shopify.com' }
    ]
  },
  {
    rank: 3,
    slug: 'excel-data-management',
    title: 'Excel & Data Management Associate',
    titleMl: 'എക്സൽ & ഡാറ്റാ മാനേജ്‌മെന്റ് അസോസിയേറ്റ്',
    durationTrack: '30-days',
    category: 'Finance & Bookkeeping',
    accessibilityScore: 9.1,
    requiredLearningHours: 60,
    entryDemandRating: 'Very High',
    remotePotential: 'High',
    partTimeFeasibility: 'High',
    minEducationRequirement: '10th / 12th standard (Complete beginner friendly)',
    competitionLevel: 'Moderate',
    englishRequirement: 'Basic Functional',
    softwareCostMonthly: '₹0 (Google Sheets Free, MS Office Web Free)',
    equipmentProfile: 'Basic Laptop / Desktop (4GB RAM)',
    growthCeiling3YearInr: '₹35,000 - ₹60,000 / mo (MIS Executive / Reporting Analyst)',
    ethicalIntegrityRating: '100% Halal Verified',
    scamRiskScore: 'Zero (Standard Corporate)',
    compositeScore: 91,
    keyStrengths: [
      'Transferable across healthcare, schools, logistics, wholesale, and startups',
      'Formulas (XLOOKUP, SUMIFS, Pivot Tables) are quick to learn with daily practice',
      'Strongest foundation for progressing later to Power BI and SQL'
    ],
    watchoutsForBeginners: [
      'Distinguish genuine data operations from fraudulent "typing and data entry deposit" scams',
      'Never pay anyone upfront for data entry assignments'
    ],
    sources: [
      { name: 'LinkedIn Economic Graph', report: 'Spreadsheet Literacy in Emerging Remote Roles', url: 'https://economicgraph.linkedin.com' },
      { name: 'Glassdoor India', report: 'MIS & Excel Associate Benchmark', url: 'https://www.glassdoor.co.in' }
    ]
  },
  {
    rank: 4,
    slug: 'customer-chat-support',
    title: 'Customer Chat & Live Helpdesk Specialist',
    titleMl: 'കസ്റ്റമർ ചാറ്റ് & ലൈവ് ഹെൽപ്പ്ഡെസ്ക് സ്പെഷ്യലിസ്റ്റ്',
    durationTrack: '30-days',
    category: 'Customer Support & Chat',
    accessibilityScore: 9.0,
    requiredLearningHours: 55,
    entryDemandRating: 'Very High',
    remotePotential: 'High',
    partTimeFeasibility: 'High',
    minEducationRequirement: '12th standard or graduation in any discipline',
    competitionLevel: 'Moderate',
    englishRequirement: 'Intermediate Written',
    softwareCostMonthly: '₹0 (Crisp, Tawk.to, Zendesk Free trials)',
    equipmentProfile: 'Laptop with 8GB RAM + good headset & stable broadband',
    growthCeiling3YearInr: '₹30,000 - ₹50,000 / mo (Support Lead / Customer Success Manager)',
    ethicalIntegrityRating: '100% Halal Verified',
    scamRiskScore: 'Low (Verify Upwork/Direct)',
    compositeScore: 89,
    keyStrengths: [
      'Huge shift toward text, chat, and WhatsApp support away from cold voice calls',
      'Immediate availability of evening and weekend flexible shifts',
      'Empathetic listening and problem-solving skills valued above technical pedigree'
    ],
    watchoutsForBeginners: [
      'Avoid crypto exchanges, binary options apps, and betting platforms',
      'Focus on SaaS, healthcare, and educational helpdesk opportunities'
    ],
    sources: [
      { name: 'Zendesk CX Trends 2024', report: 'Messaging & Chat Support Expansion', url: 'https://www.zendesk.com' },
      { name: 'Naukri Remote Jobs', report: 'Customer Support Chat Executive Index', url: 'https://www.naukri.com' }
    ]
  },
  {
    rank: 5,
    slug: 'virtual-assistant',
    title: 'Remote Executive Virtual Assistant',
    titleMl: 'റിമോട്ട് എക്സിക്യൂട്ടീവ് വെർച്വൽ അസിസ്റ്റന്റ്',
    durationTrack: '30-days',
    category: 'Virtual Assistance & Office Admin',
    accessibilityScore: 8.8,
    requiredLearningHours: 60,
    entryDemandRating: 'High',
    remotePotential: 'High',
    partTimeFeasibility: 'High',
    minEducationRequirement: '12th standard or any degree',
    competitionLevel: 'Moderate',
    englishRequirement: 'Intermediate Written',
    softwareCostMonthly: '₹0 (Google Workspace free personal, Notion free, Clockify)',
    equipmentProfile: 'Standard Laptop (8GB RAM recommended)',
    growthCeiling3YearInr: '₹40,000 - ₹70,000 / mo (Chief of Staff / Operations Manager)',
    ethicalIntegrityRating: '100% Halal Verified',
    scamRiskScore: 'Low (Verify Upwork/Direct)',
    compositeScore: 88,
    keyStrengths: [
      'Direct 1-on-1 collaboration with founders, doctors, consultants, and creators',
      'Broad skill variety: calendar scheduling, inbox triage, travel planning, research',
      'High hourly rates on Upwork ($8 - $20/hr) once initial 5-star reviews land'
    ],
    watchoutsForBeginners: [
      'Client time zones require schedule flexibility (e.g. US or UK working hours)',
      'Establish clear boundaries regarding personal errands and tasks'
    ],
    sources: [
      { name: 'Upwork Skills Index 2024', report: 'Virtual Assistant & Executive Admin Trends', url: 'https://www.upwork.com' },
      { name: 'Payscale India', report: 'Executive Assistant Remote Compensation', url: 'https://www.payscale.com' }
    ]
  },
  {
    rank: 6,
    slug: 'canva-graphic-design',
    title: 'Canva Graphic & Social Media Design Specialist',
    titleMl: 'കാൻവാ ഗ്രാഫിക് & സോഷ്യൽ മീഡിയ ഡിസൈൻ സ്പെഷ്യലിസ്റ്റ്',
    durationTrack: '30-days',
    category: 'Design & Visual Media',
    accessibilityScore: 9.4,
    requiredLearningHours: 50,
    entryDemandRating: 'High',
    remotePotential: 'High',
    partTimeFeasibility: 'High',
    minEducationRequirement: 'No formal educational requirement',
    competitionLevel: 'High',
    englishRequirement: 'Basic Functional',
    softwareCostMonthly: '₹0 (Canva Free Tier)',
    equipmentProfile: 'Basic PC / Laptop / iPad',
    growthCeiling3YearInr: '₹30,000 - ₹55,000 / mo (Brand Designer / Creative Lead)',
    ethicalIntegrityRating: '100% Halal Verified',
    scamRiskScore: 'Zero (Standard Corporate)',
    compositeScore: 87,
    keyStrengths: [
      'Lowest software learning curve; productive from Day 1',
      'Local Kerala shops, clinics, institutes constantly need festival and promotional posters',
      'Visual portfolio is straightforward to assemble in 2 weeks'
    ],
    watchoutsForBeginners: [
      'High competition from generic template users; must learn typography and color harmony',
      'Prohibit design of un-Islamic imagery, club promotions, or usurious loan ads'
    ],
    sources: [
      { name: 'Canva Creator Report 2024', report: 'Visual Workplaces and Template Adoption', url: 'https://www.canva.com' },
      { name: 'AmbitionBox Graphic Designer', report: 'Junior Digital Designer Salary Range', url: 'https://www.ambitionbox.com' }
    ]
  },
  {
    rank: 7,
    slug: 'wordpress-content-management',
    title: 'WordPress Content & Web Management Associate',
    titleMl: 'വേർഡ്പ്രസ്സ് കണ്ടന്റ് & വെബ് മാനേജ്‌മെന്റ് അസോസിയേറ്റ്',
    durationTrack: '30-days',
    category: 'Technology, Web & Automation',
    accessibilityScore: 8.6,
    requiredLearningHours: 65,
    entryDemandRating: 'High',
    remotePotential: 'High',
    partTimeFeasibility: 'High',
    minEducationRequirement: '12th standard or graduation',
    competitionLevel: 'Moderate',
    englishRequirement: 'Basic Functional',
    softwareCostMonthly: '₹0 (LocalWP Free, WordPress.org Free)',
    equipmentProfile: 'Laptop with 8GB RAM + Chrome browser',
    growthCeiling3YearInr: '₹35,000 - ₹65,000 / mo (CMS Lead / Web Operations Specialist)',
    ethicalIntegrityRating: '100% Halal Verified',
    scamRiskScore: 'Zero (Standard Corporate)',
    compositeScore: 86,
    keyStrengths: [
      'Over 40% of the entire internet is powered by WordPress',
      'Routine maintenance, blog publishing, plugin updates, and SEO tags are easy to master',
      'Stepping stone toward No-Code Web Design and Frontend Development'
    ],
    watchoutsForBeginners: [
      'Always test updates on staging environments or local copies to prevent site crashes',
      'Avoid unvetted pirated/nulled plugins that carry security malware'
    ],
    sources: [
      { name: 'W3Techs Web Technology Survey', report: 'CMS Market Share Analysis', url: 'https://w3techs.com' },
      { name: 'Naukri Web Content Executive', report: 'WordPress Operator Salaries India', url: 'https://www.naukri.com' }
    ]
  },
  {
    rank: 8,
    slug: 'crm-data-management',
    title: 'CRM Data Operations & Pipeline Associate',
    titleMl: 'സിആർഎം ഡാറ്റാ ഓപ്പറേഷൻസ് & പൈപ്പ്‌ലൈൻ അസോസിയേറ്റ്',
    durationTrack: '30-days',
    category: 'Virtual Assistance & Office Admin',
    accessibilityScore: 8.7,
    requiredLearningHours: 55,
    entryDemandRating: 'High',
    remotePotential: 'High',
    partTimeFeasibility: 'Medium',
    minEducationRequirement: '12th standard or any degree',
    competitionLevel: 'Moderate',
    englishRequirement: 'Basic Functional',
    softwareCostMonthly: '₹0 (HubSpot Free CRM, Zoho CRM Free tier)',
    equipmentProfile: 'Standard Laptop (4GB - 8GB RAM)',
    growthCeiling3YearInr: '₹35,000 - ₹60,000 / mo (Revenue Operations / CRM Administrator)',
    ethicalIntegrityRating: '100% Halal Verified',
    scamRiskScore: 'Zero (Standard Corporate)',
    compositeScore: 85,
    keyStrengths: [
      'Companies invest heavily in CRM (HubSpot/Zoho) and need clean data entry',
      'Clear structured tasks: deduplication, contact enrichment, pipeline stage tags',
      'High retention as sales teams rely daily on clean CRM data'
    ],
    watchoutsForBeginners: [
      'Maintain strict confidentiality regarding client telephone numbers and company revenue',
      'Respect GDPR and Indian DPDP privacy regulations'
    ],
    sources: [
      { name: 'HubSpot State of Sales 2024', report: 'CRM Data Integrity Benchmark', url: 'https://www.hubspot.com' },
      { name: 'Glassdoor CRM Associate', report: 'Compensation and Hiring Trends', url: 'https://www.glassdoor.co.in' }
    ]
  },
  {
    rank: 9,
    slug: 'document-formatting',
    title: 'Document Formatting & Publishing Specialist',
    titleMl: 'ഡോക്യുമെന്റ് ഫോർമാറ്റിംഗ് & പബ്ലിഷിംഗ് സ്പെഷ്യലിസ്റ്റ്',
    durationTrack: '30-days',
    category: 'Virtual Assistance & Office Admin',
    accessibilityScore: 9.3,
    requiredLearningHours: 45,
    entryDemandRating: 'Moderate',
    remotePotential: 'High',
    partTimeFeasibility: 'High',
    minEducationRequirement: '10th / 12th standard',
    competitionLevel: 'Low',
    englishRequirement: 'Basic Functional',
    softwareCostMonthly: '₹0 (Google Docs, LibreOffice, Canva Free)',
    equipmentProfile: 'Basic PC / Laptop',
    growthCeiling3YearInr: '₹28,000 - ₹48,000 / mo (Publishing Coordinator / Executive Secretary)',
    ethicalIntegrityRating: '100% Halal Verified',
    scamRiskScore: 'Zero (Standard Corporate)',
    compositeScore: 83,
    keyStrengths: [
      'Huge demand among academic researchers, legal firms, training institutes, and authors',
      'Focuses on professional layout, styles, table of contents, pagination, and clean PDFs',
      'Very low competition because many overlook document styling as a specialized skill'
    ],
    watchoutsForBeginners: [
      'Avoid academic ghostwriting services that cheat exam or thesis integrity standards',
      'Limit work strictly to formatting, proof layout, and document standardization'
    ],
    sources: [
      { name: 'Upwork Admin Report', report: 'Document Formatting & Layout Trends', url: 'https://www.upwork.com' },
      { name: 'Indeed Office Admin', report: 'Document Specialist Salary Indices', url: 'https://www.indeed.com' }
    ]
  },
  {
    rank: 10,
    slug: 'web-research-assistance',
    title: 'Web & Market Research Associate',
    titleMl: 'വെബ് & മാർക്കറ്റ് റിസർച്ച് അസോസിയേറ്റ്',
    durationTrack: '30-days',
    category: 'Virtual Assistance & Office Admin',
    accessibilityScore: 8.9,
    requiredLearningHours: 50,
    entryDemandRating: 'High',
    remotePotential: 'High',
    partTimeFeasibility: 'High',
    minEducationRequirement: '12th standard or any degree',
    competitionLevel: 'Moderate',
    englishRequirement: 'Intermediate Written',
    softwareCostMonthly: '₹0 (Google Search Operators, Google Sheets, LinkedIn Free)',
    equipmentProfile: 'Standard Laptop (4GB - 8GB RAM)',
    growthCeiling3YearInr: '₹35,000 - ₹55,000 / mo (Lead Gen Specialist / Market Intelligence Lead)',
    ethicalIntegrityRating: '100% Halal Verified',
    scamRiskScore: 'Low (Verify Upwork/Direct)',
    compositeScore: 82,
    keyStrengths: [
      'Essential for B2B sales development reps, consulting firms, and procurement teams',
      'Teaches advanced Google Boolean search operators and verified directory mining',
      'Output is delivered cleanly via structured spreadsheets and summary briefs'
    ],
    watchoutsForBeginners: [
      'Never engage in illegal web scraping of personal password-protected directories',
      'Verify company data directly from official corporate registries (MCA, SEC, Dun & Bradstreet)'
    ],
    sources: [
      { name: 'LinkedIn Sales Navigator Report', report: 'Lead Generation and Account Research Index', url: 'https://www.linkedin.com' },
      { name: 'AmbitionBox Research Associate', report: 'Market Research Associate Comp', url: 'https://www.ambitionbox.com' }
    ]
  }
];

export function getCareerIntelligenceBySlug(slug: string): CareerIntelligenceRecord | undefined {
  return careerPriorityIntelligence.find(c => c.slug === slug);
}
