-- =========================================================
-- PREMIUM PORTFOLIO & CLIENT-ACQUISITION WEBSITE
-- DATABASE SCHEMA & ROW LEVEL SECURITY (RLS) POLICIES
-- =========================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. INQUIRIES TABLE
CREATE TABLE IF NOT EXISTS public.inquiries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
    project_type VARCHAR(100) NOT NULL,
    project_stage VARCHAR(100) NOT NULL,
    scope TEXT[] NOT NULL DEFAULT '{}',
    description TEXT NOT NULL,
    reference_url TEXT,
    budget_range VARCHAR(50) NOT NULL,
    timeline VARCHAR(50) NOT NULL,
    target_launch_date VARCHAR(100),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    company VARCHAR(255),
    company_website TEXT,
    country_or_timezone VARCHAR(100),
    preferred_contact VARCHAR(50) DEFAULT 'Email',
    status VARCHAR(50) DEFAULT 'new' NOT NULL CHECK (status IN ('new', 'qualified', 'contacted', 'proposal', 'won', 'lost')),
    source VARCHAR(100) DEFAULT 'direct'
);

-- Index for admin queries and sorting
CREATE INDEX IF NOT EXISTS idx_inquiries_created_at ON public.inquiries (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_inquiries_status ON public.inquiries (status);

-- Enable RLS on inquiries
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;

-- Anonymous public users can INSERT inquiries (Submit multi-step form)
CREATE POLICY "Public anonymous insert inquiries" ON public.inquiries
    FOR INSERT
    WITH CHECK (true);

-- Anonymous public users CANNOT SELECT/READ inquiries (Strict Privacy & Security)
CREATE POLICY "Deny anonymous select inquiries" ON public.inquiries
    FOR SELECT
    USING (false);

-- Only authenticated admins can select, update, or delete inquiries
CREATE POLICY "Admin full access inquiries" ON public.inquiries
    FOR ALL
    USING (auth.role() = 'authenticated');

-- 2. PROJECTS TABLE (CMS Data)
CREATE TABLE IF NOT EXISTS public.projects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug VARCHAR(255) UNIQUE NOT NULL,
    title VARCHAR(255) NOT NULL,
    subtitle TEXT NOT NULL,
    category VARCHAR(100) NOT NULL,
    project_type VARCHAR(50) NOT NULL CHECK (project_type IN ('REAL PRODUCT', 'CONCEPT', 'PROTOTYPE')),
    description TEXT NOT NULL,
    year VARCHAR(10) NOT NULL,
    status VARCHAR(50) NOT NULL,
    featured BOOLEAN DEFAULT false NOT NULL,
    cover_image TEXT NOT NULL,
    screens JSONB DEFAULT '[]'::jsonb NOT NULL,
    technologies TEXT[] NOT NULL,
    services TEXT[] NOT NULL,
    problem TEXT NOT NULL,
    solution TEXT NOT NULL,
    features JSONB DEFAULT '[]'::jsonb NOT NULL,
    architecture TEXT NOT NULL,
    outcome TEXT NOT NULL,
    links JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

-- Enable RLS on projects
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

-- Public users can read projects
CREATE POLICY "Public read projects" ON public.projects
    FOR SELECT
    USING (true);

-- Admin can manage projects
CREATE POLICY "Admin manage projects" ON public.projects
    FOR ALL
    USING (auth.role() = 'authenticated');

-- 3. INSIGHTS / BLOG TABLE
CREATE TABLE IF NOT EXISTS public.insights (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug VARCHAR(255) UNIQUE NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    category VARCHAR(100) NOT NULL,
    published_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
    reading_time VARCHAR(50) NOT NULL,
    author JSONB NOT NULL,
    content TEXT NOT NULL,
    toc JSONB DEFAULT '[]'::jsonb,
    related_slugs TEXT[] DEFAULT ARRAY[]::TEXT[]
);

-- Enable RLS on insights
ALTER TABLE public.insights ENABLE ROW LEVEL SECURITY;

-- Public users can read published insights
CREATE POLICY "Public read insights" ON public.insights
    FOR SELECT
    USING (true);

-- Admin manage insights
CREATE POLICY "Admin manage insights" ON public.insights
    FOR ALL
    USING (auth.role() = 'authenticated');
