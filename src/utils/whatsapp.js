import { restaurantData } from "../data/restaurantData";

const base = (message) =>
  `https://wa.me/${restaurantData.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const generalLink = () =>
  base("Hello! I'd like to ask about your menu.");

export function orderLink({ name, size, price }) {
  const { orderGreeting, currency } = restaurantData;
  const sizePart = size ? ` (${size})` : "";
  return base(`${orderGreeting}\n${name}${sizePart} - ${price} ${currency}`);
}

export const formatPrice = (price) => `${price} ${restaurantData.currency}`;

// Price shown on a card: "From X" when an item has several sizes with different prices
export function displayPrice(item) {
  if (!item.sizes?.length) return formatPrice(item.price);
  const prices = item.sizes.map((s) => s.price);
  const min = Math.min(...prices);
  return min === Math.max(...prices) ? formatPrice(min) : `From ${formatPrice(min)}`;
}
