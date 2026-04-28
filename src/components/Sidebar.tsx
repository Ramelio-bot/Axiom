"use client";

import React from "react";
import { 
  LayoutDashboard, 
  Calculator, 
  Coins, 
  Clock, 
  Settings, 
  Zap 
} from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: false },
  { icon: Calculator, label: "Position Sizer", active: true },
  { icon: Coins, label: "Pip Value", active: false },
  { icon: Clock, label: "Market Clock", active: false },
];

export default function Sidebar() {
  return (
    <div className="w-64 h-full border-r border-border-muted flex flex-col p-6 bg-obsidian z-10">
      <div className="flex items-center gap-3 mb-12">
        <div className="w-10 h-10 bg-neon-mint rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(0,255,136,0.2)]">
          <Zap className="text-obsidian" size={24} fill="currentColor" />
        </div>
        <div>
          <h1 className="text-xl font-bold tracking-tighter leading-none">AXIOM</h1>
          <p className="text-[8px] font-bold text-neon-mint tracking-[0.2em] uppercase mt-1">Terminal v1.0</p>
        </div>
      </div>

      <nav className="flex-1 space-y-1">
        {navItems.map((item, index) => (
          <button
            key={index}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
              item.active 
                ? "bg-white/5 text-neon-mint border border-white/10" 
                : "text-gray-500 hover:bg-white/5 hover:text-white"
            }`}
          >
            <item.icon size={18} className={item.active ? "text-neon-mint" : "text-gray-500 group-hover:text-white"} />
            <span className="text-sm font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto pt-6 border-t border-border-muted space-y-1">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-500 hover:bg-white/5 hover:text-white transition-all duration-200">
          <Settings size={18} />
          <span className="text-sm font-medium">Settings</span>
        </button>
        <div className="px-4 py-4 mt-4 glass-card bg-neon-mint/5 border-neon-mint/10">
          <p className="text-[10px] font-bold text-neon-mint uppercase tracking-wider mb-1">System Status</p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-neon-mint animate-pulse" />
            <span className="text-[10px] text-gray-400 font-medium">All Nodes Operational</span>
          </div>
        </div>
      </div>
    </div>
  );
}
