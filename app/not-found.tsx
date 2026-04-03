import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="text-center">
        <p className="font-serif text-8xl font-bold text-primary/20">404</p>
        <h1 className="mt-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
          Stranica nije pronađena
        </h1>
        <p className="mt-4 max-w-md text-muted-foreground leading-relaxed">
          Tražena stranica ne postoji ili je premještena. Provjerite adresu ili
          se vratite na početnu stranicu.
        </p>
        <Button className="mt-8" asChild>
          <Link href="/">Nazad na početnu</Link>
        </Button>
      </div>
    </main>
  )
}
