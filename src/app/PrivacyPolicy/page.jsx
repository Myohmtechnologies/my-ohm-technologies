import Image from 'next/image';
import '../../styles/simulateur.css';

const PrivacyPolicy = () => {
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

      <div className="privacy-container">
        <h1>Politique de Confidentialité</h1>
        <p>
          Chez <strong>VotreEntreprise</strong>, nous accordons une grande importance à la protection de votre vie
          privée. Cette politique de confidentialité décrit les types d&apos;informations que nous recueillons auprès de
          vous lorsque vous visitez notre site Web, ainsi que la manière dont nous les utilisons et les protégeons.
        </p>

        <h2>1. Collecte des Informations</h2>
        <p>
          Nous collectons différentes informations pour mieux répondre à vos besoins et améliorer votre expérience
          utilisateur. Ces informations incluent :
        </p>
        <ul>
          <li>
            <strong>Informations personnelles :</strong> Nom, adresse e-mail, numéro de téléphone, etc., que vous nous
            fournissez lors de votre inscription, des demandes de devis ou de contact.
          </li>
          <li>
            <strong>Données de navigation :</strong> Adresse IP, type de navigateur, pages visitées et durée de visite,
            via des cookies et autres technologies similaires.
          </li>
        </ul>

        <h2>2. Utilisation des Informations</h2>
        <p>Les informations recueillies sont utilisées pour :</p>
        <ul>
          <li>
            Vous fournir les services demandés, comme les devis et simulations pour l’installation de panneaux
            photovoltaïques.
          </li>
          <li>Améliorer notre site Web et nos services en analysant les comportements de navigation.</li>
          <li>
            Vous envoyer des informations promotionnelles concernant nos services, sous réserve de votre consentement.
          </li>
        </ul>

        <h2>3. Partage des Informations</h2>
        <p>
          Nous ne vendons ni ne louons vos informations personnelles. Cependant, nous pouvons partager vos informations
          dans les situations suivantes :
        </p>
        <ul>
          <li>
            Avec des prestataires de services tiers pour le traitement de vos demandes ou pour améliorer nos services
            (ex. : analyse de données, hébergement du site Web).
          </li>
          <li>
            Conformément à la loi, si cela est requis pour répondre à des procédures légales ou pour protéger nos droits
            et intérêts.
          </li>
        </ul>

        <h2>4. Cookies</h2>
        <p>
          Notre site utilise des cookies pour améliorer votre expérience de navigation. Les cookies sont de petits
          fichiers stockés sur votre appareil qui nous aident à analyser le trafic du site et à personnaliser notre
          contenu pour mieux vous servir. Vous pouvez configurer votre navigateur pour refuser les cookies, mais cela
          pourrait limiter votre accès à certaines fonctionnalités du site.
        </p>

        <h2>5. Sécurité des Données</h2>
        <p>
          Nous mettons en œuvre des mesures de sécurité pour protéger vos informations personnelles contre tout accès
          non autorisé, toute divulgation ou tout dommage. Cependant, aucune transmission de données sur Internet
          n&apos;est totalement sécurisée ; nous ne pouvons donc garantir une sécurité absolue.
        </p>

        <h2>6. Vos Droits</h2>
        <p>Conformément aux lois en vigueur, vous disposez des droits suivants :</p>
        <ul>
          <li>
            <strong>Accès :</strong> Vous pouvez demander à consulter les informations personnelles que nous détenons à
            votre sujet.
          </li>
          <li>
            <strong>Rectification :</strong> Vous pouvez corriger ou mettre à jour vos informations personnelles.
          </li>
          <li>
            <strong>Suppression :</strong> Vous pouvez demander la suppression de vos informations, dans les limites
            prévues par la loi.
          </li>
          <li>
            <strong>Retrait du consentement :</strong> Si vous avez donné votre consentement pour recevoir des
            informations marketing, vous pouvez le retirer à tout moment.
          </li>
        </ul>

        <h2>7. Modifications de la Politique de Confidentialité</h2>
        <p>
          Nous nous réservons le droit de modifier cette politique de confidentialité. Toute modification sera publiée
          sur cette page, avec une mise à jour de la date d&apos;entrée en vigueur. Nous vous encourageons à consulter
          régulièrement cette page pour rester informé de nos pratiques de confidentialité.
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
          Numéro de SIRET : <strong>91760190800010</strong>
        </p>
      </div>
    </>
  );
};

export default PrivacyPolicy;
