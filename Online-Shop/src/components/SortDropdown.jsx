function SortDropdown({ sortOption, setSortOption }) {
  return (
    <div className="mb-3">
      <select
        className="form-select"
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
      >
        <option value="">Sort By</option>
        <option value="low-high">Price: Low to High</option>
        <option value="high-low">Price: High to Low</option>
        <option value="az">Name: A → Z</option>
        <option value="za">Name: Z → A</option>
      </select>
    </div>
  );
}

export default SortDropdown;
