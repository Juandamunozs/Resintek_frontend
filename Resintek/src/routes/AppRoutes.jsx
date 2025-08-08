// npm install react-router-dom

import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../components/home/Home';
import Maintenance from '../components/maintenance/Maintenance';
import NotFound from '../components/noFound/NotFound';
import PisosServicio from '../components/businessServices/pisos/Pisos';
import AboutUs from '../components/aboutUs/AboutUs';
import MantenimientoServicio from '../components/businessServices/mantenimiento/Mantenimiento';
import ResinasServicio from '../components/businessServices/resinas/Resinas'; 
import Service from '../components/businessServices/service/Service';
// import ServiceReusable from '../components/utils/servicios/ServicioReutilizable'
import OfficialContacts from '../components/contact/OfficialContacts';

export default function AppRoutes() {
  return (
    <Routes>
      {/* Redirigir la raíz "/" a "/inicio" */}
      <Route path="/" element={<Navigate to="/inicio" replace />} />

      {/* Página principal en /inicio */}
      <Route path="/inicio" element={<Home />} />

      {/* Páginas generales */}
      <Route path="/mantenimiento" element={<Maintenance />} />
      <Route path="/nosotros" element={<AboutUs />} />
      <Route path="/servicios" element={<Service />} />
      <Route path="/contacto" element={<OfficialContacts />} />

      {/* Servicios */}
      <Route path="/servicio/pisos" element={<PisosServicio />} />
      <Route path="/servicio/mantenimientos" element={<MantenimientoServicio />} />
      <Route path="/servicio/resinas" element={<ResinasServicio />} />

      {/* Página de error 404 */}
      <Route path="/404" element={<NotFound />} />

      {/* Catch-all para rutas no existentes */}
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
} 