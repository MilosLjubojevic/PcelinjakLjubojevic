import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";
import { BLUR_DATA_URL } from "@/lib/image-utils";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ProductCard } from "@/components/product-card";
import { BreadcrumbJsonLd } from "@/components/seo";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Droplets,
  Sun,
  Wheat,
  Heart,
  Shield,
  Sparkles,
  Crown,
  Users,
  TreePine,
  Phone,
  Mail,
  Truck,
  BadgeDollarSign,
  CalendarClock,
  type LucideIcon,
} from "lucide-react";
import { parsePrice, type ProductWithOptions } from "@/lib/types/database";
import { BASE_URL } from "@/lib/constants";

type CategoryMeta = {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  heroAlt: string;
  features: { icon: LucideIcon; title: string; description: string }[];
};

const categoryMeta: Record<string, CategoryMeta> = {
  med: {
    title: "Med i Proizvodi od Meda",
    subtitle: "Naši Proizvodi",
    description:
      "Domaći med sa naših livada, raznovrsnih ukusa i prirodnih svojstava. Svaka tegla je puna čistog, nefiltriranog meda.",
    heroImage: "/images/pcelinjak/SlikaOtvorenogMedauRamu.jpg",
    heroAlt: "Med u saću — čist, prirodan med direktno iz košnice",
    features: [
      {
        icon: Droplets,
        title: "100% Prirodan",
        description:
          "Nefiltriran i nepasterizovan med, onakav kakav ga pčele prave.",
      },
      {
        icon: Sun,
        title: "Lokalno Proizveden",
        description: "Sa naših livada i šuma, bez dugih transportnih puteva.",
      },
      {
        icon: Wheat,
        title: "Male Serije",
        description: "Svaka serija je pažljivo sakupljena i ručno pakirana.",
      },
    ],
  },
  polen: {
    title: "Polen, Matična Mliječ i Propolis",
    subtitle: "Zdravlje iz Košnice",
    description:
      "Pčelinji proizvodi bogati vitaminima, mineralima i antioksidansima. Prirodni dodaci za zdravlje i imunitet.",
    heroImage: "/images/pcelinjak/SlikaPolena.jpg",
    heroAlt: "Svježi cvjetni polen sa pčelinjaka",
    features: [
      {
        icon: Shield,
        title: "Jačanje Imuniteta",
        description:
          "Bogati antioksidansima i prirodnim antibakterijskim svojstvima.",
      },
      {
        icon: Heart,
        title: "Zdravlje i Vitalnost",
        description:
          "Vitamini, minerali i aminokiseline za svakodnevnu energiju.",
      },
      {
        icon: Sparkles,
        title: "Čista Priroda",
        description: "Bez aditiva, konzervansa ili vještačkih dodataka.",
      },
    ],
  },
};

const maticeMeta = {
  title: "Matice, Rojevi i Pčelinja Društva | Pčelinjak Ljubojević",
  description:
    "Kvalitetne selekcionirane pčelinje matice, rojevi i kompletna pčelinja društva. Cijene: matice 20 KM, rojevi 80 KM. Lično preuzimanje — Bijeljina, Donji Bordac 90.",
  heroImage: "/images/pcelinjak/SlikaPcelinjakaUSumi.jpg",
  heroAlt: "Pčelinjak u šumi — košnice u prirodnom okruženju",
};

export function generateStaticParams() {
  return [{ type: "med" }, { type: "polen" }, { type: "matice" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ type: string }>;
}): Promise<Metadata> {
  const { type } = await params;

  if (type === "matice") {
    return {
      title: maticeMeta.title,
      description: maticeMeta.description,
      openGraph: {
        title: "Matice, Rojevi i Pčelinja Društva",
        description: maticeMeta.description,
        type: "website",
        images: [{ url: maticeMeta.heroImage, alt: maticeMeta.heroAlt }],
      },
      alternates: { canonical: "/proizvodi/matice" },
    };
  }

  const meta = categoryMeta[type];
  if (!meta) return {};

  return {
    title: `${meta.title} | Pčelinjak Ljubojević`,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "website",
      images: [{ url: meta.heroImage, alt: meta.heroAlt }],
    },
    alternates: { canonical: `/proizvodi/${type}` },
  };
}

/* ───────────────────────────── Matice blog sections ───────────────────────────── */

type BlogSection = {
  id: string;
  icon: LucideIcon;
  label: string;
  title: string;
  price: string;
  priceNote?: string;
  description: string[];
  images: { src: string; alt: string }[];
  reversed?: boolean;
};

const maticeSections: BlogSection[] = [
  {
    id: "matice",
    icon: Crown,
    label: "Matice",
    title: "Pčelinje Matice",
    price: "20 KM",
    description: [
      "Naše matice su pažljivo selekcionirane iz najproduktivnijih i najmirnijih društava. Svaka matica prolazi kroz rigorozan proces odabira kako bi osigurali vrhunski genetski materijal za vaš pčelinjak.",
      "Odgajamo matice koje se odlikuju visokom nosivošću, mirnoćom na saću i otpornošću na bolesti. Posebnu pažnju posvećujemo prilagođenosti lokalnim klimatskim uslovima, što garantuje bolje rezultate u vašim košnicama.",
    ],
    images: [
      {
        src: "/images/pcelinjak/SlikaMaticeSaLeglom.jpg",
        alt: "Matica sa leglom na saću",
      },
      {
        src: "/images/pcelinjak/SlikaLeglaURamu.jpg",
        alt: "Leglo u ramu — znak kvalitetne matice",
      },
    ],
  },
  {
    id: "rojevi",
    icon: TreePine,
    label: "Rojevi",
    title: "Rojevi",
    price: "80 KM",
    description: [
      "Nudimo kvalitetne rojeve pčela za pčelare koji žele proširiti ili obnoviti svoj pčelinjak. Naši rojevi formirani su od jakih i zdravih pčelinjih društava, sa mladim, oplođenim maticama, što obezbjeđuje stabilan razvoj i dobar prinos. Svaki roj sadrži 5 ramova — 3 rama sa leglom različitog uzrasta i 2 rama sa dovoljno hrane — što omogućava siguran prijem i brz napredak društva.",
      "Preuzimanje rojeva vrši se lično na pčelinjaku uz prethodni dogovor. Kupac je dužan obezbijediti vlastitu košnicu ili transportnu opremu, a u slučaju kupovine kompletne opreme kod nas, roj ostaje u toj opremi i spreman je za dalji razvoj. Kupcima pružamo savjete za pravilno useljavanje roja i dalji razvoj pčelinjeg društva.",
    ],
    images: [
      {
        src: "/images/pcelinjak/SlikaPceleNaLetu.jpg",
        alt: "Pčele na letu — aktivno pčelinje društvo",
      },
      {
        src: "/images/pcelinjak/SlikaPceleNaEvodiji.jpg",
        alt: "Pčele na saću — zdravo pčelinje društvo",
      },
    ],
    reversed: true,
  },
  {
    id: "drustva",
    icon: Users,
    label: "Društva",
    title: "Pčelinja društva na LR ramovima – prodaja u Bosni i Hercegovini",
    price: "Po dogovoru",
    priceNote: "Na 10 i 20 ramova",
    description: [
      "Za pčelare koji žele kvalitetna i razvijena društva, nudimo kompletna pčelinja društva na LR ramovima, spremna za dalji razvoj i pouzdano pčelarenje. Naša društva su idealna za proširenje ili obnovu pčelinjaka.",
      "Svako društvo dolazi sa mladom, oplođenom maticom, te minimalno 4–5 ramova legla i dovoljnom količinom hrane, što garantuje siguran početak i stabilan razvoj novog društva.",
      "Sva naša pčelinja društva su redovno pregledana i zdravstveno sigurna. Prije prodaje prolaze detaljan pregled kako bi se osigurala maksimalna kvaliteta i zdravlje pčela.",
      "Kupcima pružamo stručnu podršku pri preuzimanju, kao i savjete za pravilno useljavanje i dalji razvoj društva. Ako tražite pouzdanu prodaju pčelinjih društava u BiH, naši rojevi i razvijena društva su pravi izbor za vaš pčelinjak.",
    ],
    images: [
      {
        src: "/images/pcelinjak/SlikaPcelinjakaUSumi.jpg",
        alt: "Pčelinjak u šumi — košnice u prirodnom okruženju",
      },
      {
        src: "/images/pcelinjak/SlikaPcelinjakaZaRojeve.jpg",
        alt: "Registrovani pčelinjak — garancija kvaliteta",
      },
    ],
  },
];

/* ───────────────────────────── Page component ───────────────────────────── */

export default async function ProductTypePage({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;

  const breadcrumbLabel: Record<string, string> = {
    med: "Med i Proizvodi od Meda",
    polen: "Polen, Matična Mliječ i Propolis",
    matice: "Matice, Rojevi i Pčelinja Društva",
  };

  // Matice gets a separate blog-like layout
  if (type === "matice") {
    return (
      <>
        <BreadcrumbJsonLd
          items={[
            { name: "Početna", href: "/" },
            { name: "Proizvodi", href: "/#products" },
            { name: breadcrumbLabel[type] ?? type, href: `/proizvodi/${type}` },
          ]}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: "Matice, Rojevi i Pčelinja Društva",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  item: {
                    "@type": "Product",
                    name: "Pčelinja Matica — selekcionirana",
                    description:
                      "Pažljivo selekcionirane matice iz najproduktivnijih i najmirnijih društava, prilagođene lokalnim klimatskim uslovima.",
                    image: `${BASE_URL}/images/pcelinjak/SlikaMaticeSaLeglom.jpg`,
                    brand: { "@type": "Brand", name: "Pčelinjak Ljubojević" },
                    itemCondition: "https://schema.org/NewCondition",
                    offers: {
                      "@type": "Offer",
                      price: "20",
                      priceCurrency: "BAM",
                      availability: "https://schema.org/InStock",
                    },
                  },
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  item: {
                    "@type": "Product",
                    name: "Pčelinji Roj — 5 ramova",
                    description:
                      "Kvalitetni rojevi formirani od jakih i zdravih društava sa mladim, oplođenim maticama.",
                    image: `${BASE_URL}/images/pcelinjak/SlikaPceleNaLetu.jpg`,
                    brand: { "@type": "Brand", name: "Pčelinjak Ljubojević" },
                    itemCondition: "https://schema.org/NewCondition",
                    offers: {
                      "@type": "Offer",
                      price: "80",
                      priceCurrency: "BAM",
                      availability: "https://schema.org/InStock",
                    },
                  },
                },
              ],
            }),
          }}
        />
        <SiteHeader />
        <main>
          {/* Hero */}
          <section className="relative min-h-[55vh] flex items-end overflow-hidden">
            <Image
              src="/images/pcelinjak/SlikaPcelinjakaUSumi.jpg"
              alt="Pčelinjak u šumi — košnice u prirodnom okruženju"
              fill
              sizes="100vw"
              className="object-cover"
              priority
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-foreground/20" />
            <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-32">
              <Link
                href="/"
                className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-primary-foreground/70 transition-colors hover:text-primary-foreground"
              >
                <ArrowLeft className="h-4 w-4" />
                Nazad na početnu
              </Link>
              <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
                Za Pčelare
              </p>
              <h1 className="max-w-3xl font-serif text-4xl font-bold leading-tight text-primary-foreground md:text-6xl">
                Matice, Rojevi i Pčelinja Društva
              </h1>
              <p className="mt-4 max-w-xl text-lg text-primary-foreground/80 leading-relaxed">
                Kvalitetne selekcionirane matice, rojevi i kompletna pčelinja
                društva za pčelare koji žele unaprijediti svoj pčelinjak.
              </p>
            </div>
          </section>

          {/* Quick nav strip */}
          <section className="sticky top-16 z-30 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
            <div className="mx-auto max-w-7xl px-6">
              <nav className="flex gap-8 overflow-x-auto py-4">
                {maticeSections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="flex shrink-0 items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                  >
                    <s.icon className="h-4 w-4" />
                    {s.label}
                  </a>
                ))}
              </nav>
            </div>
          </section>

          {/* Blog sections */}
          {maticeSections.map((section, idx) => (
            <section
              key={section.id}
              id={section.id}
              className={`py-20 ${idx % 2 === 0 ? "bg-background" : "bg-secondary"}`}
            >
              <div className="mx-auto max-w-7xl px-6">
                <div
                  className={`flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16 ${section.reversed ? "lg:flex-row-reverse" : ""}`}
                >
                  {/* Text */}
                  <div className="flex-1">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <section.icon className="h-5 w-5 text-primary" />
                      </div>
                      <p className="text-sm font-medium uppercase tracking-widest text-primary">
                        {section.label}
                      </p>
                    </div>
                    <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                      {section.title}
                    </h2>
                    {section.description.map((paragraph, i) => (
                      <p
                        key={i}
                        className="mt-4 text-muted-foreground leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}

                    {/* Price tag */}
                    <div className="mt-6 inline-flex items-center gap-3 rounded-xl border border-accent/30 bg-accent/10 px-5 py-3">
                      <BadgeDollarSign className="h-5 w-5 text-accent" />
                      <div>
                        <p className="font-serif text-xl font-bold text-foreground">
                          {section.price}
                        </p>
                        {section.priceNote && (
                          <p className="text-xs text-muted-foreground">
                            {section.priceNote}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Images */}
                  <div className="flex flex-1 gap-4">
                    {section.images.map((img, i) => (
                      <div
                        key={i}
                        className={`relative overflow-hidden rounded-2xl ${
                          section.images.length === 1
                            ? "aspect-[4/3] w-full"
                            : i === 0
                              ? "aspect-[3/4] w-1/2"
                              : "aspect-[3/4] w-1/2 mt-8"
                        }`}
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          sizes="(max-width: 768px) 50vw, 25vw"
                          className="object-cover"
                          placeholder="blur"
                          blurDataURL={BLUR_DATA_URL}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          ))}

          {/* Pricing & Transport Info */}
          <section className="bg-background py-20">
            <div className="mx-auto max-w-7xl px-6">
              <div className="mx-auto max-w-3xl">
                {/* Transport notice */}
                <div className="rounded-2xl border border-border bg-secondary p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/20">
                      <Truck className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-foreground">
                        Samo Lično Preuzimanje
                      </h3>
                      <p className="mt-2 text-muted-foreground leading-relaxed">
                        Ne vršimo transport matica, rojeva ni društava. Svi
                        proizvodi iz ove kategorije se preuzimaju lično na našem
                        pčelinjaku.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Pricing */}
                <div className="mt-8 rounded-2xl border border-border bg-secondary p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <BadgeDollarSign className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-foreground">
                        Cjenovnik
                      </h3>
                      <p className="mt-1 text-muted-foreground">
                        Okvirne cijene za sezonu
                      </p>
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="rounded-lg bg-background p-5 text-center">
                      <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                        Matice
                      </p>
                      <p className="mt-2 font-serif text-2xl font-bold text-foreground">
                        20 KM
                      </p>
                    </div>
                    <div className="rounded-lg bg-background p-5 text-center">
                      <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                        Rojevi
                      </p>
                      <p className="mt-2 font-serif text-2xl font-bold text-foreground">
                        80 KM
                      </p>
                    </div>
                    <div className="rounded-lg bg-background p-5 text-center">
                      <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                        Društva
                      </p>
                      <p className="mt-2 font-serif text-2xl font-bold text-foreground">
                        Po dogovoru
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Na 10 i 20 ramova
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Related blog post */}
          <section className="border-t border-border bg-secondary/40 py-14">
            <div className="mx-auto max-w-7xl px-6">
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-medium uppercase tracking-widest text-primary">
                    Iz našeg bloga
                  </p>
                  <p className="mt-1 font-serif text-xl font-bold text-foreground md:text-2xl">
                    Proljetni Pregled Košnica: Šta Provjeriti u Pčelinjaku
                  </p>
                </div>
                <Link
                  href="/blog/spring-hive-inspections"
                  className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-primary px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  Pročitajte članak
                  <ArrowLeft className="h-4 w-4 rotate-180" />
                </Link>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="bg-primary py-20">
            <div className="mx-auto max-w-7xl px-6">
              <div className="mx-auto max-w-2xl text-center">
                <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
                  Zainteresovani?
                </p>
                <h2 className="font-serif text-3xl font-bold text-primary-foreground md:text-4xl text-balance">
                  Kontaktirajte Nas za Narudžbu
                </h2>
                <p className="mt-4 text-primary-foreground/80 leading-relaxed">
                  Za sve informacije o dostupnosti, cijenama i isporuci matica,
                  rojeva ili pčelinjih društava, javite nam se telefonom ili
                  e-mailom.
                </p>
                <div className="mt-10 grid gap-6 sm:grid-cols-2">
                  <div className="rounded-lg bg-primary-foreground/10 p-6">
                    <Phone className="mx-auto h-6 w-6 text-accent" />
                    <p className="mt-3 text-sm font-medium uppercase tracking-wider text-primary-foreground/60">
                      Telefon
                    </p>
                    <p className="mt-1 font-serif text-xl font-bold text-primary-foreground">
                      +381 66 861 439
                    </p>
                  </div>
                  <div className="rounded-lg bg-primary-foreground/10 p-6">
                    <Mail className="mx-auto h-6 w-6 text-accent" />
                    <p className="mt-3 text-sm font-medium uppercase tracking-wider text-primary-foreground/60">
                      E-mail
                    </p>
                    <p className="mt-1 font-serif text-xl font-bold text-primary-foreground">
                      milos.ljubojevic36@gmail.com
                    </p>
                  </div>
                </div>
                <Button size="lg" variant="secondary" className="mt-8" asChild>
                  <Link href="/#contact">Pošaljite Poruku</Link>
                </Button>
              </div>
            </div>
          </section>
        </main>
        <SiteFooter />
      </>
    );
  }

  // ─── Standard product page (med, polen) ───
  const meta = categoryMeta[type];
  if (!meta) notFound();

  const supabase = await createClient();
  const { data: products } = await supabase
    .from("Products")
    .select("*, Product_price_options(*)")
    .ilike("type", type)
    .order("id");

  const typedProducts = (products as ProductWithOptions[]) ?? [];

  const productListJsonLd = typedProducts.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: meta.title,
    itemListElement: typedProducts.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.product_name,
        description: product.desc || meta.description,
        image: product.image
          ? `${BASE_URL}${product.image}`
          : undefined,
        brand: {
          "@type": "Brand",
          name: "Pčelinjak Ljubojević",
        },
        itemCondition: "https://schema.org/NewCondition",
        offers: (() => {
          const opts = product.Product_price_options ?? [];
          if (opts.length === 0) return undefined;
          const prices = opts.map((opt) => parsePrice(opt.price));
          return {
            "@type": "AggregateOffer",
            lowPrice: String(Math.min(...prices)),
            highPrice: String(Math.max(...prices)),
            priceCurrency: "BAM",
            offerCount: opts.length,
            offers: opts.map((opt) => ({
              "@type": "Offer",
              price: String(parsePrice(opt.price)),
              priceCurrency: "BAM",
              availability: "https://schema.org/InStock",
              name: opt.size,
            })),
          };
        })(),
      },
    })),
  } : null

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Početna", href: "/" },
          { name: "Proizvodi", href: "/#products" },
          { name: breadcrumbLabel[type] ?? type, href: `/proizvodi/${type}` },
        ]}
      />
      {productListJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productListJsonLd) }}
        />
      )}
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative min-h-[55vh] flex items-end overflow-hidden">
          <Image
            src={meta.heroImage}
            alt={meta.heroAlt}
            fill
            sizes="100vw"
            className="object-cover"
            priority
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-foreground/20" />
          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-32">
            <Link
              href="/"
              className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-primary-foreground/70 transition-colors hover:text-primary-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Nazad na početnu
            </Link>
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
              {meta.subtitle}
            </p>
            <h1 className="max-w-3xl font-serif text-4xl font-bold leading-tight text-primary-foreground md:text-6xl">
              {meta.title}
            </h1>
            <p className="mt-4 max-w-xl text-lg text-primary-foreground/80 leading-relaxed">
              {meta.description}
            </p>
          </div>
        </section>

        {/* Features strip */}
        <section className="border-b border-border bg-secondary py-12">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-8 md:grid-cols-3">
              {meta.features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="bg-background py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center">
              <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
                Ponuda
              </p>
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
                {type === "med"
                  ? "Izaberite Vaš Med"
                  : "Naši Pčelinji Proizvodi"}
              </h2>
            </div>

            <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-2.5 rounded-full border border-accent/30 bg-accent/10 px-5 py-2.5 text-sm text-foreground">
              <CalendarClock className="h-4 w-4 shrink-0 text-accent" />
              <span>Narudžbe šaljemo svake srijede.</span>
            </div>

            {typedProducts.length > 0 ? (
              <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {typedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <p className="mt-14 text-center text-muted-foreground">
                Trenutno nema proizvoda u ovoj kategoriji.
              </p>
            )}
          </div>
        </section>

        {/* Related blog post */}
        {(type === "med" || type === "polen") && (() => {
          const blogLink =
            type === "med"
              ? { href: "/blog/art-of-extracting-raw-honey", label: "Vrcanje Sirovog Meda: Od Košnice do Tegle" }
              : { href: "/blog/vodic-za-pcelarstvo", label: "Vodič za Pčelarstvo — Oprema, Sezona i Zdravlje Pčela" }
          return (
            <section className="border-t border-border bg-secondary/40 py-14">
              <div className="mx-auto max-w-7xl px-6">
                <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-medium uppercase tracking-widest text-primary">
                      Iz našeg bloga
                    </p>
                    <p className="mt-1 font-serif text-xl font-bold text-foreground md:text-2xl">
                      {blogLink.label}
                    </p>
                  </div>
                  <Link
                    href={blogLink.href}
                    className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-primary px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    Pročitajte članak
                    <ArrowLeft className="h-4 w-4 rotate-180" />
                  </Link>
                </div>
              </div>
            </section>
          )
        })()}

        {/* CTA */}
        <section className="bg-secondary py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
                Naručivanje
              </p>
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
                Kako Naručiti?
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Za narudžbe i sva pitanja, kontaktirajte nas direktno putem
                telefona ili e-maila. Ili dodajte proizvode u korpu i naručite
                online.
              </p>
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                <div className="rounded-lg border border-border bg-card p-6">
                  <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                    Telefon
                  </p>
                  <p className="mt-2 font-serif text-xl font-bold text-foreground">
                    +381 66 861 439
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-card p-6">
                  <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                    E-mail
                  </p>
                  <p className="mt-2 font-serif text-xl font-bold text-foreground">
                    milos.ljubojevic36@gmail.com
                  </p>
                </div>
              </div>
              <Button
                size="lg"
                className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90"
                asChild
              >
                <Link href="/#contact">Pošaljite Poruku</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
