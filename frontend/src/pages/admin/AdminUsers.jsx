import React, { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import DataTable from "../../components/ui/DataTable";
import Modal from "../../components/ui/Modal";
import UserForm from "../../components/forms/UserForm";
// 1. IMPORTAMOS EL CONTEXTO REAL
import { useUsers } from "../../context/UserContext";

export default function AdminUsers() {
    // 2. Usamos el hook para obtener datos y funciones reales del backend
    const { users, addUser, updateUser, deleteUser } = useUsers();

    // Estado local solo para la UI (Modal y Selección)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    // Configuración columnas tabla
    const userColumns = [
        {
            header: "Usuario",
            render: (u) => (
                <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                    <img
                        src={u.avatar || "https://ui-avatars.com/api/?name=" + u.name}
                        alt="avatar"
                        className="table-thumb"
                        style={{borderRadius: '50%'}}
                    />
                    <span>{u.name}</span>
                </div>
            )
        },
        { header: "Email", accessor: "email"},
        // Nota: Tu modelo User.js actual no tiene 'phone', pero el controlador sí lo admite. 
        // Si no se guarda en BD, saldrá vacío.
        { header: "Teléfono", accessor: "phone" }, 
        { 
            header: "Rol", 
            render: (u) => (
                <span style={{
                    padding: '4px 8px',
                    borderRadius: '4px',
                    background: u.role === 'admin' ? 'rgba(70, 134, 114, 0.3)' : 'rgba(255, 255, 255, 0.1)',
                    color: u.role === 'admin' ? '#468672' : 'white', 
                    fontSize: '0.85rem'
                }}>
                    {u.role ? u.role.toUpperCase() : 'CLIENT'}
                </span>
            )
        },
        { 
            header: "Estado", 
            render: (u) => {
                // CORRECCIÓN: Tu modelo User.js usa 'isActive' (boolean), no 'status' (string)
                const isActive = u.isActive !== undefined ? u.isActive : (u.status === 'active');
                return (
                    <span style={{color: isActive ? '#51cf66' : '#ff6b6b'}}>
                        {isActive ? '● Activo' : '○ Inactivo'}
                    </span>
                );
            }
        },
        {
            header: "Puntos",
            render: (u) => <span style={{color: '#ffd700'}}>{u.points || 0} pts</span>
        }
    ];

    // Manejadores de eventos
    const handleAddNew = () => {
        setCurrentUser(null);
        setIsModalOpen(true);
    };

    const handleEdit = (user) => {
        setCurrentUser(user);
        setIsModalOpen(true);
    };

    const handleDelete = async (id) => {
        if(window.confirm("¿Estás seguro de que deseas eliminar este usuario?")) {
            // 3. Llamada real al backend
            await deleteUser(id);
        }
    };

    const handleSave = async (formData) => {
        let success = false;
        
        if (currentUser) {
            // Editar usuario existente (PUT)
            success = await updateUser(currentUser.id, formData);
        } else {
            // Agregar nuevo usuario (POST)
            success = await addUser(formData);
        }
        
        // Solo cerramos si el backend respondió OK
        if (success) {
            setIsModalOpen(false);
        }
    };

    return (
        <DashboardLayout role="admin">
            <div className="admin-header">
                <h1 style={{color: 'white', margin: 0}}>Gestión de Usuarios</h1>
                <button className="btn-primary" onClick={handleAddNew}>+ Nuevo Usuario</button>
            </div>
            
            <DataTable 
                columns={userColumns}
                data={users} // <--- Pasamos la lista real del contexto
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
            
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={currentUser ? "Editar Usuario" : "Crear Nuevo Usuario"}
            >
                <UserForm
                    key={currentUser ? currentUser.id : 'new'}
                    initialData={currentUser}
                    onSubmit={handleSave}
                    onCancel={() => setIsModalOpen(false)}
                />
            </Modal>
        </DashboardLayout>
    );
}