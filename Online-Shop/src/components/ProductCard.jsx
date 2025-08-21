const ProductCard = ({ product }) => {
  return (
    <div className="card h-100">
      <img src={product.thumbnail} className="card-img-top" alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
