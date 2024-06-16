import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const ConfirmModal = ({
  onClose,
  order,
  addOrderToHistory,
  addOrderToQueue,
}) => {
  const navigate = useNavigate();

  const handleConfirm = () => {
    addOrderToQueue(order);
    addOrderToHistory(order);
    navigate("/");
    onClose();
  };

  return (
    <div className="confirm-modal">
      <div className="confirm-modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>PEDIDO CONFIRMADO!</h2>
        <p>
          Seu pedido foi <strong>confirmado</strong>, você receberá informações
          <br />
          pelo <strong>número de telefone</strong> inserido!{" "}
          <strong>Obrigado!</strong>
        </p>
        <button onClick={handleConfirm}>OK</button>
      </div>
    </div>
  );
};

export default ConfirmModal;
