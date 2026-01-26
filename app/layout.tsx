import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { FloatingButtons } from '@/components/floating-buttons'
import { EngagementPopups } from '@/components/engagement-popups'
import './globals.css'

const _inter = Inter({ subsets: ["latin"] });
const _playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Shree Aryan Estate Enterprise | Premium Real Estate Consulting',
  description: 'Expert real estate consulting services. We help you find the perfect residential and commercial properties with personalized guidance.',
keywords: [
  'real estate',
  'real estate agent',
  'property consultant',
  'property dealer',
  'real estate broker',

  // Location-based (Mumbai / Maharashtra)
  'real estate agent in Mumbai',
  'property consultant in Mumbai',
  'property dealer in Mumbai',
  'real estate broker in Maharashtra',

  // Area-specific
  'real estate agent in Andheri East',
  'property consultant Andheri',
  'property dealer Andheri East',
  'real estate Mahakali Caves',
  'property near Mahakali Caves',
  'real estate agent in Mumbra',

  // Property types
  'residential property',
  'commercial property',
  'luxury homes',
  'flats for sale',
  'apartments for sale',
  'office space for rent',
  'commercial office Mumbai',

  // Buyer / investor intent
  'buy property in Mumbai',
  'sell property in Mumbai',
  'rent property in Mumbai',
  'property investment Mumbai',
  'real estate investment Maharashtra'
]
}

export const viewport: Viewport = {
  themeColor: '#1e40af',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <FloatingButtons />
        <EngagementPopups />
        <Analytics />
        <link rel="icon" href="/favicon.ico" />
      </body>
    </html>
  )
}
