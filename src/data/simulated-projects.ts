// src/data/simulated-projects.ts
// Generated Library of 30 Comprehensive Workplace Practice Projects for Career Launchpad
// Covers all 6 Departments: Accounting, E-commerce, Virtual Office, Customer Support, Design Studio, Technology

export interface ProjectSampleDataFile {
  name: string;
  size: string;
  type: 'csv' | 'json' | 'pdf' | 'xlsx' | 'txt';
  description: string;
  downloadContent: string;
}

export interface WorkplaceProjectDossier {
  id: string;
  slug: string;
  title: string;
  department: 'Accounting' | 'E-commerce' | 'Virtual Office' | 'Customer Support' | 'Design Studio' | 'Technology';
  careerSlug: string;
  careerTitle: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedHours: number;
  company: {
    name: string;
    industry: string;
    location: string;
    background: string;
    contactPerson: string;
    role: string;
  };
  brief: string;
  learningObjectives: string[];
  requiredTools: string[];
  prerequisites: string[];
  deliverables: Array<{
    name: string;
    format: string;
    description: string;
  }>;
  sampleDataFiles: ProjectSampleDataFile[];
  rubric: Array<{
    criterion: string;
    points: number;
    description: string;
  }>;
  solutionWalkthrough: {
    overview: string;
    stepByStepGuidance: string[];
    sampleOutputSnippet: string;
    commonMistakesToAvoid: string[];
    portfolioInclusionTip: string;
  };
}

export const simulatedWorkplaceProjects: WorkplaceProjectDossier[] = [
  {
    "id": "proj-acct-01",
    "slug": "monthly-bank-reconciliation-apex-trading",
    "title": "Monthly Bank Statement Reconciliation & Suspense Resolution",
    "department": "Accounting",
    "careerSlug": "bookkeeping-invoicing",
    "careerTitle": "Basic Bookkeeping & Invoicing",
    "difficulty": "Beginner",
    "estimatedHours": 4,
    "company": {
      "name": "Apex Trading Co.",
      "industry": "Wholesale FMCG & Packaging Distribution",
      "location": "Kochi, Kerala",
      "background": "Apex Trading distributes commercial packaging supplies across South India. With over 200 monthly customer payments via NEFT, UPI, and cheques, discrepancies occur between the ICICI corporate bank statement and internal Tally/Zoho cash books.",
      "contactPerson": "Ramesh Varma",
      "role": "Chief Financial Controller"
    },
    "brief": "Perform the end-of-month October bank reconciliation for Apex Trading Co. Compare the bank statement balance of \u20b93,45,850 against the internal cash book balance of \u20b92,98,400. Identify unpresented cheques, uncleared deposits, bank fee debits, and direct client credits to achieve a balanced zero-discrepancy reconciliation statement.",
    "learningObjectives": [
      "Identify timing differences between cash book ledgers and external bank statements",
      "Format professional 4-column Bank Reconciliation Statements (BRS)",
      "Generate adjusting journal entries for bank charges and interest credits",
      "Flag duplicate and erroneous transaction entries"
    ],
    "requiredTools": [
      "MS Excel / Google Sheets",
      "Calculator",
      "PDF Viewer"
    ],
    "prerequisites": [
      "Basic understanding of debit and credit rules",
      "Simple spreadsheet navigation"
    ],
    "deliverables": [
      {
        "name": "Completed Bank Reconciliation Statement (XLSX / CSV)",
        "format": "Spreadsheet",
        "description": "Standardized BRS with adjusted cash book balance and reconciled bank balance matching exactly."
      },
      {
        "name": "Adjusting Journal Entries Memo (PDF / DOCX)",
        "format": "Document",
        "description": "Short memorandum summarizing 4 adjusting entries required in general ledger."
      }
    ],
    "sampleDataFiles": [
      {
        "name": "apex_october_bank_feed.csv",
        "size": "4.2 KB",
        "type": "csv",
        "description": "Raw October corporate bank statement feed with 25 ledger entries, reference numbers, and transaction codes.",
        "downloadContent": "Date,Reference_No,Description,Debit_INR,Credit_INR,Balance_INR\n2026-10-01,INIT001,Opening Balance,,,312400.00\n2026-10-03,NEFT7821,Kalyan Packaging Solutions,,42500.00,354900.00\n2026-10-06,CHQ40129,Supplier Bill - Sri Balaji Polymers,65000.00,,289900.00\n2026-10-10,UPI99210,Retail Counter Daily Cash Deposit,,18400.00,308300.00\n2026-10-12,CHQ40130,Staff Travel Advance - Vijay,12000.00,,296300.00\n2026-10-15,NEFT8841,Direct Client Credit - Modern Bakers,,34000.00,330300.00\n2026-10-18,CMS88102,Warehouse Electricity Bill KSEB,16250.00,,314050.00\n2026-10-22,CHQ40131,Godown Rent Advance,45000.00,,269050.00\n2026-10-25,RTGS1920,Bulk Order - Malabar Spices,,85000.00,354050.00\n2026-10-28,CHQ40133,Vehicle Maintenance - Maruthi Garage,8400.00,,345650.00\n2026-10-31,CHG10041,Quarterly Current Account Maintenance Fee,1200.00,,344450.00\n2026-10-31,INT99201,Auto Sweep Savings Interest,,1400.00,345850.00"
      },
      {
        "name": "apex_internal_cashbook.csv",
        "size": "3.8 KB",
        "type": "csv",
        "description": "Internal accounting software general ledger cash book export for October.",
        "downloadContent": "Date,Voucher_No,Account_Head,Debit_INR,Credit_INR\n2026-10-01,OPN-01,Opening Cash Book Balance,312400.00,\n2026-10-03,REC-101,Kalyan Packaging Solutions,42500.00,\n2026-10-05,PAY-201,Sri Balaji Polymers,,65000.00\n2026-10-10,REC-102,Retail Cash Sales Deposit,18400.00,\n2026-10-12,PAY-202,Staff Travel Advance,,12000.00\n2026-10-18,PAY-203,KSEB Electricity,,16250.00\n2026-10-22,PAY-204,Godown Rent,,45000.00\n2026-10-24,PAY-205,Raw Material Purchase - CHQ 40132,,28650.00\n2026-10-25,REC-103,Malabar Spices RTGS,85000.00,\n2026-10-27,REC-104,Cheque Deposit - Grand Mart CHQ 99182,19200.00,\n2026-10-28,PAY-206,Maruthi Garage Vehicle Service,,8400.00\n2026-10-30,PAY-207,Office Stationers - CHQ 40134,,2800.00"
      }
    ],
    "rubric": [
      {
        "criterion": "Accurate calculation of unpresented cheques total",
        "points": 25,
        "description": "Correctly identified CHQ 40132 (\u20b928,650) and CHQ 40134 (\u20b92,800) issued but not cleared by bank."
      },
      {
        "criterion": "Identification of uncleared customer deposits",
        "points": 25,
        "description": "Found Grand Mart cheque deposit (\u20b919,200) not credited by bank before month end."
      },
      {
        "criterion": "Cash book adjustment accuracy",
        "points": 25,
        "description": "Accurately factored direct credit (\u20b934,000), interest (\u20b91,400), and bank charge (\u20b91,200)."
      },
      {
        "criterion": "Professional presentation and reconciliation balance",
        "points": 25,
        "description": "BRS statement matches with zero difference and neat currency formatting."
      }
    ],
    "solutionWalkthrough": {
      "overview": "The cash book had unrecorded items (direct NEFT from Modern Bakers, bank charges, auto-sweep interest) while the bank statement lacked unpresented cheques (CHQ 40132 and 40134) and uncleared deposits (Grand Mart). Adjusting both sides yields an identical reconciled balance of \u20b93,32,600.",
      "stepByStepGuidance": [
        "Step 1: Check cash book against bank statement row by row to find ticks for matching entries.",
        "Step 2: Add unrecorded direct credit (+\u20b934,000) and interest (+\u20b91,400) to cash book, subtract bank fee (-\u20b91,200).",
        "Step 3: From bank statement balance (\u20b93,45,850), add uncleared deposit (+\u20b919,200) and deduct unpresented cheques (-\u20b931,450).",
        "Step 4: Verify both sides equate to \u20b93,32,600 exactly."
      ],
      "sampleOutputSnippet": "Adjusted Cash Book: 2,98,400 + 34,000 + 1,400 - 1,200 = \u20b93,32,600\nReconciled Bank: 3,45,850 + 19,200 - 31,450 = \u20b93,32,600\nVariance: \u20b90.00 (Balanced)",
      "commonMistakesToAvoid": [
        "Adding bank charges to cash book instead of deducting them.",
        "Treating unpresented cheques as additions to the bank statement rather than subtractions."
      ],
      "portfolioInclusionTip": "Include your reconciliation sheet in your portfolio under Financial Documentation. Add a 2-sentence note highlighting your zero-variance accuracy."
    }
  },
  {
    "id": "proj-acct-02",
    "slug": "gst-compliant-invoicing-meridian-health",
    "title": "Multi-Tier GST Invoicing & Tax Calculation Ledger",
    "department": "Accounting",
    "careerSlug": "bookkeeping-invoicing",
    "careerTitle": "Basic Bookkeeping & Invoicing",
    "difficulty": "Beginner",
    "estimatedHours": 3,
    "company": {
      "name": "Meridian Health Supplies",
      "industry": "Medical Equipment & Consumables Wholesale",
      "location": "Bengaluru, Karnataka",
      "background": "Meridian Health sells surgical disposables, monitoring devices, and sanitized PPE to regional clinics and hospitals across Karnataka, Tamil Nadu, and Kerala.",
      "contactPerson": "Priya Nambiar",
      "role": "Accounts Receivable Lead"
    },
    "brief": "Prepare 3 official GST-compliant tax invoices for hospital purchase orders. Accurately segregate intra-state supplies (CGST 6% + SGST 6%) from inter-state supplies (IGST 12% / 18%), apply HSN codes, calculate trade discounts, and update the sales summary register.",
    "learningObjectives": [
      "Master Indian GST tax split rules (CGST/SGST vs IGST)",
      "Apply trade discounts before taxable turnover calculations",
      "Generate standardized commercial invoices compliant with GST Rule 46",
      "Maintain an Accounts Receivable ledger summary"
    ],
    "requiredTools": [
      "Google Sheets / Excel",
      "Invoice Generator Simulator",
      "PDF Export"
    ],
    "prerequisites": [
      "Basic arithmetic",
      "Understanding invoice line items"
    ],
    "deliverables": [
      {
        "name": "3 Completed Tax Invoices (PDF)",
        "format": "PDF Files",
        "description": "Itemized tax invoices with seller/buyer GSTIN, HSN codes, taxable value, and tax breakdown."
      },
      {
        "name": "Sales Register Summary (XLSX / CSV)",
        "format": "Spreadsheet",
        "description": "Sales journal logging Invoice No, Date, Customer, Taxable Value, CGST, SGST, IGST, and Total."
      }
    ],
    "sampleDataFiles": [
      {
        "name": "meridian_pending_orders.json",
        "size": "2.8 KB",
        "type": "json",
        "description": "Structured customer purchase orders including item quantities, base rates, customer addresses, and GSTINs.",
        "downloadContent": "[\n  {\n    \"orderId\": \"ORD-2026-881\",\n    \"customer\": \"City Care Hospital\",\n    \"customerGstin\": \"29AAACC1204K1ZT\",\n    \"customerState\": \"Karnataka (Intra-state)\",\n    \"items\": [\n      {\"name\": \"Sterile Surgical Gloves Box\", \"hsn\": \"4015\", \"qty\": 100, \"rate\": 350, \"gstRate\": 12},\n      {\"name\": \"Digital Infrared Thermometer\", \"hsn\": \"9025\", \"qty\": 20, \"rate\": 1400, \"gstRate\": 18}\n    ],\n    \"discountPercent\": 5\n  },\n  {\n    \"orderId\": \"ORD-2026-882\",\n    \"customer\": \"Sunrise Clinic Coimbatore\",\n    \"customerGstin\": \"33AABCS4412M1ZN\",\n    \"customerState\": \"Tamil Nadu (Inter-state)\",\n    \"items\": [\n      {\"name\": \"Pulse Oximeter Pro\", \"hsn\": \"9018\", \"qty\": 50, \"rate\": 850, \"gstRate\": 12},\n      {\"name\": \"Alcohol Hand Sanitizer 5L\", \"hsn\": \"3808\", \"qty\": 30, \"rate\": 600, \"gstRate\": 18}\n    ],\n    \"discountPercent\": 0\n  }\n]"
      }
    ],
    "rubric": [
      {
        "criterion": "Correct intra-state vs inter-state tax selection",
        "points": 30,
        "description": "Applied CGST+SGST to Karnataka client and IGST to Tamil Nadu client."
      },
      {
        "criterion": "Accurate discount and taxable value deduction",
        "points": 30,
        "description": "Deducted 5% trade discount from gross value prior to GST computation."
      },
      {
        "criterion": "Completeness of GST mandatory fields",
        "points": 20,
        "description": "Included HSN codes, invoice serial numbering, and reverse charge declaration."
      },
      {
        "criterion": "Clean sales summary journal",
        "points": 20,
        "description": "Sales register correctly tallies total tax collected and receivable amounts."
      }
    ],
    "solutionWalkthrough": {
      "overview": "For City Care Hospital (Karnataka), gross amount is \u20b963,000. 5% discount reduces taxable base to \u20b959,850. Split 12% and 18% items into CGST (6%/9%) and SGST (6%/9%). For Sunrise Clinic (Tamil Nadu), supply is inter-state so apply single IGST column.",
      "stepByStepGuidance": [
        "Calculate itemized gross: Gloves = \u20b935,000; Thermometers = \u20b928,000.",
        "Apply 5% discount: Gloves taxable = \u20b933,250; Thermometers taxable = \u20b926,600.",
        "Calculate CGST/SGST: Gloves CGST 6% (\u20b91,995) + SGST 6% (\u20b91,995); Thermometers CGST 9% (\u20b92,394) + SGST 9% (\u20b92,394).",
        "Total Invoice 1 = \u20b967,884.00."
      ],
      "sampleOutputSnippet": "Invoice 1 Total Taxable: \u20b959,850 | Total CGST: \u20b94,389 | Total SGST: \u20b94,389 | Grand Total: \u20b968,628",
      "commonMistakesToAvoid": [
        "Calculating GST before subtracting the trade discount.",
        "Charging IGST to local intra-state clients."
      ],
      "portfolioInclusionTip": "Add sample PDF invoice with watermark 'SAMPLE - TRAINING PROJECT' to your portfolio. It visually demonstrates commercial accuracy."
    }
  },
  {
    "id": "proj-acct-03",
    "slug": "supplier-bill-audit-malabar-logistics",
    "title": "Supplier Bill 3-Way Matching & Duplicate Payment Audit",
    "department": "Accounting",
    "careerSlug": "bookkeeping-invoicing",
    "careerTitle": "Basic Bookkeeping & Invoicing",
    "difficulty": "Intermediate",
    "estimatedHours": 4,
    "company": {
      "name": "Malabar Logistics LLP",
      "industry": "Fleet Transport & Cold Storage",
      "location": "Calicut, Kerala",
      "background": "Malabar Logistics operates 45 refrigerated trucks. Invoices from fuel vendors, tyre dealers, and mechanical workshops arrive via email and physical post, occasionally causing duplicate entries and overbilling.",
      "contactPerson": "Sameer K.",
      "role": "Finance Operations Manager"
    },
    "brief": "Audit a batch of 20 supplier invoices against Purchase Orders (POs) and Goods Received Notes (GRNs). Detect 3 fraudulent or duplicate invoices, flag quantity discrepancies, and approve clean bills for batch payment disbursement.",
    "learningObjectives": [
      "Execute standard corporate 3-way matching (PO vs GRN vs Vendor Invoice)",
      "Identify duplicate invoice numbers and disguised re-submissions",
      "Compute quantity variances and price overcharges",
      "Prepare Accounts Payable payment release authorization sheet"
    ],
    "requiredTools": [
      "MS Excel / Google Sheets",
      "PDF Reader"
    ],
    "prerequisites": [
      "Invoice structure familiarity"
    ],
    "deliverables": [
      {
        "name": "Accounts Payable Audit Matrix (XLSX)",
        "format": "Spreadsheet",
        "description": "Color-coded audit register with Match, Discrepancy, and Duplicate flags."
      },
      {
        "name": "Discrepancy Exception Report (PDF)",
        "format": "Document",
        "description": "Summary memo detailing rejected bills and vendor communication notices."
      }
    ],
    "sampleDataFiles": [
      {
        "name": "supplier_bills_batch_audit.csv",
        "size": "5.1 KB",
        "type": "csv",
        "description": "Batch of 20 supplier bills with PO reference, GRN reference, billed amounts, and dates.",
        "downloadContent": "Bill_ID,Vendor_Name,PO_Ref,GRN_Ref,Billed_Qty,Unit_Price,Billed_Total,PO_Agreed_Total,GRN_Received_Qty\nBILL-401,Calicut Diesel Depot,PO-881,GRN-881,1200,92.50,111000.00,111000.00,1200\nBILL-402,National Tyres Ltd,PO-882,GRN-882,8,14500.00,116000.00,116000.00,8\nBILL-403,Express Lubricants,PO-884,GRN-884,40,420.00,16800.00,16800.00,40\nBILL-404,Calicut Diesel Depot,PO-881,GRN-881,1200,92.50,111000.00,111000.00,1200\nBILL-405,AutoTech Spare Parts,PO-887,GRN-887,15,2200.00,33000.00,30000.00,15\nBILL-406,QuickFix Radiators,PO-889,GRN-889,4,8500.00,34000.00,34000.00,3\nBILL-407,Kochi Battery House,PO-891,GRN-891,6,7200.00,43200.00,43200.00,6"
      }
    ],
    "rubric": [
      {
        "criterion": "Identification of duplicate invoice",
        "points": 30,
        "description": "Flagged BILL-404 as identical duplicate of BILL-401 (Calicut Diesel Depot \u20b91,11,000)."
      },
      {
        "criterion": "Price variance detection",
        "points": 25,
        "description": "Detected AutoTech unit price bump from \u20b92,000 (PO) to \u20b92,200 (Bill) totaling \u20b93,000 overcharge."
      },
      {
        "criterion": "Quantity variance detection",
        "points": 25,
        "description": "Detected QuickFix billed 4 radiators when GRN confirms only 3 received."
      },
      {
        "criterion": "AP Approval Summary Accuracy",
        "points": 20,
        "description": "Calculated exact net approved payment disbursement."
      }
    ],
    "solutionWalkthrough": {
      "overview": "BILL-404 is an exact duplicate submission. BILL-405 has a rate mismatch (billed \u20b92,200 vs PO \u20b92,000). BILL-406 has a quantity mismatch (billed 4 vs GRN 3 received). Approved total includes only verified matching transactions.",
      "stepByStepGuidance": [
        "Sort by PO_Ref and Vendor_Name to catch duplicate submissions.",
        "Compare Billed_Total vs PO_Agreed_Total; highlight price variances.",
        "Compare Billed_Qty vs GRN_Received_Qty; highlight short-shipments.",
        "Issue credit note request for BILL-405 and BILL-406, reject BILL-404 completely."
      ],
      "sampleOutputSnippet": "Total Billed: \u20b94,65,000 | Disputed/Rejected: \u20b91,53,500 | Net Approved for Payment: \u20b93,11,500",
      "commonMistakesToAvoid": [
        "Paying supplier bills based on PO alone without verifying physical GRN receipt count."
      ],
      "portfolioInclusionTip": "Accounts Payable teams love 3-way matching skills. Cite this project on your resume under 'Internal Controls & Fraud Prevention'."
    }
  },
  {
    "id": "proj-acct-04",
    "slug": "petty-cash-expense-vouchers-zenith",
    "title": "Petty Cash Imprest Reconciliation & Expense Classification",
    "department": "Accounting",
    "careerSlug": "bookkeeping-invoicing",
    "careerTitle": "Basic Bookkeeping & Invoicing",
    "difficulty": "Beginner",
    "estimatedHours": 3,
    "company": {
      "name": "Zenith Retail Outlets",
      "industry": "Apparel & Lifestyle Retail",
      "location": "Ernakulam, Kerala",
      "background": "Zenith operates a high-street showroom with a monthly petty cash imprest fund of \u20b925,000 for tea, cleaning, courier, local conveyance, and urgent stationery.",
      "contactPerson": "Deepa Roy",
      "role": "Senior Accountant"
    },
    "brief": "Review 28 handwritten receipt vouchers, cash memos, and UPI payment slips for October. Classify each expense into appropriate accounting ledger heads, detect non-compliant vouchers lacking supervisor signatures, and calculate the exact reimbursement cheque required to restore the imprest fund.",
    "learningObjectives": [
      "Implement the Imprest System of petty cash management",
      "Classify miscellaneous expenses into proper chart-of-accounts heads",
      "Enforce voucher compliance rules (tax invoices, vouchers, approvals)",
      "Draft a petty cash replenishment request voucher"
    ],
    "requiredTools": [
      "Excel / Google Sheets"
    ],
    "prerequisites": [
      "Basic arithmetic"
    ],
    "deliverables": [
      {
        "name": "Petty Cash Book Register (Spreadsheet)",
        "format": "XLSX",
        "description": "Multi-column analytical petty cash book with analysis columns for Conveyance, Postage, Refreshments, and Repairs."
      }
    ],
    "sampleDataFiles": [
      {
        "name": "zenith_october_petty_cash.csv",
        "size": "3.2 KB",
        "type": "csv",
        "description": "28 petty cash disbursements with voucher numbers, descriptions, amounts, and signature statuses.",
        "downloadContent": "Voucher_No,Date,Description,Category,Amount_INR,Signed_By_Manager\nV-101,2026-10-02,Tea and snacks for visiting vendor,Refreshments,340,Yes\nV-102,2026-10-04,Speed Post delivery of fabric samples,Postage & Courier,180,Yes\nV-103,2026-10-05,Emergency LED tube light replacement,Repairs & Maintenance,450,Yes\nV-104,2026-10-08,Auto rickshaw fare for stock pickup,Local Conveyance,220,Yes\nV-105,2026-10-10,Staff personal lunch expense,Personal / Unauthorized,650,No\nV-106,2026-10-12,A4 printer paper (2 reams),Office Stationery,560,Yes\nV-107,2026-10-15,Hand sanitizer and floor cleaner,Housekeeping,890,Yes\nV-108,2026-10-20,Courier charges for returned shirt,Postage & Courier,120,Yes\nV-109,2026-10-25,Store AC servicing filter wash,Repairs & Maintenance,1200,Yes\nV-110,2026-10-29,Drinking water bubble cans (5 cans),Refreshments,400,Yes"
      }
    ],
    "rubric": [
      {
        "criterion": "Classification of expense heads",
        "points": 35,
        "description": "Correctly distributed expenses across analytical columns."
      },
      {
        "criterion": "Identification of unauthorized voucher",
        "points": 35,
        "description": "Flagged V-105 (\u20b9650 personal lunch) as ineligible for company replenishment."
      },
      {
        "criterion": "Replenishment amount calculation",
        "points": 30,
        "description": "Calculated exact net reimbursement required to restore \u20b925,000 float."
      }
    ],
    "solutionWalkthrough": {
      "overview": "Total vouchers submitted: \u20b95,010. Voucher V-105 is unauthorized personal expense (\u20b9650) and rejected. Net approved expense is \u20b94,360. Cash in hand is \u20b920,640. Reimbursement cheque amount is \u20b94,360.",
      "stepByStepGuidance": [
        "Audit each voucher for valid business purpose and supervisor signature.",
        "Deduct rejected voucher V-105.",
        "Sum authorized expenses: Refreshments (740), Postage (300), Repairs (1650), Conveyance (220), Stationery (560), Housekeeping (890).",
        "Prepare reimbursement voucher for \u20b94,360."
      ],
      "sampleOutputSnippet": "Total Valid Expenses: \u20b94,360.00 | Rejected: \u20b9650.00 | Reimbursement Cheque: \u20b94,360.00",
      "commonMistakesToAvoid": [
        "Approving vouchers missing manager sign-off or containing personal expenses."
      ],
      "portfolioInclusionTip": "Demonstrates strict adherence to internal auditing standards and corporate governance."
    }
  },
  {
    "id": "proj-acct-05",
    "slug": "trial-balance-adjustments-bluewave",
    "title": "Month-End Trial Balance Balancing & Adjusting Journal Entries",
    "department": "Accounting",
    "careerSlug": "cloud-bookkeeping",
    "careerTitle": "Cloud Bookkeeping & Finance",
    "difficulty": "Intermediate",
    "estimatedHours": 5,
    "company": {
      "name": "BlueWave Tech Solutions",
      "industry": "IT Services & Cloud Hosting",
      "location": "Thiruvananthapuram, Kerala",
      "background": "BlueWave is a 30-person software agency providing web development and IT infrastructure to offshore clients.",
      "contactPerson": "Anita Thomas",
      "role": "Financial Controller"
    },
    "brief": "Examine BlueWave's unadjusted trial balance showing an out-of-balance variance of \u20b914,500. Post 5 essential month-end adjusting entries: prepaid software amortisation, accrued client billing, equipment depreciation, salary payable, and unearned retainer income to produce a balanced Adjusted Trial Balance.",
    "learningObjectives": [
      "Analyze trial balance debit-credit parity",
      "Formulate accrual vs cash timing adjustment entries",
      "Compute monthly straight-line depreciation",
      "Construct a professional 8-column accounting worksheet"
    ],
    "requiredTools": [
      "MS Excel / Google Sheets"
    ],
    "prerequisites": [
      "Double-entry accounting principles",
      "Accrual accounting concepts"
    ],
    "deliverables": [
      {
        "name": "Adjusted Trial Balance Worksheet (XLSX)",
        "format": "Spreadsheet",
        "description": "8-column worksheet featuring Unadjusted TB, Adjustments, and Adjusted TB."
      }
    ],
    "sampleDataFiles": [
      {
        "name": "bluewave_unadjusted_tb.csv",
        "size": "3.5 KB",
        "type": "csv",
        "description": "Unadjusted general ledger balances as of October 31st.",
        "downloadContent": "Account_Code,Account_Title,Debit_INR,Credit_INR\n1010,HDFC Corporate Bank,450000.00,\n1020,Accounts Receivable,280000.00,\n1030,Prepaid AWS Cloud Credits,60000.00,\n1040,Computer Hardware & Laptops,360000.00,\n1050,Accumulated Depreciation - Laptops,,72000.00\n2010,Accounts Payable,,145000.00\n2020,Unearned Client Retainers,,90000.00\n3010,Share Capital,,500000.00\n3020,Retained Earnings,,218500.00\n4010,Software Development Revenue,,420000.00\n5010,Staff Salaries,240000.00,\n5020,Office Internet & Utilities,32000.00,\n5030,Rent Expense,23500.00,"
      }
    ],
    "rubric": [
      {
        "criterion": "Identification of initial posting discrepancy",
        "points": 25,
        "description": "Correctly tracked source of initial unadjusted trial balance variance."
      },
      {
        "criterion": "Depreciation and Prepaid adjustments",
        "points": 25,
        "description": "Accurately recorded \u20b96,000 monthly depreciation and \u20b915,000 AWS consumption."
      },
      {
        "criterion": "Accruals and unearned revenue postings",
        "points": 25,
        "description": "Accurately adjusted \u20b945,000 accrued revenue and \u20b930,000 earned retainer portion."
      },
      {
        "criterion": "Balanced Adjusted Trial Balance",
        "points": 25,
        "description": "Total debits equal total credits on adjusted worksheet."
      }
    ],
    "solutionWalkthrough": {
      "overview": "Post adjusting entries: Dr AWS Hosting Expense \u20b915,000 / Cr Prepaid AWS \u20b915,000; Dr Depreciation Expense \u20b96,000 / Cr Accumulated Depreciation \u20b96,000; Dr Accounts Receivable \u20b945,000 / Cr Revenue \u20b945,000; Dr Unearned Retainer \u20b930,000 / Cr Revenue \u20b930,000. The adjusted trial balance balances perfectly.",
      "stepByStepGuidance": [
        "Verify unadjusted debits and credits.",
        "Enter adjustments in debit and credit adjustment columns.",
        "Calculate adjusted balance for each ledger account.",
        "Confirm sum(debits) === sum(credits)."
      ],
      "sampleOutputSnippet": "Adjusted Trial Balance Total: \u20b915,48,500.00 (Debits = Credits, Variance = 0.00)",
      "commonMistakesToAvoid": [
        "Confusing unearned revenue (liability) with accrued revenue (asset)."
      ],
      "portfolioInclusionTip": "This 8-column worksheet proves you understand formal accounting cycle workflows beyond basic data entry."
    }
  },
  {
    "id": "proj-ecom-01",
    "slug": "shopify-catalog-sku-audit-lumina",
    "title": "E-commerce Catalog Audit, Taxonomy & SKU Standardization",
    "department": "E-commerce",
    "careerSlug": "e-commerce-operations",
    "careerTitle": "E-commerce Operations Specialist",
    "difficulty": "Beginner",
    "estimatedHours": 3,
    "company": {
      "name": "Lumina Home Decor",
      "industry": "Handicrafts & Modern Furnishings",
      "location": "Jaipur / Remote",
      "background": "Lumina sells 500+ handcrafted home items across Shopify, Amazon, and Myntra. Recent rapid uploads resulted in inconsistent titles, missing barcode/SKU values, and inaccurate weight declarations leading to courier shipping penalties.",
      "contactPerson": "Vikram Sethi",
      "role": "Head of E-commerce"
    },
    "brief": "Perform a catalog audit on a 50-product inventory spreadsheet. Establish a structured SKU taxonomy (BRAND-CAT-MATERIAL-COLOR-SIZE), resolve missing attribute fields, format SEO-friendly product titles, and calculate volumetric weights to eliminate shipping carrier surcharges.",
    "learningObjectives": [
      "Design scalable e-commerce SKU naming architectures",
      "Normalize multi-channel product catalog attributes",
      "Calculate dead weight vs volumetric shipping weight (L x W x H / 5000)",
      "Prepare clean bulk import CSV files for Shopify"
    ],
    "requiredTools": [
      "Google Sheets / MS Excel",
      "Shopify CSV Format Guide"
    ],
    "prerequisites": [
      "Spreadsheet filtering and text functions (CONCATENATE, UPPER, TRIM)"
    ],
    "deliverables": [
      {
        "name": "Clean Shopify Product Import Sheet (CSV)",
        "format": "CSV File",
        "description": "Validated 50-row product catalog with standardized SKUs, clean titles, tags, and volumetric weights."
      },
      {
        "name": "Catalog Taxonomy Reference Guide (PDF)",
        "format": "Document",
        "description": "1-page standard operating procedure for future product uploads."
      }
    ],
    "sampleDataFiles": [
      {
        "name": "lumina_raw_catalog_export.csv",
        "size": "6.8 KB",
        "type": "csv",
        "description": "50 raw unstandardized product listings with inconsistent naming, missing weights, and blank SKUs.",
        "downloadContent": "Raw_ID,Title,Category,Color,Material,Dimensions_CM,Dead_Weight_KG,Price_INR\n101,Ceramic vase blue,Vases,Royal Blue,Clay,\"15x15x30\",0.8,1299\n102,Cotton Throw Blanket - Boho,Bedding,Beige,Organic Cotton,\"120x150x5\",0.6,1899\n103,brass candle holder tall,Decor,Gold,Cast Brass,\"10x10x25\",1.2,1450\n104,JUTE FLOOR RUG CIRCULAR,Rugs,Natural Tan,Braided Jute,\"100x100x2\",2.5,2499\n105,macrame wall hanging large,Wall Decor,Off White,Cotton Cord,\"60x80x3\",0.4,1199"
      }
    ],
    "rubric": [
      {
        "criterion": "SKU Taxonomy standard adherence",
        "points": 30,
        "description": "Generated clean SKUs adhering to LUM-CAT-MAT-CLR format (e.g., LUM-VAS-CLY-BLU-101)."
      },
      {
        "criterion": "Title normalization and capitalization",
        "points": 25,
        "description": "Transformed all titles into Title Case with clear material and color descriptors."
      },
      {
        "criterion": "Volumetric shipping weight calculation",
        "points": 25,
        "description": "Accurately computed Volumetric Weight = (L*W*H)/5000 and highlighted cases where volumetric exceeds dead weight."
      },
      {
        "criterion": "Data cleanliness and Shopify field mapping",
        "points": 20,
        "description": "No blank required cells; properly formatted tags and collection handles."
      }
    ],
    "solutionWalkthrough": {
      "overview": "Cleaned up all 50 product records. Used Excel formulas `=UPPER(CONCATENATE(\"LUM-\", LEFT(Category,3), \"-\", LEFT(Material,3), \"-\", LEFT(Color,3), \"-\", Raw_ID))` for bulletproof SKU uniqueness.",
      "stepByStepGuidance": [
        "Clean raw text using TRIM and PROPER functions.",
        "Parse dimension strings into Length, Width, Height columns.",
        "Calculate Volumetric Weight = (L*W*H)/5000. Apply MAX(Dead_Weight, Volumetric_Weight) as Chargeable Weight.",
        "Export clean CSV with Shopify required column headers."
      ],
      "sampleOutputSnippet": "SKU: LUM-VAS-CLY-BLU-101 | Chargeable Weight: 1.35 KG (Volumetric overrode 0.8 KG Dead Weight)",
      "commonMistakesToAvoid": [
        "Ignoring volumetric weight, causing unexpected freight under-recovery penalties."
      ],
      "portfolioInclusionTip": "Showcase a before-and-after screenshot of this spreadsheet in your portfolio to prove your data hygiene capabilities."
    }
  },
  {
    "id": "proj-ecom-02",
    "slug": "inventory-reorder-safety-stock-urbantrend",
    "title": "Inventory Velocity Analysis, Safety Stock & Reorder Forecasting",
    "department": "E-commerce",
    "careerSlug": "e-commerce-operations",
    "careerTitle": "E-commerce Operations Specialist",
    "difficulty": "Intermediate",
    "estimatedHours": 4,
    "company": {
      "name": "UrbanTrend Apparel",
      "industry": "Fast Fashion & Athleisure",
      "location": "Mumbai, Maharashtra",
      "background": "UrbanTrend manages an online brand delivering 8,000 orders monthly. Stockouts on high-demand hoodies cause lost sales, while over-ordering seasonal t-shirts traps working capital in warehouses.",
      "contactPerson": "Tanya Kapoor",
      "role": "Supply Chain Director"
    },
    "brief": "Analyze 90-day SKU sales velocity, supplier lead times, and current warehouse stock for 30 apparel items. Calculate Average Daily Sales (ADS), determine Safety Stock cushions, pinpoint Reorder Points (ROP), and draft Purchase Orders for items facing stockout risk within 14 days.",
    "learningObjectives": [
      "Calculate Average Daily Sales (ADS) velocity",
      "Formulate Reorder Points: ROP = (Lead Time * ADS) + Safety Stock",
      "Identify imminent stockouts based on Days of Inventory Remaining (DOIR)",
      "Generate formal purchase orders for apparel manufacturers"
    ],
    "requiredTools": [
      "Excel / Google Sheets"
    ],
    "prerequisites": [
      "Spreadsheet math",
      "Inventory management concepts"
    ],
    "deliverables": [
      {
        "name": "Inventory Replenishment Dashboard (XLSX)",
        "format": "Spreadsheet",
        "description": "Dynamic spreadsheet with automated color-coded alerts (Critical, Reorder Now, Healthy, Overstocked)."
      },
      {
        "name": "Supplier Purchase Order Batch (PDF)",
        "format": "Document",
        "description": "Formal PO specifying quantities, target delivery dates, and negotiated unit costs."
      }
    ],
    "sampleDataFiles": [
      {
        "name": "urbantrend_inventory_velocity.csv",
        "size": "4.8 KB",
        "type": "csv",
        "description": "30 apparel SKUs with 90-day sales volume, current on-hand stock, lead times, and MOQ.",
        "downloadContent": "SKU,Product_Name,Category,Sales_Last_90_Days,Current_Stock,Supplier_Lead_Days,MOQ_Units,Unit_Cost_INR\nUT-HD-BLK-M,Oversized Fleece Hoodie Black M,Hoodies,1080,85,14,200,650\nUT-HD-BLK-L,Oversized Fleece Hoodie Black L,Hoodies,1350,60,14,200,650\nUT-TS-WHT-S,Heavyweight Boxy Tee White S,T-Shirts,450,140,10,150,320\nUT-TS-WHT-M,Heavyweight Boxy Tee White M,T-Shirts,990,45,10,150,320\nUT-JG-GRY-L,Cargo Fleece Jogger Grey L,Pants,630,22,21,100,520\nUT-CP-NVY-OS,Embroidered Dad Cap Navy,Caps,270,110,7,50,180"
      }
    ],
    "rubric": [
      {
        "criterion": "Accurate Average Daily Sales calculation",
        "points": 25,
        "description": "Divided 90-day sales by 90 to establish daily velocity."
      },
      {
        "criterion": "Reorder point and safety stock precision",
        "points": 30,
        "description": "Applied standard ROP formula with 5-day safety buffer."
      },
      {
        "criterion": "Stockout urgency classification",
        "points": 25,
        "description": "Correctly flagged UT-JG-GRY-L and UT-TS-WHT-M as critical reorders under 7 days of stock."
      },
      {
        "criterion": "MOQ rounding in Purchase Orders",
        "points": 20,
        "description": "Rounded PO quantities up to supplier Minimum Order Quantity increments."
      }
    ],
    "solutionWalkthrough": {
      "overview": "For UT-HD-BLK-L: ADS = 15 units/day. Lead time = 14 days. Lead time demand = 210 units. With 5-day safety stock (75 units), ROP = 285 units. Current stock is 60 units (only 4 days left!). Imminent stockout. Reorder immediately.",
      "stepByStepGuidance": [
        "ADS = Sales_Last_90_Days / 90.",
        "DOIR = Current_Stock / ADS.",
        "Safety Stock = ADS * 5 days.",
        "ROP = (ADS * Supplier_Lead_Days) + Safety Stock.",
        "If Current_Stock <= ROP, trigger Reorder."
      ],
      "sampleOutputSnippet": "UT-JG-GRY-L: ADS 7/day, Stock 22 units = 3.1 Days Left! Status: CRITICAL STOCKOUT IMMINENT.",
      "commonMistakesToAvoid": [
        "Failing to account for supplier lead time when evaluating stock adequacy."
      ],
      "portfolioInclusionTip": "Include this inventory forecast in your portfolio to demonstrate revenue-protection mindset to hiring managers."
    }
  },
  {
    "id": "proj-ecom-03",
    "slug": "festive-sale-discount-matrix-spiceroots",
    "title": "Festive Promotion Discount Matrix & Margin Protection Modeling",
    "department": "E-commerce",
    "careerSlug": "e-commerce-operations",
    "careerTitle": "E-commerce Operations Specialist",
    "difficulty": "Intermediate",
    "estimatedHours": 3,
    "company": {
      "name": "SpiceRoots Organics",
      "industry": "Specialty Spices & Gourmet Food",
      "location": "Kochi, Kerala",
      "background": "SpiceRoots exports GI-tagged Wayanad cardamom, Tellicherry black pepper, and artisanal honey. For Diwali and New Year, they plan tiered discounts (Buy 2 Get 15%, Buy 4 Get 25%) while maintaining a minimum gross margin of 35% on every SKU.",
      "contactPerson": "George Mathew",
      "role": "Founder & Managing Partner"
    },
    "brief": "Model a 15-product festive discount schedule. Calculate cost of goods sold (COGS), marketplace commission fees (18%), packaging & shipping costs, and test proposed discount tiers. Flag any product-bundle combination that breaches the mandatory 35% minimum net margin threshold.",
    "learningObjectives": [
      "Build comprehensive unit economic models for direct-to-consumer (D2C) brands",
      "Calculate contribution margins after platform fees, payment gateway cuts, and logistics",
      "Set up conditional formatting alerts for margin violations in Excel",
      "Deliver executive pricing recommendations"
    ],
    "requiredTools": [
      "MS Excel / Google Sheets"
    ],
    "prerequisites": [
      "Spreadsheet percentages and profit formulas"
    ],
    "deliverables": [
      {
        "name": "Promotional Margin Simulator (Spreadsheet)",
        "format": "XLSX",
        "description": "Interactive pricing model showing Gross Margin %, Platform Fees, Shipping, and Net Margin %."
      }
    ],
    "sampleDataFiles": [
      {
        "name": "spiceroots_product_margins.csv",
        "size": "3.9 KB",
        "type": "csv",
        "description": "15 products with manufacturing cost, packaging cost, shipping estimate, and current retail price.",
        "downloadContent": "SKU,Product_Title,Retail_Price_INR,COGS_INR,Packaging_INR,Shipping_INR,Platform_Fee_Pct\nSR-CD-500,Wayanad Green Cardamom 500g,1800,950,45,90,0.18\nSR-PP-1000,Tellicherry Bold Black Pepper 1kg,1200,520,35,110,0.18\nSR-HN-500,Wild Forest Honey 500g,650,260,40,95,0.18\nSR-CL-250,Organic Whole Cloves 250g,450,210,25,75,0.18\nSR-TR-500,Lakadong High Curcumin Turmeric 500g,380,140,25,85,0.18"
      }
    ],
    "rubric": [
      {
        "criterion": "Accuracy of unit economic calculations",
        "points": 30,
        "description": "Correctly factored COGS + Packaging + Shipping + Platform Fee (18% of selling price)."
      },
      {
        "criterion": "Identification of margin violation SKUs",
        "points": 30,
        "description": "Identified that SR-CL-250 and SR-TR-500 drop below 35% net margin under the 25% discount tier."
      },
      {
        "criterion": "Bundle pricing strategy recommendation",
        "points": 25,
        "description": "Formulated alternative minimum order value (MOV) requirement or bundle rules."
      },
      {
        "criterion": "Visual model layout and readability",
        "points": 15,
        "description": "Clean currency formatting and clear red/green status highlights."
      }
    ],
    "solutionWalkthrough": {
      "overview": "When SR-TR-500 is discounted 25% to \u20b9285: Platform fee takes \u20b951.30, Shipping is \u20b985, Packaging is \u20b925, COGS is \u20b9140. Total Cost = \u20b9301.30. The company actually loses \u20b916.30 per sale! Recommending bundle threshold or maximum 10% discount on low-ticket items.",
      "stepByStepGuidance": [
        "Discounted Selling Price = Retail_Price * (1 - Discount%).",
        "Platform Fee = Discounted_Price * 18%.",
        "Net Realization = Discounted_Price - Platform_Fee - Shipping - Packaging - COGS.",
        "Net Margin % = Net Realization / Discounted_Price.",
        "Highlight rows where Net Margin % < 35%."
      ],
      "sampleOutputSnippet": "SR-TR-500 at 25% OFF -> Net Profit: -\u20b916.30 (-5.7% Margin). Alert: HALT PROMOTION.",
      "commonMistakesToAvoid": [
        "Applying platform fee to original retail price instead of discounted checkout price."
      ],
      "portfolioInclusionTip": "E-commerce brands prize operators who understand profitability, not just raw sales."
    }
  },
  {
    "id": "proj-ecom-04",
    "slug": "returns-and-refund-triage-freshdirect",
    "title": "Customer Return, Exchange & Refund Triage Matrix",
    "department": "E-commerce",
    "careerSlug": "e-commerce-operations",
    "careerTitle": "E-commerce Operations Specialist",
    "difficulty": "Beginner",
    "estimatedHours": 3,
    "company": {
      "name": "FreshDirect Mart",
      "industry": "Specialty Kitchenware & Gadgets",
      "location": "Hyderabad, Telangana",
      "background": "FreshDirect processes 250 return requests weekly across kitchen blenders, cookware, and ceramic knives. Operational delays in inspecting returned items lead to customer complaints and chargebacks.",
      "contactPerson": "Sanjay Rao",
      "role": "Customer Experience Director"
    },
    "brief": "Triage 25 customer return submissions. Categorize each case by condition (transit damage, customer change of mind, manufacturer defect, fraudulent return), assign appropriate resolution (instant refund, replacement dispatch, refurbishment restocking, or rejection), and prepare courier reverse pickup orders.",
    "learningObjectives": [
      "Apply e-commerce Return Merchandise Authorization (RMA) workflows",
      "Assess photographic evidence for transit damage claims vs user misuse",
      "Compute restocking fees and reverse logistics deductibles",
      "Draft empathetic yet firm customer notification emails"
    ],
    "requiredTools": [
      "Google Sheets / Excel",
      "Helpdesk Simulator"
    ],
    "prerequisites": [
      "Basic analytical reasoning"
    ],
    "deliverables": [
      {
        "name": "RMA Return Triage Register (Spreadsheet)",
        "format": "XLSX",
        "description": "Decision log with Return Reason, Evidence Check, Approved Action, and Financial Impact."
      }
    ],
    "sampleDataFiles": [
      {
        "name": "freshdirect_return_requests.csv",
        "size": "4.1 KB",
        "type": "csv",
        "description": "25 return tickets with customer descriptions, days since delivery, photo verification status, and order value.",
        "downloadContent": "Ticket_ID,Order_ID,Item_Name,Days_Delivered,Customer_Reason,Photo_Attached,Box_Opened,Item_Value_INR\nRMA-101,FD-9941,Cast Iron Skillet 10-inch,3,Handle cracked during transit,Yes (Shows cracked iron),Yes,1899\nRMA-102,FD-9945,Electric Spice Grinder,18,Changed my mind - color does not match,No,No,1250\nRMA-103,FD-9950,Chef Knife Set 5-Piece,2,Blade chipped on arrival,Yes (Shows pristine blade no chip),Yes,2499\nRMA-104,FD-9958,Cold Press Juicer,6,Motor stops after 30 seconds,Yes (Video shows motor jam),Yes,6499\nRMA-105,FD-9962,Silicone Spatula Set,24,Want to return,No,Yes,450"
      }
    ],
    "rubric": [
      {
        "criterion": "Return policy compliance auditing",
        "points": 35,
        "description": "Correctly rejected RMA-102 (exceeded 7-day window) and RMA-105 (exceeded 15-day limit)."
      },
      {
        "criterion": "Fraud and mismatch identification",
        "points": 35,
        "description": "Flagged RMA-103 for evidence mismatch (customer claims chip but photo shows undamaged blade)."
      },
      {
        "criterion": "Immediate resolution routing",
        "points": 30,
        "description": "Approved immediate replacement for transit damage RMA-101 and warranty RMA-104."
      }
    ],
    "solutionWalkthrough": {
      "overview": "RMA-101 is verified transit damage: approve instant free replacement. RMA-102 is past 7-day return window: politely decline. RMA-103 photo contradicts customer claim: request clear close-up photo before decision. RMA-104 is within warranty: dispatch technician or unit replacement.",
      "stepByStepGuidance": [
        "Check delivery date against standard 7-day return policy.",
        "Verify attached photo/video matches reported defect.",
        "Classify into: Replace, Refund, Repair, or Reject.",
        "Log financial charge against logistics insurance for damaged items."
      ],
      "sampleOutputSnippet": "RMA-101: Approved Replacement | RMA-102: Rejected (Overdue) | RMA-103: Evidence Hold",
      "commonMistakesToAvoid": [
        "Approving returns beyond return policy window without senior approval."
      ],
      "portfolioInclusionTip": "Proves you can balance customer satisfaction with protecting company cash flow from fraudulent returns."
    }
  },
  {
    "id": "proj-ecom-05",
    "slug": "amazon-seo-listing-optimization-novagadgets",
    "title": "Amazon / Marketplace Product Listing Optimization & A+ Content Copy",
    "department": "E-commerce",
    "careerSlug": "e-commerce-operations",
    "careerTitle": "E-commerce Operations Specialist",
    "difficulty": "Beginner",
    "estimatedHours": 3,
    "company": {
      "name": "NovaGadgets India",
      "industry": "Consumer Electronics & Mobile Accessories",
      "location": "Bengaluru, Karnataka",
      "background": "NovaGadgets sells wireless earbuds, GaN fast chargers, and smart car mounts on Amazon India. Several top products have dropped in search rank due to outdated keywords and poor title structures.",
      "contactPerson": "Kavita Rao",
      "role": "Brand Marketing Lead"
    },
    "brief": "Optimize the Amazon product listing for NovaGadgets' flagship '65W 3-Port GaN Fast Charger'. Rewrite the 200-character SEO title, compose 5 high-converting feature bullet points, draft an A+ Content copy storyboard, and formulate 249 bytes of backend search terms.",
    "learningObjectives": [
      "Structure Amazon SEO-compliant titles (Brand + Model + Key Feature + Specs + Compatibility)",
      "Draft customer-centric bullet points highlighting benefits before technical specs",
      "Format backend search terms under 249 bytes without repeating title words",
      "Structure modular A+ Content layouts"
    ],
    "requiredTools": [
      "Google Docs / MS Word",
      "Character / Byte Counter Tool"
    ],
    "prerequisites": [
      "Basic English copywriting"
    ],
    "deliverables": [
      {
        "name": "Amazon Listing Copy Deck (DOCX / PDF)",
        "format": "Document",
        "description": "Complete copy specification including Title, 5 Bullets, Backend Keywords, and A+ Storyboard."
      }
    ],
    "sampleDataFiles": [
      {
        "name": "novagadgets_charger_specs.json",
        "size": "2.4 KB",
        "type": "json",
        "description": "Technical product specifications, competitor keywords, and customer question logs.",
        "downloadContent": "{\n  \"brand\": \"NovaGadgets\",\n  \"model\": \"VoltPro 65W\",\n  \"tech\": \"Gallium Nitride (GaN III)\",\n  \"ports\": \"2x USB-C (PD 3.0), 1x USB-A (QC 4.0)\",\n  \"compatibilities\": [\"MacBook Pro\", \"iPhone 15/16\", \"Samsung Galaxy S24\", \"Dell XPS\", \"iPad Air\"],\n  \"safetyFeatures\": [\"Over-voltage protection\", \"Temperature control\", \"Short-circuit prevention\"],\n  \"topSearchKeywords\": [\"65w gan charger\", \"type c laptop adapter\", \"fast charger for iphone and macbook\", \"multi port usb c plug\"]\n}"
      }
    ],
    "rubric": [
      {
        "criterion": "Amazon Title length and keyword syntax",
        "points": 30,
        "description": "Title between 150-199 characters, clean separator pipes, zero prohibited promotional words."
      },
      {
        "criterion": "5 Benefit-driven bullet points",
        "points": 30,
        "description": "Capitalized lead-in phrases (e.g. LIGHTNING-FAST 65W CHARGING) followed by benefit."
      },
      {
        "criterion": "Backend search term compliance",
        "points": 25,
        "description": "Exact byte count under 250 bytes, space-separated, no punctuation or duplicate words."
      },
      {
        "criterion": "A+ Content structural flow",
        "points": 15,
        "description": "Clear visual storyboard with comparison charts and brand callouts."
      }
    ],
    "solutionWalkthrough": {
      "overview": "Crafted title: 'NovaGadgets VoltPro 65W GaN Charger - 3-Port Fast Type C Adapter for MacBook Pro, iPhone 16/15, Galaxy S24, iPad - Foldable Travel Plug (White)'. Character count = 172. Clear, informative, and packed with high-intent keywords.",
      "stepByStepGuidance": [
        "Draft title following brand formula.",
        "Create 5 bullets: 1) 65W High-Speed Output, 2) GaN III Thermal Efficiency, 3) 3-in-1 Simultaneous Charging, 4) Universal Device Compatibility, 5) Multi-Shield Safety Certification.",
        "Filter keywords for backend field: ensure no words already in title are repeated.",
        "Review against Amazon Style Guide."
      ],
      "sampleOutputSnippet": "Title: NovaGadgets VoltPro 65W GaN Charger... | Backend Terms: power delivery charging station compact wall brick travel",
      "commonMistakesToAvoid": [
        "Adding forbidden promotional claims like 'Best Seller' or '#1 Rated' in Amazon listings."
      ],
      "portfolioInclusionTip": "Highlight this copy deck as proof of your digital marketing and e-commerce conversion copywriting skill."
    }
  },
  {
    "id": "proj-vo-01",
    "slug": "executive-calendar-deconfliction-horizon",
    "title": "Multi-Timezone Executive Calendar Scheduling & De-confliction",
    "department": "Virtual Office",
    "careerSlug": "virtual-assistance",
    "careerTitle": "Virtual Assistance & Remote Admin",
    "difficulty": "Beginner",
    "estimatedHours": 3,
    "company": {
      "name": "Horizon Venture Partners",
      "industry": "Early-Stage Venture Capital",
      "location": "London / Singapore / Bengaluru",
      "background": "Horizon's Managing Director (David Chen) travels frequently between London (GMT), Dubai (GST +4), and Singapore (SGT +8). He receives 30+ weekly meeting requests from startup founders, LP investors, and board members.",
      "contactPerson": "David Chen",
      "role": "Managing Partner"
    },
    "brief": "Coordinate David's weekly calendar for an upcoming week in London. Review 8 conflicting meeting requests across 4 time zones (EST, GMT, GST, SGT). Resolve scheduling overlaps, respect executive focus time blocks (no meetings before 9 AM GMT), insert travel buffer windows, and compose professional scheduling confirmation emails.",
    "learningObjectives": [
      "Master cross-timezone scheduling math (EST, GMT, GST, SGT, IST)",
      "Protect executive productivity with buffer times and focus blocks",
      "De-conflict double-bookings with diplomatic client rescheduling",
      "Draft calendar invites with Zoom/Teams links and agendas"
    ],
    "requiredTools": [
      "Google Calendar / Outlook Simulator",
      "World Time Buddy"
    ],
    "prerequisites": [
      "Time zone calculation basics"
    ],
    "deliverables": [
      {
        "name": "Optimized Weekly Calendar Schedule (Spreadsheet / ICS)",
        "format": "Schedule Document",
        "description": "Conflict-free Monday-to-Friday schedule with color-coded tags for Investors, Portfolio, and Internal."
      },
      {
        "name": "Scheduling Correspondence Pack (PDF)",
        "format": "Document",
        "description": "4 professional rescheduling emails sent to attendees with polite alternative slot offerings."
      }
    ],
    "sampleDataFiles": [
      {
        "name": "david_calendar_requests.json",
        "size": "3.1 KB",
        "type": "json",
        "description": "8 incoming meeting invitations with VIP priority ratings, requested durations, and participant locations.",
        "downloadContent": "[\n  {\"id\": \"M-1\", \"title\": \"Board Meeting - FinTech Corp\", \"vip\": \"High\", \"durationMin\": 60, \"requester\": \"Sarah Lin (Singapore SGT)\", \"requestedSlot\": \"Tuesday 2:00 PM SGT (6:00 AM GMT - VIOLATION)\"},\n  {\"id\": \"M-2\", \"title\": \"LP Investor Briefing - Temasek Rep\", \"vip\": \"Critical\", \"durationMin\": 45, \"requester\": \"Mark Tan (Singapore SGT)\", \"requestedSlot\": \"Tuesday 10:00 AM GMT (6:00 PM SGT)\"},\n  {\"id\": \"M-3\", \"title\": \"Pitch Deck Review - HealthAI Founder\", \"vip\": \"Medium\", \"durationMin\": 30, \"requester\": \"Dr. Aris (New York EST)\", \"requestedSlot\": \"Tuesday 2:00 PM GMT (9:00 AM EST)\"},\n  {\"id\": \"M-4\", \"title\": \"Dentist Personal Appointment\", \"vip\": \"Personal Fixed\", \"durationMin\": 60, \"requester\": \"Harley St Clinic\", \"requestedSlot\": \"Tuesday 1:30 PM GMT to 2:30 PM GMT (CONFLICT WITH M-3)\"}\n]"
      }
    ],
    "rubric": [
      {
        "criterion": "Timezone conversion precision",
        "points": 30,
        "description": "Correctly converted Singapore and New York times to London GMT without errors."
      },
      {
        "criterion": "Conflict resolution and focus time preservation",
        "points": 30,
        "description": "Shifted Singapore Board Meeting to acceptable GMT window (9:30 AM GMT / 5:30 PM SGT)."
      },
      {
        "criterion": "Rescheduled overlapping appointment",
        "points": 25,
        "description": "Moved HealthAI Pitch to 3:30 PM GMT to give David 60 minutes after his dental appointment."
      },
      {
        "criterion": "Professional etiquette in rescheduling notes",
        "points": 15,
        "description": "Polite, proactive communication offering 2 specific alternate slots."
      }
    ],
    "solutionWalkthrough": {
      "overview": "M-1 was requested at 6:00 AM GMT (unacceptable). Shifted to 9:30 AM GMT (5:30 PM SGT). M-2 kept at 10:30 AM GMT. Dentist kept at 1:30 PM - 2:30 PM. M-3 rescheduled from 2:00 PM to 3:30 PM GMT (10:30 AM EST). All parties satisfied.",
      "stepByStepGuidance": [
        "Establish base timezone: London GMT.",
        "Map each participant's local working hours (9 AM - 6 PM local).",
        "Find overlapping working windows.",
        "Insert 15-minute bio/prep buffers between back-to-back video calls."
      ],
      "sampleOutputSnippet": "Tuesday Final: 09:30 GMT M-1 (Singapore) | 10:30 GMT M-2 (LP) | 13:30 GMT Dentist | 15:30 GMT M-3 (NY)",
      "commonMistakesToAvoid": [
        "Booking back-to-back calls without buffer or forgetting daylight saving offsets."
      ],
      "portfolioInclusionTip": "Every senior executive needs an assistant who can manage calendars flawlessly. Include this case study in your VA portfolio."
    }
  },
  {
    "id": "proj-vo-02",
    "slug": "executive-inbox-triage-globalbridge",
    "title": "High-Volume Executive Inbox Triage & Canned Response Routing",
    "department": "Virtual Office",
    "careerSlug": "virtual-assistance",
    "careerTitle": "Virtual Assistance & Remote Admin",
    "difficulty": "Beginner",
    "estimatedHours": 3,
    "company": {
      "name": "GlobalBridge Consulting",
      "industry": "International Trade & Supply Chain Advisory",
      "location": "Dubai / Remote",
      "background": "The Senior Partner receives 120+ daily emails ranging from confidential contract bids to cold vendor sales spam and urgent client escalations.",
      "contactPerson": "Tariq Al-Mansoor",
      "role": "Senior Partner"
    },
    "brief": "Triage a simulated batch of 15 incoming executive emails. Apply color-coded labels (Urgent Action, VIP Client, Delegate to Team, FYI Read Later, Spam/Archive), draft 3 canned executive responses, and compile an end-of-day 5-bullet Executive Briefing memo.",
    "learningObjectives": [
      "Implement the Inbox Zero methodology in executive support",
      "Categorize correspondence based on business urgency and sender authority",
      "Draft professional, ghostwritten executive replies maintaining CEO tone",
      "Create concise daily executive briefings"
    ],
    "requiredTools": [
      "Email Simulator / Google Workspace",
      "Markdown / Docs"
    ],
    "prerequisites": [
      "Professional business writing in English"
    ],
    "deliverables": [
      {
        "name": "Inbox Triage Matrix (Spreadsheet)",
        "format": "Spreadsheet",
        "description": "Log of 15 emails with Sender, Subject, Assigned Category, Action Taken, and Urgency."
      },
      {
        "name": "Daily Executive 5-Bullet Briefing (PDF)",
        "format": "Document",
        "description": "Crisp end-of-day summary informing the partner of critical updates without information overload."
      }
    ],
    "sampleDataFiles": [
      {
        "name": "globalbridge_inbox_dump.json",
        "size": "4.5 KB",
        "type": "json",
        "description": "15 full email messages with sender addresses, timestamps, and message bodies.",
        "downloadContent": "[\n  {\"id\": \"EM-01\", \"sender\": \"cfo@emiratesport.ae\", \"subject\": \"URGENT: Port Logistics Agreement Signature Needed by 5 PM\", \"body\": \"Tariq, our legal team completed final review. Please review and countersign attached appendix before 5 PM GST.\"},\n  {\"id\": \"EM-02\", \"sender\": \"deals@saassoftware.com\", \"subject\": \"Boost your team sales by 400% with our AI dialer!\", \"body\": \"Hi Tariq, quick question: are you happy with your current CRM? Let's hop on a 15-minute demo call...\"},\n  {\"id\": \"EM-03\", \"sender\": \"n.menon@globalbridge.com\", \"subject\": \"Draft slides for Thursday client workshop\", \"body\": \"Hi Tariq, I have uploaded the draft deck to Google Drive. Let me know if you want any revisions before Wednesday.\"},\n  {\"id\": \"EM-04\", \"sender\": \"complaints@clientfirst.com\", \"subject\": \"Discrepancy in invoice GB-8819\", \"body\": \"Dear Mr. Tariq, we noticed an extra charge of $3,500 on our recent statement. Please look into this immediately.\"}\n]"
      }
    ],
    "rubric": [
      {
        "criterion": "Classification accuracy",
        "points": 35,
        "description": "Correctly labeled EM-01 as Critical/Immediate, EM-02 as Spam/Archive, EM-03 as Team Delegated, and EM-04 as VIP Escalation."
      },
      {
        "criterion": "Tone and quality of drafted replies",
        "points": 35,
        "description": "Drafted responses match professional executive register without overcommitting."
      },
      {
        "criterion": "Executive briefing conciseness",
        "points": 30,
        "description": "End-of-day memo prioritizes top 3 decision items in under 200 words."
      }
    ],
    "solutionWalkthrough": {
      "overview": "EM-01 flagged for immediate WhatsApp notification to partner. EM-02 archived directly without bothering partner. EM-03 delegated to junior consultant. EM-04 forwarded to billing team with polite holding reply to client.",
      "stepByStepGuidance": [
        "Scan senders to identify key clients, board members, and legal notices.",
        "Apply the 4 D's: Do, Delegate, Defer, Delete.",
        "Draft holding replies so clients know their message was received.",
        "Summarize key decisions required into the EOD Briefing."
      ],
      "sampleOutputSnippet": "EOD Memo: 1) Emirates Port contract pending your signature. 2) ClientFirst $3.5k billing query handed to Accounts.",
      "commonMistakesToAvoid": [
        "Forwarding cold sales emails to the executive's attention."
      ],
      "portfolioInclusionTip": "Add the Executive Briefing template to your portfolio to show your ability to save executives 10+ hours per week."
    }
  },
  {
    "id": "proj-vo-03",
    "slug": "client-onboarding-tracker-sterling",
    "title": "Corporate Client Onboarding Tracker & KYC Compliance Index",
    "department": "Virtual Office",
    "careerSlug": "crm-data-management",
    "careerTitle": "CRM & Customer Data Management",
    "difficulty": "Intermediate",
    "estimatedHours": 4,
    "company": {
      "name": "Sterling Legal & Tax Advisory",
      "industry": "Corporate Law & Tax Compliance",
      "location": "New Delhi / Remote",
      "background": "Sterling advises 40 new corporate entities monthly on incorporation, GST registration, and trademark filings. Incomplete KYC documentation frequently stalls legal submissions.",
      "contactPerson": "Adv. Rajiv Malhotra",
      "role": "Managing Partner"
    },
    "brief": "Build a centralized Client Onboarding Tracker in Google Sheets. Audit 20 pending client onboarding profiles against mandatory statutory compliance checklists (PAN, Certificate of Incorporation, Director KYC, Bank Cheque). Configure conditional formatting progress bars and generate an automated missing-document reminder email script.",
    "learningObjectives": [
      "Design structured CRM onboarding pipelines in spreadsheets",
      "Implement data validation dropdowns (Pending, Verified, Rejected)",
      "Build automated completion percentage progress bars with formulas",
      "Draft standardized compliance chase emails"
    ],
    "requiredTools": [
      "Google Sheets / MS Excel",
      "Email Client"
    ],
    "prerequisites": [
      "Spreadsheet formulas (COUNTIF, COUNTA, IF)"
    ],
    "deliverables": [
      {
        "name": "Client Onboarding Master Tracker (XLSX)",
        "format": "Spreadsheet",
        "description": "Color-coded tracking dashboard with document checklist statuses and completion percentages."
      },
      {
        "name": "Document Reminder Email Templates (DOCX)",
        "format": "Document",
        "description": "3-stage escalation email templates for missing compliance records."
      }
    ],
    "sampleDataFiles": [
      {
        "name": "sterling_client_kyc_data.csv",
        "size": "4.2 KB",
        "type": "csv",
        "description": "20 client records with document receipt dates, status flags, and assigned legal associate.",
        "downloadContent": "Client_ID,Company_Name,Director_Name,PAN_Verified,COI_Verified,Director_KYC,Cancelled_Cheque,Assigned_Associate\nCLI-101,Aura Tech Labs Pvt Ltd,Vikram Rao,Yes,Yes,Yes,Yes,Neha S.\nCLI-102,GreenLeaf Agritech LLP,Suresh Nair,Yes,Yes,Pending,Pending,Amit P.\nCLI-103,Boutique Stays Hospitality,Ananya Roy,Yes,Pending,Pending,Yes,Neha S.\nCLI-104,CloudVibe Media Ltd,Rohan Joshi,Pending,Pending,Pending,Pending,Rajiv M."
      }
    ],
    "rubric": [
      {
        "criterion": "Spreadsheet formula architecture",
        "points": 35,
        "description": "Used =COUNTIF(range, \"Yes\")/4 to produce dynamic 0-100% completion scores."
      },
      {
        "criterion": "Conditional formatting implementation",
        "points": 25,
        "description": "Applied green for 100%, yellow for 50-75%, and red for <50% completion."
      },
      {
        "criterion": "Identification of bottlenecked accounts",
        "points": 20,
        "description": "Accurately flagged accounts stalled for >7 days for immediate partner escalation."
      },
      {
        "criterion": "Quality of reminder communication",
        "points": 20,
        "description": "Professional, supportive email clearly listing required file formats and upload portal links."
      }
    ],
    "solutionWalkthrough": {
      "overview": "Configured dynamic tracker where each verified document increments progress by 25%. Set up automated filter view for 'Stalled Accounts (<50%)' to allow weekly Monday morning chase runs.",
      "stepByStepGuidance": [
        "Set up data validation for status columns: Yes, Pending, Rejected.",
        "Calculate completion score: `=COUNTIF(D2:G2, \"Yes\") / 4` formatted as %.",
        "Add conditional formatting rules for visual health indicators.",
        "Draft automated mail merge template targeting clients with 'Pending' tags."
      ],
      "sampleOutputSnippet": "CLI-101: 100% (Ready for Filing) | CLI-102: 50% (Awaiting KYC & Cheque) | CLI-104: 0% (Critical Chase)",
      "commonMistakesToAvoid": [
        "Manually typing percentages instead of letting formulas compute them dynamically."
      ],
      "portfolioInclusionTip": "Demonstrates operational design skills and data organization capabilities."
    }
  },
  {
    "id": "proj-vo-04",
    "slug": "business-travel-itinerary-budget-aspen",
    "title": "Comprehensive Multi-City Corporate Travel Itinerary & Expense Budget",
    "department": "Virtual Office",
    "careerSlug": "virtual-assistance",
    "careerTitle": "Virtual Assistance & Remote Admin",
    "difficulty": "Intermediate",
    "estimatedHours": 4,
    "company": {
      "name": "Aspen Real Estate Advisory",
      "industry": "Commercial Property Development",
      "location": "Mumbai / London / Singapore",
      "background": "The CEO and VP of Acquisitions are undertaking a 6-day investor roadshow across Singapore and Tokyo to meet sovereign wealth funds.",
      "contactPerson": "Clarissa Vance",
      "role": "Chief of Staff"
    },
    "brief": "Plan a comprehensive 6-day travel itinerary for 2 executives traveling Mumbai -> Singapore -> Tokyo -> Mumbai. Coordinate flights, hotel accommodations near financial districts, ground transfers, meeting schedules with local addresses, and build a unified expense budget under the $15,000 corporate travel cap.",
    "learningObjectives": [
      "Synthesize flight options, transit buffers, and time zone changes into coherent itineraries",
      "Select corporate hotel accommodations balancing proximity, safety, and business amenities",
      "Calculate per diem allowances, foreign currency exchange budgets, and ground transport",
      "Create mobile-friendly executive travel briefing packs"
    ],
    "requiredTools": [
      "Google Docs / Word",
      "Google Sheets",
      "Flight Booking Simulator"
    ],
    "prerequisites": [
      "Attention to detail",
      "Currency conversions"
    ],
    "deliverables": [
      {
        "name": "Executive Travel Itinerary Dossier (PDF)",
        "format": "Document",
        "description": "Chronological master itinerary with flight numbers, hotel confirmation codes, meeting locations, and local emergency contacts."
      },
      {
        "name": "Corporate Travel Budget & Currency Tracker (XLSX)",
        "format": "Spreadsheet",
        "description": "Budget model converting INR, SGD, and JPY into USD against the $15,000 threshold."
      }
    ],
    "sampleDataFiles": [
      {
        "name": "aspen_travel_parameters.json",
        "size": "3.8 KB",
        "type": "json",
        "description": "Executive seat preferences, frequent flyer numbers, budget constraints, and scheduled meeting dates/times.",
        "downloadContent": "{\n  \"travelers\": [\"Marcus Sterling (CEO)\", \"Elena Rostova (VP)\"],\n  \"budgetCapUSD\": 15000,\n  \"dates\": \"Oct 12 to Oct 18, 2026\",\n  \"route\": [\"BOM -> SIN\", \"SIN -> HND\", \"NRT -> BOM\"],\n  \"scheduledMeetings\": [\n    {\"city\": \"Singapore\", \"date\": \"Oct 13 14:00\", \"location\": \"Marina Bay Financial Centre Tower 1\"},\n    {\"city\": \"Tokyo\", \"date\": \"Oct 16 10:30\", \"location\": \"Marunouchi Building Chiyoda-ku\"}\n  ],\n  \"hotelPreferences\": [\"5-Star or High 4-Star with executive lounge\", \"Walking distance or <15 mins to meeting venue\"]\n}"
      }
    ],
    "rubric": [
      {
        "criterion": "Transit logistics and buffer reasonableness",
        "points": 35,
        "description": "Ensured minimum 3-hour airport check-in windows and 90-minute buffers between flight landing and meetings."
      },
      {
        "criterion": "Budget accuracy and currency conversions",
        "points": 35,
        "description": "Accurately converted flight, hotel, ground transport, and per diems into USD under $15,000."
      },
      {
        "criterion": "Itinerary document layout and clarity",
        "points": 30,
        "description": "Flawless mobile-optimized formatting with clickable maps, confirmation numbers, and timezone notes."
      }
    ],
    "solutionWalkthrough": {
      "overview": "Selected Singapore Airlines direct flights. Booked Fullerton Hotel in Singapore (5 mins to MBFC) and Palace Hotel Tokyo in Marunouchi. Total cost came to $13,420 USD, leaving a comfortable $1,580 emergency contingency buffer.",
      "stepByStepGuidance": [
        "Chart out flight schedules ensuring executives land with at least 12 hours rest before meetings.",
        "Map hotel locations to meeting addresses to minimize rush-hour transit risks.",
        "Itemize costs: Flights ($6,800), Hotels ($4,200), Ground ($900), Per Diem ($1,520) = $13,420.",
        "Compile into clean executive pocket PDF."
      ],
      "sampleOutputSnippet": "Total Spend: $13,420 USD | Variance to Cap: -$1,580 USD (Under Budget) | Transit Risk: Low",
      "commonMistakesToAvoid": [
        "Booking connecting flights with tight <60-minute international layovers."
      ],
      "portfolioInclusionTip": "Executive assistants who can demonstrate flawless C-level travel coordination command top remote salaries."
    }
  },
  {
    "id": "proj-vo-05",
    "slug": "sprint-task-prioritization-nextgen",
    "title": "Team Sprint Task Prioritization via Eisenhower Matrix",
    "department": "Virtual Office",
    "careerSlug": "virtual-assistance",
    "careerTitle": "Virtual Assistance & Remote Admin",
    "difficulty": "Beginner",
    "estimatedHours": 3,
    "company": {
      "name": "NextGen Digital Media",
      "industry": "Content Production & Influencer Management",
      "location": "Bengaluru / Remote",
      "background": "NextGen produces 40 weekly YouTube and Instagram campaigns for consumer brands. The creative team gets overwhelmed with ad-hoc requests, leading to missed client deliverables and burnout.",
      "contactPerson": "Rohan Mehra",
      "role": "Operations Producer"
    },
    "brief": "Evaluate a disorganized backlog of 20 pending team tasks. Categorize each into the 4 Eisenhower Quadrants (Do First, Schedule, Delegate, Eliminate), assign team owners, establish realistic deadline estimates, and configure a visual Kanban board.",
    "learningObjectives": [
      "Master the Eisenhower Decision Matrix (Urgent vs Important)",
      "Prevent burnout by eliminating low-value productivity traps",
      "Structure weekly team standup agendas based on high-impact priorities",
      "Configure task management boards (Trello/Notion style)"
    ],
    "requiredTools": [
      "Trello / Notion / Excel Kanban",
      "Google Docs"
    ],
    "prerequisites": [
      "Basic project coordination understanding"
    ],
    "deliverables": [
      {
        "name": "Eisenhower Task Prioritization Board (Spreadsheet / Board)",
        "format": "Kanban / Spreadsheet",
        "description": "Categorized 4-quadrant board ranking all 20 tasks with owner, effort estimate, and due date."
      }
    ],
    "sampleDataFiles": [
      {
        "name": "nextgen_raw_task_backlog.csv",
        "size": "3.4 KB",
        "type": "csv",
        "description": "20 unsorted tasks with incoming urgency flags, client impact notes, and estimated hours.",
        "downloadContent": "Task_ID,Task_Title,Requester,Client_Facing,Deadline_Hours,Impact_Notes\nTSK-01,Client Brand Video Final Cut Delivery,Brand Director,Yes,6,Contractual delivery deadline today; penalty if late\nTSK-02,Reorganize Google Drive icons and folder colors,Junior Editor,No,120,Purely aesthetic preference\nTSK-03,Sponsor payment invoice generation,Accounts,Yes,24,Cash flow incoming for completed campaign\nTSK-04,Respond to random LinkedIn collaboration pitch,Social Lead,No,48,Unsolicited cold message\nTSK-05,Prepare Monday client pitch presentation deck,CEO,Yes,48,Potential \u20b915 Lakh annual retainer account"
      }
    ],
    "rubric": [
      {
        "criterion": "Eisenhower Quadrant distribution accuracy",
        "points": 35,
        "description": "Correctly placed TSK-01 in Q1 (Do First), TSK-05 in Q2 (Schedule), TSK-03 in Q3 (Delegate), and TSK-02/04 in Q4 (Eliminate)."
      },
      {
        "criterion": "Workload balance and owner assignment",
        "points": 35,
        "description": "Distributed high-effort tasks across team members without exceeding daily bandwidth."
      },
      {
        "criterion": "Executive summary recommendations",
        "points": 30,
        "description": "Drafted clear 1-page memo explaining why Q4 tasks were dropped to protect focus."
      }
    ],
    "solutionWalkthrough": {
      "overview": "Q1 (Urgent & Important): TSK-01 (Contractual Delivery). Q2 (Important, Not Urgent): TSK-05 (Pitch Deck). Q3 (Urgent, Low Skill): TSK-03 (Invoice Generation delegated to Admin). Q4 (Not Urgent, Not Important): TSK-02 (Folder colors - eliminated).",
      "stepByStepGuidance": [
        "Score each task on Urgency (1-5) and Importance (1-5).",
        "Assign to Quadrant 1, 2, 3, or 4.",
        "Draft daily action plan focusing 70% of energy on Q1 and Q2.",
        "Communicate decisions transparently to leadership."
      ],
      "sampleOutputSnippet": "Q1: 4 Critical Tasks | Q2: 8 Strategic Builds | Q3: 5 Delegated Ops | Q4: 3 Eliminated Distractions",
      "commonMistakesToAvoid": [
        "Treating every incoming email as an emergency (falling into the Urgency Trap)."
      ],
      "portfolioInclusionTip": "Demonstrates project management maturity and operational discipline."
    }
  },
  {
    "id": "proj-cs-01",
    "slug": "delayed-courier-parcel-deescalation-swiftcart",
    "title": "High-Value Delayed Parcel De-escalation & Resolution",
    "department": "Customer Support",
    "careerSlug": "customer-chat-support",
    "careerTitle": "Customer Chat & Email Support",
    "difficulty": "Beginner",
    "estimatedHours": 3,
    "company": {
      "name": "SwiftCart Logistics & E-commerce",
      "industry": "Express Courier & Direct-to-Consumer Fulfillment",
      "location": "Gurugram / Remote",
      "background": "SwiftCart handles 50,000 daily parcel deliveries. Regional hub weather disruptions caused 48-hour sorting backlogs affecting 800 priority shipments.",
      "contactPerson": "Aakash Verma",
      "role": "Customer Experience Lead"
    },
    "brief": "De-escalate an intensely frustrated customer whose high-value birthday gift (Noise-Cancelling Headphones \u20b97,499) is stuck at a sorting hub 2 days past the promised anniversary date. Balance empathetic listening with firm logistics realities, coordinate with the dispatch manager, and provide an authorized goodwill credit.",
    "learningObjectives": [
      "De-escalate angry customers using the HEAT model (Hear, Empathize, Apologize, Take Action)",
      "Prevent customer churn and public social media backlash",
      "Formulate appropriate compensation without company over-concession",
      "Coordinate internal logistics escalations"
    ],
    "requiredTools": [
      "Customer Support Simulator",
      "Helpdesk Ticketing UI"
    ],
    "prerequisites": [
      "Empathetic English communication"
    ],
    "deliverables": [
      {
        "name": "Customer Ticket Response Thread (PDF / Text)",
        "format": "Support Transcript",
        "description": "Full de-escalation conversation demonstrating empathy, status clarity, and goodwill gesture."
      },
      {
        "name": "Internal Logistics Escalation Ticket (Text)",
        "format": "Ticket Memo",
        "description": "Urgent internal L2 ticket dispatched to hub operations manager."
      }
    ],
    "sampleDataFiles": [
      {
        "name": "swiftcart_ticket_1042.json",
        "size": "2.9 KB",
        "type": "json",
        "description": "Customer message, order details, tracking scan history, and customer lifetime value profile.",
        "downloadContent": "{\n  \"ticketId\": \"TICK-1042\",\n  \"customerName\": \"Rahul Sharma\",\n  \"customerTier\": \"Gold (14 previous orders)\",\n  \"orderId\": \"SW-89412\",\n  \"item\": \"Aura Pro Wireless Headphones\",\n  \"orderValue\": 7499,\n  \"promisedDate\": \"Nov 22\",\n  \"currentDate\": \"Nov 24\",\n  \"customerMessage\": \"This is unacceptable! I paid 250 extra for Express 24-hr shipping because today is my wife's birthday! Tracking hasn't moved in 48 hours. If it's not here today I am filing a consumer court complaint and canceling all my orders!\",\n  \"trackingLog\": [\"Nov 21 Picked Up\", \"Nov 22 Arrived Hub 4 Delhi\", \"Nov 23 Sorting Delay Weather\", \"Nov 24 In Queue\"]\n}"
      }
    ],
    "rubric": [
      {
        "criterion": "Empathy and validation without defensiveness",
        "points": 35,
        "description": "Acknowledged birthday importance directly; avoided blaming the weather defensively."
      },
      {
        "criterion": "Concrete action and tracking clarity",
        "points": 35,
        "description": "Contacted Hub 4 manager for priority vehicle dispatch; provided updated delivery window."
      },
      {
        "criterion": "Balanced goodwill resolution",
        "points": 30,
        "description": "Refunded express shipping (\u20b9250) + added \u20b9500 store credit as genuine compensation."
      }
    ],
    "solutionWalkthrough": {
      "overview": "Customer is a Gold Tier buyer in distress. Validate his emotion immediately: 'I am so sorry we let you down on your wife's special day.' Refund the \u20b9250 shipping immediately, flag Hub 4 for morning out-for-delivery priority, and grant \u20b9500 gift credit.",
      "stepByStepGuidance": [
        "Never argue or quote terms & conditions to an emotional customer.",
        "Acknowledge the specific human event (the birthday celebration).",
        "Provide immediate financial redress for failed service (the express fee).",
        "Give realistic revised timeline with personal tracking ownership."
      ],
      "sampleOutputSnippet": "Dear Rahul, I completely understand your anger \u2014 missing your wife's birthday is heartbreaking and we failed your expectation...",
      "commonMistakesToAvoid": [
        "Copy-pasting generic macros like 'Please allow 24-48 business hours for an update'."
      ],
      "portfolioInclusionTip": "Customer service leads look for authentic empathy and problem ownership over robotic script-reading."
    }
  },
  {
    "id": "proj-cs-02",
    "slug": "saas-billing-overcharge-dispute-cloudflow",
    "title": "SaaS Subscription Billing Dispute & Partial Refund Processing",
    "department": "Customer Support",
    "careerSlug": "customer-chat-support",
    "careerTitle": "Customer Chat & Email Support",
    "difficulty": "Intermediate",
    "estimatedHours": 3,
    "company": {
      "name": "CloudFlow Technologies",
      "industry": "B2B Project Management Software",
      "location": "Bengaluru / Austin / Remote",
      "background": "CloudFlow is a cloud collaboration platform with 10,000 paid team workspaces. An auto-renewal charge of $588 occurred on an inactive account whose trial upgraded automatically.",
      "contactPerson": "Elena Gomez",
      "role": "VP of Customer Support"
    },
    "brief": "Handle a high-risk payment dispute where an account administrator claims they were charged $588 for an annual team plan they never intended to keep. Analyze login activity, verify compliance with refund terms, prevent a costly credit card chargeback, and process an authorized pro-rated refund.",
    "learningObjectives": [
      "Manage chargeback risk and payment gateway dispute timelines",
      "Audit SaaS platform activity logs to verify zero platform usage",
      "Communicate cancellation and refund confirmation with transparency",
      "Retain goodwill while enforcing account security"
    ],
    "requiredTools": [
      "Stripe Billing Simulator",
      "Helpdesk Console"
    ],
    "prerequisites": [
      "Professional tone in financial disputes"
    ],
    "deliverables": [
      {
        "name": "Billing Dispute Resolution Ticket (PDF)",
        "format": "Ticket Thread",
        "description": "Professional support transcript confirming refund issuance and subscription downgrading."
      }
    ],
    "sampleDataFiles": [
      {
        "name": "cloudflow_billing_audit.json",
        "size": "2.7 KB",
        "type": "json",
        "description": "User account creation date, trial expiration, credit card transaction ID, and platform login logs.",
        "downloadContent": "{\n  \"accountId\": \"ACT-7719\",\n  \"userEmail\": \"mark@apexdesigners.co\",\n  \"plan\": \"Business Annual (5 Seats)\",\n  \"amountChargedUSD\": 588.00,\n  \"chargeDate\": \"2026-10-28\",\n  \"lastLoginDate\": \"2026-10-14 (14 days ago - Zero activity since trial)\",\n  \"userComplaint\": \"You charged my corporate credit card $588 without warning! We stopped testing your software two weeks ago. Refund this immediately or I am reporting this as fraud to Amex!\"\n}"
      }
    ],
    "rubric": [
      {
        "criterion": "Log verification and chargeback mitigation",
        "points": 35,
        "description": "Verified zero usage since trial and prioritized fast refund to prevent Amex chargeback fees."
      },
      {
        "criterion": "Clarity on refund timelines",
        "points": 35,
        "description": "Clearly explained standard 3-5 business day bank processing window and provided ARN/receipt ID."
      },
      {
        "criterion": "Account downgrading confirmation",
        "points": 30,
        "description": "Downgraded account to Free Tier so future auto-renewals are fully disabled."
      }
    ],
    "solutionWalkthrough": {
      "overview": "Because logs prove zero platform usage after trial, this falls squarely under the fair-use refund exception. Issue 100% refund immediately, provide Stripe refund reference, and downgrade account to Free Tier.",
      "stepByStepGuidance": [
        "Verify usage logs in admin panel (confirmed zero logins).",
        "Process full $588 refund via billing simulator.",
        "Send reassuring reply with exact transaction ID.",
        "Invite feedback on why the software did not fit their workflow."
      ],
      "sampleOutputSnippet": "Hi Mark, I have processed a full $588.00 refund to your Amex card (Ref: ch_3N28...). The funds will reflect in 3-5 days.",
      "commonMistakesToAvoid": [
        "Refusing refund on technicalities when customer has zero usage, triggering a chargeback fee of $15-50."
      ],
      "portfolioInclusionTip": "Shows your ability to safeguard company merchant account health while delivering white-glove service."
    }
  },
  {
    "id": "proj-cs-03",
    "slug": "damaged-product-replacement-aura-beauty",
    "title": "Damaged Cosmetic Order Replacement & Quality Assurance Feedback",
    "department": "Customer Support",
    "careerSlug": "customer-chat-support",
    "careerTitle": "Customer Chat & Email Support",
    "difficulty": "Beginner",
    "estimatedHours": 2,
    "company": {
      "name": "Aura Beauty Labs",
      "industry": "D2C Clean Skincare & Cosmetics",
      "location": "Mumbai / Remote",
      "background": "Aura ships premium glass-bottled serums and facial oils across India. A parcel arrived with a shattered Vitamin C serum bottle that leaked onto other items in the package.",
      "contactPerson": "Natasha Irani",
      "role": "Customer Care Manager"
    },
    "brief": "Respond to a distressed customer who unboxed a shattered glass serum bottle. Ensure customer safety (warning about glass shards), review photo evidence, trigger an immediate express replacement order without requiring the customer to return dangerous broken glass, and file a warehouse packaging report.",
    "learningObjectives": [
      "Prioritize physical customer safety in product damage incidents",
      "Waive return requirements for hazardous broken glass items",
      "Process no-charge replacement orders in e-commerce backend",
      "Log packaging failure reports for continuous warehouse improvement"
    ],
    "requiredTools": [
      "Helpdesk Simulator",
      "Shopify Order System"
    ],
    "prerequisites": [
      "Customer care empathy"
    ],
    "deliverables": [
      {
        "name": "Safety-First Customer Care Transcript (PDF)",
        "format": "Support Document",
        "description": "Empathetic response emphasizing safety, confirming replacement dispatch, and reassuring the buyer."
      }
    ],
    "sampleDataFiles": [
      {
        "name": "aura_damage_ticket.json",
        "size": "2.2 KB",
        "type": "json",
        "description": "Customer message, unboxing photograph confirmation, order items, and batch number.",
        "downloadContent": "{\n  \"ticketId\": \"AURA-4491\",\n  \"customer\": \"Pooja Hegde\",\n  \"orderNumber\": \"AUR-19201\",\n  \"items\": [\"Radiance Vitamin C Serum (Glass Dropper)\", \"Rose Water Toner\", \"Satin Eye Mask\"],\n  \"complaint\": \"I opened the courier box and the glass bottle was completely crushed! Glass shards everywhere and serum soaked the eye mask. I cut my finger slightly opening it!\",\n  \"photoStatus\": \"Verified - Shows shattered glass and soaked packaging\"\n}"
      }
    ],
    "rubric": [
      {
        "criterion": "Immediate safety priority and empathy",
        "points": 35,
        "description": "Expresses deep concern for customer's injured finger; advises safe disposal of glass."
      },
      {
        "criterion": "Waiver of return obligation",
        "points": 35,
        "description": "Explicitly instructs customer NOT to send back broken glass."
      },
      {
        "criterion": "Comprehensive replacement fulfillment",
        "points": 30,
        "description": "Replaces both the serum and the ruined eye mask via Express Courier with a complimentary soothing balm."
      }
    ],
    "solutionWalkthrough": {
      "overview": "First priority: customer safety. 'Please do not touch any remaining shards; safely discard the entire box.' Replace both the serum and the ruined eye mask at zero cost with expedited courier.",
      "stepByStepGuidance": [
        "Express genuine concern for the cut finger.",
        "Clear instruction to discard box safely.",
        "Generate replacement order for all affected products.",
        "Log packaging failure to warehouse lead: bubble wrap layer insufficient."
      ],
      "sampleOutputSnippet": "Dear Pooja, I am so distressed to hear you cut your finger! Please set the box aside and do not attempt to salvage items...",
      "commonMistakesToAvoid": [
        "Asking the customer to pack up broken glass and take it to a courier post office."
      ],
      "portfolioInclusionTip": "Illustrates exceptional crisis communication and brand-protective customer empathy."
    }
  },
  {
    "id": "proj-cs-04",
    "slug": "patient-portal-bug-escalation-pulse",
    "title": "Critical Patient Portal Login Defect Escalation to L2 Engineering",
    "department": "Customer Support",
    "careerSlug": "customer-chat-support",
    "careerTitle": "Customer Chat & Email Support",
    "difficulty": "Intermediate",
    "estimatedHours": 4,
    "company": {
      "name": "Pulse HealthTech Solutions",
      "industry": "Digital Health & Telemedicine",
      "location": "Hyderabad / Remote",
      "background": "Pulse operates a patient portal where 40,000 diabetic patients log blood sugar readings and access prescription renewals. A software update caused iOS Safari users to encounter an infinite redirect loop.",
      "contactPerson": "Dr. Sandeep Nair",
      "role": "VP of Clinical Operations"
    },
    "brief": "Triage 5 urgent patient complaints unable to download urgent insulin prescriptions. Identify common environment patterns (iOS 17.4 Safari cookie blocking), draft clear workaround instructions for elderly patients, and write a technical Jira bug ticket with reproduction steps for the L2 engineering team.",
    "learningObjectives": [
      "Identify recurring technical patterns across incoming customer complaints",
      "Translate technical workarounds into simple language for non-technical users",
      "Author comprehensive Jira bug tickets for software engineers",
      "Set appropriate severity ratings (P1 Blocker vs P3 Minor)"
    ],
    "requiredTools": [
      "Jira Simulator / Helpdesk Console",
      "Markdown"
    ],
    "prerequisites": [
      "Basic technical troubleshooting concepts"
    ],
    "deliverables": [
      {
        "name": "L2 Technical Defect Ticket (Jira Format)",
        "format": "Markdown / Document",
        "description": "Bug report with Environment, Preconditions, Steps to Reproduce, Expected vs Actual, and Workaround."
      },
      {
        "name": "Patient Workaround SOP Guide (PDF)",
        "format": "Document",
        "description": "Simple 3-step illustrated instructions for patients to bypass cookie blocking or use Chrome."
      }
    ],
    "sampleDataFiles": [
      {
        "name": "pulse_patient_tickets.json",
        "size": "3.5 KB",
        "type": "json",
        "description": "5 incoming patient messages with device models, OS versions, screenshots, and prescription urgency flags.",
        "downloadContent": "[\n  {\"id\": \"MED-1\", \"patient\": \"K. Raman (Age 68)\", \"device\": \"iPhone 13, iOS 17.4\", \"browser\": \"Safari\", \"issue\": \"Screen blinks white and reloads constantly when I click View Prescription. Need my insulin script!\"},\n  {\"id\": \"MED-2\", \"patient\": \"Fatima Z.\", \"device\": \"iPhone 15, iOS 17.4\", \"browser\": \"Safari\", \"issue\": \"Login loop. Entering OTP takes me right back to phone number screen.\"},\n  {\"id\": \"MED-3\", \"patient\": \"Arun V.\", \"device\": \"Samsung S23, Android 14\", \"browser\": \"Chrome\", \"issue\": \"Everything works fine. Just asking about lab timings.\"}\n]"
      }
    ],
    "rubric": [
      {
        "criterion": "Root-cause pattern recognition",
        "points": 35,
        "description": "Correctly isolated issue to iOS 17.4 Safari third-party cookie blocking."
      },
      {
        "criterion": "Engineering bug ticket rigor",
        "points": 35,
        "description": "Authored P1 Blocker Jira ticket with exact steps to reproduce and network log notes."
      },
      {
        "criterion": "Patient communication empathy and simplicity",
        "points": 30,
        "description": "Communicated emergency prescription manual dispatch to avoid medical risks."
      }
    ],
    "solutionWalkthrough": {
      "overview": "Medical urgency requires dual-track response: immediately email the PDF prescription to Raman directly to prevent medication lapse, while filing P1 Bug Ticket to engineering isolating iOS Safari Auth0 cookie redirection.",
      "stepByStepGuidance": [
        "Verify safety: Never leave a patient without critical insulin prescription.",
        "Manually email verified prescription from doctor database.",
        "Compile device logs: iOS 17.4 Safari cross-site tracking prevention breaks auth token cookie.",
        "Submit Jira ticket with P1 Severity."
      ],
      "sampleOutputSnippet": "Jira Ticket: [P1 - Blocker] Infinite Redirect Loop on iOS 17.4 Safari during JWT Token Exchange",
      "commonMistakesToAvoid": [
        "Telling an elderly diabetic patient with an urgent script to 'wait for our developers'."
      ],
      "portfolioInclusionTip": "Proves you possess both high-touch empathy and analytical technical support capabilities."
    }
  },
  {
    "id": "proj-cs-05",
    "slug": "churn-prevention-deescalation-streamwave",
    "title": "SaaS Churn Prevention, Feedback Interview & Retention Offer",
    "department": "Customer Support",
    "careerSlug": "customer-chat-support",
    "careerTitle": "Customer Chat & Email Support",
    "difficulty": "Intermediate",
    "estimatedHours": 3,
    "company": {
      "name": "StreamWave Media",
      "industry": "Podcast & Audio Hosting Platform",
      "location": "Mumbai / Remote",
      "background": "StreamWave hosts 15,000 independent podcasters. A popular podcaster with 50,000 monthly listeners requested immediate cancellation citing lack of YouTube auto-publishing.",
      "contactPerson": "Rhea Kapoor",
      "role": "Head of Retention"
    },
    "brief": "Handle an exit-intent cancellation request from a high-profile creator. Uncover the underlying root frustration, educate the creator on an unpublicized beta feature that solves their exact problem (YouTube video sync), and construct an attractive retention incentive (2 months free beta testing) to convert a cancellation into a brand advocate.",
    "learningObjectives": [
      "Execute root-cause discovery in exit-interview workflows",
      "Offer targeted feature education without sounding pushy or dismissive",
      "Structure win-win customer retention concessions",
      "Document product feedback for the product development team"
    ],
    "requiredTools": [
      "Support Simulator / Intercom Style UI"
    ],
    "prerequisites": [
      "Consultative customer engagement"
    ],
    "deliverables": [
      {
        "name": "Retention Conversation Script (PDF)",
        "format": "Dialogue Transcript",
        "description": "Multi-turn conversation transitioning from angry cancellation to enthusiastic retention."
      }
    ],
    "sampleDataFiles": [
      {
        "name": "streamwave_creator_profile.json",
        "size": "2.6 KB",
        "type": "json",
        "description": "Creator account metrics, subscriber numbers, cancellation reason, and support history.",
        "downloadContent": "{\n  \"creator\": \"TechTalks with Ananya\",\n  \"monthlyDownloads\": 54000,\n  \"tier\": \"Pro Studio ($49/mo)\",\n  \"tenureMonths\": 18,\n  \"cancellationReason\": \"Moving to Podbean because they automatically generate audiograms and push to YouTube. I don't have 3 hours every week to manually create MP4 videos for YouTube.\"\n}"
      }
    ],
    "rubric": [
      {
        "criterion": "Active listening and problem isolation",
        "points": 35,
        "description": "Pinpointed the true pain point: 3 hours wasted on manual video editing, not cost."
      },
      {
        "criterion": "Value proposition and beta feature reveal",
        "points": 35,
        "description": "Introduced StreamWave's new automated 1-click YouTube Audiogram feature currently in private beta."
      },
      {
        "criterion": "Commercial retention outcome",
        "points": 30,
        "description": "Successfully saved account from canceling while securing valuable beta tester feedback."
      }
    ],
    "solutionWalkthrough": {
      "overview": "Do not offer a generic price discount \u2014 the creator's problem is TIME, not money. Introduce the private beta of StreamWave Video Studio which automates YouTube uploads. Offer 60 days VIP beta access with 1-on-1 setup support.",
      "stepByStepGuidance": [
        "Validate the pain: 'Spending 3 hours creating YouTube videos is exhausting.'",
        "Present solution: 'We actually built our new Automated YouTube Sync for creators like you.'",
        "Invite to exclusive Beta: Zero extra cost + priority onboarding.",
        "Retain customer and update retention scorecard."
      ],
      "sampleOutputSnippet": "Hi Ananya, I completely get it. What if you didn't have to spend a single minute converting MP3s? Let me give you early access...",
      "commonMistakesToAvoid": [
        "Trying to retain an unhappy customer simply by slashing prices without addressing their functional problem."
      ],
      "portfolioInclusionTip": "Demonstrates high commercial value \u2014 customer retention directly drives company valuation."
    }
  },
  {
    "id": "proj-des-01",
    "slug": "brand-identity-style-guide-verdant",
    "title": "Brand Identity Style Guide & Social Color/Typography System",
    "department": "Design Studio",
    "careerSlug": "canva-graphic-design",
    "careerTitle": "Graphic Design with Canva & Figma",
    "difficulty": "Beginner",
    "estimatedHours": 4,
    "company": {
      "name": "Verdant Botanic Co.",
      "industry": "Organic Plant Nursery & Urban Gardening",
      "location": "Bengaluru / Remote",
      "background": "Verdant sells exotic indoor plants, terracotta pots, and organic soil mixes. Their current social media looks disjointed with random fonts, inconsistent logos, and clashing color tones.",
      "contactPerson": "Maya Sundaram",
      "role": "Founder & Creative Director"
    },
    "brief": "Develop a comprehensive 6-page Brand Identity Style Guide for Verdant Botanic Co. Establish primary/secondary color palettes with HEX/RGB/CMYK codes, select pairing Google Fonts (Header + Body), define logo minimum clearspace and misuse rules, and create 3 reusable Canva/Figma post templates.",
    "learningObjectives": [
      "Construct cohesive color palettes reflecting brand psychology (earthy greens, warm terracotta)",
      "Pair accessible typography ensuring digital legibility (WCAG contrast compliant)",
      "Establish logo usage boundaries to protect brand consistency",
      "Design modular social media layout grids"
    ],
    "requiredTools": [
      "Canva / Figma",
      "Coolors.co",
      "Google Fonts"
    ],
    "prerequisites": [
      "Visual taste",
      "Basic Canva / design tool navigation"
    ],
    "deliverables": [
      {
        "name": "Brand Identity Style Guide PDF (6 Pages)",
        "format": "PDF Document",
        "description": "Professional brand bible with Mission, Color Palette, Typography Hierarchy, Logo Rules, and Imagery Guidelines."
      },
      {
        "name": "3 Social Media Post Templates (Canva/Figma Link)",
        "format": "Design Template",
        "description": "Product Spotlight, Plant Care Tip, and Customer Testimonial templates."
      }
    ],
    "sampleDataFiles": [
      {
        "name": "verdant_brand_brief.json",
        "size": "2.8 KB",
        "type": "json",
        "description": "Brand keywords, target audience persona, competitor visual audit, and core value statements.",
        "downloadContent": "{\n  \"brandName\": \"Verdant Botanic Co.\",\n  \"keywords\": [\"Earthy\", \"Minimalist\", \"Warm\", \"Calming\", \"Eco-Friendly\"],\n  \"targetAudience\": \"Urban apartment dwellers aged 24-40 seeking green sanctuaries at home\",\n  \"recommendedColors\": {\n    \"ForestGreen\": \"#1B4332\",\n    \"Sage\": \"#74C69D\",\n    \"Terracotta\": \"#D87D4A\",\n    \"WarmAlabaster\": \"#FAF8F5\",\n    \"DeepCharcoal\": \"#212529\"\n  },\n  \"fontPreferences\": [\"Fraunces (Serif Header)\", \"Plus Jakarta Sans (Clean Modern Body)\"]\n}"
      }
    ],
    "rubric": [
      {
        "criterion": "Color harmony and accessibility contrast",
        "points": 35,
        "description": "All text/background combinations meet WCAG AA contrast ratio of at least 4.5:1."
      },
      {
        "criterion": "Typography hierarchy and pairing",
        "points": 35,
        "description": "Clear scale: H1 (32pt), H2 (24pt), Body (16pt), Caption (12pt) with appropriate line spacing."
      },
      {
        "criterion": "Template versatility and production quality",
        "points": 30,
        "description": "Templates look premium, cohesive, and easy for non-designers to edit."
      }
    ],
    "solutionWalkthrough": {
      "overview": "Selected deep forest green (#1B4332) for authority, warm terracotta (#D87D4A) as accent, and warm alabaster (#FAF8F5) as background. Paired editorial serif Fraunces with readable Plus Jakarta Sans.",
      "stepByStepGuidance": [
        "Establish grid system (1080x1080px for Instagram).",
        "Document color values across HEX, RGB, and CMYK.",
        "Build Do's and Don'ts visual guide for logo usage.",
        "Create template assets with editable placeholder frames."
      ],
      "sampleOutputSnippet": "Palette: #1B4332 (Primary) | #D87D4A (Accent) | #FAF8F5 (Canvas) | Contrast Ratio: 11.2:1 (Pass AAA)",
      "commonMistakesToAvoid": [
        "Using tiny unreadable body text or low-contrast light grey text on white."
      ],
      "portfolioInclusionTip": "A complete Brand Style Guide immediately distinguishes you from amateur Canva button-clickers."
    }
  },
  {
    "id": "proj-des-02",
    "slug": "instagram-educational-carousel-kinetic",
    "title": "5-Slide Educational Instagram Carousel Template Suite",
    "department": "Design Studio",
    "careerSlug": "canva-graphic-design",
    "careerTitle": "Graphic Design with Canva & Figma",
    "difficulty": "Beginner",
    "estimatedHours": 3,
    "company": {
      "name": "Kinetic Fitness App",
      "industry": "Mobile Health & Calisthenics",
      "location": "Pune / Remote",
      "background": "Kinetic is a mobile training app. Their Instagram strategy relies on educational carousels (e.g., '5 Posture Fixes for Desk Workers') to drive app installs.",
      "contactPerson": "Rishi Nair",
      "role": "Growth Marketing Lead"
    },
    "brief": "Design a seamless 5-slide educational Instagram carousel: '5 Mistakes Ruining Your Desk Posture (And How to Fix Them)'. Use visual continuity elements across slide seams (connecting arrows/lines), high-contrast bold typography, clean negative space, and a high-converting final Call-to-Action slide.",
    "learningObjectives": [
      "Master multi-slide carousel continuity in Canva and Figma",
      "Structure viral educational frameworks (Hook -> Problem -> Actionable Fix -> Call to Action)",
      "Maintain consistent typographic rhythm and visual margins across 5 slides",
      "Optimize for mobile tap targets and save-to-bookmark engagement"
    ],
    "requiredTools": [
      "Canva / Figma"
    ],
    "prerequisites": [
      "Basic layout sense"
    ],
    "deliverables": [
      {
        "name": "5-Slide Carousel Export (PNG / JPG 1080x1350px 4:5)",
        "format": "Image Pack",
        "description": "5 high-resolution export slides formatted in portrait 4:5 aspect ratio."
      }
    ],
    "sampleDataFiles": [
      {
        "name": "kinetic_carousel_copydeck.json",
        "size": "2.9 KB",
        "type": "json",
        "description": "Slide-by-slide copy deck, visual direction notes, and brand colors.",
        "downloadContent": "{\n  \"slide1\": {\"hook\": \"Sitting 8+ hours a day?\", \"sub\": \"5 posture mistakes destroying your spine (and simple 30-sec fixes)\", \"badge\": \"SWIPE TO FIX\"},\n  \"slide2\": {\"mistake\": \"01. Screen Below Eye Level\", \"consequence\": \"Forces 27kg of forward head pressure on neck\", \"fix\": \"Elevate laptop with books or riser so top third is eye level\"},\n  \"slide3\": {\"mistake\": \"02. Slouching Without Lumbar Support\", \"consequence\": \"Flattens lower spinal curvature causing disc strain\", \"fix\": \"Place rolled towel behind lower back\"},\n  \"slide4\": {\"mistake\": \"03. Legs Crossed for Hours\", \"consequence\": \"Tilts pelvis, causes sciatic nerve compression\", \"fix\": \"Keep both feet flat on floor with 90\u00b0 knee angle\"},\n  \"slide5\": {\"cta\": \"Save This Guide for Tomorrow's Workday!\", \"button\": \"Download Kinetic App for 3-Min Mobility Routine\"}\n}"
      }
    ],
    "rubric": [
      {
        "criterion": "Hook slide stop-scroll visual impact",
        "points": 35,
        "description": "High contrast typography, clear visual intrigue, and obvious swipe incentive."
      },
      {
        "criterion": "Continuity across slide transitions",
        "points": 35,
        "description": "Design elements (graphic shapes or subtle path lines) bridge seamlessly across slide cuts."
      },
      {
        "criterion": "Readability on small mobile displays",
        "points": 30,
        "description": "No text smaller than 24pt; generous padding preventing text cutoff on mobile edge."
      }
    ],
    "solutionWalkthrough": {
      "overview": "Used 1080x1350px (4:5 portrait) to occupy maximum mobile screen real estate. Slide 1 features bold neon lime (#CCFF00) and deep obsidian (#121212) for high-energy fitness feel. Clean bulleted fixes on slides 2-4, and clear bookmark reminder on slide 5.",
      "stepByStepGuidance": [
        "Create 5400x1350px master canvas in Figma or 5 linked 1080x1350px slides in Canva.",
        "Draw guide lines every 1080px to check slide boundaries.",
        "Place bridging accent lines across borders to invite swiping.",
        "Export individual slices and verify seamless swiping on mobile."
      ],
      "sampleOutputSnippet": "Aspect Ratio: 4:5 (1080x1350px) | Format: PNG 24-bit | Slide Count: 5 | Hook Text: 52pt Bold",
      "commonMistakesToAvoid": [
        "Using 1:1 square instead of 4:5 portrait (losing 25% screen space on Instagram)."
      ],
      "portfolioInclusionTip": "Social media managers love designers who understand carousel retention and bookmark metrics."
    }
  },
  {
    "id": "proj-des-03",
    "slug": "digital-ad-banner-suite-solaris",
    "title": "Multi-Platform Digital Ad Banner Specification (Web, Story & Feed)",
    "department": "Design Studio",
    "careerSlug": "canva-graphic-design",
    "careerTitle": "Graphic Design with Canva & Figma",
    "difficulty": "Intermediate",
    "estimatedHours": 4,
    "company": {
      "name": "Solaris Clean Energy",
      "industry": "Residential Rooftop Solar Installations",
      "location": "Ahmedabad / Remote",
      "background": "Solaris provides zero-down rooftop solar financing for homeowners. They run digital campaigns across Google Display Network, Meta Ads, and Instagram Stories.",
      "contactPerson": "Amitabh Joshi",
      "role": "Performance Marketing Director"
    },
    "brief": "Design a cohesive 4-size responsive digital ad banner suite: Medium Rectangle (300x250px), Leaderboard (728x90px), Instagram Story (1080x1920px), and Facebook Feed (1200x628px). Highlight the core offer: 'Slash Your Summer Electricity Bill by 80% \u2014 Zero Upfront Cost'.",
    "learningObjectives": [
      "Adapt one creative concept across drastically different aspect ratios",
      "Maintain brand recognition while resizing elements for mobile vs desktop",
      "Design prominent, high-clickthrough Call-to-Action (CTA) buttons",
      "Optimize file sizes under 150KB for Google Display Network compliance"
    ],
    "requiredTools": [
      "Canva / Figma",
      "TinyPNG File Compressor"
    ],
    "prerequisites": [
      "Banner design fundamentals"
    ],
    "deliverables": [
      {
        "name": "4 Resized Ad Banners (PNG & Compressed JPG)",
        "format": "Ad Asset Pack",
        "description": "300x250, 728x90, 1080x1920, and 1200x628 banners under 150KB each."
      }
    ],
    "sampleDataFiles": [
      {
        "name": "solaris_campaign_brief.json",
        "size": "2.5 KB",
        "type": "json",
        "description": "Campaign headline, subcopy, CTA button text, compliance disclaimers, and logo files.",
        "downloadContent": "{\n  \"headline\": \"Slash Your Power Bill by 80%\",\n  \"subhead\": \"Govt Subsidy + Zero Upfront Down Payment\",\n  \"ctaButton\": \"Check Your Roof Subsidy\",\n  \"brandColors\": {\"solarYellow\": \"#FFB703\", \"navyBlue\": \"#023047\", \"skyBlue\": \"#219EBC\"},\n  \"legalDisclaimer\": \"*Govt PM Surya Ghar scheme terms apply\"\n}"
      }
    ],
    "rubric": [
      {
        "criterion": "Cross-format visual coherence",
        "points": 35,
        "description": "All 4 sizes share immediate visual DNA and recognizable branding."
      },
      {
        "criterion": "CTA button prominence",
        "points": 35,
        "description": "CTA button uses high-contrast solar yellow (#FFB703) and stands out immediately."
      },
      {
        "criterion": "Technical ad spec compliance",
        "points": 30,
        "description": "Exact pixel dimensions and file size under 150KB limit."
      }
    ],
    "solutionWalkthrough": {
      "overview": "Designed master asset in 1200x628, then reflowed elements for the ultra-wide 728x90 leaderboard and vertical 1080x1920 Story format. Prioritized headline legibility even at 300x250.",
      "stepByStepGuidance": [
        "Establish visual hierarchy: 1) Eye-catching photo of modern rooftop solar, 2) Headline, 3) High-contrast CTA button.",
        "Rearrange for 728x90: Logo on left, headline center, CTA on far right.",
        "Rearrange for 1080x1920: Leave top 250px and bottom 250px clear of text to prevent Instagram UI icon overlap.",
        "Compress assets via TinyPNG to guarantee <150KB load times."
      ],
      "sampleOutputSnippet": "Sizes: 300x250 (78KB), 728x90 (54KB), 1200x628 (112KB), 1080x1920 (140KB) - All Passed Specs",
      "commonMistakesToAvoid": [
        "Placing crucial text too close to top or bottom in Story ads, where profile handles and reply bars obscure it."
      ],
      "portfolioInclusionTip": "Agency hiring managers love seeing multi-size ad suites because responsive reflow is standard daily agency work."
    }
  },
  {
    "id": "proj-des-04",
    "slug": "product-packaging-redesign-peak-coffee",
    "title": "Artisanal Packaging Label Redesign & Compliance Checklist",
    "department": "Design Studio",
    "careerSlug": "canva-graphic-design",
    "careerTitle": "Graphic Design with Canva & Figma",
    "difficulty": "Intermediate",
    "estimatedHours": 4,
    "company": {
      "name": "Peak Coffee Roasters",
      "industry": "Single-Origin Specialty Coffee",
      "location": "Chikmagalur / Bengaluru",
      "background": "Peak Coffee roasts single-origin Arabica coffee beans. They are upgrading from generic brown kraft paper bags to custom matte printed pouch packaging.",
      "contactPerson": "Kiran Somanna",
      "role": "Founder & Head Roaster"
    },
    "brief": "Design a front and back packaging label for a 250g coffee pouch. Incorporate mandatory FSSAI food safety regulatory requirements (license number, Veg green dot logo, net weight, roast date, nutrition facts, barcode space) alongside artisan aesthetic storytelling.",
    "learningObjectives": [
      "Design within real-world packaging dielines and bleed margins",
      "Incorporate mandatory statutory food labeling standards (FSSAI / FDA)",
      "Balance artistic luxury aesthetics with dense legal information",
      "Prepare print-ready PDF/X files with CMYK color spaces"
    ],
    "requiredTools": [
      "Canva / Figma / Illustrator",
      "Barcode Generator"
    ],
    "prerequisites": [
      "Print layout basics",
      "CMYK color theory"
    ],
    "deliverables": [
      {
        "name": "Print-Ready Front & Back Packaging Label (PDF)",
        "format": "Print PDF",
        "description": "High-resolution 300 DPI labels with 3mm bleed margins and vector crop marks."
      }
    ],
    "sampleDataFiles": [
      {
        "name": "peak_coffee_label_specs.json",
        "size": "3.1 KB",
        "type": "json",
        "description": "Dieline dimensions, roast flavor notes, FSSAI registration number, and mandatory allergen declaration.",
        "downloadContent": "{\n  \"productName\": \"Baba Budan Giri Estate Single Origin\",\n  \"roastLevel\": \"Medium Dark Roast\",\n  \"process\": \"Washed Arabica\",\n  \"tastingNotes\": [\"Dark Chocolate\", \"Roasted Hazelnut\", \"Orange Zest\"],\n  \"elevation\": \"1,450 meters\",\n  \"mandatoryFields\": {\n    \"fssaiLic\": \"11224333000881\",\n    \"netWeight\": \"250g / 8.8 oz\",\n    \"vegSymbol\": \"Standard Green Square with Green Circle\",\n    \"mfgBy\": \"Peak Coffee Roasters, Chikmagalur, Karnataka 577101\"\n  }\n}"
      }
    ],
    "rubric": [
      {
        "criterion": "Regulatory compliance completeness",
        "points": 35,
        "description": "Includes all required elements: FSSAI mark, Veg logo, Net Weight, and Batch placeholder."
      },
      {
        "criterion": "Artisan luxury aesthetic balance",
        "points": 35,
        "description": "Front label remains clean, modern, and uncluttered with prominent flavor notes."
      },
      {
        "criterion": "Print-readiness technical standards",
        "points": 30,
        "description": "Built to 300 DPI with 3mm bleed safety margin and CMYK colors."
      }
    ],
    "solutionWalkthrough": {
      "overview": "Created front label focusing purely on origin story, elevation, and tasting notes in elegant typography. Moved all regulatory dense data (FSSAI, barcode, brewing guide) to back label grid.",
      "stepByStepGuidance": [
        "Set canvas dimensions to 100mm x 150mm with 3mm bleed.",
        "Design front: Prominent typography, origin coordinates, roast indicator.",
        "Design back: 2-column layout with brewing ratios on top, FSSAI & barcode on bottom.",
        "Export as PDF/X-1a with converted CMYK colors."
      ],
      "sampleOutputSnippet": "Dimensions: 100x150mm + 3mm bleed | Color Space: CMYK | Resolution: 300 DPI Vector",
      "commonMistakesToAvoid": [
        "Forgetting the mandatory Indian Veg green dot symbol, causing packaging seizure by food inspectors."
      ],
      "portfolioInclusionTip": "Shows tangible real-world product packaging experience that freelance clients pay high premiums for."
    }
  },
  {
    "id": "proj-des-05",
    "slug": "sustainability-report-infographic-ecotransit",
    "title": "Corporate Sustainability Report Infographic & Data Visuals",
    "department": "Design Studio",
    "careerSlug": "canva-graphic-design",
    "careerTitle": "Graphic Design with Canva & Figma",
    "difficulty": "Intermediate",
    "estimatedHours": 4,
    "company": {
      "name": "EcoTransit Mobility",
      "industry": "Electric Fleet Logistics & Urban Micro-Mobility",
      "location": "Bengaluru / Remote",
      "background": "EcoTransit operates 2,500 electric delivery scooters. They need to present their Annual Carbon Reduction Report to ESG investors and corporate partners.",
      "contactPerson": "Varun Chawla",
      "role": "Chief Sustainability Officer"
    },
    "brief": "Transform a complex 15-page raw carbon audit spreadsheet into an engaging 1-page executive infographic poster. Design custom data charts (CO2 metric tonnes averted, EV fleet growth, clean energy charging mix), callout statistics, and a timeline of environmental milestones.",
    "learningObjectives": [
      "Translate dry tabular data into intuitive visual data stories",
      "Select appropriate chart archetypes (donut for energy mix, bar for quarterly growth)",
      "Apply visual hierarchy so viewers absorb key takeaways in under 10 seconds",
      "Incorporate clean vector iconography to support metrics"
    ],
    "requiredTools": [
      "Canva / Figma",
      "Datawrapper / Google Sheets"
    ],
    "prerequisites": [
      "Data interpretation basics"
    ],
    "deliverables": [
      {
        "name": "A4 Executive Infographic Poster (PDF & PNG)",
        "format": "High-Res Poster",
        "description": "Clean, publication-ready sustainability summary with balanced typography and data visualizations."
      }
    ],
    "sampleDataFiles": [
      {
        "name": "ecotransit_carbon_audit.csv",
        "size": "2.9 KB",
        "type": "csv",
        "description": "Annual carbon offset numbers, EV fleet kilometers traveled, and solar charging percentages.",
        "downloadContent": "Metric,Year_2025,Year_2026,Growth_Pct\nTotal_CO2_Averted_Tonnes,1240,4890,+294%\nElectric_KM_Traveled,4200000,16800000,+300%\nActive_EV_Fleet,650,2500,+284%\nSolar_Grid_Charging_Share,38%,72%,+89%\nFuel_Savings_Cr_INR,3.2,12.8,+300%"
      }
    ],
    "rubric": [
      {
        "criterion": "Data accuracy and chart selection",
        "points": 35,
        "description": "Correctly represented percentage growths without distorting scales or misleading axes."
      },
      {
        "criterion": "Visual hierarchy and scannability",
        "points": 35,
        "description": "Hero stat '4,890 Tonnes CO2 Averted' dominates with commanding visual weight."
      },
      {
        "criterion": "Aesthetic refinement and icon usage",
        "points": 30,
        "description": "Modern eco-tech palette (electric teal, fresh mint, crisp white) with sleek icons."
      }
    ],
    "solutionWalkthrough": {
      "overview": "Structured A4 poster into 3 logical tiers: 1) Hero headline with massive 4,890t CO2 stat, 2) 3-column KPI card row (Fleet, KM, Fuel Saved), 3) Solar Charging donut chart and 2027 Net Zero roadmap.",
      "stepByStepGuidance": [
        "Identify top 3 impactful numbers from spreadsheet.",
        "Create large typographic stat cards with supporting icons.",
        "Build donut chart in Canva/Figma representing 72% solar charging.",
        "Add subtle roadmap line at bottom depicting 2027 goals."
      ],
      "sampleOutputSnippet": "Key Stat Callout: '4,890 METRIC TONNES CO2 AVERTED IN 2026' in 48pt Bold Mint Green",
      "commonMistakesToAvoid": [
        "Crowding too many tiny numbers on one page, diluting the visual impact of the core achievement."
      ],
      "portfolioInclusionTip": "Data visualization is in high demand for corporate decks, whitepapers, and annual reports."
    }
  },
  {
    "id": "proj-tech-01",
    "slug": "checkout-gateway-defect-logging-payzen",
    "title": "Checkout Payment Gateway Defect Logging & Reproduction Steps",
    "department": "Technology",
    "careerSlug": "manual-software-testing",
    "careerTitle": "Manual Software Testing & QA",
    "difficulty": "Beginner",
    "estimatedHours": 3,
    "company": {
      "name": "PayZen E-commerce Services",
      "industry": "FinTech & Payment Aggregation",
      "location": "Bengaluru / Remote",
      "background": "PayZen processes checkout transactions for 1,200 online stores. A defect in the UPI auto-redirect flow is causing checkout drops on mobile Safari when users switch back from Google Pay.",
      "contactPerson": "Dinesh Shenoy",
      "role": "QA Lead Engineer"
    },
    "brief": "Investigate a high-severity checkout defect where users completing UPI payment on external apps return to an empty shopping cart instead of the order confirmation screen. Document a formal Jira Defect Report with clear environment specs, preconditions, step-by-step reproduction instructions, browser console log excerpts, and expected vs actual behavior.",
    "learningObjectives": [
      "Author industry-standard bug reports conforming to IEEE 829 standards",
      "Isolate reproducible steps for intermittent mobile checkout defects",
      "Capture network logs and console errors using Chrome/Safari DevTools",
      "Assign accurate severity (Critical/Blocker) vs priority levels"
    ],
    "requiredTools": [
      "Jira Simulator / Bug Tracker",
      "Browser Developer Tools"
    ],
    "prerequisites": [
      "Basic web browser developer tools inspection"
    ],
    "deliverables": [
      {
        "name": "Formal Jira Bug Report (PDF / Markdown)",
        "format": "Technical Report",
        "description": "Standardized defect ticket including Summary, Severity, Environment, Reproduction Steps, Expected vs Actual, and Console Trace."
      }
    ],
    "sampleDataFiles": [
      {
        "name": "payzen_defect_session_logs.json",
        "size": "3.8 KB",
        "type": "json",
        "description": "Browser network session log, HTTP status codes, localStorage state, and console error traces.",
        "downloadContent": "{\n  \"device\": \"iPhone 14 Pro, iOS 17.5.1\",\n  \"browser\": \"Mobile Safari 17.5\",\n  \"url\": \"https://checkout.payzen.io/v2/pay/session_88190\",\n  \"networkLogs\": [\n    {\"method\": \"POST\", \"path\": \"/api/v2/upi/intent\", \"status\": 200},\n    {\"method\": \"GET\", \"path\": \"/api/v2/session/verify\", \"status\": 404, \"error\": \"Session cookie expired during external app switch\"}\n  ],\n  \"consoleError\": \"Uncaught TypeError: Cannot read property 'orderId' of undefined at callback.js:42\"\n}"
      }
    ],
    "rubric": [
      {
        "criterion": "Reproduction step clarity",
        "points": 35,
        "description": "Steps are numbered, deterministic, and easily reproducible by any developer."
      },
      {
        "criterion": "Accurate severity and business impact justification",
        "points": 35,
        "description": "Classified as Blocker (P0) with clear explanation of revenue loss and cart abandonment."
      },
      {
        "criterion": "Technical log inclusion",
        "points": 30,
        "description": "Extracted the relevant 404 session verification error and console trace."
      }
    ],
    "solutionWalkthrough": {
      "overview": "Authored ticket: '[P0 - Blocker] Mobile Safari UPI payment callback returns 404 Session Expired on app return'. Provided numbered steps: 1) Add item to cart, 2) Select UPI, 3) Switch to GPay, 4) Complete payment, 5) Return to browser. Observed: Empty cart. Expected: Success page.",
      "stepByStepGuidance": [
        "Draft concise title with [Platform] [Component] [Behavior].",
        "List Environment: iOS 17.5.1, Mobile Safari.",
        "Write exact reproduction steps without vague language.",
        "Attach network log snippet showing 404 on `/api/v2/session/verify`."
      ],
      "sampleOutputSnippet": "Title: [iOS Safari] Returning from UPI App results in 404 Session Verification Failure and Empty Cart",
      "commonMistakesToAvoid": [
        "Writing vague steps like 'Pay using UPI and it fails sometimes'."
      ],
      "portfolioInclusionTip": "Every tech hiring manager looks for clear, reproducible bug writeups as proof of testing competence."
    }
  },
  {
    "id": "proj-tech-02",
    "slug": "telehealth-form-validation-test-suite-medconnect",
    "title": "Cross-Browser Appointment Booking Form Validation Test Suite",
    "department": "Technology",
    "careerSlug": "manual-software-testing",
    "careerTitle": "Manual Software Testing & QA",
    "difficulty": "Beginner",
    "estimatedHours": 3,
    "company": {
      "name": "MedConnect Telehealth",
      "industry": "Online Doctor Consultation",
      "location": "Hyderabad / Remote",
      "background": "MedConnect operates a web booking portal where patients book appointments with cardiologists and pediatricians.",
      "contactPerson": "Pooja Hegde",
      "role": "QA Manager"
    },
    "brief": "Design a comprehensive manual test suite for MedConnect's multi-step patient appointment booking form. Write 20 test cases covering boundary value analysis, negative inputs, phone number regex validations, time slot collision handling, and cross-browser responsiveness (Chrome, Safari, Firefox).",
    "learningObjectives": [
      "Apply Boundary Value Analysis (BVA) and Equivalence Partitioning (EP)",
      "Author structured test case matrices (Test ID, Description, Preconditions, Test Data, Expected Result, Status)",
      "Test form field validation rules (email regex, past dates, special characters)",
      "Conduct cross-browser consistency checks"
    ],
    "requiredTools": [
      "Excel / Google Sheets / TestRail",
      "Browser DevTools"
    ],
    "prerequisites": [
      "Understanding form fields and user input testing"
    ],
    "deliverables": [
      {
        "name": "Manual Test Case Specification Matrix (XLSX)",
        "format": "Spreadsheet",
        "description": "20 structured test cases with positive, negative, and edge-case validation scenarios."
      }
    ],
    "sampleDataFiles": [
      {
        "name": "medconnect_form_fields.json",
        "size": "2.6 KB",
        "type": "json",
        "description": "Form field rules, data types, character limits, and appointment business logic constraints.",
        "downloadContent": "{\n  \"fields\": [\n    {\"name\": \"patientName\", \"type\": \"text\", \"required\": true, \"minLength\": 2, \"maxLength\": 50, \"allowedChars\": \"A-Za-z and spaces only\"},\n    {\"name\": \"mobileNumber\", \"type\": \"tel\", \"required\": true, \"regex\": \"^[6-9][0-9]{9}$\", \"description\": \"10-digit Indian mobile starting with 6-9\"},\n    {\"name\": \"appointmentDate\", \"type\": \"date\", \"required\": true, \"rule\": \"Cannot be past date or >30 days in advance\"},\n    {\"name\": \"doctorSpecialty\", \"type\": \"select\", \"required\": true, \"options\": [\"Cardiology\", \"Pediatrics\", \"Dermatology\"]}\n  ]\n}"
      }
    ],
    "rubric": [
      {
        "criterion": "Test coverage across boundary and negative conditions",
        "points": 35,
        "description": "Included past date testing, 9-digit mobile numbers, and SQL injection strings (' OR 1=1)."
      },
      {
        "criterion": "Test case formatting and reproducibility",
        "points": 35,
        "description": "Structured with clear Test ID, Preconditions, Test Steps, Test Data, and Expected Result."
      },
      {
        "criterion": "Cross-browser edge cases",
        "points": 30,
        "description": "Included mobile Safari datepicker interaction and desktop Firefox select rendering."
      }
    ],
    "solutionWalkthrough": {
      "overview": "Structured 20 test cases: 6 Positive functional tests, 10 Negative validation tests (e.g., entering alphabet in mobile, selecting yesterday's date), 4 Cross-browser responsive tests.",
      "stepByStepGuidance": [
        "Map each input field to Equivalence Classes (Valid vs Invalid).",
        "Identify boundary limits (e.g. mobile length 9, 10, 11 digits).",
        "Formulate expected error messages matching UX specifications.",
        "Execute and log Pass/Fail statuses."
      ],
      "sampleOutputSnippet": "TC-04: Enter '98470' (5 digits) in Mobile | Expected: 'Please enter valid 10-digit mobile number' | Status: PASS",
      "commonMistakesToAvoid": [
        "Writing only 'happy path' positive tests and ignoring negative edge cases."
      ],
      "portfolioInclusionTip": "A neat 20-case test matrix proves you have formal QA testing discipline."
    }
  },
  {
    "id": "proj-tech-03",
    "slug": "database-duplicate-anomaly-audit-retailpulse",
    "title": "5,000-Row Customer Database Anomaly, Duplicate & Quality Audit",
    "department": "Technology",
    "careerSlug": "excel-data-management",
    "careerTitle": "Excel & Data Management",
    "difficulty": "Intermediate",
    "estimatedHours": 4,
    "company": {
      "name": "RetailPulse Analytics",
      "industry": "Retail Intelligence & Loyalty Data",
      "location": "Bengaluru / Remote",
      "background": "RetailPulse consolidates customer loyalty transaction records for 20 supermarket chains. Recent POS database migrations created duplicated entries, truncated phone numbers, and corrupted postal pin codes.",
      "contactPerson": "Anand Mohan",
      "role": "Data Quality Lead"
    },
    "brief": "Perform a rigorous data quality audit on a 5,000-row customer database export. Detect duplicate records via fuzzy matching on Name + Phone, validate 6-digit Indian PIN codes, identify corrupted email syntax, format standardized ISO dates, and produce an Executive Data Health Scorecard.",
    "learningObjectives": [
      "Execute data deduplication strategies using spreadsheet functions and Power Query",
      "Validate regex patterns for email addresses and postal pin codes",
      "Normalize inconsistent telephone numbers (handling +91, 0, and space variations)",
      "Formulate an objective Data Quality Index (DQI)"
    ],
    "requiredTools": [
      "Excel / Google Sheets / Python / OpenRefine"
    ],
    "prerequisites": [
      "Spreadsheet formulas (COUNTIF, TRIM, TEXT, VLOOKUP)"
    ],
    "deliverables": [
      {
        "name": "Cleaned Master Customer Dataset (CSV)",
        "format": "Clean CSV",
        "description": "Scrubbed dataset with duplicates removed, normalized 10-digit phone numbers, and valid PIN codes."
      },
      {
        "name": "Data Quality Audit Scorecard (PDF / XLSX)",
        "format": "Report",
        "description": "Executive report detailing Error Rates, Duplicate Frequency, and Data Health Score."
      }
    ],
    "sampleDataFiles": [
      {
        "name": "retailpulse_dirty_customer_data.csv",
        "size": "6.2 KB",
        "type": "csv",
        "description": "Sample extract of dirty database entries with corrupted phones, trailing spaces, and duplicate profiles.",
        "downloadContent": "Cust_ID,Full_Name,Mobile_Raw,Email,Postal_PIN,Signup_Date\nCUST-001,  Arjun Varma ,+91 9847012345,arjun.v@gmail.com,682001,12/10/2025\nCUST-002,Arjun Varma,9847012345,arjun.v@gmail.com,682001,2025-10-12\nCUST-003,Fatima Zahra,09447199201,fatima@yahoo,682035,14/11/2025\nCUST-004,Rohan Nair,9895011,rohan.nair@outlook.com,6820,18/11/2025\nCUST-005,Pooja Hegde,9846055441,pooja@@domain.com,682020,02/12/2025"
      }
    ],
    "rubric": [
      {
        "criterion": "Deduplication accuracy",
        "points": 35,
        "description": "Correctly merged CUST-001 and CUST-002 based on normalized phone matching."
      },
      {
        "criterion": "Anomaly detection precision",
        "points": 35,
        "description": "Flagged CUST-003 (invalid email syntax), CUST-004 (7-digit phone & 4-digit PIN), CUST-005 (double @@ in email)."
      },
      {
        "criterion": "Data cleansing formula automation",
        "points": 30,
        "description": "Applied TRIM, RIGHT(10), and PROPER functions systematically."
      }
    ],
    "solutionWalkthrough": {
      "overview": "Cleaned names using `=TRIM(PROPER(B2))`. Normalized phone numbers using `=RIGHT(SUBSTITUTE(SUBSTITUTE(C2,\"+\",\"\"),\" \",\"\"), 10)`. Flagged invalid PINs where `LEN(PIN) != 6`. Removed 14% duplicate rate.",
      "stepByStepGuidance": [
        "Clean whitespace using TRIM.",
        "Extract uniform 10-digit phone numbers.",
        "Run duplicate detection on Phone + Name key.",
        "Highlight invalid emails containing missing domains or double @ symbols."
      ],
      "sampleOutputSnippet": "Total Rows: 5,000 | Duplicates Purged: 680 | Clean Records: 4,320 | Data Health Index: 86.4%",
      "commonMistakesToAvoid": [
        "Deleting records manually row-by-row instead of using automated conditional logic or Power Query."
      ],
      "portfolioInclusionTip": "Every enterprise struggles with dirty customer data; this proves your practical data operations readiness."
    }
  },
  {
    "id": "proj-tech-04",
    "slug": "webhook-order-automation-autoflow",
    "title": "Zapier / Make Order-to-Slack-and-Sheets Automation Architecture",
    "department": "Technology",
    "careerSlug": "crm-data-management",
    "careerTitle": "CRM & Customer Data Management",
    "difficulty": "Intermediate",
    "estimatedHours": 3,
    "company": {
      "name": "AutoFlow Digital Operations",
      "industry": "No-Code Workflow Automation Consulting",
      "location": "Bengaluru / Remote",
      "background": "AutoFlow designs automated backend workflows for fast-growing businesses. A client needed new high-value Shopify orders (>\u20b95,000) automatically logged in Google Sheets and alerted on Slack.",
      "contactPerson": "Karan Mehra",
      "role": "Lead Automation Architect"
    },
    "brief": "Design and document a complete multi-step Zapier/Make automation workflow. Parse incoming webhook JSON payloads from an e-commerce platform, apply conditional filtering (Order Value > \u20b95,000 AND Payment Status == 'PAID'), format dates to IST, log a row into Google Sheets, and format a rich Slack block notification with customer details.",
    "learningObjectives": [
      "Parse and map structured webhook JSON payloads",
      "Configure conditional router filters (Logic branching)",
      "Format data transformations (currency formatting, date timezone offsets)",
      "Draft Slack Block Kit visual notification templates"
    ],
    "requiredTools": [
      "Zapier / Make.com Simulator",
      "JSON Editor"
    ],
    "prerequisites": [
      "Basic understanding of webhooks and triggers"
    ],
    "deliverables": [
      {
        "name": "Workflow Blueprint Specification (PDF / JSON)",
        "format": "Technical Blueprint",
        "description": "Visual diagram and step-by-step logic specification for the 5-step automation pipeline."
      }
    ],
    "sampleDataFiles": [
      {
        "name": "shopify_order_webhook.json",
        "size": "3.1 KB",
        "type": "json",
        "description": "Sample incoming order webhook payload with line items, customer details, and payment gateway metadata.",
        "downloadContent": "{\n  \"event\": \"order.created\",\n  \"order_id\": 9948120,\n  \"created_at\": \"2026-11-20T10:14:22Z\",\n  \"customer\": {\n    \"first_name\": \"Divya\",\n    \"last_name\": \"Nambiar\",\n    \"email\": \"divya.n@example.com\",\n    \"phone\": \"+919847123901\"\n  },\n  \"total_price\": 7499.00,\n  \"financial_status\": \"paid\",\n  \"line_items\": [\n    {\"title\": \"Ergonomic Desk Chair Pro\", \"qty\": 1, \"price\": 7499.00}\n  ]\n}"
      }
    ],
    "rubric": [
      {
        "criterion": "Filter condition logic accuracy",
        "points": 35,
        "description": "Accurately set Filter: total_price >= 5000 AND financial_status == 'paid'."
      },
      {
        "criterion": "Payload field mapping precision",
        "points": 35,
        "description": "Correctly mapped Customer Name, Email, Phone, Order ID, and Amount to Google Sheets."
      },
      {
        "criterion": "Slack notification template design",
        "points": 30,
        "description": "Created clean, professional Slack message format with clickable order URL."
      }
    ],
    "solutionWalkthrough": {
      "overview": "Step 1: Webhook Trigger (Catch Hook). Step 2: Filter (total_price >= 5000 & status == paid). Step 3: Date Formatter (UTC to IST). Step 4: Google Sheets (Create Row). Step 5: Slack (Send Channel Message).",
      "stepByStepGuidance": [
        "Map JSON path `customer.first_name` + `customer.last_name`.",
        "Configure conditional branch to prevent noise on small orders.",
        "Convert UTC timestamp to Indian Standard Time (GMT+5:30).",
        "Draft Slack template: '\ud83c\udf89 High-Value Order Alert: #9948120 | \u20b97,499 | Divya Nambiar'."
      ],
      "sampleOutputSnippet": "Pipeline: Webhook -> Filter (Price >= 5000) -> Timezone (IST) -> Sheets Row -> Slack Ping",
      "commonMistakesToAvoid": [
        "Forgetting to filter out unpaid or failed checkout attempts, cluttering team channels with bogus alerts."
      ],
      "portfolioInclusionTip": "No-code automation is one of the highest-paid modern administrative and operations skills."
    }
  },
  {
    "id": "proj-tech-05",
    "slug": "customer-service-knowledge-base-sop-finguard",
    "title": "Customer Service L1 Knowledge Base Article & Troubleshooting SOP",
    "department": "Technology",
    "careerSlug": "document-formatting",
    "careerTitle": "Document Formatting & Office Admin",
    "difficulty": "Beginner",
    "estimatedHours": 3,
    "company": {
      "name": "FinGuard Security Systems",
      "industry": "Smart Home Alarms & Surveillance Tech",
      "location": "Bengaluru / Remote",
      "background": "FinGuard manufactures smart door locks and Wi-Fi cameras. Their L1 support team faces high call times because agents lack clear, step-by-step troubleshooting standard operating procedures (SOPs).",
      "contactPerson": "Ravi Teja",
      "role": "Support Operations Manager"
    },
    "brief": "Author a comprehensive, professional Knowledge Base Article & Troubleshooting SOP for FinGuard's 'Smart Lock Wi-Fi Offline / Disconnected Error'. Structure the guide with Symptom Identification, Root Cause Matrix, 4-Step User Resolution Flow (with reset button guidelines), Escalation Triggers for L2 hardware technicians, and an Internal Agent FAQ.",
    "learningObjectives": [
      "Write standard operating procedures (SOPs) following technical documentation guidelines",
      "Structure troubleshooting decision trees (If X occurs, verify Y, then execute Z)",
      "Format markdown documents with callouts, warnings, and clear visual hierarchy",
      "Draft agent macros for fast customer resolution"
    ],
    "requiredTools": [
      "Markdown / Google Docs / Notion",
      "Notion / Confluence Template"
    ],
    "prerequisites": [
      "Clear technical instructional writing"
    ],
    "deliverables": [
      {
        "name": "Complete L1 Support Knowledge Base SOP (PDF / Markdown)",
        "format": "Technical SOP Document",
        "description": "Standardized internal SOP complete with flowchart logic, step-by-step guidance, and escalation criteria."
      }
    ],
    "sampleDataFiles": [
      {
        "name": "finguard_smartlock_offline_symptoms.json",
        "size": "2.4 KB",
        "type": "json",
        "description": "Hardware LED blink codes, router 2.4GHz vs 5GHz incompatibility notes, and battery voltage thresholds.",
        "downloadContent": "{\n  \"device\": \"FinGuard Lock Pro V3\",\n  \"error\": \"Device Offline in Mobile App\",\n  \"ledCodes\": {\n    \"BlinkingRed\": \"Low Battery (<15% voltage)\",\n    \"SolidBlue\": \"Connected to Wi-Fi normally\",\n    \"BlinkingBlue\": \"Pairing mode ready\",\n    \"RapidFlashingRed\": \"Wi-Fi authentication failed / wrong password\"\n  },\n  \"commonCauses\": [\"User router updated to 5GHz only (Lock requires 2.4GHz)\", \"AA Alkaline batteries depleted\", \"Router firewall blocking port 8883\"]\n}"
      }
    ],
    "rubric": [
      {
        "criterion": "Troubleshooting logic structure",
        "points": 35,
        "description": "Structured logically from easiest fix (batteries/LED code check) to advanced (router frequency/factory reset)."
      },
      {
        "criterion": "Clarity of language for agents and customers",
        "points": 35,
        "description": "Explains 2.4GHz vs 5GHz Wi-Fi difference in crystal-clear plain English without jargon."
      },
      {
        "criterion": "Clear escalation boundary criteria",
        "points": 30,
        "description": "Defines exact conditions when to dispatch field technician (e.g. physical deadbolt motor jam)."
      }
    ],
    "solutionWalkthrough": {
      "overview": "Authored SOP: 1) Check LED code (if flashing red -> batteries dead), 2) Verify phone is on 2.4GHz Wi-Fi band, 3) 5-second paperclip button reset, 4) Re-pair via FinGuard app. If motor does not turn, escalate to L2 Field Hardware.",
      "stepByStepGuidance": [
        "Open with summary table mapping LED blink colors to problems.",
        "Provide step 1 (Check 4x AA batteries).",
        "Provide step 2 (Ensure router broadcasts 2.4GHz network).",
        "Include copy-paste chat macro for agents to send to customers."
      ],
      "sampleOutputSnippet": "SOP Code: SOP-FG-301 | Title: Resolving 'Smart Lock Offline' Status | Estimated Agent Time: 4 mins",
      "commonMistakesToAvoid": [
        "Telling customers to factory reset before checking if batteries are simply exhausted."
      ],
      "portfolioInclusionTip": "Document and SOP creation is a foundational skill for corporate administrative and tech support roles."
    }
  }
];

export function getProjectBySlug(slug: string): WorkplaceProjectDossier | undefined {
  return simulatedWorkplaceProjects.find(p => p.slug === slug || p.id === slug);
}

export function getProjectsByDepartment(dept: string): WorkplaceProjectDossier[] {
  if (!dept || dept === 'All') return simulatedWorkplaceProjects;
  return simulatedWorkplaceProjects.filter(p => p.department.toLowerCase() === dept.toLowerCase());
}
