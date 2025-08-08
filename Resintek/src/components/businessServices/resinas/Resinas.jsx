import React from 'react';
import './Resinas.css';
import siteConfig from '../../const/siteConfig';
import Header from '../../layout/header/Header';
import Navigation from '../../layout/menu/Navigation';

const servicios = [
  {
    nombre: 'Aplicación de Resina Epóxica',
    descripcion: 'Ideal para resina industriales y comerciales, resistente al tráfico pesado y fácil de limpiar.',
    precio: 'Desde $140.000 COP / m²',
    imagen: 'https://apologrup.cl/wp-content/uploads/2021/04/Aplicacion-de-Resina-Epoxica-2.jpg'
  },
  {
    nombre: 'Revestimiento con Resina Poliuretánica',
    descripcion: 'Acabado elástico y resistente a productos químicos. Perfecto para laboratorios y cocinas industriales.',
    precio: 'Desde $160.000 COP / m²',
    imagen: 'https://www.becosan.com/wp-content/uploads/2021/05/suelo-de-revestimiento-epoxi.jpg.webp'
  },
  {
    nombre: 'Sellado con Resina Acrílica',
    descripcion: 'Protección contra humedad y desgaste, ideal para superficies decorativas o exteriores.',
    precio: 'Desde $120.000 COP / m²',
    imagen: 'https://construepoxicos.com/wp-content/uploads/2018/10/sellador-epoxico.jpg'
  }
];

const ResinasServicio = () => {

  const handleWhatsApp = (servicio) => {
    const mensaje = `Hola, estoy interesado en el servicio de "${servicio.nombre}". Me gustaría recibir más información.`;
    const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="resina-page">
      <Header />

      <div className="resina-header">
        <h1>Servicios de Resinas</h1>
        <p>Soluciones duraderas y profesionales con resinas epóxicas, poliuretánicas y acrílicas.</p>
      </div>

      <Navigation NavigacurrentServicetion="resinas" />

      <div className="service-grid">
        {servicios.map((servicio, index) => (
          <div key={index} className="service-card">
            <img src={servicio.imagen} alt={servicio.nombre} />
            <h3>{servicio.nombre}</h3>
            <p>{servicio.descripcion}</p>
            <span className="precio">{servicio.precio}</span>
            <button className="whatsapp-inquire-btn" onClick={() => handleWhatsApp(servicio)}>
              Solicitar Información
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResinasServicio;
