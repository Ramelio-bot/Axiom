import Sidebar from "@/components/Sidebar";
import PriceBar from "@/components/PriceBar";
import PositionSizer from "@/components/PositionSizer";
import PipValueTable from "@/components/PipValueTable";
import TradingViewWidget from "@/components/TradingViewWidget";

export default function Home() {
  return (
    <div className="flex h-screen overflow-hidden bg-background text-foreground font-inter">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto custom-scrollbar">
        {/* Top Price Bar */}
        <PriceBar />

        <main className="flex-1 p-10 max-w-7xl mx-auto w-full">
          {/* Header */}
          <header className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-[10px] font-bold text-emerald uppercase tracking-[0.4em] mb-2">Institutional Access</p>
              <h1 className="text-3xl font-semibold tracking-tight text-zinc-100">Trading Terminal</h1>
            </div>
            <div className="text-right">
              <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em]">Axiom Terminal</p>
              <p className="text-[10px] text-zinc-600 font-medium">v1.0.8-stable</p>
            </div>
          </header>
          
          {/* Main Calculation Grid */}
          <PositionSizer />
          
          {/* Bottom Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            {/* Pip Reference Table */}
            <div className="lg:col-span-5">
              <PipValueTable />
            </div>
            
            {/* Market Intelligence Chart */}
            <div className="lg:col-span-7">
              <TradingViewWidget />
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="h-10 border-t border-border-thin bg-background/50 flex items-center px-8 justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-emerald" />
              <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">System Online</span>
            </div>
            <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">Connectivity: Tier-1 Fiber</span>
            <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">Latency: 12ms</span>
          </div>
          <div className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">
            Axiom Intelligence Systems © 2026
          </div>
        </footer>
      </div>
    </div>
  );
}
