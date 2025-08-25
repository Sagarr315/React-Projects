import { useEffect } from "react";
import "../css/OrderToast.css"; // separate CSS file for styling

const OrderToast = ({ type = "success", message, onClose }) => {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        onClose(); // auto-hide after 3 seconds
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className={`order-toast ${type}`}>
      {message}
    </div>
  );
};

export default OrderToast;
