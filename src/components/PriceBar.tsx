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
    } catch (error) {} finally {
      setIsFetching(false);
    }
  }, [assets]);

  useEffect(() => {
    fetchPrices();
    const interval = setInterval(fetchPrices, 120000);
    return () => clearInterval(interval);
  }, [fetchPrices]);

  return (
    <div className="h-10 border-b border-white/5 flex items-center px-10 justify-between bg-[#09090b] sticky top-0 z-20">
      <div className="flex items-center gap-10 overflow-x-auto no-scrollbar">
        {assets.map((asset, index) => (
          <div key={index} className="flex items-center gap-3 shrink-0">
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{asset.name}</span>
            <span className="font-mono text-[11px] font-bold text-zinc-50 tabular-nums">{asset.price}</span>
            <span className={`text-[10px] font-bold ${asset.change.startsWith("+") ? "text-emerald" : "text-soft-rose"}`}>
              {asset.change}
            </span>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-6 shrink-0 ml-4">
        <div className="flex items-center gap-2">
          <div className={`w-1.5 h-1.5 rounded-full ${isFetching ? "bg-emerald animate-pulse" : "bg-emerald/40"}`} />
          <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">
            {isFetching ? "Syncing" : "Active"}
          </span>
        </div>
        <div className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest font-mono">
          {time || "Syncing..."}
        </div>
      </div>
    </div>
  );
}
