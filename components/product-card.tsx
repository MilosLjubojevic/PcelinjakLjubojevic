"use client"

import { useState } from "react"
import Image from "next/image"
import { useCart } from "@/lib/cart-context"
import type { ProductWithOptions } from "@/lib/types/database"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Minus, Plus, ShoppingCart } from "lucide-react"
import { toast } from "sonner"

export function ProductCard({ product }: { product: ProductWithOptions }) {
  const { addItem } = useCart()
  const options = product.Product_price_options ?? []
  const [selectedOptionId, setSelectedOptionId] = useState<string>(
    options[0]?.id?.toString() ?? ""
  )
  const [quantity, setQuantity] = useState(1)

  const selectedOption = options.find(
    (o) => o.id.toString() === selectedOptionId
  )

  const handleAdd = () => {
    if (!selectedOption) return
    addItem(product, selectedOption, quantity)
    toast.success(`${product.product_name} dodan u korpu`)
    setQuantity(1)
  }

  return (
    <Card className="group flex flex-col overflow-hidden border-border bg-card transition-shadow hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={product.image}
          alt={product.alt || product.product_name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <CardContent className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-xl font-bold text-card-foreground">
          {product.product_name}
        </h3>
        <p className="mt-2 flex-1 text-sm text-muted-foreground leading-relaxed">
          {product.desc}
        </p>

        {options.length > 0 && (
          <div className="mt-4 space-y-3">
            {/* Price option selector */}
            <Select
              value={selectedOptionId}
              onValueChange={setSelectedOptionId}
            >
              <SelectTrigger>
                <SelectValue placeholder="Izaberite opciju" />
              </SelectTrigger>
              <SelectContent>
                {options.map((opt) => (
                  <SelectItem key={opt.id} value={opt.id.toString()}>
                    {opt.size} — {opt.price}
                    {opt.stock <= 0 && " (Nema na stanju)"}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Quantity */}
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              >
                <Minus className="h-3.5 w-3.5" />
              </Button>
              <span className="w-8 text-center text-sm font-medium">
                {quantity}
              </span>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => setQuantity((q) => q + 1)}
              >
                <Plus className="h-3.5 w-3.5" />
              </Button>
            </div>

            {/* Add to cart */}
            <Button
              onClick={handleAdd}
              disabled={!selectedOption || (selectedOption?.stock ?? 0) <= 0}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Dodaj u Korpu
            </Button>
          </div>
        )}

        {options.length === 0 && (
          <Button
            className="mt-4 w-full bg-primary text-primary-foreground hover:bg-primary/90"
            asChild
          >
            <a href="/#contact">Kontaktirajte Nas</a>
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
