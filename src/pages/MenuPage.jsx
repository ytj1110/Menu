import { useMemo, useState } from "react";
import { LuSearch, LuX } from "react-icons/lu";
import Header from "../components/Header/Header.jsx";
import Hero from "../components/Hero/Hero.jsx";
import CategoryNav from "../components/CategoryNav/CategoryNav.jsx";
import MenuGrid from "../components/MenuGrid/MenuGrid.jsx";
import ItemModal from "../components/ItemModal/ItemModal.jsx";
import Footer from "../components/Footer/Footer.jsx";
import { restaurantData } from "../data/restaurantData";
import { categories, menuItems } from "../data/menuItems";
import "./MenuPage.css";

export default function MenuPage() {
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);

  const visibleItems = useMemo(() => {
    const q = query.trim().toLowerCase();
    return menuItems.filter(
      (item) =>
        (category === "all" || item.category === category) &&
        (!q || item.name.toLowerCase().includes(q))
    );
  }, [category, query]);

  const reset = () => { setCategory("all"); setQuery(""); };
  const labelOf = (id) => categories.find((c) => c.id === id)?.label ?? id;

  return (
    <>
      <Header data={restaurantData} />
      <main>
        <Hero data={restaurantData} />

        <section id="menu" className="menu" aria-labelledby="menu-title">
          <div className="menu__toolbar">
            <div className="container menu__toolbar-inner">
              <h2 id="menu-title" className="visually-hidden">Menu</h2>
              <div className="menu__search">
                <LuSearch aria-hidden="true" />
                <label htmlFor="menu-search" className="visually-hidden">Search dishes by name</label>
                <input
                  id="menu-search"
                  type="search"
                  placeholder="Search dishes by name"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  autoComplete="off"
                />
                {query && (
                  <button type="button" onClick={() => setQuery("")} aria-label="Clear search"><LuX aria-hidden="true" /></button>
                )}
              </div>
              <CategoryNav categories={categories} active={category} onSelect={setCategory} />
            </div>
          </div>

          <div className="container menu__content">
            <p className="menu__count" role="status" aria-live="polite">
              {visibleItems.length} {visibleItems.length === 1 ? "dish" : "dishes"}
            </p>
            <MenuGrid items={visibleItems} categories={categories} onOpen={setSelected} onReset={reset} />
          </div>
        </section>
      </main>
      <Footer data={restaurantData} />

      {selected && (
        <ItemModal item={selected} categoryLabel={labelOf(selected.category)} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
