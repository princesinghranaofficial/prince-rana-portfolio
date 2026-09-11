export type ProjectType = 'REAL PRODUCT' | 'CONCEPT' | 'PROTOTYPE';

export type ProjectCategory = 
  | 'AI' 
  | 'SaaS' 
  | 'B2B' 
  | 'Fintech' 
  | 'Healthcare' 
  | 'Real Estate'
  | 'Commerce' 
  | 'Cybersecurity' 
  | 'Analytics' 
  | 'CRM' 
  | 'Productivity' 
  | 'EdTech';

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectScreen {
  id: string;
  title: string;
  description: string;
  image: string;
  badge?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  projectType: ProjectType;
  description: string;
  year: string;
  status: string;
  featured: boolean;
  coverImage: string;
  screens: ProjectScreen[];
  technologies: string[];
  services: string[];
  problem: string;
  solution: string;
  features: ProjectFeature[];
  architecture: string;
  outcome: string;
  industries?: string[];
  capabilities?: string[];
  role?: string;
  caseStudyAvailable?: boolean;
  links?: {
    live?: string;
    github?: string;
    demo?: string;
  };
}
