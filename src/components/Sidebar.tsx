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
    <div className="w-64 h-full border-r border-white/5 flex flex-col p-6 bg-[#09090b] z-10">
      <Link href="/" className="flex items-center gap-3 mb-12 px-4 transition-opacity">
        <div className="w-6 h-6 bg-emerald rounded-sm flex items-center justify-center">
          <BarChart3 className="text-zinc-950" size={14} strokeWidth={3} />
        </div>
        <h1 className="text-sm font-bold tracking-tight text-zinc-50">AXIOM</h1>
      </Link>

      <nav className="flex-1 space-y-2">
        {navItems.map((item, index) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={index}
              href={item.href}
              className={`w-full flex items-center gap-3 px-4 py-3 transition-all duration-200 group relative ${
                isActive ? "text-zinc-50" : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              {isActive && (
                <div className="absolute left-0 w-[2px] h-4 bg-emerald rounded-full" />
              )}
              <item.icon size={16} className={isActive ? "text-emerald" : "text-zinc-500 group-hover:text-zinc-300"} />
              <span className="text-xs font-medium tracking-wide">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto pt-6 border-t border-white/5 space-y-4">
        {/* Ad Slot */}
        <div className="border border-dashed border-white/5 rounded-md p-4 flex flex-col items-center justify-center bg-white/[0.01]">
          <span className="text-[8px] font-bold text-zinc-700 uppercase tracking-widest mb-1">Advertisement</span>
          <div className="w-full h-16 bg-zinc-950 rounded flex items-center justify-center">
            <span className="text-[9px] text-zinc-800 font-bold">300 x 250</span>
          </div>
        </div>

        <Link 
          href="/settings" 
          className={`w-full flex items-center gap-3 px-4 py-3 transition-all duration-200 group relative ${
            pathname === "/settings" ? "text-zinc-50" : "text-zinc-400 hover:text-zinc-200"
          }`}
        >
          {pathname === "/settings" && (
            <div className="absolute left-0 w-[2px] h-4 bg-emerald rounded-full" />
          )}
          <Settings size={16} className={pathname === "/settings" ? "text-emerald" : "text-zinc-500 group-hover:text-zinc-300"} />
          <span className="text-xs font-medium tracking-wide">Settings</span>
        </Link>
      </div>
    </div>
  );
}
