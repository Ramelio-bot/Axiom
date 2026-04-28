"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, User, Share2, Bookmark, GraduationCap, Calculator } from "lucide-react";
import { motion } from "framer-motion";
import { ACADEMY_ARTICLES } from "@/lib/academy-data";

export default function ArticleDetail() {
  const { slug } = useParams();
  const router = useRouter();
  
  const articleIndex = ACADEMY_ARTICLES.findIndex(a => a.slug === slug);
  const article = ACADEMY_ARTICLES[articleIndex];
  
  const prevArticle = articleIndex > 0 ? ACADEMY_ARTICLES[articleIndex - 1] : null;
  const nextArticle = articleIndex < ACADEMY_ARTICLES.length - 1 ? ACADEMY_ARTICLES[articleIndex + 1] : null;

  if (!article) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center text-center p-10">
        <h1 className="text-2xl font-bold text-zinc-100 mb-4">Article Not Found</h1>
        <Link href="/academy" className="text-emerald font-bold uppercase tracking-widest text-xs">Return to Academy</Link>
      </div>
    );
  }

  return (
    <main className="flex-1 p-10 overflow-y-auto custom-scrollbar">
      <div className="max-w-[800px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <button 
            onClick={() => router.back()}
            className="flex items-center gap-2 text-zinc-500 hover:text-emerald transition-colors mb-12 text-xs font-bold uppercase tracking-[0.2em]"
          >
            <ArrowLeft size={14} /> Back to Academy
          </button>

          <header className="mb-12">
            <div className="flex justify-between items-start mb-6">
              <span className="text-[10px] font-bold text-emerald uppercase tracking-[0.3em] px-2 py-1 bg-emerald/10 rounded border border-emerald/20 inline-block">
                {article.tag}
              </span>
              <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">{article.readTime} Research Time</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-zinc-100 leading-[1.1] mb-8">
              {article.title}
            </h1>
            <div className="flex items-center justify-between py-6 border-y border-white/5">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-zinc-500">
                  <Clock size={14} />
                  <span className="text-xs font-medium">{article.date}</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-500">
                  <User size={14} />
                  <span className="text-xs font-medium">Axiom Intelligence</span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-zinc-600">
                <Share2 size={16} className="cursor-pointer hover:text-emerald transition-colors" />
                <Bookmark size={16} className="cursor-pointer hover:text-emerald transition-colors" />
              </div>
            </div>
          </header>

          <div 
            className="prose prose-invert prose-zinc max-w-none 
            prose-headings:text-zinc-100 prose-headings:font-bold prose-headings:tracking-tight prose-headings:mb-4
            prose-h2:text-2xl prose-h2:mt-10
            prose-h3:text-xl prose-h3:mt-8
            prose-p:text-zinc-400 prose-p:text-base prose-p:leading-relaxed prose-p:mb-6
            prose-strong:text-emerald prose-strong:font-bold
            prose-blockquote:border-emerald prose-blockquote:bg-emerald/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-lg
            prose-li:text-zinc-400 prose-li:text-base prose-li:mb-2
            prose-ul:mb-6
            "
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Author Section for E-E-A-T */}
          <div className="mt-20 p-8 terminal-card bg-zinc-900/50 border-white/5 flex flex-col md:flex-row items-center gap-8">
            <div className="w-24 h-24 rounded-full bg-zinc-800 flex items-center justify-center border-2 border-emerald/20 flex-shrink-0">
              <User size={40} className="text-emerald/40" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-emerald uppercase tracking-[0.3em] mb-1">About the Author</p>
              <h4 className="text-lg font-bold text-zinc-100 mb-2">Daniel Raditya</h4>
              <p className="text-sm text-zinc-500 leading-relaxed italic">
                Chief Strategist & Architect of Axiom Intelligence. Specialized in Algorithmic Trading and Risk Management with over a decade of institutional experience.
              </p>
            </div>
          </div>

          {/* Navigation Between Articles */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {prevArticle ? (
              <Link href={`/academy/${prevArticle.slug}`} className="group p-6 terminal-card border-white/5 hover:border-emerald/20 transition-all">
                <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2 group-hover:text-emerald transition-colors">
                  <ArrowLeft size={12} /> Previous Module
                </div>
                <div className="text-sm font-bold text-zinc-200 line-clamp-1">{prevArticle.title}</div>
              </Link>
            ) : <div />}

            {nextArticle ? (
              <Link href={`/academy/${nextArticle.slug}`} className="group p-6 terminal-card border-white/5 hover:border-emerald/20 transition-all text-right">
                <div className="flex items-center justify-end gap-2 text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2 group-hover:text-emerald transition-colors">
                  Next Module <ArrowRight size={12} />
                </div>
                <div className="text-sm font-bold text-zinc-200 line-clamp-1">{nextArticle.title}</div>
              </Link>
            ) : <div />}
          </div>

          <div className="mt-16 p-10 terminal-card bg-emerald/5 border-emerald/10 flex flex-col items-center text-center">
            <Calculator size={32} className="text-emerald mb-6" />
            <h3 className="text-xl font-bold text-zinc-100 mb-2">Ready to apply this strategy?</h3>
            <p className="text-sm text-zinc-500 mb-8 max-w-md">Use our institutional-grade terminal to calculate your next position with 100% precision.</p>
            <Link href="/position-sizer" className="px-12 py-4 bg-emerald text-zinc-950 font-bold text-xs uppercase tracking-[0.4em] rounded-xl hover:shadow-[0_0_40px_rgba(16,185,129,0.3)] transition-all">
              Open Position Sizer
            </Link>
            <Link href="/academy/glossary" className="mt-6 text-[10px] font-bold text-zinc-600 uppercase tracking-widest hover:text-zinc-300 transition-colors">
              Still confused? View Trading Glossary
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
