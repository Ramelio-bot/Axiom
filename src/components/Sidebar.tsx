"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Calculator, 
  Coins, 
  Clock, 
  Settings, 
  BarChart3,
  BookOpen
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: Calculator, label: "Position Sizer", href: "/position-sizer" },
  { icon: Coins, label: "Pip Value", href: "/pip-value" },
  { icon: Clock, label: "Market Clock", href: "/market-clock" },
  { icon: BookOpen, label: "Academy", href: "/academy" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 h-full border-r border-border-thin flex flex-col p-6 bg-background/80 backdrop-blur-terminal z-10">
      <Link href="/" className="flex items-center gap-3 mb-12 px-2 hover:opacity-80 transition-opacity">
        <div className="w-8 h-8 bg-emerald rounded flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.2)]">
          <BarChart3 className="text-zinc-950" size={18} strokeWidth={2.5} />
        </div>
        <h1 className="text-lg font-semibold tracking-tight text-zinc-100">AXIOM</h1>
      </Link>

      <nav className="flex-1 space-y-1">
        {navItems.map((item, index) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={index}
              href={item.href}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-300 group relative ${
                isActive 
                  ? "bg-emerald/10 text-emerald font-medium border border-emerald/20" 
                  : "text-zinc-500 hover:bg-white/5 hover:text-zinc-200"
              }`}
            >
              {isActive && (
                <div className="absolute left-0 w-1 h-4 bg-emerald rounded-full -ml-1" />
              )}
              <item.icon size={16} className={isActive ? "text-emerald" : "text-zinc-500 group-hover:text-zinc-200"} />
              <span className="text-sm">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto pt-6 border-t border-border-thin space-y-1">
        {/* Sidebar Ad Slot */}
        <div className="mb-4 border border-dashed border-white/5 rounded-lg p-4 flex flex-col items-center justify-center bg-white/[0.01]">
          <span className="text-[8px] font-bold text-zinc-700 uppercase tracking-widest mb-1">Advertisement</span>
          <div className="w-full h-20 bg-zinc-950/50 rounded flex items-center justify-center">
            <span className="text-[9px] text-zinc-800 font-bold">300 x 250</span>
          </div>
        </div>

        <Link href="/settings" className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-300 group ${pathname === "/settings" ? "bg-emerald/10 text-emerald" : "text-zinc-500 hover:bg-white/5 hover:text-zinc-200"}`}>
          <Settings size={16} />
          <span className="text-sm">Settings</span>
        </Link>
      </div>
    </div>

  );
}
