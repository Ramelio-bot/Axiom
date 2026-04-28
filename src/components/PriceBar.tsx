"use client";

import React, { useState, useEffect, useCallback } from "react";

interface Asset {
  name: string;
  price: string;
  change: string;
}

const DEFAULT_ASSETS: Asset[] = [
  { name: "XAUUSD", price: "2324.52", change: "+1.24%" },
  { name: "EURUSD", price: "1.08421", change: "-0.04%" },
  { name: "GBPUSD", price: "1.26342", change: "+0.12%" },
  { name: "USDJPY", price: "154.82", change: "+0.45%" },
];

export default function PriceBar() {
  const [time, setTime] = useState<string>("");
  const [assets, setAssets] = useState<Asset[]>(DEFAULT_ASSETS);
  const [isFetching, setIsFetching] = useState(false);

  // 1. Real-time Clock (Ticks every second)
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(
        now.toLocaleString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
          timeZone: "UTC",
        }) + " UTC"
      );
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // 2. Price Feed Integration (Simulated / API Shell)
  const fetchPrices = useCallback(async () => {
    setIsFetching(true);
    
    // Simulate API Delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    try {
      // Logic for Twelve Data would go here:
      // const res = await fetch(`https://api.twelvedata.com/price?symbol=XAU/USD,EUR/USD,GBP/USD,USD/JPY&apikey=YOUR_KEY`);
      // const data = await res.json();
      
      // For now, simulate live price fluctuations
      const newAssets = assets.map(asset => {
        const currentPrice = parseFloat(asset.price);
        const fluctuation = (Math.random() - 0.5) * (currentPrice * 0.0005);
        const newPrice = (currentPrice + fluctuation).toFixed(asset.name.includes("JPY") ? 2 : 5);
        return { ...asset, price: newPrice };
      });
      
      setAssets(newAssets);
    } catch (error) {
      console.error("Failed to fetch prices:", error);
    } finally {
      setIsFetching(false);
    }
  }, [assets]);

  // 3. Refresh Logic (Every 2 minutes)
  useEffect(() => {
    fetchPrices(); // Initial fetch
    const interval = setInterval(fetchPrices, 120000); // 2 minutes
    return () => clearInterval(interval);
  }, [fetchPrices]);

  return (
    <div className="h-12 border-b border-border-thin flex items-center px-8 justify-between bg-background/50 backdrop-blur-terminal sticky top-0 z-20">
      <div className="flex items-center gap-10">
        {assets.map((asset, index) => (
          <div key={index} className="flex items-center gap-4">
            <span className="text-[10px] font-bold text-zinc-500 tracking-wider">{asset.name}</span>
            <span className="font-mono text-xs font-semibold tracking-tight tabular-nums text-zinc-100">{asset.price}</span>
            <span className={`text-[10px] font-bold ${asset.change.startsWith("+") ? "text-emerald" : "text-soft-rose"}`}>
              {asset.change}
            </span>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2.5">
          <div className={`pulsing-dot ${isFetching ? "animate-ping scale-125" : ""}`} />
          <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-[0.15em]">
            {isFetching ? "Updating Feed..." : "Market Connectivity"}
          </span>
        </div>
        <div className="text-[10px] text-zinc-500 font-medium uppercase tracking-widest font-mono min-w-[180px] text-right">
          {time || "Initializing..."}
        </div>
      </div>
    </div>
  );
}
