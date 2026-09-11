/**
 * Centralized Motion System & Animation Tokens
 * Source of truth for timing, easings, spring configurations, and accessible motion variants.
 * Inspired by the restraint, speed, and precision of Apple, Linear, Stripe, and Raycast.
 */

import { type Transition, type Variants } from 'framer-motion';

// =========================================================
// 1. DURATION TOKENS (seconds for Framer Motion, ms for CSS)
// =========================================================
export const DURATION = {
  instant: 0.1, // 100ms - micro toggles, immediate feedback
  fast: 0.18, // 180ms - tactile button presses, dropdowns, icon nudges
  normal: 0.28, // 280ms - tabs, accordions, dialog overlays, card hovers
  slow: 0.42, // 420ms - major page/section reveals, hero compositions
} as const;

export const DURATION_MS = {
  instant: 100,
  fast: 180,
  normal: 280,
  slow: 420,
} as const;

// =========================================================
// 2. EASING CURVES (Cubic Bezier curves)
// =========================================================
export const EASING = {
  // Apple / Linear inspired deceleration for entering elements
  entrance: [0.16, 1, 0.3, 1] as [number, number, number, number],
  // Clean acceleration for exiting elements
  exit: [0.7, 0, 0.84, 0] as [number, number, number, number],
  // Snappy responsive curve for interactive controls & micro-shifts
  snappy: [0.25, 1, 0.5, 1] as [number, number, number, number],
  // Smooth symmetrical transition for cross-fades and layout morphs
  standard: [0.2, 0.8, 0.2, 1] as [number, number, number, number],
} as const;

// =========================================================
// 3. SPRING PRESETS (Physically modeled microinteractions)
// =========================================================
export const SPRING = {
  // Tactile button / icon feedback (quick response, zero oscillation)
  tactile: {
    type: 'spring',
    stiffness: 420,
    damping: 30,
    mass: 0.8,
  },
  // Card hover & subtle elevation lift
  card: {
    type: 'spring',
    stiffness: 320,
    damping: 26,
    mass: 0.9,
  },
  // Navigation active pills & layout switches
  navPill: {
    type: 'spring',
    stiffness: 380,
    damping: 30,
  },
  // Mobile drawer / menu entrance
  drawer: {
    type: 'spring',
    stiffness: 340,
    damping: 32,
  },
} as const;

// =========================================================
// 4. MOTION DISTANCES (Restrained pixel displacements)
// =========================================================
export const DISTANCE = {
  micro: 4,
  sm: 8,
  md: 14,
  lg: 24,
} as const;

// =========================================================
// 5. ACCESSIBILITY / REDUCED MOTION HELPERS
// =========================================================
export function getSafeTransition(
  transition: Transition,
  shouldReduceMotion?: boolean | null
): Transition {
  if (shouldReduceMotion) {
    return { duration: 0 };
  }
  return transition;
}

// =========================================================
// 6. REUSABLE MOTION VARIANTS
// =========================================================

/**
 * Standard Fade In (Zero displacement)
 */
export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: DURATION.normal,
      ease: EASING.entrance,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: DURATION.fast,
      ease: EASING.exit,
    },
  },
};

/**
 * Subtle Fade Up (8-14px displacement, no jarring jumps)
 */
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: DISTANCE.md },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.normal,
      ease: EASING.entrance,
    },
  },
  exit: {
    opacity: 0,
    y: -DISTANCE.sm,
    transition: {
      duration: DURATION.fast,
      ease: EASING.exit,
    },
  },
};

/**
 * Stagger Container for sequential list / grid / nav link reveals
 */
export const createStaggerContainer = (
  staggerDelay = 0.04,
  delayChildren = 0
): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren,
    },
  },
});

/**
 * Directional Step Transition for multi-step funnels & wizard forms
 */
export const stepSlideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? DISTANCE.lg : -DISTANCE.lg,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: { duration: DURATION.normal, ease: EASING.entrance },
      opacity: { duration: DURATION.fast, ease: EASING.standard },
    },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -DISTANCE.lg : DISTANCE.lg,
    opacity: 0,
    transition: {
      x: { duration: DURATION.fast, ease: EASING.exit },
      opacity: { duration: DURATION.fast, ease: EASING.exit },
    },
  }),
};

/**
 * Tab Content Transition
 */
export const tabContentVariants: Variants = {
  hidden: { opacity: 0, y: DISTANCE.micro },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.fast,
      ease: EASING.entrance,
    },
  },
  exit: {
    opacity: 0,
    y: -DISTANCE.micro,
    transition: {
      duration: DURATION.instant,
      ease: EASING.exit,
    },
  },
};
