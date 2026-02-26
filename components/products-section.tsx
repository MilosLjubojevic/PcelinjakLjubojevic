import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const products = [
  {
    name: "Med I Proizvodi od Meda",
    description:
      "Čist, nefiltriran med sa naših livada. Bogat ukus i prirodna svojstva u svakoj kašičici.",
    image: "/images/product-comb.jpg",
    tag: "Najprodavaniji",
    href: "/proizvodi/med",
  },
  {
    name: "Polen, Matična Mliječ i Propolis",
    description:
      "Pčelinji proizvodi bogati vitaminima i mineralima. Prirodni dodaci za zdravlje i imunitet.",
    image: "/images/SlikaPolenaUTegli.jpg",
    tag: "Prirodno",
    href: "/proizvodi/polen",
  },
  {
    name: "Matice, Rojevi i Pčelinja Društva",
    description:
      "Kvalitetne selekcionirane matice i pčelinja društva za pčelare koji žele unaprijediti svoj pčelinjak.",
    image: "/images/SlikaOplodnjaka.jpg",
    tag: "Sezonski",
    href: "/proizvodi/matice",
  },
];

export function ProductsSection() {
  return (
    <section id="products" className="scroll-mt-20 bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Naši Proizvodi
          </p>
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
            Prirodni Med i Pčelinji Proizvodi
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Domaći med, polen, propolis, matična mliječ i pčelinje matice — sve
            proizvedeno na našem pčelinjaku. Bez aditiva, bez prerade, samo
            čista priroda.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {products.map((product) => (
            <Card
              key={product.name}
              className="group flex flex-col overflow-hidden border-border bg-card transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 rounded-sm bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  {product.tag}
                </span>
              </div>
              <CardContent className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-serif text-xl font-bold text-card-foreground">
                    {product.name}
                  </h3>
                </div>
                <p className="mt-3 flex-1 text-sm text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
                <Button
                  className="mt-6 w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  asChild
                >
                  <Link href={product.href}>Pogledaj Proizvod</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
