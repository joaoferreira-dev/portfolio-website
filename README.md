# João Ferreira - Portfolio Website

A minimalist portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Clean Design**: Minimalist aesthetic with warm color palette (#faf9f5 background, #000 text, #e3dacc accent)
- **Typography**: Inter (sans-serif) and Source Serif 4 (serif) fonts
- **Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Metadata, sitemap, robots.txt, Open Graph tags
- **Fast**: Static generation for optimal performance
- **Accessible**: WCAG 2.1 AA compliant

## Pages

- **Home**: Hero section with introduction and navigation
- **About**: Professional summary, skills, experience timeline, and contact information
- **Projects**: Showcase of 3 featured projects with technology tags and links

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build

```bash
npm run build
```

### Deployment

This project is configured for Vercel deployment:

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy with default settings

The project includes a `vercel.json` configuration file for optimal deployment.

## Customization

### Update Content

- **Personal Info**: Edit content in `app/page.tsx`, `app/about/page.tsx`, and `app/projects/page.tsx`
- **Projects**: Update the projects array in `app/projects/page.tsx` with your actual projects
- **Contact Links**: Update GitHub, LinkedIn, and email links in `app/about/page.tsx`
- **Domain**: Update `joaoferreira.dev` to your actual domain in:
  - `app/layout.tsx`
  - `app/sitemap.ts`
  - `app/robots.txt`
  - Individual page metadata files

### Styling

- **Colors**: Modify color palette in `tailwind.config.ts`
- **Fonts**: Change fonts in `lib/fonts.ts`
- **Components**: Update UI components in `components/` directory

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Inter, Source Serif 4 (via next/font/google)
- **Deployment**: Vercel

## License

MIT