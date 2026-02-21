import { ArrowRight } from "lucide-react"

const posts = [
  {
    title: "Spring Hive Inspections: What to Look For",
    excerpt:
      "As temperatures rise, it is time to open up the hives and check on your colonies. Here is our step-by-step guide to a thorough spring inspection.",
    date: "Mar 12, 2026",
    category: "Hive Management",
  },
  {
    title: "The Art of Extracting Raw Honey",
    excerpt:
      "From uncapping frames to bottling, we walk through our honey extraction process and share tips for keeping things clean and efficient.",
    date: "Feb 28, 2026",
    category: "Harvest",
  },
  {
    title: "Why Bees Matter: Pollination & Biodiversity",
    excerpt:
      "Honeybees pollinate over a third of the food we eat. Learn why protecting pollinators is essential for our ecosystem and food supply.",
    date: "Jan 15, 2026",
    category: "Education",
  },
  {
    title: "Overwintering Your Colonies Successfully",
    excerpt:
      "Winter can be tough on bee colonies. We share our tried-and-true methods for keeping hives healthy through the cold months.",
    date: "Nov 8, 2025",
    category: "Seasonal Care",
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="scroll-mt-20 bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
              From the Hive
            </p>
            <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
              Journal & Updates
            </h2>
          </div>
          <a
            href="#blog"
            className="group flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            View all posts
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <a
              key={post.title}
              href="#blog"
              className="group flex flex-col rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <span className="rounded-sm bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                  {post.category}
                </span>
                <span className="text-xs text-muted-foreground">
                  {post.date}
                </span>
              </div>
              <h3 className="mt-4 font-serif text-xl font-bold text-card-foreground transition-colors group-hover:text-primary">
                {post.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>
              <span className="mt-4 flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Read more
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
