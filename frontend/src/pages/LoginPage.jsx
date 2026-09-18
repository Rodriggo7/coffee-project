import React from "react";
import { useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="login-page">
      {/* Fondo oscuro completo */}
      <div className="login-container">
        <div className="login-header">
          <Link to="/" className="back-link">
            ← Volver
          </Link>
          <img src="/images/logo.svg" alt="Lounge Coffe" width="150" />
          <h2>Bienvenido de nuevo!</h2>
        </div>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label>Correo Electronico:</label>
            <input
              type="email"
              placeholder="admin@lounge.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Contraseña:</label>
            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn-primary full-width">
            Iniciar Sesión
          </button>
        </form>
        <p className="login-footer">¿No tienes una cuenta? <a href="#">Regístrate aquí</a>
        </p>

      </div>
    </div>
  );
};
export default LoginPage;
