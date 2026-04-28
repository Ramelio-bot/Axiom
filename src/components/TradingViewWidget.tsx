"use client";

import React, { useEffect, useRef } from 'react';

interface Props {
  symbol?: string;
  type?: 'chart' | 'gauge' | 'calendar' | 'movers';
  height?: number;
}

export default function TradingViewWidget({ symbol = "FX:EURUSD", type = 'chart', height = 450 }: Props) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;
    
    // Cleanup previous widget
    container.current.innerHTML = '';

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;

    switch (type) {
      case 'chart':
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
        script.innerHTML = JSON.stringify({
          "autosize": true,
          "symbol": symbol,
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "enable_publishing": false,
          "allow_symbol_change": true,
          "calendar": false,
          "support_host": "https://www.tradingview.com",
          "backgroundColor": "#09090b",
          "gridLineColor": "rgba(42, 46, 57, 0.06)",
        });
        break;
      case 'gauge':
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js";
        script.innerHTML = JSON.stringify({
          "interval": "1D",
          "width": "100%",
          "isTransparent": true,
          "height": height,
          "symbol": symbol,
          "showIntervalTabs": true,
          "displayMode": "single",
          "locale": "en",
          "colorTheme": "dark"
        });
        break;
      case 'calendar':
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-events.js";
        script.innerHTML = JSON.stringify({
          "colorTheme": "dark",
          "isTransparent": true,
          "width": "100%",
          "height": height,
          "locale": "en",
          "importanceFilter": "-1,0,1"
        });
        break;
      case 'movers':
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js";
        script.innerHTML = JSON.stringify({
          "colorTheme": "dark",
          "dateRange": "12M",
          "exchange": "US",
          "showChart": true,
          "locale": "en",
          "largeChartUrl": "",
          "isTransparent": true,
          "showSymbolLogo": true,
          "showFloatingTooltip": false,
          "width": "100%",
          "height": height,
          "plotLineColorRegular": "rgba(46, 120, 255, 1)",
          "plotLineColorHover": "rgba(33, 150, 243, 1)",
          "gridLineColor": "rgba(42, 46, 57, 0.06)",
          "scaleFontColor": "rgba(209, 212, 220, 1)",
          "belowLineFillColorGrowing": "rgba(41, 98, 255, 0.12)",
          "belowLineFillColorFalling": "rgba(41, 98, 255, 0.12)",
          "belowLineFillColorGrowingBottom": "rgba(41, 98, 255, 0)",
          "belowLineFillColorFallingBottom": "rgba(41, 98, 255, 0)",
          "symbolActiveColor": "rgba(41, 98, 255, 0.12)"
        });
        break;
    }
    
    container.current.appendChild(script);
  }, [symbol, type, height]);

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}
