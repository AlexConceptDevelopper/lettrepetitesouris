import fs from 'fs';
import path from 'path';

const DOMAIN = 'https://www.lettrepetitesouris.fr';
const today = new Date().toISOString().split('T')[0];

const staticPages = [
  { route: '', changefreq: 'weekly', priority: '1.0' },
  { route: '/success', changefreq: 'monthly', priority: '0.3' },
  { route: '/cancel', changefreq: 'yearly', priority: '0.1' },
  { route: '/faq', changefreq: 'monthly', priority: '0.6' },
  { route: '/mentions-legales', changefreq: 'yearly', priority: '0.2' },
  { route: '/cgv', changefreq: 'yearly', priority: '0.2' },
  { route: '/confidentialite', changefreq: 'yearly', priority: '0.2' },
  { route: '/contact', changefreq: 'monthly', priority: '0.4' },
  { route: '/blog', changefreq: 'weekly', priority: '0.8' },
];

function generateSitemap() {
  // 1. Scanner le dossier src/articles en ignorant index.ts
  const articlesDir = path.resolve('src/articles');
  let articleSlugs = [];

  if (fs.existsSync(articlesDir)) {
    const files = fs.readdirSync(articlesDir);
    articleSlugs = files
      .filter((file) => (file.endsWith('.tsx') || file.endsWith('.ts')) && file !== 'index.ts')
      .map((file) => file.replace(/\.(tsx|ts)$/, ''));
  }

  // 2. Construction du fichier XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">

  <!-- Pages statiques -->
  ${staticPages
    .map(
      (p) => `
  <url>
    <loc>${DOMAIN}${p.route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
    )
    .join('')}

  <!-- Articles détectés automatiquement (hors index.ts) -->
  ${articleSlugs
    .map(
      (slug) => `
  <url>
    <loc>${DOMAIN}/blog/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
    )
    .join('')}

</urlset>`;

  // 3. Écriture dans le dossier public
  const publicDir = path.resolve('public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const targetPath = path.join(publicDir, 'sitemap.xml');
  fs.writeFileSync(targetPath, sitemap.trim());
  console.log(`✅ Sitemap généré avec succès ! ${articleSlugs.length} article(s) détecté(s).`);
}

generateSitemap();