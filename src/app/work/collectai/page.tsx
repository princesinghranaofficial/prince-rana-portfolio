import * as React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/navigation/footer';
import { CollectAIHero } from '@/components/case-studies/collectai/collectai-hero';
import { CollectAINav } from '@/components/case-studies/collectai/collectai-nav';
import { CollectAIOverview } from '@/components/case-studies/collectai/collectai-overview';
import { CollectAISystemMap } from '@/components/case-studies/collectai/collectai-system-map';
import { CollectAICoreExperience } from '@/components/case-studies/collectai/collectai-core-experience';
import { CollectAIEngine } from '@/components/case-studies/collectai/collectai-ai-engine';
import { CollectAIWorkflows } from '@/components/case-studies/collectai/collectai-workflows';
import { CollectAIIntegrations } from '@/components/case-studies/collectai/collectai-integrations';
import { CollectAIEngineering } from '@/components/case-studies/collectai/collectai-engineering';
import { CollectAIFooterCTA } from '@/components/case-studies/collectai/collectai-footer-cta';
import { BreadcrumbJsonLd, SoftwareApplicationJsonLd } from '@/components/seo/json-ld';
import { ProjectTracker } from '@/components/analytics/trackers';

export const metadata: Metadata = {
  title: 'CollectAI — AI Accounts Receivable SaaS',
  description:
    'Case study of CollectAI: an autonomous AI accounts receivable and invoice collection SaaS platform engineered by Prince Rana with Next.js, TypeScript, and Supabase PostgreSQL.',
  alternates: {
    canonical: '/work/collectai',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'CollectAI — AI Accounts Receivable SaaS | Prince Rana',
    description:
      'Case study of CollectAI: an autonomous AI accounts receivable and invoice collection SaaS platform engineered by Prince Rana with Next.js, TypeScript, and Supabase PostgreSQL.',
    url: '/work/collectai',
    siteName: 'Prince Rana',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'CollectAI — Autonomous Accounts Receivable SaaS Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CollectAI — AI Accounts Receivable SaaS | Prince Rana',
    description:
      'Case study of CollectAI: an autonomous AI accounts receivable and invoice collection SaaS platform engineered by Prince Rana with Next.js, TypeScript, and Supabase PostgreSQL.',
  },
};

export default function CollectAICaseStudyPage() {
  return (
    <div className="min-h-screen bg-background text-text-primary flex flex-col selection:bg-accent selection:text-accent-foreground">
      <ProjectTracker slug="collectai" name="CollectAI" />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'Work', path: '/work' },
          { name: 'CollectAI', path: '/work/collectai' },
        ]}
      />
      <SoftwareApplicationJsonLd
        name="CollectAI"
        description="Autonomous AI accounts receivable and invoice collection SaaS platform."
        path="/work/collectai"
        applicationCategory="BusinessApplication"
        operatingSystem="Web Browser"
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
      />
      {/* Global Sticky Navigation */}
      <Navbar />

      {/* Main Case Study Article */}
      <main id="main-content" className="flex-1 relative">
        {/* Sticky Desktop Table of Contents */}
        <CollectAINav />

        {/* 01 Project Hero */}
        <CollectAIHero />

        {/* 02 Overview, 03 The Problem, 04 Product Strategy */}
        <CollectAIOverview />

        {/* 05 System Overview / Product Map */}
        <CollectAISystemMap />

        {/* 06 Core Product Experience: Receivables, Customers, Payments, Analytics */}
        <CollectAICoreExperience />

        {/* 07 AI Collector & 08 AI Copilot */}
        <CollectAIEngine />

        {/* 09 Collection Workflows Automation */}
        <CollectAIWorkflows />

        {/* 12 Integrations Ecosystem & Verified Statuses */}
        <CollectAIIntegrations />

        {/* 14 Design System, 15 Architecture, 16 Data/RLS, 17 Security, 20 Challenges, 21 What I Built */}
        <CollectAIEngineering />

        {/* 22 Outcome, 23 Next Project (AI CFO), 24 Final Conversion */}
        <CollectAIFooterCTA />
      </main>

      {/* Global Minimal Footer */}
      <Footer />
    </div>
  );
}
