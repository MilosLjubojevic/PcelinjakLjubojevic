import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-end overflow-hidden">
      <Image
        src="/images/hero-bees.jpg"
        alt="Beekeeper tending to hives in a golden meadow"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-foreground/50" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-40">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
          Sustainable Beekeeping Since 2012
        </p>
        <h1 className="max-w-3xl font-serif text-5xl font-bold leading-tight text-primary-foreground md:text-7xl">
          Pure Honey,{" "}
          <span className="text-accent">Straight from the Hive</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
          We nurture healthy bee colonies and harvest small-batch, raw honey
          right here in the heart of the countryside. Every jar tells the story
          of our meadows.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <a href="#products">Shop Our Honey</a>
          </Button>
          <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
            <a href="#about">Our Story</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
