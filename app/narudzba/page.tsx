"use client"

declare global {
  interface Window { gtag: (...args: unknown[]) => void }
}

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useCart, SHIPPING_COST } from "@/lib/cart-context"
import { parsePrice } from "@/lib/types/database"
import { placeOrder } from "./actions"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Loader2 } from "lucide-react"
import { toast } from "sonner"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

const checkoutSchema = z.object({
  name: z.string().min(2, "Ime je obavezno"),
  lastname: z.string().min(2, "Prezime je obavezno"),
  address: z.string().min(5, "Adresa je obavezna"),
  city: z.string().min(2, "Grad je obavezan"),
  phone: z.string().min(8, "Telefon je obavezan"),
  email: z.string().email("Unesite ispravnu e-mail adresu"),
})

type CheckoutForm = z.infer<typeof checkoutSchema>

export default function CheckoutPage() {
  const router = useRouter()
  const { items, totalPrice, clearCart } = useCart()
  const [submitting, setSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutForm>({
    resolver: zodResolver(checkoutSchema),
  })

  useEffect(() => {
    if (items.length === 0) return
    if (typeof window.gtag !== "function") return
    window.gtag("event", "begin_checkout", {
      currency: "BAM",
      value: totalPrice + SHIPPING_COST,
      items: items.map((item) => ({
        item_id: String(item.product.id),
        item_name: item.product.product_name,
        price: parsePrice(item.priceOption.price),
        quantity: item.quantity,
      })),
    })
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const onSubmit = async (data: CheckoutForm) => {
    if (items.length === 0) {
      toast.error("Korpa je prazna")
      return
    }

    setSubmitting(true)
    try {
      const { orderId } = await placeOrder({
        ...data,
        items: items.map((item) => ({
          product_id: item.product.id,
          product_price_option: item.priceOption.id,
          quantity: item.quantity,
        })),
      })
      if (typeof window.gtag === "function") {
        window.gtag("event", "purchase", {
          transaction_id: String(orderId),
          value: totalPrice + SHIPPING_COST,
          currency: "BAM",
          shipping: SHIPPING_COST,
          items: items.map((item) => ({
            item_id: String(item.product.id),
            item_name: item.product.product_name,
            price: parsePrice(item.priceOption.price),
            quantity: item.quantity,
          })),
        })
      }
      clearCart()
      router.push("/narudzba/uspjesno")
    } catch (err) {
      const message = err instanceof Error ? err.message : null
      toast.error(message ?? "Greška pri slanju narudžbe. Pokušajte ponovo.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <SiteHeader />
      <main className="bg-background pt-28 pb-20">
        <div className="mx-auto max-w-5xl px-6">
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Nazad
          </Link>

          <h1 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            Narudžba
          </h1>
          <p className="mt-1 text-muted-foreground">
            Popunite podatke za dostavu i potvrdite narudžbu.
          </p>

          {items.length === 0 ? (
            <div className="mt-12 text-center">
              <p className="text-muted-foreground">
                Vaša korpa je prazna. Dodajte proizvode prije naručivanja.
              </p>
              <Button className="mt-4" asChild>
                <Link href="/#products">Pogledaj Proizvode</Link>
              </Button>
            </div>
          ) : (
            <div className="mt-8 grid gap-8 lg:grid-cols-5">
              {/* Form */}
              <div className="lg:col-span-3">
                <Card className="border-border bg-card">
                  <CardContent className="p-6">
                    <h2 className="font-serif text-xl font-bold text-foreground">
                      Podaci za Dostavu
                    </h2>
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="mt-4 space-y-4"
                    >
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Ime</Label>
                          <Input
                            id="name"
                            {...register("name")}
                            placeholder="Vaše ime"
                          />
                          {errors.name && (
                            <p className="mt-1 text-xs text-destructive">
                              {errors.name.message}
                            </p>
                          )}
                        </div>
                        <div>
                          <Label htmlFor="lastname">Prezime</Label>
                          <Input
                            id="lastname"
                            {...register("lastname")}
                            placeholder="Vaše prezime"
                          />
                          {errors.lastname && (
                            <p className="mt-1 text-xs text-destructive">
                              {errors.lastname.message}
                            </p>
                          )}
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="address">Adresa</Label>
                        <Input
                          id="address"
                          {...register("address")}
                          placeholder="Ulica i broj"
                        />
                        {errors.address && (
                          <p className="mt-1 text-xs text-destructive">
                            {errors.address.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="city">Grad</Label>
                        <Input
                          id="city"
                          {...register("city")}
                          placeholder="Vaš grad"
                        />
                        {errors.city && (
                          <p className="mt-1 text-xs text-destructive">
                            {errors.city.message}
                          </p>
                        )}
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="phone">Telefon</Label>
                          <Input
                            id="phone"
                            {...register("phone")}
                            placeholder="+387 6X XXX XXX"
                          />
                          {errors.phone && (
                            <p className="mt-1 text-xs text-destructive">
                              {errors.phone.message}
                            </p>
                          )}
                        </div>
                        <div>
                          <Label htmlFor="email">E-mail</Label>
                          <Input
                            id="email"
                            type="email"
                            {...register("email")}
                            placeholder="vas@email.com"
                          />
                          {errors.email && (
                            <p className="mt-1 text-xs text-destructive">
                              {errors.email.message}
                            </p>
                          )}
                        </div>
                      </div>
                      <Button
                        type="submit"
                        disabled={submitting}
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        {submitting && (
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        {submitting ? "Šalje se..." : "Potvrdi Narudžbu"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-2">
                <Card className="sticky top-28 border-border bg-card">
                  <CardContent className="p-6">
                    <h2 className="font-serif text-xl font-bold text-foreground">
                      Pregled Narudžbe
                    </h2>
                    <div className="mt-4 space-y-3">
                      {items.map((item) => (
                        <div
                          key={item.priceOption.id}
                          className="flex items-center justify-between text-sm"
                        >
                          <div>
                            <p className="font-medium">
                              {item.product.product_name}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {item.priceOption.size} x{item.quantity}
                            </p>
                          </div>
                          <p className="font-medium">
                            {(
                              parsePrice(item.priceOption.price) *
                              item.quantity
                            ).toFixed(2)}{" "}
                            KM
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 space-y-2 border-t border-border pt-4">
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>Proizvodi</span>
                        <span>{totalPrice.toFixed(2)} KM</span>
                      </div>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>Poštarina</span>
                        <span>{SHIPPING_COST.toFixed(2)} KM</span>
                      </div>
                      <div className="flex items-center justify-between border-t border-border pt-2">
                        <span className="font-medium">Ukupno</span>
                        <span className="font-serif text-xl font-bold text-primary">
                          {(totalPrice + SHIPPING_COST).toFixed(2)} KM
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
