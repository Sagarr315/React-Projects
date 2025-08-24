import { useWishlist } from "../context/WishlistContext";
import WishlistItem from "../components/WishlistItem";

const WishlistPage = () => {
  const { wishlist } = useWishlist();

  return (
    <div>
      <h2>My Wishlist ❤️</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty 🖤</p>
      ) : (
        wishlist.map((product) => (
          <WishlistItem key={product.id} product={product} />
        ))
      )}
    </div>
  );
};

export default WishlistPage;
