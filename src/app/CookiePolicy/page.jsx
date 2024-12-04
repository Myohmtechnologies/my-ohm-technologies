import Image from 'next/image';
import '../../styles/simulateur.css';

const CookiePolicy = () => {
  return (
    <>
      <header className="merci-header">
        <a href="/">
          <Image
            src="/images/logo-my-ohm.png"
            alt="Logo My ohm technologies"
            className="logo"
            width={100} // Remplacez par la largeur appropriée
            height={50} // Remplacez par la hauteur appropriée
          />
        </a>

        <div className="header-actions">
          <span className="phone-number">
            <Image
              src="/images/svg/material-symbols_call.svg"
              alt="phone"
              width={24} // Remplacez par la largeur appropriée
              height={24} // Remplacez par la hauteur appropriée
            />
            09 75 66 68 58
          </span>
        </div>
      </header>

      <div className="cookie-container">
        <h1>Politique de Cookies</h1>
        <p>
          Cette politique de cookies explique comment <strong>VotreEntreprise</strong> utilise les cookies et
          technologies similaires sur notre site web. En naviguant sur notre site, vous consentez à l’utilisation des
          cookies décrits dans cette politique.
        </p>

        <h2>1. Qu&apos;est-ce qu&apos;un cookie ?</h2>
        <p>
          Les cookies sont de petits fichiers texte stockés sur votre appareil (ordinateur, tablette, ou smartphone)
          lors de votre visite sur un site web. Ils permettent de conserver des informations sur votre navigation et vos
          préférences, afin d’améliorer votre expérience en ligne.
        </p>

        <h2>2. Types de Cookies Utilisés</h2>
        <p>Nous utilisons différents types de cookies pour diverses finalités :</p>
        <ul>
          <li>
            <strong>Cookies Essentiels :</strong> Ces cookies sont nécessaires pour le bon fonctionnement du site et
            vous permettent d’accéder aux fonctionnalités de base, comme la navigation sécurisée. Sans ces cookies,
            certains services essentiels ne peuvent être fournis.
          </li>
          <li>
            <strong>Cookies de Performance :</strong> Ces cookies collectent des informations anonymes sur la façon
            dont vous utilisez notre site (pages visitées, temps passé, erreurs éventuelles). Ils nous permettent
            d’optimiser le site pour améliorer votre expérience.
          </li>
          <li>
            <strong>Cookies de Fonctionnalité :</strong> Ces cookies se souviennent de vos choix (comme votre langue ou
            votre région) et améliorent ainsi les fonctionnalités personnalisées.
          </li>
          <li>
            <strong>Cookies de Ciblage ou Publicitaires :</strong> Ces cookies sont utilisés pour vous présenter des
            publicités plus pertinentes pour vous et vos intérêts, et limiter le nombre de fois que vous voyez une
            publicité.
          </li>
        </ul>

        <h2>3. Comment Utilisons-Nous les Cookies ?</h2>
        <p>Nous utilisons les cookies pour :</p>
        <ul>
          <li>Assurer la sécurité et l&apos;intégrité de notre site.</li>
          <li>Suivre les préférences des utilisateurs et les sessions de connexion.</li>
          <li>Analyser le trafic du site et l’utilisation des pages pour optimiser nos services.</li>
          <li>Présenter des offres personnalisées, en fonction de vos habitudes de navigation.</li>
        </ul>

        <h2>4. Gestion des Cookies</h2>
        <p>
          Vous pouvez choisir d&apos;accepter ou de refuser les cookies via les paramètres de votre navigateur. Vous
          pouvez également supprimer les cookies existants à tout moment en accédant aux paramètres de votre navigateur
          :
        </p>
        <ul>
          <li>
            <a
              href="https://support.google.com/chrome/answer/95647"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Chrome
            </a>
          </li>
          <li>
            <a
              href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mozilla Firefox
            </a>
          </li>
          <li>
            <a
              href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apple Safari
            </a>
          </li>
          <li>
            <a
              href="https://support.microsoft.com/fr-fr/help/17442/windows-internet-explorer-delete-manage-cookies"
              target="_blank"
              rel="noopener noreferrer"
            >
              Microsoft Internet Explorer
            </a>
          </li>
        </ul>
        <p>
          Veuillez noter que désactiver certains cookies peut affecter votre expérience de navigation et limiter
          certaines fonctionnalités du site.
        </p>

        <h2>5. Cookies Tiers</h2>
        <p>
          Nous faisons appel à des services tiers (comme Google Analytics, Facebook, etc.) pour améliorer notre site et
          personnaliser votre expérience. Ces services peuvent installer leurs propres cookies sur votre appareil. Nous
          n&apos;avons aucun contrôle sur ces cookies tiers, et nous vous recommandons de consulter les politiques de
          confidentialité de ces services pour en savoir plus.
        </p>

        <h2>6. Durée de Conservation des Cookies</h2>
        <p>Les cookies peuvent être de deux types :</p>
        <ul>
          <li>
            <strong>Cookies de Session :</strong> Ces cookies sont temporaires et sont supprimés lorsque vous fermez
            votre navigateur.
          </li>
          <li>
            <strong>Cookies Persistants :</strong> Ces cookies restent sur votre appareil jusqu&apos;à leur expiration
            ou leur suppression manuelle. Leur durée varie en fonction de leur fonction (généralement entre quelques
            jours et plusieurs mois).
          </li>
        </ul>

        <h2>7. Mise à Jour de la Politique de Cookies</h2>
        <p>
          Nous pouvons mettre à jour cette politique de cookies pour refléter les changements dans notre utilisation des
          cookies ou les évolutions de la réglementation. Toute mise à jour sera publiée sur cette page avec la date de
          révision indiquée en bas.
        </p>

        <h2>8. Contact</h2>
        <p>
          Si vous avez des questions concernant cette politique de confidentialité ou vos informations personnelles,
          veuillez nous contacter à :
        </p>
        <address>
          <strong>Myohmtechnologies</strong>
          <br />
          Adresse de l&apos;entreprise : 544 Av. Frédéric Mistral 04100 Manosque
          <br />
          Téléphone : 09 75 66 68 58
          <br />
          Email : contact@myohmtechnologies.com
        </address>

        <p>
          numéro de SIRET : <strong>91760190800010</strong>
        </p>
      </div>
    </>
  );
};

export default CookiePolicy;
