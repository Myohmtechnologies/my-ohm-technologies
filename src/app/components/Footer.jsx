import Link from "next/link";

const Footer = () => {
    return (
      <footer>
        <div className="footer-container">
          <div className="footer-left">
            <img
              src="/images/logo-my-ohm.png"
              alt="My OHM Logo"
              className="logo"
            />
            <p>
              Equiper votre maison de panneaux solaires vous permet de réduire votre facture d'électricité, et d'agir positivement pour la transition écologique.
            </p>
            <ul className="footer-links">
              <li><a href="/PrivacyPolicy">Politique de Confidentialité</a></li>
              <li><a href="/TermsAndConditions">Termes et Conditions </a></li>
              <li><a href="/CookiePolicy">Cookies Policy</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
            <p>&copy; 2023 My OHM Inc. All rights reserved.</p>
          </div>
          <div className="footer-right">
            <p className="footer-title">Restez À Jour Avec MY OHM</p>
            <form action="#">
              <input
                type="email"
                placeholder="Email address"
                className="email-input"
              />
              <Link href="/simulateur" >
              <button className="button-yellow">
                VOUS AVEZ UN PROJET
                <img
                  className="frame-child"
                  alt=""
                  src="/images/svg/lets-icons_arrow-right.svg"
                />
              </button>
              </Link>
            </form>
            <div className="social-icons">
              <a href="#"><img src="/images/ri_facebook-fill.svg" alt="Facebook" /></a>
              <a href="#"><img src="/images/uil_twitter.svg" alt="Twitter" /></a>
              <a href="#"><img src="/images/mdi_instagram.svg" alt="Instagram" /></a>
              <a href="#"><img src="/images/typcn_social-linkedin.svg" alt="LinkedIn" /></a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  