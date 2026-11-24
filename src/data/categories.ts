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
    jobCountEstimate: 120,
    avgSalaryRange: '₹18,000 - ₹35,000 / mo'
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
    jobCountEstimate: 150,
    avgSalaryRange: '₹18,000 - ₹32,000 / mo'
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
    jobCountEstimate: 200,
    avgSalaryRange: '₹20,000 - ₹35,000 / mo'
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
    jobCountEstimate: 180,
    avgSalaryRange: '₹18,000 - ₹28,000 / mo'
  },
  {
    id: 'cat-5',
    slug: 'design-creative',
    name: 'Design & Visual Media',
    nameMl: 'ഡിസൈൻ & മീഡിയ',
    description: 'Brand graphics, UI/UX layouts, presentation decks, and ethical content creation.',
    descriptionMl: 'സോഷ്യൽ മീഡിയ പോസ്റ്ററുകൾ, പ്രസന്റേഷൻ ഡിസൈൻ, യുഐ/യുഎക്സ് ലേഔട്ടുകൾ.',
    iconName: 'Palette',
    color: '#8b5cf6',
    jobCountEstimate: 140,
    avgSalaryRange: '₹20,000 - ₹40,000 / mo'
  },
  {
    id: 'cat-6',
    slug: 'technology-automation',
    name: 'Technology, Web & Automation',
    nameMl: 'ടെക്നോളജി, വെബ് & ഓട്ടോമേഷൻ',
    description: 'No-code websites, software QA testing, workflow automation, and front-end development foundations.',
    descriptionMl: 'നോ-കോഡ് വെബ്സൈറ്റുകൾ, വെബ് മാനേജ്‌മെന്റ്, ഓട്ടോമേഷൻ പൈപ്പ്‌ലൈനുകൾ.',
    iconName: 'Code',
    color: '#059669',
    jobCountEstimate: 220,
    avgSalaryRange: '₹25,000 - ₹50,000 / mo'
  }
];
