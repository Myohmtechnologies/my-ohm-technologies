import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#232323] text-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:justify-between gap-8">
        {/* Left Section */}
        <div className="space-y-6 md:w-1/2">
          <Image
            src="/images/dark-logo.png"
            alt="My ohm dark-logo"
            className="w-32 md:w-40"
            width={150}
            height={50}
            priority
          />
          <p className="text-white text-sm md:text-base max-w-md">
            Équiper votre maison de panneaux solaires vous permet de réduire
            votre facture d&apos;électricité, et d&apos;agir positivement pour la
            transition écologique.
          </p>
          <ul className="space-y-2 text-sm md:text-base text-white">
            <li>
              <Link href="/PrivacyPolicy" className="text-white hover:text-[#AFC97E] transition-colors">
                PRIVACY POLICY
              </Link>
            </li>
            <li>
              <Link href="/TermsAndConditions" className="text-white hover:text-[#AFC97E] transition-colors">
                TERMS & CONDITION
              </Link>
            </li>
            <li>
              <Link href="/CookiePolicy" className="text-white hover:text-[#AFC97E] transition-colors">
                COOKIES POLICY
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-white hover:text-[#AFC97E] transition-colors">
                CONTACT
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="space-y-6 md:w-1/2 md:max-w-md">
          <h2 className="text-xl font-bold text-white">Restez À Jour Avec MY OHM</h2>
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email address"
              className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-[#AFC97E] text-white placeholder-white"
            />
            <Link 
              href="/simulateur"
              className="inline-flex items-center justify-between w-full bg-[#FFDF64] text-black px-6 py-3 rounded-full hover:bg-[#FFDF64]/90 transition-colors"
            >
              <span className="font-medium">VOUS AVEZ UN PROJET ?</span>
              <Image
                src="/images/svg/lets-icons_arrow-right.svg"
                alt="Flèche"
                width={20}
                height={20}
              />
            </Link>
          </div>

          <div className="flex gap-4 mt-8">
            <Link href="#" className="bg-[#2A2A2A] p-2 rounded-full hover:opacity-80 transition-opacity">
              <Image src="/images/ri_facebook-fill.svg" alt="Facebook" width={24} height={24} className="invert" />
            </Link>
            <Link href="#" className="bg-[#2A2A2A] p-2 rounded-full hover:opacity-80 transition-opacity">
              <Image src="/images/uil_twitter.svg" alt="Twitter" width={24} height={24} className="invert" />
            </Link>
            <Link href="#" className="bg-[#2A2A2A] p-2 rounded-full hover:opacity-80 transition-opacity">
              <Image src="/images/mdi_instagram.svg" alt="Instagram" width={24} height={24} className="invert" />
            </Link>
            <Link href="#" className="bg-[#2A2A2A] p-2 rounded-full hover:opacity-80 transition-opacity">
              <Image src="/images/typcn_social-linkedin.svg" alt="LinkedIn" width={24} height={24} className="invert" />
            </Link>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-white/10">
        <p className="text-sm text-white">&copy; 2023 ROAM HOME INC. ALL RIGHTS RESERVED</p>
      </div>
    </footer>
  );
};

export default Footer;
