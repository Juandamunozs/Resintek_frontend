import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';
import Footer from '../../layout/footer/Footer';
import Header from '../../layout/header/Header';

const Service = () => {
  return (
    <div className="home-wrapper-service">
      <Header />

      <section className="services-section-service">
        <h2>Nuestros Servicios</h2>
        <div className="services-grid-service">
          <div className="service-card-service">
            <h3>Instalación de Pisos</h3>
            <p>Montaje profesional de pisos epóxicos, vinílicos y más.</p>
            <Link to="/servicio/pisos" className="ver-mas-btn-service">Ver más</Link>
          </div>
          <div className="service-card-service">
            <h3>Aplicación de Resinas</h3>
            <p>Recubrimiento de superficies con resinas de alta resistencia.</p>
            <Link to="/servicio/resinas" className="ver-mas-btn-service">Ver más</Link>
          </div>
          <div className="service-card-service">
            <h3>Mantenimiento de Superficies</h3>
            <p>Renovación, reparación y mantenimiento preventivo.</p>
            <Link to="/servicio/mantenimientos" className="ver-mas-btn-service">Ver más</Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Service;