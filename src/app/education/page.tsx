import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, GraduationCap, TrendingUp, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Axiom Academy - Trading Knowledge Base",
  description: "Master position sizing, pip value, and market sessions with Axiom Terminal's professional education resources.",
};

const articles = [
  {
    title: "Mastering Position Sizing in Gold Trading",
    description: "Learn how to calculate precise risk for XAUUSD considering its unique volatility and contract sizes.",
    slug: "gold-position-sizing",
    tag: "Strategy"
  },
  {
    title: "Why Pip Value Matters for Your Margin",
    description: "Understanding the monetary impact of every pip move on your account balance and leverage.",
    slug: "pip-value-margin",
    tag: "Risk Management"
  },
  {
    title: "Trading Sessions: When to Trade XAUUSD for Maximum Liquidity",
    description: "Identify the high-volume windows where gold price action is most predictable and efficient.",
    slug: "market-sessions-gold",
    tag: "Analysis"
  }
];

export default function EducationPage() {
  return (
    <main className="flex-1 p-10 max-w-7xl mx-auto w-full">
      <header className="mb-12">
        <p className="text-[10px] font-bold text-emerald uppercase tracking-[0.4em] mb-2">Knowledge Base</p>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-100">Axiom Academy</h1>
        <p className="text-sm text-zinc-500 mt-2">Professional resources for high-precision trading intelligence.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <Link key={index} href={`/education/${article.slug}`} className="group">
            <div className="terminal-card p-8 h-full flex flex-col border-white/5 hover:border-emerald/30 transition-all group-hover:-translate-y-1 duration-300">
              <div className="flex justify-between items-start mb-6">
                <div className="p-2.5 bg-emerald/10 rounded-lg">
                  <BookOpen size={18} className="text-emerald" />
                </div>
                <span className="text-[9px] font-bold text-emerald/60 uppercase tracking-widest px-2 py-1 bg-emerald/5 rounded border border-emerald/10">
                  {article.tag}
                </span>
              </div>
              <h3 className="text-lg font-bold text-zinc-200 mb-4 group-hover:text-emerald transition-colors">{article.title}</h3>
              <p className="text-xs text-zinc-500 leading-relaxed mb-8">{article.description}</p>
              <div className="mt-auto flex items-center gap-2 text-[10px] font-bold text-zinc-400 uppercase tracking-widest group-hover:text-zinc-200 transition-colors">
                Read Article <TrendingUp size={12} className="text-emerald" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-16 p-10 terminal-card bg-zinc-900/50 flex flex-col items-center text-center">
        <GraduationCap size={40} className="text-emerald/40 mb-6" />
        <h2 className="text-xl font-bold text-zinc-100 mb-2">Advanced Institutional Training</h2>
        <p className="text-sm text-zinc-500 max-w-2xl">Access our full curriculum on risk mitigation and algorithmic position management. Secure your capital with institutional-grade logic.</p>
        <button className="mt-8 px-10 py-3 bg-transparent border border-white/10 text-zinc-400 text-[10px] font-bold uppercase tracking-[0.3em] rounded-lg cursor-not-allowed">
          Coming Soon
        </button>
      </div>
    </main>
  );
}
