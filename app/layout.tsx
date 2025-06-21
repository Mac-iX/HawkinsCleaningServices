import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@/components/Analytics"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Hawkins Cleaning Services | Commercial & New Construction Cleaning Wilmington NC",
  description:
    "Professional commercial cleaning and janitorial services in Wilmington, NC. Serving New Hanover, Brunswick, and Pender Counties with reliable office cleaning, new construction cleanup, and facility maintenance.",
  keywords:
    "commercial cleaning Wilmington NC, janitorial services Eastern NC, office cleaning New Hanover County, construction cleanup Brunswick County, facility cleaning Pender County, professional cleaning services",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="geo.region" content="US-NC" />
        <meta name="geo.placename" content="Wilmington" />
        <meta name="geo.position" content="34.2257;-77.9447" />
        <meta name="ICBM" content="34.2257, -77.9447" />
      </head>
      <body className={`${inter.className} bg-gray-50 text-gray-800`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
          <Footer />
          <Toaster />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
