import React from 'react';
import './ServicioReutilizable.css';
import { Link } from 'react-router-dom';

const ServiceReusable = () => {
  return (
    <div className="home-wrapper-reusable">
      <section className="services-section-reusable">
        <h2>Nuestros Servicios</h2>
        <div className="services-grid-reusable">
          <div className="service-card-reusable">
            <h3>Instalación de Pisos</h3>
            <p>Montaje profesional de pisos epóxicos, vinílicos y más.</p>
            <Link to="/servicio/pisos" className="ver-mas-btn-reusable">Ver más</Link>
          </div>
          <div className="service-card-reusable">
            <h3>Aplicación de Resinas</h3>
            <p>Recubrimiento de superficies con resinas de alta resistencia.</p>
            <Link to="/servicio/resinas" className="ver-mas-btn-reusable">Ver más</Link>
          </div>
          <div className="service-card-reusable">
            <h3>Mantenimiento de Superficies</h3>
            <p>Renovación, reparación y mantenimiento preventivo.</p>
            <Link to="/servicio/mantenimientos" className="ver-mas-btn-reusable">Ver más</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceReusable;