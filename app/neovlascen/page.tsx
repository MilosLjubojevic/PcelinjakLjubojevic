import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShieldX } from "lucide-react"

export default function UnauthorizedPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-secondary px-6">
      <div className="text-center">
        <ShieldX className="mx-auto h-16 w-16 text-destructive" />
        <h1 className="mt-6 font-serif text-3xl font-bold text-foreground">
          Nemate Pristup
        </h1>
        <p className="mt-3 max-w-md text-muted-foreground">
          Vaš nalog nije ovlašćen za pristup admin panelu. Kontaktirajte
          administratora ako smatrate da je ovo greška.
        </p>
        <Button
          className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90"
          asChild
        >
          <Link href="/">Nazad na Početnu</Link>
        </Button>
      </div>
    </div>
  )
}
