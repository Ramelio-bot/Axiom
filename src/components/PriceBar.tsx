"use client";

import React from "react";
import { motion } from "framer-motion";

const assets = [
  { name: "XAUUSD", price: "2324.52", change: "+1.24%" },
  { name: "EURUSD", price: "1.08421", change: "-0.04%" },
  { name: "GBPUSD", price: "1.26342", change: "+0.12%" },
  { name: "USDJPY", price: "154.82", change: "+0.45%" },
];

export default function PriceBar() {
  return (
    <div className="h-14 border-b border-border-muted flex items-center px-8 justify-between bg-obsidian/50 backdrop-blur-md sticky top-0 z-20">
      <div className="flex items-center gap-10">
        {assets.map((asset, index) => (
          <div key={index} className="flex items-center gap-3">
            <span className="text-[10px] font-black text-gray-500 tracking-widest">{asset.name}</span>
            <span className="font-mono text-sm font-bold tracking-tight">{asset.price}</span>
            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${asset.change.startsWith("+") ? "text-neon-mint bg-neon-mint/10" : "text-soft-rose bg-soft-rose/10"}`}>
              {asset.change}
            </span>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
          <div className="pulsing-dot" />
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Market Open</span>
        </div>
        <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest font-mono">
          28 APR 2026 | 14:38:02 UTC
        </div>
      </div>
    </div>
  );
}
