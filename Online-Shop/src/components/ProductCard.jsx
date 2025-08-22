import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`} className="text-decoration-none">
      <div className="card h-100">
        <img
          src={product.thumbnail}
          className="card-img-top"
          alt={product.title}
        />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">${product.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
