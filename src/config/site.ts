/**
 * Centralized Site Configuration & SEO Identity
 * Source of truth for production origin, metadata, social profiles, and positioning.
 * Enforces single canonical origin without hardcoded local or preview hosts.
 */

export const siteConfig = {
  name: 'Prince Singh Rana',
  professionalName: 'Prince Singh Rana',
  title: 'Prince Singh Rana — Full-Stack SaaS & AI Product Developer',
  shortTitle: 'Prince Singh Rana',
  tagline: 'Building SaaS products people want to use.',
  description:
    'Full-stack developer engineering production-ready SaaS platforms, AI copilots, and high-performance web software for startups and ambitious businesses.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://princesinghrana.online',
  locale: 'en_US',
  author: {
    name: 'Prince Singh Rana',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://princesinghrana.online',
    email: 'princesinghranaofficial@gmail.com',
    role: 'Full-Stack SaaS & AI Product Developer',
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/prince-kumar-b2053a200/',
    twitter: 'https://x.com/SinghRana86251',
    twitterHandle: '@SinghRana86251',
    instagram: 'https://www.instagram.com/itprince.ai?stkn=MWVrMzE2cWc0dXp2OA==',
  },
  primaryPositioning: 'Full-Stack SaaS & AI Product Developer',
  defaultOgImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
  keywords: [
    'SaaS developer',
    'AI SaaS developer',
    'Full-stack developer',
    'Full-stack SaaS developer',
    'SaaS MVP developer',
    'Next.js SaaS developer',
    'Supabase developer',
    'AI product developer',
    'B2B SaaS development',
    'PostgreSQL RLS architecture',
    'TypeScript engineer',
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
