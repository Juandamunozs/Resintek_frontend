import React from 'react';
import './AboutUs.css';
import siteConfig from '../const/siteConfig';
import Header from '../layout/header/Header';
import { getYearsOfExperience } from '../../utils/Utils';
import Map from '../utils/maps/Maps';

const AboutUs = () => {
  return (
    <div className="about">
      <Header />

      <div className="aboutus-container">
        <div className="aboutus-content">
          <h1>¿Quiénes Somos?</h1>
          <p>
            En <strong>{siteConfig.companyName}</strong> somos especialistas en instalación, mantenimiento y renovación de pisos
            con resinas de alta calidad. Nuestro compromiso es transformar tus espacios con acabados profesionales,
            resistentes y duraderos.
          </p>
          <p>
            Contamos con un equipo con más de <strong>{getYearsOfExperience()}</strong> de experiencia, brindando soluciones a hogares, oficinas
            y comercios que buscan estética y funcionalidad.
          </p>
          <p>
            Nos diferenciamos por nuestro trato cercano, asesoría personalizada y la excelencia en cada proyecto,
            porque creemos que <strong>{siteConfig.moto}</strong>.
          </p>
        </div>


        <div className="aboutus-image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgIo_SBuLhu7qBszbbW-h4UFU6ecMHTq9VQw&s"
            alt="Equipo Resintek trabajando"
          />
        </div>
      </div>

      <div className="aboutus-container reverse">
        <div className="aboutus-content">
          <h1>¿Dónde estamos?</h1>
          <p>
            Nos encontramos ubicados en <strong>{siteConfig.address.text}</strong>, en el corazón del barrio La Merced, en Cali.
            Esta ubicación estratégica nos permite atender de forma eficiente a clientes en toda el área metropolitana y sus alrededores.
            Estamos cerca de vías principales, lo que facilita el acceso y mejora nuestros tiempos de respuesta en servicios técnicos y logísticos.
            <br />
            <a
              href={`https://www.google.com/maps?q=${siteConfig.address.lat},${siteConfig.address.lng}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir ubicación en Google Maps
            </a>
          </p>
        </div>
        <div className="aboutus-image">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
