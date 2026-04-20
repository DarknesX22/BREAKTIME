import React from 'react';
import { Info, TrendingDown, TrendingUp, Box, PackageX, CalendarClock, Settings } from 'lucide-react';
import { cn } from '../lib/utils';

// StatCard Component
interface StatCardProps {
  label: string;
  count: string | number;
  subtext: string;
  variant?: 'primary' | 'white';
}

export function StatCard({ label, count, subtext, variant = 'white' }: StatCardProps) {
  return (
    <div className={cn(
      "p-4 sm:p-5 rounded-xl border flex flex-col justify-between h-[160px] sm:h-[180px] w-full min-w-0 transition-all duration-300",
      variant === 'primary' 
        ? "bg-slate-900 border-slate-800 text-white shadow-lg" 
        : "bg-white border-slate-200 shadow-sm"
    )}>
      <div className="flex justify-between items-start gap-2">
        <span className={cn(
          "text-xs sm:text-sm font-bold tracking-tight leading-tight uppercase opacity-80 sm:normal-case sm:opacity-100",
          variant === 'primary' ? "text-slate-100" : "text-slate-500"
        )}>
          {label}
        </span>
        <button className={cn(
          "flex-shrink-0 p-1 rounded-md transition-colors",
          variant === 'primary' ? "text-slate-500 hover:text-white" : "text-slate-300 hover:text-slate-600"
        )}>
          <Settings size={14} />
        </button>
      </div>
      
      <div className="mt-auto">
        <div className="flex items-baseline min-w-0 overflow-hidden">
          <span className={cn(
            "font-extrabold tracking-tight break-all",
            count.toString().length > 12 ? "text-lg sm:text-xl" : 
            count.toString().length > 8 ? "text-xl sm:text-2xl" : "text-2xl sm:text-3xl"
          )}>
            {count}
          </span>
        </div>
        
        <div className="flex flex-wrap items-center gap-2 mt-4">
          <div className={cn(
            "flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold",
            variant === 'primary' ? "bg-blue-600/30 text-blue-300" : "bg-green-100 text-green-700"
          )}>
            <TrendingUp size={10} />
            {variant === 'primary' ? "12.5%" : "4.2%"}
          </div>
          <p className={cn(
            "text-[10px] font-medium leading-none whitespace-nowrap",
            variant === 'primary' ? "text-slate-500" : "text-slate-400"
          )}>
            vs last month
          </p>
        </div>
      </div>
    </div>
  );
}

// InventorySummary Component
interface InventorySummaryCardProps {
  label: string;
  count: number;
  subtext: string;
  trend: number;
  variant: 'low' | 'out' | 'expire';
}

export function InventorySummaryCard({ label, count, subtext, trend, variant }: InventorySummaryCardProps) {
  const icons = {
    low: <TrendingDown size={16} className="text-white" />,
    out: <PackageX size={16} className="text-white" />,
    expire: <CalendarClock size={16} className="text-white" />,
  };

  const ringColors = {
    low: "ring-blue-600/20",
    out: "ring-indigo-500/20",
    expire: "ring-slate-200",
  };

  const bgColors = {
    low: "bg-blue-600",
    out: "bg-indigo-500",
    expire: "bg-slate-400",
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-3 sm:p-4 flex items-center justify-between shadow-sm hover:shadow-md transition-all group min-w-0">
      <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
        <div className={cn("flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105 shadow-sm ring-4", ringColors[variant], bgColors[variant])}>
          {icons[variant]}
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="font-bold text-slate-800 text-[10px] sm:text-sm tracking-tight truncate uppercase sm:normal-case">{label}</h4>
          <p className="text-[9px] sm:text-[10px] text-slate-400 leading-tight truncate hidden xs:block sm:block">{subtext}</p>
        </div>
      </div>
      
      <div className="text-right flex flex-col items-end flex-shrink-0 ml-2">
        <div className="text-xs sm:text-sm font-bold text-slate-900">{count}</div>
        <div className={cn(
          "text-[8px] sm:text-[9px] font-extrabold px-1.5 py-0.5 rounded mt-1 shadow-sm uppercase tracking-tighter",
          variant === 'expire' ? "bg-slate-100 text-slate-500" : "bg-green-100 text-green-700"
        )}>
          {variant === 'expire' ? "Soon" : "12%"}
        </div>
      </div>
    </div>
  );
}
