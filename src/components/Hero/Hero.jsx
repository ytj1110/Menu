import { FaWhatsapp } from "react-icons/fa";
import { LuClock, LuMapPin } from "react-icons/lu";
import SafeImage from "../SafeImage/SafeImage.jsx";
import { generalLink } from "../../utils/whatsapp";
import "./Hero.css";

export default function Hero({ data }) {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <SafeImage className="hero__bg" src={data.heroImage} alt="" loading="eager" fetchPriority="high" />
      <div className="hero__shade" />
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="hero__tagline">{data.tagline}</p>
          <h1 id="hero-title" className="hero__title">{data.name}</h1>
          <p className="hero__desc">{data.description}</p>
          <div className="hero__actions">
            <a className="btn btn-primary" href="#menu">See the menu</a>
            <a className="btn btn-ghost" href={generalLink()} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp aria-hidden="true" /> Chat on WhatsApp
            </a>
          </div>
        </div>

        <aside className="hero__info" aria-label="Opening hours and location">
          <div className="hero__row">
            <LuClock aria-hidden="true" />
            <div>
              <h2 className="hero__info-title">{data.hoursSummary}</h2>
              <ul>
                {data.hours.map((h) => (
                  <li key={h.days}><span>{h.days}</span><span>{h.time}</span></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="hero__row">
            <LuMapPin aria-hidden="true" />
            <div>
              <p>{data.address}</p>
              <a href={data.mapsUrl} target="_blank" rel="noopener noreferrer">Open in Google Maps</a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
