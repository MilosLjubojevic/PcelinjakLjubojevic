import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { BLUR_DATA_URL } from "@/lib/image-utils"
import {
  ArrowLeft,
  Wrench,
  MapPin,
  CalendarDays,
  Droplets,
  Users,
  ShieldAlert,
  Snowflake,
  HelpCircle,
  ChevronDown,
  Flower2,
  Sun,
  Leaf,
  CloudSnow,
  Crown,
  TrendingUp,
  CloudSun,
  Home,
  Coins,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BreadcrumbJsonLd } from "@/components/seo"
import { posts, getPostBySlug, type BlogPost } from "@/lib/blog-data"
import { ArrowRight } from "lucide-react"
import type { Metadata } from "next"
import { BASE_URL } from "@/lib/constants"

function parseInlineLinks(text: string): React.ReactNode {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
  const parts: React.ReactNode[] = []
  let lastIndex = 0
  let match

  const sanitizeUrl = (url: string): string => {
    try {
      const parsed = new URL(url, 'http://dummy.com') // Use dummy base for relative URLs
      if (['http:', 'https:', 'mailto:', 'tel:'].includes(parsed.protocol) || url.startsWith('/')) {
        return url
      }
      return '#'
    } catch {
      // If parsing fails, check if it's a relative path
      if (url.startsWith('/') || url.startsWith('./') || url.startsWith('../')) {
        return url
      }
      return '#'
    }
  }

  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }
    const sanitizedHref = sanitizeUrl(match[2])
    parts.push(
      <Link
        key={match.index}
        href={sanitizedHref}
        className="font-medium text-primary underline underline-offset-2 hover:text-primary/80"
      >
        {match[1]}
      </Link>
    )
    lastIndex = match.index + match[0].length
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }

  return parts.length > 1 ? parts : text
}

function formatDate(isoDate: string): string {
  return new Intl.DateTimeFormat("sr-Latn", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(isoDate))
}

const iconMap: Record<string, LucideIcon> = {
  Wrench,
  MapPin,
  CalendarDays,
  Droplets,
  Users,
  ShieldAlert,
  Snowflake,
  HelpCircle,
  Crown,
  Flower2,
  Leaf,
  TrendingUp,
  CloudSun,
  Home,
  Coins,
}

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: `${post.title} | Pčelinjak Ljubojević`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.lastModified ?? post.date,
      images: [{ url: post.heroImage, alt: post.heroAlt }],
    },
    alternates: {
      canonical: `/blog/${slug}`,
    },
  }
}

function BlogJsonLd({ post }: { post: BlogPost }) {
  const article: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: `${BASE_URL}${post.heroImage}`,
    datePublished: post.date,
    dateModified: post.lastModified ?? post.date,
    url: `${BASE_URL}/blog/${post.slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/${post.slug}`,
    },
    author: {
      "@type": "Person",
      "@id": `${BASE_URL}/#milos-ljubojevic`,
      name: "Miloš Ljubojević",
      url: `${BASE_URL}/#about`,
      worksFor: {
        "@type": "Organization",
        "@id": `${BASE_URL}/#organization`,
        name: "Pčelinjak Ljubojević",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "Pčelinjak Ljubojević",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/LogoPcele.png`,
        width: 200,
        height: 200,
      },
    },
    inLanguage: "sr",
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
    />
  )
}


/* ─── Shared pieces ─── */

function AuthorByline({ light = false }: { light?: boolean }) {
  return (
    <p className={`mt-3 text-sm ${light ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
      Napisao:{" "}
      <span className={`font-medium ${light ? "text-primary-foreground/80" : "text-foreground/70"}`}>
        Miloš Ljubojević
      </span>
    </p>
  )
}

function BackLink({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/#blog"
      className={`mb-6 inline-flex items-center gap-2 text-sm font-medium transition-colors ${
        light
          ? "text-primary-foreground/70 hover:text-primary-foreground"
          : "text-muted-foreground hover:text-primary"
      }`}
    >
      <ArrowLeft className="h-4 w-4" />
      Nazad na početnu
    </Link>
  )
}

function CategoryBadge({
  category,
  date,
  variant = "default",
}: {
  category: string
  date: string
  variant?: "default" | "light" | "accent"
}) {
  const badgeClass =
    variant === "light"
      ? "bg-primary-foreground/20 text-primary-foreground"
      : variant === "accent"
        ? "bg-accent/90 text-foreground"
        : "bg-primary/10 text-primary"
  const dateClass =
    variant === "light" || variant === "accent"
      ? "text-primary-foreground/70"
      : "text-muted-foreground"

  return (
    <div className="flex items-center gap-3">
      <span className={`rounded-sm px-2.5 py-1 text-xs font-semibold ${badgeClass}`}>
        {category}
      </span>
      <span className={`text-sm ${dateClass}`}>{date}</span>
    </div>
  )
}

function ArticleBody({ post }: { post: BlogPost }) {
  const midpoint = Math.ceil(post.content.length / 2)
  const firstHalf = post.content.slice(0, midpoint)
  const secondHalf = post.content.slice(midpoint)

  return (
    <section className="bg-background py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-6">
        <article className="space-y-6">
          {firstHalf.map((p, i) => (
            <p
              key={i}
              className={`text-foreground/90 leading-relaxed ${i === 0 ? "text-lg" : "text-[1.05rem]"}`}
            >
              {p}
            </p>
          ))}
        </article>
      </div>

      {post.images.length >= 2 && (
        <div className="mx-auto mt-12 mb-12 max-w-5xl px-6">
          <div className="grid gap-4 md:grid-cols-2">
            {post.images.map((img, i) => (
              <figure key={i} className="overflow-hidden rounded-2xl">
                <div className="relative aspect-4/3">
                  <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" placeholder="blur" blurDataURL={BLUR_DATA_URL} />
                </div>
                {img.caption && (
                  <figcaption className="mt-3 text-center text-sm text-muted-foreground italic">
                    {img.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </div>
      )}

      <div className="mx-auto max-w-3xl px-6">
        <article className="space-y-6">
          {secondHalf.map((p, i) => (
            <p key={i} className="text-foreground/90 leading-relaxed text-[1.05rem]">
              {p}
            </p>
          ))}
        </article>

        <div className="mt-16 border-t border-border pt-8">
          <BackLink />
        </div>
      </div>
    </section>
  )
}

/* ─── Seasonal Card Grid ─── */

const seasonIcons: Record<string, LucideIcon> = {
  "Proljeće": Flower2,
  "Ljeto": Sun,
  "Jesen": Leaf,
  "Zima": CloudSnow,
}

const seasonColors: Record<string, string> = {
  "Proljeće": "bg-emerald-50 border-emerald-200 dark:bg-emerald-950/30 dark:border-emerald-800",
  "Ljeto": "bg-amber-50 border-amber-200 dark:bg-amber-950/30 dark:border-amber-800",
  "Jesen": "bg-orange-50 border-orange-200 dark:bg-orange-950/30 dark:border-orange-800",
  "Zima": "bg-sky-50 border-sky-200 dark:bg-sky-950/30 dark:border-sky-800",
}

const seasonIconColors: Record<string, string> = {
  "Proljeće": "text-emerald-600 dark:text-emerald-400",
  "Ljeto": "text-amber-600 dark:text-amber-400",
  "Jesen": "text-orange-600 dark:text-orange-400",
  "Zima": "text-sky-600 dark:text-sky-400",
}

function SeasonalGrid({ content }: { content: string[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {content.map((p, i) => {
        const dashIdx = p.indexOf(" — ")
        const seasonName = dashIdx > -1 ? p.slice(0, dashIdx) : `Sezona ${i + 1}`
        const description = dashIdx > -1 ? p.slice(dashIdx + 3) : p
        const SeasonIcon = seasonIcons[seasonName] ?? CalendarDays
        const cardColor = seasonColors[seasonName] ?? "bg-card border-border"
        const iconColor = seasonIconColors[seasonName] ?? "text-primary"

        return (
          <div
            key={i}
            className={`rounded-xl border p-5 ${cardColor}`}
          >
            <div className="mb-3 flex items-center gap-2.5">
              <SeasonIcon className={`h-5 w-5 ${iconColor}`} />
              <h4 className="font-serif text-lg font-bold text-foreground">
                {seasonName}
              </h4>
            </div>
            <p className="text-sm leading-relaxed text-foreground/80">
              {description}
            </p>
          </div>
        )
      })}
    </div>
  )
}

/* ─── FAQ Accordion ─── */

function FAQAccordion({ content }: { content: string[] }) {
  return (
    <div className="space-y-3">
      {content.map((item, i) => (
        <details
          key={i}
          className="group rounded-xl border border-border bg-card transition-shadow hover:shadow-md [&[open]]:shadow-md"
        >
          <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 text-[1.05rem] font-medium text-foreground list-none [&::-webkit-details-marker]:hidden">
            <span>{item.includes("?") ? item.slice(0, item.indexOf("?") + 1) : item.split(".")[0] + "?"}</span>
            <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
          </summary>
          <div className="border-t border-border px-5 py-4">
            <p className="text-[0.95rem] leading-relaxed text-foreground/80">
              {parseInlineLinks(item.includes("?") ? item.slice(item.indexOf("?") + 1).trim() : item)}
            </p>
          </div>
        </details>
      ))}
    </div>
  )
}

/* ─── Sticky TOC Sidebar ─── */

function StickyTOC({ sections }: { sections: { icon: string; title: string }[] }) {
  return (
    <nav className="hidden md:block">
      <div className="sticky top-24">
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Sadržaj
        </p>
        <ol className="space-y-1 border-l-2 border-border">
          {sections.map((section, i) => {
            const Icon = iconMap[section.icon]
            return (
              <li key={i}>
                <a
                  href={`#section-${i}`}
                  className="group flex items-center gap-2 border-l-2 -ml-[2px] border-transparent py-1.5 pl-4 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  {Icon && (
                    <Icon className="h-3.5 w-3.5 shrink-0 opacity-60 transition-opacity group-hover:opacity-100" />
                  )}
                  <span className="line-clamp-1">{section.title}</span>
                </a>
              </li>
            )
          })}
        </ol>
      </div>
    </nav>
  )
}

/* ─── Mobile TOC ─── */

function MobileTOC({ sections }: { sections: { icon: string; title: string }[] }) {
  return (
    <nav className="md:hidden">
      <details className="group rounded-2xl border border-border bg-card">
        <summary className="flex cursor-pointer items-center justify-between px-5 py-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground list-none [&::-webkit-details-marker]:hidden">
          <span>Sadržaj vodiča</span>
          <ChevronDown className="h-4 w-4 transition-transform duration-200 group-open:rotate-180" />
        </summary>
        <ol className="border-t border-border px-3 py-3">
          {sections.map((section, i) => {
            const Icon = iconMap[section.icon]
            return (
              <li key={i}>
                <a
                  href={`#section-${i}`}
                  className="group flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-primary/5 hover:text-primary"
                >
                  {Icon && (
                    <Icon className="h-4 w-4 shrink-0 text-primary/60 transition-colors group-hover:text-primary" />
                  )}
                  <span>
                    {i + 1}. {section.title}
                  </span>
                </a>
              </li>
            )
          })}
        </ol>
      </details>
    </nav>
  )
}

/* ─── Section Content Renderer ─── */

function SectionContent({
  section,
  index,
}: {
  section: { icon: string; title: string; image: { src: string; alt: string; objectPosition?: string; wideCrop?: boolean }; contentImages?: { src: string; alt: string }[]; content: string[] }
  index: number
}) {
  const Icon = iconMap[section.icon]
  const isEven = index % 2 === 0
  const isSeasonal = section.title === "Pčele tokom cijele godine"
  const isFAQ = section.title.startsWith("Najčešća pitanja")
  const isFullWidth = isSeasonal || isFAQ
  const hasContentImages = section.contentImages && section.contentImages.length > 0

  return (
    <div
      id={`section-${index}`}
      className={`scroll-mt-24 border-t border-border ${isEven ? "bg-background" : "bg-secondary/30"}`}
    >
      <div className="mx-auto max-w-4xl px-6 py-14 md:py-20">
        {/* Section heading with number badge */}
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
            {index + 1}
          </div>
          <div className="flex items-center gap-2.5">
            {Icon && <Icon className="h-5 w-5 text-primary/70" />}
            <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
              {section.title}
            </h2>
          </div>
        </div>
        <div className="mb-8 ml-[52px] h-0.5 w-12 rounded-full bg-accent" />

        {/* Seasonal: card grid + full-width image */}
        {isSeasonal && (
          <div className="space-y-8">
            <SeasonalGrid content={section.content} />
            <div className="relative aspect-video overflow-hidden rounded-2xl">
              <Image
                src={section.image.src}
                alt={section.image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
              />
            </div>
          </div>
        )}

        {/* FAQ: accordion, no side image */}
        {isFAQ && <FAQAccordion content={section.content} />}

        {/* Paired content: each paragraph with its own image, alternating sides */}
        {!isFullWidth && hasContentImages && (
          <div className="space-y-10">
            {section.content.map((p, j) => {
              const img = section.contentImages![j]
              const rowReversed = j % 2 !== 0
              return (
                <div
                  key={j}
                  className={`grid items-center gap-6 md:grid-cols-2 ${rowReversed ? "md:[direction:rtl] md:[&>*]:[direction:ltr]" : ""}`}
                >
                  <div className="group relative aspect-4/3 overflow-hidden rounded-2xl">
                    {img ? (
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        placeholder="blur"
                        blurDataURL={BLUR_DATA_URL}
                      />
                    ) : (
                      <Image
                        src={section.image.src}
                        alt={section.image.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        placeholder="blur"
                        blurDataURL={BLUR_DATA_URL}
                      />
                    )}
                  </div>
                  <p className="text-[1.05rem] leading-relaxed text-foreground/85">
                    {parseInlineLinks(p)}
                  </p>
                </div>
              )
            })}
          </div>
        )}

        {/* Standard sections: alternating text + image */}
        {!isFullWidth && !hasContentImages && (
          <div
            className={`grid items-start gap-8 ${section.image.wideCrop ? "md:grid-cols-2" : "md:grid-cols-5"} ${
              !isEven ? "md:[direction:rtl] md:[&>*]:[direction:ltr]" : ""
            }`}
          >
            {/* Text side */}
            <div className={`space-y-4 ${section.image.wideCrop ? "" : "md:col-span-3"}`}>
              {section.content.map((p, j) => (
                <p
                  key={j}
                  className="text-[1.05rem] leading-relaxed text-foreground/85"
                >
                  {parseInlineLinks(p)}
                </p>
              ))}
            </div>

            {/* Image side */}
            <div className={section.image.wideCrop ? "" : "md:col-span-2"}>
              <div className={`group relative overflow-hidden rounded-2xl ${section.image.wideCrop ? "aspect-auto" : "aspect-4/3"}`}>
                <Image
                  src={section.image.src}
                  alt={section.image.alt}
                  {...(section.image.wideCrop ? { width: 800, height: 600 } : { fill: true })}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={`${section.image.wideCrop ? "w-full h-auto" : "object-cover"} transition-transform duration-500 group-hover:scale-105`}
                  style={section.image.objectPosition ? { objectPosition: section.image.objectPosition } : undefined}
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

/* ─── Layout: Sectioned Article Body ───
   Redesigned with sticky sidebar TOC, alternating layouts, seasonal cards, FAQ accordion */

function SectionedArticleBody({ post }: { post: BlogPost }) {
  const sections = post.sections!

  return (
    <section className="bg-background">
      {/* Lead paragraph + mobile TOC */}
      <div className="mx-auto max-w-4xl px-6 py-14 md:py-20">
        {post.content[0] && (
          <p className="mb-10 border-l-4 border-accent pl-6 text-lg leading-relaxed text-foreground/90 md:text-xl">
            {post.content[0]}
          </p>
        )}
        <MobileTOC sections={sections} />
      </div>

      {/* Main content area: sidebar TOC + sections */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="md:grid md:grid-cols-[220px_1fr] md:gap-10">
          {/* Sticky sidebar TOC (desktop only) */}
          <StickyTOC sections={sections} />

          {/* Sections column */}
          <div>
            {sections.map((section, i) => (
              <SectionContent key={i} section={section} index={i} />
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      {post.cta && (
        <div className="mx-auto max-w-4xl px-6 py-12">
          <div className="rounded-2xl bg-primary/5 border border-primary/15 px-8 py-10 text-center">
            <p className="mb-6 text-lg font-medium text-foreground">
              Želite da unaprijedite oprašivanje i osnažite pčelinjak?
            </p>
            <Link
              href={post.cta.href}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
            >
              {post.cta.text}
              <ArrowLeft className="h-4 w-4 rotate-180" />
            </Link>
          </div>
        </div>
      )}

      {/* Back link */}
      <div className="mx-auto max-w-4xl px-6">
        <div className="mt-4 border-t border-border py-8">
          <BackLink />
        </div>
      </div>
    </section>
  )
}

/* ─── Layout: Hive Management ───
   Full-bleed hero with gradient overlay (product-page style) */

function HiveManagementHero({ post }: { post: BlogPost }) {
  return (
    <section className="relative flex min-h-[55vh] items-end overflow-hidden">
      <Image
        src={post.heroImage}
        alt={post.heroAlt}
        fill
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: post.heroObjectPosition ?? "center 40%" }}
        priority
        placeholder="blur"
        blurDataURL={BLUR_DATA_URL}
      />
      <div className="absolute inset-0 bg-linear-to-t from-foreground/80 via-foreground/40 to-foreground/20" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-32">
        <BackLink light />
        <CategoryBadge category={post.category} date={formatDate(post.date)} variant="accent" />
        <h1 className="mt-4 max-w-3xl font-serif text-3xl font-bold leading-tight text-primary-foreground md:text-5xl">
          {post.title}
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
          {post.excerpt}
        </p>
        <AuthorByline light />
      </div>
    </section>
  )
}

/* ─── Layout: Harvest ───
   Split hero — text left, tall image right */

function HarvestHero({ post }: { post: BlogPost }) {
  return (
    <section className="bg-secondary pt-28 pb-0 md:pb-0">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          {/* Text side */}
          <div className="py-8 md:py-16">
            <BackLink />
            <CategoryBadge category={post.category} date={formatDate(post.date)} />
            <h1 className="mt-4 font-serif text-3xl font-bold leading-tight text-foreground md:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {post.excerpt}
            </p>
            <AuthorByline />
          </div>
          {/* Image side */}
          <div className="relative aspect-3/4 overflow-hidden rounded-t-2xl md:rounded-2xl">
            <Image
              src={post.heroImage}
              alt={post.heroAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Layout: Education ───
   Centered minimal header with wide rounded featured image below */

function EducationHero({ post }: { post: BlogPost }) {
  return (
    <section className="bg-background pt-28 pb-0">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <BackLink />
        <CategoryBadge category={post.category} date={formatDate(post.date)} />
        <h1 className="mt-4 font-serif text-3xl font-bold leading-tight text-foreground md:text-5xl text-balance">
          {post.title}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>
        <AuthorByline />
      </div>
      <div className="mx-auto mt-10 max-w-5xl px-6">
        <div className="relative aspect-video overflow-hidden rounded-2xl">
          <Image
            src={post.heroImage}
            alt={post.heroAlt}
            fill
            sizes="100vw"
            className="object-cover"
            priority
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
          />
        </div>
      </div>
    </section>
  )
}

/* ─── Layout: Seasonal Care ───
   Narrow primary-colored band with overlapping image card */

function SeasonalCareHero({ post }: { post: BlogPost }) {
  return (
    <section className="relative">
      {/* Top band */}
      <div className="bg-primary pt-28 pb-32 md:pb-40">
        <div className="mx-auto max-w-3xl px-6">
          <BackLink light />
          <CategoryBadge category={post.category} date={formatDate(post.date)} variant="light" />
          <h1 className="mt-4 max-w-3xl font-serif text-3xl font-bold leading-tight text-primary-foreground md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
            {post.excerpt}
          </p>
          <AuthorByline light />
        </div>
      </div>
      {/* Overlapping image */}
      <div className="mx-auto -mt-20 max-w-5xl px-6 md:-mt-28">
        <div className="relative aspect-video overflow-hidden rounded-2xl shadow-xl">
          <Image
            src={post.heroImage}
            alt={post.heroAlt}
            fill
            sizes="100vw"
            className="object-cover"
            priority
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
          />
        </div>
      </div>
      {/* Spacer so the body doesn't overlap */}
      <div className="h-8 md:h-12" />
    </section>
  )
}

/* ─── Related Posts ─── */

function RelatedPosts({ currentSlug, relatedSlugs }: { currentSlug: string; relatedSlugs?: string[] }) {
  const related = (relatedSlugs ?? [])
    .filter((s) => s !== currentSlug)
    .map((s) => posts.find((p) => p.slug === s))
    .filter(Boolean) as BlogPost[]

  if (related.length === 0) return null

  return (
    <section className="border-t border-border bg-secondary/30 py-16">
      <div className="mx-auto max-w-4xl px-6">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
          Pročitajte Još
        </p>
        <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
          Povezani Članci
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-md"
            >
              <div className="relative mb-4 aspect-video overflow-hidden rounded-lg">
                <Image
                  src={post.heroImage}
                  alt={post.heroAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  style={post.heroObjectPosition ? { objectPosition: post.heroObjectPosition } : undefined}
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                {post.category}
              </span>
              <h3 className="mt-1 font-serif text-lg font-bold leading-snug text-foreground line-clamp-2">
                {post.title}
              </h3>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">
                Pročitaj
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Page component ─── */

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const heroByCategory: Record<string, (props: { post: BlogPost }) => React.JSX.Element> = {
    "Hive Management": HiveManagementHero,
    Harvest: HarvestHero,
    Education: EducationHero,
    "Seasonal Care": SeasonalCareHero,
  }

  const HeroComponent = heroByCategory[post.category] ?? HiveManagementHero

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Početna", href: "/" },
          { name: "Blog", href: "/#blog" },
          { name: post.title, href: `/blog/${post.slug}` },
        ]}
      />
      <BlogJsonLd post={post} />
      <SiteHeader />
      <main>
        <HeroComponent post={post} />
        {post.sections ? (
          <SectionedArticleBody post={post} />
        ) : (
          <ArticleBody post={post} />
        )}
        <RelatedPosts currentSlug={post.slug} relatedSlugs={post.relatedSlugs} />
      </main>
      <SiteFooter />
    </>
  )
}
