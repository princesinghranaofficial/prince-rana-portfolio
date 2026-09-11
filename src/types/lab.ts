export type LabStatus = 'CONCEPT' | 'PROTOTYPE';

export type LabCategory =
  | 'All'
  | 'AI'
  | 'Fintech'
  | 'Healthcare'
  | 'Real Estate'
  | 'Commerce'
  | 'Agency'
  | 'Cybersecurity'
  | 'Analytics'
  | 'CRM'
  | 'Productivity'
  | 'EdTech'
  | 'Support'
  | 'HR'
  | 'Startup OS'
  | 'Market Intelligence';

export type VisualDensity = 'compact' | 'comfortable' | 'spacious';
export type SurfaceStyle = 'glass' | 'card' | 'elevated' | 'bordered';
export type ChartStyle = 'candlestick' | 'stream' | 'cohort' | 'bar' | 'donut' | 'node' | 'radar';
export type HeroTreatment = 'metric-grid' | 'kanban-peek' | 'workflow-canvas' | 'threat-radar' | 'timeline' | 'analytics-stream';
export type LabComplexity = 'Focused' | 'Standard' | 'Advanced';

export interface LabVisualTheme {
  accentColor: string; // Tailwind class or token reference, e.g., 'text-indigo-500'
  accentBg: string; // e.g. 'bg-indigo-500/10'
  accentBorder: string; // e.g. 'border-indigo-500/20'
  accentGlow: string; // e.g. 'rgba(99, 102, 241, 0.15)'
  surfaceStyle: SurfaceStyle;
  visualDensity: VisualDensity;
  chartStyle?: ChartStyle;
  heroTreatment: HeroTreatment;
}

export interface LabScreenManifest {
  id: string;
  title: string;
  description: string;
  badge: string;
  screenType: 'dashboard' | 'workflow' | 'analytics' | 'settings' | 'inspector' | 'canvas';
  layoutDescription: string;
}

export interface LabFeature {
  title: string;
  description: string;
  iconName?: string;
  technicalDetail?: string;
}

export interface LabTechStack {
  frontend: string[];
  backend: string[];
  database: string[];
  ai?: string[];
  infrastructure?: string[];
}

export interface ProductLabProject {
  id: string;
  slug: string;
  title: string;
  shortName: string;
  tagline: string;
  description: string;
  status: LabStatus;
  category: LabCategory;
  industry: string;
  productType: string;
  capabilities: string[];
  targetUsers: string;
  problem: string;
  solution: string;
  keyFeatures: LabFeature[];
  screens: LabScreenManifest[];
  visualTheme: LabVisualTheme;
  stack: LabTechStack;
  architecture: string;
  architectureNotes?: string[];
  complexity: LabComplexity;
  featured: boolean;
  relatedProjects: string[];
  coverImage: string;
  year: string;
  role: string;
}
