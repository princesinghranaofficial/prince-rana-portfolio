/**
 * Centralized Design System Tokens
 * Source of truth for programmatic access across components, motion animations, and visual QA.
 */

export const COLOR_TOKENS = {
  light: {
    background: '#fafafc',
    foreground: '#111215',
    surface: '#ffffff',
    surfaceElevated: '#ffffff',
    surfaceMuted: '#f3f3f6',
    textPrimary: '#111215',
    textSecondary: '#51545e',
    textTertiary: '#838794',
    border: 'rgba(17, 18, 21, 0.08)',
    borderStrong: 'rgba(17, 18, 21, 0.16)',
    borderInteractive: 'rgba(17, 18, 21, 0.32)',
    accent: '#2563eb',
    accentHover: '#1d4ed8',
    accentForeground: '#ffffff',
    accentMuted: 'rgba(37, 99, 235, 0.08)',
    accentGlow: 'rgba(37, 99, 235, 0.18)',
    success: '#059669',
    successMuted: 'rgba(5, 150, 105, 0.08)',
    warning: '#d97706',
    warningMuted: 'rgba(217, 119, 6, 0.08)',
    error: '#dc2626',
    errorMuted: 'rgba(220, 38, 38, 0.08)',
  },
  dark: {
    background: '#0b0c0e',
    foreground: '#f4f5f7',
    surface: '#121316',
    surfaceElevated: '#181a1e',
    surfaceMuted: '#15161a',
    textPrimary: '#f4f5f7',
    textSecondary: '#9da0ac',
    textTertiary: '#696c78',
    border: 'rgba(255, 255, 255, 0.08)',
    borderStrong: 'rgba(255, 255, 255, 0.16)',
    borderInteractive: 'rgba(255, 255, 255, 0.30)',
    accent: '#3b82f6',
    accentHover: '#60a5fa',
    accentForeground: '#ffffff',
    accentMuted: 'rgba(59, 130, 246, 0.14)',
    accentGlow: 'rgba(59, 130, 246, 0.24)',
    success: '#10b981',
    successMuted: 'rgba(16, 185, 129, 0.14)',
    warning: '#f59e0b',
    warningMuted: 'rgba(245, 158, 11, 0.14)',
    error: '#ef4444',
    errorMuted: 'rgba(239, 68, 68, 0.14)',
  },
} as const;

export const SPACING_SCALE = [
  { name: '1', px: 4, rem: '0.25rem' },
  { name: '2', px: 8, rem: '0.5rem' },
  { name: '3', px: 12, rem: '0.75rem' },
  { name: '4', px: 16, rem: '1rem' },
  { name: '5', px: 20, rem: '1.25rem' },
  { name: '6', px: 24, rem: '1.5rem' },
  { name: '8', px: 32, rem: '2rem' },
  { name: '10', px: 40, rem: '2.5rem' },
  { name: '12', px: 48, rem: '3rem' },
  { name: '16', px: 64, rem: '4rem' },
  { name: '20', px: 80, rem: '5rem' },
  { name: '24', px: 96, rem: '6rem' },
  { name: '30', px: 120, rem: '7.5rem' },
  { name: '40', px: 160, rem: '10rem' },
] as const;

export const CONTAINER_MAX_WIDTHS = {
  narrow: '56rem',   // 896px - max-w-4xl
  default: '80rem',  // 1280px - max-w-7xl
  wide: '90rem',     // 1440px
  cinematic: '108rem', // 1728px
  full: '100%',
} as const;

export const BREAKPOINTS = {
  mobileSm: 360,
  mobile: 375,
  mobileLg: 390,
  mobileXl: 430,
  tablet: 768,
  laptop: 1024,
  desktop: 1280,
  desktopLg: 1440,
  desktopXl: 1728,
} as const;

export const RADIUS_TOKENS = {
  sm: '0.25rem', // 4px
  md: '0.5rem',  // 8px
  lg: '0.75rem', // 12px
  xl: '1rem',    // 16px
  full: '9999px',
} as const;

export const MOTION_TOKENS = {
  duration: {
    fast: 0.15,   // 150ms - microinteractions, toggles
    normal: 0.25, // 250ms - modals, accordions, tabs
    slow: 0.4,    // 400ms - large visual reveals
  },
  easing: {
    standard: [0.16, 1, 0.3, 1], // Apple-inspired fluid ease-out
    enter: [0, 0, 0.2, 1],
    exit: [0.4, 0, 1, 1],
  },
} as const;
