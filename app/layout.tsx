import React from "react"
import type { Metadata } from 'next'
import { Crimson_Pro, Inter } from 'next/font/google'

import './globals.css'

const crimsonPro = Crimson_Pro({ 
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Bhagavad Gita - Timeless Wisdom for Modern Life',
  description: 'Explore the 18 chapters of the Bhagavad Gita, ancient wisdom for spiritual growth and self-realization.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${crimsonPro.variable} ${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
