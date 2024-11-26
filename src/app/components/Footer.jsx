import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-left">
          <Image
            src="/images/logo-my-ohm.png"
            alt="My OHM Logo"
            className="logo"
            width={150} // Remplacez par les dimensions réelles
            height={50} // Remplacez par les dimensions réelles
          />
          <p>
            Équiper votre maison de panneaux solaires vous permet de réduire
            votre facture d&apos;électricité, et d&apos;agir positivement pour la
            transition écologique.
          </p>
          <ul className="footer-links">
            <li>
              <Link href="/PrivacyPolicy">Politique de Confidentialité</Link>
            </li>
            <li>
              <Link href="/TermsAndConditions">Termes et Conditions</Link>
            </li>
            <li>
              <Link href="/CookiePolicy">Cookies Policy</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
          </ul>
          <p>&copy; 2023 My OHM Inc. All rights reserved.</p>
        </div>
        <div className="footer-right">
          <p className="footer-title">Restez À Jour Avec MY OHM</p>
          <form action="#">
            <input
              type="email"
              placeholder="Adresse email"
              className="email-input"
            />
            <Link href="/simulateur">
              <button className="button-yellow">
                VOUS AVEZ UN PROJET
                <Image
                  className="frame-child"
                  alt="Flèche vers la droite"
                  src="/images/svg/lets-icons_arrow-right.svg"
                  width={20} // Remplacez par les dimensions réelles
                  height={20} // Remplacez par les dimensions réelles
                />
              </button>
            </Link>
          </form>
          <div className="social-icons">
            <Link href="#">
              <Image
                src="/images/ri_facebook-fill.svg"
                alt="Facebook"
                width={24} // Remplacez par les dimensions réelles
                height={24} // Remplacez par les dimensions réelles
              />
            </Link>
            <Link href="#">
              <Image
                src="/images/uil_twitter.svg"
                alt="Twitter"
                width={24} // Remplacez par les dimensions réelles
                height={24} // Remplacez par les dimensions réelles
              />
            </Link>
            <Link href="#">
              <Image
                src="/images/mdi_instagram.svg"
                alt="Instagram"
                width={24} // Remplacez par les dimensions réelles
                height={24} // Remplacez par les dimensions réelles
              />
            </Link>
            <Link href="#">
              <Image
                src="/images/typcn_social-linkedin.svg"
                alt="LinkedIn"
                width={24} // Remplacez par les dimensions réelles
                height={24} // Remplacez par les dimensions réelles
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
