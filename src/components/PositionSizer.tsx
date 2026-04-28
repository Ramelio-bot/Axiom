"use client";

import React, { useState, useEffect } from "react";
import { Info, Calculator, Target, ShieldAlert } from "lucide-react";
import { motion } from "framer-motion";

export default function PositionSizer() {
  const [balance, setBalance] = useState("10000");
  const [risk, setRisk] = useState("1");
  const [stopLoss, setStopLoss] = useState("20");
  const [asset, setAsset] = useState("Standard");
  const [lotSize, setLotSize] = useState(0);

  useEffect(() => {
    const bal = parseFloat(balance) || 0;
    const rsk = parseFloat(risk) || 0;
    const sl = parseFloat(stopLoss) || 0;
    
    // Logic: (Balance * (Risk/100)) / (StopLossPips * PipValue)
    // Standard Lot = 100,000 units. Pip Value for 1.0 lot is typically $10 for 5-decimal pairs.
    let pipValue = 10; 
    
    if (asset === "JPY") pipValue = 10; // Simple approximation for standard 1.0 lot
    if (asset === "Gold") pipValue = 10; // XAUUSD standard lot (100oz), 1 pip (0.10) = $10
    
    if (sl > 0 && bal > 0) {
      const riskAmount = bal * (rsk / 100);
      const calculatedLots = riskAmount / (sl * pipValue);
      setLotSize(calculatedLots);
    } else {
      setLotSize(0);
    }
  }, [balance, risk, stopLoss, asset]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto mt-12 p-10 bg-obsidian border border-border-muted rounded-2xl shadow-2xl relative overflow-hidden"
    >
      {/* Decorative gradient blur */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-neon-mint/5 blur-[100px] -mr-32 -mt-32" />
      
      <div className="flex items-center gap-3 mb-10 relative z-10">
        <div className="p-2.5 bg-neon-mint/10 rounded-xl border border-neon-mint/20">
          <Calculator className="text-neon-mint" size={24} />
        </div>
        <div>
          <h2 className="text-xl font-bold tracking-tight">Position Sizer</h2>
          <p className="text-xs text-gray-500 font-medium">Calculate precise lot sizes based on your risk profile.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.15em] text-gray-500 flex items-center gap-2">
              Account Balance <Info size={12} className="text-gray-600" />
            </label>
            <div className="relative group">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-mono text-sm group-focus-within:text-neon-mint transition-colors">$</span>
              <input 
                type="number" 
                value={balance}
                onChange={(e) => setBalance(e.target.value)}
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-8 py-4 font-mono text-lg font-bold focus:outline-none focus:border-neon-mint/50 focus:bg-white/[0.05] transition-all"
                placeholder="0.00"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.15em] text-gray-500 flex items-center gap-2">
              Risk Percentage <ShieldAlert size={12} className="text-gray-600" />
            </label>
            <div className="relative group">
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 font-mono text-sm group-focus-within:text-neon-mint transition-colors">%</span>
              <input 
                type="number" 
                value={risk}
                onChange={(e) => setRisk(e.target.value)}
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-4 font-mono text-lg font-bold focus:outline-none focus:border-neon-mint/50 focus:bg-white/[0.05] transition-all"
                placeholder="1.0"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.15em] text-gray-500 flex items-center gap-2">
              Stop Loss (Pips) <Target size={12} className="text-gray-600" />
            </label>
            <input 
              type="number" 
              value={stopLoss}
              onChange={(e) => setStopLoss(e.target.value)}
              className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-4 font-mono text-lg font-bold focus:outline-none focus:border-neon-mint/50 focus:bg-white/[0.05] transition-all"
              placeholder="20"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.15em] text-gray-500">Asset Class</label>
            <div className="flex gap-2">
              {["Standard", "JPY", "Gold"].map((type) => (
                <button
                  key={type}
                  onClick={() => setAsset(type)}
                  className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all border ${
                    asset === type 
                      ? "bg-white/10 border-white/20 text-white" 
                      : "bg-transparent border-white/5 text-gray-500 hover:bg-white/5"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div className="p-8 rounded-2xl bg-neon-mint/5 border border-neon-mint/10 flex flex-col items-center justify-center text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-neon-mint/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-neon-mint/60 mb-4 relative z-10">Recommended Position Size</p>
            <div className="flex items-baseline gap-3 relative z-10">
              <span className="text-6xl font-mono font-black text-neon-mint tabular-nums">
                {lotSize.toFixed(2)}
              </span>
              <span className="text-xs font-black text-neon-mint/40 tracking-widest">LOTS</span>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <div className="flex justify-between items-center px-2">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Amount at Risk</span>
              <span className="font-mono text-lg font-bold text-soft-rose">
                ${(parseFloat(balance) * (parseFloat(risk) / 100)).toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between items-center px-2">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Risk/Reward Ratio</span>
              <span className="font-mono text-sm font-bold text-gray-300">1 : 3.0</span>
            </div>
            <button className="w-full bg-neon-mint text-obsidian font-black text-xs uppercase tracking-[0.2em] py-4 rounded-xl shadow-[0_0_30px_rgba(0,255,136,0.2)] hover:shadow-[0_0_40px_rgba(0,255,136,0.3)] hover:-translate-y-0.5 transition-all active:translate-y-0 mt-4">
              Execute Trade
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
