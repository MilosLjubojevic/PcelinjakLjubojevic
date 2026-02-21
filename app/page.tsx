import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { BeeYardSection } from "@/components/bee-yard-section"
import { ProductsSection } from "@/components/products-section"
import { BlogSection } from "@/components/blog-section"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <BeeYardSection />
        <ProductsSection />
        <BlogSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
