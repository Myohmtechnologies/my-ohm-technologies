// Configuration Google Analytics
function loadGoogleAnalytics() {
    // Charger le script Google Analytics
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=VOTRE_ID_GA';
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());

    // Configurer le mode Consentement
    gtag('config', 'VOTRE_ID_GA', {
        'consent_mode': 'default',
        'analytics_storage': 'denied',
        'ad_storage': 'denied'
    });
}

// Charger Google Analytics une fois que le DOM est chargé
document.addEventListener('DOMContentLoaded', loadGoogleAnalytics);
