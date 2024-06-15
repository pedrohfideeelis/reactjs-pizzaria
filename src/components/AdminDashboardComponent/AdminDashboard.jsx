import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export const AdminDashboard = () => {
  return (
    <>
      <div id="dashboard-content">
        <h2 id="saudation">Bem vindo, ADMIN</h2>
        <div className="admin-buttons">
          <Link to= "/admin/dashboard/fila"id="fila">Fila de Pedidos</Link>
          <Link to="/admin/dashboard/historico" id="historico">Histórico</Link>
          <Link to="/admin" id="sair">Sair</Link>
        </div>
      </div>
    </>
  );
};
