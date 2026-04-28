"use client";

import React, { useEffect, useRef } from 'react';

export default function TradingViewWidget() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;
    
    // Check if script is already present to avoid duplicates
    if (container.current.querySelector('script')) return;

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      "symbols": [
        ["FX:EURUSD|1D"],
        ["FX:GBPUSD|1D"],
        ["OANDA:XAUUSD|1D"],
        ["FX:USDJPY|1D"]
      ],
      "chartOnly": false,
      "width": "100%",
      "height": "400",
      "locale": "en",
      "colorTheme": "dark",
      "autosize": true,
      "showVolume": false,
      "showMA": false,
      "hideDateRanges": false,
      "hideMarketStatus": false,
      "hideSymbolLogo": false,
      "scalePosition": "right",
      "scaleMode": "Normal",
      "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
      "fontSize": "10",
      "noTimeScale": false,
      "valuesTracking": "1",
      "changeMode": "price-and-percent",
      "chartType": "area",
      "maLineColor": "#2962FF",
      "maLineWidth": 1,
      "maLength": 9,
      "backgroundColor": "#09090b",
      "widgetFontColor": "rgba(255, 255, 255, 0.7)",
      "gridLineColor": "rgba(42, 46, 57, 0.06)",
      "lineWidth": 2,
      "lineColor": "#10b981",
      "topColor": "rgba(16, 185, 129, 0.15)",
      "bottomColor": "rgba(16, 185, 129, 0)",
      "dateFormat": "MMM dd, yyyy",
      "timeHoursFormat": "24h"
    });
    container.current.appendChild(script);
  }, []);

  return (
    <div className="mt-8 terminal-card p-4 overflow-hidden min-h-[400px]">
      <div className="flex items-center gap-3 mb-4 px-4 py-2">
        <h3 className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.3em]">Market Intelligence Data</h3>
      </div>
      <div className="tradingview-widget-container" ref={container}>
        <div className="tradingview-widget-container__widget"></div>
      </div>
    </div>
  );
}
