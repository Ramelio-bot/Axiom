import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, GraduationCap, TrendingUp, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Axiom Academy - Trading Knowledge Base",
  description: "Master position sizing, pip value, and market sessions with Axiom Terminal's professional education resources.",
};

const articles = [
  {
    title: "The 1% Rule: Professional Position Sizing Strategies",
    description: "Learn why maintaining a strict risk-per-trade ratio is the most critical survival skill for institutional traders.",
    slug: "the-1-percent-rule",
    tag: "Strategy",
    readTime: "6 min"
  },
  {
    title: "Pip Value Mastery: From Forex to Gold",
    description: "A technical guide on how to calculate precise pip values across different asset classes and leverage levels.",
    slug: "pip-value-mastery",
    tag: "Risk Management",
    readTime: "8 min"
  },
  {
    title: "Market Overlaps: Timing Your Trades for Maximum Volatility",
    description: "Master the Golden Hours: Identifying high-volume windows when London and New York sessions converge.",
    slug: "market-overlaps",
    tag: "Analysis",
    readTime: "5 min"
  }
];

export default function AcademyPage() {
  return (
    <main className="flex-1 p-10 max-w-7xl mx-auto w-full">
      <header className="mb-12">
        <p className="text-xs font-bold text-emerald uppercase tracking-[0.4em] mb-3">Institutional Education</p>
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-100">Axiom Academy</h1>
        <p className="text-base text-zinc-500 mt-4 max-w-2xl">High-precision resources for professional traders. Master the mechanics of the market with institutional-grade logic.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <Link key={index} href={`/academy/${article.slug}`} className="group">
            <div className="terminal-card p-8 h-full flex flex-col border-white/5 hover:border-emerald/30 transition-all group-hover:-translate-y-2 duration-500 bg-zinc-900/40">
              <div className="flex justify-between items-start mb-8">
                <div className="p-3 bg-emerald/10 rounded-xl">
                  <BookOpen size={20} className="text-emerald" />
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="text-[10px] font-bold text-emerald/60 uppercase tracking-widest px-2 py-1 bg-emerald/5 rounded border border-emerald/10">
                    {article.tag}
                  </span>
                  <span className="text-[10px] text-zinc-600 font-bold uppercase">{article.readTime}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-zinc-100 mb-4 group-hover:text-emerald transition-colors leading-tight">{article.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed mb-10">{article.description}</p>
              <div className="mt-auto flex items-center gap-2 text-xs font-bold text-zinc-400 uppercase tracking-widest group-hover:text-zinc-100 transition-colors">
                Initialize Research <ArrowRight size={14} className="text-emerald group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-20 p-12 terminal-card bg-zinc-900/50 flex flex-col items-center text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-emerald/20" />
        <GraduationCap size={48} className="text-emerald/40 mb-8" />
        <h2 className="text-2xl font-bold text-zinc-100 mb-4">Advanced Risk Protocols</h2>
        <p className="text-base text-zinc-500 max-w-2xl leading-relaxed">Secure your terminal and your capital. Our upcoming advanced curriculum covers algorithmic hedging and volatility-adjusted sizing.</p>
        <button className="mt-10 px-12 py-4 bg-transparent border border-white/10 text-zinc-500 text-[10px] font-bold uppercase tracking-[0.4em] rounded-xl cursor-not-allowed hover:border-white/20 transition-all">
          Protocol Locked
        </button>
      </div>
    </main>
  );
}
