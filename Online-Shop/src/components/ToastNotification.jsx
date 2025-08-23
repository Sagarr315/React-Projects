// src/components/ToastNotification.jsx
import { useEffect } from "react";

const ToastNotification = ({ message, onClose }) => {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        onClose(); // auto-hide after 3s
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="toast-notification">
      {message}
    </div>
  );
};

export default ToastNotification;
