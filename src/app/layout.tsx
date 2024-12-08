import { Inter } from 'next/font/google';
import { GoogleAnalytics, GoogleTagManagerHead, GoogleTagManagerBody, GoogleVerification } from '@/components/analytics';
import './globals.css';
import CookieConsent from '@/components/common/CookieConsent';
import ClientLayout from '@/components/layout/ClientLayout';

const inter = Inter({ subsets: ['latin'] });

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
