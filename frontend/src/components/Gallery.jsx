// src/components/Gallery.jsx
import React from "react";
import { useState } from "react";

const IMAGES = [
  "/images/gallery/gallery-01.jpg",
  "/images/gallery/gallery-02.jpg",
  "/images/gallery/gallery-03.jpg",
  "/images/gallery/gallery-04.jpg",
  "/images/gallery/gallery-05.jpg",
  "/images/gallery/gallery-06.jpg",
  "/images/gallery/gallery-07.jpg",
  "/images/gallery/gallery-08.jpg",
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-number">03.</span>
          <h2 className="section-title">Galería</h2>
        </div>

        <div className="gallery-grid">
          {IMAGES.map((imgSrc, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => setSelectedImage(imgSrc)}
            >
              <div className="gallery-thumb">
                <img
                  src={imgSrc}
                  alt={`Imagen de galería ${index + 1}`}
                  loading="lazy"
                />
                {/* Overlay al pasar el mouse */}
                <div className="gallery-overlay">
                  <span>+</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* LIGHTBOX (MODAL) - Se muestra solo si selectedImage tiene algo */}
        {selectedImage && (
          <div className="lightbox" onClick={() => setSelectedImage(null)}>
            <div className="lightbox-content">
              <img src={selectedImage} alt="Vista ampliada" />
              <button className="close-btn">✕</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
