import * as React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { DesignSystemShowcase } from '@/components/design-system/design-system-showcase';

export const metadata: Metadata = {
  title: 'Internal Design System & Visual QA | Prince Singh Rana',
  description: 'Component documentation and visual regression testing suite for the design system tokens.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function DesignSystemPage() {
  // Exclude internal visual QA and testing suite from production builds
  if (process.env.NODE_ENV === 'production') {
    notFound();
  }

  return <DesignSystemShowcase />;
}
