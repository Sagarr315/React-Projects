import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductImageZoom from "../components/ProductImageZoom";
import ToastNotification from "../components/ToastNotification";
import { useNavigate } from "react-router-dom";

function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [toast, setToast] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    }
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    // Here you can integrate localStorage cart logic
    setToast("Product added to cart!");
    setTimeout(() => setToast(null), 3000); // auto-hide after 3s
  };

  if (!product) return <div className="text-center mt-5">Loading...</div>;

  return (
    <div className="container mt-4">
        <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>
        ← Back
      </button>
      {toast && <ToastNotification message={toast} />}
      <div className="row">
        {/* Product Images */}
        <div className="col-md-6">
          <ProductImageZoom images={product.images} />
        </div>

        {/* Product Info */}
        <div className="col-md-6">
          <h2>{product.title}</h2>
          <p className="text-muted">{product.category}</p>
          <p>{product.description}</p>
          <h4>${product.price}</h4>
          <p>Rating: {product.rating} ⭐</p>
          <p>Stock: {product.stock}</p>
          <button className="btn btn-primary mt-3" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
