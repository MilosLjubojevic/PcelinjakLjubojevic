# Full SEO Audit — Pčelinjak Ljubojević
**Audit Date:** 2026-04-02 (v5)  
**Audited By:** Claude Sonnet 4.6 (6 specialist subagents + inline analysis)  
**Business Type:** Local Business / E-commerce — Family beekeeping, Bijeljina, BiH  
**Deployment:** Netlify — https://pcelinjak-ljubojevic.netlify.app  

---

## Executive Summary

### Overall SEO Health Score: **76 / 100**

| Category | Weight | Score | Weighted |
|---|---|---|---|
| Technical SEO | 25% | 85 | 21.25 |
| Content Quality (E-E-A-T) | 25% | 74 | 18.50 |
| On-Page SEO | 20% | 78 | 15.60 |
| Schema / Structured Data | 10% | 61 | 6.10 |
| Performance (CWV) | 10% | 72 | 7.20 |
| Images | 5% | 78 | 3.90 |
| AI Search Readiness | 5% | 65 | 3.25 |
| **TOTAL** | | | **75.8 / 100** |

### Top 5 Critical Issues
1. **Blog article dates not ISO 8601** — `"21. feb 2026."` format suppresses all Article rich results
2. **Phone prefix +381 (Serbia) paired with addressCountry BA (Bosnia)** — breaks local entity resolution
3. **FAQPage schema is restricted** — Google removed FAQ rich results for non-health/government sites in August 2023
4. **LogoPcele.png is 1.4 MB** — served raw via schema `url`, bloating Google Knowledge Panel requests
5. **No privacy policy or return/refund policy pages** — required trust signals for e-commerce (Sept 2025 QRG)

### Top 5 Quick Wins
1. Fix date format in `lib/blog-data.ts` — 5 lines changed, unlocks Article rich results immediately
2. Fix telephone to `+38766861439` (BA country code E.164) — 2 character change, fixes local SEO
3. Add `"postalCode": "76300"` to PostalAddress — 1 line, improves local rich result eligibility
4. Remove FAQPage JSON-LD from `app/blog/[slug]/page.tsx` — removes dead schema noise
5. Add visible author byline to blog posts — improves E-E-A-T and human trust

---

## 1. Technical SEO — 85/100

### 1.1 Robots.txt ✅
`app/robots.ts` is well-configured:
- Allows all bots access to public content
- Correctly disallows: `/admin/`, `/login`, `/neovlascen`, `/narudzba/uspjesno`, `/auth/`
- Sitemap reference present: `${BASE_URL}/sitemap.xml`

**No issues.**

### 1.2 Security Headers ✅ (95/100)
`next.config.mjs` sets comprehensive security headers on all routes:
- `X-Frame-Options: DENY` — clickjacking protection
- `X-Content-Type-Options: nosniff`
- `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload` — strong HSTS
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()` — privacy-respecting
- `Content-Security-Policy` — includes `fonts.googleapis.com` (style) and `fonts.gstatic.com` (font-src)

**Minor note:** CSP uses `'unsafe-inline'` for scripts. Not an SEO issue, but a security hardening opportunity.

### 1.3 Canonical URLs ✅
- Root layout sets `alternates: { canonical: '/' }` — correct
- Product and blog pages generate per-route canonicals via `generateMetadata`
- No query-parameter-based duplicate content detected

### 1.4 Metadata Coverage ✅
All public pages have title, description, and OG tags:
- Homepage: `Pčelinjak Ljubojević | Domaći Med, Polen i Pčelinji Proizvodi`
- Product pages: dynamic per `type` via `generateMetadata`
- Blog posts: dynamic via `generateMetadata` from blog-data
- Checkout `/narudzba`: noindex, follow — correct
- Admin pages: protected by middleware, noindex by default

**Title template** set correctly: `%s | Pčelinjak Ljubojević`

### 1.5 HTML lang Attribute ✅
`<html lang="sr-Latn">` — correct and specific (Serbian in Latin script). Consistent with `inLanguage: "sr"` in WebSite schema.

### 1.6 Mobile / Viewport ✅
Next.js App Router handles viewport meta automatically. `manifest.ts` sets `display: standalone`. PWA-ready with 192×512 icons.

### 1.7 404 / Error Pages ✅
Both `app/not-found.tsx` and `app/error.tsx` exist.

### 1.8 Internal Linking ⚠️ (65/100)
**Strengths:**
- Footer "Resursi" column links to all 5 blog posts
- Products section links to `/proizvodi/med`, `/proizvodi/polen`, `/proizvodi/matice`
- Blog posts have `relatedSlugs` for cross-linking between posts

**Gaps:**
- All header and footer nav links use hash anchors (`/#about`, `/#blog`) — weakens PageRank distribution to sections
- Product pages do not link to relevant blog content (e.g., `/proizvodi/med` → honey extraction post)
- Blog posts do not link to product pages inline within content
- No `/blog` index page — blog is only accessible via `/#blog` anchor or direct slug

### 1.9 Sitemap Coverage ✅
`app/sitemap.ts` covers 9 URLs:
| URL | Priority | changeFrequency |
|---|---|---|
| `/` | 1.0 | weekly |
| `/proizvodi/med` | 0.9 | weekly |
| `/proizvodi/polen` | 0.9 | weekly |
| `/proizvodi/matice` | 0.8 | monthly |
| `/blog/vodic-za-pcelarstvo` | 0.7 | monthly |
| `/blog/spring-hive-inspections` | 0.7 | monthly |
| `/blog/art-of-extracting-raw-honey` | 0.7 | monthly |
| `/blog/znacaj-pcela-u-oprasivanju` | 0.7 | monthly |
| `/blog/prezimljavanje-pcela` | 0.7 | monthly |

All admin, auth, checkout success pages correctly excluded.  
`lastModified` for product/homepage uses `new Date()` — always shows today's date, which is technically misleading but signals crawl freshness.

---

## 2. Content Quality & E-E-A-T — 74/100

### 2.1 Experience — 72/100
**Strengths:**
- Concrete operational details: "200+ košnica na dva pčelinjaka", specific local geography (Semberija, Bijeljina)
- Spring inspection post has genuine practitioner voice: *"nema rutinskih proljeća"*
- Brand-specific references: HerbaStrip letvice, specific BiH date windows for seasonal work
- Real photos from the actual bee yard throughout

**Gaps:**
- Author name "Miloš Ljubojević" appears in Article JSON-LD but is **never visible on the page** — no byline rendered for human readers
- No author bio section
- All copy uses third-person "na Pčelinjaku Ljubojević" — no first-person authorship signal

### 2.2 Expertise — 78/100
**Strengths:**
- Technically accurate: correct pathogen names (Paenibacillus larvae, Ascosphaera apis, Varroa destructor)
- Quantified thresholds: 3 mites / 100 bees = treatment threshold; HMF at 40°C onset; 18% moisture floor for extraction
- Queen selection criteria in product descriptions: nosivost, mirnoća, lokalna klimatska prilagođenost — not marketing generics

**Gaps:**
- No formal credentials cited (agricultural registration number, veterinary certification, association membership)
- `znacaj-pcela-u-oprasivanju` weakest post: "brojna agronomska istraživanja" with zero named sources; biodiversity section ends with a single-sentence paragraph

### 2.3 Authoritativeness — 45/100
The weakest E-E-A-T dimension.

**Gaps:**
- Zero external citations across all 5 blog posts
- Zero social media links in footer
- No industry body affiliation in rendered content
- No testimonials, ratings, or reviews in the UI
- No press or external feature mentions

### 2.4 Trustworthiness — 68/100
**Strengths:**
- Contact section: physical address, two phone numbers, email, hours, Google Maps link — strong trust cluster
- `LocalBusiness` schema with `@id`, geo, address, phone, email

**Gaps:**
- No privacy policy page
- No return/refund policy page
- No terms of service
- Email is `@gmail.com` rather than custom domain
- "Registrovan pčelinjak" claim is only in `llms.txt`, not in rendered About content

### 2.5 Blog Content Depth
| Post | Est. Word Count | Status |
|---|---|---|
| Vodič za Pčelarstvo | ~2,800 | ✅ Strong |
| Proljetni Pregled Košnica | ~2,600 | ✅ Strong |
| Vrcanje Sirovog Meda | ~2,200 | ✅ Passes |
| Značaj Pčela u Oprašivanju | ~1,600 | ⚠️ Borderline |
| Prezimljavanje Pčela | ~2,000 | ✅ Passes |

**Thin pages:**
- Homepage: ~350 words of editorial content — borderline for brand authority
- `/proizvodi/med` and `/proizvodi/polen`: ~100 words editorial + Supabase product cards — thin content risk

### 2.6 Readability
- H2 per section with numbered badges — good hierarchy
- Paragraph length: 60–120 words — appropriate for web
- Sticky TOC desktop + accordion TOC mobile — excellent for long-form content
- **No `<h3>` subheadings** within sections — longer sections lack internal hierarchy
- **No bullet lists** in blog content — step sequences and equipment lists written as paragraphs

---

## 3. On-Page SEO — 78/100

### 3.1 Title Tags ✅
- Homepage: 55 chars — optimal
- Template: `%s | Pčelinjak Ljubojević` — consistent
- One blog post title includes year `(2026)` — freshness signal

### 3.2 Meta Descriptions ✅
Homepage: 145 chars — within 120–160 optimal range. All pages have unique descriptions.

### 3.3 Heading Structure ✅
- H1: one per page (hero section / blog hero)
- H2: section headings, article sections
- H3: missing within longer blog sections (opportunity)

### 3.4 Open Graph ✅
- OG image: `/images/HeaderBeeyard.jpg` at 1200×630 — correct
- `og:locale: sr_Latn` — correct
- Twitter card: `summary_large_image`

### 3.5 Missing: No `/blog` Index Page ⚠️
The blog only exists as a homepage hash anchor. Consequences:
- BreadcrumbList second crumb links to `/#blog` (a hash, not a real URL)
- No standalone blog page with its own metadata and canonical
- Blog hub page cannot accumulate authority

---

## 4. Schema / Structured Data — 61/100

### 4.1 Issue Register

| # | Severity | File | Issue |
|---|---|---|---|
| 1 | **CRITICAL** | `blog/[slug]/page.tsx` | FAQPage schema restricted to health/gov sites since Aug 2023. Remove entirely. |
| 2 | **HIGH** | `app/page.tsx` | Telephone `"+381 66 861 439"` is Serbian prefix; `addressCountry: "BA"`. Use `"+38766861439"` (E.164 BA). |
| 3 | **HIGH** | `app/page.tsx` | `postalCode` missing from PostalAddress. Bijeljina = 76300. |
| 4 | **HIGH** | `lib/blog-data.ts` | All 5 post dates use `"DD. mon YYYY."` format — must be `"YYYY-MM-DD"` (ISO 8601) for Article rich results. |
| 5 | **MEDIUM** | `app/page.tsx` | Organization `logo` ImageObject missing `width` and `height`. Required for Google Knowledge Panel. |
| 6 | **MEDIUM** | `blog/[slug]/page.tsx` | Article `publisher.logo` ImageObject missing `width` and `height`. |
| 7 | **MEDIUM** | `blog/[slug]/page.tsx` | Author `Person` node has no `@id` or `url`. Google cannot resolve the author entity. |
| 8 | **MEDIUM** | `components/seo.tsx` | Blog BreadcrumbList second crumb `item` is `/#blog` (hash), not a canonical URL. |
| 9 | **MEDIUM** | `app/proizvodi/[type]/page.tsx` | All Product nodes missing `itemCondition`. Required for Merchant Center eligibility. |
| 10 | **MEDIUM** | `app/proizvodi/[type]/page.tsx` | All Product nodes missing `brand`. Reduces entity richness. |
| 11 | **LOW** | `app/page.tsx` | `openingHoursSpecification` only covers Sat–Sun. Mon–Fri absence signals closed to Google. |
| 12 | **LOW** | `app/proizvodi/[type]/page.tsx` | Matice "Pčelinja društva" product absent from ItemList schema. |
| 13 | **LOW** | `blog/[slug]/page.tsx` | `@type: "Article"` — `"BlogPosting"` is semantically more precise. |
| 14 | **INFO** | All product pages | No `AggregateRating` — highest-impact missing rich result opportunity |
| 15 | **INFO** | `app/page.tsx` | No standalone `Person` node for Miloš Ljubojević in homepage `@graph` |

### 4.2 What's Working Well
- `@graph` structure with `@id` cross-referencing — correct pattern
- LocalBusiness with geo, address, phone, email, hours, sameAs (Google Maps)
- BreadcrumbList on blog and product pages
- Article schema with Person-typed author (not a plain string)
- Product / ItemList / AggregateOffer structure
- `LogoPcele.png` exists at `public/LogoPcele.png` (1.44 MB — confirmed, but needs compression)

### 4.3 LogoPcele.png Warning
The schema serves `${BASE_URL}/LogoPcele.png` directly to Google (not via Next.js Image optimization). At 1.44 MB, this is a raw PNG fetched unoptimized. A compressed version ≤50 KB should replace the source file.

---

## 5. Performance (Core Web Vitals) — 72/100

### 5.1 Image Optimization ✅
- `next.config.mjs` enables AVIF + WebP output — good
- All images use Next.js `<Image>` component — automatic format conversion for page visitors
- `placeholder="blur"` with blurDataURL on all images — prevents layout shift during load

### 5.2 Hero Image (LCP candidate) ✅
- `HeaderBeeyard.jpg` (254 KB source) — `priority={true}` set — preloaded correctly
- `sizes="100vw"` — responsive

### 5.3 Oversized Source Images ⚠️
| File | Size | Risk |
|---|---|---|
| `LogoPcele.png` | **1,446 KB** | HIGH — schema URL fetched raw |
| `SlikaLeglaURamu.jpg` | 504 KB | MEDIUM |
| `SlikaPceleNaLetu.jpg` | 376 KB | MEDIUM |
| `QueenBee.jpg` | 356 KB | MEDIUM |
| `KrecnoLeglo.jpg` | 333 KB | MEDIUM |
| `SlikaRojaNaGrani.jpg` | 308 KB | MEDIUM (about section) |

For page visitors, Next.js serves optimized AVIF/WebP. Source sizes affect build time, Googlebot fetches, and origin storage.

### 5.4 Font Loading ✅
DM Sans + Playfair Display via `next/font/google` — self-hosted, `font-display: swap` automatic, no external font requests at runtime.

### 5.5 Third-Party Scripts ✅
- `@vercel/analytics` only — minimal, deferred
- No render-blocking external scripts

### 5.6 Predicted Core Web Vitals
| Metric | Predicted | Threshold |
|---|---|---|
| LCP | ~2.0–2.8s | Good: <2.5s |
| CLS | ~0 | Good: <0.1 |
| INP | ~80–120ms | Good: <200ms |

LCP is borderline — depends on Netlify CDN edge location and HeaderBeeyard.jpg delivery speed. Priority tag is correct.

---

## 6. Images — 78/100

### 6.1 Alt Text ✅
All images in bee-yard gallery, hero, and about section have descriptive, keyword-rich alt text in Serbian. No empty alt attributes detected.

### 6.2 Responsive Sizes ✅
All `<Image>` components specify `sizes` prop with appropriate breakpoints.

### 6.3 CLS Prevention ✅
- Fill images: contained by parent with explicit aspect ratio (`aspect-[4/3]`, `aspect-[16/9]`)
- Fixed-size images: `width`/`height` specified on all logo instances

### 6.4 Priority ✅
`priority={true}` set only on hero image — correct. Gallery images use lazy loading.

### 6.5 Issues
- `LogoPcele.png`: 1.44 MB source — needs compression (see Performance 5.3)
- `SlikaLeglaURamu.jpg`: 504 KB — highest non-logo image, compress to ≤200 KB
- Six images between 250–375 KB — compress all to ≤200 KB as source files

---

## 7. AI Search Readiness — 65/100

### 7.1 llms.txt ✅
Well-structured with products, pricing, shipping, FAQ, service area, and contact details. Good for LLM consumption.

### 7.2 Article Schema on Blog ✅
All blog posts have Article schema with author, datePublished, publisher, inLanguage.

### 7.3 Gaps
- `datePublished` non-ISO format blocks AI date signals
- Author has no `sameAs` linking to any authoritative external profile
- Organization schema lacks `foundingDate`, `areaServed`, `numberOfEmployees`
- Dynamic Supabase products on med/polen pages have zero structured data
- `dateModified = datePublished` for all posts — no freshness update signals

---

## Appendix: Files Audited

| File | Purpose |
|---|---|
| `app/layout.tsx` | Root metadata, fonts, lang |
| `app/page.tsx` | Homepage + LocalBusiness/Organization/WebSite schema |
| `app/robots.ts` | Robots rules |
| `app/sitemap.ts` | XML sitemap |
| `app/manifest.ts` | PWA manifest |
| `app/blog/[slug]/page.tsx` | Blog template + Article/FAQ/Breadcrumb schema |
| `app/proizvodi/[type]/page.tsx` | Product pages + Product/ItemList schema |
| `app/narudzba/page.tsx` | Checkout — noindex |
| `lib/blog-data.ts` | Blog content (5 posts) |
| `lib/constants.ts` | BASE_URL |
| `components/hero-section.tsx` | Hero image, H1, CTA |
| `components/about-section.tsx` | About copy, stats |
| `components/bee-yard-section.tsx` | Image gallery |
| `components/site-footer.tsx` | Navigation, brand links |
| `components/seo.tsx` | BreadcrumbJsonLd component |
| `next.config.mjs` | Image optimization, security headers |
| `public/llms.txt` | AI crawler content |
| `public/images/**` | 28 images (file sizes measured) |
