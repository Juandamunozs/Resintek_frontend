import React from 'react';
import './NotFound.css';
import siteConfig from '../const/siteConfig';

const NotFound = () => {
  return (
    <div className="notfound-hero">
      <div className="notfound-overlay"></div>
      <div className="notfound-content">
        <div className="notfound-logo">{siteConfig.companyName}</div>
        <h1>404 - Página no encontrada</h1>
        <p>La página que buscas no existe o está en actualización.</p>
        <a href="/" className="back-home">Volver al inicio</a>
  
        <div className="contact-whatsapp">
          <p>¿Necesitas ayuda? Contáctanos por WhatsApp:</p>
          <a  
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hola,%20escribo%20porque%20me%20interesan%20sus%20servicios.`}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button">
            <img src="logo_whatsapp.png" alt="WhatsApp" className="whatsapp-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
