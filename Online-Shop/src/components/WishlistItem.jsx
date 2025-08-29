import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import "../css/WishlistItem.css"

const WishlistItem = ({ product }) => {
  const { removeFromWishlist, moveToCart } = useWishlist();
  const { addToCart } = useCart();

  // Handle both product.image and product.images
  const imageSrc = product.image
    ? product.image
    : product.images
    ? (Array.isArray(product.images) ? product.images[0] : product.images)
    : "/images/placeholder.jpg"; // fallback

  return (
    <div className="wishlist-item">
      <img src={imageSrc} alt={product.title} width="120" />
      <h4>{product.title}</h4>
      <p>${product.price}</p>

      <button onClick={() => removeFromWishlist(product.id)}>
        Remove
      </button>
      <button onClick={() => moveToCart(product, addToCart)}>
        Move to Cart
      </button>
    </div>
  );
};

export default WishlistItem;
