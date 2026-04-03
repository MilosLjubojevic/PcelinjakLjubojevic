"use client"

import Link from "next/link"
import Image from "next/image"
import { useCart, SHIPPING_COST } from "@/lib/cart-context"
import { parsePrice } from "@/lib/types/database"
import { BLUR_DATA_URL } from "@/lib/image-utils"
import { getSerbianItemLabel } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { Minus, Plus, ShoppingCart, Trash2, ShoppingBag, ArrowRight } from "lucide-react"

export function CartSheet() {
  const { items, hydrated, totalItems, totalPrice, updateQuantity, removeItem, clearCart } =
    useCart()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="relative"
          aria-label="Korpa"
        >
          <ShoppingCart className="h-5 w-5" />
          {hydrated && totalItems > 0 && (
            <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground ring-2 ring-background">
              {totalItems}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col gap-0 p-0 sm:max-w-md">
        {/* Header */}
        <SheetHeader className="px-6 pt-6 pb-4">
          <div className="flex items-center justify-between">
            <SheetTitle className="font-serif text-2xl">
              Korpa
              {totalItems > 0 && (
                <span className="ml-2 inline-flex items-center justify-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                  {totalItems} {getSerbianItemLabel(totalItems)}
                </span>
              )}
            </SheetTitle>
            {items.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                className="h-8 text-xs text-muted-foreground hover:text-destructive"
                onClick={clearCart}
              >
                Isprazni
              </Button>
            )}
          </div>
        </SheetHeader>

        <Separator />

        {items.length === 0 ? (
          /* Empty state */
          <div className="flex flex-1 flex-col items-center justify-center gap-6 px-6">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-muted/50">
              <ShoppingBag className="h-10 w-10 text-muted-foreground/50" />
            </div>
            <div className="text-center">
              <p className="font-serif text-lg font-medium text-foreground">
                Korpa je prazna
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Dodajte proizvode iz našeg asortimana
              </p>
            </div>
            <SheetClose asChild>
              <Button variant="outline" asChild>
                <Link href="/#products">
                  Pogledaj proizvode
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </SheetClose>
          </div>
        ) : (
          <>
            {/* Cart items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <div className="space-y-3">
                {items.map((item, index) => {
                  const unitPrice = parsePrice(item.priceOption.price)
                  const lineTotal = unitPrice * item.quantity

                  return (
                    <div key={item.priceOption.id}>
                      <div className="flex gap-3">
                        {/* Product thumbnail */}
                        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-muted">
                          <Image
                            src={item.product.image}
                            alt={item.product.alt || item.product.product_name}
                            fill
                            className="object-cover"
                            sizes="80px"
                            placeholder="blur"
                            blurDataURL={BLUR_DATA_URL}
                          />
                        </div>

                        {/* Product info */}
                        <div className="flex flex-1 flex-col justify-between py-0.5">
                          <div>
                            <div className="flex items-start justify-between gap-2">
                              <h4 className="text-sm font-semibold leading-tight text-foreground">
                                {item.product.product_name}
                              </h4>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-6 w-6 shrink-0 text-muted-foreground/60 hover:text-destructive"
                                onClick={() => removeItem(item.priceOption.id)}
                                aria-label={`Ukloni ${item.product.product_name}`}
                              >
                                <Trash2 className="h-3.5 w-3.5" />
                              </Button>
                            </div>
                            <p className="mt-0.5 text-xs text-muted-foreground">
                              {item.priceOption.size}
                            </p>
                          </div>

                          {/* Quantity + price row */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center rounded-full border border-border">
                              <button
                                onClick={() =>
                                  updateQuantity(
                                    item.priceOption.id,
                                    item.quantity - 1
                                  )
                                }
                                className="flex h-7 w-7 items-center justify-center rounded-l-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                                aria-label="Smanji količinu"
                              >
                                <Minus className="h-3 w-3" />
                              </button>
                              <span className="flex h-7 w-8 items-center justify-center text-xs font-medium">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  updateQuantity(
                                    item.priceOption.id,
                                    item.quantity + 1
                                  )
                                }
                                className="flex h-7 w-7 items-center justify-center rounded-r-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                                aria-label="Povećaj količinu"
                              >
                                <Plus className="h-3 w-3" />
                              </button>
                            </div>
                            <p className="text-sm font-semibold text-foreground">
                              {lineTotal.toFixed(2)} KM
                            </p>
                          </div>
                        </div>
                      </div>

                      {index < items.length - 1 && (
                        <Separator className="mt-3" />
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Footer / checkout */}
            <div className="border-t border-border bg-muted/30 px-6 py-5">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>Proizvodi</span>
                  <span>{totalPrice.toFixed(2)} KM</span>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>Poštarina</span>
                  <span>{SHIPPING_COST.toFixed(2)} KM</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="text-base font-medium text-foreground">Ukupno</span>
                  <span className="font-serif text-xl font-bold text-primary">
                    {(totalPrice + SHIPPING_COST).toFixed(2)} KM
                  </span>
                </div>
              </div>

              <SheetClose asChild>
                <Button
                  className="mt-4 w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  size="lg"
                  asChild
                >
                  <Link href="/narudzba">
                    Nastavi na narudžbu
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </SheetClose>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
