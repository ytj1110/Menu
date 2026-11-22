// ─────────────────────────────────────────────────────────────
//  Rebrand the whole site by editing this file + menuItems.js
// ─────────────────────────────────────────────────────────────
export const restaurantData = {
  name: "Ember & Oak",
  tagline: "Wood-fired kitchen and burger house",
  description:
    "Smash burgers, stone-baked pizza and slow-cooked sandwiches, made fresh to order over real fire. Come hungry, stay for dessert.",
  logo: "/logo.svg",
  heroImage:
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80",

  // Country code + number, digits only (no + or spaces)
  whatsappNumber: "201022340915",
  phone: "+20 100 000 0000",

  address: "12 Nile Corniche, Zamalek, Cairo, Egypt",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Zamalek%2C+Cairo%2C+Egypt",

  hoursSummary: "Open daily from 12 PM",
  hours: [
    { days: "Saturday – Thursday", time: "12:00 PM – 1:00 AM" },
    { days: "Friday", time: "2:00 PM – 2:00 AM" },
  ],

  socials: [
    { platform: "instagram", url: "https://instagram.com/yourrestaurant" },
    { platform: "facebook", url: "https://facebook.com/yourrestaurant" },
    { platform: "tiktok", url: "https://tiktok.com/@yourrestaurant" },
  ],

  // The deployed menu address. The QR generator encodes this.
  menuUrl: "https://your-menu.example.com",

  currency: "EGP",
  orderGreeting: "Hello Ember & Oak! I'd like to order:",

  // Brand colors (applied as CSS variables at runtime)
  theme: {
    charcoal: "#1f1b18",
    charcoalSoft: "#2b2622",
    cream: "#f6efe3",
    creamDeep: "#ebe1d0",
    accent: "#c69443",
    accentStrong: "#8a5a14",
  },
};
