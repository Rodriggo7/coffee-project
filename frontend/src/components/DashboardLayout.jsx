import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import Footer from "./Footer.jsx";

const DashboardLayout = ({ children, role, showFooter = false }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const { logout, user } = useAuth();

    // simulacion de menú según rol
    const adminMenu = [
        { icon: "👤", label: "Mi perfil", link: "/admin/profile" },
        { icon: "📊", label: "Estadísticas", link: "/admin" },
        { icon: "☕", label: "Productos", link: "/admin/products" },
        { icon: "👥", label: "Usuarios", link: "/admin/users" },
        { icon: "⚙️", label: "Configuración", link: "/admin/settings" },
    ];
    const clientMenu = [
        { icon: "🏠", label: "Inicio", link: "/client" },
        { icon: "👤", label: "Mi perfil", link: "/client/profile" },
        { icon: "☕", label: "Carta", link: "/client/menu" },
        { icon: "⭐", label: "Mis Puntos", link: "/client/points" },
        { icon: "❤️", label: "Favoritos", link: "/client/favorites" },
        { icon: "🎫", label: "Beneficios", link: "/client/coupons" },
    ];

    const menuItems = role === 'admin' ? adminMenu : clientMenu;

    return (
        <div className="dashboard-wrapper">
            {/* NAV */}
            <header className="dash-header">
                <div className="dash-header-left">
                    <button className="menu-btn" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                        ☰
                    </button>
                    <div className="dash-logo">
                        <img src="/images/logo.svg" alt="Lounge" />
                    </div>
                </div>

                <div className="dash-header-right">
                    <span className="user-name">Hola, {user?.name || 'Usuario'}</span>
                    <button onClick={logout} className="logout-btn">Cerrar sesión</button>
                </div>
            </header>

            {/* BODY */}
            <div className="dash-body">
                {/* SIDEBAR */}
                <aside className={`dash-sidebar ${isSidebarOpen ? "open" : "closed"}`}>
                    <nav className="sidebar-nav">
                        <ul>
                            {menuItems.map((item, index) => (
                                <li key={index}>
                                    <Link to={item.link} className="sidebar-link" title={item.label}>
                                        <span className="icon">{item.icon}</span>
                                        <span className="label">{item.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>

                {/* MAIN CONTENT */}
                <main className="dash-content">
                    <div className="dash-container">
                        {children}
                    </div>

                    {/* Footer Opcional (Solo para clientes) */}
                    {showFooter && (
                        <div className="dash-footer-wrapper">
                            <Footer showNewsletter={false} />
                        </div>
                    )}
                </main>

            </div>
        </div>
    );
};

export default DashboardLayout;