import Link from "next/link"

const footerLinks = {
  Navigate: [
    { label: "About", href: "#about" },
    { label: "Bee Yard", href: "#bee-yard" },
    { label: "Products", href: "#products" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ],
  Resources: [
    { label: "Beekeeping Tips", href: "#blog" },
    { label: "Pollinator Guide", href: "#blog" },
    { label: "Honey Recipes", href: "#blog" },
    { label: "FAQ", href: "#contact" },
  ],
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <HexagonIcon className="h-7 w-7 text-accent" />
              <span className="font-serif text-xl font-bold text-card-foreground">
                Golden Hive
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
              Family-run apiary producing raw honey and beeswax products with
              care for the bees and respect for the land.
            </p>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                {heading}
              </h4>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            2026 Golden Hive Apiary. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Dedicated to sustainable beekeeping and pollinator health.
          </p>
        </div>
      </div>
    </footer>
  )
}

function HexagonIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    </svg>
  )
}
