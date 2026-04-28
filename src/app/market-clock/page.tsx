"use client";

import React, { useState, useEffect } from "react";
import { Clock, Globe } from "lucide-react";

const sessions = [
  { name: "Sydney", start: 22, end: 7, color: "bg-emerald" },
  { name: "Tokyo", start: 0, end: 9, color: "bg-blue-500" },
  { name: "London", start: 8, end: 17, color: "bg-amber-500" },
  { name: "New York", start: 13, end: 22, color: "bg-soft-rose" },
];

export default function MarketClockPage() {
  const [utcHour, setUtcHour] = useState(new Date().getUTCHours());
  const [utcTime, setUtcTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setUtcHour(now.getUTCHours());
      setUtcTime(now.toUTCString().split(" ")[4]);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="flex-1 p-10 max-w-7xl mx-auto w-full">
      <header className="mb-10 flex justify-between items-end">
        <div>
          <p className="text-[10px] font-bold text-emerald uppercase tracking-[0.4em] mb-2">Temporal Synchronization</p>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-100">Market Session Clock</h1>
        </div>
        <div className="text-right">
          <p className="text-4xl font-mono font-bold text-emerald tabular-nums tracking-tighter">{utcTime}</p>
          <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-1">Current UTC Time</p>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        {sessions.map((session) => {
          const isOpen = session.start < session.end 
            ? (utcHour >= session.start && utcHour < session.end)
            : (utcHour >= session.start || utcHour < session.end);
            
          return (
            <div key={session.name} className={`p-8 terminal-card transition-all duration-500 ${isOpen ? "ring-1 ring-emerald/30 bg-emerald/5" : "opacity-40"}`}>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-sm font-bold text-zinc-100">{session.name}</h3>
                {isOpen && <div className="pulsing-dot" />}
              </div>
              <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">Session Hours</p>
              <p className="font-mono text-xs text-zinc-300">{session.start}:00 - {session.end}:00 UTC</p>
              <div className="mt-6 flex items-center gap-2">
                <span className={`text-[9px] font-black uppercase tracking-[0.2em] ${isOpen ? "text-emerald" : "text-zinc-600"}`}>
                  {isOpen ? "Active Market" : "Market Closed"}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Visual Timeline */}
      <div className="terminal-card p-10">
        <h3 className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.3em] mb-10 flex items-center gap-2">
          <Globe size={12} /> 24-Hour Market Cycle (UTC)
        </h3>
        
        <div className="relative h-48 bg-zinc-950/50 rounded-xl border border-white/5 overflow-hidden">
          {/* Hour Markers */}
          <div className="absolute inset-0 flex">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="flex-1 border-r border-white/[0.03] flex flex-col items-center justify-end pb-2">
                <span className="text-[8px] font-mono text-zinc-700">{i}</span>
              </div>
            ))}
          </div>

          {/* Session Bars */}
          <div className="absolute inset-0 pt-4 px-2 space-y-4">
            {sessions.map((session) => {
              const startPos = (session.start / 24) * 100;
              const endPos = (session.end / 24) * 100;
              const isCrossDay = session.start > session.end;
              
              return (
                <div key={session.name} className="relative h-6">
                  {isCrossDay ? (
                    <>
                      <div 
                        className={`absolute top-0 bottom-0 ${session.color} opacity-20 rounded-sm`} 
                        style={{ left: `${startPos}%`, right: 0 }}
                      />
                      <div 
                        className={`absolute top-0 bottom-0 ${session.color} opacity-20 rounded-sm`} 
                        style={{ left: 0, width: `${endPos}%` }}
                      />
                    </>
                  ) : (
                    <div 
                      className={`absolute top-0 bottom-0 ${session.color} opacity-20 rounded-sm`} 
                      style={{ left: `${startPos}%`, width: `${endPos - startPos}%` }}
                    />
                  )}
                  <span className="absolute left-1 top-1/2 -translate-y-1/2 text-[8px] font-bold text-zinc-400 px-2 uppercase tracking-tighter">
                    {session.name}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Current Time Indicator */}
          <div 
            className="absolute top-0 bottom-0 w-px bg-emerald shadow-[0_0_10px_rgba(16,185,129,0.8)] z-10 transition-all duration-1000"
            style={{ left: `${(utcHour / 24) * 100}%` }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-emerald rounded-full" />
          </div>
        </div>
      </div>
    </main>
  );
}
