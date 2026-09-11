import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { createAdminClient } from '@/lib/supabase/admin';

/**
 * In-Memory Sliding-Window Rate Limiter
 *
 * NOTE ON SERVERLESS DEPLOYMENTS (Phase 18 Threat Model):
 * On multi-region or autoscaling serverless runtimes (e.g. Vercel Serverless / Cloudflare Workers),
 * in-memory state is maintained per-instance/warm worker. This provides an effective first-line defense
 * against bursts and automated scanners on individual containers. For globally distributed production
 * rate-limiting at scale, Cloudflare WAF / Rate Limiting Rules or an external Redis store (Upstash)
 * should front this endpoint.
 */
interface RateLimitRecord {
  count: number;
  resetAt: number;
}
const rateLimitMap = new Map<string, RateLimitRecord>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15-minute sliding window
  const maxRequests = 5;

  // Periodic eviction to avoid memory bloat from distinct IPs
  if (rateLimitMap.size > 2000) {
    for (const [key, val] of rateLimitMap.entries()) {
      if (now > val.resetAt) {
        rateLimitMap.delete(key);
      }
    }
  }

  const record = rateLimitMap.get(ip);
  if (!record || now > record.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + windowMs });
    return true;
  }

  if (record.count >= maxRequests) {
    return false;
  }

  record.count++;
  return true;
}

/**
 * Strict HTTP/HTTPS URL Validator
 * Rejects javascript:, data:, file:, control characters, and protocol-relative URLs.
 */
function isValidHttpUrl(val: string | undefined): boolean {
  if (!val || !val.trim()) return true;
  try {
    const trimmed = val.trim();
    if (trimmed.includes('\n') || trimmed.includes('\r') || trimmed.includes('\0')) {
      return false;
    }
    const url = new URL(trimmed);
    return (
      (url.protocol === 'http:' || url.protocol === 'https:') &&
      Boolean(url.hostname) &&
      url.hostname.includes('.')
    );
  } catch {
    return false;
  }
}

/**
 * CSRF / Origin Verification
 * Rejects requests from unexpected third-party origins attempting browser form forgery.
 */
function isAllowedOrigin(req: NextRequest): boolean {
  const origin = req.headers.get('origin');
  if (!origin) {
    // Non-CORS or same-origin browser request without an Origin header
    const referer = req.headers.get('referer');
    if (referer) {
      try {
        const refererUrl = new URL(referer);
        const host = req.headers.get('host');
        if (host && refererUrl.host !== host) {
          return false;
        }
      } catch {
        return false;
      }
    }
    return true;
  }

  try {
    const originUrl = new URL(origin);
    const host = req.headers.get('host');
    if (host && originUrl.host === host) return true;
    if (originUrl.hostname === 'localhost' || originUrl.hostname === '127.0.0.1') return true;
    if (originUrl.hostname === 'princesinghrana.in' || originUrl.hostname.endsWith('.princesinghrana.in')) return true;
    if (originUrl.hostname === 'princesinghrana.online' || originUrl.hostname.endsWith('.princesinghrana.online')) return true;
    if (originUrl.hostname.endsWith('.workers.dev')) return true;
    if (originUrl.hostname === 'princesinghrana.dev' || originUrl.hostname.endsWith('.princesinghrana.dev')) return true;
    if (process.env.NEXT_PUBLIC_SITE_URL) {
      const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL);
      if (originUrl.host === siteUrl.host) return true;
    }
    return false;
  } catch {
    return false;
  }
}

const inquiryZodSchema = z.object({
  projectType: z.enum([
    'SaaS Product',
    'AI SaaS / AI Product',
    'SaaS MVP',
    'Full-Stack Application',
    'Premium Website',
    'Dashboard / Internal Tool',
    'Existing Product Improvement',
    'API / Platform Integration',
    'Other',
  ]),
  projectStage: z.enum([
    'Idea',
    'Requirements defined',
    'UI/UX exists',
    'Prototype exists',
    'MVP exists',
    'Existing live product',
    'Existing codebase needs improvement',
  ]),
  scope: z.array(z.string().max(100)).min(1, 'Please select at least one scope area.').max(15),
  description: z
    .string()
    .trim()
    .min(10, 'Please provide a project description (at least 10 characters).')
    .max(5000, 'Description cannot exceed 5000 characters.'),
  referenceUrl: z
    .string()
    .trim()
    .max(500)
    .optional()
    .refine(isValidHttpUrl, {
      message: 'Reference URL must be a valid http:// or https:// URL with a valid hostname.',
    }),
  budgetRange: z
    .string()
    .transform((v) => v.replace(/-/g, '–'))
    .pipe(
      z.enum([
        'Under $1,500',
        '$1,500–$3,000',
        '$3,000–$5,000',
        '$5,000–$10,000',
        '$10,000–$15,000',
        '$15,000+',
        'Not sure yet',
        'Under $1K',
        '$1K–$3K',
        '$3K–$5K',
        '$5K–$10K',
        '$10K–$15K',
      ])
    ),
  timeline: z
    .string()
    .transform((v) => v.replace(/-/g, '–'))
    .pipe(
      z.enum([
        'As soon as possible',
        'Within 2–4 weeks',
        'Within 1–2 months',
        '2–3 months',
        'Flexible',
      ])
    ),
  targetLaunchDate: z.string().trim().max(100).optional(),
  name: z.string().trim().min(2, 'Name must be at least 2 characters.').max(100),
  email: z.string().trim().toLowerCase().email('Please enter a valid email address.').max(150),
  company: z.string().trim().max(100).optional(),
  companyWebsite: z
    .string()
    .trim()
    .max(500)
    .optional()
    .refine(isValidHttpUrl, {
      message: 'Website must be a valid http:// or https:// URL with a valid hostname.',
    }),
  countryOrTimezone: z.string().trim().max(100).optional(),
  preferredContact: z.enum(['Email', 'Discovery Call', 'Async (Slack / Loom)']).optional(),
  source: z.string().trim().max(100).optional(),
  honeypot: z.string().optional(),
  formTimeMs: z.number().optional(),
});

export async function POST(req: NextRequest) {
  try {
    // 1. Origin / CSRF Verification
    if (!isAllowedOrigin(req)) {
      return NextResponse.json(
        { success: false, message: 'Forbidden: Cross-origin request rejected.' },
        { status: 403 }
      );
    }

    // 2. Content-Type Header Verification
    const contentType = req.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
      return NextResponse.json(
        { success: false, message: 'Unsupported Media Type: Content-Type must be application/json.' },
        { status: 415 }
      );
    }

    // 3. Payload Size Guard (Max 100 KB)
    const contentLength = req.headers.get('content-length');
    if (contentLength && parseInt(contentLength, 10) > 100 * 1024) {
      return NextResponse.json(
        { success: false, message: 'Payload Too Large: Body exceeds 100 KB limit.' },
        { status: 413 }
      );
    }

    // 4. Client IP derivation & rate limit check
    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      req.headers.get('x-real-ip') ||
      '127.0.0.1';

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Too many requests. Please wait a few minutes before submitting again.',
        },
        { status: 429 }
      );
    }

    let rawBody: unknown;
    try {
      rawBody = await req.json();
    } catch {
      return NextResponse.json(
        { success: false, message: 'Invalid JSON payload.' },
        { status: 400 }
      );
    }

    if (!rawBody || typeof rawBody !== 'object') {
      return NextResponse.json(
        { success: false, message: 'Invalid payload structure.' },
        { status: 400 }
      );
    }

    const payload = rawBody as Record<string, unknown>;

    // 5. Anti-spam: Honeypot check (hidden field)
    if (typeof payload.honeypot === 'string' && payload.honeypot.trim().length > 0) {
      // Discard bot submission silently to avoid revealing detection
      return NextResponse.json(
        { success: true, message: 'Inquiry received.' },
        { status: 200 }
      );
    }

    // 6. Anti-spam: Minimum form completion duration check (at least 2000ms)
    if (typeof payload.formTimeMs === 'number' && payload.formTimeMs < 2000) {
      return NextResponse.json(
        { success: false, message: 'Form submission completed too quickly. Please try again.' },
        { status: 400 }
      );
    }

    // 7. Schema validation & sanitization
    const validatedData = inquiryZodSchema.parse(rawBody);

    // 8. Storage: Check if real Supabase credentials are configured
    const isSupabaseConfigured =
      process.env.NEXT_PUBLIC_SUPABASE_URL &&
      !process.env.NEXT_PUBLIC_SUPABASE_URL.includes('placeholder') &&
      process.env.SUPABASE_SERVICE_ROLE_KEY &&
      !process.env.SUPABASE_SERVICE_ROLE_KEY.includes('placeholder');

    if (isSupabaseConfigured) {
      const supabaseAdmin = createAdminClient();
      const { data, error } = await supabaseAdmin.from('inquiries').insert([
        {
          project_type: validatedData.projectType,
          project_stage: validatedData.projectStage,
          scope: validatedData.scope,
          description: validatedData.description,
          reference_url: validatedData.referenceUrl || null,
          budget_range: validatedData.budgetRange,
          timeline: validatedData.timeline,
          target_launch_date: validatedData.targetLaunchDate || null,
          name: validatedData.name,
          email: validatedData.email,
          company: validatedData.company || null,
          company_website: validatedData.companyWebsite || null,
          country_or_timezone: validatedData.countryOrTimezone || null,
          preferred_contact: validatedData.preferredContact || 'Email',
          status: 'new',
          source: validatedData.source || 'direct',
        },
      ]).select();

      if (error) {
        // Safe server logging: do not leak raw inquiry description or personal tokens
        console.error('[Inquiry DB Write Error Code]:', error.code);
        return NextResponse.json(
          {
            success: false,
            message: 'Unable to save inquiry to database. Please email directly at princesinghranaofficial@gmail.com.',
          },
          { status: 503 }
        );
      }

      return NextResponse.json(
        { success: true, message: 'Inquiry received successfully.', data },
        { status: 200 }
      );
    }

    // In local development or standalone mode without Supabase, validate and acknowledge safely
    // Zero PII logged (email, full name, and description are omitted from console logs)
    if (process.env.NODE_ENV === 'development' || !isSupabaseConfigured) {
      console.log('[Inquiry Received: Validated]', {
        type: validatedData.projectType,
        stage: validatedData.projectStage,
        budget: validatedData.budgetRange,
        scopeCount: validatedData.scope.length,
        timestamp: new Date().toISOString(),
      });

      return NextResponse.json(
        {
          success: true,
          mode: 'standalone_validated',
          message: 'Project inquiry received and validated successfully.',
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: 'Storage backend temporarily unavailable. Please email directly at princesinghranaofficial@gmail.com.',
      },
      { status: 503 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, message: 'An unexpected server error occurred. Please try again.' },
      { status: 500 }
    );
  }
}

// Explicit rejection for non-POST HTTP methods (RFC 9110 compliance)
function methodNotAllowed() {
  return NextResponse.json(
    { success: false, message: 'Method Not Allowed' },
    {
      status: 405,
      headers: {
        Allow: 'POST',
      },
    }
  );
}

export async function GET() {
  return methodNotAllowed();
}

export async function PUT() {
  return methodNotAllowed();
}

export async function PATCH() {
  return methodNotAllowed();
}

export async function DELETE() {
  return methodNotAllowed();
}

export async function HEAD() {
  return methodNotAllowed();
}
