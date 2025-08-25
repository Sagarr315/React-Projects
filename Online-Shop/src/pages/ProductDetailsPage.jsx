import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductImageZoom from "../components/ProductImageZoom";
import ToastNotification from "../components/ToastNotification";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

function ProductDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Hooks at top
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  const [product, setProduct] = useState(null);
  const [toast, setToast] = useState(null);

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
    if (!product) return;
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: 1, // start with 1
    });
    setToast("Product added to cart!");
    setTimeout(() => setToast(null), 3000);
  };

  const handleAddToWishlist = () => {
    if (!product) return;
    addToWishlist(product);
    setToast("Product added to wishlist!");
    setTimeout(() => setToast(null), 3000);
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
          <button
            className="btn btn-outline-danger mt-3 ms-2"
            onClick={handleAddToWishlist}
          >
            ❤️ Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
