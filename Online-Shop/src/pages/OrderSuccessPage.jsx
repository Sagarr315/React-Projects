import { Link } from "react-router-dom";
import "../css/OrderSuccessPage.css"

const OrderSuccessPage = () => {
  return (
    <div className="order-success">
      <h2>Order Placed Successfully!</h2>
      <p>Your order has been confirmed. Thank you for shopping with us.</p>
      <Link to="/orders">View Orders</Link>
    </div>
  );
};

export default OrderSuccessPage;
