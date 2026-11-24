export interface RoadmapPhase {
  phaseNumber: number;
  title: string;
  titleMl: string;
  durationLabel: string;
  keyTopics: string[];
  handsOnDeliverable: string;
  recommendedTools: string[];
  freeLearningLink: { title: string; url: string };
}

export interface CareerRoadmap {
  careerSlug: string;
  phases: RoadmapPhase[];
  zeroKnowledgeOrientation: {
    meaning: string;
    meaningMl: string;
    whyBusinessesHire: string;
    firstSoftwareStep: string;
    firstPracticalTask: string;
    commonBeginnerMistakes: string[];
    workplaceCommunicationTip: string;
  };
}

export const careerRoadmaps: Record<string, CareerRoadmap> = {
  // 60-Day Track Exemplars
  'cloud-bookkeeping': {
    careerSlug: 'cloud-bookkeeping',
    zeroKnowledgeOrientation: {
      meaning: 'Cloud bookkeepers manage daily business transactions, vendor bills, and bank accounts over the internet using software like QuickBooks Online or Xero instead of desktop spreadsheets.',
      meaningMl: 'ഓൺലൈൻ സോഫ്റ്റ്‌വെയറുകൾ (ക്വിക്ക്ബുക്ക്സ്, സീറോ) ഉപയോഗിച്ച് ഇന്റർനെറ്റ് വഴി കമ്പനികളുടെ വരവ്-ചെലവുകളും ബാങ്ക് അക്കൗണ്ടുകളും നിയന്ത്രിക്കുന്ന ജോലി.',
      whyBusinessesHire: 'Remote business owners in the US, UK, and UAE need real-time cashflow visibility without hiring an expensive in-house certified accountant.',
      firstSoftwareStep: 'Create a free test sandbox account on QuickBooks Online Test Drive (qbo.intuit.com/redir/testdrive) or Zoho Books Free.',
      firstPracticalTask: 'Import a sample 20-row CSV bank feed and match 5 customer payments to unpaid invoices.',
      commonBeginnerMistakes: [
        'Categorizing credit card payments as business revenue instead of balance transfers',
        'Failing to verify closing balances against the physical bank PDF statement'
      ],
      workplaceCommunicationTip: 'Send weekly balance summaries every Monday by 10 AM showing Uncleared Checks, Overdue Receivables, and Total Cash in Bank.'
    },
    phases: [
      {
        phaseNumber: 1,
        title: 'Cloud Accounting Architecture & Chart of Accounts',
        titleMl: 'ക്ലൗഡ് അക്കൗണ്ടിംഗ് അടിസ്ഥാന തത്വങ്ങൾ',
        durationLabel: 'Weeks 1 - 2 (Days 1 - 15)',
        keyTopics: ['QBO vs Xero interface', 'Standard Chart of Accounts (COA)', 'Tax slab settings & bank feeds'],
        handsOnDeliverable: 'Fully configured sandbox company with custom COA and 10 opening customer/vendor profiles.',
        recommendedTools: ['QuickBooks Online Sandbox', 'Zoho Books', 'Google Sheets'],
        freeLearningLink: { title: 'Intuit ProAdvisor Free Certification', url: 'https://quickbooks.intuit.com/accountants/training-certification/' }
      },
      {
        phaseNumber: 2,
        title: 'Automated Bank Feeds & Rules Engine',
        titleMl: 'ഓട്ടോമേറ്റഡ് ബാങ്ക് ഫീഡുകളും റൂളുകളും',
        durationLabel: 'Weeks 3 - 4 (Days 16 - 30)',
        keyTopics: ['Bank feed synchronization', 'Creating automated categorization rules', 'Multi-line split transactions'],
        handsOnDeliverable: 'Automated bank rule library categorizing recurring monthly utility bills and merchant card fees.',
        recommendedTools: ['QBO Bank Feeds', 'Excel CSV Cleaner'],
        freeLearningLink: { title: 'QBO Bank Feeds Official Tutorial', url: 'https://quickbooks.intuit.com/learn-support/' }
      },
      {
        phaseNumber: 3,
        title: 'Accounts Payable, Receivable & Multi-Currency',
        titleMl: 'എ/പി, എ/ആർ & ഫോറിൻ കറൻസി',
        durationLabel: 'Weeks 5 - 6 (Days 31 - 45)',
        keyTopics: ['Accounts Payable Aging reports', 'Accounts Receivable automated payment reminders', 'Currency gain/loss tracking'],
        handsOnDeliverable: 'Reconciled 1-month ledger with 25 customer invoices and 15 vendor payments in USD and EUR.',
        recommendedTools: ['Zoho Books', 'QuickBooks Online'],
        freeLearningLink: { title: 'Accounts Receivable & Payable Best Practices', url: 'https://www.investopedia.com/terms/a/accountsreceivable.asp' }
      },
      {
        phaseNumber: 4,
        title: 'Month-End Reconciliation, Financial Pack & Launch',
        titleMl: 'മന്ത്-എൻഡ് റീകൺസിലിയേഷൻ & കരിയർ ലോഞ്ച്',
        durationLabel: 'Weeks 7 - 8 (Days 46 - 60)',
        keyTopics: ['Month-end balance sheet reconciliation', 'Profit & Loss variance analysis', 'Upwork & LinkedIn profile optimization'],
        handsOnDeliverable: 'Complete 3-statement financial dossier and Intuit ProAdvisor / Zoho Books certification badge.',
        recommendedTools: ['Canva Portfolio', 'QBO Certification Portal'],
        freeLearningLink: { title: 'Upwork Cloud Bookkeeping Blueprint', url: 'https://www.upwork.com/freelance-jobs/bookkeeping/' }
      }
    ]
  },
  'nocode-website-design': {
    careerSlug: 'nocode-website-design',
    zeroKnowledgeOrientation: {
      meaning: 'No-Code Web Designers build modern, fully functional, responsive websites using visual canvas builders like Webflow, Framer, and WordPress Elementor without writing raw programming code.',
      meaningMl: 'കോഡിംഗ് അറിയാതെ തന്നെ ഫ്രെയിമർ, വെബ്‌ഫ്ലോ തുടങ്ങിയ വിഷ്വൽ ടൂളുകൾ ഉപയോഗിച്ച് മനോഹരമായ വെബ്സൈറ്റുകൾ നിർമ്മിക്കുന്ന ജോലി.',
      whyBusinessesHire: 'Small businesses and startups need custom, fast-loading, mobile-friendly landing pages built in days rather than waiting months for software engineers.',
      firstSoftwareStep: 'Create a free personal account on Framer.com or Webflow.com and open a blank starter canvas.',
      firstPracticalTask: 'Build a 3-section hero landing page (Navigation bar, Headline with CTA button, and 3-column features card).',
      commonBeginnerMistakes: [
        'Ignoring mobile screen layouts; designing exclusively on desktop viewports',
        'Using massive uncompressed 5MB images that make websites load slowly'
      ],
      workplaceCommunicationTip: 'Share responsive live staging preview links with clients rather than sending static screenshot PDFs.'
    },
    phases: [
      {
        phaseNumber: 1,
        title: 'Visual Layout Fundamentals & Box Model',
        titleMl: 'വിഷ്വൽ ലേഔട്ട് & ബോക്സ് മോഡൽ',
        durationLabel: 'Weeks 1 - 2 (Days 1 - 15)',
        keyTopics: ['Box model: Margin, Padding, Border', 'Flexbox & CSS Grid visual equivalents', 'Typography scales & color styles'],
        handsOnDeliverable: 'Responsive 1-page agency landing page with clean layout on desktop, tablet, and mobile.',
        recommendedTools: ['Framer Free', 'Webflow Starter'],
        freeLearningLink: { title: 'Webflow 101 Crash Course', url: 'https://university.webflow.com/courses/webflow-101' }
      },
      {
        phaseNumber: 2,
        title: 'Components, Responsive Breakpoints & Navigation',
        titleMl: 'കംപോണന്റുകൾ & റെസ്‌പോൺസീവ് ലേഔട്ട്',
        durationLabel: 'Weeks 3 - 4 (Days 16 - 30)',
        keyTopics: ['Reusable UI components & variants', 'Sticky headers & hamburger mobile menus', 'Breakpoints (1440px, 810px, 390px)'],
        handsOnDeliverable: '3-page business site: Home, About, and Contact with interactive working forms.',
        recommendedTools: ['Framer Academy', 'Google Fonts'],
        freeLearningLink: { title: 'Framer Academy Free Video Lessons', url: 'https://www.framer.com/academy/' }
      },
      {
        phaseNumber: 3,
        title: 'CMS Collections & Dynamic Content',
        titleMl: 'ഡൈനാമിക് കണ്ടന്റ് മാനേജ്‌മെന്റ് (CMS)',
        durationLabel: 'Weeks 5 - 6 (Days 31 - 45)',
        keyTopics: ['CMS Collections (Blog, Team, Case Studies)', 'Dynamic template pages', 'Search, filter, and category tags'],
        handsOnDeliverable: 'Dynamic blog and portfolio website powered by a 10-item CMS collection.',
        recommendedTools: ['Webflow CMS', 'Framer CMS'],
        freeLearningLink: { title: 'Webflow CMS Architecture Course', url: 'https://university.webflow.com/lesson/intro-to-cms' }
      },
      {
        phaseNumber: 4,
        title: 'SEO, Domain Launch & Client Handover',
        titleMl: 'എസ്ഇഒ, ഡൊമൈൻ ലോഞ്ച് & ക്ലയന്റ് ഹാൻഡ്‌ഓവർ',
        durationLabel: 'Weeks 7 - 8 (Days 46 - 60)',
        keyTopics: ['Meta tags & Open Graph social banners', 'Custom domain DNS configuration', 'Client editor mode training'],
        handsOnDeliverable: 'Published live custom portfolio website showcasing 3 complete client case studies.',
        recommendedTools: ['Google Search Console', 'Loom Video Handover'],
        freeLearningLink: { title: 'Google SEO Starter Guide', url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide' }
      }
    ]
  },
  'shopify-store-management': {
    careerSlug: 'shopify-store-management',
    zeroKnowledgeOrientation: {
      meaning: 'Shopify Store Managers configure complete retail e-commerce stores, manage product catalogs, set up payment gateways, and optimize the customer buying experience.',
      meaningMl: 'ഷോപ്പിഫൈ പ്ലാറ്റ്‌ഫോമിൽ ഓൺലൈൻ കടകൾ ഡിസൈൻ ചെയ്യുകയും ഉൽപ്പന്നങ്ങളും പേയ്‌മെന്റ് ഗേറ്റ്‌വേകളും ക്രമീകരിക്കുകയും ചെയ്യുന്ന ജോലി.',
      whyBusinessesHire: 'Retailers want their own independent digital brand presence to avoid high commission fees from marketplaces like Amazon.',
      firstSoftwareStep: 'Join Shopify Partners for free (partners.shopify.com) and create an unlimited free development store.',
      firstPracticalTask: 'Install a modern free theme (Dawn) and set up homepage banner slides with working collection links.',
      commonBeginnerMistakes: [
        'Installing 20+ conflicting apps that slow down the store checkout speed',
        'Forgetting to configure automated shipping zones, leading to checkout errors'
      ],
      workplaceCommunicationTip: 'Always conduct test purchases with Bogus Gateway before announcing seasonal discount sales.'
    },
    phases: [
      {
        phaseNumber: 1,
        title: 'Theme Customization & Store Architecture',
        titleMl: 'ഷോപ്പിഫൈ തീം കസ്റ്റമൈസേഷൻ',
        durationLabel: 'Weeks 1 - 2 (Days 1 - 15)',
        keyTopics: ['Dawn theme sections & blocks', 'Header, footer & mega-menu setup', 'Color palettes & typography kits'],
        handsOnDeliverable: 'Branded D2C storefront with custom hero banner, featured collection grid, and trust footer.',
        recommendedTools: ['Shopify Partner Sandbox', 'Canva Free'],
        freeLearningLink: { title: 'Shopify Learn Free Video Courses', url: 'https://www.shopify.com/learn' }
      },
      {
        phaseNumber: 2,
        title: 'Advanced Product Matrix & Inventory Sync',
        titleMl: 'പ്രൊഡക്റ്റ് വേരിയന്റുകളും ഇൻവെന്ററിയും',
        durationLabel: 'Weeks 3 - 4 (Days 16 - 30)',
        keyTopics: ['Multi-option variants (Size x Color)', 'Metafields for product specifications', 'Automated inventory reorder thresholds'],
        handsOnDeliverable: 'Catalog of 20 products featuring complex variants and custom specification metafields.',
        recommendedTools: ['Shopify Bulk Editor', 'Google Sheets CSV'],
        freeLearningLink: { title: 'Shopify Product Management Guide', url: 'https://help.shopify.com/en/manual/products' }
      },
      {
        phaseNumber: 3,
        title: 'Checkout, Payments, Taxes & Shipping Rules',
        titleMl: 'പേയ്‌മെന്റ്, ടാക്സ് & ഷിപ്പിംഗ് ക്രമീകരണങ്ങൾ',
        durationLabel: 'Weeks 5 - 6 (Days 31 - 45)',
        keyTopics: ['Domestic shipping zones & free shipping thresholds', 'GST tax configuration by state', 'Payment gateway integration (Razorpay / Cashfree)'],
        handsOnDeliverable: 'End-to-end checkout with automated GST invoice generation and courier rate calculation.',
        recommendedTools: ['Shiprocket Sandbox', 'Razorpay Test Gateway'],
        freeLearningLink: { title: 'Razorpay Payment Gateway Setup Guide', url: 'https://razorpay.com/docs/payments/payment-gateway/ecommerce-plugins/shopify/' }
      },
      {
        phaseNumber: 4,
        title: 'Conversion Optimization & Client Store Handover',
        titleMl: 'സ്റ്റോർ ഒപ്റ്റിമൈസേഷൻ & ഹാൻഡ്‌ഓവർ',
        durationLabel: 'Weeks 7 - 8 (Days 46 - 60)',
        keyTopics: ['Abandoned cart email sequences', 'Review apps & customer social proof', 'Staff permissions & ownership transfer'],
        handsOnDeliverable: 'Fully functional e-commerce brand store with 10 completed test orders and client handover SOP.',
        recommendedTools: ['Shopify Email', 'Judge.me App'],
        freeLearningLink: { title: 'Shopify Abandoned Checkout Recovery', url: 'https://help.shopify.com/en/manual/orders/abandoned-checkouts' }
      }
    ]
  },
  // 90-Day Track Exemplars
  'ui-ux-design': {
    careerSlug: 'ui-ux-design',
    zeroKnowledgeOrientation: {
      meaning: 'UI/UX Designers conduct user research, create wireframes, and design intuitive, beautiful digital interfaces for mobile apps and web platforms using Figma.',
      meaningMl: 'മൊബൈൽ ആപ്പുകളും വെബ്സൈറ്റുകളും ആളുകൾക്ക് എളുപ്പത്തിൽ ഉപയോഗിക്കാൻ സാധിക്കുന്ന വിധത്തിൽ ഫിഗ്മ ഉപയോഗിച്ച് ഡിസൈൻ ചെയ്യുന്ന ജോലി.',
      whyBusinessesHire: 'Apps with confusing navigation lose 70% of users immediately. Good design directly drives user retention and corporate revenue.',
      firstSoftwareStep: 'Install Figma desktop or open Figma.com in your browser for free.',
      firstPracticalTask: 'Create an iPhone 16 canvas frame and design a clean user onboarding screen with a photo, headline, and primary button.',
      commonBeginnerMistakes: [
        'Designing without auto-layout, making screens rigid and impossible for developers to code',
        'Using poor contrast text (e.g. light gray text on white background) that fails accessibility'
      ],
      workplaceCommunicationTip: 'Always link clickable interactive Figma prototypes to demonstrate real user flows during team reviews.'
    },
    phases: [
      {
        phaseNumber: 1,
        title: 'Design Principles, Typography & Figma Basics',
        titleMl: 'ഡിസൈൻ തത്വങ്ങൾ & ഫിഗ്മ ബേസിക്സ്',
        durationLabel: 'Weeks 1 - 3 (Days 1 - 20)',
        keyTopics: ['8pt spatial grid system', 'Typography scale (Hierarchy & line heights)', 'Color theory & WCAG accessibility contrast'],
        handsOnDeliverable: '5 essential mobile UI screens (Login, Home, Product Detail, Cart, Profile) built with Auto Layout.',
        recommendedTools: ['Figma Free', 'Unsplash Plugin', 'Contrast Checker Plugin'],
        freeLearningLink: { title: 'Figma for Beginners Free Official Course', url: 'https://www.figma.com/resource-library/design-basics/' }
      },
      {
        phaseNumber: 2,
        title: 'Design Systems: Components, Variants & Auto Layout',
        titleMl: 'ഡിസൈൻ സിസ്റ്റങ്ങൾ & ഓട്ടോ ലേഔട്ട്',
        durationLabel: 'Weeks 4 - 6 (Days 21 - 45)',
        keyTopics: ['Master components & component properties', 'Button & input state variants (Hover, Pressed, Disabled)', 'Design tokens & styles'],
        handsOnDeliverable: 'Complete mini design system with 20 UI components and responsive Auto Layout structures.',
        recommendedTools: ['Figma Community', 'Iconify Plugin'],
        freeLearningLink: { title: 'Figma Auto Layout In-Depth', url: 'https://help.figma.com/hc/en-us/articles/360040451373-Explore-auto-layout' }
      },
      {
        phaseNumber: 3,
        title: 'User Research, Wireframing & Interactive Prototyping',
        titleMl: 'യൂസർ റിസർച്ച് & ഇന്ററാക്ടീവ് പ്രോട്ടോടൈപ്പിംഗ്',
        durationLabel: 'Weeks 7 - 9 (Days 46 - 70)',
        keyTopics: ['User personas & user journey mapping', 'Low-fidelity wireframing', 'Interactive micro-interactions & smart animate'],
        handsOnDeliverable: 'Clickable interactive mobile app prototype demonstrating a complete 10-step user checkout journey.',
        recommendedTools: ['Figma Prototype Mode', 'FigJam'],
        freeLearningLink: { title: 'Google UX Design Certificate Summary', url: 'https://grow.google/certificates/ux-design/' }
      },
      {
        phaseNumber: 4,
        title: 'Case Study Assembly, Behance & Job Applications',
        titleMl: 'കേസ് സ്റ്റഡി നിർമ്മാണം & കരിയർ ലോഞ്ച്',
        durationLabel: 'Weeks 10 - 12 (Days 71 - 90)',
        keyTopics: ['Problem statement & research methodology', 'UI visual showcase formatting', 'Developer handoff specs'],
        handsOnDeliverable: '2 detailed case studies published on Behance / Notion and a personalized UI design resume.',
        recommendedTools: ['Behance', 'Notion Portfolio'],
        freeLearningLink: { title: 'How to Write a UX Case Study That Gets Hired', url: 'https://www.interaction-design.org/literature/article/how-to-write-a-ux-case-study' }
      }
    ]
  },
  // 120-Day Track Exemplars
  'frontend-development': {
    careerSlug: 'frontend-development',
    zeroKnowledgeOrientation: {
      meaning: 'Front-End Developers write the code that renders modern web applications in the user\'s browser using HTML5, CSS3, modern JavaScript, and the React ecosystem.',
      meaningMl: 'ബ്രൗസറിൽ കാണുന്ന വെബ്സൈറ്റുകളും ആപ്പുകളും എച്ച്ടിഎംഎൽ, സിഎസ്എസ്, ജാവാസ്ക്രിപ്റ്റ്, റിയാക്ട് എന്നിവ ഉപയോഗിച്ച് കോഡ് ചെയ്തു നിർമ്മിക്കുന്ന ജോലി.',
      whyBusinessesHire: 'Every modern business needs high-performance, responsive web interfaces connected to live backend APIs and database systems.',
      firstSoftwareStep: 'Install Visual Studio Code (code.visualstudio.com) and install the Live Server extension.',
      firstPracticalTask: 'Create an index.html file, add a semantic header, navigation links, and a card styled with CSS flexbox.',
      commonBeginnerMistakes: [
        'Jumping into React before understanding pure JavaScript fundamentals (arrays, objects, async/await)',
        'Not using Git version control from day one to track and safeguard code'
      ],
      workplaceCommunicationTip: 'Write descriptive Git commit messages (e.g. "feat: add user authentication form validation") and share GitHub repo links.'
    },
    phases: [
      {
        phaseNumber: 1,
        title: 'Semantic HTML5, Modern CSS3 & Responsive Flexbox',
        titleMl: 'എച്ച്ടിഎംഎൽ5 & സിഎസ്എസ്3 അടിസ്ഥാനങ്ങൾ',
        durationLabel: 'Weeks 1 - 4 (Days 1 - 30)',
        keyTopics: ['Semantic HTML structure', 'CSS Flexbox & CSS Grid', 'Mobile-first responsive media queries', 'Git & GitHub basics'],
        handsOnDeliverable: '3 fully responsive static web projects: Personal Portfolio, Product Landing Page, and Restaurant Menu.',
        recommendedTools: ['VS Code', 'Git', 'GitHub', 'Netlify / Vercel'],
        freeLearningLink: { title: 'FreeCodeCamp Responsive Web Design Certification', url: 'https://www.freecodecamp.org/learn/2022/responsive-web-design/' }
      },
      {
        phaseNumber: 2,
        title: 'Modern JavaScript (ES6+), DOM & Async APIs',
        titleMl: 'ജാവാസ്ക്രിപ്റ്റ് (ES6+), ഡോം & എപിഐ',
        durationLabel: 'Weeks 5 - 8 (Days 31 - 60)',
        keyTopics: ['Variables, data types, and functions', 'DOM manipulation & event listeners', 'Fetch API, Promises & Async/Await', 'Local storage data persistence'],
        handsOnDeliverable: 'Interactive Weather App fetching live city data and an interactive Task Management App with local storage.',
        recommendedTools: ['Chrome DevTools', 'Postman / Bruno', 'VS Code'],
        freeLearningLink: { title: 'JavaScript.info Complete Modern Tutorial', url: 'https://javascript.info/' }
      },
      {
        phaseNumber: 3,
        title: 'React.js, Component Architecture & State Management',
        titleMl: 'റിയാക്ട് (React.js) & കംപോണന്റ് ആർക്കിടെക്ചർ',
        durationLabel: 'Weeks 9 - 12 (Days 61 - 90)',
        keyTopics: ['JSX syntax & component props', 'useState and useEffect hooks', 'Tailwind CSS for rapid styling', 'Routing with React Router'],
        handsOnDeliverable: 'Single-page e-commerce application with product filtering, shopping cart drawer, and checkout validation.',
        recommendedTools: ['Vite', 'React.js', 'Tailwind CSS'],
        freeLearningLink: { title: 'React Official Documentation & Interactive Tour', url: 'https://react.dev/learn' }
      },
      {
        phaseNumber: 4,
        title: 'Next.js, Fullstack API Integration & Portfolio Launch',
        titleMl: 'നെക്സ്റ്റ്.ജെഎസ് (Next.js) & കരിയർ ലോഞ്ച്',
        durationLabel: 'Weeks 13 - 16 (Days 91 - 120)',
        keyTopics: ['Server Components & Client Components', 'Database integration with Supabase / Firebase', 'Production deployment on Vercel', 'Technical interview coding challenges'],
        handsOnDeliverable: 'Fullstack Next.js web application deployed to production with custom domain and GitHub repository.',
        recommendedTools: ['Next.js', 'Vercel', 'Supabase'],
        freeLearningLink: { title: 'Next.js Official Learn Tutorial', url: 'https://nextjs.org/learn' }
      }
    ]
  }
};

export function getCareerRoadmap(slug: string): CareerRoadmap | undefined {
  return careerRoadmaps[slug];
}
