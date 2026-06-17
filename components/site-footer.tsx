import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";

const MAPS_URL =
  "https://www.google.com/maps/place/Pcelinjak+Ljubojevic/data=!4m2!3m1!1s0x0:0x675e009c76f6e038?sa=X&ved=1t:2428&ictx=111";

const footerLinks = {
  Navigacija: [
    { label: "O Nama", href: "/#about" },
    { label: "Pčelinjak", href: "/#bee-yard" },
    { label: "Proizvodi", href: "/#products" },
    { label: "Blog", href: "/#blog" },
    { label: "Kontakt", href: "/#contact" },
    { label: "Politika Privatnosti", href: "/politika-privatnosti" },
    { label: "Uslovi Isporuke", href: "/uslovi-isporuke" },
  ],
  Resursi: [
    { label: "Vodič za Pčelarstvo", href: "/blog/vodic-za-pcelarstvo" },
    { label: "Proljetni Pregled Košnica", href: "/blog/spring-hive-inspections" },
    { label: "Vrcanje Sirovog Meda", href: "/blog/art-of-extracting-raw-honey" },
    { label: "Značaj Pčela u Oprašivanju", href: "/blog/znacaj-pcela-u-oprasivanju" },
    { label: "Prezimljavanje Pčela", href: "/blog/prezimljavanje-pcela" },
  ],
};

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/LogoPcele.png"
                alt="Pčelinjak Ljubojević Logo"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="font-serif text-xl font-bold text-card-foreground">
                Pčelinjak Ljubojević
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
              Porodični pčelinjak sa 45 godina tradicije — proizvodnja domaćeg
              meda, polena, propolisa, matične mliječi i prodaja pčelinjih matica.
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <MapPin className="h-4 w-4" />
              Bijeljina, Donji Brodac 90
            </a>
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
            2026 Pčelinjak Ljubojević. Sva prava zadržana.
          </p>
          <p className="text-xs text-muted-foreground">
            Domaći med i pčelinji proizvodi — direktno od pčelara.
          </p>
        </div>
      </div>
    </footer>
  );
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
  );
}
