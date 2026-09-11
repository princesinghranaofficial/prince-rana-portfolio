/**
 * Centralized GA4 Analytics Event Layer
 * 
 * Production-grade, zero-PII Google Analytics 4 event tracking.
 * Safe for SSR, fails silently without degrading UI/UX or interrupting user interaction.
 * Supports GA4 DebugView via ?debug_mode=true or development mode.
 */

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (command: string, ...args: unknown[]) => void;
    [key: `ga-disable-${string}`]: boolean | undefined;
  }
}

/**
 * PII blacklist: Keys that must never be sent to Google Analytics under any circumstance.
 */
const PII_BLACKLIST = new Set([
  'name',
  'fullname',
  'firstname',
  'lastname',
  'email',
  'useremail',
  'user_email',
  'visitor_email',
  'phone',
  'phonenumber',
  'phone_number',
  'message',
  'description',
  'password',
  'token',
  'secret',
  'auth',
  'authorization',
  'address',
  'street',
  'city',
  'zip',
  'postal',
]);

/**
 * Checks whether debug_mode should be attached to events for GA4 DebugView.
 * Enabled in development or when ?debug_mode=true is set in URL / sessionStorage.
 */
function isDebugMode(): boolean {
  if (typeof window === 'undefined') return false;
  if (process.env.NODE_ENV === 'development') return true;
  try {
    if (window.location.search.includes('debug_mode=true')) {
      window.sessionStorage.setItem('ga_debug_mode', 'true');
      return true;
    }
    return window.sessionStorage.getItem('ga_debug_mode') === 'true';
  } catch {
    return false;
  }
}

/**
 * Sanitizes parameter values to ensure no email addresses or huge payloads leak into GA4.
 */
function sanitizeParamValue(val: unknown): unknown {
  if (typeof val === 'string') {
    // Redact any string that resembles an email address
    if (val.includes('@') && val.includes('.')) {
      return '[REDACTED]';
    }
    // Truncate excessively long strings
    if (val.length > 100) {
      return val.slice(0, 100);
    }
  }
  return val;
}

let lastEventKey = '';
let lastEventTime = 0;

/**
 * Core event sender. Wraps window.gtag safely with zero-PII filtering.
 * Prevents rapid double-firing from React onClick + DOM delegation.
 */
export function sendGAEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window === 'undefined') return;

  try {
    const cleanParams: Record<string, unknown> = {};

    if (params) {
      for (const [key, val] of Object.entries(params)) {
        if (!PII_BLACKLIST.has(key.toLowerCase()) && val !== undefined && val !== null) {
          cleanParams[key] = sanitizeParamValue(val);
        }
      }
    }

    const now = Date.now();
    const eventKey = `${eventName}:${JSON.stringify(cleanParams)}`;
    if (eventKey === lastEventKey && now - lastEventTime < 250) {
      return;
    }
    lastEventKey = eventKey;
    lastEventTime = now;

    if (isDebugMode()) {
      cleanParams.debug_mode = true;
    }

    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, cleanParams);
    }

    if (process.env.NODE_ENV === 'development') {
      console.log(`[GA4 Event] ${eventName}:`, cleanParams);
    }
  } catch (err) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('[GA4 Safe Failure]:', err);
    }
  }
}

// ==============================================================================
// 1. CONTACT INTENT TRACKING
// ==============================================================================

export type ContactMethod = 'email' | 'contact_form' | 'cal_booking' | 'linkedin' | 'contact_page' | 'direct';

export function trackContactClick(
  contactMethod: ContactMethod,
  ctaLocation = 'page_body',
  pagePath?: string,
  linkUrl?: string
) {
  const currentPath = pagePath || (typeof window !== 'undefined' ? window.location.pathname : '/');
  sendGAEvent('contact_click', {
    contact_method: contactMethod,
    cta_location: ctaLocation,
    page_path: currentPath,
    link_url: linkUrl ? sanitizeParamValue(linkUrl) : undefined,
  });
}

// ==============================================================================
// 2. EMAIL CLICKS TRACKING (Zero visitor/destination email address leakage)
// ==============================================================================

export function trackEmailClick(ctaLocation = 'direct', pagePath?: string) {
  const currentPath = pagePath || (typeof window !== 'undefined' ? window.location.pathname : '/');
  sendGAEvent('email_click', {
    cta_location: ctaLocation,
    page_path: currentPath,
  });
}

// ==============================================================================
// 3. CONTACT FORM TRACKING (Start & Strict Success-Only Submit)
// ==============================================================================

export function trackContactFormStart(formName = 'project_inquiry', ctaLocation = 'start_project_page', pagePath?: string) {
  const currentPath = pagePath || (typeof window !== 'undefined' ? window.location.pathname : '/start-project');
  sendGAEvent('contact_form_start', {
    form_name: formName,
    cta_location: ctaLocation,
    page_path: currentPath,
  });
}

export function trackContactFormSubmit(
  projectType?: string,
  budgetRange?: string,
  timeline?: string,
  formName = 'project_inquiry',
  pagePath?: string
) {
  const currentPath = pagePath || (typeof window !== 'undefined' ? window.location.pathname : '/start-project');
  sendGAEvent('contact_form_submit', {
    form_name: formName,
    page_path: currentPath,
    project_type: projectType ? sanitizeParamValue(projectType) : undefined,
    budget_range: budgetRange ? sanitizeParamValue(budgetRange) : undefined,
    timeline: timeline ? sanitizeParamValue(timeline) : undefined,
  });
}

// ==============================================================================
// 4. PRIMARY CONVERSION CTA TRACKING
// ==============================================================================

export function trackPrimaryCtaClick(
  ctaName: string,
  ctaLocation: string,
  pagePath?: string,
  destinationType = 'booking'
) {
  const currentPath = pagePath || (typeof window !== 'undefined' ? window.location.pathname : '/');
  sendGAEvent('primary_cta_click', {
    cta_name: ctaName,
    cta_location: ctaLocation,
    page_path: currentPath,
    destination_type: destinationType,
  });
}

// ==============================================================================
// 5. PROJECT VIEW & CTA TRACKING
// ==============================================================================

export function trackProjectView(projectSlug: string, projectName: string, pagePath?: string) {
  const currentPath = pagePath || (typeof window !== 'undefined' ? window.location.pathname : `/work/${projectSlug}`);
  sendGAEvent('project_view', {
    project_slug: projectSlug,
    project_name: projectName,
    page_path: currentPath,
  });
}

export function trackProjectCtaClick(
  projectName: string,
  ctaName: string,
  destinationType = 'external_demo',
  pagePath?: string
) {
  const currentPath = pagePath || (typeof window !== 'undefined' ? window.location.pathname : '/');
  sendGAEvent('project_cta_click', {
    project_name: projectName,
    cta_name: ctaName,
    destination_type: destinationType,
    page_path: currentPath,
  });
}

// ==============================================================================
// 6. RESUME / CV DOWNLOAD TRACKING
// ==============================================================================

export function trackResumeDownload(ctaLocation = 'page_body', pagePath?: string, fileType = 'pdf') {
  const currentPath = pagePath || (typeof window !== 'undefined' ? window.location.pathname : '/');
  sendGAEvent('resume_download', {
    cta_location: ctaLocation,
    page_path: currentPath,
    file_type: fileType,
  });
}

// ==============================================================================
// 7. STRATEGIC PROFILE LINK TRACKING
// ==============================================================================

export type ProfilePlatform = 'linkedin' | 'github' | 'twitter';

export function trackProfileLinkClick(platform: ProfilePlatform, ctaLocation = 'social_link', pagePath?: string) {
  const currentPath = pagePath || (typeof window !== 'undefined' ? window.location.pathname : '/');
  sendGAEvent('profile_link_click', {
    platform,
    cta_location: ctaLocation,
    page_path: currentPath,
  });
}

export function trackLinkedInClick(ctaLocation = 'social_link', pagePath?: string) {
  trackProfileLinkClick('linkedin', ctaLocation, pagePath);
  trackContactClick('linkedin', ctaLocation, pagePath);
}

export function trackGitHubClick(ctaLocation = 'social_link', pagePath?: string) {
  trackProfileLinkClick('github', ctaLocation, pagePath);
}

// ==============================================================================
// 8. ARTICLE ENGAGEMENT TRACKING (Only for published editorial posts)
// ==============================================================================

export function trackArticleView(articleSlug: string, articleTitle: string, pagePath?: string) {
  const currentPath = pagePath || (typeof window !== 'undefined' ? window.location.pathname : `/insights/${articleSlug}`);
  sendGAEvent('article_view', {
    article_slug: articleSlug,
    article_title: articleTitle,
    page_path: currentPath,
  });
}

// ==============================================================================
// BACKWARD-COMPATIBILITY: In-App UI Action Dispatcher
// ==============================================================================

export type AnalyticsEvent =
  | 'hero_book_call_clicked'
  | 'hero_view_work_clicked'
  | 'nav_book_call_clicked'
  | 'nav_work_clicked'
  | 'nav_item_clicked'
  | 'theme_toggled'
  | 'collectai_case_study_clicked'
  | 'ai_cfo_case_study_clicked'
  | 'product_lab_clicked'
  | 'services_clicked'
  | 'process_engaged'
  | 'insight_clicked'
  | 'final_book_call_clicked'
  | 'start_project_clicked'
  | 'work_project_opened'
  | 'work_filter_selected'
  | 'work_search_used'
  | 'work_clear_filters'
  | 'work_book_call_clicked'
  | 'work_start_project_clicked'
  | 'collectai_case_study_viewed'
  | 'collectai_section_engaged'
  | 'collectai_integration_viewed'
  | 'collectai_architecture_engaged'
  | 'collectai_book_call_clicked'
  | 'collectai_start_project_clicked'
  | 'product_lab_viewed'
  | 'lab_filter_selected'
  | 'lab_search_used'
  | 'lab_project_opened'
  | 'lab_project_viewed'
  | 'lab_screen_engaged'
  | 'lab_related_project_opened'
  | 'lab_book_call_clicked'
  | 'lab_start_project_clicked'
  | 'ai_cfo_case_study_viewed'
  | 'ai_cfo_cashflow_engaged'
  | 'ai_cfo_forecast_engaged'
  | 'ai_cfo_scenario_engaged'
  | 'ai_cfo_copilot_engaged'
  | 'ai_cfo_architecture_engaged'
  | 'ai_cfo_book_call_clicked'
  | 'ai_cfo_start_project_clicked'
  | 'services_viewed'
  | 'service_opened'
  | 'service_work_viewed'
  | 'service_start_project_clicked'
  | 'service_book_call_clicked'
  | 'service_faq_opened'
  | 'about_viewed'
  | 'about_work_clicked'
  | 'about_start_project_clicked'
  | 'about_book_call_clicked'
  | 'process_viewed'
  | 'process_start_project_clicked'
  | 'insights_viewed'
  | 'insight_opened'
  | 'insight_toc_clicked'
  | 'insight_code_copied'
  | 'insight_related_work_clicked'
  | 'insight_related_article_clicked'
  | 'insight_start_project_clicked'
  | 'inquiry_started'
  | 'inquiry_step_completed'
  | 'inquiry_budget_selected'
  | 'inquiry_reviewed'
  | 'inquiry_completed'
  | 'inquiry_failed'
  | 'book_page_viewed'
  | 'booking_started'
  | 'booking_completed'
  | 'booking_failed'
  | 'book_start_project_clicked'
  | 'investment_section_viewed'
  | 'investment_option_clicked'
  | 'investment_start_project_clicked'
  | 'investment_service_clicked';

export interface AnalyticsPayload {
  [key: string]: string | number | boolean | undefined;
}

export function trackEvent(event: AnalyticsEvent, payload?: AnalyticsPayload) {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(
      new CustomEvent('app:analytics', {
        detail: { event, payload, timestamp: Date.now() },
      })
    );
  }

  switch (event) {
    case 'inquiry_started':
      trackContactFormStart('project_inquiry', 'start_project_page');
      break;

    case 'inquiry_completed':
      trackContactFormSubmit(
        payload?.projectType ? String(payload.projectType) : undefined,
        payload?.budgetRange ? String(payload.budgetRange) : undefined,
        payload?.timeline ? String(payload.timeline) : undefined
      );
      break;

    case 'hero_book_call_clicked':
      trackPrimaryCtaClick('Book 30-Min Discovery Call', 'hero', undefined, 'booking');
      trackContactClick('cal_booking', 'hero');
      break;

    case 'nav_book_call_clicked':
      trackPrimaryCtaClick('Book Call', 'navbar', undefined, 'booking');
      trackContactClick('cal_booking', 'navbar');
      break;

    case 'final_book_call_clicked':
      trackPrimaryCtaClick('Book a Discovery Call', 'footer_cta', undefined, 'booking');
      trackContactClick('cal_booking', 'footer_cta');
      break;

    case 'start_project_clicked':
      trackPrimaryCtaClick('Start a Project', 'cta_button', undefined, 'inquiry_form');
      trackContactClick('contact_form', 'cta_button');
      break;

    case 'about_book_call_clicked':
      trackPrimaryCtaClick('Book a Call', 'about', undefined, 'booking');
      trackContactClick('cal_booking', 'about');
      break;

    case 'about_start_project_clicked':
      trackPrimaryCtaClick('Start a Project', 'about', undefined, 'inquiry_form');
      trackContactClick('contact_form', 'about');
      break;

    case 'service_book_call_clicked':
      trackPrimaryCtaClick('Book a Call', 'service', undefined, 'booking');
      trackContactClick('cal_booking', 'service');
      break;

    case 'service_start_project_clicked':
      trackPrimaryCtaClick('Start a Project', 'service', undefined, 'inquiry_form');
      trackContactClick('contact_form', 'service');
      break;

    case 'work_book_call_clicked':
      trackPrimaryCtaClick('Book a Call', 'work', undefined, 'booking');
      trackContactClick('cal_booking', 'work');
      break;

    case 'work_start_project_clicked':
      trackPrimaryCtaClick('Start a Project', 'work', undefined, 'inquiry_form');
      trackContactClick('contact_form', 'work');
      break;

    case 'collectai_book_call_clicked':
      trackPrimaryCtaClick('Book a Call', 'collectai', undefined, 'booking');
      trackContactClick('cal_booking', 'collectai');
      break;

    case 'collectai_start_project_clicked':
      trackPrimaryCtaClick('Start a Project', 'collectai', undefined, 'inquiry_form');
      trackContactClick('contact_form', 'collectai');
      break;

    case 'ai_cfo_book_call_clicked':
      trackPrimaryCtaClick('Book a Call', 'ai_cfo', undefined, 'booking');
      trackContactClick('cal_booking', 'ai_cfo');
      break;

    case 'ai_cfo_start_project_clicked':
      trackPrimaryCtaClick('Start a Project', 'ai_cfo', undefined, 'inquiry_form');
      trackContactClick('contact_form', 'ai_cfo');
      break;

    case 'lab_book_call_clicked':
      trackPrimaryCtaClick('Book a Call', 'lab', undefined, 'booking');
      trackContactClick('cal_booking', 'lab');
      break;

    case 'lab_start_project_clicked':
      trackPrimaryCtaClick('Start a Project', 'lab', undefined, 'inquiry_form');
      trackContactClick('contact_form', 'lab');
      break;

    case 'investment_start_project_clicked':
      trackPrimaryCtaClick('Start a Project', 'pricing', undefined, 'inquiry_form');
      trackContactClick('contact_form', 'pricing');
      break;

    default:
      break;
  }
}
