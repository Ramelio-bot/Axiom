"use client";

import React, { useState, Suspense } from "react";
import dynamic from "next/dynamic";
import { 
  Activity, 
  Calendar, 
  TrendingUp,
  ChevronDown
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const TVWidget = dynamic(() => import("@/components/TradingViewWidget"), { 
  ssr: false,
  loading: () => <div className="h-full w-full bg-zinc-900/50 animate-pulse rounded-xl" />
});

const MAJOR_PAIRS = [
  { label: "XAUUSD (Gold)", value: "OANDA:XAUUSD" },
  { label: "EURUSD", value: "FX:EURUSD" },
  { label: "GBPUSD", value: "FX:GBPUSD" },
  { label: "USDJPY", value: "FX:USDJPY" },
  { label: "BTCUSD", value: "BINANCE:BTCUSDT" },
];

function DashboardContent() {
  const [symbol, setSymbol] = useState("OANDA:XAUUSD");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <main className="flex-1 p-8 max-w-[1600px] mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main Intelligence Column */}
        <div className="lg:col-span-9 space-y-6">
          <div className="terminal-card overflow-hidden h-[550px] relative flex flex-col border-white/5">
            {/* Minimalist Header with Dropdown */}
            <div className="p-4 border-b border-white/5 flex items-center justify-between bg-zinc-900/50">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-emerald uppercase tracking-[0.2em]">Market Intelligence</span>
                <span className="text-xs font-black text-white">{symbol.split(":")[1] || symbol}</span>
              </div>
              
              <div className="relative">
                <button 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-3 px-4 py-2 bg-zinc-950 border border-white/10 rounded-lg hover:border-emerald/50 transition-all group"
                >
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest group-hover:text-zinc-200">Select Asset</span>
                  <ChevronDown size={14} className={`text-zinc-500 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
                </button>
                
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      className="absolute right-0 mt-2 w-48 bg-zinc-900 border border-white/10 rounded-xl shadow-2xl z-50 overflow-hidden"
                    >
                      {MAJOR_PAIRS.map((pair) => (
                        <button
                          key={pair.value}
                          onClick={() => {
                            setSymbol(pair.value);
                            setIsDropdownOpen(false);
                          }}
                          className={`w-full text-left px-4 py-3 text-[10px] font-bold uppercase tracking-widest transition-all ${
                            symbol === pair.value ? "bg-emerald/10 text-emerald" : "text-zinc-500 hover:bg-white/5 hover:text-zinc-200"
                          }`}
                        >
                          {pair.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Fixed Height Chart Container */}
            <div className="flex-1 bg-[#09090b]">
              <TVWidget symbol={symbol} type="chart" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="terminal-card p-6 h-[380px] flex flex-col border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="text-emerald" size={14} />
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Economic Events</h3>
              </div>
              <div className="flex-1 overflow-hidden">
                <TVWidget type="calendar" height={300} />
              </div>
            </div>
            <div className="terminal-card p-6 h-[380px] flex flex-col border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="text-emerald" size={14} />
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Market Movers</h3>
              </div>
              <div className="flex-1 overflow-hidden">
                <TVWidget type="movers" height={300} />
              </div>
            </div>
          </div>
        </div>

        {/* Right Intelligence Panel */}
        <div className="lg:col-span-3 space-y-6">
          <div className="terminal-card p-6 h-[450px] flex flex-col border-white/5">
            <div className="flex items-center gap-3 mb-6">
              <Activity className="text-emerald" size={14} />
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Technical Gauge</h3>
            </div>
            <div className="flex-1 overflow-hidden">
              <TVWidget symbol={symbol} type="gauge" height={350} />
            </div>
          </div>

          <div className="terminal-card p-6 border-white/5 bg-zinc-900/30">
            <div className="flex items-center gap-3 mb-6">
              <Activity className="text-emerald" size={14} />
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Market Pulse</h3>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-zinc-950 rounded border border-white/5 flex flex-col gap-1">
                <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">Sentiment</span>
                <span className="text-sm font-black text-emerald">MODERATE BULLISH</span>
              </div>
              <div className="p-4 bg-zinc-950 rounded border border-white/5 flex flex-col gap-1">
                <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">Volatility</span>
                <span className="text-sm font-black text-white">LOW DENSITY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function DashboardPage() {
  return (
    <Suspense fallback={<div className="flex-1 flex items-center justify-center bg-background"><Activity className="animate-spin text-emerald" /></div>}>
      <DashboardContent />
    </Suspense>
  );
}
