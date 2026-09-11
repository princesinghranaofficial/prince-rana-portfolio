/**
 * Centralized Site Configuration & SEO Identity
 * Source of truth for production origin, metadata, social profiles, and positioning.
 * Enforces single canonical origin without hardcoded local or preview hosts.
 */

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://princesinghrana.in').replace(/\/+$/, '');
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-B9PXN9Y57P';

export const siteConfig = {
  name: 'Prince Rana',
  professionalName: 'Prince Rana',
  title: 'Prince Rana — SaaS Developer & AI Automation Developer',
  shortTitle: 'Prince Rana',
  tagline: 'Building production-ready SaaS products and AI automation systems.',
  description:
    'Prince Rana is a SaaS developer and AI automation developer building production-ready web applications, multi-tenant platforms, and intelligent AI workflows with Next.js, TypeScript, and Supabase.',
  url: SITE_URL,
  gaMeasurementId: GA_MEASUREMENT_ID,
  locale: 'en_US',
  author: {
    name: 'Prince Rana',
    url: SITE_URL,
    email: 'princesinghranaofficial@gmail.com',
    role: 'SaaS Developer & AI Automation Developer',
  },
  social: {
    github: 'https://github.com/princesinghranaofficial',
    linkedin: 'https://www.linkedin.com/in/prince-kumar-b2053a200/',
    twitter: 'https://x.com/SinghRana86251',
    twitterHandle: '@SinghRana86251',
    instagram: 'https://www.instagram.com/itprince.ai?stkn=MWVrMzE2cWc0dXp2OA==',
  },
  primaryPositioning: 'SaaS Developer & AI Automation Developer',
  defaultOgImage: `${SITE_URL}/og-image.png`,
  keywords: [
    'Prince Rana',
    'SaaS developer',
    'AI automation developer',
    'Full-stack developer',
    'Next.js developer',
    'AI agent developer',
    'Supabase developer',
    'React developer',
    'TypeScript engineer',
    'Web application developer',
    'B2B SaaS development',
    'PostgreSQL RLS architecture',
  ],
} as const;

/**
 * Returns an absolute URL using the canonical site origin.
 * Automatically cleans leading and trailing duplicate slashes.
 */
export function absoluteUrl(path = ''): string {
  const cleanBase = siteConfig.url.replace(/\/+$/, '');
  const cleanPath = path ? (path.startsWith('/') ? path : `/${path}`) : '';
  return `${cleanBase}${cleanPath}`;
}

/**
 * Checks if the current deployment is an indexable production environment.
 * Prevents preview and staging builds from competing in search indexes.
 */
export function isProductionEnvironment(): boolean {
  return process.env.NODE_ENV === 'production';
}
