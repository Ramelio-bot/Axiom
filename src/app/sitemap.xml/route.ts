import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://axiom-peach.vercel.app';
  
  const coreRoutes = [
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
  ];

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
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${coreRoutes.map(route => `
  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${route === '' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${route === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('')}
  ${articles.map(slug => `
  <url>
    <loc>${baseUrl}/academy/${slug}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate',
    },
  });
}
