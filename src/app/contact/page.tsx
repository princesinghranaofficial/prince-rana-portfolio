import * as React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Mail, Calendar, MessageSquare, Instagram, Linkedin, Twitter, MapPin } from 'lucide-react';
import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/navigation/footer';
import { Container } from '@/components/ui/container';
import { H1, TextLead, TextRegular } from '@/components/ui/typography';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { BreadcrumbJsonLd } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch to discuss your SaaS application, AI copilot, or web product engineering needs.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Prince Singh Rana | Full-Stack SaaS & AI Developer',
    description: 'Get in touch to discuss your SaaS application, AI copilot, or web product engineering needs.',
    url: '/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ]}
      />
      <Navbar />
      <main id="main-content" className="flex-1 pt-32 pb-24">
        <Container size="default">
          <div className="max-w-3xl space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-muted text-accent text-xs font-mono border border-accent/20">
              <span>Direct Communication</span>
            </div>
            <H1>Let&apos;s Build Your Product</H1>
            <TextLead>
              Whether you have a fully scoped product specification or are just validating an early-stage SaaS concept, I am available for technical consultation and full-stack development.
            </TextLead>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl">
            {/* Primary Contact Channels */}
            <div className="lg:col-span-7 space-y-6">
              <Card className="p-6 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-surface-100 dark:bg-surface-50 text-accent border border-border/50">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground">Direct Email</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">Response time: within 24 hours</p>
                    <a
                      href="mailto:princesinghranaofficial@gmail.com"
                      className="text-sm font-mono font-bold text-accent hover:underline block mt-2"
                    >
                      princesinghranaofficial@gmail.com
                    </a>
                  </div>
                </div>

                <div className="pt-6 border-t border-border/60 flex flex-col sm:flex-row gap-4">
                  <Link href="/book" className="flex-1">
                    <Button variant="primary" className="w-full justify-center" leftIcon={<Calendar className="w-4 h-4" />}>
                      Book 30-Min Call
                    </Button>
                  </Link>
                  <Link href="/start-project" className="flex-1">
                    <Button variant="outline" className="w-full justify-center" leftIcon={<MessageSquare className="w-4 h-4" />}>
                      Start Inquiry
                    </Button>
                  </Link>
                </div>
              </Card>

              {/* Location & Availability */}
              <div className="p-6 rounded-2xl border border-border/80 bg-surface-50/40 space-y-3 font-mono text-xs">
                <div className="flex items-center gap-2 text-foreground font-bold">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span>International Client Services</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Working with founders across North America, Europe, United Kingdom, Australia, and Asia-Pacific timezones.
                </p>
              </div>
            </div>

            {/* Social & Professional Links */}
            <div className="lg:col-span-5 space-y-6">
              <Card className="p-6 space-y-4">
                <h3 className="text-xs font-mono text-muted-foreground uppercase tracking-wider font-semibold">
                  Professional Profiles
                </h3>
                <div className="space-y-3">
                  <a
                    href="https://github.com/princesinghranaofficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl border border-border/60 bg-surface-50/50 text-foreground hover:border-foreground/30 transition-all text-xs font-mono"
                  >
                    <div className="flex items-center gap-3">
                      <svg
                        className="w-4 h-4 text-accent"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                      <span>GitHub</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/prince-kumar-b2053a200/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl border border-border/60 bg-surface-50/50 text-foreground hover:border-foreground/30 transition-all text-xs font-mono"
                  >
                    <div className="flex items-center gap-3">
                      <Linkedin className="w-4 h-4 text-accent" />
                      <span>LinkedIn</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
                  </a>

                  <a
                    href="https://x.com/SinghRana86251"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl border border-border/60 bg-surface-50/50 text-foreground hover:border-foreground/30 transition-all text-xs font-mono"
                  >
                    <div className="flex items-center gap-3">
                      <Twitter className="w-4 h-4 text-accent" />
                      <span>Twitter / X</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
                  </a>

                  <a
                    href="https://www.instagram.com/itprince.ai?stkn=MWVrMzE2cWc0dXp2OA=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl border border-border/60 bg-surface-50/50 text-foreground hover:border-foreground/30 transition-all text-xs font-mono"
                  >
                    <div className="flex items-center gap-3">
                      <Instagram className="w-4 h-4 text-accent" />
                      <span>Instagram</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
