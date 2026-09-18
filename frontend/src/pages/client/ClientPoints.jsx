import React from 'react';
import DashboardLayout from "../../components/DashboardLayout";
import PointsBanner from "../../components/PointsBanner"; 
import DataTable from "../../components/ui/DataTable";   
import { useAuth } from "../../context/AuthContext";

export default function ClientPoints() {
    const { user } = useAuth();
    
    // Simulamos un saldo (luego vendrá de user.points)
    const currentPoints = 1250; 

    // Simulamos un historial de movimientos
    const historyData = [
        { id: 1, date: "10/12/2023", concept: "Compra en Local", amount: "+150", type: "earn" },
        { id: 2, date: "08/12/2023", concept: "Canje: Café Latte", amount: "-350", type: "burn" },
        { id: 3, date: "01/12/2023", concept: "Compra en Local", amount: "+80", type: "earn" },
    ];

    // Columnas para el DataTable
    const historyColumns = [
        { header: "Fecha", accessor: "date" },
        { header: "Concepto", accessor: "concept" },
        { 
            header: "Puntos", 
            render: (row) => (
                <span style={{
                    color: row.type === 'earn' ? '#51cf66' : '#ff6b6b',
                    fontWeight: 'bold'
                }}>
                    {row.amount}
                </span>
            ) 
        }
    ];

    return (
        <DashboardLayout role="client" showFooter={true}>
            <div style={{maxWidth: '800px', margin: '0 auto'}}>
                
                {/* 1. ESTADO DE CUENTA (Banner) */}
                <PointsBanner 
                    userName={user?.name || "Cliente"} 
                    points={currentPoints} 
                />

                {/* 2. HISTORIAL */}
                <h3 style={{color: 'white', marginTop: '40px', marginBottom: '20px'}}>Historial de Movimientos</h3>
                
                <DataTable 
                    columns={historyColumns} 
                    data={historyData} 
                    // No pasamos onEdit ni onDelete porque el historial es solo lectura
                />

            </div>
        </DashboardLayout>
    );
};