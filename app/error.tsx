"use client"

import Link from "next/link"
import { RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">
          Greška
        </p>
        <h1 className="mt-2 font-serif text-4xl font-bold text-foreground md:text-5xl">
          Nešto je pošlo po zlu
        </h1>
        <p className="mt-4 max-w-md text-muted-foreground leading-relaxed">
          Došlo je do neočekivane greške. Pokušajte ponovo ili se vratite na
          početnu stranicu.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Button onClick={reset} variant="outline" className="gap-2">
            <RotateCcw className="h-4 w-4" />
            Pokušaj ponovo
          </Button>
          <Button asChild>
            <Link href="/">Nazad na početnu</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
