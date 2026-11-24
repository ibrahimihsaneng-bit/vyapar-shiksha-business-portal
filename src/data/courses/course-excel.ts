import { Course } from '@/types';

export const excelDataCourse: Course = {
  id: 'course-excel',
  careerSlug: 'excel-data-management',
  title: 'Excel & Data Management Foundations (30 Days)',
  titleMl: 'എക്സൽ & ഡാറ്റാ മാനേജ്‌മെന്റ് ഫൗണ്ടേഷൻ (30 ദിവസങ്ങൾ)',
  durationDays: 30,
  weeklyGoals: [
    {
      weekNumber: 1,
      title: 'Spreadsheet Navigation, Text Cleaning & Essential Functions',
      objective: 'Master rows, columns, data types, text cleaning (TRIM, PROPER, CONCAT), and basic mathematical functions (SUM, AVERAGE, COUNT, COUNTA).'
    },
    {
      weekNumber: 2,
      title: 'Logical Functions, Lookups & Data Validation',
      objective: 'Apply IF statements, IFS, conditional formatting, XLOOKUP, VLOOKUP, and dropdown data validation to build reliable trackers.'
    },
    {
      weekNumber: 3,
      title: 'Pivot Tables, Summaries & Visual Dashboards',
      objective: 'Aggregate large transaction tables into Pivot Tables, group dates by months/quarters, build slicers, and create dynamic summary charts.'
    },
    {
      weekNumber: 4,
      title: 'Portfolio Projects, Error Auditing & Employment Readiness',
      objective: 'Complete 3 business data projects, audit models for formula errors (#N/A, #REF!), write an ATS resume, and apply for data management jobs.'
    }
  ],
  modules: [
    {
      id: 'mod-xl-1',
      weekNumber: 1,
      title: 'Week 1: Spreadsheet Navigation, Formatting & Cleaning',
      titleMl: 'ആഴ്ച 1: എക്സൽ അടിസ്ഥാന കാര്യങ്ങളും ഡാറ്റാ ക്ലീനിംഗും',
      objective: 'Learn data types, keyboard shortcuts, text cleaning functions, and basic aggregations.',
      lessons: [
        {
          id: 'les-xl-1',
          dayNumber: 1,
          title: 'The Modern Spreadsheet: Interface, Cells & Data Types',
          titleMl: 'ഡേ 1: എക്സൽ ഇന്റർഫേസും ഡാറ്റാ തരങ്ങളും',
          durationMinutes: 45,
          overview: 'Understand text vs numbers vs dates in Excel and Google Sheets, and how formatting affects calculations.',
          concepts: ['Cell addresses, formula bar, and status bar', 'Data types: Text (left-aligned) vs Numbers (right-aligned)', 'Why dates stored as text break sorting'],
          simpleEnglishGuide: 'Look closely at your numbers. If a number hugs the left side of a cell, Excel thinks it is text and will not add it. It must align to the right to be calculated.',
          malayalamNotes: 'എക്സലിൽ നമ്പറുകളും ടെക്സ്റ്റുകളും തിരിച്ചറിയാനും കൃത്യമായി ഫോർമാറ്റ് ചെയ്യാനും പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'Microsoft Excel Quick Start', url: 'https://support.microsoft.com/en-us/office/excel-video-training-9bc05390-e94c-46af-972e-d59f046d6155' }],
          videoResources: [{
            title: 'Excel for Beginners in Malayalam — Full Course',
            provider: 'YouTube Tech Malayalam',
            url: 'https://www.youtube.com/results?search_query=excel+tutorial+for+beginners+malayalam',
            language: 'Malayalam',
            duration: '35 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Create a personal monthly budget sheet with 10 rows of income and expenses.',
            tasks: ['Ensure all amounts are formatted as Currency (₹)', 'Use =SUM() to calculate Total Income and Total Expenses']
          },
          quiz: [{
            id: 'q-xl-1',
            question: 'By default in Microsoft Excel and Google Sheets, which way do numeric values align?',
            options: ['To the left', 'To the right', 'Centered', 'Diagonal'],
            correctOptionIndex: 1,
            explanation: 'Numbers align to the right by default, while text strings align to the left.'
          }]
        },
        {
          id: 'les-xl-2',
          dayNumber: 2,
          title: 'Essential Keyboard Shortcuts & Navigation Speed',
          titleMl: 'ഡേ 2: അത്യാവശ്യ കീബോർഡ് ഷോർട്ട്കട്ടുകൾ',
          durationMinutes: 45,
          overview: 'Ditch the mouse. Learn Ctrl+Arrow keys to jump between boundaries, Ctrl+Shift+Arrow to select, and Ctrl+Z/Y for undo/redo.',
          concepts: ['Ctrl+Arrow navigation', 'Ctrl+Shift+L to toggle auto-filters', 'F4 / Fn+F4 to lock cell references ($A$1)'],
          simpleEnglishGuide: 'Working with 5,000 rows without shortcuts takes hours. Ctrl+Down Arrow takes you to the last row in 1 millisecond.',
          malayalamNotes: 'മൗസ് ഇല്ലാതെ എക്സലിൽ അതിവേഗം ജോലി ചെയ്യാനുള്ള ഷോർട്ട്കട്ടുകൾ.',
          officialDocLinks: [{ title: 'Excel Keyboard Shortcuts', url: 'https://support.microsoft.com/en-us/office/keyboard-shortcuts-in-excel-1798d9d5-842a-42b8-9c99-9b7213f0040f' }],
          videoResources: [{
            title: 'Top 15 Excel Shortcuts Every Assistant Must Know',
            provider: 'YouTube Productivity',
            url: 'https://www.youtube.com/results?search_query=top+excel+shortcuts+for+jobs',
            language: 'English',
            duration: '18 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Navigate a 500-row demo dataset purely using keyboard shortcuts.',
            tasks: ['Select columns A through D using Ctrl+Shift+Right and Down', 'Apply AutoFilter using Ctrl+Shift+L']
          },
          quiz: [{
            id: 'q-xl-2',
            question: 'What shortcut instantly jumps to the very last non-empty cell in a column?',
            options: ['Ctrl + End', 'Ctrl + Down Arrow', 'Shift + Page Down', 'Alt + Tab'],
            correctOptionIndex: 1,
            explanation: 'Ctrl + Down Arrow jumps straight to the end of the continuous data region.'
          }]
        },
        {
          id: 'les-xl-3',
          dayNumber: 3,
          title: 'Text Cleaning: TRIM, PROPER, UPPER, LOWER & SPLIT',
          titleMl: 'ഡേ 3: ടെക്സ്റ്റ് ക്ലീനിംഗ് ഫോർമുലകൾ',
          durationMinutes: 50,
          overview: 'Fix messy customer names, irregular capitalization, and accidental leading/trailing spaces.',
          concepts: ['=TRIM(A2) to delete invisible spaces', '=PROPER(A2) for title case names', 'Text to Columns / SPLIT() for separating First and Last names'],
          simpleEnglishGuide: 'An invisible space at the end of a name ("Rahul ") will make VLOOKUP fail. =TRIM() removes all invisible spaces instantly.',
          malayalamNotes: 'പേരുകളിലെ അക്ഷരത്തെറ്റുകളും അധിക സ്പേസുകളും ഫോർമുല വഴി ശരിയാക്കുന്ന രീതി.',
          officialDocLinks: [{ title: 'TRIM function documentation', url: 'https://support.microsoft.com/en-us/office/trim-function-410388fa-3be4-4b31-838b-b11951ba383d' }],
          videoResources: [{
            title: 'How to Clean Messy Data in Excel Easily',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=excel+data+cleaning+trim+proper+tutorial',
            language: 'English',
            duration: '19 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Clean a raw list of 25 messy customer names with random spaces and lowercase letters.',
            tasks: ['Apply =TRIM(PROPER(A2))', 'Copy and Paste as Values to lock in the clean names']
          },
          quiz: [{
            id: 'q-xl-3',
            question: 'Why must you "Paste as Values" after using formulas to clean text?',
            options: ['To delete the file', 'To replace the formula with permanent text so you can safely delete the original messy column', 'To change colors', 'It is not necessary'],
            correctOptionIndex: 1,
            explanation: 'Pasting as values converts dynamic formulas into permanent static text strings.'
          }]
        },
        {
          id: 'les-xl-4',
          dayNumber: 4,
          title: 'Core Mathematical Aggregations: SUM, AVERAGE, COUNT, COUNTA',
          titleMl: 'ഡേ 4: അടിസ്ഥാന കണക്കുകൂട്ടൽ ഫോർമുലകൾ',
          durationMinutes: 50,
          overview: 'Master the 4 fundamental aggregations and understand the crucial difference between COUNT (numbers only) and COUNTA (any non-empty cell).',
          concepts: ['=SUM() vs =AVERAGE()', '=COUNT() vs =COUNTA()', '=MAX() and =MIN()'],
          simpleEnglishGuide: 'Use COUNT when counting paid transactions. Use COUNTA when counting how many customer names are present in a list.',
          malayalamNotes: 'കണക്കുകൾ കൂട്ടാനും ശരാശരി കണ്ടെത്താനും ഉള്ള പ്രധാന ഫോർമുലകൾ.',
          officialDocLinks: [{ title: 'Excel Functions by Category', url: 'https://support.microsoft.com/en-us/office/excel-functions-by-category-5f91f4e9-7b42-46d2-9bd1-63f26a86c0eb' }],
          videoResources: [{
            title: 'SUM, AVERAGE, COUNT, COUNTA Explained Clearly',
            provider: 'YouTube Excel Training',
            url: 'https://www.youtube.com/results?search_query=sum+average+count+counta+excel+explained',
            language: 'English',
            duration: '16 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Build a sales summary for an electronics retail shop.',
            tasks: ['Calculate Total Revenue with SUM', 'Find Average Order Value with AVERAGE', 'Count Total Orders placed with COUNT']
          },
          quiz: [{
            id: 'q-xl-4',
            question: 'If cell A1 has "Kerala", A2 has 500, and A3 is blank, what does =COUNT(A1:A3) return?',
            options: ['3', '2', '1', '0'],
            correctOptionIndex: 2,
            explanation: 'COUNT only counts cells containing numerical values (A2=500). Therefore it returns 1.'
          }]
        },
        {
          id: 'les-xl-5',
          dayNumber: 5,
          title: 'Week 1 Review & De-Duplication Mastery',
          titleMl: 'ഡേ 5: ആഴ്ച 1 അവലോകനവും ഡ്യൂപ്ലിക്കേറ്റ് ഒഴിവാക്കലും',
          durationMinutes: 60,
          overview: 'Review Week 1 and master "Remove Duplicates" and "Highlight Duplicates" using conditional formatting.',
          concepts: ['Excel Remove Duplicates tool', 'Conditional formatting rules for duplicate identification', 'Documenting audit rows removed'],
          simpleEnglishGuide: 'Before running Remove Duplicates, always duplicate your raw tab. Keep an untouched "Raw_Data" sheet and a cleaned "Clean_Data" sheet.',
          malayalamNotes: 'ഒരേ വിവരങ്ങൾ വീണ്ടും വരുന്നത് കണ്ടെത്തി നീക്കം ചെയ്യുന്ന രീതി.',
          officialDocLinks: [{ title: 'Find and remove duplicates in Excel', url: 'https://support.google.com' }],
          videoResources: [{
            title: 'Remove Duplicates in Excel Like an Expert',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=how+to+remove+duplicates+in+excel',
            language: 'English',
            duration: '15 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Take a sample 100-row email subscriber list with 20 duplicate entries.',
            tasks: ['Highlight duplicates in red', 'Execute Remove Duplicates and document that 20 duplicate rows were removed']
          },
          quiz: [{
            id: 'q-xl-5',
            question: 'Why should you always preserve the original "Raw_Data" tab before removing duplicates?',
            options: ['To make the file larger', 'So you have an auditable backup if legitimate similar entries were accidentally deleted', 'Excel requires two sheets', 'For printing'],
            correctOptionIndex: 1,
            explanation: 'Preserving raw data ensures you have a reliable rollback path if records were deleted in error.'
          }]
        }
      ]
    },
    {
      id: 'mod-xl-2',
      weekNumber: 2,
      title: 'Week 2: Logical Functions, Lookups & Validation',
      titleMl: 'ആഴ്ച 2: ലോജിക്കൽ ഫോർമുലകളും ലുക്കപ്പ് വിദ്യകളും',
      objective: 'Master IF, IFS, XLOOKUP, VLOOKUP, and dropdown data validation to build automated business models.',
      lessons: [
        {
          id: 'les-xl-6',
          dayNumber: 6,
          title: 'Logical IF Statements & Nested Conditions',
          titleMl: 'ഡേ 6: ഇഫ് (IF) ഫോർമുലകൾ പഠിക്കാം',
          durationMinutes: 50,
          overview: 'Learn how to automate decision rules: IF(Sales > 10000, "Bonus", "Standard").',
          concepts: ['IF syntax (logical_test, value_if_true, value_if_false)', 'Comparative operators (>, <, >=, <=, <>)', 'The IFS function for multi-tier conditions'],
          simpleEnglishGuide: 'IF formulas think like a human: "If the test score is 70 or higher, write Pass; otherwise, write Fail".',
          malayalamNotes: 'കണ്ടീഷനുകൾ അനുസരിച്ച് സ്വയം തീരുമാനങ്ങൾ എടുക്കാൻ എക്സലിനെ പഠിപ്പിക്കുന്ന ഫോർമുല.',
          officialDocLinks: [{ title: 'IF function reference', url: 'https://support.microsoft.com/en-us/office/if-function-69aed7c9-4e8a-4755-a9bc-aa8bbff73be2' }],
          videoResources: [{
            title: 'Excel IF Formula Explained in Malayalam',
            provider: 'YouTube Tech Malayalam',
            url: 'https://www.youtube.com/results?search_query=excel+if+formula+malayalam',
            language: 'Malayalam',
            duration: '22 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Build a student grading sheet for 20 students.',
            tasks: ['Calculate Percentage', 'Use =IF(Score>=40, "Pass", "Needs Retest") to auto-assign status']
          },
          quiz: [{
            id: 'q-xl-6',
            question: 'In the formula =IF(A1>100, "High", "Low"), what appears if A1 is exactly 100?',
            options: ['High', 'Low', 'Error', 'Blank'],
            correctOptionIndex: 1,
            explanation: 'Since 100 is not strictly greater than 100, the condition evaluates to false, returning "Low".'
          }]
        },
        {
          id: 'les-xl-7',
          dayNumber: 7,
          title: 'VLOOKUP Demystified: Exact Match vs Approximate',
          titleMl: 'ഡേ 7: വി-ലുക്കപ്പ് (VLOOKUP) ഫോർമുല',
          durationMinutes: 55,
          overview: 'Learn how to pull prices or customer names from a master price table into daily invoices.',
          concepts: ['VLOOKUP syntax (lookup_value, table_array, col_index_num, [range_lookup])', 'Why FALSE / 0 must almost always be used for exact match', 'Absolute locking of table ranges ($A$2:$D$50)'],
          simpleEnglishGuide: 'VLOOKUP is like looking up a phone number in a directory. You give it an Employee ID, and it fetches their Department.',
          malayalamNotes: 'മറ്റൊരു ടേബിളിൽ നിന്ന് വിവരങ്ങൾ തിരഞ്ഞ് കണ്ടെത്താൻ VLOOKUP ഉപയോഗിക്കുന്നു.',
          officialDocLinks: [{ title: 'VLOOKUP documentation', url: 'https://support.microsoft.com/en-us/office/vlookup-function-0bbc8083-26fe-4963-8ab8-93a18ad188a1' }],
          videoResources: [{
            title: 'VLOOKUP for Beginners in Malayalam',
            provider: 'YouTube Tech Malayalam',
            url: 'https://www.youtube.com/results?search_query=vlookup+in+malayalam+tutorial',
            language: 'Malayalam',
            duration: '25 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Create an invoice order sheet that pulls product prices from a separate Master Price Catalog using VLOOKUP.',
            tasks: ['Ensure exact match parameter 0/FALSE is configured', 'Wrap in =IFERROR() to hide #N/A errors on blank rows']
          },
          quiz: [{
            id: 'q-xl-7',
            question: 'What happens if you omit the 4th parameter or enter TRUE in a VLOOKUP searching for an exact product SKU?',
            options: ['It crashes', 'It may return the wrong price by guessing an approximate match', 'It deletes the SKU', 'It formats to bold'],
            correctOptionIndex: 1,
            explanation: 'Omitting FALSE/0 allows approximate matching, which returns inaccurate data if the table is not sorted.'
          }]
        },
        {
          id: 'les-xl-8',
          dayNumber: 8,
          title: 'Modern XLOOKUP: The Ultimate Upgrade',
          titleMl: 'ഡേ 8: ആധുനിക എക്സ്-ലുക്കപ്പ് (XLOOKUP)',
          durationMinutes: 50,
          overview: 'Master XLOOKUP in modern Excel and Google Sheets—look left, look right, default exact match, and built-in error handling.',
          concepts: ['XLOOKUP syntax (lookup_value, lookup_array, return_array, [if_not_found])', 'Why XLOOKUP is safer than VLOOKUP when columns are inserted'],
          simpleEnglishGuide: 'With VLOOKUP, if someone inserts a new column, the whole sheet breaks. XLOOKUP never breaks because it points directly to the target column.',
          malayalamNotes: 'VLOOKUP-നേക്കാൾ എളുപ്പത്തിലും സുരക്ഷിതമായും ഉപയോഗിക്കാവുന്ന പുതിയ ഫോർമുലയാണ് XLOOKUP.',
          officialDocLinks: [{ title: 'XLOOKUP function documentation', url: 'https://support.microsoft.com/en-us/office/xlookup-function-b7fd680e-6d10-43e6-84f9-88eae8bf5929' }],
          videoResources: [{
            title: 'Why XLOOKUP is Better Than VLOOKUP — Full Guide',
            provider: 'YouTube Excel Training',
            url: 'https://www.youtube.com/results?search_query=xlookup+tutorial+for+beginners',
            language: 'English',
            duration: '18 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Convert your previous VLOOKUP price sheet into modern XLOOKUP with custom "Item Not Found" messaging.',
            tasks: ['Test inserting a new column between Product and Price to verify formula resilience']
          },
          quiz: [{
            id: 'q-xl-8',
            question: 'What is a major advantage of XLOOKUP over traditional VLOOKUP?',
            options: ['It works without computers', 'It can look to the left and will not break when columns are inserted', 'It sends emails', 'It adds colors'],
            correctOptionIndex: 1,
            explanation: 'XLOOKUP looks in any direction and references independent column ranges, preventing broken references.'
          }]
        },
        {
          id: 'les-xl-9',
          dayNumber: 9,
          title: 'Conditional Formatting: Data Bars, Color Scales & Alerts',
          titleMl: 'ഡേ 9: കണ്ടീഷണൽ ഫോർമാറ്റിംഗും വിഷ്വൽ അലേർട്ടുകളും',
          durationMinutes: 50,
          overview: 'Highlight overdue bills in soft red, highlight top 10% sales in green, and add data bars directly inside table cells.',
          concepts: ['Highlight cell rules (Greater than, Less than, Between, Equal to)', 'Highlighting overdue dates using =TODAY()', 'Avoiding visual clutter'],
          simpleEnglishGuide: 'Do not make your sheet look like a rainbow. Use soft red for items needing urgent attention and soft green for finished tasks.',
          malayalamNotes: 'പ്രധാനപ്പെട്ട വിവരങ്ങൾ തനിയെ കളർ ആയി കാണിക്കാൻ കണ്ടീഷണൽ ഫോർമാറ്റിംഗ് ഉപയോഗിക്കുന്നു.',
          officialDocLinks: [{ title: 'Use conditional formatting to highlight information', url: 'https://support.microsoft.com/en-us/office/use-conditional-formatting-to-highlight-information-fed60dfa-1d3f-4e13-9ecb-f1951ff89d7f' }],
          videoResources: [{
            title: 'Conditional Formatting Mastery in Excel',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=excel+conditional+formatting+tutorial',
            language: 'English',
            duration: '17 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Build an Accounts Receivable aging tracker with automated date alerts.',
            tasks: ['Create rule: If Payment Date is less than TODAY() and Status is Unpaid, highlight in light red']
          },
          quiz: [{
            id: 'q-xl-9',
            question: 'Which formula dynamically references the current system date in Excel and Google Sheets?',
            options: ['=CURRENT()', '=TODAY()', '=DATE()', '=NOWDATE()'],
            correctOptionIndex: 1,
            explanation: '=TODAY() automatically updates to the current system date every time the sheet recalculates.'
          }]
        },
        {
          id: 'les-xl-10',
          dayNumber: 10,
          title: 'Week 2 Review & Automated Invoicing Engine Drill',
          titleMl: 'ഡേ 10: ആഴ്ച 2 പ്രോജക്റ്റ് ഡ്രിൽ',
          durationMinutes: 60,
          overview: 'Combine IF, XLOOKUP, and Data Validation into an automated invoice generator.',
          concepts: ['Consolidation of logical formulas, lookups, and validations'],
          simpleEnglishGuide: 'Select a customer from a dropdown; their address, phone, and payment terms auto-fill. That is the power of lookup engineering.',
          malayalamNotes: 'രണ്ടാം ആഴ്ച പഠിച്ച എല്ലാ കാര്യങ്ങളും ചേർത്ത് ഒരു ഓട്ടോമേറ്റഡ് ഇൻവോയ്സ് മോഡൽ ഉണ്ടാക്കുന്നു.',
          officialDocLinks: [{ title: 'Excel Invoice Templates', url: 'https://templates.office.com' }],
          videoResources: [{
            title: 'Build an Automated Invoice in Excel from Scratch',
            provider: 'YouTube Excel Training',
            url: 'https://www.youtube.com/results?search_query=automated+invoice+in+excel+step+by+step',
            language: 'English',
            duration: '26 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Build an Automated Quotation Generator in Excel/Sheets.',
            tasks: ['Add Customer Dropdown', 'Use XLOOKUP to populate tax rates and item prices', 'Calculate Subtotal, Tax, and Grand Total']
          },
          quiz: [{
            id: 'q-xl-10',
            question: 'What is the purpose of wrapping a lookup formula in =IFERROR(formula, "")?',
            options: ['To speed up the internet', 'To display a clean blank cell instead of an ugly #N/A error when a row is not yet filled', 'To lock the sheet', 'To calculate tax'],
            correctOptionIndex: 1,
            explanation: 'IFERROR gracefully replaces ugly system errors with friendly text or clean blank cells.'
          }]
        }
      ]
    },
    {
      id: 'mod-xl-3',
      weekNumber: 3,
      title: 'Week 3: Pivot Tables, Summaries & Executive Dashboards',
      titleMl: 'ആഴ്ച 3: പിവറ്റ് ടേബിളുകളും എക്സിക്യൂട്ടീവ് ഡാഷ്‌ബോർഡുകളും',
      objective: 'Summarize 10,000 rows of raw data in seconds using Pivot Tables, group dates by months, add slicers, and create dynamic charts.',
      lessons: [
        {
          id: 'les-xl-11',
          dayNumber: 11,
          title: 'The Magic of Pivot Tables: Instant Data Summaries',
          titleMl: 'ഡേ 11: പിവറ്റ് ടേബിളുകൾ (Pivot Tables) മനസ്സിലാക്കാം',
          durationMinutes: 50,
          overview: 'Learn the 4 quadrants of a Pivot Table: Rows, Columns, Values, and Filters.',
          concepts: ['Source data requirements (single header row, no blank columns, no merged cells)', 'Drag-and-drop aggregation'],
          simpleEnglishGuide: 'A Pivot Table answers questions without writing any formulas. "Who was our top salesperson?" Drag Salesperson to Rows, and Sales to Values. Done in 5 seconds.',
          malayalamNotes: 'നൂറുകണക്കിന് കണക്കുകൾ ഞൊടിയിടയിൽ സംഗ്രഹിക്കാൻ പിവറ്റ് ടേബിൾ ഉപയോഗിക്കുന്നു.',
          officialDocLinks: [{ title: 'Create a PivotTable to analyze worksheet data', url: 'https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576' }],
          videoResources: [{
            title: 'Pivot Tables for Beginners in Malayalam',
            provider: 'YouTube Tech Malayalam',
            url: 'https://www.youtube.com/results?search_query=pivot+table+malayalam+tutorial',
            language: 'Malayalam',
            duration: '22 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Create a Pivot Table from a 100-row retail sales transaction table.',
            tasks: ['Summarize Total Sales by Region (North, South, East, West)', 'Format the Value field as Currency']
          },
          quiz: [{
            id: 'q-xl-11',
            question: 'What is the most common reason a Pivot Table fails to create or produces errors?',
            options: ['The computer is too old', 'The source data has blank column headers or merged cells in the table range', 'It only works on Sundays', 'Numbers are too high'],
            correctOptionIndex: 1,
            explanation: 'Pivot Tables require strict rectangular data with every column having a distinct single header.'
          }]
        },
        {
          id: 'les-xl-12',
          dayNumber: 12,
          title: 'Grouping Dates by Months, Quarters & Years in Pivot Tables',
          titleMl: 'ഡേ 12: തീയതികൾ മാസം തിരിച്ച് ക്രമീകരിക്കൽ',
          durationMinutes: 50,
          overview: 'Turn individual daily purchase dates (e.g. 03/01/2026, 17/01/2026) into clean Monthly and Quarterly performance trends.',
          concepts: ['Date grouping feature in Pivot Tables', 'Year-over-Year comparison layouts'],
          simpleEnglishGuide: 'Right-click any date inside your Pivot Table and select "Group". Select "Months" and "Years". Your raw daily list turns into a clean 12-month trend.',
          malayalamNotes: 'ദിവസേനയുള്ള കണക്കുകൾ മാസങ്ങളും വർഷങ്ങളുമായി ഗ്രൂപ്പ് ചെയ്യുന്ന വിധം.',
          officialDocLinks: [{ title: 'Group or ungroup data in a PivotTable', url: 'https://support.microsoft.com/en-us/office/group-or-ungroup-data-in-a-pivottable-c9d1ddd0-6580-47d1-82bc-c84a5a340725' }],
          videoResources: [{
            title: 'How to Group Dates in Pivot Tables Easily',
            provider: 'YouTube Excel Training',
            url: 'https://www.youtube.com/results?search_query=group+dates+in+pivot+table+excel',
            language: 'English',
            duration: '14 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Group 1 year of sales transaction records into a 4-quarter summary report in your Pivot Table.',
            tasks: ['Calculate Quarterly Revenue', 'Calculate percentage contribution of each quarter']
          },
          quiz: [{
            id: 'q-xl-12',
            question: 'If "Group" is grayed out or fails when right-clicking a date in a Pivot Table, what is the cause?',
            options: ['Excel is broken', 'One or more cells in the date column contain text or blank values instead of real dates', 'Pivot Tables do not support dates', 'The file must be saved'],
            correctOptionIndex: 1,
            explanation: 'A single non-date or blank cell in the underlying column prevents Excel from grouping dates.'
          }]
        },
        {
          id: 'les-xl-13',
          dayNumber: 13,
          title: 'Adding Interactive Slicers & Timelines',
          titleMl: 'ഡേ 13: ഇന്ററാക്ടീവ് സ്ലൈസറുകൾ (Slicers)',
          durationMinutes: 50,
          overview: 'Add clickable visual filter buttons (Slicers) so executives can filter by City or Product Category with a single touch.',
          concepts: ['Inserting Slicers on Pivot Tables', 'Connecting one slicer to multiple Pivot Tables (Report Connections)', 'Timeline slicers for dates'],
          simpleEnglishGuide: 'Slicers make you look like a data pro. Instead of asking managers to use complicated drop-down menus, give them large, clickable buttons labeled "2026", "Kochi", "Electronics".',
          malayalamNotes: 'ക്ലിക്ക് ചെയ്ത് ഫിൽട്ടർ ചെയ്യാവുന്ന മനോഹരമായ ബട്ടണുകൾ നിർമ്മിക്കുന്നു.',
          officialDocLinks: [{ title: 'Use slicers to filter data', url: 'https://support.microsoft.com/en-us/office/use-slicers-to-filter-data-24f2a4e2-329b-4488-880f-72ab6f8e3c1a' }],
          videoResources: [{
            title: 'Excel Slicers & Timeline Tutorial',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=excel+slicers+tutorial+for+dashboards',
            language: 'English',
            duration: '16 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Add two visual slicers (Department and Branch City) to your sales Pivot Table.',
            tasks: ['Format slicers with clean contrasting colors', 'Test filtering by clicking individual buttons']
          },
          quiz: [{
            id: 'q-xl-13',
            question: 'What is the main benefit of an Excel Slicer over standard filter dropdowns?',
            options: ['It changes the font', 'It provides a visible, touchscreen-friendly button showing exactly what is currently filtered', 'It translates words', 'It encrypts files'],
            correctOptionIndex: 1,
            explanation: 'Slicers provide immediate visual feedback on which filters are currently applied.'
          }]
        },
        {
          id: 'les-xl-14',
          dayNumber: 14,
          title: 'Building Clean, Executive Summary Charts',
          titleMl: 'ഡേ 14: പ്രൊഫഷണൽ ചാർട്ടുകൾ നിർമ്മിക്കൽ',
          durationMinutes: 55,
          overview: 'Create clean bar charts, line graphs, and donut charts without 3D clutter, excessive legends, or visual noise.',
          concepts: ['Choosing the right chart: Line for trends over time, Bar for comparisons, Donut for parts of a whole', 'Removing chart junk (unnecessary gridlines, redundant borders)'],
          simpleEnglishGuide: 'Never use 3D pie charts. They distort numbers and look amateur. Use clean horizontal bar charts with direct data labels.',
          malayalamNotes: 'ബിസിനസ്സ് മീറ്റിംഗുകളിൽ കാണിക്കാൻ പാകത്തിൽ വൃത്തിയുള്ള ഗ്രാഫുകൾ തയ്യാറാക്കുന്നു.',
          officialDocLinks: [{ title: 'Available chart types in Office', url: 'https://support.microsoft.com/en-us/office/available-chart-types-in-office-a6187218-807e-4103-970a-ae0f5d24a1e8' }],
          videoResources: [{
            title: 'Professional Chart Design in Excel',
            provider: 'YouTube Excel Training',
            url: 'https://www.youtube.com/results?search_query=professional+charts+excel+dashboard',
            language: 'English',
            duration: '21 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Create an executive visual report tab.',
            tasks: ['Build 1 Monthly Revenue Line Chart', 'Build 1 Top 5 Product Categories Bar Chart', 'Link both to Slicers']
          },
          quiz: [{
            id: 'q-xl-14',
            question: 'Why do data professionals avoid 3D perspective charts in business reports?',
            options: ['They cost extra money', '3D angles visually distort proportions and make numbers difficult to compare accurately', 'They only work in games', 'Printers cannot print them'],
            correctOptionIndex: 1,
            explanation: '3D perspective skews visual perception, causing smaller slices or bars in the foreground to look artificially large.'
          }]
        },
        {
          id: 'les-xl-15',
          dayNumber: 15,
          title: 'Week 3 Review: The 1-Page Interactive Dashboard',
          titleMl: 'ഡേ 15: ആഴ്ച 3 ഇന്ററാക്ടീവ് ഡാഷ്‌ബോർഡ്',
          durationMinutes: 60,
          overview: 'Assemble your Pivot Tables, Slicers, and Charts into a clean, 1-screen executive dashboard.',
          concepts: ['Dashboard grid alignment', 'Hiding gridlines for a clean software-like appearance', 'Protecting formulas while leaving slicers unlocked'],
          simpleEnglishGuide: 'Go to View -> uncheck "Gridlines". Instantly your spreadsheet looks like a custom software dashboard instead of a boring worksheet.',
          malayalamNotes: 'ഗ്രിഡ്‌ലൈനുകൾ ഒഴിവാക്കി പ്രൊഫഷണൽ സോഫ്റ്റ്‌വെയർ പോലെ തോന്നിക്കുന്ന ഡാഷ്‌ബോർഡ് നിർമ്മിക്കുന്നു.',
          officialDocLinks: [{ title: 'Show or hide grid lines on a worksheet', url: 'https://support.microsoft.com/en-us/office/show-or-hide-gridlines-on-a-worksheet-31517551-8728-4c8d-8a58-c515a454c7d6' }],
          videoResources: [{
            title: 'Create a Dynamic Dashboard in Excel — Full Tutorial',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=create+dynamic+dashboard+in+excel+for+beginners',
            language: 'English',
            duration: '28 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Build a 1-page Sales Performance Dashboard with 3 KPI Cards, 2 Pivot Charts, and 2 Slicers.',
            tasks: ['Align elements cleanly within screen boundaries (No horizontal scrolling needed)', 'Test slicer interactions']
          },
          quiz: [{
            id: 'q-xl-15',
            question: 'What simple visual step gives an Excel dashboard a polished, application-like feel?',
            options: ['Adding loud sound effects', 'Unchecking "Gridlines" under the View tab and using intentional card borders', 'Writing in all-capital letters', 'Using 10 different fonts'],
            correctOptionIndex: 1,
            explanation: 'Disabling default gridlines and structuring content into bordered cards creates an app-like executive interface.'
          }]
        }
      ]
    },
    {
      id: 'mod-xl-4',
      weekNumber: 4,
      title: 'Week 4: Portfolio Projects, Auditing & Career Launch',
      titleMl: 'ആഴ്ച 4: പോർട്ട്ഫോളിയോ പ്രോജക്റ്റുകളും ജോലി തയ്യാറെടുപ്പും',
      objective: 'Audit models for errors, package 3 spreadsheet workbooks, write an ATS resume, and start applying for data management positions.',
      lessons: [
        {
          id: 'les-xl-16',
          dayNumber: 16,
          title: 'Auditing & Troubleshooting Formula Errors (#N/A, #VALUE!, #REF!)',
          titleMl: 'ഡേ 16: ഫോർമുല തെറ്റുകൾ കണ്ടെത്തി പരിഹരിക്കൽ',
          durationMinutes: 50,
          overview: 'Learn the exact meaning of every Excel error and how to fix them systematically.',
          concepts: ['#N/A (lookup value not found)', '#VALUE! (math performed on text)', '#REF! (referenced cell was deleted)', 'Trace Precedents and Formula Auditing tools'],
          simpleEnglishGuide: 'When you see #REF!, it means a column your formula needed was deleted. Undo immediately or repoint the formula.',
          malayalamNotes: 'എക്സലിൽ വരുന്ന എററുകൾ മനസ്സിലാക്കാനും അവ തിരുത്താനുമുള്ള വഴികൾ.',
          officialDocLinks: [{ title: 'How to correct a #REF! error', url: 'https://support.microsoft.com/en-us/office/how-to-correct-a-ref-error-822c8e46-e610-4d02-bc29-ec4b8c79de40' }],
          videoResources: [{
            title: 'Fix Common Excel Errors (#REF, #VALUE, #N/A)',
            provider: 'YouTube Excel Training',
            url: 'https://www.youtube.com/results?search_query=fix+common+excel+errors+ref+value+na',
            language: 'English',
            duration: '17 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Fix a broken practice workbook containing 5 deliberate formula errors.',
            tasks: ['Identify each error type and repair the formulas so all cells return valid values']
          },
          quiz: [{
            id: 'q-xl-16',
            question: 'What does the "#REF!" error indicate in a spreadsheet formula?',
            options: ['The file is corrupted', 'A cell, row, or column referenced in the formula was deleted or pasted over', 'The number is negative', 'The computer needs updates'],
            correctOptionIndex: 1,
            explanation: '#REF! means "Invalid Reference", occurring when a cell targeted by a formula no longer exists.'
          }]
        },
        {
          id: 'les-xl-17',
          dayNumber: 17,
          title: 'Packaging 3 Portfolio-Ready Workbooks with ReadMe Tabs',
          titleMl: 'ഡേ 17: പോർട്ട്ഫോളിയോ ഫയലുകൾ ചിട്ടപ്പെടുത്തൽ',
          durationMinutes: 55,
          overview: 'Structure your 3 completed course workbooks (Lead Tracker, Invoicing Engine, Executive Dashboard) for public sharing with employers.',
          concepts: ['Setting up read-only view links', 'Documenting formula rationale in ReadMe tabs', 'Creating clean PDF report exports'],
          simpleEnglishGuide: 'Employers want to see that you take pride in your work. A clean ReadMe tab with your name and explanation proves you are professional.',
          malayalamNotes: 'തയ്യാറാക്കിയ ഫയലുകൾ ജോലിക്ക് അപേക്ഷിക്കാൻ പാകത്തിൽ പോർട്ട്ഫോളിയോ ആക്കി മാറ്റുന്നു.',
          officialDocLinks: [{ title: 'Share and collaborate in Excel', url: 'https://support.microsoft.com' }],
          videoResources: [{
            title: 'How to Build an Excel Portfolio That Gets You Hired',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=excel+portfolio+for+jobs',
            language: 'English',
            duration: '22 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Create a shared Google Drive portfolio folder with your 3 polished workbooks.',
            tasks: ['Verify public view permissions work in an incognito browser window']
          },
          quiz: [{
            id: 'q-xl-17',
            question: 'When sending an Excel workbook to an interviewer, why is it best practice to open on the "Dashboard" or "ReadMe" tab before saving?',
            options: ['It reduces file size', 'The file opens on that exact tab when the employer clicks it, giving an immediate strong first impression', 'It is required by Microsoft', 'To hide formulas'],
            correctOptionIndex: 1,
            explanation: 'Workbooks open on the active sheet where they were last saved, ensuring a clean initial view.'
          }]
        },
        {
          id: 'les-xl-18',
          dayNumber: 18,
          title: 'Writing an ATS Data Management Resume',
          titleMl: 'ഡേ 18: ഡാറ്റാ റെസ്യൂമെ നിർമ്മാണം',
          durationMinutes: 50,
          overview: 'Highlight specific spreadsheet capabilities: XLOOKUP, Pivot Tables, Data Cleaning, and Dashboarding on your resume.',
          concepts: ['Target keywords: "Data Management Assistant", "Excel Operator", "MIS Assistant", "Spreadsheet Specialist"'],
          simpleEnglishGuide: 'Do not just write "Good at Excel". Write: "Built automated sales dashboards using XLOOKUP and Pivot Tables to track ₹20L in monthly revenue".',
          malayalamNotes: 'കമ്പനികളെ ആകർഷിക്കുന്ന രീതിയിൽ എക്സൽ സ്കില്ലുകൾ റെസ്യൂമെയിൽ ഉൾപ്പെടുത്തുന്നു.',
          officialDocLinks: [{ title: 'Career Launchpad Resume Builder', url: '/resume-builder' }],
          videoResources: [{
            title: 'Resume Tips for Excel & Data Entry Jobs',
            provider: 'YouTube Career Guidance',
            url: 'https://www.youtube.com/results?search_query=excel+data+entry+resume+tips',
            language: 'English',
            duration: '16 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Generate your Data Management Resume using the Career Launchpad builder.',
            tasks: ['Quantify project outcomes and highlight formulas mastered']
          },
          quiz: [{
            id: 'q-xl-18',
            question: 'Which resume bullet point is most impressive to a hiring manager looking for an Excel assistant?',
            options: ['Knows computer basics', 'Cleaned and structured raw multi-source sales databases of 2,000+ records and built dynamic Pivot Table reports', 'Did data entry work', 'Works with sheets'],
            correctOptionIndex: 1,
            explanation: 'Action verb + specific scale + formulas used = compelling employer proof.'
          }]
        },
        {
          id: 'les-xl-19',
          dayNumber: 19,
          title: 'Acing the Excel Practical Interview Test',
          titleMl: 'ഡേ 19: എക്സൽ ഇന്റർവ്യൂ ടെസ്റ്റ് പരിശീലനം',
          durationMinutes: 55,
          overview: 'Practice the classic 30-minute Excel screening test: clean a table, write an XLOOKUP, build a Pivot Table, and format for printing.',
          concepts: ['Timed practical test strategy', 'Checking your own work before submitting to the test proctor'],
          simpleEnglishGuide: 'When given a test dataset, the first thing to check is: are there duplicate rows? Are numbers formatted as numbers? Fix the foundation first.',
          malayalamNotes: 'ഇന്റർവ്യൂവിൽ തരുന്ന പ്രായോഗിക പരീക്ഷകൾ സമയബന്ധിതമായി പൂർത്തിയാക്കാൻ പരിശീലിക്കുന്നു.',
          officialDocLinks: [{ title: 'Excel Assessment Test Tips', url: 'https://support.microsoft.com' }],
          videoResources: [{
            title: 'Top 10 Excel Interview Questions & Practical Test Walkthrough',
            provider: 'YouTube Excel Training',
            url: 'https://www.youtube.com/results?search_query=excel+interview+test+for+job+applicants',
            language: 'English',
            duration: '24 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Complete a timed 25-minute mock screening test combining data cleanup and Pivot Table generation.',
            tasks: ['Record completion time and verify all answers match answer keys']
          },
          quiz: [{
            id: 'q-xl-19',
            question: 'When asked in an interview how you verify the accuracy of your Excel formulas, what is the best answer?',
            options: ['I assume Excel is always right', 'I do a manual sanity check on a small sample of 3-5 rows and cross-verify totals with the status bar sum', 'I never check', 'I ask someone else'],
            correctOptionIndex: 1,
            explanation: 'Demonstrating systematic manual verification proves high reliability and data integrity.'
          }]
        },
        {
          id: 'les-xl-20',
          dayNumber: 20,
          title: 'Course Final Assessment & Career Progression Path',
          titleMl: 'ഡേ 20: ഫൈനൽ അസസ്സ്‌മെന്റും കരിയർ വളർച്ചയും',
          durationMinutes: 60,
          overview: 'Complete the final comprehensive assessment and plan your pathway from Excel Assistant to Junior Data Analyst.',
          concepts: ['Next steps: SQL, Power BI, and Python data analysis foundations'],
          simpleEnglishGuide: 'Mastering Excel is your launchpad. With these spreadsheet fundamentals, learning SQL and Power BI later will feel natural and exciting.',
          malayalamNotes: 'എക്സൽ പഠനത്തിന് ശേഷം ഡാറ്റാ അനലിസ്റ്റ് തലത്തിലേക്ക് വളരാനുള്ള വഴികൾ.',
          officialDocLinks: [{ title: 'Microsoft Learn Data Analysis Path', url: 'https://learn.microsoft.com/en-us/training/' }],
          videoResources: [{
            title: 'From Excel Beginner to Data Analyst Career Roadmap',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=excel+to+data+analyst+roadmap',
            language: 'English',
            duration: '20 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Submit your 3 Excel workbooks to the Career Launchpad Skill Assessment system.',
            tasks: ['Verify all project links are accessible', 'Obtain your verified completion badge']
          },
          quiz: [{
            id: 'q-xl-20',
            question: 'What is the natural next technical step after mastering advanced Excel spreadsheets for a career in data?',
            options: ['Learning graphic drawing', 'Relational database querying with SQL and Power BI data modeling', 'Typing speed only', 'Computer hardware assembly'],
            correctOptionIndex: 1,
            explanation: 'SQL and Power BI build directly on spreadsheet logic, leading to higher-paying data analyst roles.'
          }]
        }
      ]
    }
  ],
  projects: [
    {
      id: 'proj-xl-1',
      title: 'Raw Multi-Source Data Cleaning & Standardized Master Ledger',
      titleMl: 'ഡാറ്റാ ക്ലീനിംഗും മാസ്റ്റർ ലെഡ്ജർ നിർമ്മാണവും',
      description: 'Clean an unformatted, duplicate-ridden dataset of 500 sales entries into a standardized, error-free master record.',
      scenario: 'A retail chain merged three store databases. The resulting export has irregular capitalization, trailing spaces, duplicated transactions, and dates saved as text. You must build an automated cleaning pipeline.',
      instructions: [
        'Open the raw transaction data CSV in Excel or Google Sheets',
        'Use =TRIM() and =PROPER() to fix customer names and addresses',
        'Convert text dates into genuine serial dates',
        'Identify and remove duplicate transaction rows while documenting the audit count',
        'Create a clean "Master_Clean_Data" tab with locked formula columns'
      ],
      deliverables: [
        'The completed workbook with Raw_Data and Master_Clean_Data tabs',
        'A written 1-paragraph audit note detailing total duplicates removed and corrections made'
      ],
      downloadableDataFilename: 'raw_uncleaned_store_transactions.csv',
      downloadableDataContent: 'InvoiceID,Customer Name,City,Date,Amount\nINV-101,  rajesh kumar ,kochi,2026/01/05,4500\nINV-102,ANITA SHARMA,Calicut,2026/01/06,3200\nINV-101,  rajesh kumar ,kochi,2026/01/05,4500\nINV-103,fathima k,trivandrum,2026/01/07,8900\nINV-104, Suresh Menon  ,Kochi,2026/01/08,1250',
      gradingRubric: [
        { criterion: 'Text & Date Cleanliness', weight: 40, standard: 'Zero trailing spaces, consistent title case, and dates stored as true numeric dates.' },
        { criterion: 'De-Duplication Audit', weight: 35, standard: 'Exact duplicate rows removed with audit note stating exact count.' },
        { criterion: 'Non-Destructive Workflow', weight: 25, standard: 'Original raw data tab is completely preserved alongside the cleaned data.' }
      ],
      modelSolutionOverview: 'The completed workbook contains the pristine raw tab, a transformation tab with formulas, and a final values tab with freeze panes and formatted currency columns.'
    },
    {
      id: 'proj-xl-2',
      title: 'Automated Invoice & Quotation Engine (XLOOKUP / VLOOKUP)',
      titleMl: 'ഓട്ടോമേറ്റഡ് ഇൻവോയ്സ് & കൊട്ടേഷൻ എഞ്ചിൻ',
      description: 'Build a dynamic, error-proof billing engine where selecting customer IDs and product SKUs auto-fills descriptions, rates, and tax calculations.',
      scenario: 'A wholesale hardware distributor needs a bulletproof quotation sheet for sales reps so they never enter outdated prices or miscalculate GST taxes.',
      instructions: [
        'Create a "Product_Catalog" tab with 20 items, SKUs, Unit Rates, and GST tax slabs (5%, 12%, 18%)',
        'Create a "Customer_Directory" tab with 10 client details',
        'Build the "Quotation_Generator" tab with dropdown selection for Customer ID and Product SKUs',
        'Use XLOOKUP (or VLOOKUP with exact match) to auto-populate descriptions and rates',
        'Calculate Line Subtotals, GST Amount, and Invoice Grand Total with =IFERROR() protection'
      ],
      deliverables: [
        'Interactive Excel/Sheets quotation file with functional dropdowns and dynamic lookups',
        'PDF export of a generated sample invoice for a mock customer order'
      ],
      gradingRubric: [
        { criterion: 'Lookup Formula Resilience', weight: 40, standard: 'XLOOKUP/VLOOKUP functions flawlessly with zero #N/A errors on blank rows.' },
        { criterion: 'Tax & Formula Accuracy', weight: 35, standard: 'Subtotals, GST calculations, and grand totals calculate with 100% mathematical precision.' },
        { criterion: 'User Experience & Formatting', weight: 25, standard: 'Clean professional invoice layout suitable for sending directly to clients.' }
      ],
      modelSolutionOverview: 'The invoice engine features automated date stamps, customer address auto-population, conditional formatting for unpaid status, and print-ready margins.'
    },
    {
      id: 'proj-xl-3',
      title: 'Executive Sales & Performance Interactive Dashboard',
      titleMl: 'എക്സിക്യൂട്ടീവ് സെയിൽസ് & പെർഫോമൻസ് ഡാഷ്‌ബോർഡ്',
      description: 'Transform 1,000 transaction records into a 1-screen dynamic dashboard featuring Pivot Tables, interactive Slicers, and clean charts.',
      scenario: 'The regional director of a retail chain needs an interactive monthly dashboard to see performance across branches, product categories, and sales agents without reading thousands of rows.',
      instructions: [
        'Generate Pivot Tables summarizing Revenue by Month, Revenue by City, and Top 5 Sales Representatives',
        'Group transaction dates into 12 Months',
        'Insert interactive Slicers for City Branch and Product Category connected to all Pivot Tables',
        'Build 2 clean charts (1 Trend Line, 1 Ranked Bar Chart) with custom styling and data labels',
        'Hide default gridlines and organize into an aligned 1-screen executive card layout'
      ],
      deliverables: [
        'Complete Excel dashboard workbook with interactive slicers and linked Pivot Tables',
        'Clean screenshot walkthrough demonstrating slicer filtering in action'
      ],
      gradingRubric: [
        { criterion: 'Pivot Table Architecture & Date Grouping', weight: 35, standard: 'Pivot tables are correctly structured with grouped dates and currency formatting.' },
        { criterion: 'Slicer Cross-Connectivity', weight: 35, standard: 'Clicking a slicer button instantly updates both charts and summary KPI cards.' },
        { criterion: 'Visual Polish & Layout', weight: 30, standard: 'Clean card borders, no default gridlines, legible typography, and zero chart junk.' }
      ],
      modelSolutionOverview: 'The dashboard fits comfortably on a standard 1080p display, featuring 3 top KPI summary cards (Total Revenue, Avg Order Value, Total Transactions), two linked charts, and interactive slicers.'
    }
  ],
  workplaceGuidance: {
    firstWeek: [
      'Always duplicate any workbook before editing formulas: save as "Filename_v1_Backup.xlsx".',
      'Never hardcode numbers inside formulas (e.g. write =A1*B1 where B1 holds 0.18, instead of typing =A1*0.18 directly into 500 cells).',
      'Learn whether your team prefers Microsoft Excel or Google Sheets, as formula compatibility can differ slightly.',
      'Check if formulas are set to "Automatic Calculation" (Formulas -> Calculation Options -> Automatic).'
    ],
    firstMonth: [
      'Document your spreadsheet models: write a 2-line note above complex formulas explaining what they do.',
      'Protect sheets with passwords before sharing with non-technical team members so they do not accidentally overwrite formulas.',
      'Build a personal library of reusable templates for expense logs, invoice generators, and pivot dashboards.'
    ],
    commonMistakes: [
      'Entering numbers with currency symbols typed as text (e.g. typing "₹ 500" manually instead of typing 500 and formatting as currency).',
      'Deleting a column that other formulas depend upon, causing cascading #REF! errors.',
      'Merging cells across data tables, which permanently breaks sorting, filtering, and Pivot Tables.'
    ]
  },
  interviewPrep: [
    {
      question: 'What is the difference between VLOOKUP and XLOOKUP, and when would you use each?',
      answer: 'VLOOKUP searches from left to right and requires counting column index numbers, making it prone to breaking if new columns are inserted. XLOOKUP is the modern replacement: it can look in any direction (left or right), defaults to exact match without needing a 0 parameter, and references independent ranges so inserting columns never breaks formulas. I use XLOOKUP whenever available, and VLOOKUP when collaborating on legacy sheets.',
      tips: 'Shows deep technical understanding of modern vs legacy spreadsheet tools.'
    },
    {
      question: 'Why do data professionals avoid merging cells in raw data tables?',
      answer: 'Merging cells creates empty hidden cells in the secondary rows/columns, which prevents proper column sorting, breaks auto-filters, corrupts formula dragging, and completely stops Pivot Tables from working. Instead of merging, I use "Center Across Selection" or keep data unmerged with consistent row entries.',
      tips: 'A classic question that instantly separates amateurs from trained data professionals.'
    },
    {
      question: 'How would you handle a spreadsheet of 10,000 rows that is running very slowly?',
      answer: 'I inspect the sheet for volatile functions like =INDIRECT() or excessive full-column references (like A:A instead of A1:A10000). I check if there are unused formatted blank cells stretching down to row 1,000,000 and delete them, convert heavy formulas to static values where updates are no longer needed, and ensure source data is clean.',
      tips: 'Demonstrates practical performance troubleshooting awareness.'
    }
  ]
};
