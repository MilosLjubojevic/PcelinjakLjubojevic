"use server"

import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"

export async function createProduct(formData: {
  product_name: string
  desc: string
  image: string
  alt: string
  type: string
  priceOptions: { size: string; price: string; stock: number }[]
}) {
  const supabase = await createClient()

  const { data: product, error } = await supabase
    .from("Products")
    .insert({
      product_name: formData.product_name,
      desc: formData.desc,
      image: formData.image,
      alt: formData.alt,
      type: formData.type,
    })
    .select()
    .single()

  if (error) throw new Error(error.message)

  if (formData.priceOptions.length > 0) {
    const { error: optError } = await supabase
      .from("Product_price_options")
      .insert(
        formData.priceOptions.map((opt) => ({
          product_id: product.id,
          size: opt.size,
          price: opt.price,
          stock: opt.stock,
        }))
      )
    if (optError) throw new Error(optError.message)
  }

  revalidatePath("/admin")
  revalidatePath("/proizvodi")
}

export async function updateProduct(
  id: number,
  formData: {
    product_name: string
    desc: string
    image: string
    alt: string
    type: string
    priceOptions: {
      id?: number
      size: string
      price: string
      stock: number
    }[]
  }
) {
  const supabase = await createClient()

  const { error } = await supabase
    .from("Products")
    .update({
      product_name: formData.product_name,
      desc: formData.desc,
      image: formData.image,
      alt: formData.alt,
      type: formData.type,
    })
    .eq("id", id)

  if (error) throw new Error(error.message)

  // Delete existing price options and re-insert
  await supabase.from("Product_price_options").delete().eq("product_id", id)

  if (formData.priceOptions.length > 0) {
    const { error: optError } = await supabase
      .from("Product_price_options")
      .insert(
        formData.priceOptions.map((opt) => ({
          product_id: id,
          size: opt.size,
          price: opt.price,
          stock: opt.stock,
        }))
      )
    if (optError) throw new Error(optError.message)
  }

  revalidatePath("/admin")
  revalidatePath("/proizvodi")
}

export async function deleteProduct(id: number) {
  const supabase = await createClient()

  await supabase.from("Product_price_options").delete().eq("product_id", id)

  const { error } = await supabase.from("Products").delete().eq("id", id)
  if (error) throw new Error(error.message)

  revalidatePath("/admin")
  revalidatePath("/proizvodi")
}

export async function updateOrderSent(orderId: number, sent: boolean) {
  const supabase = await createClient()

  const { error } = await supabase
    .from("Orders")
    .update({ sent })
    .eq("id", orderId)

  if (error) throw new Error(error.message)

  revalidatePath("/admin/narudzbe")
}
