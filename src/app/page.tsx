import Sidebar from "@/components/Sidebar";
import PriceBar from "@/components/PriceBar";
import PositionSizer from "@/components/PositionSizer";

export default function Home() {
  return (
    <div className="flex h-screen overflow-hidden bg-obsidian text-white">
      {/* Sidebar - Fixed on the left */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {/* Top Price Bar */}
        <PriceBar />

        {/* Dynamic Page Content */}
        <main className="flex-1 p-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h1 className="text-3xl font-bold tracking-tight mb-2">Trading Terminal</h1>
              <p className="text-gray-500 font-medium italic text-sm">Welcome back, Commander. Markets are currently volatile.</p>
            </div>
            
            {/* Position Sizer Tool */}
            <PositionSizer />
            
            {/* Placeholder for other components */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 opacity-30 pointer-events-none">
              <div className="h-48 glass-card border-border-muted p-6">
                <div className="w-1/3 h-4 bg-white/10 rounded mb-4" />
                <div className="w-full h-24 bg-white/5 rounded" />
              </div>
              <div className="h-48 glass-card border-border-muted p-6">
                <div className="w-1/3 h-4 bg-white/10 rounded mb-4" />
                <div className="w-full h-24 bg-white/5 rounded" />
              </div>
            </div>
          </div>
        </main>

        {/* Footer info bar */}
        <div className="h-8 border-t border-border-muted bg-obsidian flex items-center px-8 justify-between">
          <div className="flex items-center gap-4">
            <span className="text-[9px] font-bold text-gray-600 uppercase tracking-widest">Connectivity: <span className="text-neon-mint">Excellent</span></span>
            <span className="text-[9px] font-bold text-gray-600 uppercase tracking-widest">Latency: <span className="text-neon-mint">12ms</span></span>
          </div>
          <div className="text-[9px] font-bold text-gray-600 uppercase tracking-widest">
            Axiom Intelligence Systems © 2026
          </div>
        </div>
      </div>
    </div>
  );
}

