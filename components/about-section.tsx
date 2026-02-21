import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-20">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
            <Image
              src="/images/about-beekeeper.jpg"
              alt="Beekeeper holding a frame of honeybees in the apiary"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
              About Us
            </p>
            <h2 className="font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl text-balance">
              Dedicated to the Craft of Beekeeping
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Golden Hive Apiary started with two backyard hives and a deep
                curiosity about the world of honeybees. What began as a hobby
                quickly grew into a passion for sustainable agriculture and
                pollinator health.
              </p>
              <p>
                Today, we manage over 40 colonies across three bee yards,
                producing raw wildflower honey, creamed honey, and beeswax
                products. Every decision we make puts the health of our bees
                first.
              </p>
              <p>
                We believe in transparency and community. Whether you are a
                fellow beekeeper looking for mentorship or a honey lover
                searching for something truly local, our hive door is always
                open.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6">
              <Stat value="40+" label="Colonies" />
              <Stat value="12" label="Years" />
              <Stat value="3" label="Bee Yards" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <p className="font-serif text-3xl font-bold text-primary">{value}</p>
      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
    </div>
  )
}
