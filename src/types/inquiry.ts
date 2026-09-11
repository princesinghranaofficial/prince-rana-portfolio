export type ProjectType =
  | 'SaaS Product'
  | 'AI SaaS / AI Product'
  | 'SaaS MVP'
  | 'Full-Stack Application'
  | 'Premium Website'
  | 'Dashboard / Internal Tool'
  | 'Existing Product Improvement'
  | 'API / Platform Integration'
  | 'Other';

export type ProjectStage =
  | 'Idea'
  | 'Requirements defined'
  | 'UI/UX exists'
  | 'Prototype exists'
  | 'MVP exists'
  | 'Existing live product'
  | 'Existing codebase needs improvement';

export type ScopeOption =
  | 'Product Strategy'
  | 'UI/UX'
  | 'Frontend'
  | 'Backend'
  | 'Database'
  | 'Authentication'
  | 'AI Integration'
  | 'Payments'
  | 'Third-Party APIs'
  | 'Admin System'
  | 'Analytics'
  | 'Deployment'
  | 'Performance'
  | 'Existing Codebase'
  | 'Other';

export type BudgetRange =
  | 'Under $1,500'
  | '$1,500–$3,000'
  | '$3,000–$5,000'
  | '$5,000–$10,000'
  | '$10,000–$15,000'
  | '$15,000+'
  | 'Not sure yet';

export type TimelineRange =
  | 'As soon as possible'
  | 'Within 2–4 weeks'
  | 'Within 1–2 months'
  | '2–3 months'
  | 'Flexible';

export type PreferredContactMethod =
  | 'Email'
  | 'Discovery Call'
  | 'Async (Slack / Loom)';

export type InquiryStatus = 'new' | 'qualified' | 'contacted' | 'proposal' | 'won' | 'lost';

export interface ProjectInquiry {
  id?: string;
  projectType: ProjectType;
  projectStage: ProjectStage;
  scope: ScopeOption[];
  description: string;
  referenceUrl?: string;
  budgetRange: BudgetRange;
  timeline: TimelineRange;
  targetLaunchDate?: string;
  name: string;
  email: string;
  company?: string;
  companyWebsite?: string;
  countryOrTimezone?: string;
  preferredContact?: PreferredContactMethod;
  status?: InquiryStatus;
  source?: string;
  createdAt?: string;
  honeypot?: string;
  formTimeMs?: number;
}
