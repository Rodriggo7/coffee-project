/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// 1. Importamos el servicio
import * as authService from '../services/auth.service.js';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user_data');
    const storedToken = localStorage.getItem('auth_token');

    if (storedUser && storedToken) {
        try {
            const parsedUser = JSON.parse(storedUser);
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setUser(parsedUser);
        } catch (error) {
            // CORRECCIÓN ESLINT: Usamos la variable 'error' en el log
            console.error("Datos de sesión corruptos:", error);
            localStorage.removeItem('user_data');
            localStorage.removeItem('auth_token');
            setUser(null);
        }
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
        // Llamada limpia
        const data = await authService.login(email, password);

        // api.js ya nos devuelve el JSON parseado, así que accedemos directo
        const { token, user } = data; 

        localStorage.setItem('auth_token', token);
        localStorage.setItem('user_data', JSON.stringify(user));

        setUser(user);

        if (user.role === 'admin') {
            navigate('/admin');
        } else {
            navigate('/client');
        }
        
        return { success: true };

    } catch (err) { // Usamos 'err' para diferenciar
      // CORRECCIÓN ESLINT: Usamos la variable
      const message = err.message || 'Error al iniciar sesión';
      console.error(err);
      return { success: false, message };
    }
  };

  const logout = () => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_data');
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);