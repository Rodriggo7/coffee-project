// src/components/Footer.jsx
import React from "react";

const Footer = ({ showNewsletter = true }) => {
  // Función para subir suavemente
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer id="footer" className="footer-section">
      <div className="container">
        {/* 1. NEWSLETTER (Suscripción) */}
        {showNewsletter && (
          <div className="footer-newsletter">
            <h5 className="newsletter-title">
              Suscríbete para recibir noticias y <br /> ofertas exclusivas.
            </h5>
          <form
            className="newsletter-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="input-group">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                required
              />
              <button type="submit" className="btn-primary">
                Suscribirse
              </button>
            </div>
          </form>
        </div>
        )}
        {/* 2. INFO PRINCIPAL (Columnas) */}
        <div className="footer-content">
          {/* Columna Logo & Redes */}
          <div className="footer-col brand-col">
            <div className="footer-logo">
              <img src="/images/logo.svg" alt="Lounge Cafe" />
            </div>
            <ul className="footer-social">
              <li>
                <a href="#0">Instagram</a>
              </li>
              <li>
                <a href="#0">Facebook</a>
              </li>
              <li>
                <a href="#0">Twitter</a>
              </li>
            </ul>
          </div>

          {/* Columna Ubicación */}
          <div className="footer-col">
            <h4>Ubicación</h4>
            <p>
              456 Calle Ficticia
              <br />
              Ciudad de Buenos Aires, AR
            </p>
          </div>

          {/* Columna Contacto */}
          <div className="footer-col">
            <h4>Contacto</h4>
            <p>
              <a href="mailto:hola@loungecafe.com">hola@loungecafe.com</a>
              <br />
              <a href="tel:+5551233456">(555) 123-3456</a>
            </p>
          </div>

          {/* Columna Horarios */}
          <div className="footer-col">
            <h4>Horarios</h4>
            <ul className="hours-list">
              <li>
                <span>Lun - Vie:</span> 10:00 - 21:00
              </li>
              <li>
                <span>Sáb - Dom:</span> 09:00 - 22:00
              </li>
            </ul>
          </div>
        </div>

        {/* 3. BARRA INFERIOR (Copyright & Go Top) */}
        <div className="footer-bottom">
          <div className="copyright">
            &copy; {new Date().getFullYear()} Lounge Cafe. Todos los derechos
            reservados.
          </div>

          <div className="go-top">
            <a href="#top" onClick={scrollToTop}>
              Volver arriba ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
