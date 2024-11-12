import React from "react";
import Link from 'next/link';

const Header = () => {
  return (
  
    <header className="hero-header">
      {/* Logo à gauche */}
      <div className="logo" href="/">
        <a href="/">
          <img src="/images/logo-my-ohm.png" alt="Logo MY OHM" />
        </a>
        
      </div>

      {/* Navigation */}
      <nav className="nav-links" id="nav-links">
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
        <div className="cta-button">
          <span>Mon étude gratuite</span>
          <img src="/images/svg/icons8-right-arrow-32.png" alt="Arrow Icon" />
        </div>
      </div>

      {/* Bouton pour ouvrir le menu */}
      <button className="nav-toggle" id="nav-toggle" aria-label="Ouvrir le menu">
        <img src="/images/svg/menu.svg" alt="Menu Icon" />
      </button>
    </header>
  );
};

export default Header;
