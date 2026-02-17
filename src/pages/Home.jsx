import { Link } from "react-router-dom";

const featuredCategories = [
  { id: 1, name: "Fruits", image: "https://png.pngtree.com/png-clipart/20241109/original/pngtree-beautiful-various-fruits-item-and-healthy-clipart-png-image_16788969.png" },
  { id: 2, name: "Vegetables", image: "https://ezaccess.com/cdn/shop/articles/vegetables-fruits-white.jpg?v=1750188045" },
  { id: 3, name: "Dairy", image: "https://www.onegreenplanet.org/wp-content/uploads/2018/05/shutterstock_412394602-e1684191591876.jpg" },
  { id: 4, name: "Bakery", image: "https://www.lindasbakery.com/wp-content/uploads/2023/08/The-Secret-to-Making-Bakery-Quality-Bread_049202920.jpg" },
];

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero">
<div className="hero-content">
  <div>
    <h1>Fresh Groceries, Delivered To Your Door</h1>
    <p>Shop fresh fruits, vegetables, dairy, and more from the comfort of your home.</p>
    <Link to="/shop" className="btn-primary">Start Shopping</Link>
  </div>
  <img
    src="https://img.freepik.com/premium-vector/logo-fresh-grocery-with-basket-vegetables_763064-309.jpg"
    alt="Fresh Groceries"
    className="hero-image"
  />
</div>
      </section>

      <section className="categories">
        <h2>Featured Categories</h2>
        <div className="categories-grid">
          {featuredCategories.map(category => (
            <Link to="/shop" key={category.id} className="category-card">
              <img src={category.image} alt={category.name} />
              <p>{category.name}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="promo">
        <h3>Free Delivery on Orders Over $50!</h3>
        <p>Enjoy fresh groceries delivered right to your doorstep with no extra cost on orders over $50.</p>
      </section>
    </div>
  );
};

export default Home;
