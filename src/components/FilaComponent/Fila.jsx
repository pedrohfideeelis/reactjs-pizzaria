import React, { useContext } from "react";
import OrderContext from "../OrderComponent/OrderContext";
import "./styles.css";

export const Fila = () => {
  const { orders, updateOrderStatus } = useContext(OrderContext);

  const handleStatusChange = (id, status) => {
    updateOrderStatus(id, status);
  };

  return (
    <>
      <div className="pedidos-container">
        <h2>Pedidos</h2>
        <div className="fila">FILA: {orders.length}</div>
        {orders.map((order) => (
          <div className="pedido" key={order.id}>
            <div className="pedido-info">
              {order.cart.map((item, index) => (
                <p key={index}>
                  <strong>
                    {item.name} - {item.size}
                  </strong>{" "}
                  {item.observation && `(${item.observation})`}
                </p>
              ))}
            </div>
            <div className="pedido-horario">
              {new Date(order.timestamp).toLocaleTimeString()}
            </div>
            <button className="ver-pedido">Ver Pedido</button>
            <div className={`status ${order.status.toLowerCase()}`}>
              {order.status}
            </div>
            <select
              value={order.status}
              onChange={(e) => handleStatusChange(order.id, e.target.value)}
            >
              <option value="A FAZER">A FAZER</option>
              <option value="PRONTO">PRONTO</option>
              <option value="ENTREGUE">ENTREGUE</option>
              <option value="CANCELADO">CANCELADO</option>
            </select>
          </div>
        ))}
      </div>
    </>
  );
};
