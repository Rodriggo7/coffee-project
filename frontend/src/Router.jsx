import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext.jsx";

import LandingPage from "./pages/LandingPage.jsx";
import LoginPage from "./pages/LoginPage";
import AdminDashboard from "./pages/AdminDashboard";
import ClientDashboard from "./pages/ClientDashboard";
import PublicMenu from "./pages/PublicMenu.jsx";
// page admin
import AdminProfile from "./pages/admin/AdminProfile.jsx";
import AdminProducts from "./pages/admin/AdminProducts";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminSettings from "./pages/admin/AdminSettings.jsx";
// page client
import ClientProfile from "./pages/client/ClientProfile.jsx";
import ClientPoints from "./pages/client/ClientPoints.jsx";
import ClientFavorites from "./pages/client/ClientFavorites.jsx";
import ClientCoupons from "./pages/client/ClientCoupons.jsx";
import ClientMenu from "./pages/client/ClientMenu.jsx";

export default function AppRouter() {
    const { user } = useAuth();

    return(
            <Routes>
                {/* rutas públicas */}
                <Route path="/" element={<LandingPage />}></Route>
                <Route path="/login" element={<LoginPage />}></Route>

                <Route path="/carta" element={<PublicMenu />} />
                

                {/* rutas protegidas para admin */}
                {user?.role === "admin" && (
                    <>
                        <Route path="/admin" element={<AdminDashboard />} />
                        <Route path="/admin/profile" element={<AdminProfile />} />
                        <Route path="/admin/products" element={<AdminProducts />} />
                        <Route path="/admin/users" element={<AdminUsers />} />
                        <Route path="/admin/settings" element={<AdminSettings />} />
                    </>
                )}

                {/* rutas protegidas para client */}
                {user?.role === "client" && (
                    <>
                        <Route path="/client" element={<ClientDashboard />} />
                        <Route path="/client/profile" element={<ClientProfile />} />
                        <Route path="/client/points" element={<ClientPoints />} />
                        <Route path="/client/favorites" element={<ClientFavorites />} />
                        <Route path="/client/coupons" element={<ClientCoupons />} />
                        <Route path="/client/menu" element={<ClientMenu />} />
                        <Route path="/client/points" element={<ClientPoints />} />
                    </>
                )}

                {/* route default */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        
    );
};
