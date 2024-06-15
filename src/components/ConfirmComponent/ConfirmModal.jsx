import React from "react";
import "./styles.css";

const ConfirmModal = ({ onClose, onConfirm }) => {
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
        <button onClick={onConfirm}>OK</button>
      </div>
    </div>
  );
};

export default ConfirmModal;
