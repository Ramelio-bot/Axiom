"use client";

import React, { useState, useRef, useEffect } from "react";
import { Search, ChevronDown } from "lucide-react";
import { ASSETS, Asset } from "@/lib/assets";

interface ComboboxProps {
  selected: Asset;
  onSelect: (asset: Asset) => void;
}

export default function Combobox({ selected, onSelect }: ComboboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredAssets = ASSETS.filter(asset => 
    asset.name.toLowerCase().includes(search.toLowerCase()) ||
    asset.symbol.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-zinc-950/50 border border-white/5 rounded-lg px-4 py-3.5 flex items-center justify-between cursor-pointer hover:border-emerald/30 transition-all input-inner-shadow"
      >
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold text-zinc-100">{selected.name}</span>
          <span className="text-[10px] font-bold text-zinc-600 bg-zinc-900 px-1.5 py-0.5 rounded">{selected.type}</span>
        </div>
        <ChevronDown size={14} className={`text-zinc-500 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-2 bg-zinc-900 border border-white/10 rounded-lg shadow-2xl z-50 overflow-hidden backdrop-blur-xl">
          <div className="p-2 border-b border-white/5">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600" size={14} />
              <input 
                autoFocus
                type="text" 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search assets..."
                className="w-full bg-zinc-950 border border-white/5 rounded-md pl-9 pr-4 py-2 text-xs focus:outline-none focus:border-emerald/30"
              />

            </div>
          </div>
          <div className="max-h-60 overflow-y-auto custom-scrollbar">
            {filteredAssets.map((asset) => (
              <div 
                key={asset.symbol}
                onClick={() => {
                  onSelect(asset);
                  setIsOpen(false);
                  setSearch("");
                }}
                className="px-4 py-3 hover:bg-emerald/10 cursor-pointer flex items-center justify-between group"
              >
                <div>
                  <div className="text-xs font-bold text-zinc-300 group-hover:text-emerald transition-colors">{asset.name}</div>
                  <div className="text-[9px] text-zinc-600 font-medium">{asset.symbol}</div>
                </div>
                <div className="text-[9px] font-bold text-zinc-700 group-hover:text-emerald/50">{asset.type}</div>
              </div>
            ))}
            {filteredAssets.length === 0 && (
              <div className="px-4 py-8 text-center text-[10px] text-zinc-600">No assets found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
