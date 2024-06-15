import React from "react";
import "./styles.css";

export const AdminDashboard = () => {
  return (
    <>
      <div id="dashboard-content">
        <h2 id="saudation">Bem vindo, ADMIN</h2>
        <div className="admin-buttons">
          <button id="fila">Fila de Pedidos</button>
          <button id="historico">Histórico</button>
          <button id="sair">Sair</button>
        </div>
      </div>
    </>
  );
};
