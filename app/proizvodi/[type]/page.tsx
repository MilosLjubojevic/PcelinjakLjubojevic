import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ProductCard } from "@/components/product-card";
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
  type LucideIcon,
} from "lucide-react";
import type { ProductWithOptions } from "@/lib/types/database";

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

/* ───────────────────────────── Matice blog sections ───────────────────────────── */

type BlogSection = {
  id: string;
  icon: LucideIcon;
  label: string;
  title: string;
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
    description: [
      "Nudimo kvalitetne rojeve za pčelare koji žele proširiti svoj pčelinjak ili započeti novo pčelarenje. Naši rojevi su formirani od jakih, zdravih društava sa mladim, oplođenim maticama.",
      "Svaki roj se isporučuje u odgovarajućem transportnom pakovanju sa dovoljnom količinom hrane za bezbjedno putovanje. Pružamo savjete za uspješno useljavanje i prvu njegu nakon useljenja.",
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
    title: "Pčelinja Društva na Ramovima",
    description: [
      "Za pčelare koji traže gotova, razvijena društva, nudimo kompletna pčelinja društva na LR ili DB ramovima. Svako društvo dolazi sa mladom, maticom i minimalno 4-5 okvira legla i hranom.",
      "Sva naša društva su redovno pregledana i garantovano zdrava. Prije prodaje, svako društvo prolazi kroz rigorozan pregled. Pružamo punu podršku pri preuzimanju i savjete za dalji razvoj društva.",
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

  // Matice gets a separate blog-like layout
  if (type === "matice") {
    return (
      <>
        <SiteHeader />
        <main>
          {/* Hero */}
          <section className="relative min-h-[55vh] flex items-end overflow-hidden">
            <Image
              src="/images/pcelinjak/SlikaPcelinjakaUSumi.jpg"
              alt="Pčelinjak u šumi — košnice u prirodnom okruženju"
              fill
              className="object-cover"
              priority
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
                          className="object-cover"
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
                      +387 65 123 456
                    </p>
                  </div>
                  <div className="rounded-lg bg-primary-foreground/10 p-6">
                    <Mail className="mx-auto h-6 w-6 text-accent" />
                    <p className="mt-3 text-sm font-medium uppercase tracking-wider text-primary-foreground/60">
                      E-mail
                    </p>
                    <p className="mt-1 font-serif text-xl font-bold text-primary-foreground">
                      info@pcelinjak.ba
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

  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative min-h-[55vh] flex items-end overflow-hidden">
          <Image
            src={meta.heroImage}
            alt={meta.heroAlt}
            fill
            className="object-cover"
            priority
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

            {typedProducts.length > 0 ? (
              <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
                    +387 65 123 456
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-card p-6">
                  <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                    E-mail
                  </p>
                  <p className="mt-2 font-serif text-xl font-bold text-foreground">
                    info@pcelinjak.ba
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
