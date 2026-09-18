// src/components/PointsBanner.jsx
import React from 'react';

const PointsBanner = ({ userName, points }) => {
  return (
    <div className="points-banner">
        {/* Lado Izquierdo: Saludo */}
        <div className="banner-text">
            <h1>Hola, {userName} 👋</h1>
            <p>Tienes recompensas esperando por ti.</p>
        </div>

        {/* Lado Derecho: Tarjeta de Puntos Destacada */}
        <div className="points-card">
            <span className="points-label">TU SALDO</span>
            <span className="points-value">{points} pts</span>
            <div className="points-bar">
                {/* Simulación de barra de progreso para el próximo nivel */}
                <div className="progress" style={{width: '60%'}}></div>
            </div>
            <span className="points-next">Faltan 400 pts para Nivel Oro</span>
        </div>
    </div>
  );
};

export default PointsBanner;