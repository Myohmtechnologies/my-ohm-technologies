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
    <header className="hero-header">
      <div className="logo">
        <Link href="/">
          <Image 
            src="/images/logo.png" 
            alt="Logo MY OHM" 
            width={150}
            height={150}
            priority
          />
        </Link>
      </div>

      <nav className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul>
          <li>
            <Link href="/panneaux-photovoltaiques" onClick={() => setMobileMenuOpen(false)}>
              Panneaux photovoltaïques
            </Link>
          </li>
          <li>
            <Link href="/blogs" onClick={() => setMobileMenuOpen(false)}>
              Blog
            </Link>
          </li>
          <li>
            <Link href="#" onClick={() => setMobileMenuOpen(false)}>
              Notre showroom
            </Link>
          </li>
          <li>
            <Link href="/nos-installations" onClick={() => setMobileMenuOpen(false)}>
              Nos réalisations
            </Link>
          </li>
        </ul>
      </nav>

      <div className="vertical-separator"></div>

      <div className="cta-wrapper">
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

      <button
        className={`nav-toggle ${isMobileMenuOpen ? 'active' : ''}`}
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
    </header>
  );
};

export default Header;
