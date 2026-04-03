"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { createClient } from "@/lib/supabase/client"
import { createProduct, updateProduct, deleteProduct } from "@/app/admin/actions"
import type { ProductWithOptions, ProductPriceOption } from "@/lib/types/database"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Plus, Pencil, Trash2, X, Upload } from "lucide-react"
import { toast } from "sonner"

type PriceOptionInput = {
  id?: number
  size: string
  price: string
  stock: number
}

const emptyForm = {
  product_name: "",
  desc: "",
  image: "",
  alt: "",
  type: "med",
  priceOptions: [] as PriceOptionInput[],
}

export function ProductsAdmin({
  products,
}: {
  products: ProductWithOptions[]
}) {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [form, setForm] = useState(emptyForm)
  const [loading, setLoading] = useState(false)
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string>("")
  const fileInputRef = useRef<HTMLInputElement>(null)

  const openCreate = () => {
    setEditingId(null)
    setForm(emptyForm)
    setImageFile(null)
    setImagePreview("")
    setDialogOpen(true)
  }

  const openEdit = (product: ProductWithOptions) => {
    setEditingId(product.id)
    setForm({
      product_name: product.product_name,
      desc: product.desc,
      image: product.image,
      alt: product.alt,
      type: product.type,
      priceOptions: product.Product_price_options.map((o) => ({
        id: o.id,
        size: o.size,
        price: o.price,
        stock: o.stock,
      })),
    })
    setImageFile(null)
    setImagePreview(product.image || "")
    setDialogOpen(true)
  }

  const handleSubmit = async () => {
    setLoading(true)
    try {
      let imageUrl = form.image

      if (imageFile) {
        const supabase = createClient()
        const fileName = `${Date.now()}-${imageFile.name}`
        const { error: uploadError } = await supabase.storage
          .from("product-images")
          .upload(fileName, imageFile)

        if (uploadError) throw new Error(uploadError.message)

        const { data: urlData } = supabase.storage
          .from("product-images")
          .getPublicUrl(fileName)

        imageUrl = urlData.publicUrl
      }

      const submitData = { ...form, image: imageUrl }

      if (editingId) {
        await updateProduct(editingId, submitData)
        toast.success("Proizvod ažuriran")
      } else {
        await createProduct(submitData)
        toast.success("Proizvod kreiran")
      }
      setDialogOpen(false)
    } catch (e: unknown) {
      toast.error(e instanceof Error ? e.message : "Greška")
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: number) => {
    try {
      await deleteProduct(id)
      toast.success("Proizvod obrisan")
    } catch (e: unknown) {
      toast.error(e instanceof Error ? e.message : "Greška")
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImageFile(file)
      setImagePreview(URL.createObjectURL(file))
    }
  }

  const addPriceOption = () => {
    setForm((f) => ({
      ...f,
      priceOptions: [...f.priceOptions, { size: "", price: "", stock: 0 }],
    }))
  }

  const removePriceOption = (index: number) => {
    setForm((f) => ({
      ...f,
      priceOptions: f.priceOptions.filter((_, i) => i !== index),
    }))
  }

  const updatePriceOption = (
    index: number,
    field: keyof PriceOptionInput,
    value: string | number
  ) => {
    setForm((f) => ({
      ...f,
      priceOptions: f.priceOptions.map((o, i) =>
        i === index ? { ...o, [field]: value } : o
      ),
    }))
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {products.length} proizvoda
        </p>
        <Button onClick={openCreate} className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Plus className="mr-2 h-4 w-4" />
          Dodaj Proizvod
        </Button>
      </div>

      <div className="mt-4 rounded-lg border border-border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-16">ID</TableHead>
              <TableHead className="w-16">Slika</TableHead>
              <TableHead>Naziv</TableHead>
              <TableHead>Tip</TableHead>
              <TableHead>Opcije cijena</TableHead>
              <TableHead className="w-24">Akcije</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="font-mono text-xs">
                  {product.id}
                </TableCell>
                <TableCell>
                  {product.image && (
                    <div className="relative h-10 w-10 overflow-hidden rounded">
                      <Image
                        src={product.image}
                        alt={product.alt || product.product_name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </TableCell>
                <TableCell className="font-medium">
                  {product.product_name}
                </TableCell>
                <TableCell>
                  <span className="rounded-full bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground">
                    {product.type}
                  </span>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">
                  {product.Product_price_options.length} opcija
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => openEdit(product)}
                    >
                      <Pencil className="h-3.5 w-3.5" />
                    </Button>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 text-destructive"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Obrisati proizvod?</AlertDialogTitle>
                          <AlertDialogDescription>
                            Ova akcija će trajno obrisati &quot;{product.product_name}&quot; i
                            sve povezane opcije cijena.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Otkaži</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => handleDelete(product.id)}
                            className="bg-destructive text-destructive-foreground active:scale-95"
                          >
                            Obriši
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </TableCell>
              </TableRow>
            ))}
            {products.length === 0 && (
              <TableRow>
                <TableCell
                  colSpan={6}
                  className="py-8 text-center text-muted-foreground"
                >
                  Nema proizvoda. Kliknite &quot;Dodaj Proizvod&quot; da dodate prvi.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-serif">
              {editingId ? "Izmijeni Proizvod" : "Novi Proizvod"}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="product_name">Naziv proizvoda</Label>
              <Input
                id="product_name"
                value={form.product_name}
                onChange={(e) =>
                  setForm((f) => ({ ...f, product_name: e.target.value }))
                }
                placeholder="npr. Livadski Med"
              />
            </div>
            <div>
              <Label htmlFor="desc">Opis</Label>
              <Textarea
                id="desc"
                value={form.desc}
                onChange={(e) =>
                  setForm((f) => ({ ...f, desc: e.target.value }))
                }
                placeholder="Opis proizvoda..."
                rows={3}
              />
            </div>
            <div>
              <Label>Slika proizvoda</Label>
              <div className="mt-2 flex items-start gap-4">
                {imagePreview && (
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md border border-border">
                    <Image
                      src={imagePreview}
                      alt="Preview"
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col gap-2">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <Upload className="mr-2 h-4 w-4" />
                    {imagePreview ? "Zamijeni sliku" : "Izaberi sliku"}
                  </Button>
                  {imageFile && (
                    <p className="text-xs text-muted-foreground">{imageFile.name}</p>
                  )}
                </div>
              </div>
            </div>
            <div>
              <Label htmlFor="alt">Alt tekst</Label>
              <Input
                id="alt"
                value={form.alt}
                onChange={(e) =>
                  setForm((f) => ({ ...f, alt: e.target.value }))
                }
                placeholder="Opis slike"
              />
            </div>
            <div>
              <Label>Tip</Label>
              <Select
                value={form.type}
                onValueChange={(v) => setForm((f) => ({ ...f, type: v }))}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="med">Med</SelectItem>
                  <SelectItem value="polen">Polen</SelectItem>
                  <SelectItem value="matice">Matice</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Price Options */}
            <div>
              <div className="flex items-center justify-between">
                <Label>Opcije cijena</Label>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={addPriceOption}
                >
                  <Plus className="mr-1 h-3 w-3" />
                  Dodaj
                </Button>
              </div>
              <div className="mt-2 space-y-3">
                {form.priceOptions.map((opt, i) => (
                  <div key={i} className="flex items-end gap-2">
                    <div className="flex-1">
                      <Label className="text-xs">Veličina</Label>
                      <Input
                        value={opt.size}
                        onChange={(e) =>
                          updatePriceOption(i, "size", e.target.value)
                        }
                        placeholder="1 kg"
                      />
                    </div>
                    <div className="flex-1">
                      <Label className="text-xs">Cijena</Label>
                      <Input
                        value={opt.price}
                        onChange={(e) =>
                          updatePriceOption(i, "price", e.target.value)
                        }
                        placeholder="15 KM"
                      />
                    </div>
                    <div className="w-20">
                      <Label className="text-xs">Zaliha</Label>
                      <Input
                        type="number"
                        value={opt.stock}
                        onChange={(e) =>
                          updatePriceOption(i, "stock", parseInt(e.target.value) || 0)
                        }
                      />
                    </div>
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      className="h-9 w-9 shrink-0"
                      onClick={() => removePriceOption(i)}
                    >
                      <X className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                ))}
                {form.priceOptions.length === 0 && (
                  <p className="text-sm text-muted-foreground">
                    Nema opcija cijena. Kliknite &quot;Dodaj&quot; iznad.
                  </p>
                )}
              </div>
            </div>

            <Button
              onClick={handleSubmit}
              disabled={loading || !form.product_name}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              {loading
                ? "Čuvanje..."
                : editingId
                  ? "Sačuvaj Izmjene"
                  : "Kreiraj Proizvod"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
