import Image from "next/image"

const images = [
  {
    src: "/images/yard-1.jpg",
    alt: "Row of wooden beehive boxes in the apiary",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/yard-2.jpg",
    alt: "Beekeeper inspecting a honeycomb frame full of honey",
    span: "",
  },
  {
    src: "/images/yard-3.jpg",
    alt: "Overhead view of bee yard with colorful hives in a wildflower meadow",
    span: "",
  },
  {
    src: "/images/yard-4.jpg",
    alt: "Macro close-up of honeybees on golden honeycomb",
    span: "md:col-span-2",
  },
]

export function BeeYardSection() {
  return (
    <section id="bee-yard" className="scroll-mt-20 bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            The Bee Yard
          </p>
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
            Life at the Apiary
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            A glimpse into our daily work tending to the colonies, harvesting
            honey, and nurturing healthy bee populations across our yards.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-2">
          {images.map((img) => (
            <div
              key={img.src}
              className={`group relative aspect-[4/3] overflow-hidden rounded-lg ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
