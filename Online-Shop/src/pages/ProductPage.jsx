import React, { useEffect, useState } from "react";

function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log("API Data:", data);
        setProducts(data);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, []);

  return (
    <div className="p-5 text-center">
      <h1>Products Page</h1>
    </div>
  );
}

export default ProductsPage;
