import { Course } from '@/types';

export const crmDataCourse: Course = {
  id: 'course-crm',
  careerSlug: 'crm-data-management',
  title: 'CRM Data Management Specialist (30 Days)',
  titleMl: 'സിആർഎം (CRM) ഡാറ്റാ മാനേജ്‌മെന്റ് (30 ദിവസങ്ങൾ)',
  durationDays: 30,
  weeklyGoals: [
    {
      weekNumber: 1,
      title: 'CRM Architecture, Contact Properties & HubSpot Basics',
      objective: 'Understand CRM objects (Contacts, Companies, Deals, Tickets), property types, and set up a free HubSpot CRM portal.'
    },
    {
      weekNumber: 2,
      title: 'Data Imports, Mapping, De-Duplication & Cleaning',
      objective: 'Clean raw lead sheets in Excel, execute zero-error CSV imports into HubSpot, and merge duplicate contact records.'
    },
    {
      weekNumber: 3,
      title: 'Pipelines, Deal Stages & Automated Task Reminders',
      objective: 'Configure multi-stage sales pipelines, set mandatory stage properties, assign deal owners, and build automated follow-up tasks.'
    },
    {
      weekNumber: 4,
      title: 'Views, Lists, Reports & Career Portfolio',
      objective: 'Build segmented active lists, create executive pipeline dashboards, write an ATS resume, and apply for remote CRM roles.'
    }
  ],
  modules: [
    {
      id: 'mod-crm-1',
      weekNumber: 1,
      title: 'Week 1: CRM Architecture & HubSpot Setup',
      titleMl: 'ആഴ്ച 1: സിആർഎം അടിസ്ഥാന ഘടനയും ഹബ്സ്പോട്ടും',
      objective: 'Learn how sales and support teams organize customer relationships using CRM software.',
      lessons: [
        {
          id: 'les-crm-1',
          dayNumber: 1,
          title: 'What is a CRM? The 4 Core Objects',
          titleMl: 'ഡേ 1: സിആർഎം (CRM) എന്നാൽ എന്ത്?',
          durationMinutes: 45,
          overview: 'Understand Contacts (people), Companies (organizations), Deals (revenue opportunities), and Tickets (customer issues).',
          concepts: ['Object relational architecture', 'Why spreadsheets break at scale and CRMs replace them'],
          simpleEnglishGuide: 'A CRM is a smart digital address book for businesses. When someone calls, any team member can see their entire history: what they bought, who they spoke to, and what they need.',
          malayalamNotes: 'കസ്റ്റമർ വിവരങ്ങളും ബിസിനസ്സ് ഇടപാടുകളും ഒരൊറ്റ സ്ഥലത്ത് കൃത്യമായി സൂക്ഷിക്കാൻ സിആർഎം സഹായിക്കുന്നു.',
          officialDocLinks: [{ title: 'HubSpot CRM Overview', url: 'https://knowledge.hubspot.com/get-started/get-started-with-hubspot-free-tools' }],
          videoResources: [{
            title: 'HubSpot CRM Tutorial for Beginners 2026',
            provider: 'YouTube CRM Training',
            url: 'https://www.youtube.com/results?search_query=hubspot+crm+tutorial+for+beginners',
            language: 'English',
            duration: '22 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Create a free HubSpot account and explore the Contacts and Companies menus.',
            tasks: ['Sign up at hubspot.com (100% Free tier)', 'Manually create 1 Contact and 1 associated Company']
          },
          quiz: [{
            id: 'q-crm-1',
            question: 'What are the 4 primary standard objects in modern CRMs like HubSpot?',
            options: ['Pictures, Videos, Audio, Fonts', 'Contacts, Companies, Deals, and Tickets', 'Likes, Shares, Comments, Views', 'Files, Folders, Drives, Clouds'],
            correctOptionIndex: 1,
            explanation: 'Contacts, Companies, Deals, and Tickets represent the foundational relational architecture of modern CRMs.'
          }]
        },
        {
          id: 'les-crm-2',
          dayNumber: 2,
          title: 'Custom Properties: Single-Line Text, Dropdowns & Numbers',
          titleMl: 'ഡേ 2: കസ്റ്റം പ്രോപ്പർട്ടികൾ ഉണ്ടാക്കൽ',
          durationMinutes: 50,
          overview: 'Learn how to create custom data fields to store business-specific information (e.g. "Customer Preferred Language" or "GST Number").',
          concepts: ['Property field types: Single-line text, Dropdown select, Date picker, Number', 'Why dropdown properties protect data quality'],
          simpleEnglishGuide: 'If you want to know if a customer prefers Malayalam or English, do not use a text box where people type typos. Create a dropdown property with 2 choices: Malayalam and English.',
          malayalamNotes: 'കമ്പനിയുടെ ആവശ്യത്തിനനുസരിച്ച് പുതിയ ഫീൽഡുകൾ നിർമ്മിക്കുന്ന രീതി.',
          officialDocLinks: [{ title: 'Create and edit properties in HubSpot', url: 'https://knowledge.hubspot.com/crm-setup/manage-your-properties' }],
          videoResources: [{
            title: 'How to Create Custom Properties in HubSpot CRM',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=create+custom+properties+hubspot+tutorial',
            language: 'English',
            duration: '16 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Create 3 custom Contact properties in your HubSpot portal.',
            tasks: ['1. "Preferred Language" (Dropdown: Malayalam, English, Hindi)', '2. "Lead Source" (Dropdown: Website, WhatsApp, Referral)', '3. "Annual Budget" (Number)']
          },
          quiz: [{
            id: 'q-crm-2',
            question: 'Why are "Dropdown select" properties preferred over "Single-line text" for fields like Lead Status?',
            options: ['They take up less space', 'They enforce consistent, standardized values that prevent typos and allow accurate segmentation filtering', 'They make the software faster', 'Text fields are illegal'],
            correctOptionIndex: 1,
            explanation: 'Dropdowns eliminate spelling variations, ensuring records can be grouped and filtered reliably.'
          }]
        },
        {
          id: 'les-crm-3',
          dayNumber: 3,
          title: 'Associating Contacts with Companies & Lifecycle Stages',
          titleMl: 'ഡേ 3: കസ്റ്റമർ ലൈഫ്‌സൈക്കിൾ സ്റ്റേജുകൾ',
          durationMinutes: 50,
          overview: 'Understand how individual contacts link to parent corporate accounts and track lifecycle stages: Subscriber -> Lead -> Marketing Qualified Lead (MQL) -> Opportunity -> Customer.',
          concepts: ['Parent-child associations (multiple contacts under one company domain)', 'Standard lifecycle stage progression'],
          simpleEnglishGuide: 'An "MQL" is a person who showed real business interest (like downloading a catalog). An "Opportunity" is someone who requested a formal price quote.',
          malayalamNotes: 'ഒരു സാധാരണ സന്ദർശകൻ എങ്ങനെ ഒരു യഥാർത്ഥ ഉപഭോക്താവായി മാറുന്നു എന്ന് സിആർഎമ്മിൽ അടയാളപ്പെടുത്തൽ.',
          officialDocLinks: [{ title: 'HubSpot Lifecycle Stages Explained', url: 'https://knowledge.hubspot.com/contacts/use-lifecycle-stages' }],
          videoResources: [{
            title: 'HubSpot Lifecycle Stages Explained for Beginners',
            provider: 'YouTube CRM Training',
            url: 'https://www.youtube.com/results?search_query=hubspot+lifecycle+stages+explained',
            language: 'English',
            duration: '18 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Create a company record "Malabar Spice Co." and associate 2 contacts with different job titles.',
            tasks: ['Assign Contact 1 as "Lead" and Contact 2 as "Customer"']
          },
          quiz: [{
            id: 'q-crm-3',
            question: 'What is a "Lifecycle Stage" in CRM systems?',
            options: ['How long a computer lasts', 'Where a contact stands in their business relationship with the company, from first visitor to paying customer', 'Employee age', 'Contract duration'],
            correctOptionIndex: 1,
            explanation: 'Lifecycle stages categorize how close a prospective buyer is to becoming or remaining an active customer.'
          }]
        },
        {
          id: 'les-crm-4',
          dayNumber: 4,
          title: 'Data Privacy & Contact Consent (GDPR / Indian DPDP Act)',
          titleMl: 'ഡേ 4: ഡാറ്റാ പ്രൈവസിയും അനുമതികളും',
          durationMinutes: 45,
          overview: 'Understand legal rules for storing customer emails and phone numbers: opt-in consent, unsubscribes, and data deletion rights.',
          concepts: ['Opt-in consent management', 'Handling "Unsubscribe / Do Not Contact" requests instantly', 'Data protection regulations'],
          simpleEnglishGuide: 'If a customer asks to be removed from a marketing list, you must update their CRM record immediately. Respecting customer privacy is an ethical and legal obligation.',
          malayalamNotes: 'ഉപഭോക്താക്കളുടെ സ്വകാര്യത സംരക്ഷിക്കാനും അനുമതിയില്ലാതെ സന്ദേശങ്ങൾ അയക്കാതിരിക്കാനുമുള്ള നിയമങ്ങൾ.',
          officialDocLinks: [{ title: 'Data Privacy Settings in HubSpot', url: 'https://knowledge.hubspot.com/privacy-and-consent/manage-your-data-privacy-settings' }],
          videoResources: [{
            title: 'GDPR & DPDP Data Privacy in CRM Explained',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=crm+data+privacy+gdpr+explained',
            language: 'English',
            duration: '15 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Configure the "Opted out of email" property on a test contact in HubSpot.',
            tasks: ['Verify that the CRM prevents sending marketing broadcasts to that contact']
          },
          quiz: [{
            id: 'q-crm-4',
            question: 'What must an ethical CRM administrator do when a contact requests to unsubscribe from promotional emails?',
            options: ['Ignore it', 'Immediately update their email opt-out property in the CRM to ensure no further promotional messages are sent', 'Delete their phone number only', 'Charge a fee'],
            correctOptionIndex: 1,
            explanation: 'Opt-out requests must be honored immediately to uphold privacy compliance and consumer rights.'
          }]
        },
        {
          id: 'les-crm-5',
          dayNumber: 5,
          title: 'Week 1 Review & Portal Configuration Drill',
          titleMl: 'ഡേ 5: ആഴ്ച 1 സിആർഎം സെറ്റപ്പ് പരീക്ഷ',
          durationMinutes: 60,
          overview: 'Consolidate objects, custom properties, and lifecycle stages in your HubSpot sandbox portal.',
          concepts: ['Consolidation of portal structure'],
          simpleEnglishGuide: 'Inspect your portal. Is it clean? Are properties grouped logically? A clean foundation ensures easy data imports next week.',
          malayalamNotes: 'ആദ്യ ആഴ്ചയിലെ എല്ലാ ക്രമീകരണങ്ങളും പരിശോധിച്ച് ഉറപ്പുവരുത്തുന്നു.',
          officialDocLinks: [{ title: 'HubSpot Setup Checklist', url: 'https://knowledge.hubspot.com' }],
          videoResources: [{
            title: 'HubSpot Free CRM Full Setup Walkthrough',
            provider: 'YouTube CRM Training',
            url: 'https://www.youtube.com/results?search_query=hubspot+free+crm+full+setup+walkthrough',
            language: 'English',
            duration: '25 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Audit your HubSpot test portal: verify 3 custom properties exist, 5 mock contacts are created, and 2 companies are linked.',
            tasks: ['Take a screenshot of your Contact Directory view']
          },
          quiz: [{
            id: 'q-crm-5',
            question: 'What is the primary benefit of associating individual contacts with a Company record in a CRM?',
            options: ['It changes the color of the screen', 'It aggregates all emails, notes, and deals across all employees of that business in one consolidated timeline', 'It deletes old emails', 'It prints letters'],
            correctOptionIndex: 1,
            explanation: 'Company association centralizes organizational history across multiple staff members in one company view.'
          }]
        }
      ]
    },
    {
      id: 'mod-crm-2',
      weekNumber: 2,
      title: 'Week 2: Data Imports, Column Mapping & De-Duplication',
      titleMl: 'ആഴ്ച 2: ഡാറ്റാ ഇമ്പോർട്ടുകളും ഡ്യൂപ്ലിക്കേറ്റ് ക്ലീനിംഗും',
      objective: 'Clean raw lead sheets in Excel, map CSV headers to CRM properties, and merge duplicate customer records.',
      lessons: [
        {
          id: 'les-crm-6',
          dayNumber: 6,
          title: 'Pre-Import Spreadsheet Cleaning & Normalization',
          titleMl: 'ഡേ 6: ഇമ്പോർട്ടിന് മുൻപുള്ള ഡാറ്റാ ക്ലീനിംഗ്',
          durationMinutes: 50,
          overview: 'Clean raw lead spreadsheets: split full names into First and Last names, validate email syntax, and format phone numbers with country codes.',
          concepts: ['Email syntax verification (removing spaces and invalid characters)', 'Standardizing international phone formats (+91, +971)'],
          simpleEnglishGuide: 'CRMs require separate columns for "First Name" and "Last Name". If you import "John Smith" into First Name, emails will start with "Hi John Smith," which looks robotic. Separate them first.',
          malayalamNotes: 'എക്സലിൽ പേരുകളും ഫോൺ നമ്പറുകളും സിആർഎമ്മിന് യോജിച്ച രീതിയിൽ മാറ്റിയെടുക്കുന്നു.',
          officialDocLinks: [{ title: 'Set up your import files in HubSpot', url: 'https://knowledge.hubspot.com/crm-setup/set-up-your-import-file' }],
          videoResources: [{
            title: 'How to Prepare Excel Data for CRM Import',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=prepare+excel+data+for+hubspot+import',
            language: 'English',
            duration: '19 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Clean a raw CSV file of 30 leads: split names, clean email spaces, and ensure phone numbers have country codes.',
            tasks: ['Verify zero blank cells in required First Name or Email columns']
          },
          quiz: [{
            id: 'q-crm-6',
            question: 'What is the unique identifier that HubSpot CRM uses by default to prevent duplicate contact creation during CSV imports?',
            options: ['First Name', 'Contact Email Address', 'Phone Number', 'Postal Code'],
            correctOptionIndex: 1,
            explanation: 'Email address is the primary unique identifier; matching emails update existing records rather than creating duplicates.'
          }]
        },
        {
          id: 'les-crm-7',
          dayNumber: 7,
          title: 'Executing a Zero-Error Multi-Object CSV Import',
          titleMl: 'ഡേ 7: സിആർഎമ്മിലേക്ക് ഡാറ്റാ ഇമ്പോർട്ട് ചെയ്യൽ',
          durationMinutes: 55,
          overview: 'Import a clean CSV into HubSpot, map column headers to CRM properties, handle unmapped fields, and verify import error logs.',
          concepts: ['Column mapping interface', 'Creating new properties during import wizard', 'Reviewing error CSV files if rows fail'],
          simpleEnglishGuide: 'Always check the column mapping screen carefully. Make sure "Work Phone" maps to "Phone Number" and not "Fax". Match every column with intention.',
          malayalamNotes: 'എക്സൽ ഫയലുകൾ സിആർഎമ്മിലേക്ക് തെറ്റുകളില്ലാതെ ഇമ്പോർട്ട് ചെയ്യുന്ന വിധം.',
          officialDocLinks: [{ title: 'Import records and activities in HubSpot', url: 'https://knowledge.hubspot.com/crm-setup/import-objects' }],
          videoResources: [{
            title: 'Step by Step HubSpot CSV Import Tutorial',
            provider: 'YouTube CRM Training',
            url: 'https://www.youtube.com/results?search_query=hubspot+csv+import+step+by+step',
            language: 'English',
            duration: '21 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Import your cleaned 30-lead CSV into HubSpot.',
            tasks: ['Map all columns to matching properties', 'Verify the import history log shows 30 successful records and 0 errors']
          },
          quiz: [{
            id: 'q-crm-7',
            question: 'If 3 rows fail during a CRM import, what should the administrator do?',
            options: ['Delete the entire database', 'Download the error report file, inspect why those 3 rows failed (e.g. invalid email format), fix them in the spreadsheet, and re-import just those 3 rows', 'Give up', 'Restart the computer'],
            correctOptionIndex: 1,
            explanation: 'Downloading and reading the error log isolates the exact faulty data points for surgical correction.'
          }]
        },
        {
          id: 'les-crm-8',
          dayNumber: 8,
          title: 'Managing & Merging Duplicate Records',
          titleMl: 'ഡേ 8: ഡ്യൂപ്ലിക്കേറ്റ് റെക്കോർഡുകൾ കണ്ടെത്തലും ലയിപ്പിക്കലും',
          durationMinutes: 50,
          overview: 'Find duplicate contacts created when someone uses both a personal Gmail and corporate work email, merging them into one unified history.',
          concepts: ['Primary vs Secondary record selection during merge', 'What data survives a merge (all notes, emails, and activities combine)'],
          simpleEnglishGuide: 'When you merge two contacts, always choose the corporate email as the primary. All past call notes and emails from both records will automatically combine into one timeline.',
          malayalamNotes: 'ഒരേ ആളിന്റെ രണ്ട് പ്രൊഫൈലുകൾ ഒന്നാക്കി ലയിപ്പിക്കുന്ന രീതി.',
          officialDocLinks: [{ title: 'Deduplicate records in HubSpot', url: 'https://knowledge.hubspot.com/crm-setup/deduplicate-records' }],
          videoResources: [{
            title: 'How to Merge Duplicate Contacts in HubSpot CRM',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=merge+duplicate+contacts+hubspot',
            language: 'English',
            duration: '14 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Create two duplicate contacts with the same name but slightly different email addresses in your test portal.',
            tasks: ['Execute the merge tool and verify the primary record retains all activity notes']
          },
          quiz: [{
            id: 'q-crm-8',
            question: 'What happens to historical notes and email logs when two contact records are merged in a CRM?',
            options: ['They are permanently deleted', 'They combine into the unified timeline of the primary surviving record', 'They are emailed to the customer', 'They convert to code'],
            correctOptionIndex: 1,
            explanation: 'Merging consolidates all historical engagements onto the surviving primary record.'
          }]
        },
        {
          id: 'les-crm-9',
          dayNumber: 9,
          title: 'Custom Views & Filtered Working Lists',
          titleMl: 'ഡേ 9: കസ്റ്റം ഫിൽട്ടറുകളും ലിസ്റ്റുകളും',
          durationMinutes: 50,
          overview: 'Build custom saved views so sales reps see only what matters: "My Active Leads in Kerala" or "Contacts with No Activity in 30 Days".',
          concepts: ['Filtering logic (AND vs OR)', 'Saving views as shared team tabs vs private views', 'Customizing visible columns'],
          simpleEnglishGuide: 'Sales reps waste time clicking around. You make their life easy by giving them a tab called "High Priority Leads to Call Today". That is why CRM admins are loved by sales teams.',
          malayalamNotes: 'സെയിൽസ് ടീമിന് എളുപ്പത്തിൽ ജോലി ചെയ്യാൻ ഫിൽട്ടർ ചെയ്ത വ്യൂകൾ ഉണ്ടാക്കുന്ന വിധം.',
          officialDocLinks: [{ title: 'Filter records and save views in HubSpot', url: 'https://knowledge.hubspot.com/crm-setup/create-saved-views' }],
          videoResources: [{
            title: 'How to Create Custom Views in HubSpot CRM',
            provider: 'YouTube CRM Training',
            url: 'https://www.youtube.com/results?search_query=create+custom+views+hubspot+tutorial',
            language: 'English',
            duration: '17 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Create 2 saved views in your HubSpot portal.',
            tasks: ['View 1: "Qualified Leads (No Meeting Yet)"', 'View 2: "Inactive Contacts (Last Contacted > 60 Days)"']
          },
          quiz: [{
            id: 'q-crm-9',
            question: 'What is the difference between "AND" and "OR" filtering logic in CRM views?',
            options: ['There is no difference', '"AND" requires all criteria to be true simultaneously; "OR" includes records matching any single criteria', '"AND" is for numbers only', '"OR" deletes records'],
            correctOptionIndex: 1,
            explanation: '"AND" narrows results (both must match), while "OR" broadens results (either can match).'
          }]
        },
        {
          id: 'les-crm-10',
          dayNumber: 10,
          title: 'Week 2 Review: Complete Data Hygiene Audit Drill',
          titleMl: 'ഡേ 10: ആഴ്ച 2 ഡാറ്റാ ഹൈജീൻ ഓഡിറ്റ്',
          durationMinutes: 60,
          overview: 'Audit a 50-contact database for missing phone numbers, unassigned owners, invalid emails, and unverified companies.',
          concepts: ['Database health metrics', 'Running cleanup reports'],
          simpleEnglishGuide: 'A CRM is only as valuable as its data cleanliness. Regular weekly audits keep the company\'s sales engine firing smoothly.',
          malayalamNotes: 'ഡാറ്റാബേസിൽ അപൂർണ്ണമായ വിവരങ്ങൾ കണ്ടെത്തി പരിഹരിക്കുന്ന രീതി.',
          officialDocLinks: [{ title: 'HubSpot Data Quality Command Center', url: 'https://knowledge.hubspot.com' }],
          videoResources: [{
            title: 'CRM Data Hygiene & Audit Best Practices',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=crm+data+hygiene+audit+best+practices',
            language: 'English',
            duration: '18 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Execute a Data Hygiene Audit on your test portal.',
            tasks: ['Identify contacts with missing phone numbers and update them', 'Verify 100% of contacts have assigned company domains']
          },
          quiz: [{
            id: 'q-crm-10',
            question: 'Why is routine CRM data hygiene crucial for marketing and sales performance?',
            options: ['To make the screen brighter', 'Dirty data causes high email bounce rates, duplicate sales outreach, and wasted marketing spend', 'Computers stop working if not cleaned', 'For aesthetic reasons only'],
            correctOptionIndex: 1,
            explanation: 'Clean databases prevent email domain blacklisting, eliminate duplicate calls, and ensure accurate sales reporting.'
          }]
        }
      ]
    },
    {
      id: 'mod-crm-3',
      weekNumber: 3,
      title: 'Week 3: Sales Pipelines, Deals & Automation Reminders',
      titleMl: 'ആഴ്ച 3: സെയിൽസ് പൈപ്പ്‌ലൈനുകളും ഓട്ടോമേഷനും',
      objective: 'Build multi-stage sales pipelines, configure required deal properties, track deal value, and build automated follow-up tasks.',
      lessons: [
        {
          id: 'les-crm-11',
          dayNumber: 11,
          title: 'Anatomy of a Sales Pipeline: Stages & Win Probabilities',
          titleMl: 'ഡേ 11: സെയിൽസ് പൈപ്പ്‌ലൈൻ ഘടന',
          durationMinutes: 50,
          overview: 'Learn how sales deals progress through stages: Discovery Call (20%) -> Proposal Sent (50%) -> Contract Sent (80%) -> Closed Won (100%) or Closed Lost (0%).',
          concepts: ['Deal stages and probability weighting', 'Weighted pipeline value vs total pipeline value'],
          simpleEnglishGuide: 'If you have a ₹1,00,000 deal at the "Contract Sent" stage with 80% probability, the weighted forecast value is ₹80,000.',
          malayalamNotes: 'കച്ചവടങ്ങൾ ഓരോ ഘട്ടങ്ങളായി തിരിച്ച് എത്ര രൂപ പ്രതീക്ഷിക്കാം എന്ന് കണക്കാക്കുന്ന രീതി.',
          officialDocLinks: [{ title: 'Set up and customize your deal pipelines', url: 'https://knowledge.hubspot.com/crm-setup/set-up-and-customize-your-deal-pipelines-and-deal-stages' }],
          videoResources: [{
            title: 'How to Set Up a Sales Pipeline in HubSpot CRM',
            provider: 'YouTube CRM Training',
            url: 'https://www.youtube.com/results?search_query=hubspot+deal+pipeline+setup+tutorial',
            language: 'English',
            duration: '20 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Create a custom Sales Pipeline in HubSpot named "Direct B2B Sales Pipeline".',
            tasks: ['Configure 5 distinct stages with probability percentages', 'Set currency to INR (₹)']
          },
          quiz: [{
            id: 'q-crm-11',
            question: 'What is the "Weighted Value" of a ₹2,00,000 deal in a pipeline stage with a 50% probability?',
            options: ['₹2,00,000', '₹1,00,000', '₹50,000', '₹0'],
            correctOptionIndex: 1,
            explanation: '₹2,00,000 multiplied by 50% equals a weighted forecast value of ₹1,00,000.'
          }]
        },
        {
          id: 'les-crm-12',
          dayNumber: 12,
          title: 'Mandatory Stage Properties: Preventing Incomplete Data',
          titleMl: 'ഡേ 12: നിർബന്ധിത ഫീൽഡുകൾ ക്രമീകരിക്കൽ',
          durationMinutes: 50,
          overview: 'Configure rules where a sales rep CANNOT move a deal to "Closed Lost" without choosing a "Closed Lost Reason" from a dropdown.',
          concepts: ['Enforcing required fields upon stage entry', 'Capturing competitive intelligence from lost deals'],
          simpleEnglishGuide: 'Sales reps often forget to write why a deal failed. Making the "Lost Reason" dropdown mandatory forces them to record whether it was price, timing, or competitor.',
          malayalamNotes: 'വിവരങ്ങൾ രേഖപ്പെടുത്താതെ ഡീലുകൾ മാറ്റാൻ കഴിയാത്ത രീതിയിലുള്ള നിയമങ്ങൾ ഉണ്ടാക്കുന്നു.',
          officialDocLinks: [{ title: 'Customize deal stage properties', url: 'https://knowledge.hubspot.com' }],
          videoResources: [{
            title: 'Mandatory Deal Properties in HubSpot CRM Tutorial',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=mandatory+deal+properties+hubspot',
            language: 'English',
            duration: '16 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Set up a mandatory property rule for the "Closed Lost" stage in your test pipeline.',
            tasks: ['Require dropdown property: "Closed Lost Reason" (Options: Too Expensive, Chose Competitor, Unresponsive, Budget Cancelled)']
          },
          quiz: [{
            id: 'q-crm-12',
            question: 'Why should the "Closed Lost Reason" be a mandatory dropdown property when closing a lost deal?',
            options: ['To punish the sales rep', 'To gather structured competitive data that helps the company improve pricing and product features', 'To delete the deal', 'For legal requirements only'],
            correctOptionIndex: 1,
            explanation: 'Mandatory lost reasons give leadership actionable data on why prospects choose competitors.'
          }]
        },
        {
          id: 'les-crm-13',
          dayNumber: 13,
          title: 'Automated Task Reminders & Follow-Up Queues',
          titleMl: 'ഡേ 13: ഓട്ടോമാറ്റിക് ഓർമ്മപ്പെടുത്തലുകൾ ഉണ്ടാക്കൽ',
          durationMinutes: 50,
          overview: 'Build automated task triggers: When a deal enters "Proposal Sent", automatically create a task for the owner: "Follow up in 3 business days".',
          concepts: ['Basic workflow automation rules in free/starter CRMs', 'Task queues for daily call batches'],
          simpleEnglishGuide: 'Deals go cold when reps forget to follow up. Automated tasks act as an artificial memory that puts the reminder on their calendar automatically.',
          malayalamNotes: 'ക്ലയന്റുകളെ കൃത്യസമയത്ത് ബന്ധപ്പെടാൻ ഓർമ്മിപ്പിക്കുന്ന ഓട്ടോമാറ്റിക് ടാസ്കുകൾ.',
          officialDocLinks: [{ title: 'Create and complete tasks in HubSpot', url: 'https://knowledge.hubspot.com/tasks/create-tasks' }],
          videoResources: [{
            title: 'Managing Tasks & Follow-Up Queues in HubSpot CRM',
            provider: 'YouTube CRM Training',
            url: 'https://www.youtube.com/results?search_query=hubspot+tasks+and+queues+tutorial',
            language: 'English',
            duration: '18 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Create a task queue of 5 follow-up calls with scheduled due dates and priority tags.',
            tasks: ['Simulate working through the queue by marking completed and logging call outcomes']
          },
          quiz: [{
            id: 'q-crm-13',
            question: 'What is the primary operational benefit of creating a "Task Queue" in a CRM?',
            options: ['It plays music', 'It allows an agent to move through pending follow-up calls one after another without manually opening individual contact records', 'It sends invoices', 'It shuts down the browser'],
            correctOptionIndex: 1,
            explanation: 'Task queues streamline outreach by automatically advancing to the next contact record upon completing a call.'
          }]
        },
        {
          id: 'les-crm-14',
          dayNumber: 14,
          title: 'Logging Calls, Notes & Meeting Schedules on Contact Timelines',
          titleMl: 'ഡേ 14: കോളുകളും നോട്ടുകളും ടൈംലൈനിൽ രേഖപ്പെടുത്തൽ',
          durationMinutes: 50,
          overview: 'Master the Activity Timeline: logging call outcomes (Connected, Left Voicemail, Busy), typing concise meeting notes, and attaching proposals.',
          concepts: ['Chronological contact timelines', 'Standardizing call outcome logging tags'],
          simpleEnglishGuide: 'Write call notes that your teammates can understand in 10 seconds: "Spoke with Rajesh. He liked the proposal. Needs approval from director next Tuesday. Call back on Wednesday 10 AM".',
          malayalamNotes: 'കസ്റ്റമറുമായി സംസാരിച്ച വിവരങ്ങൾ ടൈംലൈനിൽ വ്യക്തമായി കുറിച്ചുവെക്കുന്ന രീതി.',
          officialDocLinks: [{ title: 'Log activities on records in HubSpot', url: 'https://knowledge.hubspot.com/crm-setup/log-calls-and-meetings' }],
          videoResources: [{
            title: 'How to Log Activities & Notes in HubSpot CRM',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=log+activities+and+notes+hubspot',
            language: 'English',
            duration: '15 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Log 3 realistic client interactions on a contact timeline (1 Call Log, 1 Meeting Note, 1 Sent Email record).',
            tasks: ['Pin the most important note to the top of the contact record']
          },
          quiz: [{
            id: 'q-crm-14',
            question: 'Why should critical summary notes be "Pinned" to the top of a CRM contact record?',
            options: ['To look like Pinterest', 'So any colleague opening the record immediately sees the most important relationship status without scrolling through months of history', 'It locks the account', 'Pinned notes cannot be edited'],
            correctOptionIndex: 1,
            explanation: 'Pinned notes ensure vital relationship context is visible immediately upon opening a record.'
          }]
        },
        {
          id: 'les-crm-15',
          dayNumber: 15,
          title: 'Week 3 Review: Managing a Live 10-Deal Pipeline',
          titleMl: 'ഡേ 15: ആഴ്ച 3 പൈപ്പ്‌ലൈൻ പരീക്ഷ',
          durationMinutes: 60,
          overview: 'Manage a simulated active sales pipeline of 10 deals across all 5 stages, dragging cards and recording stage transitions.',
          concepts: ['Pipeline drag-and-drop board view vs table view', 'Total pipeline revenue calculation'],
          simpleEnglishGuide: 'Look at the visual board. How much money is waiting in "Proposal Sent"? What needs attention before the end of the month? That is pipeline management.',
          malayalamNotes: 'പത്ത് കച്ചവട ഇടപാടുകൾ പൈപ്പ്‌ലൈനിൽ ക്രമീകരിച്ച് തത്സമയം നിരീക്ഷിക്കുന്നു.',
          officialDocLinks: [{ title: 'HubSpot Deals Board View', url: 'https://knowledge.hubspot.com' }],
          videoResources: [{
            title: 'Managing Sales Pipelines Like a Pro in HubSpot',
            provider: 'YouTube CRM Training',
            url: 'https://www.youtube.com/results?search_query=managing+sales+pipeline+hubspot+tutorial',
            language: 'English',
            duration: '20 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Populate your pipeline with 10 deals with values ranging from ₹25,000 to ₹1,50,000.',
            tasks: ['Move 2 deals to "Closed Won" and 1 deal to "Closed Lost" with mandatory reasons selected']
          },
          quiz: [{
            id: 'q-crm-15',
            question: 'What visual layout in CRM systems provides the clearest overview of deals by stage?',
            options: ['A pie chart only', 'A Kanban board view with vertical columns representing each deal stage', 'A plain text document', 'A calendar view only'],
            correctOptionIndex: 1,
            explanation: 'A vertical Kanban column layout provides immediate visibility into deal volume and velocity.'
          }]
        }
      ]
    },
    {
      id: 'mod-crm-4',
      weekNumber: 4,
      title: 'Week 4: Lists, Executive Dashboards, Portfolio & Jobs',
      titleMl: 'ആഴ്ച 4: ഡാഷ്‌ബോർഡുകൾ, പോർട്ട്ഫോളിയോ & കരിയർ തുടക്കം',
      objective: 'Build segmented active contact lists, configure executive dashboard reports, compile portfolio proofs, and apply for CRM specialist roles.',
      lessons: [
        {
          id: 'les-crm-16',
          dayNumber: 16,
          title: 'Active (Dynamic) vs Static Contact Lists',
          titleMl: 'ഡേ 16: ആക്ടീവ് & സ്റ്റാറ്റിക് ലിസ്റ്റുകൾ',
          durationMinutes: 50,
          overview: 'Master Active Lists (dynamic smart lists where contacts auto-join when they match criteria) vs Static Lists (fixed snapshot of contacts).',
          concepts: ['Dynamic membership criteria (e.g. "Contacts in Kerala with Lead Status = New")', 'Using lists for targeted email campaigns'],
          simpleEnglishGuide: 'A Static list is like taking a printed photo of your contacts today. An Active list is like a live security camera: whenever a new person matches the rule, they enter the list automatically.',
          malayalamNotes: 'കസ്റ്റമർമാരുടെ മാനദണ്ഡങ്ങൾക്കനുസരിച്ച് തനിയെ അപ്ഡേറ്റ് ആകുന്ന സ്മാർട്ട് ലിസ്റ്റുകൾ ഉണ്ടാക്കാൻ പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'Create and use lists in HubSpot', url: 'https://knowledge.hubspot.com/lists/create-active-or-static-lists' }],
          videoResources: [{
            title: 'HubSpot Active vs Static Lists Explained Simply',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=hubspot+active+vs+static+lists+tutorial',
            language: 'English',
            duration: '17 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Build 1 Active List in HubSpot: "Active Kerala Leads - Budget Over ₹50,000".',
            tasks: ['Test by editing a contact to match the criteria and confirm they auto-appear in the list']
          },
          quiz: [{
            id: 'q-crm-16',
            question: 'What happens to an Active (Dynamic) List when a new contact record is created that meets its filter criteria?',
            options: ['The list breaks', 'The new contact is automatically added to the list without manual action', 'The admin gets a text', 'The contact is deleted'],
            correctOptionIndex: 1,
            explanation: 'Active lists automatically re-evaluate and update contact membership in real time.'
          }]
        },
        {
          id: 'les-crm-17',
          dayNumber: 17,
          title: 'Building Executive Sales & Marketing Dashboards',
          titleMl: 'ഡേ 17: എക്സിക്യൂട്ടീവ് സിആർഎം ഡാഷ്‌ബോർഡ്',
          durationMinutes: 55,
          overview: 'Assemble report widgets on an executive dashboard: Deals Won this Month, Pipeline Forecast, Lead Sources, and Team Activity Count.',
          concepts: ['Report library widgets in HubSpot', 'Scheduling automated weekly dashboard PDF email reports to leadership'],
          simpleEnglishGuide: 'Company CEOs do not look at individual contacts. They look at the dashboard to see total revenue won and which marketing channel brought the best leads.',
          malayalamNotes: 'കമ്പനി ഉടമകൾക്ക് ബിസിനസ്സ് നിലവാരം ഒറ്റനോട്ടത്തിൽ കാണിക്കുന്ന ഡാഷ്‌ബോർഡുകൾ.',
          officialDocLinks: [{ title: 'Create and customize dashboards in HubSpot', url: 'https://knowledge.hubspot.com/dashboards/create-and-edit-dashboards' }],
          videoResources: [{
            title: 'How to Build an Executive Dashboard in HubSpot CRM',
            provider: 'YouTube CRM Training',
            url: 'https://www.youtube.com/results?search_query=hubspot+dashboard+reporting+tutorial',
            language: 'English',
            duration: '21 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Configure an executive dashboard with 4 report widgets.',
            tasks: ['1. Total Pipeline Value by Stage, 2. Deals Won this Month, 3. Contacts by Lead Source, 4. Calls Logged this Week']
          },
          quiz: [{
            id: 'q-crm-17',
            question: 'What is the primary function of an executive CRM dashboard?',
            options: ['To watch videos', 'To display high-level visual business metrics and sales health in one consolidated real-time screen', 'To store passwords', 'To edit photos'],
            correctOptionIndex: 1,
            explanation: 'Dashboards aggregate operational database transactions into strategic visual KPIs.'
          }]
        },
        {
          id: 'les-crm-18',
          dayNumber: 18,
          title: 'Compiling Your CRM Specialist Portfolio Dossier',
          titleMl: 'ഡേ 18: സിആർഎം പോർട്ട്ഫോളിയോ നിർമ്മാണം',
          durationMinutes: 50,
          overview: 'Package your HubSpot portal setup, custom properties dictionary, and sample pipeline dashboard into a public showcase.',
          concepts: ['Documenting CRM data architecture in a portfolio', 'Taking clean redacted screenshots of portal configurations'],
          simpleEnglishGuide: 'A portfolio document with screenshots of your custom properties, zero-error import history, and pipeline dashboard proves you are a real administrator.',
          malayalamNotes: 'നിങ്ങൾ ചെയ്ത സിആർഎം വർക്കുകൾ ഉൾപ്പെടുത്തി തൊഴിലുടമകൾക്ക് കാണിക്കാനുള്ള പോർട്ട്ഫോളിയോ ഉണ്ടാക്കുന്നു.',
          officialDocLinks: [{ title: 'HubSpot Free Certifications', url: 'https://academy.hubspot.com' }],
          videoResources: [{
            title: 'How to Showcase CRM Skills on Your Resume & Portfolio',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=crm+specialist+portfolio+guide',
            language: 'English',
            duration: '18 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Compile your CRM Specialist Portfolio PDF.',
            tasks: ['Include 1. Portal Property Dictionary, 2. Import Audit Walkthrough, 3. Pipeline Dashboard Screenshot']
          },
          quiz: [{
            id: 'q-crm-18',
            question: 'What free official certification significantly boosts an entry-level CRM applicant\'s credibility?',
            options: ['Driving license', 'HubSpot Inbound & Sales Software Certification (available 100% free on HubSpot Academy)', 'Typing certificate only', 'None exists'],
            correctOptionIndex: 1,
            explanation: 'Official free credentials from HubSpot Academy carry high industry recognition among employers.'
          }]
        },
        {
          id: 'les-crm-19',
          dayNumber: 19,
          title: 'Writing an ATS CRM Resume & Interview Scenarios',
          titleMl: 'ഡേ 19: സിആർഎം റെസ്യൂമെ & ഇന്റർവ്യൂ ചോദ്യങ്ങൾ',
          durationMinutes: 55,
          overview: 'Prepare for CRM specialist interviews: explaining how you clean corrupt CSV files, structure pipelines, and train sales reps.',
          concepts: ['Target job titles: "CRM Administrator Junior", "HubSpot Specialist", "Sales Operations Assistant", "CRM Data Entry Specialist"'],
          simpleEnglishGuide: 'In your interview, they will ask: "What do you do when a salesperson complains that contacts are missing?" Answer: "I check their filter views first, verify ownership assignment, and inspect the recycle bin audit logs".',
          malayalamNotes: 'സിആർഎം ഇന്റർവ്യൂകളിൽ ചോദിക്കുന്ന പ്രധാന ചോദ്യങ്ങൾക്ക് മറുപടി നൽകാൻ പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'Career Launchpad Resume Builder', url: '/resume-builder' }],
          videoResources: [{
            title: 'Top 10 CRM Administrator Interview Questions & Answers',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=crm+administrator+interview+questions+answers',
            language: 'English',
            duration: '22 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Build your CRM Specialist resume and practice answering 5 standard interview scenarios.',
            tasks: ['Highlight HubSpot, Excel Data Cleaning (TRIM/PROPER), CSV Imports, and Pipeline Management']
          },
          quiz: [{
            id: 'q-crm-19',
            question: 'What is the best answer when an interviewer asks how you ensure sales reps actually use the CRM?',
            options: ['I report them to the CEO', 'I make the CRM easy to use: simplifying mandatory fields, setting up automated follow-up reminders, and building clean custom views tailored to their daily workflow', 'I do all their work for them', 'I ignore them'],
            correctOptionIndex: 1,
            explanation: 'Emphasizing user-centric workflows and reducing data friction encourages voluntary team adoption.'
          }]
        },
        {
          id: 'les-crm-20',
          dayNumber: 20,
          title: 'Course Final Assessment & First-Month Workplace Blueprint',
          titleMl: 'ഡേ 20: ഫൈനൽ അസസ്സ്‌മെന്റും വർക്ക്പ്ലേസ് ഗൈഡും',
          durationMinutes: 60,
          overview: 'Complete the comprehensive CRM competency assessment, submit project proofs, and review first-month job safety rules.',
          concepts: ['First 30 days CRM admin checklist', 'Exporting periodic portal backups before major structural changes'],
          simpleEnglishGuide: 'Always take a full export of Contacts and Companies before making bulk property edits. A backup file is your safety parachute.',
          malayalamNotes: 'സിആർഎം അഡ്മിനായി ജോലി ആരംഭിച്ച ശേഷം ശ്രദ്ധിക്കേണ്ട സുരക്ഷാ കാര്യങ്ങൾ.',
          officialDocLinks: [{ title: 'Export your data in HubSpot', url: 'https://knowledge.hubspot.com/crm-setup/export-contacts-companies-deals-or-tickets' }],
          videoResources: [{
            title: 'First 30 Days as a CRM Administrator — Success Blueprint',
            provider: 'YouTube CRM Training',
            url: 'https://www.youtube.com/results?search_query=first+month+as+crm+admin+tips',
            language: 'English',
            duration: '18 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Export a full backup ZIP/CSV of your test portal records and verify all properties exported cleanly.',
            tasks: ['Submit course deliverables for final completion verification']
          },
          quiz: [{
            id: 'q-crm-20',
            question: 'Why should a CRM administrator perform regular full database exports?',
            options: ['To fill up disk space', 'To maintain an independent offline backup of all business relationships in case of accidental bulk deletion or system lockouts', 'For fun', 'It is not recommended'],
            correctOptionIndex: 1,
            explanation: 'Independent periodic database exports protect the organization from accidental data corruption.'
          }]
        }
      ]
    }
  ],
  projects: [
    {
      id: 'proj-crm-1',
      title: 'Full HubSpot Portal Architecture & Property Dictionary',
      titleMl: 'ഹബ്സ്പോട്ട് പോർട്ടൽ ആർക്കിടെക്ചർ & ഡിക്ഷണറി',
      description: 'Design and configure a complete B2B client CRM portal in HubSpot with 10 custom properties, group structures, and data validation rules.',
      scenario: 'A commercial solar installation company "SunPower Kerala" is migrating from chaotic paper files to HubSpot CRM. You are hired as the junior CRM specialist to build their property schema, configure custom dropdowns, and establish data standards.',
      instructions: [
        'Set up a free HubSpot portal with company name "SunPower Kerala"',
        'Create 8 custom Contact & Company properties (e.g. "Roof Size SqFt", "Monthly Power Bill ₹", "Building Type", "Decision Maker Role")',
        'Organize properties into logical property groups (e.g. "Solar Technical Assessment Info")',
        'Write a complete "Data Dictionary Document" (PDF) defining every property, its data type, and instructions for team members'
      ],
      deliverables: [
        'SunPower Kerala CRM Data Dictionary Document (PDF)',
        'Screenshot proof of the configured custom properties inside the HubSpot settings panel'
      ],
      downloadableDataFilename: 'sunpower_property_specifications.json',
      downloadableDataContent: JSON.stringify({
        company: 'SunPower Kerala',
        industry: 'Commercial Solar Energy',
        custom_fields_needed: [
          { name: 'Monthly Electricity Bill (INR)', type: 'Number', required: true },
          { name: 'Premises Type', type: 'Dropdown', options: ['Commercial Factory', 'Hospital', 'Educational Institution', 'Residential Villa'] },
          { name: 'Connection Phase', type: 'Dropdown', options: ['Single Phase', 'Three Phase 11KV', 'HT Connection'] }
        ]
      }, null, 2),
      gradingRubric: [
        { criterion: 'Property Typing Accuracy', weight: 40, standard: 'Correct data types selected (Dropdowns for constrained choices, Numbers for currency/measurements).' },
        { criterion: 'Data Dictionary Completeness', weight: 35, standard: 'Dictionary clearly explains every property\'s internal name, label, and allowed values.' },
        { criterion: 'Logical Grouping', weight: 25, standard: 'Properties are grouped neatly rather than cluttering default contact info.' }
      ],
      modelSolutionOverview: 'The project displays clean custom property groups in HubSpot, with non-overlapping dropdown options and a professional 3-page Data Dictionary PDF.'
    },
    {
      id: 'proj-crm-2',
      title: 'Bulk Lead Migration & De-Duplication Case Study',
      titleMl: 'ബൾക്ക് ലീഡ് ഇമ്പോർട്ടും ഡ്യൂപ്ലിക്കേറ്റ് ലയനവും',
      description: 'Clean a raw lead sheet of 50 business contacts in Excel, map headers, execute a zero-error HubSpot import, and merge duplicate records.',
      scenario: 'The marketing team collected 50 leads from a solar energy expo. The spreadsheet has unseparated full names, irregular phone numbers, and duplicate business records. You must clean the file, import it, and merge duplicate accounts.',
      instructions: [
        'Clean the raw CSV in Excel: split names into First and Last, standardize phone numbers with +91 country code, and verify email syntax',
        'Import the cleaned file into HubSpot mapping all columns to matching CRM properties with zero import errors',
        'Locate 3 duplicate corporate accounts (e.g., contacts with differing personal and work emails from the same firm) and merge them cleanly',
        'Document the before-and-after audit metrics in an Import Report'
      ],
      deliverables: [
        'Cleaned, ready-to-import CSV file',
        'CRM Import & De-duplication Report (PDF) with screenshots showing successful import of 50 records and successful duplicate merges'
      ],
      downloadableDataFilename: 'raw_solar_expo_leads.csv',
      downloadableDataContent: 'Full Name,Company,Email,Phone,City,Bill Amount\nArun Kumar,Apex Textiles,arun@apextextiles.in,9847012345,Kochi,45000\nDR P K NAIR,Care Hospital,dr.nair@carehosp.org,9447198765,Calicut,120000\nArun Kumar,Apex Textiles,arun.personal@gmail.com,9847012345,Kochi,45000\nSajeev Menon,Modern Cold Storage,sajeev@modcold.com,9895055443,Trivandrum,85000',
      gradingRubric: [
        { criterion: 'Spreadsheet Normalization', weight: 40, standard: 'Zero trailing spaces, separate first/last names, and valid +91 phone formatting.' },
        { criterion: 'Zero-Error Import', weight: 35, standard: 'HubSpot import history verifies clean import without rejected row errors.' },
        { criterion: 'Merge Integrity', weight: 25, standard: 'Duplicate records successfully unified under the primary company domain.' }
      ],
      modelSolutionOverview: 'The dossier includes the normalized CSV template, screenshots of the HubSpot column mapping wizard, the 0-error import log, and the merged contact timeline.'
    },
    {
      id: 'proj-crm-3',
      title: 'B2B Sales Pipeline & Executive Dashboard Suite',
      titleMl: 'സെയിൽസ് പൈപ്പ്‌ലൈനും എക്സിക്യൂട്ടീവ് ഡാഷ്‌ബോർഡും',
      description: 'Build a 5-stage B2B sales pipeline, populate with 10 deals, enforce mandatory loss reason properties, and build a 4-widget executive dashboard.',
      scenario: 'SunPower Kerala\'s sales director needs an executive pipeline dashboard to track ₹45L in active solar quotes, see deal progression, and analyze why deals are won or lost.',
      instructions: [
        'Configure the "Solar Projects Pipeline" with stages: 1. Site Visit Scheduled (20%), 2. Proposal Presented (40%), 3. Contract Negotiation (70%), 4. Closed Won (100%), 5. Closed Lost (0%)',
        'Enforce a mandatory "Closed Lost Reason" dropdown when deals enter the Closed Lost stage',
        'Populate the pipeline with 10 realistic deals totaling over ₹30,00,000 in pipeline value',
        'Build an Executive Dashboard featuring: 1. Pipeline Value by Stage (Bar chart), 2. Won Revenue this Quarter (KPI Counter), 3. Deals by Owner, 4. Closed Lost Reasons breakdown'
      ],
      deliverables: [
        'Public shareable view or clean PDF export of the Executive Sales Dashboard',
        'Screenshot walkthrough of the interactive Kanban deal board'
      ],
      gradingRubric: [
        { criterion: 'Pipeline Architecture & Probability', weight: 35, standard: 'Stages reflect the commercial sales journey with logical win probability progression.' },
        { criterion: 'Mandatory Property Validation', weight: 35, standard: 'Closed Lost stage requires selection of standardized lost reason dropdown before closing.' },
        { criterion: 'Dashboard Insight Quality', weight: 30, standard: 'Dashboard widgets give immediate strategic visibility into revenue and bottleneck stages.' }
      ],
      modelSolutionOverview: 'The completed dashboard provides real-time visibility into total unweighted vs weighted pipeline value, with clear visual charts illustrating stage distribution and conversion health.'
    }
  ],
  workplaceGuidance: {
    firstWeek: [
      'Export a full backup CSV of existing Contacts, Companies, and Deals before making any changes in the client\'s CRM.',
      'Check if the CRM is integrated with third-party web forms or email marketing tools (like Mailchimp or WordPress forms) to avoid breaking connections.',
      'Familiarize yourself with the sales team\'s terminology (e.g. what qualifies a lead as "Sales Qualified").',
      'Never delete a contact record permanently without written managerial approval; set status to "Unqualified" or "Archived" instead.'
    ],
    firstMonth: [
      'Schedule a recurring weekly de-duplication audit to catch duplicate entries created by online form submissions.',
      'Monitor sales rep task completion rates and gently remind reps of overdue follow-up tasks.',
      'Keep your custom properties dictionary updated whenever new fields are requested by department heads.'
    ],
    commonMistakes: [
      'Importing a CSV where First Name and Last Name were not separated, corrupting automated email greetings.',
      'Creating multiple custom properties for the same concept (e.g. creating "Phone Number 2" when an existing "Mobile Phone" field already existed).',
      'Merging contacts without verifying company domain matches, accidentally combining two different individuals.'
    ]
  },
  interviewPrep: [
    {
      question: 'What is the difference between an Active List and a Static List in HubSpot, and when would you use each?',
      answer: 'A Static List is a permanent snapshot of contacts who met specific criteria at a single point in time, and its membership never changes unless manually edited—ideal for tracking attendees of a specific event or trade expo. An Active List is dynamic: its membership automatically recalculates in real time, adding contacts when they meet criteria and removing them when they no longer qualify—ideal for ongoing operational workflows like "New Leads Contacted in the Last 7 Days".',
      tips: 'A definitive test of real HubSpot operational literacy.'
    },
    {
      question: 'How do you prevent duplicate records when importing large CSV lists into a CRM?',
      answer: 'I ensure every single row in the spreadsheet has a clean, validated email address because CRMs like HubSpot use email as the primary unique key to match existing records. When an email in the CSV matches an existing CRM record, the system updates the existing contact rather than creating a duplicate. For company imports, I use the company domain name (e.g. company.com) as the unique matching key.',
      tips: 'Highlights your deep understanding of database deduplication mechanics.'
    },
    {
      question: 'What do you do if a sales rep complains that the CRM is too complicated and refuses to log their calls?',
      answer: 'I approach the rep with empathy to understand their specific friction points. Usually, reps resist when forced to fill out too many mandatory fields. I streamline the interface by hiding unnecessary properties, setting up simple 1-click call outcome buttons, and training them on quick mobile logging so recording interactions takes less than 30 seconds.',
      tips: 'Shows emotional intelligence, empathy, and change management skills.'
    }
  ]
};
