// src/components/Pagination.js
import React from "react";

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  return (
    <nav>
      <ul className="pagination justify-content-center mt-3">
        {[...Array(totalPages)].map((_, index) => (
          <li
            key={index}
            className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
          >
            <button
              className="page-link"
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
