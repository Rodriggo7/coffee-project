/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect } from 'react';
// Importamos los servicios necesarios
import * as userService from '../services/user.service.js';
import * as authService from '../services/auth.service.js'; // Para crear usuarios (register)

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // 1. OBTENER USUARIOS (GET)
  const fetchUsers = async () => {
    try {
        // api.js inyecta el token solo. Si no hay token, el backend devolverá 401 y api.js lanzará error.
        // Podrías chequear si hay token antes para evitar la llamada innecesaria si quieres.
        if (!localStorage.getItem('auth_token')) return; 

        const rawData = await userService.getAllUsers();
      
        // Mapeo simple para asegurar compatibilidad con frontend (id vs _id)
        const adaptedUsers = rawData.map(u => ({
            ...u,
            id: u._id 
        }));
      
        setUsers(adaptedUsers);
    } catch (error) {
        console.error("Error cargando usuarios:", error);
    } finally {
        setLoading(false);
    }
  };

  // Cargar usuarios al montar
  useEffect(() => {
    fetchUsers();
  }, []);

  // 2. CREAR USUARIO (POST - Usamos Auth Service)
  const addUser = async (userData) => {
    try {
      const payload = {
        name: userData.name,
        email: userData.email,
        password: "123456", // Password por defecto
        role: userData.role || 'client',
        phone: userData.phone || "" 
      };

      // Usamos el servicio de auth
      await authService.register(payload);
      
      // Recargamos la lista
      await fetchUsers(); 
      return true;

    } catch (error) {
      alert("Error: " + error.message);
      return false;
    }
  };

  // 3. EDITAR USUARIO (PUT)
  const updateUser = async (id, userData) => {
    try {
      // Usamos el servicio de user
      await userService.updateUser(id, userData);
      
      await fetchUsers(); // Recargamos lista para ver cambios frescos
      return true;
    } catch (error) {
      alert("Error: " + error.message);
      return false;
    }
  };

  // 4. BORRAR USUARIO (DELETE)
  const deleteUser = async (id) => {
    try {
      await userService.deleteUser(id);

      // Actualizar estado local (Optimista)
      setUsers(users.filter(u => u.id !== id));
      return true;
    } catch (error) {
      alert("Error: " + error.message);
      return false;
    }
  };

  return (
    <UserContext.Provider value={{ users, loading, addUser, updateUser, deleteUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUsers = () => useContext(UserContext);