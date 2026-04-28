import Sidebar from "@/components/Sidebar";
import PriceBar from "@/components/PriceBar";
import PositionSizer from "@/components/PositionSizer";

export default function Home() {
  return (
    <div className="flex h-screen overflow-hidden bg-background text-foreground font-inter">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto custom-scrollbar">
        <PriceBar />

        <main className="flex-1 p-10 max-w-7xl mx-auto w-full">
          <header className="mb-12 flex items-end justify-between">
            <div>
              <p className="text-[10px] font-bold text-emerald uppercase tracking-[0.4em] mb-2">Institutional Access</p>
              <h1 className="text-3xl font-semibold tracking-tight text-zinc-100">Trading Terminal</h1>
            </div>
            <div className="text-right">
              <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em]">Axiom Terminal</p>
              <p className="text-[10px] text-zinc-600 font-medium">v1.0.4-stable</p>
            </div>
          </header>
          
          <PositionSizer />
          
          {/* Dashboard Preview Section (Locked/Placeholder) */}
          <section className="mt-12">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">Market Overview</h3>
              <span className="text-[10px] text-zinc-600 font-bold uppercase cursor-not-allowed">View All Assets</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-20 grayscale pointer-events-none">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-32 terminal-card border-dashed" />
              ))}
            </div>
          </section>
        </main>

        <footer className="h-10 border-t border-border-thin bg-background/50 flex items-center px-8 justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-emerald" />
              <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">System Online</span>
            </div>
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
