import React, { useContext, useState } from "react";
import OrderContext from "../OrderComponent/OrderContext";
import "./styles.css";

export const Historico = () => {
  const { orders } = useContext(OrderContext);
  const [search, setSearch] = useState("");

  const filteredOrders = orders.filter(
    (order) =>
      order.status === "ENTREGUE" &&
      (order.id.toString().includes(search) ||
        order.timestamp.toLocaleDateString().includes(search) ||
        order.phone.includes(search))
  );

  return (
    <div className="historico">
      <h2>Histórico</h2>
      <input
        type="text"
        placeholder="Filtrar por ID, Data ou Telefone"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredOrders.map((order) => (
        <div key={order.id} className="pedido">
          <div className="pedido-info">
            <p>
              <strong>
                {order.cart.map((item) => item.name).join(", ")} -{" "}
                {order.cart.map((item) => item.size).join(", ")}
              </strong>{" "}
              ({order.cart.map((item) => item.observation).join(", ")})
            </p>
          </div>
          <div className="pedido-action">
            <span className="pedido-horario">
              {order.timestamp.toLocaleTimeString()}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
