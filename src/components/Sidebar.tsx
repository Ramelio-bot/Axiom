"use client";

import React from "react";
import { 
  LayoutDashboard, 
  Calculator, 
  Coins, 
  Clock, 
  Settings, 
  BarChart3 
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: false },
  { icon: Calculator, label: "Position Sizer", active: true },
  { icon: Coins, label: "Pip Value", active: false },
  { icon: Clock, label: "Market Clock", active: false },
];

export default function Sidebar() {
  return (
    <div className="w-64 h-full border-r border-border-thin flex flex-col p-6 bg-background/80 backdrop-blur-terminal z-10">
      <div className="flex items-center gap-3 mb-12 px-2">
        <div className="w-8 h-8 bg-emerald rounded flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.2)]">
          <BarChart3 className="text-zinc-950" size={18} strokeWidth={2.5} />
        </div>
        <h1 className="text-lg font-semibold tracking-tight">AXIOM</h1>
      </div>

      <nav className="flex-1 space-y-1">
        {navItems.map((item, index) => (
          <button
            key={index}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-300 group ${
              item.active 
                ? "bg-emerald/10 text-emerald font-medium border border-emerald/20" 
                : "text-zinc-500 hover:bg-white/5 hover:text-zinc-200"
            }`}
          >
            <item.icon size={16} className={item.active ? "text-emerald" : "text-zinc-500 group-hover:text-zinc-200"} />
            <span className="text-sm">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto pt-6 border-t border-border-thin space-y-1">
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-zinc-500 hover:bg-white/5 hover:text-zinc-200 transition-all duration-300">
          <Settings size={16} />
          <span className="text-sm">Settings</span>
        </button>
        <div className="px-3 py-3 mt-4 rounded-lg bg-zinc-900/50 border border-border-thin">
          <div className="flex items-center gap-2 mb-1.5">
            <div className="pulsing-dot" />
            <span className="text-[10px] text-zinc-400 font-medium uppercase tracking-wider">Terminal Active</span>
          </div>
          <p className="text-[9px] text-zinc-600 leading-tight">Secure connection established with Tier-1 liquidity providers.</p>
        </div>
      </div>
    </div>
  );
}
