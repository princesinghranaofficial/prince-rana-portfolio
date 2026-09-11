'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { 
  Sun, 
  Moon, 
  Laptop, 
  ArrowRight, 
  Check, 
  Send, 
  Layers, 
  Search, 
  ExternalLink,
  Code,
  Shield,
  Smartphone
} from 'lucide-react';
import { Container, NarrowContainer } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { SectionHeader } from '@/components/ui/section-header';
import { Eyebrow } from '@/components/ui/eyebrow';
import { 
  DisplayXL, 
  Display, 
  H1, 
  H2, 
  H3, 
  H4, 
  BodyLarge, 
  Body, 
  BodySmall, 
  LabelText, 
  Caption, 
  CodeText 
} from '@/components/ui/typography';
import { 
  Button, 
  PrimaryButton, 
  SecondaryButton, 
  GhostButton, 
  TextButton, 
  IconButton 
} from '@/components/ui/button';
import { InlineLink, NavigationLink, ArrowLink, ProjectLink } from '@/components/ui/link';
import { Badge } from '@/components/ui/badge';
import { ProjectStatus } from '@/components/ui/project-status';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, ProjectCard } from '@/components/ui/card';
import { 
  Input, 
  Textarea, 
  Select, 
  Checkbox, 
  Radio, 
  FormLabel, 
  FormMessage, 
  FormGroup 
} from '@/components/ui/form';
import { ProductFrame } from '@/components/ui/product-frame';
import { Skeleton } from '@/components/ui/skeleton';
import { EmptyState } from '@/components/ui/empty-state';
import { InlineError, FormError, ErrorPanel } from '@/components/ui/error-state';
import { Tooltip } from '@/components/ui/tooltip';
import { Reveal } from '@/components/ui/reveal';
import { COLOR_TOKENS, SPACING_SCALE, BREAKPOINTS, MOTION_TOKENS } from '@/lib/tokens';
import { projectsData } from '@/data/projects';

export function DesignSystemShowcase() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [buttonLoading, setButtonLoading] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState('all');

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const sampleProject = projectsData[0];

  return (
    <div className="min-h-screen bg-background text-text-primary">
      {/* Sticky QA Toolbar */}
      <div className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-md px-4 sm:px-8 py-3 flex items-center justify-between shadow-xs">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs uppercase font-bold tracking-widest text-accent">
            Design System QA
          </span>
          <span className="hidden sm:inline text-xs text-text-tertiary">|</span>
          <span className="hidden sm:inline text-xs text-text-secondary">
            Apple-Restraint & Production SaaS Tokens
          </span>
        </div>

        {/* Theme Switcher */}
        {mounted && (
          <div className="flex items-center gap-1.5 p-1 rounded-lg border border-border bg-surface-muted">
            <button
              type="button"
              onClick={() => setTheme('light')}
              className={`p-1.5 rounded-md text-xs font-medium flex items-center gap-1.5 transition-colors ${
                theme === 'light' ? 'bg-surface text-foreground shadow-xs' : 'text-text-secondary hover:text-foreground'
              }`}
              title="Light Mode"
            >
              <Sun className="w-3.5 h-3.5" />
              <span className="hidden sm:inline text-xs">Light</span>
            </button>
            <button
              type="button"
              onClick={() => setTheme('dark')}
              className={`p-1.5 rounded-md text-xs font-medium flex items-center gap-1.5 transition-colors ${
                theme === 'dark' ? 'bg-surface text-foreground shadow-xs' : 'text-text-secondary hover:text-foreground'
              }`}
              title="Dark Mode"
            >
              <Moon className="w-3.5 h-3.5" />
              <span className="hidden sm:inline text-xs">Dark</span>
            </button>
            <button
              type="button"
              onClick={() => setTheme('system')}
              className={`p-1.5 rounded-md text-xs font-medium flex items-center gap-1.5 transition-colors ${
                theme === 'system' ? 'bg-surface text-foreground shadow-xs' : 'text-text-secondary hover:text-foreground'
              }`}
              title="System Mode"
            >
              <Laptop className="w-3.5 h-3.5" />
              <span className="hidden sm:inline text-xs">System</span>
            </button>
          </div>
        )}
      </div>

      <Container size="wide" className="py-12 md:py-20 space-y-24">
        {/* Intro */}
        <div className="space-y-4 max-w-3xl">
          <Eyebrow>Phase 2 Design System</Eyebrow>
          <DisplayXL>Design System & Visual QA</DisplayXL>
          <BodyLarge>
            A disciplined, production-grade design system built with typography hierarchy, subtle surface layering, extreme spacing restraint, and WCAG 2.2 AA accessibility.
          </BodyLarge>
        </div>

        {/* 1. COLOR SYSTEM */}
        <div className="space-y-8">
          <SectionHeader
            eyebrow="Color Architecture"
            title="Semantic Palette & Surface Hierarchy"
            description="Neutral layered surfaces with near-black typography and one controlled Tech Cobalt accent family."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="p-4 rounded-xl border border-border bg-background space-y-2">
              <span className="text-[10px] font-mono uppercase text-text-tertiary block">Background</span>
              <span className="text-xs font-mono font-semibold block truncate">--background</span>
              <span className="text-[11px] text-text-secondary block">Base viewport canvas</span>
            </div>
            <div className="p-4 rounded-xl border border-border bg-surface space-y-2">
              <span className="text-[10px] font-mono uppercase text-text-tertiary block">Surface</span>
              <span className="text-xs font-mono font-semibold block truncate">--surface</span>
              <span className="text-[11px] text-text-secondary block">Cards & panels</span>
            </div>
            <div className="p-4 rounded-xl border border-border bg-surface-elevated space-y-2">
              <span className="text-[10px] font-mono uppercase text-text-tertiary block">Elevated</span>
              <span className="text-xs font-mono font-semibold block truncate">--surface-elevated</span>
              <span className="text-[11px] text-text-secondary block">Popovers & modals</span>
            </div>
            <div className="p-4 rounded-xl border border-border bg-surface-muted space-y-2">
              <span className="text-[10px] font-mono uppercase text-text-tertiary block">Muted</span>
              <span className="text-xs font-mono font-semibold block truncate">--surface-muted</span>
              <span className="text-[11px] text-text-secondary block">Subtle wells</span>
            </div>
            <div className="p-4 rounded-xl border border-accent bg-accent text-accent-foreground space-y-2">
              <span className="text-[10px] font-mono uppercase opacity-80 block">Primary Accent</span>
              <span className="text-xs font-mono font-semibold block truncate">--accent</span>
              <span className="text-[11px] opacity-90 block">Cobalt interactive</span>
            </div>
            <div className="p-4 rounded-xl border border-accent/30 bg-accent-muted text-accent space-y-2">
              <span className="text-[10px] font-mono uppercase opacity-80 block">Accent Muted</span>
              <span className="text-xs font-mono font-semibold block truncate">--accent-muted</span>
              <span className="text-[11px] opacity-90 block">Pills & badges</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl border border-success/30 bg-success-muted text-success space-y-1">
              <span className="text-[10px] font-mono uppercase font-bold block">Success</span>
              <span className="text-xs font-mono block">--success</span>
              <span className="text-xs text-text-secondary block">Verified status & confirmations</span>
            </div>
            <div className="p-4 rounded-xl border border-warning/30 bg-warning-muted text-warning space-y-1">
              <span className="text-[10px] font-mono uppercase font-bold block">Warning</span>
              <span className="text-xs font-mono block">--warning</span>
              <span className="text-xs text-text-secondary block">Conceptual notices & alerts</span>
            </div>
            <div className="p-4 rounded-xl border border-error/30 bg-error-muted text-error space-y-1">
              <span className="text-[10px] font-mono uppercase font-bold block">Error</span>
              <span className="text-xs font-mono block">--error</span>
              <span className="text-xs text-text-secondary block">Form errors & system alerts</span>
            </div>
          </div>
        </div>

        {/* 2. TYPOGRAPHY SCALE */}
        <div className="space-y-8">
          <SectionHeader
            eyebrow="Typography Hierarchy"
            title="Fluid Scales & Controlled Reading Measure"
            description="Tested across clamp formulas with 55–75 character measure limits to prevent text sprawl."
          />

          <div className="space-y-8 p-6 sm:p-8 rounded-2xl border border-border bg-surface">
            <div className="space-y-1">
              <span className="text-xs font-mono text-text-tertiary">Display XL (clamp 2.75rem – 5.5rem)</span>
              <DisplayXL>Building SaaS people actually want to use.</DisplayXL>
            </div>

            <div className="space-y-1 pt-4 border-t border-border">
              <span className="text-xs font-mono text-text-tertiary">Display (clamp 2.25rem – 4.25rem)</span>
              <Display>Production SaaS & AI Engineering</Display>
            </div>

            <div className="space-y-1 pt-4 border-t border-border">
              <span className="text-xs font-mono text-text-tertiary">H1 Headline (clamp 1.85rem – 3.25rem)</span>
              <H1>Architectural Precision & Speed</H1>
            </div>

            <div className="space-y-1 pt-4 border-t border-border">
              <span className="text-xs font-mono text-text-tertiary">H2 Section Headline (clamp 1.5rem – 2.5rem)</span>
              <H2>A Predictable 7-Step Development Lifecycle</H2>
            </div>

            <div className="space-y-1 pt-4 border-t border-border">
              <span className="text-xs font-mono text-text-tertiary">H3 Card Headline (clamp 1.25rem – 1.75rem)</span>
              <H3>Autonomous Accounts Receivable Workflows</H3>
            </div>

            <div className="space-y-1 pt-4 border-t border-border">
              <span className="text-xs font-mono text-text-tertiary">Body Large / Lead (55–75 character measure)</span>
              <BodyLarge>
                I partner with founders and enterprise engineering teams to design and build production-grade SaaS products with reliable database schemas and intuitive interfaces.
              </BodyLarge>
            </div>

            <div className="space-y-1 pt-4 border-t border-border">
              <span className="text-xs font-mono text-text-tertiary">Body Regular (55–75 character measure)</span>
              <Body>
                Unlike traditional developers who wait for static mockups or agencies that overcharge for bloated teams, I provide end-to-end architectural ownership from relational schemas to fluid UI.
              </Body>
            </div>

            <div className="space-y-1 pt-4 border-t border-border">
              <span className="text-xs font-mono text-text-tertiary">Technical Code & Caption</span>
              <div className="flex flex-wrap items-center gap-4">
                <CodeText>const client = createBrowserClient(url, key);</CodeText>
                <Caption>Updated 2 minutes ago • WCAG 2.2 AA compliant</Caption>
              </div>
            </div>
          </div>
        </div>

        {/* 3. BUTTON SYSTEM & MICROINTERACTIONS */}
        <div className="space-y-8">
          <SectionHeader
            eyebrow="Interactive Primitives"
            title="Button System & Microinteractions"
            description="Tactile 1–2px translations, restrained states, loading spinners, and accessible focus rings."
          />

          <div className="p-6 sm:p-8 rounded-2xl border border-border bg-surface space-y-8">
            {/* Primary & Variants */}
            <div className="space-y-3">
              <span className="text-xs font-mono text-text-tertiary uppercase">Button Variants (Medium Size)</span>
              <div className="flex flex-wrap items-center gap-4">
                <PrimaryButton rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Primary CTA
                </PrimaryButton>
                <SecondaryButton>
                  Secondary Action
                </SecondaryButton>
                <Button variant="outline">
                  Outline Style
                </Button>
                <GhostButton>
                  Ghost Button
                </GhostButton>
                <Button variant="accent">
                  Accent Action
                </Button>
                <TextButton>
                  Text Link Button
                </TextButton>
              </div>
            </div>

            {/* Sizes */}
            <div className="space-y-3 pt-6 border-t border-border">
              <span className="text-xs font-mono text-text-tertiary uppercase">Size Hierarchy</span>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="primary" size="sm">
                  Small (32px)
                </Button>
                <Button variant="primary" size="md">
                  Medium (40px)
                </Button>
                <Button variant="primary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Large (48px - Primary CTA)
                </Button>
              </div>
            </div>

            {/* States: Loading, Disabled */}
            <div className="space-y-3 pt-6 border-t border-border">
              <span className="text-xs font-mono text-text-tertiary uppercase">Interactive States</span>
              <div className="flex flex-wrap items-center gap-4">
                <Button
                  variant="primary"
                  isLoading={buttonLoading}
                  onClick={() => {
                    setButtonLoading(true);
                    setTimeout(() => setButtonLoading(false), 2000);
                  }}
                >
                  {buttonLoading ? 'Submitting...' : 'Click for Loading State'}
                </Button>
                <Button variant="primary" disabled>
                  Disabled Primary
                </Button>
                <Button variant="outline" disabled>
                  Disabled Outline
                </Button>
                <IconButton
                  variant="secondary"
                  aria-label="Search"
                  size="md"
                >
                  <Search className="w-4 h-4" />
                </IconButton>
              </div>
            </div>
          </div>
        </div>

        {/* 4. LINK SYSTEM */}
        <div className="space-y-8">
          <SectionHeader
            eyebrow="Navigation & Hyperlinks"
            title="Link System with Arrow Transitions"
            description="Clear focus-visible states and subtle hover translation for editorial reading."
          />

          <div className="p-6 sm:p-8 rounded-2xl border border-border bg-surface flex flex-wrap items-center gap-8 text-sm">
            <InlineLink href="#inline">
              Standard Inline Link
            </InlineLink>

            <ArrowLink href="#arrow">
              View Case Study
            </ArrowLink>

            <ArrowLink href="#up-right" direction="up-right">
              Live Product Demo
            </ArrowLink>

            <ProjectLink href="#project">
              CollectAI Case Study
            </ProjectLink>
          </div>
        </div>

        {/* 5. BADGES & PROJECT STATUS (WCAG 2.2 AA) */}
        <div className="space-y-8">
          <SectionHeader
            eyebrow="Mandatory Project Distinction"
            title="Badges & Accessible Project Status"
            description="Never allow conceptual work to appear as client work. Status uses both icon and typography."
          />

          <div className="p-6 sm:p-8 rounded-2xl border border-border bg-surface space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono text-text-tertiary uppercase">Core Project Status Identifiers</span>
              <div className="flex flex-wrap items-center gap-4">
                <ProjectStatus status="REAL PRODUCT" showDescription />
                <ProjectStatus status="CONCEPT" showDescription />
                <ProjectStatus status="PROTOTYPE" showDescription />
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-border">
              <span className="text-xs font-mono text-text-tertiary uppercase">Category Badges</span>
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="category">AI SaaS</Badge>
                <Badge variant="category">B2B SaaS</Badge>
                <Badge variant="category">Fintech</Badge>
                <Badge variant="category">Healthcare</Badge>
                <Badge variant="category">Cybersecurity</Badge>
                <Badge variant="category">Analytics</Badge>
                <Badge variant="accent">Production Ready</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* 6. FORM SYSTEM (44px+ Touch Targets) */}
        <div className="space-y-8">
          <SectionHeader
            eyebrow="Data Entry & Lead Capture"
            title="Form Primitives with Accessible States"
            description="Tested with 44px+ touch targets, clear labels, keyboard focus, and explicit error messaging."
          />

          <div className="p-6 sm:p-8 rounded-2xl border border-border bg-surface max-w-3xl space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormGroup>
                <FormLabel requiredIndicator>Full Name</FormLabel>
                <Input placeholder="e.g. Sarah Jenkins" />
              </FormGroup>

              <FormGroup error="Please enter a valid work email.">
                <FormLabel requiredIndicator>Work Email</FormLabel>
                <Input error placeholder="sarah@startup.com" defaultValue="invalid-email" />
              </FormGroup>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormGroup success="Budget verified for full-stack engagement.">
                <FormLabel>Budget Scope</FormLabel>
                <Select success defaultValue="$5K–$10K">
                  <option value="$1.5K–$3K">$1.5K–$3K</option>
                  <option value="$3K–$5K">$3K–$5K</option>
                  <option value="$5K–$10K">$5K–$10K</option>
                  <option value="$10K–$15K">$10K–$15K+</option>
                </Select>
              </FormGroup>

              <FormGroup>
                <FormLabel>Timeline</FormLabel>
                <Select defaultValue="2–4 weeks">
                  <option value="ASAP">ASAP</option>
                  <option value="2–4 weeks">2–4 weeks</option>
                  <option value="1–2 months">1–2 months</option>
                </Select>
              </FormGroup>
            </div>

            <FormGroup>
              <FormLabel requiredIndicator>Project Scope</FormLabel>
              <Textarea placeholder="Describe the SaaS or AI product requirements..." rows={3} />
            </FormGroup>

            <div className="pt-2 space-y-3">
              <Checkbox
                label="Require Row Level Security (RLS) multi-tenancy"
                description="Database records partitioned securely per organization"
                defaultChecked
              />
              <Radio
                name="hosting"
                label="Deploy to Vercel & Supabase Edge Infrastructure"
                description="Automated CI/CD with SSL certificates and global CDN"
                defaultChecked
              />
            </div>
          </div>
        </div>

        {/* 7. PRODUCT FRAME & IMAGE SYSTEM */}
        <div className="space-y-8">
          <SectionHeader
            eyebrow="Media Presentation"
            title="Product Frame Showcase Components"
            description="Minimal browser chrome, mobile frames, and dashboard wrappers preventing layout shift."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-3">
              <span className="text-xs font-mono text-text-tertiary uppercase">Browser Frame Variant</span>
              <ProductFrame
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
                alt="CollectAI AR Analytics"
                variant="browser"
                urlTitle="app.collectai.io/receivables"
                aspectRatio="16/10"
              />
            </div>

            <div className="space-y-3">
              <span className="text-xs font-mono text-text-tertiary uppercase">Frameless Card Variant</span>
              <ProductFrame
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
                alt="AI CFO Financial Intelligence"
                variant="frameless"
                aspectRatio="16/10"
              />
            </div>
          </div>
        </div>

        {/* 8. REUSABLE PROJECT CARD */}
        <div className="space-y-8">
          <SectionHeader
            eyebrow="Card Philosophy"
            title="Reusable ProjectCard Foundation"
            description="Subtle 1.02 hover zoom, metadata transition, and touch-friendly layout."
          />

          <div className="max-w-md">
            <ProjectCard project={sampleProject} />
          </div>
        </div>

        {/* 9. SKELETONS, EMPTY STATES & ERROR PANELS */}
        <div className="space-y-8">
          <SectionHeader
            eyebrow="Edge States"
            title="Loading Skeletons, Empty States & Error Panels"
            description="Resilient edge cases matching the design tokens without generic browser fallbacks."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {/* Skeletons */}
            <div className="p-6 rounded-2xl border border-border bg-surface space-y-4">
              <span className="text-xs font-mono text-text-tertiary uppercase block">Pulse Skeletons</span>
              <Skeleton variant="card" />
              <div className="space-y-2">
                <Skeleton variant="text" />
                <Skeleton variant="text" className="w-2/3" />
              </div>
            </div>

            {/* Empty State */}
            <div>
              <EmptyState
                title="No Projects Found"
                description="No projects match the selected category filter. Try clearing your filters."
                actionLabel="Reset Filters"
                onAction={() => alert('Reset action')}
              />
            </div>

            {/* Error Panel */}
            <div>
              <ErrorPanel
                title="Connection Interrupted"
                description="Unable to sync data with the Supabase endpoint. Please retry."
                onRetry={() => alert('Retry action')}
              />
            </div>
          </div>
        </div>

        {/* 10. TOOLTIPS & MOTION REVEALS */}
        <div className="space-y-8">
          <SectionHeader
            eyebrow="Motion & Micro-feedback"
            title="Accessible Tooltips & Scroll Reveals"
            description="Motion primitives respecting prefers-reduced-motion unconditionally."
          />

          <div className="p-6 sm:p-8 rounded-2xl border border-border bg-surface flex flex-wrap items-center gap-8">
            <Tooltip content="Direct developer communication with zero agency overhead">
              <Button variant="outline" size="sm">
                Hover or Focus for Tooltip
              </Button>
            </Tooltip>

            <Reveal variant="fade-up">
              <div className="p-3.5 rounded-lg border border-accent/30 bg-accent-muted text-accent text-xs font-mono">
                ✓ Reveal Component (Fade Up 250ms)
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </div>
  );
}
