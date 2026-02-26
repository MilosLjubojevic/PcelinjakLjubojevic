import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function OrderSuccessPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex min-h-[70vh] items-center justify-center bg-background pt-20">
        <div className="mx-auto max-w-md px-6 text-center">
          <CheckCircle className="mx-auto h-16 w-16 text-primary" />
          <h1 className="mt-6 font-serif text-3xl font-bold text-foreground">
            Narudžba Primljena!
          </h1>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Hvala vam na narudžbi. Kontaktiraćemo vas u najkraćem roku radi
            potvrde i dogovora oko dostave.
          </p>
          <Button
            size="lg"
            className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90"
            asChild
          >
            <Link href="/">Nazad na Početnu</Link>
          </Button>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
