# Portfolio Website Specification - Version 1

## Project Overview
A minimalist portfolio website for João Ferreira, Software Engineer, built with Next.js and TypeScript, focusing on clean design, strong SEO, and excellent user experience.

## Technology Stack
- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Inter (primary sans-serif), Source Serif 4 (secondary serif)
- **Deployment**: Vercel

## Design System

### Color Palette
- **Background**: `#faf9f5` (warm off-white)
- **Text**: `#000000` (pure black)
- **Accent/Cards**: `#e3dacc` (warm beige/tan)
- **Secondary Text**: `#333333` (dark gray for hierarchy)

### Typography
- **Primary Font**: Inter (body text, UI elements)
- **Secondary Font**: Source Serif 4 (headings, quotes)
- **Font Weights**: Regular (400), Medium (500), Semibold (600)
- **Base Size**: 16px with responsive scaling
- **Font Loading**: Optimized with next/font/google, display: swap

### Spacing System
- **Base Unit**: 4px
- **Spacing Scale**: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px

## Page Structure

### 1. Home Page (`/`)
**Purpose**: Welcome visitors and provide navigation to key sections

**Content**:
- Hero section with name and title
- Brief introduction (2-3 sentences)
- Navigation links to Home, About, and Projects
- Minimalist design with focus on typography

**Components**:
- Hero component
- Navigation component
- Call-to-action buttons

### 2. About Page (`/about`)
**Purpose**: Professional background and skills overview

**Content**:
- Professional summary
- Skills and technologies
- Experience timeline
- Contact information
- Links to social profiles (GitHub, LinkedIn, etc.)

**Components**:
- About section
- Skills grid/list
- Experience timeline
- Contact section

### 3. Projects Page (`/projects`)
**Purpose**: Showcase work and technical projects

**Content**:
- Project cards with:
  - Project title
  - Brief description
  - Technologies used
  - Links to live demo and repository
  - Optional thumbnail/preview

**Components**:
- Project grid layout
- Project card component
- Filter/search functionality (optional for v1)

## SEO Requirements

### Technical SEO
- Semantic HTML structure
- Proper heading hierarchy (H1, H2, H3)
- Meta descriptions for each page
- Open Graph tags for social sharing
- Twitter Card tags
- Canonical URLs
- XML sitemap
- robots.txt file
- Structured data (Schema.org) for Person and Project types

### Performance SEO
- Image optimization (Next.js Image component)
- Font optimization (subsetting, loading strategy)
- Code splitting
- Lazy loading for non-critical content
- Core Web Vitals optimization

### Content SEO
- Keyword optimization for "Software Engineer", "Full Stack Developer"
- Descriptive alt text for images
- Mobile-first responsive design
- Fast page load times (< 3 seconds)

## Component Architecture

### Layout Components
- `Layout` - Root layout with fonts, global styles, and metadata
- `Header` - Site navigation (Home, About, Projects)
- `Footer` - Copyright footer
- `Container` - Responsive content wrapper with max-width constraints

### UI Components
- `Button` - Client component with primary/secondary variants, supports both links and buttons
- `Card` - Content card with accent background
- `Section` - Consistent section spacing with py-16

### Page-Specific Components
- Content sections implemented directly in page components for simplicity
- Project cards with technology tags and action buttons
- Skills tags as styled spans
- Experience timeline entries using Card component

## File Structure
```
portfolio-website/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── about/
│   │   └── page.tsx        # About page
│   ├── projects/
│   │   └── page.tsx        # Projects page
│   ├── robots.txt          # SEO robots file
│   └── sitemap.ts          # SEO sitemap
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Navigation with Home, About, Projects
│   │   ├── Footer.tsx      # Copyright footer
│   │   └── Container.tsx   # Responsive wrapper
│   └── ui/
│       ├── Button.tsx      # Client component with variants
│       ├── Card.tsx        # Content cards
│       └── Section.tsx     # Section spacing
├── lib/
│   └── fonts.ts            # Inter and Source Serif 4 configuration
├── public/
│   └── images/             # Static images (if needed)
├── package.json
├── tsconfig.json
├── tailwind.config.ts     # Custom colors and fonts
├── next.config.js
├── vercel.json            # Vercel deployment config
├── .env.example           # Environment variables template
└── README.md              # Project documentation
```

## Implementation Steps

### Phase 1: Project Setup
1. Initialize Next.js project with TypeScript
2. Install dependencies (Tailwind CSS, etc.)
3. Configure TypeScript
4. Set up Tailwind CSS with custom color palette
5. Configure PostCSS

### Phase 2: Design System Setup
1. Integrate Inter and Source Serif 4 fonts via next/font/google
2. Create global CSS with design tokens
3. Set up Tailwind configuration with custom colors
4. Create base layout component with suppressHydrationWarning
5. Implement responsive container

### Phase 3: Core Components
1. Build Header/Navigation component
2. Build Footer component
3. Create Button component
4. Create Card component
5. Create Section wrapper component

### Phase 4: Page Implementation
1. Implement Home page with Hero section
2. Implement About page with content sections
3. Implement Projects page with project cards
4. Add navigation between pages
5. Implement responsive design

### Phase 5: SEO Optimization
1. Add metadata to each page
2. Create robots.txt
3. Generate sitemap
4. Add Open Graph tags
5. Add Twitter Card tags
6. Implement structured data
7. Optimize images and fonts

### Phase 6: Testing & Deployment
1. Test responsive design across devices
2. Validate SEO with Lighthouse
3. Check accessibility (WCAG compliance)
4. Set up deployment configuration
5. Configure environment variables

## Content Requirements

### Home Page Content
- Name: João Ferreira
- Title: Software Engineer
- Introduction: Brief professional summary
- Navigation: Home, About, Projects
- Call-to-action buttons for About and Projects pages

### About Page Content
- Professional summary (3-4 paragraphs)
- Technical skills list
- Work experience timeline
- Education background
- Contact information
- Social media links (GitHub, LinkedIn)

### Projects Page Content
- 3 featured projects
- Each project includes:
  - Title and description
  - Technologies used
  - Live demo link
  - Source code link
  - Brief overview of challenges/solutions

## Performance Targets
- Lighthouse Performance Score: 90+
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1

## Accessibility Requirements
- WCAG 2.1 Level AA compliance
- Keyboard navigation support
- Screen reader compatibility
- Color contrast ratio ≥ 4.5:1
- Proper ARIA labels
- Focus indicators

## Future Enhancements (Beyond Version 1)
- Blog section
- Contact form
- Dark mode toggle
- Project filtering
- Animations and transitions
- Internationalization (i18n)
- Analytics integration

## Success Criteria
- Clean, minimalist design matching specifications ✅
- All three pages functional and accessible ✅
- SEO score > 90 on Lighthouse ✅
- Responsive design working on mobile, tablet, desktop ✅
- Fonts loading correctly ✅
- Color scheme implemented as specified ✅
- Fast page load times ✅
- Accessibility compliance ✅
- Consistent navigation across all pages ✅
- No hydration errors ✅

## Implementation Status
- ✅ Phase 1: Project Setup - Completed
- ✅ Phase 2: Design System Setup - Completed
- ✅ Phase 3: Core Components - Completed
- ✅ Phase 4: Page Implementation - Completed
- ✅ Phase 5: SEO Optimization - Completed
- ✅ Phase 6: Testing & Deployment - Completed

## Deployment Ready
The website is ready for deployment to Vercel. Before deploying:
1. Update domain from joaoferreira.dev to actual domain
2. Add real project details to Projects page
3. Update GitHub, LinkedIn, and email links in About page
4. Add personal content to About page sections
5. Push code to GitHub repository
6. Import project in Vercel and deploy

## Implementation Changes & Notes

### Font Selection Change
- Originally specified Anthropic Sans and Serif fonts, but these are proprietary custom fonts not available in standard font libraries
- Implemented Inter and Source Serif 4 as close alternatives that are freely available via next/font/google
- Both alternatives maintain the clean, editorial aesthetic of the original specification

### Component Architecture Adjustments
- Button component marked as client component ("use client") to handle interactive features
- Root layout includes suppressHydrationWarning to prevent hydration mismatches from browser extensions
- Consistent container widths: Home and About pages use max-w-3xl, Projects page uses max-w-6xl for grid layout

### Navigation Enhancement
- Added Home link to header navigation for complete site navigation
- Navigation now includes: Home, About, Projects

### SEO Configuration
- Domain configured as joaoferreira.dev (update to actual domain before deployment)
- All pages include proper metadata, Open Graph tags, and Twitter Card tags
- Sitemap and robots.txt configured for search engine optimization

### Deployment Setup
- Vercel configuration file included for optimal deployment
- Environment variables template provided
- Static generation enabled for performance

## Development Notes
- Keep design simple and focused on content
- Prioritize performance and SEO
- Use semantic HTML throughout
- Maintain consistent spacing and typography
- Ensure all links are functional
- Test on multiple browsers and devices