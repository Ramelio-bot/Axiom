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
    title: "The 1% Rule: Professional Position Sizing Strategies",
    slug: "the-1-percent-rule",
    tag: "Risk Management",
    description: "Understanding Asymmetrical Risk and why preserving capital is the only way to achieve long-term trading success.",
    date: "April 28, 2026",
    readTime: "9 min",
    content: `
      <h3>Introduction</h3>
      <p>In the professional trading world, the <strong>1% Rule</strong> isn't just a suggestion—it's a survival protocol. Most retail traders fail not because their strategy is wrong, but because their risk management is non-existent. The core of this rule lies in understanding <strong>Asymmetrical Risk</strong>.</p>
      
      <h3>Core Concept: Asymmetrical Risk</h3>
      <p>Asymmetrical risk refers to the fact that the more capital you lose, the exponentially harder it becomes to return to break-even. This is a mathematical trap that many never escape. Consider this: if you lose 10% of your account, you need an 11.1% gain to recover. However, if you lose 50%, you need a <strong>100% gain</strong> just to get back to where you started. By limiting your risk to 1%, you ensure that even a 10-trade losing streak only results in a ~10% drawdown, which is mathematically easy to recover from.</p>
      
      <h3>Technical Application</h3>
      <p>To implement this, you must calculate your lot size for every single trade. Never use a "fixed lot" (e.g., always trading 0.10). Instead:</p>
      <ul>
        <li>Determine your <strong>Account Equity</strong>.</li>
        <li>Calculate 1% of that equity (The Dollar Risk).</li>
        <li>Measure the distance from your entry to your <strong>Technical Stop Loss</strong> in pips.</li>
        <li>Use the <strong>Axiom Position Sizer</strong> to find the exact lot size that equals that dollar risk.</li>
      </ul>
      
      <h3>Institutional Insight</h3>
      <p>Hedge funds and prop firms view risk as their primary product. They don't trade "feelings"; they trade <strong>Standardized Units of Risk</strong>. If you cannot be consistent with your risk, you cannot be consistent with your results. A trader who risks 1% on one trade and 5% on the next is statistically guaranteed to fail due to the volatility of their own equity curve.</p>
      
      <div class="mt-8 p-6 bg-emerald/5 border border-emerald/20 rounded-xl">
        <h4 class="text-emerald font-bold mb-2">Action Step</h4>
        <p>Go to the <strong>Position Sizer</strong> menu. Set your Risk to 1% and calculate your next trade. Commit to this fixed percentage for the next 30 days without exception.</p>
      </div>
    `
  },
  {
    title: "Drawdown Management: How to Recover from a Losing Streak",
    slug: "drawdown-management",
    tag: "Risk Management",
    description: "The mathematical roadmap to recovering from capital losses and the concept of the 'Stop Trading Period'.",
    date: "April 28, 2026",
    readTime: "8 min",
    content: `
      <h3>Introduction</h3>
      <p>Every professional trader will experience a <strong>Drawdown</strong>. It is not a sign of failure, but a part of the business cycle. However, how you manage that drawdown determines whether you stay in the game or go bust.</p>
      
      <h3>Core Concept: The Recovery Table</h3>
      <p>The deeper the hole, the harder the climb. Look at the <strong>Mathematics of Ruin</strong> below:</p>
      <table class="w-full text-xs mb-6 border border-white/10">
        <tr class="bg-white/5 font-bold"><td class="p-2">Loss of Capital</td><td class="p-2">Gain Required to Recover</td></tr>
        <tr><td class="p-2 text-zinc-400">10%</td><td class="p-2 text-emerald">11%</td></tr>
        <tr><td class="p-2 text-zinc-400">20%</td><td class="p-2 text-emerald">25%</td></tr>
        <tr><td class="p-2 text-zinc-400">30%</td><td class="p-2 text-emerald">43%</td></tr>
        <tr><td class="p-2 text-zinc-400">50%</td><td class="p-2 text-soft-rose">100%</td></tr>
        <tr><td class="p-2 text-zinc-400">90%</td><td class="p-2 text-soft-rose">900%</td></tr>
      </table>
      
      <h3>Technical Application: The Stop Trading Period</h3>
      <p>To prevent a spiral, you must implement a <strong>Hard Stop</strong>. Institutional protocols often dictate a "Stop Trading Period" once a specific threshold is hit (e.g., 5% weekly drawdown). During this time:</p>
      <ul>
        <li>Close all active positions.</li>
        <li>Deactivate any automated trading systems.</li>
        <li>Perform a <strong>Post-Mortem Analysis</strong>: Was the loss due to strategy failure or emotional breakdown?</li>
        <li>Only return when you have completed a mental reset.</li>
      </ul>
      
      <h3>Institutional Insight</h3>
      <p>Proprietary firms will literally lock a trader's account if they hit a <strong>Max Daily Loss</strong> limit. This isn't a punishment; it's a safety mechanism to prevent <strong>Emotional Contagion</strong>. If the pros need these rules, you do too.</p>
      
      <div class="mt-8 p-6 bg-emerald/5 border border-emerald/20 rounded-xl">
        <h4 class="text-emerald font-bold mb-2">Action Step</h4>
        <p>Define your "Hard Stop" limit now. Write it down: "If I lose X% of my account this week, I will stop trading for 48 hours."</p>
      </div>
    `
  },
  {
    title: "Correlated Risk: Why Trading EURUSD and GBPUSD Simultaneously is Dangerous",
    slug: "correlated-risk",
    tag: "Risk Management",
    description: "Identifying hidden exposures and 'Double Exposure' in the Forex market.",
    date: "April 28, 2026",
    readTime: "7 min",
    content: `
      <h3>Introduction</h3>
      <p>Diversification is the only free lunch in finance, but in Forex, many traders mistake <strong>Correlation</strong> for diversification. Opening multiple trades that move in the same direction is not diversifying—it's <strong>leveraging</strong>.</p>
      
      <h3>Core Concept: Double Exposure</h3>
      <p>Most major pairs are heavily influenced by the <strong>US Dollar (USD)</strong>. For example, EUR/USD and GBP/USD often have a correlation coefficient of 0.85 or higher. If you buy both EURUSD and GBPUSD, you aren't placing two unique trades. You are essentially placing a <strong>Double Bet</strong> against the USD. If the USD unexpectedly strengthens, both trades will likely fail, doubling your loss.</p>
      
      <h3>Technical Application</h3>
      <p>To manage correlation effectively:</p>
      <ul>
        <li>Check a <strong>Correlation Matrix</strong> weekly.</li>
        <li>If two pairs are >0.7 correlated, only trade the one with the <strong>Strongest Technical Setup</strong>.</li>
        <li>If you must trade both, split your risk (e.g., 0.5% on each) so your total exposure remains 1%.</li>
      </ul>
      
      <h3>Institutional Insight</h3>
      <p>Banks use <strong>Value at Risk (VaR)</strong> models to calculate total exposure. They look at the "Basket Risk" rather than individual trades. Professional diversification involves trading assets that are <strong>Uncorrelated</strong>, such as trading a Long Gold (Safe Haven) position alongside a Long AUD/JPY (Risk-On) position.</p>
      
      <div class="mt-8 p-6 bg-emerald/5 border border-emerald/20 rounded-xl">
        <h4 class="text-emerald font-bold mb-2">Action Step</h4>
        <p>Review your open positions. Are you "Long the Dollar" across four different pairs? If so, you have <strong>Over-Concentrated Risk</strong>. Reduce exposure immediately.</p>
      </div>
    `
  },

  // Pillar 2: Technical Analysis
  {
    title: "Intro to Smart Money Concepts (SMC) & Order Blocks",
    slug: "intro-to-smc",
    tag: "Technical Analysis",
    description: "Decoding Liquidity Grabs, BOS, and CHoCH to trade with the banks.",
    date: "April 28, 2026",
    readTime: "10 min",
    content: `
      <h3>Introduction</h3>
      <p><strong>Smart Money Concepts (SMC)</strong> is based on the premise that the market is manipulated by large institutions (Banks, Market Makers) to find liquidity. They don't trade like retail; they trade <strong>Volume</strong>.</p>
      
      <h3>Core Concept: The Liquidity Hunt</h3>
      <p>Banks need large amounts of liquidity to fill their orders. Often, this liquidity is found at <strong>Retail Stop Losses</strong> (above old highs or below old lows). An institutional trader will "Hunt" these stops to fill their massive positions before reversing the market. This is why you often see price break a level, hit your stop, and then immediately move in your predicted direction.</p>
      
      <h3>Technical Application: BOS & CHoCH</h3>
      <ul>
        <li><strong>Break of Structure (BOS):</strong> Occurs when the market continues in its current trend, breaking a previous swing high/low.</li>
        <li><strong>Change of Character (CHoCH):</strong> The first signal that a trend is reversing. It happens when price breaks the <strong>Last Valid Swing</strong> that led to the high/low.</li>
        <li><strong>Order Blocks:</strong> The "last candle" before a strong impulse move. This is where banks have left their limit orders to be filled on a retest.</li>
      </ul>
      
      <h3>Institutional Insight</h3>
      <p>Institutions look for <strong>Imbalances</strong>. They want to buy at a "Discount" and sell at a "Premium". By identifying where these whales have entered, you can stop being the <strong>Liquidity</strong> and start trading <strong>With the Liquidity</strong>.</p>
      
      <div class="mt-8 p-6 bg-emerald/5 border border-emerald/20 rounded-xl">
        <h4 class="text-emerald font-bold mb-2">Action Step</h4>
        <p>Look at your H4 chart. Find a major "V-shape" reversal. Locate the <strong>Order Block</strong> (last opposite candle) at the base. Mark it. Wait for a retest before entering.</p>
      </div>
    `
  },
  {
    title: "Fair Value Gaps (FVG): Identifying Market Imbalances",
    slug: "fair-value-gaps",
    tag: "Technical Analysis",
    description: "Why market imbalances are the 'Magnetic Zones' of price action.",
    date: "April 28, 2026",
    readTime: "8 min",
    content: `
      <h3>Introduction</h3>
      <p>A <strong>Fair Value Gap (FVG)</strong> is an area of price action where only one side of the market was represented (either only buyers or only sellers). These are also known as <strong>Inefficiencies</strong> or <strong>Imbalances</strong>.</p>
      
      <h3>Core Concept: The Fill Requirement</h3>
      <p>The market is designed to be efficient. When an aggressive move creates an FVG, it leaves a "hole" in the price action. Market participants usually return to these areas to facilitate trading and fill the missed orders. Think of an FVG as a <strong>Vacuum</strong> that price eventually gets sucked back into.</p>
      
      <h3>Technical Application: The Equilibrium Entry</h3>
      <p>Don't just enter as soon as price touches an FVG. Instead:</p>
      <ul>
        <li>Identify a large 3-candle sequence where the wicks of candle 1 and candle 3 do not overlap.</li>
        <li>The gap between them is the FVG.</li>
        <li>Measure the FVG using a Fibonacci tool.</li>
        <li>Look for entries at the <strong>50% level (Equilibrium)</strong> of the FVG. This provides a much better risk/reward ratio.</li>
      </ul>
      
      <h3>Institutional Insight</h3>
      <p>Large orders are often split. The first half creates the FVG; the second half is waiting at the <strong>Discounted Price</strong> within that gap. When you see an FVG being filled and then price reacting away, you are seeing <strong>Smart Money Mitigation</strong>.</p>
      
      <div class="mt-8 p-6 bg-emerald/5 border border-emerald/20 rounded-xl">
        <h4 class="text-emerald font-bold mb-2">Action Step</h4>
        <p>Scan your current chart for a large explosive move. Find the FVG. Set a limit order at the 50% midpoint of that gap for a high-probability re-entry.</p>
      </div>
    `
  },
  {
    title: "Multi-Timeframe Analysis: Aligning the Stars (H4 to M15)",
    slug: "multi-timeframe-analysis",
    tag: "Technical Analysis",
    description: "Mastering the Top-Down Approach to eliminate market noise.",
    date: "April 28, 2026",
    readTime: "11 min",
    content: `
      <h3>Introduction</h3>
      <p>One of the biggest mistakes traders make is trading <strong>In isolation</strong> on a single timeframe. The 15-minute chart might look bullish, but if the Daily chart is at a major resistance, that bullish move is likely a <strong>Bull Trap</strong>.</p>
      
      <h3>Core Concept: The Top-Down Approach</h3>
      <p>Market structure is fractal. What happens on the Daily chart dictates the "Directional Bias," while the smaller timeframes provide the "Execution Timing." You must align the stars across multiple layers to achieve institutional-grade accuracy.</p>
      
      <h3>Technical Application</h3>
      <ol>
        <li><strong>D1 (Daily):</strong> Identify the overall trend and major liquidity zones. Are we Bullish or Bearish?</li>
        <li><strong>H4 (4-Hour):</strong> Locate the <strong>Area of Interest (AOI)</strong>. Look for Order Blocks or FVGs within the Daily trend.</li>
        <li><strong>M15/M5 (Lower TF):</strong> This is your <strong>Sniper Entry</strong>. Look for a CHoCH (Change of Character) on the M15 once price hits your H4 AOI.</li>
      </ol>
      
      <h3>Institutional Insight</h3>
      <p>Institutional desks don't "scalp" randomly. They have a <strong>Thesis</strong> built on higher-timeframe data. By using a top-down approach, you are ensuring that the <strong>Higher Timeframe Momentum</strong> is at your back, pushing your trade toward the target.</p>
      
      <div class="mt-8 p-6 bg-emerald/5 border border-emerald/20 rounded-xl">
        <h4 class="text-emerald font-bold mb-2">Action Step</h4>
        <p>Stop trading the 5-minute chart in isolation. Before every trade, check the Daily bias. If they don't match, <strong>No Trade</strong>.</p>
      </div>
    `
  },

  // Pillar 3: Fundamentals & Macro
  {
    title: "Interest Rates: Why Central Banks Rule the Forex Market",
    slug: "interest-rates-forex",
    tag: "Fundamentals",
    description: "How Hawkish vs Dovish policies dictate the long-term flow of global capital.",
    date: "April 28, 2026",
    readTime: "10 min",
    content: `
      <h3>Introduction</h3>
      <p>In Forex, <strong>Interest Rates</strong> are the ultimate gravity. They dictate where money flows. If you understand the Central Bank, you understand the trend.</p>
      
      <h3>Core Concept: Hawkish vs Dovish</h3>
      <p>A <strong>Hawkish</strong> central bank wants to raise interest rates to fight inflation. Higher rates attract foreign investors looking for yield, which <strong>strengthens the currency</strong>. A <strong>Dovish</strong> central bank wants to lower rates to stimulate the economy, which typically <strong>weakens the currency</strong>.</p>
      
      <h3>Technical Application</h3>
      <p>Focus on the <strong>Federal Reserve (The Fed)</strong>. Because the USD is the world's reserve currency, their FOMC meetings set the tone for all major pairs. If the Fed is Hawkish (raising rates) while the ECB is Dovish (keeping rates low), the **EUR/USD** is mathematically primed for a long-term downtrend.</p>
      
      <h3>Institutional Insight</h3>
      <p>Institutions trade the <strong>Expectation</strong>, not just the news. If the market expects a 25bps hike and gets exactly that, the price might not move much (it's "priced in"). The real volatility happens during the <strong>Press Conference</strong> when the governor gives clues about <strong>Future</strong> hikes.</p>
      
      <div class="mt-8 p-6 bg-emerald/5 border border-emerald/20 rounded-xl">
        <h4 class="text-emerald font-bold mb-2">Action Step</h4>
        <p>Check the Economic Calendar for the next **Central Bank Interest Rate Decision**. Read the previous meeting minutes to see if they are trending Hawkish or Dovish.</p>
      </div>
    `
  },
  {
    title: "The DXY (US Dollar Index) Correlation with Gold (XAUUSD)",
    slug: "dxy-gold-correlation",
    tag: "Fundamentals",
    description: "The Inverted Mirror: Why Gold traders must master the Dollar Index.",
    date: "April 28, 2026",
    readTime: "8 min",
    content: `
      <h3>Introduction</h3>
      <p>Gold (XAUUSD) is the ultimate hedge against currency devaluation. However, most people forget that Gold is <strong>Priced in US Dollars</strong>. This creates a powerful, often inverted, correlation.</p>
      
      <h3>Core Concept: The Inverted Mirror</h3>
      <p>When the <strong>US Dollar Index (DXY)</strong> is strong, it takes fewer Dollars to buy an ounce of Gold, causing the price of Gold to drop. Conversely, when the Dollar is weak, Gold becomes "cheaper" for international buyers, driving the price up. They are <strong>Inversely Correlated</strong> about 80% of the time.</p>
      
      <h3>Technical Application</h3>
      <p>Never analyze Gold in a vacuum. Before taking a Long setup on Gold, look at the DXY chart:</p>
      <ul>
        <li>If Gold is at support but DXY is also at a <strong>Major Support</strong>, be careful—DXY might bounce and crush your Gold trade.</li>
        <li>The highest probability Gold trades happen when Gold is at support and DXY is at <strong>Major Resistance</strong>.</li>
      </ul>
      
      <h3>Institutional Insight</h3>
      <p>Banks use Gold as a <strong>Tier 1 Reserve Asset</strong>. When they see technical and fundamental weakness in the Dollar, they rotate billions into Gold. This "Rotation" is what drives the massive 1000+ pip trends we see on XAUUSD.</p>
      
      <div class="mt-8 p-6 bg-emerald/5 border border-emerald/20 rounded-xl">
        <h4 class="text-emerald font-bold mb-2">Action Step</h4>
        <p>Add **DXY** to your watchlist. Before your next Gold trade, verify that the DXY is not working against your directional bias.</p>
      </div>
    `
  },

  // Pillar 4: Trading Psychology
  {
    title: "Probabilistic Thinking: Accepting Loss as a Business Cost",
    slug: "probabilistic-thinking-trading",
    tag: "Psychology",
    description: "Shifting from 'Being Right' to 'Playing the Odds'.",
    date: "April 28, 2026",
    readTime: "9 min",
    content: `
      <h3>Introduction</h3>
      <p>Most traders quit because they cannot handle losing. They view a loss as a failure of their intelligence. In reality, a loss is simply a <strong>Statistical Necessity</strong>.</p>
      
      <h3>Core Concept: The Single Data Point</h3>
      <p>Professional traders think in <strong>Sample Sizes</strong>. A single trade is just one data point out of a series of one thousand trades. If your strategy has a 60% win rate, you <strong>must</strong> lose 40 times out of 100. You don't know <em>when</em> those 40 losses will occur—they might happen 10 times in a row. That doesn't mean the system is broken; it's just the distribution of probability.</p>
      
      <h3>Technical Application</h3>
      <p>To master probabilistic thinking:</p>
      <ul>
        <li>Stop checking your P&L after every trade.</li>
        <li>Only evaluate your performance after a <strong>Batch of 20 Trades</strong>.</li>
        <li>Focus on <strong>Process</strong> (did I follow the rules?) rather than <strong>Outcome</strong> (did I make money?).</li>
      </ul>
      
      <h3>Institutional Insight</h3>
      <p>Casinos don't feel "sad" when a player wins. They know that as long as they keep the players at the table, the <strong>House Edge</strong> will prevail over time. You must be the house. Your "Edge" is your strategy + your discipline.</p>
      
      <div class="mt-8 p-6 bg-emerald/5 border border-emerald/20 rounded-xl">
        <h4 class="text-emerald font-bold mb-2">Action Step</h4>
        <p>Commit to a "20-Trade Challenge". Execute 20 trades following your rules perfectly. Do not change the strategy or risk until the 20th trade is closed. <strong>Judge the results only then.</strong></p>
      </div>
    `
  },
  {
    title: "Revenge Trading: How to Stop the Cycle of Loss",
    slug: "revenge-trading-prevention",
    tag: "Psychology",
    description: "Taming the Amygdala: How to survive the emotional 'Fight or Flight' response.",
    date: "April 28, 2026",
    readTime: "8 min",
    content: `
      <h3>Introduction</h3>
      <p><strong>Revenge Trading</strong> is the single fastest way to blow a trading account. It is the impulsive urge to "get back" what the market just took. It's not a trading problem; it's a <strong>Biological Response</strong>.</p>
      
      <h3>Core Concept: The Amygdala Hijack</h3>
      <p>When you take a frustrating loss, your brain's <strong>Amygdala</strong> triggers a "Fight or Flight" response. Your prefrontal cortex (the part of the brain that does math and follows rules) literally shuts down. You are no longer a trader; you are a primal animal trying to "fight" the market. This leads to doubled position sizes, ignored stop losses, and complete account ruin.</p>
      
      <h3>Technical Application: The Step-Away Protocol</h3>
      <p>You cannot "think" your way out of an Amygdala Hijack. You must physically disrupt the environment:</p>
      <ul>
        <li><strong>Hard Limit:</strong> If you lose 2 trades in a row, close the terminal immediately.</li>
        <li><strong>Physical Movement:</strong> Go for a walk or do a high-intensity activity for 15 minutes. This flushes the cortisol from your system.</li>
        <li><strong>Terminal Lock:</strong> Use software or a cold-turkey method to prevent logging back in for at least 4 hours.</li>
      </ul>
      
      <h3>Institutional Insight</h3>
      <p>Risk managers at top firms aren't there just to check the numbers—they are there to act as the "External Prefrontal Cortex" for the traders. If they see a trader acting emotionally, they <strong>Forcibly Disable</strong> their trading permissions. Since you don't have a risk manager, you must build these systems for yourself.</p>
      
      <div class="mt-8 p-6 bg-emerald/5 border border-emerald/20 rounded-xl">
        <h4 class="text-emerald font-bold mb-2">Action Step</h4>
        <p>Identify your "Emotional Trigger" (e.g., a specific dollar loss). Create a physical rule that you will leave the room for 20 minutes as soon as that trigger is hit.</p>
      </div>
    `
  }
];
