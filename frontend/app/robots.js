export const dynamic = 'force-static';

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/api/admin/'],
    },
    sitemap: `${process.env.NEXT_PUBLIC_API_URL || 'https://vrtans.com'}/sitemap.xml`,
  };
}
