import { useEffect, useState, useContext, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { CartContext } from "../context/CartContext";

const sortOptions = [
  { value: "default", label: "Sort: Default" },
  { value: "name-asc", label: "Name: A → Z" },
  { value: "name-desc", label: "Name: Z → A" },
  { value: "price-asc", label: "Price: Low → High" },
  { value: "price-desc", label: "Price: High → Low" },
];

const Shop = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);
  const [searchParams, setSearchParams] = useSearchParams();

  const activeCategory = searchParams.get("category") || "All";
  const sortBy = searchParams.get("sort") || "default";

  useEffect(() => {
    fetch("http://localhost:5174/products")
      .then((res) => {
        if (!res.ok) throw new Error(`API error: ${res.status}`);
        return res.json();
      })
      .then((data) => setProducts(Array.isArray(data) ? data : []))
      .catch((err) => console.error(err));
  }, []);

  // Build categories dynamically so Pantry/Beverages show automatically
  const categories = useMemo(() => {
    const unique = Array.from(new Set(products.map((p) => p.category))).filter(
      Boolean
    );
    unique.sort((a, b) => String(a).localeCompare(String(b)));
    return ["All", ...unique];
  }, [products]);

  const handleFilter = (category) => {
    const next = new URLSearchParams(searchParams);

    if (category === "All") next.delete("category");
    else next.set("category", category);

    setSearchParams(next);
  };

  const handleSortChange = (value) => {
    const next = new URLSearchParams(searchParams);

    if (value === "default") next.delete("sort");
    else next.set("sort", value);

    setSearchParams(next);
  };

  const visibleProducts = useMemo(() => {
    // 1) filter
    const base =
      activeCategory === "All"
        ? products
        : products.filter((p) => p.category === activeCategory);

    // 2) sort (copy to avoid mutating arrays)
    const copy = base.slice();

    switch (sortBy) {
      case "name-asc":
        return copy.sort((a, b) => a.name.localeCompare(b.name));
      case "name-desc":
        return copy.sort((a, b) => b.name.localeCompare(a.name));
      case "price-asc":
        return copy.sort((a, b) => Number(a.price) - Number(b.price));
      case "price-desc":
        return copy.sort((a, b) => Number(b.price) - Number(a.price));
      default:
        return copy; // default order from API
    }
  }, [products, activeCategory, sortBy]);

  return (
    <div className="shop-page">
      <div
        className="shop-controls"
        style={{
          display: "flex",
          gap: 12,
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          marginBottom: 12,
        }}
      >
        <div className="filter-buttons">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleFilter(cat)}
              className={activeCategory === cat ? "active-filter" : ""}
              type="button"
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="sort-control">
          <select value={sortBy} onChange={(e) => handleSortChange(e.target.value)}>
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="product-grid">
        {visibleProducts.length > 0 ? (
          visibleProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default Shop;