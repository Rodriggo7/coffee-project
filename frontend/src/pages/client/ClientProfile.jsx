import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import ProfileCard from "../../components/ProfileCard";
import { useAuth } from "../../context/AuthContext";

export default function ClientProfile() {
    const { user } = useAuth();

    // simulacion de datos de usuario cliente
    const FullUserData = {
        name: user?.name || "Cliente Ejemplo",
        role: "Cliente VIP",
        email: user?.email || "cliente@example.com",
        phone: "987-654-3210",
        avatar: "/images/client-avatar.png",
    };

    return (
        <DashboardLayout role="client" showFooter={true}>
            <h1 style={{color:'white', marginBottom:'30px'}}>Gestión de Perfil</h1>
            <ProfileCard userData={FullUserData} />

        </DashboardLayout>
    );
}