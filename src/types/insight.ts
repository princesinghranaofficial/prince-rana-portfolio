export type InsightCategory = 
  | 'SaaS Engineering' 
  | 'AI Product Engineering' 
  | 'Product Architecture' 
  | 'Product UI/UX' 
  | 'Performance & Production' 
  | 'Building Products'
  // Legacy / alias compatibility
  | 'SaaS Development'
  | 'AI Products'
  | 'Engineering'
  | 'Product Design'
  | 'Startup Development';

export type InsightFilterCategory =
  | 'ALL'
  | 'SAAS'
  | 'AI'
  | 'ENGINEERING'
  | 'PRODUCT'
  | 'DESIGN'
  | 'PERFORMANCE';

export interface InsightTocItem {
  id: string;
  title: string;
  level?: number;
}

export interface InsightAuthor {
  name: string;
  role: string;
  bio?: string;
  avatar?: string;
}

export interface InsightRelatedProject {
  slug: string;
  title: string;
  type: 'REAL PRODUCT' | 'CONCEPT';
  description: string;
  href: string;
}

export interface InsightRelatedService {
  slug: string;
  title: string;
  href: string;
}

export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  category: InsightCategory;
  tags: string[];
  author: InsightAuthor;
  publishedAt: string;
  updatedAt?: string;
  readingTime: string;
  featured?: boolean;
  status: 'published' | 'draft';
  toc: InsightTocItem[];
  content: string;
  relatedProjects?: InsightRelatedProject[];
  relatedServices?: InsightRelatedService[];
  relatedSlugs?: string[];
  seo?: {
    title: string;
    description: string;
    keywords?: string[];
  };
}
