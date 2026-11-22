import { useState } from "react";
import { LuUtensilsCrossed } from "react-icons/lu";

// <img> that swaps to a branded placeholder if the file is missing or fails to load.
// Pass key={src} from the parent if src can change while mounted.
export default function SafeImage({ src, alt, className = "", ...rest }) {
  const [failed, setFailed] = useState(!src);

  if (failed) {
    return (
      <div className={`img-fallback ${className}`} role="img" aria-label={alt}>
        <LuUtensilsCrossed aria-hidden="true" />
      </div>
    );
  }
  return (
    <img src={src} alt={alt} className={className} loading="lazy" onError={() => setFailed(true)} {...rest} />
  );
}
