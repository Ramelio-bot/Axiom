"use client";

import React, { useState, useEffect } from "react";
import { 
  Settings, 
  Monitor, 
  RotateCcw, 
  RefreshCcw, 
  ShieldCheck,
  Globe,
  Layout
} from "lucide-react";
import { motion } from "framer-motion";

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    currency: "USD",
    refreshRate: "2",
    compactMode: false
  });

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("axiom_settings");
    if (saved) {
      setSettings(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage
  const updateSetting = (key: string, value: any) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    localStorage.setItem("axiom_settings", JSON.stringify(newSettings));
  };

  const resetSettings = () => {
    const defaultSettings = {
      currency: "USD",
      refreshRate: "2",
      compactMode: false
    };
    setSettings(defaultSettings);
    localStorage.removeItem("axiom_settings");
  };

  return (
    <main className="flex-1 p-10 max-w-4xl mx-auto w-full">
      <header className="mb-12">
        <p className="text-[10px] font-bold text-emerald uppercase tracking-[0.4em] mb-2">Terminal Preferences</p>
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-50">General Preferences</h1>
      </header>

      <div className="space-y-8">
        {/* Main Settings Panel */}
        <div className="terminal-card p-10 border-white/10 bg-zinc-900/40">
          <div className="flex items-center gap-3 mb-10 pb-6 border-b border-white/5">
            <Settings className="text-emerald" size={20} />
            <h2 className="text-lg font-bold text-zinc-50">Interface & Engine</h2>
          </div>

          <div className="space-y-10">
            {/* Currency Preference */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-sm font-bold text-zinc-50 flex items-center gap-2">
                  <Globe size={14} className="text-emerald" /> Base Currency
                </h3>
                <p className="text-xs text-zinc-500 mt-1">Primary currency for all profit/loss and pip value calculations.</p>
              </div>
              <div className="flex bg-zinc-950 p-1 rounded-lg border border-white/5">
                {["USD", "EUR", "IDR"].map((cur) => (
                  <button
                    key={cur}
                    onClick={() => updateSetting("currency", cur)}
                    className={`px-6 py-2 rounded-md text-[10px] font-black tracking-widest transition-all ${
                      settings.currency === cur 
                        ? "bg-emerald text-zinc-950 shadow-[0_0_15px_rgba(16,185,129,0.4)]" 
                        : "text-zinc-500 hover:text-zinc-300"
                    }`}
                  >
                    {cur}
                  </button>
                ))}
              </div>
            </div>

            {/* Refresh Rate */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-sm font-bold text-zinc-50 flex items-center gap-2">
                  <RefreshCcw size={14} className="text-emerald" /> Data Refresh Rate
                </h3>
                <p className="text-xs text-zinc-500 mt-1">Automatic interval for updating real-time interbank price feeds.</p>
              </div>
              <select 
                value={settings.refreshRate}
                onChange={(e) => updateSetting("refreshRate", e.target.value)}
                className="bg-zinc-950 border border-white/10 text-zinc-200 text-xs font-bold px-4 py-2.5 rounded-lg focus:outline-none focus:border-emerald/50"
              >
                <option value="1">1 Minute (Intensive)</option>
                <option value="2">2 Minutes (Balanced)</option>
                <option value="5">5 Minutes (Power Saving)</option>
              </select>
            </div>

            {/* Compact Mode */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-sm font-bold text-zinc-50 flex items-center gap-2">
                  <Layout size={14} className="text-emerald" /> Compact Mode
                </h3>
                <p className="text-xs text-zinc-500 mt-1">Minimize UI density for higher data visibility in tables.</p>
              </div>
              <button 
                onClick={() => updateSetting("compactMode", !settings.compactMode)}
                className={`w-12 h-6 rounded-full relative transition-all duration-500 border border-white/10 ${settings.compactMode ? "bg-emerald" : "bg-zinc-950"}`}
              >
                <div className={`absolute top-1 w-3.5 h-3.5 bg-white rounded-full transition-all duration-500 ${settings.compactMode ? "left-7" : "left-1"}`} />
              </button>
            </div>
          </div>
        </div>

        {/* Security & Reset Section */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 terminal-card p-8 border-white/5 bg-zinc-950/20">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="text-emerald/50" size={16} />
              <h4 className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Privacy Notice</h4>
            </div>
            <p className="text-[11px] text-zinc-600 leading-relaxed italic">
              "Axiom operates on a Local-Only architecture. All preferences and calculation data are stored exclusively in your browser's localStorage. No data is transmitted to our servers."
            </p>
          </div>

          <div className="flex items-center justify-center">
            <button 
              onClick={resetSettings}
              className="flex items-center gap-2 px-8 py-4 bg-zinc-950 border border-white/10 rounded-xl text-soft-rose text-[10px] font-bold uppercase tracking-widest hover:bg-soft-rose/5 hover:border-soft-rose/30 transition-all"
            >
              <RotateCcw size={12} /> Reset All Settings
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
