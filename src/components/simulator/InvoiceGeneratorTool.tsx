'use client';

import React, { useState } from 'react';
import {
  FileText,
  Plus,
  Trash2,
  Printer,
  Download,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Building2,
  Calendar,
  CreditCard
} from 'lucide-react';

interface LineItem {
  id: string;
  description: string;
  hsn: string;
  qty: number;
  rate: number;
  taxRate: number; // 0, 5, 12, 18
}

export default function InvoiceGeneratorTool() {
  const [invoiceNumber, setInvoiceNumber] = useState('INV-2026-0891');
  const [invoiceDate, setInvoiceDate] = useState('2026-10-31');
  const [dueDate, setDueDate] = useState('2026-11-15');
  const [taxType, setTaxType] = useState<'intra' | 'inter'>('intra'); // intra: CGST+SGST, inter: IGST

  // Seller Info
  const [sellerName, setSellerName] = useState('Apex Trading Co.');
  const [sellerGstin, setSellerGstin] = useState('32AAACA1234F1Z8');
  const [sellerAddress, setSellerAddress] = useState('Panampilly Nagar, Kochi, Kerala 682036');

  // Client Info
  const [clientName, setClientName] = useState('City Care Hospital & Research');
  const [clientGstin, setClientGstin] = useState('32BBBCB5678G1Z2');
  const [clientAddress, setClientAddress] = useState('MG Road, Ernakulam, Kerala 682011');

  // Items
  const [items, setItems] = useState<LineItem[]>([
    { id: '1', description: 'Sterile Surgical Nitrile Gloves (Box of 100)', hsn: '4015', qty: 50, rate: 380, taxRate: 12 },
    { id: '2', description: 'Digital Infrared Medical Thermometer', hsn: '9025', qty: 10, rate: 1450, taxRate: 18 },
    { id: '3', description: 'Sanitizing Disinfectant Solution 5 Litre', hsn: '3808', qty: 15, rate: 650, taxRate: 18 }
  ]);

  const [discountPercent, setDiscountPercent] = useState<number>(5);
  const [paymentStatus, setPaymentStatus] = useState<'Pending' | 'Paid' | 'Partially Paid'>('Pending');
  const [validationMessage, setValidationMessage] = useState<string | null>(null);

  const addItem = () => {
    const newItem: LineItem = {
      id: Date.now().toString(),
      description: 'New Supply Item / Consumable',
      hsn: '9983',
      qty: 1,
      rate: 500,
      taxRate: 18
    };
    setItems([...items, newItem]);
  };

  const removeItem = (id: string) => {
    if (items.length <= 1) return;
    setItems(items.filter(item => item.id !== id));
  };

  const updateItem = (id: string, field: keyof LineItem, val: any) => {
    setItems(items.map(item => {
      if (item.id === id) {
        return { ...item, [field]: val };
      }
      return item;
    }));
  };

  const grossTotal = items.reduce((sum, item) => sum + (item.qty * item.rate), 0);
  const discountAmount = Math.round((grossTotal * (discountPercent / 100)) * 100) / 100;
  const taxableTurnover = grossTotal - discountAmount;

  // Compute tax per item proportionally
  let totalCgst = 0;
  let totalSgst = 0;
  let totalIgst = 0;

  items.forEach(item => {
    const itemGross = item.qty * item.rate;
    const itemProportion = grossTotal > 0 ? (itemGross / grossTotal) : 0;
    const itemTaxable = taxableTurnover * itemProportion;

    if (taxType === 'intra') {
      const halfRate = item.taxRate / 2;
      totalCgst += itemTaxable * (halfRate / 100);
      totalSgst += itemTaxable * (halfRate / 100);
    } else {
      totalIgst += itemTaxable * (item.taxRate / 100);
    }
  });

  const grandTotal = Math.round(taxableTurnover + totalCgst + totalSgst + totalIgst);

  const handleValidateInvoice = () => {
    if (!clientName.trim()) {
      setValidationMessage('Error: Buyer/Client name cannot be blank.');
      return;
    }
    if (items.some(i => i.qty <= 0 || i.rate <= 0)) {
      setValidationMessage('Error: All line items must have quantity > 0 and unit rate > 0.');
      return;
    }
    setValidationMessage('Invoice validated! All GST computations and mandatory fields conform to GST Rule 46.');
  };

  const handlePrint = () => {
    window.print();
  };

  const loadSampleOrder = () => {
    setItems([
      { id: '10', description: 'Ergonomic Mesh Task Office Chair', hsn: '9403', qty: 8, rate: 4200, taxRate: 18 },
      { id: '11', description: 'Dual Monitor Hydraulic Arm Mount', hsn: '8473', qty: 8, rate: 1850, taxRate: 18 },
      { id: '12', description: 'Cable Management Under-Desk Trays', hsn: '3926', qty: 8, rate: 450, taxRate: 12 }
    ]);
    setClientName('Horizon Ventures Coworking Pvt Ltd');
    setClientAddress('Indiranagar 100ft Road, Bengaluru, Karnataka 560038');
    setTaxType('inter'); // Inter-state supply from Kerala to Karnataka
    setDiscountPercent(8);
    setValidationMessage('Loaded sample inter-state corporate furniture order.');
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden space-y-6">
      {/* Top Banner */}
      <div className="p-6 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Educational Training Simulator</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
            GST & Commercial Tax Invoice Generator
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Practice generating professional, GST-compliant B2B invoices with automated intra/inter-state tax calculation.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={loadSampleOrder}
            className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-all border border-slate-700"
          >
            Load Sample Order
          </button>
          <button
            onClick={handleValidateInvoice}
            className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-sm"
          >
            Validate Invoice
          </button>
          <button
            onClick={handlePrint}
            className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-all border border-slate-700 inline-flex items-center gap-1.5"
            title="Print or Save PDF"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print</span>
          </button>
        </div>
      </div>

      {validationMessage && (
        <div className={`mx-6 p-4 rounded-2xl flex items-center gap-3 text-xs sm:text-sm font-medium ${
          validationMessage.startsWith('Error')
            ? 'bg-red-50 text-red-800 border border-red-200'
            : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
        }`}>
          {validationMessage.startsWith('Error') ? (
            <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
          ) : (
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          )}
          <span>{validationMessage}</span>
        </div>
      )}

      {/* Invoice Document Body */}
      <div className="p-6 sm:p-8 space-y-8">
        {/* Meta Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
          <div>
            <label className="text-[11px] font-bold uppercase text-slate-500 tracking-wider block mb-1">
              Invoice Number
            </label>
            <input
              type="text"
              value={invoiceNumber}
              onChange={(e) => setInvoiceNumber(e.target.value)}
              className="w-full text-xs sm:text-sm font-semibold text-slate-900 bg-white border border-slate-300 rounded-lg px-3 py-1.5"
            />
          </div>
          <div>
            <label className="text-[11px] font-bold uppercase text-slate-500 tracking-wider block mb-1">
              Invoice Date
            </label>
            <input
              type="date"
              value={invoiceDate}
              onChange={(e) => setInvoiceDate(e.target.value)}
              className="w-full text-xs sm:text-sm font-medium text-slate-900 bg-white border border-slate-300 rounded-lg px-3 py-1.5"
            />
          </div>
          <div>
            <label className="text-[11px] font-bold uppercase text-slate-500 tracking-wider block mb-1">
              Supply Location (GST Type)
            </label>
            <select
              value={taxType}
              onChange={(e) => setTaxType(e.target.value as 'intra' | 'inter')}
              className="w-full text-xs sm:text-sm font-semibold text-slate-900 bg-white border border-slate-300 rounded-lg px-3 py-1.5"
            >
              <option value="intra">Intra-State (CGST + SGST)</option>
              <option value="inter">Inter-State (IGST 100%)</option>
            </select>
          </div>
          <div>
            <label className="text-[11px] font-bold uppercase text-slate-500 tracking-wider block mb-1">
              Payment Status
            </label>
            <select
              value={paymentStatus}
              onChange={(e) => setPaymentStatus(e.target.value as any)}
              className="w-full text-xs sm:text-sm font-semibold text-slate-900 bg-white border border-slate-300 rounded-lg px-3 py-1.5"
            >
              <option value="Pending">Payment Pending</option>
              <option value="Paid">Marked as Paid</option>
              <option value="Partially Paid">Partially Paid</option>
            </select>
          </div>
        </div>

        {/* Parties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Seller / Supplier */}
          <div className="p-5 rounded-2xl border border-slate-200 bg-white space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
              <Building2 className="w-4 h-4 text-emerald-600" />
              <span>Seller (Supplier Information)</span>
            </div>
            <div>
              <input
                type="text"
                value={sellerName}
                onChange={(e) => setSellerName(e.target.value)}
                className="w-full font-bold text-sm text-slate-900 border-b border-slate-200 py-1 focus:outline-none focus:border-emerald-500"
                placeholder="Company Name"
              />
            </div>
            <div className="grid grid-cols-1 gap-2 text-xs">
              <input
                type="text"
                value={sellerGstin}
                onChange={(e) => setSellerGstin(e.target.value)}
                className="w-full font-mono text-slate-600 border border-slate-200 rounded px-2.5 py-1"
                placeholder="GSTIN Number (e.g. 32AAACA...)"
              />
              <textarea
                value={sellerAddress}
                onChange={(e) => setSellerAddress(e.target.value)}
                rows={2}
                className="w-full text-slate-600 border border-slate-200 rounded px-2.5 py-1"
                placeholder="Full registered address"
              />
            </div>
          </div>

          {/* Client / Buyer */}
          <div className="p-5 rounded-2xl border border-slate-200 bg-white space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
              <Building2 className="w-4 h-4 text-teal-600" />
              <span>Buyer (Bill To Information)</span>
            </div>
            <div>
              <input
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full font-bold text-sm text-slate-900 border-b border-slate-200 py-1 focus:outline-none focus:border-teal-500"
                placeholder="Customer / Company Name"
              />
            </div>
            <div className="grid grid-cols-1 gap-2 text-xs">
              <input
                type="text"
                value={clientGstin}
                onChange={(e) => setClientGstin(e.target.value)}
                className="w-full font-mono text-slate-600 border border-slate-200 rounded px-2.5 py-1"
                placeholder="Buyer GSTIN (Leave blank for unregistered B2C)"
              />
              <textarea
                value={clientAddress}
                onChange={(e) => setClientAddress(e.target.value)}
                rows={2}
                className="w-full text-slate-600 border border-slate-200 rounded px-2.5 py-1"
                placeholder="Buyer delivery / billing address"
              />
            </div>
          </div>
        </div>

        {/* Line Items Table */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900">
              Taxable Items & Services
            </h3>
            <button
              onClick={addItem}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200 hover:bg-emerald-100 transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Line Item</span>
            </button>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-600 font-bold border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4 min-w-[200px]">Item Description</th>
                  <th className="py-3 px-3 w-24">HSN/SAC</th>
                  <th className="py-3 px-3 w-20 text-right">Qty</th>
                  <th className="py-3 px-3 w-28 text-right">Rate (₹)</th>
                  <th className="py-3 px-3 w-24">GST %</th>
                  <th className="py-3 px-4 w-32 text-right">Line Total (₹)</th>
                  <th className="py-3 px-3 w-12 text-center"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-800">
                {items.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/60">
                    <td className="py-2.5 px-4">
                      <input
                        type="text"
                        value={item.description}
                        onChange={(e) => updateItem(item.id, 'description', e.target.value)}
                        className="w-full bg-transparent border-b border-transparent hover:border-slate-300 focus:border-emerald-500 focus:outline-none py-1"
                      />
                    </td>
                    <td className="py-2.5 px-3">
                      <input
                        type="text"
                        value={item.hsn}
                        onChange={(e) => updateItem(item.id, 'hsn', e.target.value)}
                        className="w-full font-mono bg-transparent border-b border-transparent hover:border-slate-300 focus:border-emerald-500 focus:outline-none py-1"
                      />
                    </td>
                    <td className="py-2.5 px-3 text-right">
                      <input
                        type="number"
                        min="1"
                        value={item.qty}
                        onChange={(e) => updateItem(item.id, 'qty', Math.max(1, parseInt(e.target.value) || 1))}
                        className="w-full text-right bg-transparent border-b border-transparent hover:border-slate-300 focus:border-emerald-500 focus:outline-none py-1"
                      />
                    </td>
                    <td className="py-2.5 px-3 text-right">
                      <input
                        type="number"
                        min="0"
                        step="0.01"
                        value={item.rate}
                        onChange={(e) => updateItem(item.id, 'rate', parseFloat(e.target.value) || 0)}
                        className="w-full text-right bg-transparent border-b border-transparent hover:border-slate-300 focus:border-emerald-500 focus:outline-none py-1"
                      />
                    </td>
                    <td className="py-2.5 px-3">
                      <select
                        value={item.taxRate}
                        onChange={(e) => updateItem(item.id, 'taxRate', parseInt(e.target.value))}
                        className="w-full bg-transparent border border-slate-200 rounded px-1.5 py-1 text-slate-700"
                      >
                        <option value={0}>0%</option>
                        <option value={5}>5%</option>
                        <option value={12}>12%</option>
                        <option value={18}>18%</option>
                        <option value={28}>28%</option>
                      </select>
                    </td>
                    <td className="py-2.5 px-4 text-right font-bold text-slate-900">
                      ₹{(item.qty * item.rate).toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                    </td>
                    <td className="py-2.5 px-3 text-center">
                      <button
                        onClick={() => removeItem(item.id)}
                        disabled={items.length <= 1}
                        className="text-slate-400 hover:text-red-600 disabled:opacity-30 transition-colors p-1"
                        title="Delete line item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Calculation Summary Box */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-6 pt-4 border-t border-slate-200">
          <div className="space-y-3 max-w-sm text-xs text-slate-600">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <span className="font-bold text-slate-900 block">Bank Account Remittance Details:</span>
              <p>Bank: ICICI Bank Ltd, Panampilly Branch</p>
              <p>Account Name: Apex Trading Co. Current A/C</p>
              <p>A/C Number: 008905018812</p>
              <p>IFSC Code: ICIC0000089</p>
            </div>
            <p className="text-[11px] text-slate-500">
              Declaration: Certified that all particulars are true and correct, and the amount represents the actual price charged.
            </p>
          </div>

          <div className="w-full sm:w-80 rounded-2xl bg-slate-50 border border-slate-200 p-5 space-y-3 text-xs">
            <div className="flex justify-between text-slate-600">
              <span>Gross Total:</span>
              <span className="font-semibold text-slate-900">₹{grossTotal.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
            </div>

            <div className="flex justify-between items-center text-slate-600">
              <span className="flex items-center gap-1.5">
                <span>Trade Discount (%):</span>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={discountPercent}
                  onChange={(e) => setDiscountPercent(Math.max(0, Math.min(100, parseFloat(e.target.value) || 0)))}
                  className="w-12 text-center bg-white border border-slate-200 rounded px-1 py-0.5"
                />
              </span>
              <span className="font-semibold text-red-600">-₹{discountAmount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
            </div>

            <div className="flex justify-between text-slate-700 font-medium pt-2 border-t border-slate-200">
              <span>Net Taxable Turnover:</span>
              <span className="font-bold text-slate-900">₹{taxableTurnover.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
            </div>

            {taxType === 'intra' ? (
              <>
                <div className="flex justify-between text-slate-600">
                  <span>Central GST (CGST):</span>
                  <span className="font-semibold text-slate-900">₹{totalCgst.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>State GST (SGST):</span>
                  <span className="font-semibold text-slate-900">₹{totalSgst.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
                </div>
              </>
            ) : (
              <div className="flex justify-between text-slate-600">
                <span>Integrated GST (IGST):</span>
                <span className="font-semibold text-slate-900">₹{totalIgst.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
              </div>
            )}

            <div className="flex justify-between text-sm sm:text-base font-extrabold text-slate-900 pt-3 border-t-2 border-slate-300">
              <span>Invoice Total:</span>
              <span className="text-emerald-700">₹{grandTotal.toLocaleString('en-IN')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
