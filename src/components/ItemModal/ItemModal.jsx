import { useEffect, useRef, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { LuX } from "react-icons/lu";
import SafeImage from "../SafeImage/SafeImage.jsx";
import { orderLink, formatPrice } from "../../utils/whatsapp";
import "./ItemModal.css";

export default function ItemModal({ item, categoryLabel, onClose }) {
  const dialogRef = useRef(null);
  const [sizeIndex, setSizeIndex] = useState(0);

  // Native <dialog> gives us focus trapping, Esc to close and a backdrop.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const size = item.sizes?.[sizeIndex];
  const price = size ? size.price : item.price;

  const handleBackdrop = (e) => { if (e.target === dialogRef.current) onClose(); };

  return (
    <dialog ref={dialogRef} className="modal" aria-labelledby="modal-title" onClose={onClose} onClick={handleBackdrop}>
      <div className="modal__layout">
        <div className="modal__media">
          <SafeImage key={item.image} src={item.image} alt={item.name} loading="eager" />
          {item.badge && <span className="modal__badge">{item.badge}</span>}
        </div>

        <div className="modal__body">
          <button type="button" className="modal__close" onClick={onClose} aria-label="Close details">
            <LuX aria-hidden="true" />
          </button>
          <p className="modal__cat">{categoryLabel}</p>
          <h2 id="modal-title" className="modal__title">{item.name}</h2>
          <p className="modal__price">{formatPrice(price)}</p>
          <p className="modal__desc">{item.description}</p>

          {item.sizes?.length > 0 && (
            <fieldset className="modal__sizes">
              <legend>Choose a size</legend>
              {item.sizes.map((s, i) => (
                <label key={s.label} className={`modal__size ${i === sizeIndex ? "is-selected" : ""}`}>
                  <input type="radio" name="size" checked={i === sizeIndex} onChange={() => setSizeIndex(i)} />
                  <span>{s.label}</span>
                  <span>{formatPrice(s.price)}</span>
                </label>
              ))}
            </fieldset>
          )}

          {item.available ? (
            <a
              className="btn btn-primary modal__order"
              href={orderLink({ name: item.name, size: size?.label, price })}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp aria-hidden="true" /> Order via WhatsApp
            </a>
          ) : (
            <p className="modal__unavailable" role="status">This item isn't available today. Please choose another dish.</p>
          )}
        </div>
      </div>
    </dialog>
  );
}
