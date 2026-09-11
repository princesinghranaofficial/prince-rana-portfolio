import * as React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Instagram, Linkedin, Mail, Twitter } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer aria-label="Site footer" className="border-t border-border/60 bg-surface-50/50 dark:bg-surface-50/20 pt-16 pb-12">
      <Container size="default">
        {/* Top Footer Banner */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-12 border-b border-border/60 gap-8">
          <div className="space-y-2">
            <span className="text-xs font-mono text-accent uppercase tracking-widest">
              Let&apos;s Build Together
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
              Have a product in mind? Let&apos;s build it.
            </h3>
          </div>
          <Link href="/book">
            <Button variant="primary" size="lg" rightIcon={<ArrowUpRight className="w-4 h-4" aria-hidden="true" />}>
              Book a Call
            </Button>
          </Link>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-12">
          {/* Brand Info */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2 font-bold tracking-tight text-foreground text-lg">
              <div aria-hidden="true" className="w-7 h-7 rounded-md bg-foreground text-background flex items-center justify-center font-mono text-xs font-bold">
                PSR
              </div>
              <span>Prince Singh Rana</span>
            </div>
            <p className="text-xs text-muted-foreground max-w-sm leading-relaxed">
              Full-Stack SaaS & AI Product Developer designing and engineering production-ready digital products for ambitious startups and businesses worldwide.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/princesinghranaofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-border/60 bg-surface-50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
                aria-label="GitHub Profile (opens in new tab)"
              >
                <svg
                  className="w-4 h-4"
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
              </a>
              <a
                href="https://www.linkedin.com/in/prince-kumar-b2053a200/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-border/60 bg-surface-50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
                aria-label="LinkedIn Profile (opens in new tab)"
              >
                <Linkedin className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="https://x.com/SinghRana86251"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-border/60 bg-surface-50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
                aria-label="Twitter / X Profile (opens in new tab)"
              >
                <Twitter className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="https://www.instagram.com/itprince.ai?stkn=MWVrMzE2cWc0dXp2OA=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-border/60 bg-surface-50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
                aria-label="Instagram Profile (opens in new tab)"
              >
                <Instagram className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="mailto:princesinghranaofficial@gmail.com"
                className="w-8 h-8 rounded-lg border border-border/60 bg-surface-50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
                aria-label="Send Email to princesinghranaofficial@gmail.com"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          <nav aria-label="Work and Lab links">
            <h4 className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-4 font-semibold">
              Work & Lab
            </h4>
            <ul className="space-y-2.5 text-xs text-foreground/80">
              <li>
                <Link href="/work" className="hover:text-foreground transition-colors">Featured Work</Link>
              </li>
              <li>
                <Link href="/work/collectai" className="hover:text-foreground transition-colors">CollectAI SaaS</Link>
              </li>
              <li>
                <Link href="/work/ai-cfo-copilot" className="hover:text-foreground transition-colors">AI CFO Copilot</Link>
              </li>
              <li>
                <Link href="/lab" className="hover:text-foreground transition-colors">Product Lab (15)</Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Capabilities links">
            <h4 className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-4 font-semibold">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs text-foreground/80">
              <li>
                <Link href="/services/saas-development" className="hover:text-foreground transition-colors">SaaS Development</Link>
              </li>
              <li>
                <Link href="/services/ai-saas-development" className="hover:text-foreground transition-colors">AI SaaS Engineering</Link>
              </li>
              <li>
                <Link href="/services/full-stack-development" className="hover:text-foreground transition-colors">Full-Stack Apps</Link>
              </li>
              <li>
                <Link href="/services/saas-mvp-development" className="hover:text-foreground transition-colors">SaaS MVP Program</Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Company and contact links">
            <h4 className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-4 font-semibold">
              Company & Contact
            </h4>
            <ul className="space-y-2.5 text-xs text-foreground/80">
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors">About & Mindset</Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-foreground transition-colors">Engineering Process</Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-foreground transition-colors">Insights & Articles</Link>
              </li>
              <li>
                <Link href="/start-project" className="hover:text-foreground transition-colors">Project Inquiry</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground gap-4 font-mono">
          <p>&copy; {currentYear} Prince Singh Rana. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Built with Next.js & Supabase</span>
            <span>Built toward WCAG 2.2 AA</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
