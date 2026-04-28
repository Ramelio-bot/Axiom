import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Axiom Terminal",
  description: "Standard terms and conditions for using the Axiom Terminal platform.",
};

export default function TermsPage() {
  return (
    <main className="flex-1 p-10 max-w-4xl mx-auto w-full">
      <header className="mb-12">
        <p className="text-[10px] font-bold text-emerald uppercase tracking-[0.4em] mb-2">Service Protocol</p>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-100">Terms of Service</h1>
      </header>

      <div className="terminal-card p-10 space-y-8 text-zinc-400 text-sm leading-relaxed font-light">
        <section className="space-y-4">
          <h2 className="text-sm font-bold text-zinc-100 uppercase tracking-widest">1. Acceptable Use</h2>
          <p>By accessing Axiom Terminal, you agree to use our tools only for lawful purposes related to financial calculation and market analysis. Unauthorized scraping or automated stress-testing of our systems is strictly prohibited.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-sm font-bold text-zinc-100 uppercase tracking-widest">2. Intellectual Property</h2>
          <p>The Axiom Terminal brand, logic engine, and custom UI design are the intellectual property of Axiom Intelligence Systems. All rights reserved.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-sm font-bold text-zinc-100 uppercase tracking-widest">3. Limitation of Liability</h2>
          <p>Axiom Intelligence Systems shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use of or inability to use our services.</p>
        </section>
      </div>
    </main>
  );
}
