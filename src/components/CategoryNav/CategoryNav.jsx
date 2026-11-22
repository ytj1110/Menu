import "./CategoryNav.css";

export default function CategoryNav({ categories, active, onSelect }) {
  return (
    <nav className="catnav" aria-label="Menu categories">
      <ul className="catnav__list">
        {categories.map((c) => (
          <li key={c.id}>
            <button
              type="button"
              className={`catnav__btn ${active === c.id ? "is-active" : ""}`}
              aria-pressed={active === c.id}
              onClick={() => onSelect(c.id)}
            >
              {c.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
