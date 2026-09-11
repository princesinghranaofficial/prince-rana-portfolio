import * as React from 'react';
import { Metadata } from 'next';
import { Calendar as CalendarIcon } from 'lucide-react';
import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/navigation/footer';
import { Container } from '@/components/ui/container';
import { BookingInterface } from '@/components/booking/booking-interface';

import { BreadcrumbJsonLd } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'Book a Discovery Call',
  description:
    'Schedule a 30-minute discovery call to evaluate your SaaS product, AI copilot architecture, project scope, and technical roadmap.',
  alternates: {
    canonical: '/book',
  },
  openGraph: {
    title: 'Book a Discovery Call | Prince Singh Rana — Full-Stack SaaS & AI Developer',
    description:
      'Schedule a 30-minute discovery call to evaluate your SaaS product, AI copilot architecture, project scope, and technical roadmap.',
    url: '/book',
    type: 'website',
  },
};

export default function BookCallPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-accent/20 selection:text-accent">
      {/* Structured Data */}
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'Book a Call', path: '/book' },
        ]}
      />

      <Navbar />

      <main id="main-content" className="flex-1 pt-32 pb-24 space-y-12">
        <Container size="default">
          {/* Header */}
          <div className="max-w-3xl space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-muted text-accent text-xs font-mono border border-accent/20">
              <CalendarIcon className="w-3.5 h-3.5" />
              <span>30-Minute Technical Discussion</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.08]">
              Let&apos;s talk about the product.
            </h1>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              A focused conversation about what you&apos;re building, where the project stands, and what the right next technical step could look like.
            </p>
          </div>

          {/* Honest Booking Interface with Real Scheduler Provider */}
          <div className="max-w-5xl">
            <BookingInterface />
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
