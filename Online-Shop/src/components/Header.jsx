import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg shadow-sm">
        <div className="container">
          {/* Logo */}
          <Link className="navbar-brand fw-bold custom-brand" to="/">
            <i className="bi bi-bag-check-fill me-2"></i>OnlineShop
          </Link>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggler custom-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Links + Search */}
          <div className="collapse navbar-collapse" id="navbarNav">
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
                <Link className="nav-link custom-nav-link" to="/deals">
                  Deals
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link custom-nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link custom-nav-link" to="/orders">
                  Orders
                </Link>
              </li>
            </ul>

            {/* Search Bar */}
            <form className="d-flex me-3">
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

            {/* Icons */}
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link custom-icon" to="/account">
                  <i className="bi bi-person fs-5"></i>
                </Link>
              </li>
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
                <button className="nav-link custom-icon btn border-0 bg-transparent">
                  <i className="bi bi-sun fs-5"></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
