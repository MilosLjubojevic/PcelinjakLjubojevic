import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Uslovi Isporuke i Povrata | Pčelinjak Ljubojević",
  description:
    "Uslovi isporuke, dostave i povrata za narudžbe sa Pčelinjaka Ljubojević — cijena dostave, rokovi, povrat robe.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/uslovi-isporuke" },
}

export default function UsloviIsporukePage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-background">
        <section className="mx-auto max-w-3xl px-6 py-20 md:py-28">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Pravne napomene
          </p>
          <h1 className="font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl">
            Uslovi Isporuke i Povrata
          </h1>
          <p className="mt-4 text-muted-foreground">
            Posljednje ažuriranje: 1. april 2026.
          </p>

          <div className="mt-12 space-y-10 text-foreground/85 leading-relaxed">
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                1. Dostava
              </h2>
              <p className="mb-3">
                Narudžbe šaljemo jednom sedmično — <strong>svakog utorka</strong>{" "}
                putem kurirske službe BEx (Bosanskohercegovačka ekspresna pošta).
                Dostava je dostupna na svim adresama u Bosni i Hercegovini i
                Srbiji.
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>
                  <strong>Cijena dostave:</strong> 15 KM po narudžbi (fiksna
                  cijena, bez obzira na težinu paketa)
                </li>
                <li>
                  <strong>Rok isporuke:</strong> 1–3 radna dana od slanja
                </li>
                <li>
                  <strong>Praćenje paketa:</strong> Broj pošiljke dostavljamo
                  SMS-om ili e-mailom
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                2. Plaćanje
              </h2>
              <p>
                Sve narudžbe se plaćaju <strong>pouzećem</strong> — gotovinom
                kuriru pri preuzimanju paketa. Trenutno ne prihvatamo plaćanje
                kreditnim karticama niti bankovnom doznakom.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                3. Lično preuzimanje
              </h2>
              <p className="mb-3">
                Lično preuzimanje je dostupno na adresi pčelinjaka uz prethodni
                dogovor:
              </p>
              <address className="not-italic space-y-1 text-muted-foreground">
                <p>Donji Brodac 90, 76300 Bijeljina</p>
                <p>
                  Tel:{" "}
                  <a href="tel:+38766861439" className="text-primary hover:underline">
                    +387 66 861 439
                  </a>
                </p>
                <p>Radno vrijeme: subota–nedjelja, 10:00–16:00</p>
              </address>
              <p className="mt-3">
                <strong>Napomena:</strong> Pčelinje matice, rojevi i pčelinja
                društva mogu se isključivo preuzeti lično — dostava ovih
                proizvoda nije moguća.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                4. Povrat robe
              </h2>
              <p className="mb-3">
                Prihvatamo povrat robe u roku od <strong>14 dana</strong> od
                datuma prijema, pod sljedećim uslovima:
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Proizvod nije otvoren i nalazi se u originalnoj ambalaži</li>
                <li>
                  Povrat nije moguć za prehrambene proizvode (med, polen,
                  propolis, matična mliječ) koji su otvoreni
                </li>
                <li>
                  Povrat živih pčela (matice, rojevi, društva) nije moguć nakon
                  preuzimanja
                </li>
              </ul>
              <p className="mt-3">
                Troškove povratne dostave snosi kupac, osim u slučaju pogrešno
                isporučenog ili oštećenog proizvoda — tada snosi troškove
                pčelinjak.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                5. Oštećena ili pogrešna roba
              </h2>
              <p>
                Ukoliko ste primili oštećen ili pogrešan proizvod, kontaktirajte
                nas u roku od 48 sati od preuzimanja sa fotografijom paketa i
                sadržaja. Zamijenit ćemo proizvod ili izvršiti povrat novca u
                cjelosti.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                6. Kontakt
              </h2>
              <p>Za pitanja u vezi sa narudžbama i isporukom:</p>
              <address className="mt-3 not-italic space-y-1 text-muted-foreground">
                <p>Tel: <a href="tel:+38766861439" className="text-primary hover:underline">+387 66 861 439</a></p>
                <p>Tel: <a href="tel:+38765994971" className="text-primary hover:underline">+387 65 994 971</a></p>
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
