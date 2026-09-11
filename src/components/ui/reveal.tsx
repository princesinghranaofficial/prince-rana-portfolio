'use client';

import * as React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { DURATION, EASING, DISTANCE } from '@/lib/motion';

export interface RevealProps {
  variant?: 'fade' | 'fade-up' | 'fade-down' | 'subtle-scale';
  delay?: number;
  duration?: number;
  once?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function Reveal({
  variant = 'fade-up',
  delay = 0,
  duration = DURATION.normal,
  once = true,
  className,
  children,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  // If user prefers reduced motion, render without transform animations
  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const variants = {
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    'fade-up': {
      hidden: { opacity: 0, y: DISTANCE.md },
      visible: { opacity: 1, y: 0 },
    },
    'fade-down': {
      hidden: { opacity: 0, y: -DISTANCE.sm },
      visible: { opacity: 1, y: 0 },
    },
    'subtle-scale': {
      hidden: { opacity: 0, scale: 0.98 },
      visible: { opacity: 1, scale: 1 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-40px' }}
      transition={{
        duration,
        delay,
        ease: EASING.entrance,
      }}
      variants={variants[variant]}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

export interface StaggerGroupProps {
  staggerDelay?: number;
  delayChildren?: number;
  className?: string;
  children: React.ReactNode;
}

export function StaggerGroup({
  staggerDelay = 0.05,
  delayChildren = 0,
  className,
  children,
}: StaggerGroupProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: DISTANCE.sm },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: DURATION.normal,
            ease: EASING.entrance,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
