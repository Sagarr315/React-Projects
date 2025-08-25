
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useOrders } from "../context/OrderContext";
import OrderToast from "../components/OrderToast"; // <-- import toast
import "../css/OrderToast.css";
import "../css/CheckoutPage.css";

const CheckoutPage = () => {
  const { cart, clearCart } = useCart(); // <-- use "cart" from context
  const { placeOrder } = useOrders();
  const [toast, setToast] = useState(null);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.address || !formData.email) {
      setToast({ type: "error", message: "Please fill all fields" });
      return;
    }

    if (!cart || cart.length === 0) {
      setToast({ type: "error", message: "Your cart is empty!" });
      return;
    }

    const newOrder = {
      id: Date.now(),
      ...formData,
      items: cart,
      total: cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0),
    };

    placeOrder(newOrder);
    clearCart();

    setToast({ type: "success", message: "Order placed successfully!" });
    setFormData({ name: "", address: "", email: "" });

    setTimeout(() => navigate("/order-success"), 1500);
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>

      {toast && (
        <OrderToast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}

      <form onSubmit={handleSubmit} className="checkout-form">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-primary">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
