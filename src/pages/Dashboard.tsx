import React from 'react';
import { StatCard, InventorySummaryCard } from '../components/Cards';
import { Search, Calendar, Download, Edit3, Trash2, ChevronLeft, ChevronRight, Settings, LayoutDashboard } from 'lucide-react';
import { cn } from '../lib/utils';
import { Order } from '../types';

const MOCK_ORDERS: Order[] = [
  { id: '7823591', date: '2023-09-12', store: 'Sunset Emporium', region: 'Europe', status: 'Packed' },
  { id: '9384756', date: '2023-11-05', store: 'Moonlight Bazaar', region: 'Asia', status: 'New Order' },
  { id: '2468135', date: '2023-07-28', store: 'Ocean View Market', region: 'Australia', status: 'Order Pending' },
  { id: '1357924', date: '2023-12-19', store: 'Mountain Peak Store', region: 'South America', status: 'Packed' },
  { id: '8642097', date: '2023-10-03', store: 'Desert Oasis Shop', region: 'Africa', status: 'New Order' },
  { id: '5793146', date: '2023-08-17', store: 'Arctic Supplies', region: 'North America', status: 'Order Pending' },
  { id: '3691470', date: '2023-06-22', store: 'Tropical Paradise Mart', region: 'Caribbean', status: 'Packed' },
];

const getStatusStyles = (status: string) => {
  switch (status) {
    case 'Packed': return 'bg-blue-100/50 text-blue-700 border-blue-200/50';
    case 'New Order': return 'bg-green-100/50 text-green-700 border-green-200/50';
    case 'Order Pending': return 'bg-slate-100 text-slate-700 border-slate-200';
    default: return 'bg-slate-50 text-slate-600 border-slate-100';
  }
};

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Top Overview Section */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 xl:col-span-8 bg-white rounded-xl p-6 border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 opacity-[0.03] pointer-events-none">
            <LayoutDashboard size={120} />
          </div>
          <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-6">Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <StatCard 
              label="Total Revenue" 
              count="$128,430.00" 
              subtext="Total revenue generated this month"
              variant="primary"
            />
            <StatCard 
              label="Active Users" 
              count="14,209" 
              subtext="Total number of active platform users"
            />
            <StatCard 
              label="Conversion Rate" 
              count="3.84%" 
              subtext="Percentage of users who converted"
            />
          </div>
        </div>

        <div className="col-span-12 xl:col-span-4 flex flex-col gap-6">
          <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4">Inventory Overview</h2>
          <div className="space-y-4">
            <InventorySummaryCard 
              label="Low Stock" 
              count={18} 
              subtext="Items requiring immediate attention" 
              trend={0.01} 
              variant="low" 
            />
            <InventorySummaryCard 
              label="Out of Stock" 
              count={9} 
              subtext="Currently unavailable items" 
              trend={0.01} 
              variant="out" 
            />
            <InventorySummaryCard 
              label="Short Expire" 
              count={3} 
              subtext="Items expiring within 30 days" 
              trend={0.01} 
              variant="expire" 
            />
          </div>
        </div>
      </div>

      {/* Bottom Table Section */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <h2 className="font-semibold text-slate-800">Order Overview</h2>
            <div className="flex items-center gap-3">
              <button className="text-blue-600 text-xs font-bold uppercase tracking-wider hover:text-blue-700 transition-colors">
                View All
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white rounded-md text-xs font-bold shadow-sm hover:bg-blue-700 transition-all">
                <Download size={12} />
                Export CSV
              </button>
            </div>
          </div>

          <div className="px-6 py-4 border-b border-slate-50 flex items-center justify-between bg-slate-50/30">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
              <input
                type="text"
                placeholder="Search Client / Order ID"
                className="pl-9 pr-4 py-1.5 bg-white border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-xs w-64"
              />
            </div>
          </div>

          <div className="overflow-x-auto border-t border-slate-100">
            <table className="w-full text-left min-w-[700px]">
              <thead>
                <tr className="bg-slate-50/50 text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                  <th className="px-6 py-3 border-b border-slate-100">Client / Store</th>
                  <th className="px-6 py-3 border-b border-slate-100">Status</th>
                  <th className="px-6 py-3 border-b border-slate-100">Region</th>
                  <th className="px-6 py-3 border-b border-slate-100">Date</th>
                  <th className="px-6 py-3 border-b border-slate-100 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {MOCK_ORDERS.map((order) => (
                  <tr key={order.id} className="hover:bg-slate-50 transition-colors group">
                    <td className="px-6 py-4">
                      <div>
                        <div className="font-semibold text-slate-900 leading-none">{order.store}</div>
                        <div className="text-[10px] text-slate-400 mt-1 uppercase tracking-tight">{order.id}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={cn(
                        "px-2.5 py-1 rounded-full text-[10px] font-bold border whitespace-nowrap",
                        getStatusStyles(order.status)
                      )}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-slate-500 text-xs font-medium">{order.region}</td>
                    <td className="px-6 py-4 text-slate-500 text-xs italic">{order.date}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2 transition-all">
                        <button className="p-1.5 text-slate-400 hover:text-blue-600 bg-white rounded border border-slate-100 shadow-sm transition-all">
                          <Edit3 size={14} />
                        </button>
                        <button className="p-1.5 text-slate-400 hover:text-red-600 bg-white rounded border border-slate-100 shadow-sm transition-all">
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
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Showing 7 of 80</span>
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 bg-white text-slate-400 hover:text-slate-900 transition-colors shadow-sm">
                <ChevronLeft size={14} />
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded border border-blue-200 bg-blue-50 text-blue-600 font-bold text-xs shadow-sm shadow-blue-500/10">
                1
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 bg-white text-slate-600 font-medium text-xs hover:bg-slate-50 shadow-sm transition-all">
                2
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 bg-white text-slate-400 hover:text-slate-900 transition-colors shadow-sm">
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col p-6">
          <h2 className="font-semibold text-slate-800 mb-6">Team Velocity</h2>
          <div className="flex-1 space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-[11px] font-bold text-slate-500 uppercase tracking-tighter">
                <span>Q4 Goals</span>
                <span className="text-blue-600">72%</span>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden p-0.5">
                <div className="h-full bg-blue-600 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.4)]" style={{ width: '72%' }}></div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-[11px] font-bold text-slate-500 uppercase tracking-tighter">
                <span>Inventory Rotation</span>
                <span className="text-indigo-600">88%</span>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden p-0.5">
                <div className="h-full bg-indigo-500 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.4)]" style={{ width: '88%' }}></div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100">
              <div className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-4">Upcoming Deadlines</div>
              <div className="space-y-4">
                {[
                  { label: 'Final Audit Report', meta: 'Due in 2 days', color: 'bg-red-500' },
                  { label: 'API Documentation', meta: 'Due in 5 days', color: 'bg-amber-500' },
                  { label: 'Cloud Shift Review', meta: 'Due in 8 days', color: 'bg-blue-500' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer border border-transparent hover:border-slate-100">
                    <div className={cn("w-2 h-2 rounded-full ring-4 ring-offset-2", item.color, item.color.replace('bg-', 'ring-').concat('/10'))}></div>
                    <div className="flex-1">
                      <div className="text-xs font-bold text-slate-800 tracking-tight leading-none">{item.label}</div>
                      <div className="text-[10px] text-slate-400 mt-1 uppercase font-medium">{item.meta}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
