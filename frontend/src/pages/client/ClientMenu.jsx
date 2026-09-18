import React, { useState, useMemo } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import { useProducts } from "../../context/ProductContext";
import CategoryBar from "../../components/ui/CategoryBar";
import MenuRow from "../../components/ui/MenuRow";

export default function ClientMenu() {
    const { products } = useProducts();
    const [activeCategory, setActiveCategory] = useState('all');

    // 1. Categorías Dinámicas
    const categories = useMemo(() => {
        const cats = products.map(p => p.category);
        return [...new Set(cats)];
    }, [products]);

    // 2. Filtrado
    const filteredProducts = activeCategory === 'all' 
        ? products 
        : products.filter(p => p.category === activeCategory);

    // 3. Lógica de Canje
    const handleRedeem = (product) => {
        // Aquí validaremos el saldo en el futuro
        const points = product.pointsPrice || product.price * 100;
        if(window.confirm(`¿Quieres canjear ${product.name} por ${points} puntos?`)) {
            alert("¡Canje exitoso! (Simulado)");
        }
    };

    return (
        <DashboardLayout role="client" showFooter={true}>
            <div style={{maxWidth: '800px', margin: '0 auto'}}>
                
                <h1 style={{color: 'white', marginBottom: '10px'}}>Carta de Canje</h1>
                <p style={{color: '#ccc', marginBottom: '30px'}}>
                    Elige tus premios favoritos.
                </p>

                {/* Barra Sticky */}
                <div style={{marginBottom: '10px', '--sticky-offset': '68px'}}>
                    <CategoryBar 
                        categories={categories} 
                        activeCategory={activeCategory} 
                        onSelectCategory={setActiveCategory} 
                    />
                </div>

                {/* Lista de Productos (Modo Cliente: muestra precio en puntos) */}
                <div className="menu-list-container" style={{paddingTop: 0}}>
                    {filteredProducts.map(product => (
                        <MenuRow 
                            key={product.id} 
                            product={product} 
                            mode="client"
                            onAction={handleRedeem}
                        />
                    ))}
                </div>

            </div>
        </DashboardLayout>
    );
}