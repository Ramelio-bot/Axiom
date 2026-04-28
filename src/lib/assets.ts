export interface Asset {
  symbol: string;
  name: string;
  type: "Major" | "Minor" | "Exotic" | "Commodity" | "Metal" | "Crypto";
  pipValue: number; // For 1.00 standard lot
  decimals: number;
  tvSymbol?: string; // TradingView Symbol if different
}

export const ASSETS: Asset[] = [
  // Majors
  { symbol: "EURUSD", name: "EUR/USD", type: "Major", pipValue: 10, decimals: 5 },
  { symbol: "GBPUSD", name: "GBP/USD", type: "Major", pipValue: 10, decimals: 5 },
  { symbol: "USDJPY", name: "USD/JPY", type: "Major", pipValue: 6.45, decimals: 3 },
  { symbol: "AUDUSD", name: "AUD/USD", type: "Major", pipValue: 10, decimals: 5 },
  { symbol: "USDCAD", name: "USD/CAD", type: "Major", pipValue: 7.25, decimals: 5 },
  { symbol: "USDCHF", name: "USD/CHF", type: "Major", pipValue: 11.20, decimals: 5 },
  { symbol: "NZDUSD", name: "NZD/USD", type: "Major", pipValue: 10, decimals: 5 },

  // Minors
  { symbol: "EURGBP", name: "EUR/GBP", type: "Minor", pipValue: 12.60, decimals: 5 },
  { symbol: "EURJPY", name: "EUR/JPY", type: "Minor", pipValue: 6.45, decimals: 3 },
  { symbol: "GBPJPY", name: "GBP/JPY", type: "Minor", pipValue: 6.45, decimals: 3 },
  { symbol: "AUDJPY", name: "AUD/JPY", type: "Minor", pipValue: 6.45, decimals: 3 },
  { symbol: "EURAUD", name: "EUR/AUD", type: "Minor", pipValue: 6.55, decimals: 5 },
  { symbol: "EURCAD", name: "EUR/CAD", type: "Minor", pipValue: 7.25, decimals: 5 },
  { symbol: "GBPCHF", name: "GBP/CHF", type: "Minor", pipValue: 11.20, decimals: 5 },
  { symbol: "CADJPY", name: "CAD/JPY", type: "Minor", pipValue: 6.45, decimals: 3 },
  { symbol: "GBPAUD", name: "GBP/AUD", type: "Minor", pipValue: 6.55, decimals: 5 },
  { symbol: "GBPCAD", name: "GBP/CAD", type: "Minor", pipValue: 7.25, decimals: 5 },
  { symbol: "AUDCAD", name: "AUD/CAD", type: "Minor", pipValue: 7.25, decimals: 5 },
  { symbol: "AUDNZD", name: "AUD/NZD", type: "Minor", pipValue: 10.00, decimals: 5 },

  // Exotics
  { symbol: "USDMXN", name: "USD/MXN", type: "Exotic", pipValue: 0.55, decimals: 5 },
  { symbol: "USDZAR", name: "USD/ZAR", type: "Exotic", pipValue: 0.52, decimals: 5 },
  { symbol: "USDTRY", name: "USD/TRY", type: "Exotic", pipValue: 0.30, decimals: 5 },
  { symbol: "USDHKD", name: "USD/HKD", type: "Exotic", pipValue: 1.28, decimals: 5 },
  { symbol: "USDSGD", name: "USD/SGD", type: "Exotic", pipValue: 7.40, decimals: 5 },
  { symbol: "USDTHB", name: "USD/THB", type: "Exotic", pipValue: 2.80, decimals: 5 },
  { symbol: "USDPLN", name: "USD/PLN", type: "Exotic", pipValue: 2.40, decimals: 5 },

  // Metals & Commodities
  { symbol: "XAUUSD", name: "Gold", type: "Metal", pipValue: 10, decimals: 2 },
  { symbol: "XAGUSD", name: "Silver", type: "Metal", pipValue: 50, decimals: 3 },
  { symbol: "XPTUSD", name: "Platinum", type: "Metal", pipValue: 10, decimals: 2 },
  { symbol: "WTI", name: "WTI Oil", type: "Commodity", pipValue: 10, decimals: 2, tvSymbol: "USOIL" },
  { symbol: "BRENT", name: "Brent Oil", type: "Commodity", pipValue: 10, decimals: 2, tvSymbol: "UKOIL" },
  { symbol: "NGAS", name: "Natural Gas", type: "Commodity", pipValue: 10, decimals: 3, tvSymbol: "NATGAS" },

  // Crypto
  { symbol: "BTCUSD", name: "Bitcoin", type: "Crypto", pipValue: 1, decimals: 2, tvSymbol: "BINANCE:BTCUSDT" },
  { symbol: "ETHUSD", name: "Ethereum", type: "Crypto", pipValue: 1, decimals: 2, tvSymbol: "BINANCE:ETHUSDT" },
  { symbol: "SOLUSD", name: "Solana", type: "Crypto", pipValue: 0.1, decimals: 3, tvSymbol: "BINANCE:SOLUSDT" },
  { symbol: "BNBUSD", name: "BNB", type: "Crypto", pipValue: 1, decimals: 2, tvSymbol: "BINANCE:BNBUSDT" },
  { symbol: "XRPUSD", name: "XRP", type: "Crypto", pipValue: 0.0001, decimals: 4, tvSymbol: "BINANCE:XRPUSDT" },
  { symbol: "ADAUSD", name: "Cardano", type: "Crypto", pipValue: 0.0001, decimals: 4, tvSymbol: "BINANCE:ADAUSDT" },
  { symbol: "AVAXUSD", name: "Avalanche", type: "Crypto", pipValue: 0.01, decimals: 2, tvSymbol: "BINANCE:AVAXUSDT" },
  { symbol: "DOTUSD", name: "Polkadot", type: "Crypto", pipValue: 0.01, decimals: 2, tvSymbol: "BINANCE:DOTUSDT" },
  { symbol: "LINKUSD", name: "Chainlink", type: "Crypto", pipValue: 0.01, decimals: 2, tvSymbol: "BINANCE:LINKUSDT" },
  { symbol: "DOGEUSD", name: "Dogecoin", type: "Crypto", pipValue: 0.0001, decimals: 5, tvSymbol: "BINANCE:DOGEUSDT" },
];
