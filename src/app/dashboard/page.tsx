"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { TrendingUp, Activity, Search, Star, Globe, Layout, Cpu } from "lucide-react";
import { ASSETS, Asset } from "@/lib/assets";
import Combobox from "@/components/Combobox";

const MarketOverview = dynamic(() => import("@/components/TradingViewWidget"), { 
  ssr: false,
  loading: () => <div className="h-[500px] w-full bg-zinc-900/50 animate-pulse rounded-xl border border-white/5" />
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
    <main className="flex-1 p-6 lg:p-10 max-w-7xl mx-auto w-full">
      <header className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <p className="text-[10px] font-bold text-emerald uppercase tracking-[0.4em] mb-2">Global Asset Intelligence</p>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-50">Market Dashboard</h1>
        </div>
        <div className="flex items-center gap-3 text-zinc-500">
          <div className="flex items-center gap-2 px-3 py-1 bg-zinc-900/50 border border-white/5 rounded-full">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse" />
            <span className="text-[9px] font-bold uppercase tracking-widest">Live Engine Active</span>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Monitoring & Chart */}
        <div className="lg:col-span-8 space-y-6">
          <div className="terminal-card p-6 bg-zinc-900/40 border-white/10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <div className="flex-1 max-w-md">
                <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2 block">Monitoring Asset</label>
                <Combobox selected={selectedAsset} onSelect={handleAssetSelect} />
              </div>
              <div className="flex flex-col items-end">
                <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2 block">Quick Access</label>
                <div className="flex gap-2">
                  {favorites.map((fav) => (
                    <button
                      key={fav.symbol}
                      onClick={() => handleAssetSelect(fav)}
                      className={`px-3 py-1.5 rounded-md text-[10px] font-mono font-bold transition-all border ${
                        selectedAsset.symbol === fav.symbol
                          ? "bg-emerald/10 border-emerald/40 text-emerald"
                          : "bg-zinc-950 border-white/5 text-zinc-500 hover:text-zinc-200 hover:border-white/20"
                      }`}
                    >
                      {fav.symbol}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden border border-white/5 bg-zinc-950 min-h-[500px]">
              {isChanging && (
                <div className="absolute inset-0 z-20 bg-zinc-950/60 backdrop-blur-sm flex flex-col items-center justify-center transition-all">
                  <div className="w-10 h-10 border-2 border-emerald/20 border-t-emerald rounded-full animate-spin mb-4" />
                  <p className="text-[10px] font-mono text-emerald uppercase tracking-[0.3em]">Synchronizing {selectedAsset.symbol}...</p>
                </div>
              )}
              <MarketOverview symbol={selectedAsset.tvSymbol || selectedAsset.symbol} />
            </div>
          </div>
        </div>

        {/* Right Column: Insights & Stats */}
        <div className="lg:col-span-4 space-y-6">
          <div className="terminal-card p-8 bg-zinc-900/60 border-emerald/10">
            <div className="flex items-center gap-2 mb-8">
              <Activity size={16} className="text-emerald" />
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-100">Institutional Pulse</h3>
            </div>
            
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-zinc-950/50 border border-white/5">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[10px] font-bold text-zinc-500 uppercase">Risk Sentiment</span>
                  <span className="text-[10px] font-black text-emerald uppercase tracking-widest">Risk-On</span>
                </div>
                <div className="w-full h-1 bg-zinc-900 rounded-full overflow-hidden">
                  <div className="w-3/4 h-full bg-emerald shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-zinc-950/30 border border-white/5">
                  <span className="text-[9px] text-zinc-600 block mb-1">DXY Index</span>
                  <span className="text-sm font-mono font-bold text-zinc-200">104.28</span>
                </div>
                <div className="p-4 rounded-xl bg-zinc-950/30 border border-white/5">
                  <span className="text-[9px] text-zinc-600 block mb-1">US10Y</span>
                  <span className="text-sm font-mono font-bold text-soft-rose">4.32%</span>
                </div>
              </div>

              <div className="pt-6 border-t border-white/5 space-y-4">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-zinc-500">Asset Class</span>
                  <span className="font-bold text-zinc-300 uppercase tracking-widest">{selectedAsset.type}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-zinc-500">Decimal Precision</span>
                  <span className="font-mono text-zinc-300">{selectedAsset.decimals}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-zinc-500">Pip Value (1.00)</span>
                  <span className="font-mono text-emerald">${selectedAsset.pipValue.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="mt-10 p-6 rounded-xl border border-dashed border-white/5 bg-white/[0.01] flex items-center justify-center">
              <div className="text-center">
                <span className="text-[8px] font-bold text-zinc-800 uppercase tracking-widest block mb-2">Internal Analytics Space</span>
                <div className="text-[9px] text-zinc-700 italic">Institutional Ad Slot Ready</div>
              </div>
            </div>
          </div>

          <div className="terminal-card p-8 bg-emerald/5 border-emerald/20 group hover:border-emerald/40 transition-all cursor-pointer">
            <div className="flex items-center justify-between mb-4">
              <Cpu size={18} className="text-emerald" />
              <TrendingUp size={14} className="text-emerald/40 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </div>
            <h4 className="text-sm font-bold text-zinc-100 mb-2">Trade with Precision</h4>
            <p className="text-xs text-zinc-500 leading-relaxed">Apply institutional risk management to your {selectedAsset.symbol} positions instantly.</p>
            <button className="mt-6 w-full py-3 bg-zinc-950 border border-white/5 rounded-lg text-[10px] font-bold text-zinc-300 uppercase tracking-widest group-hover:bg-emerald group-hover:text-zinc-950 transition-all">
              Initialize Calculator
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
