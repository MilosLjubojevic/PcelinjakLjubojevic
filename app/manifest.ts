import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Pčelinjak Ljubojević",
    short_name: "Pčelinjak",
    description:
      "Porodični pčelinjak sa 45 godina tradicije — domaći med, polen, propolis, matična mliječ i pčelinje matice.",
    theme_color: "#5a7a3a",
    background_color: "#f5f4f0",
    display: "standalone",
    start_url: "/",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
