import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const products = [
  {
    name: "Raw Wildflower Honey",
    description:
      "Unfiltered, unpasteurized honey harvested from our wildflower meadows. Rich, complex flavor with every spoonful.",
    price: "$14",
    image: "/images/product-honey.jpg",
    tag: "Best Seller",
  },
  {
    name: "Beeswax Candles & Wraps",
    description:
      "Hand-poured beeswax candles and reusable food wraps made from 100% pure beeswax from our hives.",
    price: "$10",
    image: "/images/product-beeswax.jpg",
    tag: "Handmade",
  },
  {
    name: "Cut Comb Honey",
    description:
      "Honeycomb cut straight from the frame. The most natural way to enjoy honey, wax and all.",
    price: "$18",
    image: "/images/product-comb.jpg",
    tag: "Seasonal",
  },
]

export function ProductsSection() {
  return (
    <section id="products" className="scroll-mt-20 bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Our Products
          </p>
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
            From Our Hives to Your Table
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Everything we sell is produced on our farm with care for the bees and
            respect for the craft. Small batch, always fresh.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {products.map((product) => (
            <Card
              key={product.name}
              className="group overflow-hidden border-border bg-card transition-shadow hover:shadow-lg"
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
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-serif text-xl font-bold text-card-foreground">
                    {product.name}
                  </h3>
                  <span className="shrink-0 font-serif text-2xl font-bold text-primary">
                    {product.price}
                  </span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
                <Button className="mt-6 w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
