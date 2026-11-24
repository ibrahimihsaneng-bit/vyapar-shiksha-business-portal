import { Course } from '@/types';

export const virtualAssistantCourse: Course = {
  id: 'course-va',
  careerSlug: 'virtual-assistant',
  title: 'Virtual Assistant Foundation (30 Days)',
  titleMl: 'വെർച്വൽ അസിസ്റ്റന്റ് ഫൗണ്ടേഷൻ കോഴ്സ് (30 ദിവസങ്ങൾ)',
  durationDays: 30,
  weeklyGoals: [
    {
      weekNumber: 1,
      title: 'Google Workspace Mastery & Email Triage',
      objective: 'Master professional Gmail organization, Google Drive cloud structures, Docs formatting, and calendar scheduling across global time zones.'
    },
    {
      weekNumber: 2,
      title: 'Spreadsheets, Lead Organization & Data Verification',
      objective: 'Organize executive contact lists, build lead trackers, use data validation, and produce clean summary reports using Google Sheets.'
    },
    {
      weekNumber: 3,
      title: 'Remote Collaboration, Meetings & Executive Support',
      objective: 'Run asynchronous communication in Slack, schedule multi-attendee Zoom/Meet syncs, take structured meeting minutes, and handle task boards in Trello/Notion.'
    },
    {
      weekNumber: 4,
      title: 'Portfolio Projects, Resume & First Job Preparation',
      objective: 'Complete 3 simulated client scenarios, build an ATS-friendly resume, prepare interview responses, and set up client outreach profiles.'
    },
    {
      weekNumber: 5,
      title: 'Week 5: Project Management, CRM Hygiene & Meeting Operations',
      objective: 'Master Asana/Trello task delegation, Zoom meeting minutes with action trackers, and CRM contact hygiene.'
    },
    {
      weekNumber: 6,
      title: 'Week 6: SOP Documentation, Client Onboarding & Freelance Launch',
      objective: 'Build standard operating procedure (SOP) playbooks, package your virtual assistant portfolio, and land contracts.'
    }
    ],

  modules: [
    {
      id: 'mod-va-1',
      weekNumber: 1,
      title: 'Week 1: Google Workspace & Remote Administration',
      titleMl: 'ആഴ്ച 1: ഗൂഗിൾ വർക്ക്‌സ്‌പേസും റിമോട്ട് ഓഫീസ് മാനേജ്‌മെന്റും',
      objective: 'Learn professional email etiquette, inbox zero techniques, Google Drive filing systems, and appointment management.',
      lessons: [
        {
          id: 'les-va-1',
          dayNumber: 1,
          title: 'The Modern Virtual Assistant: Role, Etiquette & Mindset',
          titleMl: 'ഡേ 1: വെർച്വൽ അസിസ്റ്റന്റ് കരിയർ — പ്രാഥമിക കാര്യങ്ങൾ',
          durationMinutes: 45,
          overview: 'Understand what high-performing virtual assistants actually do, the importance of proactive communication, and how remote teams function.',
          concepts: [
            'Asynchronous vs synchronous communication',
            'Confidentiality and non-disclosure agreements (NDAs)',
            'Time management using time-blocking techniques'
          ],
          simpleEnglishGuide: 'A virtual assistant helps clients save time. You do not wait to be told every small step; you ask clarifying questions upfront, write polite updates, and keep accurate records.',
          malayalamNotes: 'ഒരു വെർച്വൽ അസിസ്റ്റന്റ് ക്ലയന്റുകളുടെ സമയം ലാഭിക്കാൻ സഹായിക്കുന്ന ആളാണ്. കൃത്യനിഷ്ഠയും മാന്യമായ ആശയവിനിമയവുമാണ് ഇതിൽ പ്രധാനം.',
          officialDocLinks: [
            { title: 'Google Workspace Learning Center', url: 'https://support.google.com/a/users/' }
          ],
          videoResources: [
            {
              title: 'Virtual Assistant for Beginners — Full Orientation',
              provider: 'YouTube / Career Launchpad Curated',
              url: 'https://www.youtube.com/results?search_query=virtual+assistant+beginner+guide+english',
              language: 'English',
              duration: '22 mins',
              isFree: true
            },
            {
              title: 'Virtual Assistant ജോലികൾ മലയാളത്തിൽ മനസ്സിലാക്കാം',
              provider: 'YouTube Malayalam Career',
              url: 'https://www.youtube.com/results?search_query=virtual+assistant+malayalam+work+from+home',
              language: 'Malayalam',
              duration: '18 mins',
              isFree: true
            }
          ],
          practicalExercise: {
            instructions: 'Set up your professional remote workstation folders in Google Drive with structured subdirectories.',
            tasks: [
              'Create a Google Drive folder named "Executive Client - Alpha Corp"',
              'Create subfolders: "01_Inbox_Triaged", "02_Meeting_Agendas", "03_Financial_Receipts", "04_Client_Templates"',
              'Apply color coding to distinguish active client folders from archives'
            ]
          },
          quiz: [
            {
              id: 'q-va-1',
              question: 'What is the primary objective of a remote executive assistant?',
              options: [
                'To write computer code for software applications',
                'To eliminate administrative friction and save the executive time',
                'To cold call sales leads all day',
                'To manage physical office desks'
              ],
              correctOptionIndex: 1,
              explanation: 'A virtual assistant removes operational burden (scheduling, emails, organization) so founders and managers can focus on core decisions.'
            }
          ]
        },
        {
          id: 'les-va-2',
          dayNumber: 2,
          title: 'Inbox Zero & Email Organization (Gmail Filters & Labels)',
          titleMl: 'ഡേ 2: ജിമെയിൽ ഫിൽട്ടറുകളും ഇൻബോക്സ് ഓർഗനൈസേഷനും',
          durationMinutes: 50,
          overview: 'Master the art of sorting hundreds of daily emails using color-coded labels, automated filter rules, and priority stars.',
          concepts: [
            'Inbox Zero philosophy (Delete, Delegate, Defer, Do)',
            'Gmail search operators (from:, has:attachment, larger:)',
            'Automated rule creation for newsletters and receipts'
          ],
          simpleEnglishGuide: 'When an email arrives, categorize it into: Needs Urgent Reply (Red), Awaiting Response (Orange), or Reference/Read Later (Green). Never leave 500 unread emails in the main inbox.',
          malayalamNotes: 'പ്രധാനപ്പെട്ട ഇമെയിലുകൾ വേർതിരിക്കാനും, ലേബലുകൾ ഉപയോഗിച്ച് കളർ കോഡ് ചെയ്യാനും പഠിക്കുന്നു.',
          officialDocLinks: [
            { title: 'Organize Gmail with Labels & Filters', url: 'https://support.google.com/mail/answer/6579' }
          ],
          videoResources: [
            {
              title: 'Master Gmail Filters & Inbox Zero Like a Pro',
              provider: 'YouTube Productivity',
              url: 'https://www.youtube.com/results?search_query=gmail+filters+labels+tutorial+for+assistants',
              language: 'English',
              duration: '19 mins',
              isFree: true
            }
          ],
          practicalExercise: {
            instructions: 'Create 3 automated filter rules in your personal or demo Gmail account.',
            tasks: [
              'Create a label called "@Action_Required" with a bright red color tag',
              'Create a label called "@Invoices_Receipts" and auto-filter messages containing the word "receipt"',
              'Test the rule by sending a test email with the subject "Receipt from Vendor"'
            ]
          },
          quiz: [
            {
              id: 'q-va-2',
              question: 'Which Gmail search operator finds emails containing PDF attachments?',
              options: ['type:pdf', 'filename:pdf or has:attachment', 'attachment=true', 'is:file'],
              correctOptionIndex: 1,
              explanation: 'Using "has:attachment filename:pdf" quickly isolates documents in Gmail.'
            }
          ]
        },
        {
          id: 'les-va-3',
          dayNumber: 3,
          title: 'Google Calendar Across Global Time Zones & Scheduling',
          titleMl: 'ഡേ 3: ഗൂഗിൾ കലണ്ടറും ടൈംസോൺ മാനേജ്‌മെന്റും',
          durationMinutes: 55,
          overview: 'Learn how to schedule meetings with clients in the US (EST/PST), UK (GMT), and Gulf (GST) without ever making a time calculation error.',
          concepts: [
            'Secondary time zone display in Google Calendar',
            'Buffer times between meetings to prevent fatigue',
            'Setting up Calendly booking links with availability limits'
          ],
          simpleEnglishGuide: 'Always check if daylight savings applies. When communicating meeting times, write: "Tuesday, March 5th at 2:00 PM EST / 11:30 PM IST". Always include both time zones.',
          malayalamNotes: 'വിദേശത്തുള്ള ക്ലയന്റുകളുമായി മീറ്റിംഗുകൾ നിശ്ചയിക്കുമ്പോൾ ടൈംസോൺ വ്യത്യാസങ്ങൾ കൃത്യമായി പരിശോധിക്കാൻ പഠിക്കുന്നു.',
          officialDocLinks: [
            { title: 'Google Calendar Multi-Timezone Setup', url: 'https://support.google.com/calendar/answer/37064' }
          ],
          videoResources: [
            {
              title: 'Executive Calendar Management for Virtual Assistants',
              provider: 'YouTube Assistant Training',
              url: 'https://www.youtube.com/results?search_query=google+calendar+time+zones+virtual+assistant',
              language: 'English',
              duration: '21 mins',
              isFree: true
            }
          ],
          practicalExercise: {
            instructions: 'Build a multi-timezone executive schedule with 4 recurring appointments.',
            tasks: [
              'Enable New York (EST) as a secondary timezone in your Google Calendar settings',
              'Create a 45-minute recurring Monday check-in at 9:00 AM EST with a Google Meet link',
              'Add a 15-minute buffer before and after the call to ensure no double-booking'
            ]
          },
          quiz: [
            {
              id: 'q-va-3',
              question: 'If a client in Dubai (GST, UTC+4) requests a call at 10:00 AM, what time is that in India (IST, UTC+5:30)?',
              options: ['9:30 AM IST', '11:30 AM IST', '12:00 PM IST', '8:30 AM IST'],
              correctOptionIndex: 1,
              explanation: 'India is 1 hour and 30 minutes ahead of Dubai (UTC+4 to UTC+5:30). 10:00 AM in Dubai is 11:30 AM in India.'
            }
          ]
        },
        {
          id: 'les-va-4',
          dayNumber: 4,
          title: 'Professional Correspondence & Business Email Templates',
          titleMl: 'ഡേ 4: ബിസിനസ്സ് ഇമെയിൽ എഴുത്ത് രീതികൾ',
          durationMinutes: 45,
          overview: 'Write clear, concise, and respectful English emails for meeting requests, status updates, and rescheduling.',
          concepts: [
            'The 3-paragraph email formula (Context, Action/Decision, Next Step)',
            'Handling difficult emails (rescheduling politely, confirming receipts)',
            'Professional email sign-offs and signatures'
          ],
          simpleEnglishGuide: 'Keep business emails short. Busy managers read on mobile phones. Use bullet points for choices and state clear deadlines.',
          malayalamNotes: 'മാന്യവും ലളിതവുമായ ഇംഗ്ലീഷിൽ ബിസിനസ്സ് ഇമെയിലുകൾ എഴുതുന്ന രീതികൾ.',
          officialDocLinks: [
            { title: 'Google Docs Business Letter Templates', url: 'https://docs.google.com' }
          ],
          videoResources: [
            {
              title: 'Business Email Writing for Remote Workers',
              provider: 'YouTube Business English',
              url: 'https://www.youtube.com/results?search_query=business+email+writing+virtual+assistant',
              language: 'English',
              duration: '18 mins',
              isFree: true
            }
          ],
          practicalExercise: {
            instructions: 'Write 3 professional email templates in a Google Doc.',
            tasks: [
              'Template 1: Rescheduling an executive meeting politely due to a client emergency',
              'Template 2: Following up on an invoice that is 7 days overdue',
              'Template 3: Weekly Friday progress report summarizing 4 completed tasks'
            ]
          },
          quiz: [
            {
              id: 'q-va-4',
              question: 'Which of the following is the most professional subject line for rescheduling?',
              options: [
                'Change time',
                'Urgent: Need to talk',
                'Rescheduling Request: Alpha Corp Sync - New Proposed Times',
                'Sorry I cannot make it'
              ],
              correctOptionIndex: 2,
              explanation: 'Professional subject lines include the purpose, company or context, and direct next steps.'
            }
          ]
        },
        {
          id: 'les-va-5',
          dayNumber: 5,
          title: 'Week 1 Review, Hands-On Drill & Practice Assessment',
          titleMl: 'ഡേ 5: ആഴ്ച 1 പരിശീലന വിലയിരുത്തൽ',
          durationMinutes: 60,
          overview: 'Consolidate all Week 1 skills into a timed executive office simulation.',
          concepts: ['Consolidation of Drive, Gmail, Calendar, and Writing skills'],
          simpleEnglishGuide: 'Review all tasks done this week. Test yourself by executing an urgent inbox triage scenario in under 20 minutes.',
          malayalamNotes: 'ഒന്നാം ആഴ്ച പഠിച്ച കാര്യങ്ങൾ ഒരുമിച്ച് പരിശീലിക്കുന്നു.',
          officialDocLinks: [{ title: 'Google Workspace Skills Assessment', url: 'https://support.google.com/a/users/' }],
          videoResources: [{
            title: 'Virtual Assistant Week 1 Comprehensive Drill',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=virtual+assistant+week+1+practice',
            language: 'English',
            duration: '25 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Complete the simulated 1-day executive briefing document.',
            tasks: [
              'Combine calendar agenda, triaged emails, and action items into a clean 1-page Google Doc briefing',
              'Export the completed briefing as a clean PDF titled "Daily_Executive_Brief_Sample.pdf"'
            ]
          },
          quiz: [
            {
              id: 'q-va-5',
              question: 'When an executive has back-to-back calls, what should a virtual assistant automatically schedule?',
              options: ['A cancellation', 'A 10-15 minute buffer period for comfort and notes', 'A second simultaneous call', 'A calendar deletion'],
              correctOptionIndex: 1,
              explanation: 'Buffer periods prevent meeting overruns from cascading and causing stress.'
            }
          ]
        }
      ]
    },
    {
      id: 'mod-va-2',
      weekNumber: 2,
      title: 'Week 2: Spreadsheets, Lead Lists & Data Verification',
      titleMl: 'ആഴ്ച 2: സ്പ്രെഡ്ഷീറ്റുകളും ഡാറ്റാ വെരിഫിക്കേഷനും',
      objective: 'Manage executive contact records, format lead lists, apply data validation dropdowns, and prevent data corruption.',
      lessons: [
        {
          id: 'les-va-6',
          dayNumber: 6,
          title: 'Google Sheets for VAs: Anatomy of Clean Data',
          titleMl: 'ഡേ 6: ഗൂഗിൾ ഷീറ്റ്സ് അടിസ്ഥാന കാര്യങ്ങൾ',
          durationMinutes: 50,
          overview: 'Learn how to structure spreadsheets so data is never accidentally overwritten or misaligned.',
          concepts: ['Header freezes', 'Column auto-fitting', 'Text wrapping and alternating row colors'],
          simpleEnglishGuide: 'Never mix dates, names, and phone numbers in the same column. One piece of data per column makes filtering easy.',
          malayalamNotes: 'ഡാറ്റ എന്റർ ചെയ്യുമ്പോൾ കൃത്യമായ കോളങ്ങളും റോകളും ഉപയോഗിക്കുന്ന വിധം.',
          officialDocLinks: [{ title: 'Google Sheets Basics', url: 'https://support.google.com/docs/topic/9054603' }],
          videoResources: [{
            title: 'Google Sheets for Beginners in Malayalam',
            provider: 'YouTube Tech Malayalam',
            url: 'https://www.youtube.com/results?search_query=google+sheets+for+beginners+malayalam',
            language: 'Malayalam',
            duration: '24 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Create a clean vendor tracking sheet with 10 rows of mock vendor data.',
            tasks: ['Freeze the top row', 'Apply alternating row colors (soft teal/gray)', 'Add a Total Expenses formula using =SUM()']
          },
          quiz: [{
            id: 'q-va-6',
            question: 'Why should the top header row of a data sheet be frozen?',
            options: ['To lock the computer screen', 'So headers remain visible when scrolling down hundreds of records', 'To prevent editing', 'To save ink'],
            correctOptionIndex: 1,
            explanation: 'Freezing headers keeps column names in view throughout long tables.'
          }]
        },
        {
          id: 'les-va-7',
          dayNumber: 7,
          title: 'Data Validation, Dropdowns & Error Prevention',
          titleMl: 'ഡേ 7: ഡ്രോപ്ഡൗൺ ലിസ്റ്റുകളും ഡാറ്റാ വാലിഡേഷനും',
          durationMinutes: 50,
          overview: 'Use dropdown chips in Google Sheets so team members cannot type misspelled statuses.',
          concepts: ['Data validation rules', 'Dropdown chips (e.g., Pending, Contacted, Won, Lost)', 'Checkbox completion columns'],
          simpleEnglishGuide: 'Dropdowns stop typing mistakes. If someone types "contatced" with a typo, sorting fails. A dropdown ensures 100% clean data.',
          malayalamNotes: 'തെറ്റുകൾ വരാതിരിക്കാൻ ഡ്രോപ്ഡൗൺ ലിസ്റ്റുകൾ നിർമ്മിക്കാൻ പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'Create in-cell dropdown lists', url: 'https://support.google.com/docs/answer/186103' }],
          videoResources: [{
            title: 'Google Sheets Dropdown Chips & Checkboxes',
            provider: 'YouTube Workspace Tutorials',
            url: 'https://www.youtube.com/results?search_query=google+sheets+dropdown+chips+tutorial',
            language: 'English',
            duration: '15 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Build a Lead Status pipeline in Google Sheets with color-coded status chips.',
            tasks: [
              'Create a status column with options: "New Lead" (Blue), "Contacted" (Yellow), "Qualified" (Green), "Closed" (Gray)',
              'Add an interactive Checkbox column for "Follow-up Completed"'
            ]
          },
          quiz: [{
            id: 'q-va-7',
            question: 'What happens when a cell has strict data validation and a user types an unapproved value?',
            options: ['The file is deleted', 'An error alert appears and rejects the invalid entry', 'The computer restarts', 'It automatically translates'],
            correctOptionIndex: 1,
            explanation: 'Data validation protects database integrity by rejecting non-standard inputs.'
          }]
        },
        {
          id: 'les-va-8',
          dayNumber: 8,
          title: 'Building a Lead & Influencer Outreach Tracker',
          titleMl: 'ഡേ 8: ലീഡ് ട്രാക്കിംഗ് ഷീറ്റ് തയ്യാറാക്കൽ',
          durationMinutes: 55,
          overview: 'Learn how clients hire VAs to build prospective partner lists and record contact touchpoints.',
          concepts: ['Lead columns (Company, Name, Title, Verified Email, LinkedIn, Outreach Status, Notes)', 'Hyperlink hygiene'],
          simpleEnglishGuide: 'Always test every URL before pasting it into a shared client sheet. Verify that email addresses are not bounced.',
          malayalamNotes: 'ബിസിനസ്സുകൾക്ക് ആവശ്യമായ ലീഡുകളുടെ ലിസ്റ്റ് ചിട്ടയോടെ സൂക്ഷിക്കുന്ന രീതി.',
          officialDocLinks: [{ title: 'Google Sheets Sharing & Permissions', url: 'https://support.google.com/docs/answer/2494822' }],
          videoResources: [{
            title: 'How to Build a Lead Generation Tracker in Google Sheets',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=lead+generation+tracker+google+sheets',
            language: 'English',
            duration: '20 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Create a 15-row lead tracker for a hypothetical organic skincare brand seeking retail store partnerships.',
            tasks: ['Include Store Name, City, Phone, Contact Person, Website, and Status', 'Format all URLs as clean clickable links']
          },
          quiz: [{
            id: 'q-va-8',
            question: 'What is the safest sharing permission when sending a finished client spreadsheet for review only?',
            options: ['Anyone with the link can Edit', 'Anyone with the link can View', 'Make public on the web with delete access', 'Send password in email'],
            correctOptionIndex: 1,
            explanation: '"View" access prevents accidental modification or deletion of formulas by third parties.'
          }]
        },
        {
          id: 'les-va-9',
          dayNumber: 9,
          title: 'Basic Expense Tracking & Receipt Reconciliation',
          titleMl: 'ഡേ 9: ചെലവുകൾ രേഖപ്പെടുത്തലും കണക്ക് ഒത്തുനോക്കലും',
          durationMinutes: 50,
          overview: 'Help clients keep track of digital subscriptions, software licenses, travel tickets, and office supplies.',
          concepts: ['Expense classification', 'Linking receipts in Google Drive to spreadsheet line items', 'Monthly category totals with SUMIFS'],
          simpleEnglishGuide: 'For every money amount spent, attach a screenshot or PDF link of the receipt. When tax season comes, the client is fully prepared.',
          malayalamNotes: 'ഓഫീസ് ചെലവുകളും ബില്ലുകളും ഗൂഗിൾ ഷീറ്റിൽ രേഖപ്പെടുത്തി ലിങ്ക് ചെയ്യുന്ന വിധം.',
          officialDocLinks: [{ title: 'Google Sheets Formulas Overview', url: 'https://support.google.com/docs/table/25273' }],
          videoResources: [{
            title: 'Expense Tracking in Google Sheets for Small Business',
            provider: 'YouTube Workspace Tutorials',
            url: 'https://www.youtube.com/results?search_query=expense+tracking+google+sheets+assistant',
            language: 'English',
            duration: '18 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Log 10 sample business expenses (Zoom license, Canva Pro, Flight booking, Stationery) with categorized SUM formula totals.',
            tasks: ['Categorize into Software, Travel, Office, Marketing', 'Calculate category subtotals using =SUMIF()']
          },
          quiz: [{
            id: 'q-va-9',
            question: 'Which formula calculates the sum of cells from C2 to C15?',
            options: ['=ADD(C2:C15)', '=SUM(C2:C15)', '=COUNT(C2:C15)', '=TOTAL(C2:C15)'],
            correctOptionIndex: 1,
            explanation: '=SUM(C2:C15) adds all numbers in that range.'
          }]
        },
        {
          id: 'les-va-10',
          dayNumber: 10,
          title: 'Week 2 Review & Portfolio Asset 1 Finalization',
          titleMl: 'ഡേ 10: ആഴ്ച 2 പ്രോജക്റ്റ് പൂർത്തീകരണം',
          durationMinutes: 60,
          overview: 'Review your tracking sheets and finalize your first portfolio-ready executive operations workbook.',
          concepts: ['Packaging spreadsheet workbooks for client portfolios', 'Adding an instructions tab for users'],
          simpleEnglishGuide: 'Add a "Read Me" tab at the front of your spreadsheet explaining what the sheet does and how to use it.',
          malayalamNotes: 'തയ്യാറാക്കിയ ഷീറ്റുകൾ പോർട്ട്ഫോളിയോയിലേക്ക് ഉൾപ്പെടുത്താൻ പാകത്തിൽ മനോഹരമാക്കുക.',
          officialDocLinks: [{ title: 'Google Sheets Publish to Web', url: 'https://support.google.com/docs/answer/183965' }],
          videoResources: [{
            title: 'How to Showcase Google Sheets in Your Freelance Portfolio',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=showcase+google+sheets+portfolio',
            language: 'English',
            duration: '17 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Assemble your Multi-Tab Executive Operations Workbook (Tabs: 1. ReadMe, 2. Calendar Schedule, 3. Lead Tracker, 4. Expense Log).',
            tasks: ['Create a view-only shareable link', 'Verify formatting on both desktop and mobile views']
          },
          quiz: [{
            id: 'q-va-10',
            question: 'What is the purpose of a "ReadMe" or "Instructions" tab in a shared client spreadsheet?',
            options: ['It slows down the sheet', 'It tells the client who built the sheet, what each column means, and how to use it', 'It hides data', 'It is required by law'],
            correctOptionIndex: 1,
            explanation: 'An instructions tab gives immediate clarity and shows professional polish.'
          }]
        }
      ]
    },
    {
      id: 'mod-va-3',
      weekNumber: 3,
      title: 'Week 3: Remote Tools, Task Boards & Meeting Coordination',
      titleMl: 'ആഴ്ച 3: റിമോട്ട് ടൂളുകളും മീറ്റിംഗ് ഏകോപനവും',
      objective: 'Coordinate daily team tasks in Trello and Notion, record accurate meeting minutes, and handle online travel booking research.',
      lessons: [
        {
          id: 'les-va-11',
          dayNumber: 11,
          title: 'Slack & Asynchronous Team Communication',
          titleMl: 'ഡേ 11: സ്ലാക്ക് (Slack) റിമോട്ട് കമ്മ്യൂണിക്കേഷൻ',
          durationMinutes: 45,
          overview: 'Learn Slack channels, message threads, status emojis, and respectful notification etiquette across remote teams.',
          concepts: ['Replying in threads to prevent channel clutter', 'Scheduling Slack messages for recipient time zones', 'Using status updates for availability'],
          simpleEnglishGuide: 'Always reply inside the message thread so the main conversation remains clean. Use emojis like checkmarks to acknowledge requests quickly.',
          malayalamNotes: 'ടീമുകൾ തമ്മിൽ ചാറ്റ് ചെയ്യാനും ഫയലുകൾ കൈമാറാനും സ്ലാക്ക് ഉപയോഗിക്കുന്ന വിധം.',
          officialDocLinks: [{ title: 'Slack Getting Started Guide', url: 'https://slack.com/help/categories/200111606-Using-Slack' }],
          videoResources: [{
            title: 'Slack Tutorial for Beginners — Virtual Assistant Guide',
            provider: 'YouTube Remote Work',
            url: 'https://www.youtube.com/results?search_query=slack+tutorial+for+beginners+virtual+assistant',
            language: 'English',
            duration: '18 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Join or create a free practice Slack workspace.',
            tasks: ['Create channels: #general, #client-updates, #urgent-tasks', 'Post a daily standup update: "Today: 1. Triaged inbox, 2. Finalized vendor calls"']
          },
          quiz: [{
            id: 'q-va-11',
            question: 'Why should remote workers reply within message "threads" in Slack instead of the main channel?',
            options: ['To hide messages', 'To keep channel discussions organized and avoid notifying unnecessary team members', 'Threads are private', 'Threads delete automatically'],
            correctOptionIndex: 1,
            explanation: 'Threads keep related replies grouped neatly without cluttering the main stream.'
          }]
        },
        {
          id: 'les-va-12',
          dayNumber: 12,
          title: 'Task Boards with Trello & Kanban Boards',
          titleMl: 'ഡേ 12: ട്രെല്ലോയും (Trello) ടാസ്ക് മാനേജ്‌മെന്റും',
          durationMinutes: 50,
          overview: 'Organize client to-do items into Kanban columns: To-Do, In Progress, Awaiting Approval, and Done.',
          concepts: ['Kanban visual workflow', 'Card checklists, due dates, and attachment links', 'Moving cards between columns as work progresses'],
          simpleEnglishGuide: 'When you take an assignment, move the card to "In Progress". When you finish, move it to "Awaiting Client Review" with the finished link attached.',
          malayalamNotes: 'ചെയ്യാനുള്ള ജോലികൾ വിഷ്വലായി ക്രമീകരിക്കാൻ ട്രെല്ലോ ഉപയോഗിക്കുന്നു.',
          officialDocLinks: [{ title: 'Trello Guide for New Users', url: 'https://trello.com/guide' }],
          videoResources: [{
            title: 'Trello for Beginners — Organize Projects Easily',
            provider: 'YouTube Productivity',
            url: 'https://www.youtube.com/results?search_query=trello+tutorial+for+beginners+virtual+assistant',
            language: 'English',
            duration: '21 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Create a free Trello board named "Executive Client Task Tracker".',
            tasks: [
              'Create lists: Backlog, This Week, In Progress, Review, Completed',
              'Create 5 cards with checklists and due dates (e.g., "Book Flight to Dubai", "Renew Domain")'
            ]
          },
          quiz: [{
            id: 'q-va-12',
            question: 'What is the main advantage of a Kanban board like Trello?',
            options: ['It writes documents for you', 'It gives immediate visual transparency over what is pending, what is in progress, and what is finished', 'It makes phone calls', 'It converts currency'],
            correctOptionIndex: 1,
            explanation: 'Kanban boards give executives a real-time visual overview of task progress without needing status meetings.'
          }]
        },
        {
          id: 'les-va-13',
          dayNumber: 13,
          title: 'Notion Basics for Workspace Organization',
          titleMl: 'ഡേ 13: നോഷൻ (Notion) ബേസിക്സ്',
          durationMinutes: 55,
          overview: 'Learn how to build company wiki pages, standard operating procedure (SOP) docs, and meeting agenda databases in Notion.',
          concepts: ['Blocks, toggle lists, callout boxes, and simple databases', 'Writing Standard Operating Procedures (SOPs)'],
          simpleEnglishGuide: 'An SOP is a recipe for a recurring job. Write: "How to export the weekly report: Step 1, Step 2, Step 3". If you take a vacation, anyone can follow your SOP.',
          malayalamNotes: 'കമ്പനിയുടെ പ്രവർത്തന രീതികൾ (SOP) ഡോക്യുമെന്റ് ചെയ്തു വെക്കാൻ നോഷൻ പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'Notion Help & Guides', url: 'https://www.notion.so/help' }],
          videoResources: [{
            title: 'Notion for Beginners — Complete Step by Step Guide',
            provider: 'YouTube Notion Guides',
            url: 'https://www.youtube.com/results?search_query=notion+for+beginners+step+by+step+assistant',
            language: 'English',
            duration: '25 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Build an SOP page in Notion titled "SOP: Daily Executive Morning Briefing".',
            tasks: ['Include 5 numbered steps', 'Use a Callout block for "Important Warning: Always check EST time differences before sending"']
          },
          quiz: [{
            id: 'q-va-13',
            question: 'What is a "Standard Operating Procedure" (SOP)?',
            options: ['A legal contract', 'A step-by-step written guide explaining how a recurring task must be completed', 'A type of software virus', 'A financial balance sheet'],
            correctOptionIndex: 1,
            explanation: 'SOPs document recurring business processes clearly so any team member can execute them consistently.'
          }]
        },
        {
          id: 'les-va-14',
          dayNumber: 14,
          title: 'Meeting Coordination & Accurate Minutes of Meeting (MoM)',
          titleMl: 'ഡേ 14: മീറ്റിംഗ് മിനിറ്റ്സ് (MoM) തയ്യാറാക്കൽ',
          durationMinutes: 50,
          overview: 'Attend simulated team calls, capture key discussion points, and record who owns which action item by what deadline.',
          concepts: ['Distinguishing discussion from decisions', 'The Action Items table (Task, Owner, Due Date, Status)', 'Immediate same-day dispatch rule'],
          simpleEnglishGuide: 'Do not write down every word spoken. Write: "Decision made: Client chose Option B. Action: Rahul to finalize contract by Friday 5 PM".',
          malayalamNotes: 'മീറ്റിംഗിൽ പറയുന്ന പ്രധാന തീരുമാനങ്ങളും ചെയ്യേണ്ട കാര്യങ്ങളും കൃത്യമായി കുറിച്ചുവെക്കുന്ന രീതി.',
          officialDocLinks: [{ title: 'Google Docs Meeting Notes Templates', url: 'https://docs.google.com' }],
          videoResources: [{
            title: 'How to Take Meeting Minutes (MoM) Like a Professional VA',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=meeting+minutes+virtual+assistant+mom+template',
            language: 'English',
            duration: '16 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Listen to a short recorded audio/transcript of a mock 5-minute team call and create an executive MoM document.',
            tasks: ['State Meeting Title, Date, Attendees', 'Record 3 Key Decisions', 'Build a 4-row Action Items Table']
          },
          quiz: [{
            id: 'q-va-14',
            question: 'What are the two most important columns in an executive Action Items table?',
            options: ['Font Size and Color', 'Task Owner and Due Date', 'Phone number and Address', 'Signature and Stamp'],
            correctOptionIndex: 1,
            explanation: 'Every action item must have a clear owner and a specific deadline to prevent accountability gaps.'
          }]
        },
        {
          id: 'les-va-15',
          dayNumber: 15,
          title: 'Travel Research & Itinerary Planning',
          titleMl: 'ഡേ 15: യാത്രകളുടെ പ്ലാനിംഗും റിസേർച്ചും',
          durationMinutes: 50,
          overview: 'Help executives research flight options, hotel bookings with flexible cancellations, and complete travel itineraries.',
          concepts: ['Comparing travel options across Google Flights and Skyscanner', 'Building clean day-by-day travel itinerary tables'],
          simpleEnglishGuide: 'Always check luggage policies and cancellation terms. Present your client with 3 choices: Best Price, Fastest Direct, and Flexible.',
          malayalamNotes: 'ക്ലയന്റുകൾക്ക് യാത്ര ചെയ്യാനുള്ള ഫ്ലൈറ്റ്, ഹോട്ടൽ വിവരങ്ങൾ അന്വേഷിച്ചു നൽകുന്ന രീതി.',
          officialDocLinks: [{ title: 'Google Flights Guide', url: 'https://www.google.com/travel/flights' }],
          videoResources: [{
            title: 'Travel Planning & Itinerary Creation for Virtual Assistants',
            provider: 'YouTube Assistant Training',
            url: 'https://www.youtube.com/results?search_query=travel+itinerary+planning+virtual+assistant',
            language: 'English',
            duration: '19 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Create a 3-day travel itinerary for an executive traveling from Kochi (COK) to Dubai (DXB).',
            tasks: ['Include 2 flight comparison options', 'Include hotel with free cancellation', 'Format as a clean 1-page PDF itinerary']
          },
          quiz: [{
            id: 'q-va-15',
            question: 'When presenting flight options to an executive, why should you give 2-3 structured choices?',
            options: ['To confuse the client', 'So the client can choose between speed, price, and schedule comfort without doing manual search', 'Because airlines require it', 'To fill space'],
            correctOptionIndex: 1,
            explanation: 'Presenting structured options (e.g. fastest vs best value) enables fast executive decision-making.'
          }]
        }
      ]
    },
    {
      id: 'mod-va-4',
      weekNumber: 4,
      title: 'Week 4: Portfolio, Resume & Job Applications',
      titleMl: 'ആഴ്ച 4: പോർട്ട്ഫോളിയോ, റെസ്യൂമെ & ജോലി നേടൽ',
      objective: 'Package your 3 practical projects into a public portfolio, build an ATS resume, pass interview screenings, and apply for entry-level work.',
      lessons: [
        {
          id: 'les-va-16',
          dayNumber: 16,
          title: 'Assembling Your 3 Core Virtual Assistant Portfolio Projects',
          titleMl: 'ഡേ 16: പോർട്ട്ഫോളിയോ പ്രോജക്റ്റുകൾ ചിട്ടപ്പെടുത്തൽ',
          durationMinutes: 55,
          overview: 'Review and package your Calendar schedule, Lead generation sheet, and Executive Briefing SOP into a public showcase.',
          concepts: ['Portfolio organization', 'Creating a clean Google Drive or Notion portfolio page', 'Writing project context summaries'],
          simpleEnglishGuide: 'Clients do not hire promises; they hire proof. When you can show a live spreadsheet and meeting notes, you win against competitors who only submit text resumes.',
          malayalamNotes: 'നിങ്ങൾ ചെയ്ത പ്രോജക്റ്റുകൾ തെളിവായി ഒരു പോർട്ട്ഫോളിയോ പേജിൽ മാറ്റിവെക്കുന്ന വിധം.',
          officialDocLinks: [{ title: 'Google Drive Public Sharing Link Guidelines', url: 'https://support.google.com' }],
          videoResources: [{
            title: 'How to Build a High-Converting VA Portfolio with No Experience',
            provider: 'YouTube Freelance Guides',
            url: 'https://www.youtube.com/results?search_query=virtual+assistant+portfolio+no+experience+notion',
            language: 'English',
            duration: '22 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Build a 1-page Notion or Google Site portfolio showing your 3 completed course projects with descriptions.',
            tasks: ['Add Project 1: Multi-Timezone Calendar & Email Triage System', 'Add Project 2: Verified B2B Lead Generation Workbook', 'Add Project 3: Executive Meeting Minutes & SOP Guide']
          },
          quiz: [{
            id: 'q-va-16',
            question: 'What is the most effective way for a beginner with zero prior employment to prove capability?',
            options: ['Writing fictional experience on a resume', 'Showcasing realistic simulated workplace projects and templates in a portfolio', 'Saying they know everything', 'Offering to work for free forever'],
            correctOptionIndex: 1,
            explanation: 'Simulated proof-of-work demonstrates genuine competence and honesty.'
          }]
        },
        {
          id: 'les-va-17',
          dayNumber: 17,
          title: 'Building an ATS-Friendly Remote Assistant Resume',
          titleMl: 'ഡേ 17: റെസ്യൂമെ നിർമ്മാണം',
          durationMinutes: 50,
          overview: 'Write a single-page, scannable resume that passes Applicant Tracking Systems (ATS) and highlights your specific tool competencies.',
          concepts: ['Clean single-column layout', 'Action-oriented bullet points (Managed, Organized, Scheduled, Verified)', 'Tools checklist (Google Workspace, Slack, Trello, Notion)'],
          simpleEnglishGuide: 'Avoid colorful rating bars or graphics on your resume. ATS software cannot read icons. Use clean text, bullet points, and clear headers.',
          malayalamNotes: 'കമ്പനികളിലേക്ക് അയക്കാനുള്ള ലളിതവും വ്യക്തവുമായ റെസ്യൂമെ തയ്യാറാക്കുന്നു.',
          officialDocLinks: [{ title: 'Google Docs Resume Templates', url: 'https://docs.google.com' }],
          videoResources: [{
            title: 'ATS Resume for Virtual Assistants & Remote Jobs',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=ats+resume+virtual+assistant+entry+level',
            language: 'English',
            duration: '18 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Use the Career Launchpad Resume Builder to create your single-page PDF resume.',
            tasks: ['Include Contact Info, Target Role, Core Software Competencies, Portfolio Link, and Simulated Projects']
          },
          quiz: [{
            id: 'q-va-17',
            question: 'Which of the following belongs in a strong resume bullet point for a virtual assistant?',
            options: ['Good person with nice attitude', 'Managed 3 executive calendars across US EST and IST time zones with zero scheduling conflicts', 'Did some computer tasks', 'Works hard'],
            correctOptionIndex: 1,
            explanation: 'Specific, quantified descriptions of responsibilities prove practical competence.'
          }]
        },
        {
          id: 'les-va-18',
          dayNumber: 18,
          title: 'Where to Find Genuine Entry-Level & Remote VA Jobs',
          titleMl: 'ഡേ 18: യഥാർത്ഥ ജോലികൾ എവിടെ കണ്ടെത്താം?',
          durationMinutes: 50,
          overview: 'Navigate genuine remote job platforms (Internshala, Upwork, LinkedIn, Indeed) and avoid advance-fee scams.',
          concepts: ['Searching keywords like "Remote Administrative Assistant", "Junior VA", "Google Workspace Assistant"', 'Spotting upfront fee scams'],
          simpleEnglishGuide: 'A genuine company will NEVER ask you to pay a registration fee, laptop deposit, or training charge. Never pay money to get a job.',
          malayalamNotes: 'ഇന്റേൺശാല, ലിങ്ക്ഡ്ഇൻ എന്നിവ വഴി ജോലികൾ കണ്ടെത്താനും തട്ടിപ്പുകൾ ഒഴിവാക്കാനും പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'Internshala Student Guidelines', url: 'https://internshala.com' }],
          videoResources: [{
            title: 'Where to Find Legit Remote Virtual Assistant Jobs in India',
            provider: 'YouTube Career Malayalam',
            url: 'https://www.youtube.com/results?search_query=legit+work+from+home+jobs+india+malayalam',
            language: 'Malayalam',
            duration: '20 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Identify 5 verified entry-level job or internship listings on LinkedIn or Internshala and save them to your Career Launchpad tracker.',
            tasks: ['Record Company Name, Role, Key Requirements, and Direct Application Link', 'Verify there are no registration fees required']
          },
          quiz: [{
            id: 'q-va-18',
            question: 'If a recruiter asks for a ₹2,000 "refundable security deposit" before giving you a contract, what should you do?',
            options: ['Pay immediately', 'Report the listing as a scam and do not pay any money', 'Ask for a discount', 'Send your bank credentials'],
            correctOptionIndex: 1,
            explanation: 'Demanding upfront registration or security fees is the #1 indicator of employment fraud.'
          }]
        },
        {
          id: 'les-va-19',
          dayNumber: 19,
          title: 'Mastering the Remote Assistant Interview',
          titleMl: 'ഡേ 19: ഇന്റർവ്യൂ തയ്യാറെടുപ്പുകൾ',
          durationMinutes: 55,
          overview: 'Practice answers to common beginner interview questions: handling overlapping deadlines, timezone coordination, and software familiarity.',
          concepts: ['The STAR method (Situation, Task, Action, Result)', 'Testing audio, webcam, and lighting before remote video interviews'],
          simpleEnglishGuide: 'When asked: "Do you know software X?", if you do not know it, say: "I have not used software X yet, but I mastered Trello and Notion in 2 days, and I can learn software X within 48 hours using their official documentation."',
          malayalamNotes: 'റിമോട്ട് ഇന്റർവ്യൂകളിൽ ആത്മവിശ്വാസത്തോടെ സംസാരിക്കാനും ചോദ്യങ്ങൾക്ക് മറുപടി നൽകാനും പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'Video Interview Etiquette', url: 'https://support.google.com/meet' }],
          videoResources: [{
            title: 'Top 10 Virtual Assistant Interview Questions and Answers',
            provider: 'YouTube Career Guidance',
            url: 'https://www.youtube.com/results?search_query=virtual+assistant+interview+questions+and+answers',
            language: 'English',
            duration: '22 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Record or write out answers to the 5 standard VA interview questions.',
            tasks: ['How do you manage conflicting deadlines?', 'How do you handle confidential client passwords?']
          },
          quiz: [{
            id: 'q-va-19',
            question: 'What is the best way to answer an interview question about a software tool you have not used?',
            options: ['Lie and say you have 5 years experience', 'Explain your quick learning ability and demonstrate how quickly you mastered similar tools', 'Give up', 'Blame the interviewer'],
            correctOptionIndex: 1,
            explanation: 'Honesty combined with proven fast learning ability creates trust.'
          }]
        },
        {
          id: 'les-va-20',
          dayNumber: 20,
          title: 'Course Final Assessment, Certification & First-Month Blueprint',
          titleMl: 'ഡേ 20: ഫൈനൽ അസസ്സ്‌മെന്റും കരിയർ ഗൈഡും',
          durationMinutes: 60,
          overview: 'Complete the comprehensive competency assessment, review your first-month checklist on the job, and start submitting daily applications.',
          concepts: ['Password managers (Bitwarden) for safe client credential sharing', 'First 30 days client onboarding checklist'],
          simpleEnglishGuide: 'In your first week on a new job, ask your manager for their preferred communication rhythm (e.g. daily morning summary or end-of-day Slack report). Never assume—always confirm.',
          malayalamNotes: 'കോഴ്സ് പൂർത്തിയാക്കി ജോലി ലഭിച്ച ശേഷം ശ്രദ്ധിക്കേണ്ട കാര്യങ്ങൾ.',
          officialDocLinks: [{ title: 'Bitwarden Free Password Manager', url: 'https://bitwarden.com' }],
          videoResources: [{
            title: 'First 30 Days as a Virtual Assistant — What to Do',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=first+30+days+as+virtual+assistant',
            language: 'English',
            duration: '18 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Submit your 3 project links to the Career Launchpad Skill Assessment evaluator for final completion verification.',
            tasks: ['Verify all project links are public and accessible', 'Generate your completion record']
          },
          quiz: [{
            id: 'q-va-20',
            question: 'How should client passwords and sensitive logins be shared safely in remote teams?',
            options: ['In a public WhatsApp group', 'Using a secure password manager like Bitwarden or 1Password', 'Written on a paper and mailed', 'Posted on social media'],
            correctOptionIndex: 1,
            explanation: 'Encrypted password managers allow secure access sharing without revealing raw master passwords.'
          }]
        }
      ]
    },
    {
      id: 'mod-va-5',
      weekNumber: 5,
      title: 'Week 5: Project Management, CRM Hygiene & Meeting Operations',
      titleMl: 'ആഴ്ച 5: പ്രോജക്റ്റ് മാനേജ്‌മെന്റ്, സിആർഎം & മീറ്റിംഗ് ഓപ്പറേഷൻസ്',
      objective: 'Master Asana/Trello task delegation, Zoom meeting minutes with action trackers, and CRM contact hygiene.',
      lessons: [
        {
          id: 'les-va-21',
          dayNumber: 21,
          title: 'Asana & Trello Workspace Setup',
          titleMl: 'അസാന & ട്രെല്ലോ പ്രോജക്റ്റ് മാനേജ്‌മെന്റ്',
          durationMinutes: 50,
          overview: 'Master professional asana & trello workspace setup workflows used in real company environments.',
          concepts: ["Foundations of Asana & Trello Workspace Setup", "Industry standard best practices", "Quality verification standards"],
          simpleEnglishGuide: 'Practical zero-knowledge step-by-step guidance: Organizing executive tasks into structured Kanban boards.. Always verify your final deliverables before sharing.',
          malayalamNotes: 'അസാന & ട്രെല്ലോ പ്രോജക്റ്റ് മാനേജ്‌മെന്റ്: ജോലിസ്ഥലത്ത് ഈ വൈദഗ്ധ്യം ഉപയോഗിക്കുന്ന യഥാർത്ഥ രീതി ലളിതമായി പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'Asana & Trello Workspace Setup Documentation & Guides', url: 'https://www.google.com' }],
          videoResources: [{
            title: 'Asana & Trello Workspace Setup — Complete Step-by-Step Tutorial',
            provider: 'Career Launchpad Curated',
            url: 'https://www.google.com',
            language: 'English',
            duration: '25 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Complete the practical workplace task for Day 21: Organizing executive tasks into structured Kanban boards..',
            tasks: [
              'Review the provided instructions and download the exercise worksheet.',
              'Apply the required software operations and double-check outputs.',
              'Save your completed deliverable into your weekly portfolio folder.'
            ]
          },
          quiz: [{
            id: 'q-va-21',
            question: 'What is the key objective of Asana & Trello Workspace Setup in this role?',
            options: ["To bypass regular office standards", "To ensure high accuracy, efficiency and adherence to professional standards in asana & trello workspace setup", "To increase unnecessary overhead", "To work without any client documentation"],
            correctOptionIndex: 1,
            explanation: 'Mastering asana & trello workspace setup ensures tasks are delivered with professional accuracy and zero preventable errors.'
          }]
        },
        {
          id: 'les-va-22',
          dayNumber: 22,
          title: 'Meeting Operations & Action Minutes',
          titleMl: 'മീറ്റിംഗ് അജണ്ട & മിനിറ്റ്സ് തയ്യാറാക്കൽ',
          durationMinutes: 50,
          overview: 'Master professional meeting operations & action minutes workflows used in real company environments.',
          concepts: ["Foundations of Meeting Operations & Action Minutes", "Industry standard best practices", "Quality verification standards"],
          simpleEnglishGuide: 'Practical zero-knowledge step-by-step guidance: Drafting executive agendas and circulating 2-hour action minutes.. Always verify your final deliverables before sharing.',
          malayalamNotes: 'മീറ്റിംഗ് അജണ്ട & മിനിറ്റ്സ് തയ്യാറാക്കൽ: ജോലിസ്ഥലത്ത് ഈ വൈദഗ്ധ്യം ഉപയോഗിക്കുന്ന യഥാർത്ഥ രീതി ലളിതമായി പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'Meeting Operations & Action Minutes Documentation & Guides', url: 'https://www.google.com' }],
          videoResources: [{
            title: 'Meeting Operations & Action Minutes — Complete Step-by-Step Tutorial',
            provider: 'Career Launchpad Curated',
            url: 'https://www.google.com',
            language: 'English',
            duration: '25 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Complete the practical workplace task for Day 22: Drafting executive agendas and circulating 2-hour action minutes..',
            tasks: [
              'Review the provided instructions and download the exercise worksheet.',
              'Apply the required software operations and double-check outputs.',
              'Save your completed deliverable into your weekly portfolio folder.'
            ]
          },
          quiz: [{
            id: 'q-va-22',
            question: 'What is the key objective of Meeting Operations & Action Minutes in this role?',
            options: ["To bypass regular office standards", "To ensure high accuracy, efficiency and adherence to professional standards in meeting operations & action minutes", "To increase unnecessary overhead", "To work without any client documentation"],
            correctOptionIndex: 1,
            explanation: 'Mastering meeting operations & action minutes ensures tasks are delivered with professional accuracy and zero preventable errors.'
          }]
        },
        {
          id: 'les-va-23',
          dayNumber: 23,
          title: 'Executive Travel & Itinerary Planning',
          titleMl: 'എക്സിക്യൂട്ടീവ് യാത്രാ പ്ലാനിംഗ്',
          durationMinutes: 50,
          overview: 'Master professional executive travel & itinerary planning workflows used in real company environments.',
          concepts: ["Foundations of Executive Travel & Itinerary Planning", "Industry standard best practices", "Quality verification standards"],
          simpleEnglishGuide: 'Practical zero-knowledge step-by-step guidance: Booking multi-city travel across conflicting international timezones.. Always verify your final deliverables before sharing.',
          malayalamNotes: 'എക്സിക്യൂട്ടീവ് യാത്രാ പ്ലാനിംഗ്: ജോലിസ്ഥലത്ത് ഈ വൈദഗ്ധ്യം ഉപയോഗിക്കുന്ന യഥാർത്ഥ രീതി ലളിതമായി പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'Executive Travel & Itinerary Planning Documentation & Guides', url: 'https://www.google.com' }],
          videoResources: [{
            title: 'Executive Travel & Itinerary Planning — Complete Step-by-Step Tutorial',
            provider: 'Career Launchpad Curated',
            url: 'https://www.google.com',
            language: 'English',
            duration: '25 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Complete the practical workplace task for Day 23: Booking multi-city travel across conflicting international timezones..',
            tasks: [
              'Review the provided instructions and download the exercise worksheet.',
              'Apply the required software operations and double-check outputs.',
              'Save your completed deliverable into your weekly portfolio folder.'
            ]
          },
          quiz: [{
            id: 'q-va-23',
            question: 'What is the key objective of Executive Travel & Itinerary Planning in this role?',
            options: ["To bypass regular office standards", "To ensure high accuracy, efficiency and adherence to professional standards in executive travel & itinerary planning", "To increase unnecessary overhead", "To work without any client documentation"],
            correctOptionIndex: 1,
            explanation: 'Mastering executive travel & itinerary planning ensures tasks are delivered with professional accuracy and zero preventable errors.'
          }]
        },
        {
          id: 'les-va-24',
          dayNumber: 24,
          title: 'CRM Contact Hygiene & Data Enrichment',
          titleMl: 'സിആർഎം കോൺടാക്റ്റ് ഹൈജീൻ & എൻറിച്ച്മെന്റ്',
          durationMinutes: 50,
          overview: 'Master professional crm contact hygiene & data enrichment workflows used in real company environments.',
          concepts: ["Foundations of CRM Contact Hygiene & Data Enrichment", "Industry standard best practices", "Quality verification standards"],
          simpleEnglishGuide: 'Practical zero-knowledge step-by-step guidance: Deduplicating entries and enriching client contact records in Notion.. Always verify your final deliverables before sharing.',
          malayalamNotes: 'സിആർഎം കോൺടാക്റ്റ് ഹൈജീൻ & എൻറിച്ച്മെന്റ്: ജോലിസ്ഥലത്ത് ഈ വൈദഗ്ധ്യം ഉപയോഗിക്കുന്ന യഥാർത്ഥ രീതി ലളിതമായി പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'CRM Contact Hygiene & Data Enrichment Documentation & Guides', url: 'https://www.google.com' }],
          videoResources: [{
            title: 'CRM Contact Hygiene & Data Enrichment — Complete Step-by-Step Tutorial',
            provider: 'Career Launchpad Curated',
            url: 'https://www.google.com',
            language: 'English',
            duration: '25 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Complete the practical workplace task for Day 24: Deduplicating entries and enriching client contact records in Notion..',
            tasks: [
              'Review the provided instructions and download the exercise worksheet.',
              'Apply the required software operations and double-check outputs.',
              'Save your completed deliverable into your weekly portfolio folder.'
            ]
          },
          quiz: [{
            id: 'q-va-24',
            question: 'What is the key objective of CRM Contact Hygiene & Data Enrichment in this role?',
            options: ["To bypass regular office standards", "To ensure high accuracy, efficiency and adherence to professional standards in crm contact hygiene & data enrichment", "To increase unnecessary overhead", "To work without any client documentation"],
            correctOptionIndex: 1,
            explanation: 'Mastering crm contact hygiene & data enrichment ensures tasks are delivered with professional accuracy and zero preventable errors.'
          }]
        },
        {
          id: 'les-va-25',
          dayNumber: 25,
          title: 'Email Newsletter Broadcast Operations',
          titleMl: 'ഇമെയിൽ ന്യൂസ്‌ലെറ്റർ മാനേജ്‌മെന്റ്',
          durationMinutes: 50,
          overview: 'Master professional email newsletter broadcast operations workflows used in real company environments.',
          concepts: ["Foundations of Email Newsletter Broadcast Operations", "Industry standard best practices", "Quality verification standards"],
          simpleEnglishGuide: 'Practical zero-knowledge step-by-step guidance: Formatting weekly executive newsletters in Mailchimp and Substack.. Always verify your final deliverables before sharing.',
          malayalamNotes: 'ഇമെയിൽ ന്യൂസ്‌ലെറ്റർ മാനേജ്‌മെന്റ്: ജോലിസ്ഥലത്ത് ഈ വൈദഗ്ധ്യം ഉപയോഗിക്കുന്ന യഥാർത്ഥ രീതി ലളിതമായി പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'Email Newsletter Broadcast Operations Documentation & Guides', url: 'https://www.google.com' }],
          videoResources: [{
            title: 'Email Newsletter Broadcast Operations — Complete Step-by-Step Tutorial',
            provider: 'Career Launchpad Curated',
            url: 'https://www.google.com',
            language: 'English',
            duration: '25 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Complete the practical workplace task for Day 25: Formatting weekly executive newsletters in Mailchimp and Substack..',
            tasks: [
              'Review the provided instructions and download the exercise worksheet.',
              'Apply the required software operations and double-check outputs.',
              'Save your completed deliverable into your weekly portfolio folder.'
            ]
          },
          quiz: [{
            id: 'q-va-25',
            question: 'What is the key objective of Email Newsletter Broadcast Operations in this role?',
            options: ["To bypass regular office standards", "To ensure high accuracy, efficiency and adherence to professional standards in email newsletter broadcast operations", "To increase unnecessary overhead", "To work without any client documentation"],
            correctOptionIndex: 1,
            explanation: 'Mastering email newsletter broadcast operations ensures tasks are delivered with professional accuracy and zero preventable errors.'
          }]
        }
      ]
    },
    {
      id: 'mod-va-6',
      weekNumber: 6,
      title: 'Week 6: SOP Documentation, Client Onboarding & Freelance Launch',
      titleMl: 'ആഴ്ച 6: എസ്ഒപി ഡോക്യുമെന്റേഷൻ, ക്ലയന്റ് ഓൺബോർഡിംഗ് & കരിയർ ലോഞ്ച്',
      objective: 'Build standard operating procedure (SOP) playbooks, package your virtual assistant portfolio, and land contracts.',
      lessons: [
        {
          id: 'les-va-26',
          dayNumber: 26,
          title: 'Building SOPs with Loom & Tango',
          titleMl: 'എസ്ഒപി ഡോക്യുമെന്റേഷൻ നിർമ്മാണം',
          durationMinutes: 50,
          overview: 'Master professional building sops with loom & tango workflows used in real company environments.',
          concepts: ["Foundations of Building SOPs with Loom & Tango", "Industry standard best practices", "Quality verification standards"],
          simpleEnglishGuide: 'Practical zero-knowledge step-by-step guidance: Documenting recurring company tasks into step-by-step visual guides.. Always verify your final deliverables before sharing.',
          malayalamNotes: 'എസ്ഒപി ഡോക്യുമെന്റേഷൻ നിർമ്മാണം: ജോലിസ്ഥലത്ത് ഈ വൈദഗ്ധ്യം ഉപയോഗിക്കുന്ന യഥാർത്ഥ രീതി ലളിതമായി പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'Building SOPs with Loom & Tango Documentation & Guides', url: 'https://www.google.com' }],
          videoResources: [{
            title: 'Building SOPs with Loom & Tango — Complete Step-by-Step Tutorial',
            provider: 'Career Launchpad Curated',
            url: 'https://www.google.com',
            language: 'English',
            duration: '25 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Complete the practical workplace task for Day 26: Documenting recurring company tasks into step-by-step visual guides..',
            tasks: [
              'Review the provided instructions and download the exercise worksheet.',
              'Apply the required software operations and double-check outputs.',
              'Save your completed deliverable into your weekly portfolio folder.'
            ]
          },
          quiz: [{
            id: 'q-va-26',
            question: 'What is the key objective of Building SOPs with Loom & Tango in this role?',
            options: ["To bypass regular office standards", "To ensure high accuracy, efficiency and adherence to professional standards in building sops with loom & tango", "To increase unnecessary overhead", "To work without any client documentation"],
            correctOptionIndex: 1,
            explanation: 'Mastering building sops with loom & tango ensures tasks are delivered with professional accuracy and zero preventable errors.'
          }]
        },
        {
          id: 'les-va-27',
          dayNumber: 27,
          title: 'Client Onboarding & Password Security',
          titleMl: 'ക്ലയന്റ് ഓൺബോർഡിംഗ് & സെക്യൂരിറ്റി',
          durationMinutes: 50,
          overview: 'Master professional client onboarding & password security workflows used in real company environments.',
          concepts: ["Foundations of Client Onboarding & Password Security", "Industry standard best practices", "Quality verification standards"],
          simpleEnglishGuide: 'Practical zero-knowledge step-by-step guidance: Secure credential handoffs via Bitwarden and Slack protocol setup.. Always verify your final deliverables before sharing.',
          malayalamNotes: 'ക്ലയന്റ് ഓൺബോർഡിംഗ് & സെക്യൂരിറ്റി: ജോലിസ്ഥലത്ത് ഈ വൈദഗ്ധ്യം ഉപയോഗിക്കുന്ന യഥാർത്ഥ രീതി ലളിതമായി പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'Client Onboarding & Password Security Documentation & Guides', url: 'https://www.google.com' }],
          videoResources: [{
            title: 'Client Onboarding & Password Security — Complete Step-by-Step Tutorial',
            provider: 'Career Launchpad Curated',
            url: 'https://www.google.com',
            language: 'English',
            duration: '25 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Complete the practical workplace task for Day 27: Secure credential handoffs via Bitwarden and Slack protocol setup..',
            tasks: [
              'Review the provided instructions and download the exercise worksheet.',
              'Apply the required software operations and double-check outputs.',
              'Save your completed deliverable into your weekly portfolio folder.'
            ]
          },
          quiz: [{
            id: 'q-va-27',
            question: 'What is the key objective of Client Onboarding & Password Security in this role?',
            options: ["To bypass regular office standards", "To ensure high accuracy, efficiency and adherence to professional standards in client onboarding & password security", "To increase unnecessary overhead", "To work without any client documentation"],
            correctOptionIndex: 1,
            explanation: 'Mastering client onboarding & password security ensures tasks are delivered with professional accuracy and zero preventable errors.'
          }]
        },
        {
          id: 'les-va-28',
          dayNumber: 28,
          title: 'Capstone: 1-Week Executive Support',
          titleMl: 'ക്യാപ്സ്റ്റോൺ - 1 ആഴ്ചത്തെ എക്സിക്യൂട്ടീവ് സപ്പോർട്ട്',
          durationMinutes: 50,
          overview: 'Master professional capstone: 1-week executive support workflows used in real company environments.',
          concepts: ["Foundations of Capstone: 1-Week Executive Support", "Industry standard best practices", "Quality verification standards"],
          simpleEnglishGuide: 'Practical zero-knowledge step-by-step guidance: Executing 7 real-world executive tasks under time constraints.. Always verify your final deliverables before sharing.',
          malayalamNotes: 'ക്യാപ്സ്റ്റോൺ - 1 ആഴ്ചത്തെ എക്സിക്യൂട്ടീവ് സപ്പോർട്ട്: ജോലിസ്ഥലത്ത് ഈ വൈദഗ്ധ്യം ഉപയോഗിക്കുന്ന യഥാർത്ഥ രീതി ലളിതമായി പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'Capstone: 1-Week Executive Support Documentation & Guides', url: 'https://www.google.com' }],
          videoResources: [{
            title: 'Capstone: 1-Week Executive Support — Complete Step-by-Step Tutorial',
            provider: 'Career Launchpad Curated',
            url: 'https://www.google.com',
            language: 'English',
            duration: '25 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Complete the practical workplace task for Day 28: Executing 7 real-world executive tasks under time constraints..',
            tasks: [
              'Review the provided instructions and download the exercise worksheet.',
              'Apply the required software operations and double-check outputs.',
              'Save your completed deliverable into your weekly portfolio folder.'
            ]
          },
          quiz: [{
            id: 'q-va-28',
            question: 'What is the key objective of Capstone: 1-Week Executive Support in this role?',
            options: ["To bypass regular office standards", "To ensure high accuracy, efficiency and adherence to professional standards in capstone: 1-week executive support", "To increase unnecessary overhead", "To work without any client documentation"],
            correctOptionIndex: 1,
            explanation: 'Mastering capstone: 1-week executive support ensures tasks are delivered with professional accuracy and zero preventable errors.'
          }]
        },
        {
          id: 'les-va-29',
          dayNumber: 29,
          title: 'Virtual Assistant Portfolio & Pitch Deck',
          titleMl: 'വെർച്വൽ അസിസ്റ്റന്റ് പോർട്ട്ഫോളിയോ & പിച്ച് ഡെക്ക്',
          durationMinutes: 50,
          overview: 'Master professional virtual assistant portfolio & pitch deck workflows used in real company environments.',
          concepts: ["Foundations of Virtual Assistant Portfolio & Pitch Deck", "Industry standard best practices", "Quality verification standards"],
          simpleEnglishGuide: 'Practical zero-knowledge step-by-step guidance: Designing a 5-page PDF portfolio showcasing your VA services.. Always verify your final deliverables before sharing.',
          malayalamNotes: 'വെർച്വൽ അസിസ്റ്റന്റ് പോർട്ട്ഫോളിയോ & പിച്ച് ഡെക്ക്: ജോലിസ്ഥലത്ത് ഈ വൈദഗ്ധ്യം ഉപയോഗിക്കുന്ന യഥാർത്ഥ രീതി ലളിതമായി പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'Virtual Assistant Portfolio & Pitch Deck Documentation & Guides', url: 'https://www.google.com' }],
          videoResources: [{
            title: 'Virtual Assistant Portfolio & Pitch Deck — Complete Step-by-Step Tutorial',
            provider: 'Career Launchpad Curated',
            url: 'https://www.google.com',
            language: 'English',
            duration: '25 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Complete the practical workplace task for Day 29: Designing a 5-page PDF portfolio showcasing your VA services..',
            tasks: [
              'Review the provided instructions and download the exercise worksheet.',
              'Apply the required software operations and double-check outputs.',
              'Save your completed deliverable into your weekly portfolio folder.'
            ]
          },
          quiz: [{
            id: 'q-va-29',
            question: 'What is the key objective of Virtual Assistant Portfolio & Pitch Deck in this role?',
            options: ["To bypass regular office standards", "To ensure high accuracy, efficiency and adherence to professional standards in virtual assistant portfolio & pitch deck", "To increase unnecessary overhead", "To work without any client documentation"],
            correctOptionIndex: 1,
            explanation: 'Mastering virtual assistant portfolio & pitch deck ensures tasks are delivered with professional accuracy and zero preventable errors.'
          }]
        },
        {
          id: 'les-va-30',
          dayNumber: 30,
          title: 'Graduation & Remote VA Job Applications',
          titleMl: 'സർട്ടിഫിക്കേഷൻ & ഉയർന്ന ശമ്പളമുള്ള റിമോട്ട് ജോലികൾ',
          durationMinutes: 50,
          overview: 'Master professional graduation & remote va job applications workflows used in real company environments.',
          concepts: ["Foundations of Graduation & Remote VA Job Applications", "Industry standard best practices", "Quality verification standards"],
          simpleEnglishGuide: 'Practical zero-knowledge step-by-step guidance: Final certification assessment and submitting vetted remote proposals.. Always verify your final deliverables before sharing.',
          malayalamNotes: 'സർട്ടിഫിക്കേഷൻ & ഉയർന്ന ശമ്പളമുള്ള റിമോട്ട് ജോലികൾ: ജോലിസ്ഥലത്ത് ഈ വൈദഗ്ധ്യം ഉപയോഗിക്കുന്ന യഥാർത്ഥ രീതി ലളിതമായി പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'Graduation & Remote VA Job Applications Documentation & Guides', url: 'https://www.google.com' }],
          videoResources: [{
            title: 'Graduation & Remote VA Job Applications — Complete Step-by-Step Tutorial',
            provider: 'Career Launchpad Curated',
            url: 'https://www.google.com',
            language: 'English',
            duration: '25 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Complete the practical workplace task for Day 30: Final certification assessment and submitting vetted remote proposals..',
            tasks: [
              'Review the provided instructions and download the exercise worksheet.',
              'Apply the required software operations and double-check outputs.',
              'Save your completed deliverable into your weekly portfolio folder.'
            ]
          },
          quiz: [{
            id: 'q-va-30',
            question: 'What is the key objective of Graduation & Remote VA Job Applications in this role?',
            options: ["To bypass regular office standards", "To ensure high accuracy, efficiency and adherence to professional standards in graduation & remote va job applications", "To increase unnecessary overhead", "To work without any client documentation"],
            correctOptionIndex: 1,
            explanation: 'Mastering graduation & remote va job applications ensures tasks are delivered with professional accuracy and zero preventable errors.'
          }]
        }
      ]
    }
  ],
  projects: [
    {
      id: 'proj-va-1',
      title: 'Executive Calendar & Multi-Timezone Scheduler',
      titleMl: 'എക്സിക്യൂട്ടീവ് കലണ്ടർ & ടൈംസോൺ ഷെഡ്യൂളർ',
      description: 'Design a conflict-free weekly schedule for an international executive coordinating teams in New York (EST), London (GMT), and Kochi (IST).',
      scenario: 'You are hired as a virtual assistant to Dr. Sarah Khan, founder of an educational tech firm. She has 6 meetings requested by clients across 3 continents, recurring 1-on-1 team syncs, and dedicated focus time requirements.',
      instructions: [
        'Set up a Google Calendar demo or clean spreadsheet schedule for Monday through Friday',
        'Place 6 client meetings according to their respective local time zones with zero overlapping conflicts',
        'Add mandatory 15-minute preparation buffers before each external client call',
        'Protect a 2-hour daily deep-work block during Sarah\'s morning hours where no calls are scheduled'
      ],
      deliverables: [
        'Link to the organized Google Calendar view or PDF export of the weekly schedule',
        'Written briefing email to Dr. Sarah summarizing her weekly schedule and noting time differences'
      ],
      downloadableDataFilename: 'sarah_khan_meeting_requests.json',
      downloadableDataContent: JSON.stringify({
        client: 'Dr. Sarah Khan',
        home_timezone: 'Asia/Kolkata (IST)',
        meeting_requests: [
          { partner: 'EduGlobal UK', timezone: 'Europe/London (GMT)', preferred_time: '2:00 PM GMT' },
          { partner: 'NY Venture Capital', timezone: 'America/New_York (EST)', preferred_time: '10:00 AM EST' },
          { partner: 'Singapore Curriculum', timezone: 'Asia/Singapore (SGT)', preferred_time: '11:00 AM SGT' }
        ]
      }, null, 2),
      gradingRubric: [
        { criterion: 'Zero Timezone Errors', weight: 40, standard: 'All meetings convert correctly to local IST without scheduling outside working hours.' },
        { criterion: 'Buffer Times & Deep Work', weight: 30, standard: 'Buffers and deep-work blocks are clearly marked and respected.' },
        { criterion: 'Briefing Clarity', weight: 30, standard: 'Summary email is polite, concise, and lists dates with day names and dual timezone timestamps.' }
      ],
      modelSolutionOverview: 'The optimal solution places Singapore calls in early Indian afternoon, UK calls in Indian late afternoon (around 7:30 PM IST), and US East Coast calls in Indian evening (around 8:30 PM IST), reserving Indian mornings for deep work.'
    },
    {
      id: 'proj-va-2',
      title: 'Verified B2B Lead Generation & Outreach Tracker',
      titleMl: 'ബി2ബി ലീഡ് ഡാറ്റാബേസ് & ഔട്ട്റീച്ച് ട്രാക്കർ',
      description: 'Research, clean, and organize 25 verified business prospects with data validation dropdowns and outreach metrics.',
      scenario: 'A sustainable packaging manufacturer wants to reach out to organic food brands in South India. You need to gather verified company records, find contact persons, and build an outreach tracking system in Google Sheets.',
      instructions: [
        'Build a Google Sheets database with columns: Company Name, Website, City, Decision Maker Name, Title, Verified Email, Phone, Outreach Status, Follow-Up Date, Notes',
        'Implement Data Validation dropdown chips for Outreach Status: New, Email Sent, Follow-up Needed, Call Scheduled, Not Interested',
        'Populate the sheet with 15 real or realistic verified business entries',
        'Include automated summary counts of leads by status using COUNTIF formulas'
      ],
      deliverables: [
        'Public "View-only" Google Sheets link with clean formatting and functional dropdown chips',
        'Summary report sheet showing the total leads gathered and conversion pipeline'
      ],
      downloadableDataFilename: 'sample_leads_raw_uncleaned.csv',
      downloadableDataContent: 'Company,Website,City,Contact,Status\nPure Organics,www.pureorg.in,Kochi,Rajesh Nair,New\nSpice Valley,www.spiceval.com,Calicut,Fathima K,Contacted\nGreen Basket,www.greenbasket.org,Trivandrum,Anand P,New\nFresh Harvest,freshharvest.co,Thrissur,Sunil Menon,New',
      gradingRubric: [
        { criterion: 'Data Cleanliness & Formatting', weight: 35, standard: 'Consistent casing, working links, clean alignment, and zero blank rows in data range.' },
        { criterion: 'Functional Data Validation', weight: 35, standard: 'Dropdown chips work seamlessly with clear color coding.' },
        { criterion: 'Formula Accuracy', weight: 30, standard: 'COUNTIF summary accurately totals lead numbers per status category.' }
      ],
      modelSolutionOverview: 'The completed workbook contains an executive instructions tab, an active leads tab with alternating row colors and dropdown status chips, and a summary dashboard tab with automated KPI counts.'
    },
    {
      id: 'proj-va-3',
      title: 'Executive Operations SOP & Meeting Minutes Dossier',
      titleMl: 'എക്സിക്യൂട്ടീവ് ഓപ്പറേഷൻസ് എസ്.ഒ.പി & മീറ്റിംഗ് മിനിറ്റ്സ്',
      description: 'Create a standardized operating procedure for weekly reporting and an executive meeting minutes dossier.',
      scenario: 'Your client needs standard operating documentation so any team assistant can take over weekly tasks smoothly without repeated verbal instruction.',
      instructions: [
        'Write an illustrated, step-by-step SOP document in Google Docs or Notion for "Weekly Executive Task & Time Audit"',
        'Draft a complete Minutes of Meeting (MoM) based on a 4-person strategic product launch meeting',
        'Include an Action Item matrix clearly assigning responsible owners, deadlines, and deliverables'
      ],
      deliverables: [
        'PDF export of the professional SOP document with step-by-step numbered instructions',
        'PDF export of the executive Meeting Minutes with clear action assignments'
      ],
      gradingRubric: [
        { criterion: 'Step-by-Step SOP Completeness', weight: 40, standard: 'A new assistant can follow the procedure without needing to ask for clarification.' },
        { criterion: 'Clarity of Decisions vs Discussion', weight: 30, standard: 'Meeting minutes clearly separate casual talk from binding organizational decisions.' },
        { criterion: 'Action Items Accountability', weight: 30, standard: 'Every single assigned task includes an explicit individual name and date deadline.' }
      ],
      modelSolutionOverview: 'The SOP provides screenshot placeholders, prerequisites, and troubleshooting tips for common software glitches. The MoM document has a clear table with Owner, Due Date, and Priority levels.'
    }
  ],
  workplaceGuidance: {
    firstWeek: [
      'Clarify your client\'s preferred communication tool (e.g. Slack vs WhatsApp vs Email) and response expectations.',
      'Request read-only access to past meeting recordings and previous sheets to learn their standard company formats.',
      'Send an end-of-day summary email every evening: 1. Tasks completed today, 2. Tasks scheduled for tomorrow, 3. Any questions requiring their decision.',
      'Test all calendar links yourself before sending invites to external clients.'
    ],
    firstMonth: [
      'Proactively identify repetitive manual steps and propose simple templates or dropdowns to save time.',
      'Keep a personal checklist of recurring weekly client meetings and prep agendas 24 hours in advance.',
      'Never delete a client file permanently; move old files to an "_Archive" folder instead.'
    ],
    commonMistakes: [
      'Assuming timezone conversions in your head instead of using a World Clock tool or secondary calendar display.',
      'Waiting until a deadline has passed to announce that an assignment was blocked or unclear.',
      'Sharing confidential client files publicly without setting restricted permissions.'
    ]
  },
  interviewPrep: [
    {
      question: 'How do you handle a situation where two executives ask you to complete urgent tasks at the exact same time?',
      answer: 'I remain calm, quickly assess the true deadlines, and communicate transparently. I politely inform both managers of the competing requests, state how long each task will take, and ask them or my direct lead to confirm which priority takes precedence so neither deliverable is compromised.',
      tips: 'Highlight communication and transparent prioritization rather than panicking or secretly rushing both tasks.'
    },
    {
      question: 'What do you do if you do not understand a client\'s instructions in an email?',
      answer: 'I re-read the message carefully to see what is already clear. Then, I respond promptly acknowledging the request, state my understanding in my own words, and ask a specific, clarifying question with 1 or 2 clear choices rather than sending a vague "I don\'t understand".',
      tips: 'Show that you do preliminary thinking before asking questions.'
    },
    {
      question: 'How do you protect sensitive company passwords and financial information while working remotely?',
      answer: 'I never write client credentials in unencrypted text files or share them over casual chats. I use secure password management software like Bitwarden, ensure two-factor authentication is active on all my accounts, and never work from unsecured public Wi-Fi networks without protection.',
      tips: 'Emphasize your personal commitment to ethics, security, and confidentiality.'
    }
  ]
};
