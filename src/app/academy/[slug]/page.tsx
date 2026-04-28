"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, User, Share2, Bookmark } from "lucide-react";
import { motion } from "framer-motion";

const articleContent: Record<string, any> = {
  "the-1-percent-rule": {
    title: "The 1% Rule: Professional Position Sizing Strategies",
    tag: "Strategy",
    date: "April 28, 2026",
    content: `
      <p>In the world of institutional trading, survival is the only goal that matters. Without capital, you cannot trade. This is why the **1% Rule** is considered the cornerstone of professional risk management.</p>
      
      <h2>What is the 1% Rule?</h2>
      <p>The 1% Rule states that you should never risk more than 1% of your total account equity on any single trade. If you have a $10,000 account, your maximum risk per trade—the amount you lose if your stop loss is hit—is exactly $100.</p>
      
      <h2>Why it Matters</h2>
      <p>Trading is a game of probabilities. Even the best strategies can face a string of losses. By risking only 1%, you can survive 20 consecutive losses and still have over 80% of your capital intact. If you risk 5% or 10%, a small losing streak will wipe you out.</p>
      
      <blockquote>"Risk comes from not knowing what you're doing. The 1% rule ensures that even when you're wrong, you're never out."</blockquote>

      <h2>Calculating Your Size</h2>
      <p>To implement this, you must calculate your lot size based on your stop loss distance. This is where the **Axiom Position Sizer** becomes your most powerful tool. You input your balance, set risk to 1%, define your technical stop loss, and the terminal gives you the exact volume to trade.</p>
    `
  },
  "pip-value-mastery": {
    title: "Pip Value Mastery: From Forex to Gold",
    tag: "Risk Management",
    date: "April 28, 2026",
    content: `
      <p>A pip (Percentage in Point) is the smallest unit of price change in an exchange rate. However, not all pips are created equal. Understanding how much a pip is worth in USD is critical for calculating your potential profit or loss.</p>
      
      <h2>The Standard Calculation</h2>
      <p>For most major pairs (EURUSD, GBPUSD), 1 pip equals 0.0001. On a standard lot (100,000 units), this move is worth exactly **$10.00**.</p>
      
      <h2>The JPY Exception</h2>
      <p>Japanese Yen pairs are quoted to 2 or 3 decimal places. A pip here is 0.01. Because the USD is the base currency in USDJPY, the pip value fluctuates with the exchange rate, usually sitting between $6.00 and $7.50 per lot.</p>
      
      <h2>Gold (XAUUSD) Precision</h2>
      <p>Gold is measured in ounces. A standard lot is 100 ounces. Most brokers define a pip in Gold as a $0.10 move (e.g., from 2300.50 to 2300.60). In this case, 1 pip equals **$10.00**.</p>
    `
  },
  "market-overlaps": {
    title: "Market Overlaps: Timing Your Trades for Maximum Volatility",
    tag: "Analysis",
    date: "April 28, 2026",
    content: `
      <p>The Forex market is open 24 hours a day, but volatility is not distributed equally. The most profitable moves often happen during **Market Overlaps**—when two major global sessions are open simultaneously.</p>
      
      <h2>The Golden Hour: London & New York</h2>
      <p>This is the most important overlap in the world. Between 13:00 and 17:00 UTC, the world's two largest financial centers are trading at the same time. This is when liquidity is highest and spreads are tightest.</p>
      
      <h2>Why Trade Overlaps?</h2>
      <ul>
        <li><strong>Higher Volatility:</strong> Prices move further and faster, allowing for better risk/reward setups.</li>
        <li><strong>Increased Liquidity:</strong> Large institutional orders are filled without significant slippage.</li>
        <li><strong>Clearer Trends:</strong> Trends established during the London open are often reinforced when New York traders enter the market.</li>
      </ul>

      <h2>Axiom Session Clock</h2>
      <p>Use the **Market Clock** in the Axiom Terminal to track these overlaps in your local time. Never miss the start of the most liquid sessions again.</p>
    `
  }
};

export default function ArticleDetail() {
  const { slug } = useParams();
  const router = useRouter();
  const article = articleContent[slug as string];

  if (!article) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center text-center p-10">
        <h1 className="text-2xl font-bold text-zinc-100 mb-4">Article Not Found</h1>
        <Link href="/academy" className="text-emerald font-bold uppercase tracking-widest text-xs">Return to Academy</Link>
      </div>
    );
  }

  return (
    <main className="flex-1 p-10 overflow-y-auto">
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
            <span className="text-[10px] font-bold text-emerald uppercase tracking-[0.3em] px-2 py-1 bg-emerald/10 rounded border border-emerald/20 mb-6 inline-block">
              {article.tag}
            </span>
            <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-zinc-100 leading-tight mb-8">
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
            prose-headings:text-zinc-100 prose-headings:font-bold prose-headings:tracking-tight
            prose-p:text-zinc-400 prose-p:text-base prose-p:leading-relaxed prose-p:mb-6
            prose-strong:text-emerald prose-strong:font-bold
            prose-blockquote:border-emerald prose-blockquote:bg-emerald/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-lg
            prose-li:text-zinc-400 prose-li:text-base prose-li:mb-2
            "
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          <div className="mt-20 pt-10 border-t border-white/5 flex flex-col items-center text-center">
            <p className="text-sm text-zinc-500 mb-6 italic">Ready to apply these institutional strategies?</p>
            <Link href="/position-sizer" className="px-10 py-4 bg-emerald text-zinc-950 font-bold text-xs uppercase tracking-[0.3em] rounded-xl hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all">
              Initialize Position Sizer
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
