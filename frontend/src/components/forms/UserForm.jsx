import React, { useState } from "react";

const UserForm = ({ initialData, onSubmit, onCancel }) => {
    const defaultData = {
            name: '',
            email: '',
            phone: '',
            role: 'client',
            status: 'active',
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
                <label>Nombre Completo</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>

            <div className="form-group">
                <label>Correo Electrónico</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            
            <div className="form-group">
                <label>Teléfono</label>
                <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
            </div>

            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px'}}>
                <div className="form-group">
                    <label>Rol</label>
                    <select name="role" value={formData.role} onChange={handleChange}>
                        <option value="client">Cliente</option>
                        <option value="admin">Administrador</option>
                    </select>
                </div>
                
                <div className="form-group">
                    <label>Estado</label>
                    <select name="status" value={formData.status} onChange={handleChange}>
                        <option value="active">Activo</option>
                        <option value="inactive">Inactivo</option>
                    </select>
                </div>
            </div>


            <div className="modal-actions">
                <button type="button" className="btn-secondary" onClick={onCancel}>Cancelar</button>
                <button type="submit" className="btn-primary">Guardar Usuario</button>
            </div>
        </form>
    );
};

export default UserForm;