import { createClient } from "@/lib/supabase/server"
import { ProductsAdmin } from "@/components/admin/products-admin"
import type { ProductWithOptions } from "@/lib/types/database"

export default async function AdminProductsPage() {
  const supabase = await createClient()

  const { data: products } = await supabase
    .from("Products")
    .select("*, Product_price_options(*)")
    .order("id")

  return (
    <div>
      <h1 className="font-serif text-3xl font-bold text-foreground">
        Proizvodi
      </h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Upravljajte proizvodima i cijenama.
      </p>
      <div className="mt-6">
        <ProductsAdmin products={(products as ProductWithOptions[]) ?? []} />
      </div>
    </div>
  )
}
