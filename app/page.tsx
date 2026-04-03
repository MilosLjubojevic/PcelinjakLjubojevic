import { BASE_URL } from "@/lib/constants"
import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { BeeYardSection } from "@/components/bee-yard-section"
import { ProductsSection } from "@/components/products-section"
import { BlogSection } from "@/components/blog-section"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"

function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${BASE_URL}/#business`,
        name: "Pčelinjak Ljubojević",
        description:
          "Porodični pčelinjak sa 45 godina tradicije. Prodaja domaćeg meda, polena, propolisa, matične mliječi i pčelinjih matica. Preko 200 košnica u Bijeljini.",
        url: `${BASE_URL}`,
        telephone: "+38766861439",
        email: "milos.ljubojevic36@gmail.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Donji Bordac 90",
          addressLocality: "Bijeljina",
          postalCode: "76300",
          addressCountry: "BA",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 44.77,
          longitude: 19.25,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Saturday", "Sunday"],
            opens: "10:00",
            closes: "16:00",
          },
        ],
        image: `${BASE_URL}/images/HeaderBeeyard.jpg`,
        priceRange: "$$",
        sameAs: [
          "https://www.google.com/maps/place/Pcelinjak+Ljubojevic/data=!4m2!3m1!1s0x0:0x675e009c76f6e038",
        ],
      },
      {
        "@type": "Organization",
        "@id": `${BASE_URL}/#organization`,
        name: "Pčelinjak Ljubojević",
        url: `${BASE_URL}`,
        logo: {
          "@type": "ImageObject",
          url: `${BASE_URL}/LogoPcele.png`,
          width: 200,
          height: 200,
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+38766861439",
          contactType: "sales",
          availableLanguage: "Serbian",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        url: `${BASE_URL}`,
        name: "Pčelinjak Ljubojević",
        publisher: {
          "@id": `${BASE_URL}/#organization`,
        },
        inLanguage: "sr",
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default function Home() {
  return (
    <>
      <LocalBusinessJsonLd />
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
