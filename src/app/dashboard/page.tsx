"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { 
  Search, 
  Share2, 
  TrendingUp, 
  Activity, 
  Calendar, 
  BarChart3,
  Globe
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const TVWidget = dynamic(() => import("@/components/TradingViewWidget"), { ssr: false });

function DashboardContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [symbol, setSymbol] = useState(searchParams.get("s") || "OANDA:XAUUSD");
  const [searchInput, setSearchInput] = useState("");
  const [showShareToast, setShowShareToast] = useState(false);

  useEffect(() => {
    const s = searchParams.get("s");
    if (s) setSymbol(s);
  }, [searchParams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput) {
      const formatted = searchInput.toUpperCase();
      setSymbol(formatted);
      router.push(`?s=${formatted}`);
      setSearchInput("");
    }
  };

  const handleShare = () => {
    const url = `${window.location.origin}${window.location.pathname}?s=${symbol}`;
    navigator.clipboard.writeText(url);
    setShowShareToast(true);
    setTimeout(() => setShowShareToast(false), 3000);
  };

  return (
    <main className="flex-1 p-8 max-w-[1600px] mx-auto w-full">
      {/* Search & Share Bar */}
      <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
        <form onSubmit={handleSearch} className="relative w-full md:w-[400px]">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={16} />
          <input 
            type="text" 
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search Assets (e.g. BTCUSD, AAPL, EURUSD)"
            className="w-full bg-zinc-900 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-emerald transition-all text-white placeholder:text-zinc-600"
          />
        </form>

        <div className="flex items-center gap-4">
          <div className="flex flex-col items-end">
            <span className="text-[10px] font-bold text-emerald uppercase tracking-[0.2em]">Monitoring Asset</span>
            <span className="text-sm font-black text-white">{symbol}</span>
          </div>
          <button 
            onClick={handleShare}
            className="p-3 bg-zinc-900 border border-white/10 rounded-xl hover:border-emerald transition-all text-zinc-400 hover:text-emerald relative"
          >
            <Share2 size={18} />
            <AnimatePresence>
              {showShareToast && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute bottom-full mb-2 right-0 bg-emerald text-zinc-950 text-[10px] font-bold py-1 px-3 rounded whitespace-nowrap"
                >
                  LINK COPIED
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main Chart Area */}
        <div className="lg:col-span-9 space-y-6">
          <div className="terminal-card overflow-hidden h-[600px] relative">
            <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-zinc-950/80 rounded border border-white/10">
              <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-widest">Live {symbol} Intelligence</span>
            </div>
            <TVWidget symbol={symbol} type="chart" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="terminal-card p-6 min-h-[400px]">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="text-emerald" size={16} />
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">Economic Events</h3>
              </div>
              <TVWidget type="calendar" height={350} />
            </div>
            <div className="terminal-card p-6 min-h-[400px]">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="text-emerald" size={16} />
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">Market Movers (US)</h3>
              </div>
              <TVWidget type="movers" height={350} />
            </div>
          </div>
        </div>

        {/* Intelligence Sidebar */}
        <div className="lg:col-span-3 space-y-6">
          <div className="terminal-card p-6 min-h-[450px]">
            <div className="flex items-center gap-3 mb-6">
              <Activity className="text-emerald" size={16} />
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">Technical Gauge</h3>
            </div>
            <TVWidget symbol={symbol} type="gauge" height={350} />
          </div>

          <div className="terminal-card p-6">
            <div className="flex items-center gap-3 mb-6">
              <BarChart3 className="text-emerald" size={16} />
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">Asset Profile</h3>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-zinc-950 rounded border border-white/5">
                <p className="text-[10px] text-zinc-500 uppercase font-bold mb-1">Sentiment Index</p>
                <div className="flex justify-between items-baseline">
                  <span className="text-lg font-black text-emerald">BULLISH</span>
                  <span className="text-xs font-mono text-zinc-500">72% Buy</span>
                </div>
              </div>
              <div className="p-4 bg-zinc-950 rounded border border-white/5">
                <p className="text-[10px] text-zinc-500 uppercase font-bold mb-1">24h Volatility</p>
                <div className="flex justify-between items-baseline">
                  <span className="text-lg font-black text-white">1.24%</span>
                  <span className="text-xs font-mono text-soft-rose">High Risk</span>
                </div>
              </div>
            </div>
          </div>

          {/* Ad Slot */}
          <div className="border border-dashed border-white/10 rounded-xl p-6 flex flex-col items-center justify-center bg-white/[0.01]">
            <span className="text-[10px] font-bold text-zinc-800 uppercase tracking-widest mb-3">Institutional Ad</span>
            <div className="w-full h-[150px] bg-zinc-950/50 rounded border border-white/5 flex items-center justify-center">
              <span className="text-[10px] text-zinc-900 font-bold tracking-[0.3em]">300 x 250</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function DashboardPage() {
  return (
    <Suspense fallback={<div className="flex-1 flex items-center justify-center"><Activity className="animate-spin text-emerald" /></div>}>
      <DashboardContent />
    </Suspense>
  );
}
