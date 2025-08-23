const Cartitem = ({ item, updateQuantity, removeItem }) => {
  return (
    <div className="card mb-3 p-3 shadow-sm">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h5>{item.name}</h5>
          <p>${item.price.toFixed(2)}</p>
        </div>

        <div className="d-flex align-items-center">
          {/* Quantity control */}
          <button
            className="btn btn-sm btn-outline-secondary"
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
          >
            -
          </button>
          <span className="mx-2">{item.quantity}</span>
          <button
            className="btn btn-sm btn-outline-secondary"
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
          >
            +
          </button>

          {/* Remove button */}
          <button
            className="btn btn-sm btn-danger ms-3"
            onClick={() => removeItem(item.id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cartitem;
