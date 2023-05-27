import '@/styles/globals.css'
import { Satisfy, Lato } from 'next/font/google'
import type { Metadata } from 'next'
import { cn } from '@/lib/utils'

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-lato',
})

const satisfy = Satisfy({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-satisfy',
})

export const metadata: Metadata = {
  title: 'Boat Rental',
  description: 'Find your boat with the best experience.',
  // icons: ['/images/logo.svg'],
  viewport: { width: 'device-width', initialScale: 1, maximumScale: 1 },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={cn('h-full font-lato antialiased', satisfy.variable, lato.variable)}>
        {children}
      </body>
    </html>
  )
}
