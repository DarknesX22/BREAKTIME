import React from 'react';
import { Search, Bell, Menu, Plus } from 'lucide-react';

interface HeaderProps {
  onOpenSidebar: () => void;
}

export default function Header({ onOpenSidebar }: HeaderProps) {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-8 sticky top-0 z-40 lg:ml-64 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
      <div className="flex items-center gap-4 text-xs">
        <button 
          onClick={onOpenSidebar}
          className="lg:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-md transition-colors -ml-2"
        >
          <Menu size={20} />
        </button>

        <div className="flex items-center gap-4 hidden md:flex">
          <span className="text-slate-400 font-medium tracking-tight">Workspace</span>
          <span className="text-slate-200">/</span>
          <span className="text-slate-900 font-bold tracking-tight">Marketing Dashboard</span>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-6">
        <div className="relative hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          <input
            type="text"
            placeholder="Search..."
            className="w-32 sm:w-64 pl-10 pr-4 py-1.5 bg-slate-100 border-none rounded-md text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-slate-200 transition-all text-sm placeholder:text-slate-400"
          />
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <button className="bg-blue-600 text-white px-3 sm:px-4 py-1.5 rounded-md text-[10px] sm:text-xs font-bold shadow-sm hover:bg-blue-700 transition-all uppercase tracking-wider">
            <Plus size={14} className="sm:hidden" />
            <span className="hidden sm:inline">New Project</span>
          </button>
          
          <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors relative">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-blue-500 border-2 border-white rounded-full"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
