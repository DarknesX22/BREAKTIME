import React from 'react';
import { InventorySummaryCard } from '../components/Cards';
import { Search, Download, Plus, Edit3, Trash2, ChevronLeft, ChevronRight, Settings } from 'lucide-react';
import { cn } from '../lib/utils';
import { InventoryItem } from '../types';

const MOCK_INVENTORY: InventoryItem[] = [
  { id: 'PDID123568789', date: '2024-03-16', name: 'Cherry Fiesta', quantity: 0, status: 'Out of Stock', units: 50, threshold: 12, expiryDate: '22-12-2025' },
  { id: 'PDID123568234', date: '2024-03-16', name: 'Crazyoce', quantity: 48, status: 'In Stock', units: 75, threshold: 14, expiryDate: '22-12-2025' },
  { id: 'PDID123568654', date: '2024-03-16', name: 'Vaporesso GTX', quantity: 12, status: 'Low Stock', units: 30, threshold: 18, expiryDate: '22-12-2025' },
  { id: 'PDID123568564', date: '2024-03-16', name: 'Innokin Goma', quantity: 0, status: 'Out of Stock', units: 60, threshold: 24, expiryDate: '22-12-2025' },
  { id: 'PDID123568987', date: '2024-03-16', name: 'Vaporesso Sky Solo', quantity: 42, status: 'In Stock', units: 100, threshold: 36, expiryDate: '22-12-2025' },
  { id: 'PDID123568324', date: '2024-03-16', name: 'Uwell Caliburn X', quantity: 96, status: 'In Stock', units: 80, threshold: 12, expiryDate: '22-12-2025' },
  { id: 'PDID123568489', date: '2024-03-16', name: 'Hellvape Dead Rabbit', quantity: 0, status: 'Out of Stock', units: 45, threshold: 18, expiryDate: '22-12-2025' },
];

const getStatusStyles = (status: string) => {
  switch (status) {
    case 'Out of Stock': return 'bg-red-50 text-red-600 border-red-100';
    case 'In Stock': return 'bg-blue-50 text-blue-700 border-blue-100';
    case 'Low Stock': return 'bg-amber-50 text-amber-600 border-amber-100';
    default: return 'bg-slate-50 text-slate-600 border-slate-100';
  }
};

export default function InventoryPage() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
        <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-6">Inventory Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <InventorySummaryCard 
            label="Low Stock" 
            count={18} 
            subtext="Items requiring restock soon" 
            trend={0.01} 
            variant="low" 
          />
          <InventorySummaryCard 
            label="Out of Stock" 
            count={9} 
            subtext="Non-active SKU count" 
            trend={0.01} 
            variant="out" 
          />
          <InventorySummaryCard 
            label="Short Expire" 
            count={3} 
            subtext="Critical expiry warnings" 
            trend={0.01} 
            variant="expire" 
          />
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col overflow-hidden">
        <div className="p-4 sm:p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h2 className="font-semibold text-slate-800">All Inventory</h2>
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative flex-1 sm:flex-none">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
              <input
                type="text"
                placeholder="Product ID / Name"
                className="w-full sm:w-48 pl-9 pr-4 py-1.5 bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-xs transition-all"
              />
            </div>
            <button className="flex items-center gap-1.5 px-3 py-1.5 text-slate-600 border border-slate-200 bg-white rounded-md text-xs font-bold hover:bg-slate-50 transition-colors shadow-sm">
              <Download size={12} />
              Export
            </button>
            <button className="flex items-center gap-1.5 px-4 py-1.5 bg-blue-600 text-white rounded-md text-xs font-bold hover:bg-blue-700 transition-all shadow-sm shadow-blue-500/20">
              <Plus size={14} />
              Add Item
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[800px]">
            <thead>
              <tr className="bg-slate-50/50 text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                <th className="px-6 py-4 border-b border-slate-100">Product Details</th>
                <th className="px-6 py-4 border-b border-slate-100">Stock Status</th>
                <th className="px-6 py-4 border-b border-slate-100 text-center">Qty</th>
                <th className="px-6 py-4 border-b border-slate-100 text-center">Units</th>
                <th className="px-6 py-4 border-b border-slate-100 text-center">T-hold</th>
                <th className="px-6 py-4 border-b border-slate-100">Expiry</th>
                <th className="px-6 py-4 border-b border-slate-100 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {MOCK_INVENTORY.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50 transition-colors group">
                  <td className="px-6 py-4">
                    <div>
                      <div className="font-bold text-slate-900 tracking-tight">{item.name}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5 uppercase">{item.id}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      "px-2.5 py-0.5 rounded text-[10px] font-bold border whitespace-nowrap",
                      getStatusStyles(item.status)
                    )}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={cn("text-xs font-bold", item.quantity < 10 ? "text-red-500" : "text-slate-700")}>
                      {item.quantity}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center text-xs text-slate-500">{item.units}</td>
                  <td className="px-6 py-4 text-center text-xs text-slate-500">{item.threshold}</td>
                  <td className="px-6 py-4 text-xs font-medium text-slate-500">{item.expiryDate}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2 transition-all">
                      <button className="px-2.5 py-1 bg-white border border-slate-200 rounded text-[10px] font-bold text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm">
                        Edit
                      </button>
                      <button className="p-1 px-2 border border-transparent text-slate-400 hover:text-red-600 hover:border-red-100 hover:bg-red-50 rounded transition-all">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 border-t border-slate-100 flex items-center justify-between bg-slate-50/50">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Records: 1 - 07 of 80</span>
          <div className="flex items-center gap-1.5">
            <button className="w-8 h-8 rounded-md flex items-center justify-center bg-white border border-slate-200 text-slate-400 hover:border-blue-500 hover:text-blue-600 transition-all shadow-sm">
              <ChevronLeft size={14} />
            </button>
            <button className="w-8 h-8 rounded-md flex items-center justify-center bg-blue-600 text-white font-bold text-xs shadow-md shadow-blue-500/20">
              1
            </button>
            <button className="w-8 h-8 rounded-md flex items-center justify-center bg-white border border-slate-200 text-slate-900 font-bold text-xs hover:bg-slate-50 transition-all shadow-sm">
              2
            </button>
            <button className="w-8 h-8 rounded-md flex items-center justify-center bg-white border border-slate-200 text-slate-400 hover:border-blue-500 hover:text-blue-600 transition-all shadow-sm">
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
