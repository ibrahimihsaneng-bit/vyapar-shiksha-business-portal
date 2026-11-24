import { Course } from '@/types';

export const canvaDesignCourse: Course = {
  id: 'course-canva',
  careerSlug: 'canva-graphic-design',
  title: 'Canva & Social Media Design Specialist (30 Days)',
  titleMl: 'കാൻവ & സോഷ്യൽ മീഡിയ ഗ്രാഫിക് ഡിസൈൻ (30 ദിവസങ്ങൾ)',
  durationDays: 30,
  weeklyGoals: [
    {
      weekNumber: 1,
      title: 'Design Principles, Canva Toolkit & Visual Hierarchy',
      objective: 'Master typography, contrast ratios, margins, color palettes, and navigation of the Canva web design interface.'
    },
    {
      weekNumber: 2,
      title: 'Social Media Graphics: Carousels, Stories & Banners',
      objective: 'Design high-converting Instagram 9-post grids, multi-slide educational carousels, and professional LinkedIn company banners.'
    },
    {
      weekNumber: 3,
      title: 'Corporate Presentation Pitch Decks & Business Collateral',
      objective: 'Design 10-slide executive pitch decks, printable promotional flyers, event menus, and business cards adhering to brand kits.'
    },
    {
      weekNumber: 4,
      title: 'Export Optimization, Portfolio Curation & Freelance Launch',
      objective: 'Master web vs print export settings (RGB vs CMYK, PNG vs PDF Print), build a Behance portfolio, and launch freelance design services.'
    },
    {
      weekNumber: 5,
      title: 'Week 5: Carousel Decks, YouTube Thumbnails & Print Collateral',
      objective: 'Master multi-slide LinkedIn/Instagram carousels, high-CTR YouTube thumbnails, and print-ready business cards.'
    },
    {
      weekNumber: 6,
      title: 'Week 6: Motion Graphics, Brand Kit Systems & Graphic Design Launch',
      objective: 'Animate short social reels in Canva, build full client brand guidelines, and land freelance design clients.'
    }
    ],

  modules: [
    {
      id: 'mod-can-1',
      weekNumber: 1,
      title: 'Week 1: Visual Design Principles & The Canva Interface',
      titleMl: 'ആഴ്ച 1: ഡിസൈൻ അടിസ്ഥാന തത്വങ്ങളും കാൻവ ഇന്റർഫേസും',
      objective: 'Learn visual hierarchy, font pairing, color psychology, and how to use Canva grids and rulers.',
      lessons: [
        {
          id: 'les-can-1',
          dayNumber: 1,
          title: 'The Core Rules of Visual Design: Alignment, Spacing & Contrast',
          titleMl: 'ഡേ 1: ഗ്രാഫിക് ഡിസൈൻ അടിസ്ഥാന നിയമങ്ങൾ',
          durationMinutes: 45,
          overview: 'Understand what makes a design look amateur vs professional: breathing room, alignment grids, and readable contrast.',
          concepts: ['Visual hierarchy: Headline -> Subtitle -> Call-to-Action', 'The rule of breathing room (White space / Negative space)', 'Accessible contrast check'],
          simpleEnglishGuide: 'Amateur designs cram text into every corner. Professional designs leave clean empty space around elements so the main message jumps out effortlessly.',
          malayalamNotes: 'ഡിസൈനുകളിൽ അക്ഷരങ്ങളും ചിത്രങ്ങളും തിങ്ങിനിറയാതെ വായനാസുഖം നൽകുന്ന രീതികൾ.',
          officialDocLinks: [{ title: 'Canva Design School Basics', url: 'https://www.canva.com/designschool/' }],
          videoResources: [{
            title: 'Graphic Design Basics for Non-Designers in Malayalam',
            provider: 'YouTube Tech Malayalam',
            url: 'https://www.youtube.com/results?search_query=graphic+design+basics+malayalam+canva',
            language: 'Malayalam',
            duration: '22 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Create a free Canva account and explore the canvas canvas ruler and guide tools.',
            tasks: ['Turn on Rulers and Guides (Shift+R)', 'Design a simple quote graphic keeping all text strictly inside the safe margin guides']
          },
          quiz: [{
            id: 'q-can-1',
            question: 'What is the primary function of "Negative Space" (White Space) in graphic design?',
            options: ['It saves digital ink', 'It gives visual breathing room that directs the viewer\'s eye directly to the most important elements without overwhelm', 'It means the design is unfinished', 'To make files smaller'],
            correctOptionIndex: 1,
            explanation: 'Negative space creates visual balance and guides reader focus directly toward primary focal points.'
          }]
        },
        {
          id: 'les-can-2',
          dayNumber: 2,
          title: 'Typography Mastery: Pairing Fonts that Compliment Each Other',
          titleMl: 'ഡേ 2: ഫോണ്ടുകൾ തിരഞ്ഞെടുക്കുന്ന വിധം',
          durationMinutes: 50,
          overview: 'Pair bold modern headlines (Montserrat, Bebas Neue, Playfair) with clean readable body fonts (Open Sans, Lato, Inter).',
          concepts: ['Font personalities (Modern, Elegant, Playful, Corporate)', 'Rule of 2 fonts maximum per design', 'Tracking (letter spacing) and line height rules'],
          simpleEnglishGuide: 'Never use 5 different fonts on one poster. Pick ONE font for your headline, and ONE clean font for your details. That is the secret to clean design.',
          malayalamNotes: 'പോസ്റ്ററുകളിൽ പരമാവധി 2 ഫോണ്ടുകൾ മാത്രം ഭംഗിയായി പെയർ ചെയ്യുന്ന രീതി.',
          officialDocLinks: [{ title: 'Canva Font Combinations Guide', url: 'https://www.canva.com/learn/combining-fonts/' }],
          videoResources: [{
            title: 'How to Pair Fonts in Canva Like a Professional',
            provider: 'YouTube Design Training',
            url: 'https://www.youtube.com/results?search_query=how+to+pair+fonts+in+canva',
            language: 'English',
            duration: '16 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Design 3 typographic posters in Canva using only text, contrast, and font pairings (no photos).',
            tasks: ['Pair 1: Playfair Display + Lato', 'Pair 2: Montserrat Bold + Open Sans', 'Pair 3: Bebas Neue + Montserrat']
          },
          quiz: [{
            id: 'q-can-2',
            question: 'How many distinct font families should typically be used on a single marketing graphic?',
            options: ['At least 5', 'No more than 2 (one for headline, one for body text)', '10 fonts', 'Different font for every word'],
            correctOptionIndex: 1,
            explanation: 'Restricting designs to 2 harmonious fonts ensures visual cohesion and brand professionalism.'
          }]
        },
        {
          id: 'les-can-3',
          dayNumber: 3,
          title: 'Color Palettes: 60-30-10 Rule & Brand Identity Kits',
          titleMl: 'ഡേ 3: കളർ പാലറ്റുകളും ബ്രാൻഡ് കളറുകളും',
          durationMinutes: 50,
          overview: 'Master the interior design color formula for graphics: 60% Dominant neutral color, 30% Secondary structure color, 10% Vibrant accent color.',
          concepts: ['The 60-30-10 color balance rule', 'Using Coolors.co to generate harmonious hex color palettes', 'Setting up a Brand Kit in Canva'],
          simpleEnglishGuide: 'The 10% accent color is your call-to-action button or key price tag. Because it is used sparingly, it instantly catches the eye.',
          malayalamNotes: 'പോസ്റ്ററുകളിൽ കളറുകൾ സമതുലിതമായി ഉപയോഗിക്കാൻ 60-30-10 നിയമം പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'Canva Color Palette Generator', url: 'https://www.canva.com/colors/color-palette-generator/' }],
          videoResources: [{
            title: 'The 60-30-10 Color Rule in Graphic Design Explained',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=60+30+10+color+rule+graphic+design',
            language: 'English',
            duration: '14 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Generate an organic eco-friendly brand color palette (Forest Green #1B4D3E, Oatmeal Beige #F5F2EB, Amber Accent #D97706).',
            tasks: ['Create a Brand Style Board in Canva showing the 3 hex codes, font choices, and sample graphic elements']
          },
          quiz: [{
            id: 'q-can-3',
            question: 'In the 60-30-10 design color rule, what role does the 10% color play?',
            options: ['Background wall only', 'The focal accent color used to highlight critical call-to-actions, price discounts, or key headlines', 'It must be black', 'It is ignored'],
            correctOptionIndex: 1,
            explanation: 'The 10% accent color provides visual punch for the most important interactive or high-value elements.'
          }]
        },
        {
          id: 'les-can-4',
          dayNumber: 4,
          title: 'Copyright, Licensing & Using Royalty-Free Stock Media Safely',
          titleMl: 'ഡേ 4: കോപ്പിറൈറ്റും റോയൽറ്റി-ഫ്രീ ചിത്രങ്ങളും',
          durationMinutes: 45,
          overview: 'Learn how to avoid copyright lawsuits: never copy random images from Google Images. Use Unsplash, Pexels, and Pixabay with commercial licenses.',
          concepts: ['Commercial vs non-commercial licenses', 'Attribution requirements', 'Model releases and trademark sensitivities'],
          simpleEnglishGuide: 'Grabbing a photo from Google Images and putting it on a client\'s Facebook ad can get the client sued for ₹50,000 in copyright damages. Always use verified royalty-free libraries.',
          malayalamNotes: 'ക്ലയന്റുകൾക്ക് പ്രശ്നങ്ങൾ വരാതിരിക്കാൻ സൗജന്യ റോയൽറ്റി-ഫ്രീ ചിത്രങ്ങൾ മാത്രം ഉപയോഗിക്കുന്നു.',
          officialDocLinks: [{ title: 'Canva Content License Agreement', url: 'https://www.canva.com/policies/content-license-agreement/' }],
          videoResources: [{
            title: 'Copyright for Graphic Designers — How to Avoid Getting Sued',
            provider: 'YouTube Design Training',
            url: 'https://www.youtube.com/results?search_query=copyright+for+graphic+designers+royalty+free',
            language: 'English',
            duration: '17 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Source 5 commercial-licensed photos for an organic tea brand from Unsplash or Pexels.',
            tasks: ['Record the photographer attribution link and verify commercial usage rights']
          },
          quiz: [{
            id: 'q-can-4',
            question: 'Can you legally use photos found on Google Image Search for a client\'s commercial promotional flyer without a license?',
            options: ['Yes, if on Google it is free', 'No, most images on Google are copyrighted and using them commercially without permission is intellectual property infringement', 'Yes, on weekends', 'Only if flipped backwards'],
            correctOptionIndex: 1,
            explanation: 'Commercial use of uncredited copyrighted images violates copyright law and risks legal penalties.'
          }]
        },
        {
          id: 'les-can-5',
          dayNumber: 5,
          title: 'Week 1 Review: The 3-Style Typographic Poster Challenge',
          titleMl: 'ഡേ 5: ആഴ്ച 1 ടൈപ്പോഗ്രാഫി പോസ്റ്റർ പരീക്ഷ',
          durationMinutes: 60,
          overview: 'Design 3 distinct promotional flyers for an organic coffee roaster applying alignment grids, font hierarchy, and 60-30-10 color rules.',
          concepts: ['Consolidation of fundamental visual design mechanics'],
          simpleEnglishGuide: 'Review your designs. Is the headline easy to read from 3 feet away? Does your eye naturally travel from headline to detail to website URL? If yes, you have mastered visual hierarchy.',
          malayalamNotes: 'ആദ്യ ആഴ്ചയിലെ നിയമങ്ങൾ പാലിച്ച് 3 ആകർഷകമായ പോസ്റ്ററുകൾ ഡിസൈൻ ചെയ്യുന്നു.',
          officialDocLinks: [{ title: 'Canva Design Fundamentals', url: 'https://www.canva.com' }],
          videoResources: [{
            title: 'Canva Poster Design Masterclass for Beginners',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=canva+poster+design+masterclass+for+beginners',
            language: 'English',
            duration: '24 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Design 3 promotional flyers for "Malabar Artisan Coffee".',
            tasks: ['Verify margins, font pairings, and color palettes across all 3 designs']
          },
          quiz: [{
            id: 'q-can-5',
            question: 'What is the visual "Squint Test" that designers use to check hierarchy?',
            options: ['Checking if screen is broken', 'Squinting your eyes slightly to see if the primary headline and call-to-action remain distinct and legible while minor details blur out', 'Closing eyes', 'Measuring monitor'],
            correctOptionIndex: 1,
            explanation: 'Squinting removes detail, instantly revealing whether primary focal contrast is working.'
          }]
        }
      ]
    },
    {
      id: 'mod-can-2',
      weekNumber: 2,
      title: 'Week 2: Social Media Design: Carousels, Stories & Banners',
      titleMl: 'ആഴ്ച 2: സോഷ്യൽ മീഡിയ പോസ്റ്ററുകളും കാറൂസലുകളും',
      objective: 'Design seamless Instagram educational carousels, dynamic vertical story layouts, and professional LinkedIn business banners.',
      lessons: [
        {
          id: 'les-can-6',
          dayNumber: 6,
          title: 'Designing Multi-Slide Seamless Instagram Carousels',
          titleMl: 'ഡേ 6: ഇൻസ്റ്റാഗ്രാം കാറൂസലുകൾ (Carousels) നിർമ്മിക്കൽ',
          durationMinutes: 55,
          overview: 'Create 5-slide educational swipe carousels (1080x1350px 4:5 portrait ratio) where graphics seamlessly cross across slide boundaries.',
          concepts: ['4:5 portrait ratio (takes up 20% more mobile screen space than square)', 'Seamless connecting visual lines across slides', 'Slide 1 hook headlines and Slide 5 call-to-action cards'],
          simpleEnglishGuide: 'Never make your Instagram posts 1:1 square if you can make them 4:5 portrait (1080x1350). The portrait size fills the phone screen and stops users from scrolling past.',
          malayalamNotes: 'സ്ക്രോൾ ചെയ്യുമ്പോൾ മനോഹരമായി തുടർച്ച തോന്നുന്ന മൾട്ടി-സ്ലൈഡ് പോസ്റ്റുകൾ നിർമ്മിക്കുന്നു.',
          officialDocLinks: [{ title: 'Instagram Aspect Ratios Guide', url: 'https://help.instagram.com' }],
          videoResources: [{
            title: 'How to Create Seamless Instagram Carousels in Canva in Malayalam',
            provider: 'YouTube Tech Malayalam',
            url: 'https://www.youtube.com/results?search_query=seamless+carousel+canva+malayalam',
            language: 'Malayalam',
            duration: '21 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Design a 5-slide educational carousel in Canva: "5 Simple Bookkeeping Habits for Small Businesses".',
            tasks: ['Use 1080x1350px dimensions', 'Include Slide 1 Hook, Slides 2-4 Tips with graphic icons, Slide 5 Save & Follow CTA']
          },
          quiz: [{
            id: 'q-can-6',
            question: 'Why is the 4:5 portrait aspect ratio (1080x1350px) preferred over 1:1 square for Instagram feed posts?',
            options: ['It loads faster', 'It occupies significantly more vertical screen real estate on mobile phones, dramatically increasing attention and stopping scroll speed', 'Instagram bans squares', 'For desktop only'],
            correctOptionIndex: 1,
            explanation: 'The 4:5 vertical format maximizes mobile screen presence, driving higher engagement.'
          }]
        },
        {
          id: 'les-can-7',
          dayNumber: 7,
          title: 'Instagram Stories & WhatsApp Status Promotion Cards',
          titleMl: 'ഡേ 7: ഇൻസ്റ്റാഗ്രാം സ്റ്റോറികളും വാട്സാപ്പ് സ്റ്റാറ്റസും',
          durationMinutes: 50,
          overview: 'Design vertical 9:16 (1080x1920px) story cards with safe zones (avoiding Instagram profile header and bottom reply bar).',
          concepts: ['Safe zones in 9:16 vertical design (leaving 250px clear at top and bottom)', 'High-contrast typography for fast 3-second viewing'],
          simpleEnglishGuide: 'People view stories in 3 seconds. Keep text under 15 words. Big headline, clear photo, and an obvious sticker arrow pointing to the link sticker.',
          malayalamNotes: 'മൊബൈൽ സ്ക്രീൻ മുഴുവനായി കാണാൻ സാധിക്കുന്ന വെർട്ടിക്കൽ സ്റ്റോറികൾ ഡിസൈൻ ചെയ്യുന്ന രീതി.',
          officialDocLinks: [{ title: 'Instagram Stories Safe Zone Guidelines', url: 'https://help.instagram.com' }],
          videoResources: [{
            title: 'How to Design High Converting Instagram Stories in Canva',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=design+instagram+stories+in+canva+tutorial',
            language: 'English',
            duration: '16 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Design 3 cohesive promotional story cards for an artisan bakery weekend sale.',
            tasks: ['Respect 250px top and bottom safe zones', 'Include clear "Tap Link Below" sticker target zones']
          },
          quiz: [{
            id: 'q-can-7',
            question: 'Why must designers maintain "Safe Zones" at the top and bottom of 9:16 vertical story graphics?',
            options: ['To save battery', 'Because the platform interface (username, close button at top, and message reply bar at bottom) covers those areas', 'Printers cut off stories', 'For aesthetics only'],
            correctOptionIndex: 1,
            explanation: 'Platform UI elements overlap the extreme top and bottom 200-250 pixels on mobile displays.'
          }]
        },
        {
          id: 'les-can-8',
          dayNumber: 8,
          title: 'Cohesive 9-Post Instagram Grid Planning',
          titleMl: 'ഡേ 8: ഇൻസ്റ്റാഗ്രാം ഗ്രിഡ് പ്ലാനിംഗ്',
          durationMinutes: 50,
          overview: 'Plan and design an aesthetically unified 9-post profile grid using a checkerboard or color-alternating rhythm.',
          concepts: ['Grid aesthetics (Alternating quote tiles vs photo tiles)', 'Consistent brand color harmony across rows', 'Connecting visual motifs'],
          simpleEnglishGuide: 'When someone lands on your client\'s profile, they see 9 tiles at once. When all 9 tiles share the same font and color palette, the company looks like a massive, trustworthy brand.',
          malayalamNotes: 'പ്രൊഫൈൽ സന്ദർശിക്കുമ്പോൾ കാണുന്ന 9 പോസ്റ്റുകൾ ആകർഷകമായി പ്ലാൻ ചെയ്യുന്ന വിധം.',
          officialDocLinks: [{ title: 'Canva Instagram Grid Templates', url: 'https://www.canva.com' }],
          videoResources: [{
            title: 'How to Plan an Aesthetic Instagram Grid in Canva',
            provider: 'YouTube Design Training',
            url: 'https://www.youtube.com/results?search_query=plan+instagram+grid+canva+tutorial',
            language: 'English',
            duration: '19 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Design a 9-post grid mockup for an organic skincare brand in Canva.',
            tasks: ['Alternate between product hero shots, educational tips, and customer testimonials in a checkerboard rhythm']
          },
          quiz: [{
            id: 'q-can-8',
            question: 'What is the primary business benefit of maintaining a cohesive visual Instagram profile grid?',
            options: ['It makes the phone lighter', 'It establishes immediate corporate credibility and brand trust when prospective clients visit the profile', 'It automatically increases followers by 1000', 'It reduces file size'],
            correctOptionIndex: 1,
            explanation: 'A unified profile grid projects high professionalism and brand authority, lifting follower conversion.'
          }]
        },
        {
          id: 'les-can-9',
          dayNumber: 9,
          title: 'Designing High-Impact LinkedIn & YouTube Banners',
          titleMl: 'ഡേ 9: ലിങ്ക്ഡ്ഇൻ & യൂട്യൂബ് ബാനറുകൾ',
          durationMinutes: 50,
          overview: 'Design desktop-and-mobile responsive banners (1584x396px for LinkedIn, 2560x1440px for YouTube) keeping text inside the central safe zone.',
          concepts: ['Desktop vs mobile responsive cropping boundaries', 'Placing value propositions inside the central 800px width', 'Avoiding left-side profile photo overlap on LinkedIn'],
          simpleEnglishGuide: 'On LinkedIn, the round profile picture sits on the bottom-left of the banner. Never put your text or company logo on the bottom-left, or your face will block it. Keep key text in the center-right.',
          malayalamNotes: 'പ്രൊഫൈൽ ഫോട്ടോ കൊണ്ട് വിവരങ്ങൾ മറഞ്ഞുപോകാതിരിക്കാൻ ബാനറുകൾ ഡിസൈൻ ചെയ്യുന്ന രീതി.',
          officialDocLinks: [{ title: 'LinkedIn Banner Specifications', url: 'https://www.linkedin.com/help' }],
          videoResources: [{
            title: 'How to Design a Professional LinkedIn Banner in Canva',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=design+linkedin+banner+in+canva+tutorial',
            language: 'English',
            duration: '16 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Design a professional corporate LinkedIn Company Banner (1584x396px).',
            tasks: ['Position tagline and value proposition in the central-right safe zone', 'Verify left side leaves clearance for profile avatars']
          },
          quiz: [{
            id: 'q-can-9',
            question: 'Where should the primary company slogan be positioned on a LinkedIn banner?',
            options: ['Bottom-left corner', 'Center-right area, away from where the circular profile picture overlaps on the left', 'Top-left corner', 'Under the banner'],
            correctOptionIndex: 1,
            explanation: 'Placing focal content in the center-right prevents the circular profile avatar from obstructing text.'
          }]
        },
        {
          id: 'les-can-10',
          dayNumber: 10,
          title: 'Week 2 Review: Complete Brand Social Media Kit Drill',
          titleMl: 'ഡേ 10: ആഴ്ച 2 സോഷ്യൽ മീഡിയ കിറ്റ് പരീക്ഷ',
          durationMinutes: 60,
          overview: 'Assemble an entire social media rollout for a new brand: 1 Carousel, 3 Story cards, and 1 LinkedIn banner with unified branding.',
          concepts: ['Consolidation of multi-channel social media design'],
          simpleEnglishGuide: 'Look across all 5 assets. Do they look like they were made by the same company on the same day? Consistency is what clients pay for.',
          malayalamNotes: 'ഒരു ബ്രാൻഡിന്റെ മുഴുവൻ സോഷ്യൽ മീഡിയ ഗ്രാഫിക്സുകളും ഒരേ തീമിൽ ഡിസൈൻ ചെയ്യുന്നു.',
          officialDocLinks: [{ title: 'Canva Social Media Toolkit', url: 'https://www.canva.com' }],
          videoResources: [{
            title: 'Complete Social Media Branding Kit in Canva Walkthrough',
            provider: 'YouTube Design Training',
            url: 'https://www.youtube.com/results?search_query=complete+social+media+branding+kit+canva',
            language: 'English',
            duration: '25 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Build a complete Social Media Kit for "PureEarth Sustainable Goods".',
            tasks: ['1x 5-slide Carousel, 3x Stories, 1x LinkedIn Banner with verified consistent typography and hex colors']
          },
          quiz: [{
            id: 'q-can-10',
            question: 'What is the hallmark of professional multi-platform brand design?',
            options: ['Using different colors on every platform', 'Strict visual consistency in typography, logo rules, and color palettes across all social channels', 'Writing in different languages', 'Changing fonts daily'],
            correctOptionIndex: 1,
            explanation: 'Cross-platform visual consistency builds instant recognition and trust.'
          }]
        }
      ]
    },
    {
      id: 'mod-can-3',
      weekNumber: 3,
      title: 'Week 3: Pitch Decks, Presentations & Marketing Collateral',
      titleMl: 'ആഴ്ച 3: പ്രസന്റേഷൻ സ്ലൈഡുകളും മാർക്കറ്റിംഗ് മെറ്റീരിയലുകളും',
      objective: 'Design 10-slide executive presentation pitch decks, printable promotional flyers, restaurant menus, and business cards.',
      lessons: [
        {
          id: 'les-can-11',
          dayNumber: 11,
          title: 'Designing Clean 16:9 Executive Presentation Slide Decks',
          titleMl: 'ഡേ 11: പ്രൊഫഷണൽ പ്രസന്റേഷൻ സ്ലൈഡുകൾ',
          durationMinutes: 50,
          overview: 'Design widescreen (1920x1080px 16:9) slides that communicate one idea per slide with strong typography and minimal clutter.',
          concepts: ['The 1-idea-per-slide rule', 'Slide hierarchy: Big Bold Headline -> 3 structured columns or cards -> source footer', 'Presenter view considerations'],
          simpleEnglishGuide: 'Never put 20 bullet points on a slide. If you have 3 points, put them into 3 clean vertical cards with an icon on top of each. That turns a boring slide into an executive presentation.',
          malayalamNotes: 'കമ്പനി മീറ്റിംഗുകളിൽ ഉപയോഗിക്കുന്ന പ്രസന്റേഷൻ സ്ലൈഡുകൾ മനോഹരമായി ഡിസൈൻ ചെയ്യുന്ന രീതി.',
          officialDocLinks: [{ title: 'Canva Presentations Guide', url: 'https://www.canva.com/presentations/' }],
          videoResources: [{
            title: 'How to Design Pitch Decks in Canva Like a Pro',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=design+pitch+decks+in+canva+tutorial',
            language: 'English',
            duration: '22 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Design 5 core slides of a corporate startup pitch deck in Canva.',
            tasks: ['1. Title Slide, 2. The Problem, 3. The Solution (3 cards), 4. Market Size (big stat counters), 5. Contact / Next Steps']
          },
          quiz: [{
            id: 'q-can-11',
            question: 'What is the recommended information density rule for modern executive presentation slides?',
            options: ['Pack as many words as possible on every slide', 'One core idea per slide with clear visual structure and concise supporting text', 'Never use words, only memes', 'Use 10 colors'],
            correctOptionIndex: 1,
            explanation: 'Restricting slides to one clear takeaway prevents cognitive overload during presentations.'
          }]
        },
        {
          id: 'les-can-12',
          dayNumber: 12,
          title: 'Print Design Basics: Bleed, Safe Margins & CMYK vs RGB',
          titleMl: 'ഡേ 12: പ്രിന്റ് ഡിസൈനും ബ്ലീഡ് മാർജിനുകളും',
          durationMinutes: 50,
          overview: 'Understand physical print production: Why RGB is for screens and CMYK is for physical ink, and why 3mm Bleed prevents white edges when cut by industrial guillotine blades.',
          concepts: ['RGB (Red Green Blue for monitors) vs CMYK (Cyan Magenta Yellow Black for ink)', 'Crop marks and Bleed margins (3mm on all sides)', '300 DPI high resolution printing requirement'],
          simpleEnglishGuide: 'When physical printers cut 10,000 flyers with a giant knife, the blade can slip by 1 millimeter. Bleed extends your background color past the edge so no ugly white paper slips through. Always turn on Bleed for print jobs.',
          malayalamNotes: 'പ്രിന്റ് ചെയ്യാൻ കൊടുക്കുമ്പോൾ അരികുകൾ മുറിഞ്ഞുപോകാതിരിക്കാൻ ബ്ലീഡ് മാർജിൻ നൽകുന്ന രീതി.',
          officialDocLinks: [{ title: 'Print Bleed and Margins in Canva', url: 'https://www.canva.com/help/margins-bleed-crop-marks/' }],
          videoResources: [{
            title: 'Print Bleed & CMYK Explained for Beginners',
            provider: 'YouTube Design Training',
            url: 'https://www.youtube.com/results?search_query=print+bleed+cmyk+explained+canva',
            language: 'English',
            duration: '18 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Create an A4 promotional flyer in Canva and enable "Show Print Bleed" under File Settings.',
            tasks: ['Extend background color completely to the bleed border', 'Ensure all text remains strictly inside the safe margin']
          },
          quiz: [{
            id: 'q-can-12',
            question: 'What is the purpose of "Bleed" in printable graphic design?',
            options: ['To make images darker', 'To extend background artwork beyond the final cut line so that slight blade misalignments during printing do not leave white paper borders', 'To add shadows', 'To reduce resolution'],
            correctOptionIndex: 1,
            explanation: 'Bleed guarantees artwork extends past the physical cutting line, eliminating unprinted paper edges.'
          }]
        },
        {
          id: 'les-can-13',
          dayNumber: 13,
          title: 'Designing Double-Sided Business Cards & Menus',
          titleMl: 'ഡേ 13: ബിസിനസ്സ് കാർഡുകളും മെനുകളും',
          durationMinutes: 50,
          overview: 'Design standard business cards (3.5 x 2 inches / 89 x 51 mm): Front with logo and brand motif, Back with clean typography, name, phone, email, and QR code.',
          concepts: ['Business card ergonomics', 'Generating working QR codes inside Canva linking to websites or WhatsApp catalogs'],
          simpleEnglishGuide: 'Do not make text on business cards tiny or unreadable. Keep phone numbers and email addresses at least 8pt to 9pt so older customers can read them easily without glasses.',
          malayalamNotes: 'ക്യുആർ കോഡുകൾ ഉൾപ്പെടുത്തി ബിസിനസ്സ് കാർഡുകൾ ഡിസൈൻ ചെയ്യുന്ന വിധം.',
          officialDocLinks: [{ title: 'Canva Business Cards Guide', url: 'https://www.canva.com/business-cards/' }],
          videoResources: [{
            title: 'Design Professional Business Cards in Canva with QR Code',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=design+business+cards+in+canva+qr+code',
            language: 'English',
            duration: '17 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Design a double-sided business card in Canva with an embedded working QR code.',
            tasks: ['Front: Brand Logo + Slogan', 'Back: Name, Title, Contact Info, and QR code tested with your mobile camera']
          },
          quiz: [{
            id: 'q-can-13',
            question: 'Before sending a business card design with an embedded QR code to print, what must you test?',
            options: ['Nothing', 'Scan the QR code with a real mobile smartphone camera to verify it immediately opens the correct target URL', 'Check if it is blue', 'Resize to square'],
            correctOptionIndex: 1,
            explanation: 'Testing QR codes in physical reality prevents thousands of misprinted unusable cards.'
          }]
        },
        {
          id: 'les-can-14',
          dayNumber: 14,
          title: 'Designing Double-Sided Marketing Flyers & Trifold Brochures',
          titleMl: 'ഡേ 14: പ്രൊമോഷണൽ ഫ്ലയറുകളും ബ്രോഷറുകളും',
          durationMinutes: 50,
          overview: 'Format 2-sided A5 flyers with headline offers, product highlights, customer reviews, and clear location maps.',
          concepts: ['Visual flow on 2-sided collateral', 'Designing for rapid scanning at exhibition stalls'],
          simpleEnglishGuide: 'Side 1 is the Hook (Why should I care?). Side 2 is the Proof and Detail (What do you sell, what does it cost, how do I contact you?).',
          malayalamNotes: 'ഉൽപ്പന്നങ്ങൾ പരിചയപ്പെടുത്തുന്ന ലഘുലേഖകൾ ഭംഗിയായി ഡിസൈൻ ചെയ്യുന്നു.',
          officialDocLinks: [{ title: 'Canva Flyer Design Best Practices', url: 'https://www.canva.com/flyers/' }],
          videoResources: [{
            title: 'How to Design a Professional Flyer in Canva Step by Step',
            provider: 'YouTube Design Training',
            url: 'https://www.youtube.com/results?search_query=how+to+design+a+flyer+in+canva+step+by+step',
            language: 'English',
            duration: '21 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Design a double-sided A5 promotional flyer for an eco-friendly resort in Wayanad, Kerala.',
            tasks: ['Side 1: Scenic Hero Image, Tagline, Introductory Offer', 'Side 2: Amenities grid, Package Pricing, Map & WhatsApp QR code']
          },
          quiz: [{
            id: 'q-can-14',
            question: 'What is the primary function of Side 1 of a promotional marketing flyer?',
            options: ['To list all legal terms', 'To grab visual attention with a compelling headline, imagery, and clear value proposition so the reader flips it over', 'To display the bar code', 'To leave blank'],
            correctOptionIndex: 1,
            explanation: 'The front cover must capture interest within seconds to encourage the recipient to read further.'
          }]
        },
        {
          id: 'les-can-15',
          dayNumber: 15,
          title: 'Week 3 Review: Complete Corporate Collateral Suite Drill',
          titleMl: 'ഡേ 15: ആഴ്ച 3 കോർപ്പറേറ്റ് പ്രിന്റ് പരീക്ഷ',
          durationMinutes: 60,
          overview: 'Assemble a complete business launch kit: 10-slide Pitch Deck, 1 Double-Sided Business Card, and 1 Double-Sided Promotional Flyer.',
          concepts: ['Consolidation of presentation and print production'],
          simpleEnglishGuide: 'This collateral suite is your ticket to charging ₹10,000 to ₹15,000 per brand for complete launch branding packages.',
          malayalamNotes: 'ഒരു പുതിയ കമ്പനിക്ക് ആവശ്യമായ എല്ലാ ഡിസൈൻ മെറ്റീരിയലുകളും ഒന്നിച്ച് തയ്യാറാക്കുന്നു.',
          officialDocLinks: [{ title: 'Canva Brand Kit Export', url: 'https://www.canva.com' }],
          videoResources: [{
            title: 'Complete Brand Identity Pack Design Walkthrough in Canva',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=complete+brand+identity+pack+canva',
            language: 'English',
            duration: '26 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Export all Week 3 collateral into print-ready PDF Print files with bleed and crop marks enabled.',
            tasks: ['Verify typography and alignment across all items']
          },
          quiz: [{
            id: 'q-can-15',
            question: 'Which Canva download format should be selected when sending files to a commercial printing press?',
            options: ['Standard MP4 Video', 'PDF Print with "Crop marks and bleed" checked and CMYK selected if available', 'Low-resolution GIF', 'Raw text'],
            correctOptionIndex: 1,
            explanation: 'PDF Print generates uncompressed 300 DPI vector artwork with necessary cutting guidelines.'
          }]
        }
      ]
    },
    {
      id: 'mod-can-4',
      weekNumber: 4,
      title: 'Week 4: Portfolio, Client Mockups & Freelance Launch',
      titleMl: 'ആഴ്ച 4: മോക്കപ്പുകൾ, പോർട്ട്ഫോളിയോ & ഫ്രീലാൻസിംഗ്',
      objective: 'Render designs on realistic 3D product mockups, build a Behance portfolio showcase, write an ATS resume, and launch client gigs.',
      lessons: [
        {
          id: 'les-can-16',
          dayNumber: 16,
          title: 'Realistic Mockups: Showcasing Designs on Phones, Shirts & Posters',
          titleMl: 'ഡേ 16: റിയലിസ്റ്റിക് മോക്കപ്പുകൾ (Mockups) നിർമ്മിക്കൽ',
          durationMinutes: 50,
          overview: 'Place your flat 2D designs onto realistic 3D models using Canva Smartmockups (smartphones, tote bags, billboard posters).',
          concepts: ['Canva Smartmockups tool', 'Why mockups look 10x more valuable than flat 2D rectangle files to clients'],
          simpleEnglishGuide: 'Do not just send a flat square image. Put the image inside a realistic photo of a hand holding an iPhone. Instantly the client sees how it will look in real life.',
          malayalamNotes: 'നിങ്ങൾ ചെയ്ത ഡിസൈനുകൾ ഫോണുകളിലും പോസ്റ്ററുകളിലും യഥാർത്ഥമായി കാണുന്ന രീതിയിലുള്ള മോക്കപ്പുകൾ നിർമ്മിക്കുന്നു.',
          officialDocLinks: [{ title: 'Canva Smartmockups Guide', url: 'https://www.canva.com/smartmockups/' }],
          videoResources: [{
            title: 'How to Use Canva Smartmockups for Professional Presentations',
            provider: 'YouTube Design Training',
            url: 'https://www.youtube.com/results?search_query=how+to+use+canva+smartmockups',
            language: 'English',
            duration: '17 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Create 3 realistic mockup showcases.',
            tasks: ['1. Instagram post shown on an iPhone mockup', '2. Business card shown on textured paper mockup', '3. Flyer shown in modern frame mockup']
          },
          quiz: [{
            id: 'q-can-16',
            question: 'Why do freelance designers present their work inside realistic 3D device or print mockups?',
            options: ['To hide mistakes', 'Because clients easily visualize real-world application, making the design look commercial, tangible, and high-value', 'It is required by law', 'To reduce file size'],
            correctOptionIndex: 1,
            explanation: 'Realistic mockups bridge the imagination gap, elevating perceived commercial value.'
          }]
        },
        {
          id: 'les-can-17',
          dayNumber: 17,
          title: 'Building a Stunning Behance / Canva Website Portfolio',
          titleMl: 'ഡേ 17: ബിഹാൻസ് (Behance) പോർട്ട്ഫോളിയോ നിർമ്മാണം',
          durationMinutes: 55,
          overview: 'Publish a public design portfolio on Behance or Canva Websites showcasing your 3 core projects: Brand Social Kit, Pitch Deck, and Print Collateral.',
          concepts: ['Case study presentation flow (Client Background -> The Challenge -> Visual Solution -> Full Mockups)', 'Behance project dimensions'],
          simpleEnglishGuide: 'Never email 20 loose image attachments to a client. Send ONE clean portfolio link where your projects are arranged like an art gallery.',
          malayalamNotes: 'തയ്യാറാക്കിയ ഡിസൈനുകൾ ഒരു ഓൺലൈൻ ഗാലറി പോലെ പ്രദർശിപ്പിക്കുന്ന പോർട്ട്ഫോളിയോ പേജ്.',
          officialDocLinks: [{ title: 'Canva Websites Guide', url: 'https://www.canva.com/websites/' }],
          videoResources: [{
            title: 'How to Build a Graphic Design Portfolio in Behance / Canva',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=build+graphic+design+portfolio+behance+canva',
            language: 'English',
            duration: '22 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Build a free public Portfolio using Canva Websites or Behance.',
            tasks: ['Publish 3 complete case studies with mockups, color palettes, and typography explanations']
          },
          quiz: [{
            id: 'q-can-17',
            question: 'What should accompany visual graphics in a professional design case study?',
            options: ['Only memes', 'A brief explanation of the client\'s business goal, the target audience, and why specific colors and fonts were chosen', 'The designer\'s home address', 'Lyrics of songs'],
            correctOptionIndex: 1,
            explanation: 'Explaining design rationale proves you design with strategic commercial purpose.'
          }]
        },
        {
          id: 'les-can-18',
          dayNumber: 18,
          title: 'Writing an ATS Design Resume & Freelance Gig Listings',
          titleMl: 'ഡേ 18: റെസ്യൂമെയും ഗിഗ്ഗ് വിവരങ്ങളും',
          durationMinutes: 50,
          overview: 'Draft your resume and Upwork/Fiverr gig descriptions targeting: "Canva Graphic Designer", "Social Media Content Designer", "Presentation Slide Specialist".',
          concepts: ['Setting up 3-tier freelance packages (Basic, Standard, Premium)', 'Writing persuasive gig descriptions'],
          simpleEnglishGuide: 'Package your services clearly: "Basic: 5 Instagram Posts. Standard: 15 Posts + 5 Stories. Premium: 30 Posts + Banners + Brand Style Guide". Clear packages make it easy for clients to buy.',
          malayalamNotes: 'ക്ലയന്റുകൾക്ക് എളുപ്പത്തിൽ തിരഞ്ഞെടുക്കാൻ സാധിക്കുന്ന ഫ്രീലാൻസ് പാക്കേജുകൾ തയ്യാറാക്കുന്നു.',
          officialDocLinks: [{ title: 'Career Launchpad Resume Builder', url: '/resume-builder' }],
          videoResources: [{
            title: 'How to Sell Canva Design Services on Fiverr & Upwork',
            provider: 'YouTube Freelance Guides',
            url: 'https://www.youtube.com/results?search_query=sell+canva+design+services+fiverr+upwork',
            language: 'English',
            duration: '20 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Build your Graphic Designer resume using the Career Launchpad builder.',
            tasks: ['Highlight Canva, Typography, Visual Hierarchy, Social Media Kits, and Pitch Decks']
          },
          quiz: [{
            id: 'q-can-18',
            question: 'Which freelance gig title attracts the most targeted commercial clients?',
            options: ['I will make pretty pictures', 'I will design a cohesive 9-post Instagram grid and educational carousels in Canva for your brand', 'I love Canva', 'Design stuff'],
            correctOptionIndex: 1,
            explanation: 'Naming the exact platform (Instagram), asset format (grid, carousel), and tool (Canva) attracts high-intent buyers.'
          }]
        },
        {
          id: 'les-can-19',
          dayNumber: 19,
          title: 'Handling Client Revisions & Creative Feedback Professionally',
          titleMl: 'ഡേ 19: ക്ലയന്റ് മാറ്റങ്ങളും ഫീഡ്‌ബാക്കും കൈകാര്യം ചെയ്യൽ',
          durationMinutes: 50,
          overview: 'Learn how to handle the inevitable "Can you make the logo bigger?" request without losing patience or compromising design integrity.',
          concepts: ['Setting limits on revisions (e.g. 2 rounds of included revisions)', 'Explaining design choices politely through user psychology'],
          simpleEnglishGuide: 'Never take design critique personally. If a client wants a change that looks bad, explain politely: "We can certainly make that font larger, but leaving that space ensures your website URL remains the first thing readers notice".',
          malayalamNotes: 'ക്ലയന്റുകൾ മാറ്റങ്ങൾ ആവശ്യപ്പെടുമ്പോൾ മാന്യമായി ഇടപെടുന്ന രീതി.',
          officialDocLinks: [{ title: 'Client Communication for Freelancers', url: 'https://www.canva.com/designschool/' }],
          videoResources: [{
            title: 'How to Handle Client Design Feedback & Revisions Calmly',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=handling+client+design+feedback+revisions',
            language: 'English',
            duration: '16 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Write polite professional responses to 3 difficult client revision requests.',
            tasks: ['1. Client wants to add 50 words of tiny text to an Instagram banner', '2. Client asks for a complete redesign after approving the initial concept']
          },
          quiz: [{
            id: 'q-can-19',
            question: 'What is the best way to prevent endless, unpaid revision loops with freelance clients?',
            options: ['Never reply to messages', 'State clearly in your proposal: "Includes 2 rounds of revisions; additional rounds billed at hourly rate"', 'Argue angrily', 'Give up'],
            correctOptionIndex: 1,
            explanation: 'Defining explicit revision boundaries upfront manages client expectations and protects your time.'
          }]
        },
        {
          id: 'les-can-20',
          dayNumber: 20,
          title: 'Course Final Assessment & First-Month Workplace Blueprint',
          titleMl: 'ഡേ 20: ഫൈനൽ അസസ്സ്‌മെന്റും കരിയർ ഗൈഡും',
          durationMinutes: 60,
          overview: 'Complete the comprehensive design competency assessment, submit your portfolio, and map your progression from Canva to Figma and Adobe Illustrator.',
          concepts: ['Transitioning from template customization to original vector illustration', 'First 30 days freelance client acquisition routine'],
          simpleEnglishGuide: 'Canva is your powerful launchpad. As you master visual design, learning Figma and Illustrator next will feel natural and double your earning potential.',
          malayalamNotes: 'കാൻവയിൽ നിന്ന് ഫിഗ്മയിലേക്കും ഫോട്ടോഷോപ്പിലേക്കും കരിയർ ഉയർത്താനുള്ള വഴികൾ.',
          officialDocLinks: [{ title: 'Canva Design Certification Overview', url: 'https://www.canva.com' }],
          videoResources: [{
            title: 'From Canva Designer to Full-Time Graphic Designer Roadmap',
            provider: 'YouTube Design Training',
            url: 'https://www.youtube.com/results?search_query=canva+to+full+time+graphic+designer+roadmap',
            language: 'English',
            duration: '21 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Submit your 3 design projects to the Career Launchpad Skill Assessment system.',
            tasks: ['Verify all portfolio links are public and accessible', 'Review your verified completion badge']
          },
          quiz: [{
            id: 'q-can-20',
            question: 'What professional design tool represents the natural next step after mastering Canva layout fundamentals?',
            options: ['MS Paint', 'Figma (for digital UI/UX) and Adobe Illustrator (for advanced custom vector drawing)', 'TextEdit', 'Calculators'],
            correctOptionIndex: 1,
            explanation: 'Figma and Illustrator expand visual design skills into high-paying digital product and vector design.'
          }]
        }
      ]
    },
    {
      id: 'mod-canva-5',
      weekNumber: 5,
      title: 'Week 5: Carousel Decks, YouTube Thumbnails & Print Collateral',
      titleMl: 'ആഴ്ച 5: ഇൻസ്റ്റാഗ്രാം കറൗസലുകൾ, യൂട്യൂബ് തംബ്‌നെയിൽ & പ്രിന്റ് ഡിസൈൻ',
      objective: 'Master multi-slide LinkedIn/Instagram carousels, high-CTR YouTube thumbnails, and print-ready business cards.',
      lessons: [
        {
          id: 'les-canva-21',
          dayNumber: 21,
          title: 'Multi-Slide LinkedIn & Instagram Carousels',
          titleMl: 'ഇൻസ്റ്റാഗ്രാം & ലിങ്ക്ഡ്ഇൻ കറൗസലുകൾ',
          durationMinutes: 50,
          overview: 'Master professional multi-slide linkedin & instagram carousels workflows used in real company environments.',
          concepts: ["Foundations of Multi-Slide LinkedIn & Instagram Carousels", "Industry standard best practices", "Quality verification standards"],
          simpleEnglishGuide: 'Practical zero-knowledge step-by-step guidance: Designing seamless multi-slide carousels that drive swipes and saves.. Always verify your final deliverables before sharing.',
          malayalamNotes: 'ഇൻസ്റ്റാഗ്രാം & ലിങ്ക്ഡ്ഇൻ കറൗസലുകൾ: ജോലിസ്ഥലത്ത് ഈ വൈദഗ്ധ്യം ഉപയോഗിക്കുന്ന യഥാർത്ഥ രീതി ലളിതമായി പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'Multi-Slide LinkedIn & Instagram Carousels Documentation & Guides', url: 'https://www.google.com' }],
          videoResources: [{
            title: 'Multi-Slide LinkedIn & Instagram Carousels — Complete Step-by-Step Tutorial',
            provider: 'Career Launchpad Curated',
            url: 'https://www.google.com',
            language: 'English',
            duration: '25 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Complete the practical workplace task for Day 21: Designing seamless multi-slide carousels that drive swipes and saves..',
            tasks: [
              'Review the provided instructions and download the exercise worksheet.',
              'Apply the required software operations and double-check outputs.',
              'Save your completed deliverable into your weekly portfolio folder.'
            ]
          },
          quiz: [{
            id: 'q-canva-21',
            question: 'What is the key objective of Multi-Slide LinkedIn & Instagram Carousels in this role?',
            options: ["To bypass regular office standards", "To ensure high accuracy, efficiency and adherence to professional standards in multi-slide linkedin & instagram carousels", "To increase unnecessary overhead", "To work without any client documentation"],
            correctOptionIndex: 1,
            explanation: 'Mastering multi-slide linkedin & instagram carousels ensures tasks are delivered with professional accuracy and zero preventable errors.'
          }]
        },
        {
          id: 'les-canva-22',
          dayNumber: 22,
          title: 'YouTube Thumbnail Psychology & CTR Design',
          titleMl: 'യൂട്യൂബ് തംബ്‌നെയിൽ ഡിസൈൻ & സിടിആർ',
          durationMinutes: 50,
          overview: 'Master professional youtube thumbnail psychology & ctr design workflows used in real company environments.',
          concepts: ["Foundations of YouTube Thumbnail Psychology & CTR Design", "Industry standard best practices", "Quality verification standards"],
          simpleEnglishGuide: 'Practical zero-knowledge step-by-step guidance: Creating high-contrast, expressive thumbnails optimized for mobile feeds.. Always verify your final deliverables before sharing.',
          malayalamNotes: 'യൂട്യൂബ് തംബ്‌നെയിൽ ഡിസൈൻ & സിടിആർ: ജോലിസ്ഥലത്ത് ഈ വൈദഗ്ധ്യം ഉപയോഗിക്കുന്ന യഥാർത്ഥ രീതി ലളിതമായി പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'YouTube Thumbnail Psychology & CTR Design Documentation & Guides', url: 'https://www.google.com' }],
          videoResources: [{
            title: 'YouTube Thumbnail Psychology & CTR Design — Complete Step-by-Step Tutorial',
            provider: 'Career Launchpad Curated',
            url: 'https://www.google.com',
            language: 'English',
            duration: '25 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Complete the practical workplace task for Day 22: Creating high-contrast, expressive thumbnails optimized for mobile feeds..',
            tasks: [
              'Review the provided instructions and download the exercise worksheet.',
              'Apply the required software operations and double-check outputs.',
              'Save your completed deliverable into your weekly portfolio folder.'
            ]
          },
          quiz: [{
            id: 'q-canva-22',
            question: 'What is the key objective of YouTube Thumbnail Psychology & CTR Design in this role?',
            options: ["To bypass regular office standards", "To ensure high accuracy, efficiency and adherence to professional standards in youtube thumbnail psychology & ctr design", "To increase unnecessary overhead", "To work without any client documentation"],
            correctOptionIndex: 1,
            explanation: 'Mastering youtube thumbnail psychology & ctr design ensures tasks are delivered with professional accuracy and zero preventable errors.'
          }]
        },
        {
          id: 'les-canva-23',
          dayNumber: 23,
          title: 'Print-Ready Collateral: Business Cards & Flyers',
          titleMl: 'ബിസിനസ്സ് കാർഡുകൾ & ഫ്ലയറുകൾ',
          durationMinutes: 50,
          overview: 'Master professional print-ready collateral: business cards & flyers workflows used in real company environments.',
          concepts: ["Foundations of Print-Ready Collateral: Business Cards & Flyers", "Industry standard best practices", "Quality verification standards"],
          simpleEnglishGuide: 'Practical zero-knowledge step-by-step guidance: Configuring 300 DPI CMYK PDFs with bleed lines and safe margins.. Always verify your final deliverables before sharing.',
          malayalamNotes: 'ബിസിനസ്സ് കാർഡുകൾ & ഫ്ലയറുകൾ: ജോലിസ്ഥലത്ത് ഈ വൈദഗ്ധ്യം ഉപയോഗിക്കുന്ന യഥാർത്ഥ രീതി ലളിതമായി പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'Print-Ready Collateral: Business Cards & Flyers Documentation & Guides', url: 'https://www.google.com' }],
          videoResources: [{
            title: 'Print-Ready Collateral: Business Cards & Flyers — Complete Step-by-Step Tutorial',
            provider: 'Career Launchpad Curated',
            url: 'https://www.google.com',
            language: 'English',
            duration: '25 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Complete the practical workplace task for Day 23: Configuring 300 DPI CMYK PDFs with bleed lines and safe margins..',
            tasks: [
              'Review the provided instructions and download the exercise worksheet.',
              'Apply the required software operations and double-check outputs.',
              'Save your completed deliverable into your weekly portfolio folder.'
            ]
          },
          quiz: [{
            id: 'q-canva-23',
            question: 'What is the key objective of Print-Ready Collateral: Business Cards & Flyers in this role?',
            options: ["To bypass regular office standards", "To ensure high accuracy, efficiency and adherence to professional standards in print-ready collateral: business cards & flyers", "To increase unnecessary overhead", "To work without any client documentation"],
            correctOptionIndex: 1,
            explanation: 'Mastering print-ready collateral: business cards & flyers ensures tasks are delivered with professional accuracy and zero preventable errors.'
          }]
        },
        {
          id: 'les-canva-24',
          dayNumber: 24,
          title: 'Infographics & Visual Data Cards in Canva',
          titleMl: 'ഇൻഫോഗ്രാഫിക്സ് & ഡാറ്റാ കാർഡുകൾ',
          durationMinutes: 50,
          overview: 'Master professional infographics & visual data cards in canva workflows used in real company environments.',
          concepts: ["Foundations of Infographics & Visual Data Cards in Canva", "Industry standard best practices", "Quality verification standards"],
          simpleEnglishGuide: 'Practical zero-knowledge step-by-step guidance: Transforming boring statistics into visually engaging charts and metric cards.. Always verify your final deliverables before sharing.',
          malayalamNotes: 'ഇൻഫോഗ്രാഫിക്സ് & ഡാറ്റാ കാർഡുകൾ: ജോലിസ്ഥലത്ത് ഈ വൈദഗ്ധ്യം ഉപയോഗിക്കുന്ന യഥാർത്ഥ രീതി ലളിതമായി പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'Infographics & Visual Data Cards in Canva Documentation & Guides', url: 'https://www.google.com' }],
          videoResources: [{
            title: 'Infographics & Visual Data Cards in Canva — Complete Step-by-Step Tutorial',
            provider: 'Career Launchpad Curated',
            url: 'https://www.google.com',
            language: 'English',
            duration: '25 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Complete the practical workplace task for Day 24: Transforming boring statistics into visually engaging charts and metric cards..',
            tasks: [
              'Review the provided instructions and download the exercise worksheet.',
              'Apply the required software operations and double-check outputs.',
              'Save your completed deliverable into your weekly portfolio folder.'
            ]
          },
          quiz: [{
            id: 'q-canva-24',
            question: 'What is the key objective of Infographics & Visual Data Cards in Canva in this role?',
            options: ["To bypass regular office standards", "To ensure high accuracy, efficiency and adherence to professional standards in infographics & visual data cards in canva", "To increase unnecessary overhead", "To work without any client documentation"],
            correctOptionIndex: 1,
            explanation: 'Mastering infographics & visual data cards in canva ensures tasks are delivered with professional accuracy and zero preventable errors.'
          }]
        },
        {
          id: 'les-canva-25',
          dayNumber: 25,
          title: 'Short-Form Social Video & Reel Animation',
          titleMl: 'ഷോർട്ട് സോഷ്യൽ വീഡിയോ & റീൽ ആനിമേഷൻ',
          durationMinutes: 50,
          overview: 'Master professional short-form social video & reel animation workflows used in real company environments.',
          concepts: ["Foundations of Short-Form Social Video & Reel Animation", "Industry standard best practices", "Quality verification standards"],
          simpleEnglishGuide: 'Practical zero-knowledge step-by-step guidance: Adding subtle text reveals, transitions, and audio sync to video clips.. Always verify your final deliverables before sharing.',
          malayalamNotes: 'ഷോർട്ട് സോഷ്യൽ വീഡിയോ & റീൽ ആനിമേഷൻ: ജോലിസ്ഥലത്ത് ഈ വൈദഗ്ധ്യം ഉപയോഗിക്കുന്ന യഥാർത്ഥ രീതി ലളിതമായി പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'Short-Form Social Video & Reel Animation Documentation & Guides', url: 'https://www.google.com' }],
          videoResources: [{
            title: 'Short-Form Social Video & Reel Animation — Complete Step-by-Step Tutorial',
            provider: 'Career Launchpad Curated',
            url: 'https://www.google.com',
            language: 'English',
            duration: '25 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Complete the practical workplace task for Day 25: Adding subtle text reveals, transitions, and audio sync to video clips..',
            tasks: [
              'Review the provided instructions and download the exercise worksheet.',
              'Apply the required software operations and double-check outputs.',
              'Save your completed deliverable into your weekly portfolio folder.'
            ]
          },
          quiz: [{
            id: 'q-canva-25',
            question: 'What is the key objective of Short-Form Social Video & Reel Animation in this role?',
            options: ["To bypass regular office standards", "To ensure high accuracy, efficiency and adherence to professional standards in short-form social video & reel animation", "To increase unnecessary overhead", "To work without any client documentation"],
            correctOptionIndex: 1,
            explanation: 'Mastering short-form social video & reel animation ensures tasks are delivered with professional accuracy and zero preventable errors.'
          }]
        }
      ]
    },
    {
      id: 'mod-canva-6',
      weekNumber: 6,
      title: 'Week 6: Motion Graphics, Brand Kit Systems & Graphic Design Launch',
      titleMl: 'ആഴ്ച 6: മോഷൻ ഗ്രാഫിക്സ്, ബ്രാൻഡ് കിറ്റ് & ഡിസൈൻ കരിയർ ലോഞ്ച്',
      objective: 'Animate short social reels in Canva, build full client brand guidelines, and land freelance design clients.',
      lessons: [
        {
          id: 'les-canva-26',
          dayNumber: 26,
          title: 'Building Complete Client Brand Kits',
          titleMl: 'കംപ്ലീറ്റ് ബ്രാൻഡ് കിറ്റുകൾ നിർമ്മിക്കൽ',
          durationMinutes: 50,
          overview: 'Master professional building complete client brand kits workflows used in real company environments.',
          concepts: ["Foundations of Building Complete Client Brand Kits", "Industry standard best practices", "Quality verification standards"],
          simpleEnglishGuide: 'Practical zero-knowledge step-by-step guidance: Organizing primary fonts, color palettes, and logo usage guidelines for clients.. Always verify your final deliverables before sharing.',
          malayalamNotes: 'കംപ്ലീറ്റ് ബ്രാൻഡ് കിറ്റുകൾ നിർമ്മിക്കൽ: ജോലിസ്ഥലത്ത് ഈ വൈദഗ്ധ്യം ഉപയോഗിക്കുന്ന യഥാർത്ഥ രീതി ലളിതമായി പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'Building Complete Client Brand Kits Documentation & Guides', url: 'https://www.google.com' }],
          videoResources: [{
            title: 'Building Complete Client Brand Kits — Complete Step-by-Step Tutorial',
            provider: 'Career Launchpad Curated',
            url: 'https://www.google.com',
            language: 'English',
            duration: '25 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Complete the practical workplace task for Day 26: Organizing primary fonts, color palettes, and logo usage guidelines for clients..',
            tasks: [
              'Review the provided instructions and download the exercise worksheet.',
              'Apply the required software operations and double-check outputs.',
              'Save your completed deliverable into your weekly portfolio folder.'
            ]
          },
          quiz: [{
            id: 'q-canva-26',
            question: 'What is the key objective of Building Complete Client Brand Kits in this role?',
            options: ["To bypass regular office standards", "To ensure high accuracy, efficiency and adherence to professional standards in building complete client brand kits", "To increase unnecessary overhead", "To work without any client documentation"],
            correctOptionIndex: 1,
            explanation: 'Mastering building complete client brand kits ensures tasks are delivered with professional accuracy and zero preventable errors.'
          }]
        },
        {
          id: 'les-canva-27',
          dayNumber: 27,
          title: 'Presentation Pitch Decks for Startups',
          titleMl: 'സ്റ്റാർട്ടപ്പുകൾക്കുള്ള പ്രസന്റേഷൻ ഡെക്കുകൾ',
          durationMinutes: 50,
          overview: 'Master professional presentation pitch decks for startups workflows used in real company environments.',
          concepts: ["Foundations of Presentation Pitch Decks for Startups", "Industry standard best practices", "Quality verification standards"],
          simpleEnglishGuide: 'Practical zero-knowledge step-by-step guidance: Designing 10-slide clean investor pitch decks with visual consistency.. Always verify your final deliverables before sharing.',
          malayalamNotes: 'സ്റ്റാർട്ടപ്പുകൾക്കുള്ള പ്രസന്റേഷൻ ഡെക്കുകൾ: ജോലിസ്ഥലത്ത് ഈ വൈദഗ്ധ്യം ഉപയോഗിക്കുന്ന യഥാർത്ഥ രീതി ലളിതമായി പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'Presentation Pitch Decks for Startups Documentation & Guides', url: 'https://www.google.com' }],
          videoResources: [{
            title: 'Presentation Pitch Decks for Startups — Complete Step-by-Step Tutorial',
            provider: 'Career Launchpad Curated',
            url: 'https://www.google.com',
            language: 'English',
            duration: '25 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Complete the practical workplace task for Day 27: Designing 10-slide clean investor pitch decks with visual consistency..',
            tasks: [
              'Review the provided instructions and download the exercise worksheet.',
              'Apply the required software operations and double-check outputs.',
              'Save your completed deliverable into your weekly portfolio folder.'
            ]
          },
          quiz: [{
            id: 'q-canva-27',
            question: 'What is the key objective of Presentation Pitch Decks for Startups in this role?',
            options: ["To bypass regular office standards", "To ensure high accuracy, efficiency and adherence to professional standards in presentation pitch decks for startups", "To increase unnecessary overhead", "To work without any client documentation"],
            correctOptionIndex: 1,
            explanation: 'Mastering presentation pitch decks for startups ensures tasks are delivered with professional accuracy and zero preventable errors.'
          }]
        },
        {
          id: 'les-canva-28',
          dayNumber: 28,
          title: 'Capstone: Complete Brand Visual Overhaul',
          titleMl: 'ക്യാപ്സ്റ്റോൺ - പൂർണ്ണ ബ്രാൻഡ് വിഷ്വൽ റീഡിസൈൻ',
          durationMinutes: 50,
          overview: 'Master professional capstone: complete brand visual overhaul workflows used in real company environments.',
          concepts: ["Foundations of Capstone: Complete Brand Visual Overhaul", "Industry standard best practices", "Quality verification standards"],
          simpleEnglishGuide: 'Practical zero-knowledge step-by-step guidance: Redesigning social assets, brochures, presentations, and cards for a live business.. Always verify your final deliverables before sharing.',
          malayalamNotes: 'ക്യാപ്സ്റ്റോൺ - പൂർണ്ണ ബ്രാൻഡ് വിഷ്വൽ റീഡിസൈൻ: ജോലിസ്ഥലത്ത് ഈ വൈദഗ്ധ്യം ഉപയോഗിക്കുന്ന യഥാർത്ഥ രീതി ലളിതമായി പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'Capstone: Complete Brand Visual Overhaul Documentation & Guides', url: 'https://www.google.com' }],
          videoResources: [{
            title: 'Capstone: Complete Brand Visual Overhaul — Complete Step-by-Step Tutorial',
            provider: 'Career Launchpad Curated',
            url: 'https://www.google.com',
            language: 'English',
            duration: '25 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Complete the practical workplace task for Day 28: Redesigning social assets, brochures, presentations, and cards for a live business..',
            tasks: [
              'Review the provided instructions and download the exercise worksheet.',
              'Apply the required software operations and double-check outputs.',
              'Save your completed deliverable into your weekly portfolio folder.'
            ]
          },
          quiz: [{
            id: 'q-canva-28',
            question: 'What is the key objective of Capstone: Complete Brand Visual Overhaul in this role?',
            options: ["To bypass regular office standards", "To ensure high accuracy, efficiency and adherence to professional standards in capstone: complete brand visual overhaul", "To increase unnecessary overhead", "To work without any client documentation"],
            correctOptionIndex: 1,
            explanation: 'Mastering capstone: complete brand visual overhaul ensures tasks are delivered with professional accuracy and zero preventable errors.'
          }]
        },
        {
          id: 'les-canva-29',
          dayNumber: 29,
          title: 'Publishing Your Design Portfolio on Behance & PDF',
          titleMl: 'ബിഹാൻസിലും പിഡിഎഫിലും പോർട്ട്ഫോളിയോ',
          durationMinutes: 50,
          overview: 'Master professional publishing your design portfolio on behance & pdf workflows used in real company environments.',
          concepts: ["Foundations of Publishing Your Design Portfolio on Behance & PDF", "Industry standard best practices", "Quality verification standards"],
          simpleEnglishGuide: 'Practical zero-knowledge step-by-step guidance: Packaging your 5 best design projects into a high-converting portfolio deck.. Always verify your final deliverables before sharing.',
          malayalamNotes: 'ബിഹാൻസിലും പിഡിഎഫിലും പോർട്ട്ഫോളിയോ: ജോലിസ്ഥലത്ത് ഈ വൈദഗ്ധ്യം ഉപയോഗിക്കുന്ന യഥാർത്ഥ രീതി ലളിതമായി പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'Publishing Your Design Portfolio on Behance & PDF Documentation & Guides', url: 'https://www.google.com' }],
          videoResources: [{
            title: 'Publishing Your Design Portfolio on Behance & PDF — Complete Step-by-Step Tutorial',
            provider: 'Career Launchpad Curated',
            url: 'https://www.google.com',
            language: 'English',
            duration: '25 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Complete the practical workplace task for Day 29: Packaging your 5 best design projects into a high-converting portfolio deck..',
            tasks: [
              'Review the provided instructions and download the exercise worksheet.',
              'Apply the required software operations and double-check outputs.',
              'Save your completed deliverable into your weekly portfolio folder.'
            ]
          },
          quiz: [{
            id: 'q-canva-29',
            question: 'What is the key objective of Publishing Your Design Portfolio on Behance & PDF in this role?',
            options: ["To bypass regular office standards", "To ensure high accuracy, efficiency and adherence to professional standards in publishing your design portfolio on behance & pdf", "To increase unnecessary overhead", "To work without any client documentation"],
            correctOptionIndex: 1,
            explanation: 'Mastering publishing your design portfolio on behance & pdf ensures tasks are delivered with professional accuracy and zero preventable errors.'
          }]
        },
        {
          id: 'les-canva-30',
          dayNumber: 30,
          title: 'Graduation & Landing Freelance Design Clients',
          titleMl: 'സർട്ടിഫിക്കേഷൻ & ഡിസൈൻ ക്ലയന്റുകളെ കണ്ടെത്തൽ',
          durationMinutes: 50,
          overview: 'Master professional graduation & landing freelance design clients workflows used in real company environments.',
          concepts: ["Foundations of Graduation & Landing Freelance Design Clients", "Industry standard best practices", "Quality verification standards"],
          simpleEnglishGuide: 'Practical zero-knowledge step-by-step guidance: Final assessment, setting freelance pricing, and pitching local and remote clients.. Always verify your final deliverables before sharing.',
          malayalamNotes: 'സർട്ടിഫിക്കേഷൻ & ഡിസൈൻ ക്ലയന്റുകളെ കണ്ടെത്തൽ: ജോലിസ്ഥലത്ത് ഈ വൈദഗ്ധ്യം ഉപയോഗിക്കുന്ന യഥാർത്ഥ രീതി ലളിതമായി പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'Graduation & Landing Freelance Design Clients Documentation & Guides', url: 'https://www.google.com' }],
          videoResources: [{
            title: 'Graduation & Landing Freelance Design Clients — Complete Step-by-Step Tutorial',
            provider: 'Career Launchpad Curated',
            url: 'https://www.google.com',
            language: 'English',
            duration: '25 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Complete the practical workplace task for Day 30: Final assessment, setting freelance pricing, and pitching local and remote clients..',
            tasks: [
              'Review the provided instructions and download the exercise worksheet.',
              'Apply the required software operations and double-check outputs.',
              'Save your completed deliverable into your weekly portfolio folder.'
            ]
          },
          quiz: [{
            id: 'q-canva-30',
            question: 'What is the key objective of Graduation & Landing Freelance Design Clients in this role?',
            options: ["To bypass regular office standards", "To ensure high accuracy, efficiency and adherence to professional standards in graduation & landing freelance design clients", "To increase unnecessary overhead", "To work without any client documentation"],
            correctOptionIndex: 1,
            explanation: 'Mastering graduation & landing freelance design clients ensures tasks are delivered with professional accuracy and zero preventable errors.'
          }]
        }
      ]
    }
  ],
  projects: [
    {
      id: 'proj-can-1',
      title: 'Complete 9-Post Instagram Grid & Seamless Carousel Suite',
      titleMl: 'ഇൻസ്റ്റാഗ്രാം ഗ്രിഡ് & കാറൂസൽ പ്രോജക്റ്റ്',
      description: 'Design a cohesive 9-post Instagram grid and a 5-slide educational swipe carousel for a modern sustainable apparel brand.',
      scenario: 'An ethical organic cotton clothing brand "Loom & Leaf" is launching in Kochi. They need an aesthetic 9-post Instagram profile grid and a viral 5-slide carousel explaining why fast fashion harms the environment.',
      instructions: [
        'Establish a Brand Kit: Primary Forest Green (#1E3F20), Sand Beige (#F3EFE0), Terracotta Accent (#C86446), Fonts: Playfair Display + Montserrat',
        'Design a 9-post grid mockup (1080x1080px each) alternating between product lifestyle shots, customer reviews, and sustainable fabric quotes',
        'Design a 5-slide educational carousel (1080x1350px 4:5 ratio) with seamless connector lines and strong Slide 1 hook and Slide 5 CTA',
        'Present the carousel on a realistic mobile device mockup'
      ],
      deliverables: [
        'Public Canva view-only template link or high-resolution PNG export of the 9-post grid and 5-slide carousel',
        'Device mockup image displaying the carousel in action on an iPhone screen'
      ],
      downloadableDataFilename: 'loom_and_leaf_brand_brief.json',
      downloadableDataContent: JSON.stringify({
        brand_name: 'Loom & Leaf',
        tagline: 'Pure Organic Cotton Apparel',
        carousel_topic: '5 Hidden Costs of Fast Fashion',
        slide_structure: [
          'Slide 1: Did you know a cotton t-shirt takes 2,700 liters of water?',
          'Slide 2: Chemical dyes in regional rivers',
          'Slide 3: Synthetic microplastics in ocean food chains',
          'Slide 4: The organic alternative: Rain-fed cotton',
          'Slide 5: Choose mindful fashion. Explore our 100% organic collection. Save this post.'
        ]
      }, null, 2),
      gradingRubric: [
        { criterion: 'Visual Cohesion & Palette Discipline', weight: 40, standard: 'Consistent adherence to the 60-30-10 color rule and approved typography across all 14 visual assets.' },
        { criterion: 'Carousel Flow & Aspect Ratio', weight: 35, standard: 'Proper 4:5 (1080x1350px) dimensions with engaging visual connectors across slides.' },
        { criterion: 'Typography Legibility', weight: 25, standard: 'Headlines, body text, and quotes maintain clean margin hierarchy with zero awkward word wraps.' }
      ],
      modelSolutionOverview: 'The completed project showcases a cohesive earthy brand presence with clean typographic contrast, subtle drop shadows, and high-converting educational carousel flow.'
    },
    {
      id: 'proj-can-2',
      title: 'Executive 10-Slide Investor & Client Pitch Deck',
      titleMl: 'എക്സിക്യൂട്ടീവ് 10-സ്ലൈഡ് പിച്ച് ഡെക്ക്',
      description: 'Design a clean, modern 10-slide 16:9 widescreen presentation deck for a healthcare diagnostic startup seeking venture capital.',
      scenario: 'A regional mobile health diagnostics startup "Arogya Diagnostics" needs a professional presentation deck for angel investors. The founder has raw bullet points and needs you to turn them into an executive visual deck.',
      instructions: [
        'Set up a 1920x1080px 16:9 presentation in Canva',
        'Follow the 10-slide startup narrative: 1. Title, 2. Problem, 3. Solution, 4. Market Size, 5. Product Demonstration, 6. Business Model, 7. Competitive Edge, 8. Traction / Milestones, 9. Founding Team, 10. The Ask / Contact',
        'Enforce 1 idea per slide with strong typographic headers, structured card containers, and custom icon sets',
        'Ensure all data statistics (e.g. "₹4,500 Cr Market") use large, bold numeral counters with high visual contrast'
      ],
      deliverables: [
        'Interactive Canva presentation view link or exported PDF presentation deck (10 slides)'
      ],
      gradingRubric: [
        { criterion: 'Slide Hierarchy & Card Structuring', weight: 40, standard: 'Information is chunked into clean cards and columns rather than dense walls of text.' },
        { criterion: 'Statistical Visual Punch', weight: 35, standard: 'Key financial and market size figures are visually dominant and instantly scannable.' },
        { criterion: 'Branding Rigor', weight: 25, standard: 'Strict adherence to medical-grade corporate navy and teal accents with consistent footer page numbering.' }
      ],
      modelSolutionOverview: 'The pitch deck looks worthy of Silicon Valley or top Indian venture funds: clean white/navy backgrounds, bold typography, custom icons, and structured comparison cards.'
    },
    {
      id: 'proj-can-3',
      title: 'Print-Ready Corporate Brand Collateral Suite',
      titleMl: 'പ്രിന്റ്-റെഡി കോർപ്പറേറ്റ് ബ്രാൻഡിംഗ് കിറ്റ്',
      description: 'Design a double-sided business card with working QR code and an A4 promotional marketing flyer with 3mm print bleed and crop marks.',
      scenario: 'A specialty specialty spice roaster and café "SpiceCraft Artisan Roasters" in Fort Kochi needs print marketing collateral for their grand opening.',
      instructions: [
        'Design a Double-Sided Business Card (3.5x2 inches): Front with foil-look logo motif, Back with clean typography and working QR code linking to their menu',
        'Design an A4 Double-Sided Promotional Flyer: Side 1 with mouth-watering photography and grand opening discount, Side 2 with menu highlights and map',
        'Enable "Show Print Bleed" (3mm) and ensure all background colors extend to the bleed boundary while text stays inside safe margins',
        'Export final files as "PDF Print" with "Crop marks and bleed" checked'
      ],
      deliverables: [
        'Print-ready PDF files with crop marks and bleed verified',
        'Realistic 3D mockup photos displaying the card and flyer on wooden café tables'
      ],
      gradingRubric: [
        { criterion: 'Print Bleed & Crop Mark Accuracy', weight: 45, standard: 'Background artwork extends past the trim line into the 3mm bleed area with active crop marks.' },
        { criterion: 'QR Code Functionality', weight: 30, standard: 'Embedded QR code scans instantly with smartphone cameras to open the target landing page.' },
        { criterion: 'Visual Warmth & Aesthetic Appeal', weight: 25, standard: 'Warm artisan café aesthetics with high-contrast readable menu pricing.' }
      ],
      modelSolutionOverview: 'The collateral suite is commercial print shop ready: high-resolution 300 DPI exports, accurate trim lines, and realistic wooden café mockups.'
    }
  ],
  workplaceGuidance: {
    firstWeek: [
      'Always ask the client for high-resolution vector logos (.svg or transparent .png) before starting design work.',
      'Check if their target audience reads primarily on mobile phones, and default to 4:5 portrait and 9:16 vertical formats accordingly.',
      'Group related design elements (Ctrl+G) in Canva so they move together without accidental misalignment.',
      'Lock background elements (Padlock icon) to prevent accidentally dragging backgrounds while editing text.'
    ],
    firstMonth: [
      'Organize your Canva project folders by client name and month to avoid having hundreds of loose files on your homepage.',
      'Always duplicate a page before making major client revisions so you preserve the previous version.',
      'Regularly clear your uploaded images folder of unused drafts to keep your Canva workspace snappy.'
    ],
    commonMistakes: [
      'Placing vital text right up against the edge of a canvas without leaving breathing room.',
      'Using low-resolution, blurry photos downloaded from WhatsApp or social media.',
      'Exporting print jobs as standard RGB 72 DPI images instead of high-resolution PDF Print with bleed.'
    ]
  },
  interviewPrep: [
    {
      question: 'What is the difference between RGB and CMYK color spaces, and when does each apply?',
      answer: 'RGB (Red, Green, Blue) is an additive color model designed for digital screens (smartphones, laptops, TVs), capable of displaying vibrant, glowing neons. CMYK (Cyan, Magenta, Yellow, Black) is a subtractive color model used for physical ink printing on paper or fabric. Designing for Instagram or web banners requires RGB, while designing physical business cards, packaging, or flyers requires converting to CMYK to ensure printed colors match on-screen expectations.',
      tips: 'A fundamental design question that proves you understand physical vs digital media production.'
    },
    {
      question: 'How do you handle a client who insists on putting 10 bullet points and 4 different clip art images on a single Instagram post?',
      answer: 'I advise them with respectful visual data: "On mobile feeds, users scroll past in 1.5 seconds. If we put 10 points on one image, text becomes too tiny to read and engagement drops. Instead, let me turn this into a 5-slide carousel where each slide highlights 2 points with clean breathing room—this will increase swipe engagement and look much more premium".',
      tips: 'Shows that you act as a strategic advisor rather than just an order-taker.'
    },
    {
      question: 'Why is it important to use 3mm bleed and safe margins when designing printable flyers?',
      answer: 'Commercial printing presses cut thousands of printed sheets at high speed with mechanical guillotine blades that have a slight physical tolerance of 1 to 2 millimeters. If your design stops exactly at the cut line, any slight blade shift leaves an amateur white unprinted paper edge. Bleed extends the background artwork 3mm beyond the cut line, while safe margins keep text comfortably inside, ensuring a clean, perfect cut every time.',
      tips: 'Demonstrates real-world print production literacy.'
    }
  ]
};
