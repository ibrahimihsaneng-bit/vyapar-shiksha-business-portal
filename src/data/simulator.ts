import { WorkplaceSimulatorTask } from '@/types';

export const simulationTasks: WorkplaceSimulatorTask[] = [
  {
    "id": "sim-acct-reconciliation",
    "department": "Accounting",
    "title": "Corporate Bank Statement Reconciliation & Ledger Adjustments",
    "companyName": "Apex Trading Co. (Kochi)",
    "estimatedMinutes": 20,
    "brief": "Apex Trading Co. has provided their ICICI corporate bank statement ending October 31st and their internal cash book ledger. Compare transactions, identify timing discrepancies (unpresented cheques, direct credits, uncredited deposits, bank charges), calculate the adjusted cash book and reconciled bank balance, and achieve exact zero-variance reconciliation.",
    "instructions": [
      "Bank statement ending balance is \u20b93,43,450. Internal cash book ending balance is \u20b92,98,400.",
      "Uncleared cheque deposit: \u20b919,200 deposited on Oct 27 not yet credited by bank.",
      "Unpresented cheques issued to suppliers: CHQ 40132 (\u20b928,650) and CHQ 40134 (\u20b92,800) not yet cleared (Total = \u20b931,450).",
      "Direct NEFT credit from customer Modern Bakers: \u20b934,000 in bank statement but missing from cash book.",
      "Auto-sweep interest credit: \u20b90 for this period.",
      "Quarterly account maintenance fee: \u20b91,200 debited by bank but not recorded in cash book.",
      "Enter the Adjusted Cash Book Balance, Reconciled Bank Balance, and verify Difference is exactly 0."
    ],
    "inputData": {
      "bankStatementBalance": 343450,
      "cashBookBalance": 298400,
      "uncreditedChequeDeposit": 19200,
      "unpresentedChequesTotal": 31450,
      "directCustomerCredit": 34000,
      "autoSweepInterest": 0,
      "bankChargesDebited": 1200,
      "ledgerTransactions": [
        {
          "id": "TX-01",
          "vendor": "Kalyan Packaging",
          "category": "Direct Sales",
          "account": "ICICI Corp 8812",
          "date": "10/03/2026",
          "amount": 42500,
          "status": "Matched"
        },
        {
          "id": "TX-02",
          "vendor": "Sri Balaji Polymers",
          "category": "Supplier Bill",
          "account": "ICICI Corp 8812",
          "date": "10/06/2026",
          "amount": -65000,
          "status": "Matched"
        },
        {
          "id": "TX-03",
          "vendor": "Modern Bakers",
          "category": "Direct NEFT",
          "account": "ICICI Corp 8812",
          "date": "10/15/2026",
          "amount": 34000,
          "status": "Unverified"
        },
        {
          "id": "TX-04",
          "vendor": "Grand Mart Deposit",
          "category": "Counter Cheque",
          "account": "ICICI Corp 8812",
          "date": "10/27/2026",
          "amount": 19200,
          "status": "Uncleared"
        },
        {
          "id": "TX-05",
          "vendor": "ICICI Bank Charges",
          "category": "Bank Fee",
          "account": "ICICI Corp 8812",
          "date": "10/31/2026",
          "amount": -1200,
          "status": "Unverified"
        },
        {
          "id": "TX-06",
          "vendor": "Auto Sweep Interest",
          "category": "Finance Income",
          "account": "ICICI Corp 8812",
          "date": "10/31/2026",
          "amount": 1400,
          "status": "Unverified"
        }
      ]
    },
    "formFields": [
      {
        "id": "adjustedCashBook",
        "label": "Adjusted Cash Book Balance (\u20b9)",
        "type": "number",
        "placeholder": "e.g. 332600"
      },
      {
        "id": "reconciledBankBalance",
        "label": "Reconciled Bank Statement Balance (\u20b9)",
        "type": "number",
        "placeholder": "e.g. 332600"
      },
      {
        "id": "reconciliationDifference",
        "label": "Reconciliation Difference (\u20b9) (Must be 0 when balanced)",
        "type": "number",
        "placeholder": "0"
      },
      {
        "id": "discrepancyCount",
        "label": "Total Number of Timing Discrepancies Identified",
        "type": "select",
        "options": [
          "3",
          "4",
          "5",
          "6"
        ],
        "placeholder": "Select count"
      },
      {
        "id": "auditorNotes",
        "label": "Auditor Summary Note for Senior Accountant",
        "type": "textarea",
        "placeholder": "Explain the cash book additions, deductions, and bank balance adjustments..."
      }
    ],
    "solutionKey": {
      "adjustedCashBook": 331200,
      "reconciledBankBalance": 331200,
      "reconciliationDifference": 0,
      "discrepancyCount": "3"
    },
    "gradingRubric": [
      {
        "field": "adjustedCashBook",
        "criteria": "Cash book adjusted correctly: 2,98,400 + 34,000 - 1,200 = \u20b93,31,200",
        "points": 30
      },
      {
        "field": "reconciledBankBalance",
        "criteria": "Bank balance adjusted correctly: 3,43,450 + 19,200 - 31,450 = \u20b93,31,200",
        "points": 30
      },
      {
        "field": "reconciliationDifference",
        "criteria": "Both adjusted sides equate with 0 variance",
        "points": 20
      },
      {
        "field": "discrepancyCount",
        "criteria": "Identified all 3 distinct timing items (deposit in transit, unpresented cheques, unrecorded net items)",
        "points": 10
      },
      {
        "field": "auditorNotes",
        "criteria": "Clear professional summary of adjustments",
        "points": 10
      }
    ]
  },
  {
    "id": "sim-acct-invoicing",
    "department": "Accounting",
    "title": "GST Invoicing & Inter-State vs Intra-State Tax Calculation",
    "companyName": "Meridian Health Supplies (Bengaluru)",
    "estimatedMinutes": 15,
    "brief": "Prepare a commercial tax invoice for an order from City Care Hospital (Karnataka, Intra-state). Calculate line totals, apply a 5% trade discount, determine CGST (6%) and SGST (6%) on taxable value, and establish the final invoice amount.",
    "instructions": [
      "Line 1: 100 boxes of Sterile Gloves at \u20b9350/box.",
      "Line 2: 20 Digital Thermometers at \u20b91,400/unit.",
      "Gross Total = (100 * 350) + (20 * 1400) = \u20b963,000.",
      "Apply 5% Trade Discount on Gross Total before tax.",
      "Apply GST: Intra-state transaction requires CGST 6% + SGST 6% (total 12%).",
      "Calculate final invoice payable amount rounded to nearest rupee."
    ],
    "inputData": {
      "customer": "City Care Hospital, Bengaluru (Karnataka)",
      "gstin": "29AAACC1204K1ZT",
      "items": [
        {
          "name": "Sterile Surgical Gloves Box",
          "qty": 100,
          "rate": 350
        },
        {
          "name": "Digital Infrared Thermometer",
          "qty": 20,
          "rate": 1400
        }
      ],
      "discountPct": 5,
      "gstRate": 12
    },
    "formFields": [
      {
        "id": "grossTotal",
        "label": "Gross Total Before Discount (\u20b9)",
        "type": "number",
        "placeholder": "63000"
      },
      {
        "id": "discountAmount",
        "label": "Trade Discount (5%) (\u20b9)",
        "type": "number",
        "placeholder": "3150"
      },
      {
        "id": "taxableValue",
        "label": "Net Taxable Turnover (\u20b9)",
        "type": "number",
        "placeholder": "59850"
      },
      {
        "id": "cgstAmount",
        "label": "CGST @ 6% (\u20b9)",
        "type": "number",
        "placeholder": "3591"
      },
      {
        "id": "sgstAmount",
        "label": "SGST @ 6% (\u20b9)",
        "type": "number",
        "placeholder": "3591"
      },
      {
        "id": "invoiceGrandTotal",
        "label": "Final Invoice Total (\u20b9)",
        "type": "number",
        "placeholder": "67032"
      }
    ],
    "solutionKey": {
      "grossTotal": 63000,
      "discountAmount": 3150,
      "taxableValue": 59850,
      "cgstAmount": 3591,
      "sgstAmount": 3591,
      "invoiceGrandTotal": 67032
    },
    "gradingRubric": [
      {
        "field": "grossTotal",
        "criteria": "Accurate gross calculation: (100*350) + (20*1400) = \u20b963,000",
        "points": 20
      },
      {
        "field": "discountAmount",
        "criteria": "5% discount computed accurately: \u20b93,150",
        "points": 20
      },
      {
        "field": "taxableValue",
        "criteria": "Taxable turnover: 63,000 - 3,150 = \u20b959,850",
        "points": 20
      },
      {
        "field": "cgstAmount",
        "criteria": "CGST 6% of 59,850 = \u20b93,591",
        "points": 15
      },
      {
        "field": "sgstAmount",
        "criteria": "SGST 6% of 59,850 = \u20b93,591",
        "points": 15
      },
      {
        "field": "invoiceGrandTotal",
        "criteria": "Grand total: 59,850 + 3,591 + 3,591 = \u20b967,032",
        "points": 10
      }
    ]
  },
  {
    "id": "sim-ecom-catalog",
    "department": "E-commerce",
    "title": "Shopify Store Catalog Audit & Missing SKU Resolution",
    "companyName": "Lumina Home Decor (Online Store)",
    "estimatedMinutes": 15,
    "brief": "A batch of 3 home decor products was uploaded with errors: missing SKU codes, incorrect GST tax brackets, and negative inventory. Standardize SKUs, calculate 12% GST retail price, and select the correct catalog action.",
    "instructions": [
      "Product 1: 'Handmade Ceramic Vase' is missing an SKU. Assign standard SKU format: LUM-VASE-01.",
      "Product 2: 'Boho Cotton Throw' price is \u20b91,200 excl tax. Apply 12% GST to find the final retail price (1200 * 1.12).",
      "Product 3: Stock quantity is listed as -5. Reset negative stock to 0 and flag as 'Out of Stock'.",
      "Select the proper operational publishing action."
    ],
    "inputData": {
      "products": [
        {
          "id": 1,
          "name": "Handmade Ceramic Vase",
          "category": "Vases",
          "missing": "SKU"
        },
        {
          "id": 2,
          "name": "Boho Cotton Throw",
          "priceExclTax": 1200,
          "gstRate": "12%"
        },
        {
          "id": 3,
          "name": "Brass Pillar Candlestick",
          "stock": -5
        }
      ]
    },
    "formFields": [
      {
        "id": "product1Sku",
        "label": "Assigned SKU for Handmade Ceramic Vase",
        "type": "text",
        "placeholder": "LUM-VASE-01"
      },
      {
        "id": "product2PriceInclTax",
        "label": "Final Retail Price with 12% GST for Boho Cotton Throw (\u20b9)",
        "type": "number",
        "placeholder": "1344"
      },
      {
        "id": "product3StockStatus",
        "label": "Stock Status for Brass Candlestick",
        "type": "select",
        "options": [
          "In Stock",
          "Out of Stock",
          "Backorder Permitted"
        ],
        "placeholder": "Select status"
      },
      {
        "id": "batchAction",
        "label": "Final Catalog Action",
        "type": "select",
        "options": [
          "Publish All Immediately",
          "Publish Fixed Items & Notify Inventory Manager",
          "Reject Entire Batch"
        ],
        "placeholder": "Select action"
      }
    ],
    "solutionKey": {
      "product1Sku": "LUM-VASE-01",
      "product2PriceInclTax": 1344,
      "product3StockStatus": "Out of Stock",
      "batchAction": "Publish Fixed Items & Notify Inventory Manager"
    },
    "gradingRubric": [
      {
        "field": "product1Sku",
        "criteria": "Matches required SKU format LUM-VASE-01",
        "points": 30
      },
      {
        "field": "product2PriceInclTax",
        "criteria": "Accurate 12% GST calculation (\u20b91,344)",
        "points": 30
      },
      {
        "field": "product3StockStatus",
        "criteria": "Correctly identifies Out of Stock status",
        "points": 20
      },
      {
        "field": "batchAction",
        "criteria": "Picks prudent operations workflow",
        "points": 20
      }
    ]
  },
  {
    "id": "sim-ecom-inventory",
    "department": "E-commerce",
    "title": "Inventory Velocity & Reorder Point (ROP) Calculation",
    "companyName": "UrbanTrend Apparel (Mumbai)",
    "estimatedMinutes": 15,
    "brief": "Analyze sales velocity for the flagship 'Oversized Black Hoodie'. Calculate Average Daily Sales (ADS), Days of Inventory Remaining (DOIR), and the Reorder Point (ROP) with a 5-day safety cushion.",
    "instructions": [
      "90-Day sales total: 1,350 units. Calculate Average Daily Sales (ADS) = 1350 / 90.",
      "Current warehouse stock: 60 units. Calculate Days of Inventory Remaining = Current Stock / ADS.",
      "Supplier manufacturing lead time: 14 days.",
      "Safety stock buffer: 5 days of sales (ADS * 5).",
      "Calculate Reorder Point: ROP = (ADS * Lead Time) + Safety Stock.",
      "Determine if an immediate purchase order is required (Stock <= ROP)."
    ],
    "inputData": {
      "sku": "UT-HD-BLK-L",
      "product": "Oversized Fleece Hoodie Black L",
      "sales90Days": 1350,
      "currentStock": 60,
      "leadDays": 14,
      "safetyDays": 5
    },
    "formFields": [
      {
        "id": "dailySalesVelocity",
        "label": "Average Daily Sales (ADS) (Units / Day)",
        "type": "number",
        "placeholder": "15"
      },
      {
        "id": "daysRemaining",
        "label": "Days of Inventory Remaining (DOIR)",
        "type": "number",
        "placeholder": "4"
      },
      {
        "id": "reorderPoint",
        "label": "Calculated Reorder Point (ROP) (Units)",
        "type": "number",
        "placeholder": "285"
      },
      {
        "id": "urgencyLevel",
        "label": "Inventory Urgency Status",
        "type": "select",
        "options": [
          "Healthy Stock Level",
          "Moderate Reorder Window",
          "Critical Stockout Imminent - Immediate PO Required"
        ],
        "placeholder": "Select status"
      }
    ],
    "solutionKey": {
      "dailySalesVelocity": 15,
      "daysRemaining": 4,
      "reorderPoint": 285,
      "urgencyLevel": "Critical Stockout Imminent - Immediate PO Required"
    },
    "gradingRubric": [
      {
        "field": "dailySalesVelocity",
        "criteria": "1350 / 90 = 15 units per day",
        "points": 25
      },
      {
        "field": "daysRemaining",
        "criteria": "60 / 15 = 4 days of stock remaining",
        "points": 25
      },
      {
        "field": "reorderPoint",
        "criteria": "ROP = (15 * 14) + (15 * 5) = 210 + 75 = 285 units",
        "points": 30
      },
      {
        "field": "urgencyLevel",
        "criteria": "Accurately flagged critical stockout condition",
        "points": 20
      }
    ]
  },
  {
    "id": "sim-vo-calendar",
    "department": "Virtual Office",
    "title": "Cross-Timezone Executive Calendar De-confliction",
    "companyName": "Horizon Venture Partners (London / Singapore)",
    "estimatedMinutes": 15,
    "brief": "The Managing Director is based in London (GMT). An LP investor in Singapore (SGT, GMT+8) requested a meeting at 2:00 PM SGT on Tuesday. Meanwhile, an existing personal medical appointment occupies 1:30 PM to 2:30 PM GMT. Convert times, detect the conflict, and reschedule properly.",
    "instructions": [
      "Convert requested Singapore slot: 2:00 PM SGT = 6:00 AM GMT (Violates executive morning focus rule before 9 AM GMT).",
      "Check Tuesday afternoon: Medical appointment fixed at 1:30 PM to 2:30 PM GMT.",
      "Find a mutually acceptable overlapping business window for Singapore (SGT is GMT+8; business day ends 6:30 PM SGT = 10:30 AM GMT).",
      "Recommend the optimal GMT meeting time slot."
    ],
    "inputData": {
      "executiveBase": "London (GMT +0)",
      "requesterBase": "Singapore (SGT +8)",
      "requesterPreferredLocal": "2:00 PM SGT",
      "executiveRestrictedHours": "Before 9:00 AM GMT"
    },
    "formFields": [
      {
        "id": "convertedGmtTime",
        "label": "2:00 PM SGT in London GMT",
        "type": "select",
        "options": [
          "6:00 AM GMT",
          "8:00 AM GMT",
          "10:00 AM GMT",
          "10:00 PM GMT"
        ],
        "placeholder": "Select GMT time"
      },
      {
        "id": "primaryConflictReason",
        "label": "Primary Conflict with 2:00 PM SGT Request",
        "type": "select",
        "options": [
          "Overlaps with Dentist appointment",
          "Occurs at 6:00 AM GMT outside executive working hours",
          "Singapore partner is sleeping",
          "No conflict"
        ],
        "placeholder": "Select reason"
      },
      {
        "id": "recommendedSlotGmt",
        "label": "Recommended London GMT Time Slot",
        "type": "select",
        "options": [
          "9:30 AM GMT (5:30 PM SGT)",
          "1:30 PM GMT (9:30 PM SGT)",
          "3:30 PM GMT (11:30 PM SGT)",
          "6:00 AM GMT (2:00 PM SGT)"
        ],
        "placeholder": "Select slot"
      },
      {
        "id": "confirmationEmail",
        "label": "Professional Rescheduling Email to Singapore Partner",
        "type": "textarea",
        "placeholder": "Dear Mr. Tan, thank you for reaching out. Due to the 8-hour timezone offset..."
      }
    ],
    "solutionKey": {
      "convertedGmtTime": "6:00 AM GMT",
      "primaryConflictReason": "Occurs at 6:00 AM GMT outside executive working hours",
      "recommendedSlotGmt": "9:30 AM GMT (5:30 PM SGT)"
    },
    "gradingRubric": [
      {
        "field": "convertedGmtTime",
        "criteria": "Accurately converted 14:00 SGT (-8 hrs) = 06:00 GMT",
        "points": 30
      },
      {
        "field": "primaryConflictReason",
        "criteria": "Identified 6 AM unreasonable time violation",
        "points": 30
      },
      {
        "field": "recommendedSlotGmt",
        "criteria": "Selected 9:30 AM GMT (5:30 PM SGT) overlapping both business days",
        "points": 25
      },
      {
        "field": "confirmationEmail",
        "criteria": "Polite, diplomatic tone offering exact alternative",
        "points": 15
      }
    ]
  },
  {
    "id": "sim-vo-inbox",
    "department": "Virtual Office",
    "title": "Executive Inbox Triage & Priority Routing",
    "companyName": "GlobalBridge Consulting (Dubai / Remote)",
    "estimatedMinutes": 15,
    "brief": "Triage 4 incoming executive emails for the Senior Partner. Categorize urgency, assign triage labels (Immediate Action, Delegate, File/Archive, Spam), and draft an end-of-day 1-bullet action item for leadership.",
    "instructions": [
      "Email 1: Emirates Port CFO requesting urgent contract signature before 5 PM GST today.",
      "Email 2: Cold sales pitch from software vendor promoting AI cold-calling tools.",
      "Email 3: Junior consultant submitting draft slides for Thursday's client workshop.",
      "Email 4: Major client reporting an unexpected $3,500 billing discrepancy on their invoice."
    ],
    "inputData": {
      "executive": "Tariq Al-Mansoor (Senior Partner)",
      "currentTime": "2:30 PM GST",
      "emailCount": 4
    },
    "formFields": [
      {
        "id": "email1Action",
        "label": "Email 1 Action (Emirates Port Contract Signature by 5 PM)",
        "type": "select",
        "options": [
          "Immediate Action - Notify Partner & Prepare Document",
          "Delegate to Junior Staff",
          "Archive / Read Tomorrow",
          "Mark as Spam"
        ],
        "placeholder": "Select action"
      },
      {
        "id": "email2Action",
        "label": "Email 2 Action (Cold Sales Pitch)",
        "type": "select",
        "options": [
          "Immediate Action",
          "Delegate to IT",
          "Mark as Spam / Archive",
          "Schedule Call with Partner"
        ],
        "placeholder": "Select action"
      },
      {
        "id": "email4Action",
        "label": "Email 4 Action ($3,500 Client Billing Discrepancy)",
        "type": "select",
        "options": [
          "Immediate VIP Action - Forward to Billing Team & Send Holding Reply",
          "Ignore until payment is made",
          "Archive",
          "Mark as Spam"
        ],
        "placeholder": "Select action"
      },
      {
        "id": "executiveBriefing",
        "label": "End-of-Day Executive 3-Bullet Summary for Partner",
        "type": "textarea",
        "placeholder": "1) Emirates Port contract requires signature by 5 PM... 2) Client billing discrepancy forwarded to accounts..."
      }
    ],
    "solutionKey": {
      "email1Action": "Immediate Action - Notify Partner & Prepare Document",
      "email2Action": "Mark as Spam / Archive",
      "email4Action": "Immediate VIP Action - Forward to Billing Team & Send Holding Reply"
    },
    "gradingRubric": [
      {
        "field": "email1Action",
        "criteria": "Flagged critical time-bound legal contract",
        "points": 30
      },
      {
        "field": "email2Action",
        "criteria": "Filtered out unsolicited sales pitch without bothering executive",
        "points": 25
      },
      {
        "field": "email4Action",
        "criteria": "Addressed VIP client billing issue with immediate holding response",
        "points": 25
      },
      {
        "field": "executiveBriefing",
        "criteria": "Concise, actionable bulleted briefing",
        "points": 20
      }
    ]
  },
  {
    "id": "sim-support-delayed",
    "department": "Customer Support",
    "title": "Customer Ticket De-escalation: Delayed Courier Shipment",
    "companyName": "SwiftCart Logistics & Support",
    "estimatedMinutes": 15,
    "brief": "A high-value customer (Rahul Sharma) ordered a birthday gift 5 days ago with expedited shipping. The courier tracking has been stuck in 'In Transit - Hub Sort Delay' for 48 hours. Rahul sends an angry message threatening a consumer court complaint.",
    "instructions": [
      "Acknowledge the customer's frustration regarding his wife's birthday gift without being defensive.",
      "Select the appropriate communication tone and company empathy standard.",
      "Offer an approved goodwill compensation package.",
      "Draft an empathetic, solution-oriented customer response message."
    ],
    "inputData": {
      "customerName": "Rahul Sharma",
      "orderId": "SW-89412",
      "item": "Noise-Cancelling Headphones",
      "promisedDelivery": "Nov 22",
      "currentDate": "Nov 24",
      "orderValue": 4999
    },
    "formFields": [
      {
        "id": "toneSelection",
        "label": "Selected Communication Tone",
        "type": "select",
        "options": [
          "Defensive & Formal",
          "Empathetic, Solution-Oriented & Urgent",
          "Casual & Brief",
          "Legalistic"
        ],
        "placeholder": "Select tone"
      },
      {
        "id": "compensationOffered",
        "label": "Resolution / Goodwill Offering",
        "type": "select",
        "options": [
          "No refund or credit",
          "Refund express shipping charge + \u20b9200 gift credit",
          "Full 100% item refund immediately without return"
        ],
        "placeholder": "Select offering"
      },
      {
        "id": "responseMessage",
        "label": "Full Customer Response Message",
        "type": "textarea",
        "placeholder": "Dear Mr. Sharma, I completely understand how frustrating it is when a special gift is delayed..."
      }
    ],
    "solutionKey": {
      "toneSelection": "Empathetic, Solution-Oriented & Urgent",
      "compensationOffered": "Refund express shipping charge + \u20b9200 gift credit"
    },
    "gradingRubric": [
      {
        "field": "toneSelection",
        "criteria": "Empathy and urgency selected",
        "points": 30
      },
      {
        "field": "compensationOffered",
        "criteria": "Balanced goodwill gesture according to policy",
        "points": 30
      },
      {
        "field": "responseMessage",
        "criteria": "Polite, clear, includes order ID and proactive resolution",
        "points": 40
      }
    ]
  },
  {
    "id": "sim-support-billing",
    "department": "Customer Support",
    "title": "SaaS Subscription Dispute & Chargeback Prevention",
    "companyName": "CloudFlow Technologies (Austin / Remote)",
    "estimatedMinutes": 15,
    "brief": "A customer was charged $588 for an annual team plan when their trial ended. The user claims they ceased using the app 2 weeks ago and threatens an American Express chargeback. Verify usage, determine refund eligibility, and process resolution.",
    "instructions": [
      "Review platform login logs: confirmed 0 user logins since the 3rd day of the trial.",
      "Evaluate chargeback risk: Credit card chargebacks incur $15-50 merchant penalties and hurt payment gateway reputation.",
      "Select company policy action regarding fair-use refunds for zero-usage accounts.",
      "Compose confirmation reply providing refund processing timeline."
    ],
    "inputData": {
      "user": "mark@apexdesigners.co",
      "chargeAmount": "$588.00",
      "platformLoginsPast14Days": 0,
      "plan": "Business Annual (5 Seats)"
    },
    "formFields": [
      {
        "id": "refundDecision",
        "label": "Refund Authorization Decision",
        "type": "select",
        "options": [
          "Deny refund per Terms of Service",
          "Approve 100% full refund ($588.00) & downgrade account",
          "Offer 10% coupon only"
        ],
        "placeholder": "Select decision"
      },
      {
        "id": "chargebackRiskLevel",
        "label": "Chargeback Threat Severity",
        "type": "select",
        "options": [
          "Low Risk",
          "High Financial & Merchant Account Risk",
          "Negligible"
        ],
        "placeholder": "Select risk"
      },
      {
        "id": "refundTimelineExplanation",
        "label": "Customer Refund Notification Message",
        "type": "textarea",
        "placeholder": "Hi Mark, I have processed a full $588.00 refund to your card. The funds will reflect within 3-5 business days..."
      }
    ],
    "solutionKey": {
      "refundDecision": "Approve 100% full refund ($588.00) & downgrade account",
      "chargebackRiskLevel": "High Financial & Merchant Account Risk"
    },
    "gradingRubric": [
      {
        "field": "refundDecision",
        "criteria": "Approved full refund based on zero-usage fair use rule",
        "points": 35
      },
      {
        "field": "chargebackRiskLevel",
        "criteria": "Correctly identified severe chargeback risk to merchant standing",
        "points": 35
      },
      {
        "field": "refundTimelineExplanation",
        "criteria": "Clear statement of 3-5 business day refund timeline",
        "points": 30
      }
    ]
  },
  {
    "id": "sim-design-brief",
    "department": "Design Studio",
    "title": "Brand Guidelines Compliance & Asset Review",
    "companyName": "Verdant Botanic Co. (Bengaluru)",
    "estimatedMinutes": 15,
    "brief": "A freelance designer submitted a promotional Instagram post for Verdant Botanic Co. Audit the visual submission against official Brand Guidelines (color contrast, prohibited typography, logo clearspace, and tone).",
    "instructions": [
      "Review brand rules: Primary Forest Green (#1B4332), Accent Terracotta (#D87D4A), Canvas Warm Alabaster (#FAF8F5).",
      "Submitted post used Comic Sans font and pure neon yellow (#FFFF00) background.",
      "Contrast check: Neon yellow background fails WCAG readability standards.",
      "Identify all guideline violations and write a constructive revision brief for the designer."
    ],
    "inputData": {
      "brandGuidelines": {
        "primaryColor": "#1B4332",
        "approvedFonts": [
          "Fraunces",
          "Plus Jakarta Sans"
        ],
        "prohibitedFonts": [
          "Comic Sans",
          "Papyrus",
          "Impact"
        ]
      },
      "submission": {
        "fontUsed": "Comic Sans",
        "canvasColor": "#FFFF00",
        "logoPaddingPx": 2
      }
    },
    "formFields": [
      {
        "id": "fontCompliance",
        "label": "Typography Compliance Status",
        "type": "select",
        "options": [
          "Compliant",
          "Violation: Prohibited font Comic Sans used instead of Fraunces/Plus Jakarta",
          "Acceptable Alternative"
        ],
        "placeholder": "Select status"
      },
      {
        "id": "colorCompliance",
        "label": "Color Palette Compliance Status",
        "type": "select",
        "options": [
          "Compliant with earthy palette",
          "Violation: Unapproved neon yellow (#FFFF00) used as canvas",
          "Acceptable"
        ],
        "placeholder": "Select status"
      },
      {
        "id": "revisionNotes",
        "label": "Constructive Design Revision Feedback to Designer",
        "type": "textarea",
        "placeholder": "Hi, thanks for the draft! Please adjust the background to our approved Warm Alabaster (#FAF8F5) and swap font to Plus Jakarta Sans..."
      }
    ],
    "solutionKey": {
      "fontCompliance": "Violation: Prohibited font Comic Sans used instead of Fraunces/Plus Jakarta",
      "colorCompliance": "Violation: Unapproved neon yellow (#FFFF00) used as canvas"
    },
    "gradingRubric": [
      {
        "field": "fontCompliance",
        "criteria": "Correctly detected unauthorized font usage",
        "points": 35
      },
      {
        "field": "colorCompliance",
        "criteria": "Correctly flagged neon color violation",
        "points": 35
      },
      {
        "field": "revisionNotes",
        "criteria": "Constructive, professional feedback citing exact HEX codes",
        "points": 30
      }
    ]
  },
  {
    "id": "sim-tech-bug",
    "department": "Technology",
    "title": "Mobile Checkout Payment Defect Report (Jira Format)",
    "companyName": "PayZen E-commerce Services",
    "estimatedMinutes": 15,
    "brief": "A critical defect occurs on mobile Safari when users switch from the checkout page to Google Pay / PhonePe and return. The shopping cart resets to empty and the transaction aborts with an uncaught JavaScript error. Write an industry-standard bug report.",
    "instructions": [
      "Environment: iPhone 14 Pro, iOS 17.5.1, Mobile Safari.",
      "Severity assessment: Blocker / Critical (P0) because checkout is impossible and revenue is lost.",
      "Identify the failed API endpoint from network logs: /api/v2/session/verify returning 404.",
      "Write clean, deterministic reproduction steps."
    ],
    "inputData": {
      "errorTrace": "Uncaught TypeError: Cannot read property 'orderId' of undefined at callback.js:42",
      "failingEndpoint": "GET /api/v2/session/verify (HTTP 404 Session Expired)",
      "impact": "100% of Mobile Safari UPI returns fail"
    },
    "formFields": [
      {
        "id": "defectSeverity",
        "label": "Defect Severity Classification",
        "type": "select",
        "options": [
          "P0 - Blocker (Critical Revenue Drop)",
          "P2 - Major",
          "P3 - Minor Cosmetic",
          "P4 - Enhancement"
        ],
        "placeholder": "Select severity"
      },
      {
        "id": "failingComponent",
        "label": "Identified Failing Technical Component",
        "type": "select",
        "options": [
          "UPI Intent Session Verification (/api/v2/session/verify)",
          "Database Disk Full",
          "Product Image CDN",
          "CSS Styling"
        ],
        "placeholder": "Select component"
      },
      {
        "id": "jiraBugReport",
        "label": "Full Jira Defect Report (Environment, Steps, Expected, Actual)",
        "type": "textarea",
        "placeholder": "Title: [iOS Safari] Cart resets to empty on UPI app return\nSteps:\n1. Add item to cart\n2. Select UPI..."
      }
    ],
    "solutionKey": {
      "defectSeverity": "P0 - Blocker (Critical Revenue Drop)",
      "failingComponent": "UPI Intent Session Verification (/api/v2/session/verify)"
    },
    "gradingRubric": [
      {
        "field": "defectSeverity",
        "criteria": "Accurately assigned P0 Blocker severity",
        "points": 35
      },
      {
        "field": "failingComponent",
        "criteria": "Correctly isolated the session verification API failure",
        "points": 35
      },
      {
        "field": "jiraBugReport",
        "criteria": "Comprehensive ticket with numbered steps and technical logs",
        "points": 30
      }
    ]
  },
  {
    "id": "sim-tech-qa",
    "department": "Technology",
    "title": "Patient Portal Form Validation & Boundary Testing",
    "companyName": "MedConnect Telehealth (Hyderabad)",
    "estimatedMinutes": 15,
    "brief": "Execute manual validation testing on MedConnect's appointment booking form. Identify whether test inputs should Pass or Trigger a Validation Error based on field rules.",
    "instructions": [
      "Rule 1: Mobile number must be 10 digits starting with 6, 7, 8, or 9.",
      "Rule 2: Appointment date cannot be in the past.",
      "Test input A: Mobile '9847012345' with date 'Tomorrow'.",
      "Test input B: Mobile '09447199201' (11 digits with leading 0).",
      "Test input C: Mobile '98470' (5 digits).",
      "Test input D: Date selected as 'Yesterday'."
    ],
    "inputData": {
      "mobileRegex": "^[6-9][0-9]{9}$",
      "dateConstraint": "date >= today()"
    },
    "formFields": [
      {
        "id": "testCaseA",
        "label": "Test A: Mobile '9847012345' + Future Date",
        "type": "select",
        "options": [
          "PASS (Valid Input)",
          "FAIL (Triggers Error)"
        ],
        "placeholder": "Select result"
      },
      {
        "id": "testCaseB",
        "label": "Test B: Mobile '09447199201' (11 Digits)",
        "type": "select",
        "options": [
          "PASS (Valid Input)",
          "FAIL (Must trigger 'Please enter 10 digits without leading 0')"
        ],
        "placeholder": "Select result"
      },
      {
        "id": "testCaseC",
        "label": "Test C: Mobile '98470' (5 Digits)",
        "type": "select",
        "options": [
          "PASS (Valid Input)",
          "FAIL (Must trigger 'Incomplete mobile number')"
        ],
        "placeholder": "Select result"
      },
      {
        "id": "testCaseD",
        "label": "Test D: Date selected as 'Yesterday'",
        "type": "select",
        "options": [
          "PASS (Valid Input)",
          "FAIL (Must trigger 'Cannot book appointment in the past')"
        ],
        "placeholder": "Select result"
      }
    ],
    "solutionKey": {
      "testCaseA": "PASS (Valid Input)",
      "testCaseB": "FAIL (Must trigger 'Please enter 10 digits without leading 0')",
      "testCaseC": "FAIL (Must trigger 'Incomplete mobile number')",
      "testCaseD": "FAIL (Must trigger 'Cannot book appointment in the past')"
    },
    "gradingRubric": [
      {
        "field": "testCaseA",
        "criteria": "Correctly passed valid test data",
        "points": 25
      },
      {
        "field": "testCaseB",
        "criteria": "Correctly failed 11-digit number",
        "points": 25
      },
      {
        "field": "testCaseC",
        "criteria": "Correctly failed truncated 5-digit number",
        "points": 25
      },
      {
        "field": "testCaseD",
        "criteria": "Correctly failed past date booking",
        "points": 25
      }
    ]
  }
];

export function getSimulationTaskById(id: string): WorkplaceSimulatorTask | undefined {
  return simulationTasks.find(t => t.id === id);
}

export function getTasksByDepartment(dept: string): WorkplaceSimulatorTask[] {
  if (!dept || dept === 'All') return simulationTasks;
  return simulationTasks.filter(t => t.department.toLowerCase() === dept.toLowerCase());
}
