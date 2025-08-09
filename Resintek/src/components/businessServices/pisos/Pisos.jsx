import React from 'react';
import './Pisos.css';
import siteConfig from '../../const/siteConfig';
import Header from '../../layout/header/Header';
import Navigation from '../../layout/menu/Navigation';
import Footer from '../../layout/footer/Footer';

const servicios = [
  {
    nombre: 'Instalación de Piso Nuevo',
    descripcion: 'Colocación de pisos desde cero, incluyendo nivelación, adhesión y acabados profesionales.',
    precio: 'Desde $120.000 COP / m²',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJsYZBb5F1qUPr7Fv501M-qXPZ_43kNipNA&s'
    // imagen: '/pin.png'
  },
  {
    nombre: 'Renovación de Pisos Existentes',
    descripcion: 'Aplicación de resinas epóxicas sobre pisos desgastados, devolviéndoles brillo y resistencia.',
    precio: 'Desde $160.000 COP / m²',
    imagen: 'https://blog.rosen.cl/hubfs/Como%20combinar%20pisos%20diferentes.jpg'
  },
  {
    nombre: 'Reparación y Revestimiento',
    descripcion: 'Corrección de grietas y defectos en pisos viejos, con recubrimiento de resina poliuretánica.',
    precio: 'Desde $180.000 COP / m²',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUTV4U3wvVVaMwK5xwhvPOqBCYdZbLroDk7A&s'
  }
];

const PisosServicio = () => {

  const handleWhatsApp = (servicio) => {
    const mensaje = `Hola, estoy interesado en el servicio de "${servicio.nombre}". Me gustaría recibir más información.`;
    const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="pisos-page">
      <Header />
      <div className="pisos-header">
        <h1>Servicios de Pisos</h1>
        <p>Especialistas en instalación, renovación y mantenimiento de pisos de alta calidad.</p>
      </div>

      <Navigation NavigacurrentServicetion="pisos"/>
      
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
      <Footer />
    </div>
  );
};

export default PisosServicio;

