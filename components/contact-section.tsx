"use client"

import { useState } from "react"
import { Mail, MapPin, Phone, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { sendContactEmail } from "@/app/contact/actions"

export function ContactSection() {
  const [sending, setSending] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)

    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const email = formData.get("email") as string
    const message = formData.get("message") as string

    if (!firstName || !lastName || !email || !message) {
      toast.error("Molimo popunite sva polja.")
      return
    }

    setSending(true)
    const result = await sendContactEmail({ firstName, lastName, email, message })
    setSending(false)

    if (result.success) {
      toast.success("Poruka je uspješno poslana!")
      form.reset()
    } else {
      toast.error(result.error ?? "Greška pri slanju poruke.")
    }
  }

  return (
    <section id="contact" className="scroll-mt-20 bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Kontakt
          </p>
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
            {"Naručite Med ili Nas Kontaktirajte"}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Želite naručiti domaći med, polen ili druge pčelinje proizvode?
            Zainteresovani ste za otkup matica ili imate pitanje o pčelarstvu?
            Javite nam se — rado ćemo pomoći.
          </p>
        </div>

        <div className="mt-14 grid gap-12 md:grid-cols-5">
          <div className="md:col-span-3">
            <form
              className="space-y-6"
              onSubmit={handleSubmit}
            >
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="first-name">Ime</Label>
                  <Input
                    id="first-name"
                    name="firstName"
                    placeholder="Marko"
                    required
                    className="bg-card border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Prezime</Label>
                  <Input
                    id="last-name"
                    name="lastName"
                    placeholder="Petrović"
                    required
                    className="bg-card border-border"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="vas@email.com"
                  required
                  className="bg-card border-border"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Poruka</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Napišite nam šta vas zanima — narudžba, pitanje, saradnja..."
                  rows={5}
                  required
                  className="bg-card border-border resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={sending}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 md:w-auto"
              >
                {sending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {sending ? "Šalje se..." : "Pošalji Poruku"}
              </Button>
            </form>
          </div>

          <div className="space-y-8 md:col-span-2">
            <a
              href="https://www.google.com/maps/place/Pcelinjak+Ljubojevic/data=!4m2!3m1!1s0x0:0x675e009c76f6e038?sa=X&ved=1t:2428&ictx=111"
              target="_blank"
              rel="noopener noreferrer"
              className="group/map"
            >
              <ContactInfo
                icon={<MapPin className="h-5 w-5" />}
                title="Posjetite Nas"
                lines={["Bijeljina, Donji Bordac 90"]}
                clickable
              />
            </a>
            <ContactInfo
              icon={<Phone className="h-5 w-5" />}
              title="Pozovite Nas"
              lines={["+381 66 861 439", "+381 65 994 971"]}
            />
            <ContactInfo
              icon={<Mail className="h-5 w-5" />}
              title="Pišite Nam"
              lines={["milos.ljubojevic36@gmail.com"]}
            />

            <div className="rounded-lg border border-border bg-card p-6">
              <h4 className="font-serif text-lg font-bold text-card-foreground">
                Radno Vrijeme
              </h4>
              <div className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                <p>Subota i nedjelja: 10:00 - 16:00</p>
                <p>Radnim danima: Samo po dogovoru</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactInfo({
  icon,
  title,
  lines,
  clickable,
}: {
  icon: React.ReactNode
  title: string
  lines: string[]
  clickable?: boolean
}) {
  return (
    <div className="flex items-start gap-4">
      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary ${clickable ? "transition-colors group-hover/map:bg-primary/20" : ""}`}>
        {icon}
      </div>
      <div>
        <h4 className={`font-medium text-foreground ${clickable ? "group-hover/map:text-primary transition-colors" : ""}`}>{title}</h4>
        {lines.map((line, index) => (
          <p key={index} className={`mt-0.5 text-sm text-muted-foreground ${clickable ? "group-hover/map:text-primary/70 transition-colors" : ""}`}>
            {line}
          </p>
        ))}
      </div>
    </div>
  )
}
