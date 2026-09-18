// src/components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section id="intro" className="hero-section">
      <div className="container hero-container">
        
        {/* COLUMNA IZQUIERDA: Texto */}
        <div className="hero-content">
            <span className="hero-overline">Bienvenido a</span>
            <h1 className="hero-title">
                Lounge <br /> Cafe
            </h1>
            <p className="hero-desc">
                Un espacio acogedor donde disfrutar del mejor café, buena compañía y música en vivo. Ven y relájate.
            </p>

            {/* Redes Sociales */}
            <ul className="hero-social">
                <li><a href="#0">FB</a></li>
                <li><a href="https://www.instagram.com/latramaespacio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">IG</a></li>
                <li><a href="#0">TW</a></li>
            </ul>
        </div>

        {/* COLUMNA DERECHA: Imágenes */}
        <div className="hero-images">
            {/* Imagen Principal (Grande) */}
             <div className="img-wrapper primary">
                 <img src="/images/intro-pic-primary.jpg" alt="Ambiente de café" />
             </div>
             
             {/* Imagen Secundaria (Pequeña/Superpuesta) */}
             <div className="img-wrapper secondary">
                 <img src="/images/intro-pic-secondary.jpg" alt="Detalle de café" />
             </div>
        </div>

      </div>
      
      {/* Indicador de Scroll (Decorativo) */}
       <div className="scroll-indicator">
          <span>Desliza hacia abajo</span>
          <div className="arrow">↓</div>
       </div>

    </section>
  );
};

export default Hero;