import { useWishlist } from "../context/WishlistContext";
import WishlistItem from "../components/WishlistItem";

const WishlistPage = () => {
  const { wishlist } = useWishlist();

  return (
    <div>
      <h2
        style={{
          textAlign: "center",
          margin: "2rem 0",
          fontSize: "1.8rem",
          color: "#3A3226", // rich brown for light mode
        }}
      >
        My Wishlist ❤️
      </h2>
      <div className="wishlist-container">
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty 🖤</p>
      ) : (
        wishlist.map((product) => (
          <WishlistItem key={product.id} product={product} />
        ))
      )}
      </div>
    </div>
  );
};

export default WishlistPage;
