"use client"
import React, { useState } from "react";
import Link from 'next/link';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="hero-header">
      {/* Logo à gauche */}
      <div className="logo">
        <a href="/">
          <img src="/images/logo.png" alt="Logo MY OHM" />
        </a>
      </div>

      {/* Navigation */}
      <nav className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`} id="nav-links">
        <ul>
          <li><a href="/panneaux-photovoltaiques">Panneaux photovoltaïques</a></li>
          <li><a href="/blogs">Blog</a></li>
          <li><a href="#">Notre showroom</a></li>
          <li><a href="/nos-installations">Nos réalisations</a></li>
        </ul>
      </nav>

      {/* Tiret vertical séparateur */}
      <div className="vertical-separator"></div>

      {/* Call to Action (CTA) avec icône SVG */}
      <div className="cta-wrapper">
        <Link href="/simulateur">
          <div className="cta-button">
            <span>Mon étude gratuite</span>
            <img src="/images/svg/icons8-right-arrow-32.png" alt="Arrow Icon" />
          </div>
        </Link>
      </div>

      {/* Bouton pour ouvrir/fermer le menu */}
      <button
        className="nav-toggle"
        id="nav-toggle"
        aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? (
          <img
            key="close-icon"
            src="/images/svg/icons8-effacer.svg"
            alt="Close Icon"
          />
        ) : (
          <img
            key="menu-icon"
            src="/images/svg/menu.svg"
            alt="Menu Icon"
          />
        )}
      </button>

    </header>
  );
};

export default Header;
