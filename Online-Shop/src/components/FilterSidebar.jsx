function FilterSidebar({ categories=[], selectedCategory, setSelectedCategory }) {
  return (
    <div className="p-3 border rounded mb-3">
      <h5>Filter by Category</h5>
      <ul className="list-unstyled">
        <li>
          <button
            className={`btn btn-sm w-100 mb-2 ${
              selectedCategory === "" ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => setSelectedCategory("")}
          >
            All
          </button>
        </li>
        {categories.map((cat, index) => (
          <li key={index}>
            <button
              className={`btn btn-sm w-100 mb-2 ${
                selectedCategory === cat ? "btn-primary" : "btn-outline-primary"
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilterSidebar;
