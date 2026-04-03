import type { MetadataRoute } from "next"
import { BASE_URL } from "@/lib/constants"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/login", "/neovlascen", "/narudzba/uspjesno", "/auth/"],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
}
