# Pre-Deployment Checklist — Pčelinjak Ljubojević

## CRITICAL

- [ ] **Rotate exposed RESEND_API_KEY** — `.env.local` contains a real API key tracked by git. Rotate in Resend dashboard, run `git rm --cached .env.local`, set env vars in Vercel project settings instead.
- [x] **Create `app/error.tsx`** — root error boundary
- [x] **Create `app/not-found.tsx`** — custom 404 page

## HIGH

- [x] **Add Content-Security-Policy header** in `next.config.mjs`
- [x] **Compress large images** — 16 images resized to max 1400px and compressed with mozjpeg
- [x] **Shorten page title** in `app/layout.tsx` — trim to ~60 chars
- [x] **Create `.env.example`** — template for environment variables
- [ ] **Verify Supabase RLS policies** — confirm in Supabase dashboard

## MEDIUM

- [x] **Add Product JSON-LD schema** to `app/proizvodi/[type]/page.tsx`
- [x] **Add logging to empty catch blocks** — `lib/cart-context.tsx`, `lib/supabase/server.ts`, `app/contact/actions.ts`
- [x] **Add `type-check` script** to `package.json`
- [ ] **Create ESLint config** (skipped — uses Next.js defaults)
- [ ] **Test full checkout flow** — empty cart, validation, success redirect
- [ ] **Test admin login** on Vercel domain — update Google OAuth redirect URIs

## LOW

- [x] **Remove unused images** — ~12 orphaned image files
- [ ] **Add privacy policy & terms pages**
- [x] **Add `sizes` attribute** to about-section fill image
- [x] **Cart hydration guard** — prevent flash of empty cart
- [x] **Run `npm run build`** — build passes successfully
