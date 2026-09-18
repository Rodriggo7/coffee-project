// src/components/Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
// El CSS ya se carga desde main.jsx -> index.css, no hace falta importarlo aquí

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Fíjate que aquí usamos "site-header", igual que en tu index.css nuevo
    <header className="site-header">
      <div className="container header-content">
        {/* 1. Logo */}
        <div className="logo">
          {/* Asegúrate de que la ruta sea correcta */}
          <img src="/images/logo.svg" alt="Lounge Cafe" width="120" />
        </div>

        {/* 2. Navegación (Desktop + Móvil) */}
        {/* La clase 'open' se activa con el estado para móviles */}
        <nav className={`main-nav ${isOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="#intro" onClick={() => setIsOpen(false)}>
                Intro
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setIsOpen(false)}>
                Nosotros
              </a>
            </li>
            <li>
              <a href="#menu" onClick={() => setIsOpen(false)}>
                Menu
              </a>
            </li>
            <li>
              <a href="#gallery" onClick={() => setIsOpen(false)}>
                Galería
              </a>
            </li>
          </ul>
        </nav>

        {/* 3. Botón de Acción (CTA) */}
        <div className="header-cta">
          {/* <a href="tel:+5551233456" className="btn-primary">
            Icono de teléfono SVG
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            555-123-3456
          </a> */}
          {/* Enlace a Login */}
          <Link to="/login" className="btn-primary">
            Iniciar Sesión
          </Link>
        </div>

        {/* 4. Botón Móvil (Hamburguesa) */}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {/* Si está abierto muestra X, si no muestra Menu */}
          {isOpen ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
};

export default Header;
