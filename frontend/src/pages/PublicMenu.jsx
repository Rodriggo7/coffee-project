import React, { useState, useMemo } from 'react';
import { useProducts } from '../context/ProductContext';
import CategoryBar from '../components/ui/CategoryBar';
import MenuRow from '../components/ui/MenuRow';
import { Link } from 'react-router-dom';

const PublicMenu = () => {
  const { products } = useProducts();
  const [activeCategory, setActiveCategory] = useState('all');

  // 1. Extraer categorías únicas de los productos (Automático)
  // Usamos useMemo para no recalcularlo en cada render
  const categories = useMemo(() => {
    const cats = products.map(p => p.category);
    return [...new Set(cats)]; // Elimina duplicados
  }, [products]);

  // 2. Filtrar productos según selección
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="public-menu-page">
      
      {/* HEADER SIMPLE (Solo Logo y Login) */}
      <header className="menu-header">
        <div className="menu-logo">
            <Link to="/" className="login-link">
                <img src="/images/logo.svg" alt="Lounge" />
            </Link>
            <span>Carta Digital</span>
        </div>
        <Link to="/login" className="btn-primary">Iniciar Sesión</Link>
        
      </header>

      {/* BARRA PEGAJOSA */}
      <CategoryBar 
        categories={categories} 
        activeCategory={activeCategory} 
        onSelectCategory={setActiveCategory} 
      />

      {/* LISTA DE PRODUCTOS */}
      <main className="menu-list-container">
        <div className="container">
            {filteredProducts.map(product => (
                <MenuRow 
                    key={product.id} 
                    product={product} 
                    mode="public" 
                />
            ))}
            
            {filteredProducts.length === 0 && (
                <p style={{textAlign:'center', padding:'40px', color:'#999'}}>
                    No hay productos en esta categoría.
                </p>
            )}
        </div>
      </main>

    </div>
  );
};

export default PublicMenu;