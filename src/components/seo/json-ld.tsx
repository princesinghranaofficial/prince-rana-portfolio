import * as React from 'react';
import { siteConfig, absoluteUrl } from '@/config/site';

/**
 * Helper to safely sanitize and serialize JSON-LD script tag content.
 */
export function JsonLdScript({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  );
}

/**
 * Root WebSite Schema
 */
export function WebSiteJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.title,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: 'en-US',
    publisher: {
      '@type': 'Person',
      name: siteConfig.author.name,
      url: siteConfig.url,
    },
  };

  return <JsonLdScript data={schema} />;
}

/**
 * Professional Person Schema (Factual, zero fabricated claims)
 */
export function PersonJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.author.name,
    jobTitle: siteConfig.primaryPositioning,
    url: siteConfig.url,
    email: siteConfig.author.email,
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.twitter,
      siteConfig.social.instagram,
    ].filter(Boolean),
    knowsAbout: [
      'SaaS Architecture',
      'Artificial Intelligence Software',
      'Full-Stack Web Development',
      'Next.js',
      'TypeScript',
      'PostgreSQL',
      'Multi-tenant Database Design',
    ],
  };

  return <JsonLdScript data={schema} />;
}

/**
 * Navigational Breadcrumb Schema
 */
export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };

  return <JsonLdScript data={schema} />;
}

/**
 * Technical Service Schema
 */
export function ServiceJsonLd({
  name,
  description,
  path,
  serviceType,
}: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: absoluteUrl(path),
    serviceType: serviceType || 'Software Development',
    provider: {
      '@type': 'Person',
      name: siteConfig.author.name,
      url: siteConfig.url,
    },
  };

  return <JsonLdScript data={schema} />;
}

/**
 * Technical Article Schema for Published Insights
 */
export function ArticleJsonLd({
  headline,
  description,
  path,
  datePublished,
  dateModified,
  image,
  keywords,
}: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  keywords?: string[];
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline,
    description,
    url: absoluteUrl(path),
    datePublished,
    dateModified: dateModified || datePublished,
    inLanguage: 'en-US',
    image: image || siteConfig.defaultOgImage,
    keywords: keywords?.join(', '),
    author: {
      '@type': 'Person',
      name: siteConfig.author.name,
      url: siteConfig.url,
    },
    publisher: {
      '@type': 'Person',
      name: siteConfig.author.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': absoluteUrl(path),
    },
  };

  return <JsonLdScript data={schema} />;
}

/**
 * Factual SoftwareApplication Schema for Real Production Case Studies
 */
export function SoftwareApplicationJsonLd({
  name,
  description,
  path,
  applicationCategory = 'BusinessApplication',
  operatingSystem = 'Web Browser',
  image,
}: {
  name: string;
  description: string;
  path: string;
  applicationCategory?: string;
  operatingSystem?: string;
  image?: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    description,
    url: absoluteUrl(path),
    applicationCategory,
    operatingSystem,
    image: image || siteConfig.defaultOgImage,
    author: {
      '@type': 'Person',
      name: siteConfig.author.name,
      url: siteConfig.url,
    },
  };

  return <JsonLdScript data={schema} />;
}
