"use client"
import React, { useState, useEffect } from "react";
import Link from 'next/link';
import Image from "next/image";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 bg-white z-50 shadow-sm">
      <div className="hero-header relative">
        {/* Logo et bouton menu mobile */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link href="/" className="block">
            <Image 
              src="/images/logo.png" 
              alt="Logo MY OHM" 
              width={190}
              height={150}
              className="w-34 md:w-46"
              priority
            />
          </Link>
          
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="currentColor"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" fill="currentColor"/>
              </svg>
            )}
          </button>
        </div>

        {/* Navigation desktop */}
        <nav className="hidden md:block flex-grow">
          <ul className="flex gap-6 justify-center">
            <li>
              <Link href="/panneaux-photovoltaiques" className="nav-link">
                Panneaux photovoltaïques
              </Link>
            </li>
            <li>
              <Link href="/qui-sommes-nous" className="nav-link">
                Qui sommes-nous
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="nav-link">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#" className="nav-link">
                Notre showroom
              </Link>
            </li>
            <li>
              <Link href="/nos-installations" className="nav-link">
                Nos réalisations
              </Link>
            </li>
          </ul>
        </nav>

        <div className="vertical-separator hidden md:block"></div>

        {/* CTA Desktop */}
        <div className="cta-wrapper hidden md:block">
          <Link href="/simulateur">
            <div className="cta-button">
              <span>Mon étude gratuite</span>
              <Image 
                src="/images/svg/icons8-right-arrow-32.svg"
                alt="Arrow Icon" 
                width={24} 
                height={24}
                priority
              />
            </div>
          </Link>
        </div>

        {/* Menu mobile overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-white z-50 md:hidden">
            <div className="flex flex-col h-full">
              {/* En-tête mobile */}
              <div className="flex justify-between items-center p-4 border-b">
                <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                  <Image 
                    src="/images/logo.png" 
                    alt="Logo MY OHM" 
                    width={170}
                    height={150}
                    className="w-34 md:w-46"
                    priority
                  />
                </Link>
                <button
                  onClick={toggleMobileMenu}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="currentColor"/>
                  </svg>
                </button>
              </div>
              
              {/* Navigation mobile */}
              <nav className="flex-1 overflow-y-auto">
                <ul className="flex flex-col p-4 gap-2">
                  <li>
                    <Link 
                      href="/panneaux-photovoltaiques" 
                      className="mobile-nav-link"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Panneaux photovoltaïques
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/qui-sommes-nous" 
                      className="mobile-nav-link"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Qui sommes-nous
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/blogs" 
                      className="mobile-nav-link"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="#" 
                      className="mobile-nav-link"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Notre showroom
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/nos-installations" 
                      className="mobile-nav-link"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Nos réalisations
                    </Link>
                  </li>
                </ul>
              </nav>
              
              {/* CTA Mobile */}
              <div className="p-4 border-t">
                <Link 
                  href="/simulateur"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full py-3 px-4 bg-[#AFC97E] text-white text-center rounded-lg font-medium hover:bg-[#9DB96E] transition-colors"
                >
                  Mon étude gratuite
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
