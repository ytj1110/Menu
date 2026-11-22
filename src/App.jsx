import { useEffect, useState } from "react";
import MenuPage from "./pages/MenuPage.jsx";
import QRGenerator from "./components/QRGenerator/QRGenerator.jsx";
import { restaurantData } from "./data/restaurantData";

// Applies the brand colors from restaurantData.theme as CSS variables
function applyTheme(theme) {
  const root = document.documentElement.style;
  root.setProperty("--charcoal", theme.charcoal);
  root.setProperty("--charcoal-soft", theme.charcoalSoft);
  root.setProperty("--cream", theme.cream);
  root.setProperty("--cream-deep", theme.creamDeep);
  root.setProperty("--accent", theme.accent);
  root.setProperty("--accent-strong", theme.accentStrong);
}

export default function App() {
  // The owner-only QR tool lives at  /#qr  and is never linked from the public menu.
  const [isOwnerView, setIsOwnerView] = useState(window.location.hash === "#qr");

  useEffect(() => {
    applyTheme(restaurantData.theme);
    document.title = `${restaurantData.name} | Menu`;
  }, []);

  useEffect(() => {
    const onHash = () => setIsOwnerView(window.location.hash === "#qr");
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return isOwnerView ? <QRGenerator /> : <MenuPage />;
}
