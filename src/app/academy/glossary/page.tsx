import type { Metadata } from "next";
import Link from "next/link";
import { Search, Book } from "lucide-react";

export const metadata: Metadata = {
  title: "Trading Glossary A-Z - Axiom Academy",
  description: "Comprehensive dictionary of Forex and financial trading terms. Understand Spread, Slippage, Margin, and more.",
};

const glossaryItems = [
  { term: "ATR (Average True Range)", definition: "An indicator that measures market volatility by decomposing the entire range of an asset price for that period." },
  { term: "Balance", definition: "The total amount of money in your trading account before considering open positions." },
  { term: "Base Currency", definition: "The first currency quoted in a forex pair. In EUR/USD, the Euro is the base currency." },
  { term: "Bid/Ask Spread", definition: "The difference between the highest price a buyer is willing to pay and the lowest price a seller is willing to accept." },
  { term: "Drawdown", definition: "The peak-to-trough decline during a specific period for an investment, trading account, or fund." },
  { term: "Equity", definition: "The balance of your account plus or minus the floating profit or loss from open positions." },
  { term: "Leverage", definition: "The use of borrowed capital to increase the potential return (and risk) of an investment." },
  { term: "Lot Size", definition: "The standardized quantity of a financial instrument being traded. 1 Standard Lot = 100,000 units." },
  { term: "Margin Call", definition: "A broker's demand that an investor deposits additional money or securities so that the account is brought up to the minimum value." },
  { term: "Pip (Percentage in Point)", definition: "The smallest unit of price change in an exchange rate, typically the fourth decimal place." },
  { term: "Risk/Reward Ratio", definition: "A calculation used by traders to compare the expected returns of a trade to the amount of risk undertaken." },
  { term: "Slippage", definition: "The difference between the expected price of a trade and the price at which the trade is actually executed." },
  { term: "Stop Loss", definition: "An order placed with a broker to buy or sell a specific stock when the stock reaches a certain price, designed to limit loss." },
  { term: "Take Profit", definition: "An order used by currency traders that allows them to close a position automatically when the price reaches a specific level." },
  { term: "Volatility", definition: "The degree of variation of a trading price series over time, usually measured by the standard deviation of returns." },
];

export default function GlossaryPage() {
  return (
    <main className="flex-1 p-10 max-w-5xl mx-auto w-full">
      <header className="mb-12">
        <p className="text-[10px] font-bold text-emerald uppercase tracking-[0.4em] mb-2">Knowledge Index</p>
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-100">Trading Glossary</h1>
        <p className="text-base text-zinc-500 mt-4 max-w-2xl leading-relaxed">The definitive A-Z dictionary of financial market terminology. Master the language of institutional trading.</p>
      </header>

      <div className="relative mb-12">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
        <input 
          type="text" 
          placeholder="Search for a term (e.g. Spread, Margin)..."
          className="w-full bg-zinc-950/50 border border-white/5 rounded-xl py-4 pl-12 pr-6 text-sm focus:outline-none focus:border-emerald/30 transition-all input-inner-shadow"
        />
      </div>

      <div className="grid grid-cols-1 gap-4">
        {glossaryItems.map((item, index) => (
          <div key={index} className="terminal-card p-6 hover:bg-white/[0.01] transition-all group border-white/5 hover:border-emerald/20">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-zinc-900 rounded-lg text-zinc-600 group-hover:text-emerald transition-colors">
                <Book size={16} />
              </div>
              <div>
                <h3 className="text-base font-bold text-zinc-200 mb-1 group-hover:text-emerald transition-colors">{item.term}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{item.definition}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 pt-10 border-t border-white/5 flex flex-col items-center text-center">
        <p className="text-sm text-zinc-500 mb-6 italic">Want to learn how to trade these concepts professionally?</p>
        <Link href="/academy" className="text-emerald font-bold text-xs uppercase tracking-[0.3em] hover:opacity-80 transition-opacity">
          Visit Axiom Academy
        </Link>
      </div>
    </main>
  );
}
