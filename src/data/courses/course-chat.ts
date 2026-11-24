import { Course } from '@/types';

export const customerChatCourse: Course = {
  id: 'course-chat',
  careerSlug: 'customer-chat-support',
  title: 'Customer Chat & Helpdesk Specialist (30 Days)',
  titleMl: 'കസ്റ്റമർ ചാറ്റ് & ഹെൽപ്പ്‌ഡെസ്ക് സ്പെഷ്യലിസ്റ്റ് (30 ദിവസങ്ങൾ)',
  durationDays: 30,
  weeklyGoals: [
    {
      weekNumber: 1,
      title: 'Typing Speed, Chat Etiquette & Support Soft Skills',
      objective: 'Achieve 35+ WPM typing speed, master professional conversational English, understand de-escalation, and practice active listening.'
    },
    {
      weekNumber: 2,
      title: 'Helpdesk Ticketing Workflows (Zendesk / Crisp)',
      objective: 'Learn ticket lifecycles (New, Open, Pending, Solved), macros, internal notes vs public replies, and tag management.'
    },
    {
      weekNumber: 3,
      title: 'WhatsApp Business, Live Chat & Troubleshooting',
      objective: 'Manage multi-chat concurrency (2-3 simultaneous chats), configure WhatsApp quick replies, look up order statuses, and handle return requests.'
    },
    {
      weekNumber: 4,
      title: 'Portfolio Scenarios, Resume & Employment Readiness',
      objective: 'Complete 3 de-escalation ticket simulations, build a customer support resume, prepare mock interview scenarios, and apply for remote support roles.'
    }
  ],
  modules: [
    {
      id: 'mod-chat-1',
      weekNumber: 1,
      title: 'Week 1: Typing Mastery, Tone & Communication Etiquette',
      titleMl: 'ആഴ്ച 1: ടൈപ്പിംഗ് സ്പീഡും മാന്യമായ ആശയവിനിമയ രീതികളും',
      objective: 'Develop typing speed, professional grammar, positive phrasing, and empathy in written customer conversations.',
      lessons: [
        {
          id: 'les-chat-1',
          dayNumber: 1,
          title: 'The Modern Chat Support Role: Voice vs Non-Voice',
          titleMl: 'ഡേ 1: ചാറ്റ് സപ്പോർട്ട് ജോലിയുടെ പ്രാഥമിക കാര്യങ്ങൾ',
          durationMinutes: 45,
          overview: 'Understand why companies are shifting support to chat and messaging apps, and what makes a high-rated support agent.',
          concepts: ['Non-voice chat advantages', 'First Response Time (FRT) vs Resolution Time', 'Customer Satisfaction (CSAT) scores'],
          simpleEnglishGuide: 'In chat support, you have time to look up answers. You do not need to speak on the phone; you write clear, helpful, and kind messages.',
          malayalamNotes: 'ഫോൺ കോളുകളേക്കാൾ എളുപ്പത്തിൽ ചാറ്റിലൂടെ കസ്റ്റമർക്ക് സഹായം നൽകുന്ന ജോലിയുടെ അടിസ്ഥാനങ്ങൾ.',
          officialDocLinks: [{ title: 'Zendesk Customer Service Overview', url: 'https://www.zendesk.com/service/' }],
          videoResources: [{
            title: 'Chat Support Representative — Day in the Life & Skills',
            provider: 'YouTube Customer Service',
            url: 'https://www.youtube.com/results?search_query=chat+support+representative+skills+tutorial',
            language: 'English',
            duration: '18 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Take an initial 1-minute typing test on TypingTest.com.',
            tasks: ['Record your baseline Words Per Minute (WPM) and accuracy score', 'Set a goal to practice 15 minutes daily to reach 40+ WPM']
          },
          quiz: [{
            id: 'q-chat-1',
            question: 'What does "CSAT" stand for in customer service operations?',
            options: ['Computer Science Aptitude Test', 'Customer Satisfaction Score', 'Central Sales Agency Team', 'Call Standard Audio Time'],
            correctOptionIndex: 1,
            explanation: 'CSAT measures customer satisfaction after an interaction, usually on a 1-5 star scale.'
          }]
        },
        {
          id: 'les-chat-2',
          dayNumber: 2,
          title: 'Positive Scripting & Eliminating Negative Words',
          titleMl: 'ഡേ 2: പോസിറ്റീവ് ഭാഷയും വാക്കുകളും',
          durationMinutes: 50,
          overview: 'Transform negative phrasing into solutions: Instead of "We can\'t do that", say "What I can do right now is...".',
          concepts: ['Positive scripting principles', 'Eliminating robotic jargon', 'Using the customer\'s name with genuine warmth'],
          simpleEnglishGuide: 'Never tell a customer "You are wrong". Say: "Let me check that account detail with you right now to ensure we have the latest update".',
          malayalamNotes: 'ഉപഭോക്താക്കളോട് ദേഷ്യമോ നെഗറ്റീവ് വാക്കുകളോ ഇല്ലാതെ സൗമ്യമായി സംസാരിക്കുന്ന രീതി.',
          officialDocLinks: [{ title: 'Customer Empathy Guidelines', url: 'https://support.zendesk.com' }],
          videoResources: [{
            title: 'Positive Language in Customer Service with Examples',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=positive+language+in+customer+service',
            language: 'English',
            duration: '16 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Rewrite 5 negative customer service statements into professional positive solutions.',
            tasks: ['Example: "Your order is delayed and we don\'t know where it is" -> "I am tracking your parcel with our courier lead right now to get you an accurate arrival update."']
          },
          quiz: [{
            id: 'q-chat-2',
            question: 'Which of the following phrases demonstrates positive customer scripting?',
            options: [
              'That is company policy and I cannot change it.',
              'I understand your urgency, and while that item is out of stock, I can immediately reserve one for you from tomorrow\'s incoming shipment.',
              'You should have read the terms.',
              'Not my department.'
            ],
            correctOptionIndex: 1,
            explanation: 'Acknowledging the customer\'s urgency and offering an immediate concrete solution builds trust.'
          }]
        },
        {
          id: 'les-chat-3',
          dayNumber: 3,
          title: 'The Art of De-Escalating Angry Customers',
          titleMl: 'ഡേ 3: ദേഷ്യപ്പെടുന്ന കസ്റ്റമർമാരെ കൈകാര്യം ചെയ്യൽ',
          durationMinutes: 50,
          overview: 'Master the HEAT model: Hear, Empathize, Apologize (for the frustration caused), and Take Action.',
          concepts: ['The HEAT de-escalation framework', 'Never taking anger personally', 'Knowing when and how to escalate to a manager'],
          simpleEnglishGuide: 'When someone is angry, do not argue. First validate their feeling: "I completely understand why this delay is frustrating for you, and I am stepping in to fix it".',
          malayalamNotes: 'പരാതികളുമായി വരുന്നവരോട് ക്ഷമയോടെ സംസാരിച്ച് പ്രശ്നം പരിഹരിക്കുന്ന രീതി.',
          officialDocLinks: [{ title: 'De-escalation Strategies in Customer Service', url: 'https://support.zendesk.com' }],
          videoResources: [{
            title: 'How to Handle Angry Customers on Chat — Practical Scripts',
            provider: 'YouTube Customer Service',
            url: 'https://www.youtube.com/results?search_query=handle+angry+customers+live+chat+scripts',
            language: 'English',
            duration: '21 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Write a complete de-escalation response to a simulated customer whose birthday gift order arrived damaged.',
            tasks: ['Acknowledge feelings without making false legal admissions', 'Offer immediate replacement or expedited refund']
          },
          quiz: [{
            id: 'q-chat-3',
            question: 'What is the first step in the HEAT de-escalation framework?',
            options: ['Hang up', 'Hear / Listen actively to the customer\'s full issue without interruption', 'Argue your points', 'Transfer the call'],
            correctOptionIndex: 1,
            explanation: 'Listening actively allows the customer to express their frustration before problem-solving begins.'
          }]
        },
        {
          id: 'les-chat-4',
          dayNumber: 4,
          title: 'Handling Multi-Chat Concurrency (2–3 Chats at Once)',
          titleMl: 'ഡേ 4: ഒരേസമയം പല ചാറ്റുകൾ കൈകാര്യം ചെയ്യൽ',
          durationMinutes: 50,
          overview: 'Learn how remote agents handle 2 to 3 live visitor chats simultaneously without confusing customer details.',
          concepts: ['Chat tab discipline', 'Using canned greeting macros to buy 30 seconds for research', 'Time management during typing pauses'],
          simpleEnglishGuide: 'While Customer A is reading your reply, switch to Customer B to look up their order number. Stay organized and never paste Customer A\'s name into Customer B\'s chat.',
          malayalamNotes: 'ഒന്നിൽക്കൂടുതൽ ചാറ്റുകൾ തെറ്റാതെ കൈകാര്യം ചെയ്യാനുള്ള പരിശീലനം.',
          officialDocLinks: [{ title: 'Crisp Live Chat Multi-Conversation Guide', url: 'https://crisp.chat/en/help/' }],
          videoResources: [{
            title: 'How to Handle Multiple Chats at the Same Time',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=handling+multiple+chats+customer+support',
            language: 'English',
            duration: '17 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Practice switching between two simulated text chat windows with different customer inquiries.',
            tasks: ['Verify correct customer names are used in 100% of responses']
          },
          quiz: [{
            id: 'q-chat-4',
            question: 'What is the most critical rule when handling multiple simultaneous customer chats?',
            options: ['Type as fast as possible without looking', 'Always double-check the recipient name and context before pressing send', 'Copy-paste the exact same answer to everyone', 'Close one chat randomly'],
            correctOptionIndex: 1,
            explanation: 'Cross-sending customer details breaches privacy and destroys customer confidence.'
          }]
        },
        {
          id: 'les-chat-5',
          dayNumber: 5,
          title: 'Week 1 Review & Typing Milestone Check',
          titleMl: 'ഡേ 5: ആഴ്ച 1 ടൈപ്പിംഗ് പരീക്ഷ',
          durationMinutes: 60,
          overview: 'Review communication frameworks and complete a verified typing speed assessment.',
          concepts: ['Target: 35+ WPM with 95%+ accuracy'],
          simpleEnglishGuide: 'Keep your fingers on the home row keys (ASDF JKL;). Regular practice builds muscle memory.',
          malayalamNotes: 'ടൈപ്പിംഗ് സ്പീഡ് വർദ്ധിപ്പിക്കാനുള്ള പരിശീലനം വിലയിരുത്തുന്നു.',
          officialDocLinks: [{ title: 'TypingTest Certification', url: 'https://www.typingtest.com' }],
          videoResources: [{
            title: 'How to Type Faster for Chat Support Jobs',
            provider: 'YouTube Productivity',
            url: 'https://www.youtube.com/results?search_query=how+to+type+faster+chat+support',
            language: 'English',
            duration: '15 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Complete three 3-minute typing tests and take a screenshot of your best score.',
            tasks: ['Save screenshot as "Typing_Score_Week1.png" for your portfolio']
          },
          quiz: [{
            id: 'q-chat-5',
            question: 'Why do customer chat employers specify minimum typing speed requirements (e.g. 35-40 WPM)?',
            options: ['To test computer hardware', 'To ensure agents can respond within 45-60 seconds during live interactions', 'For fun', 'To reduce electricity'],
            correctOptionIndex: 1,
            explanation: 'Live chat visitors expect swift replies; slow typing causes long customer wait times.'
          }]
        }
      ]
    },
    {
      id: 'mod-chat-2',
      weekNumber: 2,
      title: 'Week 2: Helpdesk Ticketing Systems (Zendesk & Crisp)',
      titleMl: 'ആഴ്ച 2: ഹെൽപ്പ്‌ഡെസ്ക് ടിക്കറ്റിംഗ് സിസ്റ്റം',
      objective: 'Master ticket statuses, building reusable macro responses, private internal notes, and service level agreements (SLAs).',
      lessons: [
        {
          id: 'les-chat-6',
          dayNumber: 6,
          title: 'Ticket Lifecycles: New, Open, Pending & Solved',
          titleMl: 'ഡേ 6: ടിക്കറ്റ് സ്റ്റാറ്റസുകൾ മനസ്സിലാക്കാം',
          durationMinutes: 50,
          overview: 'Learn what happens when an email or chat becomes a support ticket and how tickets move through statuses.',
          concepts: ['New (unassigned)', 'Open (assigned to agent)', 'Pending (waiting for customer reply)', 'Solved / Closed'],
          simpleEnglishGuide: 'Only set a ticket to "Pending" if you are waiting for the customer to give you information (like an order number). If you need to do work, leave it "Open".',
          malayalamNotes: 'കസ്റ്റമർ പരാതികൾ ടിക്കറ്റുകളായി രേഖപ്പെടുത്തി കൈകാര്യം ചെയ്യുന്ന വിധം.',
          officialDocLinks: [{ title: 'Zendesk Ticket Statuses Guide', url: 'https://support.zendesk.com/hc/en-us/articles/4408883647130-Understanding-ticket-statuses' }],
          videoResources: [{
            title: 'Zendesk Ticket Lifecycle Explained for Beginners',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=zendesk+ticket+lifecycle+tutorial',
            language: 'English',
            duration: '19 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Sign up for a free sandbox trial of Crisp.chat or Zendesk.',
            tasks: ['Create 3 test tickets', 'Move ticket from New -> Open -> Pending -> Solved']
          },
          quiz: [{
            id: 'q-chat-6',
            question: 'When should a support ticket status be changed to "Pending"?',
            options: ['When the agent goes to lunch', 'When the agent has replied and is actively awaiting required information from the customer', 'When the issue is finished', 'Immediately when received'],
            correctOptionIndex: 1,
            explanation: '"Pending" indicates the ball is in the customer\'s court to provide details.'
          }]
        },
        {
          id: 'les-chat-7',
          dayNumber: 7,
          title: 'Creating & Customizing Canned Responses (Macros)',
          titleMl: 'ഡേ 7: മാക്രോകളും തയ്യാറാക്കിയ മറുപടികളും',
          durationMinutes: 50,
          overview: 'Build a library of 15 professional macros covering refunds, shipping inquiries, password resets, and out-of-stock items.',
          concepts: ['Placeholders (e.g. {{ticket.requester.first_name}})', 'Customizing templates so they never feel robotic'],
          simpleEnglishGuide: 'Macros save you from typing the same 3 paragraphs 50 times a day. But always customize the opening sentence to address the customer\'s specific situation.',
          malayalamNotes: 'പതിവായി ചോദിക്കുന്ന ചോദ്യങ്ങൾക്ക് കൃത്യമായ മറുപടികൾ സേവ് ചെയ്തു വെക്കുന്ന രീതി.',
          officialDocLinks: [{ title: 'Creating Macros in Zendesk', url: 'https://support.zendesk.com/hc/en-us/articles/4408882885914-Creating-macros-for-tickets' }],
          videoResources: [{
            title: 'How to Create Helpful Macros in Support Desks',
            provider: 'YouTube Customer Service',
            url: 'https://www.youtube.com/results?search_query=create+macros+zendesk+tutorial',
            language: 'English',
            duration: '16 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Write 5 custom macros with greeting, resolution steps, and closing signature.',
            tasks: ['Include Refund Policy Explanation', 'Include Tracking Number Lookup', 'Include Damaged Item Replacement Request']
          },
          quiz: [{
            id: 'q-chat-7',
            question: 'Why should a support agent always personalize a macro template before clicking send?',
            options: ['To change the font color', 'To ensure the customer feels heard as a human rather than receiving a cold robotic response', 'Because macros do not work otherwise', 'To make it longer'],
            correctOptionIndex: 1,
            explanation: 'Personalization ensures the customer feels genuinely cared for while maintaining efficiency.'
          }]
        },
        {
          id: 'les-chat-8',
          dayNumber: 8,
          title: 'Public Replies vs Internal Private Notes',
          titleMl: 'ഡേ 8: പബ്ലിക് റിപ്ലൈകളും ഇന്റേണൽ നോട്ടുകളും',
          durationMinutes: 45,
          overview: 'Learn the critical difference between Public Replies (visible to the customer) and Internal Private Notes (visible only to teammates).',
          concepts: ['Internal collaboration without alarming customers', 'Writing concise notes for tier-2 technical leads'],
          simpleEnglishGuide: 'Yellow background = Private note. White background = Public message to customer. NEVER put internal remarks in a public reply.',
          malayalamNotes: 'കസ്റ്റമർ കാണാതെ ടീം അംഗങ്ങൾക്ക് മാത്രം കാണാവുന്ന നോട്ടുകൾ എഴുതുന്ന വിധം.',
          officialDocLinks: [{ title: 'Adding internal notes to tickets', url: 'https://support.zendesk.com' }],
          videoResources: [{
            title: 'Public vs Private Notes in Ticketing Software',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=public+vs+internal+notes+zendesk',
            language: 'English',
            duration: '14 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Simulate a case requiring escalation in your test helpdesk.',
            tasks: ['Write an Internal Note tagging @lead explaining that a payment failed twice on Stripe', 'Send a polite Public Reply to the user letting them know you are investigating']
          },
          quiz: [{
            id: 'q-chat-8',
            question: 'What is the purpose of an "Internal Private Note" on a support ticket?',
            options: ['To send an email to the customer', 'To leave notes and diagnostic details for colleagues that the customer cannot see', 'To delete the ticket', 'To change password'],
            correctOptionIndex: 1,
            explanation: 'Private notes allow team members to collaborate on issues without exposing backend notes to users.'
          }]
        },
        {
          id: 'les-chat-9',
          dayNumber: 9,
          title: 'Understanding SLAs & Priority Levels (Urgent, High, Normal)',
          titleMl: 'ഡേ 9: ടിക്കറ്റ് മുൻഗണനകളും എസ്.എൽ.എ (SLA)',
          durationMinutes: 50,
          overview: 'Understand Service Level Agreements (e.g., respond within 15 mins for Urgent vs 4 hours for Normal).',
          concepts: ['SLA breach timers', 'Triage rules (Billing bugs = Urgent, Feature suggestions = Low)'],
          simpleEnglishGuide: 'If a customer cannot log into their account or payment failed, that is Urgent. If someone asks for a different button color, that is Low priority.',
          malayalamNotes: 'ഏറ്റവും അത്യാവശ്യമായ പ്രശ്നങ്ങൾ ആദ്യം പരിഹരിക്കുന്ന മുൻഗണനാ ക്രമം.',
          officialDocLinks: [{ title: 'Defining SLA policies', url: 'https://support.zendesk.com/hc/en-us/articles/4408882885914' }],
          videoResources: [{
            title: 'What is an SLA in Customer Service?',
            provider: 'YouTube Customer Service',
            url: 'https://www.youtube.com/results?search_query=sla+customer+service+explained',
            language: 'English',
            duration: '15 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Categorize 10 sample customer inquiries into Urgent, High, Normal, and Low priorities.',
            tasks: ['Document the rationale for each priority assignment']
          },
          quiz: [{
            id: 'q-chat-9',
            question: 'Which of the following scenarios should be tagged as "Urgent" priority?',
            options: ['User asking when the summer sale starts', 'User reporting double-charged payment and unable to access purchased course', 'User complimenting the website design', 'User asking for phone number'],
            correctOptionIndex: 1,
            explanation: 'Financial discrepancies and complete access blocks require immediate urgent intervention.'
          }]
        },
        {
          id: 'les-chat-10',
          dayNumber: 10,
          title: 'Week 2 Review: Simulated 10-Ticket Resolution Drill',
          titleMl: 'ഡേ 10: ആഴ്ച 2 ടിക്കറ്റ് പരിഹാര പരീക്ഷ',
          durationMinutes: 60,
          overview: 'Resolve 10 varied customer tickets in your sandbox helpdesk, applying macros, internal notes, and proper status closures.',
          concepts: ['Consolidation of ticketing workflow'],
          simpleEnglishGuide: 'Treat every ticket as a real person who needs your help. Speed is good, but kindness and accuracy are what earn 5 stars.',
          malayalamNotes: 'പത്ത് വ്യത്യസ്ത പ്രശ്നങ്ങൾ കൃത്യമായി പരിഹരിച്ച് പ്രാക്ടീസ് ചെയ്യുന്നു.',
          officialDocLinks: [{ title: 'Zendesk Agent Guide', url: 'https://support.zendesk.com' }],
          videoResources: [{
            title: 'Mock Customer Support Ticket Scenarios Walkthrough',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=mock+customer+service+scenarios+walkthrough',
            language: 'English',
            duration: '22 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Resolve 10 test tickets in your sandbox helpdesk and export the resolution summary report.',
            tasks: ['Ensure 100% of tickets have proper tags, priorities, and polite public replies']
          },
          quiz: [{
            id: 'q-chat-10',
            question: 'What is the final step before marking a customer ticket as "Solved"?',
            options: ['Turn off computer', 'Confirming that all parts of the customer\'s question were answered and asking if there is anything else you can help with', 'Deleting the customer record', 'Asking for a tip'],
            correctOptionIndex: 1,
            explanation: 'Verifying complete issue resolution and offering further assistance ensures high customer satisfaction.'
          }]
        }
      ]
    },
    {
      id: 'mod-chat-3',
      weekNumber: 3,
      title: 'Week 3: WhatsApp Business & Live Order Support',
      titleMl: 'ആഴ്ച 3: വാട്സാപ്പ് ബിസിനസ്സും തത്സമയ ഓർഡർ സപ്പോർട്ടും',
      objective: 'Master WhatsApp Business quick replies, catalog sharing, automated greeting/away messages, and lookup workflows.',
      lessons: [
        {
          id: 'les-chat-11',
          dayNumber: 11,
          title: 'WhatsApp Business: Quick Replies & Automated Messages',
          titleMl: 'ഡേ 11: വാട്സാപ്പ് ബിസിനസ്സ് ക്വിക്ക് റിപ്ലൈകൾ',
          durationMinutes: 50,
          overview: 'Set up WhatsApp Business tools: "/pricing", "/track", "/hours", automated greeting messages, and away notices.',
          concepts: ['Quick replies starting with slash (/)', 'Business profile configuration', 'Catalog product sharing over chat'],
          simpleEnglishGuide: 'Typing /track instantly loads your tracking instructions in WhatsApp. It saves minutes on every customer chat.',
          malayalamNotes: 'വാട്സാപ്പിലൂടെ കസ്റ്റമർമാർക്ക് വേഗത്തിൽ മറുപടി നൽകാൻ ക്വിക്ക് റിപ്ലൈകൾ ഉപയോഗിക്കുന്നു.',
          officialDocLinks: [{ title: 'WhatsApp Business App Features', url: 'https://faq.whatsapp.com/584984183617307' }],
          videoResources: [{
            title: 'WhatsApp Business Tutorial for Customer Service in Malayalam',
            provider: 'YouTube Tech Malayalam',
            url: 'https://www.youtube.com/results?search_query=whatsapp+business+features+malayalam',
            language: 'Malayalam',
            duration: '20 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Configure 5 Quick Replies in WhatsApp Business or a demo messaging simulator.',
            tasks: ['Create /welcome, /hours, /shipping, /refund, and /bankdetails']
          },
          quiz: [{
            id: 'q-chat-11',
            question: 'How do support agents quickly invoke saved templates in WhatsApp Business chats?',
            options: ['By typing a slash (/) symbol followed by the shortcut keyword', 'By shaking the phone', 'By sending an audio message', 'By dialing *#'],
            correctOptionIndex: 0,
            explanation: 'Typing / displays the list of quick reply shortcuts for instant insertion.'
          }]
        },
        {
          id: 'les-chat-12',
          dayNumber: 12,
          title: 'Order Status Lookups & Courier Delivery Troubleshooting',
          titleMl: 'ഡേ 12: ഓർഡർ വിവരങ്ങൾ പരിശോധിച്ച് നൽകൽ',
          durationMinutes: 50,
          overview: 'Interface between customer chat and store order databases (Shopify/WooCommerce) to answer "Where is my order?" (WISMO).',
          concepts: ['WISMO queries (Where Is My Order)', 'Locating tracking links and explaining courier status updates in plain English'],
          simpleEnglishGuide: 'Do not just give the tracking link. Tell them: "Your order is currently at the Kochi distribution hub and is out for delivery today with Blue Dart courier".',
          malayalamNotes: 'കസ്റ്റമർ ഓർഡർ എവിടെയെത്തി എന്ന് കൃത്യമായി മനസ്സിലാക്കി പറഞ്ഞുകൊടുക്കുന്ന രീതി.',
          officialDocLinks: [{ title: 'Handling WISMO requests', url: 'https://support.zendesk.com' }],
          videoResources: [{
            title: 'How to Handle "Where Is My Order" Support Tickets',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=where+is+my+order+support+ticket+scripts',
            language: 'English',
            duration: '17 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Draft 3 WISMO customer replies for different courier statuses (In Transit, Delivery Attempt Failed, Delivered to Reception).',
            tasks: ['Include clear next-action instructions for the customer']
          },
          quiz: [{
            id: 'q-chat-12',
            question: 'What does "WISMO" stand for in e-commerce customer support?',
            options: ['Where Is My Order?', 'What Is Sales Monthly Output?', 'Who Is Special Member Online?', 'Website Internal System Mode'],
            correctOptionIndex: 0,
            explanation: 'WISMO represents the single most common customer support inquiry in retail e-commerce.'
          }]
        },
        {
          id: 'les-chat-13',
          dayNumber: 13,
          title: 'Managing Returns, Replacements & Proof of Damage',
          titleMl: 'ഡേ 13: കേടുപാടുകൾ വന്ന ഉൽപ്പന്നങ്ങളുടെ റീപ്ലേസ്‌മെന്റ്',
          durationMinutes: 50,
          overview: 'Politely request unboxing photos/videos for damaged items without making customers feel accused of lying.',
          concepts: ['Requesting verification photos with empathy', 'Generating reverse pickup courier requests'],
          simpleEnglishGuide: 'Say: "I am so sorry your mug arrived chipped! Could you please share a quick photo of the box and item? This allows me to immediately dispatch a free replacement for you without delay".',
          malayalamNotes: 'കേടുവന്ന ഉൽപ്പന്നങ്ങളുടെ ഫോട്ടോ ചോദിക്കുന്നതും പുതിയത് അയച്ചുകൊടുക്കുന്നതുമായ രീതി.',
          officialDocLinks: [{ title: 'E-commerce Return Policies Best Practices', url: 'https://www.shopify.com/blog/return-policy' }],
          videoResources: [{
            title: 'Handling Damaged Goods & Replacement Requests in Chat',
            provider: 'YouTube Customer Service',
            url: 'https://www.youtube.com/results?search_query=handling+damaged+goods+customer+service',
            language: 'English',
            duration: '18 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Write a complete 4-step chat conversation script handling a damaged product claim.',
            tasks: ['Step 1: Empathy apology, Step 2: Request photo, Step 3: Validate and issue replacement, Step 4: Tracking confirmation']
          },
          quiz: [{
            id: 'q-chat-13',
            question: 'Why should you explain WHY you need a photo of a damaged item when asking a customer?',
            options: ['To waste their time', 'So they know the photo enables immediate replacement authorization rather than feeling suspected of dishonesty', 'Because photos are fun', 'For social media'],
            correctOptionIndex: 1,
            explanation: 'Framing photo requests around rapid replacement authorization prevents customer offense.'
          }]
        },
        {
          id: 'les-chat-14',
          dayNumber: 14,
          title: 'Security, Privacy & Phishing Verification in Support',
          titleMl: 'ഡേ 14: സുരക്ഷയും കസ്റ്റമർ വിവര സംരക്ഷണവും',
          durationMinutes: 50,
          overview: 'Learn what information you can and cannot share: NEVER ask for credit card CVV, full passwords, or send OTPs over chat.',
          concepts: ['Identity verification protocols (confirming registered email or phone)', 'Recognizing social engineering attempts'],
          simpleEnglishGuide: 'A genuine support agent never asks for a customer\'s password or card CVV number. If a user offers it, politely tell them to never share sensitive passwords over chat.',
          malayalamNotes: 'പാസ്‌വേഡുകളോ ബാങ്ക് വിവരങ്ങളോ ചോദിക്കാതെ സുരക്ഷിതമായി കസ്റ്റമറെ വെരിഫൈ ചെയ്യുന്ന വിധം.',
          officialDocLinks: [{ title: 'Customer Data Privacy Standards', url: 'https://support.zendesk.com' }],
          videoResources: [{
            title: 'Customer Data Security & Privacy for Helpdesk Agents',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=customer+data+privacy+security+support+agent',
            language: 'English',
            duration: '16 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Create a Security & Privacy Checklist for your support workstation.',
            tasks: ['List 4 prohibited questions (Password, CVV, PIN, full Card Number)', 'Write the standard Identity Verification Script']
          },
          quiz: [{
            id: 'q-chat-14',
            question: 'What should a support agent do if a customer types their credit card CVV number in a live chat?',
            options: ['Save it for later', 'Politely remind the customer that sensitive card security codes should never be shared over chat, and redact/delete the sensitive data according to security policy', 'Share it with colleagues', 'Ignore it'],
            correctOptionIndex: 1,
            explanation: 'Redacting sensitive card details and educating the customer upholds PCI-DSS compliance.'
          }]
        },
        {
          id: 'les-chat-15',
          dayNumber: 15,
          title: 'Week 3 Review: Live Chat Empathy & Speed Drill',
          titleMl: 'ഡേ 15: ആഴ്ച 3 ലൈവ് ചാറ്റ് പരീക്ഷ',
          durationMinutes: 60,
          overview: 'Complete a timed live chat interaction with simulated customer inquiries, testing empathy, speed, and macro accuracy.',
          concepts: ['Consolidation of WhatsApp and live chat troubleshooting'],
          simpleEnglishGuide: 'Review your responses. Are they clear? Did you greet the customer by name? Is the solution obvious?',
          malayalamNotes: 'തത്സമയ ചാറ്റുകളിൽ കൃത്യതയും വേഗതയും പാലിക്കുന്നുണ്ടോ എന്ന് ഉറപ്പുവരുത്തുന്നു.',
          officialDocLinks: [{ title: 'Live Chat Best Practices', url: 'https://crisp.chat' }],
          videoResources: [{
            title: 'Live Chat Agent Speed & Empathy Practice Walkthrough',
            provider: 'YouTube Customer Service',
            url: 'https://www.youtube.com/results?search_query=live+chat+agent+practice+session',
            language: 'English',
            duration: '20 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Resolve 5 simulated live chat tickets in under 15 minutes total.',
            tasks: ['Maintain average first response time under 45 seconds', 'Achieve 100% positive tone rating']
          },
          quiz: [{
            id: 'q-chat-15',
            question: 'What is an ideal target First Response Time (FRT) for live web chat interactions?',
            options: ['1 hour', 'Under 45–60 seconds', '1 day', '10 minutes'],
            correctOptionIndex: 1,
            explanation: 'Live chat visitors expect immediate initial greeting and acknowledgment within 45 to 60 seconds.'
          }]
        }
      ]
    },
    {
      id: 'mod-chat-4',
      weekNumber: 4,
      title: 'Week 4: Portfolio, Resume & Job Applications',
      titleMl: 'ആഴ്ച 4: പോർട്ട്ഫോളിയോ, റെസ്യൂമെ & ഇന്റർവ്യൂ തയ്യാറെടുപ്പ്',
      objective: 'Compile your Macro Book and de-escalation transcripts into a support portfolio, build an ATS resume, and ace mock interviews.',
      lessons: [
        {
          id: 'les-chat-16',
          dayNumber: 16,
          title: 'Compiling Your Customer Support Playbook & Macro Portfolio',
          titleMl: 'ഡേ 16: കസ്റ്റമർ സപ്പോർട്ട് പ്ലേബുക്ക് നിർമ്മാണം',
          durationMinutes: 55,
          overview: 'Create a professional 15-scenario Customer Support Playbook document showcasing your prepared macros and de-escalation responses.',
          concepts: ['Playbook organization by category (Billing, Shipping, Technical, General)', 'Writing rationale notes for each script'],
          simpleEnglishGuide: 'When you show a hiring manager your 15 ready-to-use customer macros, they know you can start answering chats on day one with zero training friction.',
          malayalamNotes: 'നിങ്ങൾ തയ്യാറാക്കിയ മറുപടികൾ ഒരു പ്രൊഫഷണൽ പ്ലേബുക്കായി ചിട്ടപ്പെടുത്തുന്നു.',
          officialDocLinks: [{ title: 'Google Docs Playbook Templates', url: 'https://docs.google.com' }],
          videoResources: [{
            title: 'How to Showcase Customer Support Skills in a Portfolio',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=customer+service+portfolio+guide',
            language: 'English',
            duration: '18 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Assemble your 15-scenario Customer Support Playbook into a clean PDF.',
            tasks: ['Include Table of Contents', 'Format with clear section headers and callout tip boxes']
          },
          quiz: [{
            id: 'q-chat-16',
            question: 'Why is a pre-written Macro Playbook a powerful portfolio asset for entry-level applicants?',
            options: ['It proves you can type in English, understand customer psychology, and handle difficult scenarios without guessing', 'It takes up space', 'Employers require it by law', 'It replaces a computer'],
            correctOptionIndex: 0,
            explanation: 'A macro playbook is tangible proof of empathy, clear writing, and readiness for actual support work.'
          }]
        },
        {
          id: 'les-chat-17',
          dayNumber: 17,
          title: 'Writing an ATS-Optimized Customer Support Resume',
          titleMl: 'ഡേ 17: കസ്റ്റമർ സപ്പോർട്ട് റെസ്യൂമെ',
          durationMinutes: 50,
          overview: 'Write a clean resume highlighting typing speed (WPM), tools (Zendesk, Crisp, WhatsApp Business, Gmail), and soft skills.',
          concepts: ['Target job titles: "Customer Support Representative", "Chat Support Associate", "Remote Helpdesk Specialist"'],
          simpleEnglishGuide: 'Include your typing test certificate link directly on your resume. "Typing Speed: 42 WPM with 98% accuracy (Verified on TypingTest.com)".',
          malayalamNotes: 'ടൈപ്പിംഗ് സ്പീഡും സോഫ്റ്റ്‌വെയറുകളും ഉൾപ്പെടുത്തി റെസ്യൂമെ തയ്യാറാക്കുന്നു.',
          officialDocLinks: [{ title: 'Career Launchpad Resume Builder', url: '/resume-builder' }],
          videoResources: [{
            title: 'Customer Service Resume for Remote Work with No Experience',
            provider: 'YouTube Career Guidance',
            url: 'https://www.youtube.com/results?search_query=customer+service+resume+no+experience',
            language: 'English',
            duration: '17 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Generate your Customer Support Resume using the Career Launchpad builder.',
            tasks: ['Include verified typing score and link to your Customer Support Playbook']
          },
          quiz: [{
            id: 'q-chat-17',
            question: 'What key technical metric should always be highlighted on a chat support resume?',
            options: ['Monitor screen size', 'Typing speed in WPM with accuracy percentage', 'Favorite video games', 'Number of emails sent per year'],
            correctOptionIndex: 1,
            explanation: 'Typing speed (WPM) and accuracy are fundamental screening benchmarks for chat roles.'
          }]
        },
        {
          id: 'les-chat-18',
          dayNumber: 18,
          title: 'Where to Find Legitimate Remote Chat Support Roles',
          titleMl: 'ഡേ 18: യഥാർത്ഥ ജോലികൾ എവിടെ തിരയണം?',
          durationMinutes: 50,
          overview: 'Search verified job listings on Internshala, LinkedIn, Indeed, and We Work Remotely, avoiding fake contract scams.',
          concepts: ['Filtering for "Non-Voice", "Chat Support", "Remote Helpdesk"', 'Avoiding "Data Typing Security Deposit" scams'],
          simpleEnglishGuide: 'Remember: Real employers pay you for your work. Scammers ask you to pay them for "software licenses" or "registration". Never give money to any recruiter.',
          malayalamNotes: 'തട്ടിപ്പുകളിൽ വീഴാതെ വിശ്വസനീയമായ കമ്പനികളിൽ ജോലികൾ കണ്ടെത്തുന്നു.',
          officialDocLinks: [{ title: 'Career Launchpad Job Board', url: '/jobs' }],
          videoResources: [{
            title: 'How to Find Legit Non-Voice Chat Jobs in India',
            provider: 'YouTube Career Malayalam',
            url: 'https://www.youtube.com/results?search_query=non+voice+chat+jobs+work+from+home+malayalam',
            language: 'Malayalam',
            duration: '22 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Identify 5 genuine chat or helpdesk job openings and log them in your Application Tracker.',
            tasks: ['Record Company, Title, Required Tools, and Direct Application Link']
          },
          quiz: [{
            id: 'q-chat-18',
            question: 'What is a dead giveaway of a fraudulent online chat job offer?',
            options: ['They interview you via video call', 'They require you to pay a ₹1,500 "server registration fee" via UPI before issuing an offer letter', 'They ask for your resume', 'They ask about your typing speed'],
            correctOptionIndex: 1,
            explanation: 'Any demand for upfront payment via UPI/crypto is guaranteed employment fraud.'
          }]
        },
        {
          id: 'les-chat-19',
          dayNumber: 19,
          title: 'Mock Chat Roleplay & Scenario Interview Questions',
          titleMl: 'ഡേ 19: മോക്ക് ചാറ്റ് ഇന്റർവ്യൂ പരിശീലനം',
          durationMinutes: 55,
          overview: 'Practice answers to the classic support interview question: "Tell me about a time you turned an unhappy customer into a loyal advocate".',
          concepts: ['Live typing roleplay tests given during video interviews', 'Demonstrating calm composure under pressure'],
          simpleEnglishGuide: 'In your interview, the manager may pretend to be an upset customer in the chat window. Stay calm, listen, apologize for the inconvenience, and propose 2 clear solutions.',
          malayalamNotes: 'ഇന്റർവ്യൂവിൽ അവർ കസ്റ്റമറായി അഭിനയിച്ച് നടത്തുന്ന ചാറ്റ് ടെസ്റ്റുകൾ വിജയിക്കാൻ പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'Customer Support Interview Questions', url: 'https://support.zendesk.com' }],
          videoResources: [{
            title: 'Top 10 Customer Support Interview Questions & Star Answers',
            provider: 'YouTube Career Guidance',
            url: 'https://www.youtube.com/results?search_query=customer+support+interview+questions+and+answers',
            language: 'English',
            duration: '21 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Record written responses to 3 challenging roleplay prompts.',
            tasks: ['Prompt 1: "I want my money back right now or I will complain on Twitter!"', 'Prompt 2: "My parcel is 3 days late, where is it?"']
          },
          quiz: [{
            id: 'q-chat-19',
            question: 'When an angry customer threatens to complain on social media, what should your first response be?',
            options: ['Tell them they are threatening you', 'Remain calm, acknowledge their frustration, and immediately offer to personally investigate and resolve the issue', 'Block them', 'Ignore the message'],
            correctOptionIndex: 1,
            explanation: 'Immediate personal ownership and calm empathy instantly diffuse public escalation threats.'
          }]
        },
        {
          id: 'les-chat-20',
          dayNumber: 20,
          title: 'Course Final Assessment & First-Month Workplace Blueprint',
          titleMl: 'ഡേ 20: ഫൈനൽ അസസ്സ്‌മെന്റും കരിയർ ഗൈഡും',
          durationMinutes: 60,
          overview: 'Complete the comprehensive customer support assessment, submit your projects, and review first-month workplace guidelines.',
          concepts: ['First 30 days support agent survival guide', 'Preventing burnout in high-volume queues'],
          simpleEnglishGuide: 'Take small 2-minute breathing breaks between heavy shifts. Always drink water, stretch your wrists, and remember: an upset customer is angry at the problem, not at you personally.',
          malayalamNotes: 'ജോലി ആരംഭിച്ച ശേഷം സമാധാനത്തോടെയും കാര്യക്ഷമതയോടെയും ജോലി ചെയ്യാനുള്ള ടിപ്പുകൾ.',
          officialDocLinks: [{ title: 'Customer Support Wellbeing Best Practices', url: 'https://support.zendesk.com' }],
          videoResources: [{
            title: 'First 30 Days as a Remote Customer Support Agent — Tips for Success',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=first+30+days+customer+support+agent',
            language: 'English',
            duration: '18 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Submit your 3 project links to the Career Launchpad Skill Assessment evaluator.',
            tasks: ['Verify all project links are public and accessible', 'Review your final completion badge']
          },
          quiz: [{
            id: 'q-chat-20',
            question: 'What is the best mental habit for preventing burnout in customer support roles?',
            options: ['Taking customer anger personally', 'Remembering that customer frustration is directed at product failures, not at you, and taking structured brief recovery pauses between shifts', 'Quitting immediately', 'Arguing back'],
            correctOptionIndex: 1,
            explanation: 'Maintaining professional detachment and taking intentional recovery breaks ensures long-term career resilience.'
          }]
        }
      ]
    }
  ],
  projects: [
    {
      id: 'proj-chat-1',
      title: 'Customer Support Macro & Response Playbook (15 Scenarios)',
      titleMl: 'കസ്റ്റമർ സപ്പോർട്ട് മാക്രോ പ്ലേബുക്ക്',
      description: 'Author a comprehensive, highly empathetic 15-scenario Customer Support Playbook covering retail, tech, and billing inquiries.',
      scenario: 'You are hired to create the initial response manual for a growing e-commerce lifestyle brand "Coastline Goods". They need standardized responses that maintain a warm, polite, and helpful tone across live chat, email, and WhatsApp.',
      instructions: [
        'Organize the playbook into 4 clear sections: 1. Order & Shipping Inquiries, 2. Billing & Refund Requests, 3. Damaged / Defective Items, 4. General Policy & Escalations',
        'Write 15 complete macro responses with greetings, clear troubleshooting steps, and polite sign-offs',
        'Include bracketed placeholders like [Customer Name], [Order Number], and [Tracking Link]',
        'Add a "Tone & Sensitivity Note" for each scenario explaining why that specific wording was chosen'
      ],
      deliverables: [
        'A polished PDF or Google Docs playbook (minimum 6 pages) with formatted callout boxes and table of contents'
      ],
      downloadableDataFilename: 'coastline_goods_support_brief.json',
      downloadableDataContent: JSON.stringify({
        company: 'Coastline Goods',
        tone: 'Warm, empathetic, professional, proactive',
        common_issues: [
          'Courier marked delivered but package not found',
          'Customer ordered wrong t-shirt size and wants instant exchange',
          'Discount code SAVE20 failed at checkout',
          'Customer received damaged ceramic coffee mug'
        ]
      }, null, 2),
      gradingRubric: [
        { criterion: 'Empathy & Tone Quality', weight: 40, standard: 'Responses avoid robotic jargon, use warm language, and validate customer feelings sincerely.' },
        { criterion: 'Clarity of Action Steps', weight: 35, standard: 'Every response gives the customer an exact next step without ambiguity.' },
        { criterion: 'Formatting & Organization', weight: 25, standard: 'Clean visual layout with clear section categories and easy copy-paste usability.' }
      ],
      modelSolutionOverview: 'The completed playbook features an executive guide on brand voice, followed by 15 formatted card templates with clear placeholders, do\'s and don\'ts, and escalation triggers.'
    },
    {
      id: 'proj-chat-2',
      title: 'De-Escalation Case Study: Handling a Delivery Crisis',
      titleMl: 'ഡെലിവറി തകരാർ പരിഹാര കേസ് സ്റ്റഡി',
      description: 'Document the multi-step resolution of a furious customer whose wedding anniversary gift was delayed, achieving a 5-star CSAT review.',
      scenario: 'A high-value customer, Mr. Deepak Varma, ordered an engraved anniversary watch with expedited 2-day shipping. Due to a courier hub error, the package is delayed by 48 hours. Mr. Deepak is furious on live chat, threatening legal action and public social media posts.',
      instructions: [
        'Write the complete turn-by-turn chat conversation transcript (minimum 8 back-and-forth exchanges)',
        'Demonstrate active listening and sincere apology without making excuses or blaming the courier',
        'Execute immediate proactive resolution: refunding shipping fees, arranging direct courier dispatch from the local hub, and offering a courtesy gift card',
        'Include the customer\'s final positive response and 5-star CSAT survey feedback'
      ],
      deliverables: [
        'Formatted Case Study PDF showing the transcript, internal notes taken during the chat, and the retrospective learning summary'
      ],
      gradingRubric: [
        { criterion: 'De-Escalation Skill', weight: 40, standard: 'Diffuses customer anger within the first 3 exchanges through sincere empathy and zero defensive pushback.' },
        { criterion: 'Operational Resolution', weight: 35, standard: 'Proposes practical, realistic solutions (refund of shipping + expedited hub dispatch).' },
        { criterion: 'Internal Documentation', weight: 25, standard: 'Includes clean internal notes tagging the logistics team and courier ticket reference.' }
      ],
      modelSolutionOverview: 'The case study includes timestamped transcript bubbles, internal ticket tags, and a post-mortem section analyzing how the proactive courier dispatch prevented a brand PR crisis.'
    },
    {
      id: 'proj-chat-3',
      title: 'WhatsApp Business Support Setup & Catalog Integration',
      titleMl: 'വാട്സാപ്പ് ബിസിനസ്സ് സപ്പോർട്ട് സെറ്റപ്പ്',
      description: 'Configure a fully documented WhatsApp Business support flow with quick replies, automated away/greeting messages, and product catalog inquiry routing.',
      scenario: 'A specialty coffee roaster wants to manage all customer inquiries, order updates, and brewing consultations over WhatsApp. You are tasked with setting up their customer messaging flow.',
      instructions: [
        'Draft automated Greeting Message (sent to new contacts) and Away Message (triggered outside business hours)',
        'Create 8 Quick Replies for common coffee inquiries (Bean Origins, Grind Sizes, Brewing Guides, Subscription Cancellation, Shipping Timelines)',
        'Design a 3-step routing protocol for complex questions (e.g. wholesale inquiries escalated to founder)',
        'Compile into an illustrated WhatsApp Operations Guide with mock chat screenshots'
      ],
      deliverables: [
        'WhatsApp Business Customer Support Operations Guide (PDF) with exact shortcuts and message texts'
      ],
      gradingRubric: [
        { criterion: 'Quick Reply Utility', weight: 35, standard: 'Shortcuts are intuitive (/origin, /grind, /track) and text is concise for mobile reading.' },
        { criterion: 'Automated Messaging Clarity', weight: 35, standard: 'Greeting and away messages clearly set expectations regarding reply times.' },
        { criterion: 'Escalation Protocol', weight: 30, standard: 'Clear guidelines on when to transfer a WhatsApp inquiry to a voice call or email.' }
      ],
      modelSolutionOverview: 'The guide provides mobile-optimized templates with emoji accents, bold key terms, and clean paragraph breaks designed for rapid scanning on mobile chat screens.'
    }
  ],
  workplaceGuidance: {
    firstWeek: [
      'Read the company\'s past 50 resolved tickets to understand common customer issues and the approved brand tone.',
      'Always test macro placeholders before sending: make sure "{{ticket.requester.name}}" replaced with the actual customer name.',
      'If you do not know the answer to a question, tell the customer: "Let me check that detail with our fulfillment lead to make sure I give you 100% accurate info—I will be back in 2 minutes".',
      'Never leave a live chat visitor waiting more than 60 seconds without checking in: "Still looking into this for you, thanks for your patience!"'
    ],
    firstMonth: [
      'Track the top 3 questions you answer every week and propose new macros or knowledge base articles to your manager.',
      'Learn how to read basic server status pages (like status.shopify.com or status.stripe.com) to quickly detect widespread outages.',
      'Maintain your daily ergonomics: proper chair posture, eye rest breaks, and wrist stretches.'
    ],
    commonMistakes: [
      'Closing a ticket without verifying that the customer\'s core problem was actually resolved.',
      'Copy-pasting a macro with the wrong customer name or leaving placeholder text like "[Insert Date Here]" visible.',
      'Arguing with an upset customer over company rules instead of showing empathy.'
    ]
  },
  interviewPrep: [
    {
      question: 'How do you handle a customer who is shouting in all-caps and using aggressive language on live chat?',
      answer: 'I stay calm and do not take their anger personally, recognizing they are frustrated by the situation. I respond with empathy: "I understand how upsetting this experience has been for you, and I am personally here to help resolve it right now". I focus immediately on the concrete facts of their issue, avoid defensive language, and provide clear step-by-step resolution.',
      tips: 'Emphasize your emotional stability and problem-solving focus under stress.'
    },
    {
      question: 'What is your strategy when you have 3 customers chatting with you at the exact same moment?',
      answer: 'I use structured triage. I send immediate polite greetings using quick macros so all 3 customers know they are heard within 30 seconds. Then I prioritize by issue urgency: resolving quick transactional queries first (like a tracking link) while pulling up records for the more complex inquiry in the background, keeping all customers updated with brief check-ins every 45-60 seconds.',
      tips: 'Demonstrates real-world multitasking discipline.'
    },
    {
      question: 'What does "First Contact Resolution" (FCR) mean, and why is it important?',
      answer: 'First Contact Resolution means resolving the customer\'s issue completely during their initial interaction without requiring them to follow up or create multiple tickets. It is one of the most vital metrics because high FCR leads to happier customers and lowers operational costs for the business.',
      tips: 'Shows professional helpdesk literacy.'
    }
  ]
};
