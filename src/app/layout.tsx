import { GoogleTagManagerHead, GoogleTagManagerBody } from './components/GoogleTagManager'
import GoogleAnalytics from './components/GoogleAnalytics'
import CookieConsent from './components/CookieConsent'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Ohm Technologies - Installation de Panneaux Solaires dans la region PACA',
  description: 'Expert en installation de panneaux solaires photovoltaïques. Simulez vos économies d\'énergie et obtenez un devis personnalisé pour votre maison ou appartement.',
  verification: {
    google: 'bshllqo6MIhoBv2oLuo-5lh9FzoXSYWFaQmCOzx62rA',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'My Ohm Technologies - Panneaux Solaires',
    description: 'Découvrez nos solutions d\'énergie solaire sur mesure pour votre maison. Simulateur en ligne gratuit.',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'My Ohm Technologies Panneaux Solaires',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My Ohm Technologies - Panneaux Solaires',
    description: 'Solutions d\'énergie solaire personnalisées pour votre maison',
    images: ['/images/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.myohmtechnologies.fr'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <GoogleTagManagerHead />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body suppressHydrationWarning>
        <GoogleTagManagerBody />
        <GoogleAnalytics />
        <main>
          {children}
        </main>
        <CookieConsent />
      </body>
    </html>
  )
}