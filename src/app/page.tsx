import * as React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/navigation/navbar';
import { HeroSection } from '@/components/sections/hero-section';
import { CollectAIShowcase } from '@/components/sections/collectai-showcase';
import { AICFOShowcase } from '@/components/sections/ai-cfo-showcase';
import { SecondaryWorkPreview } from '@/components/sections/secondary-work-preview';
import { CapabilitiesEditorial } from '@/components/sections/capabilities-editorial';
import { HowIWorkSection } from '@/components/sections/how-i-work-section';
import { ProcessTimeline } from '@/components/sections/process-timeline';
import { TechnologyStackSection } from '@/components/sections/technology-stack-section';
import { ProductLabTeaser } from '@/components/sections/product-lab-teaser';
import { InsightsPreview } from '@/components/sections/insights-preview';
import { FinalConversionSection } from '@/components/sections/final-conversion-section';
import { Footer } from '@/components/navigation/footer';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: '/',
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: siteConfig.defaultOgImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — ${siteConfig.primaryPositioning}`,
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    creator: siteConfig.social.twitterHandle,
    images: [siteConfig.defaultOgImage],
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-text-primary flex flex-col selection:bg-accent selection:text-accent-foreground">
      {/* Global Sticky Navigation */}
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* Selected Work 01 — Flagship Accounts Receivable SaaS */}
        <CollectAIShowcase />

        {/* Selected Work 02 — Flagship Financial Intelligence SaaS */}
        <AICFOShowcase />

        {/* Secondary Work — 3 Concept Case Studies */}
        <SecondaryWorkPreview />

        {/* Capabilities Editorial — 4 Numbered Service Rows */}
        <CapabilitiesEditorial />

        {/* How I Work — 4 Engineering Principles */}
        <HowIWorkSection />

        {/* Process Timeline — 7-Step Engineering Lifecycle */}
        <ProcessTimeline />

        {/* Technology Stack — 4 Architecture Layers */}
        <TechnologyStackSection />

        {/* Product Lab Teaser — 15 Industry Concepts Matrix */}
        <ProductLabTeaser />

        {/* Insights Preview — Technical Guides & Articles */}
        <InsightsPreview />

        {/* Final Conversion Section — Dual CTAs & Engagement Terms */}
        <FinalConversionSection />
      </main>

      {/* Global Minimal Footer */}
      <Footer />
    </div>
  );
}
