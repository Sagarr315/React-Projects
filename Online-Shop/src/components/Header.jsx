import { Link } from "react-router-dom";
import "./Header.css";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";

function Header() {
  const { theme, toggleTheme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg shadow-sm">
        <div className="container d-flex align-items-center">
          {/* Logo (always left) */}
          <Link className="navbar-brand fw-bold custom-brand" to="/">
            <i className="bi bi-bag-check-fill me-2"></i>OnlineShop
          </Link>

          {/* Icons + Hamburger (only md/sm, aligned right) */}
          <div className="d-flex align-items-center d-lg-none ms-auto">
            {/* Icons first (to the LEFT of hamburger) */}
            <ul className="navbar-nav flex-row me-2">
              <li className="nav-item me-2">
                <Link className="nav-link custom-icon" to="/cart">
                  <i className="bi bi-cart fs-5"></i>
                </Link>
              </li>
              <li className="nav-item me-2">
                <Link className="nav-link custom-icon" to="/wishlist">
                  <i className="bi bi-heart fs-5"></i>
                </Link>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link custom-icon btn border-0 bg-transparent"
                  onClick={toggleTheme}
                >
                  {theme === "light" ? (
                    <i className="bi bi-moon fs-5"></i>
                  ) : (
                    <i className="bi bi-sun fs-5"></i>
                  )}
                </button>
              </li>
            </ul>

            {/* Hamburger on the RIGHT of icons */}
            <button
              className="navbar-toggler custom-toggler"
              type="button"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          {/* Links + Search + Icons (for lg and above) */}
          <div className="collapse navbar-collapse d-none d-lg-flex" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link custom-nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link custom-nav-link" to="/productpage">
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link custom-nav-link" to="/orders">
                  Orders
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link custom-nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>

            {/* Search Bar (only lg and above) */}
            <form className="d-none d-lg-flex me-3">
              <input
                className="form-control custom-search"
                type="search"
                placeholder="Search products..."
                aria-label="Search"
              />
              <button className="btn custom-search-btn" type="submit">
                <i className="bi bi-search"></i>
              </button>
            </form>

            {/* Icons for lg and above */}
            <ul className="navbar-nav d-none d-lg-flex">
              <li className="nav-item">
                <Link className="nav-link custom-icon" to="/cart">
                  <i className="bi bi-cart fs-5"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link custom-icon" to="/wishlist">
                  <i className="bi bi-heart fs-5"></i>
                </Link>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link custom-icon btn border-0 bg-transparent"
                  onClick={toggleTheme}
                >
                  {theme === "light" ? (
                    <i className="bi bi-moon fs-5"></i>
                  ) : (
                    <i className="bi bi-sun fs-5"></i>
                  )}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Sidebar for mobile */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setSidebarOpen(false)}>
          &times;
        </button>
        <ul className="list-unstyled">
          <li>
            <Link to="/" onClick={() => setSidebarOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/productpage" onClick={() => setSidebarOpen(false)}>Shop</Link>
          </li>
          <li>
            <Link to="/orders" onClick={() => setSidebarOpen(false)}>Orders</Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setSidebarOpen(false)}>Contact</Link>
          </li>
        </ul>
      </div>

      {/* Overlay (click to close) */}
      {sidebarOpen && <div className="overlay" onClick={() => setSidebarOpen(false)}></div>}
    </div>
  );
}

export default Header;
