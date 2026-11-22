import { useEffect, useRef, useState } from "react";
import QRCode from "qrcode";
import { LuDownload, LuArrowLeft } from "react-icons/lu";
import { restaurantData } from "../../data/restaurantData";
import "./QRGenerator.css";

// Owner-side tool. Open it at  /#qr  — it is not linked from the public menu.
export default function QRGenerator() {
  const canvasRef = useRef(null);
  const [url, setUrl] = useState(restaurantData.menuUrl);
  const [size, setSize] = useState(512);
  const [error, setError] = useState("");

  useEffect(() => {
    const value = url.trim();
    if (!value) { setError("Enter the menu URL to generate a QR code."); return; }
    QRCode.toCanvas(canvasRef.current, value, {
      width: size,
      margin: 2,
      errorCorrectionLevel: "H",
      color: { dark: restaurantData.theme.charcoal, light: "#ffffff" },
    })
      .then(() => setError(""))
      .catch(() => setError("This URL is too long to fit in a QR code."));
  }, [url, size]);

  const download = () => {
    canvasRef.current.toBlob((blob) => {
      if (!blob) return;
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `${restaurantData.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-menu-qr.png`;
      link.click();
      URL.revokeObjectURL(link.href);
    }, "image/png");
  };

  return (
    <main className="qr">
      <div className="qr__panel">
        <a className="qr__back" href="#top" onClick={() => { window.location.hash = ""; }}>
          <LuArrowLeft aria-hidden="true" /> Back to menu
        </a>
        <h1 className="qr__title">Menu QR code</h1>
        <p className="qr__intro">Print this code for tables and windows. Guests scan it to open your menu.</p>

        <label className="qr__label" htmlFor="qr-url">Menu URL</label>
        <input id="qr-url" className="qr__input" type="url" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https://your-menu.example.com" />

        <label className="qr__label" htmlFor="qr-size">Image size</label>
        <select id="qr-size" className="qr__input" value={size} onChange={(e) => setSize(Number(e.target.value))}>
          <option value={256}>256 px (small)</option>
          <option value={512}>512 px (standard)</option>
          <option value={1024}>1024 px (print quality)</option>
        </select>

        {error && <p className="qr__error" role="alert">{error}</p>}
        <button type="button" className="btn btn-primary qr__download" onClick={download} disabled={Boolean(error)}>
          <LuDownload aria-hidden="true" /> Download PNG
        </button>
      </div>

      <div className="qr__preview">
        <canvas ref={canvasRef} aria-label={`QR code for ${url}`} />
      </div>
    </main>
  );
}
