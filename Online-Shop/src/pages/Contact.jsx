function Contact() {
  return (
    <div className="contact-page container py-5">
      {/* Page Heading */}
      <h1 className="mb-4 fw-bold text-center">Contact OnlineShop</h1>
      <p className="text-center mb-5">
        Have questions or need assistance? Fill out the form below, and we’ll get back to you as soon as possible.
      </p>

      <div className="row">
        {/* Contact Form */}
        <div className="col-md-7">
          <form className="p-4 border rounded shadow-sm bg-white">
            <div className="mb-3">
              <label className="form-label fw-semibold">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Message</label>
              <textarea
                className="form-control"
                rows="5"
                placeholder="Type your message..."
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="col-md-5 mt-4 mt-md-0">
          <div className="p-4 border rounded shadow-sm bg-light">
            <h4 className="fw-bold mb-3">Our Store</h4>
            <p className="mb-1"><i className="bi bi-geo-alt-fill me-2"></i>India</p>
            <p className="mb-1"><i className="bi bi-telephone-fill me-2"></i> +91 98765 43210</p>
            <p className="mb-3"><i className="bi bi-envelope-fill me-2"></i> support@onlineshop.com</p>

            <h5 className="fw-bold mb-2">Business Hours</h5>
            <p className="mb-0">Mon – Sat: 9 AM – 8 PM</p>
            <p>Sun: Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
