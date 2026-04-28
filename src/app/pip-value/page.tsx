import type { Metadata } from "next";
import { ASSETS } from "@/lib/assets";
import { Coins } from "lucide-react";

export const metadata: Metadata = {
  title: "Axiom Pip Value Calculator - Full Asset Reference",
  description: "Complete list of pip values for 40+ Forex pairs, metals, and commodities in the Axiom Terminal.",
};

export default function PipValuePage() {
  return (
    <main className="flex-1 p-10 max-w-7xl mx-auto w-full">
      <header className="mb-10">
        <p className="text-[10px] font-bold text-emerald uppercase tracking-[0.4em] mb-2">Asset Intelligence</p>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-100">Pip Value Matrix</h1>
      </header>

      <div className="terminal-card overflow-hidden">
        <div className="p-6 border-b border-white/5 bg-white/[0.01] flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Coins size={16} className="text-emerald" />
            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-300">Comprehensive Reference</h3>
          </div>
          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Base: 1.00 Standard Lot (100k units)</span>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/5 bg-zinc-950/50">
                <th className="px-8 py-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Symbol</th>
                <th className="px-8 py-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Asset Name</th>
                <th className="px-8 py-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Type</th>
                <th className="px-8 py-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest text-right">Pip Value (USD)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.02]">
              {ASSETS.map((asset) => (
                <tr key={asset.symbol} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="px-8 py-4">
                    <span className="font-mono text-xs font-bold text-emerald tabular-nums">{asset.symbol}</span>
                  </td>
                  <td className="px-8 py-4">
                    <span className="text-xs text-zinc-300 font-medium">{asset.name}</span>
                  </td>
                  <td className="px-8 py-4">
                    <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest px-2 py-0.5 bg-zinc-950 rounded border border-white/5">
                      {asset.type}
                    </span>
                  </td>
                  <td className="px-8 py-4 text-right">
                    <span className="font-mono text-xs font-bold text-zinc-100 tabular-nums">${asset.pipValue.toFixed(2)}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
