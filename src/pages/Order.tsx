import React from 'react';
import { StatCard } from '../components/Cards';
import { Search, Calendar, Download, Settings, ChevronLeft, ChevronRight, Check, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { Order } from '../types';

const MOCK_ORDERS: Order[] = [
  { id: '7823591', date: '2023-09-12', store: 'Sunset Emporium', region: 'Europe', status: 'In Stock' },
  { id: '9384756', date: '2023-11-05', store: 'Moonlight Bazaar', region: 'Asia', status: 'Out of Stock' },
  { id: '2468135', date: '2023-07-28', store: 'Ocean View Market', region: 'Australia', status: 'Low Stock' },
  { id: '1357924', date: '2023-12-19', store: 'Mountain Peak Store', region: 'South America', status: 'In Stock' },
  { id: '8642097', date: '2023-10-03', store: 'Desert Oasis Shop', region: 'Africa', status: 'Out of Stock' },
  { id: '5793146', date: '2023-08-17', store: 'Arctic Supplies', region: 'North America', status: 'Low Stock' },
  { id: '3691470', date: '2023-06-22', store: 'Tropical Paradise Mart', region: 'Caribbean', status: 'In Stock' },
];

const getStatusStyles = (status: string) => {
  switch (status) {
    case 'In Stock': return 'bg-blue-50 text-blue-600 border-blue-100';
    case 'Out of Stock': return 'bg-red-50 text-red-600 border-red-100';
    case 'Low Stock': return 'bg-amber-50 text-amber-600 border-amber-100';
    default: return 'bg-gray-50 text-gray-600 border-gray-100';
  }
};

export default function OrderPage() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
        <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-6">Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatCard 
            label="Total Orders" 
            count="1,460" 
            subtext="Total orders processed this month"
            variant="primary"
          />
          <StatCard 
            label="Pending Approval" 
            count="198" 
            subtext="Orders awaiting manager review"
          />
          <StatCard 
            label="Shipped Today" 
            count="649" 
            subtext="Orders dispatched in last 24h"
          />
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col overflow-hidden">
        <div className="p-4 sm:p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h2 className="font-semibold text-slate-800">Order Management</h2>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-md text-[10px] font-bold text-slate-500 uppercase tracking-wider cursor-pointer hover:border-blue-500 transition-all shadow-sm whitespace-nowrap">
              <span>Filter By Store</span>
              <ChevronRight size={12} className="rotate-90" />
            </div>
            <div className="hidden sm:block h-8 w-px bg-slate-100 mx-1"></div>
            <button className="flex items-center gap-2 px-4 py-1.5 bg-blue-600 text-white rounded-md text-xs font-bold shadow-md shadow-blue-500/20 hover:bg-blue-700 transition-all ml-auto sm:ml-0">
              <Download size={14} />
              Export
            </button>
          </div>
        </div>

        <div className="px-4 sm:px-6 py-4 bg-slate-50/30 border-b border-slate-100 flex justify-end">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
            <input
              type="text"
              placeholder="Search Order ID..."
              className="w-full pl-9 pr-4 py-1.5 bg-white border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-xs transition-all shadow-sm"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[900px]">
            <thead>
              <tr className="bg-slate-50/50 text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                <th className="px-6 py-4 border-b border-slate-100">Order ID</th>
                <th className="px-6 py-4 border-b border-slate-100">Store / Region</th>
                <th className="px-6 py-4 border-b border-slate-100">Status</th>
                <th className="px-6 py-4 border-b border-slate-100">Compliance</th>
                <th className="px-6 py-4 border-b border-slate-100 text-right">Review Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {MOCK_ORDERS.map((order) => (
                <tr key={order.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-bold text-slate-900 leading-none">{order.id}</div>
                    <div className="text-[10px] text-slate-400 mt-1 italic">{order.date}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-semibold text-slate-700 leading-none">{order.store}</div>
                    <div className="text-[10px] text-slate-400 mt-1 uppercase tracking-tight">{order.region}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      "px-2.5 py-0.5 rounded text-[10px] font-bold border whitespace-nowrap",
                      getStatusStyles(order.status)
                    )}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500" style={{ width: Math.random() * 40 + 60 + '%' }}></div>
                      </div>
                      <span className="text-[10px] font-bold text-slate-400 font-mono">OK</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button className="px-4 py-1.5 bg-blue-600 border border-blue-600 text-white rounded text-[10px] font-bold hover:bg-blue-700 hover:border-blue-700 transition-all shadow-sm shadow-blue-500/10">
                        Accept
                      </button>
                      <button className="px-4 py-1.5 bg-white border border-slate-200 text-slate-600 rounded text-[10px] font-bold hover:border-red-200 hover:text-red-500 transition-all shadow-sm">
                        Reject
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 border-t border-slate-100 flex items-center justify-between bg-slate-50/50">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active Requests: 7</span>
          <div className="flex items-center gap-1.5">
            <button className="w-8 h-8 rounded-md flex items-center justify-center bg-white border border-slate-200 text-slate-400 hover:border-blue-500 hover:text-blue-600 transition-all shadow-sm">
              <ChevronLeft size={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-md border border-blue-200 bg-blue-50 text-blue-600 font-bold text-xs shadow-sm">
              1
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
