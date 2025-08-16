import siteConfig from '../const/siteConfig';
import './OfficialContacts.css';
import Header from '../layout/header/Header';

export default function OfficialContacts() {
  return (
    <div className="official-contacts-container">
      <Header />
      <section className="official-contacts">
        <h2 >Contactos Oficiales</h2>

        <p className="intro-text">
          En <strong>{siteConfig.companyName}</strong>, la comunicación con nuestros clientes es
          fundamental. Por eso, ponemos a tu disposición estos canales oficiales para solicitudes,
          quejas, reclamos o información general.
          Dando click al logo también puedes acceder directamente a nuestras redes oficiales.
        </p>

        <div className="business-hours">
          <h2>Horario de Atención</h2>
          <ul className="hours-list">
            <li><strong>Lunes:</strong> 8:00 a.m. – 6:00 p.m.</li>
            <li><strong>Martes:</strong> 8:00 a.m. – 6:00 p.m.</li>
            <li><strong>Miércoles:</strong> 8:00 a.m. – 6:00 p.m.</li>
            <li><strong>Jueves:</strong> 8:00 a.m. – 6:00 p.m.</li>
            <li><strong>Viernes:</strong> 8:00 a.m. – 6:00 p.m.</li>
            <li><strong>Sábado:</strong> 9:00 a.m. – 1:00 p.m.</li>
            <li><strong>Domingo:</strong> Cerrado</li>
          </ul>
          <p className="schedule-note">
            Si nos contactas fuera de este horario, responderemos a tu solicitud tan pronto como reiniciemos operaciones.
          </p>
        </div>

        <p><strong>Dirección:</strong> {siteConfig.address.text}</p>

        {siteConfig.email && (
          <p>
            <strong>Email:</strong>{' '}
            <a href={`mailto:${siteConfig.email}`} className="contact-link">
              {siteConfig.email}
            </a>
          </p>
        )}

        {siteConfig.whatsappNumber && (
          <p>
            <strong>WhatsApp:</strong>{' '}
            <a
              href={`https://api.whatsapp.com/send?phone=${siteConfig.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              + 57 {siteConfig.telephone}
            </a>
          </p>
        )}

        <div className="social-icons">
          <a
            href={siteConfig.social_networks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="social-button"
          >
            <img src="/Logo_facebook.png" alt="Facebook" className="social-icon facebook-icon" />
          </a>

          <a
            href={siteConfig.social_networks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="social-button"
          >
            <img src="/Logo_instagram.png" alt="Instagram" className="social-icon instagram-icon" />
          </a>

          <a
            href={siteConfig.social_networks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="social-button"
          >
            <img src="/Logo_whatsapp.png" alt="Whatsapp" className="social-icon whatsapp-icon" />
          </a>
        </div>
      </section>
    </div>
  );
}
