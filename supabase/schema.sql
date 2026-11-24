-- ==============================================================================
-- CAREER LAUNCHPAD: PRODUCTION DATABASE SCHEMA (POSTGRESQL / SUPABASE)
-- Tagline: From Zero Knowledge to Your First Career
-- ==============================================================================

-- Enable UUID Extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Profiles Table (extends auth.users)
CREATE TABLE IF NOT EXISTS profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    full_name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    phone TEXT,
    preferred_language TEXT DEFAULT 'English',
    current_education TEXT,
    english_proficiency TEXT DEFAULT 'Basic',
    coding_comfort TEXT DEFAULT 'No Coding',
    computer_type TEXT DEFAULT 'Basic Laptop / PC',
    bio TEXT,
    avatar_url TEXT,
    is_admin BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Career Categories
CREATE TABLE IF NOT EXISTS career_categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    name_ml TEXT NOT NULL,
    description TEXT,
    description_ml TEXT,
    icon_name TEXT,
    color_hex TEXT,
    sort_order INT DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Careers
CREATE TABLE IF NOT EXISTS careers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    title_ml TEXT NOT NULL,
    duration_track TEXT NOT NULL CHECK (duration_track IN ('30-day', '60-day', '90-day', '120-day')),
    duration_days INT NOT NULL,
    estimated_hours INT NOT NULL,
    category_id UUID REFERENCES career_categories(id) ON DELETE SET NULL,
    tagline TEXT,
    tagline_ml TEXT,
    summary TEXT,
    overview TEXT,
    overview_ml TEXT,
    beginner_eligible BOOLEAN DEFAULT TRUE,
    remote_opportunities TEXT,
    part_time_opportunities TEXT,
    english_proficiency TEXT DEFAULT 'Basic',
    entry_salary_min NUMERIC(10, 2),
    entry_salary_max NUMERIC(10, 2),
    entry_salary_currency TEXT DEFAULT 'INR',
    entry_salary_source TEXT,
    publication_status TEXT DEFAULT 'Published' CHECK (publication_status IN ('Published', 'In Development', 'Planned')),
    last_verified_date DATE DEFAULT CURRENT_DATE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. Courses
CREATE TABLE IF NOT EXISTS courses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    career_id UUID UNIQUE REFERENCES careers(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    title_ml TEXT,
    duration_days INT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 5. Course Modules
CREATE TABLE IF NOT EXISTS course_modules (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
    week_number INT NOT NULL,
    title TEXT NOT NULL,
    title_ml TEXT,
    objective TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 6. Course Lessons
CREATE TABLE IF NOT EXISTS course_lessons (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    module_id UUID REFERENCES course_modules(id) ON DELETE CASCADE,
    day_number INT NOT NULL,
    title TEXT NOT NULL,
    title_ml TEXT,
    duration_minutes INT DEFAULT 45,
    overview TEXT,
    simple_english_guide TEXT,
    malayalam_notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 7. Learning Resources
CREATE TABLE IF NOT EXISTS learning_resources (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    lesson_id UUID REFERENCES course_lessons(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    provider TEXT NOT NULL,
    direct_url TEXT NOT NULL,
    language TEXT DEFAULT 'English',
    duration TEXT,
    difficulty TEXT DEFAULT 'Beginner',
    cost_status TEXT DEFAULT '100% Free',
    account_required BOOLEAN DEFAULT FALSE,
    last_verified_date DATE DEFAULT CURRENT_DATE,
    status TEXT DEFAULT 'Active' CHECK (status IN ('Active', 'Under Review', 'Reported Broken')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 8. Enrolments
CREATE TABLE IF NOT EXISTS enrolments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
    status TEXT DEFAULT 'active' CHECK (status IN ('active', 'completed', 'paused')),
    progress_percentage INT DEFAULT 0,
    started_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    completed_at TIMESTAMP WITH TIME ZONE,
    UNIQUE(user_id, course_id)
);

-- 9. Lesson Progress
CREATE TABLE IF NOT EXISTS lesson_progress (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    enrolment_id UUID REFERENCES enrolments(id) ON DELETE CASCADE,
    lesson_id UUID REFERENCES course_lessons(id) ON DELETE CASCADE,
    completed BOOLEAN DEFAULT FALSE,
    quiz_score INT,
    notes TEXT,
    completed_at TIMESTAMP WITH TIME ZONE,
    UNIQUE(enrolment_id, lesson_id)
);

-- 10. Assessments & Questions
CREATE TABLE IF NOT EXISTS assessments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    passing_score INT DEFAULT 70,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE IF NOT EXISTS questions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    assessment_id UUID REFERENCES assessments(id) ON DELETE CASCADE,
    question_text TEXT NOT NULL,
    options JSONB NOT NULL,
    correct_option_index INT NOT NULL,
    explanation TEXT,
    sort_order INT DEFAULT 0
);

-- 11. Assessment Attempts
CREATE TABLE IF NOT EXISTS assessment_attempts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    assessment_id UUID REFERENCES assessments(id) ON DELETE CASCADE,
    score INT NOT NULL,
    passed BOOLEAN NOT NULL,
    answers JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 12. Course Projects & Submissions
CREATE TABLE IF NOT EXISTS projects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT,
    scenario TEXT,
    instructions JSONB,
    deliverables JSONB,
    grading_rubric JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE IF NOT EXISTS project_submissions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
    submission_url TEXT,
    file_attachment_url TEXT,
    notes TEXT,
    score INT,
    feedback TEXT,
    status TEXT DEFAULT 'submitted' CHECK (status IN ('submitted', 'graded', 'resubmitted')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 13. Portfolios
CREATE TABLE IF NOT EXISTS portfolios (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID UNIQUE REFERENCES profiles(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    headline TEXT,
    bio TEXT,
    showcase_projects JSONB,
    skills JSONB,
    published BOOLEAN DEFAULT FALSE,
    custom_slug TEXT UNIQUE,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 14. Job Listings & Ethical Reviews
CREATE TABLE IF NOT EXISTS job_listings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    company TEXT NOT NULL,
    location TEXT NOT NULL,
    work_mode TEXT NOT NULL CHECK (work_mode IN ('Remote', 'Hybrid', 'Onsite')),
    job_type TEXT NOT NULL CHECK (job_type IN ('Internship', 'Entry-Level', 'Trainee', 'Part-time', 'Freelance')),
    salary_text TEXT,
    career_slug TEXT,
    category TEXT,
    experience_required TEXT DEFAULT 'Zero Experience Required',
    skills_required JSONB,
    description TEXT,
    direct_apply_url TEXT NOT NULL,
    source TEXT NOT NULL,
    is_verified_vacancy BOOLEAN DEFAULT TRUE,
    is_expired BOOLEAN DEFAULT FALSE,
    ethical_status TEXT DEFAULT 'Meets Criteria' CHECK (ethical_status IN ('Meets Criteria', 'Under Review', 'Flagged')),
    ethical_review_notes TEXT,
    anti_scam_verified BOOLEAN DEFAULT TRUE,
    last_verified_date DATE DEFAULT CURRENT_DATE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 15. Saved Jobs & Applications
CREATE TABLE IF NOT EXISTS saved_jobs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    job_id UUID REFERENCES job_listings(id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    UNIQUE(user_id, job_id)
);

CREATE TABLE IF NOT EXISTS applications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    job_id UUID REFERENCES job_listings(id) ON DELETE SET NULL,
    custom_job_title TEXT,
    custom_company TEXT,
    status TEXT DEFAULT 'Applied' CHECK (status IN ('Saved', 'Applied', 'Screening', 'Interview', 'Offered', 'Archived')),
    applied_date DATE DEFAULT CURRENT_DATE,
    notes TEXT,
    link TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 16. Resource Verification Logs
CREATE TABLE IF NOT EXISTS resource_verification_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    resource_id UUID REFERENCES learning_resources(id) ON DELETE CASCADE,
    http_status_code INT,
    response_time_ms INT,
    error_message TEXT,
    verified_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 17. Scam & Broken Link Reports
CREATE TABLE IF NOT EXISTS reports (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
    report_type TEXT NOT NULL CHECK (report_type IN ('scam_job', 'broken_resource', 'inaccurate_content', 'other')),
    target_id TEXT,
    details TEXT NOT NULL,
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'investigating', 'resolved', 'dismissed')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 18. Notifications
CREATE TABLE IF NOT EXISTS notifications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    message TEXT NOT NULL,
    link_url TEXT,
    read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ==============================================================================
-- INDEXES FOR PERFORMANCE
-- ==============================================================================
CREATE INDEX IF NOT EXISTS idx_careers_slug ON careers(slug);
CREATE INDEX IF NOT EXISTS idx_careers_duration ON careers(duration_track);
CREATE INDEX IF NOT EXISTS idx_careers_category ON careers(category_id);
CREATE INDEX IF NOT EXISTS idx_job_listings_slug ON job_listings(career_slug);
CREATE INDEX IF NOT EXISTS idx_job_listings_ethical ON job_listings(ethical_status);
CREATE INDEX IF NOT EXISTS idx_job_listings_work_mode ON job_listings(work_mode);
CREATE INDEX IF NOT EXISTS idx_enrolments_user ON enrolments(user_id);
CREATE INDEX IF NOT EXISTS idx_lesson_progress_enrolment ON lesson_progress(enrolment_id);

-- ==============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ==============================================================================
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE enrolments ENABLE ROW LEVEL SECURITY;
ALTER TABLE lesson_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE assessment_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE portfolios ENABLE ROW LEVEL SECURITY;
ALTER TABLE saved_jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;

-- Public Read for Catalog Data
ALTER TABLE career_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE careers ENABLE ROW LEVEL SECURITY;
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE course_modules ENABLE ROW LEVEL SECURITY;
ALTER TABLE course_lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE learning_resources ENABLE ROW LEVEL SECURITY;
ALTER TABLE job_listings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view active categories" ON career_categories FOR SELECT USING (true);
CREATE POLICY "Public can view active careers" ON careers FOR SELECT USING (true);
CREATE POLICY "Public can view courses" ON courses FOR SELECT USING (true);
CREATE POLICY "Public can view modules" ON course_modules FOR SELECT USING (true);
CREATE POLICY "Public can view lessons" ON course_lessons FOR SELECT USING (true);
CREATE POLICY "Public can view verified resources" ON learning_resources FOR SELECT USING (status = 'Active');
CREATE POLICY "Public can view active jobs" ON job_listings FOR SELECT USING (is_expired = false AND ethical_status = 'Meets Criteria');

-- Users can read/write their own records
CREATE POLICY "Users can view own profile" ON profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Users can view own enrolments" ON enrolments FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can manage own applications" ON applications FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can manage own saved jobs" ON saved_jobs FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can view own notifications" ON notifications FOR ALL USING (auth.uid() = user_id);
