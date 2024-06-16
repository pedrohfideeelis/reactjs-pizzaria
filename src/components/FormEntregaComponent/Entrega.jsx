import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import ConfirmModal from "../ConfirmComponent/ConfirmModal";
import { CartContext } from "../CartComponent/CartContext";
import OrderContext from "../OrderComponent/OrderContext";
import "./styles.css";

export const Entrega = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [errors, setErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { cart, clearCart } = useContext(CartContext);
  const { addOrderToQueue, addOrderToHistory } = useContext(OrderContext);

  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (name.length < 10) {
      newErrors.name = "Nome deve ter pelo menos 10 caracteres.";
    }
    if (!/^\(\d{2}\) \d{5}-\d{4}$/.test(phone)) {
      newErrors.phone = "Telefone deve estar no formato (XX) XXXXX-XXXX.";
    }
    if (address.length < 10) {
      newErrors.address = "Endereço deve ter pelo menos 10 caracteres.";
    }
    if (!paymentMethod) {
      newErrors.paymentMethod = "Selecione uma forma de pagamento.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsModalOpen(true);
    }
  };

  const handleCancel = () => {
    clearCart();
    navigate("/");
  };

  const order = {
    name,
    phone,
    address,
    paymentMethod,
    cart,
    timestamp: new Date(),
    status: "A FAZER",
  };

  return (
    <div className="delivery-form">
      <h2>Dados para Entrega</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nome Completo:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="phone">Telefone:</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="address">Endereço:</label>
          <input
            id="address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          {errors.address && <span className="error">{errors.address}</span>}
        </div>
        <div className="form-group">
          <label>Forma de Pagamento:</label>
          <div className="payment-methods">
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="PIX"
                checked={paymentMethod === "PIX"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              PIX
            </label>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="Cartão de Crédito/Débito"
                checked={paymentMethod === "Cartão de Crédito/Débito"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Cartão de Crédito/Débito
            </label>
          </div>
          {errors.paymentMethod && (
            <span className="error">{errors.paymentMethod}</span>
          )}
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
      {isModalOpen && (
        <ConfirmModal
          onClose={() => setIsModalOpen(false)}
          order={order}
          addOrderToHistory={addOrderToHistory}
          addOrderToQueue={addOrderToQueue}
        />
      )}
    </div>
  );
};
