import type { Metadata } from "next";
import dynamic from "next/dynamic";

const MarketOverview = dynamic(() => import("@/components/TradingViewWidget"), { ssr: false });

export const metadata: Metadata = {
  title: "Axiom Dashboard - Market Intelligence Overview",
  description: "Real-time market intelligence and asset overview from the Axiom Terminal.",
};

export default function DashboardPage() {
  return (
    <main className="flex-1 p-10 max-w-7xl mx-auto w-full">
      <header className="mb-10">
        <p className="text-[10px] font-bold text-emerald uppercase tracking-[0.4em] mb-2">Global Intelligence</p>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-100">Market Dashboard</h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <MarketOverview />
        </div>
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="p-6 terminal-card h-full">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-4">Signal Summary</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="text-xs text-zinc-400">Risk Appetite</span>
                <span className="text-xs font-bold text-emerald">BULLISH</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="text-xs text-zinc-400">USD Strength</span>
                <span className="text-xs font-bold text-soft-rose">NEUTRAL</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-xs text-zinc-400">VIX Index</span>
                <span className="text-xs font-bold text-zinc-200">14.52</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
