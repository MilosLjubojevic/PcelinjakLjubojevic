"use server"

import { createClient } from "@/lib/supabase/server"

export async function placeOrder(orderData: {
  name: string
  lastname: string
  address: string
  city: string
  phone: string
  email: string
  items: {
    product_id: number
    product_price_option: number
    quantity: number
  }[]
}) {
  const supabase = await createClient()

  const { data: order, error: orderError } = await supabase
    .from("Orders")
    .insert({
      name: orderData.name,
      lastname: orderData.lastname,
      address: orderData.address,
      city: orderData.city,
      phone: orderData.phone,
      email: orderData.email,
      sent: false,
    })
    .select()
    .single()

  if (orderError) throw new Error(orderError.message)

  const { error: itemsError } = await supabase.from("Order_items").insert(
    orderData.items.map((item) => ({
      order_id: order.id,
      product_id: item.product_id,
      product_price_option: item.product_price_option,
      quantity: item.quantity,
    }))
  )

  if (itemsError) throw new Error(itemsError.message)

  for (const item of orderData.items) {
    const { error: stockError } = await supabase.rpc("decrement_stock", {
      option_id: item.product_price_option,
      amount: item.quantity,
    })
    if (stockError) throw new Error(stockError.message)
  }

  return { orderId: order.id }
}
