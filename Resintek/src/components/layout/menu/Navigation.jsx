import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = ({ NavigacurrentServicetion }) => {
  const serviceLinks = [
    { path: '/servicio/pisos', label: 'Pisos', key: 'pisos' },
    { path: '/servicio/mantenimientos', label: 'Mantenimientos', key: 'mantenimientos' },
    { path: '/servicio/resinas', label: 'Resinas', key: 'resinas' }
  ];

  const filteredLinks = serviceLinks.filter(service => service.key !== NavigacurrentServicetion);

  if (filteredLinks.length === 0) return null;

  return (
    <nav className="ServiceNav">
      <ul>
        {filteredLinks.map(service => (
          <li key={service.key}>
            <Link to={service.path}>{service.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;

