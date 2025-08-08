import React from 'react';
import './Home.css';
import Maintenance from '../maintenance/Maintenance';
import siteConfig from '../const/siteConfig';
import Footer from '../layout/footer/Footer';
import Header from '../layout/header/Header';
import ServiceReusable from '../utils/servicios/ServicioReutilizable';

const Home = () => {
  const maintenanceMode = false;

  if (maintenanceMode) {
    return <Maintenance />;
  }

  return (
    <div className="home-wrapper-padre">
      <Header />
      <header className="home-hero-padre">
        <div className="hero-content-padre">
          <h1>Bienvenido a {siteConfig.companyName}</h1>
          <p>Especialistas en instalación de pisos y recubrimientos de resina para hogares y negocios.</p>
          <a href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hola,%20quiero%20cotizar%20un%20servicio%20de%20piso`}
            className="cta-button-padre"
            target="_blank"
            rel="noopener noreferrer">
            Cotiza Ahora
          </a>
        </div>
      </header>

      <section className="services-section-padre ">
        <ServiceReusable />
      </section>

      <div className='footer-padre '>
        <Footer />
      </div>

    </div>
  );
};

export default Home;
