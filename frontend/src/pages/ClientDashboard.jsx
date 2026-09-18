import React from "react";
import DashboardLayout from "../components/DashboardLayout";

const ClientDashboard = () => {
    return (
        <DashboardLayout role="client" showFooter={true} name={name}>
            <h1 style={{color: 'white'}}>Bienvenido a Lounge Cafe</h1>
            <p style={{color: '#ccc', marginBottom: '30px'}}>¿Qué te gustaría pedir hoy?</p>

            {/* Aquí podrías reutilizar tu componente Menu.jsx si quisieras */}
            <div style={{background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '10px', textAlign: 'center', color: 'white'}}>
                <h2>Promoción del Día ☕ + 🥐</h2>
                <p>Café Latte + Medialuna por solo $5.00</p>
                <button className="btn-primary" style={{marginTop: '15px'}}>Pedir Ahora</button>
            </div>
        </DashboardLayout>
    );
};

export default ClientDashboard;