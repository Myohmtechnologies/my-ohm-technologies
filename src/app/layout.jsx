"use client";

import { Inter } from 'next/font/google'
import './globals.css'
import PromoBanner from './components/PromoBanner'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Ohm Technologies - Solutions Solaires',
  description: 'Découvrez nos solutions solaires innovantes pour réduire votre facture d\'électricité et contribuer à la transition écologique.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <PromoBanner />
          <main className="flex-grow">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
