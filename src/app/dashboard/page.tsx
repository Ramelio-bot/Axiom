"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { TrendingUp, Activity, Search, Star, Globe, Layout, Cpu, ArrowRight } from "lucide-react";
import { ASSETS, Asset } from "@/lib/assets";
import Combobox from "@/components/Combobox";

const MarketOverview = dynamic(() => import("@/components/TradingViewWidget"), { 
  ssr: false,
  loading: () => <div className="h-[650px] w-full bg-zinc-900/50 animate-pulse rounded-xl border border-white/5" />
});

export default function DashboardPage() {
  const [selectedAsset, setSelectedAsset] = useState<Asset>(ASSETS.find(a => a.symbol === "XAUUSD") || ASSETS[0]);
  const [isChanging, setIsChanging] = useState(false);

  // Quick access favorites
  const favorites = ASSETS.filter(a => ["XAUUSD", "EURUSD", "BTCUSD", "GBPUSD", "ETHUSD"].includes(a.symbol));

  const handleAssetSelect = (asset: Asset) => {
    setIsChanging(true);
    setSelectedAsset(asset);
    setTimeout(() => setIsChanging(false), 500);
  };

  return (
    <main className="flex-1 p-6 lg:p-10 max-w-[1600px] mx-auto w-full">
      <header className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <p className="text-[10px] font-bold text-emerald uppercase tracking-[0.4em] mb-2">Global Asset Intelligence</p>
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-50">Market Dashboard</h1>
        </div>
        <div className="flex items-center gap-3 text-zinc-500">
          <div className="flex items-center gap-2 px-4 py-1.5 bg-zinc-900/50 border border-white/5 rounded-full">
            <div className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Live Engine Active</span>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        {/* Left Column: Monitoring & Chart (Dominant) */}
        <div className="lg:col-span-9 space-y-6">
          <div className="terminal-card bg-zinc-900/40 border-white/10 overflow-hidden">
            <div className="p-8 pb-6 border-b border-white/5">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div className="flex-1 max-w-lg">
                  <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-3 block">Monitoring Asset</label>
                  <Combobox selected={selectedAsset} onSelect={handleAssetSelect} />
                </div>
                <div className="flex flex-col md:items-end">
                  <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-3 block">Quick Access</label>
                  <div className="flex gap-2">
                    {favorites.map((fav) => (
                      <button
                        key={fav.symbol}
                        onClick={() => handleAssetSelect(fav)}
                        className={`px-4 py-2 rounded-md text-[11px] font-mono font-bold transition-all border ${
                          selectedAsset.symbol === fav.symbol
                            ? "bg-emerald/10 border-emerald/40 text-emerald shadow-[0_0_15px_rgba(16,185,129,0.1)]"
                            : "bg-zinc-950 border-white/5 text-zinc-500 hover:text-zinc-200 hover:border-white/20"
                        }`}
                      >
                        {fav.symbol}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[650px] bg-zinc-950">
              {isChanging && (
                <div className="absolute inset-0 z-20 bg-zinc-950/60 backdrop-blur-md flex flex-col items-center justify-center transition-all">
                  <div className="w-12 h-12 border-4 border-emerald/10 border-t-emerald rounded-full animate-spin mb-6" />
                  <p className="text-xs font-mono text-emerald uppercase tracking-[0.4em] font-bold">Synchronizing {selectedAsset.symbol}...</p>
                </div>
              )}
              <MarketOverview symbol={selectedAsset.tvSymbol || selectedAsset.symbol} />
            </div>
          </div>
        </div>


        {/* Right Column: Insights & Stats */}
        <div className="lg:col-span-3 space-y-8">
          <div className="terminal-card p-10 bg-zinc-900/60 border-emerald/10 h-full flex flex-col">
            <div className="flex items-center gap-3 mb-10">
              <Activity size={20} className="text-emerald" />
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-50">Institutional Pulse</h3>
            </div>
            
            <div className="space-y-8 flex-1">
              <div className="p-6 rounded-xl bg-zinc-950/50 border border-white/5">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest">Risk Sentiment</span>
                  <span className="text-[11px] font-black text-emerald uppercase tracking-[0.2em]">Risk-On</span>
                </div>
                <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden">
                  <div className="w-3/4 h-full bg-emerald shadow-[0_0_15px_rgba(16,185,129,0.6)]" />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="p-5 rounded-xl bg-zinc-950/30 border border-white/5 flex justify-between items-center">
                  <span className="text-[11px] text-zinc-500 uppercase font-bold tracking-widest">DXY Index</span>
                  <span className="text-base font-mono font-bold text-zinc-50">104.28</span>
                </div>
                <div className="p-5 rounded-xl bg-zinc-950/30 border border-white/5 flex justify-between items-center">
                  <span className="text-[11px] text-zinc-500 uppercase font-bold tracking-widest">US10Y Yield</span>
                  <span className="text-base font-mono font-bold text-soft-rose">4.32%</span>
                </div>
              </div>

              <div className="pt-8 border-t border-white/5 space-y-5">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-zinc-500 font-medium">Asset Class</span>
                  <span className="text-xs font-bold text-zinc-100 uppercase tracking-[0.2em]">{selectedAsset.type}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-zinc-500 font-medium">Precision</span>
                  <span className="text-sm font-mono font-bold text-zinc-200">{selectedAsset.decimals} Decimals</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-zinc-500 font-medium">Pip Value (1.00)</span>
                  <span className="text-sm font-mono font-bold text-emerald">${selectedAsset.pipValue.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 rounded-xl border border-dashed border-white/10 bg-white/[0.01] text-center">
              <span className="text-[10px] font-bold text-zinc-800 uppercase tracking-widest block mb-1">Institutional Slot</span>
              <div className="text-[11px] text-zinc-700 italic">Analytical Ad Placement Ready</div>
            </div>
          </div>

          <Link href="/position-sizer" className="block group">
            <div className="terminal-card p-10 bg-emerald/5 border-emerald/20 group-hover:border-emerald/50 group-hover:bg-emerald/10 transition-all cursor-pointer">
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-emerald/10 rounded-xl group-hover:bg-emerald/20 transition-colors">
                  <Cpu size={24} className="text-emerald" />
                </div>
                <ArrowRight size={18} className="text-emerald/40 group-hover:text-emerald group-hover:translate-x-2 transition-all" />
              </div>
              <h4 className="text-lg font-bold text-zinc-50 mb-3">Trade with Precision</h4>
              <p className="text-sm text-zinc-400 leading-relaxed mb-8">Execute your institutional strategy. Calculate exact {selectedAsset.symbol} risk exposure instantly.</p>
              <div className="w-full py-4 bg-zinc-950 border border-white/10 rounded-xl text-xs font-bold text-zinc-300 uppercase tracking-[0.3em] text-center group-hover:bg-emerald group-hover:text-zinc-950 transition-all shadow-xl">
                Initialize Calculator
              </div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
