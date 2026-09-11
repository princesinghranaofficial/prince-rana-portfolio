import { MetadataRoute } from 'next';
import { siteConfig, isProductionEnvironment } from '@/config/site';

export default function robots(): MetadataRoute.Robots {
  const isProd = isProductionEnvironment();

  // Protect preview / staging deployments from duplicate indexing
  if (!isProd) {
    return {
      rules: [
        {
          userAgent: '*',
          disallow: '/',
        },
      ],
    };
  }

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/design-system', '/api/'],
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
