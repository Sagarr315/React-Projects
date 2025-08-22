function ToastNotification({ message }) {
  return (
    <div
      className="toast show position-fixed top-0 end-0 m-3"
      style={{ zIndex: 9999 }}
    >
      <div className="toast-body">{message}</div>
    </div>
  );
}

export default ToastNotification;
