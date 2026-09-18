// src/components/Menu.jsx
import React, { useState } from 'react';

// DATOS DEL MENÚ (Más fácil de editar aquí que en el HTML)
const MENU_DATA = {
  signature: {
    title: "Cafés de Autor",
    icon: (
      <svg className="tab-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    ),
    items: [
      { name: "Espresso Elegancia Lounge", desc: "Intenso y con cuerpo, nuestro blend exclusivo.", price: "$3.50" },
      { name: "Mocha Terciopelo", desc: "Mocha sedoso infusionado con vainilla.", price: "$4.25" },
      { name: "Latte Cielo de Avellanas", desc: "Latte cremoso con jarabe de avellanas.", price: "$4.50" },
    ]
  },
  pastries: {
    title: "Pastelería Recién Horneada",
    icon: (
      <svg className="tab-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>
    ),
    items: [
      { name: "Croissant Mantecoso", desc: "Hojaldrado y horneado a la perfección.", price: "$2.50" },
      { name: "Danés de Almendra", desc: "Relleno de pasta de almendra y láminas de almendra.", price: "$3.00" },
      { name: "Muffin de Arándanos", desc: "Rebosante de arándanos frescos.", price: "$2.75" },
    ]
  },
  treats: {
    title: "Delicias Gourmet",
    icon: (
      <svg className="tab-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" /></svg>
    ),
    items: [
      { name: "Trufas de Chocolate Negro", desc: "Chocolate lujoso con polvo de cacao.", price: "$2.75" },
      { name: "Brownie de Caramelo Salado", desc: "Brownie húmedo con sal marina.", price: "$3.50" },
    ]
  }
};

const Menu = () => {
  // Estado: empezamos mostrando "signature"
  const [activeTab, setActiveTab] = useState('signature');

  return (
    <section id="menu" className="menu-section">
      <div className="container menu-container">
        
        {/* COLUMNA IZQUIERDA: Pestañas */}
        <div className="menu-tabs">
            <div className="section-header">
                <span className="section-number">02.</span>
                <h2 className="section-title">Nuestra Carta</h2>
            </div>

            <div className="tab-list">
                {/* Generamos los botones dinámicamente con Object.keys */}
                {Object.keys(MENU_DATA).map((key, index) => (
                    <button 
                        key={key}
                        className={`tab-btn ${activeTab === key ? 'active' : ''}`}
                        onClick={() => setActiveTab(key)}
                    >
                        <span className="tab-number">0{index + 1}.</span>
                        <span className="tab-text">{MENU_DATA[key].title}</span>
                        {/* El icono solo se ve en desktop si quieres, o siempre */}
                        {MENU_DATA[key].icon}
                    </button>
                ))}
            </div>
        </div>

        {/* COLUMNA DERECHA: Lista de Productos */}
        <div className="menu-content">
            {/* Título de la categoría activa */}
            <h3 className="category-title">{MENU_DATA[activeTab].title}</h3>
            
            <ul className="menu-items-list">
                {MENU_DATA[activeTab].items.map((item, index) => (
                    <li key={index} className="menu-item">
                        <div className="item-info">
                            <h4>{item.name}</h4>
                            <p>{item.desc}</p>
                        </div>
                        <div className="item-price">{item.price}</div>
                    </li>
                ))}
            </ul>
        </div>

      </div>
    </section>
  );
};

export default Menu;