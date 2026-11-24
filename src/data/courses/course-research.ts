import { Course } from '@/types';

export const webResearchCourse: Course = {
  id: 'course-research',
  careerSlug: 'web-research-assistance',
  title: 'Web & Market Research Assistant (30 Days)',
  titleMl: 'വെബ് & മാർക്കറ്റ് റിസേർച്ച് അസിസ്റ്റന്റ് (30 ദിവസങ്ങൾ)',
  durationDays: 30,
  weeklyGoals: [
    {
      weekNumber: 1,
      title: 'Advanced Search Operators & Boolean Logic',
      objective: 'Master Google advanced search operators (site:, filetype:, intitle:, OR, exclusion -), finding unindexed documents and primary sources.'
    },
    {
      weekNumber: 2,
      title: 'Company Profiling, Decision Makers & Contact Verification',
      objective: 'Locate verified B2B corporate directories, find key decision-maker emails, and verify deliverability using free lookup tools.'
    },
    {
      weekNumber: 3,
      title: 'Competitive Intelligence & Price Comparison Grids',
      objective: 'Structure competitive pricing matrices, feature comparison grids, customer review sentiment analysis, and market SWOT summaries.'
    },
    {
      weekNumber: 4,
      title: 'Dossier Assembly, Executive Briefings & Career Launch',
      objective: 'Compile professional research dossiers with primary source citations, build an ATS resume, and apply for remote research roles.'
    },
    {
      weekNumber: 5,
      title: 'Week 5: B2B Lead Generation, Registry Lookups & Competitor Analysis',
      objective: 'Master LinkedIn Boolean search, Ministry of Corporate Affairs (MCA) verification, and pricing benchmarking.'
    },
    {
      weekNumber: 6,
      title: 'Week 6: Data Synthesis, Executive Briefs & Market Research Launch',
      objective: 'Synthesize industry whitepapers into 2-page executive briefs, assemble research dossiers, and land research roles.'
    }
    ],

  modules: [
    {
      id: 'mod-res-1',
      weekNumber: 1,
      title: 'Week 1: Advanced Search Operators & Boolean Syntax',
      titleMl: 'ആഴ്ച 1: ഗൂഗിൾ അഡ്വാൻസ്ഡ് സെർച്ച് ഓപ്പറേറ്ററുകൾ',
      objective: 'Learn how to find exactly what you need in seconds without wading through pages of sponsored blog spam.',
      lessons: [
        {
          id: 'les-res-1',
          dayNumber: 1,
          title: 'The Google Search Operator Toolkit: Beyond Ordinary Browsing',
          titleMl: 'ഡേ 1: ഗൂഗിൾ സെർച്ച് ഓപ്പറേറ്ററുകൾ പഠിക്കാം',
          durationMinutes: 45,
          overview: 'Master quotation marks for exact phrases, the minus sign (-) to exclude words, and the site: operator to search inside specific domains.',
          concepts: ['Exact phrase matching: "solar panel distributors in Kerala"', 'Excluding noise: -jobs -amazon', 'Domain search: site:gov.in or site:linkedin.com'],
          simpleEnglishGuide: 'If you search for solar panels, you will get millions of shopping ads. If you search: "distributor" "kerala" -amazon -flipkart site:.in, you will find genuine local business wholesalers in 10 seconds.',
          malayalamNotes: 'ഗൂഗിളിൽ ആവശ്യമില്ലാത്ത പരസ്യങ്ങൾ ഒഴിവാക്കി കൃത്യമായ വിവരങ്ങൾ കണ്ടെത്താനുള്ള സെർച്ച് വിദ്യകൾ.',
          officialDocLinks: [{ title: 'Refine Google searches with operators', url: 'https://support.google.com/websearch/answer/2466433' }],
          videoResources: [{
            title: 'Google Advanced Search Operators — Full Guide',
            provider: 'YouTube Tech Training',
            url: 'https://www.youtube.com/results?search_query=google+advanced+search+operators+tutorial',
            language: 'English',
            duration: '18 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Execute 5 targeted search queries using exact operators.',
            tasks: ['Find government agricultural reports using: filetype:pdf site:gov.in "organic farming"', 'Find verified electronics suppliers using: site:tradeindia.com "LED component"']
          },
          quiz: [{
            id: 'q-res-1',
            question: 'What search operator restricts results to documents published on government websites?',
            options: ['gov=true', 'site:gov.in or site:gov', 'type:government', 'in:official'],
            correctOptionIndex: 1,
            explanation: 'The "site:" operator restricts search results exclusively to the specified top-level or domain host.'
          }]
        },
        {
          id: 'les-res-2',
          dayNumber: 2,
          title: 'Hunting Hidden Documents: filetype:pdf, xlsx, pptx',
          titleMl: 'ഡേ 2: പിഡിഎഫ്, എക്സൽ ഫയലുകൾ നേരിട്ട് കണ്ടെത്തൽ',
          durationMinutes: 50,
          overview: 'Learn how to uncover unpublished industry reports, data spreadsheets, and corporate presentations stored openly on web servers.',
          concepts: ['filetype:pdf for white papers and research studies', 'filetype:xlsx for open industry statistics tables', 'filetype:pptx for conference slide decks'],
          simpleEnglishGuide: 'The best market research is hidden inside corporate PDF reports that do not have direct web articles written about them. Using filetype:pdf finds these goldmines instantly.',
          malayalamNotes: 'വെബ്സൈറ്റുകളിൽ ഒളിഞ്ഞിരിക്കുന്ന പിഡിഎഫുകളും എക്സൽ ഷീറ്റുകളും കണ്ടെത്താൻ filetype: ഉപയോഗിക്കുന്നു.',
          officialDocLinks: [{ title: 'Google Search File Type Operators', url: 'https://support.google.com' }],
          videoResources: [{
            title: 'How to Find Hidden Research Papers & Data Using Google',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=how+to+find+research+papers+filetype+google',
            language: 'English',
            duration: '16 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Locate 3 primary market research PDF documents on renewable energy in India.',
            tasks: ['Extract publication dates, publisher organizations, and record direct download URLs']
          },
          quiz: [{
            id: 'q-res-2',
            question: 'Which query finds official PDF white papers on electric vehicle adoption published by Indian government bodies?',
            options: ['electric vehicle government', 'filetype:pdf site:gov.in "electric vehicle" adoption', 'find pdf ev india', 'ev.pdf.gov'],
            correctOptionIndex: 1,
            explanation: 'Combining filetype:pdf and site:gov.in with exact keywords isolates official institutional research.'
          }]
        },
        {
          id: 'les-res-3',
          dayNumber: 3,
          title: 'Source Verification & Spotting Hallucinated Data',
          titleMl: 'ഡേ 3: വിവരങ്ങളുടെ ആധികാരികത പരിശോധിക്കൽ',
          durationMinutes: 50,
          overview: 'Never cite blog summaries; always find the original primary source. Verify the author, date, methodology, and funding behind online statistics.',
          concepts: ['Primary vs Secondary sources', 'Identifying outdated statistics copied across blog spam', 'Cross-referencing numbers across 2 independent sources'],
          simpleEnglishGuide: 'If a blog article says "70% of businesses fail in year one", do not just repeat it. Find the original study: Who conducted it? When? In what country? Factual accuracy is your superpower.',
          malayalamNotes: 'വ്യാജ വിവരങ്ങളും പഴയ കണക്കുകളും തിരിച്ചറിഞ്ഞ് യഥാർത്ഥ വിവരങ്ങൾ മാത്രം തിരഞ്ഞെടുക്കുന്ന രീതി.',
          officialDocLinks: [{ title: 'Evaluating Online Information Sources', url: 'https://owl.purdue.edu' }],
          videoResources: [{
            title: 'How to Fact-Check & Verify Information Like a Professional Researcher',
            provider: 'YouTube Research Training',
            url: 'https://www.youtube.com/results?search_query=how+to+verify+online+sources+researcher',
            language: 'English',
            duration: '19 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Take an oft-repeated internet statistic (e.g. "Global coffee consumption statistics").',
            tasks: ['Trace it back to the original primary research study (e.g. International Coffee Organization report)', 'Record the original sample size, year, and author']
          },
          quiz: [{
            id: 'q-res-3',
            question: 'What is a "Primary Source" in business research?',
            options: ['A random blog post', 'The original, firsthand study, government census, or corporate audited report that generated the data', 'A social media comment', 'A Wikipedia page'],
            correctOptionIndex: 1,
            explanation: 'Primary sources represent original empirical research or direct firsthand data records.'
          }]
        },
        {
          id: 'les-res-4',
          dayNumber: 4,
          title: 'Organizing Research Findings into Structured Spreadsheets',
          titleMl: 'ഡേ 4: കണ്ടെത്തിയ വിവരങ്ങൾ ഷീറ്റിൽ ക്രമീകരിക്കൽ',
          durationMinutes: 45,
          overview: 'Structure raw findings into Google Sheets with clean source citations, direct hyperlinks, capture dates, and key takeaways.',
          concepts: ['Standard research column taxonomy (Topic, Fact/Stat, Direct URL, Source Organization, Date Verified, Confidence Level)'],
          simpleEnglishGuide: 'Never send a client a wall of text. Present findings in a clean Google Sheet with clickable links and 1-sentence takeaways. Busy leaders love fast scanning.',
          malayalamNotes: 'വിവരങ്ങൾ തൊഴിലുടമകൾക്ക് വായിക്കാൻ എളുപ്പമുള്ള രീതിയിൽ ഷീറ്റിൽ രേഖപ്പെടുത്തുന്നു.',
          officialDocLinks: [{ title: 'Google Sheets Data Organization', url: 'https://docs.google.com' }],
          videoResources: [{
            title: 'How to Structure Market Research Data in Google Sheets',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=structure+market+research+data+sheets',
            language: 'English',
            duration: '15 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Build a Research Fact-Sheet in Google Sheets on "Cloud Kitchen Trends in India".',
            tasks: ['Collect 10 verified data points from credible publications with full hyperlinks and capture dates']
          },
          quiz: [{
            id: 'q-res-4',
            question: 'Why should a research spreadsheet always include a "Date Verified" column?',
            options: ['To see what day it is', 'Because market statistics become outdated quickly, and readers need to know how fresh the data is', 'Spreadsheets require dates to save', 'To count days'],
            correctOptionIndex: 1,
            explanation: 'Data freshness is critical; citations without verification dates may unknowingly cite years-old obsolete figures.'
          }]
        },
        {
          id: 'les-res-5',
          dayNumber: 5,
          title: 'Week 1 Review: Timed Information Retrieval Drill',
          titleMl: 'ഡേ 5: ആഴ്ച 1 വിവരശേഖരണ പരീക്ഷ',
          durationMinutes: 60,
          overview: 'Complete a timed challenge: Locate 5 specific, obscure corporate facts (e.g. CEO of a private supplier, factory address, export volume) in under 30 minutes.',
          concepts: ['Consolidation of search operator techniques'],
          simpleEnglishGuide: 'Speed comes from combining operators. When you master site: and exact phrases, you outpace anyone browsing Google normally.',
          malayalamNotes: 'കുറഞ്ഞ സമയം കൊണ്ട് കൃത്യമായ വിവരങ്ങൾ കണ്ടെത്തി സമർപ്പിക്കുന്ന പ്രാക്ടിക്കൽ ടെസ്റ്റ്.',
          officialDocLinks: [{ title: 'Advanced Google Search Guide', url: 'https://support.google.com' }],
          videoResources: [{
            title: 'Timed Web Research Challenge Walkthrough',
            provider: 'YouTube Research Training',
            url: 'https://www.youtube.com/results?search_query=web+research+challenge+walkthrough',
            language: 'English',
            duration: '20 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Complete the 5-question scavenger hunt dossier and document the exact search query strings used to find each answer.',
            tasks: ['Verify all answers link directly to official primary domains']
          },
          quiz: [{
            id: 'q-res-5',
            question: 'Which query string finds the official registered company address from an Indian MCA corporate filing?',
            options: ['address company', 'site:zaubacorp.com or site:tofler.in "Company Name" "Registered Office"', 'search address on map', 'call company'],
            correctOptionIndex: 1,
            explanation: 'Targeting authoritative corporate registries like Zauba Corp or Tofler yields officially filed corporate addresses.'
          }]
        }
      ]
    },
    {
      id: 'mod-res-2',
      weekNumber: 2,
      title: 'Week 2: B2B Company Profiling & Lead Verification',
      titleMl: 'ആഴ്ച 2: കമ്പനി പ്രൊഫൈലുകളും കോൺടാക്റ്റ് വെരിഫിക്കേഷനും',
      objective: 'Locate decision-maker profiles, understand corporate structures, and verify email deliverability without bouncebacks.',
      lessons: [
        {
          id: 'les-res-6',
          dayNumber: 6,
          title: 'B2B Company Profiling: Corporate Registries & LinkedIn',
          titleMl: 'ഡേ 6: കമ്പനി വിവരങ്ങൾ കണ്ടെത്തൽ',
          durationMinutes: 50,
          overview: 'Profile target companies: Year founded, employee headcount, headquarters, subsidiary brands, and key executives using LinkedIn and corporate directories.',
          concepts: ['LinkedIn company page insights', 'Reading business directories (ZaubaCorp, Crunchbase Free, Industry Associations)'],
          simpleEnglishGuide: 'Before pitching a business, leaders need to know: Who runs it? Where is their main office? How many people work there? You gather this profile.',
          malayalamNotes: 'കമ്പനികളുടെ ഡയറക്ടർമാർ, ലൊക്കേഷൻ, ജീവനക്കാരുടെ എണ്ണം എന്നിവ കൃത്യമായി കണ്ടെത്താൻ പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'LinkedIn Company Search Guide', url: 'https://www.linkedin.com/help' }],
          videoResources: [{
            title: 'How to Research Companies on LinkedIn for Beginners',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=how+to+research+companies+on+linkedin',
            language: 'English',
            duration: '18 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Build a detailed 1-page Company Profile for 3 mid-sized Indian food processing brands.',
            tasks: ['Record Founding Year, Headquarters, Director Names, Estimated Employee Count, and Product Lines']
          },
          quiz: [{
            id: 'q-res-6',
            question: 'What is the most reliable public source for finding verified corporate director names in India?',
            options: ['Instagram posts', 'Ministry of Corporate Affairs (MCA) filings via registries like ZaubaCorp or Tofler', 'Blog comments', 'WhatsApp forwards'],
            correctOptionIndex: 1,
            explanation: 'MCA corporate filings are legally binding public records of official company directorships.'
          }]
        },
        {
          id: 'les-res-7',
          dayNumber: 7,
          title: 'Decision-Maker Discovery: Identifying Who Has Buying Power',
          titleMl: 'ഡേ 7: പ്രധാന തീരുമാനങ്ങൾ എടുക്കുന്ന ഉദ്യോഗസ്ഥരെ കണ്ടെത്തൽ',
          durationMinutes: 50,
          overview: 'Learn corporate job titles and who actually holds the budget: CEO, Founder, VP Procurement, Head of Supply Chain, or Operations Director.',
          concepts: ['Title hierarchies (C-Suite vs Directors vs Managers)', 'Using Boolean operators on LinkedIn to locate exact roles'],
          simpleEnglishGuide: 'Do not collect random employee emails. If a client sells packaging boxes, the person who buys them is the "Procurement Manager" or "Supply Chain Head". Find the right person.',
          malayalamNotes: 'ബിസിനസ്സിൽ പർച്ചേസ് തീരുമാനങ്ങൾ എടുക്കുന്ന പ്രധാന ഉദ്യോഗസ്ഥരെ കണ്ടെത്തുന്നു.',
          officialDocLinks: [{ title: 'Using Boolean search on LinkedIn', url: 'https://www.linkedin.com/help/linkedin/answer/a524335' }],
          videoResources: [{
            title: 'How to Find Decision Makers on LinkedIn for Free',
            provider: 'YouTube B2B Training',
            url: 'https://www.youtube.com/results?search_query=find+decision+makers+linkedin+free',
            language: 'English',
            duration: '17 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Find the specific Procurement or Operations Lead for 5 manufacturing brands in South India.',
            tasks: ['Record Full Name, Title, and LinkedIn Profile URL']
          },
          quiz: [{
            id: 'q-res-7',
            question: 'If a company sells warehouse logistics software, which decision-maker title is the primary target?',
            options: ['Junior Graphic Design Intern', 'VP of Logistics / Supply Chain Director / Operations Lead', 'Social Media Moderator', 'Receptionist'],
            correctOptionIndex: 1,
            explanation: 'Operations and Supply Chain leaders hold departmental budget authority for logistics software.'
          }]
        },
        {
          id: 'les-res-8',
          dayNumber: 8,
          title: 'Email Permutations & Verification (Hunter, NeverBounce)',
          titleMl: 'ഡേ 8: ഇമെയിൽ കണ്ടെത്തലും വാലിഡേഷനും',
          durationMinutes: 50,
          overview: 'Learn corporate email patterns (first.last@company.com, first@company.com) and verify deliverability without sending emails.',
          concepts: ['Domain email pattern discovery', 'Free email verification tools (Hunter.io, Mailtester)', 'Understanding MX records'],
          simpleEnglishGuide: 'Never guess and send blind emails that bounce. Check the domain email format and test the address with free verification tools first.',
          malayalamNotes: 'കമ്പനി ഇമെയിലുകൾ കണ്ടെത്താനും അവ നിലവിലുണ്ടോ എന്ന് പരിശോധിക്കാനുമുള്ള ടൂളുകൾ.',
          officialDocLinks: [{ title: 'Hunter.io Email Verification Knowledge Base', url: 'https://help.hunter.io' }],
          videoResources: [{
            title: 'How to Find and Verify Professional Email Addresses for Free',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=how+to+find+and+verify+email+addresses+free',
            language: 'English',
            duration: '18 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Find and verify email patterns for 10 corporate domains.',
            tasks: ['Identify standard company email pattern (e.g. {first}.{last}@domain.com)', 'Verify deliverability status using free testing tools']
          },
          quiz: [{
            id: 'q-res-8',
            question: 'Why must research assistants verify email addresses before giving them to a client sales team?',
            options: ['To change the password', 'Because sending to invalid/bounced emails destroys the client\'s domain reputation and flags them as spammers', 'To read the emails', 'Verification sends money'],
            correctOptionIndex: 1,
            explanation: 'High email bounce rates trigger automated spam filters and blacklist corporate sending domains.'
          }]
        },
        {
          id: 'les-res-9',
          dayNumber: 9,
          title: 'Ethical Lead Sourcing: Zero Scraping of Personal Private Data',
          titleMl: 'ഡേ 9: ധാർമ്മികമായ ലീഡ് കളക്ഷൻ നിയമങ്ങൾ',
          durationMinutes: 45,
          overview: 'Understand ethical boundaries: collect business-to-business corporate contacts only; NEVER collect private personal phone numbers or scrape behind logins.',
          concepts: ['B2B corporate contacts vs private personal data', 'Respecting terms of service and robots.txt protocols'],
          simpleEnglishGuide: 'Collecting a corporate office phone number or professional work email is legitimate B2B research. Hacking private personal numbers or scraping confidential data is illegal and unethical. Stay strictly ethical.',
          malayalamNotes: 'വ്യക്തിഗത വിവരങ്ങൾ ചോർത്താതെ, പരസ്യമായി ലഭ്യമായ ഔദ്യോഗിക ബിസിനസ്സ് വിവരങ്ങൾ മാത്രം ശേഖരിക്കൽ.',
          officialDocLinks: [{ title: 'Ethical Web Scraping and Data Guidelines', url: 'https://en.wikipedia.org/wiki/Robots.txt' }],
          videoResources: [{
            title: 'Ethical Data Collection & Privacy Laws for Researchers',
            provider: 'YouTube Legal & Tech',
            url: 'https://www.youtube.com/results?search_query=ethical+web+research+data+privacy',
            language: 'English',
            duration: '16 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Draft a Data Compliance Statement for your research reports stating adherence to ethical public B2B data standards.',
            tasks: ['Include confirmation that zero private personal data was harvested']
          },
          quiz: [{
            id: 'q-res-9',
            question: 'What distinguishes ethical B2B web research from illegal private data harvesting?',
            options: ['The speed of search', 'Ethical research collects public commercial corporate contact points with proper source attribution; illegal harvesting collects unconsented personal private data', 'There is no difference', 'It depends on font size'],
            correctOptionIndex: 1,
            explanation: 'Public commercial organizational data is legitimate to index, whereas private individual data carries strict privacy protections.'
          }]
        },
        {
          id: 'les-res-10',
          dayNumber: 10,
          title: 'Week 2 Review: 25-Contact Verified Industry Directory Drill',
          titleMl: 'ഡേ 10: ആഴ്ച 2 കോൺടാക്റ്റ് ഡയറക്ടറി പരീക്ഷ',
          durationMinutes: 60,
          overview: 'Build a verified 25-contact B2B directory in Google Sheets with verified work emails, titles, company domains, and LinkedIn profiles.',
          concepts: ['Consolidation of profiling and verification skills'],
          simpleEnglishGuide: 'A list of 25 verified, 100% accurate decision-maker contacts is worth 100 times more to a client than a dirty list of 500 bounced emails.',
          malayalamNotes: '25 കമ്പനികളിലെ പ്രധാന ഉദ്യോഗസ്ഥരുടെ വിവരങ്ങൾ പൂർണ്ണമായി ശേഖരിച്ച് പരിശോധിക്കുന്നു.',
          officialDocLinks: [{ title: 'Google Sheets Data Standards', url: 'https://docs.google.com' }],
          videoResources: [{
            title: 'Building a High Quality B2B Lead List in Google Sheets',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=build+b2b+lead+list+google+sheets',
            language: 'English',
            duration: '22 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Compile your 25-contact directory for South Indian renewable energy firms.',
            tasks: ['Verify 100% of emails have validated delivery status and working LinkedIn links']
          },
          quiz: [{
            id: 'q-res-10',
            question: 'What is the most valuable attribute of a prospective lead list created by a research assistant?',
            options: ['Having 10,000 unverified names', '100% verified accuracy and deliverability of target decision-maker contacts', 'Using colorful fonts', 'Random phone numbers'],
            correctOptionIndex: 1,
            explanation: 'Data accuracy and deliverability prevent wasted sales effort and ensure immediate ROI.'
          }]
        }
      ]
    },
    {
      id: 'mod-res-3',
      weekNumber: 3,
      title: 'Week 3: Competitive Intelligence & Price Comparison',
      titleMl: 'ആഴ്ച 3: വിപണി മത്സര വിശകലനവും വില താരതമ്യവും',
      objective: 'Build comprehensive competitor comparison grids, analyze pricing tiers, summarize customer reviews, and extract market opportunities.',
      lessons: [
        {
          id: 'les-res-11',
          dayNumber: 11,
          title: 'Building a Competitor Feature Comparison Grid',
          titleMl: 'ഡേ 11: കോംപറ്റിറ്റർ ഫീച്ചർ താരതമ്യം',
          durationMinutes: 50,
          overview: 'Analyze 5 rival products or services across standardized feature vectors: pricing, guarantees, delivery speeds, integrations, and reviews.',
          concepts: ['Feature matrix taxonomy', 'Tick/cross matrix with footnote annotations explaining exact plan limitations'],
          simpleEnglishGuide: 'Put Competitor A, B, and C in columns side-by-side. Compare: Who offers free delivery? Who has 24/7 support? Who charges for onboarding? The grid reveals the market gaps.',
          malayalamNotes: 'വിപണിയിലെ പ്രധാന എതിരാളികളുടെ ഉൽപ്പന്നങ്ങളും സേവനങ്ങളും തമ്മിൽ താരതമ്യം ചെയ്യുന്ന രീതി.',
          officialDocLinks: [{ title: 'Competitive Analysis Frameworks', url: 'https://en.wikipedia.org/wiki/Competitor_analysis' }],
          videoResources: [{
            title: 'How to Do a Competitor Analysis in Google Sheets',
            provider: 'YouTube Business Training',
            url: 'https://www.youtube.com/results?search_query=competitor+analysis+spreadsheet+tutorial',
            language: 'English',
            duration: '20 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Create a Feature Comparison Grid comparing 4 major project management software tools (Asana, Trello, ClickUp, Monday).',
            tasks: ['Compare Free Plan user limits, Storage, Gantt Chart access, and Paid Starting Price']
          },
          quiz: [{
            id: 'q-res-11',
            question: 'What is the primary strategic goal of a Competitor Feature Grid for an executive?',
            options: ['To copy competitors blindly', 'To immediately identify market gaps and features where the client can differentiate and win', 'To make enemies', 'To reduce prices only'],
            correctOptionIndex: 1,
            explanation: 'Competitive grids expose unmet customer needs and underserved feature gaps in the market.'
          }]
        },
        {
          id: 'les-res-12',
          dayNumber: 12,
          title: 'Pricing Strategy Analysis & Hidden Cost Research',
          titleMl: 'ഡേ 12: വിപണി വിലകളും മറഞ്ഞിരിക്കുന്ന ചെലവുകളും',
          durationMinutes: 50,
          overview: 'Investigate competitor pricing models: subscription tiers, usage billing, onboarding fees, annual vs monthly discounts, and cancellation penalties.',
          concepts: ['Decoupling base price from add-on fees', 'Total Cost of Ownership (TCO) calculations'],
          simpleEnglishGuide: 'Do not just write "Price is ₹999/month". Check the small print: Do they charge extra for setup? Is there a minimum 1-year contract? Document the true total cost.',
          malayalamNotes: 'എതിരാളികളുടെ വിലകളും അധിക ചാർജുകളും കൃത്യമായി പഠിച്ച് താരതമ്യം ചെയ്യുന്നു.',
          officialDocLinks: [{ title: 'Pricing Models Overview', url: 'https://en.wikipedia.org/wiki/Pricing_strategies' }],
          videoResources: [{
            title: 'How to Analyze Competitor Pricing Models',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=competitor+pricing+analysis+tutorial',
            language: 'English',
            duration: '18 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Analyze pricing tiers of 3 Indian web hosting providers (Hostinger, Bluehost, Namecheap).',
            tasks: ['Calculate true 1st Year Cost vs Renewal Year Cost', 'Highlight renewal price hikes in a comparison table']
          },
          quiz: [{
            id: 'q-res-12',
            question: 'Why is it critical to record "Renewal Pricing" when researching subscription services?',
            options: ['It changes colors', 'Many providers offer deep introductory discounts that double or triple upon annual renewal, hiding the true long-term cost', 'Renewal never happens', 'It is required by law'],
            correctOptionIndex: 1,
            explanation: 'Introductory discounts conceal the real recurring operating expense.'
          }]
        },
        {
          id: 'les-res-13',
          dayNumber: 13,
          title: 'Review Mining: Extracting Customer Sentiment & Complaints',
          titleMl: 'ഡേ 13: കസ്റ്റമർ റിവ്യൂകൾ പരിശോധിച്ച് പഠിക്കൽ',
          durationMinutes: 50,
          overview: 'Mine public review platforms (Trustpilot, Google Maps Reviews, G2, Amazon Reviews) to uncover what customers hate about competitors.',
          concepts: ['1-star and 2-star review pattern analysis', 'Common complaint clustering (e.g. slow shipping, rude support, hidden fees)'],
          simpleEnglishGuide: 'The best business ideas come from reading 1-star reviews of big competitors. If 50 people complain that Competitor X never answers phone calls, your client can win by advertising 24/7 instant WhatsApp support.',
          malayalamNotes: 'എതിരാളികളുടെ നെഗറ്റീവ് റിവ്യൂകൾ പരിശോധിച്ച് ഉപഭോക്താക്കളുടെ ആവശ്യങ്ങൾ മനസ്സിലാക്കുന്നു.',
          officialDocLinks: [{ title: 'G2 Review Standards', url: 'https://www.g2.com' }],
          videoResources: [{
            title: 'How to Do Customer Review Mining for Market Research',
            provider: 'YouTube Marketing Training',
            url: 'https://www.youtube.com/results?search_query=review+mining+market+research+tutorial',
            language: 'English',
            duration: '19 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Analyze 30 customer reviews of a popular online grocery delivery service.',
            tasks: ['Cluster the top 3 recurring customer frustrations into an Executive Insight Brief']
          },
          quiz: [{
            id: 'q-res-13',
            question: 'What is the greatest business value of analyzing 1-star and 2-star reviews of competitors?',
            options: ['To laugh at them', 'To discover the exact service failures that frustrate customers so your business can solve them and win market share', 'To delete reviews', 'To report competitors'],
            correctOptionIndex: 1,
            explanation: 'Competitor complaints expose market weaknesses that new market entrants can capitalize upon.'
          }]
        },
        {
          id: 'les-res-14',
          dayNumber: 14,
          title: 'SWOT Analysis Synthesis & Market Positioning',
          titleMl: 'ഡേ 14: സ്വാട്ട് (SWOT) അനാലിസിസ് തയ്യാറാക്കൽ',
          durationMinutes: 50,
          overview: 'Synthesize research into a classic 2x2 SWOT grid: Strengths, Weaknesses, Opportunities, and Threats for an executive briefing.',
          concepts: ['Internal factors (Strengths/Weaknesses) vs External market factors (Opportunities/Threats)'],
          simpleEnglishGuide: 'A SWOT grid takes 50 pages of research and summarizes it into 1 visual page that an executive can digest in 3 minutes during a board meeting.',
          malayalamNotes: 'കമ്പനിയുടെ കരുത്തുകളും ബലഹീനതകളും വിപണി സാധ്യതകളും വ്യക്തമാക്കുന്ന സ്വാട്ട് അനാലിസിസ്.',
          officialDocLinks: [{ title: 'SWOT Analysis Definition and Guide', url: 'https://en.wikipedia.org/wiki/SWOT_analysis' }],
          videoResources: [{
            title: 'How to Do a SWOT Analysis with Real Examples',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=swot+analysis+tutorial+with+examples',
            language: 'English',
            duration: '17 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Construct a 1-page SWOT Matrix for a local Kerala organic bakery launching an online delivery website.',
            tasks: ['Include 3 bullet points per quadrant with strategic recommendations']
          },
          quiz: [{
            id: 'q-res-14',
            question: 'In a SWOT analysis, are "Opportunities" and "Threats" internal or external factors?',
            options: ['Internal to the company', 'External market forces that exist outside the company\'s direct control', 'Only financial', 'Neither'],
            correctOptionIndex: 1,
            explanation: 'Opportunities and Threats represent external market, economic, or competitive environmental dynamics.'
          }]
        },
        {
          id: 'les-res-15',
          dayNumber: 15,
          title: 'Week 3 Review: Complete Competitive Landscape Dossier',
          titleMl: 'ഡേ 15: ആഴ്ച 3 വിപണി വിശകലന പരീക്ഷ',
          durationMinutes: 60,
          overview: 'Assemble feature grid, pricing matrix, review sentiment, and SWOT analysis into a unified 5-page Competitive Dossier.',
          concepts: ['Consolidation of competitive research methodologies'],
          simpleEnglishGuide: 'When you present this dossier, executives see that you are not just a web searcher; you are an insightful market intelligence assistant.',
          malayalamNotes: 'മൂന്നാം ആഴ്ചയിലെ എല്ലാ വിശകലനങ്ങളും ചേർത്ത് സമഗ്രമായ മാർക്കറ്റ് റിപ്പോർട്ട് ഉണ്ടാക്കുന്നു.',
          officialDocLinks: [{ title: 'Competitive Intelligence Overview', url: 'https://en.wikipedia.org' }],
          videoResources: [{
            title: 'How to Write a Competitive Intelligence Report Walkthrough',
            provider: 'YouTube Business Training',
            url: 'https://www.youtube.com/results?search_query=competitive+intelligence+report+walkthrough',
            language: 'English',
            duration: '22 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Format and assemble your 5-page Competitive Intelligence Dossier in Google Docs.',
            tasks: ['Include Executive Summary, Comparison Matrix, Pricing Table, and SWOT Grid']
          },
          quiz: [{
            id: 'q-res-15',
            question: 'What is the most critical section of any executive research report for busy C-suite leaders?',
            options: ['The appendix', 'The 1-page Executive Summary stating the core problem, key findings, and recommended action upfront', 'The font list', 'The cover photo'],
            correctOptionIndex: 1,
            explanation: 'The Executive Summary distills the entire study so leaders can make decisions without reading 30 pages.'
          }]
        }
      ]
    },
    {
      id: 'mod-res-4',
      weekNumber: 4,
      title: 'Week 4: Dossiers, Portfolio, Resume & Job Applications',
      titleMl: 'ആഴ്ച 4: റിപ്പോർട്ട് പ്രസന്റേഷൻ, പോർട്ട്ഫോളിയോ & ജോലി നേടൽ',
      objective: 'Format research briefings into executive PDFs, package 3 research dossiers into a public portfolio, write an ATS resume, and apply for remote research roles.',
      lessons: [
        {
          id: 'les-res-16',
          dayNumber: 16,
          title: 'Formatting an Executive Research Briefing Dossier',
          titleMl: 'ഡേ 16: എക്സിക്യൂട്ടീവ് റിസേർച്ച് ഡോസിയർ ഫോർമാറ്റിംഗ്',
          durationMinutes: 50,
          overview: 'Apply professional layout: bold key metrics, add direct citation footnotes, use callout insight boxes, and structure executive takeaways.',
          concepts: ['Citation standards in business research (Hyperlinked footnote URLs)', 'Executive visual formatting'],
          simpleEnglishGuide: 'Every factual claim in your report must have a footnote link to where you found it. If an executive asks: "Where did you get this number?", you can click the footnote in 1 second and prove it.',
          malayalamNotes: 'കണ്ടെത്തിയ വിവരങ്ങൾക്ക് കൃത്യമായ റഫറൻസ് ലിങ്കുകൾ നൽകി മനോഹരമായ റിപ്പോർട്ടാക്കുന്നു.',
          officialDocLinks: [{ title: 'Google Docs Citation Tools', url: 'https://support.google.com' }],
          videoResources: [{
            title: 'How to Format Executive Research Reports in Google Docs',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=format+executive+research+report+docs',
            language: 'English',
            duration: '18 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Format an unstyled 4-page research report with active footnote citations and an executive summary box.',
            tasks: ['Export as a clean PDF titled "Market_Briefing_Sample.pdf"']
          },
          quiz: [{
            id: 'q-res-16',
            question: 'Why must every factual statistic in a professional research report include a direct clickable source citation?',
            options: ['To look long', 'To establish credibility, enable rapid verification, and protect the organization from relying on unverified claims', 'It is required by Google', 'To count words'],
            correctOptionIndex: 1,
            explanation: 'Attribution establishes factual integrity and enables readers to verify methodology.'
          }]
        },
        {
          id: 'les-res-17',
          dayNumber: 17,
          title: 'Packaging Your 3 Research Dossiers for Your Portfolio',
          titleMl: 'ഡേ 17: റിസേർച്ച് പോർട്ട്ഫോളിയോ നിർമ്മാണം',
          durationMinutes: 55,
          overview: 'Assemble your 3 course deliverables into a public showcase: 1. Industry Trend Briefing, 2. Verified B2B Lead Directory, 3. Competitor Intelligence Matrix.',
          concepts: ['Organizing research deliverables in Google Drive or Notion', 'Writing methodology notes for each project'],
          simpleEnglishGuide: 'Show real proof. When clients see your verified lead sheet and competitor pricing grid, they know you have real research capabilities.',
          malayalamNotes: 'തയ്യാറാക്കിയ മൂന്ന് പ്രോജക്റ്റുകളും ഉൾപ്പെടുത്തി തൊഴിലുടമകൾക്കായി പോർട്ട്ഫോളിയോ ഉണ്ടാക്കുന്നു.',
          officialDocLinks: [{ title: 'Portfolio Presentation Guidelines', url: 'https://docs.google.com' }],
          videoResources: [{
            title: 'How to Build a Web Research Portfolio with No Experience',
            provider: 'YouTube Freelance Guides',
            url: 'https://www.youtube.com/results?search_query=web+research+portfolio+upwork+fiverr',
            language: 'English',
            duration: '20 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Assemble your 3 Research Dossiers into a public Google Drive or Notion portfolio folder.',
            tasks: ['Include brief 1-paragraph summary cards for each project']
          },
          quiz: [{
            id: 'q-res-17',
            question: 'What gives a beginner web researcher the highest credibility on freelance platforms?',
            options: ['Claiming 10 years experience', 'Providing links to completed, verified research dossiers with real source citations and clean spreadsheet models', 'Offering lowest price', 'A fancy headshot'],
            correctOptionIndex: 1,
            explanation: 'Transparent, verified work samples demonstrate real research methodology and rigor.'
          }]
        },
        {
          id: 'les-res-18',
          dayNumber: 18,
          title: 'Writing an ATS Web Research Resume & Gig Profiles',
          titleMl: 'ഡേ 18: റെസ്യൂമെയും ജോബ് കീവേഡുകളും',
          durationMinutes: 50,
          overview: 'Draft your specialized resume targeting: "Web Research Assistant", "Market Research Associate", "B2B Lead Generation Specialist", "Internet Researcher".',
          concepts: ['Highlighting boolean search syntax, email verification tools, and spreadsheet modeling'],
          simpleEnglishGuide: 'Use numbers on your resume: "Conducted market analysis of 15 competitors, verified 200+ decision-maker contacts with 98% email deliverability rate".',
          malayalamNotes: 'റിസേർച്ച് ജോലികൾക്ക് യോജിച്ച റെസ്യൂമെ തയ്യാറാക്കുന്നു.',
          officialDocLinks: [{ title: 'Career Launchpad Resume Builder', url: '/resume-builder' }],
          videoResources: [{
            title: 'Resume Tips for Market Research & Lead Gen Jobs',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=market+research+resume+tips+entry+level',
            language: 'English',
            duration: '16 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Generate your Market Research Resume using the Career Launchpad builder.',
            tasks: ['Highlight Boolean Search Operators, Company Profiling, Google Sheets, and Competitor Grids']
          },
          quiz: [{
            id: 'q-res-18',
            question: 'Which of the following is the strongest resume bullet point for a research assistant?',
            options: ['Searched on Google', 'Conducted comprehensive competitor pricing analysis across 12 SaaS providers and synthesized findings into executive SWOT matrices', 'Found some websites', 'Good at browsing'],
            correctOptionIndex: 1,
            explanation: 'Action verb + specific scope + business deliverable = compelling proof.'
          }]
        },
        {
          id: 'les-res-19',
          dayNumber: 19,
          title: 'Acing the Web Research Interview & Live Test Task',
          titleMl: 'ഡേ 19: റിസേർച്ച് ഇന്റർവ്യൂവും ലൈവ് ടെസ്റ്റും',
          durationMinutes: 55,
          overview: 'Practice the classic 20-minute live test: "Find the direct corporate email and phone number for the VP of Procurement of Company X, and identify their top 2 competitors".',
          concepts: ['Timed live search drills', 'Explaining your query methodology to the interviewer'],
          simpleEnglishGuide: 'When asked how you found a difficult fact, do not just say "I Googled it". Say: "I used the site: operator on the Ministry registry, found the company CIN number, and cross-referenced with their corporate LinkedIn filings". That blows interviewers away.',
          malayalamNotes: 'ഇന്റർവ്യൂവിൽ എങ്ങനെ വിവരം കണ്ടെത്തി എന്ന് കൃത്യമായി വിവരിക്കാൻ പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'Research Interview Questions', url: 'https://support.google.com' }],
          videoResources: [{
            title: 'Web Research Interview Questions & Test Task Walkthrough',
            provider: 'YouTube Career Guidance',
            url: 'https://www.youtube.com/results?search_query=web+research+interview+test+task',
            language: 'English',
            duration: '22 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Complete a timed 20-minute executive briefing test on a mock company.',
            tasks: ['Find CEO, Year Founded, Primary Products, and 2 Competitors in under 20 minutes']
          },
          quiz: [{
            id: 'q-res-19',
            question: 'What impresses an interviewer most when reviewing a practical research screening test?',
            options: ['Guessing answers quickly', 'Explaining the exact authoritative query operators and primary verification sources used to substantiate each finding', 'Copying Wikipedia text', 'Leaving questions blank'],
            correctOptionIndex: 1,
            explanation: 'Methodological rigor and primary source verification demonstrate elite research capability.'
          }]
        },
        {
          id: 'les-res-20',
          dayNumber: 20,
          title: 'Course Final Assessment & Career Progression Roadmap',
          titleMl: 'ഡേ 20: ഫൈനൽ അസസ്സ്‌മെന്റും കരിയർ വളർച്ചയും',
          durationMinutes: 60,
          overview: 'Complete the comprehensive research competency assessment, submit your dossiers, and map your progression into Market Intelligence Analyst roles.',
          concepts: ['Next steps: Learning basic data visualization, industry databases, and business consulting methodologies'],
          simpleEnglishGuide: 'Web research is the gateway to high-paying strategic consulting. As you grow, you will not just find facts; you will help founders decide which new markets to enter.',
          malayalamNotes: 'റിസേർച്ച് ജോലികളിൽ നിന്ന് ഉയർന്ന ശമ്പളമുള്ള ബിസിനസ്സ് അനലിസ്റ്റ് തലത്തിലേക്ക് വളരാനുള്ള വഴികൾ.',
          officialDocLinks: [{ title: 'Market Research Association Best Practices', url: 'https://www.insightsassociation.org' }],
          videoResources: [{
            title: 'From Web Researcher to Market Intelligence Analyst Roadmap',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=market+researcher+career+progression',
            language: 'English',
            duration: '18 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Submit your 3 project links to the Career Launchpad Skill Assessment system.',
            tasks: ['Verify all project links are public and accessible', 'Review your verified completion badge']
          },
          quiz: [{
            id: 'q-res-20',
            question: 'What higher-level professional career path builds directly on foundational web and market research skills?',
            options: ['Hardware soldering', 'Market Intelligence Analyst / Competitive Strategy Consultant', 'Graphic illustration only', 'Customer billing clerk'],
            correctOptionIndex: 1,
            explanation: 'Market intelligence and strategic consulting expand directly from disciplined primary market research.'
          }]
        }
      ]
    },
    {
      id: 'mod-res-5',
      weekNumber: 5,
      title: 'Week 5: B2B Lead Generation, Registry Lookups & Competitor Analysis',
      titleMl: 'ആഴ്ച 5: ബി2ബി ലീഡ് ജനറേഷൻ, കമ്പനി രജിസ്ട്രി & കോമ്പറ്റീറ്റർ അനാലിസിസ്',
      objective: 'Master LinkedIn Boolean search, Ministry of Corporate Affairs (MCA) verification, and pricing benchmarking.',
      lessons: [
        {
          id: 'les-res-21',
          dayNumber: 21,
          title: 'Advanced LinkedIn Boolean Operator Mastery',
          titleMl: 'ലിങ്ക്ഡ്ഇൻ ബൂളിയൻ സെർച്ച് മാസ്റ്ററി',
          durationMinutes: 50,
          overview: 'Master professional advanced linkedin boolean operator mastery workflows used in real company environments.',
          concepts: ["Foundations of Advanced LinkedIn Boolean Operator Mastery", "Industry standard best practices", "Quality verification standards"],
          simpleEnglishGuide: 'Practical zero-knowledge step-by-step guidance: Targeting exact decision-makers using AND, OR, NOT, and title quotation syntax.. Always verify your final deliverables before sharing.',
          malayalamNotes: 'ലിങ്ക്ഡ്ഇൻ ബൂളിയൻ സെർച്ച് മാസ്റ്ററി: ജോലിസ്ഥലത്ത് ഈ വൈദഗ്ധ്യം ഉപയോഗിക്കുന്ന യഥാർത്ഥ രീതി ലളിതമായി പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'Advanced LinkedIn Boolean Operator Mastery Documentation & Guides', url: 'https://www.google.com' }],
          videoResources: [{
            title: 'Advanced LinkedIn Boolean Operator Mastery — Complete Step-by-Step Tutorial',
            provider: 'Career Launchpad Curated',
            url: 'https://www.google.com',
            language: 'English',
            duration: '25 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Complete the practical workplace task for Day 21: Targeting exact decision-makers using AND, OR, NOT, and title quotation syntax..',
            tasks: [
              'Review the provided instructions and download the exercise worksheet.',
              'Apply the required software operations and double-check outputs.',
              'Save your completed deliverable into your weekly portfolio folder.'
            ]
          },
          quiz: [{
            id: 'q-res-21',
            question: 'What is the key objective of Advanced LinkedIn Boolean Operator Mastery in this role?',
            options: ["To bypass regular office standards", "To ensure high accuracy, efficiency and adherence to professional standards in advanced linkedin boolean operator mastery", "To increase unnecessary overhead", "To work without any client documentation"],
            correctOptionIndex: 1,
            explanation: 'Mastering advanced linkedin boolean operator mastery ensures tasks are delivered with professional accuracy and zero preventable errors.'
          }]
        },
        {
          id: 'les-res-22',
          dayNumber: 22,
          title: 'Verifying Official Corporate Registries (MCA / SEC)',
          titleMl: 'കമ്പനി രജിസ്ട്രേഷൻ വിവരങ്ങൾ പരിശോധിക്കൽ',
          durationMinutes: 50,
          overview: 'Master professional verifying official corporate registries (mca / sec) workflows used in real company environments.',
          concepts: ["Foundations of Verifying Official Corporate Registries (MCA / SEC)", "Industry standard best practices", "Quality verification standards"],
          simpleEnglishGuide: 'Practical zero-knowledge step-by-step guidance: Confirming paid-up capital, directors, and registered office addresses officially.. Always verify your final deliverables before sharing.',
          malayalamNotes: 'കമ്പനി രജിസ്ട്രേഷൻ വിവരങ്ങൾ പരിശോധിക്കൽ: ജോലിസ്ഥലത്ത് ഈ വൈദഗ്ധ്യം ഉപയോഗിക്കുന്ന യഥാർത്ഥ രീതി ലളിതമായി പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'Verifying Official Corporate Registries (MCA / SEC) Documentation & Guides', url: 'https://www.google.com' }],
          videoResources: [{
            title: 'Verifying Official Corporate Registries (MCA / SEC) — Complete Step-by-Step Tutorial',
            provider: 'Career Launchpad Curated',
            url: 'https://www.google.com',
            language: 'English',
            duration: '25 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Complete the practical workplace task for Day 22: Confirming paid-up capital, directors, and registered office addresses officially..',
            tasks: [
              'Review the provided instructions and download the exercise worksheet.',
              'Apply the required software operations and double-check outputs.',
              'Save your completed deliverable into your weekly portfolio folder.'
            ]
          },
          quiz: [{
            id: 'q-res-22',
            question: 'What is the key objective of Verifying Official Corporate Registries (MCA / SEC) in this role?',
            options: ["To bypass regular office standards", "To ensure high accuracy, efficiency and adherence to professional standards in verifying official corporate registries (mca / sec)", "To increase unnecessary overhead", "To work without any client documentation"],
            correctOptionIndex: 1,
            explanation: 'Mastering verifying official corporate registries (mca / sec) ensures tasks are delivered with professional accuracy and zero preventable errors.'
          }]
        },
        {
          id: 'les-res-23',
          dayNumber: 23,
          title: 'Competitor Pricing & Product Benchmarking',
          titleMl: 'കോമ്പറ്റീറ്റർ പ്രൈസിംഗ് & ബെഞ്ച്മാർക്കിംഗ്',
          durationMinutes: 50,
          overview: 'Master professional competitor pricing & product benchmarking workflows used in real company environments.',
          concepts: ["Foundations of Competitor Pricing & Product Benchmarking", "Industry standard best practices", "Quality verification standards"],
          simpleEnglishGuide: 'Practical zero-knowledge step-by-step guidance: Structuring 10-competitor feature and pricing comparison matrices in Sheets.. Always verify your final deliverables before sharing.',
          malayalamNotes: 'കോമ്പറ്റീറ്റർ പ്രൈസിംഗ് & ബെഞ്ച്മാർക്കിംഗ്: ജോലിസ്ഥലത്ത് ഈ വൈദഗ്ധ്യം ഉപയോഗിക്കുന്ന യഥാർത്ഥ രീതി ലളിതമായി പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'Competitor Pricing & Product Benchmarking Documentation & Guides', url: 'https://www.google.com' }],
          videoResources: [{
            title: 'Competitor Pricing & Product Benchmarking — Complete Step-by-Step Tutorial',
            provider: 'Career Launchpad Curated',
            url: 'https://www.google.com',
            language: 'English',
            duration: '25 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Complete the practical workplace task for Day 23: Structuring 10-competitor feature and pricing comparison matrices in Sheets..',
            tasks: [
              'Review the provided instructions and download the exercise worksheet.',
              'Apply the required software operations and double-check outputs.',
              'Save your completed deliverable into your weekly portfolio folder.'
            ]
          },
          quiz: [{
            id: 'q-res-23',
            question: 'What is the key objective of Competitor Pricing & Product Benchmarking in this role?',
            options: ["To bypass regular office standards", "To ensure high accuracy, efficiency and adherence to professional standards in competitor pricing & product benchmarking", "To increase unnecessary overhead", "To work without any client documentation"],
            correctOptionIndex: 1,
            explanation: 'Mastering competitor pricing & product benchmarking ensures tasks are delivered with professional accuracy and zero preventable errors.'
          }]
        },
        {
          id: 'les-res-24',
          dayNumber: 24,
          title: 'Academic & Industry Report Synthesizing',
          titleMl: 'ഇൻഡസ്ട്രി റിപ്പോർട്ടുകൾ സംഗ്രഹിക്കൽ',
          durationMinutes: 50,
          overview: 'Master professional academic & industry report synthesizing workflows used in real company environments.',
          concepts: ["Foundations of Academic & Industry Report Synthesizing", "Industry standard best practices", "Quality verification standards"],
          simpleEnglishGuide: 'Practical zero-knowledge step-by-step guidance: Extracting core statistics and growth projections from 50-page PDF reports.. Always verify your final deliverables before sharing.',
          malayalamNotes: 'ഇൻഡസ്ട്രി റിപ്പോർട്ടുകൾ സംഗ്രഹിക്കൽ: ജോലിസ്ഥലത്ത് ഈ വൈദഗ്ധ്യം ഉപയോഗിക്കുന്ന യഥാർത്ഥ രീതി ലളിതമായി പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'Academic & Industry Report Synthesizing Documentation & Guides', url: 'https://www.google.com' }],
          videoResources: [{
            title: 'Academic & Industry Report Synthesizing — Complete Step-by-Step Tutorial',
            provider: 'Career Launchpad Curated',
            url: 'https://www.google.com',
            language: 'English',
            duration: '25 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Complete the practical workplace task for Day 24: Extracting core statistics and growth projections from 50-page PDF reports..',
            tasks: [
              'Review the provided instructions and download the exercise worksheet.',
              'Apply the required software operations and double-check outputs.',
              'Save your completed deliverable into your weekly portfolio folder.'
            ]
          },
          quiz: [{
            id: 'q-res-24',
            question: 'What is the key objective of Academic & Industry Report Synthesizing in this role?',
            options: ["To bypass regular office standards", "To ensure high accuracy, efficiency and adherence to professional standards in academic & industry report synthesizing", "To increase unnecessary overhead", "To work without any client documentation"],
            correctOptionIndex: 1,
            explanation: 'Mastering academic & industry report synthesizing ensures tasks are delivered with professional accuracy and zero preventable errors.'
          }]
        },
        {
          id: 'les-res-25',
          dayNumber: 25,
          title: 'Data Verification & Anti-Hallucination Checks',
          titleMl: 'ഡാറ്റാ കൃത്യത പരിശോധിക്കൽ',
          durationMinutes: 50,
          overview: 'Master professional data verification & anti-hallucination checks workflows used in real company environments.',
          concepts: ["Foundations of Data Verification & Anti-Hallucination Checks", "Industry standard best practices", "Quality verification standards"],
          simpleEnglishGuide: 'Practical zero-knowledge step-by-step guidance: Triangulating facts across 3 independent reputable sources before reporting.. Always verify your final deliverables before sharing.',
          malayalamNotes: 'ഡാറ്റാ കൃത്യത പരിശോധിക്കൽ: ജോലിസ്ഥലത്ത് ഈ വൈദഗ്ധ്യം ഉപയോഗിക്കുന്ന യഥാർത്ഥ രീതി ലളിതമായി പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'Data Verification & Anti-Hallucination Checks Documentation & Guides', url: 'https://www.google.com' }],
          videoResources: [{
            title: 'Data Verification & Anti-Hallucination Checks — Complete Step-by-Step Tutorial',
            provider: 'Career Launchpad Curated',
            url: 'https://www.google.com',
            language: 'English',
            duration: '25 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Complete the practical workplace task for Day 25: Triangulating facts across 3 independent reputable sources before reporting..',
            tasks: [
              'Review the provided instructions and download the exercise worksheet.',
              'Apply the required software operations and double-check outputs.',
              'Save your completed deliverable into your weekly portfolio folder.'
            ]
          },
          quiz: [{
            id: 'q-res-25',
            question: 'What is the key objective of Data Verification & Anti-Hallucination Checks in this role?',
            options: ["To bypass regular office standards", "To ensure high accuracy, efficiency and adherence to professional standards in data verification & anti-hallucination checks", "To increase unnecessary overhead", "To work without any client documentation"],
            correctOptionIndex: 1,
            explanation: 'Mastering data verification & anti-hallucination checks ensures tasks are delivered with professional accuracy and zero preventable errors.'
          }]
        }
      ]
    },
    {
      id: 'mod-res-6',
      weekNumber: 6,
      title: 'Week 6: Data Synthesis, Executive Briefs & Market Research Launch',
      titleMl: 'ആഴ്ച 6: ഡാറ്റാ സിന്തസിസ്, എക്സിക്യൂട്ടീവ് ബ്രീഫ് & കരിയർ ലോഞ്ച്',
      objective: 'Synthesize industry whitepapers into 2-page executive briefs, assemble research dossiers, and land research roles.',
      lessons: [
        {
          id: 'les-res-26',
          dayNumber: 26,
          title: 'Drafting 2-Page Executive Intelligence Briefs',
          titleMl: '2 പേജ് എക്സിക്യൂട്ടീവ് ഇന്റലിജൻസ് ബ്രീഫ്',
          durationMinutes: 50,
          overview: 'Master professional drafting 2-page executive intelligence briefs workflows used in real company environments.',
          concepts: ["Foundations of Drafting 2-Page Executive Intelligence Briefs", "Industry standard best practices", "Quality verification standards"],
          simpleEnglishGuide: 'Practical zero-knowledge step-by-step guidance: Formatting dense market research into scannable executive takeaways.. Always verify your final deliverables before sharing.',
          malayalamNotes: '2 പേജ് എക്സിക്യൂട്ടീവ് ഇന്റലിജൻസ് ബ്രീഫ്: ജോലിസ്ഥലത്ത് ഈ വൈദഗ്ധ്യം ഉപയോഗിക്കുന്ന യഥാർത്ഥ രീതി ലളിതമായി പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'Drafting 2-Page Executive Intelligence Briefs Documentation & Guides', url: 'https://www.google.com' }],
          videoResources: [{
            title: 'Drafting 2-Page Executive Intelligence Briefs — Complete Step-by-Step Tutorial',
            provider: 'Career Launchpad Curated',
            url: 'https://www.google.com',
            language: 'English',
            duration: '25 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Complete the practical workplace task for Day 26: Formatting dense market research into scannable executive takeaways..',
            tasks: [
              'Review the provided instructions and download the exercise worksheet.',
              'Apply the required software operations and double-check outputs.',
              'Save your completed deliverable into your weekly portfolio folder.'
            ]
          },
          quiz: [{
            id: 'q-res-26',
            question: 'What is the key objective of Drafting 2-Page Executive Intelligence Briefs in this role?',
            options: ["To bypass regular office standards", "To ensure high accuracy, efficiency and adherence to professional standards in drafting 2-page executive intelligence briefs", "To increase unnecessary overhead", "To work without any client documentation"],
            correctOptionIndex: 1,
            explanation: 'Mastering drafting 2-page executive intelligence briefs ensures tasks are delivered with professional accuracy and zero preventable errors.'
          }]
        },
        {
          id: 'les-res-27',
          dayNumber: 27,
          title: 'Data Scraping Ethics & Legal Compliance',
          titleMl: 'ഡാറ്റാ കളക്ഷൻ എത്തിക്സും നിയമങ്ങളും',
          durationMinutes: 50,
          overview: 'Master professional data scraping ethics & legal compliance workflows used in real company environments.',
          concepts: ["Foundations of Data Scraping Ethics & Legal Compliance", "Industry standard best practices", "Quality verification standards"],
          simpleEnglishGuide: 'Practical zero-knowledge step-by-step guidance: Adhering to website terms of service and avoiding copyrighted personal datasets.. Always verify your final deliverables before sharing.',
          malayalamNotes: 'ഡാറ്റാ കളക്ഷൻ എത്തിക്സും നിയമങ്ങളും: ജോലിസ്ഥലത്ത് ഈ വൈദഗ്ധ്യം ഉപയോഗിക്കുന്ന യഥാർത്ഥ രീതി ലളിതമായി പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'Data Scraping Ethics & Legal Compliance Documentation & Guides', url: 'https://www.google.com' }],
          videoResources: [{
            title: 'Data Scraping Ethics & Legal Compliance — Complete Step-by-Step Tutorial',
            provider: 'Career Launchpad Curated',
            url: 'https://www.google.com',
            language: 'English',
            duration: '25 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Complete the practical workplace task for Day 27: Adhering to website terms of service and avoiding copyrighted personal datasets..',
            tasks: [
              'Review the provided instructions and download the exercise worksheet.',
              'Apply the required software operations and double-check outputs.',
              'Save your completed deliverable into your weekly portfolio folder.'
            ]
          },
          quiz: [{
            id: 'q-res-27',
            question: 'What is the key objective of Data Scraping Ethics & Legal Compliance in this role?',
            options: ["To bypass regular office standards", "To ensure high accuracy, efficiency and adherence to professional standards in data scraping ethics & legal compliance", "To increase unnecessary overhead", "To work without any client documentation"],
            correctOptionIndex: 1,
            explanation: 'Mastering data scraping ethics & legal compliance ensures tasks are delivered with professional accuracy and zero preventable errors.'
          }]
        },
        {
          id: 'les-res-28',
          dayNumber: 28,
          title: 'Capstone: Market Entry Feasibility Study',
          titleMl: 'ക്യാപ്സ്റ്റോൺ - മാർക്കറ്റ് എൻട്രി റിസർച്ച് സ്റ്റഡി',
          durationMinutes: 50,
          overview: 'Master professional capstone: market entry feasibility study workflows used in real company environments.',
          concepts: ["Foundations of Capstone: Market Entry Feasibility Study", "Industry standard best practices", "Quality verification standards"],
          simpleEnglishGuide: 'Practical zero-knowledge step-by-step guidance: Researching market size, competitors, and regulatory requirements for a new venture.. Always verify your final deliverables before sharing.',
          malayalamNotes: 'ക്യാപ്സ്റ്റോൺ - മാർക്കറ്റ് എൻട്രി റിസർച്ച് സ്റ്റഡി: ജോലിസ്ഥലത്ത് ഈ വൈദഗ്ധ്യം ഉപയോഗിക്കുന്ന യഥാർത്ഥ രീതി ലളിതമായി പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'Capstone: Market Entry Feasibility Study Documentation & Guides', url: 'https://www.google.com' }],
          videoResources: [{
            title: 'Capstone: Market Entry Feasibility Study — Complete Step-by-Step Tutorial',
            provider: 'Career Launchpad Curated',
            url: 'https://www.google.com',
            language: 'English',
            duration: '25 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Complete the practical workplace task for Day 28: Researching market size, competitors, and regulatory requirements for a new venture..',
            tasks: [
              'Review the provided instructions and download the exercise worksheet.',
              'Apply the required software operations and double-check outputs.',
              'Save your completed deliverable into your weekly portfolio folder.'
            ]
          },
          quiz: [{
            id: 'q-res-28',
            question: 'What is the key objective of Capstone: Market Entry Feasibility Study in this role?',
            options: ["To bypass regular office standards", "To ensure high accuracy, efficiency and adherence to professional standards in capstone: market entry feasibility study", "To increase unnecessary overhead", "To work without any client documentation"],
            correctOptionIndex: 1,
            explanation: 'Mastering capstone: market entry feasibility study ensures tasks are delivered with professional accuracy and zero preventable errors.'
          }]
        },
        {
          id: 'les-res-29',
          dayNumber: 29,
          title: 'Research Analyst Proof-of-Work Portfolio',
          titleMl: 'റിസർച്ച് പോർട്ട്ഫോളിയോ ഡോസിയർ',
          durationMinutes: 50,
          overview: 'Master professional research analyst proof-of-work portfolio workflows used in real company environments.',
          concepts: ["Foundations of Research Analyst Proof-of-Work Portfolio", "Industry standard best practices", "Quality verification standards"],
          simpleEnglishGuide: 'Practical zero-knowledge step-by-step guidance: Presenting structured market matrices and executive briefs in a PDF showcase.. Always verify your final deliverables before sharing.',
          malayalamNotes: 'റിസർച്ച് പോർട്ട്ഫോളിയോ ഡോസിയർ: ജോലിസ്ഥലത്ത് ഈ വൈദഗ്ധ്യം ഉപയോഗിക്കുന്ന യഥാർത്ഥ രീതി ലളിതമായി പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'Research Analyst Proof-of-Work Portfolio Documentation & Guides', url: 'https://www.google.com' }],
          videoResources: [{
            title: 'Research Analyst Proof-of-Work Portfolio — Complete Step-by-Step Tutorial',
            provider: 'Career Launchpad Curated',
            url: 'https://www.google.com',
            language: 'English',
            duration: '25 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Complete the practical workplace task for Day 29: Presenting structured market matrices and executive briefs in a PDF showcase..',
            tasks: [
              'Review the provided instructions and download the exercise worksheet.',
              'Apply the required software operations and double-check outputs.',
              'Save your completed deliverable into your weekly portfolio folder.'
            ]
          },
          quiz: [{
            id: 'q-res-29',
            question: 'What is the key objective of Research Analyst Proof-of-Work Portfolio in this role?',
            options: ["To bypass regular office standards", "To ensure high accuracy, efficiency and adherence to professional standards in research analyst proof-of-work portfolio", "To increase unnecessary overhead", "To work without any client documentation"],
            correctOptionIndex: 1,
            explanation: 'Mastering research analyst proof-of-work portfolio ensures tasks are delivered with professional accuracy and zero preventable errors.'
          }]
        },
        {
          id: 'les-res-30',
          dayNumber: 30,
          title: 'Graduation & Research Associate Job Hunt',
          titleMl: 'സർട്ടിഫിക്കേഷൻ & റിസർച്ച് അസോസിയേറ്റ് ജോലികൾ',
          durationMinutes: 50,
          overview: 'Master professional graduation & research associate job hunt workflows used in real company environments.',
          concepts: ["Foundations of Graduation & Research Associate Job Hunt", "Industry standard best practices", "Quality verification standards"],
          simpleEnglishGuide: 'Practical zero-knowledge step-by-step guidance: Completing final certification and applying for remote market intelligence roles.. Always verify your final deliverables before sharing.',
          malayalamNotes: 'സർട്ടിഫിക്കേഷൻ & റിസർച്ച് അസോസിയേറ്റ് ജോലികൾ: ജോലിസ്ഥലത്ത് ഈ വൈദഗ്ധ്യം ഉപയോഗിക്കുന്ന യഥാർത്ഥ രീതി ലളിതമായി പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'Graduation & Research Associate Job Hunt Documentation & Guides', url: 'https://www.google.com' }],
          videoResources: [{
            title: 'Graduation & Research Associate Job Hunt — Complete Step-by-Step Tutorial',
            provider: 'Career Launchpad Curated',
            url: 'https://www.google.com',
            language: 'English',
            duration: '25 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Complete the practical workplace task for Day 30: Completing final certification and applying for remote market intelligence roles..',
            tasks: [
              'Review the provided instructions and download the exercise worksheet.',
              'Apply the required software operations and double-check outputs.',
              'Save your completed deliverable into your weekly portfolio folder.'
            ]
          },
          quiz: [{
            id: 'q-res-30',
            question: 'What is the key objective of Graduation & Research Associate Job Hunt in this role?',
            options: ["To bypass regular office standards", "To ensure high accuracy, efficiency and adherence to professional standards in graduation & research associate job hunt", "To increase unnecessary overhead", "To work without any client documentation"],
            correctOptionIndex: 1,
            explanation: 'Mastering graduation & research associate job hunt ensures tasks are delivered with professional accuracy and zero preventable errors.'
          }]
        }
      ]
    }
  ],
  projects: [
    {
      id: 'proj-res-1',
      title: 'South India Renewable Energy Market Trend Briefing',
      titleMl: 'റിന്യൂവബിൾ എനർജി മാർക്കറ്റ് ട്രെൻഡ് ബ്രീഫിംഗ്',
      description: 'Research, verify, and compile a 4-page executive briefing on commercial solar adoption in South India, citing 10 official government and institutional primary sources.',
      scenario: 'A clean-tech investment group is considering entering the commercial rooftop solar market in Kerala and Tamil Nadu. You are hired as a junior market researcher to gather verifiable industry facts, government subsidy policies, and growth projections.',
      instructions: [
        'Perform advanced search queries using filetype:pdf and site:gov.in operators to locate official state energy agency reports (ANERT, TANGEDCO, MNRE)',
        'Extract 10 verified data points covering current capacity, government incentive policies, industrial electricity tariffs, and 5-year growth targets',
        'Build a structured Google Sheet with columns: Topic, Data Point / Statistic, Primary Source URL, Authorizing Agency, Publication Date, and Key Takeaway',
        'Write a 2-page Executive Summary synthesizing the findings into strategic market recommendations'
      ],
      deliverables: [
        'Clean Google Sheets Fact-Verification Database with 10 working primary hyperlinks',
        'Executive Summary PDF (2 pages) with footnote citations and clean typography'
      ],
      downloadableDataFilename: 'solar_briefing_prompt_criteria.json',
      downloadableDataContent: JSON.stringify({
        target_regions: ['Kerala', 'Tamil Nadu'],
        focus_sectors: ['Commercial rooftops', 'Textile mills', 'Cold storage facilities'],
        required_datapoints: [
          'State commercial grid tariff per kWh',
          'Current installed rooftop capacity (MW)',
          'Net-metering regulatory framework link'
        ]
      }, null, 2),
      gradingRubric: [
        { criterion: 'Primary Source Authenticity', weight: 45, standard: '100% of data points cite original government agencies or recognized research institutions with zero secondary blog spam.' },
        { criterion: 'Data Freshness & Methodology', weight: 30, standard: 'All cited reports were published within the last 24 months with explicit verification dates.' },
        { criterion: 'Executive Synthesis Quality', weight: 25, standard: 'Executive summary clearly explains business implications rather than just listing raw statistics.' }
      ],
      modelSolutionOverview: 'The completed dossier features verified citations from MNRE annual reports, ANERT rooftop statistics, state tariff commission orders, and a clean executive takeaway table.'
    },
    {
      id: 'proj-res-2',
      title: 'Verified 25-Contact B2B Procurement Decision-Maker Directory',
      titleMl: '25 കമ്പനികളിലെ പർച്ചേസ് മേധാവികളുടെ ഡയറക്ടറി',
      description: 'Build a 25-contact verified B2B directory of procurement heads across food and packaging manufacturers in South India, with verified corporate emails and deliverability status.',
      scenario: 'A biodegradable packaging factory needs to reach out to heads of supply chain and procurement at organic food and spice exporters. You must build a verified 25-contact database in Google Sheets.',
      instructions: [
        'Identify 25 distinct manufacturing companies in Kerala, Karnataka, and Tamil Nadu',
        'Locate the specific corporate decision-maker (VP Supply Chain, Head of Procurement, Operations Director, or Founder)',
        'Find and verify their business email address using pattern discovery and verification tools with zero bounce risk',
        'Include columns: Company Name, Corporate Website, City, Decision Maker Full Name, Job Title, Verified Email, Phone/Office Line, LinkedIn Profile URL, and Verification Confidence Level',
        'Implement alternating row formatting, frozen headers, and verified hyperlinks'
      ],
      deliverables: [
        'Public View-Only Google Sheets link to the 25-contact verified directory',
        'Screenshot proof of email verification checks showing "Deliverable / Safe to Send"'
      ],
      downloadableDataFilename: 'sample_procurement_target_companies.csv',
      downloadableDataContent: 'Company Name,City,Product Focus\nEastern Condiments,Kochi,Spices & Masalas\nSyntite Industries,Kolenchery,Spice Extracts & Oleoresins\nPlant Lipids,Kolenchery,Essential Oils\nNirapara Group,Kalady,Rice & Packaged Foods\nBrahmins Foods,Thodupuzha,Vegetarian Food Products',
      gradingRubric: [
        { criterion: 'Decision-Maker Seniority', weight: 40, standard: 'Target contacts hold genuine purchasing/operations budget authority rather than junior or unrelated roles.' },
        { criterion: 'Email Deliverability Verification', weight: 35, standard: 'All 25 email addresses are verified using pattern logic and free testing tools with zero invalid syntax.' },
        { criterion: 'Spreadsheet Cleanliness', weight: 25, standard: 'Flawless formatting: proper case names, frozen top row, clean column widths, and clickable links.' }
      ],
      modelSolutionOverview: 'The directory provides 25 pristine rows across verified regional food exporters, complete with corporate domains, LinkedIn profile links, verified email syntax, and verified office contact lines.'
    },
    {
      id: 'proj-res-3',
      title: 'Comprehensive Competitor Pricing & Sentiment Dossier',
      titleMl: 'എതിരാളികളുടെ വിലകളും റിവ്യൂ വിശകലനവും',
      description: 'Research 4 rival cloud storage or SaaS software tools, build a detailed feature-by-feature matrix, analyze hidden costs, and mine 30 customer reviews for pain points.',
      scenario: 'A tech startup is preparing to launch a collaborative cloud workspace tool in the Indian market. They need a deep-dive competitive analysis of Google Workspace, Microsoft 365, Zoho Workplace, and Dropbox Business.',
      instructions: [
        'Build a multi-dimensional Feature & Pricing Matrix in Google Sheets comparing storage tiers, free plan limits, monthly vs annual costs, and local currency pricing in INR',
        'Identify hidden costs (e.g. storage add-on fees, minimum user seat requirements, migration charges)',
        'Mine 30 customer reviews across G2, Trustpilot, and Capterra to identify the top 3 recurring customer frustrations for each competitor',
        'Construct a 1-page SWOT analysis summarizing market opportunities where the client can differentiate'
      ],
      deliverables: [
        'Interactive Competitor Analysis Spreadsheet (Tabs: Feature Matrix, Pricing Breakdown, Review Mining Raw Data)',
        'Executive Competitor Intelligence Dossier (PDF) with SWOT Grid and Strategic Recommendations'
      ],
      gradingRubric: [
        { criterion: 'Pricing Accuracy & Hidden Cost Discovery', weight: 40, standard: 'Identifies true 1st-year vs renewal pricing, user minimums, and hidden storage add-on tiers.' },
        { criterion: 'Review Sentiment Clustering', weight: 35, standard: 'Categorizes genuine customer complaints with direct quotes and source links.' },
        { criterion: 'Strategic Differentiation Insight', weight: 25, standard: 'SWOT recommendations clearly show how a new market entrant can exploit competitor weaknesses.' }
      ],
      modelSolutionOverview: 'The dossier features a comprehensive multi-tab Google Sheet with side-by-side plan comparisons in Indian Rupees, accompanied by a clean 4-page executive briefing PDF.'
    }
  ],
  workplaceGuidance: {
    firstWeek: [
      'Clarify the exact decision boundaries with your client before researching: e.g. "Do you want companies with over 50 employees only?"',
      'Always save copies or take screenshots of web pages containing critical statistics, in case the web page changes or is removed.',
      'Check whether your client requires specific geographical markets (e.g. India-only vs Middle East vs Global).',
      'Never cite Wikipedia directly in executive reports; scroll to the bottom of the Wikipedia page and cite the original primary source link instead.'
    ],
    firstMonth: [
      'Build your personal bookmark collection of high-authority industry databases, government registries, and trade directories.',
      'Always test phone numbers and email deliverability using non-intrusive lookup tools before presenting contact lists.',
      'Develop the habit of writing a 3-bullet "Executive Summary" at the top of every email containing research findings.'
    ],
    commonMistakes: [
      'Copying statistics from marketing blog articles without verifying the original research study, leading to outdated or false numbers.',
      'Delivering unformatted walls of text instead of organized spreadsheets with direct hyperlinks.',
      'Collecting generic info@ or contact@ email addresses instead of finding the specific human decision-maker.'
    ]
  },
  interviewPrep: [
    {
      question: 'How do you find the direct work email of an executive when it is not publicly displayed on their website or LinkedIn?',
      answer: 'I inspect the company\'s overall email format pattern using tools like Hunter.io or by searching Google for other employees with queries like: site:company.com "@company.com". Once I establish their standard naming convention (such as firstname.lastname@company.com), I test the executive\'s predicted address through an email verification service like Mailtester to confirm server MX deliverability without sending an email.',
      tips: 'A complete, step-by-step technical answer that demonstrates real-world research skills.'
    },
    {
      question: 'What do you do if you find conflicting statistics from two different sources on the internet?',
      answer: 'I trace both numbers back to their primary methodology. I inspect when each study was conducted, the sample size, the geographic region, and the organization that funded it. In my report, I present both figures transparently, explain the methodology difference, and highlight which number is more recent or authoritative for the client\'s specific context.',
      tips: 'Demonstrates scientific objectivity, critical thinking, and intellectual honesty.'
    },
    {
      question: 'How do advanced search operators like "site:" and "filetype:" save you time compared to ordinary keyword searching?',
      answer: 'Ordinary keyword searches return thousands of search engine optimized marketing blogs and e-commerce ads. Using "site:" restricts search results exclusively to authoritative domains like government or corporate portals, and "filetype:pdf" cuts through surface web pages straight into official white papers, financial disclosures, and statistical survey tables, saving hours of manual filtering.',
      tips: 'Shows power-user speed and professional search literacy.'
    }
  ]
};
