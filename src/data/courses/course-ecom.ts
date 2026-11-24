import { Course } from '@/types';

export const ecommerceOperationsCourse: Course = {
  id: 'course-ecom',
  careerSlug: 'ecommerce-operations',
  title: 'E-commerce Operations Specialist (30 Days)',
  titleMl: 'ഇ-കൊമേഴ്‌സ് ഓപ്പറേഷൻസ് സ്പെഷ്യലിസ്റ്റ് (30 ദിവസങ്ങൾ)',
  durationDays: 30,
  weeklyGoals: [
    {
      weekNumber: 1,
      title: 'Store Fundamentals, Product Listings & SKUs',
      objective: 'Understand product structures, variants, SKU naming systems, pricing, barcode logic, and category hierarchies in Shopify.'
    },
    {
      weekNumber: 2,
      title: 'Catalog Optimization, Imagery & CSV Imports',
      objective: 'Prepare bulk CSV product import files, resize catalog images to marketplace specifications, and configure collections.'
    },
    {
      weekNumber: 3,
      title: 'Inventory Tracking, Reorders & Order Processing',
      objective: 'Track multi-location inventory, monitor low stock alerts, process pending customer orders, and generate shipping picklists.'
    },
    {
      weekNumber: 4,
      title: 'Returns Management, Store Audits & Employment Readiness',
      objective: 'Audit online storefronts for broken links and errors, manage return merchandise authorizations (RMA), and build an e-commerce portfolio.'
    },
    {
      weekNumber: 5,
      title: 'Week 5: Inventory Control, Fulfillment Logistics & Marketplace Sync',
      objective: 'Manage safety stock formulas, Shiprocket courier logistics, and multi-channel synchronization across Shopify and Amazon.'
    },
    {
      weekNumber: 6,
      title: 'Week 6: Customer Returns, Store Auditing & Career Launch',
      objective: 'Handle return authorizations, conduct complete Shopify store usability audits, and apply for remote store manager jobs.'
    }
    ],

  modules: [
    {
      id: 'mod-ecom-1',
      weekNumber: 1,
      title: 'Week 1: Store Setup & Product Architecture',
      titleMl: 'ആഴ്ച 1: ഉൽപ്പന്ന വിവരങ്ങളും കാറ്റലോഗ് അടിസ്ഥാനങ്ങളും',
      objective: 'Learn how e-commerce catalogs operate behind the scenes and how to list individual multi-variant products.',
      lessons: [
        {
          id: 'les-ecom-1',
          dayNumber: 1,
          title: 'How E-Commerce Backends Work: Shopify & Marketplaces',
          titleMl: 'ഡേ 1: ഇ-കൊമേഴ്‌സ് സ്റ്റോർ ഘടന',
          durationMinutes: 45,
          overview: 'Tour the Shopify Partner Sandbox admin dashboard and understand the merchant lifecycle from listing to fulfillment.',
          concepts: ['Front-end customer storefront vs Back-end admin panel', 'Product anatomy (Title, Description, Media, Variants, Pricing)'],
          simpleEnglishGuide: 'The backend is where you enter stock and images. The frontend is what customers see on their phones. Your job is to keep the backend 100% accurate.',
          malayalamNotes: 'ഷോപ്പിഫൈ സ്റ്റോറിന്റെ അഡ്മിൻ പാനലിൽ ഉൽപ്പന്നങ്ങൾ ചേർക്കുന്നതിന്റെ പ്രാഥമിക കാര്യങ്ങൾ.',
          officialDocLinks: [{ title: 'Shopify Products Documentation', url: 'https://help.shopify.com/en/manual/products' }],
          videoResources: [{
            title: 'Shopify Backend Tutorial for Beginners',
            provider: 'YouTube E-Commerce',
            url: 'https://www.youtube.com/results?search_query=shopify+backend+products+tutorial+beginners',
            language: 'English',
            duration: '22 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Create a free Shopify Partner development store at shopify.com/partners.',
            tasks: ['Sign up for a free Shopify Partners account', 'Create a new test store named "Launchpad Demo Store"', 'Explore the Products and Orders tabs']
          },
          quiz: [{
            id: 'q-ecom-1',
            question: 'What is a "Product Variant" in an online store?',
            options: ['A damaged item', 'A specific option of a product such as Size (M/L) or Color (Blue/Red)', 'A customer discount', 'A store theme'],
            correctOptionIndex: 1,
            explanation: 'Variants represent specific sellable combinations of a product like size and color.'
          }]
        },
        {
          id: 'les-ecom-2',
          dayNumber: 2,
          title: 'Creating Standardized SKUs & Barcode Systems',
          titleMl: 'ഡേ 2: SKU കോഡുകൾ ഉണ്ടാക്കുന്ന വിധം',
          durationMinutes: 50,
          overview: 'Learn how to generate human-readable Stock Keeping Unit (SKU) codes that prevent warehouse picking mistakes.',
          concepts: ['SKU structure: Brand-Category-Style-Color-Size', 'Differences between SKUs, UPC barcodes, and product IDs'],
          simpleEnglishGuide: 'A good SKU tells you what the product is immediately. For example: "SHIRT-SLIM-BLU-L" means a slim-fit blue shirt in large.',
          malayalamNotes: 'ഉൽപ്പന്നങ്ങൾ വെയർഹൗസിൽ എളുപ്പത്തിൽ തിരിച്ചറിയാൻ സഹായിക്കുന്ന SKU കോഡുകൾ ഉണ്ടാക്കാൻ പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'Inventory and SKU best practices', url: 'https://help.shopify.com/en/manual/products/inventory' }],
          videoResources: [{
            title: 'How to Create SKUs for Products — Simple Guide',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=how+to+create+sku+ecommerce+tutorial',
            language: 'English',
            duration: '16 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Design an SKU naming convention and assign SKUs to 10 apparel items with variations.',
            tasks: ['Create an Excel/Sheets matrix for a Men\'s Cotton T-Shirt in 3 colors (Black, White, Navy) and 3 sizes (S, M, L)', 'Generate 9 unique SKUs following your convention']
          },
          quiz: [{
            id: 'q-ecom-2',
            question: 'Which of the following is the most professional SKU format for a medium red cotton hoodie?',
            options: ['12345678', 'product-hoodie', 'HOD-COT-RED-M', 'RED_MEDIUM_GOOD'],
            correctOptionIndex: 2,
            explanation: 'Clean segmented alphanumeric SKUs (Type-Fabric-Color-Size) prevent warehouse errors.'
          }]
        },
        {
          id: 'les-ecom-3',
          dayNumber: 3,
          title: 'Product Descriptions, Features & Specifications',
          titleMl: 'ഡേ 3: ഉൽപ്പന്ന വിവരണം തയ്യാറാക്കൽ',
          durationMinutes: 50,
          overview: 'Write clear, ethical, and informative product specifications that reduce return rates and clarify size/dimensions.',
          concepts: ['Material composition & care instructions', 'Accurate sizing tables (cm/inches)', 'Feature bullet points vs long marketing text'],
          simpleEnglishGuide: 'Never hide limitations. If a product does not include batteries or requires assembly, clearly write: "Note: Requires 2 AA batteries (not included)". Honest listings build long-term customer trust.',
          malayalamNotes: 'ഉപഭോക്താക്കൾക്ക് ഉൽപ്പന്നത്തെക്കുറിച്ച് കൃത്യമായ വിവരം നൽകുന്ന വിവരണം എഴുതുന്ന രീതി.',
          officialDocLinks: [{ title: 'Writing Product Descriptions that Convert', url: 'https://www.shopify.com/blog/product-descriptions' }],
          videoResources: [{
            title: 'How to Write Clear E-Commerce Product Descriptions',
            provider: 'YouTube E-Commerce',
            url: 'https://www.youtube.com/results?search_query=ecommerce+product+descriptions+tutorial',
            language: 'English',
            duration: '18 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Draft a complete product specification document for an eco-friendly water bottle.',
            tasks: ['Include Title, 5 key benefit bullets, Dimensions, Capacity, Material care, and Package contents']
          },
          quiz: [{
            id: 'q-ecom-3',
            question: 'Why are clear sizing dimensions and package contents crucial in e-commerce descriptions?',
            options: ['To make the website longer', 'To minimize customer confusion and dramatically reduce costly product returns', 'To confuse search engines', 'They are not important'],
            correctOptionIndex: 1,
            explanation: 'Accurate specifications prevent false expectations, lowering return rates.'
          }]
        },
        {
          id: 'les-ecom-4',
          dayNumber: 4,
          title: 'Image Preparation, Aspect Ratios & ALT Tags',
          titleMl: 'ഡേ 4: ഉൽപ്പന്ന ചിത്രങ്ങൾ തയ്യാറാക്കലും ഒപ്റ്റിമൈസേഷനും',
          durationMinutes: 50,
          overview: 'Resize product photos to consistent square (1:1) dimensions, compress file sizes for speed, and write descriptive ALT text.',
          concepts: ['1:1 square ratio (1080x1080px or 2048x2048px)', 'Image compression (TinyPNG/Squoosh) to speed up loading', 'Descriptive ALT text for accessibility and SEO'],
          simpleEnglishGuide: 'A slow website loses customers. Compress large 5MB camera photos down to 150KB before uploading to the store.',
          malayalamNotes: 'ചിത്രങ്ങളുടെ വലിപ്പം കുറച്ച് കൃത്യമായ അനുപാതത്തിൽ വെബ്സൈറ്റിൽ അപ്‌ലോഡ് ചെയ്യുന്ന രീതി.',
          officialDocLinks: [{ title: 'Shopify Image Size and Optimization Guidelines', url: 'https://help.shopify.com/en/manual/online-store/images' }],
          videoResources: [{
            title: 'How to Optimize E-Commerce Product Images for Free',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=ecommerce+product+image+optimization+free+tools',
            language: 'English',
            duration: '15 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Prepare 5 product images for upload.',
            tasks: ['Crop to exact 1:1 square format using Canva or Squoosh', 'Compress below 200KB without visible quality loss', 'Write descriptive accessibility ALT text for each image']
          },
          quiz: [{
            id: 'q-ecom-4',
            question: 'What is the primary function of an image ALT tag in an online store?',
            options: ['To change the color of the photo', 'To describe the image for visually impaired screen readers and search engines', 'To add watermarks', 'To delete the photo'],
            correctOptionIndex: 1,
            explanation: 'ALT text provides accessibility description and helps search engines index product visuals.'
          }]
        },
        {
          id: 'les-ecom-5',
          dayNumber: 5,
          title: 'Week 1 Review: Publishing 5 Complete Live Products',
          titleMl: 'ഡേ 5: 5 ഉൽപ്പന്നങ്ങൾ തത്സമയം പബ്ലിഷ് ചെയ്യൽ',
          durationMinutes: 60,
          overview: 'Put all Week 1 skills together by publishing 5 complete multi-variant products in your Shopify test store.',
          concepts: ['End-to-end product publishing checklist'],
          simpleEnglishGuide: 'Check your live store on your mobile phone. Do the photos line up? Are prices and variant sizes showing correctly?',
          malayalamNotes: 'ആദ്യ ആഴ്ച പഠിച്ച കാര്യങ്ങൾ ഉപയോഗിച്ച് 5 ഉൽപ്പന്നങ്ങൾ സ്റ്റോറിൽ വിജയകരമായി ചേർക്കുന്നു.',
          officialDocLinks: [{ title: 'Shopify Product Launch Checklist', url: 'https://help.shopify.com' }],
          videoResources: [{
            title: 'Adding Products to Shopify — Complete Beginner Walkthrough',
            provider: 'YouTube E-Commerce',
            url: 'https://www.youtube.com/results?search_query=adding+products+to+shopify+step+by+step',
            language: 'English',
            duration: '20 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Publish 5 complete products with title, description, 3 square images each, unique SKUs, and pricing.',
            tasks: ['Verify live product display in your test storefront', 'Record your test store product URLs']
          },
          quiz: [{
            id: 'q-ecom-5',
            question: 'Before marking a product as "Active" on a live store, what must be verified?',
            options: ['Pricing, SKU, stock quantity, clean images, and tax configuration', 'Only the product title', 'Nothing needs checking', 'The store owner\'s horoscope'],
            correctOptionIndex: 0,
            explanation: 'Checking pricing, stock, tax, and SKUs prevents costly checkout mistakes.'
          }]
        }
      ]
    },
    {
      id: 'mod-ecom-2',
      weekNumber: 2,
      title: 'Week 2: Bulk CSV Management & Catalog Organization',
      titleMl: 'ആഴ്ച 2: ബൾക്ക് CSV മാനേജ്‌മെന്റും കളക്ഷനുകളും',
      objective: 'Learn how to import and update hundreds of products at once using spreadsheets and structured category trees.',
      lessons: [
        {
          id: 'les-ecom-6',
          dayNumber: 6,
          title: 'Understanding the Shopify Product CSV Template',
          titleMl: 'ഡേ 6: ഷോപ്പിഫൈ CSV ടെംപ്ലേറ്റ് മനസ്സിലാക്കൽ',
          durationMinutes: 55,
          overview: 'Master the columns of the standard Shopify product CSV: Handle, Title, Body (HTML), Vendor, Type, Tags, Option1 Name/Value, Variant SKU, Variant Price, and Image Src.',
          concepts: ['The "Handle" identifier linking variant rows to parent products', 'Comma separation and quotation mark escaping in CSVs'],
          simpleEnglishGuide: 'Entering 500 products one-by-one by clicking with a mouse takes 3 weeks. Entering them in a CSV spreadsheet takes 3 hours. That is why companies hire CSV specialists.',
          malayalamNotes: 'നൂറുകണക്കിന് ഉൽപ്പന്നങ്ങൾ ഒരുമിച്ച് അപ്‌ലോഡ് ചെയ്യാൻ CSV ഫയലുകൾ ഉപയോഗിക്കുന്ന വിധം.',
          officialDocLinks: [{ title: 'Using CSV files to import and export products', url: 'https://help.shopify.com/en/manual/products/import-export/using-csv' }],
          videoResources: [{
            title: 'Shopify Product CSV Import & Export Tutorial',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=shopify+csv+product+import+tutorial',
            language: 'English',
            duration: '22 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Download the official Shopify product sample CSV and inspect its structure in Google Sheets.',
            tasks: ['Identify how multi-variant products repeat the "Handle" column', 'Note how image URLs are structured']
          },
          quiz: [{
            id: 'q-ecom-6',
            question: 'In a Shopify product CSV, what column links multiple variant rows to the same product?',
            options: ['Product Title', 'Handle', 'Price', 'Vendor'],
            correctOptionIndex: 1,
            explanation: 'The "Handle" is the unique URL slug that groups all variant rows under one product.'
          }]
        },
        {
          id: 'les-ecom-7',
          dayNumber: 7,
          title: 'Executing a Zero-Error Bulk CSV Product Import',
          titleMl: 'ഡേ 7: തെറ്റുകളില്ലാതെ ബൾക്ക് CSV ഇമ്പോർട്ട് ചെയ്യൽ',
          durationMinutes: 50,
          overview: 'Prepare a clean 20-product catalog in Google Sheets, export to UTF-8 CSV, and import into Shopify with zero error rejections.',
          concepts: ['UTF-8 character encoding (prevents broken symbols like currency signs)', 'Handling missing required fields during import'],
          simpleEnglishGuide: 'Always test by importing 2 products first. If there are no errors, import the full 50 products. Never import 1,000 unverified rows blindly.',
          malayalamNotes: 'CSV ഫയലുകൾ ഇമ്പോർട്ട് ചെയ്യുമ്പോൾ ഉണ്ടാകുന്ന തകരാറുകൾ പരിഹരിക്കാൻ പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'Fix common CSV import errors', url: 'https://help.shopify.com/en/manual/products/import-export/common-import-issues' }],
          videoResources: [{
            title: 'Fix Shopify CSV Import Errors Easily',
            provider: 'YouTube E-Commerce Guides',
            url: 'https://www.youtube.com/results?search_query=fix+shopify+csv+import+errors',
            language: 'English',
            duration: '18 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Create a 15-product CSV file for a home decor store and import it into your development store.',
            tasks: ['Verify all products upload with correct titles, tags, and prices', 'Correct any column mismatch errors']
          },
          quiz: [{
            id: 'q-ecom-7',
            question: 'Why should large CSV imports be tested with 2-3 sample rows first?',
            options: ['To waste time', 'To catch column mapping mistakes before creating hundreds of corrupted records', 'Shopify limits uploads to 2 rows', 'Because computers overheat'],
            correctOptionIndex: 1,
            explanation: 'Testing sample rows prevents massive cleanup work if a column header was misaligned.'
          }]
        },
        {
          id: 'les-ecom-8',
          dayNumber: 8,
          title: 'Manual vs Automated Collections & Tagging Systems',
          titleMl: 'ഡേ 8: കളക്ഷനുകളും ടാഗിംഗ് സിസ്റ്റവും',
          durationMinutes: 50,
          overview: 'Organize products into automated collections using conditions like "Product Tag equals Summer" or "Price greater than ₹500".',
          concepts: ['Automated collections vs Manual collections', 'Product tags hierarchy', 'Navigation menu linking to collections'],
          simpleEnglishGuide: 'Automated collections save time. When you tag a new product "organic", it automatically appears on the "Organic Foods" page without manual sorting.',
          malayalamNotes: 'ഉൽപ്പന്നങ്ങൾ കാറ്റഗറികളാക്കി മാറ്റാൻ ഓട്ടോമേറ്റഡ് കളക്ഷനുകൾ ഉപയോഗിക്കുന്നു.',
          officialDocLinks: [{ title: 'Shopify Collections Guide', url: 'https://help.shopify.com/en/manual/products/collections' }],
          videoResources: [{
            title: 'Shopify Collections Tutorial — Automated vs Manual',
            provider: 'YouTube E-Commerce',
            url: 'https://www.youtube.com/results?search_query=shopify+automated+collections+tutorial',
            language: 'English',
            duration: '17 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Create 3 automated collections: "New Arrivals", "Under ₹999", and "Featured Deals".',
            tasks: ['Set automated condition rules based on tags and price', 'Link collections to your main navigation menu']
          },
          quiz: [{
            id: 'q-ecom-8',
            question: 'What is the main benefit of an automated collection in Shopify?',
            options: ['It gives free shipping', 'New matching products are added to the collection automatically as soon as they are tagged', 'It designs banners', 'It calls customers'],
            correctOptionIndex: 1,
            explanation: 'Automated collections dynamically include all products that meet specified tag or price criteria.'
          }]
        },
        {
          id: 'les-ecom-9',
          dayNumber: 9,
          title: 'Bulk Editing Prices, Weights & Inventory Levels',
          titleMl: 'ഡേ 9: വിലകളും സ്റ്റോക്കും ബൾക്ക് ആയി മാറ്റൽ',
          durationMinutes: 50,
          overview: 'Use the Shopify Bulk Editor matrix to update prices, compare-at discounts, and shipping weights across 50 items simultaneously.',
          concepts: ['Bulk editor URL parameters', 'Compare-at price vs Selling price logic', 'Accurate shipping weights for courier calculations'],
          simpleEnglishGuide: 'To run a 20% sale, update the "Compare-at Price" to the old original price, and set the new lower price in the "Price" field.',
          malayalamNotes: 'ഒറ്റ ക്ലിക്കിൽ നിരവധി ഉൽപ്പന്നങ്ങളുടെ വിലയും വിവരങ്ങളും തിരുത്തുന്ന വിധം.',
          officialDocLinks: [{ title: 'Shopify Bulk Editing Guide', url: 'https://help.shopify.com/en/manual/products/bulk-editing-products' }],
          videoResources: [{
            title: 'How to Use Shopify Bulk Editor Fast',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=shopify+bulk+editor+tutorial',
            language: 'English',
            duration: '14 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Use the Bulk Editor to configure a festive sale on 10 products.',
            tasks: ['Add Compare-at prices', 'Set product weights in grams for shipping accuracy']
          },
          quiz: [{
            id: 'q-ecom-9',
            question: 'To display a strikethrough discount price on Shopify, where must the higher original price be entered?',
            options: ['Cost per item', 'Compare-at price', 'SKU field', 'Tax code'],
            correctOptionIndex: 1,
            explanation: 'The "Compare-at price" displays the strikethrough original value, showing customer savings.'
          }]
        },
        {
          id: 'les-ecom-10',
          dayNumber: 10,
          title: 'Week 2 Review & Catalog Audit Drill',
          titleMl: 'ഡേ 10: ആഴ്ച 2 കാറ്റലോഗ് ഓഡിറ്റ്',
          durationMinutes: 60,
          overview: 'Audit a 30-item test catalog for missing SKUs, broken images, unassigned collections, and zero-weight errors.',
          concepts: ['Catalog health checklist', 'Exporting audit reports'],
          simpleEnglishGuide: 'A single product with zero weight can break shipping rates at checkout. An audit catches these bugs before customers see them.',
          malayalamNotes: 'സ്റ്റോറിലെ ഉൽപ്പന്ന വിവരങ്ങളിൽ എന്തെങ്കിലും തെറ്റുകളുണ്ടോ എന്ന് സമഗ്രമായി പരിശോധിക്കുന്നു.',
          officialDocLinks: [{ title: 'Store Launch Checklist', url: 'https://help.shopify.com' }],
          videoResources: [{
            title: 'How to Audit an E-Commerce Catalog Like a Pro',
            provider: 'YouTube E-Commerce',
            url: 'https://www.youtube.com/results?search_query=ecommerce+catalog+audit+checklist',
            language: 'English',
            duration: '19 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Perform a full audit of your test store catalog and log any issues found in an Audit Spreadsheet.',
            tasks: ['Verify 100% of products have SKUs, weights, and collections assigned', 'Export a clean final inventory CSV']
          },
          quiz: [{
            id: 'q-ecom-10',
            question: 'Why must product weights be accurately recorded in an e-commerce catalog?',
            options: ['To make the website heavier', 'Because shipping carriers calculate real-time freight charges based on package weight', 'For SEO purposes', 'To determine tax rates'],
            correctOptionIndex: 1,
            explanation: 'Incorrect weights cause inaccurate courier charge calculations at checkout.'
          }]
        }
      ]
    },
    {
      id: 'mod-ecom-3',
      weekNumber: 3,
      title: 'Week 3: Inventory Management, Orders & Fulfillment',
      titleMl: 'ആഴ്ച 3: ഇൻവെന്ററി ട്രാക്കിംഗും ഓർഡർ പ്രോസസ്സിംഗും',
      objective: 'Manage multi-warehouse stock counts, set low-stock reorder triggers, process customer orders, and handle shipping tracking.',
      lessons: [
        {
          id: 'les-ecom-11',
          dayNumber: 11,
          title: 'Inventory Tracking & Stock Reorder Points',
          titleMl: 'ഡേ 11: സ്റ്റോക്ക് ലെവലുകൾ നിരീക്ഷിക്കൽ',
          durationMinutes: 50,
          overview: 'Learn how to monitor physical inventory levels, enable "Track quantity", and set reorder point alerts.',
          concepts: ['Available vs Committed vs On-hand inventory', 'Safety stock buffers and lead times'],
          simpleEnglishGuide: '"Committed" inventory means a customer paid for it, but it has not left the warehouse yet. Never sell committed stock to someone else.',
          malayalamNotes: 'സ്റ്റോക്ക് തീർന്നുപോകാതിരിക്കാൻ കൃത്യമായ കണക്കുകൾ സൂക്ഷിക്കുന്ന രീതി.',
          officialDocLinks: [{ title: 'Shopify Inventory States Explained', url: 'https://help.shopify.com/en/manual/products/inventory/inventory-states' }],
          videoResources: [{
            title: 'Shopify Inventory Management Explained',
            provider: 'YouTube E-Commerce',
            url: 'https://www.youtube.com/results?search_query=shopify+inventory+management+explained',
            language: 'English',
            duration: '18 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Configure stock counts for 10 products with committed and available thresholds in Shopify.',
            tasks: ['Enable "Track Quantity" on all items', 'Simulate a stock adjustment of +50 units']
          },
          quiz: [{
            id: 'q-ecom-11',
            question: 'What does "Committed" inventory indicate in modern e-commerce systems?',
            options: ['Items that are broken', 'Items ordered by customers that are awaiting packaging and fulfillment', 'Items on sale', 'Items returned'],
            correctOptionIndex: 1,
            explanation: 'Committed units are allocated to existing unfulfilled orders and cannot be sold again.'
          }]
        },
        {
          id: 'les-ecom-12',
          dayNumber: 12,
          title: 'Processing Orders & Generating Fulfillment Picklists',
          titleMl: 'ഡേ 12: ഓർഡറുകൾ പ്രോസസ്സ് ചെയ്യലും പിക്കിംഗ് ലിസ്റ്റും',
          durationMinutes: 50,
          overview: 'Walk through an incoming customer order, print packing slips, generate warehouse picklists, and mark items fulfilled.',
          concepts: ['Order statuses (Unfulfilled, Partially Fulfilled, Fulfilled)', 'Packing slips vs commercial invoices'],
          simpleEnglishGuide: 'A packing slip tells warehouse staff what to put in the box. A commercial invoice shows the price paid and tax.',
          malayalamNotes: 'വരുന്ന ഓർഡറുകൾ പരിശോധിച്ച് പാക്കിംഗിനായി വിവരങ്ങൾ തയ്യാറാക്കുന്ന വിധം.',
          officialDocLinks: [{ title: 'Shopify Order Fulfillment Workflow', url: 'https://help.shopify.com/en/manual/orders/fulfill-orders' }],
          videoResources: [{
            title: 'How to Fulfill Orders on Shopify — Step by Step',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=how+to+fulfill+orders+on+shopify+step+by+step',
            language: 'English',
            duration: '16 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Place 3 test simulated orders in your Shopify sandbox store and fulfill them.',
            tasks: ['Generate and preview the packing slip', 'Assign test courier tracking numbers and mark as fulfilled']
          },
          quiz: [{
            id: 'q-ecom-12',
            question: 'What happens automatically when an order is marked as "Fulfilled" with a tracking number in Shopify?',
            options: ['The computer turns off', 'An email notification with the tracking link is automatically dispatched to the customer', 'The order is cancelled', 'Money is refunded'],
            correctOptionIndex: 1,
            explanation: 'Fulfillment triggers an automated customer shipping confirmation email.'
          }]
        },
        {
          id: 'les-ecom-13',
          dayNumber: 13,
          title: 'Handling Courier Tracking, Delays & Shipping Exceptions',
          titleMl: 'ഡേ 13: കൊറിയർ ട്രാക്കിംഗും ഷിപ്പിംഗ് പ്രശ്നങ്ങളും',
          durationMinutes: 50,
          overview: 'Learn how to interface with courier tracking portals (Delhivery, Shiprocket, Blue Dart) and manage in-transit delays.',
          concepts: ['NDR (Non-Delivery Report) workflows', 'RTO (Return to Origin) prevention calls'],
          simpleEnglishGuide: 'When a courier cannot find an address, an NDR alert appears. The e-commerce assistant calls or WhatsApps the customer to get the correct landmark.',
          malayalamNotes: 'പാഴ്സലുകൾ കസ്റ്റമർക്ക് കിട്ടാതെ തിരിച്ചുപോകാതിരിക്കാൻ (RTO) ചെയ്യേണ്ട കാര്യങ്ങൾ.',
          officialDocLinks: [{ title: 'Tracking Shipments and Managing Deliveries', url: 'https://help.shopify.com' }],
          videoResources: [{
            title: 'Shiprocket & E-Commerce Courier Tracking Management',
            provider: 'YouTube Logistics',
            url: 'https://www.youtube.com/results?search_query=shiprocket+order+processing+malayalam',
            language: 'Malayalam',
            duration: '21 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Draft an NDR resolution script for customer address verification.',
            tasks: ['Write a polite WhatsApp verification message template asking for house number and landmark']
          },
          quiz: [{
            id: 'q-ecom-13',
            question: 'What does "RTO" stand for in Indian e-commerce logistics?',
            options: ['Regional Transport Officer', 'Return To Origin (undelivered package returned to warehouse)', 'Real Time Order', 'Rate Total Output'],
            correctOptionIndex: 1,
            explanation: 'RTO occurs when a courier fails to deliver and returns the package to the merchant.'
          }]
        },
        {
          id: 'les-ecom-14',
          dayNumber: 14,
          title: 'Returns, Replacements & Refund Processing',
          titleMl: 'ഡേ 14: റിട്ടേണുകളും റീഫണ്ടുകളും കൈകാര്യം ചെയ്യൽ',
          durationMinutes: 50,
          overview: 'Process returns ethically according to store policy, issue partial/full refunds, and restock verified returned goods.',
          concepts: ['Restocking fees vs free returns', 'Restocking inventory during refund vs discarding damaged goods'],
          simpleEnglishGuide: 'Only click "Restock inventory" if the returned item was physically checked in the warehouse and found in new, resalable condition.',
          malayalamNotes: 'തിരികെ വരുന്ന ഉൽപ്പന്നങ്ങൾ പരിശോധിച്ച് പണം തിരികെ നൽകുന്ന രീതി.',
          officialDocLinks: [{ title: 'Shopify Returns and Refunds Documentation', url: 'https://help.shopify.com/en/manual/orders/refund-cancel-orders' }],
          videoResources: [{
            title: 'How to Process Refunds & Returns in Shopify',
            provider: 'YouTube E-Commerce',
            url: 'https://www.youtube.com/results?search_query=how+to+process+refunds+in+shopify',
            language: 'English',
            duration: '15 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Process a simulated refund on one of your sandbox test orders.',
            tasks: ['Execute a partial refund for 1 item with restock enabled', 'Verify financial report reflects the refund adjustment']
          },
          quiz: [{
            id: 'q-ecom-14',
            question: 'When should a returned product NOT be restocked into live inventory?',
            options: ['When it is brand new', 'When the item was opened, damaged, or unhygienic to resell', 'When the customer was polite', 'On Mondays'],
            correctOptionIndex: 1,
            explanation: 'Damaged or unhygienic goods must not be restocked into sellable inventory.'
          }]
        },
        {
          id: 'les-ecom-15',
          dayNumber: 15,
          title: 'Week 3 Review: The End-to-End Order Lifecycle',
          titleMl: 'ഡേ 15: ആഴ്ച 3 ഓർഡർ ലൈഫ്‌സൈക്കിൾ അവലോകനം',
          durationMinutes: 60,
          overview: 'Review the complete order lifecycle from incoming notification to picking, packing, tracking, and final delivery.',
          concepts: ['Consolidation of catalog, inventory, order, and refund workflows'],
          simpleEnglishGuide: 'An e-commerce specialist is the conductor of the online store orchestra. When you keep inventory and tracking tight, customers are happy and the business thrives.',
          malayalamNotes: 'ഓർഡർ വരുന്നത് മുതൽ കസ്റ്റമർക്ക് കിട്ടുന്നത് വരെയുള്ള മുഴുവൻ കാര്യങ്ങളും വിലയിരുത്തുന്നു.',
          officialDocLinks: [{ title: 'Order Management Overview', url: 'https://help.shopify.com' }],
          videoResources: [{
            title: 'Complete E-Commerce Order Lifecycle Walkthrough',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=ecommerce+order+fulfillment+lifecycle',
            language: 'English',
            duration: '20 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Create a 1-page visual workflow diagram (using draw.io or slides) showing the 6 stages of order fulfillment.',
            tasks: ['Label stages: 1. Order Placed, 2. Payment Verified, 3. Picked & Packed, 4. Courier Handover, 5. In Transit, 6. Delivered']
          },
          quiz: [{
            id: 'q-ecom-15',
            question: 'What is the primary operational metric that stores monitor for fulfillment efficiency?',
            options: ['Number of emojis used', 'Order processing turnaround time (hours from order to courier handover)', 'Color of the warehouse walls', 'Total coffee consumed'],
            correctOptionIndex: 1,
            explanation: 'Fast turnaround times reduce customer complaints and improve merchant ratings.'
          }]
        }
      ]
    },
    {
      id: 'mod-ecom-4',
      weekNumber: 4,
      title: 'Week 4: Store Audits, Portfolio & Employment Readiness',
      titleMl: 'ആഴ്ച 4: സ്റ്റോർ ഓഡിറ്റും ജോലി തയ്യാറെടുപ്പും',
      objective: 'Audit online merchant sites, package your Shopify sandbox store into a verified portfolio, and apply for remote e-commerce roles.',
      lessons: [
        {
          id: 'les-ecom-16',
          dayNumber: 16,
          title: 'Conducting a Comprehensive Store Health Audit',
          titleMl: 'ഡേ 16: വെബ്സൈറ്റ് ഹെൽത്ത് ഓഡിറ്റ്',
          durationMinutes: 50,
          overview: 'Run a 25-point audit on live storefronts: test search bars, inspect broken links, verify discount codes, and test checkout forms.',
          concepts: ['Mobile responsive checks', 'Broken link detectors', 'Coupon code testing'],
          simpleEnglishGuide: 'If a coupon code on Instagram says "SAVE10", test that entering SAVE10 actually deducts 10% at checkout. Catching broken promos makes you indispensable to clients.',
          malayalamNotes: 'വെബ്സൈറ്റിലെ കൂപ്പൺ കോഡുകളും പേജുകളും ശരിയായി പ്രവർത്തിക്കുന്നുണ്ടോ എന്ന് പരിശോധിക്കുന്ന രീതി.',
          officialDocLinks: [{ title: 'Shopify Store Pre-Launch Checklist', url: 'https://www.shopify.com/blog/shopify-store-launch-checklist' }],
          videoResources: [{
            title: 'How to Audit a Shopify Store for Conversion & Usability',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=shopify+store+audit+checklist+tutorial',
            language: 'English',
            duration: '22 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Perform an audit of your development store using the 25-point checklist.',
            tasks: ['Verify mobile navigation works', 'Test that search yields correct products', 'Confirm currency displays properly']
          },
          quiz: [{
            id: 'q-ecom-16',
            question: 'Why must checkout forms and discount codes be tested weekly?',
            options: ['To see what happens', 'Because broken checkouts immediately halt sales and revenue', 'To restart servers', 'For legal compliance only'],
            correctOptionIndex: 1,
            explanation: 'A broken checkout or discount code causes immediate cart abandonment and lost sales.'
          }]
        },
        {
          id: 'les-ecom-17',
          dayNumber: 17,
          title: 'Packaging Your Shopify Sandbox Store Portfolio',
          titleMl: 'ഡേ 17: ഇ-കൊമേഴ്‌സ് പോർട്ട്ഫോളിയോ നിർമ്മാണം',
          durationMinutes: 50,
          overview: 'Turn your test store into a live showcase of your cataloging, inventory, and order management skills.',
          concepts: ['Creating clean store demo videos or screenshot walkthroughs', 'Documenting CSV before-and-after data'],
          simpleEnglishGuide: 'Show real proof. Take screenshots of your cleanly tagged products, inventory matrix, and fulfilled orders, and put them in a public document.',
          malayalamNotes: 'തയ്യാറാക്കിയ ഡെമോ സ്റ്റോർ ഒരു പോർട്ട്ഫോളിയോ ആയി മാറ്റുന്ന വിധം.',
          officialDocLinks: [{ title: 'Shopify Development Store Guidelines', url: 'https://shopify.dev/docs/apps/tools/development-stores' }],
          videoResources: [{
            title: 'How to Build an E-Commerce Assistant Portfolio with No Experience',
            provider: 'YouTube E-Commerce',
            url: 'https://www.youtube.com/results?search_query=ecommerce+assistant+portfolio+no+experience',
            language: 'English',
            duration: '19 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Create an E-Commerce Operations Portfolio Document.',
            tasks: ['Include 5 screenshot proofs of multi-variant products', 'Include link to a clean sample CSV import sheet', 'Add a short explanation of inventory reorder points']
          },
          quiz: [{
            id: 'q-ecom-17',
            question: 'What gives an e-commerce candidate the strongest advantage in an interview?',
            options: ['Saying they like shopping', 'Showing a live Shopify development store with multi-variant products and verified CSV imports', 'A fancy resume with no projects', 'Promises to work overtime'],
            correctOptionIndex: 1,
            explanation: 'Demonstrating working catalog skills inside an actual Shopify admin panel proves immediate job readiness.'
          }]
        },
        {
          id: 'les-ecom-18',
          dayNumber: 18,
          title: 'Writing an E-Commerce Operations Resume & Keyword Optimization',
          titleMl: 'ഡേ 18: റെസ്യൂമെയും ജോബ് കീവേഡുകളും',
          durationMinutes: 50,
          overview: 'Target entry-level keywords: "Shopify Catalog Specialist", "Amazon Product Lister", "E-commerce Operations Assistant".',
          concepts: ['Quantifying results: "Listed 50+ multi-variant SKUs with 100% data accuracy"', 'Highlighting spreadsheet and software tools'],
          simpleEnglishGuide: 'Use numbers in your resume. Write: "Managed catalog of 40 products, created 120 SKUs, formatted images to 1:1 ratio". Specifics get you hired.',
          malayalamNotes: 'ഇ-കൊമേഴ്‌സ് ജോലികൾക്ക് യോജിച്ച റെസ്യൂമെ ഉണ്ടാക്കുന്ന രീതി.',
          officialDocLinks: [{ title: 'E-commerce Resume Guide', url: 'https://docs.google.com' }],
          videoResources: [{
            title: 'Resume Tips for E-Commerce Remote Jobs',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=ecommerce+operations+resume+entry+level',
            language: 'English',
            duration: '17 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Build your specialized E-Commerce Operations resume in the Career Launchpad Resume Builder.',
            tasks: ['List Shopify, Amazon Seller Central basics, Google Sheets, Canva, and Squoosh as primary skills']
          },
          quiz: [{
            id: 'q-ecom-18',
            question: 'Which of the following is the strongest resume bullet point for an e-commerce assistant?',
            options: ['Good with computers', 'Helped with online shop', 'Built and imported 50-item product CSV into Shopify with 100% SKU and variant accuracy', 'Fast worker'],
            correctOptionIndex: 2,
            explanation: 'Quantified, specific achievements prove software mastery and precision.'
          }]
        },
        {
          id: 'les-ecom-19',
          dayNumber: 19,
          title: 'E-Commerce Operations Interview Mastery & Practical Tests',
          titleMl: 'ഡേ 19: ഇന്റർവ്യൂവും പ്രാക്ടിക്കൽ ടെസ്റ്റുകളും',
          durationMinutes: 55,
          overview: 'Prepare for the practical test that 90% of e-commerce employers give: uploading a sample product from a manufacturer spec sheet within 20 minutes.',
          concepts: ['Timed product upload drills', 'Explaining how you handle stockouts and disgruntled customers'],
          simpleEnglishGuide: 'In your interview, they will give you a PDF with a product photo and text, and ask you to enter it in Shopify. Practice doing this smoothly without hesitation.',
          malayalamNotes: 'പ്രാക്ടിക്കൽ ടെസ്റ്റുകളിൽ വേഗത്തിലും തെറ്റുകൂടാതെയും ഉൽപ്പന്നങ്ങൾ ചേർക്കാൻ പരിശീലിക്കുന്നു.',
          officialDocLinks: [{ title: 'Shopify Admin Shortcuts', url: 'https://help.shopify.com/en/manual/shopify-admin/productivity-tools/keyboard-shortcuts' }],
          videoResources: [{
            title: 'Shopify Virtual Assistant Interview Questions & Test Task',
            provider: 'YouTube Freelance Guides',
            url: 'https://www.youtube.com/results?search_query=shopify+virtual+assistant+interview+test+task',
            language: 'English',
            duration: '21 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Time yourself adding a brand new multi-variant product with 4 photos and 3 sizes in under 15 minutes.',
            tasks: ['Ensure all SKUs and prices match sample specs perfectly']
          },
          quiz: [{
            id: 'q-ecom-19',
            question: 'When given a timed product upload test by a hiring manager, what is more important: speed or accuracy?',
            options: ['Speed only, mistakes do not matter', 'Accuracy is paramount because wrong prices cause direct financial loss', 'Neither matters', 'Font styling only'],
            correctOptionIndex: 1,
            explanation: 'Accuracy in pricing, variants, and descriptions is critical to protect merchant profits.'
          }]
        },
        {
          id: 'les-ecom-20',
          dayNumber: 20,
          title: 'Course Final Assessment & First-Month Workplace Blueprint',
          titleMl: 'ഡേ 20: ഫൈനൽ അസസ്സ്‌മെന്റും വർക്ക്പ്ലേസ് ഗൈഡും',
          durationMinutes: 60,
          overview: 'Complete the comprehensive e-commerce competency assessment, submit your projects, and review first-month job safety rules.',
          concepts: ['Store backup protocols (CSV exports before bulk changes)', 'First 30 days operational success checklist'],
          simpleEnglishGuide: 'Golden Rule of E-Commerce: Before making any bulk change or running an import, ALWAYS export a fresh backup CSV of the existing products. If something goes wrong, you can restore it in seconds.',
          malayalamNotes: 'സ്റ്റോറിൽ വലിയ മാറ്റങ്ങൾ വരുത്തുന്നതിന് മുൻപ് ബാക്കപ്പ് എടുക്കാൻ മറക്കരുത്.',
          officialDocLinks: [{ title: 'Shopify Store Backups Documentation', url: 'https://help.shopify.com' }],
          videoResources: [{
            title: 'First 30 Days as an E-Commerce Assistant — Key Success Tips',
            provider: 'Career Launchpad Curated',
            url: 'https://www.youtube.com/results?search_query=ecommerce+assistant+first+month+tips',
            language: 'English',
            duration: '18 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Export a complete backup CSV of your test store and save it with a timestamped filename.',
            tasks: ['Filename format: "StoreName_Backup_YYYY_MM_DD.csv"', 'Submit course deliverables for evaluation']
          },
          quiz: [{
            id: 'q-ecom-20',
            question: 'What must an e-commerce assistant ALWAYS do before executing a major bulk CSV edit on a live store?',
            options: ['Inform their friends', 'Export a full backup CSV of current products so any mistakes can be instantly reversed', 'Turn off the internet', 'Delete old orders'],
            correctOptionIndex: 1,
            explanation: 'Exporting a backup CSV ensures you can roll back instantly if an import contains errors.'
          }]
        }
      ]
    },
    {
      id: 'mod-ecom-5',
      weekNumber: 5,
      title: 'Week 5: Inventory Control, Fulfillment Logistics & Marketplace Sync',
      titleMl: 'ആഴ്ച 5: ഇൻവെന്ററി കൺട്രോൾ, ഷിപ്പിംഗ് & മാർക്കറ്റ്പ്ലേസ്',
      objective: 'Manage safety stock formulas, Shiprocket courier logistics, and multi-channel synchronization across Shopify and Amazon.',
      lessons: [
        {
          id: 'les-ecom-21',
          dayNumber: 21,
          title: 'Safety Stock & Reorder Point Formulas',
          titleMl: 'ഇൻവെന്ററി റീ-ഓർഡറിംഗ് & സേഫ്റ്റി സ്റ്റോക്ക്',
          durationMinutes: 50,
          overview: 'Master professional safety stock & reorder point formulas workflows used in real company environments.',
          concepts: ["Foundations of Safety Stock & Reorder Point Formulas", "Industry standard best practices", "Quality verification standards"],
          simpleEnglishGuide: 'Practical zero-knowledge step-by-step guidance: Calculating minimum safety stock levels to prevent sales stockouts.. Always verify your final deliverables before sharing.',
          malayalamNotes: 'ഇൻവെന്ററി റീ-ഓർഡറിംഗ് & സേഫ്റ്റി സ്റ്റോക്ക്: ജോലിസ്ഥലത്ത് ഈ വൈദഗ്ധ്യം ഉപയോഗിക്കുന്ന യഥാർത്ഥ രീതി ലളിതമായി പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'Safety Stock & Reorder Point Formulas Documentation & Guides', url: 'https://www.google.com' }],
          videoResources: [{
            title: 'Safety Stock & Reorder Point Formulas — Complete Step-by-Step Tutorial',
            provider: 'Career Launchpad Curated',
            url: 'https://www.google.com',
            language: 'English',
            duration: '25 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Complete the practical workplace task for Day 21: Calculating minimum safety stock levels to prevent sales stockouts..',
            tasks: [
              'Review the provided instructions and download the exercise worksheet.',
              'Apply the required software operations and double-check outputs.',
              'Save your completed deliverable into your weekly portfolio folder.'
            ]
          },
          quiz: [{
            id: 'q-ecom-21',
            question: 'What is the key objective of Safety Stock & Reorder Point Formulas in this role?',
            options: ["To bypass regular office standards", "To ensure high accuracy, efficiency and adherence to professional standards in safety stock & reorder point formulas", "To increase unnecessary overhead", "To work without any client documentation"],
            correctOptionIndex: 1,
            explanation: 'Mastering safety stock & reorder point formulas ensures tasks are delivered with professional accuracy and zero preventable errors.'
          }]
        },
        {
          id: 'les-ecom-22',
          dayNumber: 22,
          title: 'Shipping & Logistics with Shiprocket',
          titleMl: 'ഷിപ്പ്‌റോക്കറ്റ് & കൊറിയർ ഓപ്പറേഷൻസ്',
          durationMinutes: 50,
          overview: 'Master professional shipping & logistics with shiprocket workflows used in real company environments.',
          concepts: ["Foundations of Shipping & Logistics with Shiprocket", "Industry standard best practices", "Quality verification standards"],
          simpleEnglishGuide: 'Practical zero-knowledge step-by-step guidance: Generating airway bills (AWBs) and coordinating domestic courier pickups.. Always verify your final deliverables before sharing.',
          malayalamNotes: 'ഷിപ്പ്‌റോക്കറ്റ് & കൊറിയർ ഓപ്പറേഷൻസ്: ജോലിസ്ഥലത്ത് ഈ വൈദഗ്ധ്യം ഉപയോഗിക്കുന്ന യഥാർത്ഥ രീതി ലളിതമായി പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'Shipping & Logistics with Shiprocket Documentation & Guides', url: 'https://www.google.com' }],
          videoResources: [{
            title: 'Shipping & Logistics with Shiprocket — Complete Step-by-Step Tutorial',
            provider: 'Career Launchpad Curated',
            url: 'https://www.google.com',
            language: 'English',
            duration: '25 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Complete the practical workplace task for Day 22: Generating airway bills (AWBs) and coordinating domestic courier pickups..',
            tasks: [
              'Review the provided instructions and download the exercise worksheet.',
              'Apply the required software operations and double-check outputs.',
              'Save your completed deliverable into your weekly portfolio folder.'
            ]
          },
          quiz: [{
            id: 'q-ecom-22',
            question: 'What is the key objective of Shipping & Logistics with Shiprocket in this role?',
            options: ["To bypass regular office standards", "To ensure high accuracy, efficiency and adherence to professional standards in shipping & logistics with shiprocket", "To increase unnecessary overhead", "To work without any client documentation"],
            correctOptionIndex: 1,
            explanation: 'Mastering shipping & logistics with shiprocket ensures tasks are delivered with professional accuracy and zero preventable errors.'
          }]
        },
        {
          id: 'les-ecom-23',
          dayNumber: 23,
          title: 'Managing Customer Returns & RTOs',
          titleMl: 'റിട്ടേൺസ് & ആർടിഒ മാനേജ്‌മെന്റ്',
          durationMinutes: 50,
          overview: 'Master professional managing customer returns & rtos workflows used in real company environments.',
          concepts: ["Foundations of Managing Customer Returns & RTOs", "Industry standard best practices", "Quality verification standards"],
          simpleEnglishGuide: 'Practical zero-knowledge step-by-step guidance: Processing refunds and reducing return-to-origin courier losses.. Always verify your final deliverables before sharing.',
          malayalamNotes: 'റിട്ടേൺസ് & ആർടിഒ മാനേജ്‌മെന്റ്: ജോലിസ്ഥലത്ത് ഈ വൈദഗ്ധ്യം ഉപയോഗിക്കുന്ന യഥാർത്ഥ രീതി ലളിതമായി പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'Managing Customer Returns & RTOs Documentation & Guides', url: 'https://www.google.com' }],
          videoResources: [{
            title: 'Managing Customer Returns & RTOs — Complete Step-by-Step Tutorial',
            provider: 'Career Launchpad Curated',
            url: 'https://www.google.com',
            language: 'English',
            duration: '25 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Complete the practical workplace task for Day 23: Processing refunds and reducing return-to-origin courier losses..',
            tasks: [
              'Review the provided instructions and download the exercise worksheet.',
              'Apply the required software operations and double-check outputs.',
              'Save your completed deliverable into your weekly portfolio folder.'
            ]
          },
          quiz: [{
            id: 'q-ecom-23',
            question: 'What is the key objective of Managing Customer Returns & RTOs in this role?',
            options: ["To bypass regular office standards", "To ensure high accuracy, efficiency and adherence to professional standards in managing customer returns & rtos", "To increase unnecessary overhead", "To work without any client documentation"],
            correctOptionIndex: 1,
            explanation: 'Mastering managing customer returns & rtos ensures tasks are delivered with professional accuracy and zero preventable errors.'
          }]
        },
        {
          id: 'les-ecom-24',
          dayNumber: 24,
          title: 'Product Reviews & Social Proof',
          titleMl: 'പ്രൊഡക്റ്റ് റിവ്യൂസ് & സോഷ്യൽ പ്രൂഫ്',
          durationMinutes: 50,
          overview: 'Master professional product reviews & social proof workflows used in real company environments.',
          concepts: ["Foundations of Product Reviews & Social Proof", "Industry standard best practices", "Quality verification standards"],
          simpleEnglishGuide: 'Practical zero-knowledge step-by-step guidance: Managing Judge.me reviews and customer photo testimonials.. Always verify your final deliverables before sharing.',
          malayalamNotes: 'പ്രൊഡക്റ്റ് റിവ്യൂസ് & സോഷ്യൽ പ്രൂഫ്: ജോലിസ്ഥലത്ത് ഈ വൈദഗ്ധ്യം ഉപയോഗിക്കുന്ന യഥാർത്ഥ രീതി ലളിതമായി പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'Product Reviews & Social Proof Documentation & Guides', url: 'https://www.google.com' }],
          videoResources: [{
            title: 'Product Reviews & Social Proof — Complete Step-by-Step Tutorial',
            provider: 'Career Launchpad Curated',
            url: 'https://www.google.com',
            language: 'English',
            duration: '25 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Complete the practical workplace task for Day 24: Managing Judge.me reviews and customer photo testimonials..',
            tasks: [
              'Review the provided instructions and download the exercise worksheet.',
              'Apply the required software operations and double-check outputs.',
              'Save your completed deliverable into your weekly portfolio folder.'
            ]
          },
          quiz: [{
            id: 'q-ecom-24',
            question: 'What is the key objective of Product Reviews & Social Proof in this role?',
            options: ["To bypass regular office standards", "To ensure high accuracy, efficiency and adherence to professional standards in product reviews & social proof", "To increase unnecessary overhead", "To work without any client documentation"],
            correctOptionIndex: 1,
            explanation: 'Mastering product reviews & social proof ensures tasks are delivered with professional accuracy and zero preventable errors.'
          }]
        },
        {
          id: 'les-ecom-25',
          dayNumber: 25,
          title: 'Multi-Channel Sync: Amazon & Flipkart',
          titleMl: 'ആമസോൺ & ഫ്ലിപ്കാർട്ട് ലിസ്റ്റിംഗ് ബേസിക്സ്',
          durationMinutes: 50,
          overview: 'Master professional multi-channel sync: amazon & flipkart workflows used in real company environments.',
          concepts: ["Foundations of Multi-Channel Sync: Amazon & Flipkart", "Industry standard best practices", "Quality verification standards"],
          simpleEnglishGuide: 'Practical zero-knowledge step-by-step guidance: Synchronizing Shopify inventory across Amazon India seller portals.. Always verify your final deliverables before sharing.',
          malayalamNotes: 'ആമസോൺ & ഫ്ലിപ്കാർട്ട് ലിസ്റ്റിംഗ് ബേസിക്സ്: ജോലിസ്ഥലത്ത് ഈ വൈദഗ്ധ്യം ഉപയോഗിക്കുന്ന യഥാർത്ഥ രീതി ലളിതമായി പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'Multi-Channel Sync: Amazon & Flipkart Documentation & Guides', url: 'https://www.google.com' }],
          videoResources: [{
            title: 'Multi-Channel Sync: Amazon & Flipkart — Complete Step-by-Step Tutorial',
            provider: 'Career Launchpad Curated',
            url: 'https://www.google.com',
            language: 'English',
            duration: '25 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Complete the practical workplace task for Day 25: Synchronizing Shopify inventory across Amazon India seller portals..',
            tasks: [
              'Review the provided instructions and download the exercise worksheet.',
              'Apply the required software operations and double-check outputs.',
              'Save your completed deliverable into your weekly portfolio folder.'
            ]
          },
          quiz: [{
            id: 'q-ecom-25',
            question: 'What is the key objective of Multi-Channel Sync: Amazon & Flipkart in this role?',
            options: ["To bypass regular office standards", "To ensure high accuracy, efficiency and adherence to professional standards in multi-channel sync: amazon & flipkart", "To increase unnecessary overhead", "To work without any client documentation"],
            correctOptionIndex: 1,
            explanation: 'Mastering multi-channel sync: amazon & flipkart ensures tasks are delivered with professional accuracy and zero preventable errors.'
          }]
        }
      ]
    },
    {
      id: 'mod-ecom-6',
      weekNumber: 6,
      title: 'Week 6: Customer Returns, Store Auditing & Career Launch',
      titleMl: 'ആഴ്ച 6: റിട്ടേൺസ്, സ്റ്റോർ ഓഡിറ്റ് & ഇ-കൊമേഴ്‌സ് കരിയർ ലോഞ്ച്',
      objective: 'Handle return authorizations, conduct complete Shopify store usability audits, and apply for remote store manager jobs.',
      lessons: [
        {
          id: 'les-ecom-26',
          dayNumber: 26,
          title: '25-Point Shopify Store Usability Audit',
          titleMl: '25-പോയിന്റ് ഷോപ്പിഫൈ സ്റ്റോർ ഓഡിറ്റ്',
          durationMinutes: 50,
          overview: 'Master professional 25-point shopify store usability audit workflows used in real company environments.',
          concepts: ["Foundations of 25-Point Shopify Store Usability Audit", "Industry standard best practices", "Quality verification standards"],
          simpleEnglishGuide: 'Practical zero-knowledge step-by-step guidance: Inspecting checkout hurdles, broken links, and mobile responsiveness.. Always verify your final deliverables before sharing.',
          malayalamNotes: '25-പോയിന്റ് ഷോപ്പിഫൈ സ്റ്റോർ ഓഡിറ്റ്: ജോലിസ്ഥലത്ത് ഈ വൈദഗ്ധ്യം ഉപയോഗിക്കുന്ന യഥാർത്ഥ രീതി ലളിതമായി പഠിക്കുന്നു.',
          officialDocLinks: [{ title: '25-Point Shopify Store Usability Audit Documentation & Guides', url: 'https://www.google.com' }],
          videoResources: [{
            title: '25-Point Shopify Store Usability Audit — Complete Step-by-Step Tutorial',
            provider: 'Career Launchpad Curated',
            url: 'https://www.google.com',
            language: 'English',
            duration: '25 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Complete the practical workplace task for Day 26: Inspecting checkout hurdles, broken links, and mobile responsiveness..',
            tasks: [
              'Review the provided instructions and download the exercise worksheet.',
              'Apply the required software operations and double-check outputs.',
              'Save your completed deliverable into your weekly portfolio folder.'
            ]
          },
          quiz: [{
            id: 'q-ecom-26',
            question: 'What is the key objective of 25-Point Shopify Store Usability Audit in this role?',
            options: ["To bypass regular office standards", "To ensure high accuracy, efficiency and adherence to professional standards in 25-point shopify store usability audit", "To increase unnecessary overhead", "To work without any client documentation"],
            correctOptionIndex: 1,
            explanation: 'Mastering 25-point shopify store usability audit ensures tasks are delivered with professional accuracy and zero preventable errors.'
          }]
        },
        {
          id: 'les-ecom-27',
          dayNumber: 27,
          title: 'Seasonal Sales & Coupon Campaigns',
          titleMl: 'സെയിൽസ് പ്രൊമോഷനുകൾ & കൂപ്പണുകൾ',
          durationMinutes: 50,
          overview: 'Master professional seasonal sales & coupon campaigns workflows used in real company environments.',
          concepts: ["Foundations of Seasonal Sales & Coupon Campaigns", "Industry standard best practices", "Quality verification standards"],
          simpleEnglishGuide: 'Practical zero-knowledge step-by-step guidance: Configuring automated percentage discounts and BOGO sales rules.. Always verify your final deliverables before sharing.',
          malayalamNotes: 'സെയിൽസ് പ്രൊമോഷനുകൾ & കൂപ്പണുകൾ: ജോലിസ്ഥലത്ത് ഈ വൈദഗ്ധ്യം ഉപയോഗിക്കുന്ന യഥാർത്ഥ രീതി ലളിതമായി പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'Seasonal Sales & Coupon Campaigns Documentation & Guides', url: 'https://www.google.com' }],
          videoResources: [{
            title: 'Seasonal Sales & Coupon Campaigns — Complete Step-by-Step Tutorial',
            provider: 'Career Launchpad Curated',
            url: 'https://www.google.com',
            language: 'English',
            duration: '25 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Complete the practical workplace task for Day 27: Configuring automated percentage discounts and BOGO sales rules..',
            tasks: [
              'Review the provided instructions and download the exercise worksheet.',
              'Apply the required software operations and double-check outputs.',
              'Save your completed deliverable into your weekly portfolio folder.'
            ]
          },
          quiz: [{
            id: 'q-ecom-27',
            question: 'What is the key objective of Seasonal Sales & Coupon Campaigns in this role?',
            options: ["To bypass regular office standards", "To ensure high accuracy, efficiency and adherence to professional standards in seasonal sales & coupon campaigns", "To increase unnecessary overhead", "To work without any client documentation"],
            correctOptionIndex: 1,
            explanation: 'Mastering seasonal sales & coupon campaigns ensures tasks are delivered with professional accuracy and zero preventable errors.'
          }]
        },
        {
          id: 'les-ecom-28',
          dayNumber: 28,
          title: 'Capstone: Complete D2C Brand Store',
          titleMl: 'ക്യാപ്സ്റ്റോൺ - പൂർണ്ണ ഡി2സി ഓൺലൈൻ സ്റ്റോർ',
          durationMinutes: 50,
          overview: 'Master professional capstone: complete d2c brand store workflows used in real company environments.',
          concepts: ["Foundations of Capstone: Complete D2C Brand Store", "Industry standard best practices", "Quality verification standards"],
          simpleEnglishGuide: 'Practical zero-knowledge step-by-step guidance: Launching an end-to-end 15-product Shopify store with test orders.. Always verify your final deliverables before sharing.',
          malayalamNotes: 'ക്യാപ്സ്റ്റോൺ - പൂർണ്ണ ഡി2സി ഓൺലൈൻ സ്റ്റോർ: ജോലിസ്ഥലത്ത് ഈ വൈദഗ്ധ്യം ഉപയോഗിക്കുന്ന യഥാർത്ഥ രീതി ലളിതമായി പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'Capstone: Complete D2C Brand Store Documentation & Guides', url: 'https://www.google.com' }],
          videoResources: [{
            title: 'Capstone: Complete D2C Brand Store — Complete Step-by-Step Tutorial',
            provider: 'Career Launchpad Curated',
            url: 'https://www.google.com',
            language: 'English',
            duration: '25 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Complete the practical workplace task for Day 28: Launching an end-to-end 15-product Shopify store with test orders..',
            tasks: [
              'Review the provided instructions and download the exercise worksheet.',
              'Apply the required software operations and double-check outputs.',
              'Save your completed deliverable into your weekly portfolio folder.'
            ]
          },
          quiz: [{
            id: 'q-ecom-28',
            question: 'What is the key objective of Capstone: Complete D2C Brand Store in this role?',
            options: ["To bypass regular office standards", "To ensure high accuracy, efficiency and adherence to professional standards in capstone: complete d2c brand store", "To increase unnecessary overhead", "To work without any client documentation"],
            correctOptionIndex: 1,
            explanation: 'Mastering capstone: complete d2c brand store ensures tasks are delivered with professional accuracy and zero preventable errors.'
          }]
        },
        {
          id: 'les-ecom-29',
          dayNumber: 29,
          title: 'E-commerce Operations Portfolio Dossier',
          titleMl: 'ഇ-കൊമേഴ്‌സ് പോർട്ട്ഫോളിയോ ഡോസിയർ',
          durationMinutes: 50,
          overview: 'Master professional e-commerce operations portfolio dossier workflows used in real company environments.',
          concepts: ["Foundations of E-commerce Operations Portfolio Dossier", "Industry standard best practices", "Quality verification standards"],
          simpleEnglishGuide: 'Practical zero-knowledge step-by-step guidance: Documenting catalogs, inventory sheets, and audits into a PDF.. Always verify your final deliverables before sharing.',
          malayalamNotes: 'ഇ-കൊമേഴ്‌സ് പോർട്ട്ഫോളിയോ ഡോസിയർ: ജോലിസ്ഥലത്ത് ഈ വൈദഗ്ധ്യം ഉപയോഗിക്കുന്ന യഥാർത്ഥ രീതി ലളിതമായി പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'E-commerce Operations Portfolio Dossier Documentation & Guides', url: 'https://www.google.com' }],
          videoResources: [{
            title: 'E-commerce Operations Portfolio Dossier — Complete Step-by-Step Tutorial',
            provider: 'Career Launchpad Curated',
            url: 'https://www.google.com',
            language: 'English',
            duration: '25 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Complete the practical workplace task for Day 29: Documenting catalogs, inventory sheets, and audits into a PDF..',
            tasks: [
              'Review the provided instructions and download the exercise worksheet.',
              'Apply the required software operations and double-check outputs.',
              'Save your completed deliverable into your weekly portfolio folder.'
            ]
          },
          quiz: [{
            id: 'q-ecom-29',
            question: 'What is the key objective of E-commerce Operations Portfolio Dossier in this role?',
            options: ["To bypass regular office standards", "To ensure high accuracy, efficiency and adherence to professional standards in e-commerce operations portfolio dossier", "To increase unnecessary overhead", "To work without any client documentation"],
            correctOptionIndex: 1,
            explanation: 'Mastering e-commerce operations portfolio dossier ensures tasks are delivered with professional accuracy and zero preventable errors.'
          }]
        },
        {
          id: 'les-ecom-30',
          dayNumber: 30,
          title: 'Graduation & Store Manager Job Hunt',
          titleMl: 'സർട്ടിഫിക്കേഷൻ & തൊഴിൽ അപേക്ഷാ തയ്യാറെടുപ്പ്',
          durationMinutes: 50,
          overview: 'Master professional graduation & store manager job hunt workflows used in real company environments.',
          concepts: ["Foundations of Graduation & Store Manager Job Hunt", "Industry standard best practices", "Quality verification standards"],
          simpleEnglishGuide: 'Practical zero-knowledge step-by-step guidance: Final 30-day exam and applying for remote e-commerce operations jobs.. Always verify your final deliverables before sharing.',
          malayalamNotes: 'സർട്ടിഫിക്കേഷൻ & തൊഴിൽ അപേക്ഷാ തയ്യാറെടുപ്പ്: ജോലിസ്ഥലത്ത് ഈ വൈദഗ്ധ്യം ഉപയോഗിക്കുന്ന യഥാർത്ഥ രീതി ലളിതമായി പഠിക്കുന്നു.',
          officialDocLinks: [{ title: 'Graduation & Store Manager Job Hunt Documentation & Guides', url: 'https://www.google.com' }],
          videoResources: [{
            title: 'Graduation & Store Manager Job Hunt — Complete Step-by-Step Tutorial',
            provider: 'Career Launchpad Curated',
            url: 'https://www.google.com',
            language: 'English',
            duration: '25 mins',
            isFree: true
          }],
          practicalExercise: {
            instructions: 'Complete the practical workplace task for Day 30: Final 30-day exam and applying for remote e-commerce operations jobs..',
            tasks: [
              'Review the provided instructions and download the exercise worksheet.',
              'Apply the required software operations and double-check outputs.',
              'Save your completed deliverable into your weekly portfolio folder.'
            ]
          },
          quiz: [{
            id: 'q-ecom-30',
            question: 'What is the key objective of Graduation & Store Manager Job Hunt in this role?',
            options: ["To bypass regular office standards", "To ensure high accuracy, efficiency and adherence to professional standards in graduation & store manager job hunt", "To increase unnecessary overhead", "To work without any client documentation"],
            correctOptionIndex: 1,
            explanation: 'Mastering graduation & store manager job hunt ensures tasks are delivered with professional accuracy and zero preventable errors.'
          }]
        }
      ]
    }
  ],
  projects: [
    {
      id: 'proj-ecom-1',
      title: 'Full 10-Product Storefront with Variant Architectures',
      titleMl: '10 ഉൽപ്പന്നങ്ങളുള്ള ലൈവ് ഷോപ്പിഫൈ സ്റ്റോർ',
      description: 'Build a fully operational demo Shopify catalog featuring 10 multi-variant products across 3 automated collections.',
      scenario: 'A modern home lifestyle brand "Verdant Living" is launching an online store. You are hired to set up their initial catalog of 10 items (ceramics, planters, textiles) with standardized SKUs, square imagery, tags, and automated collections.',
      instructions: [
        'Create 10 complete products in a free Shopify Partner development store',
        'Every product must have at least 2 variants (e.g. Size or Color) with distinct SKUs following the formula BRAND-CAT-STYLE-CLR-SZ',
        'Upload at least 2 clean 1:1 square images per product with descriptive ALT text',
        'Create 3 automated collections (e.g., "Handcrafted Planters", "Under ₹1,499", "Best Sellers") based on product tags'
      ],
      deliverables: [
        'Public URL of the Shopify development storefront (with preview password)',
        'Exported products CSV file verifying all 10 products and their variants'
      ],
      downloadableDataFilename: 'verdant_living_product_specs.json',
      downloadableDataContent: JSON.stringify([
        { title: 'Terracotta Cylinder Planter', category: 'Planters', colors: ['Rustic Brown', 'Matte White'], sizes: ['Small', 'Large'], price: 799 },
        { title: 'Organic Cotton Throw Blanket', category: 'Textiles', colors: ['Olive Green', 'Oatmeal Beige'], sizes: ['Standard'], price: 1899 },
        { title: 'Hand-Glazed Ceramic Mug', category: 'Ceramics', colors: ['Speckled Grey', 'Sky Blue'], sizes: ['350ml'], price: 549 }
      ], null, 2),
      gradingRubric: [
        { criterion: 'Variant & SKU Accuracy', weight: 40, standard: 'Every single variant has an assigned price, unique SKU, and proper weight value.' },
        { criterion: 'Image Consistency & ALT Text', weight: 30, standard: 'All product images are 1:1 square format with descriptive ALT text.' },
        { criterion: 'Automated Collection Logic', weight: 30, standard: 'Collections dynamically populate based on tags with zero manual sorting required.' }
      ],
      modelSolutionOverview: 'The completed store features clean product titles, detailed bullet-point dimensions, high-resolution lifestyle images, and an organized top navigation menu connecting to the 3 collections.'
    },
    {
      id: 'proj-ecom-2',
      title: 'Bulk CSV Catalog Migration & Cleanup Model',
      titleMl: 'ബൾക്ക് CSV ഇമ്പോർട്ടും ഡാറ്റാ ക്ലീനിംഗും',
      description: 'Take a messy, unformatted vendor spreadsheet of 30 products, standardize columns to Shopify CSV standards, and execute a zero-error import.',
      scenario: 'A retail shoe distributor is moving online. Their supplier sent a chaotic Excel sheet with inconsistent sizes, missing handles, and merged cells. You must clean and format this into a flawless Shopify CSV file.',
      instructions: [
        'Open the raw supplier CSV file in Google Sheets',
        'Clean text casing, remove trailing whitespaces, and construct valid URL handles',
        'Format Option1 Name (Size) and Option1 Value (UK 7, UK 8, UK 9, UK 10)',
        'Import the cleaned file into a fresh test store with zero import errors reported'
      ],
      deliverables: [
        'The cleaned, ready-to-import CSV file',
        'Screenshot proof of the Shopify import success screen showing "30 products successfully imported"'
      ],
      downloadableDataFilename: 'raw_supplier_shoes_uncleaned.csv',
      downloadableDataContent: 'Product Name,Category,Size,Price,SKU,Image\nClassic Canvas Low,Shoes,UK 7,1299,CANV-LOW-07,https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77\nClassic Canvas Low,Shoes,UK 8,1299,CANV-LOW-08,https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77\nClassic Canvas Low,Shoes,UK 9,1299,CANV-LOW-09,https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77\nLeather Oxford Formal,Shoes,UK 8,2499,LEAT-OXF-08,https://images.unsplash.com/photo-1614252235316-8c857d38b5f4',
      gradingRubric: [
        { criterion: 'CSV Structural Integrity', weight: 40, standard: 'Correct column headers matching official Shopify import specifications.' },
        { criterion: 'Variant Grouping by Handle', weight: 35, standard: 'Variants of the same shoe model share the exact same handle across multiple rows.' },
        { criterion: 'Zero Import Errors', weight: 25, standard: 'The file imports smoothly on the first attempt without column rejection errors.' }
      ],
      modelSolutionOverview: 'The resulting CSV has exact column mapping, valid UTF-8 encoding, consistent uppercase SKUs, and clean numerical prices with zero currency symbol corruption.'
    },
    {
      id: 'proj-ecom-3',
      title: 'Store Audit & Order Fulfillment Operations Dossier',
      titleMl: 'സ്റ്റോർ ഓഡിറ്റും ഓർഡർ ഫുൾഫിൽമെന്റും',
      description: 'Audit a live e-commerce site against a 25-point checklist, place test orders, and document standard operating procedures for fulfillment.',
      scenario: 'You are onboarding as an operations assistant for an online gourmet tea company. Before the peak holiday season, the founder needs you to audit the storefront and draft a 1-page fulfillment SOP for warehouse packers.',
      instructions: [
        'Complete the 25-point store health audit covering mobile responsiveness, search speed, tax checkout rates, and legal footer links',
        'Place and process 3 test orders in your development store',
        'Write an illustrated "Standard Operating Procedure: Packing, Shipping & NDR Follow-Up" for team members'
      ],
      deliverables: [
        'Completed Store Health Audit Report (Google Sheets or PDF)',
        'Fulfillment & NDR SOP Document ready for warehouse training'
      ],
      gradingRubric: [
        { criterion: 'Audit Thoroughness', weight: 35, standard: 'Identifies practical UX and operational gaps with realistic recommendations.' },
        { criterion: 'SOP Clarity & Step Sequencing', weight: 35, standard: 'Packers can follow the fulfillment steps with zero ambiguity.' },
        { criterion: 'NDR Protocol', weight: 30, standard: 'Clear protocol for contacting customers when parcels face delivery exceptions.' }
      ],
      modelSolutionOverview: 'The dossier includes a traffic-light audit sheet (Green/Yellow/Red priority fixes) and an SOP with packing checklist, barcode scan verification, and customer WhatsApp update templates.'
    }
  ],
  workplaceGuidance: {
    firstWeek: [
      'Export and safely store a complete backup CSV of the merchant\'s current live catalog before editing a single product.',
      'Check if the store uses third-party inventory synchronization apps (e.g. ERP integrations) so your manual updates do not clash.',
      'Familiarize yourself with the store\'s shipping cutoff times (e.g. orders before 2 PM dispatched same day).',
      'Test discount coupons and promotional codes yourself before marketing emails are broadcast.'
    ],
    firstMonth: [
      'Maintain an audit sheet of top-selling products and verify their inventory counts match physical stock weekly.',
      'Proactively report items with high return rates to management so product descriptions or sizing guides can be improved.',
      'Never delete a product that has historical orders; archive or set status to "Draft" instead to preserve order records.'
    ],
    commonMistakes: [
      'Editing live product prices during high-traffic daytime hours without testing on a staging or draft product first.',
      'Forgetting to enter item weights, which breaks courier automated shipping rates at checkout.',
      'Entering random SKU codes that do not follow the warehouse naming pattern.'
    ]
  },
  interviewPrep: [
    {
      question: 'What do you do if you notice a product is accidentally priced at ₹99 instead of ₹999 on a live store with orders coming in?',
      answer: 'I immediately change the product status to "Draft" or set its inventory to 0 to prevent further incorrect purchases. Then, I notify my manager with the order numbers received at the wrong price, and wait for guidance on whether to fulfill or contact the customers according to company policy.',
      tips: 'Show that you act instantly to stop financial bleeding before asking questions.'
    },
    {
      question: 'How do you handle importing 300 new products when the supplier only gave you an unformatted PDF catalog?',
      answer: 'I extract the product data into Google Sheets, structure the columns to match the official Shopify CSV template, construct clean handles and standardized SKUs, format the images to 1:1 aspect ratio, and test import 2 sample rows first before importing the entire batch.',
      tips: 'Highlight your methodical process and testing habits.'
    },
    {
      question: 'How do you prevent high return rates (RTO) for cash-on-delivery (COD) orders in India?',
      answer: 'I implement an immediate verification step: sending an automated WhatsApp confirmation message or making a brief verification call to confirm the customer\'s address, landmark, and readiness to accept the parcel before handing it over to the courier.',
      tips: 'Demonstrates deep familiarity with practical Indian e-commerce logistics challenges.'
    }
  ]
};
