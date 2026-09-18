// src/components/Testimonials.jsx
import React, { useState } from "react";

const TESTIMONIALS = [
  {
    id: 1,
    name: "María González",
    location: "Cliente habitual",
    avatar: "/images/avatars/user-01.jpg",
    text: "El mejor flat white de la zona. Los baristas saben lo que hacen y el ambiente para trabajar con el portátil es inmejorable. Vengo 3 veces por semana.",
  },
  {
    id: 2,
    name: "Carlos Ruiz",
    location: "Google Reviews",
    avatar: "/images/avatars/user-02.jpg",
    text: "Descubrí este sitio por casualidad y ya es mi cafetería de referencia. La tarta de queso sin azúcar es espectacular y el café de filtro cambia cada semana. 10/10.",
  },
  {
    id: 3,
    name: "Ana Martín",
    location: "Instagram",
    avatar: "/images/avatars/user-03.jpg",
    text: "Me encanta que tuesten su propio café. Se nota la frescura en cada sorbo. Los cruasanes de mantequilla los hornean cada mañana y huelen a gloria. Mi lugar favorito.",
  },
  {
    id: 4,
    name: "@usuario_real_instagram",
    location: "Instagram",
    avatar: "/images/avatars/real-user-01.jpg", 
    text: "¡El mejor café de la ciudad! ☕️ El ambiente es increíble y los croissants son de otro mundo. ¡Volveré seguro!"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
         <div className="section-header text-center">
           <h3 className="section-subtitle">Lo que dicen nuestros clientes</h3>
         </div>

        <div className="testimonials-slider">
          {/* Renderizamos el testimonio activo */}
          <div className="testimonial-slide fade-in" key={activeIndex}>
            <div className="testimonial-author">
              <img
                src={TESTIMONIALS[activeIndex].avatar}
                alt={TESTIMONIALS[activeIndex].name}
                className="testimonial-avatar"
              />
              <div className="testimonial-cite">
                <strong>{TESTIMONIALS[activeIndex].name}</strong>
                <span>{TESTIMONIALS[activeIndex].location}</span>
              </div>
            </div>
            <p className="testimonial-text">
              "{TESTIMONIALS[activeIndex].text}"
            </p>
          </div>

          {/* Puntos de navegación (Pagination) */}
          <div className="testimonial-dots">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === activeIndex ? "active" : ""}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
