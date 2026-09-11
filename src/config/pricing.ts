/**
 * Centralized Project Investment Configuration
 * Single source of truth for starting investment figures, engagement scopes, and deliverables.
 * Enforces truthful starting points without generic tiers or artificial packages.
 */

export interface RelevantProof {
  name: string;
  href: string;
  status: 'REAL PRODUCT' | 'CONCEPT';
}

export interface RelevantService {
  name: string;
  href: string;
}

export interface InvestmentOption {
  id: string;
  number: string;
  service: string;
  startingPrice: number;
  startingPriceDisplay: string;
  headline: string;
  bestFor: string;
  typicalScope: string[];
  ctaLabel: string;
  ctaHref: string;
  relevantProof?: RelevantProof;
  relevantService?: RelevantService;
  footnote?: string;
}

export const investmentOptions: InvestmentOption[] = [
  {
    id: 'website',
    number: '01',
    service: 'Premium Website',
    startingPrice: 1500,
    startingPriceDisplay: '$1,500+',
    headline: 'High-performance marketing experiences for SaaS and technology businesses.',
    bestFor: 'SaaS companies, startups, technology businesses, agencies, and product launches that need a high-quality marketing website.',
    typicalScope: [
      'Product & website strategy',
      'Premium UI design & implementation',
      'Responsive development across 9 breakpoints',
      'Conversion-focused landing pages',
      'Core Web Vitals performance optimization',
      'Technical SEO & OpenGraph instrumentation',
      'Privacy-first analytics integration',
      'CMS integration where required',
      'Production deployment & DNS setup',
    ],
    ctaLabel: 'Start a Website Project',
    ctaHref: '/start-project?type=website',
    relevantService: {
      name: 'Website Development',
      href: '/services/website-development',
    },
  },
  {
    id: 'saas-mvp',
    number: '02',
    service: 'SaaS MVP',
    startingPrice: 3000,
    startingPriceDisplay: '$3,000+',
    headline: 'Fast, disciplined 3–5 week launch focusing on the core value workflow.',
    bestFor: 'Founders and startups building a focused first version of a SaaS product.',
    typicalScope: [
      'Product scoping & milestone roadmap',
      'Scalable SaaS architecture',
      'Core UI/UX application layout',
      'Authentication & team workspaces',
      'Relational database modeling',
      'Primary workflow automation',
      'Operational dashboard interface',
      'Stripe/payment gateway integration',
      'Automated error tracking & deployment',
    ],
    ctaLabel: 'Start an MVP',
    ctaHref: '/start-project?type=saas-mvp',
    relevantService: {
      name: 'SaaS MVP Development',
      href: '/services/saas-mvp-development',
    },
  },
  {
    id: 'saas',
    number: '03',
    service: 'Full-Stack SaaS',
    startingPrice: 5000,
    startingPriceDisplay: '$5,000+',
    headline: 'Production-oriented SaaS platforms with multi-tenant architecture and Stripe billing.',
    bestFor: 'Businesses and founders building production-oriented SaaS products requiring frontend, backend, data, authentication, and integrations.',
    typicalScope: [
      'End-to-end product architecture',
      'SaaS UI/UX design system',
      'Type-safe frontend engineering (Next.js & React)',
      'Backend APIs & Server Actions',
      'PostgreSQL & Row Level Security (RLS) isolation',
      'Role-based access control (RBAC)',
      'High-density telemetry dashboards',
      'Third-party API & webhook integrations',
      'Multi-tier Stripe subscription billing',
      'Hardened cloud deployment & runbooks',
    ],
    ctaLabel: 'Build a SaaS Product',
    ctaHref: '/start-project?type=saas',
    relevantProof: {
      name: 'CollectAI',
      href: '/work/collectai',
      status: 'REAL PRODUCT',
    },
    relevantService: {
      name: 'SaaS Development',
      href: '/services/saas-development',
    },
  },
  {
    id: 'ai-saas',
    number: '04',
    service: 'AI SaaS / AI Product',
    startingPrice: 5000,
    startingPriceDisplay: '$5,000+',
    headline: 'Context-aware AI copilots, structured RAG pipelines, and deterministic workflows.',
    bestFor: 'Founders and businesses embedding AI into production product workflows.',
    typicalScope: [
      'AI product architecture & model orchestration',
      'Context-aware AI copilots & assistant panels',
      'Deterministic JSON tool calling with strict Zod validation',
      'Vector embeddings & semantic RAG retrieval',
      'Document & data intelligence pipelines',
      'Anti-hallucination guardrails & cost monitoring',
      'Human-in-the-loop review queues',
      'Full-stack UI & backend implementation',
      'Production deployment with streaming latencies',
    ],
    ctaLabel: 'Build an AI Product',
    ctaHref: '/start-project?type=ai-saas',
    relevantProof: {
      name: 'AI CFO & Copilot',
      href: '/work/ai-cfo-copilot',
      status: 'REAL PRODUCT',
    },
    relevantService: {
      name: 'AI SaaS Development',
      href: '/services/ai-saas-development',
    },
    footnote: 'AI functionality is engineered with strict deterministic guardrails. We do not promise unconstrained autonomous decision-making.',
  },
  {
    id: 'custom',
    number: '05',
    service: 'Custom Product Build',
    startingPrice: 10000,
    startingPriceDisplay: '$10,000+',
    headline: 'Comprehensive end-to-end product engineering for complex or multi-system ventures.',
    bestFor: 'Larger or more complex products requiring multiple systems, advanced workflows, integrations, AI capabilities, or substantial product engineering.',
    typicalScope: [
      'Comprehensive product strategy & system topology',
      'Multi-surface UI/UX design systems',
      'Full-stack software engineering',
      'Complex workflow engines & state machines',
      'Advanced relational & vector data architectures',
      'Multi-agent or multi-model AI workflows',
      'Multiple third-party enterprise integrations',
      'Custom billing, invoicing & subscription logic',
      'Enterprise security, audit logging & telemetry',
      'Zero-downtime production deployment',
    ],
    ctaLabel: 'Discuss Your Product',
    ctaHref: '/start-project?type=custom',
  },
];

export const pricingDisclaimer = {
  primary:
    'These are starting points, not fixed packages. Final investment is based on scope, complexity, integrations, timeline, and the current state of the product.',
  secondary:
    "Not sure which category fits? Tell me what you're building and I'll help define the right scope.",
};
