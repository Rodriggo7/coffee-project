/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useContext, useEffect } from "react";
// 1. Importamos el servicio
import * as productService from '../services/product.service.js';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchProducts = async () => {
        try {
            // REEMPLAZO FETCH: Llamada limpia al servicio
            const rawData = await productService.getAllProducts();

            const adaptedData = rawData.map(item => ({
                ...item,
                id: item._id,
                image: item.imageUrl,
                // Capitalizar primera letra visualmente
                category: item.category ? item.category.charAt(0).toUpperCase() + item.category.slice(1) : 'Otros'
            }));
            
            setProducts(adaptedData);
        } catch (error) {
            console.error("Error cargando productos:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const addProduct = async (productData) => {
        try {
            // Preparamos payload (tu lógica de negocio se queda aquí)
            const payload = {
                name: productData.name,
                description: productData.description || "",
                price: parseFloat(productData.price),
                stock: parseInt(productData.stock),
                category: productData.category, 
                imageUrl: productData.image || '/images/menu-default.jpg',
                pointsPrice: productData.price * 100, 
                basePoints: Math.floor(productData.price * 2),
                isAvailable: true
            };

            // REEMPLAZO FETCH: El token se inyecta solo en api.js
            const savedProduct = await productService.createProduct(payload);
            
            // Adaptamos respuesta para actualizar estado local
            const newProductData = savedProduct.product || savedProduct; 
            const newProductForState = {
                ...newProductData,
                id: newProductData._id,
                image: newProductData.imageUrl,
                category: newProductData.category.charAt(0).toUpperCase() + newProductData.category.slice(1)
            };

            setProducts([...products, newProductForState]);
            return true;
        } catch (error) {
            console.error("Error creating product:", error);
            // .message saca el texto limpio del error que lanzamos en api.js
            alert("Error: " + error.message); 
            return false;
        }
    };

    const updateProduct = async (id, productData) => {
        try {
            const payload = {
                name: productData.name,
                description: productData.description || "",
                price: parseFloat(productData.price),
                stock: parseInt(productData.stock),
                category: productData.category.toLowerCase(),
                imageUrl: productData.image,
                pointsPrice: productData.price * 100,
                basePoints: Math.floor(productData.price * 2)
            };

            // REEMPLAZO FETCH
            const data = await productService.updateProduct(id, payload);
            const updatedItem = data.product || data;

            const updatedProducts = products.map(p => 
                p.id === id ? {
                    ...p,
                    ...updatedItem,
                    id: updatedItem._id,
                    image: updatedItem.imageUrl,
                    category: updatedItem.category.charAt(0).toUpperCase() + updatedItem.category.slice(1)
                } : p
            );
            
            setProducts(updatedProducts);
            return true;
        } catch (error) {
            console.error(error);
            alert("Error: " + error.message);
            return false;
        }
    };

    const deleteProduct = async (id) => {
        try {
            // REEMPLAZO FETCH
            await productService.deleteProduct(id);

            setProducts(products.filter(p => p.id !== id));
            return true;
        } catch (error) {
            console.error(error);
            alert("Error: " + error.message);
            return false;
        }
    };

    return (
        <ProductContext.Provider
            value={{ products, loading, addProduct, updateProduct, deleteProduct }}>
            {children}
        </ProductContext.Provider>
    );
}

export const useProducts = () => useContext(ProductContext);