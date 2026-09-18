import React from "react";

export default function MenuRow({ product, mode = 'public', onAction }) {
    
    return (
        <article className="menu-row">
            {/* info izquierda */}
            <div className="menu-row-info">
                <h3 className="row-title">{product.name}</h3>
                {/* descripción en caso de existir */}
                {product.description && (
                    <p className="row-desc">{product.description}</p>
                )}

                <div className="row-footer"style={{
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '20px', // <--- AUMENTAR ESTE VALOR (Antes era 15px)
                    flexWrap: 'wrap',
                    marginTop: '10px' // Agregamos un poco de aire arriba también
                }}>
                    {/* lógica de precio según el modo */}
                    {mode === 'public' && (
                        <span className="row-price">${product.price}</span>
                    )}

                    {mode === 'client' && (
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <span className="row-price" style={{fontSize: '0.9rem', opacity: 0.8}}>${product.price}</span>
                            <span className="row-points" style={{color: '#ffd700', fontWeight: 'bold'}}>
                                {product.pointsPrice || product.price * 100} pts
                                </span>
                        </div>
                    )}

                    {/* BOTONES DE ACCIÓN */}
                    {mode === 'client' && (
                        <button className="row-btn" onClick={() => onAction(product)}>
                            Canjear
                        </button>
                    )}

                    {/* MODO ADMIN */}
                    {mode === 'admin' && (
                        <div style={{marginLeft: 'auto'}}>
                            <span className="row-price" style={{marginRight: '10px'}}>${product.price}</span>
                            <button className="row-btn" onClick={() => onAction(product)}>Editar</button>
                        </div>
                    )}
                </div>
            </div>

            {/* img a la derecha */}
            <div className="menu-row-image">
                <img src={product.image} alt={product.name} loading="lazy" />
            </div>
        </article>
    );
};