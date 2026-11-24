'use client';

import React, { useState } from 'react';
import {
  Table,
  RotateCcw,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Calculator,
  ArrowRight
} from 'lucide-react';

const COLS = ['A', 'B', 'C', 'D', 'E'];
const ROWS = [1, 2, 3, 4, 5, 6, 7, 8];

export default function SpreadsheetTool() {
  const [activeCell, setActiveCell] = useState<string>('B4');
  const [gridData, setGridData] = useState<Record<string, string>>({
    'A1': 'Account Line Item',
    'B1': 'July (₹)',
    'C1': 'August (₹)',
    'D1': 'September (₹)',
    'E1': 'Q3 Total (₹)',
    'A2': 'Gross Sales Revenue',
    'B2': '125000',
    'C2': '140000',
    'D2': '165000',
    'E2': '=SUM(B2:D2)',
    'A3': 'Cost of Goods Sold (COGS)',
    'B3': '52000',
    'C3': '58000',
    'D3': '68000',
    'E3': '=SUM(B3:D3)',
    'A4': 'Gross Profit',
    'B4': '=B2-B3',
    'C4': '=C2-C3',
    'D4': '=D2-D3',
    'E4': '=E2-E3',
    'A5': 'Operating Expenses',
    'B5': '28000',
    'C5': '31000',
    'D5': '34000',
    'E5': '=SUM(B5:D5)',
    'A6': 'Net Operating Profit',
    'B6': '=B4-B5',
    'C6': '=C4-C5',
    'D6': '=D4-D5',
    'E6': '=E4-E5'
  });

  const [formulaInput, setFormulaInput] = useState<string>('=B2-B3');
  const [validationResult, setValidationResult] = useState<{
    status: 'success' | 'warning' | 'idle';
    message: string;
  }>({ status: 'idle', message: '' });

  // Evaluation helper for basic spreadsheet formulas
  const evaluateCell = (cellId: string, visited: Set<string> = new Set()): string => {
    const raw = gridData[cellId] || '';
    if (!raw.startsWith('=')) {
      return raw;
    }
    if (visited.has(cellId)) return '#CIRCULAR!';
    visited.add(cellId);

    const formula = raw.substring(1).toUpperCase().trim();

    // SUM(X1:X4)
    if (formula.startsWith('SUM(') && formula.endsWith(')')) {
      const range = formula.substring(4, formula.length - 1);
      const [start, end] = range.split(':');
      if (start && end) {
        const startCol = start[0];
        const startRow = parseInt(start.substring(1));
        const endCol = end[0];
        const endRow = parseInt(end.substring(1));

        let sum = 0;
        if (startCol === endCol) {
          // Vertical sum
          for (let r = startRow; r <= endRow; r++) {
            const val = parseFloat(evaluateCell(`${startCol}${r}`, new Set(visited))) || 0;
            sum += val;
          }
          return sum.toString();
        } else if (startRow === endRow) {
          // Horizontal sum
          const startIdx = COLS.indexOf(startCol);
          const endIdx = COLS.indexOf(endCol);
          for (let c = startIdx; c <= endIdx; c++) {
            const val = parseFloat(evaluateCell(`${COLS[c]}${startRow}`, new Set(visited))) || 0;
            sum += val;
          }
          return sum.toString();
        }
      }
    }

    // Simple subtraction / addition like B2-B3 or B4-B5
    if (formula.includes('-')) {
      const [p1, p2] = formula.split('-');
      const v1 = parseFloat(evaluateCell(p1.trim(), new Set(visited))) || 0;
      const v2 = parseFloat(evaluateCell(p2.trim(), new Set(visited))) || 0;
      return (v1 - v2).toString();
    }

    if (formula.includes('+')) {
      const [p1, p2] = formula.split('+');
      const v1 = parseFloat(evaluateCell(p1.trim(), new Set(visited))) || 0;
      const v2 = parseFloat(evaluateCell(p2.trim(), new Set(visited))) || 0;
      return (v1 + v2).toString();
    }

    return raw;
  };

  const handleCellClick = (cellId: string) => {
    setActiveCell(cellId);
    setFormulaInput(gridData[cellId] || '');
  };

  const handleFormulaChange = (val: string) => {
    setFormulaInput(val);
    setGridData({
      ...gridData,
      [activeCell]: val
    });
  };

  const handleValidateSheet = () => {
    const q3Revenue = evaluateCell('E2');
    const q3NetProfit = evaluateCell('E6');

    if (q3Revenue === '430000' && q3NetProfit === '159000') {
      setValidationResult({
        status: 'success',
        message: 'Mastery Confirmed! Q3 Revenue (₹4,30,000) and Q3 Net Operating Profit (₹1,59,000) calculated accurately using formulas.'
      });
    } else {
      setValidationResult({
        status: 'warning',
        message: `Discrepancy detected. Expected Q3 Revenue ₹4,30,000 and Net Profit ₹1,59,000. Current calculated: Revenue ₹${q3Revenue || '0'}, Net Profit ₹${q3NetProfit || '0'}.`
      });
    }
  };

  const handleReset = () => {
    setGridData({
      'A1': 'Account Line Item', 'B1': 'July (₹)', 'C1': 'August (₹)', 'D1': 'September (₹)', 'E1': 'Q3 Total (₹)',
      'A2': 'Gross Sales Revenue', 'B2': '125000', 'C2': '140000', 'D2': '165000', 'E2': '',
      'A3': 'Cost of Goods Sold (COGS)', 'B3': '52000', 'C3': '58000', 'D3': '68000', 'E3': '',
      'A4': 'Gross Profit', 'B4': '', 'C4': '', 'D4': '', 'E4': '',
      'A5': 'Operating Expenses', 'B5': '28000', 'C5': '31000', 'D5': '34000', 'E5': '',
      'A6': 'Net Operating Profit', 'B6': '', 'C6': '', 'D6': '', 'E6': ''
    });
    setActiveCell('E2');
    setFormulaInput('');
    setValidationResult({ status: 'idle', message: 'Worksheet reset to unsolved state. Enter formulas to calculate Gross Profit and Q3 Totals.' });
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden space-y-6">
      {/* Header */}
      <div className="p-6 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold mb-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>Educational Spreadsheet Simulator</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
            Interactive Spreadsheet & Financial Modeling Grid
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Practice cell formulas (=SUM, subtraction, cell referencing) inside a live browser-based spreadsheet engine.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleReset}
            className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-all border border-slate-700"
          >
            Reset Exercise
          </button>
          <button
            onClick={handleValidateSheet}
            className="px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold transition-all shadow-sm"
          >
            Validate Formulas
          </button>
        </div>
      </div>

      {/* Validation Banner */}
      {validationResult.status !== 'idle' && (
        <div className={`mx-6 p-4 rounded-2xl flex items-center gap-3 text-xs sm:text-sm font-medium ${
          validationResult.status === 'success'
            ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
            : 'bg-amber-50 text-amber-800 border border-amber-200'
        }`}>
          {validationResult.status === 'success' ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          ) : (
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
          )}
          <span>{validationResult.message}</span>
        </div>
      )}

      {/* Formula Bar */}
      <div className="mx-6 p-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3">
        <div className="w-16 px-2.5 py-1 rounded-lg bg-white border border-slate-300 text-center font-mono font-bold text-xs text-slate-800">
          {activeCell}
        </div>
        <div className="text-slate-400 font-bold text-xs">fx</div>
        <input
          type="text"
          value={formulaInput}
          onChange={(e) => handleFormulaChange(e.target.value)}
          className="flex-1 font-mono text-xs sm:text-sm text-slate-900 bg-white border border-slate-300 rounded-lg px-3 py-1.5 focus:outline-none focus:border-teal-500"
          placeholder="Enter number or formula like =SUM(B2:D2) or =B2-B3"
        />
      </div>

      {/* Interactive Grid */}
      <div className="p-6 overflow-x-auto">
        <table className="w-full border-collapse border border-slate-200 text-xs text-left">
          <thead>
            <tr className="bg-slate-100 text-slate-600 font-bold">
              <th className="w-10 border border-slate-200 py-2 text-center bg-slate-200/80">#</th>
              {COLS.map(col => (
                <th key={col} className="border border-slate-200 py-2 px-3 min-w-[130px] text-center uppercase tracking-wider">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ROWS.map(row => (
              <tr key={row}>
                <td className="border border-slate-200 py-2 px-2 bg-slate-100 text-center font-bold text-slate-500 select-none">
                  {row}
                </td>
                {COLS.map(col => {
                  const cellId = `${col}${row}`;
                  const isSelected = activeCell === cellId;
                  const displayValue = evaluateCell(cellId);
                  const isHeaderRow = row === 1;
                  const isAccountHeadCol = col === 'A';
                  const isCalculated = (gridData[cellId] || '').startsWith('=');

                  return (
                    <td
                      key={cellId}
                      onClick={() => handleCellClick(cellId)}
                      className={`border border-slate-200 py-2 px-3 cursor-pointer transition-colors relative ${
                        isSelected
                          ? 'ring-2 ring-teal-600 bg-teal-50/50 z-10'
                          : 'hover:bg-slate-50'
                      } ${
                        isHeaderRow
                          ? 'font-bold bg-slate-50 text-slate-900 text-center'
                          : isAccountHeadCol
                          ? 'font-medium text-slate-900 bg-slate-50/30'
                          : 'text-right font-mono'
                      }`}
                    >
                      {displayValue ? (
                        !isNaN(Number(displayValue)) && !isHeaderRow && !isAccountHeadCol ? (
                          Number(displayValue).toLocaleString('en-IN')
                        ) : (
                          displayValue
                        )
                      ) : (
                        <span className="text-slate-300 italic text-[11px] select-none">-</span>
                      )}

                      {isCalculated && (
                        <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 rounded-full bg-teal-500" title="Computed via formula" />
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>

        {/* Instructions / Tips */}
        <div className="mt-4 p-4 rounded-2xl bg-teal-50/60 border border-teal-100 text-xs text-teal-900 space-y-1">
          <span className="font-bold block">Spreadsheet Practice Guide:</span>
          <p>• Click any cell to inspect its underlying formula in the formula bar.</p>
          <p>• Try typing <code className="bg-white px-1 py-0.5 rounded font-mono">=SUM(B2:D2)</code> in cell <code className="font-bold font-mono">E2</code> to compute row totals.</p>
          <p>• Type <code className="bg-white px-1 py-0.5 rounded font-mono">=B2-B3</code> in cell <code className="font-bold font-mono">B4</code> to calculate Gross Profit.</p>
        </div>
      </div>
    </div>
  );
}
