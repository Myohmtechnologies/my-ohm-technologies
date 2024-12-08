'use client';

import Script from 'next/script'

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-ET19PN3YHF"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          // Configuration Google Analytics
          gtag('config', 'G-ET19PN3YHF', {
            send_page_view: true,
            linker: {
              domains: ['myohmtechnologies.com']
            }
          });

          // Configuration Google Search Console
          gtag('config', 'G-ET19PN3YHF', {
            measurement_id: 'G-ET19PN3YHF',
            search_term_parameter: 'q',
            link_attribution: true,
            site_domain: 'myohmtechnologies.com'
          });
        `}
      </Script>
    </>
  )
}
