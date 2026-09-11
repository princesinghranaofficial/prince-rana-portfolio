import * as React from 'react';
import { siteConfig, absoluteUrl } from '@/config/site';

/**
 * Helper to safely sanitize and serialize JSON-LD script tag content.
 * Replaces '<' with unicode escape to prevent XSS and script breakout.
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
 * Identifies the portfolio website with stable @id and links publisher to the Person entity.
 */
export function WebSiteJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    name: `${siteConfig.name} Portfolio`,
    alternateName: siteConfig.title,
    url: `${siteConfig.url}/`,
    description: siteConfig.description,
    inLanguage: 'en-US',
    publisher: {
      '@type': 'Person',
      '@id': `${siteConfig.url}/#person`,
      name: siteConfig.author.name,
      url: `${siteConfig.url}/`,
    },
  };

  return <JsonLdScript data={schema} />;
}

/**
 * Professional Person Schema
 * Canonical entity representing portfolio owner Prince Singh Rana.
 * Strictly uses factual, repo-supported properties with zero fabricated claims.
 */
export function PersonJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteConfig.url}/#person`,
    name: siteConfig.author.name,
    alternateName: 'Prince Rana',
    jobTitle: siteConfig.primaryPositioning,
    description: siteConfig.description,
    url: `${siteConfig.url}/`,
    email: `mailto:${siteConfig.author.email}`,
    image: siteConfig.defaultOgImage,
    sameAs: [
      siteConfig.social.github,
      siteConfig.social.linkedin,
      siteConfig.social.twitter,
      siteConfig.social.instagram,
    ].filter(Boolean),
    knowsAbout: [
      'SaaS Architecture',
      'Full-Stack Web Development',
      'Artificial Intelligence Software',
      'Next.js',
      'React',
      'TypeScript',
      'PostgreSQL',
      'Supabase',
      'Multi-tenant Database Design',
    ],
  };

  return <JsonLdScript data={schema} />;
}

/**
 * ProfilePage Schema for /about
 * Establishes explicit ProfilePage -> mainEntity -> Person (#person) relationship.
 */
export function ProfilePageJsonLd() {
  const pageUrl = absoluteUrl('/about');
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${pageUrl}#profilepage`,
    url: pageUrl,
    name: `About ${siteConfig.author.name} — ${siteConfig.primaryPositioning}`,
    description:
      'Full-Stack SaaS and AI product developer turning complex product ideas into clear, usable, and production-minded software.',
    isPartOf: {
      '@id': `${siteConfig.url}/#website`,
    },
    mainEntity: {
      '@id': `${siteConfig.url}/#person`,
    },
    breadcrumb: {
      '@id': `${pageUrl}#breadcrumb`,
    },
  };

  return <JsonLdScript data={schema} />;
}

/**
 * Navigational Breadcrumb Schema
 * 1-indexed sequential breadcrumbs using canonical URLs.
 */
export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  const currentPath = items[items.length - 1]?.path || '';
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${absoluteUrl(currentPath)}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.path === '/' ? `${siteConfig.url}/` : absoluteUrl(item.path),
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
  const pageUrl = absoluteUrl(path);
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${pageUrl}#service`,
    name,
    description,
    url: pageUrl,
    serviceType: serviceType || 'Software Development',
    provider: {
      '@type': 'Person',
      '@id': `${siteConfig.url}/#person`,
      name: siteConfig.author.name,
      url: `${siteConfig.url}/`,
    },
  };

  return <JsonLdScript data={schema} />;
}

/**
 * Technical Article Schema for Published Insights
 * Compliant with Google Search Article Rich Results requirements.
 * References canonical Person (#person) for author and publisher.
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
  const pageUrl = absoluteUrl(path);
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${pageUrl}#article`,
    headline,
    description,
    url: pageUrl,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': pageUrl,
    },
    datePublished,
    inLanguage: 'en-US',
    image: image || siteConfig.defaultOgImage,
    author: {
      '@type': 'Person',
      '@id': `${siteConfig.url}/#person`,
      name: siteConfig.author.name,
      url: `${siteConfig.url}/`,
    },
    publisher: {
      '@type': 'Person',
      '@id': `${siteConfig.url}/#person`,
      name: siteConfig.author.name,
      url: `${siteConfig.url}/`,
      logo: {
        '@type': 'ImageObject',
        url: siteConfig.defaultOgImage,
      },
    },
  };

  // Only include dateModified if a genuine distinct updated date is available
  if (dateModified && dateModified !== datePublished) {
    schema.dateModified = dateModified;
  }

  if (keywords && keywords.length > 0) {
    schema.keywords = keywords.join(', ');
  }

  return <JsonLdScript data={schema} />;
}

/**
 * Factual SoftwareApplication Schema for Real Built Products
 * Strictly factual: no fake ratings, no fake offers, no fake prices.
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
  const pageUrl = absoluteUrl(path);
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${pageUrl}#software`,
    name,
    description,
    url: pageUrl,
    applicationCategory,
    operatingSystem,
    image: image || siteConfig.defaultOgImage,
    author: {
      '@type': 'Person',
      '@id': `${siteConfig.url}/#person`,
      name: siteConfig.author.name,
      url: `${siteConfig.url}/`,
    },
    publisher: {
      '@type': 'Person',
      '@id': `${siteConfig.url}/#person`,
      name: siteConfig.author.name,
      url: `${siteConfig.url}/`,
    },
  };

  return <JsonLdScript data={schema} />;
}

/**
 * Project / Case Study Schema
 * Renders SoftwareApplication if project is a real built product,
 * otherwise renders CreativeWork for architectural case studies and prototypes.
 */
export function ProjectJsonLd({
  name,
  description,
  path,
  image,
  dateCreated,
  category,
  technologies,
  isSoftware = false,
}: {
  name: string;
  description: string;
  path: string;
  image?: string;
  dateCreated?: string;
  category?: string;
  technologies?: string[];
  isSoftware?: boolean;
}) {
  if (isSoftware) {
    return (
      <SoftwareApplicationJsonLd
        name={name}
        description={description}
        path={path}
        image={image}
      />
    );
  }

  const pageUrl = absoluteUrl(path);
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${pageUrl}#creativework`,
    name,
    description,
    url: pageUrl,
    image: image || siteConfig.defaultOgImage,
    author: {
      '@type': 'Person',
      '@id': `${siteConfig.url}/#person`,
      name: siteConfig.author.name,
      url: `${siteConfig.url}/`,
    },
  };

  if (dateCreated) {
    schema.dateCreated = dateCreated;
  }
  if (category) {
    schema.genre = category;
  }
  if (technologies && technologies.length > 0) {
    schema.keywords = technologies.join(', ');
  }

  return <JsonLdScript data={schema} />;
}
