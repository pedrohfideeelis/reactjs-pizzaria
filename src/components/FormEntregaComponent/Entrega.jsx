import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ConfirmModal from "../ConfirmComponent/ConfirmModal";
import "./styles.css";

export const Entrega = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    navigate("/cardapio");
  };

  return (
    <div className="delivery-form">
      <h2>Dados para Entrega</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nome Completo:</label>
          <input type="text" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Telefone:</label>
          <input type="text" id="phone" />
        </div>
        <div className="form-group">
          <label htmlFor="address">Endereço:</label>
          <input id="address" type="text"></input>
        </div>
        <div className="form-group">
          <label>Forma de Pagamento:</label>
          <div className="payment-methods">
            <label>
              <input type="radio" name="paymentMethod" value="PIX" />
              PIX
            </label>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="Cartão de Crédito/Débito"
              />
              Cartão de Crédito/Débito
            </label>
          </div>
        </div>
        <div className="form-buttons">
          <button
            type="button"
            className="cancel-button"
            onClick={handleCancel}
          >
            CANCELAR
          </button>
          <button type="submit" className="submit-button">
            ENVIAR
          </button>
        </div>
      </form>
      {isModalOpen && <ConfirmModal onClose={handleCloseModal} />}
    </div>
  );
};
