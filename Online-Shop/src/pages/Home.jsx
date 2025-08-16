import "./Home.css";

function Home() {
  return (
    <div className="home m-5">
      {/* Banner Section */}
      <section className="banner text-center">
        <h1>Welcome to OnlineShop</h1>
        <p>Best Deals Everyday. Shop Now!</p>
        <button className="btn btn-accent mt-3">Shop Now</button>
      </section>
      {/* Categories Section */}
      <section className="categories container text-center">
        <h2>Shop by Category</h2>
        <div className="row mt-4 justify-content-center">
          <div className="col-md-2 col-5 category-card">Men</div>
          <div className="col-md-2 col-5 category-card">Women</div>
          <div className="col-md-2 col-5 category-card">Electronics</div>
          <div className="col-md-2 col-5 category-card">Home</div>
        </div>
      </section>
      {/* Featured Products Section */}
      <section className="featured text-center">
        <h2>Featured Products</h2>
        <div className="row mt-4 justify-content-center">
          <div className="col-md-3 col-10 product-card">
            <img
              src=".."
              alt="Product 1"
              className="img-fluid"
            />
            <h3>Product 1</h3>
            <p>$99.99</p>
          </div>
          <div className="col-md-3 col-10 product-card">
            <img
              src=".."
              alt="Product 2"
              className="img-fluid"
            />
            <h3>Product 2</h3>
            <p>$149.99</p>
          </div>
          <div className="col-md-3 col-10 product-card">
            <img
              src=".."
              alt="Product 3"
              className="img-fluid"
            />
            <h3>Product 3</h3>
            <p>$79.99</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
