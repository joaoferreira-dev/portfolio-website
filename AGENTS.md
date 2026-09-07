# AI Assistant Instructions

## Project Overview
This is João Ferreira's portfolio website - a minimalist, SEO-optimized portfolio built with Next.js 15, TypeScript, and Tailwind CSS.

## Technology Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **Fonts**: Inter (sans-serif), Source Serif 4 (serif)
- **Deployment**: Vercel
- **Package Manager**: npm

## Design System
### Color Palette
- Background: `#faf9f5` (warm off-white)
- Text: `#000000` (pure black)
- Accent/Cards: `#e3dacc` (warm beige/tan)
- Secondary Text: `#333333` (dark gray)

### Typography
- **Primary Font**: Inter for body text and UI elements
- **Secondary Font**: Source Serif 4 for headings and editorial content
- **Font Loading**: Optimized via next/font/google with display: swap

### Layout Standards
- **Container Widths**:
    - Home and About pages: `max-w-3xl`
    - Projects page: `max-w-6xl` (for grid layout)
- **Section Spacing**: `py-16` (64px vertical padding)
- **Responsive**: Mobile-first approach with Tailwind breakpoints

## Code Architecture
### File Structure
```
app/                 # Next.js App Router pages and layouts
components/          # Reusable React components
  layout/           # Layout components (Header, Footer, Container)
  ui/               # UI components (Button, Card, Section)
lib/                # Utilities and configurations
public/             # Static assets
```

### Component Guidelines
- **Client Components**: Must include `"use client"` directive at the top
- **Server Components**: Default in Next.js App Router (no directive needed)
- **Component Files**: Use PascalCase for file names (e.g., `Button.tsx`)
- **Props**: Always define TypeScript interfaces for component props

### Page Requirements
- Every page must include `metadata` export for SEO
- Include Open Graph tags for social sharing
- Include Twitter Card tags
- Maintain consistent heading hierarchy (H1, H2, H3)

## Coding Standards
### TypeScript
- Use strict type checking
- Define interfaces for component props
- Avoid `any` types
- Use proper typing for event handlers

### React/Next.js
- Use functional components with hooks
- Prefer server components by default
- Use client components only when necessary (interactivity, browser APIs)
- Implement proper error boundaries where needed

### Tailwind CSS
- Use utility classes for styling
- Maintain consistent spacing using the scale (4, 8, 12, 16, 24, 32, 48, 64, 96, 128px)
- Use custom color variables from design system
- Avoid arbitrary values when standard utilities exist

### Performance
- Use Next.js Image component for images
- Implement proper code splitting
- Optimize font loading
- Use static generation where possible

## Git Workflow
### Branch Strategy
- **Main Branch**: `main` - Production-ready code
- **Development Branch**: `develop` - Integration branch for features
- **Feature Branches**: `feature/` - New features
- **Fix Branches**: `fix/` - Bug fixes
- **Hotfix Branches**: `hotfix/` - Urgent production fixes

### Branch Flow
```
feature/ → develop → main
fix/     → develop → main
hotfix/  → main    → develop
```

### Pull Request Rules
- **ALWAYS** create pull requests to the `develop` branch only
- Never create PRs directly to `main` (except hotfixes)
- Use descriptive PR titles following conventional commits
- Include description of changes and testing performed
- Ensure all CI checks pass before merging
- Request at least one code review

### Commit Messages
Follow conventional commit format:
- `feat: add new feature`
- `fix: fix bug description`
- `docs: update documentation`
- `style: formatting changes`
- `refactor: code refactoring`
- `test: add or update tests`
- `chore: maintenance tasks`

## Project-Specific Rules
### Typography
- Use Inter for body text and UI elements
- Use Source Serif 4 for headings and editorial content
- Never reference proprietary fonts that aren't available

### SEO Requirements
- Every page must have proper metadata
- Include descriptive titles and meta descriptions
- Maintain sitemap.xml and robots.txt
- Use semantic HTML structure
- Include alt text for images

### Component Behavior
- Button component is client-side (has "use client" directive)
- Root layout uses `suppressHydrationWarning` for browser extension compatibility
- Maintain consistent navigation across all pages (Home, About, Projects)

### Build & Deployment
- Build command: `npm run build`
- Dev command: `npm run dev`
- Target deployment: Vercel
- Static generation is enabled

## What NOT to Do
- ❌ Don't change the established color palette
- ❌ Don't remove or skip SEO metadata
- ❌ Don't create unnecessary component abstractions
- ❌ Don't use arbitrary CSS values when Tailwind utilities exist
- ❌ Don't commit directly to `main` branch
- ❌ Don't create PRs to branches other than `develop`
- ❌ Don't skip TypeScript type definitions
- ❌ Don't use client components when server components suffice

## Testing & Quality
- Run `npm run build` to ensure production build works
- Test responsive design on mobile, tablet, and desktop
- Verify all navigation links work correctly
- Check for console errors and warnings
- Ensure accessibility standards are met

## Domain Configuration
- Current domain: `joaoferreira.dev` (update to actual domain before deployment)
- Update domain references in:
    - `app/layout.tsx` (metadataBase)
    - `app/sitemap.ts` (baseUrl)
    - `app/robots.txt` (sitemap URL)
    - Individual page metadata files

## Content Updates
When updating content:
- **Projects**: Update the projects array in `app/projects/page.tsx`
- **About**: Update personal info, skills, experience in `app/about/page.tsx`
- **Contact**: Update GitHub, LinkedIn, and email links in `app/about/page.tsx`
- **Navigation**: Navigation links are in `components/layout/Header.tsx`

## Common Patterns
### Creating a New Page
1. Create directory in `app/` (e.g., `app/blog/`)
2. Add `page.tsx` with component and metadata
3. Add navigation link in `components/layout/Header.tsx`
4. Update sitemap if needed

### Creating a New Component
1. Determine if it should be in `components/layout/` or `components/ui/`
2. Create TypeScript file with proper interfaces
3. Add "use client" if it needs interactivity
4. Export as default export

### Updating Styles
1. Modify `tailwind.config.ts` for design tokens
2. Use Tailwind utility classes in components
3. Test responsive behavior
4. Maintain color consistency

## Emergency Procedures
If you encounter build errors:
1. Check TypeScript errors first
2. Verify all imports are correct
3. Ensure no missing dependencies
4. Check for syntax errors in components
5. Run `npm run build` to reproduce the error

If you encounter hydration errors:
1. Check if interactive components have "use client"
2. Verify root layout has `suppressHydrationWarning`
3. Check for browser extension conflicts
4. Ensure consistent server/client rendering

## Context Reminders
- This is a personal portfolio website
- Design should remain minimalist and clean
- Performance and SEO are top priorities
- Maintain the warm, editorial aesthetic
- Keep the codebase simple and maintainable