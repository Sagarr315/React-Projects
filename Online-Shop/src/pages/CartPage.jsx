import { useCart } from "../context/CartContext";

function CartPage() {
  const { cart, removeFromCart } = useCart();

  if (cart.length === 0) {
    return <div className="text-center mt-5">🛒 Your cart is empty</div>;
  }

  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>
      <ul className="list-group">
        {cart.map((item) => (
          <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            <span>{item.title} - ${item.price}</span>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CartPage;
