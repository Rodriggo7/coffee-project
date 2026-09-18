// src/components/About.jsx
import React from "react";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container about-container">
        {/* COLUMNA IZQUIERDA: Título e Imagen */}
        <div className="about-visuals">
          <div className="section-header">
            <span className="section-number">01.</span>
            <h2 className="section-title">Nuestra Historia</h2>
          </div>

           <div className="about-img-wrapper">
             {/* Asegúrate de que esta imagen exista en public/images/ */}
             <img src="/images/about-pic-primary.jpg" alt="Nuestra historia" />
           </div>
        </div>

        {/* COLUMNA DERECHA: Texto descriptivo */}
         <div className="about-text">
           <p className="lead">
             Lounge Café nació en 2019 como un pequeño rincón en el barrio, 
             con la idea simple de servir café de especialidad honesto en un 
             espacio donde apetece quedarse.
           </p>

           <p>
             Seleccionamos granos de origen trazable, tostados en lotes pequeños, 
             y preparamos cada taza con esmero: espressos, filtrados y bebidas 
             de autor que cambian con la estación. La pastelería sale cada mañana 
             de nuestro obrador: cruasanes de mantequilla, muffins de fruta de 
             temporada y tartas sin azúcares refinados.
           </p>

           <p>
             Más que café, buscamos ser el "tercer lugar" del vecindario: buena 
             música, enchufes para trabajar, y una terraza que invita a alargar 
             la sobremesa. Gracias por elegirnos cada día.
           </p>
         </div>
      </div>
    </section>
  );
};

export default About;
