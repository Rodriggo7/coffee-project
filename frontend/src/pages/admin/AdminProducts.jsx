import React, { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import { useProducts } from "../../context/ProductContext";
import Modal from "../../components/ui/Modal";
import ProductForm from "../../components/forms/ProductForm";
import DataTable from "../../components/ui/DataTable";

export default function AdminProducts() {
  const { products, addProduct, updateProduct, deleteProduct } = useProducts();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  // config columnas tabla
  const productColumns = [
    {
      header: "Imagen",
      render: (row) => (
        <img
          src={row.image || "/images/default-product.png"}
          alt="thumb"
          className="table-thumb"
        />
      ),
    },
    { header: "Producto", accessor: "name" },
    { header: "Categoria", accessor: "category" },
    { header: "Precio", render: (row) => `$${row.price}` },
    {
      header: "Stock",
      render: (row) => (
        <span style={{ color: row.stock < 5 ? "#ff6b6b" : "#51cf66" }}>
          {row.stock} u.
        </span>
      ),
    },
  ];
  const handleAddNew = () => {
    setCurrentProduct(null);
    setIsModalOpen(true);
  };

  const handleSave = (data) => {
    if (currentProduct) {
      updateProduct(currentProduct.id, data);
    } else {
      addProduct(data);
    }
    setIsModalOpen(false);
  };

  return (
    <DashboardLayout role="admin">
        <div className="admin-header">
            <h1 style={{color: 'white', margin: 0}}>Mis productos</h1>
            <button className="btn-primary" onClick={handleAddNew}>+ Nuevo Producto</button>
        </div>

        {/* dataTable y Model */}
        <DataTable
            columns={productColumns}
            data={products}
            onEdit={(item) => {
                setCurrentProduct(item);
                setIsModalOpen(true);
            }}
            onDelete={(id) => {
                if(window.confirm("¿Estás seguro de eliminar este producto?")) deleteProduct(id); 
            }}
        />
        <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title={currentProduct ? "Editar Producto" : "Crear Producto"}
        >
            <ProductForm
                key={currentProduct ? currentProduct.id : 'new'}
                initialData={currentProduct}
                onSubmit={handleSave}
                onCancel={() => setIsModalOpen(false)}
            />
        </Modal>

    </DashboardLayout>
  );
}
