import { useState } from "react";

function ProductImageZoom({ images = [] }) {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div>
      <div className="mb-3">
        <img
          src={mainImage}
          alt="Product"
          className="img-fluid border rounded"
          style={{ maxHeight: "400px", objectFit: "contain" }}
        />
      </div>
      <div className="d-flex gap-2 overflow-auto">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumb ${index}`}
            className="img-thumbnail"
            style={{ width: "60px", cursor: "pointer" }}
            onClick={() => setMainImage(img)}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductImageZoom;
