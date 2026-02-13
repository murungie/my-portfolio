import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { resolve } from 'path';

const siteUrl = 'https://your-domain.vercel.app';

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: siteUrl });

  sitemap.write({ url: '/', changefreq: 'monthly', priority: 1.0 });
  sitemap.write({ url: '/about', changefreq: 'monthly', priority: 0.8 });
  sitemap.write({ url: '/projects', changefreq: 'monthly', priority: 0.8 });

  sitemap.end();

  const data = await streamToPromise(sitemap);
  const path = resolve('./public/sitemap.xml');
  const writeStream = createWriteStream(path);
  writeStream.write(data.toString());
  writeStream.end();
  console.log('✅ Sitemap generated at public/sitemap.xml');
}

generateSitemap();
