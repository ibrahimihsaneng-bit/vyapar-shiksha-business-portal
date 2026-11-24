import { Course } from '@/types';

export const documentFormattingCourse: Course = {
  id: 'course-doc',
  careerSlug: 'document-formatting',
  title: 'Document Formatting & Publishing Assistant (30 Days)',
  titleMl: 'ഡോക്യുമെന്റ് ഫോർമാറ്റിംഗ് & പബ്ലിഷിംഗ് (30 ദിവസങ്ങൾ)',
  durationDays: 30,
  weeklyGoals: [
    {
      weekNumber: 1,
      title: 'Word Processor Fundamentals, Typography & Paragraph Styles',
      objective: 'Master Microsoft Word and Google Docs styles (Title, H1, H2, H3), line spacing, margins, font pairing, and paragraph hierarchy.'
    },
    {
      weekNumber: 2,
      title: 'Automated Table of Contents, Page Breaks & Section Numbering',
      objective: 'Configure automated dynamic tables of contents, page number formats (Roman numerals for front matter), and section breaks.'
    },
    {
      weekNumber: 3,
      title: 'Complex Tables, Callout Boxes & Multi-Column Layouts',
      objective: 'Format executive tables with repeated header rows, zebra striping, branded callout boxes, and pull quotes.'
    },
    {
      weekNumber: 4,
      title: 'Interactive Accessible PDFs, Portfolio & Client Proposals',
      objective: 'Export tagged, accessible PDF documents with active bookmarks, assemble a before-and-after portfolio, and apply for formatting roles.'
    }
  ],
  modules: [
    {
      id: 'mod-doc-1',
      weekNumber: 1,
      title: 'Week 1: Document Anatomy, Typography & Styles Hierarchy',
      titleMl: 'ആഴ്ച 1: ടൈപ്പോഗ്രാഫിയും സ്റ്റൈൽ ഹയരാർക്കിയും',
      objective: 'Learn why manual bolding creates broken documents and how to control layout using standardized styles.',
      lessons: [
        {
          id: 'les-doc-1',
          dayNumber: 1,
          title: 'The Golden Rule of Word Processing: Styles vs Manual Formatting',
          titleMl: 'ഡേ 1: സ്റ്റൈലുകളും മാനുവൽ ഫോർമാറ്റിംഗും',
          durationMinutes: 45,
          overview: 'Understand why professional formatters never highlight text and manually click "Bold and 16pt". Master Heading 1, 2, 3 styles.',
          concepts: ['Paragraph styles vs Character styles', 'Why manual font changes corrupt large documents', 'Enforcing global brand fonts in 1 click'],
          simpleEnglishGuide: 'If a 50-page document has 30 chapter headings and you want to change the font, manual clicking takes 1 hour. If you use Heading 1 Style, you change it once in 2 seconds and all 30 headings update automatically.',
          malayalamNotes: 'തലക്കെട്ടുകൾ ഓരോന്നായി ബോൾഡ് ചെയ്യുന്നതിന് പകരം സ്റ്റൈലുകൾ ഉപയോഗിച്ച് ഒന്നിച്ച് മാറ്റുന്ന വിദ്യ.',
          officialDocLinks: [{ title: 'Apply styles in Word', url: 'https://support.microsoft.com/en-us/office/apply-styles-in-word-e6b1262d-bfa7-4f6c-863a-e90f23e7f225' }],
          videoResources: [{
            title: 'Word Styles for Beginners — Complete Tutorial',
            provider: 'YouTube Document Training',
            url: 'https://www.youtube.com/results?search_query=word+styles+tutorial+for+beginners',
            language: 'English',
            duration: '20 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Create a custom Style Palette in Microsoft Word or Google Docs.',
            tasks: ['Configure Title (24pt Bold), Heading 1 (18pt Bold Primary Color), Heading 2 (14pt Semi-Bold), Normal (11pt with 1.15 line spacing)']
          },
          quiz: [{
            id: 'q-doc-1',
            question: 'What is the primary advantage of formatting headings using "Heading 1" and "Heading 2" styles rather than manual bolding?',
            options: ['It uses less computer memory', 'It enables automated Table of Contents generation, document navigation, and instant global re-styling', 'It prevents anyone from reading the file', 'It prints in color only'],
            correctOptionIndex: 1,
            explanation: 'Heading styles establish the semantic structure needed for automated tables of contents and universal style updates.'
          }]
        },
        {
          id: 'les-doc-2',
          dayNumber: 2,
          title: 'Typography Rules: Font Pairing, Margins & Line Heights',
          titleMl: 'ഡേ 2: ഫോണ്ടുകളും മാർജിനുകളും ക്രമീകരിക്കൽ',
          durationMinutes: 50,
          overview: 'Master professional typography: pairing a clean Serif header (Merriweather / Georgia) with a readable Sans-Serif body (Inter / Arial).',
          concepts: ['Font pairing principles (Header vs Body)', 'Standard margins (1 inch / 2.54 cm)', 'Line height (1.15 to 1.3) and paragraph spacing after (6pt)'],
          simpleEnglishGuide: 'Never press "Enter" twice to make space between paragraphs. Set paragraph spacing to "8pt After". This keeps your document clean and symmetrical on every page.',
          malayalamNotes: 'വായിക്കാൻ സുഖമുള്ള ഫോണ്ടുകളും മാർജിനുകളും തിരഞ്ഞെടുക്കുന്ന രീതി.',
          officialDocLinks: [{ title: 'Change line spacing in Word', url: 'https://support.microsoft.com/en-us/office/change-the-line-spacing-in-word-04ada056-b8ef-4171-8ee2-70b7978b7b3b' }],
          videoResources: [{
            title: 'Typography & Layout Rules for Professional Documents',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=typography+rules+for+word+documents',
            language: 'English',
            duration: '18 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Format an unstyled 3-page article using Georgia for Headings and Calibri for Body text.',
            tasks: ['Set 1-inch margins on all sides', 'Apply 1.2 line spacing with 6pt space after paragraphs', 'Eliminate all empty double-Enter lines']
          },
          quiz: [{
            id: 'q-doc-2',
            question: 'Why do professional document designers avoid pressing the Enter key twice between paragraphs?',
            options: ['Enter key breaks keyboards', 'It creates irregular spacing gaps that cause unpredictable orphan headings and broken page breaks', 'Word limits Enter keys', 'For printing speed'],
            correctOptionIndex: 1,
            explanation: 'Using paragraph spacing properties (e.g. 6pt after) ensures mathematically consistent spacing across all pages.'
          }]
        },
        {
          id: 'les-doc-3',
          dayNumber: 3,
          title: 'Managing Widows, Orphans & Page Breaks',
          titleMl: 'ഡേ 3: വിഡോകളും ഓർഫനുകളും ഒഴിവാക്കൽ',
          durationMinutes: 45,
          overview: 'Learn how to prevent a heading from being stranded alone at the very bottom of a page (Orphan) with the "Keep with next" setting.',
          concepts: ['"Keep with next" paragraph rule', '"Keep lines together" rule', 'Widow/Orphan control check'],
          simpleEnglishGuide: 'Have you ever seen a heading at the very bottom of a page, with the text starting on the next page? That looks terrible. Turning on "Keep with next" forces the heading to stay glued to its paragraph.',
          malayalamNotes: 'തലക്കെട്ടുകൾ പേജിന്റെ അടിയിൽ ഒറ്റപ്പെട്ടുപോകാതിരിക്കാൻ ചെയ്യേണ്ട ക്രമീകരണങ്ങൾ.',
          officialDocLinks: [{ title: 'Control pagination and orphan headings', url: 'https://support.microsoft.com/en-us/office/keep-text-together-2623dd01-2612-4874-8b63-3bb6e7250482' }],
          videoResources: [{
            title: 'Fix Orphan Headings & Page Breaks in Word Forever',
            provider: 'YouTube Document Training',
            url: 'https://www.youtube.com/results?search_query=fix+orphan+headings+in+word',
            language: 'English',
            duration: '14 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Configure the Heading 1 and Heading 2 styles in your Word processor to automatically enforce "Keep with next".',
            tasks: ['Verify headings automatically jump to the next page when reaching the bottom margin']
          },
          quiz: [{
            id: 'q-doc-3',
            question: 'What paragraph setting prevents a heading from being stranded at the bottom of a page separate from its body text?',
            options: ['Auto-save', 'Keep with next', 'Page Number', 'Justify text'],
            correctOptionIndex: 1,
            explanation: '"Keep with next" ensures the heading and the subsequent paragraph are never split across a page boundary.'
          }]
        },
        {
          id: 'les-doc-4',
          dayNumber: 4,
          title: 'Creating Cover Pages & Document Brand Consistency',
          titleMl: 'ഡേ 4: ആകർഷകമായ കവർ പേജുകൾ നിർമ്മിക്കൽ',
          durationMinutes: 50,
          overview: 'Design executive title pages with company logo, document subtitle, author details, publication date, and version numbers.',
          concepts: ['Cover page visual hierarchy', 'Subtle brand color accent bands', 'Document metadata fields'],
          simpleEnglishGuide: 'A cover page is the front door of your document. Keep it clean: large title, clear subtitle, author name, date, and version number (e.g. Version 1.2).',
          malayalamNotes: 'പുസ്തകങ്ങൾക്കും റിപ്പോർട്ടുകൾക്കും അനുയോജ്യമായ കവർ പേജ് ഡിസൈൻ ചെയ്യുന്ന രീതി.',
          officialDocLinks: [{ title: 'Add a cover page in Word', url: 'https://support.microsoft.com/en-us/office/add-a-cover-page-in-word-2a62886f-2007-4f6b-877f-1d8f7602e485' }],
          videoResources: [{
            title: 'Design a Modern Professional Cover Page in Word',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=design+professional+cover+page+in+word',
            language: 'English',
            duration: '19 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Design 2 corporate cover page templates for a technical report.',
            tasks: ['Include Document Title, Subtitle, Organization Name, Author, Date, and Version Badge']
          },
          quiz: [{
            id: 'q-doc-4',
            question: 'Why should formal business reports include a clear "Version Number" (e.g. v1.0, v1.2) on the cover page?',
            options: ['To look like software', 'To ensure all stakeholders and readers know they are reviewing the latest revised draft', 'It is required by printers', 'To increase word count'],
            correctOptionIndex: 1,
            explanation: 'Version numbers ensure different departments do not read or act upon outdated drafts.'
          }]
        },
        {
          id: 'les-doc-5',
          dayNumber: 5,
          title: 'Week 1 Review: Transforming a Messy 5-Page Manuscript',
          titleMl: 'ഡേ 5: ആഴ്ച 1 ഫോർമാറ്റിംഗ് പരീക്ഷ',
          durationMinutes: 60,
          overview: 'Take an unformatted raw text document and apply full Week 1 styles, margins, typography, and cover page layout.',
          concepts: ['Consolidation of typography and styles'],
          simpleEnglishGuide: 'Compare the before and after. The original text looked like raw email text; your formatted version looks like a ₹5,000 corporate white paper.',
          malayalamNotes: 'ആദ്യ ആഴ്ച പഠിച്ച എല്ലാ കാര്യങ്ങളും ഉപയോഗിച്ച് ഒരു ഡോക്യുമെന്റ് പൂർണ്ണമായി ഡിസൈൻ ചെയ്യുന്നു.',
          officialDocLinks: [{ title: 'Word Document Design Best Practices', url: 'https://support.microsoft.com' }],
          videoResources: [{
            title: 'Before & After: Document Formatting Transformation Walkthrough',
            provider: 'YouTube Document Training',
            url: 'https://www.youtube.com/results?search_query=word+document+makeover+before+after',
            language: 'English',
            duration: '22 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Format the provided raw 5-page business case study.',
            tasks: ['Apply styles hierarchy', 'Eliminate all manual spacing flaws', 'Add an executive cover page']
          },
          quiz: [{
            id: 'q-doc-5',
            question: 'What is the most effective visual proof to showcase to clients in a document formatting portfolio?',
            options: ['A long written essay', 'A side-by-side "Before & After" visual comparison of an unformatted draft vs the polished corporate final', 'A list of keyboard keys', 'A photo of your laptop'],
            correctOptionIndex: 1,
            explanation: 'Before-and-after visual comparisons provide undeniable proof of value and skill.'
          }]
        }
      ]
    },
    {
      id: 'mod-doc-2',
      weekNumber: 2,
      title: 'Week 2: Automated Table of Contents & Section Breaks',
      titleMl: 'ആഴ്ച 2: ടേബിൾ ഓഫ് കണ്ടന്റ്സും സെക്ഷൻ ബ്രേക്കുകളും',
      objective: 'Generate dynamic tables of contents, manage section breaks, and configure complex page numbering (Roman numerals for front matter).',
      lessons: [
        {
          id: 'les-doc-6',
          dayNumber: 6,
          title: 'Generating & Updating Automated Tables of Contents (TOC)',
          titleMl: 'ഡേ 6: ഓട്ടോമേറ്റഡ് ടേബിൾ ഓഫ് കണ്ടന്റ്സ് (TOC)',
          durationMinutes: 50,
          overview: 'Insert an automated Table of Contents that reads Heading 1, 2, and 3 styles, with dot leaders and exact page numbers.',
          concepts: ['Inserting TOC with dot leaders', 'Updating page numbers only vs updating entire table', 'Customizing TOC font styles'],
          simpleEnglishGuide: 'Never type a table of contents by hand with dots and numbers. When you add a new paragraph on page 3, all manual numbers break. An automated TOC updates in 1 click.',
          malayalamNotes: 'പേജ് നമ്പറുകൾ തനിയെ മാറുന്ന രീതിയിൽ ഇൻഡക്സ് ടേബിൾ നിർമ്മിക്കുന്ന വിധം.',
          officialDocLinks: [{ title: 'Insert a table of contents in Word', url: 'https://support.microsoft.com/en-us/office/insert-a-table-of-contents-882e8564-0edb-435e-8457-f6044e14d129' }],
          videoResources: [{
            title: 'Automated Table of Contents in Word — Complete Guide',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=table+of+contents+in+word+tutorial',
            language: 'English',
            duration: '18 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Build a multi-level automated Table of Contents for a 15-page document.',
            tasks: ['Configure H1, H2, and H3 levels', 'Test updating the table after adding a new 2-page section']
          },
          quiz: [{
            id: 'q-doc-6',
            question: 'What command updates all page numbers and new chapter titles in an automated Word Table of Contents?',
            options: ['Ctrl + P', 'Right-click TOC -> "Update Field" -> "Update entire table"', 'Alt + F4', 'Delete and retype'],
            correctOptionIndex: 1,
            explanation: '"Update Field" recalculates all heading locations and page numbers across the entire document.'
          }]
        },
        {
          id: 'les-doc-7',
          dayNumber: 7,
          title: 'Section Breaks vs Page Breaks: The Key to Layout Mastery',
          titleMl: 'ഡേ 7: സെക്ഷൻ ബ്രേക്കുകളും പേജ് ബ്രേക്കുകളും',
          durationMinutes: 55,
          overview: 'Understand the difference: Page Break starts a new page with the same headers; Section Break creates an independent zone for different margins or orientations.',
          concepts: ['Section Break (Next Page)', 'Unlinking headers and footers ("Link to Previous" toggle)', 'Switching a single page to Landscape for wide tables'],
          simpleEnglishGuide: 'If you want Page 7 to be horizontal (Landscape) for a wide table, but the rest of the document to stay vertical (Portrait), you MUST insert a Section Break before and after Page 7.',
          malayalamNotes: 'ഒരു പേജ് മാത്രം ലാൻഡ്‌സ്‌കേപ്പ് ആക്കാനും വ്യത്യസ്ത ഹെഡറുകൾ നൽകാനും സെക്ഷൻ ബ്രേക്ക് ഉപയോഗിക്കുന്നു.',
          officialDocLinks: [{ title: 'Insert a section break in Word', url: 'https://support.microsoft.com/en-us/office/insert-a-section-break-eef20fd8-e38c-4ba6-a027-e503bdf8375c' }],
          videoResources: [{
            title: 'Section Breaks & Unlinking Headers in Microsoft Word',
            provider: 'YouTube Document Training',
            url: 'https://www.youtube.com/results?search_query=section+breaks+word+headers+footers',
            language: 'English',
            duration: '21 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Create a 4-page document where Page 3 is Landscape and Pages 1, 2, 4 are Portrait.',
            tasks: ['Use Section Breaks (Next Page) on both sides of Page 3', 'Verify header text displays consistently across orientations']
          },
          quiz: [{
            id: 'q-doc-7',
            question: 'Why must you turn off "Link to Previous" when you want different headers in a new section of a document?',
            options: ['To disconnect from Wi-Fi', 'Because "Link to Previous" forces the new section to copy the exact same header text as the previous section', 'It deletes the footer', 'It prevents saving'],
            correctOptionIndex: 1,
            explanation: 'Disabling "Link to Previous" decouples the header so the new section can carry unique text or numbering.'
          }]
        },
        {
          id: 'les-doc-8',
          dayNumber: 8,
          title: 'Advanced Page Numbering: Roman Numerals & Start At',
          titleMl: 'ഡേ 8: പേജ് നമ്പറുകൾ ക്രമീകരിക്കൽ',
          durationMinutes: 50,
          overview: 'Configure professional publishing numbering: Cover page has NO number, Executive Summary & TOC have Roman numerals (i, ii, iii), and Chapter 1 starts at Page 1.',
          concepts: ['Front matter vs Main body numbering', 'Format Page Numbers: Start At 1 rule'],
          simpleEnglishGuide: 'Books do not have "Page 1" on the cover. Page 1 starts when the real reading begins. Section breaks make this possible.',
          malayalamNotes: 'കവർ പേജിൽ നമ്പർ ഒഴിവാക്കാനും, മുൻഭാഗങ്ങളിൽ റോമൻ സംഖ്യകൾ നൽകാനും പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'Use different page numbers in sections', url: 'https://support.microsoft.com/en-us/office/use-different-page-number-formats-in-different-sections-in-word-37651a2e-4b6c-48d6-953b-e3c3b032d847' }],
          videoResources: [{
            title: 'How to Do Different Page Numbers in Word (Roman & Arabic)',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=different+page+numbers+in+word+roman+arabic',
            language: 'English',
            duration: '16 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Build a 6-page template: Page 1 = Cover (No number), Pages 2-3 = TOC (Numbered i, ii), Pages 4-6 = Main Body (Numbered 1, 2, 3).',
            tasks: ['Verify page numbers transition seamlessly between sections']
          },
          quiz: [{
            id: 'q-doc-8',
            question: 'What page numbering format is standard for document front matter (Executive Summary, TOC, Acknowledgments)?',
            options: ['Letters (A, B, C)', 'Lower-case Roman numerals (i, ii, iii, iv)', 'Negative numbers (-1, -2)', 'Symbols (*, #, @)'],
            correctOptionIndex: 1,
            explanation: 'Standard corporate and academic publishing uses lower-case Roman numerals for introductory front matter.'
          }]
        },
        {
          id: 'les-doc-9',
          dayNumber: 9,
          title: 'Headers, Footers & Confidentiality Watermarks',
          titleMl: 'ഡേ 9: ഹെഡറുകൾ, ഫൂട്ടറുകൾ & വാട്ടർമാർക്കുകൾ',
          durationMinutes: 45,
          overview: 'Insert dynamic document headers: Document Title on left, Chapter Name on right, and Page X of Y with confidential classification in footer.',
          concepts: ['"Page X of Y" field codes', 'Different First Page option', 'Adding subtle draft/confidential watermarks'],
          simpleEnglishGuide: 'Always check "Different First Page" on your cover page so your company logo and page number 1 do not appear on top of the cover photo.',
          malayalamNotes: 'പേജുകളുടെ മുകളിലും താഴെയും വരുന്ന വിവരങ്ങളും വാട്ടർമാർക്കുകളും ചേർക്കുന്ന രീതി.',
          officialDocLinks: [{ title: 'Insert headers and footers in Word', url: 'https://support.microsoft.com/en-us/office/insert-a-header-or-footer-in-word-b8296a24-9b2f-48d7-b84e-3f8206d28956' }],
          videoResources: [{
            title: 'Professional Headers & Footers in Microsoft Word',
            provider: 'YouTube Document Training',
            url: 'https://www.youtube.com/results?search_query=professional+headers+and+footers+in+word',
            language: 'English',
            duration: '17 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Configure dynamic running headers with Document Title on left and Date on right, with "CONFIDENTIAL - INTERNAL USE ONLY" centered in the footer.',
            tasks: ['Ensure "Different First Page" is enabled so the cover remains clean']
          },
          quiz: [{
            id: 'q-doc-9',
            question: 'What checkbox in Word Header settings hides the header and footer on the cover page?',
            options: ['Hide All', 'Different First Page', 'Cover Mode', 'Blank Page'],
            correctOptionIndex: 1,
            explanation: '"Different First Page" isolates page 1 so title graphics can display without headers or page numbers.'
          }]
        },
        {
          id: 'les-doc-10',
          dayNumber: 10,
          title: 'Week 2 Review: Multi-Section Corporate Report Drill',
          titleMl: 'ഡേ 10: ആഴ്ച 2 മൾട്ടി-സെക്ഷൻ റിപ്പോർട്ട് പരീക്ഷ',
          durationMinutes: 60,
          overview: 'Build a complete 10-page report containing cover, Roman numeral front matter, landscape financial table page, and automated TOC.',
          concepts: ['Consolidation of TOC, sections, and page numbering'],
          simpleEnglishGuide: 'This drill combines everything you learned in Week 2. When you can execute this cleanly, you can format annual reports, eBooks, and government proposals.',
          malayalamNotes: 'രണ്ടാം ആഴ്ചയിലെ എല്ലാ സങ്കീർണ്ണമായ ഫോർമാറ്റിംഗുകളും ചേർത്ത് ഒരു റിപ്പോർട്ട് നിർമ്മിക്കുന്നു.',
          officialDocLinks: [{ title: 'Word Advanced Layout Guides', url: 'https://support.microsoft.com' }],
          videoResources: [{
            title: 'Complete Corporate Report Formatting Walkthrough',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=corporate+report+formatting+walkthrough',
            language: 'English',
            duration: '25 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Format a 10-page corporate report with all Week 2 features.',
            tasks: ['Export as a PDF and verify all page numbers match the Table of Contents exactly']
          },
          quiz: [{
            id: 'q-doc-10',
            question: 'Before exporting a Word document with an automated Table of Contents to PDF, what must you always do?',
            options: ['Restart the PC', 'Select the Table of Contents, right-click and choose "Update Field" -> "Update entire table"', 'Change the font color', 'Delete the cover page'],
            correctOptionIndex: 1,
            explanation: 'Updating the TOC field ensures any recent page shifts are recalculated before permanent PDF printing.'
          }]
        }
      ]
    },
    {
      id: 'mod-doc-3',
      weekNumber: 3,
      title: 'Week 3: Tables, Callouts, Pull Quotes & Visual Styling',
      titleMl: 'ആഴ്ച 3: ടേബിളുകൾ, കോൾഔട്ട് ബോക്സുകൾ & വിഷ്വൽ ലേഔട്ടുകൾ',
      objective: 'Format complex business data tables with zebra striping, repeated header rows on page breaks, callout advisory boxes, and pull quotes.',
      lessons: [
        {
          id: 'les-doc-11',
          dayNumber: 11,
          title: 'Professional Tables: Padding, Alignment & Zebra Striping',
          titleMl: 'ഡേ 11: ടേബിളുകൾ മനോഹരമായി ഫോർമാറ്റ് ചെയ്യൽ',
          durationMinutes: 50,
          overview: 'Transform cramped default tables into elegant executive tables: cell margins, subtle borders, header shading, and right-aligning numbers.',
          concepts: ['Right-aligning numbers vs Left-aligning text in tables', 'Cell padding / margins to stop text touching borders', 'Subtle zebra striping (alternating row tints)'],
          simpleEnglishGuide: 'Golden Table Rule: Always align numbers to the right! This lines up the decimals so managers can easily compare ₹10,000 with ₹1,00,000.',
          malayalamNotes: 'കണക്കുകൾ അടങ്ങിയ ടേബിളുകൾ വൃത്തിയായി ക്രമീകരിക്കുന്നതിന്റെ പ്രധാന നിയമങ്ങൾ.',
          officialDocLinks: [{ title: 'Format a table in Word', url: 'https://support.microsoft.com/en-us/office/format-a-table-in-word-e0a5c48d-64eb-4ff3-984e-5e76d33306d1' }],
          videoResources: [{
            title: 'How to Format Professional Tables in Microsoft Word',
            provider: 'YouTube Document Training',
            url: 'https://www.youtube.com/results?search_query=format+professional+tables+in+word',
            language: 'English',
            duration: '18 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Format an unstyled 6x10 financial comparison table.',
            tasks: ['Right-align all numbers', 'Apply 6pt cell padding', 'Use soft gray zebra striping for readability']
          },
          quiz: [{
            id: 'q-doc-11',
            question: 'Why should numerical monetary figures in a data table always be right-aligned?',
            options: ['It looks unique', 'So decimal points and comma separators line up vertically, allowing immediate visual magnitude comparison', 'Left-alignment is illegal', 'To save ink'],
            correctOptionIndex: 1,
            explanation: 'Right-alignment aligns decimal places, making comparing financial figures effortless.'
          }]
        },
        {
          id: 'les-doc-12',
          dayNumber: 12,
          title: 'Repeat Header Rows on Multi-Page Tables',
          titleMl: 'ഡേ 12: മൾട്ടി-പേജ് ടേബിളുകളിൽ ഹെഡർ ആവർത്തിക്കൽ',
          durationMinutes: 45,
          overview: 'Learn how to enable "Repeat as header row at the top of each page" so readers never lose column context across page breaks.',
          concepts: ['Table Properties -> Row -> Repeat as header row', 'Unchecking "Allow row to break across pages" to prevent awkward splits'],
          simpleEnglishGuide: 'When a table spans across 3 pages, readers hate having to flip back to page 1 to see what column 4 means. Turning on "Repeat Header Row" duplicates the title row on every new page automatically.',
          malayalamNotes: 'നീളമുള്ള ടേബിളുകൾ അടുത്ത പേജിലേക്ക് പോകുമ്പോൾ തലക്കെട്ടുകൾ തനിയെ ആവർത്തിക്കുന്ന രീതി.',
          officialDocLinks: [{ title: 'Repeat table header on subsequent pages', url: 'https://support.microsoft.com/en-us/office/repeat-table-header-on-subsequent-pages-ab4f9540-c739-4467-93be-1a067e45e999' }],
          videoResources: [{
            title: 'Repeat Table Headers on Every Page in Word Tutorial',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=repeat+table+headers+on+every+page+in+word',
            language: 'English',
            duration: '12 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Take a 40-row inventory table spanning 2 pages in Word.',
            tasks: ['Enable "Repeat as header row"', 'Uncheck "Allow row to break across pages" on all rows']
          },
          quiz: [{
            id: 'q-doc-12',
            question: 'What setting prevents a single table row with 4 lines of text from being sliced in half across a page boundary?',
            options: ['Delete Row', 'Uncheck "Allow row to break across pages" in Table Properties', 'Change Font', 'Increase Margins'],
            correctOptionIndex: 1,
            explanation: 'Disabling "Allow row to break across pages" forces the entire row to stay intact on the same page.'
          }]
        },
        {
          id: 'les-doc-13',
          dayNumber: 13,
          title: 'Branded Callout Boxes, Tip Panels & Pull Quotes',
          titleMl: 'ഡേ 13: കോൾഔട്ട് ബോക്സുകളും ഹൈലൈറ്റുകളും',
          durationMinutes: 50,
          overview: 'Design professional callout panels (Note, Warning, Tip) using 1-cell tables with soft background tints and thick left accent borders.',
          concepts: ['1-cell shaded table technique for reliable callouts (prevents floating shape glitches)', 'Adding icon accents', 'Styling pull quotes'],
          simpleEnglishGuide: 'Do not use floating text boxes; they shift and break during printing. Use a 1-cell table with a 3pt colored left border and soft gray background. It will stay locked in place perfectly.',
          malayalamNotes: 'പ്രധാനപ്പെട്ട വിവരങ്ങൾ ബോക്സുകളിൽ ഹൈലൈറ്റ് ചെയ്തു കാണിക്കുന്ന വിദ്യ.',
          officialDocLinks: [{ title: 'Callout boxes and borders in Word', url: 'https://support.microsoft.com' }],
          videoResources: [{
            title: 'Create Beautiful Callout Boxes & Tips in Microsoft Word',
            provider: 'YouTube Document Training',
            url: 'https://www.youtube.com/results?search_query=create+callout+boxes+in+word+tutorial',
            language: 'English',
            duration: '16 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Create 3 reusable callout box styles in Word/Docs.',
            tasks: ['1. "Key Takeaway" (Teal border, 10% tint)', '2. "Important Warning" (Amber border)', '3. "Executive Pull Quote"']
          },
          quiz: [{
            id: 'q-doc-13',
            question: 'Why do master document formatters prefer using single-cell tables instead of floating drawing text boxes for callout panels?',
            options: ['Text boxes cost money', 'Floating shapes easily jump position or overlap text during page recalculations, while tables stay inline with document flow', 'Tables are illegal', 'Shapes cannot contain text'],
            correctOptionIndex: 1,
            explanation: 'Single-cell tables remain strictly inline with paragraph flow, eliminating floating shape misalignment.'
          }]
        },
        {
          id: 'les-doc-14',
          dayNumber: 14,
          title: 'Footnotes, Endnotes & Academic Citation Standards',
          titleMl: 'ഡേ 14: ഫൂട്ട്‌നോട്ടുകളും റെഫറൻസുകളും',
          durationMinutes: 45,
          overview: 'Insert automated superscripts with bottom-of-page Footnotes (APA, Chicago, Harvard styles) without manual typing.',
          concepts: ['Inserting automated footnotes (Alt+Ctrl+F)', 'Cross-references to figures and tables', 'Footnote separator customization'],
          simpleEnglishGuide: 'Never type a tiny number "1" manually. Use "Insert Footnote". If you add another footnote earlier on page 2, all footnote numbers update automatically.',
          malayalamNotes: 'പുസ്തകങ്ങളിലും ലേഖനങ്ങളിലും റഫറൻസുകൾ നൽകാൻ ഫൂട്ട്‌നോട്ടുകൾ ഉപയോഗിക്കുന്ന രീതി.',
          officialDocLinks: [{ title: 'Insert footnotes and endnotes in Word', url: 'https://support.microsoft.com/en-us/office/insert-footnotes-and-endnotes-in-word-61f3d8a9-4081-4963-8a90-8d5918375494' }],
          videoResources: [{
            title: 'Footnotes & Citations in Word Tutorial',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=footnotes+and+citations+in+word+tutorial',
            language: 'English',
            duration: '15 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Add 5 automated footnotes to an industry market brief.',
            tasks: ['Verify footnotes display at the bottom of the exact page where they are referenced']
          },
          quiz: [{
            id: 'q-doc-14',
            question: 'What is the primary difference between a Footnote and an Endnote?',
            options: ['There is no difference', 'A Footnote appears at the bottom of the immediate current page; an Endnote appears at the very end of the entire document', 'Endnotes are for photos only', 'Footnotes cannot be printed'],
            correctOptionIndex: 1,
            explanation: 'Footnotes reside at the foot of each page, while Endnotes collect at the final conclusion of the document.'
          }]
        },
        {
          id: 'les-doc-15',
          dayNumber: 15,
          title: 'Week 3 Review: Executive White Paper Makeover',
          titleMl: 'ഡേ 15: ആഴ്ച 3 എക്സിക്യൂട്ടീവ് വൈറ്റ് പേപ്പർ പരീക്ഷ',
          durationMinutes: 60,
          overview: 'Apply all Week 3 styling: beautiful financial tables, callout tip boxes, footnotes, and repeated headers across an 8-page white paper.',
          concepts: ['Consolidation of tables, callouts, and citations'],
          simpleEnglishGuide: 'A white paper must look authoritative. The combination of clean tables, callout boxes, and tidy margins makes the client\'s message look like a world-class consultancy report.',
          malayalamNotes: 'മൂന്നാം ആഴ്ചയിലെ വിഷ്വൽ എലമെന്റുകൾ ഉപയോഗിച്ച് ഒരു സമ്പൂർണ്ണ വൈറ്റ് പേപ്പർ തയ്യാറാക്കുന്നു.',
          officialDocLinks: [{ title: 'Design Professional White Papers', url: 'https://support.microsoft.com' }],
          videoResources: [{
            title: 'How to Format a Professional White Paper in Word',
            provider: 'YouTube Document Training',
            url: 'https://www.youtube.com/results?search_query=format+white+paper+in+microsoft+word',
            language: 'English',
            duration: '23 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Complete the White Paper layout exercise with 2 tables, 3 callout boxes, and 4 footnotes.',
            tasks: ['Verify zero text overflow on table columns']
          },
          quiz: [{
            id: 'q-doc-15',
            question: 'What makes a business white paper look visually engaging without being distracting?',
            options: ['Bright neon backgrounds', 'Consistent brand color accents on callouts, clean right-aligned tables, and spacious 1-inch margins', 'Using 6 different decorative fonts', 'Animation gifs'],
            correctOptionIndex: 1,
            explanation: 'Disciplined brand accenting, spacious margins, and clean tables convey authority and focus.'
          }]
        }
      ]
    },
    {
      id: 'mod-doc-4',
      weekNumber: 4,
      title: 'Week 4: Accessible PDFs, Portfolio & Career Launch',
      titleMl: 'ആഴ്ച 4: പിഡിഎഫ് എക്സ്പോർട്ട്, പോർട്ട്ഫോളിയോ & ജോലി തുടക്കം',
      objective: 'Export fully tagged, accessible PDFs with clickable bookmarks, compile a Before-and-After portfolio, write an ATS resume, and start client outreach.',
      lessons: [
        {
          id: 'les-doc-16',
          dayNumber: 16,
          title: 'Exporting Interactive, Tagged Accessible PDFs',
          titleMl: 'ഡേ 16: ഇന്ററാക്ടീവ് പിഡിഎഫ് (PDF) എക്സ്പോർട്ട്',
          durationMinutes: 50,
          overview: 'Learn how to export Word documents to PDF so that headings become interactive bookmarks in Adobe Acrobat and links work properly.',
          concepts: ['Save as PDF -> Options -> "Create bookmarks using: Headings"', 'Document accessibility tags for screen readers'],
          simpleEnglishGuide: 'When someone opens your PDF on their phone, they can tap on the bookmark icon to jump straight to Chapter 3. That only works if you turn on "Create bookmarks using Headings" when exporting.',
          malayalamNotes: 'ക്ലിക്ക് ചെയ്ത് അധ്യായങ്ങളിലേക്ക് പോകാൻ സാധിക്കുന്ന ബുക്ക്മാർക്കുകളുള്ള പിഡിഎഫ് ഉണ്ടാക്കുന്ന വിധം.',
          officialDocLinks: [{ title: 'Create accessible PDFs from Word', url: 'https://support.microsoft.com/en-us/office/create-accessible-pdfs-0b7692d2-28df-424a-b50a-e83df7576504' }],
          videoResources: [{
            title: 'How to Export Word to PDF with Bookmarks & Links Working',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=word+to+pdf+with+clickable+bookmarks+tutorial',
            language: 'English',
            duration: '16 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Export your 10-page report to PDF with interactive bookmarks enabled.',
            tasks: ['Open in Chrome or Adobe Reader and verify the bookmark sidebar navigates accurately']
          },
          quiz: [{
            id: 'q-doc-16',
            question: 'Why should "Create bookmarks using Headings" be enabled when saving Word files to PDF?',
            options: ['It makes the file black and white', 'It automatically builds an interactive navigation sidebar in PDF readers matching your document heading structure', 'It prevents people from printing', 'It reduces page count'],
            correctOptionIndex: 1,
            explanation: 'PDF bookmarks allow readers to jump instantly between chapters via the PDF reader\'s table of contents.'
          }]
        },
        {
          id: 'les-doc-17',
          dayNumber: 17,
          title: 'Packaging Your "Before & After" Formatting Portfolio',
          titleMl: 'ഡേ 17: ബിഫോർ & ആഫ്റ്റർ പോർട്ട്ഫോളിയോ നിർമ്മാണം',
          durationMinutes: 55,
          overview: 'Create a compelling 3-case study portfolio showing unformatted client drafts on the left, and your polished final deliverable on the right.',
          concepts: ['Case study 1: Academic / Thesis paper', 'Case study 2: Corporate White Paper', 'Case study 3: Client Proposal Template'],
          simpleEnglishGuide: 'A before-and-after comparison speaks louder than any resume. Clients see the chaotic mess they currently have, and see the clean masterpiece you can give them.',
          malayalamNotes: 'തൊഴിലുടമകൾക്ക് കാണിക്കാൻ പാകത്തിൽ ബിഫോർ-ആഫ്റ്റർ ചിത്രങ്ങൾ ഉൾപ്പെടുത്തി പോർട്ട്ഫോളിയോ ഉണ്ടാക്കുന്നു.',
          officialDocLinks: [{ title: 'Portfolio Presentation Guidelines', url: 'https://docs.google.com' }],
          videoResources: [{
            title: 'How to Build a Document Formatting Portfolio for Freelancing',
            provider: 'YouTube Freelance Guides',
            url: 'https://www.youtube.com/results?search_query=document+formatting+portfolio+upwork+fiverr',
            language: 'English',
            duration: '21 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Compile your 3-project Before-and-After Portfolio PDF.',
            tasks: ['Include Project 1: Executive White Paper Makeover', 'Include Project 2: Multi-Page Financial Table & Section Break Dossier', 'Include Project 3: Formatted Business Proposal Template']
          },
          quiz: [{
            id: 'q-doc-17',
            question: 'What is the most convincing portfolio format for landing freelance document formatting jobs on Upwork or Fiverr?',
            options: ['Only describing your education', 'High-resolution before-and-after visual screenshots showing ugly drafts transformed into corporate publications', 'Listing font names', 'Offering low prices'],
            correctOptionIndex: 1,
            explanation: 'Visual before-and-after proof demonstrates immediate, tangible value to busy clients.'
          }]
        },
        {
          id: 'les-doc-18',
          dayNumber: 18,
          title: 'Writing an ATS Document Specialist Resume & Gig Profiles',
          titleMl: 'ഡേ 18: റെസ്യൂമെയും ഫ്രീലാൻസ് പ്രൊഫൈലും',
          durationMinutes: 50,
          overview: 'Draft your specialized resume and freelance profile descriptions targeting "Document Formatter", "Word Specialist", and "Desktop Publisher".',
          concepts: ['Highlighting speed: "Can format 50-page manuscripts within 24 hours with 100% style compliance"', 'Software keywords'],
          simpleEnglishGuide: 'State your deliverables clearly: "I fix broken margins, align page numbers, build automated tables of contents, and export accessible PDFs".',
          malayalamNotes: 'ഡോക്യുമെന്റ് ഫോർമാറ്റിംഗ് ജോലികൾ ലഭിക്കാൻ അനുയോജ്യമായ റെസ്യൂമെ തയ്യാറാക്കുന്നു.',
          officialDocLinks: [{ title: 'Career Launchpad Resume Builder', url: '/resume-builder' }],
          videoResources: [{
            title: 'How to Set Up a Document Formatting Gig on Fiverr & Upwork',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=document+formatting+gig+setup+fiverr',
            language: 'English',
            duration: '19 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Generate your Document Specialist resume using the Career Launchpad builder.',
            tasks: ['Highlight Word styles, Table of Contents, Section Breaks, and PDF accessibility']
          },
          quiz: [{
            id: 'q-doc-18',
            question: 'Which gig title performs best for freelance document formatting services?',
            options: ['I will type words', 'I will professionally format and design your Microsoft Word document, eBook, or report into an executive PDF', 'I know computers', 'Writing documents fast'],
            correctOptionIndex: 1,
            explanation: 'Specific titles mentioning tools (Word), deliverables (eBook, report), and outcomes (executive PDF) attract high-paying clients.'
          }]
        },
        {
          id: 'les-doc-19',
          dayNumber: 19,
          title: 'Client Quoting, Page Rates & File Handover Protocol',
          titleMl: 'ഡേ 19: ചാർജുകൾ നിശ്ചയിക്കലും ഫയലുകൾ കൈമാറലും',
          durationMinutes: 50,
          overview: 'Learn how to quote jobs: per-page rates (e.g. ₹50–₹150 per page depending on complexity) vs flat project fees, and safe file handover.',
          concepts: ['Pricing complex tables vs simple text', 'Always providing both the editable .docx file AND the final .pdf print file'],
          simpleEnglishGuide: 'Always deliver TWO files to your client: 1. The locked final PDF ready to print or email, and 2. The editable Word (.docx) file so they have full ownership for future updates.',
          malayalamNotes: 'പേജിന് എത്ര തുക ഈടാക്കണം എന്നും ക്ലയന്റിന് ഫയലുകൾ എങ്ങനെ കൈമാറണം എന്നും പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'Freelance Pricing Guidelines', url: 'https://www.upwork.com' }],
          videoResources: [{
            title: 'How to Price Freelance Document Formatting Services',
            provider: 'YouTube Freelance Guides',
            url: 'https://www.youtube.com/results?search_query=how+to+price+document+formatting+services',
            language: 'English',
            duration: '17 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Calculate a project quote for a 35-page corporate report with 6 complex tables and a cover page.',
            tasks: ['Break down turnaround time and deliverables list']
          },
          quiz: [{
            id: 'q-doc-19',
            question: 'What two final file formats should a professional document formatter always deliver to a client?',
            options: ['A photo and an audio file', 'Both the editable source file (.docx) AND the high-resolution final interactive PDF', 'Only a printed paper copy', 'A text file'],
            correctOptionIndex: 1,
            explanation: 'Clients need the PDF for immediate publication and the .docx source file for future editorial adjustments.'
          }]
        },
        {
          id: 'les-doc-20',
          dayNumber: 20,
          title: 'Course Final Assessment & First-Month Workplace Blueprint',
          titleMl: 'ഡേ 20: ഫൈനൽ അസസ്സ്‌മെന്റും കരിയർ ഗൈഡും',
          durationMinutes: 60,
          overview: 'Complete the comprehensive document formatting competency exam, submit project proofs, and review client service standards.',
          concepts: ['Quality assurance checklist before client delivery', 'Font embedding in Word to prevent font substitution errors'],
          simpleEnglishGuide: 'Under Word Options -> Save -> check "Embed fonts in the file". If your client does not have the custom font installed on their computer, embedding ensures the document still looks 100% identical on their screen.',
          malayalamNotes: 'ഫയലുകൾ അയക്കുന്നതിന് മുൻപ് ഫോണ്ടുകൾ എംബഡ് ചെയ്ത് സൂക്ഷിക്കുന്ന രീതി.',
          officialDocLinks: [{ title: 'Embed fonts in Word or PowerPoint', url: 'https://support.microsoft.com/en-us/office/embed-fonts-in-word-or-powerpoint-cb3982cd-01f7-47a8-b50e-b634f49fb534' }],
          videoResources: [{
            title: 'First 30 Days as a Freelance Document Formatter — Pro Tips',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=freelance+document+formatter+tips',
            language: 'English',
            duration: '18 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Submit your 3 project links to the Career Launchpad Skill Assessment system.',
            tasks: ['Verify all project links are public and accessible', 'Review your verified completion badge']
          },
          quiz: [{
            id: 'q-doc-20',
            question: 'Why should "Embed fonts in the file" be checked before emailing a Word (.docx) document to a client?',
            options: ['It makes the file download faster', 'It ensures custom fonts display properly on the client\'s computer even if they do not have those specific fonts installed', 'It translates the file', 'It deletes headers'],
            correctOptionIndex: 1,
            explanation: 'Embedding fonts guarantees visual fidelity by packing font glyphs directly inside the document package.'
          }]
        }
      ]
    }
  ],
  projects: [
    {
      id: 'proj-doc-1',
      title: 'Executive White Paper Makeover & Styles Hierarchy',
      titleMl: 'എക്സിക്യൂട്ടീവ് വൈറ്റ് പേപ്പർ ഫോർമാറ്റിംഗ്',
      description: 'Transform an unformatted, chaotic 8-page market analysis manuscript into an executive white paper with custom styles, callout panels, and cover design.',
      scenario: 'An environmental consultancy drafted an 8-page white paper on renewable energy adoption. It has irregular fonts, manual bullet characters, zero styles, and broken margins. You must convert it into a publication-quality corporate publication.',
      instructions: [
        'Open the raw manuscript text in Word or Google Docs',
        'Configure a custom Style Palette: Title, Subtitle, Heading 1 (18pt Bold Primary Navy), Heading 2 (14pt Bold Slate), Normal Body (11pt with 1.2 line spacing and 6pt after)',
        'Design a clean, modern cover page with metadata fields (Title, Subtitle, Author, Date, Version 1.0)',
        'Convert 3 important insights into single-cell callout boxes with colored left accent borders',
        'Export as a tagged accessible PDF with active bookmark navigation'
      ],
      deliverables: [
        'The formatted editable Microsoft Word file (.docx)',
        'The final interactive PDF with clickable bookmarks enabled'
      ],
      downloadableDataFilename: 'raw_white_paper_manuscript.txt',
      downloadableDataContent: 'RENEWABLE ENERGY ADOPTION IN SOUTH INDIA\nChallenges and Economic Roadmaps for 2026-2030\nBy Center for Policy Research\n\nExecutive Summary\nSouth India currently generates 38% of its regional electricity from renewable sources. However, grid congestion and agricultural storage limitations remain major bottlenecks.\n\n1. Current Infrastructure Bottlenecks\nThe regional transmission grid was originally engineered for centralized thermal generators. When seasonal monsoon winds peak in Tamil Nadu, thousands of megawatt-hours of wind energy are curtailed.\n\nKey Takeaway: Over 14% of harvestable clean energy is lost annually due to sub-station line capacity caps.',
      gradingRubric: [
        { criterion: 'Style Palette Consistency', weight: 40, standard: '100% of headings and body text use predefined styles with zero manual font overrides.' },
        { criterion: 'Callout Box Implementation', weight: 35, standard: 'Callouts use table-based inline borders that never glitch across page breaks.' },
        { criterion: 'PDF Accessibility & Bookmarks', weight: 25, standard: 'Exported PDF contains working interactive bookmark tree matching H1 and H2 levels.' }
      ],
      modelSolutionOverview: 'The completed white paper features a navy-and-teal corporate theme, perfect 1-inch margins, formatted callout boxes, and an unbroken visual hierarchy.'
    },
    {
      id: 'proj-doc-2',
      title: 'Multi-Section Complex Report (Roman Numerals & Landscape Tables)',
      titleMl: 'മൾട്ടി-സെക്ഷൻ കോർപ്പറേറ്റ് റിപ്പോർട്ട്',
      description: 'Format a 12-page annual operational report featuring distinct section breaks, Roman numeral front matter, and an orientation switch for a wide financial table.',
      scenario: 'A healthcare logistics company needs their annual compliance report prepared. Page 1 is the cover (no numbering), Pages 2-3 are Executive Summary and automated TOC (numbered i, ii), Page 4 starts Chapter 1 (numbered Page 1), and Page 7 contains a wide 8-column financial table that MUST be displayed in Landscape orientation without breaking overall page numbering.',
      instructions: [
        'Implement Section Breaks (Next Page) between front matter and Chapter 1',
        'Configure different page numbering: Roman (i, ii) for front matter, Arabic (1, 2, 3) starting at 1 on Chapter 1',
        'Isolate Page 7 with Section Breaks before and after, switching Page 7 orientation to Landscape',
        'Enable "Repeat as header row at top of each page" on the wide financial table',
        'Generate and update an automated Table of Contents with dot leaders'
      ],
      deliverables: [
        'The completed .docx report file with verified section breaks',
        'Exported PDF verifying that Page 7 is Landscape and page numbering remains continuous'
      ],
      gradingRubric: [
        { criterion: 'Section Break & Orientation Isolation', weight: 40, standard: 'Page 7 is correctly Landscape while adjacent pages remain Portrait with continuous headers.' },
        { criterion: 'Page Numbering Transitions', weight: 35, standard: 'Cover has no number, front matter uses Roman numerals, and Chapter 1 restarts at Page 1.' },
        { criterion: 'Table Header Repetition', weight: 25, standard: 'The multi-page table repeats its top column header row cleanly across page splits.' }
      ],
      modelSolutionOverview: 'The document flawlessly demonstrates section break mastery: headers adapt to landscape geometry, page numbers sequence accurately, and the automated TOC matches the final PDF.'
    },
    {
      id: 'proj-doc-3',
      title: 'Before & After Document Makeover Portfolio Dossier',
      titleMl: 'ബിഫോർ & ആഫ്റ്റർ പോർട്ട്ഫോളിയോ ഡോസിയർ',
      description: 'Create a 3-case study client showcase displaying side-by-side Before & After transformations of an academic thesis, corporate proposal, and technical guide.',
      scenario: 'To win high-paying freelance formatting contracts, you need a portfolio that proves your design impact. You will assemble 3 before-and-after visual case studies into a single presentation document.',
      instructions: [
        'Select 3 diverse document types (Academic paper, Business proposal, Technical manual)',
        'Capture screenshot snippets of the original chaotic text (unaligned margins, awkward breaks, bad fonts)',
        'Capture matching high-resolution snippets of your formatted masterpiece',
        'Write a 2-paragraph technical explanation for each case study highlighting the exact problems solved',
        'Compile into an elegant 6-page Document Formatting Portfolio PDF'
      ],
      deliverables: [
        'Document Formatting Portfolio PDF ready for uploading to Upwork, Fiverr, or sending to corporate prospects'
      ],
      gradingRubric: [
        { criterion: 'Visual Comparison Impact', weight: 40, standard: 'Before-and-after comparisons immediately communicate dramatic professional elevation.' },
        { criterion: 'Technical Explanation Quality', weight: 35, standard: 'Accurately explains styles, typography, table alignment, and pagination fixes.' },
        { criterion: 'Self-Referential Polish', weight: 25, standard: 'The portfolio document itself is impeccably formatted, serving as living proof of skill.' }
      ],
      modelSolutionOverview: 'The portfolio document serves as its own best advertisement: clean typography, elegant card borders, verified client testimonials placeholders, and clear contact links.'
    }
  ],
  workplaceGuidance: {
    firstWeek: [
      'Always request the client\'s official Brand Guidelines (fonts, hex color codes, logo files) before starting formatting.',
      'Check if the client uses Microsoft Word on Windows, Word on Mac, or Google Docs, as line-break rendering can vary slightly.',
      'Always turn on Word\'s "Show/Hide ¶ (Non-printing characters)" button (Ctrl+Shift+8) so you can see hidden manual breaks, tabs, and spaces.',
      'Save incremental version backups every 30 minutes: e.g. "Report_v1", "Report_v2".'
    ],
    firstMonth: [
      'Create your own master template library of pre-styled headings, callout boxes, and tables to speed up future client jobs.',
      'Always test print 2-3 sample pages on physical paper (or inspect at 100% zoom) to verify font readability.',
      'Check for embedded image compression settings so high-resolution client photos do not turn blurry upon saving.'
    ],
    commonMistakes: [
      'Pressing the Enter key repeatedly to push text to the next page instead of using a clean Page Break (Ctrl+Enter).',
      'Using floating text boxes that jump position or overlap body paragraphs when opened on a different computer.',
      'Leaving "Track Changes" or editorial review comment bubbles visible in the final delivered client PDF.'
    ]
  },
  interviewPrep: [
    {
      question: 'How do you switch a single page in the middle of a 50-page document to Landscape without turning the entire document sideways?',
      answer: 'I insert a "Section Break (Next Page)" immediately before the target page, and another "Section Break (Next Page)" immediately after it. Then, I place my cursor on that isolated page, go to Layout -> Orientation, and choose Landscape. Finally, I unlink the headers and footers ("Link to Previous") in that section so the page numbers and header margins adjust cleanly to the wider page width.',
      tips: 'A classic technical test question that proves you understand document section architecture.'
    },
    {
      question: 'What do you do if a client sends you an unformatted document with 200 paragraphs separated by double Enter presses and random spacing?',
      answer: 'I use Word\'s Find and Replace with special characters. In the Find field I enter "^p^p" (two paragraph marks) and replace with "^p" (single paragraph mark). Then I apply a consistent Style to the body text with "Space After" set to 6pt. This cleans hundreds of inconsistent gaps in 5 seconds without manual editing.',
      tips: 'Demonstrates power-user speed and knowledge of regex/special search operators.'
    },
    {
      question: 'Why is it important to export PDFs with accessibility tags and bookmarks enabled?',
      answer: 'Accessible PDFs allow visually impaired readers using assistive screen readers to navigate headings sequentially. Furthermore, it automatically builds an interactive clickable bookmark table in Adobe Acrobat and web browsers, allowing readers to navigate long reports with a single click.',
      tips: 'Shows empathy, modern accessibility awareness, and technical thoroughness.'
    }
  ]
};
