export interface Asset {
  symbol: string;
  name: string;
  type: "Major" | "Minor" | "Exotic" | "Commodity" | "Metal";
  pipValue: number; // For 1.00 standard lot
  decimals: number;
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

  // Exotics
  { symbol: "USDMXN", name: "USD/MXN", type: "Exotic", pipValue: 0.55, decimals: 5 },
  { symbol: "USDZAR", name: "USD/ZAR", type: "Exotic", pipValue: 0.52, decimals: 5 },
  { symbol: "USDTRY", name: "USD/TRY", type: "Exotic", pipValue: 0.30, decimals: 5 },
  { symbol: "USDHKD", name: "USD/HKD", type: "Exotic", pipValue: 1.28, decimals: 5 },
  { symbol: "USDSGD", name: "USD/SGD", type: "Exotic", pipValue: 7.40, decimals: 5 },

  // Metals & Commodities
  { symbol: "XAUUSD", name: "Gold", type: "Metal", pipValue: 10, decimals: 2 },
  { symbol: "XAGUSD", name: "Silver", type: "Metal", pipValue: 50, decimals: 3 },
  { symbol: "WTI", name: "WTI Oil", type: "Commodity", pipValue: 10, decimals: 2 },
  { symbol: "BRENT", name: "Brent Oil", type: "Commodity", pipValue: 10, decimals: 2 },
];
