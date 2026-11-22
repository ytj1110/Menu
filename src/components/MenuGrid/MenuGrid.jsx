import MenuCard from "../MenuCard/MenuCard.jsx";
import "./MenuGrid.css";

export default function MenuGrid({ items, categories, onOpen, onReset }) {
  if (items.length === 0) {
    return (
      <div className="grid-empty">
        <h3>No dishes match your search</h3>
        <p>Try a different name, or show the full menu again.</p>
        <button type="button" className="btn btn-primary" onClick={onReset}>Show all items</button>
      </div>
    );
  }
  const labelOf = (id) => categories.find((c) => c.id === id)?.label ?? id;

  return (
    <ul className="grid">
      {items.map((item) => (
        <li key={item.id}>
          <MenuCard item={item} categoryLabel={labelOf(item.category)} onOpen={onOpen} />
        </li>
      ))}
    </ul>
  );
}
