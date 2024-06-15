import React, { useContext, useState } from "react";
import OrderContext from "../OrderComponent/OrderContext";
import "./styles.css";

export const Historico = () => {
  const { orders } = useContext(OrderContext);
  const [filter, setFilter] = useState({ id: "", date: "", phone: "" });

  const handleFilterChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const filteredOrders = orders
    .filter((order) => order.status === "ENTREGUE")
    .filter((order) => {
      return (
        (!filter.id || order.id.toString().includes(filter.id)) &&
        (!filter.date ||
          new Date(order.timestamp)
            .toLocaleDateString()
            .includes(filter.date)) &&
        (!filter.phone || order.phone.includes(filter.phone))
      );
    });

  return (
    <div className="historico">
      <h2>Histórico</h2>
      <div className="filter">
        <input
          type="text"
          name="id"
          placeholder="Filtrar por ID"
          value={filter.id}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="date"
          placeholder="Filtrar por Data"
          value={filter.date}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Filtrar por Telefone"
          value={filter.phone}
          onChange={handleFilterChange}
        />
      </div>
      {filteredOrders.map((order) => (
        <div className="pedido" key={order.id}>
          <div className="pedido-info">
            {order.cart.map((item, index) => (
              <p key={index}>
                {item.name} - {item.size}{" "}
                {item.observation && `(${item.observation})`}
              </p>
            ))}
          </div>
          <div className="pedido-action">
            <span className="pedido-data">
              {new Date(order.timestamp).toLocaleString()}
            </span>
            <button className="ver-pedido">Ver Pedido</button>
          </div>
        </div>
      ))}
    </div>
  );
};
