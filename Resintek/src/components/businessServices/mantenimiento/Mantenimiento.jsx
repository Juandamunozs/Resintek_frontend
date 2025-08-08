import React from 'react';
import './Mantenimiento.css';
import siteConfig from '../../const/siteConfig';
import Header from '../../layout/header/Header';
import Navigation from '../../layout/menu/Navigation';

const servicios = [
  {
    nombre: 'Mantenimiento Preventivo',
    descripcion: 'Inspección y ajuste regular de superficies para prolongar la vida útil de los pisos.',
    precio: 'Desde $90.000 COP / m²',
    imagen: 'https://construepoxicos.com/wp-content/uploads/2020/10/1.mantenimiento-a-pisos-industriales-1024x622.jpg'
  },
  {
    nombre: 'Limpieza Profunda y Pulido',
    descripcion: 'Eliminación de residuos, manchas difíciles y pulido para restaurar el brillo natural.',
    precio: 'Desde $110.000 COP / m²',
    imagen: 'https://prodiamco.com/wp-content/uploads/2011/07/Captura-de-pantalla-2024-01-10-213402.webp'
  },
  {
    nombre: 'Reparación de Superficies',
    descripcion: 'Tratamiento de zonas dañadas por desgaste, humedad o impactos con soluciones duraderas.',
    precio: 'Desde $130.000 COP / m²',
    imagen: 'https://swprotectivelatam.com/wp-content/uploads/2023/12/5-BIX-Produce-Application.jpg'
  }
];

const MantenimientoServicio = () => {

  const handleWhatsApp = (servicio) => {
    const mensaje = `Hola, estoy interesado en el servicio de "${servicio.nombre}". Me gustaría recibir más información.`;
    const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="mantenimiento-page">
      <Header />

      <div className="mantenimiento-header">
        <h1>Servicios de Mantenimiento</h1>
        <p>Soluciones profesionales para el cuidado, limpieza y restauración de tus pisos.</p>
      </div>

      <Navigation NavigacurrentServicetion="mantenimientos" />

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

export default MantenimientoServicio;
