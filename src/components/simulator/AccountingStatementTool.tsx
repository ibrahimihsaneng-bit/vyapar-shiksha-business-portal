'use client';

import React, { useState } from 'react';
import {
  Building2,
  FileSpreadsheet,
  CheckCircle2,
  AlertCircle,
  RotateCcw,
  Sparkles,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Check,
  Calculator,
  Laptop
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface AccountRow {
  name: string;
  category: 'expense' | 'depreciation' | 'other' | 'summary' | 'asset' | 'liability' | 'equity';
  original: number;
  entry: number;
}

export default function AccountingStatementTool() {
  const [activeStatementTab, setActiveStatementTab] = useState<'income' | 'balance'>('balance');
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState<number>(4); // Step 5/9 (0-indexed 4)
  const [equipmentInput, setEquipmentInput] = useState<string>('7160');
  const [cashInput, setCashInput] = useState<string>('5130');
  const [payableInput, setPayableInput] = useState<string>('2030');
  const [validationState, setValidationState] = useState<{
    status: 'idle' | 'success' | 'error';
    message: string;
  }>({ status: 'idle', message: '' });

  // 9 Workplace scenarios matching professional enterprise accounting training
  const scenarios = [
    {
      id: 1,
      title: 'Initial Capital Injection',
      statementFocus: 'Balance Sheet (Equity)',
      prompt: 'Shareholders inject $50,000 cash to fund working capital operations.',
      debitAccount: 'Cash',
      creditAccount: 'Common Stock',
      amount: 50000
    },
    {
      id: 2,
      title: 'Commercial Office Rent Prepayment',
      statementFocus: 'Income Statement (Operating)',
      prompt: 'Pay $12,000 for 12 months office lease upfront from company bank account.',
      debitAccount: 'Prepaid Rent',
      creditAccount: 'Cash',
      amount: 12000
    },
    {
      id: 3,
      title: 'Client Consulting Invoicing',
      statementFocus: 'Income Statement (Revenue)',
      prompt: 'Issue invoice #4011 for $18,500 consulting delivered on credit, net-30 terms.',
      debitAccount: 'Accounts Receivable',
      creditAccount: 'Consulting Revenue',
      amount: 18500
    },
    {
      id: 4,
      title: 'Office Utility Payment',
      statementFocus: 'Income Statement (Expenses)',
      prompt: 'Paid energy bill of $3,200 via direct debit.',
      debitAccount: 'Energy Expense',
      creditAccount: 'Cash',
      amount: 3200
    },
    {
      id: 5,
      title: 'Partial credit purchase',
      statementFocus: 'Balance Sheet (Liabilities)',
      prompt: 'The Summit purchases equipment for $7,160. The company makes an initial payment of $5,130, leaving a balance due within 30 days.',
      debitAccount: 'Equipment (+Asset)',
      creditAccount1: 'Cash (-Asset)',
      creditAccount2: 'Accounts Payable (+Liability)',
      totalAmount: 7160,
      cashAmount: 5130,
      payableAmount: 2030
    },
    {
      id: 6,
      title: 'Supplier Invoice Settlement',
      statementFocus: 'Balance Sheet (Liabilities)',
      prompt: 'Pay off outstanding vendor balance of $2,030 via corporate bank transfer.',
      debitAccount: 'Accounts Payable',
      creditAccount: 'Cash',
      amount: 2030
    },
    {
      id: 7,
      title: 'Monthly Depreciation Journal Entry',
      statementFocus: 'Income Statement (Depreciation)',
      prompt: 'Record monthly equipment depreciation expense of $1,450 for wear and tear.',
      debitAccount: 'Depreciation Expense',
      creditAccount: 'Accumulated Depreciation',
      amount: 1450
    },
    {
      id: 8,
      title: 'Customer Invoice Receipt',
      statementFocus: 'Balance Sheet (Assets)',
      prompt: 'Receive $18,500 wire transfer settling client accounts receivable in full.',
      debitAccount: 'Cash',
      creditAccount: 'Accounts Receivable',
      amount: 18500
    },
    {
      id: 9,
      title: 'Period-End Net Income Closing',
      statementFocus: 'Income Statement to Balance Sheet',
      prompt: 'Transfer net operating surplus of $13,725 to retained earnings equity.',
      debitAccount: 'Income Summary',
      creditAccount: 'Retained Earnings',
      amount: 13725
    }
  ];

  const currentScenario = scenarios[currentScenarioIndex];

  const currentEq = parseFloat(equipmentInput) || 0;
  const currentCash = parseFloat(cashInput) || 0;
  const currentPayable = parseFloat(payableInput) || 0;
  const netAssetChange = currentEq - currentCash;

  // Balance sheet accounts
  const balanceSheetAccounts = [
    { name: 'Cash & Cash Equivalents', category: 'asset', original: 105000, entry: -currentCash },
    { name: 'Accounts Receivable', category: 'asset', original: 42000, entry: 0 },
    { name: 'Equipment & Hardware', category: 'asset', original: 68000, entry: currentEq },
    { name: 'Accumulated Depreciation', category: 'asset', original: -15000, entry: 0 },
    { name: 'Total Assets', category: 'summary', original: 200000, entry: netAssetChange },
    { name: 'Accounts Payable (Summit)', category: 'liability', original: 24000, entry: currentPayable },
    { name: 'Accrued Operating Expenses', category: 'liability', original: 16000, entry: 0 },
    { name: 'Long-term Bank Loan', category: 'liability', original: 60000, entry: 0 },
    { name: 'Total Liabilities', category: 'summary', original: 100000, entry: currentPayable },
    { name: 'Common Capital Stock', category: 'equity', original: 75000, entry: 0 },
    { name: 'Retained Earnings', category: 'equity', original: 25000, entry: 0 },
    { name: 'Total Liabilities & Equity', category: 'summary', original: 200000, entry: currentPayable }
  ];

  // Income statement accounts
  const incomeStatementAccounts = [
    { name: 'Insurance', category: 'expense', original: 10000, entry: 0 },
    { name: 'Energy & Utilities', category: 'expense', original: 5000, entry: 43545 },
    { name: 'Phone & Internet', category: 'expense', original: 2500, entry: 0 },
    { name: 'Repairs & Maintenance', category: 'expense', original: 10000, entry: 0 },
    { name: 'Total Operating Expenses', category: 'summary', original: 47500, entry: 43545 },
    { name: 'Depreciation - Building', category: 'depreciation', original: 15000, entry: 0 },
    { name: 'Depreciation - Machinery & Equipment', category: 'depreciation', original: 5000, entry: 0 },
    { name: 'Depreciation - Vehicles', category: 'depreciation', original: 5000, entry: 34535 },
    { name: 'Depreciation - Office Furniture', category: 'depreciation', original: 2500, entry: 0 },
    { name: 'Depreciation - IT Equipment & Software', category: 'depreciation', original: 2500, entry: 0 },
    { name: 'Depreciation - Leasehold Improvements', category: 'depreciation', original: 5000, entry: 0 },
    { name: 'Total Depreciation', category: 'summary', original: 35000, entry: 34535 },
    { name: 'Interests', category: 'other', original: 5000, entry: 400 },
    { name: 'Capital losses on investments', category: 'other', original: 2500, entry: 0 },
    { name: 'Losses on disposal of assets', category: 'other', original: 2500, entry: 702 },
    { name: 'Impairment in value', category: 'other', original: 5000, entry: 0 },
    { name: 'Total Other Expenses', category: 'summary', original: 15000, entry: 1102 },
    { name: 'Income Before Taxes', category: 'summary', original: 105000, entry: -8725 },
    { name: 'Income Taxes (Profit)', category: 'summary', original: 5000, entry: 0 },
    { name: 'Net Income (Net Profit)', category: 'summary', original: 100000, entry: -13725 }
  ];

  const handleValidate = () => {
    const eq = parseFloat(equipmentInput) || 0;
    const cash = parseFloat(cashInput) || 0;
    const ap = parseFloat(payableInput) || 0;

    // Partial credit purchase scenario validation:
    // Equipment Debit (7160) = Cash Credit (5130) + Accounts Payable Credit (2030)
    if (eq === 7160 && cash === 5130 && ap === 2030) {
      setValidationState({
        status: 'success',
        message: 'Perfect entry! Debits equal Credits: Assets increase by $2,030 net ($7,160 equipment - $5,130 cash) and Liabilities increase by $2,030 Accounts Payable.'
      });
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
    } else {
      setValidationState({
        status: 'error',
        message: `Imbalance detected: Equipment ($${eq}) must equal Cash paid ($${cash}) + Balance due ($${ap}). Expected $7,160 = $5,130 + $2,030.`
      });
    }
  };

  const handleNextScenario = () => {
    if (currentScenarioIndex < scenarios.length - 1) {
      setCurrentScenarioIndex(currentScenarioIndex + 1);
      setValidationState({ status: 'idle', message: '' });
    }
  };

  const handlePrevScenario = () => {
    if (currentScenarioIndex > 0) {
      setCurrentScenarioIndex(currentScenarioIndex - 1);
      setValidationState({ status: 'idle', message: '' });
    }
  };

  const activeAccounts = activeStatementTab === 'balance' ? balanceSheetAccounts : incomeStatementAccounts;

  return (
    <div className="bg-slate-900/90 rounded-3xl p-4 sm:p-6 text-slate-100 border border-slate-700 shadow-2xl space-y-6 backdrop-blur-md">
      {/* Top Header / Nav matching reference image */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-700/80">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-teal-500/20 border border-teal-500/40 text-teal-400 flex items-center justify-center font-bold">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-extrabold text-base text-white tracking-tight">
                Accounting Financial
              </h3>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                Live Simulation
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Interactive General Ledger, Income Statement & Balance Sheet Entry
            </p>
          </div>
        </div>

        {/* Action badges */}
        <div className="flex items-center gap-3 text-xs text-slate-300">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700">
            <Laptop className="w-3.5 h-3.5 text-teal-400" />
            <span>Work plan</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-teal-900/60 border border-teal-700 text-teal-200 font-bold">
            <Sparkles className="w-3.5 h-3.5 text-teal-400" />
            <span>Score: 306 pts</span>
          </div>
          <div className="w-7 h-7 rounded-full bg-slate-700 border border-slate-600 flex items-center justify-center font-bold text-xs text-white">
            TI
          </div>
        </div>
      </div>

      {/* Main Dual-Pane Simulator (Split-Screen matching Reference Image 3) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Pane: Financial Statement Ledger Sheet (7 cols) */}
        <div className="lg:col-span-7 bg-slate-950/80 rounded-2xl border border-slate-800 overflow-hidden shadow-inner flex flex-col">
          {/* Statement View Switcher Tabs */}
          <div className="flex items-center justify-between px-4 pt-3 pb-2 border-b border-slate-800 bg-slate-900/60">
            <div className="flex items-center gap-1">
              <button
                onClick={() => setActiveStatementTab('income')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeStatementTab === 'income'
                    ? 'bg-teal-600 text-white shadow-xs'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                Income statement
              </button>
              <button
                onClick={() => setActiveStatementTab('balance')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeStatementTab === 'balance'
                    ? 'bg-teal-600 text-white shadow-xs'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                Balance Sheet
              </button>
            </div>
            <span className="text-[11px] text-slate-400 font-medium hidden sm:inline">
              For the years ended December 31
            </span>
          </div>

          {/* Ledger Table */}
          <div className="overflow-x-auto max-h-[460px] overflow-y-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead className="bg-slate-900/90 text-slate-400 font-bold border-b border-slate-800 sticky top-0 z-10 backdrop-blur-xs">
                <tr>
                  <th className="py-2.5 px-3">Account Name</th>
                  <th className="py-2.5 px-3 text-right">Original ($)</th>
                  <th className="py-2.5 px-3 text-right">Modified ($)</th>
                  <th className="py-2.5 px-3 text-right">Entry ($)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-mono text-[11px]">
                {activeAccounts.map((acc, idx) => {
                  const isSummary = acc.category === 'summary';
                  const modified = acc.original + acc.entry;
                  return (
                    <tr
                      key={idx}
                      className={`transition-colors ${
                        isSummary
                          ? 'bg-slate-900/80 font-bold text-white'
                          : acc.entry !== 0
                          ? 'bg-teal-950/40 text-teal-200'
                          : 'hover:bg-slate-900/40 text-slate-300'
                      }`}
                    >
                      <td className={`py-2 px-3 ${isSummary ? 'font-sans font-bold text-xs text-white' : 'font-sans'}`}>
                        {acc.name}
                      </td>
                      <td className="py-2 px-3 text-right text-slate-400">
                        {acc.original.toLocaleString()}
                      </td>
                      <td className={`py-2 px-3 text-right font-bold ${acc.entry !== 0 ? 'text-emerald-400' : 'text-slate-300'}`}>
                        {modified.toLocaleString()}
                      </td>
                      <td className={`py-2 px-3 text-right font-bold ${acc.entry > 0 ? 'text-teal-400' : acc.entry < 0 ? 'text-amber-400' : 'text-slate-500'}`}>
                        {acc.entry !== 0 ? (acc.entry > 0 ? `+${acc.entry.toLocaleString()}` : acc.entry.toLocaleString()) : '—'}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="p-3 bg-slate-900/90 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
            <span>Accounting equation: Assets = Liabilities + Equity</span>
            <span className="font-bold text-emerald-400">Balanced: $202,030 = $102,030 + $100,000</span>
          </div>
        </div>

        {/* Right Pane: Interactive Challenge Prompt Card (5 cols, exact Image 3 match) */}
        <div className="lg:col-span-5 bg-white text-slate-900 rounded-2xl border border-slate-200 p-5 space-y-4 shadow-xl">
          {/* Card Top: Step number & Controls */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 font-bold text-xs border border-blue-100">
                Statements (5)
              </span>
              <button
                onClick={() => {
                  setEquipmentInput('7160');
                  setCashInput('5130');
                  setPayableInput('2030');
                }}
                className="text-[11px] font-semibold text-slate-500 hover:text-slate-800 underline"
              >
                Auto complete
              </button>
            </div>

            <div className="flex items-center gap-1 text-slate-400">
              <button
                onClick={handlePrevScenario}
                disabled={currentScenarioIndex === 0}
                className="p-1 rounded-lg hover:bg-slate-100 disabled:opacity-30"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="font-mono font-bold text-xs text-slate-700">
                {currentScenarioIndex + 1}/{scenarios.length}
              </span>
              <button
                onClick={handleNextScenario}
                disabled={currentScenarioIndex === scenarios.length - 1}
                className="p-1 rounded-lg hover:bg-slate-100 disabled:opacity-30"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Scenario Headline */}
          <div className="space-y-1">
            <h4 className="font-extrabold text-base text-slate-900 tracking-tight">
              {currentScenario.title}
            </h4>
            <span className="inline-block text-[11px] font-semibold text-slate-500">
              {currentScenario.statementFocus}
            </span>
          </div>

          {/* Problem Statement Prompt */}
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-700 leading-relaxed font-medium">
            {currentScenario.prompt}
          </div>

          {/* Interactive Journal Entry Inputs */}
          <div className="space-y-3 pt-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
              Enter Adjusting Journal Entries:
            </span>

            <div className="space-y-2 text-xs">
              <div>
                <label className="flex items-center justify-between text-[11px] font-semibold text-slate-700 mb-1">
                  <span>1. Debit: Equipment (+Asset)</span>
                  <span className="text-slate-400 font-mono">$7,160</span>
                </label>
                <input
                  type="number"
                  value={equipmentInput}
                  onChange={(e) => setEquipmentInput(e.target.value)}
                  className="w-full p-2 rounded-xl border border-slate-200 font-mono text-xs focus:ring-1 focus:ring-teal-500 focus:outline-none"
                  placeholder="Enter equipment cost..."
                />
              </div>

              <div>
                <label className="flex items-center justify-between text-[11px] font-semibold text-slate-700 mb-1">
                  <span>2. Credit: Cash Initial Payment (-Asset)</span>
                  <span className="text-slate-400 font-mono">$5,130</span>
                </label>
                <input
                  type="number"
                  value={cashInput}
                  onChange={(e) => setCashInput(e.target.value)}
                  className="w-full p-2 rounded-xl border border-slate-200 font-mono text-xs focus:ring-1 focus:ring-teal-500 focus:outline-none"
                  placeholder="Enter cash payment..."
                />
              </div>

              <div>
                <label className="flex items-center justify-between text-[11px] font-semibold text-slate-700 mb-1">
                  <span>3. Credit: Accounts Payable (+Liability)</span>
                  <span className="text-slate-400 font-mono">$2,030</span>
                </label>
                <input
                  type="number"
                  value={payableInput}
                  onChange={(e) => setPayableInput(e.target.value)}
                  className="w-full p-2 rounded-xl border border-slate-200 font-mono text-xs focus:ring-1 focus:ring-teal-500 focus:outline-none"
                  placeholder="Enter remaining balance due..."
                />
              </div>
            </div>
          </div>

          {/* Feedback Alert */}
          {validationState.status !== 'idle' && (
            <div
              className={`p-3 rounded-xl text-xs flex items-start gap-2 ${
                validationState.status === 'success'
                  ? 'bg-emerald-50 border border-emerald-200 text-emerald-800'
                  : 'bg-red-50 border border-red-200 text-red-800'
              }`}
            >
              {validationState.status === 'success' ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
              )}
              <span className="leading-snug">{validationState.message}</span>
            </div>
          )}

          {/* Validate Action Button (Matching Blue Validate Button in Reference Image) */}
          <div className="pt-2">
            <button
              onClick={handleValidate}
              className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-extrabold text-xs transition-all shadow-md flex items-center justify-center gap-2"
            >
              <Check className="w-4 h-4" />
              <span>Validate</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
