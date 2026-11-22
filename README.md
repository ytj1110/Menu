# Restaurant Digital Menu Template

React + Vite. Run: `npm install && npm run dev`  |  Build: `npm run build`

## Rebrand for a new client
1. `src/data/restaurantData.js`: name, logo, hero image, WhatsApp number (digits only, with country code), hours, address, socials, menu URL, brand colors.
2. `src/data/menuItems.js`: categories and items (price in EGP, badge, availability, optional `sizes`).
3. Put logo/images in `public/` and reference them as `/logo.svg`, `/images/burger.jpg`.

## QR code (owner only)
Open `https://your-menu-url/#qr`. It is not linked from the public page. Set `menuUrl` in restaurantData.js to the deployed address first.
