"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="h-10 border-t border-border-thin bg-background/50 flex items-center px-10 justify-between mt-auto">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-1 h-1 rounded-full bg-emerald" />
          <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">System Online</span>
        </div>
        <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">Axiom Terminal v1.1.2</span>
      </div>
      
      <div className="flex items-center gap-6">
        <Link href="/about" className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest hover:text-emerald transition-colors">About</Link>
        <Link href="/disclaimer" className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest hover:text-emerald transition-colors">Disclaimer</Link>
        <Link href="/privacy" className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest hover:text-emerald transition-colors">Privacy Policy</Link>
      </div>
      
      <div className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">
        Axiom Intelligence © 2026
      </div>
    </footer>
  );
}
