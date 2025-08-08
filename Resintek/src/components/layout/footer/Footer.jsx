import siteConfig from '../../const/siteConfig';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="home-footer">
      <p>Dirección: {siteConfig.address.text}</p>
      <p>{siteConfig.derechos_reservados}</p>

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
          <img src="/logo_whatsapp.png" alt="Whatsapp" className="social-icon whatsapp-icon" />
        </a>
      </div>

    </footer>
  );
}

