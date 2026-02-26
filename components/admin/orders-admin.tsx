"use client"

import { useState } from "react"
import { updateOrderSent } from "@/app/admin/actions"
import type { OrderWithItems } from "@/lib/types/database"
import { parsePrice } from "@/lib/types/database"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Switch } from "@/components/ui/switch"
import { Eye } from "lucide-react"
import { toast } from "sonner"

type Filter = "all" | "pending" | "sent"

export function OrdersAdmin({ orders }: { orders: OrderWithItems[] }) {
  const [filter, setFilter] = useState<Filter>("all")
  const [selectedOrder, setSelectedOrder] = useState<OrderWithItems | null>(null)

  const filtered = orders.filter((o) => {
    if (filter === "pending") return !o.sent
    if (filter === "sent") return o.sent
    return true
  })

  const handleToggleSent = async (orderId: number, sent: boolean) => {
    try {
      await updateOrderSent(orderId, sent)
      toast.success(sent ? "Označeno kao poslano" : "Označeno kao neposlano")
    } catch {
      toast.error("Greška pri ažuriranju")
    }
  }

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("sr-Latn-BA", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const orderTotal = (order: OrderWithItems) => {
    return order.Order_items.reduce((sum, item) => {
      const price = item.Product_price_options
        ? parsePrice(item.Product_price_options.price)
        : 0
      return sum + price * item.quantity
    }, 0)
  }

  return (
    <>
      {/* Filter tabs */}
      <div className="flex items-center gap-2">
        {(
          [
            { key: "all", label: "Sve" },
            { key: "pending", label: "Neposlane" },
            { key: "sent", label: "Poslane" },
          ] as const
        ).map((tab) => (
          <Button
            key={tab.key}
            variant={filter === tab.key ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(tab.key)}
            className={
              filter === tab.key
                ? "bg-primary text-primary-foreground"
                : ""
            }
          >
            {tab.label}
            {tab.key === "pending" && (
              <span className="ml-1.5 rounded-full bg-primary-foreground/20 px-1.5 text-xs">
                {orders.filter((o) => !o.sent).length}
              </span>
            )}
          </Button>
        ))}
      </div>

      <div className="mt-4 rounded-lg border border-border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-16">ID</TableHead>
              <TableHead>Datum</TableHead>
              <TableHead>Kupac</TableHead>
              <TableHead>Grad</TableHead>
              <TableHead>Telefon</TableHead>
              <TableHead>Ukupno</TableHead>
              <TableHead>Poslano</TableHead>
              <TableHead className="w-16">Detalji</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-mono text-xs">{order.id}</TableCell>
                <TableCell className="text-sm">
                  {formatDate(order.created_at)}
                </TableCell>
                <TableCell className="font-medium">
                  {order.name} {order.lastname}
                </TableCell>
                <TableCell>{order.city}</TableCell>
                <TableCell className="text-sm">{order.phone}</TableCell>
                <TableCell className="font-medium">
                  {orderTotal(order).toFixed(2)} KM
                </TableCell>
                <TableCell>
                  <Switch
                    checked={order.sent}
                    onCheckedChange={(checked) =>
                      handleToggleSent(order.id, checked)
                    }
                  />
                </TableCell>
                <TableCell>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => setSelectedOrder(order)}
                  >
                    <Eye className="h-3.5 w-3.5" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            {filtered.length === 0 && (
              <TableRow>
                <TableCell
                  colSpan={8}
                  className="py-8 text-center text-muted-foreground"
                >
                  Nema narudžbi.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Order detail dialog */}
      <Dialog
        open={!!selectedOrder}
        onOpenChange={() => setSelectedOrder(null)}
      >
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-serif">
              Narudžba #{selectedOrder?.id}
            </DialogTitle>
          </DialogHeader>
          {selectedOrder && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Kupac</p>
                  <p className="font-medium">
                    {selectedOrder.name} {selectedOrder.lastname}
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground">Datum</p>
                  <p className="font-medium">
                    {formatDate(selectedOrder.created_at)}
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground">Adresa</p>
                  <p className="font-medium">
                    {selectedOrder.address}, {selectedOrder.city}
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground">Kontakt</p>
                  <p className="font-medium">{selectedOrder.phone}</p>
                  <p className="text-xs text-muted-foreground">
                    {selectedOrder.email}
                  </p>
                </div>
              </div>

              <div>
                <p className="mb-2 text-sm font-medium text-muted-foreground">
                  Stavke
                </p>
                <div className="space-y-2">
                  {selectedOrder.Order_items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between rounded-md border border-border p-3"
                    >
                      <div>
                        <p className="font-medium">
                          {item.Products?.product_name ?? `Proizvod #${item.product_id}`}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {item.Product_price_options?.size} &middot;{" "}
                          {item.Product_price_options?.price}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">
                          x{item.quantity}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {(
                            parsePrice(item.Product_price_options?.price ?? "0") *
                            item.quantity
                          ).toFixed(2)}{" "}
                          KM
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-border pt-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Status:</span>
                  <Badge
                    variant={selectedOrder.sent ? "default" : "secondary"}
                  >
                    {selectedOrder.sent ? "Poslano" : "Neposlano"}
                  </Badge>
                </div>
                <p className="font-serif text-xl font-bold text-primary">
                  {orderTotal(selectedOrder).toFixed(2)} KM
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
