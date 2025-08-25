import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "../css/CartPage.css"; 

function CartPage() {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="text-center mt-5 empty-cart">
        <h3>🛒 Your cart is empty</h3>
        <p>Add some products to see them here.</p>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Your Shopping Cart</h2>

      <div className="row">
        {cart.map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <div className="card shadow-lg h-100 cart-card">
              {/* Product Image */}
              <img
                src={item.image}
                className="card-img-top cart-img"
                alt={item.title}
              />

              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{item.title}</h5>

                {item.description && (
                  <p className="card-text text-muted small">
                    {item.description.slice(0, 60)}...
                  </p>
                )}

                <h6 className="mt-auto fw-bold">Price: ${item.price}</h6>

                {/*  Buttons (Remove + Buy Now) */}
                <div className="d-flex justify-content-between mt-3">
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                  <button
                    className="btn btn-success btn-sm"
                    onClick={() => navigate(`/checkout/${item.id}`)} 
                    //  Pass product id to checkout
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CartPage;
