import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { GoogleAnalytics, GoogleTagManagerHead, GoogleTagManagerBody } from '@/components/analytics';
import './globals.css';
import CookieConsent from '@/components/common/CookieConsent';
import ClientLayout from '@/components/layout/ClientLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'My Ohm Technologies - Installation de Panneaux Solaires',
  description: 'Expert en installation de panneaux solaires pour particuliers et professionnels. Devis gratuit et étude personnalisée de votre projet.',
  verification: {
    google: 'bshllqo6MIhoBv2oLuo-5lh9FzoXSYWFaQmCOzx62rA',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <GoogleTagManagerHead />
      </head>
      <body className={inter.className}>
        <GoogleTagManagerBody />
        <GoogleAnalytics />
        <ClientLayout>
          {children}
        </ClientLayout>
        <CookieConsent />
      </body>
    </html>
  );
}
