import { useOrders } from "../context/OrderContext";

const OrdersPage = () => {
  const { orders } = useOrders();

  if (orders.length === 0) {
    return <h3>No orders yet.</h3>;
  }

  return (
    <div className="orders-page">
      <h2>My Orders</h2>
      {orders.map((order) => (
        <div key={order.id} className="order-card">
          <h4>Order #{order.id}</h4>
          <p><strong>Name:</strong> {order.name}</p>
          <p><strong>Address:</strong> {order.address}</p>
          <p><strong>Email:</strong> {order.email}</p>
          <p><strong>Total:</strong> ${order.total}</p>
          <h5>Items:</h5>
          <ul>
            {order.items.map((item, idx) => (
              <li key={idx}>
                {item.title} - ${item.price}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default OrdersPage;
