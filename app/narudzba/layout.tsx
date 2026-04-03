import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Narudžba",
  description:
    "Popunite podatke za dostavu i potvrdite narudžbu domaćeg meda i pčelinjih proizvoda sa Pčelinjaka Ljubojević.",
  robots: { index: false, follow: true },
}

export default function NarudzbaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
