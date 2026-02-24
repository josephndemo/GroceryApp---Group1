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

      <section className="categories">
        <h2>Featured Categories</h2>

        <div className="categories-grid">
          {featuredCategories.map(category => (
            <Link
              to={`/shop?category=${category.name}`}
              key={category.id}
              className="category-card"
            >
              <img src={category.image} alt={category.name} />
              <p>{category.name}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="promo">
        <h3>Free Delivery on Orders</h3>
        <p>Enjoy fresh groceries delivered right to your doorstep</p>
      </section>

    </div>
  );
};

export default Home;