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

  // 1. Real-time Clock
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

  // 2. Price Feed Simulation
  const fetchPrices = useCallback(async () => {
    setIsFetching(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));

    try {
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

  useEffect(() => {
    fetchPrices();
    const interval = setInterval(fetchPrices, 120000);
    return () => clearInterval(interval);
  }, [fetchPrices]);

  return (
    <div className="h-12 border-b border-white/5 flex items-center px-10 justify-between bg-background/50 backdrop-blur-xl sticky top-0 z-20 overflow-hidden">
      <div className="flex items-center gap-12 overflow-x-auto no-scrollbar">
        {assets.map((asset, index) => (
          <div key={index} className="flex items-center gap-4 shrink-0">
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{asset.name}</span>
            <span className="font-mono text-xs font-bold text-white tabular-nums">{asset.price}</span>
            <span className={`text-[10px] font-bold ${asset.change.startsWith("+") ? "text-emerald" : "text-soft-rose"}`}>
              {asset.change}
            </span>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-8 shrink-0 bg-background/80 pl-8 ml-4">
        <div className="flex items-center gap-3">
          <div className={`pulsing-dot ${isFetching ? "animate-pulse" : ""}`} />
          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] whitespace-nowrap">
            {isFetching ? "Syncing Feed" : "Connectivity"}
          </span>
        </div>
        <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest font-mono min-w-[140px] text-right">
          {time || "Syncing..."}
        </div>
      </div>
    </div>
  );
}
