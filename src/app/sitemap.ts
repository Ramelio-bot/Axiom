import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://axiom-peach.vercel.app';
  
  // Core routes
  const routes = [
    '',
    '/dashboard',
    '/position-sizer',
    '/pip-value',
    '/market-clock',
    '/academy',
    '/academy/glossary',
    '/settings',
    '/disclaimer',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : route.startsWith('/academy') ? 0.9 : 0.8,
  }));

  // Academy Articles (25 articles)
  const articles = [
    'drawdown-management',
    'math-of-leverage',
    'small-account-position-sizing',
    'correlated-risk',
    'atr-stop-loss',
    'equity-curve-tracking',
    'supply-demand-vs-support-resistance',
    'candlestick-anatomy',
    'moving-averages-trends',
    'rsi-divergence',
    'fibonacci-golden-pocket',
    'multi-timeframe-analysis',
    'intro-to-smc',
    'fair-value-gaps',
    'nfp-trading-guide',
    'interest-rates-forex',
    'cpi-inflation-volatility',
    'dxy-gold-correlation',
    'gold-safe-haven',
    'economic-calendar-mastery',
    'fomo-trap-psychology',
    'revenge-trading-prevention',
    'trading-discipline-rules',
    'trading-journal-importance',
    'probabilistic-thinking-trading',
  ].map((slug) => ({
    url: `${baseUrl}/academy/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...routes, ...articles];
}
