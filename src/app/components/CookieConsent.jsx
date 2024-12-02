'use client';

import { useState, useEffect } from 'react';

const CookieConsent = () => {
    const [showBanner, setShowBanner] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [preferences, setPreferences] = useState({
        necessary: true,
        analytics: false,
        marketing: false,
        preferences: false
    });

    useEffect(() => {
        // Vérifier si le consentement existe déjà
        const consent = getCookie('cookie_consent');
        if (!consent) {
            setShowBanner(true);
        } else {
            try {
                const savedPreferences = JSON.parse(consent);
                setPreferences(savedPreferences);
            } catch {
                setShowBanner(true);
            }
        }
    }, []);

    const getCookie = (name) => {
        if (typeof window === 'undefined') return null;
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    };

    const setCookie = (name, value, days) => {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "; expires=" + date.toUTCString();
        document.cookie = name + "=" + value + expires + "; path=/; SameSite=Lax";
    };

    const handleAcceptAll = () => {
        const allAccepted = {
            necessary: true,
            analytics: true,
            marketing: true,
            preferences: true
        };
        setPreferences(allAccepted);
        setCookie('cookie_consent', JSON.stringify(allAccepted), 365);
        updateGoogleAnalytics(true);
        setShowBanner(false);
    };

    const handleSavePreferences = () => {
        setCookie('cookie_consent', JSON.stringify(preferences), 365);
        updateGoogleAnalytics(preferences.analytics);
        setShowBanner(false);
    };

    const handleRejectAll = () => {
        const allRejected = {
            necessary: true,
            analytics: false,
            marketing: false,
            preferences: false
        };
        setPreferences(allRejected);
        setCookie('cookie_consent', JSON.stringify(allRejected), 365);
        updateGoogleAnalytics(false);
        setShowBanner(false);
    };

    const updateGoogleAnalytics = (accepted) => {
        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('consent', 'update', {
                'analytics_storage': accepted ? 'granted' : 'denied',
                'ad_storage': accepted ? 'granted' : 'denied'
            });
        }
    };

    const togglePreference = (key) => {
        setPreferences(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    if (!showBanner) return null;

    return (
        <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6 md:pb-6">
            <div className="mx-auto max-w-2xl bg-white/95 backdrop-blur-md shadow-lg rounded-xl p-4 sm:p-6">
                <div className="space-y-4">
                    <div className="flex justify-between items-start">
                        <h3 className="text-lg font-semibold text-gray-900">
                            Paramètres des cookies
                        </h3>
                        <button
                            onClick={() => setShowDetails(!showDetails)}
                            className="text-sm text-blue-600 hover:text-blue-700 underline"
                        >
                            {showDetails ? 'Masquer les détails' : 'Voir les détails'}
                        </button>
                    </div>

                    <p className="text-sm text-gray-600">
                        Nous utilisons des cookies pour améliorer votre expérience de navigation.
                        Vous pouvez personnaliser vos préférences ou accepter tous les cookies.
                    </p>

                    {showDetails && (
                        <div className="space-y-4 mt-4 border-t pt-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="text-sm font-medium text-gray-900">Cookies nécessaires</h4>
                                    <p className="text-xs text-gray-500">Indispensables au fonctionnement du site</p>
                                </div>
                                <div className="bg-gray-100 px-3 py-1 rounded-full text-xs">
                                    Toujours actif
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="text-sm font-medium text-gray-900">Cookies analytiques</h4>
                                    <p className="text-xs text-gray-500">Nous aident à améliorer le site</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={preferences.analytics}
                                        onChange={() => togglePreference('analytics')}
                                        className="sr-only peer"
                                    />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                </label>
                            </div>

                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="text-sm font-medium text-gray-900">Cookies marketing</h4>
                                    <p className="text-xs text-gray-500">Utilisés pour la publicité ciblée</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={preferences.marketing}
                                        onChange={() => togglePreference('marketing')}
                                        className="sr-only peer"
                                    />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                </label>
                            </div>

                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="text-sm font-medium text-gray-900">Cookies de préférences</h4>
                                    <p className="text-xs text-gray-500">Sauvegardent vos préférences de navigation</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={preferences.preferences}
                                        onChange={() => togglePreference('preferences')}
                                        className="sr-only peer"
                                    />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                </label>
                            </div>
                        </div>
                    )}

                    <div className="flex flex-col sm:flex-row justify-end gap-2 sm:gap-3 mt-6">
                        <button
                            onClick={handleRejectAll}
                            className="px-4 py-2 text-sm text-gray-600 border border-gray-200 rounded-md hover:bg-gray-50 transition-all duration-200"
                        >
                            Tout refuser
                        </button>
                        {showDetails && (
                            <button
                                onClick={handleSavePreferences}
                                className="px-4 py-2 text-sm text-blue-600 border border-blue-200 rounded-md hover:bg-blue-50 transition-all duration-200"
                            >
                                Enregistrer mes choix
                            </button>
                        )}
                        <button
                            onClick={handleAcceptAll}
                            className="px-4 py-2 text-sm text-white bg-customGreen rounded-md hover:bg-customGreen/90 transition-all duration-200"
                        >
                            Tout accepter
                        </button>
                    </div>
                </div>
            </div>
            <style jsx>{`
                @keyframes slideUp {
                    from {
                        transform: translateY(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }
                div {
                    animation: slideUp 0.5s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default CookieConsent;
