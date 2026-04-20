import React from 'react';
import { LayoutDashboard, Box, ShoppingCart, ChevronRight, X } from 'lucide-react';
import { cn } from '../lib/utils';

interface SidebarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ currentPath, onNavigate, isOpen, onClose }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'inventory', label: 'Inventory', icon: Box, hasSubmenu: true },
    { id: 'order', label: 'Order', icon: ShoppingCart },
  ];

  return (
    <aside className={cn(
      "w-64 h-screen bg-slate-900 text-slate-300 flex flex-col fixed left-0 top-0 z-50 border-r border-slate-800 shadow-xl transition-transform duration-300 transform lg:translate-x-0 overflow-y-auto",
      isOpen ? "translate-x-0" : "-translate-x-full"
    )}>
      <div className="p-6 flex items-center justify-between sticky top-0 bg-slate-900 z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex-shrink-0">
            <img 
              src="https://picsum.photos/seed/breaktime-logo/200/200" 
              alt="BreakTime Logo" 
              className="w-full h-full object-contain rounded-lg"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-white font-bold text-lg tracking-tight">Break<span className="text-orange-500">Time</span></span>
            <span className="text-[8px] text-slate-500 font-bold uppercase tracking-[0.2em] mt-0.5">Management System</span>
          </div>
        </div>
        <button 
          onClick={onClose}
          className="lg:hidden p-1 text-slate-500 hover:text-white"
        >
          <X size={20} />
        </button>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1">
        <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-3 mb-4">Main Menu</div>
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={cn(
              "w-full flex items-center justify-between px-3 py-2.5 rounded-md transition-all duration-200 group text-sm",
              currentPath === item.id 
                ? "bg-slate-800 text-white shadow-sm" 
                : "text-slate-400 hover:bg-slate-800/50 hover:text-slate-100"
            )}
          >
            <div className="flex items-center gap-3">
              <item.icon size={18} className={cn(
                "transition-colors",
                currentPath === item.id ? "text-blue-400" : "text-slate-500 group-hover:text-slate-300"
              )} />
              <span className="font-medium tracking-tight">{item.label}</span>
            </div>
            {item.hasSubmenu && (
              <ChevronRight size={14} className={cn(
                "transition-transform duration-200",
                currentPath === item.id ? "rotate-90 text-blue-400" : "text-slate-600"
              )} />
            )}
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <div className="flex items-center gap-3 px-2 py-1">
          <div className="w-9 h-9 rounded-full bg-slate-700 overflow-hidden border border-slate-700">
            <div className="w-full h-full bg-blue-400 flex items-center justify-center text-slate-900 font-bold text-xs">
              RC
            </div>
          </div>
          <div className="min-w-0">
            <div className="text-xs font-semibold text-white truncate">Rayford Chenail</div>
            <div className="text-[10px] text-slate-500 truncate">Administrator</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
