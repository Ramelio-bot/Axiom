import type { Metadata } from "next";
import PositionSizer from "@/components/PositionSizer";

export const metadata: Metadata = {
  title: "Position Sizer - Axiom Terminal",
  description: "High-precision lot size calculator for Forex, Gold, and Commodities with professional risk management logic.",
};

export default function PositionSizerPage() {
  return (
    <main className="flex-1 p-10 max-w-7xl mx-auto w-full">
      <header className="mb-10 flex items-end justify-between">
        <div>
          <p className="text-[10px] font-bold text-emerald uppercase tracking-[0.4em] mb-2">Risk Management Engine</p>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-100">Position Sizer</h1>
        </div>
        <div className="text-right">
          <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em]">Institutional Grade</p>
          <p className="text-[10px] text-zinc-600 font-medium">Precision Mode Active</p>
        </div>
      </header>
      
      <PositionSizer />
      
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 terminal-card border-dashed">
          <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Calculation Logic</h3>
          <p className="text-xs text-zinc-600 leading-relaxed">
            Lot Size = (Balance × Risk%) / (Stop Loss Pips × Pip Value). 
            Pip values are calculated based on a standard 100,000 unit contract. 
            For JPY pairs, 0.01 move is considered 1 pip. For metals like Gold, 0.10 move is considered 1 pip.
          </p>
        </div>
        
        {/* Advertisement Placeholder */}
        <div className="border border-dashed border-white/5 rounded-lg p-6 flex flex-col items-center justify-center bg-white/[0.01]">
          <span className="text-[8px] font-bold text-zinc-800 uppercase tracking-widest mb-2">Internal Tooling Ad</span>
          <div className="w-full h-12 bg-zinc-950/50 rounded flex items-center justify-center border border-white/5">
            <span className="text-[8px] text-zinc-900 font-bold tracking-widest italic">AD SPACE</span>
          </div>
        </div>
      </div>
    </main>
  );
}
