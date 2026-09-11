'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, MessageSquare, Sparkles } from 'lucide-react';
import { Container, Section } from '@/components/ui/container';
import { H2, TextLead } from '@/components/ui/typography';
import { Button } from '@/components/ui/button';

export function ConversionSection() {
  return (
    <Section spacing="default" className="relative overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/10 blur-3xl rounded-full pointer-events-none -z-10" />

      <Container size="narrow">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-border/80 bg-surface-50/80 dark:bg-surface-50/40 backdrop-blur-xl p-8 sm:p-12 text-center space-y-8 shadow-2xl relative"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-muted text-accent text-xs font-mono border border-accent/20">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>Ready to Build Your SaaS?</span>
          </div>

          <div className="space-y-4">
            <H2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Have an ambitious product idea?
            </H2>
            <TextLead className="max-w-xl mx-auto">
              Let&apos;s turn it into a high-performance, production-ready product people actually want to use.
            </TextLead>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link href="/book" className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto shadow-lg hover:shadow-xl"
                leftIcon={<Calendar className="w-4 h-4" />}
                rightIcon={<ArrowUpRight className="w-4 h-4" />}
              >
                Book a 30-Min Call
              </Button>
            </Link>
            <Link href="/start-project" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
                leftIcon={<MessageSquare className="w-4 h-4" />}
              >
                Start a Project Inquiry
              </Button>
            </Link>
          </div>

          <div className="pt-6 border-t border-border/40 text-xs text-muted-foreground flex flex-wrap items-center justify-center gap-6 font-mono">
            <span>✓ Direct Developer Communication</span>
            <span>✓ No Agency Overhead</span>
            <span>✓ Production-Grade Code</span>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
