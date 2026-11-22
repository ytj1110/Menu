import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { LuClock, LuMapPin, LuPhone } from "react-icons/lu";
import { generalLink } from "../../utils/whatsapp";
import "./Footer.css";

const SOCIAL_ICONS = { instagram: FaInstagram, facebook: FaFacebookF, tiktok: FaTiktok, whatsapp: FaWhatsapp };

export default function Footer({ data }) {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <h2 className="footer__brand">{data.name}</h2>
          <p className="footer__muted">{data.tagline}</p>
          <ul className="footer__social" aria-label="Social media">
            {data.socials.map(({ platform, url }) => {
              const Icon = SOCIAL_ICONS[platform];
              if (!Icon) return null;
              return (
                <li key={platform}>
                  <a href={url} target="_blank" rel="noopener noreferrer" aria-label={`${data.name} on ${platform}`}>
                    <Icon aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h3 className="footer__title"><LuClock aria-hidden="true" /> Opening hours</h3>
          <ul className="footer__hours">
            {data.hours.map((h) => (
              <li key={h.days}><span>{h.days}</span><span>{h.time}</span></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="footer__title"><LuMapPin aria-hidden="true" /> Find us</h3>
          <address className="footer__address">{data.address}</address>
          <a className="footer__link" href={data.mapsUrl} target="_blank" rel="noopener noreferrer">Open in Google Maps</a>
          <h3 className="footer__title footer__title--spaced"><LuPhone aria-hidden="true" /> Call or message</h3>
          <a className="footer__link" href={`tel:${data.phone.replace(/\s/g, "")}`}>{data.phone}</a>
          <a className="footer__link" href={generalLink()} target="_blank" rel="noopener noreferrer">Message on WhatsApp</a>
        </div>
      </div>
      <p className="container footer__legal">© {new Date().getFullYear()} {data.name}. All rights reserved.</p>
    </footer>
  );
}
