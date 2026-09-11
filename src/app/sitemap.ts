import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { insightsData } from '@/data/insights';
import { servicesData } from '@/data/services';
import { labProjects } from '@/data/lab-projects';
import { projectsData } from '@/data/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url.replace(/\/+$/, '');

  // 1. Static core routes
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}`, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/work`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/work/collectai`, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${baseUrl}/work/ai-cfo-copilot`, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${baseUrl}/lab`, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/services`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/about`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/process`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/insights`, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/start-project`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/book`, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/contact`, changeFrequency: 'monthly', priority: 0.8 },
  ];

  // 2. Project case study detail routes
  const workRoutes: MetadataRoute.Sitemap = projectsData
    .filter((p) => p.slug !== 'collectai' && p.slug !== 'ai-cfo' && p.slug !== 'ai-cfo-copilot')
    .map((p) => ({
      url: `${baseUrl}/work/${p.slug}`,
      changeFrequency: 'monthly',
      priority: 0.85,
    }));

  // 3. Service detail routes
  const serviceRoutes: MetadataRoute.Sitemap = servicesData.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  // 4. Product Lab architectural concept routes
  const labRoutes: MetadataRoute.Sitemap = labProjects.map((p) => ({
    url: `${baseUrl}/lab/${p.slug}`,
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  // 5. Published insight articles with genuine publication/update timestamps
  const publishedInsights: MetadataRoute.Sitemap = insightsData
    .filter((a) => a.status === 'published')
    .map((a) => ({
      url: `${baseUrl}/insights/${a.slug}`,
      lastModified: new Date(a.updatedAt || a.publishedAt),
      changeFrequency: 'monthly',
      priority: a.featured ? 0.9 : 0.8,
    }));

  return [...staticRoutes, ...workRoutes, ...serviceRoutes, ...labRoutes, ...publishedInsights];
}
