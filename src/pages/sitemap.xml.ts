import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const paths = Object.keys(import.meta.glob('./*.astro'))
    .map((f) => f.replace('./', '').replace('.astro', ''))
    .map((n) => (n === 'index' ? '' : n));
  const urls = paths
    .map((p) => `  <url><loc>${new URL(p, site).href}</loc></url>`)
    .join('\n');
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
