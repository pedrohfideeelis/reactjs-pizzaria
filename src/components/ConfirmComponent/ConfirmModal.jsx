import React from "react";
import "./styles.css";

const ConfirmModal = ({onClose}) => {
    return(
        <div className="confirm-modal">
            <div className="confirm-modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>PEDIDO CONFIRMADO!</h2>
                <p>Seu pedido foi confirmado, você receberá informações pelo número de telefone inserido! Obrigado!</p>
                <button onClick={onClose}>OK</button>
            </div>
        </div>
    );
};

export default ConfirmModal;