import React, { useContext } from "react";
import OrderContext from "../OrderComponent/OrderContext";
import "./styles.css";

export const Fila = () => {
  const { orders, updateOrderStatus } = useContext(OrderContext);

  return (
    <div className="pedidos-container">
      <h2>Pedidos</h2>
      <div className="fila">
        FILA: {orders.filter((order) => order.status === "A FAZER").length}
      </div>
      {orders
        .filter((order) => order.status === "A FAZER")
        .map((order) => (
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
            <div className="pedido-horario">
              {order.timestamp.toLocaleTimeString()}
            </div>
            <button className="ver-pedido">Ver Pedido</button>
            <select
              value={order.status}
              onChange={(e) => updateOrderStatus(order.id, e.target.value)}
            >
              <option value="A FAZER">A FAZER</option>
              <option value="PRONTO">PRONTO</option>
              <option value="ENTREGUE">ENTREGUE</option>
              <option value="CANCELADO">CANCELADO</option>
            </select>
          </div>
        ))}
    </div>
  );
};
