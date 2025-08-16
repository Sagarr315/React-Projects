import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer pt-4 mt-5">
      <div className="container">
        <div className="row">
          {/* About */}
          <div className="col-md-4">
            <h4 className="footer-heading">OnlineShop</h4>
            <p className="footer-text">
              Your trusted online store for quality products at great prices.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="list-unstyled fw-semibold">
              <li>
                <Link to="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="footer-link">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/deals" className="footer-link">
                  Deals
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="col-md-4">
            <h4 className="footer-heading">Follow Us</h4>
            <a href="#" className="social-icon me-3">
              <i className="bi bi-facebook fs-4"></i>
            </a>
            <a href="#" className="social-icon me-3">
              <i className="bi bi-instagram fs-4"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="bi bi-twitter fs-4"></i>
            </a>
          </div>
        </div>

        <hr className="footer-divider" />
        <p className="footer-copyright text-center mb-0">
          &copy; {new Date().getFullYear()} OnlineShop. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
