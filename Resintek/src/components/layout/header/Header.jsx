import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import siteConfig from '../../const/siteConfig';

const Header = () => {
  return (
    <nav className="Header">
      <div className="Header-logo">
        <Link to="/">{siteConfig.companyName}</Link>
      </div>
      <ul className="Header-links">
        <li><Link to="/inicio">Inicio</Link></li>
        <li><Link to="/servicios">Servicios</Link></li>
        <li><Link to="/nosotros">Nosotros</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
        {/* <li><a href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hola,%20me%20interesa%20cotizar%20con%20ustedes.`} target="_blank" rel="noopener noreferrer">Contacto</a></li> */}
      </ul>
    </nav>
  );
};

export default Header;
