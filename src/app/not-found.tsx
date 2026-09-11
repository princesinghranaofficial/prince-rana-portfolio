import * as React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Compass, Home, Layers, Sparkles } from 'lucide-react';
import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/navigation/footer';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Page Not Found (404) | Prince Rana',
  description: 'The requested page could not be found. Explore production SaaS work, services, or get in touch.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-accent/20 selection:text-accent">
      <Navbar />

      <main id="main-content" className="flex-1 flex items-center justify-center py-32 px-6">
        <Container size="narrow" className="text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-muted text-accent font-mono text-xs border border-accent/20 select-none">
            <Compass className="w-3.5 h-3.5" />
            <span>Error 404 &middot; Missing Resource</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              Page not found.
            </h1>
            <p className="text-base text-muted-foreground max-w-md mx-auto leading-relaxed">
              The page or resource you are looking for has moved, been archived, or does not exist.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link href="/">
              <Button variant="primary" size="md" leftIcon={<Home className="w-4 h-4" />}>
                Return Home
              </Button>
            </Link>
            <Link href="/work">
              <Button variant="secondary" size="md" leftIcon={<Layers className="w-4 h-4" />}>
                Explore Work
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="md">
                View Services
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="ghost" size="md" rightIcon={<ArrowUpRight className="w-4 h-4" />}>
                Contact
              </Button>
            </Link>
          </div>

          <div className="pt-8 border-t border-border/50 text-xs font-mono text-muted-foreground">
            Looking for a specific case study? Explore{' '}
            <Link href="/work/collectai" className="text-accent underline underline-offset-4">
              CollectAI
            </Link>{' '}
            or{' '}
            <Link href="/work/ai-cfo-copilot" className="text-accent underline underline-offset-4">
              AI CFO &amp; Copilot
            </Link>.
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
