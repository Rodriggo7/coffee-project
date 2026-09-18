import React from "react";

const DataTable = ({ columns, data, onEdit, onDelete }) => {
  return (
    <div className="table-container">
      <table className="data-table">
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th key={index} style={col.style}>
                {col.header}
              </th>
            ))}
            {(onEdit || onDelete) && (
              <th style={{ textAlign: "right" }}>Acciones</th>
            )}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr key={row.id || rowIndex}>
                {columns.map((col, colIndex) => (
                  <td key={colIndex}>
                    {/* MAGIA: Si la columna tiene una función 'render', la usamos (para imágenes o estilos).
                       Si no, mostramos el texto plano usando el 'accessor'.
                    */}
                    {col.render ? col.render(row) : row[col.accessor]}
                  </td>
                ))}

                {/* Botones de Acción Genericos */}
                {(onEdit || onDelete) && (
                  <td style={{ textAlign: "right" }}>
                    {onEdit && (
                      <button
                        className="action-btn"
                        onClick={() => onEdit(row)}
                        title="Editar"
                      >
                        ✏️
                      </button>
                    )}
                    {onDelete && (
                      <button
                        className="action-btn"
                        onClick={() => onDelete(row.id)}
                        title="Borrar"
                      >
                        🗑️
                      </button>
                    )}
                  </td>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length + (onEdit || onDelete ? 1 : 0)}
                style={{ textAlign: "center", padding: "30px" }}
              >
                No hay datos disponibles.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;