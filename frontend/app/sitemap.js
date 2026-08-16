import { clientConfig } from '@/lib/config';

export const dynamic = 'force-static';

export default async function sitemap() {
  const baseUrl = clientConfig.url || 'https://vrtans.com';
  
  // Static Routes
  const routes = ['', '/about', '/our-solutions', '/contact'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  // You can optionally fetch dynamic services here and add them to the sitemap
  // For now we will return the primary routes
  return [...routes];
}
