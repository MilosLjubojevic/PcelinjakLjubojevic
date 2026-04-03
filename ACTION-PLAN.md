# SEO Action Plan — Pčelinjak Ljubojević

**Generated:** 2026-04-02 (v5)  
**Current Score:** 76/100  
**Target Score:** 88+/100  
**Gap to close:** 12 points

---

## Critical — Fix Immediately

### C1. Fix blog post date formats (ISO 8601)
**Impact:** +3 pts | **Effort:** 5 min | **File:** `lib/blog-data.ts`

Change all 5 `date:` fields from human-readable to ISO 8601 format. This is blocking Article rich results for every blog post.

```
"21. feb 2026."  →  "2026-02-21"
"12. mar 2026."  →  "2026-03-12"
"28. feb 2026."  →  "2026-02-28"
"15. jan 2026."  →  "2026-01-15"
"8. nov 2025."   →  "2025-11-08"
```

Also add a `lastModified` field to the `BlogPost` type and set it separately so you can update it when content changes.

---

### C2. Fix telephone country code in schema
**Impact:** +2 pts | **Effort:** 2 min | **File:** `app/page.tsx`

Change both telephone fields to use the Bosnia & Herzegovina country code (+387), not Serbia (+381). Use E.164 format (no spaces).

```
LocalBusiness.telephone:  "+381 66 861 439"  →  "+38766861439"
Organization.contactPoint.telephone:  "+381-66-861-439"  →  "+38766861439"
```

---

### C3. Remove FAQPage JSON-LD from blog posts
**Impact:** +1 pt | **Effort:** 10 min | **File:** `app/blog/[slug]/page.tsx`

Google restricted FAQ rich results to government and health authority sites in August 2023. This schema renders nothing for a beekeeping business. Remove the `FAQJsonLd` component and its conditional rendering block. The FAQ accordion UI can remain — only the JSON-LD script should be removed.

---

### C4. Compress LogoPcele.png
**Impact:** +1 pt | **Effort:** 5 min | **File:** `public/LogoPcele.png`

Current size: 1,446 KB. This file is served raw when Google fetches the Organization schema logo URL. Target: ≤50 KB PNG. Use squoosh.app, TinyPNG, or `pngquant`. Replace the source file in place — the filename and path are referenced in `app/page.tsx` schema and `components/bee-yard-section.tsx`.

---

## High Priority — Fix Within 1 Week

### H1. Add postalCode to LocalBusiness schema
**Impact:** +1 pt | **Effort:** 1 min | **File:** `app/page.tsx`

Add to the `PostalAddress` object:
```
"postalCode": "76300"
```
Bijeljina postal code. Required for full local rich result eligibility.

---

### H2. Add logo dimensions to Organization and Article schema
**Impact:** +1 pt | **Effort:** 10 min | **Files:** `app/page.tsx`, `app/blog/[slug]/page.tsx`

Both the Organization `logo` ImageObject and the Article `publisher.logo` ImageObject are missing `width` and `height`. Google requires these for Knowledge Panel and Article rich results.

Add to both logo objects:
```json
"width": 200,
"height": 200
```
(Use the actual dimensions of the compressed logo, or 200×200 as a square logo standard value.)

---

### H3. Add @id and url to Article author Person node
**Impact:** +1 pt | **Effort:** 5 min | **File:** `app/blog/[slug]/page.tsx`

The `author.Person` node has no identifier. Google cannot link the author to an entity.

Add:
```json
"@id": "https://pcelinjak-ljubojevic.netlify.app/#milos-ljubojevic",
"url": "https://pcelinjak-ljubojevic.netlify.app/#about"
```

---

### H4. Add visible author byline to blog posts
**Impact:** +2 pts (E-E-A-T) | **Effort:** 30 min | **File:** `app/blog/[slug]/page.tsx`

The author name exists in schema but is never shown to readers. Add a byline below the article title in all 4 hero variants (HiveManagementHero, HarvestHero, EducationHero, SeasonalCareHero):

```
Napisao: Miloš Ljubojević · {formatted date}
```

Optionally add a short 2-sentence author bio at the end of each article.

---

### H5. Create privacy policy and refund policy pages
**Impact:** +2 pts (Trust) | **Effort:** 1–2 hours | **Files:** new pages + `components/site-footer.tsx`

Required for e-commerce trustworthiness per Sept 2025 QRG. Create:
- `app/politika-privatnosti/page.tsx` — Privacy Policy
- `app/uslovi-dostave/page.tsx` — Shipping and Return Policy

Add links to both in the site footer (a new "Pravne napomene" column or within the existing layout).

---

### H6. Compress oversized source images
**Impact:** +1 pt | **Effort:** 30 min | **Files:** `public/images/pcelinjak/`, `public/images/educationBlog/`

Target ≤200 KB per file. Priority files:

| File | Current | Action |
|---|---|---|
| `SlikaLeglaURamu.jpg` | 504 KB | Compress to ≤200 KB |
| `SlikaPceleNaLetu.jpg` | 376 KB | Compress to ≤200 KB |
| `QueenBee.jpg` | 356 KB | Compress to ≤200 KB |
| `KrecnoLeglo.jpg` | 333 KB | Compress to ≤200 KB |
| `SlikaRojaNaGrani.jpg` | 308 KB | Compress to ≤200 KB |

Use squoosh.app (quality 80–85%) or `sharp` in a build script. Replace files in place.

---

### H7. Add cross-links between blog posts and product pages
**Impact:** +1.5 pts | **Effort:** 1 hour | **Files:** `lib/blog-data.ts`, `app/proizvodi/[type]/page.tsx`

- Add inline links within blog post content to relevant product pages (e.g., the honey extraction post should link to `/proizvodi/med`)
- Add a "Pročitajte više" block on product pages linking to the most relevant blog post:
  - `/proizvodi/med` → `/blog/art-of-extracting-raw-honey`
  - `/proizvodi/matice` → `/blog/spring-hive-inspections`
  - `/proizvodi/polen` → `/blog/vodic-za-pcelarstvo`

---

## Medium Priority — Fix Within 1 Month

### M1. Move registration claim into About section
**Impact:** +1 pt (Trust) | **Effort:** 5 min | **File:** `components/about-section.tsx`

"Registrovan pčelinjak — legalan uzgoj" currently exists only in `llms.txt`. Add it to the rendered About section copy with the registration context. Move it from AI-only visibility to human-visible trust signal.

---

### M2. Expand About section copy
**Impact:** +1.5 pts (E-E-A-T) | **Effort:** 30 min | **File:** `components/about-section.tsx`

Current copy: ~110 words across 3 paragraphs. Target: 350–500 words covering:
- Who Miloš Ljubojević is specifically (name and background visible on page)
- The founding story (who started, when, why)
- What the two bee yards produce and where they are located
- Registration/certification status
- What differentiates their queen selection process

---

### M3. Add itemCondition and brand to Product schema
**Impact:** +0.5 pts | **Effort:** 15 min | **File:** `app/proizvodi/[type]/page.tsx`

Add to all Product nodes in the ItemList:
```json
"itemCondition": "https://schema.org/NewCondition",
"brand": {
  "@type": "Brand",
  "name": "Pčelinjak Ljubojević"
}
```

---

### M4. Fix BreadcrumbList blog intermediate crumb
**Impact:** +0.5 pts | **Effort:** 30 min | **Options:**

**Option A** (recommended): Create `app/blog/page.tsx` as a blog index page. Update the BreadcrumbList in `components/seo.tsx` to use `/blog` as the intermediate item URL.

**Option B** (minimal): Remove the intermediate "Blog" crumb — make breadcrumbs go directly Home → Post Title.

Option A is preferred because it also creates a blog hub page that can accumulate authority and serve as an entry point.

---

### M5. Add social media links to footer
**Impact:** +1 pt (Authoritativeness) | **Effort:** 10 min | **File:** `components/site-footer.tsx`

Add links to Facebook and/or Instagram if the business has active accounts. Even a single active social profile creates an authoritativeness signal for both crawlers and human visitors. Add to the brand column in the footer.

---

### M6. Add dateModified support to blog posts
**Impact:** +0.5 pts (Freshness) | **Effort:** 20 min | **Files:** `lib/blog-data.ts`, `app/blog/[slug]/page.tsx`

Add `lastModified?: string` field to `BlogPost` type. In the Article JSON-LD, use `post.lastModified ?? post.date` for `dateModified`. This allows Google to detect content updates and prioritize recrawls.

---

### M7. Expand content on /proizvodi/med and /proizvodi/polen
**Impact:** +1 pt (Content depth) | **Effort:** 1 hour | **File:** `app/proizvodi/[type]/page.tsx`

Add a 300–500 word introductory section above the product grid for the med and polen pages explaining:
- The honey varieties produced (bagremov, livadski, kremasti, med u saću)
- The farm's extraction process and no-additive commitment
- Why Semberija region honey has distinct properties (flora, climate)

Current editorial word count: ~100 words. These pages are thin without Supabase product descriptions supplementing them.

---

### M8. Expand znacaj-pcela-u-oprasivanju post
**Impact:** +0.5 pts | **Effort:** 1 hour | **File:** `lib/blog-data.ts`

This post is the weakest in the content portfolio:
- Replace "brojna agronomska istraživanja" with at least one named research institution or study
- Expand the 1-sentence "Pčele i biodiverzitet" paragraph to at least 3 sentences
- Add a local case study or observation from the Ljubojević operation

---

### M9. Add opening hours for weekdays (or appointment note)
**Impact:** +0.5 pts | **Effort:** 5 min | **File:** `app/page.tsx`

`openingHoursSpecification` only covers Saturday–Sunday 10:00–16:00. Google infers Mon–Fri = closed. If the business accepts weekday orders by phone/appointment, add:
```json
{
  "@type": "OpeningHoursSpecification",
  "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
  "opens": "00:00",
  "closes": "00:00",
  "description": "Po dogovoru / narudžba"
}
```
Or if truly closed weekdays, document that explicitly in `llms.txt`.

---

## Low Priority — Backlog

### L1. Add AggregateRating to Product schema
**Impact:** +1 pt | **Effort:** 2–4 hours  
Once reviews are collected (via Google Reviews, email feedback, or a Supabase reviews table), add `AggregateRating` to each Product node. Star ratings in search results significantly improve CTR.

---

### L2. Add Person node to homepage @graph
**Impact:** +0.5 pts | **File:** `app/page.tsx`  
Add a standalone `Person` node for Miloš Ljubojević to the `@graph` array with `@id`, `name`, `url`, and ideally a `sameAs` linking to an industry registry or professional profile.

---

### L3. Add explicit robots meta to non-indexed pages
**Impact:** +0.5 pts  
Add `<meta name="robots" content="noindex, follow">` explicitly to checkout, order success, and login pages in their respective `generateMetadata` exports. Next.js may handle this via `robots: { index: false }` in metadata, but explicit declaration is more reliable across crawlers.

---

### L4. Expand llms.txt with missing business info
**Impact:** +0.5 pts | **File:** `public/llms.txt`  
Add: return/refund policy summary, payment methods accepted, registration number, certifications, and operating years for each bee yard location.

---

### L5. Consider CSP nonces for script-src
**Impact:** Security hardening | **Effort:** High  
Replace `'unsafe-inline'` in the CSP `script-src` directive with per-request nonces. This is a security improvement, not an SEO factor, but reduces risk score in security audits.

---

## Projected Score Improvements

| Phase | Actions | Expected Score |
|---|---|---|
| Baseline | — | 76/100 |
| Critical (C1–C4) | Date formats, phone, FAQPage, logo compression | 83/100 |
| + High (H1–H7) | postalCode, logo dims, author, byline, policies, images, links | 87/100 |
| + Medium (M1–M9) | About expansion, content depth, social, schema polish | 90/100 |
| + Low (L1–L5) | Ratings, Person node, robots meta, llms.txt | 92/100 |

---

## Highest ROI Summary

If limited to 3 actions, do these:

1. **C1** — Fix date formats in `lib/blog-data.ts` (5 minutes → unlocks rich results for 5 blog posts)
2. **C2** — Fix phone prefix in `app/page.tsx` (2 minutes → fixes local SEO entity resolution)
3. **H4 + H5** — Add author byline + create privacy/refund policy pages (2 hours → biggest E-E-A-T + Trust gain)
