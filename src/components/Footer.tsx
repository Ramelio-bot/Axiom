"use client";

import React from "react";
import Link from "next/link";
import { ShieldAlert } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border-thin bg-background/50 flex flex-col mt-auto">
      {/* Risk Warning Strip */}
      <div className="px-10 py-3 bg-soft-rose/5 border-b border-white/5 flex items-center justify-center gap-3">
        <ShieldAlert size={12} className="text-soft-rose" />
        <p className="text-[9px] font-bold text-soft-rose/80 uppercase tracking-widest text-center">
          High-risk investment warning: Axiom is a calculation tool and does not provide financial advice.
        </p>
      </div>

      <div className="h-12 flex items-center px-10 justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-emerald" />
            <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">System Online</span>
          </div>
          <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">Axiom Terminal v1.1.8</span>
        </div>
        
        <div className="flex items-center gap-6">
          <Link href="/education" className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest hover:text-emerald transition-colors">Academy</Link>
          <Link href="/privacy" className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest hover:text-emerald transition-colors">Privacy</Link>
          <Link href="/terms" className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest hover:text-emerald transition-colors">Terms</Link>
          <Link href="/disclaimer" className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest hover:text-emerald transition-colors">Risk Disclaimer</Link>
        </div>
        
        <div className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">
          Axiom Intelligence © 2026
        </div>
      </div>
    </footer>
  );
}
