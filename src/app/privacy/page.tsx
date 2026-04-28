import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Axiom Terminal",
  description: "Learn how Axiom Terminal protects your data and maintains privacy.",
};

export default function PrivacyPage() {
  return (
    <main className="flex-1 p-10 max-w-4xl mx-auto w-full">
      <header className="mb-12">
        <p className="text-[10px] font-bold text-emerald uppercase tracking-[0.4em] mb-2">Data Integrity</p>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-100">Privacy Policy</h1>
      </header>

      <div className="terminal-card p-10 space-y-8 text-zinc-400 text-sm leading-relaxed font-light">
        <section className="space-y-4">
          <h2 className="text-sm font-bold text-zinc-100 uppercase tracking-widest">1. Information Collection</h2>
          <p>Axiom Terminal does not require user registration. We do not collect personally identifiable information. Any calculation data you enter remains local to your browser session and is not stored on our servers.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-sm font-bold text-zinc-100 uppercase tracking-widest">2. Usage Analytics</h2>
          <p>We may use anonymous telemetry to understand how our tools are used and to improve terminal performance. This data is fully anonymized and cannot be traced back to an individual user.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-sm font-bold text-zinc-100 uppercase tracking-widest">3. Third-Party Widgets</h2>
          <p>Our terminal integrates widgets from TradingView and Twelve Data. These third-party services may collect standard web traffic data. We recommend reviewing their respective privacy policies.</p>
        </section>
      </div>
    </main>
  );
}
