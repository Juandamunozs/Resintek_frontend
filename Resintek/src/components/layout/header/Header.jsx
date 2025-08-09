import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import siteConfig from '../../const/siteConfig';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="Header">
      <div className="Header-logo">
        <Link to="/">{siteConfig.companyName}</Link>
      </div>

      {/* Botón hamburguesa para móviles */}
      <button 
        className="Header-toggle" 
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menú"
      >
        ☰
      </button>

      <ul className={`Header-links ${menuOpen ? 'show' : ''}`}>
        <li><Link to="/inicio">Inicio</Link></li>
        <li><Link to="/servicios">Servicios</Link></li>
        <li><Link to="/nosotros">Nosotros</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
};

export default Header;
