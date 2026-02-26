"use client"

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from "react"
import type { CartItem, Product, ProductPriceOption } from "@/lib/types/database"
import { parsePrice } from "@/lib/types/database"

type CartContextType = {
  items: CartItem[]
  addItem: (
    product: Product,
    priceOption: ProductPriceOption,
    quantity: number
  ) => void
  removeItem: (priceOptionId: number) => void
  updateQuantity: (priceOptionId: number, quantity: number) => void
  clearCart: () => void
  totalItems: number
  totalPrice: number
}

const CartContext = createContext<CartContextType | null>(null)

const CART_KEY = "pcelinjak-cart"

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [hydrated, setHydrated] = useState(false)

  // Hydrate from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(CART_KEY)
      if (stored) {
        setItems(JSON.parse(stored))
      }
    } catch {}
    setHydrated(true)
  }, [])

  // Persist to localStorage
  useEffect(() => {
    if (hydrated) {
      localStorage.setItem(CART_KEY, JSON.stringify(items))
    }
  }, [items, hydrated])

  const addItem = useCallback(
    (product: Product, priceOption: ProductPriceOption, quantity: number) => {
      setItems((prev) => {
        const existing = prev.find((i) => i.priceOption.id === priceOption.id)
        if (existing) {
          return prev.map((i) =>
            i.priceOption.id === priceOption.id
              ? { ...i, quantity: i.quantity + quantity }
              : i
          )
        }
        return [...prev, { product, priceOption, quantity }]
      })
    },
    []
  )

  const removeItem = useCallback((priceOptionId: number) => {
    setItems((prev) => prev.filter((i) => i.priceOption.id !== priceOptionId))
  }, [])

  const updateQuantity = useCallback(
    (priceOptionId: number, quantity: number) => {
      if (quantity <= 0) {
        removeItem(priceOptionId)
        return
      }
      setItems((prev) =>
        prev.map((i) =>
          i.priceOption.id === priceOptionId ? { ...i, quantity } : i
        )
      )
    },
    [removeItem]
  )

  const clearCart = useCallback(() => {
    setItems([])
  }, [])

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0)
  const totalPrice = items.reduce(
    (sum, i) => sum + parsePrice(i.priceOption.price) * i.quantity,
    0
  )

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}
