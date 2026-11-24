import { Course } from '@/types';

export const bookkeepingCourse: Course = {
  id: 'course-bookkeep',
  careerSlug: 'bookkeeping-invoicing',
  title: 'Basic Bookkeeping & Invoicing Assistant (30 Days)',
  titleMl: 'അടിസ്ഥാന ബുക്ക് കീപ്പിംഗ് & ഇൻവോയ്സിംഗ് (30 ദിവസങ്ങൾ)',
  durationDays: 30,
  weeklyGoals: [
    {
      weekNumber: 1,
      title: 'Accounting Fundamentals, Double-Entry & Chart of Accounts',
      objective: 'Understand the fundamental accounting equation (Assets = Liabilities + Equity), debits and credits, ledger accounts, and ethical record-keeping principles.'
    },
    {
      weekNumber: 2,
      title: 'Sales Invoicing, Accounts Receivable & Payment Receipts',
      objective: 'Generate commercial sales invoices with GST/VAT calculations, issue credit notes, track customer payments, and manage Accounts Receivable (A/R).'
    },
    {
      weekNumber: 3,
      title: 'Vendor Bills, Accounts Payable & Expense Categorization',
      objective: 'Enter supplier bills, match against purchase orders, categorize office expenses, track petty cash, and manage Accounts Payable (A/P).'
    },
    {
      weekNumber: 4,
      title: 'Bank Reconciliation, Financial Reports & Career Launch',
      objective: 'Reconcile 1-month bank statements against ledger records in Zoho Books, compile basic Profit & Loss summaries, and prepare for remote bookkeeping roles.'
    },
    {
      weekNumber: 5,
      title: 'Week 5: Advanced Invoicing, Multi-Currency & GST Compliance',
      objective: 'Handle international USD/AED billing, recurring subscriptions, and prepare GST return reports.'
    },
    {
      weekNumber: 6,
      title: 'Week 6: Month-End Close, Audit Trails & Career Launch',
      objective: 'Execute full month-end balance checks, assemble verified portfolio, and apply for remote roles.'
    }
    ],

  modules: [
    {
      id: 'mod-bk-1',
      weekNumber: 1,
      title: 'Week 1: Accounting Principles & The Chart of Accounts',
      titleMl: 'ആഴ്ച 1: അടിസ്ഥാന അക്കൗണ്ടിംഗ് തത്വങ്ങളും ചാർട്ട് ഓഫ് അക്കൗണ്ട്സും',
      objective: 'Learn the double-entry system, debit and credit mechanics, and how businesses categorize their financial accounts.',
      lessons: [
        {
          id: 'les-bk-1',
          dayNumber: 1,
          title: 'The Accounting Equation: Assets, Liabilities & Equity',
          titleMl: 'ഡേ 1: അക്കൗണ്ടിംഗ് ഇക്വേഷൻ മനസ്സിലാക്കാം',
          durationMinutes: 50,
          overview: 'Understand the core equation that powers all global business: Assets = Liabilities + Equity.',
          concepts: ['Assets (What the business owns: Cash, Inventory, Equipment)', 'Liabilities (What it owes: Loans, Supplier bills)', 'Equity (Owner investment and retained profit)'],
          simpleEnglishGuide: 'If your business has ₹1,00,000 cash in the bank (Asset), where did it come from? Either the owner invested it (Equity) or a supplier loaned it (Liability). Both sides must always balance.',
          malayalamNotes: 'അസറ്റുകളും (സ്വത്തുക്കൾ), ലയബിലിറ്റികളും (ബാധ്യതകൾ), ഇക്വിറ്റിയും തമ്മിലുള്ള ബന്ധം ലളിതമായി പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'Zoho Books Accounting Basics', url: 'https://www.zoho.com/books/academy/' }],
          videoResources: [{
            title: 'Basic Accounting Terms in Malayalam — Clear & Simple',
            provider: 'YouTube Tech Malayalam',
            url: 'https://www.youtube.com/results?search_query=accounting+basics+in+malayalam+for+beginners',
            language: 'Malayalam',
            duration: '24 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Classify 15 common business items into Assets, Liabilities, Equity, Income, or Expenses.',
            tasks: ['Bank Balance -> Asset', 'Office Rent -> Expense', 'Customer Payment Received -> Income', 'Supplier Bill Due -> Liability']
          },
          quiz: [{
            id: 'q-bk-1',
            question: 'In the fundamental accounting equation, what does Assets equal?',
            options: ['Liabilities minus Equity', 'Liabilities + Equity', 'Income + Expenses', 'Cash only'],
            correctOptionIndex: 1,
            explanation: 'Assets = Liabilities + Equity is the foundational balance sheet equation.'
          }]
        },
        {
          id: 'les-bk-2',
          dayNumber: 2,
          title: 'Debit and Credit: The Golden Rules Made Simple',
          titleMl: 'ഡേ 2: ഡെബിറ്റ് & ക്രെഡിറ്റ് ലളിതമായ നിയമങ്ങൾ',
          durationMinutes: 50,
          overview: 'Eliminate confusion around Debit (Dr) and Credit (Cr) with the simple DEAL / CLIP rule.',
          concepts: ['DEAL: Dividends, Expenses, Assets, Losses increase with DEBIT', 'CLIP: Capital, Liabilities, Income, Profits increase with CREDIT'],
          simpleEnglishGuide: 'Forget bank SMS alerts where "credit" means money came in. In business accounting: when you buy office equipment (Asset increases), you DEBIT Equipment. When you pay cash (Asset decreases), you CREDIT Cash.',
          malayalamNotes: 'ഡെബിറ്റും ക്രെഡിറ്റും എപ്പോൾ ചെയ്യണം എന്ന ലളിതമായ നിയമങ്ങൾ.',
          officialDocLinks: [{ title: 'Double-entry bookkeeping principles', url: 'https://www.zoho.com/books/guides/' }],
          videoResources: [{
            title: 'Debit and Credit Rules Explained with Examples',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=debit+and+credit+rules+simplified+for+beginners',
            language: 'English',
            duration: '20 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Write the 2-sided journal entries for 5 everyday business events.',
            tasks: ['1. Started business with ₹50,000 cash', '2. Purchased ₹10,000 stationery for cash', '3. Sold goods for ₹15,000 cash']
          },
          quiz: [{
            id: 'q-bk-2',
            question: 'When a company spends money to pay monthly internet bills, which account is debited?',
            options: ['Cash Account', 'Internet / Utility Expense Account', 'Owner Equity', 'Sales Income'],
            correctOptionIndex: 1,
            explanation: 'Expenses increase with a Debit (DEAL rule), so Utility Expense is debited.'
          }]
        },
        {
          id: 'les-bk-3',
          dayNumber: 3,
          title: 'Building & Navigating a Chart of Accounts (COA)',
          titleMl: 'ഡേ 3: ചാർട്ട് ഓഫ് അക്കൗണ്ട്സ് (Chart of Accounts)',
          durationMinutes: 50,
          overview: 'Learn how software organizes financial buckets using standard account numbering (1000s = Assets, 2000s = Liabilities, etc.).',
          concepts: ['Structure of the Chart of Accounts', 'Creating sub-accounts for clear tracking (e.g. Travel: Local vs Flights)'],
          simpleEnglishGuide: 'The Chart of Accounts is like the filing cabinet of your business. Every single rupee spent or earned has its own designated folder.',
          malayalamNotes: 'കണക്കുകൾ സൂക്ഷിക്കാൻ ഉപയോഗിക്കുന്ന വ്യത്യസ്ത അക്കൗണ്ട് കാറ്റഗറികൾ.',
          officialDocLinks: [{ title: 'Zoho Books Chart of Accounts Setup', url: 'https://www.zoho.com/books/help/settings/chart-of-accounts.html' }],
          videoResources: [{
            title: 'How Chart of Accounts Works in Cloud Accounting',
            provider: 'YouTube Accounting Training',
            url: 'https://www.youtube.com/results?search_query=chart+of+accounts+zoho+books+tutorial',
            language: 'English',
            duration: '18 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Set up a basic Chart of Accounts in a free Zoho Books trial account.',
            tasks: ['Add 3 new Expense accounts: "Software Subscriptions", "Courier Charges", "Packaging Materials"']
          },
          quiz: [{
            id: 'q-bk-3',
            question: 'What is a "Chart of Accounts"?',
            options: ['A price list for customers', 'A comprehensive index of all financial accounts used to record transactions in a business ledger', 'A list of employee bank accounts', 'A tax form'],
            correctOptionIndex: 1,
            explanation: 'The Chart of Accounts is the master organizational structure for categorizing all business transactions.'
          }]
        },
        {
          id: 'les-bk-4',
          dayNumber: 4,
          title: 'Ethical Bookkeeping: Transparency & Halal Compliance',
          titleMl: 'ഡേ 4: സത്യസന്ധമായ അക്കൗണ്ടിംഗും ഹലാൽ നിയമങ്ങളും',
          durationMinutes: 45,
          overview: 'Learn ethical standards: no hidden books, zero interest calculation manipulation, transparent invoice itemization, and accurate date records.',
          concepts: ['Truth in financial reporting', 'Avoiding interest-based financial structuring (Riba)', 'Confidentiality and record retention laws'],
          simpleEnglishGuide: 'A good bookkeeper is honest down to the exact rupee. Never alter a date or falsify a receipt to make an account look better. Integrity is your greatest professional asset.',
          malayalamNotes: 'പലിശയിടപാടുകളോ കൃത്രിമത്വങ്ങളോ ഇല്ലാതെ സത്യസന്ധമായി കണക്കുകൾ സൂക്ഷിക്കുന്നതിന്റെ പ്രാധാന്യം.',
          officialDocLinks: [{ title: 'Ethics in Accounting Standards', url: 'https://www.ifac.org' }],
          videoResources: [{
            title: 'Ethical Bookkeeping Principles for Small Business',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=ethical+bookkeeping+principles',
            language: 'English',
            duration: '15 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Review an ethical dilemma scenario: A manager asks to change the date of an invoice from January 2nd to December 31st to meet a quarterly target.',
            tasks: ['Write a polite, professional refusal note explaining standard accounting period rules and compliance']
          },
          quiz: [{
            id: 'q-bk-4',
            question: 'Why must business transactions be recorded on the true date they occurred rather than an altered back-date?',
            options: ['To look busy', 'Because altering transaction dates breaches accounting compliance and misrepresents financial periods', 'Computers do not allow dates', 'To save paper'],
            correctOptionIndex: 1,
            explanation: 'Period cutoff rules require transactions to be recorded in their actual accounting period to reflect genuine truth.'
          }]
        },
        {
          id: 'les-bk-5',
          dayNumber: 5,
          title: 'Week 1 Review & Journal Entry Practice Drill',
          titleMl: 'ഡേ 5: ആഴ്ച 1 ജേണൽ എൻട്രി പരീക്ഷ',
          durationMinutes: 60,
          overview: 'Consolidate double-entry fundamentals with a comprehensive 10-transaction practice journal.',
          concepts: ['Consolidation of Assets, Liabilities, Debits, Credits, and Accounts'],
          simpleEnglishGuide: 'Practice makes permanent. Every journal entry must have matching total Debits and Credits.',
          malayalamNotes: 'ഒന്നാം ആഴ്ചയിലെ അടിസ്ഥാന തത്വങ്ങൾ ഉപയോഗിച്ച് 10 ജേണൽ എൻട്രികൾ എഴുതി പരിശീലിക്കുന്നു.',
          officialDocLinks: [{ title: 'Zoho Books Journal Entries', url: 'https://www.zoho.com/books/help/accountant/manual-journals.html' }],
          videoResources: [{
            title: 'Journal Entries Practice with Answers in Malayalam',
            provider: 'YouTube Tech Malayalam',
            url: 'https://www.youtube.com/results?search_query=journal+entries+in+malayalam+examples',
            language: 'Malayalam',
            duration: '22 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Record 10 manual journal entries in Excel or Zoho Books for a new trading firm.',
            tasks: ['Verify Total Debits = Total Credits exactly']
          },
          quiz: [{
            id: 'q-bk-5',
            question: 'If Total Debits do not equal Total Credits at the end of a journal entry, what happens?',
            options: ['It is acceptable', 'The entry is invalid because the double-entry equation is broken', 'The computer fixes it automatically', 'It is filed as tax'],
            correctOptionIndex: 1,
            explanation: 'Every transaction must have equal debits and credits to preserve the fundamental accounting balance.'
          }]
        }
      ]
    },
    {
      id: 'mod-bk-2',
      weekNumber: 2,
      title: 'Week 2: Sales Invoicing, GST/VAT & Accounts Receivable',
      titleMl: 'ആഴ്ച 2: ഇൻവോയ്സുകൾ, നികുതി & പണം ലഭിക്കാനുള്ള കണക്കുകൾ',
      objective: 'Create professional sales invoices, configure GST tax rates, issue credit notes, and manage customer payments.',
      lessons: [
        {
          id: 'les-bk-6',
          dayNumber: 6,
          title: 'Anatomy of a Compliant Sales Invoice (GST / VAT)',
          titleMl: 'ഡേ 6: ഒരു ഇൻവോയ്സിൽ ഉണ്ടായിരിക്കേണ്ട പ്രധാന വിവരങ്ങൾ',
          durationMinutes: 50,
          overview: 'Understand legal requirements of an invoice: Unique Sequential Number, Date, Customer Name/Address/GSTIN, HSN/SAC Codes, Taxable Value, CGST/SGST/IGST, and Terms.',
          concepts: ['Sequential numbering (never skip an invoice number)', 'Tax breakup (Intra-state CGST+SGST vs Inter-state IGST in India)'],
          simpleEnglishGuide: 'An invoice is a legal demand for payment. If an invoice number is missing or repeated, tax auditors will flag the entire business.',
          malayalamNotes: 'ജിഎസ്ടി നിയമങ്ങൾ അനുസരിച്ച് ഇൻവോയ്സ് തയ്യാറാക്കാൻ ആവശ്യമായ വിവരങ്ങൾ.',
          officialDocLinks: [{ title: 'Zoho Books Invoicing Guide', url: 'https://www.zoho.com/books/help/invoices/' }],
          videoResources: [{
            title: 'How to Create a GST Invoice in Zoho Books in Malayalam',
            provider: 'YouTube Tech Malayalam',
            url: 'https://www.youtube.com/results?search_query=zoho+books+create+invoice+malayalam',
            language: 'Malayalam',
            duration: '20 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Create your first customized invoice template in Zoho Books.',
            tasks: ['Upload mock company logo', 'Set payment terms to "Net 15 Days"', 'Add standard bank transfer details to the footer']
          },
          quiz: [{
            id: 'q-bk-6',
            question: 'Why must sales invoice numbers follow a strict continuous sequential order (e.g. INV-001, INV-002)?',
            options: ['To look organized only', 'To prove to tax authorities that no transactions were hidden or deleted', 'Software does not allow other numbers', 'To reduce ink'],
            correctOptionIndex: 1,
            explanation: 'Continuous sequential numbers provide an unbroken, auditable record of all sales revenue.'
          }]
        },
        {
          id: 'les-bk-7',
          dayNumber: 7,
          title: 'Issuing Invoices & Recording Customer Payments',
          titleMl: 'ഡേ 7: കസ്റ്റമർ പണം അടയ്ക്കുമ്പോൾ രേഖപ്പെടുത്തൽ',
          durationMinutes: 50,
          overview: 'Generate customer invoices, dispatch PDF copies via email, and apply payments when bank deposits arrive.',
          concepts: ['Recording partial payments vs full payments', 'Payment gateways vs direct bank NEFT/UPI transfers'],
          simpleEnglishGuide: 'When an invoice is issued, Accounts Receivable goes UP. When the customer deposits money into your bank, Accounts Receivable goes DOWN and Bank Cash goes UP.',
          malayalamNotes: 'കസ്റ്റമർ പണം നൽകുമ്പോൾ ഇൻവോയ്സിൽ പെയ്ഡ് എന്ന് അടയാളപ്പെടുത്തുന്ന രീതി.',
          officialDocLinks: [{ title: 'Record Payments in Zoho Books', url: 'https://www.zoho.com/books/help/invoices/record-payments.html' }],
          videoResources: [{
            title: 'Recording Customer Payments in Zoho Books',
            provider: 'YouTube Accounting Training',
            url: 'https://www.youtube.com/results?search_query=zoho+books+record+payments+tutorial',
            language: 'English',
            duration: '16 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Issue 3 invoices for ₹12,000, ₹25,000, and ₹8,500.',
            tasks: ['Record full payment for Invoice 1', 'Record a partial payment of ₹10,000 for Invoice 2, showing ₹15,000 remaining balance']
          },
          quiz: [{
            id: 'q-bk-7',
            question: 'What is "Accounts Receivable" (A/R)?',
            options: ['Money the business owes to suppliers', 'Money customers owe to the business for goods or services already delivered', 'Employee wages', 'Taxes paid'],
            correctOptionIndex: 1,
            explanation: 'Accounts Receivable represents pending money due from customers who bought on credit.'
          }]
        },
        {
          id: 'les-bk-8',
          dayNumber: 8,
          title: 'Credit Notes, Returns & Invoice Cancellations',
          titleMl: 'ഡേ 8: ക്രെഡിറ്റ് നോട്ടുകളും റിട്ടേണുകളും',
          durationMinutes: 50,
          overview: 'Learn how to issue Credit Notes when customers return goods or when pricing errors need correction without deleting the original invoice.',
          concepts: ['Why you NEVER delete a issued invoice (always issue a Credit Note)', 'Applying credit notes against future customer invoices'],
          simpleEnglishGuide: 'If an invoice had an error, never delete it. Issue a Credit Note for the difference. This leaves a clean paper trail for both the client and the auditor.',
          malayalamNotes: 'ഇൻവോയ്സ് ഡിലീറ്റ് ചെയ്യാതെ ക്രെഡിറ്റ് നോട്ട് വഴി തിരുത്തലുകൾ വരുത്തുന്ന രീതി.',
          officialDocLinks: [{ title: 'Credit Notes Documentation', url: 'https://www.zoho.com/books/help/credit-notes/' }],
          videoResources: [{
            title: 'How to Issue a Credit Note in Zoho Books',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=credit+note+in+zoho+books+tutorial',
            language: 'English',
            duration: '15 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Issue a Credit Note of ₹2,500 against an invoice where a customer returned 2 damaged items.',
            tasks: ['Verify the customer\'s outstanding balance reduces automatically by ₹2,500']
          },
          quiz: [{
            id: 'q-bk-8',
            question: 'Why do accountants issue a Credit Note instead of deleting an erroneous sales invoice?',
            options: ['Because deleting breaks the sequential audit trail required by legal tax compliance', 'It takes more time', 'Software charges a fee to delete', 'Credit notes increase profit'],
            correctOptionIndex: 0,
            explanation: 'Deleting invoices creates missing numbers in the ledger, which tax inspectors treat as potential tax evasion.'
          }]
        },
        {
          id: 'les-bk-9',
          dayNumber: 9,
          title: 'Managing Accounts Receivable Aging & Polite Reminders',
          titleMl: 'ഡേ 9: കിട്ടാനുള്ള പണത്തിന്റെ റിപ്പോർട്ടും റിമൈൻഡറുകളും',
          durationMinutes: 50,
          overview: 'Generate A/R Aging Reports categorized into 1-30 Days, 31-60 Days, 61-90 Days, and 90+ Days Overdue.',
          concepts: ['A/R Aging summary analysis', 'Drafting professional, courteous overdue payment reminder letters'],
          simpleEnglishGuide: 'Most unpaid invoices happen because people simply forgot. Send a polite reminder 3 days before due date, and on day 7 after due date.',
          malayalamNotes: 'പണം തരാൻ വൈകുന്ന കസ്റ്റമർമാർക്ക് മാന്യമായി ഓർമ്മപ്പെടുത്തലുകൾ അയക്കുന്ന രീതി.',
          officialDocLinks: [{ title: 'Accounts Receivable Aging Report', url: 'https://www.zoho.com/books/help/reports/receivables.html' }],
          videoResources: [{
            title: 'Accounts Receivable Aging Analysis & Follow-Up',
            provider: 'YouTube Accounting Training',
            url: 'https://www.youtube.com/results?search_query=ar+aging+report+analysis+tutorial',
            language: 'English',
            duration: '18 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Export an A/R Aging report and draft a 3-tier email collection template.',
            tasks: ['Tier 1: Friendly upcoming reminder', 'Tier 2: 7-day overdue notice', 'Tier 3: 30-day urgent statement']
          },
          quiz: [{
            id: 'q-bk-9',
            question: 'What does a "90+ Days" column in an Accounts Receivable Aging report indicate?',
            options: ['Invoices that were paid 90 days ago', 'Invoices where payment is severely overdue by more than 3 months, requiring urgent follow-up', 'Future scheduled sales', 'Employee birthdays'],
            correctOptionIndex: 1,
            explanation: 'Aging buckets highlight severely overdue accounts that carry cash flow risk.'
          }]
        },
        {
          id: 'les-bk-10',
          dayNumber: 10,
          title: 'Week 2 Review: Complete Sales Cycle Case Study',
          titleMl: 'ഡേ 10: ആഴ്ച 2 സെയിൽസ് സൈക്കിൾ പരീക്ഷ',
          durationMinutes: 60,
          overview: 'Execute a complete sales transaction cycle: Quote -> Sales Order -> Invoice -> Payment Receipt -> Bank Ledger Entry.',
          concepts: ['Consolidation of the entire revenue workflow'],
          simpleEnglishGuide: 'When you can take an order from initial quote all the way to customer receipt, you can run invoicing for any small business in the world.',
          malayalamNotes: 'കൊട്ടേഷൻ മുതൽ പണം സ്വീകരിക്കുന്നത് വരെയുള്ള മുഴുവൻ ഘട്ടങ്ങളും ഒരുമിച്ച് പരിശീലിക്കുന്നു.',
          officialDocLinks: [{ title: 'Zoho Books Sales Workflow', url: 'https://www.zoho.com/books/' }],
          videoResources: [{
            title: 'Complete Sales Flow in Zoho Books Explained',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=complete+sales+flow+in+zoho+books',
            language: 'English',
            duration: '22 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Process 3 customer sales orders from quotation to receipt in Zoho Books.',
            tasks: ['Generate PDF invoice pack', 'Verify Accounts Receivable correctly returns to zero upon payment']
          },
          quiz: [{
            id: 'q-bk-10',
            question: 'In the sales workflow, what converts an estimate/quotation into a legally binding receivable?',
            options: ['A customer like on Facebook', 'Issuing the formal Tax Invoice upon delivery or confirmation', 'Calling on phone', 'Opening the app'],
            correctOptionIndex: 1,
            explanation: 'The formal Tax Invoice represents the binding legal demand for payment.'
          }]
        }
      ]
    },
    {
      id: 'mod-bk-3',
      weekNumber: 3,
      title: 'Week 3: Vendor Bills, Expenses & Accounts Payable',
      titleMl: 'ആഴ്ച 3: വെണ്ടർ ബില്ലുകൾ, ചെലവുകൾ & നൽകാനുള്ള പണം',
      objective: 'Record supplier purchase bills, match against delivery slips, categorize recurring office expenses, and track petty cash.',
      lessons: [
        {
          id: 'les-bk-11',
          dayNumber: 11,
          title: 'Entering Vendor Bills & 3-Way Matching Logic',
          titleMl: 'ഡേ 11: സാധനങ്ങൾ വാങ്ങിയ ബില്ലുകൾ സിസ്റ്റത്തിൽ ചേർക്കൽ',
          durationMinutes: 50,
          overview: 'Learn 3-way matching: comparing the Purchase Order (PO), the Warehouse Goods Received Note (GRN), and the Supplier Bill before paying.',
          concepts: ['3-way matching principles', 'Accounts Payable (A/P) liability creation', 'Recording supplier GST/VAT tax credits'],
          simpleEnglishGuide: 'Never pay a supplier bill without checking: Did we actually order this (PO)? Did we actually receive this in good condition (GRN)? Only then do you pay.',
          malayalamNotes: 'സാധനങ്ങൾ വാങ്ങി ബില്ലുകൾ വരുമ്പോൾ അവ കൃത്യമായി ഒത്തുനോക്കി രേഖപ്പെടുത്തുന്ന രീതി.',
          officialDocLinks: [{ title: 'Vendor Bills in Zoho Books', url: 'https://www.zoho.com/books/help/bills/' }],
          videoResources: [{
            title: 'How to Record Vendor Bills in Zoho Books in Malayalam',
            provider: 'YouTube Tech Malayalam',
            url: 'https://www.youtube.com/results?search_query=record+bills+zoho+books+malayalam',
            language: 'Malayalam',
            duration: '18 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Enter 5 supplier bills in your test Zoho Books account.',
            tasks: ['Attach sample bill PDF copies to each record', 'Set supplier payment terms (Net 30)']
          },
          quiz: [{
            id: 'q-bk-11',
            question: 'What is the purpose of "3-Way Matching" in accounts payable?',
            options: ['To match three colors', 'To verify that the Purchase Order, Received Goods slip, and Supplier Bill all match before payment is released', 'To pay 3 times', 'To split invoices'],
            correctOptionIndex: 1,
            explanation: '3-way matching prevents overpaying, paying for unreceived items, or duplicate invoice fraud.'
          }]
        },
        {
          id: 'les-bk-12',
          dayNumber: 12,
          title: 'Expense Categorization & Attaching Digital Receipts',
          titleMl: 'ഡേ 12: ചെലവുകൾ തരംതിരിക്കലും ബില്ലുകൾ അറ്റാച്ച് ചെയ്യലും',
          durationMinutes: 50,
          overview: 'Record business operating expenses (rent, internet, fuel, subscriptions) and link clear receipt photos for tax compliance.',
          concepts: ['Direct expenses (Cost of Goods Sold) vs Indirect operating expenses', 'Audit trail receipt attachments'],
          simpleEnglishGuide: 'If an expense has no receipt, the tax department will reject it during audits. Every single rupee spent must have a digital receipt attached.',
          malayalamNotes: 'എല്ലാ ചെലവുകൾക്കും ബില്ലുകൾ അറ്റാച്ച് ചെയ്ത് സൂക്ഷിക്കുന്ന രീതി.',
          officialDocLinks: [{ title: 'Recording Expenses in Zoho Books', url: 'https://www.zoho.com/books/help/expenses/' }],
          videoResources: [{
            title: 'How to Manage Expenses in Cloud Accounting',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=how+to+manage+expenses+zoho+books',
            language: 'English',
            duration: '16 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Log 8 sample operating expenses in Zoho Books with PDF attachments.',
            tasks: ['Categorize into Rent, Utilities, Software, and Office Supplies']
          },
          quiz: [{
            id: 'q-bk-12',
            question: 'Why must digital receipts be permanently attached to expense entries in cloud software?',
            options: ['To look artistic', 'To provide instant proof of legitimate expenditure during tax audits and internal reviews', 'Software deletes entries without photos', 'To save memory'],
            correctOptionIndex: 1,
            explanation: 'Attached receipts serve as legal proof of legitimate business expenses during audits.'
          }]
        },
        {
          id: 'les-bk-13',
          dayNumber: 13,
          title: 'Petty Cash Management & The Imprest System',
          titleMl: 'ഡേ 13: പെറ്റി ക്യാഷ് മാനേജ്‌മെന്റ്',
          durationMinutes: 45,
          overview: 'Manage the small physical cash box used in offices for tea, minor postage, and courier fees using the Imprest voucher system.',
          concepts: ['The Imprest system (starting float of ₹5,000, replenished against vouchers)', 'Petty cash voucher slips'],
          simpleEnglishGuide: 'Petty cash is where fraud happens if not monitored. Never give cash without a signed paper voucher stating who took it and what for.',
          malayalamNotes: 'ഓഫീസിലെ ചെറിയ ചിലവുകൾക്കായി പണം കൈകാര്യം ചെയ്യുമ്പോൾ വൗച്ചറുകൾ സൂക്ഷിക്കുന്ന രീതി.',
          officialDocLinks: [{ title: 'Managing Petty Cash in Accounting', url: 'https://www.zoho.com/books/academy/' }],
          videoResources: [{
            title: 'Petty Cash Book & Imprest System Explained',
            provider: 'YouTube Accounting Training',
            url: 'https://www.youtube.com/results?search_query=petty+cash+book+imprest+system+accounting',
            language: 'English',
            duration: '18 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Create a Petty Cash Log spreadsheet in Google Sheets.',
            tasks: ['Set opening float of ₹5,000', 'Log 6 small disbursements with voucher numbers', 'Calculate closing balance and replenishment amount needed']
          },
          quiz: [{
            id: 'q-bk-13',
            question: 'Under the Imprest Petty Cash system, how is the cash box replenished?',
            options: ['By guessing', 'By depositing the exact total sum of all verified expense vouchers submitted to restore the float to its original fixed amount', 'By giving unlimited money', 'Whenever someone asks'],
            correctOptionIndex: 1,
            explanation: 'The Imprest system replenishes only the exact verified spent total, maintaining a fixed float.'
          }]
        },
        {
          id: 'les-bk-14',
          dayNumber: 14,
          title: 'Accounts Payable Aging & Vendor Payment Scheduling',
          titleMl: 'ഡേ 14: സപ്ലയർമാർക്ക് നൽകാനുള്ള പണത്തിന്റെ ഷെഡ്യൂൾ',
          durationMinutes: 50,
          overview: 'Generate Accounts Payable Aging reports so the company never misses supplier payment terms or incurs late penalties.',
          concepts: ['A/P Aging reports', 'Prioritizing vendor payments by due date and credit relationships'],
          simpleEnglishGuide: 'Good relationships with suppliers depend on paying on time. An A/P aging report shows exactly which bills are due this Friday and next Friday.',
          malayalamNotes: 'സപ്ലയർമാർക്ക് പണം നൽകാനുള്ള തീയതികൾ നിരീക്ഷിച്ച് കൃത്യസമയത്ത് നൽകാൻ സഹായിക്കുന്ന റിപ്പോർട്ട്.',
          officialDocLinks: [{ title: 'Accounts Payable Reports in Zoho Books', url: 'https://www.zoho.com/books/help/reports/payables.html' }],
          videoResources: [{
            title: 'Accounts Payable Management for Bookkeepers',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=accounts+payable+management+bookkeeping',
            language: 'English',
            duration: '17 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Generate a Vendor Payment Schedule in Excel based on 6 incoming bills with varying terms.',
            tasks: ['Flag bills due within the next 7 days in yellow']
          },
          quiz: [{
            id: 'q-bk-14',
            question: 'What does "Net 30" mean on a supplier purchase bill?',
            options: ['The supplier gives 30% discount', 'Full payment is legally due within 30 days of the invoice date', 'Order 30 items', 'Valid for 30 seconds'],
            correctOptionIndex: 1,
            explanation: 'Net 30 is standard business shorthand requiring payment within 30 calendar days.'
          }]
        },
        {
          id: 'les-bk-15',
          dayNumber: 15,
          title: 'Week 3 Review: Complete Purchase Cycle Drill',
          titleMl: 'ഡേ 15: ആഴ്ച 3 പർച്ചേസ് സൈക്കിൾ പരീക്ഷ',
          durationMinutes: 60,
          overview: 'Execute a full supplier cycle: Purchase Order -> Goods Receipt -> Vendor Bill -> Payment Disbursement -> Bank Credit.',
          concepts: ['Consolidation of payables and expenses'],
          simpleEnglishGuide: 'Now you understand both sides: how money comes in from customers, and how money goes out to suppliers.',
          malayalamNotes: 'പർച്ചേസ് ഓർഡർ മുതൽ പണം നൽകുന്നത് വരെയുള്ള മുഴുവൻ ഘട്ടങ്ങളും വിലയിരുത്തുന്നു.',
          officialDocLinks: [{ title: 'Zoho Books Purchases Workflow', url: 'https://www.zoho.com/books/' }],
          videoResources: [{
            title: 'Complete Purchase Workflow in Zoho Books Walkthrough',
            provider: 'YouTube Accounting Training',
            url: 'https://www.youtube.com/results?search_query=purchase+workflow+zoho+books+tutorial',
            language: 'English',
            duration: '21 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Process 3 complete supplier purchase workflows in Zoho Books.',
            tasks: ['Verify Accounts Payable correctly clears upon recording the bank payment']
          },
          quiz: [{
            id: 'q-bk-15',
            question: 'When a vendor bill is paid via bank transfer, what happens to Accounts Payable?',
            options: ['It increases', 'It decreases (debit to Accounts Payable) because the liability is cleared', 'It stays the same', 'It becomes an asset'],
            correctOptionIndex: 1,
            explanation: 'Paying a bill eliminates the liability, reducing Accounts Payable.'
          }]
        }
      ]
    },
    {
      id: 'mod-bk-4',
      weekNumber: 4,
      title: 'Week 4: Bank Reconciliation, Financial Statements & Jobs',
      titleMl: 'ആഴ്ച 4: ബാങ്ക് റീകൺസിലിയേഷൻ & കരിയർ തുടക്കം',
      objective: 'Reconcile real bank statements against software records, generate basic Profit & Loss reports, compile portfolio proofs, and apply for remote assistant roles.',
      lessons: [
        {
          id: 'les-bk-16',
          dayNumber: 16,
          title: 'Bank Reconciliation Fundamentals: Why Books Differ from Banks',
          titleMl: 'ഡേ 16: ബാങ്ക് റീകൺസിലിയേഷൻ അടിസ്ഥാനങ്ങൾ',
          durationMinutes: 55,
          overview: 'Understand timing differences: cheques in transit, bank charges, auto-debits, and interest entries.',
          concepts: ['Bank statement balance vs General Ledger cash balance', 'Identifying missing entries during matching'],
          simpleEnglishGuide: 'Bank reconciliation is a matching game. You put the bank statement on the left, and your Zoho Books on the right. Every transaction must have an identical match. Any leftover amount must be explained.',
          malayalamNotes: 'ബാങ്ക് സ്റ്റേറ്റ്‌മെന്റിലെ കണക്കുകളും കമ്പ്യൂട്ടറിലെ കണക്കുകളും തമ്മിൽ ഒത്തുനോക്കുന്ന അത്യാവശ്യ ജോലി.',
          officialDocLinks: [{ title: 'Reconciling Accounts in Zoho Books', url: 'https://www.zoho.com/books/help/banking/reconciliation.html' }],
          videoResources: [{
            title: 'Bank Reconciliation in Zoho Books in Malayalam',
            provider: 'YouTube Tech Malayalam',
            url: 'https://www.youtube.com/results?search_query=bank+reconciliation+zoho+books+malayalam',
            language: 'Malayalam',
            duration: '24 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Import a sample 25-transaction bank CSV into Zoho Books and execute matching.',
            tasks: ['Match 20 cleared customer and vendor payments', 'Categorize 2 bank service charge fees', 'Achieve zero unexplained variance']
          },
          quiz: [{
            id: 'q-bk-16',
            question: 'Why might the balance in a company\'s accounting software differ from the bank statement on the last day of the month?',
            options: ['Because banks are always wrong', 'Due to timing differences like issued cheques not yet presented or unrecorded bank service charges', 'Software loses numbers', 'It never differs'],
            correctOptionIndex: 1,
            explanation: 'Timing differences (clearing delays and automated bank fees) are the natural reason accounts require reconciliation.'
          }]
        },
        {
          id: 'les-bk-17',
          dayNumber: 17,
          title: 'Generating the Profit & Loss Statement (P&L)',
          titleMl: 'ഡേ 17: പ്രോഫിറ്റ് & ലോസ് (P&L) റിപ്പോർട്ട് തയ്യാറാക്കൽ',
          durationMinutes: 50,
          overview: 'Understand how revenues minus expenses calculate Net Profit for a specific timeframe (e.g. Month of January).',
          concepts: ['Revenue - Cost of Goods Sold = Gross Profit', 'Gross Profit - Operating Expenses = Net Profit', 'Exporting P&L reports to PDF'],
          simpleEnglishGuide: 'The Profit & Loss statement tells the owner the most important question: "Did we make money or lose money this month?"',
          malayalamNotes: 'കമ്പനി ലാഭത്തിലാണോ നഷ്ടത്തിലാണോ എന്ന് വ്യക്തമാക്കുന്ന ലാഭ-നഷ്ട കണക്ക് തയ്യാറാക്കുന്ന വിധം.',
          officialDocLinks: [{ title: 'Profit and Loss Report Documentation', url: 'https://www.zoho.com/books/help/reports/profit-and-loss.html' }],
          videoResources: [{
            title: 'How to Read & Generate a Profit and Loss Report in Zoho Books',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=profit+and+loss+report+zoho+books+tutorial',
            language: 'English',
            duration: '18 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Generate a Monthly Profit & Loss report for your test business in Zoho Books.',
            tasks: ['Verify Gross Profit and Net Profit calculations', 'Export as a clean PDF report']
          },
          quiz: [{
            id: 'q-bk-17',
            question: 'What is the basic formula for Net Profit on a Profit & Loss statement?',
            options: ['Assets plus Liabilities', 'Total Revenue minus Total Cost of Goods Sold and Operating Expenses', 'Bank Balance times 2', 'Taxes plus Loans'],
            correctOptionIndex: 1,
            explanation: 'Net Profit represents what remains after all costs and expenses are subtracted from total revenue.'
          }]
        },
        {
          id: 'les-bk-18',
          dayNumber: 18,
          title: 'Packaging Your Bookkeeping Portfolio & Zoho Trial Proofs',
          titleMl: 'ഡേ 18: ബുക്ക് കീപ്പിംഗ് പോർട്ട്ഫോളിയോ നിർമ്മാണം',
          durationMinutes: 50,
          overview: 'Package your completed Zoho Books company trial: 15 invoices, 10 bills, reconciled bank statement, and P&L report into a portfolio dossier.',
          concepts: ['Demonstrating hands-on software competency to prospective employers', 'Redacting any sensitive confidential test information'],
          simpleEnglishGuide: 'Do not tell a business owner you know accounting; SHOW them the reconciled bank report and sample invoices you created in Zoho Books.',
          malayalamNotes: 'നിങ്ങൾ ചെയ്ത അക്കൗണ്ടിംഗ് വർക്കുകൾ ഉൾപ്പെടുത്തി തൊഴിലുടമകൾക്ക് കാണിക്കാനുള്ള പോർട്ട്ഫോളിയോ ഉണ്ടാക്കുന്നു.',
          officialDocLinks: [{ title: 'Zoho Books Certification Overview', url: 'https://www.zoho.com/books/' }],
          videoResources: [{
            title: 'How to Build an Accounting & Bookkeeping Portfolio',
            provider: 'YouTube Accounting Training',
            url: 'https://www.youtube.com/results?search_query=bookkeeping+portfolio+for+beginners',
            language: 'English',
            duration: '19 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Compile your Bookkeeping Portfolio PDF.',
            tasks: ['Include 1 sample sales invoice', 'Include 1 vendor bill entry', 'Include 1 completed Bank Reconciliation Statement']
          },
          quiz: [{
            id: 'q-bk-18',
            question: 'What is the most compelling proof of competence for an entry-level remote bookkeeper?',
            options: ['A fancy business card', 'A completed bank reconciliation report and sample invoices created in standard software like Zoho Books', 'Writing "expert" on a resume', 'Memorizing definitions'],
            correctOptionIndex: 1,
            explanation: 'Actual software reports showing reconciled accounts prove immediate capability to perform daily work.'
          }]
        },
        {
          id: 'les-bk-19',
          dayNumber: 19,
          title: 'Writing an Accounts Assistant Resume & Interview Practice',
          titleMl: 'ഡേ 19: അക്കൗണ്ട്സ് റെസ്യൂമെ & ഇന്റർവ്യൂ ചോദ്യങ്ങൾ',
          durationMinutes: 55,
          overview: 'Prepare for entry-level bookkeeping interviews: explaining reconciliation variance, GST terms, and software fluency.',
          concepts: ['Target job titles: "Accounts Assistant", "Junior Bookkeeper", "Invoicing Specialist", "Zoho Books Assistant"'],
          simpleEnglishGuide: 'In your interview, they will ask: "If a bank statement has ₹10,000 more than our books, what could have happened?" Confidently answer: "A customer may have deposited money directly via NEFT without sending us the payment slip yet".',
          malayalamNotes: 'അക്കൗണ്ടിംഗ് ഇന്റർവ്യൂകളിൽ ചോദിക്കുന്ന പ്രധാന ചോദ്യങ്ങൾക്ക് മറുപടി നൽകാൻ പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'Career Launchpad Resume Builder', url: '/resume-builder' }],
          videoResources: [{
            title: 'Top 10 Accounts Assistant Interview Questions & Answers',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=accounts+assistant+interview+questions+answers',
            language: 'English',
            duration: '23 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Build your Accounts Assistant resume and practice answering 5 standard interview scenarios.',
            tasks: ['Highlight Zoho Books, Tally basics, Excel (VLOOKUP/SUMIFS), and Bank Reconciliation']
          },
          quiz: [{
            id: 'q-bk-19',
            question: 'What is the best response if an interviewer asks how you handle finding an unexplained ₹500 discrepancy in a bank reconciliation?',
            options: ['Ignore it because it is small', 'Systematically trace transactions in reverse order: checking for transposed digits, unrecorded bank charges, or duplicated entries until balanced', 'Change a random bill', 'Delete a transaction'],
            correctOptionIndex: 1,
            explanation: 'Demonstrating systematic discrepancy tracing proves integrity and professional thoroughness.'
          }]
        },
        {
          id: 'les-bk-20',
          dayNumber: 20,
          title: 'Course Final Assessment & First-Month Workplace Blueprint',
          titleMl: 'ഡേ 20: ഫൈനൽ അസസ്സ്‌മെന്റും വർക്ക്പ്ലേസ് ഗൈഡും',
          durationMinutes: 60,
          overview: 'Complete the comprehensive bookkeeping competency exam, submit your portfolio, and review first-month workplace safety rules.',
          concepts: ['Data confidentiality laws', 'Backup procedures in accounting', 'First 30 days client onboarding checklist'],
          simpleEnglishGuide: 'Never discuss a client\'s revenue or bank balance with anyone outside the company. Financial secrecy and integrity are sacred in this profession.',
          malayalamNotes: 'കമ്പനിയുടെ സാമ്പത്തിക വിവരങ്ങളുടെ രഹസ്യസ്വഭാവം കാത്തുസൂക്ഷിക്കേണ്ടതിന്റെ പ്രാധാന്യം.',
          officialDocLinks: [{ title: 'AICPA Code of Professional Conduct', url: 'https://www.aicpa.org' }],
          videoResources: [{
            title: 'First 30 Days as a Junior Bookkeeper — Essential Tips',
            provider: 'YouTube Accounting Training',
            url: 'https://www.youtube.com/results?search_query=first+month+as+junior+bookkeeper+tips',
            language: 'English',
            duration: '18 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Submit your 3 bookkeeping projects to the Career Launchpad Skill Assessment system.',
            tasks: ['Verify all project links are public and accessible', 'Review your verified completion badge']
          },
          quiz: [{
            id: 'q-bk-20',
            question: 'What is the golden rule of financial data confidentiality for remote bookkeepers?',
            options: ['Share client earnings with friends', 'Never disclose, copy, or discuss a client\'s financial balances, invoices, or customer lists outside authorized team channels', 'Post receipts online', 'Keep no passwords'],
            correctOptionIndex: 1,
            explanation: 'Financial privacy and non-disclosure are mandatory ethical and legal requirements in bookkeeping.'
          }]
        }
      ]
    },
    {
      id: 'mod-bk-5',
      weekNumber: 5,
      title: 'Week 5: Advanced Invoicing, Multi-Currency & GST Compliance',
      titleMl: 'ആഴ്ച 5: അഡ്വാൻസ്ഡ് ഇൻവോയ്സിംഗ്, ഫോറിൻ കറൻസി & ജിഎസ്ടി',
      objective: 'Handle international USD/AED billing, recurring subscriptions, and prepare GST return reports.',
      lessons: [
        {
          id: 'les-bk-21',
          dayNumber: 21,
          title: 'Multi-Currency Invoicing (USD / AED)',
          titleMl: 'ഫോറിൻ കറൻസി ഇൻവോയ്സിംഗ്',
          durationMinutes: 50,
          overview: 'Master professional multi-currency invoicing (usd / aed) workflows used in real company environments.',
          concepts: ["Foundations of Multi-Currency Invoicing (USD / AED)", "Industry standard best practices", "Quality verification standards"],
          simpleEnglishGuide: 'Practical zero-knowledge step-by-step guidance: Handling overseas clients and exchange rate differences.. Always verify your final deliverables before sharing.',
          malayalamNotes: 'ഫോറിൻ കറൻസി ഇൻവോയ്സിംഗ്: ജോലിസ്ഥലത്ത് ഈ വൈദഗ്ധ്യം ഉപയോഗിക്കുന്ന യഥാർത്ഥ രീതി ലളിതമായി പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'Multi-Currency Invoicing (USD / AED) Documentation & Guides', url: 'https://www.google.com' }],
          videoResources: [{
            title: 'Multi-Currency Invoicing (USD / AED) — Complete Step-by-Step Tutorial',
            provider: 'Career Launchpad Curated',
            url: 'https://www.google.com',
            language: 'English',
            duration: '25 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Complete the practical workplace task for Day 21: Handling overseas clients and exchange rate differences..',
            tasks: [
              'Review the provided instructions and download the exercise worksheet.',
              'Apply the required software operations and double-check outputs.',
              'Save your completed deliverable into your weekly portfolio folder.'
            ]
          },
          quiz: [{
            id: 'q-bk-21',
            question: 'What is the key objective of Multi-Currency Invoicing (USD / AED) in this role?',
            options: ["To bypass regular office standards", "To ensure high accuracy, efficiency and adherence to professional standards in multi-currency invoicing (usd / aed)", "To increase unnecessary overhead", "To work without any client documentation"],
            correctOptionIndex: 1,
            explanation: 'Mastering multi-currency invoicing (usd / aed) ensures tasks are delivered with professional accuracy and zero preventable errors.'
          }]
        },
        {
          id: 'les-bk-22',
          dayNumber: 22,
          title: 'Recurring Billing & Subscriptions',
          titleMl: 'റിക്കറിംഗ് ഇൻവോയ്സ് & സബ്സ്ക്രിപ്ഷൻ',
          durationMinutes: 50,
          overview: 'Master professional recurring billing & subscriptions workflows used in real company environments.',
          concepts: ["Foundations of Recurring Billing & Subscriptions", "Industry standard best practices", "Quality verification standards"],
          simpleEnglishGuide: 'Practical zero-knowledge step-by-step guidance: Automated monthly retainers and recurring billing profiles.. Always verify your final deliverables before sharing.',
          malayalamNotes: 'റിക്കറിംഗ് ഇൻവോയ്സ് & സബ്സ്ക്രിപ്ഷൻ: ജോലിസ്ഥലത്ത് ഈ വൈദഗ്ധ്യം ഉപയോഗിക്കുന്ന യഥാർത്ഥ രീതി ലളിതമായി പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'Recurring Billing & Subscriptions Documentation & Guides', url: 'https://www.google.com' }],
          videoResources: [{
            title: 'Recurring Billing & Subscriptions — Complete Step-by-Step Tutorial',
            provider: 'Career Launchpad Curated',
            url: 'https://www.google.com',
            language: 'English',
            duration: '25 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Complete the practical workplace task for Day 22: Automated monthly retainers and recurring billing profiles..',
            tasks: [
              'Review the provided instructions and download the exercise worksheet.',
              'Apply the required software operations and double-check outputs.',
              'Save your completed deliverable into your weekly portfolio folder.'
            ]
          },
          quiz: [{
            id: 'q-bk-22',
            question: 'What is the key objective of Recurring Billing & Subscriptions in this role?',
            options: ["To bypass regular office standards", "To ensure high accuracy, efficiency and adherence to professional standards in recurring billing & subscriptions", "To increase unnecessary overhead", "To work without any client documentation"],
            correctOptionIndex: 1,
            explanation: 'Mastering recurring billing & subscriptions ensures tasks are delivered with professional accuracy and zero preventable errors.'
          }]
        },
        {
          id: 'les-bk-23',
          dayNumber: 23,
          title: 'Fixed Asset Register & Depreciation',
          titleMl: 'ഫിക്സഡ് അസറ്റുകൾ & ഡിപ്രീസിയേഷൻ',
          durationMinutes: 50,
          overview: 'Master professional fixed asset register & depreciation workflows used in real company environments.',
          concepts: ["Foundations of Fixed Asset Register & Depreciation", "Industry standard best practices", "Quality verification standards"],
          simpleEnglishGuide: 'Practical zero-knowledge step-by-step guidance: Calculating straight-line depreciation for equipment.. Always verify your final deliverables before sharing.',
          malayalamNotes: 'ഫിക്സഡ് അസറ്റുകൾ & ഡിപ്രീസിയേഷൻ: ജോലിസ്ഥലത്ത് ഈ വൈദഗ്ധ്യം ഉപയോഗിക്കുന്ന യഥാർത്ഥ രീതി ലളിതമായി പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'Fixed Asset Register & Depreciation Documentation & Guides', url: 'https://www.google.com' }],
          videoResources: [{
            title: 'Fixed Asset Register & Depreciation — Complete Step-by-Step Tutorial',
            provider: 'Career Launchpad Curated',
            url: 'https://www.google.com',
            language: 'English',
            duration: '25 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Complete the practical workplace task for Day 23: Calculating straight-line depreciation for equipment..',
            tasks: [
              'Review the provided instructions and download the exercise worksheet.',
              'Apply the required software operations and double-check outputs.',
              'Save your completed deliverable into your weekly portfolio folder.'
            ]
          },
          quiz: [{
            id: 'q-bk-23',
            question: 'What is the key objective of Fixed Asset Register & Depreciation in this role?',
            options: ["To bypass regular office standards", "To ensure high accuracy, efficiency and adherence to professional standards in fixed asset register & depreciation", "To increase unnecessary overhead", "To work without any client documentation"],
            correctOptionIndex: 1,
            explanation: 'Mastering fixed asset register & depreciation ensures tasks are delivered with professional accuracy and zero preventable errors.'
          }]
        },
        {
          id: 'les-bk-24',
          dayNumber: 24,
          title: 'GST Return Summaries (GSTR-1 & 3B)',
          titleMl: 'ജിഎസ്ടി റിട്ടേൺ തയ്യാറാക്കൽ',
          durationMinutes: 50,
          overview: 'Master professional gst return summaries (gstr-1 & 3b) workflows used in real company environments.',
          concepts: ["Foundations of GST Return Summaries (GSTR-1 & 3B)", "Industry standard best practices", "Quality verification standards"],
          simpleEnglishGuide: 'Practical zero-knowledge step-by-step guidance: Reconciling input tax credits and monthly tax ledgers.. Always verify your final deliverables before sharing.',
          malayalamNotes: 'ജിഎസ്ടി റിട്ടേൺ തയ്യാറാക്കൽ: ജോലിസ്ഥലത്ത് ഈ വൈദഗ്ധ്യം ഉപയോഗിക്കുന്ന യഥാർത്ഥ രീതി ലളിതമായി പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'GST Return Summaries (GSTR-1 & 3B) Documentation & Guides', url: 'https://www.google.com' }],
          videoResources: [{
            title: 'GST Return Summaries (GSTR-1 & 3B) — Complete Step-by-Step Tutorial',
            provider: 'Career Launchpad Curated',
            url: 'https://www.google.com',
            language: 'English',
            duration: '25 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Complete the practical workplace task for Day 24: Reconciling input tax credits and monthly tax ledgers..',
            tasks: [
              'Review the provided instructions and download the exercise worksheet.',
              'Apply the required software operations and double-check outputs.',
              'Save your completed deliverable into your weekly portfolio folder.'
            ]
          },
          quiz: [{
            id: 'q-bk-24',
            question: 'What is the key objective of GST Return Summaries (GSTR-1 & 3B) in this role?',
            options: ["To bypass regular office standards", "To ensure high accuracy, efficiency and adherence to professional standards in gst return summaries (gstr-1 & 3b)", "To increase unnecessary overhead", "To work without any client documentation"],
            correctOptionIndex: 1,
            explanation: 'Mastering gst return summaries (gstr-1 & 3b) ensures tasks are delivered with professional accuracy and zero preventable errors.'
          }]
        },
        {
          id: 'les-bk-25',
          dayNumber: 25,
          title: 'Year-End Period Locking & Audit Trail',
          titleMl: 'ഇയർ-എൻഡ് ക്ലോസിംഗ് & ഓഡിറ്റ് ട്രയൽ',
          durationMinutes: 50,
          overview: 'Master professional year-end period locking & audit trail workflows used in real company environments.',
          concepts: ["Foundations of Year-End Period Locking & Audit Trail", "Industry standard best practices", "Quality verification standards"],
          simpleEnglishGuide: 'Practical zero-knowledge step-by-step guidance: Locking historical periods and reviewing transaction edit logs.. Always verify your final deliverables before sharing.',
          malayalamNotes: 'ഇയർ-എൻഡ് ക്ലോസിംഗ് & ഓഡിറ്റ് ട്രയൽ: ജോലിസ്ഥലത്ത് ഈ വൈദഗ്ധ്യം ഉപയോഗിക്കുന്ന യഥാർത്ഥ രീതി ലളിതമായി പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'Year-End Period Locking & Audit Trail Documentation & Guides', url: 'https://www.google.com' }],
          videoResources: [{
            title: 'Year-End Period Locking & Audit Trail — Complete Step-by-Step Tutorial',
            provider: 'Career Launchpad Curated',
            url: 'https://www.google.com',
            language: 'English',
            duration: '25 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Complete the practical workplace task for Day 25: Locking historical periods and reviewing transaction edit logs..',
            tasks: [
              'Review the provided instructions and download the exercise worksheet.',
              'Apply the required software operations and double-check outputs.',
              'Save your completed deliverable into your weekly portfolio folder.'
            ]
          },
          quiz: [{
            id: 'q-bk-25',
            question: 'What is the key objective of Year-End Period Locking & Audit Trail in this role?',
            options: ["To bypass regular office standards", "To ensure high accuracy, efficiency and adherence to professional standards in year-end period locking & audit trail", "To increase unnecessary overhead", "To work without any client documentation"],
            correctOptionIndex: 1,
            explanation: 'Mastering year-end period locking & audit trail ensures tasks are delivered with professional accuracy and zero preventable errors.'
          }]
        }
      ]
    },
    {
      id: 'mod-bk-6',
      weekNumber: 6,
      title: 'Week 6: Month-End Close, Audit Trails & Career Launch',
      titleMl: 'ആഴ്ച 6: മന്ത്-എൻഡ് ക്ലോസിംഗ്, ഓഡിറ്റ് & കരിയർ ലോഞ്ച്',
      objective: 'Execute full month-end balance checks, assemble verified portfolio, and apply for remote roles.',
      lessons: [
        {
          id: 'les-bk-26',
          dayNumber: 26,
          title: 'Executive Financial Dashboards',
          titleMl: 'ബിസിനസ്സ് ഓണർമാർക്കുള്ള ഫിനാൻഷ്യൽ സമ്മറി',
          durationMinutes: 50,
          overview: 'Master professional executive financial dashboards workflows used in real company environments.',
          concepts: ["Foundations of Executive Financial Dashboards", "Industry standard best practices", "Quality verification standards"],
          simpleEnglishGuide: 'Practical zero-knowledge step-by-step guidance: Designing 1-page visual executive summaries in Google Sheets.. Always verify your final deliverables before sharing.',
          malayalamNotes: 'ബിസിനസ്സ് ഓണർമാർക്കുള്ള ഫിനാൻഷ്യൽ സമ്മറി: ജോലിസ്ഥലത്ത് ഈ വൈദഗ്ധ്യം ഉപയോഗിക്കുന്ന യഥാർത്ഥ രീതി ലളിതമായി പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'Executive Financial Dashboards Documentation & Guides', url: 'https://www.google.com' }],
          videoResources: [{
            title: 'Executive Financial Dashboards — Complete Step-by-Step Tutorial',
            provider: 'Career Launchpad Curated',
            url: 'https://www.google.com',
            language: 'English',
            duration: '25 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Complete the practical workplace task for Day 26: Designing 1-page visual executive summaries in Google Sheets..',
            tasks: [
              'Review the provided instructions and download the exercise worksheet.',
              'Apply the required software operations and double-check outputs.',
              'Save your completed deliverable into your weekly portfolio folder.'
            ]
          },
          quiz: [{
            id: 'q-bk-26',
            question: 'What is the key objective of Executive Financial Dashboards in this role?',
            options: ["To bypass regular office standards", "To ensure high accuracy, efficiency and adherence to professional standards in executive financial dashboards", "To increase unnecessary overhead", "To work without any client documentation"],
            correctOptionIndex: 1,
            explanation: 'Mastering executive financial dashboards ensures tasks are delivered with professional accuracy and zero preventable errors.'
          }]
        },
        {
          id: 'les-bk-27',
          dayNumber: 27,
          title: 'Remote Bookkeeping Profile Setup',
          titleMl: 'റിമോട്ട് ബുക്ക് കീപ്പിംഗ് പ്രൊഫൈൽ നിർമ്മാണം',
          durationMinutes: 50,
          overview: 'Master professional remote bookkeeping profile setup workflows used in real company environments.',
          concepts: ["Foundations of Remote Bookkeeping Profile Setup", "Industry standard best practices", "Quality verification standards"],
          simpleEnglishGuide: 'Practical zero-knowledge step-by-step guidance: Setting up verified Upwork and LinkedIn bookkeeping profiles.. Always verify your final deliverables before sharing.',
          malayalamNotes: 'റിമോട്ട് ബുക്ക് കീപ്പിംഗ് പ്രൊഫൈൽ നിർമ്മാണം: ജോലിസ്ഥലത്ത് ഈ വൈദഗ്ധ്യം ഉപയോഗിക്കുന്ന യഥാർത്ഥ രീതി ലളിതമായി പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'Remote Bookkeeping Profile Setup Documentation & Guides', url: 'https://www.google.com' }],
          videoResources: [{
            title: 'Remote Bookkeeping Profile Setup — Complete Step-by-Step Tutorial',
            provider: 'Career Launchpad Curated',
            url: 'https://www.google.com',
            language: 'English',
            duration: '25 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Complete the practical workplace task for Day 27: Setting up verified Upwork and LinkedIn bookkeeping profiles..',
            tasks: [
              'Review the provided instructions and download the exercise worksheet.',
              'Apply the required software operations and double-check outputs.',
              'Save your completed deliverable into your weekly portfolio folder.'
            ]
          },
          quiz: [{
            id: 'q-bk-27',
            question: 'What is the key objective of Remote Bookkeeping Profile Setup in this role?',
            options: ["To bypass regular office standards", "To ensure high accuracy, efficiency and adherence to professional standards in remote bookkeeping profile setup", "To increase unnecessary overhead", "To work without any client documentation"],
            correctOptionIndex: 1,
            explanation: 'Mastering remote bookkeeping profile setup ensures tasks are delivered with professional accuracy and zero preventable errors.'
          }]
        },
        {
          id: 'les-bk-28',
          dayNumber: 28,
          title: 'Capstone: 1-Month Accounting Cycle',
          titleMl: 'ക്യാപ്സ്റ്റോൺ - 1 മാസത്തെ പൂർണ്ണ അക്കൗണ്ടിംഗ്',
          durationMinutes: 50,
          overview: 'Master professional capstone: 1-month accounting cycle workflows used in real company environments.',
          concepts: ["Foundations of Capstone: 1-Month Accounting Cycle", "Industry standard best practices", "Quality verification standards"],
          simpleEnglishGuide: 'Practical zero-knowledge step-by-step guidance: End-to-end transaction processing and zero-variance reconciliation.. Always verify your final deliverables before sharing.',
          malayalamNotes: 'ക്യാപ്സ്റ്റോൺ - 1 മാസത്തെ പൂർണ്ണ അക്കൗണ്ടിംഗ്: ജോലിസ്ഥലത്ത് ഈ വൈദഗ്ധ്യം ഉപയോഗിക്കുന്ന യഥാർത്ഥ രീതി ലളിതമായി പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'Capstone: 1-Month Accounting Cycle Documentation & Guides', url: 'https://www.google.com' }],
          videoResources: [{
            title: 'Capstone: 1-Month Accounting Cycle — Complete Step-by-Step Tutorial',
            provider: 'Career Launchpad Curated',
            url: 'https://www.google.com',
            language: 'English',
            duration: '25 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Complete the practical workplace task for Day 28: End-to-end transaction processing and zero-variance reconciliation..',
            tasks: [
              'Review the provided instructions and download the exercise worksheet.',
              'Apply the required software operations and double-check outputs.',
              'Save your completed deliverable into your weekly portfolio folder.'
            ]
          },
          quiz: [{
            id: 'q-bk-28',
            question: 'What is the key objective of Capstone: 1-Month Accounting Cycle in this role?',
            options: ["To bypass regular office standards", "To ensure high accuracy, efficiency and adherence to professional standards in capstone: 1-month accounting cycle", "To increase unnecessary overhead", "To work without any client documentation"],
            correctOptionIndex: 1,
            explanation: 'Mastering capstone: 1-month accounting cycle ensures tasks are delivered with professional accuracy and zero preventable errors.'
          }]
        },
        {
          id: 'les-bk-29',
          dayNumber: 29,
          title: 'Financial Proof-of-Work Dossier',
          titleMl: 'പ്രൂഫ് ഓഫ് വർക്ക് പോർട്ട്ഫോളിയോ ഡോസിയർ',
          durationMinutes: 50,
          overview: 'Master professional financial proof-of-work dossier workflows used in real company environments.',
          concepts: ["Foundations of Financial Proof-of-Work Dossier", "Industry standard best practices", "Quality verification standards"],
          simpleEnglishGuide: 'Practical zero-knowledge step-by-step guidance: Compiling sanitized sample reconciliations into an employer PDF.. Always verify your final deliverables before sharing.',
          malayalamNotes: 'പ്രൂഫ് ഓഫ് വർക്ക് പോർട്ട്ഫോളിയോ ഡോസിയർ: ജോലിസ്ഥലത്ത് ഈ വൈദഗ്ധ്യം ഉപയോഗിക്കുന്ന യഥാർത്ഥ രീതി ലളിതമായി പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'Financial Proof-of-Work Dossier Documentation & Guides', url: 'https://www.google.com' }],
          videoResources: [{
            title: 'Financial Proof-of-Work Dossier — Complete Step-by-Step Tutorial',
            provider: 'Career Launchpad Curated',
            url: 'https://www.google.com',
            language: 'English',
            duration: '25 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Complete the practical workplace task for Day 29: Compiling sanitized sample reconciliations into an employer PDF..',
            tasks: [
              'Review the provided instructions and download the exercise worksheet.',
              'Apply the required software operations and double-check outputs.',
              'Save your completed deliverable into your weekly portfolio folder.'
            ]
          },
          quiz: [{
            id: 'q-bk-29',
            question: 'What is the key objective of Financial Proof-of-Work Dossier in this role?',
            options: ["To bypass regular office standards", "To ensure high accuracy, efficiency and adherence to professional standards in financial proof-of-work dossier", "To increase unnecessary overhead", "To work without any client documentation"],
            correctOptionIndex: 1,
            explanation: 'Mastering financial proof-of-work dossier ensures tasks are delivered with professional accuracy and zero preventable errors.'
          }]
        },
        {
          id: 'les-bk-30',
          dayNumber: 30,
          title: 'Graduation & Job Application Walkthrough',
          titleMl: 'സർട്ടിഫിക്കേഷൻ & തൊഴിൽ അപേക്ഷാ തയ്യാറെടുപ്പ്',
          durationMinutes: 50,
          overview: 'Master professional graduation & job application walkthrough workflows used in real company environments.',
          concepts: ["Foundations of Graduation & Job Application Walkthrough", "Industry standard best practices", "Quality verification standards"],
          simpleEnglishGuide: 'Practical zero-knowledge step-by-step guidance: Final 30-day certification and verified job board applications.. Always verify your final deliverables before sharing.',
          malayalamNotes: 'സർട്ടിഫിക്കേഷൻ & തൊഴിൽ അപേക്ഷാ തയ്യാറെടുപ്പ്: ജോലിസ്ഥലത്ത് ഈ വൈദഗ്ധ്യം ഉപയോഗിക്കുന്ന യഥാർത്ഥ രീതി ലളിതമായി പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'Graduation & Job Application Walkthrough Documentation & Guides', url: 'https://www.google.com' }],
          videoResources: [{
            title: 'Graduation & Job Application Walkthrough — Complete Step-by-Step Tutorial',
            provider: 'Career Launchpad Curated',
            url: 'https://www.google.com',
            language: 'English',
            duration: '25 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Complete the practical workplace task for Day 30: Final 30-day certification and verified job board applications..',
            tasks: [
              'Review the provided instructions and download the exercise worksheet.',
              'Apply the required software operations and double-check outputs.',
              'Save your completed deliverable into your weekly portfolio folder.'
            ]
          },
          quiz: [{
            id: 'q-bk-30',
            question: 'What is the key objective of Graduation & Job Application Walkthrough in this role?',
            options: ["To bypass regular office standards", "To ensure high accuracy, efficiency and adherence to professional standards in graduation & job application walkthrough", "To increase unnecessary overhead", "To work without any client documentation"],
            correctOptionIndex: 1,
            explanation: 'Mastering graduation & job application walkthrough ensures tasks are delivered with professional accuracy and zero preventable errors.'
          }]
        }
      ]
    }
  ],
  projects: [
    {
      id: 'proj-bk-1',
      title: 'Commercial Invoicing & Accounts Receivable Ledger',
      titleMl: 'കൊമേഴ്‌സ്യൽ ഇൻവോയ്സിംഗ് & എ/ആർ ലെഡ്ജർ',
      description: 'Configure a complete sales invoicing system in Zoho Books featuring 15 invoices across 5 clients with GST/VAT taxes and payments.',
      scenario: 'You are the newly hired accounts assistant for "Greenfield Trading", an eco-friendly supplies distributor. You must set up their initial customer accounts, issue 15 invoices with appropriate 5% and 18% GST tax rates, and record incoming payments.',
      instructions: [
        'Set up a demo organization in Zoho Books titled "Greenfield Trading"',
        'Create 5 customer profiles with addresses and GSTIN numbers',
        'Issue 15 professional invoices with unique sequential numbers (GT-2026-001 to GT-2026-015)',
        'Record 10 full payments, 2 partial payments, and issue 1 Credit Note for returned stock',
        'Generate an Accounts Receivable Aging Summary report showing overdue balances'
      ],
      deliverables: [
        'PDF export of the Accounts Receivable Aging Summary report',
        'Sample PDF of Invoice #GT-2026-001 with professional formatting and payment terms'
      ],
      downloadableDataFilename: 'greenfield_customer_invoicing_data.json',
      downloadableDataContent: JSON.stringify([
        { customer: 'Kerala Spice Exporters', gstin: '32AABCK1234F1Z5', amount: 45000, tax_rate: '18%', status: 'Paid' },
        { customer: 'Malabar Bio Foods', gstin: '32AABCM5678G1Z2', amount: 18500, tax_rate: '5%', status: 'Partial (Paid ₹10,000)' },
        { customer: 'Cochin Organic Store', gstin: '32AABCC9999H1Z8', amount: 28000, tax_rate: '18%', status: 'Unpaid' }
      ], null, 2),
      gradingRubric: [
        { criterion: 'Invoice Accuracy & Tax Breakup', weight: 40, standard: 'Correct tax calculation (CGST+SGST or IGST) and sequential numbering.' },
        { criterion: 'Payment Recording Precision', weight: 35, standard: 'Partial payments and credit notes reflect accurately on customer statement balances.' },
        { criterion: 'A/R Aging Presentation', weight: 25, standard: 'Aging report categorizes current vs overdue invoices cleanly.' }
      ],
      modelSolutionOverview: 'The completed project features a branded invoice template, unbroken sequence from GT-2026-001 to 015, and an aging summary showing exact pending balances matching the scenario.'
    },
    {
      id: 'proj-bk-2',
      title: 'Vendor Bill Processing & 3-Way Reconciliation Ledger',
      titleMl: 'വെണ്ടർ ബിൽ പ്രോസസ്സിംഗും 3-വേ റീകൺസിലിയേഷനും',
      description: 'Enter and match 10 supplier bills against purchase orders, attach sample receipt files, and generate an Accounts Payable disbursement plan.',
      scenario: 'Greenfield Trading purchased goods from 4 major packaging suppliers. You need to verify purchase orders against delivery receipts, enter 10 vendor bills into Zoho Books, and prepare a payment schedule.',
      instructions: [
        'Create 4 vendor profiles in Zoho Books',
        'Enter 10 purchase bills with itemized quantities, unit rates, and GST credits',
        'Attach sample digital receipt files to all 10 bill records',
        'Apply 3-way matching rules to identify 1 bill with an incorrect pricing discrepancy and adjust it',
        'Export an Accounts Payable Summary report showing upcoming payment obligations'
      ],
      deliverables: [
        'Exported Accounts Payable Summary report (PDF)',
        'Vendor Payment Disbursement Schedule spreadsheet highlighting bills due this week'
      ],
      downloadableDataFilename: 'raw_supplier_bills_data.csv',
      downloadableDataContent: 'Vendor,Bill No,Date,Due Date,Amount,Category\nApex Packaging,AP-901,2026-01-05,2026-02-04,34000,Packaging Materials\nCleanWrap Plastics,CW-102,2026-01-08,2026-01-23,12500,Office Supplies\nSouthern Freight,SF-442,2026-01-12,2026-01-27,8900,Freight & Courier\nBioBags India,BB-781,2026-01-15,2026-02-14,52000,Inventory Stock',
      gradingRubric: [
        { criterion: 'Bill Entry Accuracy', weight: 40, standard: 'All item lines, tax credits, and vendor details entered with zero transcription error.' },
        { criterion: '3-Way Match Verification', weight: 35, standard: 'Discrepancy identified and corrected with clear documentation note.' },
        { criterion: 'Disbursement Scheduling', weight: 25, standard: 'Due dates categorized into a prioritized cash outflow schedule.' }
      ],
      modelSolutionOverview: 'The project displays clean Accounts Payable accounts, verified tax input credits, and a cash management schedule optimizing vendor discounts without triggering late penalties.'
    },
    {
      id: 'proj-bk-3',
      title: 'Full 1-Month Bank Reconciliation & Financial Statements',
      titleMl: 'ഒരു മാസത്തെ ബാങ്ക് റീകൺസിലിയേഷനും P&L റിപ്പോർട്ടും',
      description: 'Import a 30-day corporate bank statement, reconcile against ledger entries, resolve timing discrepancies, and produce a balanced Profit & Loss statement.',
      scenario: 'It is the end of the month. The founder hands you a bank statement showing a closing balance of ₹2,45,600, while the Zoho Books cash account shows ₹2,38,100. You must investigate the ₹7,500 difference, reconcile the accounts, and generate the final monthly P&L.',
      instructions: [
        'Import the provided bank statement CSV into your Zoho Books bank feed',
        'Match 25 cleared deposits and withdrawals against previously entered invoices and bills',
        'Identify the discrepancies: ₹8,000 uncleared customer cheque + ₹500 unrecorded bank maintenance charge',
        'Enter the manual journal adjustment for bank charges to bring discrepancy to exactly ₹0.00',
        'Generate the final Bank Reconciliation Statement and monthly Profit & Loss Report'
      ],
      deliverables: [
        'Certified Bank Reconciliation Statement showing zero unexplained difference',
        'Monthly Profit & Loss Report (PDF) showing Gross Profit and Net Profit'
      ],
      downloadableDataFilename: 'bank_statement_january_2026.csv',
      downloadableDataContent: 'Date,Description,Withdrawal,Deposit,Balance\n2026-01-01,Opening Balance,,,200000\n2026-01-06,NEFT - Kerala Spice,,,45000,245000\n2026-01-10,CHQ 00123 - Apex Packaging,34000,,211000\n2026-01-15,UPI Payment - Office Tea,450,,210550\n2026-01-20,Bank Charges (Q4 SMS),500,,210050\n2026-01-28,NEFT - BioBags India,35000,,175050',
      gradingRubric: [
        { criterion: 'Zero Reconciliation Variance', weight: 45, standard: 'Discrepancy resolved down to ₹0.00 with verified matching entries.' },
        { criterion: 'Discrepancy Investigation Rationale', weight: 30, standard: 'Accurate identification of uncleared cheques vs unrecorded bank charges.' },
        { criterion: 'P&L Integrity', weight: 25, standard: 'Profit & Loss accurately reflects all revenue and expense adjustments.' }
      ],
      modelSolutionOverview: 'The dossier contains an official Bank Reconciliation Statement with matching closing balances and an executive summary explaining how the bank charge adjustment was resolved.'
    }
  ],
  workplaceGuidance: {
    firstWeek: [
      'Obtain written clarification from the business owner regarding who has authority to approve vendor payments.',
      'Check whether the company operates on a Cash basis or Accrual basis of accounting.',
      'Never execute real bank wire transfers yourself; your role is to prepare payments for the owner\'s final dual-factor authorization.',
      'Verify that all past customer invoice numbers are accounted for without numerical gaps.'
    ],
    firstMonth: [
      'Set up a recurring weekly bank reconciliation every Monday morning so differences never accumulate into month-end chaos.',
      'Maintain an active tax calendar with filing deadlines (e.g. GSTR-1, GSTR-3B) clearly marked.',
      'Store all digital receipts in indexed monthly folders in Google Drive as an independent backup.'
    ],
    commonMistakes: [
      'Deleting an invoice or bill instead of issuing a proper credit or debit note, destroying the legal audit trail.',
      'Guessing expense account categories instead of asking the senior accountant or owner when unsure.',
      'Entering transactions with the wrong date or tax slab.'
    ]
  },
  interviewPrep: [
    {
      question: 'What is the difference between Cash Basis and Accrual Basis accounting?',
      answer: 'In Cash Basis accounting, revenue and expenses are recognized only when money physically enters or leaves the bank account. In Accrual Basis accounting, revenue is recognized when the invoice is issued (when earned) and expenses are recognized when the bill is received (when incurred), regardless of when cash changes hands. Most modern businesses use Accrual Basis because it accurately reflects monthly financial performance.',
      tips: 'A foundational concept that shows real accounting literacy.'
    },
    {
      question: 'If our bank statement shows a bank balance of ₹50,000, but our accounting software shows ₹45,000, what could cause this difference?',
      answer: 'The most common causes are timing differences: for example, the company may have written a ₹5,000 cheque to a vendor that was recorded in the software, but the vendor has not yet deposited it at the bank. Alternatively, a customer may have deposited ₹5,000 directly via online transfer that has not yet been logged in the software.',
      tips: 'Explain both sides of timing differences clearly.'
    },
    {
      question: 'Why is ethical confidentiality essential for an assistant bookkeeper?',
      answer: 'Bookkeepers have direct visibility into a company\'s most sensitive records: exact revenue, supplier costs, profit margins, and payroll. Breaching confidentiality can damage the company\'s competitive advantage or invite fraud. I treat all financial figures with strict non-disclosure, maintain secure passwords, and never discuss financial matters outside authorized team leadership.',
      tips: 'Demonstrates trustworthiness and professional ethics.'
    }
  ]
};
