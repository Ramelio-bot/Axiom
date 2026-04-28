"use client";

import React, { useState, useEffect } from "react";
import { 
  Settings, 
  Monitor, 
  Database, 
  Info, 
  RotateCcw,
  ShieldCheck,
  Save
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function SettingsPage() {
  const [compactMode, setCompactMode] = useState(false);
  const [currency, setCurrency] = useState("USD");
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [showSaved, setShowSaved] = useState(false);

  // Simulated Local Storage logic
  const handleSave = () => {
    const prefs = { compactMode, currency, autoRefresh };
    localStorage.setItem("axiom_preferences", JSON.stringify(prefs));
    setShowSaved(true);
    setTimeout(() => setShowSaved(false), 2000);
  };

  const handleReset = () => {
    setCompactMode(false);
    setCurrency("USD");
    setAutoRefresh(true);
    localStorage.removeItem("axiom_preferences");
  };

  return (
    <main className="flex-1 p-10 max-w-5xl mx-auto w-full">
      <header className="mb-12 flex justify-between items-end">
        <div>
          <p className="text-[10px] font-bold text-emerald uppercase tracking-[0.4em] mb-2">Terminal Configuration</p>
          <h1 className="text-3xl font-semibold tracking-tight text-white">Local Preferences</h1>
        </div>
        <button 
          onClick={handleSave}
          className="px-6 py-2.5 bg-emerald text-zinc-950 font-bold text-[10px] uppercase tracking-widest rounded-lg flex items-center gap-2 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all"
        >
          <Save size={14} /> Save Configuration
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-6">
          {/* Interface Card */}
          <div className="terminal-card p-8">
            <div className="flex items-center gap-3 mb-8">
              <Monitor className="text-emerald" size={16} />
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-300">Display Engine</h3>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between py-4 border-b border-white/5">
                <div>
                  <h4 className="text-sm font-bold text-white">Compact Interface</h4>
                  <p className="text-xs text-zinc-600 mt-1">Optimize layout density for high-resolution monitors.</p>
                </div>
                <button 
                  onClick={() => setCompactMode(!compactMode)}
                  className={`w-10 h-5 rounded-full relative transition-all duration-300 ${compactMode ? "bg-emerald" : "bg-zinc-800"}`}
                >
                  <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all duration-300 ${compactMode ? "left-6" : "left-1"}`} />
                </button>
              </div>

              <div className="flex items-center justify-between py-4 border-b border-white/5">
                <div>
                  <h4 className="text-sm font-bold text-white">Market Data Auto-Refresh</h4>
                  <p className="text-xs text-zinc-600 mt-1">Synchronize terminal data feeds every 2 minutes automatically.</p>
                </div>
                <button 
                  onClick={() => setAutoRefresh(!autoRefresh)}
                  className={`w-10 h-5 rounded-full relative transition-all duration-300 ${autoRefresh ? "bg-emerald" : "bg-zinc-800"}`}
                >
                  <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all duration-300 ${autoRefresh ? "left-6" : "left-1"}`} />
                </button>
              </div>

              <div className="flex items-center justify-between py-4">
                <div>
                  <h4 className="text-sm font-bold text-white">Base Currency</h4>
                  <p className="text-xs text-zinc-600 mt-1">Primary unit for all financial intelligence reports.</p>
                </div>
                <div className="flex gap-2">
                  {["USD", "EUR", "GBP", "JPY"].map((cur) => (
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

          {/* Privacy & Data Card */}
          <div className="terminal-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <Database className="text-emerald" size={16} />
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-300">Privacy & Data Management</h3>
            </div>
            <div className="p-4 bg-zinc-950 rounded border border-white/5 mb-6">
              <div className="flex items-start gap-3">
                <ShieldCheck className="text-emerald shrink-0" size={16} />
                <p className="text-xs text-zinc-400 leading-relaxed">
                  <strong>Zero-Cloud Policy:</strong> Axiom Terminal stores all preferences locally on your hardware. We do not transmit your settings, account balances, or risk profiles to our servers.
                </p>
              </div>
            </div>
            <button 
              onClick={handleReset}
              className="flex items-center gap-2 text-[10px] font-bold text-zinc-700 uppercase tracking-widest hover:text-soft-rose transition-colors"
            >
              <RotateCcw size={12} /> Purge All Local Data
            </button>
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="terminal-card p-8 bg-zinc-900/30">
            <div className="flex items-center gap-3 mb-6">
              <Info className="text-emerald" size={16} />
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-300">System Information</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-xs">
                <span className="text-zinc-600 font-bold uppercase tracking-widest">Version</span>
                <span className="font-mono text-zinc-200">v1.2.8-stable</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-zinc-600 font-bold uppercase tracking-widest">Protocol</span>
                <span className="font-mono text-emerald">Axiom-Core-X1</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-zinc-600 font-bold uppercase tracking-widest">Environment</span>
                <span className="font-mono text-zinc-200">Production</span>
              </div>
              <div className="pt-4 border-t border-white/5">
                <p className="text-[10px] text-zinc-700 leading-relaxed font-medium">
                  Designed by Axiom Intelligence Systems. All calculation engines are verified for institutional accuracy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showSaved && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed bottom-10 right-10 bg-emerald text-zinc-950 px-6 py-3 rounded-xl shadow-2xl font-bold text-xs uppercase tracking-widest flex items-center gap-3 z-50"
          >
            <ShieldCheck size={18} /> Configuration Saved Successfully
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
