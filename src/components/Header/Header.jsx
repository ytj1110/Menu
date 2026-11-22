import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { generalLink } from "../../utils/whatsapp";
import "./Header.css";

export default function Header({ data }) {
  const [logoFailed, setLogoFailed] = useState(!data.logo);

  return (
    <header className="header">
      <div className="container header__inner">
        <a className="header__brand" href="#top" aria-label={`${data.name} home`}>
          {logoFailed ? (
            <span className="header__logo header__logo--text" aria-hidden="true">{data.name[0]}</span>
          ) : (
            <img className="header__logo" src={data.logo} alt="" onError={() => setLogoFailed(true)} />
          )}
          <span className="header__name">{data.name}</span>
        </a>
        <a className="btn btn-primary header__cta" href={generalLink()} target="_blank" rel="noopener noreferrer">
          <FaWhatsapp aria-hidden="true" />
          <span>Contact us</span>
        </a>
      </div>
    </header>
  );
}
