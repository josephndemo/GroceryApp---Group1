import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useContext(CartContext);

  const handleChange = (e) => {
    const newQty = parseInt(e.target.value);
    if (newQty >= 1) {
      updateQuantity(item.id, newQty);
    }
  };

  return (
    <div className="cart-item">
      {/* Product Image */}
      <img src={item.image} alt={item.name} className="cart-item-img" />

      {/* Product Info */}
      <div className="cart-item-info">
        <h3>{item.name}</h3>
        <p>${item.price.toFixed(2)}</p>

        {/* Quantity */}
        <input
          type="number"
          min="1"
          value={item.quantity}
          onChange={handleChange}
        />
      </div>

      {/* Remove Button */}
      <button
        className="cart-item-remove"
        onClick={() => removeFromCart(item.id)}
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
