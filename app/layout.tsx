import type { Metadata, Viewport } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import { CartProvider } from '@/lib/cart-context'
import { BASE_URL } from '@/lib/constants'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Pčelinjak Ljubojević | Domaći Med, Polen i Pčelinji Proizvodi',
    template: '%s | Pčelinjak Ljubojević',
  },
  description: 'Porodični pčelinjak sa 45 godina tradicije. Domaći med, polen, propolis i matice — preko 200 košnica. Naručite direktno od pčelara.',
  icons: {
    icon: [
      { url: '/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'sr_Latn',
    siteName: 'Pčelinjak Ljubojević',
    images: [
      {
        url: '/images/HeaderBeeyard.jpg',
        width: 1200,
        height: 630,
        alt: 'Pčelinjak Ljubojević — domaći med i pčelinji proizvodi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
  alternates: {
    canonical: '/',
  },
}

export const viewport: Viewport = {
  themeColor: '#5a7a3a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sr-Latn" className={`${dmSans.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <CartProvider>
          {children}
        </CartProvider>
        <Toaster />
      </body>
    </html>
  )
}
