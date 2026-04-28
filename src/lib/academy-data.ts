export interface AcademyArticle {
  title: string;
  slug: string;
  tag: string;
  description: string;
  date: string;
  readTime: string;
  content: string;
}

export const ACADEMY_ARTICLES: AcademyArticle[] = [
  // Pillar 1: Risk Management
  {
    title: "Drawdown Management: How to Recover from a Losing Streak",
    slug: "drawdown-management",
    tag: "Risk Management",
    description: "The mathematical and psychological roadmap to recovering from capital losses without risking total ruin.",
    date: "April 28, 2026",
    readTime: "7 min",
    content: "<h2>The Math of Recovery</h2><p>Drawdown is an inevitable part of trading. However, recovering from it requires more than just winning trades—it requires a mathematical shift. A 10% loss requires an 11% gain to break even, but a 50% loss requires a 100% gain.</p><h3>The Strategy</h3><ul><li><strong>Reduce Position Size:</strong> Cut your risk in half until you regain your peak equity.</li><li><strong>Filter for Quality:</strong> Take only A+ setups during a drawdown phase.</li><li><strong>Emotional Reset:</strong> Step away from the terminal if the losing streak is affecting your decision-making.</li></ul>"
  },
  {
    title: "The Math of Leverage: Why 1:500 is a Double-Edged Sword",
    slug: "math-of-leverage",
    tag: "Risk Management",
    description: "Understanding how leverage amplifies both gains and losses, and why institutional traders rarely use it to the max.",
    date: "April 28, 2026",
    readTime: "6 min",
    content: "<h2>Power and Peril</h2><p>Leverage is the ability to control large positions with a small amount of capital. While 1:500 sounds attractive, it means a small market move can either double your account or wipe it out.</p><h3>Institutional vs Retail</h3><p>Professional hedge funds rarely use leverage above 1:10. They prioritize capital preservation. Retail traders often use excessive leverage to 'get rich quick', which is the fastest way to hit a margin call.</p>"
  },
  {
    title: "Position Sizing for Small Accounts ($100 to $1000)",
    slug: "small-account-position-sizing",
    tag: "Risk Management",
    description: "Specific strategies for managing risk when your margin for error is extremely thin.",
    date: "April 28, 2026",
    readTime: "5 min",
    content: "<h2>Micro-Lot Precision</h2><p>Trading a $100 account requires extreme discipline. You cannot afford to risk $10 per trade (10%), as ten losses will destroy you.</p><h3>The Solution</h3><ul><li><strong>Micro Lots (0.01):</strong> Always use the smallest volume possible.</li><li><strong>Fixed Ratio Sizing:</strong> Only increase your lot size once you have doubled your initial capital.</li><li><strong>Focus on Pips, not Dollars:</strong> Grade your performance by points gained, not the small dollar amounts.</li></ul>"
  },
  {
    title: "Correlated Risk: Why Trading EURUSD and GBPUSD Simultaneously is Dangerous",
    slug: "correlated-risk",
    tag: "Risk Management",
    description: "Identifying hidden exposures when trading assets that move in lockstep with each other.",
    date: "April 28, 2026",
    readTime: "8 min",
    content: "<h2>The Illusion of Diversification</h2><p>EURUSD and GBPUSD often have a 0.8+ correlation. If you risk 1% on each, you are essentially risking 2% on the US Dollar. If the Dollar moves against you, both trades will hit their stop losses simultaneously.</p><h3>Risk Protocol</h3><p>Always check a correlation matrix before opening multiple positions. If two pairs are highly correlated, either pick the strongest setup or split your 1% risk between both.</p>"
  },
  {
    title: "Setting Stop Losses Based on Volatility (ATR Method)",
    slug: "atr-stop-loss",
    tag: "Risk Management",
    description: "Using the Average True Range indicator to place stops that breathe with the market's natural rhythm.",
    date: "April 28, 2026",
    readTime: "6 min",
    content: "<h2>Adaptive Risk</h2><p>Static stop losses (e.g., always 20 pips) fail because market volatility is constant. During high-volatility sessions, 20 pips is too tight; during low-volatility, it's too wide.</p><h3>The ATR Approach</h3><p>Set your stop loss at 1.5x or 2x the current ATR. This ensures your stop is outside the 'market noise' and only gets hit if the actual trend changes.</p>"
  },
  {
    title: "Equity Curve: Tracking Your Progress Like a Hedge Fund",
    slug: "equity-curve-tracking",
    tag: "Risk Management",
    description: "Visualizing your trading performance to identify patterns of success and periods of over-trading.",
    date: "April 28, 2026",
    readTime: "7 min",
    content: "<h2>Beyond the P&L</h2><p>An equity curve is a graphical representation of your account balance over time. A smooth, upward-sloping curve indicates consistency. A jagged curve with massive spikes indicates excessive risk-taking.</p><h3>Performance KPIs</h3><ul><li><strong>Max Drawdown:</strong> The deepest valley in your curve.</li><li><strong>Sharpe Ratio:</strong> Your risk-adjusted return.</li><li><strong>Recovery Factor:</strong> How fast you bounce back from losses.</li></ul>"
  },

  // Pillar 2: Technical Analysis
  {
    title: "Supply & Demand vs. Support & Resistance: The Key Differences",
    slug: "supply-demand-vs-support-resistance",
    tag: "Technical Analysis",
    description: "Decoding the psychological zones where institutional orders are truly waiting.",
    date: "April 28, 2026",
    readTime: "9 min",
    content: "<h2>Market Mechanics</h2><p>Support and Resistance are often areas where price has touched multiple times. Supply and Demand zones are where price moved away aggressively, indicating an imbalance of orders.</p><h3>The Difference</h3><p>Support/Resistance are 'floors' and 'ceilings'. Supply/Demand are 'springs' and 'traps'. Institutional traders look for zones that haven't been tested yet—these are the fresh supply/demand areas.</p>"
  },
  {
    title: "Mastering Candlestick Anatomy: Beyond Just Hammers and Dojis",
    slug: "candlestick-anatomy",
    tag: "Technical Analysis",
    description: "Understanding the story behind the wick and the body to predict the next market move.",
    date: "April 28, 2026",
    readTime: "6 min",
    content: "<h2>The Story of Price</h2><p>A candlestick is more than just a shape. It's a battle report between buyers and sellers. Long wicks indicate rejection; large bodies indicate momentum.</p><h3>Key Formations</h3><ul><li><strong>Engulfing:</strong> Complete reversal of sentiment.</li><li><strong>Pin Bar:</strong> Strong rejection of a price level.</li><li><strong>Inside Bar:</strong> Market indecision and impending breakout.</li></ul>"
  },
  {
    title: "Moving Averages: Finding the Dynamic Value in Trends",
    slug: "moving-averages-trends",
    tag: "Technical Analysis",
    description: "How to use EMAs and SMAs to identify trend strength and potential mean reversion zones.",
    date: "April 28, 2026",
    readTime: "7 min",
    content: "<h2>Dynamic Support</h2><p>Moving averages are 'rolling averages' of price. They act as dynamic support/resistance that moves with the trend.</p><h3>Institutional Standards</h3><ul><li><strong>20 EMA:</strong> Short-term momentum.</li><li><strong>50 EMA:</strong> Mid-term trend health.</li><li><strong>200 SMA:</strong> The ultimate filter for bull vs bear markets.</li></ul>"
  },
  {
    title: "RSI Divergence: Identifying Reversals Before They Happen",
    slug: "rsi-divergence",
    tag: "Technical Analysis",
    description: "Spotting the exhaustion in momentum that signals a major trend change.",
    date: "April 28, 2026",
    readTime: "8 min",
    content: "<h2>Hidden Weakness</h2><p>Divergence occurs when price makes a new high/low, but the RSI indicator fails to do so. This signals that the trend is losing steam despite the price movement.</p><h3>Regular vs Hidden</h3><ul><li><strong>Regular:</strong> Signals a potential reversal.</li><li><strong>Hidden:</strong> Signals a potential trend continuation.</li></ul>"
  },
  {
    title: "Fibonacci Retracement: Trading the Golden Pocket",
    slug: "fibonacci-golden-pocket",
    tag: "Technical Analysis",
    description: "Using the mathematical ratios of the universe to find precise entry points in a trending market.",
    date: "April 28, 2026",
    readTime: "6 min",
    content: "<h2>Nature's Ratio</h2><p>Fibonacci levels are based on mathematical sequences found throughout nature. In trading, they identify key areas where a correction is likely to end.</p><h3>The Golden Pocket</h3><p>The area between the 61.8% and 78.6% levels is known as the Golden Pocket. This is the highest probability zone for trend resumption.</p>"
  },
  {
    title: "Multi-Timeframe Analysis: Aligning the Stars (H4 to M15)",
    slug: "multi-timeframe-analysis",
    tag: "Technical Analysis",
    description: "The 'Top-Down' approach to ensuring your entries are backed by higher-timeframe momentum.",
    date: "April 28, 2026",
    readTime: "10 min",
    content: "<h2>The Eagle and the Sniper</h2><p>Higher timeframes (Daily/H4) show the 'Big Picture' (Eagle View). Lower timeframes (M15/M5) show the 'Entry Point' (Sniper View).</p><h3>The Protocol</h3><ol><li>Identify Trend on Daily/H4.</li><li>Wait for Retracement on H1.</li><li>Enter on M15 when momentum aligns with the H4 trend.</li></ol>"
  },
  {
    title: "Intro to Smart Money Concepts (SMC) & Order Blocks",
    slug: "intro-to-smc",
    tag: "Technical Analysis",
    description: "Trading like the banks by identifying where institutional orders are 'banked' in the market.",
    date: "April 28, 2026",
    readTime: "9 min",
    content: "<h2>Tracking the Whales</h2><p>SMC assumes that 'Big Money' (Banks/Institutions) move the market. Order Blocks are areas where banks have left their limit orders to be filled.</p><h3>Key Concepts</h3><ul><li><strong>Break of Structure (BOS):</strong> Confirmation of trend shift.</li><li><strong>Change of Character (CHoCH):</strong> Early signal of a reversal.</li><li><strong>Liquidity Sweeps:</strong> When banks 'hunt' retail stops to fill their positions.</li></ul>"
  },
  {
    title: "Fair Value Gaps (FVG): Identifying Market Imbalances",
    slug: "fair-value-gaps",
    tag: "Technical Analysis",
    description: "Spotting the holes in price action where liquidity was skipped and must eventually be filled.",
    date: "April 28, 2026",
    readTime: "7 min",
    content: "<h2>The Market's Memory</h2><p>An FVG occurs when price moves so fast that it creates an imbalance. The market tends to 'revisit' these areas to facilitate efficient trading.</p><h3>Trading the Gap</h3><p>Price often returns to fill at least 50% (Consequent Encroachment) of the FVG before continuing its original move.</p>"
  },

  // Pillar 3: Fundamentals & Macro
  {
    title: "Non-Farm Payrolls (NFP): A Trader’s Guide to the First Friday",
    slug: "nfp-trading-guide",
    tag: "Fundamentals",
    description: "Navigating the most volatile economic event in the monthly trading calendar.",
    date: "April 28, 2026",
    readTime: "8 min",
    content: "<h2>The King of Volatility</h2><p>NFP reports the change in the number of employed people in the US (excluding the farming industry). It is the most watched data point by the Federal Reserve.</p><h3>The Reaction</h3><p>If the number is much higher than expected, the USD typically surges. If lower, it drops. The 'whipsaw' in the first 15 minutes is dangerous—professionals often wait for the '30-minute retrace' to enter.</p>"
  },
  {
    title: "Interest Rates: Why Central Banks Rule the Forex Market",
    slug: "interest-rates-forex",
    tag: "Fundamentals",
    description: "The primary driver of currency value: why money flows toward higher interest rates.",
    date: "April 28, 2026",
    readTime: "10 min",
    content: "<h2>Follow the Yield</h2><p>Currencies are effectively the 'shares' of a country. The interest rate is the 'dividend'. Investors move capital to countries with higher interest rates (Carry Trade).</p><h3>Central Bank Meetings</h3><p>The FOMC (Fed), ECB, and BoE meetings are the most critical dates on your calendar. Their tone (Hawkish vs Dovish) dictates long-term trends.</p>"
  },
  {
    title: "CPI & Inflation: The New Driver of Market Volatility",
    slug: "cpi-inflation-volatility",
    tag: "Fundamentals",
    description: "Understanding how consumer price data forces central banks to act and move markets.",
    date: "April 28, 2026",
    readTime: "7 min",
    content: "<h2>Purchasing Power</h2><p>Consumer Price Index (CPI) measures the average change over time in the prices paid by consumers. High inflation forces central banks to raise interest rates, strengthening the currency.</p><h3>Modern Context</h3><p>In the post-2020 era, CPI releases have become more volatile than NFP, as the focus has shifted entirely to inflation control.</p>"
  },
  {
    title: "The DXY (US Dollar Index) Correlation with Gold (XAUUSD)",
    slug: "dxy-gold-correlation",
    tag: "Fundamentals",
    description: "Why the 'Inverted Mirror' relationship between Gold and the Dollar is the trader's best friend.",
    date: "April 28, 2026",
    readTime: "6 min",
    content: "<h2>The Dollar's Rival</h2><p>Gold is priced in Dollars. When the DXY (Dollar Index) rises, Gold typically falls (it takes more Dollars to buy the same ounce of Gold). When DXY drops, Gold surges.</p><h3>Trading Strategy</h3><p>Always have a DXY chart open when trading XAUUSD. If DXY hits a major resistance level, it's often a signal that Gold is about to bottom out.</p>"
  },
  {
    title: "Safe Haven Assets: Trading Gold During Geopolitical Turmoil",
    slug: "gold-safe-haven",
    tag: "Fundamentals",
    description: "How Gold acts as the ultimate insurance policy during wars, crises, and economic uncertainty.",
    date: "April 28, 2026",
    readTime: "8 min",
    content: "<h2>Fear Premium</h2><p>During times of war or financial instability, investors flee 'risky' assets (Stocks/Currencies) and buy 'safe' assets. Gold is the world's oldest safe haven.</p><h3>The Sentiment Shift</h3><p>Technical analysis often breaks down during geopolitical shocks. In these moments, sentiment and 'flight to safety' are the only drivers that matter.</p>"
  },
  {
    title: "Economic Calendar Mastery: Filtering High-Impact News",
    slug: "economic-calendar-mastery",
    tag: "Fundamentals",
    description: "A professional protocol for planning your week around market-moving data releases.",
    date: "April 28, 2026",
    readTime: "5 min",
    content: "<h2>Plan Your Attack</h2><p>A professional trader never gets 'surprised' by a news release. They know every high-impact event (Red Folders) for the week ahead.</p><h3>Filtering Protocol</h3><ul><li><strong>Tier 1:</strong> NFP, CPI, Interest Rate Decisions.</li><li><strong>Tier 2:</strong> Retail Sales, GDP, PMI.</li><li><strong>Tier 3:</strong> Speeches and low-impact data.</li></ul>"
  },

  // Pillar 4: Trading Psychology
  {
    title: "The FOMO Trap: Why You Shouldn't Chase the Candle",
    slug: "fomo-trap-psychology",
    tag: "Psychology",
    description: "Overcoming the 'Fear Of Missing Out' that leads to poor entries and excessive risk.",
    date: "April 28, 2026",
    readTime: "7 min",
    content: "<h2>Chasing the Ghost</h2><p>FOMO is the feeling that a big move is happening without you. It leads to 'panic buying' at the top or 'panic selling' at the bottom.</p><h3>The Antidote</h3><p>Remember: The market is open tomorrow. There is always another setup. If you missed the entry, let it go. Chasing a move is a high-risk, low-reward gamble.</p>"
  },
  {
    title: "Revenge Trading: How to Stop the Cycle of Loss",
    slug: "revenge-trading-prevention",
    tag: "Psychology",
    description: "Identifying the emotional urge to 'get it back' and how it destroys trading accounts.",
    date: "April 28, 2026",
    readTime: "6 min",
    content: "<h2>The Internal War</h2><p>Revenge trading happens after a frustrating loss. You feel the market 'stole' your money and you want it back immediately. This leads to doubling down and ignoring your plan.</p><h3>The Reset</h3><p>If you feel anger after a loss, close the terminal. Go for a walk. The market doesn't know you exist and doesn't 'owe' you anything.</p>"
  },
  {
    title: "Trading Discipline: Creating and Sticking to a Rule-Based System",
    slug: "trading-discipline-rules",
    tag: "Psychology",
    description: "Why a 50% strategy with 100% discipline beats a 90% strategy with 0% discipline.",
    date: "April 28, 2026",
    readTime: "8 min",
    content: "<h2>The Soldier's Mindset</h2><p>Discipline is the bridge between goals and accomplishment. In trading, it means following your rules even when it's boring or when it's scary.</p><h3>Building Rules</h3><ul><li>Entry Criteria (A, B, C).</li><li>Exit Criteria (Stop Loss/Take Profit).</li><li>Risk Limit (1% per trade).</li><li>Daily Loss Limit (Stop after 3 losses).</li></ul>"
  },
  {
    title: "The Importance of a Trading Journal: Turning Data into Profit",
    slug: "trading-journal-importance",
    tag: "Psychology",
    description: "The secret weapon of professional traders: treating your trading like a business.",
    date: "April 28, 2026",
    readTime: "9 min",
    content: "<h2>The Mirror of Truth</h2><p>A journal doesn't lie. It shows you exactly where you're failing and where you're winning. Most traders repeat the same mistakes for years because they don't track them.</p><h3>What to Log</h3><ul><li>Screenshot of Entry/Exit.</li><li>The Rationale (Why?).</li><li>The Emotion (How did you feel?).</li><li>The Outcome (Result).</li></ul>"
  },
  {
    title: "Probabilistic Thinking: Accepting Loss as a Business Cost",
    slug: "probabilistic-thinking-trading",
    tag: "Psychology",
    description: "Shifting your mindset from 'Being Right' to 'Being Profitable' over a large sample of trades.",
    date: "April 28, 2026",
    readTime: "10 min",
    content: "<h2>The Casino's Advantage</h2><p>A casino doesn't worry when one player wins big. They know that over 10,000 bets, the math is in their favor. You must think like the house.</p><h3>Large Sample Size</h3><p>One trade means nothing. Your results are only valid over a sample of 20, 50, or 100 trades. Accept the individual loss as the 'cost of doing business'.</p>"
  },
];
