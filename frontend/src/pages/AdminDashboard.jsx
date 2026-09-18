import React from "react";
import DashboardLayout from "../components/DashboardLayout";

const AdminDashboard = () => {
    return (
        <DashboardLayout role ="admin">
            <h1 style={{color: 'white', marginBottom: '20px'}}>Panel de Control</h1>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px'}}>
            <div style={{background: '#1a332a', padding: '20px', borderRadius: '8px', color: 'white'}}>
                <h3>Ventas Hoy</h3>
                <p style={{fontSize: '2rem', fontWeight: 'bold'}}>$1,200</p>
            </div>
            <div style={{background: '#1a332a', padding: '20px', borderRadius: '8px', color: 'white'}}>
                <h3>Pedidos Activos</h3>
                <p style={{fontSize: '2rem', fontWeight: 'bold'}}>15</p>
            </div>
            <div style={{background: '#1a332a', padding: '20px', borderRadius: '8px', color: 'white'}}>
                <h3>Productos</h3>
                <p style={{fontSize: '2rem', fontWeight: 'bold'}}>42</p>
            </div>
        </div>
        </DashboardLayout>
    );
};

export default AdminDashboard;