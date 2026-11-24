'use client';

import React, { useState } from 'react';
import {
  Package,
  AlertTriangle,
  CheckCircle2,
  TrendingDown,
  ShoppingCart,
  Plus,
  RotateCcw,
  Sparkles,
  ArrowRight,
  FileSpreadsheet
} from 'lucide-react';

interface InventoryItem {
  id: string;
  sku: string;
  name: string;
  category: string;
  stock: number;
  ads: number; // average daily sales
  leadDays: number;
  safetyDays: number;
  unitCost: number;
  supplier: string;
}

const INITIAL_INVENTORY: InventoryItem[] = [
  {
    id: 'inv-1',
    sku: 'UT-HD-BLK-L',
    name: 'Oversized Fleece Hoodie Black L',
    category: 'Hoodies',
    stock: 45,
    ads: 15,
    leadDays: 14,
    safetyDays: 5,
    unitCost: 650,
    supplier: 'Surat Knitwear Mills'
  },
  {
    id: 'inv-2',
    sku: 'UT-TS-WHT-M',
    name: 'Heavyweight Boxy Tee White M',
    category: 'T-Shirts',
    stock: 22,
    ads: 11,
    leadDays: 10,
    safetyDays: 5,
    unitCost: 320,
    supplier: 'Tirupur Apparel Exports'
  },
  {
    id: 'inv-3',
    sku: 'LUM-VAS-CLY-01',
    name: 'Handmade Ceramic Vase Royal Blue',
    category: 'Home Decor',
    stock: 85,
    ads: 4,
    leadDays: 12,
    safetyDays: 5,
    unitCost: 450,
    supplier: 'Jaipur Artisan Guild'
  },
  {
    id: 'inv-4',
    sku: 'SR-CD-500',
    name: 'Wayanad Green Cardamom 500g',
    category: 'Spices',
    stock: 140,
    ads: 6,
    leadDays: 7,
    safetyDays: 4,
    unitCost: 950,
    supplier: 'Wayanad Organic Spices'
  }
];

export default function InventoryTrackerTool() {
  const [inventory, setInventory] = useState<InventoryItem[]>(INITIAL_INVENTORY);
  const [selectedPoItem, setSelectedPoItem] = useState<InventoryItem | null>(null);
  const [poQuantity, setPoQuantity] = useState<number>(200);
  const [poSuccessMessage, setPoSuccessMessage] = useState<string | null>(null);

  const calculateRop = (item: InventoryItem) => {
    const safetyStock = item.ads * item.safetyDays;
    return (item.ads * item.leadDays) + safetyStock;
  };

  const getStatus = (item: InventoryItem) => {
    const rop = calculateRop(item);
    const daysLeft = item.ads > 0 ? (item.stock / item.ads) : 999;

    if (daysLeft <= 4) {
      return { label: 'Critical Stockout Risk', color: 'bg-red-100 text-red-800 border-red-200' };
    } else if (item.stock <= rop) {
      return { label: 'Reorder Required', color: 'bg-amber-100 text-amber-800 border-amber-200' };
    }
    return { label: 'Healthy Stock', color: 'bg-emerald-100 text-emerald-800 border-emerald-200' };
  };

  const simulateSales = (id: string, amount: number) => {
    setInventory(inventory.map(item => {
      if (item.id === id) {
        return { ...item, stock: Math.max(0, item.stock - amount) };
      }
      return item;
    }));
  };

  const handleCreatePo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPoItem) return;

    setInventory(inventory.map(item => {
      if (item.id === selectedPoItem.id) {
        return { ...item, stock: item.stock + poQuantity };
      }
      return item;
    }));

    setPoSuccessMessage(`Purchase Order PO-${Date.now().toString().slice(-4)} created! ${poQuantity} units of ${selectedPoItem.sku} received into warehouse.`);
    setSelectedPoItem(null);
    setTimeout(() => setPoSuccessMessage(null), 5000);
  };

  const handleReset = () => {
    setInventory(INITIAL_INVENTORY);
    setPoSuccessMessage(null);
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden space-y-6">
      {/* Top Banner */}
      <div className="p-6 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold mb-2">
            <Package className="w-3.5 h-3.5" />
            <span>Interactive Supply Chain Simulator</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
            Inventory Velocity & Reorder Point (ROP) Tracker
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Monitor real-time warehouse velocity, track stockout risks, and simulate purchase order replenishments.
          </p>
        </div>

        <button
          onClick={handleReset}
          className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-all border border-slate-700 inline-flex items-center gap-2"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Stock Counts</span>
        </button>
      </div>

      {poSuccessMessage && (
        <div className="mx-6 p-4 rounded-2xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs sm:text-sm font-medium flex items-center gap-2.5">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>{poSuccessMessage}</span>
        </div>
      )}

      {/* Inventory Table */}
      <div className="p-6 pt-0 overflow-x-auto">
        <table className="w-full text-left text-xs border border-slate-200 rounded-2xl overflow-hidden">
          <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
            <tr>
              <th className="py-3 px-4">SKU / Product</th>
              <th className="py-3 px-3 text-right">On-Hand</th>
              <th className="py-3 px-3 text-right">Daily Sales (ADS)</th>
              <th className="py-3 px-3 text-right">Days Left</th>
              <th className="py-3 px-3 text-right">Reorder Point</th>
              <th className="py-3 px-3">Replenishment Status</th>
              <th className="py-3 px-4 text-center">Interactive Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 font-medium text-slate-800">
            {inventory.map(item => {
              const rop = calculateRop(item);
              const daysLeft = item.ads > 0 ? (item.stock / item.ads).toFixed(1) : '99';
              const status = getStatus(item);

              return (
                <tr key={item.id} className="hover:bg-slate-50/70">
                  <td className="py-3 px-4">
                    <span className="font-mono font-bold text-slate-900 block">{item.sku}</span>
                    <span className="text-slate-600 text-[11px]">{item.name}</span>
                  </td>
                  <td className="py-3 px-3 text-right font-bold text-sm text-slate-900">
                    {item.stock}
                  </td>
                  <td className="py-3 px-3 text-right text-slate-600">
                    {item.ads} / day
                  </td>
                  <td className="py-3 px-3 text-right font-semibold text-slate-900">
                    {daysLeft} days
                  </td>
                  <td className="py-3 px-3 text-right font-mono text-slate-600">
                    {rop} units
                  </td>
                  <td className="py-3 px-3">
                    <span className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-bold border ${status.color}`}>
                      {status.label}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex items-center justify-center gap-1.5">
                      <button
                        onClick={() => simulateSales(item.id, 5)}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-semibold transition-colors"
                        title="Simulate 5 customer sales"
                      >
                        -5 Sales
                      </button>
                      <button
                        onClick={() => {
                          setSelectedPoItem(item);
                          setPoQuantity(200);
                        }}
                        className="px-3 py-1 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-[11px] font-bold transition-colors shadow-2xs"
                      >
                        Create PO
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* PO Drawer / Modal */}
      {selectedPoItem && (
        <div className="mx-6 p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200">
            <div>
              <h3 className="font-bold text-sm text-slate-900">
                Draft Supplier Purchase Order: {selectedPoItem.sku}
              </h3>
              <p className="text-xs text-slate-500">
                Supplier: <strong className="text-slate-800">{selectedPoItem.supplier}</strong> | Unit Cost: ₹{selectedPoItem.unitCost}
              </p>
            </div>
            <button
              onClick={() => setSelectedPoItem(null)}
              className="text-xs font-semibold text-slate-500 hover:text-slate-800"
            >
              Cancel
            </button>
          </div>

          <form onSubmit={handleCreatePo} className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
            <div>
              <label className="text-[11px] font-bold text-slate-600 block mb-1">
                Order Quantity (Units)
              </label>
              <input
                type="number"
                min="50"
                step="50"
                value={poQuantity}
                onChange={(e) => setPoQuantity(parseInt(e.target.value) || 50)}
                className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs font-bold text-slate-900"
              />
            </div>
            <div>
              <label className="text-[11px] font-bold text-slate-600 block mb-1">
                Estimated Total PO Value
              </label>
              <div className="py-2 px-3 rounded-xl bg-white border border-slate-200 font-bold text-xs text-slate-900">
                ₹{(poQuantity * selectedPoItem.unitCost).toLocaleString('en-IN')}
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-all shadow-sm"
              >
                Approve & Transmit PO
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
