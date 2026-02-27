import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BLUR_DATA_URL } from "@/lib/image-utils";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-end overflow-hidden">
      <Image
        src="/images/HeaderBeeyard.png"
        alt="Pčelinjak Ljubojević — košnice na livadi okružene prirodom"
        fill
        className="object-cover"
        priority
        placeholder="blur"
        blurDataURL={BLUR_DATA_URL}
      />
      <div className="absolute inset-0 bg-foreground/50" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-40">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
          Porodični pčelinjak sa 45 godina tradicije
        </p>
        <h1 className="max-w-3xl font-serif text-5xl font-bold leading-tight text-primary-foreground md:text-7xl">
          Domaći Med i Pčelinji Proizvodi{" "}
          <span className="text-accent">Pravo iz Naših Košnica</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
          Prirodni livadski med, polen, propolis i matična mliječ sa porodičnog
          pčelinjaka. Preko 200 pčelinjih društava njegujemo s ljubavlju —
          svaka tegla nosi kvalitet provjerene tradicije.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            asChild
          >
            <a href="#products">Pogledaj Ponudu</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground text-primary-foreground bg-primary-foreground/15 hover:bg-primary-foreground/25 backdrop-blur-sm"
            asChild
          >
            <a href="#about">Naša Priča</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
