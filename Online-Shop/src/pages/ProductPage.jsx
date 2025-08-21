import { useEffect, useState, useMemo } from "react";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import SortDropdown from "../components/SortDropdown";
import FilterSidebar from "../components/FilterSidebar";
import Pagination from "../components/Pagination";

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(""); // for filter
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 6;

  // Fetch products from DummyJSON
  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("https://dummyjson.com/products?limit=100");
      const data = await res.json();
      setProducts(data.products);
    }
    fetchProducts();
  }, []);

  // Extract unique categories from products
  const categories = useMemo(() => {
    const allCategories = products.map((p) => p.category);
    return [...new Set(allCategories)];
  }, [products]);

  // Filtering + Searching + Sorting
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // filter by category
    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // search
    if (searchTerm) {
      result = result.filter((p) =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // sorting
    if (sortOption === "low-high") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === "high-low") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortOption === "az") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOption === "za") {
      result.sort((a, b) => b.title.localeCompare(a.title));
    }

    return result;
  }, [products, selectedCategory, searchTerm, sortOption]);

  // Pagination
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  
  return (
    <div className="container mt-4">
      <div className="row">
        {/* Sidebar for filter */}
        <div className="col-md-3">
          <FilterSidebar
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>

        {/* Main content */}
        <div className="col-md-9">
          <div className="d-flex justify-content-between mb-3">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <SortDropdown
              sortOption={sortOption}
              setSortOption={setSortOption}
            />
          </div>
          {/* Products */}
          <div className="row">
            {currentProducts.map((product) => (
              <div key={product.id} className="col-md-4 mb-4">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          {/* Pagination */}
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
