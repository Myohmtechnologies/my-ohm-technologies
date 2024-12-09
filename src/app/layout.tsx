import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { GoogleAnalytics, GoogleTagManagerHead, GoogleTagManagerBody, GoogleVerification } from '@/components/analytics';
import './globals.css';
import CookieConsent from '@/components/common/CookieConsent';
import ClientLayout from '@/components/layout/ClientLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'My Ohm Technologies - Installation de Panneaux Solaires',
  description: 'Expert en installation de panneaux solaires pour particuliers et professionnels. Devis gratuit et étude personnalisée de votre projet.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <GoogleVerification />
        <GoogleTagManagerHead />
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
          `}
        </Script>
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
