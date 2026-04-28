import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, GraduationCap, ArrowRight, Search } from "lucide-react";
import { ACADEMY_ARTICLES } from "@/lib/academy-data";

export const metadata: Metadata = {
  title: "Axiom Academy - Institutional Trading Knowledge Base",
  description: "25+ Professional resources for high-precision trading intelligence. Master risk, technicals, fundamentals, and psychology.",
};

export default function AcademyPage() {
  return (
    <main className="flex-1 p-10 max-w-7xl mx-auto w-full">
      <header className="mb-12">
        <p className="text-xs font-bold text-emerald uppercase tracking-[0.4em] mb-3">Institutional Education</p>
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-100">Axiom Academy</h1>
        <p className="text-base text-zinc-500 mt-4 max-w-2xl leading-relaxed">
          The definitive knowledge base for the modern terminal trader. 
          25 comprehensive guides across risk, strategy, macro, and psychology.
        </p>
      </header>

      {/* Grid of Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {ACADEMY_ARTICLES.map((article, index) => (
          <Link key={index} href={`/academy/${article.slug}`} className="group">
            <div className="terminal-card p-8 h-full flex flex-col border-white/5 hover:border-emerald/30 transition-all group-hover:-translate-y-2 duration-500 bg-zinc-900/40">
              <div className="flex justify-between items-start mb-8">
                <div className="p-3 bg-emerald/10 rounded-xl">
                  <BookOpen size={20} className="text-emerald" />
                </div>
                <div className="flex flex-col items-end gap-2 text-right">
                  <span className="text-[10px] font-bold text-emerald/60 uppercase tracking-widest px-2 py-1 bg-emerald/5 rounded border border-emerald/10">
                    {article.tag}
                  </span>
                  <span className="text-[10px] text-zinc-600 font-bold uppercase tracking-tighter">{article.readTime} READ</span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-zinc-100 mb-4 group-hover:text-emerald transition-colors leading-tight">
                {article.title}
              </h3>
              <p className="text-xs text-zinc-500 leading-relaxed mb-10 line-clamp-3">
                {article.description}
              </p>
              <div className="mt-auto flex items-center gap-2 text-[10px] font-bold text-zinc-400 uppercase tracking-widest group-hover:text-zinc-100 transition-colors">
                Initialize Research <ArrowRight size={14} className="text-emerald group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Final Call to Action */}
      <div className="mt-20 p-12 terminal-card bg-zinc-900/50 flex flex-col items-center text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-emerald/20 shadow-[0_0_15px_rgba(16,185,129,0.3)]" />
        <GraduationCap size={48} className="text-emerald/40 mb-8" />
        <h2 className="text-2xl font-bold text-zinc-100 mb-4">Axiom Intelligence Protocol</h2>
        <p className="text-sm text-zinc-500 max-w-2xl leading-relaxed mb-8">
          Knowledge is the primary defensive layer of capital. Master these protocols to achieve institutional-grade consistency.
        </p>
        <Link href="/position-sizer" className="px-10 py-3.5 bg-emerald text-zinc-950 text-[10px] font-bold uppercase tracking-[0.4em] rounded-xl hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all">
          Deploy Terminal
        </Link>
      </div>
    </main>
  );
}
