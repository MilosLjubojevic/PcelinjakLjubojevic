import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Politika Privatnosti | Pčelinjak Ljubojević",
  description:
    "Politika privatnosti Pčelinjaka Ljubojević — kako prikupljamo, koristimo i štitimo vaše lične podatke.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/politika-privatnosti" },
}

export default function PolitikaPrivatnostiPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-background">
        <section className="mx-auto max-w-3xl px-6 py-20 md:py-28">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Pravne napomene
          </p>
          <h1 className="font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl">
            Politika Privatnosti
          </h1>
          <p className="mt-4 text-muted-foreground">
            Posljednje ažuriranje: 1. april 2026.
          </p>

          <div className="mt-12 space-y-10 text-foreground/85 leading-relaxed">
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                1. Ko prikuplja podatke
              </h2>
              <p>
                Pčelinjak Ljubojević, vlasnik Miloš Ljubojević, Donji Bordac 90,
                76300 Bijeljina, Bosna i Hercegovina (u daljem tekstu: „mi" ili
                „pčelinjak") odgovoran je za obradu vaših ličnih podataka
                prikupljenih putem ove web stranice.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                2. Koji podaci se prikupljaju
              </h2>
              <p className="mb-3">Prikupljamo isključivo podatke koje nam sami dostavite:</p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Ime i prezime</li>
                <li>Adresa za dostavu (ulica, grad, poštanski broj)</li>
                <li>Broj telefona</li>
                <li>E-mail adresa</li>
                <li>Podaci o narudžbi (artikli, količine, ukupan iznos)</li>
              </ul>
              <p className="mt-3">
                Ne prikupljamo podatke o platnim karticama — sve narudžbe se
                plaćaju pouzećem (gotovinom pri preuzimanju).
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                3. Svrha obrade podataka
              </h2>
              <p className="mb-3">Vaše podatke koristimo isključivo za:</p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Obradu i isporuku vaše narudžbe</li>
                <li>Komunikaciju u vezi sa statusom narudžbe</li>
                <li>Odgovaranje na vaše upite putem kontakt forme</li>
              </ul>
              <p className="mt-3">
                Vaše podatke ne prodajemo trećim licima niti ih koristimo u
                marketinške svrhe bez vaše izričite saglasnosti.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                4. Čuvanje podataka
              </h2>
              <p>
                Podaci o narudžbama čuvaju se onoliko dugo koliko je potrebno za
                ispunjenje zakonskih obaveza (porezna dokumentacija: 5 godina).
                Podaci iz kontakt formi brišu se nakon rješavanja upita.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                5. Vaša prava
              </h2>
              <p className="mb-3">Imate pravo da:</p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Zatražite uvid u podatke koje o vama čuvamo</li>
                <li>Zatražite ispravku netačnih podataka</li>
                <li>Zatražite brisanje vaših podataka</li>
                <li>Povučete saglasnost za obradu podataka</li>
              </ul>
              <p className="mt-3">
                Zahtjeve možete uputiti na:{" "}
                <a
                  href="mailto:milos.ljubojevic36@gmail.com"
                  className="font-medium text-primary underline underline-offset-2 hover:text-primary/80"
                >
                  milos.ljubojevic36@gmail.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                6. Kolačići (Cookies)
              </h2>
              <p>
                Ova web stranica koristi isključivo tehničke kolačiće neophodne
                za funkcionisanje košarice. Ne koristimo analitičke ni marketinške
                kolačiće trećih strana.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                7. Kontakt
              </h2>
              <p>
                Za sva pitanja u vezi sa zaštitom privatnosti obratite nam se:
              </p>
              <address className="mt-3 not-italic space-y-1 text-muted-foreground">
                <p>Pčelinjak Ljubojević — Miloš Ljubojević</p>
                <p>Donji Bordac 90, 76300 Bijeljina, BiH</p>
                <p>Tel: <a href="tel:+38766861439" className="text-primary hover:underline">+387 66 861 439</a></p>
                <p>Email: <a href="mailto:milos.ljubojevic36@gmail.com" className="text-primary hover:underline">milos.ljubojevic36@gmail.com</a></p>
              </address>
            </section>
          </div>

          <div className="mt-16 border-t border-border pt-8">
            <Link
              href="/"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              ← Nazad na početnu
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
