import Image from 'next/image';
import '../../styles/simulateur.css';

const TermsAndConditions = () => {
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

      <div className="terms-container">
        <h1>Termes et Conditions</h1>
        <p>
          Bienvenue sur le site <strong>VotreEntreprise</strong>. En utilisant notre site, vous acceptez les termes et
          conditions ci-dessous. Veuillez les lire attentivement avant d&apos;utiliser nos services.
        </p>

        <h2>1. Acceptation des Termes</h2>
        <p>
          En accédant à notre site Web et en utilisant nos services, vous acceptez d&apos;être lié par les présents termes et
          conditions. Si vous n&apos;êtes pas d&apos;accord avec une partie de ces termes, vous ne devez pas utiliser notre site.
        </p>

        <h2>2. Services Offerts</h2>
        <p>
          <strong>VotreEntreprise</strong> fournit des informations, des simulations et des services liés à l’installation de
          panneaux photovoltaïques. Nos services sont destinés à vous aider dans votre transition vers l’énergie solaire et à
          vous fournir des estimations et des conseils adaptés à vos besoins énergétiques.
        </p>

        <h2>3. Utilisation du Site</h2>
        <p>Vous vous engagez à utiliser notre site uniquement à des fins légales et dans le respect des lois en vigueur. Il est interdit de :</p>
        <ul>
          <li>Utiliser notre site pour diffuser tout contenu illégal, nuisible, ou diffamatoire.</li>
          <li>Tenter d’accéder sans autorisation à nos systèmes ou ceux de nos partenaires.</li>
          <li>Reproduire, copier, vendre, ou exploiter tout contenu du site sans notre accord écrit.</li>
        </ul>

        <h2>4. Propriété Intellectuelle</h2>
        <p>
          Tout le contenu présent sur ce site, incluant les textes, images, logos et graphiques, est protégé par des droits
          d&apos;auteur et appartient à <strong>VotreEntreprise</strong> ou à ses partenaires. Vous n&apos;êtes pas autorisé à
          reproduire, distribuer ou modifier ce contenu sans notre permission expresse.
        </p>

        <h2>5. Limitations de Responsabilité</h2>
        <p>
          Nous nous efforçons de fournir des informations exactes et à jour. Cependant, <strong>VotreEntreprise</strong> ne
          garantit pas l&apos;exactitude, la complétude ou la pertinence des informations publiées sur le site. Nous déclinons
          toute responsabilité pour tout dommage résultant de l&apos;utilisation ou de l&apos;incapacité à utiliser notre site ou nos
          services.
        </p>

        <h2>6. Politique de Confidentialité</h2>
        <p>
          Votre utilisation de notre site est également soumise à notre{' '}
          <a href="/politique-de-confidentialite">Politique de Confidentialité</a>, qui explique comment nous collectons et
          utilisons vos informations personnelles.
        </p>

        <h2>7. Modifications des Termes et Conditions</h2>
        <p>
          Nous nous réservons le droit de modifier ces termes et conditions à tout moment. Les changements seront publiés sur
          cette page, et nous vous encourageons à les consulter régulièrement pour rester informé. En continuant d&apos;utiliser
          notre site après la mise à jour des termes, vous acceptez les modifications.
        </p>

        <h2>8. Liens vers des Sites Tiers</h2>
        <p>
          Notre site peut contenir des liens vers des sites externes. Ces liens sont fournis pour votre commodité, mais nous
          n’avons aucun contrôle sur ces sites et déclinons toute responsabilité quant à leur contenu ou leurs politiques.
          Veuillez consulter les conditions d&apos;utilisation et politiques de confidentialité de tout site tiers.
        </p>

        <h2>9. Résiliation</h2>
        <p>
          Nous nous réservons le droit de restreindre ou de résilier votre accès au site si vous enfreignez ces termes et
          conditions, ou si nous suspectons une utilisation inappropriée de nos services. En cas de résiliation, toutes les
          limitations de responsabilité prévues dans ces termes restent applicables.
        </p>

        <h2>10. Loi Applicable et Juridiction</h2>
        <p>
          Ces termes et conditions sont régis par les lois en vigueur dans le pays où est situé <strong>VotreEntreprise</strong>.
          Tout litige lié à l&apos;utilisation de notre site sera soumis à la juridiction des tribunaux compétents.
        </p>

        <h2>11. Contact</h2>
        <p>Pour toute question ou demande d’information concernant ces termes et conditions, vous pouvez nous contacter à :</p>
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

export default TermsAndConditions;
