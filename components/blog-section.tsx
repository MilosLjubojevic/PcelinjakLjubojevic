import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { posts } from "@/lib/blog-data"
import { BLUR_DATA_URL } from "@/lib/image-utils"

export function BlogSection() {
  return (
    <section id="blog" className="scroll-mt-20 bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
              Edukacija i Savjeti
            </p>
            <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
              Korisno iz Svijeta Pčelarstva
            </h2>
          </div>
          <a
            href="#blog"
            className="group flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            Pogledaj sve objave
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-primary/30 hover:shadow-md"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={post.heroImage}
                  alt={post.heroAlt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  style={post.heroObjectPosition ? { objectPosition: post.heroObjectPosition } : undefined}
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
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
                  Pročitaj više
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
