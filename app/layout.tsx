import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { AnnouncementBar } from "@/components/layout/AnnouncementBar"
import { SiteFooter } from "@/components/layout/SiteFooter"
import { SiteHeader } from "@/components/layout/SiteHeader"
import { brandColors } from "@/lib/brand-colors"
import { themeInitScript } from "@/lib/theme"
import { Providers } from "./providers"
import "./globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  axes: ["opsz"],
})

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
})

const description =
  "Fenon is inference infrastructure for robotics. Connect cloud intelligence to physical machines—without making infrastructure your core work."

export const metadata: Metadata = {
  metadataBase: new URL("https://fenon.ai"),
  title: {
    default: "Fenon — The inference layer for robotics",
    template: "%s · Fenon",
  },
  description,
  applicationName: "Fenon",
  openGraph: {
    type: "website",
    siteName: "Fenon",
    title: "Fenon — Your models. In the real world.",
    description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fenon — Your models. In the real world.",
    description,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: brandColors.paper },
    { media: "(prefers-color-scheme: dark)", color: brandColors.black },
  ],
}

export default function RootLayout({ children, modal }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body id="top">
        <Providers>
          <AnnouncementBar />
          <SiteHeader />
          {children}
          <SiteFooter />
          {modal}
        </Providers>
      </body>
    </html>
  )
}
