"use client";

import React from "react";

const assets = [
  { name: "XAUUSD", price: "2324.52", change: "+1.24%" },
  { name: "EURUSD", price: "1.08421", change: "-0.04%" },
  { name: "GBPUSD", price: "1.26342", change: "+0.12%" },
  { name: "USDJPY", price: "154.82", change: "+0.45%" },
];

export default function PriceBar() {
  return (
    <div className="h-12 border-b border-border-thin flex items-center px-8 justify-between bg-background/50 backdrop-blur-terminal sticky top-0 z-20">
      <div className="flex items-center gap-10">
        {assets.map((asset, index) => (
          <div key={index} className="flex items-center gap-4">
            <span className="text-[10px] font-bold text-zinc-500 tracking-wider">{asset.name}</span>
            <span className="font-mono text-xs font-semibold tracking-tight tabular-nums">{asset.price}</span>
            <span className={`text-[10px] font-bold ${asset.change.startsWith("+") ? "text-emerald" : "text-soft-rose"}`}>
              {asset.change}
            </span>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2.5">
          <div className="pulsing-dot" />
          <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-[0.15em]">Market Connectivity</span>
        </div>
        <div className="text-[10px] text-zinc-500 font-medium uppercase tracking-widest font-mono">
          14:38:02 UTC
        </div>
      </div>
    </div>
  );
}
