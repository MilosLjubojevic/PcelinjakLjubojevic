import { createClient } from "@/lib/supabase/server"
import { OrdersAdmin } from "@/components/admin/orders-admin"
import type { OrderWithItems } from "@/lib/types/database"

export default async function AdminOrdersPage() {
  const supabase = await createClient()

  const { data: orders } = await supabase
    .from("Orders")
    .select(
      `*, Order_items(*, Products(*), Product_price_options(*))`
    )
    .order("created_at", { ascending: false })

  return (
    <div>
      <h1 className="font-serif text-3xl font-bold text-foreground">
        Narudžbe
      </h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Pregledajte i upravljajte narudžbama kupaca.
      </p>
      <div className="mt-6">
        <OrdersAdmin orders={(orders as OrderWithItems[]) ?? []} />
      </div>
    </div>
  )
}
