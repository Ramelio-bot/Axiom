"use client";

import React from "react";
import { motion } from "framer-motion";
import { Coins, TrendingUp } from "lucide-react";

const pipData = [
  { pair: "EUR/USD", pipValue: "10.00", type: "Standard", decimals: 5 },
  { pair: "GBP/USD", pipValue: "10.00", type: "Standard", decimals: 5 },
  { pair: "XAU/USD", pipValue: "10.00", type: "Commodity", decimals: 2 },
  { pair: "USD/JPY", pipValue: "6.46", type: "JPY Pair", decimals: 3 },
  { pair: "AUD/USD", pipValue: "10.00", type: "Standard", decimals: 5 },
  { pair: "USD/CHF", pipValue: "11.12", type: "Cross", decimals: 5 },
];

export default function PipValueTable() {
  return (
    <div className="mt-8 terminal-card p-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <Coins className="text-emerald" size={18} />
          <h3 className="text-sm font-semibold tracking-tight uppercase">Pip Value Reference</h3>
        </div>
        <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Base: 1.00 Standard Lot</span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/5">
              <th className="text-left py-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Asset Pair</th>
              <th className="text-left py-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Pip Value (USD)</th>
              <th className="text-left py-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest text-right">Market Type</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/[0.02]">
            {pipData.map((item, index) => (
              <motion.tr 
                key={index}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.02)", x: 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="group cursor-default"
              >
                <td className="py-4">
                  <span className="text-xs font-bold text-zinc-300 group-hover:text-emerald transition-colors">{item.pair}</span>
                </td>
                <td className="py-4">
                  <span className="font-mono text-xs font-semibold text-zinc-100 tabular-nums">${item.pipValue}</span>
                </td>
                <td className="py-4 text-right">
                  <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest px-2 py-1 bg-zinc-950 rounded border border-white/5">
                    {item.type}
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
