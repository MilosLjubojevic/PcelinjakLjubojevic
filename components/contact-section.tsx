"use client"

import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Contact
          </p>
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
            {"Let's Connect"}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Have a question about our honey, interested in wholesale, or want to
            schedule a visit to the apiary? We would love to hear from you.
          </p>
        </div>

        <div className="mt-14 grid gap-12 md:grid-cols-5">
          <div className="md:col-span-3">
            <form
              className="space-y-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input
                    id="first-name"
                    placeholder="Jane"
                    className="bg-card border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input
                    id="last-name"
                    placeholder="Doe"
                    className="bg-card border-border"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="jane@example.com"
                  className="bg-card border-border"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us how we can help..."
                  rows={5}
                  className="bg-card border-border resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 md:w-auto"
              >
                Send Message
              </Button>
            </form>
          </div>

          <div className="space-y-8 md:col-span-2">
            <ContactInfo
              icon={<MapPin className="h-5 w-5" />}
              title="Visit Us"
              lines={["1234 Meadow Lane", "Cloverdale, CA 95425"]}
            />
            <ContactInfo
              icon={<Phone className="h-5 w-5" />}
              title="Call Us"
              lines={["(707) 555-0192"]}
            />
            <ContactInfo
              icon={<Mail className="h-5 w-5" />}
              title="Email Us"
              lines={["hello@goldenhiveapiary.com"]}
            />

            <div className="rounded-lg border border-border bg-card p-6">
              <h4 className="font-serif text-lg font-bold text-card-foreground">
                Visiting Hours
              </h4>
              <div className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                <p>Saturday & Sunday: 10am - 4pm</p>
                <p>Weekdays: By appointment only</p>
                <p className="pt-2 text-xs italic">
                  Please call ahead for group tours
                </p>
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
}: {
  icon: React.ReactNode
  title: string
  lines: string[]
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
        {icon}
      </div>
      <div>
        <h4 className="font-medium text-foreground">{title}</h4>
        {lines.map((line) => (
          <p key={line} className="mt-0.5 text-sm text-muted-foreground">
            {line}
          </p>
        ))}
      </div>
    </div>
  )
}
