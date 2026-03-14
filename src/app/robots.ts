import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/success/', '/cancel/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/success/', '/cancel/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/success/', '/cancel/'],
      },
    ],
    sitemap: 'https://compress.artevotade.com/sitemap.xml',
    host: 'https://compress.artevotade.com',
  };
}
