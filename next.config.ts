import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  // Permanent redirects for legacy aliases and URL normalization
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.princesinghrana.in',
          },
        ],
        destination: 'https://princesinghrana.in/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'princesinghrana.online',
          },
        ],
        destination: 'https://princesinghrana.in/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.princesinghrana.online',
          },
        ],
        destination: 'https://princesinghrana.in/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'prince-rana-portfolio.princesinghranaofficial.workers.dev',
          },
        ],
        destination: 'https://princesinghrana.in/:path*',
        permanent: true,
      },
      {
        source: '/work/ai-cfo',
        destination: '/work/ai-cfo-copilot',
        permanent: true,
      },
      {
        source: '/projects',
        destination: '/work',
        permanent: true,
      },
      {
        source: '/blog',
        destination: '/insights',
        permanent: true,
      },
      {
        source: '/product-lab',
        destination: '/lab',
        permanent: true,
      },
    ];
  },
  // Security headers
  async headers() {
    const cspHeader = `
      default-src 'self';
      script-src 'self' 'unsafe-inline' https://cal.com https://*.cal.com https://app.cal.com;
      style-src 'self' 'unsafe-inline';
      img-src 'self' data: blob: https://images.unsplash.com https://*.googleusercontent.com https://cal.com https://app.cal.com;
      font-src 'self' data:;
      connect-src 'self' https://*.supabase.co https://cal.com https://*.cal.com https://api.cal.com https://app.cal.com;
      frame-src 'self' https://cal.com https://*.cal.com https://app.cal.com;
      frame-ancestors 'none';
      object-src 'none';
      base-uri 'self';
      form-action 'self';
    `.replace(/\s{2,}/g, ' ').trim();

    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: cspHeader,
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), browsing-topics=(), payment=()",
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
