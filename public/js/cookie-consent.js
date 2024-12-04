// Configuration Google Analytics avec le mode Consentement
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }

// Configuration par défaut - pas de consentement
gtag('consent', 'default', {
    'analytics_storage': 'denied',
    'ad_storage': 'denied'
});

// Classe pour gérer le consentement des cookies
class CookieConsent {
    constructor() {
        this.cookieName = 'cookie_consent';
        this.createBanner();
        this.checkCookieConsent();
    }

    createBanner() {
        const banner = document.createElement('div');
        banner.id = 'cookie-banner';
        banner.innerHTML = `
            <div class="cookie-content">
                <p>Nous utilisons des cookies pour améliorer votre expérience. 
                   Vous pouvez personnaliser vos préférences.</p>
                <div class="cookie-buttons">
                    <button id="accept-cookies" class="cookie-btn accept">Accepter</button>
                    <button id="reject-cookies" class="cookie-btn reject">Refuser</button>
                </div>
            </div>
        `;

        // Ajouter les styles
        const styles = document.createElement('style');
        styles.textContent = `
            #cookie-banner {
                position: fixed;
                bottom: 20px;
                left: 50%;
                transform: translateX(-50%);
                background: rgba(255, 255, 255, 0.95);
                box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
                backdrop-filter: blur(10px);
                border-radius: 12px;
                padding: 20px;
                z-index: 9999;
                max-width: 400px;
                width: 90%;
                animation: slideUp 0.5s ease;
            }

            .cookie-content p {
                margin: 0 0 15px 0;
                color: #333;
                font-size: 14px;
                line-height: 1.5;
            }

            .cookie-buttons {
                display: flex;
                gap: 10px;
                justify-content: flex-end;
            }

            .cookie-btn {
                padding: 8px 16px;
                border: none;
                border-radius: 6px;
                cursor: pointer;
                font-size: 14px;
                transition: all 0.2s ease;
            }

            .cookie-btn.accept {
                background: #007AFF;
                color: white;
            }

            .cookie-btn.reject {
                background: transparent;
                color: #666;
                border: 1px solid #ddd;
            }

            .cookie-btn:hover {
                transform: translateY(-1px);
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            }

            @keyframes slideUp {
                from {
                    transform: translate(-50%, 100%);
                    opacity: 0;
                }
                to {
                    transform: translate(-50%, 0);
                    opacity: 1;
                }
            }
        `;

        document.head.appendChild(styles);
        document.body.appendChild(banner);

        // Ajouter les événements
        document.getElementById('accept-cookies').addEventListener('click', () => this.acceptCookies());
        document.getElementById('reject-cookies').addEventListener('click', () => this.rejectCookies());
    }

    setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "; expires=" + date.toUTCString();
        document.cookie = name + "=" + value + expires + "; path=/; SameSite=Lax";
    }

    getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    acceptCookies() {
        this.setCookie(this.cookieName, 'accepted', 365);
        this.hideBanner();
        
        // Mettre à jour le consentement Google Analytics
        gtag('consent', 'update', {
            'analytics_storage': 'granted',
            'ad_storage': 'granted'
        });
    }

    rejectCookies() {
        this.setCookie(this.cookieName, 'rejected', 365);
        this.hideBanner();
        
        // Maintenir le refus pour Google Analytics
        gtag('consent', 'update', {
            'analytics_storage': 'denied',
            'ad_storage': 'denied'
        });
    }

    hideBanner() {
        const banner = document.getElementById('cookie-banner');
        if (banner) {
            banner.style.animation = 'slideDown 0.5s ease forwards';
            setTimeout(() => banner.remove(), 500);
        }
    }

    checkCookieConsent() {
        const consent = this.getCookie(this.cookieName);
        if (consent === 'accepted') {
            gtag('consent', 'update', {
                'analytics_storage': 'granted',
                'ad_storage': 'granted'
            });
            return true;
        } else if (consent === 'rejected') {
            this.hideBanner();
            return false;
        }
        return null;
    }
}

// Initialiser la gestion des cookies
document.addEventListener('DOMContentLoaded', () => {
    new CookieConsent();
});
