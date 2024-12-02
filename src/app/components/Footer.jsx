import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#232323] text-white py-12">
      <div className="footer-container max-w-7xl mx-auto px-4">
        <div className="footer-left">
          <Image
            src="/images/dark-logo.png"
            alt="My ohm dark-logo"
            className="logo mb-6"
            width={150}
            height={50}
          />
          <p className="mb-8 max-w-md">
            Équiper votre maison de panneaux solaires vous permet de réduire
            votre facture d&apos;électricité, et d&apos;agir positivement pour la
            transition écologique.
          </p>
          <ul className="footer-links mb-8 space-y-2">
            <li>
              <Link href="/PrivacyPolicy" className="hover:text-[#AFC97E] transition-colors">
                Politique de Confidentialité
              </Link>
            </li>
            <li>
              <Link href="/TermsAndConditions" className="hover:text-[#AFC97E] transition-colors">
                Termes et Conditions
              </Link>
            </li>
            <li>
              <Link href="/CookiePolicy" className="hover:text-[#AFC97E] transition-colors">
                Cookies Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#AFC97E] transition-colors">
                Contact
              </Link>
            </li>
          </ul>
          <p className="text-sm text-gray-400">&copy; 2023 My OHM Inc. All rights reserved.</p>
        </div>
        <div className="footer-right">
          <p className="footer-title text-xl font-bold mb-6">Restez À Jour Avec MY OHM</p>
          <form action="#" className="mb-8">
            <input
              type="email"
              placeholder="Adresse email"
              className="email-input bg-transparent border border-white/20 rounded-lg px-4 py-2 mb-4 w-full focus:outline-none focus:border-[#AFC97E]"
            />
            <Link href="/simulateur">
              <button className="button-yellow bg-[#ffdf64] text-black px-6 py-3 rounded-full hover:bg-[#ffdf64]/90 transition-colors flex items-center gap-2">
                VOUS AVEZ UN PROJET
                <Image
                  className="frame-child"
                  alt="Flèche vers la droite"
                  src="/images/svg/lets-icons_arrow-right.svg"
                  width={20}
                  height={20}
                />
              </button>
            </Link>
          </form>
          <div className="social-icons flex gap-4">
            <Link href="#" className="hover:opacity-80 transition-opacity">
              <Image
                src="/images/ri_facebook-fill.svg"
                alt="Facebook"
                width={24}
                height={24}
                className="invert"
              />
            </Link>
            <Link href="#" className="hover:opacity-80 transition-opacity">
              <Image
                src="/images/uil_twitter.svg"
                alt="Twitter"
                width={24}
                height={24}
                className="invert"
              />
            </Link>
            <Link href="#" className="hover:opacity-80 transition-opacity">
              <Image
                src="/images/mdi_instagram.svg"
                alt="Instagram"
                width={24}
                height={24}
                className="invert"
              />
            </Link>
            <Link href="#" className="hover:opacity-80 transition-opacity">
              <Image
                src="/images/typcn_social-linkedin.svg"
                alt="LinkedIn"
                width={24}
                height={24}
                className="invert"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
