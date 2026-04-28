"use client";

import React, { useState, useEffect } from "react";
import { Info, Calculator, Target, ShieldCheck, ArrowRight, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ASSETS, Asset } from "@/lib/assets";

import Combobox from "./Combobox";

export default function PositionSizer() {
  const [balance, setBalance] = useState("10000");
  const [risk, setRisk] = useState("1");
  const [stopLoss, setStopLoss] = useState("20");
  const [selectedAsset, setSelectedAsset] = useState<Asset>(ASSETS[0]);
  const [lotSize, setLotSize] = useState(0);

  useEffect(() => {
    const bal = parseFloat(balance) || 0;
    const rsk = parseFloat(risk) || 0;
    const sl = parseFloat(stopLoss) || 0;
    
    // Logic: (Balance * (Risk/100)) / (StopLossPips * PipValue)
    const pipValue = selectedAsset.pipValue;
    
    if (sl > 0 && bal > 0) {
      const riskAmount = bal * (rsk / 100);
      const calculatedLots = riskAmount / (sl * pipValue);
      setLotSize(calculatedLots);
    } else {
      setLotSize(0);
    }
  }, [balance, risk, stopLoss, selectedAsset]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Left Column: Input Form */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="lg:col-span-5 p-8 terminal-card"
      >
        <div className="flex items-center gap-3 mb-10">
          <Calculator className="text-emerald" size={20} />
          <h2 className="text-sm font-semibold tracking-tight uppercase">Risk Configuration</h2>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Asset Selection</label>
            <Combobox selected={selectedAsset} onSelect={setSelectedAsset} />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Account Balance (USD)</label>
            <div className="relative group">
              <input 
                type="number" 
                value={balance}
                onChange={(e) => setBalance(e.target.value)}
                className="w-full bg-zinc-950/50 border border-white/5 rounded-lg px-4 py-3.5 font-mono text-sm font-medium focus:outline-none focus:border-emerald/30 transition-all input-inner-shadow tabular-nums"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Risk Profile (%)</label>
              <input 
                type="number" 
                value={risk}
                onChange={(e) => setRisk(e.target.value)}
                className="w-full bg-zinc-950/50 border border-white/5 rounded-lg px-4 py-3.5 font-mono text-sm font-medium focus:outline-none focus:border-emerald/30 transition-all input-inner-shadow tabular-nums"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Stop Loss (Pips)</label>
              <input 
                type="number" 
                value={stopLoss}
                onChange={(e) => setStopLoss(e.target.value)}
                className="w-full bg-zinc-950/50 border border-white/5 rounded-lg px-4 py-3.5 font-mono text-sm font-medium focus:outline-none focus:border-emerald/30 transition-all input-inner-shadow tabular-nums"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right Column: Visualization & Results */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="lg:col-span-7 flex flex-col gap-6"
      >
        <div className="p-8 terminal-card flex-1 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <TrendingUp size={120} className="text-emerald" />
          </div>
          
          <div className="relative z-10 text-center lg:text-left">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 mb-6 flex items-center justify-center lg:justify-start gap-2">
              <ShieldCheck size={12} className="text-emerald" /> Calculated Allocation
            </p>
            <div className="flex flex-col lg:flex-row lg:items-baseline gap-2 lg:gap-4 mb-8">
              <span className="text-7xl font-mono font-bold text-emerald tracking-tighter tabular-nums">
                {lotSize.toFixed(2)}
              </span>
              <span className="text-sm font-bold text-emerald/40 tracking-[0.4em] uppercase">Standard Lots</span>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 pt-8 border-t border-white/5">
              <div>
                <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest mb-1">Exposure Amount</p>
                <p className="font-mono text-base font-bold text-zinc-200 tabular-nums">
                  ${(parseFloat(balance) * (parseFloat(risk) / 100)).toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest mb-1">Risk per Pip</p>
                <p className="font-mono text-base font-bold text-zinc-200 tabular-nums">
                  ${((parseFloat(balance) * (parseFloat(risk) / 100)) / (parseFloat(stopLoss) || 1)).toFixed(2)}
                </p>
              </div>
              <div className="hidden lg:block">
                <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest mb-1">Leverage Ratio</p>
                <p className="font-mono text-base font-bold text-zinc-200 tabular-nums">1 : 100</p>
              </div>
            </div>
          </div>
        </div>

        <button className="w-full bg-transparent border border-white/10 hover:border-white/30 text-zinc-200 font-medium text-xs uppercase tracking-[0.3em] py-5 rounded-lg transition-all flex items-center justify-center gap-3 group">
          Finalize Transaction
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Content Ad Slot */}
        <div className="mt-4 border border-dashed border-white/5 rounded-xl p-6 flex flex-col items-center justify-center bg-white/[0.01]">
          <span className="text-[8px] font-bold text-zinc-800 uppercase tracking-[0.2em] mb-2">Internal Analytics Ad</span>
          <div className="w-full h-10 bg-zinc-950/50 rounded flex items-center justify-center border border-white/5">
            <span className="text-[8px] text-zinc-900 font-bold tracking-widest italic">728 x 90 PLACEHOLDER</span>
          </div>
        </div>

        {/* Interlinking Bridge */}
        <div className="mt-6 px-4 text-center">
          <p className="text-[10px] text-zinc-600 font-medium italic mb-2">
            Confused about these numbers? 
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/academy/the-1-percent-rule" className="text-[10px] font-bold text-emerald hover:underline underline-offset-4 decoration-emerald/30 uppercase tracking-widest">
              Read: The 1% Rule
            </Link>
            <span className="text-zinc-800 text-[10px]">•</span>
            <Link href="/academy/pip-value-mastery" className="text-[10px] font-bold text-emerald hover:underline underline-offset-4 decoration-emerald/30 uppercase tracking-widest">
              Pip Value Mastery
            </Link>
          </div>
        </div>


      </motion.div>
    </div>
  );
}
