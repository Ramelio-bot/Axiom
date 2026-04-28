import type { Metadata } from "next";
import { AlertTriangle, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Risk Disclaimer - Axiom Terminal",
  description: "Important risk disclosure regarding the use of Axiom Terminal trading tools.",
};

export default function DisclaimerPage() {
  return (
    <main className="flex-1 p-10 max-w-4xl mx-auto w-full">
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="text-soft-rose" size={20} />
          <p className="text-[10px] font-bold text-soft-rose uppercase tracking-[0.4em]">Legal Disclosure</p>
        </div>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-100">Risk Disclaimer</h1>
      </header>

      <div className="terminal-card p-10 space-y-8 text-zinc-400 text-sm leading-relaxed font-light">
        <p className="text-zinc-200 font-medium italic">High-risk investment warning: Axiom is a calculation tool and does not provide financial advice.</p>
        
        <section className="space-y-4">
          <h2 className="text-sm font-bold text-zinc-100 uppercase tracking-widest border-l-2 border-emerald pl-4">1. No Financial Advice</h2>
          <p>The information and tools provided by Axiom Terminal are for educational and informational purposes only. Nothing on this platform constitutes professional financial, investment, or trading advice. Users are solely responsible for their trading decisions.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-sm font-bold text-zinc-100 uppercase tracking-widest border-l-2 border-emerald pl-4">2. Market Risk</h2>
          <p>Trading Forex, Metals, and Commodities involves substantial risk and is not suitable for every investor. The high degree of leverage available can work against you as well as for you. Before deciding to trade, you should carefully consider your investment objectives, level of experience, and risk appetite.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-sm font-bold text-zinc-100 uppercase tracking-widest border-l-2 border-emerald pl-4">3. Accuracy of Data</h2>
          <p>While we strive for 100% precision in our calculations and price feeds, market conditions change rapidly. Axiom Terminal does not guarantee the absolute accuracy of real-time data or calculations. Always verify results with your brokerage's terminal before executing live trades.</p>
        </section>

        <div className="pt-8 border-t border-white/5 flex items-center gap-4">
          <ShieldCheck className="text-emerald" size={16} />
          <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Axiom Intelligence Systems Verified Compliance</p>
        </div>
      </div>
    </main>
  );
}
