export type Product = {
  id: number
  product_name: string
  desc: string
  image: string
  alt: string
  type: string // "med" | "polen" | "matice"
}

export type ProductPriceOption = {
  id: number
  product_id: number
  size: string
  price: string
  stock: number
}

export type ProductWithOptions = Product & {
  Product_price_options: ProductPriceOption[]
}

export type Order = {
  id: number
  created_at: string
  name: string
  lastname: string
  address: string
  city: string
  phone: string
  email: string
  sent: boolean
}

export type OrderItem = {
  id: number
  order_id: number
  product_id: number
  product_price_option: number
  quantity: number
  created_at: string
}

export type OrderWithItems = Order & {
  Order_items: (OrderItem & {
    Products: Product
    Product_price_options: ProductPriceOption
  })[]
}

export type AllowedEmail = {
  id: number
  email: string
  created_at: string
}

export type CartItem = {
  product: Product
  priceOption: ProductPriceOption
  quantity: number
}

export function parsePrice(priceText: string): number {
  const num = priceText.replace(/[^0-9.,]/g, "").replace(",", ".")
  return parseFloat(num) || 0
}
