import type { Metadata } from "next";
import { ASSETS } from "@/lib/assets";
import { Coins, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Axiom Pip Value Matrix - High Density Data Grid",
  description: "Complete list of pip values and spreads for 40+ Forex pairs, metals, and commodities.",
};

const getTagStyles = (type: string) => {
  switch (type) {
    case "Major": return "bg-blue-500/10 text-blue-400 border-blue-500/20";
    case "Exotic": return "bg-purple-500/10 text-purple-400 border-purple-500/20";
    case "Commodity":
    case "Metal": return "bg-amber-500/10 text-amber-400 border-amber-500/20";
    default: return "bg-zinc-500/10 text-zinc-400 border-zinc-500/20";
  }
};

export default function PipValuePage() {
  return (
    <main className="flex-1 p-10 max-w-7xl mx-auto w-full">
      <header className="mb-10 flex justify-between items-end">
        <div>
          <p className="text-[10px] font-bold text-emerald uppercase tracking-[0.4em] mb-2">Asset Intelligence Matrix</p>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-100">Pip Value Matrix</h1>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/5">
          <Layers size={12} className="text-emerald" />
          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">High Density View</span>
        </div>
      </header>

      <div className="terminal-card overflow-hidden border-white/5 shadow-2xl">
        <div className="p-4 border-b border-white/5 bg-zinc-900/50 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Coins size={14} className="text-emerald" />
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Institutional Reference (1.00 Lot)</h3>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-zinc-950/80">
                <th className="px-6 py-3 text-[9px] font-black text-zinc-600 uppercase tracking-[0.2em] border-b border-white/5">Symbol</th>
                <th className="px-6 py-3 text-[9px] font-black text-zinc-600 uppercase tracking-[0.2em] border-b border-white/5">Name</th>
                <th className="px-6 py-3 text-[9px] font-black text-zinc-600 uppercase tracking-[0.2em] border-b border-white/5">Classification</th>
                <th className="px-6 py-3 text-[9px] font-black text-zinc-600 uppercase tracking-[0.2em] border-b border-white/5 text-right">Spread (Est)</th>
                <th className="px-6 py-3 text-[9px] font-black text-zinc-600 uppercase tracking-[0.2em] border-b border-white/5 text-right">Pip Value (USD)</th>
              </tr>
            </thead>
            <tbody className="font-mono">
              {ASSETS.map((asset, index) => (
                <tr 
                  key={asset.symbol} 
                  className={`
                    group transition-all duration-200 cursor-default
                    ${index % 2 === 0 ? "bg-transparent" : "bg-white/[0.02]"}
                    hover:bg-emerald/[0.03] hover:shadow-[inset_0_0_20px_rgba(16,185,129,0.02)]
                  `}
                >
                  <td className="px-6 py-2.5 border-b border-white/[0.02]">
                    <span className="text-[11px] font-bold text-emerald tracking-tight group-hover:scale-105 inline-block transition-transform">{asset.symbol}</span>
                  </td>
                  <td className="px-6 py-2.5 border-b border-white/[0.02]">
                    <span className="text-[11px] text-zinc-400 font-medium group-hover:text-zinc-200 transition-colors font-inter">{asset.name}</span>
                  </td>
                  <td className="px-6 py-2.5 border-b border-white/[0.02]">
                    <span className={`text-[8px] font-black px-1.5 py-0.5 rounded border uppercase tracking-wider ${getTagStyles(asset.type)}`}>
                      {asset.type}
                    </span>
                  </td>
                  <td className="px-6 py-2.5 border-b border-white/[0.02] text-right">
                    <span className="text-[11px] text-zinc-600 tabular-nums">0.2 - 0.5</span>
                  </td>
                  <td className="px-6 py-2.5 border-b border-white/[0.02] text-right">
                    <span className="text-[11px] font-bold text-zinc-100 tabular-nums">${asset.pipValue.toFixed(2)}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="mt-8 flex justify-between items-center px-4">
        <p className="text-[9px] text-zinc-600 font-medium italic">Data refreshes synchronized with global interbank feeds.</p>
        <div className="flex gap-4">
          <span className="text-[9px] font-bold text-zinc-700 uppercase tracking-widest">Total Assets: {ASSETS.length}</span>
          <span className="text-[9px] font-bold text-zinc-700 uppercase tracking-widest">Last Update: 15:21:16 UTC</span>
        </div>
      </div>
    </main>
  );
}
