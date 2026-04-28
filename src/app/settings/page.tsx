"use client";

import React, { useState } from "react";
import { 
  Settings, 
  Monitor, 
  User, 
  Cpu, 
  ChevronRight, 
  Check, 
  CircleDot
} from "lucide-react";
import { motion } from "framer-motion";

export default function SettingsPage() {
  const [compactMode, setCompactMode] = useState(false);
  const [currency, setCurrency] = useState("USD");

  return (
    <main className="flex-1 p-10 max-w-5xl mx-auto w-full">
      <header className="mb-12">
        <p className="text-[10px] font-bold text-emerald uppercase tracking-[0.4em] mb-2">System Preferences</p>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-100">Settings</h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Navigation Sidebar (Local) */}
        <div className="md:col-span-3 space-y-1">
          <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg bg-emerald/10 text-emerald font-bold text-xs uppercase tracking-widest border border-emerald/20 transition-all">
            <Monitor size={14} /> General
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-zinc-500 hover:bg-white/5 hover:text-zinc-300 font-bold text-xs uppercase tracking-widest transition-all">
            <User size={14} /> Account
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-zinc-500 hover:bg-white/5 hover:text-zinc-300 font-bold text-xs uppercase tracking-widest transition-all">
            <Cpu size={14} /> Security
          </button>
        </div>

        {/* Content Area */}
        <div className="md:col-span-9 space-y-6">
          {/* Interface Card */}
          <div className="terminal-card p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-emerald/10 rounded-lg">
                <Monitor className="text-emerald" size={16} />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-300">Interface</h3>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between py-4 border-b border-white/5">
                <div>
                  <h4 className="text-sm font-bold text-zinc-200">Compact Mode</h4>
                  <p className="text-xs text-zinc-500 mt-1">Reduce spacing and font size for high-density monitoring.</p>
                </div>
                <button 
                  onClick={() => setCompactMode(!compactMode)}
                  className={`w-10 h-5 rounded-full relative transition-all duration-300 ${compactMode ? "bg-emerald" : "bg-zinc-800"}`}
                >
                  <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all duration-300 ${compactMode ? "left-6" : "left-1"}`} />
                </button>
              </div>

              <div className="flex items-center justify-between py-4">
                <div>
                  <h4 className="text-sm font-bold text-zinc-200">Default Currency</h4>
                  <p className="text-xs text-zinc-500 mt-1">Select the base currency for pip value calculations.</p>
                </div>
                <div className="flex gap-2">
                  {["USD", "EUR", "IDR"].map((cur) => (
                    <button
                      key={cur}
                      onClick={() => setCurrency(cur)}
                      className={`px-3 py-1.5 rounded text-[10px] font-black tracking-widest transition-all border ${
                        currency === cur 
                          ? "bg-emerald/10 border-emerald/30 text-emerald" 
                          : "bg-transparent border-white/5 text-zinc-600 hover:border-white/20"
                      }`}
                    >
                      {cur}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Account Card */}
          <div className="terminal-card p-8 opacity-50 relative group">
            <div className="absolute inset-0 bg-zinc-950/40 backdrop-blur-[2px] flex items-center justify-center rounded-xl z-10 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.5em]">Authentication Locked</span>
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-zinc-800 rounded-lg text-zinc-500">
                <User size={16} />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500">Account Profile</h3>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-zinc-800 rounded-full border border-white/5" />
              <div>
                <div className="h-4 w-32 bg-zinc-800 rounded mb-2" />
                <div className="h-3 w-48 bg-zinc-900 rounded" />
              </div>
            </div>
          </div>

          {/* System Card */}
          <div className="terminal-card p-8 bg-zinc-900/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-zinc-800 rounded-lg text-zinc-400">
                <Settings size={16} />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400">System Information</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-zinc-500 font-medium">Terminal Version</span>
                <span className="font-mono text-zinc-300">v1.2.8-stable</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-zinc-500 font-medium">Kernel Protocol</span>
                <span className="font-mono text-emerald">Axiom-Core-X1</span>
              </div>
              <div className="flex justify-between items-center text-xs pt-3 border-t border-white/5">
                <span className="text-zinc-500 font-medium">License Type</span>
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest px-2 py-0.5 bg-zinc-800 rounded border border-white/10">Enterprise Preview</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
