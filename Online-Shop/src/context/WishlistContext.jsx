import { createContext, useContext, useState } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  // Add item to wishlist
  const addToWishlist = (product) => {
    const exists = wishlist.find((item) => item.id === product.id);
    if (!exists) {
      setWishlist([...wishlist, product]);
    }
  };

  // Remove item from wishlist
  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  // Move item from wishlist → cart
  const moveToCart = (product, addToCart) => {
    removeFromWishlist(product.id);
    addToCart(product);
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist, moveToCart }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
