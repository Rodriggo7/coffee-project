import DashboardLayout from "../../components/DashboardLayout";
import ProfileCard from "../../components/ProfileCard";
import { useAuth } from "../../context/AuthContext";

export default function AdminProfile() {
    const { user } = useAuth();

    // simulacion de datos de usuario admin
    const FullUserData = {
        name: user?.name || "Admin Ejemplo",
        role: "Administrador",
        email: user?.email || "admin@example.com",
        phone: "123-456-7890",
        avatar: "/images/admin-avatar.png",
    };

    return (
        <DashboardLayout role="admin">
            <h1 style={{color:'white', marginBottom:'30px'}}>Configuración de Cuenta</h1>
            <ProfileCard userData={FullUserData} />
        </DashboardLayout>
    );
}