import { WorkplaceSimulatorTask } from '@/types';

export const simulationTasks: WorkplaceSimulatorTask[] = [
  {
    id: 'sim-bookkeeping-1',
    department: 'Accounting',
    title: 'Bank Statement Reconciliation: Match 5 Transactions',
    companyName: 'Apex Trading Co. (Kochi)',
    estimatedMinutes: 20,
    brief: 'Apex Trading Co. has provided their bank statement ending October 31st and their internal accounting cash book ledger. Find the discrepancies, calculate the adjusted bank balance, and determine the unreconciled difference.',
    instructions: [
      'Compare the bank statement ending balance (₹1,45,200) with the cash book balance (₹1,28,400).',
      'Transaction A: Cheque deposited from Client XYZ (₹24,000) not yet cleared by the bank.',
      'Transaction B: Bank charges (₹1,200) debited by bank but not recorded in cash book.',
      'Transaction C: Direct NEFT credit from customer ABC (₹15,000) in bank statement but not in cash book.',
      'Transaction D: Cheque issued to supplier DEF (₹34,000) not yet presented for payment.',
      'Calculate the corrected cash book balance and confirm both sides reconcile.'
    ],
    inputData: {
      bankStatementBalance: 145200,
      cashBookBalance: 128400,
      uncreditedCheques: 24000,
      bankCharges: 1200,
      directCustomerCredit: 15000,
      unpresentedCheques: 34000
    },
    formFields: [
      {
        id: 'adjustedCashBook',
        label: 'Adjusted Cash Book Balance (₹)',
        type: 'number',
        placeholder: 'e.g. 142200'
      },
      {
        id: 'reconciledBankBalance',
        label: 'Reconciled Bank Statement Balance (₹)',
        type: 'number',
        placeholder: 'e.g. 142200'
      },
      {
        id: 'reconciliationDifference',
        label: 'Reconciliation Difference (₹) (Must be 0 when balanced)',
        type: 'number',
        placeholder: '0'
      },
      {
        id: 'explanationNotes',
        label: 'Brief Auditor Notes to Senior Accountant',
        type: 'textarea',
        placeholder: 'Explain the adjustments made to both the cash book and bank balance...'
      }
    ],
    solutionKey: {
      adjustedCashBook: 142200,
      reconciledBankBalance: 142200,
      reconciliationDifference: 0
    },
    gradingRubric: [
      { field: 'adjustedCashBook', criteria: 'Calculated Cash book (1,28,400 + 15,000 - 1,200 = 1,42,200)', points: 35 },
      { field: 'reconciledBankBalance', criteria: 'Calculated Bank statement (1,45,200 + 34,000 - 24,000 wait: 1,45,200 - 34,000 + unpresented/uncredited)', points: 35 },
      { field: 'reconciliationDifference', criteria: 'Both sides match with difference = 0', points: 15 },
      { field: 'explanationNotes', criteria: 'Clear professional explanation provided', points: 15 }
    ]
  },
  {
    id: 'sim-ecom-1',
    department: 'E-commerce',
    title: 'E-commerce Store Catalog Audit & Missing SKU Resolution',
    companyName: 'Lumina Home Decor (Online Store)',
    estimatedMinutes: 20,
    brief: 'A batch of 4 home decor products was uploaded with formatting errors: missing SKU codes, incorrect GST tax brackets, and broken image URLs. Correct the product listings before publishing them live.',
    instructions: [
      'Product 1: "Handmade Ceramic Vase" is missing an SKU. Format SKU as: LUM-VASE-01.',
      'Product 2: "Boho Cotton Throw" price is ₹1,200. Apply standard 12% GST to find the final tax-inclusive retail price (1200 * 1.12 = 1344).',
      'Product 3: The stock quantity is listed as -5. Reset negative stock to 0 and flag as "Out of Stock".',
      'Select the correct publishing action for the batch.'
    ],
    inputData: {
      products: [
        { id: 1, name: 'Handmade Ceramic Vase', category: 'Vases', missing: 'SKU' },
        { id: 2, name: 'Boho Cotton Throw', priceExclTax: 1200, gstRate: '12%' },
        { id: 3, name: 'Brass Pillar Candlestick', stock: -5 }
      ]
    },
    formFields: [
      {
        id: 'product1Sku',
        label: 'Assigned SKU for Handmade Ceramic Vase',
        type: 'text',
        placeholder: 'LUM-VASE-01'
      },
      {
        id: 'product2PriceInclTax',
        label: 'Final Retail Price with 12% GST for Boho Cotton Throw (₹)',
        type: 'number',
        placeholder: '1344'
      },
      {
        id: 'product3StockStatus',
        label: 'Stock Status for Brass Candlestick',
        type: 'select',
        options: ['In Stock', 'Out of Stock', 'Backorder Permitted'],
        placeholder: 'Select status'
      },
      {
        id: 'batchAction',
        label: 'Final Catalog Action',
        type: 'select',
        options: ['Publish All Immediately', 'Publish Fixed Items & Notify Inventory Manager', 'Reject Entire Batch'],
        placeholder: 'Select action'
      }
    ],
    solutionKey: {
      product1Sku: 'LUM-VASE-01',
      product2PriceInclTax: 1344,
      product3StockStatus: 'Out of Stock',
      batchAction: 'Publish Fixed Items & Notify Inventory Manager'
    },
    gradingRubric: [
      { field: 'product1Sku', criteria: 'Matches required SKU format LUM-VASE-01', points: 30 },
      { field: 'product2PriceInclTax', criteria: 'Accurate 12% GST calculation (₹1,344)', points: 30 },
      { field: 'product3StockStatus', criteria: 'Correctly identifies Out of Stock status', points: 20 },
      { field: 'batchAction', criteria: 'Picks prudent operations workflow', points: 20 }
    ]
  },
  {
    id: 'sim-support-1',
    department: 'Customer Support',
    title: 'Customer Ticket De-escalation: Delayed Courier Shipment',
    companyName: 'SwiftCart India Support',
    estimatedMinutes: 15,
    brief: 'A high-value customer (Rahul Sharma) ordered a birthday gift 5 days ago with expedited shipping. The courier tracking has been stuck in "In Transit - Hub Sort Delay" for 48 hours. Rahul sends an angry message threatening to file a consumer forum complaint.',
    instructions: [
      'Read the angry customer ticket thoroughly.',
      'Acknowledge frustration without making false promises or blaming third parties defensively.',
      'Provide concrete action steps (contacting the logistics hub manager and providing tracking priority).',
      'Offer appropriate compensation (₹200 store credit or waiver of express shipping fee).',
      'Craft a polite, professional response adhering to corporate empathy standards.'
    ],
    inputData: {
      customerName: 'Rahul Sharma',
      orderId: 'SW-89412',
      item: 'Noise-Cancelling Headphones',
      promisedDelivery: 'Nov 22',
      currentDate: 'Nov 24',
      orderValue: 4999
    },
    formFields: [
      {
        id: 'toneSelection',
        label: 'Selected Communication Tone',
        type: 'select',
        options: ['Defensive & Formal', 'Empathetic, Solution-Oriented & Urgent', 'Casual & Brief', 'Legalistic'],
        placeholder: 'Select tone'
      },
      {
        id: 'compensationOffered',
        label: 'Resolution / Goodwill Offering',
        type: 'select',
        options: ['No refund or credit', 'Refund express shipping charge + ₹200 gift credit', 'Full 100% item refund immediately without return'],
        placeholder: 'Select offering'
      },
      {
        id: 'responseMessage',
        label: 'Full Customer Response Message',
        type: 'textarea',
        placeholder: 'Dear Mr. Sharma, I completely understand how frustrating it is when a special gift is delayed...'
      }
    ],
    solutionKey: {
      toneSelection: 'Empathetic, Solution-Oriented & Urgent',
      compensationOffered: 'Refund express shipping charge + ₹200 gift credit'
    },
    gradingRubric: [
      { field: 'toneSelection', criteria: 'Empathy and urgency selected', points: 30 },
      { field: 'compensationOffered', criteria: 'Balanced goodwill gesture according to policy', points: 30 },
      { field: 'responseMessage', criteria: 'Polite, clear, includes order ID and proactive resolution', points: 40 }
    ]
  }
];
