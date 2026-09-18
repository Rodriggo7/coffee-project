import React, { useState } from "react";

const ProductForm = ({ initialData, onSubmit, onCancel }) => {
    
    // estado inicial
    const defaultData = {
        name: "",
        category: "cafeteria",
        price: "",
        stock: "",
        image: "/images/default-product.png",
    };

    const [formData, setFormData] = useState(initialData || defaultData);

    const handleChange = (e) => {
        const  { name, value } = e.target;
        setFormData({...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };


    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Nombre del Producto:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label>Descripción:</label>
                <input type="text" name="description" value={formData.description} onChange={handleChange} required />
            </div>

            <div className="form-group">
                <label>Categoría</label>
                <select name="category" value={formData.category} onChange={handleChange} 
                    style={{width: '100%', padding: '10px', background: 'rgba(0,0,0,0.2)', border: '1px solid #444', color: 'white', borderRadius: '5px'}}>
                    <option value="cafeteria">Cafetería</option>
                    <option value="pasteleria">Pastelería</option>
                    <option value="postres">Postres</option>
                </select>
            </div>

            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px'}}>
                <div className="form-group">
                    <label>Precio ($)</label>
                    <input type="number" name="price" step="0.01" value={formData.price} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Stock</label>
                    <input type="number" name="stock" value={formData.stock} onChange={handleChange} required />
                </div>
            </div>

            <div className="form-group">
                <label>URL Imagen</label>
                <input type="text" name="image" value={formData.image} onChange={handleChange} />
            </div>

            <div className="modal-actions">
                <button type="button" className="btn-secondary" onClick={onCancel}>Cancelar</button>
                <button type="submit" className="btn-primary">Guardar</button>
            </div>
        </form>
    );
};

export default ProductForm;