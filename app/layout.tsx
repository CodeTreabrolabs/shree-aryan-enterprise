import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { FloatingButtons } from '@/components/floating-buttons'
import { EngagementPopups } from '@/components/engagement-popups'
import { LiveChatWidget } from '@/components/live-chat-widget'
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
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-05F4D0MMD6"></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];`}
          {`function gtag(){window.dataLayer.push(arguments);}`}
          {`gtag('js', new Date());`}
          {`gtag('config', 'G-05F4D0MMD6');`}
        </script>
        {/* Adding Meta Pixel Code */}
        <script>
          {`!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1443263770524480');
          fbq('track', 'PageView');`}
        </script>
        <noscript>
          {`<img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=1443263770524480&ev=PageView&noscript=1" />`}
        </noscript>
      </head>
      <body className="font-sans antialiased">
        {children}
        <LiveChatWidget />
        <FloatingButtons />
        <EngagementPopups />
        <Analytics />
        <link rel="icon" href="/favicon.ico" />
      </body>
    </html>
  )
}
