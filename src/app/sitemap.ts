import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { insightsData } from '@/data/insights';
import { servicesData } from '@/data/services';
import { labProjects } from '@/data/lab-projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url.replace(/\/+$/, '');
  // Stable baseline date for core static pages
  const staticLastModified = new Date('2026-03-01T00:00:00.000Z');

  // 1. Static core routes
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}`, lastModified: staticLastModified, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/work`, lastModified: staticLastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/work/collectai`, lastModified: new Date('2025-02-20T00:00:00.000Z'), changeFrequency: 'monthly', priority: 0.95 },
    { url: `${baseUrl}/work/ai-cfo-copilot`, lastModified: new Date('2025-02-25T00:00:00.000Z'), changeFrequency: 'monthly', priority: 0.95 },
    { url: `${baseUrl}/lab`, lastModified: staticLastModified, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/services`, lastModified: staticLastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: staticLastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/process`, lastModified: staticLastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/insights`, lastModified: staticLastModified, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/start-project`, lastModified: staticLastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/book`, lastModified: staticLastModified, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/contact`, lastModified: staticLastModified, changeFrequency: 'monthly', priority: 0.8 },
  ];

  // 2. Service detail routes
  const serviceRoutes: MetadataRoute.Sitemap = servicesData.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: staticLastModified,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  // 3. Product Lab architectural concept routes (all 15 substantive concepts)
  const labRoutes: MetadataRoute.Sitemap = labProjects.map((p) => ({
    url: `${baseUrl}/lab/${p.slug}`,
    lastModified: staticLastModified,
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  // 4. Published insight articles only (draft articles strictly excluded)
  const publishedInsights: MetadataRoute.Sitemap = insightsData
    .filter((a) => a.status === 'published')
    .map((a) => ({
      url: `${baseUrl}/insights/${a.slug}`,
      lastModified: new Date(a.updatedAt || a.publishedAt),
      changeFrequency: 'monthly',
      priority: a.featured ? 0.9 : 0.8,
    }));

  return [...staticRoutes, ...serviceRoutes, ...labRoutes, ...publishedInsights];
}
