export interface ServiceCapability {
  title: string;
  description: string;
}

export interface ServiceProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ConnectedProofItem {
  title: string;
  slug: string;
  type: 'REAL PRODUCT' | 'CONCEPT';
  description: string;
  route: string;
  metricOrHighlight: string;
}

export interface ServiceEngagementModel {
  model: string;
  description: string;
  typicalFit: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  problem: string;
  solution: string;
  audience: string[];
  capabilities: ServiceCapability[];
  deliverables: string[];
  process: ServiceProcessStep[];
  technologies: string[];
  relatedProjectSlugs: string[];
  connectedProof: ConnectedProofItem[];
  engagementModels: ServiceEngagementModel[];
  faqs: ServiceFAQ[];
  architectureType: 'saas' | 'ai-saas' | 'full-stack' | 'website' | 'mvp' | 'dashboard';
  startingInvestment?: string;
  ctaHeadline?: string;
  ctaDescription?: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}
