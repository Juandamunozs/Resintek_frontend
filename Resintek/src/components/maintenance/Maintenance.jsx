import React from 'react';
import './Maintenance.css';
import siteConfig from '../const/siteConfig';

const Maintenance = () => {
  return (
    <div className="maintenance-hero">
      <div className="maintenance-overlay"></div>
      <div className="maintenance-content">
        <div className="maintenance-logo">{siteConfig.companyName}</div>
        <h1>Estamos realizando mejoras</h1>
        <p>Muy pronto tendrás una experiencia renovada en nuestro sitio web.</p>

        <div className="maintenance-bar-loader">
          <span></span>
        </div>

        <div className="contact-whatsapp">

          <p>¿Necesitas atención inmediata? Contáctanos haciendo clic en el ícono de WhatsApp.</p>
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

export default Maintenance;