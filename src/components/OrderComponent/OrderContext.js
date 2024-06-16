import React, { createContext, useState } from "react";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  const addOrderToQueue = (order) => {
    setOrders([...orders, { ...order, id: orders.length + 1 }]);
  };

  const addOrderToHistory = (order) => {
    setOrders([...orders, { ...order, status: "ENTREGUE" }]);
  };

  const updateOrderStatus = (id, status) => {
    setOrders(
      orders.map((order) => (order.id === id ? { ...order, status } : order))
    );
  };

  return (
    <OrderContext.Provider
      value={{ orders, addOrderToQueue, addOrderToHistory, updateOrderStatus }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContext;
