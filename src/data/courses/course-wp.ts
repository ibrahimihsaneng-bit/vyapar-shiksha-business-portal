import { Course } from '@/types';

export const wordpressManagerCourse: Course = {
  id: 'course-wp',
  careerSlug: 'wordpress-content-manager',
  title: 'WordPress Content Manager & Website Maintenance Specialist (30 Days)',
  titleMl: 'വേർഡ്പ്രസ്സ് കണ്ടന്റ് മാനേജ്‌മെന്റും വെബ്സൈറ്റ് മെയിന്റനൻസും (30 ദിവസങ്ങൾ)',
  durationDays: 30,
  weeklyGoals: [
    {
      weekNumber: 1,
      title: 'WordPress Core Concepts, LocalWP Setup & Gutenberg Editor',
      objective: 'Set up an offline local development environment using LocalWP, master the WordPress admin dashboard, understand pages vs posts, and build structured page layouts using modern Gutenberg core blocks.'
    },
    {
      weekNumber: 2,
      title: 'Media Optimization, Navigation Menus, Categories & On-Page SEO',
      objective: 'Format and compress images for sub-second web delivery, configure mobile-friendly navigation menus and widget footers, and optimize articles for search engines using Rank Math / Yoast SEO.'
    },
    {
      weekNumber: 3,
      title: 'Form Builders, WooCommerce Catalog Management & Plugin Staging',
      objective: 'Build lead generation contact forms, manage WooCommerce store product inventories (simple and variable products), and learn safe plugin updates on staging environments without breaking live websites.'
    },
    {
      weekNumber: 4,
      title: 'Site Health, Automated Backups, Speed Audits & Client Retainers',
      objective: 'Configure automated cloud backups with UpdraftPlus, conduct Google PageSpeed audits, repair broken links, package monthly website maintenance retainer proposals, and land entry-level remote client gigs.'
    },
    {
      weekNumber: 5,
      title: 'Week 5: On-Page SEO, Speed Optimization & Lead Capture Forms',
      objective: 'Configure Yoast/RankMath SEO, optimize site load speeds under 2 seconds, and build lead capture forms.'
    },
    {
      weekNumber: 6,
      title: 'Week 6: Security Hardening, Backup Drills & Web Manager Launch',
      objective: 'Harden WordPress security, schedule automated offsite backups, troubleshoot site errors, and land web manager roles.'
    }
    ],

  modules: [
    {
      id: 'mod-wp-1',
      weekNumber: 1,
      title: 'Week 1: WordPress Fundamentals & Gutenberg Page Architecture',
      titleMl: 'ആഴ്ച 1: വേർഡ്പ്രസ്സ് അടിസ്ഥാനങ്ങളും ഗുട്ടൻബർഗ് എഡിറ്ററും',
      objective: 'Set up LocalWP, explore the admin panel, create structured pages and posts, and design responsive layouts using native blocks.',
      lessons: [
        {
          id: 'les-wp-1',
          dayNumber: 1,
          title: 'Understanding How WordPress Powers 43% of the Web & LocalWP Setup',
          titleMl: 'ഡേ 1: വേർഡ്പ്രസ്സ് എങ്ങനെ പ്രവർത്തിക്കുന്നു, ലോക്കൽഡബ്ല്യുപി ഇൻസ്റ്റാളേഷൻ',
          durationMinutes: 45,
          overview: 'Understand the difference between WordPress.com (hosted) and WordPress.org (self-hosted open source). Install LocalWP on Windows/Mac to test and build websites completely free on your computer without purchasing domain or hosting.',
          concepts: [
            'Difference between WordPress.org (self-hosted software) and WordPress.com (managed SaaS platform)',
            'How WordPress uses PHP, MySQL database, and Apache/Nginx web servers',
            'Installing LocalWP (localwp.com) and launching your first local offline sandbox in 60 seconds',
            'Exploring the WordPress Admin Dashboard (/wp-admin) and core navigation menu'
          ],
          simpleEnglishGuide: 'WordPress is the software behind nearly half the websites on earth. With a free tool called LocalWP, you can build and practice on real WordPress websites right on your laptop without spending a single rupee on hosting or domain names.',
          malayalamNotes: 'പണം കൊടുക്കാതെ സ്വന്തം കമ്പ്യൂട്ടറിൽ സൗജന്യമായി വേർഡ്പ്രസ്സ് ഇൻസ്റ്റാൾ ചെയ്തു പ്രാക്ടീസ് ചെയ്യാൻ സഹായിക്കുന്ന സോഫ്റ്റ്‌വെയറാണ് LocalWP.',
          officialDocLinks: [
            { title: 'LocalWP Official Download & Setup Guide', url: 'https://localwp.com/' },
            { title: 'WordPress Documentation: First Steps with WordPress', url: 'https://wordpress.org/documentation/article/first-steps-with-wordpress/' }
          ],
          videoResources: [
            { title: 'WordPress for Beginners - Complete LocalWP Setup (Jamie Marsland)', url: 'https://www.youtube.com/watch?v=O79PUX4nW5g', platform: 'YouTube', durationMinutes: 20 }
          ],
          exercise: {
            title: 'Set Up Your Local WordPress Sandbox',
            description: 'Download and install LocalWP, spin up a new local site named "Career-Sandbox", log into your wp-admin, and set your site title and tagline in Settings -> General.',
            estimatedMinutes: 30,
            deliverable: 'A running local WordPress admin dashboard with custom site title and admin login credentials safely stored.'
          }
        },
        {
          id: 'les-wp-2',
          dayNumber: 2,
          title: 'Pages vs. Posts: Information Architecture & URL Slugs',
          titleMl: 'ഡേ 2: പേജുകളും പോസ്റ്റുകളും തമ്മിലുള്ള വ്യത്യാസം',
          durationMinutes: 45,
          overview: 'Understand the fundamental structural difference between static hierarchical Pages (Home, About, Services, Contact) and time-based chronological Posts (News, Articles, Company Updates).',
          concepts: [
            'Pages: timeless, hierarchical (parent-child relationships), without publication dates or author tags',
            'Posts: chronological, syndication-ready (RSS), associated with Categories, Tags, and Author profiles',
            'Customizing Permalinks: why the "/%postname%/" URL structure is essential for SEO and readability',
            'Managing drafts, private visibility, password-protected pages, and scheduling future releases'
          ],
          simpleEnglishGuide: 'Pages are for things that stay the same (like About Us or Contact Us). Posts are for fresh updates and articles organized by dates, categories, and tags.',
          malayalamNotes: 'എപ്പോഴും മാറ്റമില്ലാതെ നിലനിൽക്കുന്ന വിവരങ്ങൾക്ക് പേജുകളും (Pages), ലേഖനങ്ങൾക്കും വാർത്തകൾക്കും പോസ്റ്റുകളും (Posts) ഉപയോഗിക്കുന്നു.',
          officialDocLinks: [
            { title: 'WordPress Docs: Pages vs Posts', url: 'https://wordpress.org/documentation/article/pages-vs-posts/' },
            { title: 'WordPress Permalinks Settings', url: 'https://wordpress.org/documentation/article/settings-permalinks-screen/' }
          ],
          videoResources: [
            { title: 'WordPress Pages vs Posts Explained (WPCrafter)', url: 'https://www.youtube.com/watch?v=1u4jF2l_xJk', platform: 'YouTube', durationMinutes: 15 }
          ],
          exercise: {
            title: 'Create Core Page Skeleton & Permalink Configuration',
            description: 'Change permalink settings to "Post name". Create four published pages: Home, About Us, Services, and Contact Us. Create two draft blog posts under the category "Industry News".',
            estimatedMinutes: 30,
            deliverable: 'Four cleanly published pages with short clean URLs (e.g., /about-us) and active draft posts.'
          }
        },
        {
          id: 'les-wp-3',
          dayNumber: 3,
          title: 'Mastering the Block Editor (Gutenberg): Typography, Columns & Groups',
          titleMl: 'ഡേ 3: ഗുട്ടൻബർഗ് ബ്ലോക്ക് എഡിറ്റർ സ്വായത്തമാക്കുക',
          durationMinutes: 50,
          overview: 'Build rich, structured content layouts without touching code using the native WordPress Block Editor (Gutenberg).',
          concepts: [
            'Core layout blocks: Paragraph, Heading (H1-H6 hierarchy), Quote, and List',
            'Structural containers: Columns (50/50, 33/33/33, 70/30 splits) and Groups for grouped backgrounds',
            'The List View panel: navigating complex nested block structures effortlessly',
            'Block settings inspector vs Block toolbar: controlling alignment, padding, margins, and typography'
          ],
          simpleEnglishGuide: 'Gutenberg turns your page into Lego bricks. You stack Headings, Paragraphs, Images, and Multi-column boxes together to create modern magazine-style layouts.',
          malayalamNotes: 'ഗുട്ടൻബർഗ് എഡിറ്റർ ഉപയോഗിച്ച് കോഡിംഗ് ഇല്ലാതെ തന്നെ മനോഹരമായ വെബ്പേജുകൾ ഡിസൈൻ ചെയ്യാം.',
          officialDocLinks: [
            { title: 'WordPress Block Editor Handbook', url: 'https://wordpress.org/documentation/article/wordpress-block-editor/' }
          ],
          videoResources: [
            { title: 'Complete Gutenberg Block Editor Tutorial (Ferdy Korpershoek)', url: 'https://www.youtube.com/watch?v=nN4vK69v-94', platform: 'YouTube', durationMinutes: 25 }
          ],
          exercise: {
            title: 'Design an "About Our Agency" Page in Gutenberg',
            description: 'Create an About page featuring a 2-column layout (profile picture on the left, bio on the right), a 3-column stats section ("10+ Years", "500+ Clients", "99% Satisfaction"), and a stylized quote box.',
            estimatedMinutes: 40,
            deliverable: 'A published About page with aligned multi-column layouts, proper heading tags, and styled block groups.'
          }
        },
        {
          id: 'les-wp-4',
          dayNumber: 4,
          title: 'Visual Media Blocks: Images, Galleries, Audio & Video Embeds',
          titleMl: 'ഡേ 4: മീഡിയ ബ്ലോക്കുകൾ, ഗാലറികൾ, എംബഡുകൾ',
          durationMinutes: 45,
          overview: 'Embed and arrange responsive visual media on WordPress pages while adhering to responsive dimensions and accessibility standards.',
          concepts: [
            'Image block configurations: full width, wide align, rounded borders, and custom aspect ratios',
            'The Gallery block: building multi-photo portfolios with lightbox popups and masonry styling',
            'Cover blocks: creating full-width hero banners with background images and overlay opacity',
            'Video and Audio embeds: embedding YouTube, Vimeo, and Spotify streams without slowing down host server resources'
          ],
          simpleEnglishGuide: 'Never upload heavy raw video files directly to your WordPress host. Embed them smoothly from YouTube or Vimeo, and use the Cover block to make striking hero sections at the top of web pages.',
          malayalamNotes: 'ഭാരമേറിയ വീഡിയോ ഫയലുകൾ നേരിട്ട് അപ്‌ലോഡ് ചെയ്യാതെ യൂട്യൂബ് എംബഡ് വഴി വേഗത കുറയാതെ കാണിക്കുന്ന രീതി.',
          officialDocLinks: [
            { title: 'WordPress Media Blocks Guide', url: 'https://wordpress.org/documentation/article/media-blocks/' }
          ],
          videoResources: [
            { title: 'How to Use WordPress Media Blocks (WPTuts)', url: 'https://www.youtube.com/watch?v=7M7n0cK3q0g', platform: 'YouTube', durationMinutes: 18 }
          ],
          exercise: {
            title: 'Build a Portfolio Showcase Section',
            description: 'Construct a Services or Portfolio page featuring a dark hero Cover block with white text overlay, a 6-item responsive Image Gallery, and a responsive embedded YouTube introductory video.',
            estimatedMinutes: 35,
            deliverable: 'A fully styled portfolio page containing properly aligned media blocks and responsive embeds.'
          }
        },
        {
          id: 'les-wp-5',
          dayNumber: 5,
          title: 'Reusable Blocks (Synced Patterns) & Content Template Workflows',
          titleMl: 'ഡേ 5: റീയൂസബിൾ ബ്ലോക്കുകളും സിങ്ക്ഡ് പാറ്റേണുകളും',
          durationMinutes: 45,
          overview: 'Learn the secret weapon of efficient content managers: building Synced Patterns (Reusable Blocks) to update repeated elements across 100 pages in one click.',
          concepts: [
            'Creating Synced Patterns for call-to-action boxes, author bios, and contact promotional strips',
            'Editing a synced pattern once and watching the change propagate across every published post instantly',
            'Converting synced patterns back into regular blocks when custom variations are needed',
            'Exporting and importing block patterns between different WordPress websites (JSON file transfer)'
          ],
          simpleEnglishGuide: 'If you have a "Book a Free Consultation" box that appears at the bottom of 50 blog posts, a Synced Pattern lets you update the phone number once, and it instantly changes on all 50 posts!',
          malayalamNotes: 'എല്ലാ പേജുകളിലും ഒരേപോലെ വരുന്ന കാര്യങ്ങൾ (ഉദാ: കോൾ ടു ആക്ഷൻ ബോക്സ്) ഒരു തവണ മാറ്റിയാൽ എല്ലായിടത്തും ഓട്ടോമാറ്റിക്കായി മാറുന്ന സാങ്കേതികവിദ്യ.',
          officialDocLinks: [
            { title: 'WordPress Synced Patterns (Reusable Blocks)', url: 'https://wordpress.org/documentation/article/synced-patterns-reusable-blocks/' }
          ],
          videoResources: [
            { title: 'WordPress Patterns & Synced Patterns Complete Guide (Brian Coords)', url: 'https://www.youtube.com/watch?v=sO7tG_JgMh4', platform: 'YouTube', durationMinutes: 20 }
          ],
          exercise: {
            title: 'Create and Deploy an Agency Call-to-Action Synced Pattern',
            description: 'Design a high-contrast banner with an H3 headline, descriptive subtext, and a "Contact Support" button. Save it as a Synced Pattern named "Standard Footer CTA". Insert it into 3 separate pages.',
            estimatedMinutes: 30,
            deliverable: 'A Synced Pattern deployed across multiple pages, verified by modifying the button text once and confirming automatic updates on all pages.'
          }
        }
      ]
    },
    {
      id: 'mod-wp-2',
      weekNumber: 2,
      title: 'Week 2: Media Optimization, Menus, Taxonomies & On-Page SEO',
      titleMl: 'ആഴ്ച 2: മീഡിയ ഒപ്റ്റിമൈസേഷൻ, മെനുകൾ, എസ്ഇഒ',
      objective: 'Optimize images for high speed, manage navigation menus, structure blog categories, and write rank-worthy on-page SEO metadata.',
      lessons: [
        {
          id: 'les-wp-6',
          dayNumber: 6,
          title: 'Image Compression, WebP Formats & Media Library Hygiene',
          titleMl: 'ഡേ 6: ഇമേജ് കംപ്രഷൻ, വെബ്പി ഫോർമാറ്റുകൾ, മീഡിയ ലൈബ്രറി ക്രമീകരണം',
          durationMinutes: 45,
          overview: 'Heavy, uncompressed images are the number one cause of slow websites. Learn how to resize, compress to WebP, and organize the WordPress Media Library.',
          concepts: [
            'Why 5MB camera photos destroy website performance and Google search rankings',
            'Standard web dimensions: 1920px for hero banners, 1200px for blog headers, 800px for content illustrations',
            'Modern WebP format: achieving 30-50% smaller file sizes than JPG/PNG with zero visual loss',
            'Setting informative file names, Title attributes, and descriptive Alt Text for blind screen-readers and Googlebot'
          ],
          simpleEnglishGuide: 'Never upload raw photos from your smartphone. Shrink their width down to 1200 pixels and convert them to lightweight WebP files before uploading to keep your site lightning fast.',
          malayalamNotes: 'സൈറ്റിന്റെ വേഗത കുറയാതിരിക്കാൻ ചിത്രങ്ങൾ അപ്‌ലോഡ് ചെയ്യുന്നതിന് മുൻപ് അവയുടെ വലുപ്പം കുറയ്ക്കുകയും വെബ്‌പി (WebP) ഫോർമാറ്റിലേക്ക് മാറ്റുകയും വേണം.',
          officialDocLinks: [
            { title: 'WordPress Media Library Overview', url: 'https://wordpress.org/documentation/article/media-library-screen/' },
            { title: 'Squoosh.app Free Browser-based Image Optimizer', url: 'https://squoosh.app/' }
          ],
          videoResources: [
            { title: 'How to Optimize Images for WordPress (WPCrafter)', url: 'https://www.youtube.com/watch?v=i9Yp0_Z8m6c', platform: 'YouTube', durationMinutes: 16 }
          ],
          exercise: {
            title: 'Compress and Optimize 5 Corporate Stock Images',
            description: 'Take 5 uncompressed high-resolution images, resize them using Squoosh.app or TinyPNG to WebP under 150KB each, upload them to WordPress, and add accessibility-compliant Alt Text to all five.',
            estimatedMinutes: 35,
            deliverable: '5 media library assets with file sizes under 150KB and full Alt Text descriptions.'
          }
        },
        {
          id: 'les-wp-7',
          dayNumber: 7,
          title: 'Header Navigation Menus, Dropdowns & Footer Layouts',
          titleMl: 'ഡേ 7: മെനു ബാർ, ഡ്രോപ്പ്ഡൗണുകൾ, ഫൂട്ടർ ലിങ്കുകൾ',
          durationMinutes: 45,
          overview: 'Structure smooth, intuitive navigation menus including multi-level dropdowns and sticky headers.',
          concepts: [
            'Appearance -> Menus (Classic themes) vs Site Editor Navigation Block (Block themes)',
            'Building primary navigation bars with nested child dropdown menus',
            'Adding custom external links, category archives, and tel: / mailto: action buttons',
            'Footer navigation: creating secondary links for Privacy Policy, Terms, and Copyright notices'
          ],
          simpleEnglishGuide: 'A good menu helps visitors find what they need in two clicks. You will arrange pages into neat categories and set up dropdown menus for services and sub-pages.',
          malayalamNotes: 'വെബ്സൈറ്റ് സന്ദർശകർക്ക് വിവരങ്ങൾ വേഗത്തിൽ കണ്ടെത്താനായി വ്യക്തമായ മെനു ബാറുകളും ഡ്രോപ്പ്ഡൗണുകളും ഉണ്ടാക്കുക.',
          officialDocLinks: [
            { title: 'WordPress Navigation Menus Guide', url: 'https://wordpress.org/documentation/article/appearance-menus-screen/' }
          ],
          videoResources: [
            { title: 'Mastering WordPress Menus (Ferdy Korpershoek)', url: 'https://www.youtube.com/watch?v=b4b216ZvZ8w', platform: 'YouTube', durationMinutes: 18 }
          ],
          exercise: {
            title: 'Build a Multi-Tier Header and Footer Menu',
            description: 'Create a Primary Menu with Home, About Us, Services (with 3 nested dropdown children: Consulting, Auditing, Training), Blog, and Contact Us. Add a secondary Footer Menu with Privacy and Terms.',
            estimatedMinutes: 35,
            deliverable: 'A clean header menu with interactive hover dropdowns and a compliant footer menu.'
          }
        },
        {
          id: 'les-wp-8',
          dayNumber: 8,
          title: 'Blog Taxonomies: Categories, Tags, and Author Profiles',
          titleMl: 'ഡേ 8: ബ്ലോഗ് കാറ്റഗറികൾ, ടാഗുകൾ, ഓതർ പ്രൊഫൈലുകൾ',
          durationMinutes: 45,
          overview: 'Organize high-volume content using clean taxonomy architecture without causing duplicate content penalties in Google.',
          concepts: [
            'Categories vs Tags: broad hierarchical filing (Categories) vs specific index keywords (Tags)',
            'Avoiding taxonomy traps: why having 50 tags per post hurts SEO and bloats databases',
            'Assigning parent and child categories (e.g., Guides -> Beginner Guides)',
            'Setting up multi-author permissions (Administrator, Editor, Author, Contributor, Subscriber)'
          ],
          simpleEnglishGuide: 'Categories are like the table of contents in a book. Tags are like the index at the back. Every post needs one clear category, and no more than 2-4 focused tags.',
          malayalamNotes: 'ലേഖനങ്ങൾ കാറ്റഗറികളായും ടാഗുകളായും ക്രമീകരിക്കുന്ന രീതി. ഇത് ഗൂഗിളിൽ സൈറ്റ് റാങ്ക് ചെയ്യാൻ വളരെ അത്യാവശ്യമാണ്.',
          officialDocLinks: [
            { title: 'WordPress Taxonomy Guide: Categories vs Tags', url: 'https://wordpress.org/documentation/article/posts-categories-screen/' }
          ],
          videoResources: [
            { title: 'WordPress Categories & Tags Done Right (WPBeginner)', url: 'https://www.youtube.com/watch?v=P_V5qU_G2_g', platform: 'YouTube', durationMinutes: 14 }
          ],
          exercise: {
            title: 'Architect a Corporate Blog Taxonomy Structure',
            description: 'Set up 4 parent categories with descriptive slugs, 2 child sub-categories, and 6 focused tags. Publish 3 mock articles assigned correctly to these categories.',
            estimatedMinutes: 35,
            deliverable: 'A structured WordPress blog archive navigable by clean category URL routes.'
          }
        },
        {
          id: 'les-wp-9',
          dayNumber: 9,
          title: 'On-Page SEO with Rank Math / Yoast: Meta Titles, Descriptions & Snippets',
          titleMl: 'ഡേ 9: റാങ്ക് മാത്ത് / യോസ്റ്റ് ഉപയോഗിച്ചുള്ള ഓൺ-പേജ് എസ്ഇഒ',
          durationMinutes: 50,
          overview: 'Install and configure an industry-standard SEO plugin to write high-CTR meta titles, meta descriptions, and OpenGraph social preview images.',
          concepts: [
            'Installing Rank Math or Yoast SEO from the official WordPress plugin repository',
            'Writing SEO Titles (under 60 characters) with target focus keywords and company brand separators',
            'Writing enticing Meta Descriptions (140-160 characters) with clear action hooks',
            'Configuring OpenGraph tags so shared WhatsApp, LinkedIn, and Facebook links show correct preview images and headlines'
          ],
          simpleEnglishGuide: 'When someone Googles your topic, the headline and short 2-line summary they see on Google comes directly from your SEO plugin. You will learn how to write these to get the maximum number of clicks.',
          malayalamNotes: 'ഗൂഗിളിൽ ആളുകൾ തിരയുമ്പോൾ സൈറ്റിന്റെ പേരും ചുരുക്കവിവരണവും ശരിയായ രീതിയിൽ വരാനായി റാങ്ക് മാത്ത് പ്ലഗിൻ ഉപയോഗിക്കുന്നു.',
          officialDocLinks: [
            { title: 'Rank Math General Settings Guide', url: 'https://rankmath.com/kb/general-settings/' },
            { title: 'Yoast SEO Configuration Basics', url: 'https://yoast.com/help/configuration-workout/' }
          ],
          videoResources: [
            { title: 'Rank Math SEO Complete Setup for Beginners (Ferdy Korpershoek)', url: 'https://www.youtube.com/watch?v=dt4jYt3Z4jY', platform: 'YouTube', durationMinutes: 28 }
          ],
          exercise: {
            title: 'Configure SEO Snippets for 3 Core Pages',
            description: 'Install Rank Math or Yoast SEO. Optimize the Home page, About page, and 1 Blog Post with unique focus keywords, green readability scores, custom meta titles, and OpenGraph social cards.',
            estimatedMinutes: 40,
            deliverable: 'Three fully configured pages with green SEO scores, custom search snippets, and social sharing previews.'
          }
        },
        {
          id: 'les-wp-10',
          dayNumber: 10,
          title: 'XML Sitemaps, Robots.txt & Google Search Console Connection',
          titleMl: 'ഡേ 10: എക്സ്എംഎൽ സൈറ്റ്മാപ്പ്, റോബോട്ട്സ്.ടിഎക്സ്ടി, ഗൂഗിൾ കണക്ഷൻ',
          durationMinutes: 45,
          overview: 'Understand how search engine spiders discover new websites and how to generate dynamic XML sitemaps to index your pages.',
          concepts: [
            'What an XML sitemap is: the automated roadmap of every valid URL on your website (/sitemap_index.xml)',
            'Robots.txt file rules: telling Googlebot which administrative directories to avoid (wp-admin, staging folders)',
            'Disallowing noindex on staging/development sites to prevent accidental search penalties',
            'The process of submitting sitemaps to Google Search Console and Bing Webmaster Tools'
          ],
          simpleEnglishGuide: 'A sitemap is an automatically updated list of every page on your website. Giving this map to Google ensures that when you publish a new article, Google finds and lists it within hours.',
          malayalamNotes: 'പുതിയ പേജുകളും ലേഖനങ്ങളും ഗൂഗിൾ വേഗത്തിൽ കണ്ടെത്തുന്നതിനായി സൈറ്റ്മാപ്പ് നൽകുന്ന രീതി.',
          officialDocLinks: [
            { title: 'Google Search Central: Sitemaps Overview', url: 'https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview' }
          ],
          videoResources: [
            { title: 'WordPress XML Sitemaps Explained (Ahrefs)', url: 'https://www.youtube.com/watch?v=Q8l0dJ7uUvg', platform: 'YouTube', durationMinutes: 15 }
          ],
          exercise: {
            title: 'Inspect Sitemaps and Configure Search Visibility Settings',
            description: 'Verify your generated sitemap URL, check Settings -> Reading to ensure "Discourage search engines" is turned off, and inspect robots.txt rules.',
            estimatedMinutes: 25,
            deliverable: 'A validated XML sitemap link displaying structured page and post nodes ready for search indexing.'
          }
        }
      ]
    },
    {
      id: 'mod-wp-3',
      weekNumber: 3,
      title: 'Week 3: Forms, WooCommerce Store Catalog & Plugin Operations',
      titleMl: 'ആഴ്ച 3: ഫോമുകൾ, വൂകൊമേഴ്‌സ് സ്റ്റോർ മാനേജ്‌മെന്റ്, പ്ലഗിനുകൾ',
      objective: 'Build interactive forms, manage e-commerce products and orders in WooCommerce, and manage plugin updates safely.',
      lessons: [
        {
          id: 'les-wp-11',
          dayNumber: 11,
          title: 'Lead Generation & Contact Forms with WPForms / Fluent Forms',
          titleMl: 'ഡേ 11: കോൺടാക്റ്റ് ഫോമുകളും ലീഡ് ജനറേഷനും',
          durationMinutes: 45,
          overview: 'Create secure, user-friendly forms with spam protection (Cloudflare Turnstile / reCAPTCHA) and automated email notifications.',
          concepts: [
            'Installing WPForms or Fluent Forms to create drag-and-drop input forms',
            'Form fields: required validation, dropdown pickers, radio options, and file upload attachments',
            'Setting up Admin notification emails and customized user auto-responder confirmation emails',
            'Spam prevention: integrating Honeypot traps and Cloudflare Turnstile without annoying CAPTCHA puzzles'
          ],
          simpleEnglishGuide: 'Forms allow potential customers to send inquiries directly to your inbox. You will build forms that check for mistakes (like invalid email addresses) and block spam bots automatically.',
          malayalamNotes: 'ഉപഭോക്താക്കൾക്ക് മെസ്സേജ് അയക്കാനായി കോൺടാക്റ്റ് ഫോമുകൾ ഉണ്ടാക്കുകയും സ്പാം മെസ്സേജുകൾ തടയുകയും ചെയ്യുക.',
          officialDocLinks: [
            { title: 'WPForms Beginner Documentation', url: 'https://wpforms.com/docs/' }
          ],
          videoResources: [
            { title: 'How to Create Contact Forms in WordPress (WPCrafter)', url: 'https://www.youtube.com/watch?v=Gk3KqQJ7_0o', platform: 'YouTube', durationMinutes: 20 }
          ],
          exercise: {
            title: 'Build a Client Inquiry Form with Conditional Notification',
            description: 'Build a 5-field inquiry form (Name, Email, Phone, Service Requested dropdown, Project Budget). Embed it onto the Contact Us page and test submission.',
            estimatedMinutes: 35,
            deliverable: 'A functional contact form embedded on a live page with verified email notification routing.'
          }
        },
        {
          id: 'les-wp-12',
          dayNumber: 12,
          title: 'Introduction to WooCommerce: Installing & Setting Up a Digital Storefront',
          titleMl: 'ഡേ 12: വൂകൊമേഴ്‌സ് ഇൻസ്റ്റാളേഷനും ബേസിക് സെറ്റപ്പും',
          durationMinutes: 50,
          overview: 'Transform a WordPress website into a full e-commerce shop using WooCommerce, the engine behind 25% of top online stores.',
          concepts: [
            'Installing WooCommerce and running the initial Setup Wizard',
            'Configuring store currency (INR, USD, AED, EUR), base address, and shipping zones',
            'Understanding core WooCommerce default pages: Shop, Cart, Checkout, and My Account',
            'Payment gateway fundamentals: Cash on Delivery, Stripe sandbox, and Razorpay test mode'
          ],
          simpleEnglishGuide: 'WooCommerce adds an entire shopping cart and checkout system to WordPress. With a few clicks, you have a virtual store where customers can browse items and purchase them.',
          malayalamNotes: 'സാധാരണ വേർഡ്പ്രസ്സ് സൈറ്റിനെ ഒരു ഓൺലൈൻ ഷോപ്പിംഗ് സൈറ്റാക്കി മാറ്റാൻ വൂകൊമേഴ്‌സ് ഉപയോഗിക്കുന്നു.',
          officialDocLinks: [
            { title: 'WooCommerce Core Documentation', url: 'https://woocommerce.com/document/woocommerce-setup-wizard/' }
          ],
          videoResources: [
            { title: 'WooCommerce Complete Tutorial for Beginners (Darrel Wilson)', url: 'https://www.youtube.com/watch?v=P6YfO_Vf0bA', platform: 'YouTube', durationMinutes: 35 }
          ],
          exercise: {
            title: 'Complete WooCommerce Setup Wizard in Local Sandbox',
            description: 'Install WooCommerce in LocalWP, configure Indian Rupee (INR) currency, enable Cash on Delivery for testing, and verify that the Shop and Cart pages were created automatically.',
            estimatedMinutes: 35,
            deliverable: 'A configured e-commerce storefront with generated default store pages.'
          }
        },
        {
          id: 'les-wp-13',
          dayNumber: 13,
          title: 'Managing Products: Simple vs Variable Products, SKU & Inventory',
          titleMl: 'ഡേ 13: പ്രൊഡക്റ്റ് മാനേജ്‌മെന്റ് (സിമ്പിൾ & വേരിയബിൾ പ്രൊഡക്ടുകൾ)',
          durationMinutes: 50,
          overview: 'Master the daily tasks of an e-commerce assistant: adding products, setting prices, managing inventory, and configuring variable attributes.',
          concepts: [
            'Simple Products: single price, single SKU, inventory stock count (e.g., a physical book)',
            'Variable Products: attributes and variations (e.g., T-shirt with Sizes: S, M, L and Colors: Blue, Black)',
            'Setting Regular Price vs Sale Price with scheduled discount windows',
            'Product short descriptions, gallery thumbnails, and inventory backorder settings'
          ],
          simpleEnglishGuide: 'A Simple product has one price. A Variable product lets the customer pick their size and color, which might change the price. Managing these properly is a high-demand remote job.',
          malayalamNotes: 'വിവിധ അളവുകളിലും നിറങ്ങളിലുമുള്ള ഉൽപ്പന്നങ്ങൾ കൃത്യമായ വിലയും സ്റ്റോക്കും നൽകി ഓൺലൈൻ സ്റ്റോറിൽ ചേർക്കുക.',
          officialDocLinks: [
            { title: 'WooCommerce Managing Products Guide', url: 'https://woocommerce.com/document/managing-products/' }
          ],
          videoResources: [
            { title: 'WooCommerce Simple vs Variable Products Tutorial (Ferdy Korpershoek)', url: 'https://www.youtube.com/watch?v=R5b4L6q_7xM', platform: 'YouTube', durationMinutes: 22 }
          ],
          exercise: {
            title: 'Add 3 Simple and 2 Variable Products',
            description: 'Add 3 simple products with prices, SKU codes, and stock counts. Add 2 variable products with Size (Small, Medium, Large) and Color variations. Include high-res mockups for each.',
            estimatedMinutes: 45,
            deliverable: '5 active store products in the WooCommerce catalog with verified variation dropdown pickers.'
          }
        },
        {
          id: 'les-wp-14',
          dayNumber: 14,
          title: 'Order Processing, Customer Invoices & Order Status Workflows',
          titleMl: 'ഡേ 14: ഓർഡർ പ്രോസസ്സിംഗും കസ്റ്റമർ ഇൻവോയ്‌സുകളും',
          durationMinutes: 45,
          overview: 'Handle daily e-commerce operations: processing customer orders, printing packing slips, issuing refunds, and updating shipping status.',
          concepts: [
            'The WooCommerce order lifecycle: Pending Payment -> Processing -> Completed / Cancelled / Refunded',
            'Generating PDF invoices and packing slips using free invoice plugins',
            'Adding order tracking numbers and sending automated dispatch updates to customers',
            'Issuing partial and full refunds with automatic inventory replenishment'
          ],
          simpleEnglishGuide: 'When someone buys an item, the store marks it as "Processing". As the store manager, you pack the item, add the courier tracking number, and change the status to "Completed".',
          malayalamNotes: 'ഓൺലൈൻ ഓർഡറുകൾ പരിശോധിക്കാനും കസ്റ്റമർക്ക് ഇൻവോയ്സ് അയക്കാനും സാധനം അയച്ച ശേഷം ഓർഡർ സ്റ്റാറ്റസ് മാറ്റാനുമുള്ള പ്രക്രിയ.',
          officialDocLinks: [
            { title: 'WooCommerce Managing Orders Guide', url: 'https://woocommerce.com/document/managing-orders/' }
          ],
          videoResources: [
            { title: 'How to Manage Orders in WooCommerce (Web Dev 101)', url: 'https://www.youtube.com/watch?v=kY8_7q9pW6c', platform: 'YouTube', durationMinutes: 18 }
          ],
          exercise: {
            title: 'Simulate Customer Purchase & Order Fulfillment Workflow',
            description: 'Place two test orders on your local store. Process Order #1 to "Completed" with custom customer notes, and issue a partial refund on Order #2.',
            estimatedMinutes: 30,
            deliverable: 'Two simulated orders demonstrating end-to-end status progression in the WooCommerce dashboard.'
          }
        },
        {
          id: 'les-wp-15',
          dayNumber: 15,
          title: 'Safe Plugin Updates, Compatibility Audits & The Staging Rule',
          titleMl: 'ഡേ 15: സുരക്ഷിതമായ പ്ലഗിൻ അപ്‌ഡേറ്റുകളും സ്റ്റേജിങ് രീതിയും',
          durationMinutes: 45,
          overview: 'Learn professional webmaster discipline: never hit "Update All Plugins" on a live client website without backups and compatibility testing.',
          concepts: [
            'Why plugins break websites: PHP version mismatches, obsolete hooks, and database migrations',
            'The Golden Rule: always create a full backup BEFORE running any core or plugin updates',
            'Reading changelogs: distinguishing between security patches (critical) vs major feature releases (test first)',
            'What a Staging site is: a private exact clone of the live site where updates are tested first'
          ],
          simpleEnglishGuide: 'Never blindly click "Update All" on a live business website. A single conflicting plugin can crash the entire site with a white screen error. Always make a backup first and test one by one.',
          malayalamNotes: 'ലൈവ് വെബ്സൈറ്റിൽ ഒരുകാരണവശാലും ബാക്കപ്പ് എടുക്കാതെ പ്ലഗിനുകൾ അപ്ഡേറ്റ് ചെയ്യരുത്. ഇത് സൈറ്റ് പ്രവർത്തനരഹിതമാക്കാൻ ഇടയാക്കും.',
          officialDocLinks: [
            { title: 'WordPress Plugin Management Best Practices', url: 'https://wordpress.org/documentation/article/manage-plugins/' }
          ],
          videoResources: [
            { title: 'How to Safely Update WordPress Plugins (WP Crafter)', url: 'https://www.youtube.com/watch?v=hZ7kL8pW6w0', platform: 'YouTube', durationMinutes: 15 }
          ],
          exercise: {
            title: 'Execute a Safe Plugin Update Simulation',
            description: 'Install an older version of an open-source plugin in your local environment, document current site health, create a manual backup, update the plugin, and verify frontend functionality.',
            estimatedMinutes: 35,
            deliverable: 'A documented pre-update and post-update checklist confirming zero broken links or layout shifts.'
          }
        }
      ]
    },
    {
      id: 'mod-wp-4',
      weekNumber: 4,
      title: 'Week 4: Site Health, Cloud Backups, Security & Retainer Business',
      titleMl: 'ആഴ്ച 4: സൈറ്റ് ബാക്കപ്പുകൾ, സെക്യൂരിറ്റി, ക്ലയന്റ് കെയർ പ്ലാനുകൾ',
      objective: 'Configure automated backups to Google Drive, protect against brute-force attacks, conduct speed audits, and package freelance maintenance retainers.',
      lessons: [
        {
          id: 'les-wp-16',
          dayNumber: 16,
          title: 'Automated Cloud Backups with UpdraftPlus to Google Drive / Dropbox',
          titleMl: 'ഡേ 16: ഓട്ടോമേറ്റഡ് ക്ലൗഡ് ബാക്കപ്പുകൾ (UpdraftPlus & Google Drive)',
          durationMinutes: 50,
          overview: 'Protect websites from server crashes, accidental deletion, and hacking by setting up automated daily and weekly offsite cloud backups.',
          concepts: [
            'Why server-only backups are dangerous: if the host burns down or suspends your account, backups vanish',
            'Installing UpdraftPlus: backing up Database, Plugins, Themes, Uploads, and Other wp-content files',
            'Connecting UpdraftPlus to Google Drive or Dropbox with OAuth authorization',
            'Configuring backup retention rules (e.g., keep the last 4 weekly backups and 14 daily database backups)'
          ],
          simpleEnglishGuide: 'Automated backups are like an insurance policy for websites. UpdraftPlus copies your entire site and sends it to your personal Google Drive automatically every week so you can restore it in two minutes if anything goes wrong.',
          malayalamNotes: 'വെബ്സൈറ്റ് നഷ്ടപ്പെടാതിരിക്കാൻ UpdraftPlus വഴി ഗൂഗിൾ ഡ്രൈവിലേക്ക് ഓട്ടോമാറ്റിക് ബാക്കപ്പ് സെറ്റ് ചെയ്യുന്ന രീതി.',
          officialDocLinks: [
            { title: 'UpdraftPlus Documentation & Remote Storage Setup', url: 'https://updraftplus.com/support/' }
          ],
          videoResources: [
            { title: 'How to Backup and Restore WordPress with UpdraftPlus (WPTuts)', url: 'https://www.youtube.com/watch?v=rK9kP6z_kY0', platform: 'YouTube', durationMinutes: 19 }
          ],
          exercise: {
            title: 'Perform Full Site Backup & Restoration Test',
            description: 'Install UpdraftPlus, trigger a full manual backup of your local site, download the zip archives, delete a test page permanently, and restore the site from the backup archive to verify recovery.',
            estimatedMinutes: 40,
            deliverable: 'A verified backup log and successful recovery demonstration restoring deleted content.'
          }
        },
        {
          id: 'les-wp-17',
          dayNumber: 17,
          title: 'Essential WordPress Hardening & Security Best Practices',
          titleMl: 'ഡേ 17: വേർഡ്പ്രസ്സ് സെക്യൂരിറ്റിയും ഹാക്കിംഗ് പ്രതിരോധവും',
          durationMinutes: 45,
          overview: 'Lock down login portals, block brute-force attacks, and implement zero-cost security hygiene.',
          concepts: [
            'Why default "admin" usernames are a massive vulnerability: enforcing strong usernames and complex passwords',
            'Limiting login attempts: installing Limit Login Attempts Reloaded to lock out IP addresses after 4 failed tries',
            'Two-Factor Authentication (2FA) with Google Authenticator or Wordfence Login Security',
            'Disabling file editing in wp-config.php (DISALLOW_FILE_EDIT) to prevent attackers from injecting backdoor code'
          ],
          simpleEnglishGuide: 'Hackers use automated bots that guess thousands of passwords every minute. By limiting login attempts to 3 tries and turning on 2FA on your phone, you block 99% of all attacks.',
          malayalamNotes: 'ഹാക്കർമാർ സൈറ്റ് ആക്രമിക്കാതിരിക്കാൻ ലോഗിൻ ശ്രമങ്ങൾ പരിമിതപ്പെടുത്തുകയും 2FA സുരക്ഷ ഏർപ്പെടുത്തുകയും ചെയ്യുക.',
          officialDocLinks: [
            { title: 'WordPress Hardening Security Official Guide', url: 'https://wordpress.org/documentation/article/hardening-wordpress/' }
          ],
          videoResources: [
            { title: 'WordPress Security for Beginners: 7 Easy Steps (Ferdy Korpershoek)', url: 'https://www.youtube.com/watch?v=F5cM7d7R4qQ', platform: 'YouTube', durationMinutes: 24 }
          ],
          exercise: {
            title: 'Harden WordPress Login & Audit Vulnerabilities',
            description: 'Change the admin username, enforce 16-character alphanumeric passwords, install Limit Login Attempts, and test an intentional lockout scenario.',
            estimatedMinutes: 30,
            deliverable: 'A hardened WordPress admin installation with active lockout defense and secure credential protocols.'
          }
        },
        {
          id: 'les-wp-18',
          dayNumber: 18,
          title: 'Website Speed Audits with Google PageSpeed Insights & Caching Basics',
          titleMl: 'ഡേ 18: ഗൂഗിൾ പേജ്‌സ്പീഡ് ഓഡിറ്റും കാഷിങ് സെറ്റപ്പും',
          durationMinutes: 45,
          overview: 'Test Core Web Vitals (LCP, FID, CLS) and deploy basic caching to boost website speed and Google mobile rankings.',
          concepts: [
            'Understanding Core Web Vitals: Largest Contentful Paint (LCP) under 2.5s, Cumulative Layout Shift (CLS) under 0.1',
            'Running Google PageSpeed Insights (pagespeed.web.dev) and interpreting diagnostics',
            'What page caching does: serving pre-generated static HTML instead of heavy PHP database calls',
            'Configuring WP Super Cache or LiteSpeed Cache for instant speed improvements'
          ],
          simpleEnglishGuide: 'Google ranks fast websites higher than slow ones. A free caching plugin stores a snapshot of your web pages so returning visitors do not have to wait for the database to reload each time.',
          malayalamNotes: 'വെബ്സൈറ്റ് അതിവേഗം തുറക്കാനായി കാഷിങ് പ്ലഗിനുകൾ ക്രമീകരിക്കുകയും ഗൂഗിൾ പേജ്‌സ്പീഡ് സ്കോർ ഉയർത്തുകയും ചെയ്യുക.',
          officialDocLinks: [
            { title: 'Google PageSpeed Insights Official Tool', url: 'https://pagespeed.web.dev/' },
            { title: 'WordPress Optimization and Caching', url: 'https://wordpress.org/documentation/article/optimization/' }
          ],
          videoResources: [
            { title: 'How to Speed Up Your WordPress Website (WPCrafter)', url: 'https://www.youtube.com/watch?v=G3P5ZgV6p7o', platform: 'YouTube', durationMinutes: 22 }
          ],
          exercise: {
            title: 'Audit and Optimize Website Speed',
            description: 'Run an audit using PageSpeed Insights, install and configure WP Super Cache, verify Gzip compression and browser caching, and record performance improvements.',
            estimatedMinutes: 35,
            deliverable: 'A before-and-after audit report showing caching activation and reduced page load times.'
          }
        },
        {
          id: 'les-wp-19',
          dayNumber: 19,
          title: 'Detecting Broken Links, 404 Errors & Database Cleanups',
          titleMl: 'ഡേ 19: ബ്രോക്കൺ ലിങ്കുകൾ, 404 എററുകൾ, ഡാറ്റാബേസ് ക്ലീനിംഗ്',
          durationMinutes: 45,
          overview: 'Conduct monthly maintenance checks: identifying broken 404 links, setting up 301 redirects, and purging redundant post revisions from the database.',
          concepts: [
            'Why 404 broken links damage client credibility and user experience',
            'Using Broken Link Checker or online crawlers (Screaming Frog free edition) to find dead external links',
            'Creating seamless 301 permanent redirects for deleted or renamed URLs with Redirection plugin',
            'Cleaning overhead from MySQL databases (clearing spam comments, orphaned transients, and 50+ auto-drafts with WP-Optimize)'
          ],
          simpleEnglishGuide: 'Over months of use, websites accumulate broken links and digital trash. As a content manager, you clean up old drafts, fix dead links, and keep the database running fast and clean.',
          malayalamNotes: 'പ്രവർത്തനരഹിതമായ ലിങ്കുകൾ കണ്ടെത്താനും (Broken Links) ആവശ്യമില്ലാത്ത ഡാറ്റകൾ ഒഴിവാക്കി ഡാറ്റാബേസ് വൃത്തിയാക്കാനുമുള്ള രീതികൾ.',
          officialDocLinks: [
            { title: 'WordPress Database Cleanup Best Practices', url: 'https://wordpress.org/documentation/article/clean-up-your-wordpress-database/' }
          ],
          videoResources: [
            { title: 'How to Find and Fix Broken Links in WordPress (WPBeginner)', url: 'https://www.youtube.com/watch?v=X6t8M7G4QkQ', platform: 'YouTube', durationMinutes: 14 }
          ],
          exercise: {
            title: 'Audit Broken Links & Perform Safe Database Optimization',
            description: 'Install Redirection plugin, simulate a renamed URL with an automated 301 redirect rule, run WP-Optimize to prune post revisions, and confirm database size reduction.',
            estimatedMinutes: 35,
            deliverable: 'A clean database report and an active 301 redirect mapping table.'
          }
        },
        {
          id: 'les-wp-20',
          dayNumber: 20,
          title: 'Packaging Monthly Website Care Plans & Landing Client Retainers',
          titleMl: 'ഡേ 20: പ്രതിമാസ മെയിന്റനൻസ് പാക്കേജുകളും ക്ലയന്റുകളെ നേടലും',
          durationMinutes: 50,
          overview: 'Turn your skills into recurring monthly income: package Care Plans ($50 - $200 / month per client) covering updates, backups, security, and content edits.',
          concepts: [
            'The Website Care Plan business model: recurring retainer revenue vs one-time gig payments',
            'Structuring standard tiers: Basic ($49/mo: weekly backups + updates), Pro ($129/mo: daily backups + speed audits + 2 hours content edits)',
            'Generating professional monthly client maintenance reports with MainWP or WP Umbrella',
            'Finding local business clients and remote Upwork/Fiverr gigs needing dedicated WordPress support'
          ],
          simpleEnglishGuide: 'Instead of finding new clients every week, businesses will gladly pay you $50 to $100 every single month just to keep their website backed up, updated, and error-free.',
          malayalamNotes: 'ചെറുകിട ബിസിനസുകൾക്കായി പ്രതിമാസ മെയിന്റനൻസ് സർവീസുകൾ നൽകി സ്ഥിരവരുമാനം നേടാൻ സഹായിക്കുന്ന ബിസിനസ്സ് മോഡൽ.',
          officialDocLinks: [
            { title: 'MainWP Website Management Platform', url: 'https://mainwp.com/' }
          ],
          videoResources: [
            { title: 'How to Sell WordPress Maintenance Plans to Clients (Kyle Van Deusen)', url: 'https://www.youtube.com/watch?v=mC7xK8_1wQs', platform: 'YouTube', durationMinutes: 25 }
          ],
          exercise: {
            title: 'Author a Professional Monthly Care Plan Proposal & Sample Report',
            description: 'Write a 2-page Website Maintenance Proposal detailing deliverables (Weekly Backups, Core/Plugin Updates, Uptime Monitoring, 1 Hour Monthly Content Changes) and design a sample monthly report for a client.',
            estimatedMinutes: 45,
            deliverable: 'A branded Client Care Plan document with pricing tiers and a sample client health report ready to pitch.'
          }
        }
      ]
    },
    {
      id: 'mod-wp-5',
      weekNumber: 5,
      title: 'Week 5: On-Page SEO, Speed Optimization & Lead Capture Forms',
      titleMl: 'ആഴ്ച 5: ഓൺ-പേജ് എസ്ഇഒ, സ്പീഡ് ഒപ്റ്റിമൈസേഷൻ & കോൺടാക്റ്റ് ഫോമുകൾ',
      objective: 'Configure Yoast/RankMath SEO, optimize site load speeds under 2 seconds, and build lead capture forms.',
      lessons: [
        {
          id: 'les-wp-21',
          dayNumber: 21,
          title: 'On-Page SEO with RankMath & Yoast',
          titleMl: 'ഓൺ-പേജ് എസ്ഇഒ ക്രമീകരണങ്ങൾ',
          durationMinutes: 50,
          overview: 'Master professional on-page seo with rankmath & yoast workflows used in real company environments.',
          concepts: ["Foundations of On-Page SEO with RankMath & Yoast", "Industry standard best practices", "Quality verification standards"],
          simpleEnglishGuide: 'Practical zero-knowledge step-by-step guidance: Setting meta titles, descriptions, focus keywords, and social open graph tags.. Always verify your final deliverables before sharing.',
          malayalamNotes: 'ഓൺ-പേജ് എസ്ഇഒ ക്രമീകരണങ്ങൾ: ജോലിസ്ഥലത്ത് ഈ വൈദഗ്ധ്യം ഉപയോഗിക്കുന്ന യഥാർത്ഥ രീതി ലളിതമായി പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'On-Page SEO with RankMath & Yoast Documentation & Guides', url: 'https://www.google.com' }],
          videoResources: [{
            title: 'On-Page SEO with RankMath & Yoast — Complete Step-by-Step Tutorial',
            provider: 'Career Launchpad Curated',
            url: 'https://www.google.com',
            language: 'English',
            duration: '25 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Complete the practical workplace task for Day 21: Setting meta titles, descriptions, focus keywords, and social open graph tags..',
            tasks: [
              'Review the provided instructions and download the exercise worksheet.',
              'Apply the required software operations and double-check outputs.',
              'Save your completed deliverable into your weekly portfolio folder.'
            ]
          },
          quiz: [{
            id: 'q-wp-21',
            question: 'What is the key objective of On-Page SEO with RankMath & Yoast in this role?',
            options: ["To bypass regular office standards", "To ensure high accuracy, efficiency and adherence to professional standards in on-page seo with rankmath & yoast", "To increase unnecessary overhead", "To work without any client documentation"],
            correctOptionIndex: 1,
            explanation: 'Mastering on-page seo with rankmath & yoast ensures tasks are delivered with professional accuracy and zero preventable errors.'
          }]
        },
        {
          id: 'les-wp-22',
          dayNumber: 22,
          title: 'Page Speed Optimization (Caching & WebP)',
          titleMl: 'വെബ്സൈറ്റ് സ്പീഡ് ഒപ്റ്റിമൈസേഷൻ',
          durationMinutes: 50,
          overview: 'Master professional page speed optimization (caching & webp) workflows used in real company environments.',
          concepts: ["Foundations of Page Speed Optimization (Caching & WebP)", "Industry standard best practices", "Quality verification standards"],
          simpleEnglishGuide: 'Practical zero-knowledge step-by-step guidance: Compressing images to WebP and configuring caching plugins for sub-2s load.. Always verify your final deliverables before sharing.',
          malayalamNotes: 'വെബ്സൈറ്റ് സ്പീഡ് ഒപ്റ്റിമൈസേഷൻ: ജോലിസ്ഥലത്ത് ഈ വൈദഗ്ധ്യം ഉപയോഗിക്കുന്ന യഥാർത്ഥ രീതി ലളിതമായി പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'Page Speed Optimization (Caching & WebP) Documentation & Guides', url: 'https://www.google.com' }],
          videoResources: [{
            title: 'Page Speed Optimization (Caching & WebP) — Complete Step-by-Step Tutorial',
            provider: 'Career Launchpad Curated',
            url: 'https://www.google.com',
            language: 'English',
            duration: '25 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Complete the practical workplace task for Day 22: Compressing images to WebP and configuring caching plugins for sub-2s load..',
            tasks: [
              'Review the provided instructions and download the exercise worksheet.',
              'Apply the required software operations and double-check outputs.',
              'Save your completed deliverable into your weekly portfolio folder.'
            ]
          },
          quiz: [{
            id: 'q-wp-22',
            question: 'What is the key objective of Page Speed Optimization (Caching & WebP) in this role?',
            options: ["To bypass regular office standards", "To ensure high accuracy, efficiency and adherence to professional standards in page speed optimization (caching & webp)", "To increase unnecessary overhead", "To work without any client documentation"],
            correctOptionIndex: 1,
            explanation: 'Mastering page speed optimization (caching & webp) ensures tasks are delivered with professional accuracy and zero preventable errors.'
          }]
        },
        {
          id: 'les-wp-23',
          dayNumber: 23,
          title: 'Advanced Contact Forms & Lead Notifications',
          titleMl: 'കോൺടാക്റ്റ് ഫോമുകളും ലീഡ് അലേർട്ടുകളും',
          durationMinutes: 50,
          overview: 'Master professional advanced contact forms & lead notifications workflows used in real company environments.',
          concepts: ["Foundations of Advanced Contact Forms & Lead Notifications", "Industry standard best practices", "Quality verification standards"],
          simpleEnglishGuide: 'Practical zero-knowledge step-by-step guidance: Building multi-step forms with WPForms and automated email notifications.. Always verify your final deliverables before sharing.',
          malayalamNotes: 'കോൺടാക്റ്റ് ഫോമുകളും ലീഡ് അലേർട്ടുകളും: ജോലിസ്ഥലത്ത് ഈ വൈദഗ്ധ്യം ഉപയോഗിക്കുന്ന യഥാർത്ഥ രീതി ലളിതമായി പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'Advanced Contact Forms & Lead Notifications Documentation & Guides', url: 'https://www.google.com' }],
          videoResources: [{
            title: 'Advanced Contact Forms & Lead Notifications — Complete Step-by-Step Tutorial',
            provider: 'Career Launchpad Curated',
            url: 'https://www.google.com',
            language: 'English',
            duration: '25 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Complete the practical workplace task for Day 23: Building multi-step forms with WPForms and automated email notifications..',
            tasks: [
              'Review the provided instructions and download the exercise worksheet.',
              'Apply the required software operations and double-check outputs.',
              'Save your completed deliverable into your weekly portfolio folder.'
            ]
          },
          quiz: [{
            id: 'q-wp-23',
            question: 'What is the key objective of Advanced Contact Forms & Lead Notifications in this role?',
            options: ["To bypass regular office standards", "To ensure high accuracy, efficiency and adherence to professional standards in advanced contact forms & lead notifications", "To increase unnecessary overhead", "To work without any client documentation"],
            correctOptionIndex: 1,
            explanation: 'Mastering advanced contact forms & lead notifications ensures tasks are delivered with professional accuracy and zero preventable errors.'
          }]
        },
        {
          id: 'les-wp-24',
          dayNumber: 24,
          title: 'WooCommerce Product Catalog Setup',
          titleMl: 'വൂ-കൊമേഴ്‌സ് പ്രൊഡക്റ്റ് കാറ്റലോഗ്',
          durationMinutes: 50,
          overview: 'Master professional woocommerce product catalog setup workflows used in real company environments.',
          concepts: ["Foundations of WooCommerce Product Catalog Setup", "Industry standard best practices", "Quality verification standards"],
          simpleEnglishGuide: 'Practical zero-knowledge step-by-step guidance: Adding products, prices, variations, and basic payment gateways in WooCommerce.. Always verify your final deliverables before sharing.',
          malayalamNotes: 'വൂ-കൊമേഴ്‌സ് പ്രൊഡക്റ്റ് കാറ്റലോഗ്: ജോലിസ്ഥലത്ത് ഈ വൈദഗ്ധ്യം ഉപയോഗിക്കുന്ന യഥാർത്ഥ രീതി ലളിതമായി പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'WooCommerce Product Catalog Setup Documentation & Guides', url: 'https://www.google.com' }],
          videoResources: [{
            title: 'WooCommerce Product Catalog Setup — Complete Step-by-Step Tutorial',
            provider: 'Career Launchpad Curated',
            url: 'https://www.google.com',
            language: 'English',
            duration: '25 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Complete the practical workplace task for Day 24: Adding products, prices, variations, and basic payment gateways in WooCommerce..',
            tasks: [
              'Review the provided instructions and download the exercise worksheet.',
              'Apply the required software operations and double-check outputs.',
              'Save your completed deliverable into your weekly portfolio folder.'
            ]
          },
          quiz: [{
            id: 'q-wp-24',
            question: 'What is the key objective of WooCommerce Product Catalog Setup in this role?',
            options: ["To bypass regular office standards", "To ensure high accuracy, efficiency and adherence to professional standards in woocommerce product catalog setup", "To increase unnecessary overhead", "To work without any client documentation"],
            correctOptionIndex: 1,
            explanation: 'Mastering woocommerce product catalog setup ensures tasks are delivered with professional accuracy and zero preventable errors.'
          }]
        },
        {
          id: 'les-wp-25',
          dayNumber: 25,
          title: 'WordPress Security Hardening & Malware Defense',
          titleMl: 'വേർഡ്പ്രസ്സ് സെക്യൂരിറ്റി & സുരക്ഷ',
          durationMinutes: 50,
          overview: 'Master professional wordpress security hardening & malware defense workflows used in real company environments.',
          concepts: ["Foundations of WordPress Security Hardening & Malware Defense", "Industry standard best practices", "Quality verification standards"],
          simpleEnglishGuide: 'Practical zero-knowledge step-by-step guidance: Changing login URLs, enforcing 2FA, and configuring Wordfence firewall.. Always verify your final deliverables before sharing.',
          malayalamNotes: 'വേർഡ്പ്രസ്സ് സെക്യൂരിറ്റി & സുരക്ഷ: ജോലിസ്ഥലത്ത് ഈ വൈദഗ്ധ്യം ഉപയോഗിക്കുന്ന യഥാർത്ഥ രീതി ലളിതമായി പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'WordPress Security Hardening & Malware Defense Documentation & Guides', url: 'https://www.google.com' }],
          videoResources: [{
            title: 'WordPress Security Hardening & Malware Defense — Complete Step-by-Step Tutorial',
            provider: 'Career Launchpad Curated',
            url: 'https://www.google.com',
            language: 'English',
            duration: '25 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Complete the practical workplace task for Day 25: Changing login URLs, enforcing 2FA, and configuring Wordfence firewall..',
            tasks: [
              'Review the provided instructions and download the exercise worksheet.',
              'Apply the required software operations and double-check outputs.',
              'Save your completed deliverable into your weekly portfolio folder.'
            ]
          },
          quiz: [{
            id: 'q-wp-25',
            question: 'What is the key objective of WordPress Security Hardening & Malware Defense in this role?',
            options: ["To bypass regular office standards", "To ensure high accuracy, efficiency and adherence to professional standards in wordpress security hardening & malware defense", "To increase unnecessary overhead", "To work without any client documentation"],
            correctOptionIndex: 1,
            explanation: 'Mastering wordpress security hardening & malware defense ensures tasks are delivered with professional accuracy and zero preventable errors.'
          }]
        }
      ]
    },
    {
      id: 'mod-wp-6',
      weekNumber: 6,
      title: 'Week 6: Security Hardening, Backup Drills & Web Manager Launch',
      titleMl: 'ആഴ്ച 6: സെക്യൂരിറ്റി, ബാക്കപ്പ് ഡ്രില്ലുകൾ & വെബ് മാനേജർ കരിയർ ലോഞ്ച്',
      objective: 'Harden WordPress security, schedule automated offsite backups, troubleshoot site errors, and land web manager roles.',
      lessons: [
        {
          id: 'les-wp-26',
          dayNumber: 26,
          title: 'Automated Offsite Backup & Restore Drills',
          titleMl: 'ഓട്ടോമേറ്റഡ് ബാക്കപ്പുകൾ & റീസ്റ്റോർ',
          durationMinutes: 50,
          overview: 'Master professional automated offsite backup & restore drills workflows used in real company environments.',
          concepts: ["Foundations of Automated Offsite Backup & Restore Drills", "Industry standard best practices", "Quality verification standards"],
          simpleEnglishGuide: 'Practical zero-knowledge step-by-step guidance: Setting up scheduled Google Drive backups with UpdraftPlus and testing restore.. Always verify your final deliverables before sharing.',
          malayalamNotes: 'ഓട്ടോമേറ്റഡ് ബാക്കപ്പുകൾ & റീസ്റ്റോർ: ജോലിസ്ഥലത്ത് ഈ വൈദഗ്ധ്യം ഉപയോഗിക്കുന്ന യഥാർത്ഥ രീതി ലളിതമായി പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'Automated Offsite Backup & Restore Drills Documentation & Guides', url: 'https://www.google.com' }],
          videoResources: [{
            title: 'Automated Offsite Backup & Restore Drills — Complete Step-by-Step Tutorial',
            provider: 'Career Launchpad Curated',
            url: 'https://www.google.com',
            language: 'English',
            duration: '25 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Complete the practical workplace task for Day 26: Setting up scheduled Google Drive backups with UpdraftPlus and testing restore..',
            tasks: [
              'Review the provided instructions and download the exercise worksheet.',
              'Apply the required software operations and double-check outputs.',
              'Save your completed deliverable into your weekly portfolio folder.'
            ]
          },
          quiz: [{
            id: 'q-wp-26',
            question: 'What is the key objective of Automated Offsite Backup & Restore Drills in this role?',
            options: ["To bypass regular office standards", "To ensure high accuracy, efficiency and adherence to professional standards in automated offsite backup & restore drills", "To increase unnecessary overhead", "To work without any client documentation"],
            correctOptionIndex: 1,
            explanation: 'Mastering automated offsite backup & restore drills ensures tasks are delivered with professional accuracy and zero preventable errors.'
          }]
        },
        {
          id: 'les-wp-27',
          dayNumber: 27,
          title: 'Troubleshooting 404s, White Screens & Plugin Conflicts',
          titleMl: 'വെബ്സൈറ്റ് എററുകൾ പരിഹരിക്കൽ',
          durationMinutes: 50,
          overview: 'Master professional troubleshooting 404s, white screens & plugin conflicts workflows used in real company environments.',
          concepts: ["Foundations of Troubleshooting 404s, White Screens & Plugin Conflicts", "Industry standard best practices", "Quality verification standards"],
          simpleEnglishGuide: 'Practical zero-knowledge step-by-step guidance: Diagnosing broken themes and plugin crashes using recovery mode and staging.. Always verify your final deliverables before sharing.',
          malayalamNotes: 'വെബ്സൈറ്റ് എററുകൾ പരിഹരിക്കൽ: ജോലിസ്ഥലത്ത് ഈ വൈദഗ്ധ്യം ഉപയോഗിക്കുന്ന യഥാർത്ഥ രീതി ലളിതമായി പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'Troubleshooting 404s, White Screens & Plugin Conflicts Documentation & Guides', url: 'https://www.google.com' }],
          videoResources: [{
            title: 'Troubleshooting 404s, White Screens & Plugin Conflicts — Complete Step-by-Step Tutorial',
            provider: 'Career Launchpad Curated',
            url: 'https://www.google.com',
            language: 'English',
            duration: '25 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Complete the practical workplace task for Day 27: Diagnosing broken themes and plugin crashes using recovery mode and staging..',
            tasks: [
              'Review the provided instructions and download the exercise worksheet.',
              'Apply the required software operations and double-check outputs.',
              'Save your completed deliverable into your weekly portfolio folder.'
            ]
          },
          quiz: [{
            id: 'q-wp-27',
            question: 'What is the key objective of Troubleshooting 404s, White Screens & Plugin Conflicts in this role?',
            options: ["To bypass regular office standards", "To ensure high accuracy, efficiency and adherence to professional standards in troubleshooting 404s, white screens & plugin conflicts", "To increase unnecessary overhead", "To work without any client documentation"],
            correctOptionIndex: 1,
            explanation: 'Mastering troubleshooting 404s, white screens & plugin conflicts ensures tasks are delivered with professional accuracy and zero preventable errors.'
          }]
        },
        {
          id: 'les-wp-28',
          dayNumber: 28,
          title: 'Capstone: Complete 5-Page Corporate Website',
          titleMl: 'ക്യാപ്സ്റ്റോൺ - 5 പേജ് കോർപ്പറേറ്റ് വെബ്സൈറ്റ്',
          durationMinutes: 50,
          overview: 'Master professional capstone: complete 5-page corporate website workflows used in real company environments.',
          concepts: ["Foundations of Capstone: Complete 5-Page Corporate Website", "Industry standard best practices", "Quality verification standards"],
          simpleEnglishGuide: 'Practical zero-knowledge step-by-step guidance: Building a responsive 5-page business site: Home, About, Services, Blog, Contact.. Always verify your final deliverables before sharing.',
          malayalamNotes: 'ക്യാപ്സ്റ്റോൺ - 5 പേജ് കോർപ്പറേറ്റ് വെബ്സൈറ്റ്: ജോലിസ്ഥലത്ത് ഈ വൈദഗ്ധ്യം ഉപയോഗിക്കുന്ന യഥാർത്ഥ രീതി ലളിതമായി പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'Capstone: Complete 5-Page Corporate Website Documentation & Guides', url: 'https://www.google.com' }],
          videoResources: [{
            title: 'Capstone: Complete 5-Page Corporate Website — Complete Step-by-Step Tutorial',
            provider: 'Career Launchpad Curated',
            url: 'https://www.google.com',
            language: 'English',
            duration: '25 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Complete the practical workplace task for Day 28: Building a responsive 5-page business site: Home, About, Services, Blog, Contact..',
            tasks: [
              'Review the provided instructions and download the exercise worksheet.',
              'Apply the required software operations and double-check outputs.',
              'Save your completed deliverable into your weekly portfolio folder.'
            ]
          },
          quiz: [{
            id: 'q-wp-28',
            question: 'What is the key objective of Capstone: Complete 5-Page Corporate Website in this role?',
            options: ["To bypass regular office standards", "To ensure high accuracy, efficiency and adherence to professional standards in capstone: complete 5-page corporate website", "To increase unnecessary overhead", "To work without any client documentation"],
            correctOptionIndex: 1,
            explanation: 'Mastering capstone: complete 5-page corporate website ensures tasks are delivered with professional accuracy and zero preventable errors.'
          }]
        },
        {
          id: 'les-wp-29',
          dayNumber: 29,
          title: 'Web Management Client Care Plan Portfolio',
          titleMl: 'വെബ് മാനേജ്‌മെന്റ് പോർട്ട്ഫോളിയോ',
          durationMinutes: 50,
          overview: 'Master professional web management client care plan portfolio workflows used in real company environments.',
          concepts: ["Foundations of Web Management Client Care Plan Portfolio", "Industry standard best practices", "Quality verification standards"],
          simpleEnglishGuide: 'Practical zero-knowledge step-by-step guidance: Drafting maintenance retainer proposals and client handover documentation.. Always verify your final deliverables before sharing.',
          malayalamNotes: 'വെബ് മാനേജ്‌മെന്റ് പോർട്ട്ഫോളിയോ: ജോലിസ്ഥലത്ത് ഈ വൈദഗ്ധ്യം ഉപയോഗിക്കുന്ന യഥാർത്ഥ രീതി ലളിതമായി പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'Web Management Client Care Plan Portfolio Documentation & Guides', url: 'https://www.google.com' }],
          videoResources: [{
            title: 'Web Management Client Care Plan Portfolio — Complete Step-by-Step Tutorial',
            provider: 'Career Launchpad Curated',
            url: 'https://www.google.com',
            language: 'English',
            duration: '25 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Complete the practical workplace task for Day 29: Drafting maintenance retainer proposals and client handover documentation..',
            tasks: [
              'Review the provided instructions and download the exercise worksheet.',
              'Apply the required software operations and double-check outputs.',
              'Save your completed deliverable into your weekly portfolio folder.'
            ]
          },
          quiz: [{
            id: 'q-wp-29',
            question: 'What is the key objective of Web Management Client Care Plan Portfolio in this role?',
            options: ["To bypass regular office standards", "To ensure high accuracy, efficiency and adherence to professional standards in web management client care plan portfolio", "To increase unnecessary overhead", "To work without any client documentation"],
            correctOptionIndex: 1,
            explanation: 'Mastering web management client care plan portfolio ensures tasks are delivered with professional accuracy and zero preventable errors.'
          }]
        },
        {
          id: 'les-wp-30',
          dayNumber: 30,
          title: 'Graduation & Landing Web Content Manager Roles',
          titleMl: 'സർട്ടിഫിക്കേഷൻ & വെബ് മാനേജർ ജോലികൾ',
          durationMinutes: 50,
          overview: 'Master professional graduation & landing web content manager roles workflows used in real company environments.',
          concepts: ["Foundations of Graduation & Landing Web Content Manager Roles", "Industry standard best practices", "Quality verification standards"],
          simpleEnglishGuide: 'Practical zero-knowledge step-by-step guidance: Final 30-day assessment, portfolio verification, and applying for remote web roles.. Always verify your final deliverables before sharing.',
          malayalamNotes: 'സർട്ടിഫിക്കേഷൻ & വെബ് മാനേജർ ജോലികൾ: ജോലിസ്ഥലത്ത് ഈ വൈദഗ്ധ്യം ഉപയോഗിക്കുന്ന യഥാർത്ഥ രീതി ലളിതമായി പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'Graduation & Landing Web Content Manager Roles Documentation & Guides', url: 'https://www.google.com' }],
          videoResources: [{
            title: 'Graduation & Landing Web Content Manager Roles — Complete Step-by-Step Tutorial',
            provider: 'Career Launchpad Curated',
            url: 'https://www.google.com',
            language: 'English',
            duration: '25 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Complete the practical workplace task for Day 30: Final 30-day assessment, portfolio verification, and applying for remote web roles..',
            tasks: [
              'Review the provided instructions and download the exercise worksheet.',
              'Apply the required software operations and double-check outputs.',
              'Save your completed deliverable into your weekly portfolio folder.'
            ]
          },
          quiz: [{
            id: 'q-wp-30',
            question: 'What is the key objective of Graduation & Landing Web Content Manager Roles in this role?',
            options: ["To bypass regular office standards", "To ensure high accuracy, efficiency and adherence to professional standards in graduation & landing web content manager roles", "To increase unnecessary overhead", "To work without any client documentation"],
            correctOptionIndex: 1,
            explanation: 'Mastering graduation & landing web content manager roles ensures tasks are delivered with professional accuracy and zero preventable errors.'
          }]
        }
      ]
    }
  ],
  quizzes: [
    {
      weekNumber: 1,
      title: 'Week 1 Assessment: WordPress Architecture & Gutenberg Mastery',
      questions: [
        {
          id: 'q-wp-1',
          question: 'What is the primary difference between WordPress.com and WordPress.org?',
          options: [
            'WordPress.com is an email provider, while WordPress.org is an operating system',
            'WordPress.com is a managed hosting SaaS platform, while WordPress.org is the free, self-hosted open-source software that gives you 100% control',
            'WordPress.com requires coding in C++, while WordPress.org is drag-and-drop only',
            'There is no difference between them'
          ],
          correctIndex: 1,
          explanation: 'WordPress.org provides the free open-source software you install on any hosting server, allowing unlimited plugins and monetization. WordPress.com is a commercial hosted platform with plan restrictions.',
          questionMl: 'WordPress.com ഉം WordPress.org ഉം തമ്മിലുള്ള പ്രധാന വ്യത്യാസം എന്താണ്?',
          optionsMl: [
            'WordPress.com ഒരു ഇമെയിൽ സേവനമാണ്, WordPress.org ഒരു ഒഎസ് ആണ്',
            'WordPress.com വാടകയ്ക്കെടുക്കുന്ന സർവീസ് പ്ലാറ്റ്‌ഫോമാണ്, എന്നാൽ WordPress.org സ്വന്തമായി നിയന്ത്രിക്കാവുന്ന സൗജന്യ സോഫ്റ്റ്‌വെയറാണ്',
            'WordPress.com ൽ കോഡിംഗ് വേണം, org ൽ വേണ്ട',
            'രണ്ടും തമ്മിൽ വ്യത്യാസമില്ല'
          ]
        },
        {
          id: 'q-wp-2',
          question: 'When should you use a "Page" instead of a "Post" in WordPress?',
          options: [
            'For daily news updates that need category archives',
            'For timeless static content that does not require publication dates, such as About Us or Contact Us',
            'When you want content to appear in the RSS feed',
            'When you need multiple author tags'
          ],
          correctIndex: 1,
          explanation: 'Pages are intended for static, permanent content (About, Privacy, Services, Contact), whereas Posts are chronological blog articles organized by dates and categories.',
          questionMl: 'വേർഡ്പ്രസ്സിൽ "പോസ്റ്റ്" അല്ലാതെ "പേജ്" എപ്പോഴാണ് ഉപയോഗിക്കേണ്ടത്?',
          optionsMl: [
            'ദിവസേനയുള്ള വാർത്തകൾക്ക്',
            'തിയതികൾ ആവശ്യമില്ലാത്ത സ്ഥിരമായ വിവരങ്ങൾക്ക് (ഉദാ: About Us, Contact Us)',
            'ആർഎസ്എസ് ഫീഡിൽ വരാൻ',
            'ഒന്നിലധികം എഴുത്തുകാരുടെ പേരുകൾ കാണിക്കാൻ'
          ]
        },
        {
          id: 'q-wp-3',
          question: 'Which WordPress tool allows you to build and test websites locally on your computer for free without paying for a domain or hosting?',
          options: [
            'LocalWP',
            'Adobe Photoshop',
            'Google Chrome Inspector',
            'Microsoft Excel'
          ],
          correctIndex: 0,
          explanation: 'LocalWP (localwp.com) is the premier offline development tool that configures PHP, MySQL, and WordPress on your computer in seconds completely free.',
          questionMl: 'ഡൊമെയ്‌നോ ഹോസ്റ്റിംഗോ വാങ്ങാതെ സ്വന്തം കമ്പ്യൂട്ടറിൽ സൗജന്യമായി വേർഡ്പ്രസ്സ് പ്രവർത്തിപ്പിക്കാൻ സഹായിക്കുന്ന ടൂൾ ഏതാണ്?',
          optionsMl: [
            'LocalWP',
            'Adobe Photoshop',
            'Google Chrome Inspector',
            'Microsoft Excel'
          ]
        },
        {
          id: 'q-wp-4',
          question: 'What is a "Synced Pattern" (formerly known as a Reusable Block) in the Gutenberg editor?',
          options: [
            'A block that synchronizes with the user\'s local clock',
            'A saved block or group of blocks that updates automatically across every page on your site when you edit it in one place',
            'A plugin that backs up media to Dropbox',
            'A font family that changes color automatically'
          ],
          correctIndex: 1,
          explanation: 'Synced Patterns allow you to design a component (like a call-to-action banner) once. When you edit it on any single page, the changes instantly reflect across all other pages using that pattern.',
          questionMl: 'ഗുട്ടൻബർഗ് എഡിറ്ററിലെ "സിങ്ക്ഡ് പാറ്റേൺ" (റീയൂസബിൾ ബ്ലോക്ക്) കൊണ്ടുള്ള പ്രയോജനം എന്താണ്?',
          optionsMl: [
            'കമ്പ്യൂട്ടറിലെ ക്ലോക്കുമായി സമയം ക്രമീകരിക്കാൻ',
            'ഒരിടത്ത് മാറ്റം വരുത്തിയാൽ സൈറ്റിലെ എല്ലാ പേജുകളിലും ഒരേസമയം ഓട്ടോമാറ്റിക്കായി മാറുന്ന ബ്ലോക്ക് സിസ്റ്റം',
            'ഡ്രോപ്പ്ബോക്സിലേക്ക് ബാക്കപ്പ് എടുക്കാൻ',
            'ഫോണ്ട് നിറം മാറ്റാൻ'
          ]
        },
        {
          id: 'q-wp-5',
          question: 'Which permalink structure is recommended by SEO specialists for optimal Google indexing and human readability?',
          options: [
            'Plain (e.g., /?p=123)',
            'Post name (e.g., /sample-post/)',
            'Day and name (e.g., /2026/11/24/sample-post/)',
            'Numeric (e.g., /archives/123)'
          ],
          correctIndex: 1,
          explanation: 'The "Post name" structure generates clean, short, keyword-rich URLs (like /services/consulting/) without confusing numbers or date stamps that expire.',
          questionMl: 'ഗൂഗിൾ റാങ്കിംഗിനും ഉപഭോക്താക്കൾക്കും ഏറ്റവും അനുയോജ്യമായ പെർമാലിങ്ക് സെറ്റിംഗ് ഏതാണ്?',
          optionsMl: [
            'Plain (/?p=123)',
            'Post name (/sample-post/)',
            'Day and name (/2026/11/24/sample-post/)',
            'Numeric (/archives/123)'
          ]
        }
      ]
    },
    {
      weekNumber: 2,
      title: 'Week 2 Assessment: Media Optimization, Menus & SEO Best Practices',
      questions: [
        {
          id: 'q-wp-6',
          question: 'Why should image file sizes on a website generally be kept under 150KB - 200KB?',
          options: [
            'Because WordPress will delete files larger than 500KB automatically',
            'To maintain sub-second page loading speeds and prevent visitors from bouncing off on mobile connections',
            'Because search engines only index images that are black and white',
            'Large images corrupt database tables'
          ],
          correctIndex: 1,
          explanation: 'Heavy images cause slow page loading, which directly harms user experience and lowers Google search rankings, especially on mobile data networks.',
          questionMl: 'വെബ്സൈറ്റുകളിൽ ചിത്രങ്ങളുടെ വലുപ്പം 150KB - 200KB ൽ താഴെ നിർത്തുന്നത് എന്തിനാണ്?',
          optionsMl: [
            'വേർഡ്പ്രസ്സ് വലിയ ചിത്രങ്ങൾ ഡിലീറ്റ് ചെയ്യുമെന്നതുകൊണ്ട്',
            'പേജ് അതിവേഗം ലോഡ് ആകുന്നതിനും മൊബൈൽ യൂസർമാർക്ക് തടസ്സമില്ലാതെ കാണുന്നതിനും',
            'ഗൂഗിൾ ബ്ലാക്ക് ആൻഡ് വൈറ്റ് ചിത്രങ്ങൾ മാത്രമേ എടുക്കൂ എന്നതിനാൽ',
            'ഡാറ്റാബേസ് കേടാവാതിരിക്കാൻ'
          ]
        },
        {
          id: 'q-wp-7',
          question: 'What is the purpose of image "Alt Text" (Alternative Text) in WordPress?',
          options: [
            'It changes the color tone of the image when clicked',
            'It provides a text description for visually impaired visitors using screen readers and helps Google understand image context',
            'It watermarks the client\'s copyright logo across the photo',
            'It automatically crops the photo into a square'
          ],
          correctIndex: 1,
          explanation: 'Alt Text serves two critical roles: digital accessibility for screen-reader users, and indexing context for search engine image algorithms.',
          questionMl: 'ചിത്രങ്ങൾക്ക് "Alt Text" നൽകുന്നത് എന്തിനാണ്?',
          optionsMl: [
            'ചിത്രത്തിന്റെ നിറം മാറ്റാൻ',
            'കാഴ്ചപരിമിതിയുള്ളവർക്ക് സ്ക്രീൻ റീഡർ വഴി ചിത്രം മനസ്സിലാക്കാനും ഗൂഗിളിന് വിവരങ്ങൾ നൽകാനും',
            'ഫോട്ടോയിൽ വാട്ടർമാർക്ക് ചേർക്കാൻ',
            'ഫോട്ടോ ഓട്ടോമാറ്റിക്കായി ക്രോപ്പ് ചെയ്യാൻ'
          ]
        },
        {
          id: 'q-wp-8',
          question: 'What is the recommended character length for an SEO Meta Description?',
          options: [
            '10 to 20 characters',
            '140 to 160 characters',
            'Over 500 characters',
            'Exactly 1,000 characters'
          ],
          correctIndex: 1,
          explanation: 'Google snippets truncate meta descriptions after approximately 155-160 characters on desktop and even fewer on mobile. Writing between 140-160 characters ensures your entire message displays cleanly.',
          questionMl: 'ഒരു പേജിന്റെ മെറ്റാ ഡിസ്ക്രിപ്ഷൻ (Meta Description) എത്ര അക്ഷരങ്ങൾക്കുള്ളിൽ ഒതുക്കണം?',
          optionsMl: [
            '10 മുതൽ 20 അക്ഷരങ്ങൾ',
            '140 മുതൽ 160 അക്ഷരങ്ങൾ',
            '500 ൽ കൂടുതൽ',
            'കൃത്യം 1000 അക്ഷരങ്ങൾ'
          ]
        },
        {
          id: 'q-wp-9',
          question: 'What does an XML Sitemap do for a WordPress website?',
          options: [
            'It encrypts credit card transactions',
            'It provides search engines with a structured index list of every valid published page on your website to ensure thorough crawling',
            'It backs up the media library to an external USB stick',
            'It creates a Google Map of the company\'s physical store'
          ],
          correctIndex: 1,
          explanation: 'An XML sitemap lists all your site\'s public URLs in a machine-readable format so Googlebot and Bingbot can crawl and index your content efficiently.',
          questionMl: 'വേർഡ്പ്രസ്സിൽ XML സൈറ്റ്മാപ്പ് ചെയ്യുന്ന പ്രധാന ജോലി എന്താണ്?',
          optionsMl: [
            'പണമിടപാടുകൾ എൻക്രിപ്റ്റ് ചെയ്യുക',
            'ഗൂഗിളിന് സൈറ്റിലെ എല്ലാ പേജുകളും വേഗത്തിൽ കണ്ടെത്താനായി ചിട്ടയായ ലിസ്റ്റ് നൽകുക',
            'മീഡിയ ഫയലുകൾ പെൻഡ്രൈവിലേക്ക് മാറ്റുക',
            'കടയുടെ മാപ്പ് നിർമ്മിക്കുക'
          ]
        },
        {
          id: 'q-wp-10',
          question: 'How do Categories differ from Tags in WordPress blog organization?',
          options: [
            'Categories are paid, while Tags are free',
            'Categories represent broad hierarchical topics, while Tags represent specific non-hierarchical keywords',
            'Tags can have sub-tags, but categories cannot',
            'They are identical and should always have the exact same names'
          ],
          correctIndex: 1,
          explanation: 'Categories organize content into general hierarchical sections (e.g., Marketing -> Social Media), while Tags index specific micro-topics mentioned across multiple posts.',
          questionMl: 'ബ്ലോഗുകളിൽ കാറ്റഗറികളും ടാഗുകളും തമ്മിലുള്ള വ്യത്യാസം എന്താണ്?',
          optionsMl: [
            'കാറ്റഗറികൾ പണം കൊടുക്കണം, ടാഗുകൾ സൗജന്യമാണ്',
            'കാറ്റഗറികൾ പൊതുവായ പ്രധാന വിഷയങ്ങളും, ടാഗുകൾ അതിനുള്ളിലെ പ്രത്യേക കീവേഡുകളുമാണ്',
            'ടാഗുകൾക്ക് സബ്-ടാഗുകൾ ഉണ്ടാക്കാം, കാറ്റഗറിക്ക് പറ്റില്ല',
            'രണ്ടും ഒന്നുതന്നെയാണ്'
          ]
        }
      ]
    },
    {
      weekNumber: 3,
      title: 'Week 3 Assessment: Forms, WooCommerce & Plugin Management',
      questions: [
        {
          id: 'q-wp-11',
          question: 'What is a "Variable Product" in WooCommerce?',
          options: [
            'A product whose price changes every 60 seconds randomly',
            'A product offering selectable customer options (such as size, color, or material) with distinct prices and inventory counts',
            'A product that can only be downloaded as a PDF',
            'A product that cannot be refunded'
          ],
          correctIndex: 1,
          explanation: 'A variable product in WooCommerce allows variations (e.g., a shirt with Small, Medium, Large sizes), where each variation can have its own price, SKU, and stock count.',
          questionMl: 'വൂകൊമേഴ്‌സിൽ "വേരിയബിൾ പ്രൊഡക്റ്റ്" (Variable Product) എന്നാൽ എന്താണ്?',
          optionsMl: [
            'ഓരോ മിനിറ്റിലും വില മാറുന്ന പ്രൊഡക്റ്റ്',
            'സൈസ്, നിറം തുടങ്ങിയ വ്യത്യസ്ത ഓപ്ഷനുകളുള്ളതും അതിനനുസരിച്ച് വിലയോ സ്റ്റോക്കോ മാറാവുന്നതുമായ പ്രൊഡക്റ്റ്',
            'പിഡിഎഫ് ആയി മാത്രം ഡൗൺലോഡ് ചെയ്യാവുന്ന സാധനം',
            'തിരിച്ചെടുക്കാൻ പറ്റാത്ത സാധനം'
          ]
        },
        {
          id: 'q-wp-12',
          question: 'What is the "Honeypot" technique in online contact forms?',
          options: [
            'Offering free honey to every visitor who fills the form',
            'An invisible field designed to trap spam bots while remaining completely invisible to human users',
            'A paid plugin that sells customer contact details',
            'A method to save customer passwords'
          ],
          correctIndex: 1,
          explanation: 'Honeypots are hidden form fields that humans never see or fill out. Automated bots, which crawl raw HTML, fill in every field they find, instantly flagging their submission as spam.',
          questionMl: 'കോൺടാക്റ്റ് ഫോമുകളിൽ "ഹണിപോട്ട്" (Honeypot) ഉപയോഗിക്കുന്നത് എന്തിനാണ്?',
          optionsMl: [
            'സന്ദർശകർക്ക് ഓഫറുകൾ നൽകാൻ',
            'മനുഷ്യർക്ക് കാണാൻ കഴിയാത്തതും സ്പാം ബോട്ടുകളെ കുടുക്കി ഒഴിവാക്കാൻ സഹായിക്കുന്നതുമായ അദൃശ്യ ഫീൽഡ്',
            'കസ്റ്റമർ വിവരങ്ങൾ വിൽക്കാൻ',
            'പാസ്‌വേഡ് സേവ് ചെയ്യാൻ'
          ]
        },
        {
          id: 'q-wp-13',
          question: 'What should you ALWAYS do immediately before updating plugins or WordPress core on a live production website?',
          options: [
            'Email all customers apologizing for downtime',
            'Take a full website backup (database and wp-content files)',
            'Delete all inactive user accounts',
            'Change the website theme'
          ],
          correctIndex: 1,
          explanation: 'Taking a complete backup before running updates ensures that if an updated plugin conflicts with your theme or PHP version and breaks the site, you can restore full functionality in minutes.',
          questionMl: 'ലൈവ് വെബ്സൈറ്റിൽ പ്ലഗിനുകൾ അപ്ഡേറ്റ് ചെയ്യുന്നതിന് തൊട്ടുമുമ്പ് നിർബന്ധമായും ചെയ്യേണ്ട കാര്യം എന്താണ്?',
          optionsMl: [
            'എല്ലാ കസ്റ്റമേഴ്സിനും മെയിൽ അയക്കുക',
            'വെബ്സൈറ്റിന്റെ പൂർണ്ണമായ ഒരു ബാക്കപ്പ് (Backup) എടുക്കുക',
            'പഴയ അക്കൗണ്ടുകൾ ഡിലീറ്റ് ചെയ്യുക',
            'സൈറ്റിന്റെ തീം മാറ്റുക'
          ]
        },
        {
          id: 'q-wp-14',
          question: 'In WooCommerce, what status does a paid order enter when physical items need to be packed and shipped?',
          options: [
            'Pending Payment',
            'Processing',
            'Completed',
            'On Hold'
          ],
          correctIndex: 1,
          explanation: 'Once payment is successfully received, the order status changes to "Processing". After the warehouse dispatches the package and provides tracking, the store manager marks it as "Completed".',
          questionMl: 'വൂകൊമേഴ്‌സിൽ പണം ലഭിച്ച ശേഷം സാധനം പാക്ക് ചെയ്ത് അയക്കാൻ ബാക്കിയുള്ളപ്പോൾ ഓർഡർ സ്റ്റാറ്റസ് എന്തായിരിക്കും?',
          optionsMl: [
            'Pending Payment',
            'Processing',
            'Completed',
            'On Hold'
          ]
        },
        {
          id: 'q-wp-15',
          question: 'What is a "Staging Website" in professional web development workflows?',
          options: [
            'A website made specifically for theatrical actors',
            'A private exact clone of the live website used for testing plugins, code updates, and design changes safely away from real customers',
            'A temporary landing page displaying an Under Construction banner',
            'A website hosted on social media'
          ],
          correctIndex: 1,
          explanation: 'A staging environment is a sandbox duplicate of the production site where you can safely test updates, debug errors, and verify changes without risking downtime on the live site.',
          questionMl: 'പ്രൊഫഷണൽ വെബ്സൈറ്റുകളിൽ "സ്റ്റേജിങ് സൈറ്റ്" (Staging Site) എന്തിനാണ് ഉപയോഗിക്കുന്നത്?',
          optionsMl: [
            'നാടക നടന്മാർക്ക് വേണ്ടിയുള്ള സൈറ്റ്',
            'ലൈവ് സൈറ്റിന് കുഴപ്പമുണ്ടാകാതെ പുതിയ മാറ്റങ്ങളും അപ്‌ഡേറ്റുകളും ടെസ്റ്റ് ചെയ്യാൻ ഉപയോഗിക്കുന്ന സ്വകാര്യ പകർപ്പ്',
            'കൺസ്ട്രക്ഷൻ പേജ് കാണിക്കാൻ',
            'സോഷ്യൽ മീഡിയ സൈറ്റ്'
          ]
        }
      ]
    },
    {
      weekNumber: 4,
      title: 'Week 4 Assessment: Backups, Security, Speed & Freelance Business',
      questions: [
        {
          id: 'q-wp-16',
          question: 'Why should website backups be stored in offsite cloud storage (such as Google Drive or Dropbox) rather than solely on the hosting server?',
          options: [
            'Because hosting servers delete backups every 30 minutes',
            'If the web hosting server crashes, catches fire, or the account is locked, local backups are lost with it',
            'Because Google Drive automatically translates websites into 50 languages',
            'Offsite storage makes the website load faster'
          ],
          correctIndex: 1,
          explanation: 'Offsite backups guarantee disaster recovery. If a host suffers hardware failure or malware infection, your data remains safe and accessible in an independent cloud location.',
          questionMl: 'വെബ്സൈറ്റ് ബാക്കപ്പുകൾ ഹോസ്റ്റിംഗ് സെർവറിൽ മാത്രം സൂക്ഷിക്കാതെ ഗൂഗിൾ ഡ്രൈവിലോ ഡ്രോപ്പ്ബോക്സിലോ സൂക്ഷിക്കുന്നത് എന്തുകൊണ്ട്?',
          optionsMl: [
            'ഹോസ്റ്റിംഗ് സെർവർ അരമണിക്കൂർ കൂടുമ്പോൾ ബാക്കപ്പ് കളയും',
            'സെർവറിന് കേടുപാടുകൾ സംഭവിച്ചാലോ അക്കൗണ്ട് നഷ്ടപ്പെട്ടാലോ സൈറ്റ് തിരിച്ചെടുക്കാൻ പുറത്തുള്ള ക്ലൗഡ് ബാക്കപ്പ് സഹായിക്കും',
            'ഗൂഗിൾ ഡ്രൈവ് തർജ്ജമ ചെയ്യും',
            'സൈറ്റിന്റെ വേഗത കൂട്ടാൻ'
          ]
        },
        {
          id: 'q-wp-17',
          question: 'How does a caching plugin accelerate page loading speeds for visitors?',
          options: [
            'It removes all images from the website',
            'It serves pre-built static HTML copies of pages, bypassing expensive and repetitive PHP code execution and MySQL database queries',
            'It increases the visitor\'s local home internet bandwidth',
            'It reduces video playback resolutions'
          ],
          correctIndex: 1,
          explanation: 'Dynamic WordPress pages normally query MySQL and run PHP for every visitor. Caching saves a static HTML version of the page, delivering it in milliseconds with minimal server strain.',
          questionMl: 'കാഷിങ് (Caching) പ്ലഗിനുകൾ എങ്ങനെയാണ് വെബ്സൈറ്റിന്റെ സ്പീഡ് കൂട്ടുന്നത്?',
          optionsMl: [
            'എല്ലാ ചിത്രങ്ങളും ഡിലീറ്റ് ചെയ്തുകൊണ്ട്',
            'ഓരോ തവണയും ഡാറ്റാബേസിൽ പോയി തിരയാതെ, മുൻകൂട്ടി തയ്യാറാക്കിയ സ്റ്റാറ്റിക് എച്ച്ടിഎംഎൽ കോപ്പികൾ നൽകിക്കൊണ്ട്',
            'യൂസറുടെ ഇന്റർനെറ്റ് സ്പീഡ് കൂട്ടിക്കൊണ്ട്',
            'വീഡിയോ ക്വാളിറ്റി കുറച്ചുകൊണ്ട്'
          ]
        },
        {
          id: 'q-wp-18',
          question: 'What is a 301 Permanent Redirect and when is it required?',
          options: [
            'A notification that charges 301 rupees to visitors',
            'An HTTP status code that seamlessly redirects visitors and search engines from an old or deleted URL to a new active URL, preserving SEO equity',
            'A warning that the server is out of memory',
            'A script that forces visitors to refresh their browser'
          ],
          correctIndex: 1,
          explanation: 'A 301 redirect permanently sends traffic and Google ranking authority from a retired or renamed URL to the correct new page, preventing 404 Page Not Found errors.',
          questionMl: 'ഒരു 301 റീഡയറക്റ്റ് (Permanent Redirect) എന്തിനാണ് ഉപയോഗിക്കുന്നത്?',
          optionsMl: [
            '301 രൂപ ഫീസ് ഈടാക്കാൻ',
            'പഴയതോ മാറ്റിയതോ ആയ ലിങ്കുകളിൽ ക്ലിക്ക് ചെയ്യുന്നവരെ തടസ്സമില്ലാതെ പുതിയ പേജിലേക്ക് മാറ്റാനും ഗൂഗിൾ റാങ്ക് നിലനിർത്താനും',
            'സെർവർ മെമ്മറി തീർന്നുവെന്ന് അറിയിക്കാൻ',
            'ബ്രൗസർ റീഫ്രഷ് ചെയ്യാൻ'
          ]
        },
        {
          id: 'q-wp-19',
          question: 'What security feature protects WordPress login portals from automated dictionary and brute-force password guessing bots?',
          options: [
            'Changing the background wallpaper of the site',
            'Limiting consecutive failed login attempts and requiring Two-Factor Authentication (2FA)',
            'Disabling the mouse right-click button',
            'Hiding the blog post comments'
          ],
          correctIndex: 1,
          explanation: 'Limiting failed attempts locks out IP addresses after 3 to 5 incorrect passwords, while 2FA requires an ephemeral code from a phone app, stopping brute-force bots in their tracks.',
          questionMl: 'പാസ്‌വേഡ് ഊഹിച്ചെടുത്ത് ഹാക്ക് ചെയ്യാൻ ശ്രമിക്കുന്ന ബോട്ടുകളെ തടയാൻ സഹായിക്കുന്ന സുരക്ഷാ സംവിധാനം ഏതാണ്?',
          optionsMl: [
            'സൈറ്റിന്റെ വാൾപേപ്പർ മാറ്റുക',
            'തുടർച്ചയായി തെറ്റായ പാസ്‌വേഡ് അടിച്ചാൽ ലോഗിൻ ബ്ലോക്ക് ചെയ്യുകയും 2FA സുരക്ഷ ഏർപ്പെടുത്തുകയും ചെയ്യുക',
            'റൈറ്റ് ക്ലിക്ക് ഒഴിവാക്കുക',
            'കമന്റുകൾ ഹൈഡ് ചെയ്യുക'
          ]
        },
        {
          id: 'q-wp-20',
          question: 'What is the primary benefit of offering "Website Care Plans" (Monthly Maintenance Retainers) to clients?',
          options: [
            'You only have to work one day per year',
            'It provides predictable, recurring monthly income ($50 - $200 per client/month) while giving clients peace of mind that their site is secure and updated',
            'Clients will never contact you with support questions',
            'You own the client\'s physical trademark'
          ],
          correctIndex: 1,
          explanation: 'Website care plans transform one-off design clients into long-term monthly retainer relationships. 10 clients paying $100/mo creates a steady $1,000 monthly income base.',
          questionMl: 'ക്ലയന്റുകൾക്ക് "പ്രതിമാസ വെബ്സൈറ്റ് മെയിന്റനൻസ്" നൽകുന്നതുകൊണ്ടുള്ള പ്രധാന പ്രയോജനം എന്താണ്?',
          optionsMl: [
            'വർഷത്തിൽ ഒരു ദിവസം മാത്രം ജോലി ചെയ്താൽ മതിയാകും',
            'ക്ലയന്റുകൾക്ക് സുരക്ഷിതത്വവും നിങ്ങൾക്ക് ഓരോ മാസവും സ്ഥിരവരുമാനവും ($50 - $200) ലഭിക്കുന്നു',
            'ക്ലയന്റുകൾ ഒരിക്കലും സംശയം ചോദിക്കില്ല',
            'ക്ലയന്റിന്റെ കമ്പനി നിങ്ങളുടെ ഉടമസ്ഥതയിലാകും'
          ]
        }
      ]
    }
  ],
  projects: [
    {
      id: 'proj-wp-1',
      title: 'Complete 5-Page Corporate Business Website Layout in Gutenberg',
      titleMl: 'പ്രോജക്റ്റ് 1: ഗുട്ടൻബർഗിൽ 5 പേജുള്ള കോർപ്പറേറ്റ് ബിസിനസ്സ് വെബ്സൈറ്റ്',
      durationHours: 15,
      description: 'Build a production-quality, responsive 5-page business website on your local WordPress sandbox for an IT Consulting or Logistics agency. Implement modern hero banners with cover overlays, multi-column service offerings, an interactive contact form, and full responsive alignment across mobile, tablet, and desktop viewports.',
      objectives: [
        'Build Home, About, Services, Case Studies, and Contact Us pages using native Gutenberg blocks',
        'Incorporate Columns, Groups, Covers, Buttons, and Synced Pattern Call-to-Actions',
        'Configure clean permalinks, navigation menus, and mobile-responsive layouts',
        'Test submission workflows for the lead generation contact form'
      ],
      rubric: [
        { criteria: 'Structural Layout & Visual Hierarchy', maxScore: 25, description: 'Correct usage of H1/H2 headings, adequate spacing/margins, and cohesive color typography.' },
        { criteria: 'Gutenberg Block Proficiency', maxScore: 25, description: 'Effective utilization of columns, groups, cover blocks, and at least one reusable synced pattern.' },
        { criteria: 'Navigation & Information Architecture', maxScore: 25, description: 'Clean permalink slugs, working dropdown menu, and functional footer navigation.' },
        { criteria: 'Mobile Responsiveness & Forms', maxScore: 25, description: 'Layout adapts cleanly on 375px mobile viewports with no text truncation; contact form functions.' }
      ],
      deliverable: 'A live demo video recording or exported LocalWP site zip archive demonstrating the full 5-page layout, navigation, and mobile viewports.'
    },
    {
      id: 'proj-wp-2',
      title: 'High-Speed Blog Hub with On-Page SEO, OpenGraph & Sitemaps',
      titleMl: 'പ്രോജക്റ്റ് 2: ഓൺ-പേജ് എസ്ഇഒ, സോഷ്യൽ കാർഡുകൾ, സ്പീഡ് ഒപ്റ്റിമൈസ്ഡ് ബ്ലോഗ് ഹബ്ബ്',
      durationHours: 15,
      description: 'Architect a 10-article content publication hub in a specific professional niche (e.g., Renewable Energy, Health & Wellness, or Remote Work). Optimize all media to WebP format under 150KB, write search-optimized meta titles and descriptions using Rank Math or Yoast, structure parent-child categories, and generate verified XML sitemaps.',
      objectives: [
        'Publish 10 structured blog articles with properly aligned images and typography',
        'Optimize every image to WebP under 150KB with accessibility Alt Text',
        'Configure Rank Math / Yoast focus keywords, meta titles, descriptions, and OpenGraph social share cards',
        'Organize content into 3 parent categories and submit a verified XML sitemap'
      ],
      rubric: [
        { criteria: 'On-Page SEO Optimization', maxScore: 30, description: 'Every article has targeted meta titles (<60 chars), persuasive descriptions (<160 chars), and focus keyword alignment.' },
        { criteria: 'Media Compression & Hygiene', maxScore: 25, description: 'All 10+ images are WebP format under 150KB with meaningful accessibility Alt Text.' },
        { criteria: 'Taxonomy Architecture', maxScore: 25, description: 'Logical parent-child categories, balanced tag usage, and clean taxonomy archive pages.' },
        { criteria: 'Sitemap & Technical Health', maxScore: 20, description: 'Valid XML sitemap without noindex errors or broken redirect links.' }
      ],
      deliverable: 'A comprehensive SEO and content audit document containing screenshots of green SEO scores, sitemap URL links, and image compression metrics.'
    },
    {
      id: 'proj-wp-3',
      title: 'WooCommerce E-Commerce Storefront with 15-Product Catalog & Maintenance Kit',
      titleMl: 'പ്രോജക്റ്റ് 3: 15 പ്രൊഡക്റ്റുകളുള്ള വൂകൊമേഴ്‌സ് സ്റ്റോറും കെയർ പ്ലാനും',
      durationHours: 20,
      description: 'Set up an end-to-end e-commerce store with WooCommerce featuring 15 products (10 simple products, 5 variable products with multiple size/color attributes). Configure store currency, cart/checkout flows, cash-on-delivery testing, automated cloud backups with UpdraftPlus, login security lockout protection, and a professional 3-tier Website Care Plan proposal for the store owner.',
      objectives: [
        'Install and configure WooCommerce with regional currency, tax settings, and shipping rules',
        'Add 15 products with SKU codes, category taxonomy, prices, and attribute variations',
        'Configure UpdraftPlus automated cloud backups and Limit Login Attempts security',
        'Author a Client Care Plan proposal outlining monthly maintenance retainers'
      ],
      rubric: [
        { criteria: 'Store Catalog & Variation Setup', maxScore: 30, description: 'Accurate simple and variable products with SKU, inventory tracking, prices, and high-quality images.' },
        { criteria: 'Checkout & Cart User Flow', maxScore: 25, description: 'Smooth checkout experience, test order generation, and clear invoice receipts.' },
        { criteria: 'Security & Backup Implementation', maxScore: 25, description: 'Automated UpdraftPlus cloud backups configured; login lockout protection active.' },
        { criteria: 'Client Care Plan Retainer Document', maxScore: 20, description: 'Professional 2-page retainer agreement with clear maintenance deliverables and monthly pricing.' }
      ],
      deliverable: 'A complete portfolio showcase containing screenshots of the WooCommerce catalog, variable product dropdowns, completed test orders, backup logs, and the client care proposal PDF.'
    }
  ],
  sampleDatasets: [
    {
      title: 'E-commerce Store Product Catalog Import (CSV)',
      description: 'A pre-formatted 20-item CSV file containing product titles, descriptions, SKU numbers, regular prices, sale prices, stock quantities, and category mappings ready for one-click WooCommerce import.',
      filename: 'woocommerce_sample_catalog_20_products.csv',
      data: `ID,Type,SKU,Name,Published,"Is featured?","Visibility in catalog","Short description",Description,"In stock?",Stock,"Regular price","Sale price",Categories,Images
101,simple,AP-001,Organic Cotton T-Shirt,1,0,visible,"100% breathable organic cotton","Ultra-soft ring-spun cotton tee suitable for daily casual wear.",1,45,799,599,Apparel,"https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800"
102,simple,AP-002,Slim Fit Denim Jeans,1,0,visible,"Stretch comfort denim","Classic 5-pocket styling with flexible stretch denim fabric.",1,30,1999,1499,Apparel,"https://images.unsplash.com/photo-1542272604-780c96856592?w=800"
103,variable,AP-003,Crewneck Sweatshirt,1,1,visible,"Heavyweight fleece sweatshirt","Premium 350 GSM fleece with double-needle stitching.",1,60,1499,,Apparel,"https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800"
104,simple,AC-001,Canvas Weekend Duffel Bag,1,0,visible,"Durable waxed canvas bag","Spacious 40L duffel with genuine leather accents.",1,20,2499,1999,Accessories,"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800"
105,simple,AC-002,Minimalist Leather Wallet,1,0,visible,"Slim RFID blocking bifold wallet","Holds up to 8 cards with quick-access pull tab.",1,55,999,749,Accessories,"https://images.unsplash.com/photo-1627123424574-724758594e93?w=800"
106,simple,FT-001,Classic Canvas Low-Top Sneakers,1,1,visible,"Timeless vulcanized casual shoes","Cushioned footbed with durable rubber waffle outsoles.",1,25,1899,1399,Footwear,"https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800"`
    },
    {
      title: 'Client Monthly Website Maintenance Checklist & Agreement Template (Markdown/Text)',
      description: 'A ready-to-use client service contract template outlining weekly update schedules, uptime monitoring guarantees, backup restoration policies, and monthly reporting templates.',
      filename: 'wordpress_maintenance_agreement_template.txt',
      data: `WEBSITE MAINTENANCE & CARE PLAN AGREEMENT

Between: [Your Agency / Freelance Name]
And: [Client Business Name]
Effective Date: [Date]

1. SCOPE OF SERVICES
Provider will deliver recurring website maintenance services for the website: [Client URL]

TIER 1: ESSENTIAL CARE ($79 / month)
- Weekly WordPress Core, Theme & Plugin Updates
- Full Offsite Cloud Backup every 7 days (stored on Amazon S3 / Google Drive)
- 24/7 Uptime Monitoring (instant alert if site goes offline)
- Weekly Security & Malware Scanning
- Monthly PDF Website Health & Activity Summary Report

TIER 2: BUSINESS GROWTH ($149 / month)
- Everything in Tier 1, PLUS:
- Daily Cloud Backups with 30-day version retention
- Google PageSpeed & Core Web Vitals optimization audit
- Broken Link Audit & 301 Redirect maintenance
- Up to 90 Minutes of dedicated Content Updates per month (adding new blogs, updating staff bios, replacing images)

2. RESPONSE TIMES & EMERGENCY PROTOCOLS
- Critical Downtime: Response within 2 hours
- Standard Content Requests: Turnaround within 24 to 48 business hours

3. TERMS & CANCELLATION
Services bill monthly on the 1st of each calendar month. The client may cancel at any time with 14 days written notice prior to the next billing cycle.`
    }
  ],
  interviewPreparation: {
    commonQuestions: [
      {
        question: 'How do you handle a situation where updating a WordPress plugin causes a white screen or crashes the live website?',
        suggestedAnswer: 'First, I stay calm and immediately restore the site to its pre-update state using the backup created prior to running updates. Alternatively, if I have FTP or hosting file manager access, I navigate to wp-content/plugins and temporarily rename the offending plugin folder (e.g., adding "-disabled" to its name), which instantly forces WordPress to deactivate that single plugin and restores site access. Then, I inspect the debug log (WP_DEBUG) to identify whether the issue was a PHP version conflict, an incompatible theme hook, or an obsolete database call, and test a resolution on a local or staging clone before re-enabling it.'
      },
      {
        question: 'What are the most effective ways to speed up a slow WordPress website without spending thousands of dollars on enterprise hosting?',
        suggestedAnswer: 'The largest performance gains come from three zero-cost optimizations: First, image optimization—resizing images to maximum required container widths and converting them to WebP under 150KB. Second, deploying a reliable caching plugin (like LiteSpeed Cache or WP Super Cache) so static HTML is served rather than querying MySQL on every hit. Third, auditing and eliminating bloated or duplicate plugins, using modern Gutenberg blocks rather than heavy page builders, and configuring Gzip or Brotli compression with browser caching headers.'
      },
      {
        question: 'Can you explain the difference between a Simple product and a Variable product in WooCommerce?',
        suggestedAnswer: 'A Simple product has a single SKU, a fixed price, and a single inventory count—for instance, a printed paperback book. A Variable product has distinct variations based on customer selectable attributes—such as a hoodie available in Small, Medium, Large sizes and Navy or Black colors. Each specific variation can have its own individual price, SKU number, stock quantity, and unique product image.'
      },
      {
        question: 'Why is it crucial to store WordPress backups in an offsite location instead of keeping them on the same server as the website?',
        suggestedAnswer: 'Keeping backups on the same hosting server creates a single point of failure. If the server hardware fails, the hosting account is suspended, ransomware encrypts the disk, or a hacker accesses the web root, the backups are destroyed alongside the site. Offsite cloud storage (Google Drive, AWS S3, or Dropbox) isolates the recovery data completely, allowing instant recovery even if the original hosting account is completely wiped out.'
      },
      {
        question: 'What is your procedure for optimizing a newly written blog post for search engines before hitting publish?',
        suggestedAnswer: 'I follow a 6-point checklist: 1) Verify clean, keyword-focused URL slug using the Post Name structure. 2) Ensure a clear single H1 title, followed by logical H2 and H3 subheadings. 3) Check that all embedded images are compressed WebP with descriptive accessibility Alt Text. 4) Write a compelling Meta Title under 60 characters with a brand divider, and an enticing Meta Description between 140-160 characters. 5) Assign one primary category and 2-3 relevant tags without creating taxonomy clutter. 6) Configure OpenGraph social preview images so the post shares cleanly on LinkedIn and WhatsApp.'
      }
    ],
    technicalScenarios: [
      {
        scenario: 'A client calls in panic: they updated their contact form plugin and now no customer inquiry emails are arriving in their inbox.',
        resolutionSteps: [
          'Log into wp-admin and check if the form plugin has an internal entry storage database (e.g., WPForms Entries) to ensure no customer inquiries were lost.',
          'Explain to the client that default WordPress uses PHP mail(), which most email providers (Gmail, Outlook) automatically flag as spam or drop entirely.',
          'Install a dedicated SMTP plugin (such as WP Mail SMTP or FluentSMTP).',
          'Configure a verified email routing service (SendGrid, Brevo, or Google Workspace SMTP) with proper SPF and DKIM DNS records.',
          'Send a test email from the SMTP plugin dashboard to verify 100% delivery directly to the client\'s inbox.'
        ]
      },
      {
        scenario: 'A client with a WooCommerce store wants to run a 48-hour weekend flash sale with 20% off across all items in their "Footwear" category.',
        resolutionSteps: [
          'Navigate to Products -> All Products and filter by category "Footwear".',
          'Use the WooCommerce Bulk Edit feature: select all products in Footwear, click Edit, and select Apply.',
          'In the Bulk Edit panel, change the Sale Price setting to "Regular price decreased by (percentage)" and input 20%.',
          'Alternatively, configure a WooCommerce coupon code offering 20% discount restricted exclusively to the Footwear product category.',
          'Test the discount by adding a shoe item to the cart and confirming the discounted total before notifying the client.'
        ]
      }
    ]
  },
  workplaceFirstMonthGuide: {
    week1Checklist: [
      'Obtain secure administrative access or Editor login credentials via a password manager like Bitwarden (never accept passwords via unencrypted chat).',
      'Audit the website\'s current WordPress core version, active theme, and installed plugins list.',
      'Check whether an automated backup solution is active and verify where backups are currently stored.',
      'Verify that Google Analytics / Search Console tracking tags are intact and collecting traffic data.'
    ],
    dailyRoutines: [
      'Morning: Check uptime monitor alerts and review pending form submissions or new e-commerce orders.',
      'Midday: Perform staged content additions (formatting drafted blog posts, uploading optimized product photos, updating banners).',
      'Afternoon: Run security scans, check for pending plugin security updates, and test customer inquiry forms.',
      'End of Day: Log completed tasks in the client ticket portal or project management board.'
    ],
    commonPitfallsToAvoid: [
      'Never edit PHP code directly inside the WordPress Appearance -> Theme File Editor on a live website.',
      'Never install nulled or pirated premium themes/plugins—they almost always contain hidden malware and backdoor bots.',
      'Never leave default "admin" usernames with simple passwords.',
      'Never delete a page or change its URL without establishing a 301 redirect to avoid broken 404 links.'
    ]
  }
};
