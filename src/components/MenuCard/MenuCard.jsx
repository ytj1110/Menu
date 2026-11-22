import SafeImage from "../SafeImage/SafeImage.jsx";
import { displayPrice } from "../../utils/whatsapp";
import "./MenuCard.css";

export default function MenuCard({ item, categoryLabel, onOpen }) {
  const soldOut = !item.available;

  return (
    <article className={`card ${soldOut ? "is-unavailable" : ""}`}>
      <button type="button" className="card__btn" onClick={() => onOpen(item)} aria-label={`View details for ${item.name}`}>
        <div className="card__media">
          <SafeImage key={item.image} src={item.image} alt={item.name} />
          {item.badge && <span className="card__badge">{item.badge}</span>}
          {soldOut && <span className="card__sold">Unavailable today</span>}
        </div>
        <div className="card__body">
          <div className="card__line">
            <h3 className="card__name">{item.name}</h3>
            <span className="card__dots" aria-hidden="true" />
            <span className="card__price">{displayPrice(item)}</span>
          </div>
          <p className="card__desc">{item.description}</p>
          <p className="card__cat">{categoryLabel}</p>
        </div>
      </button>
    </article>
  );
}
