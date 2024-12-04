"use client";

import { GoogleTagManagerBody } from '../components/GoogleTagManager';
import GoogleAnalytics from '../components/GoogleAnalytics';
import CookieConsent from '../components/CookieConsent';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GoogleTagManagerBody />
      <GoogleAnalytics />
      <main>{children}</main>
      <CookieConsent />
    </>
  );
}
