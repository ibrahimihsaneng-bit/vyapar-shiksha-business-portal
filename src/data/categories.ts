import { CareerCategory } from '@/types';

export const careerCategories: CareerCategory[] = [
  {
    id: 'cat-1',
    slug: 'finance-bookkeeping',
    name: 'Finance & Bookkeeping',
    nameMl: 'അക്കൗണ്ടിംഗ് & ഫിനാൻസ്',
    description: 'Practical spreadsheet and cloud software bookkeeping without complex financial engineering or interest-based modeling.',
    descriptionMl: 'സ്പ്രെഡ്ഷീറ്റുകളും ക്ലൗഡ് സോഫ്റ്റ്‌വെയറുകളും ഉപയോഗിച്ചുള്ള അടിസ്ഥാന ബുക്ക് കീപ്പിംഗ് ജോലികൾ.',
    iconName: 'Calculator',
    color: '#0284c7',
    jobCountEstimate: 140,
    avgSalaryRange: '₹18,000 - ₹38,000 / mo'
  },
  {
    id: 'cat-2',
    slug: 'ecommerce-operations',
    name: 'E-commerce & Store Operations',
    nameMl: 'ഇ-കൊമേഴ്‌സ് ഓപ്പറേഷൻസ്',
    description: 'Catalog management, inventory synchronization, order fulfillment, and digital shop maintenance.',
    descriptionMl: 'ഓൺലൈൻ സ്റ്റോറുകളിൽ പ്രൊഡക്റ്റ് ലിസ്റ്റിംഗ്, ഇൻവെന്ററി ട്രാക്കിംഗ്, ഓർഡർ പ്രോസസ്സിംഗ്.',
    iconName: 'ShoppingBag',
    color: '#0d9488',
    jobCountEstimate: 180,
    avgSalaryRange: '₹18,000 - ₹35,000 / mo'
  },
  {
    id: 'cat-3',
    slug: 'office-admin',
    name: 'Virtual Assistance & Office Admin',
    nameMl: 'വെർച്വൽ അസിസ്റ്റന്റ് & ഓഫീസ് അഡ്മിൻ',
    description: 'Executive remote support, calendar scheduling, data entry, CRM updates, and document processing.',
    descriptionMl: 'റിമോട്ട് ഓഫീസ് സഹായം, ഇമെയിൽ മാനേജ്‌മെന്റ്, ഷെഡ്യൂളിംഗ്, ഡാറ്റാ ഓർഗനൈസേഷൻ.',
    iconName: 'Briefcase',
    color: '#6366f1',
    jobCountEstimate: 240,
    avgSalaryRange: '₹20,000 - ₹38,000 / mo'
  },
  {
    id: 'cat-4',
    slug: 'customer-support',
    name: 'Customer Support & Chat',
    nameMl: 'കസ്റ്റമർ ചാറ്റ് & സപ്പോർട്ട്',
    description: 'Helpdesk ticketing, live web chat, WhatsApp support, and empathetic customer communication.',
    descriptionMl: 'വെബ്സൈറ്റ് ചാറ്റ്, വാട്സാപ്പ് സപ്പോർട്ട്, കസ്റ്റമർ സംശയ നിവാരണം.',
    iconName: 'MessageSquare',
    color: '#ea580c',
    jobCountEstimate: 210,
    avgSalaryRange: '₹18,000 - ₹30,000 / mo'
  },
  {
    id: 'cat-5',
    slug: 'human-resources',
    name: 'Human Resources & Talent Sourcing',
    nameMl: 'എച്ച്.ആർ & ടാലന്റ് റിക്രൂട്ട്മെന്റ്',
    description: 'Candidate screening, interview coordination, talent sourcing pipelines, and HR documentation.',
    descriptionMl: 'ഉദ്യോഗാർത്ഥികളെ കണ്ടെത്തൽ, റെസ്യൂമെ സ്ക്രീനിംഗ്, ഇന്റർവ്യൂ ഷെഡ്യൂളിംഗ്.',
    iconName: 'Users',
    color: '#ec4899',
    jobCountEstimate: 120,
    avgSalaryRange: '₹20,000 - ₹35,000 / mo'
  },
  {
    id: 'cat-6',
    slug: 'digital-marketing',
    name: 'Digital Marketing & SEO',
    nameMl: 'ഡിജിറ്റൽ മാർക്കറ്റിംഗ് & എസ്.ഇ.ഒ',
    description: 'Search engine optimization, email newsletters, ethical audience growth, and content distribution.',
    descriptionMl: 'സെർച്ച് എഞ്ചിൻ ഒപ്റ്റിമൈസേഷൻ, ഇമെയിൽ ക്യാമ്പെയ്നുകൾ, ഓർഗാനിക് റീച്ച് വളർത്തൽ.',
    iconName: 'TrendingUp',
    color: '#f59e0b',
    jobCountEstimate: 190,
    avgSalaryRange: '₹22,000 - ₹42,000 / mo'
  },
  {
    id: 'cat-7',
    slug: 'design-creative',
    name: 'Graphic Design & Brand Media',
    nameMl: 'ഗ്രാഫിക് ഡിസൈൻ & മീഡിയ',
    description: 'Brand graphics, Canva assets, UI/UX layouts, presentation decks, and ethical content creation.',
    descriptionMl: 'സോഷ്യൽ മീഡിയ പോസ്റ്ററുകൾ, പ്രസന്റേഷൻ ഡിസൈൻ, യുഐ/യുഎക്സ് ലേഔട്ടുകൾ.',
    iconName: 'Palette',
    color: '#8b5cf6',
    jobCountEstimate: 175,
    avgSalaryRange: '₹20,000 - ₹45,000 / mo'
  },
  {
    id: 'cat-8',
    slug: 'web-development',
    name: 'Web Development & No-Code',
    nameMl: 'വെബ് ഡെവലപ്‌മെന്റ് & നോ-കോഡ്',
    description: 'WordPress websites, Webflow/Framer landing pages, HTML/CSS/JS frontend, and modern web apps.',
    descriptionMl: 'വെബ്സൈറ്റ് നിർമ്മാണം, വേർഡ്പ്രസ്സ്, ഫ്രെയിമർ, ഫ്രണ്ട്-എൻഡ് ഡെവലപ്‌മെന്റ്.',
    iconName: 'Globe',
    color: '#10b981',
    jobCountEstimate: 260,
    avgSalaryRange: '₹25,000 - ₹55,000 / mo'
  },
  {
    id: 'cat-9',
    slug: 'software-testing',
    name: 'Software Testing & QA',
    nameMl: 'സോഫ്റ്റ്‌വെയർ ടെസ്റ്റിംഗ് & ക്വാളിറ്റി',
    description: 'Manual exploratory testing, bug reporting, test case authoring, and web application quality verification.',
    descriptionMl: 'ആപ്പുകളിലെ ബഗുകൾ കണ്ടെത്തൽ, ക്വാളിറ്റി ചെക്കിംഗ്, ടെസ്റ്റ് റിപ്പോർട്ടുകൾ തയാറാക്കൽ.',
    iconName: 'ShieldCheck',
    color: '#06b6d4',
    jobCountEstimate: 130,
    avgSalaryRange: '₹22,000 - ₹42,000 / mo'
  },
  {
    id: 'cat-10',
    slug: 'data-analytics',
    name: 'Data Analytics & Reporting',
    nameMl: 'ഡാറ്റാ അനലിറ്റിക്സ് & റിപ്പോർട്ടിംഗ്',
    description: 'SQL queries, Excel/Google Sheets modeling, Power BI interactive dashboards, and business telemetry.',
    descriptionMl: 'ഡാറ്റാ വിശകലനം, എക്സൽ ചാർട്ടുകൾ, പവർ ബിഐ ഡാഷ്‌ബോർഡുകൾ തയാറാക്കൽ.',
    iconName: 'BarChart3',
    color: '#3b82f6',
    jobCountEstimate: 220,
    avgSalaryRange: '₹25,000 - ₹55,000 / mo'
  },
  {
    id: 'cat-11',
    slug: '3d-engineering',
    name: '3D Design & Technical Drafting',
    nameMl: '3D ഡിസൈൻ & എൻജിനീയറിങ് ഡ്രാഫ്റ്റിംഗ്',
    description: 'Blender product visualization, architectural walkthroughs, and CAD/FreeCAD technical drawing.',
    descriptionMl: 'ബ്ലെൻഡർ 3D മോഡലിംഗ്, പ്രൊഡക്റ്റ് റെൻഡറിംഗ്, ആർക്കിടെക്ചറൽ ഡിസൈൻ.',
    iconName: 'Layers',
    color: '#a855f7',
    jobCountEstimate: 110,
    avgSalaryRange: '₹25,000 - ₹60,000 / mo'
  },
  {
    id: 'cat-12',
    slug: 'technology-automation',
    name: 'Business Automation & AI Ops',
    nameMl: 'ബിസിനസ് ഓട്ടോമേഷൻ & എ.ഐ ഒപ്സ്',
    description: 'No-code workflows (n8n, Make), Python scripting, API integrations, and AI prompt engineering operations.',
    descriptionMl: 'ഓട്ടോമേഷൻ ടൂളുകൾ, പൈത്തൺ സ്ക്രിപ്റ്റുകൾ, പ്രോസസ് ഓട്ടോമേഷൻ.',
    iconName: 'Cpu',
    color: '#059669',
    jobCountEstimate: 195,
    avgSalaryRange: '₹28,000 - ₹60,000 / mo'
  }
];
