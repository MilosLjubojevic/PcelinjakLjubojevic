"use client"

import Link from "next/link"
import { useCart } from "@/lib/cart-context"
import { parsePrice } from "@/lib/types/database"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react"

export function CartSheet() {
  const { items, totalItems, totalPrice, updateQuantity, removeItem } =
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
          {totalItems > 0 && (
            <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
              {totalItems}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="font-serif text-xl">Korpa</SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 items-center justify-center">
            <div className="text-center">
              <ShoppingCart className="mx-auto h-12 w-12 text-muted-foreground/40" />
              <p className="mt-4 text-muted-foreground">
                Vaša korpa je prazna.
              </p>
            </div>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4">
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.priceOption.id}
                    className="flex gap-4 rounded-lg border border-border p-3"
                  >
                    <div className="flex-1">
                      <p className="font-medium text-foreground">
                        {item.product.product_name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {item.priceOption.size} &middot; {item.priceOption.price}
                      </p>
                      <div className="mt-2 flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() =>
                            updateQuantity(
                              item.priceOption.id,
                              item.quantity - 1
                            )
                          }
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-6 text-center text-sm">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() =>
                            updateQuantity(
                              item.priceOption.id,
                              item.quantity + 1
                            )
                          }
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 text-muted-foreground hover:text-destructive"
                        onClick={() => removeItem(item.priceOption.id)}
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </Button>
                      <p className="text-sm font-medium">
                        {(
                          parsePrice(item.priceOption.price) * item.quantity
                        ).toFixed(2)}{" "}
                        KM
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-border pt-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Ukupno</span>
                <span className="font-serif text-xl font-bold text-primary">
                  {totalPrice.toFixed(2)} KM
                </span>
              </div>
              <Button
                className="mt-4 w-full bg-primary text-primary-foreground hover:bg-primary/90"
                asChild
              >
                <Link href="/narudzba">Nastavi na Narudžbu</Link>
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
