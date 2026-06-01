# Pčelinjak Ljubojević

A full-stack e-commerce web application for a commercial beekeeping business based in Bijeljina, Bosnia & Herzegovina. Built with Next.js 16, TypeScript, Supabase, and shadcn/ui.

## Live Site

[pcelinjakljubojevicbijeljina.com](https://pcelinjakljubojevicbijeljina.com)

## Features

**Customer-facing**
- Product catalog with category filtering
- Shopping cart with persistent state
- Order placement and checkout
- Blog with individual post pages
- Contact form with email delivery via Resend
- Privacy policy and delivery terms pages

**Admin panel**
- Product management — add, edit, delete
- Order management and status tracking
- Blog post editor
- Protected via Supabase Auth (admin-only access)

**Technical**
- Supabase Auth with SSR cookie-based sessions and PKCE flow
- Google Analytics 4 with ecommerce event tracking
- Google Ads conversion tracking
- Full SEO setup — sitemap, robots.txt, web manifest, JSON-LD schema
- Responsive design with dark/light theme support

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + shadcn/ui |
| Database & Auth | Supabase (PostgreSQL + SSR Auth) |
| Email | Resend |
| Forms | React Hook Form + Zod |
| Deployment | Vercel / Netlify |

## Getting Started

1. Clone the repo
   git clone https://github.com/MilosLjubojevic/PcelinjakLjubojevic.git

2. Install dependencies
   npm install

3. Copy env example and fill in your values
   cp .env.example .env.local

4. Run the dev server
   npm run dev

## Environment Variables

| Variable | Description | Secret? |
|---|---|---|
| NEXT_PUBLIC_SITE_URL | Production site URL | No |
| NEXT_PUBLIC_SUPABASE_URL | Supabase project URL | No |
| NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY | Supabase anon key | No |
| RESEND_API_KEY | Resend email API key | Yes |

## Author

Milos Ljubojevic — github.com/MilosLjubojevic
