import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "GRIYA BP3KP Jawa III",
  description:
    "Gerbang Rujukan Informasi dan Layanan BP3KP Jawa III — Portal layanan terpadu Balai Perumahan, Permukiman dan Penataan Kawasan Permukiman Jawa III",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  )
}
