'use client';

import Script from 'next/script';

const GoogleAnalytics = ({ GA_MEASUREMENT_ID = 'VOTRE_ID_GA' }) => {
    return (
        <>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        // Configuration par défaut - pas de consentement
                        gtag('consent', 'default', {
                            'analytics_storage': 'denied',
                            'ad_storage': 'denied'
                        });

                        gtag('config', '${GA_MEASUREMENT_ID}', {
                            page_path: window.location.pathname,
                        });
                    `,
                }}
            />
        </>
    );
};

export default GoogleAnalytics;
