import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://your-domain.com'),
  title: {
    default: 'Your Site Name',
    template: '%s | Your Site Name',
  },
  description: 'Your site description',
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  openGraph: {
    title: 'Your Site Name',
    description: 'Your site description',
    url: 'https://your-domain.com',
    siteName: 'Your Site Name',
    locale: 'fr_FR',
    type: 'website',
  },
}
