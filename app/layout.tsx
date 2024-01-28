// "use client"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import StyledComponentRegistry from '@/src/lib/registry'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ankit Katheriya Portfolio',
  description: 'It is a responsive web application which demostrate all the skills and workset I did as a part of my professional journey',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentRegistry>
          {children}
        </StyledComponentRegistry>
        </body>
    </html>
  )
}
