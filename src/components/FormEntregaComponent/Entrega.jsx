import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import InputMask from "react-input-mask";
import ConfirmModal from "../ConfirmComponent/ConfirmModal";
import { CartContext } from "../CartComponent/CartContext";
import OrderContext from "../OrderComponent/OrderContext";
import "./styles.css";

export const Entrega = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [errors, setErrors] = useState({});
  const { clearCart, cart } = useContext(CartContext);
  const { addOrder } = useContext(OrderContext);
  const navigate = useNavigate();

  const validate = () => {
    let errors = {};
    if (name.trim() === "") {
      errors.name = "O nome é obrigatório.";
    } else if (name.length < 10) {
      errors.name = "O nome deve ter pelo menos 10 caracteres.";
    }
    if (phone.trim() === "") {
      errors.phone = "O telefone é obrigatório.";
    } else {
      const phoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/;
      if (!phone.match(phoneRegex)) {
        errors.phone =
          "O telefone deve estar no formato (XX) XXXXX-XXXX e conter 11 caracteres numéricos.";
      }
    }
    if (address.trim() === "") {
      errors.address = "O endereço é obrigatório.";
    } else if (address.length < 10) {
      errors.address = "O endereço deve ter pelo menos 10 caracteres.";
    }
    if (!paymentMethod) {
      errors.paymentMethod = "A forma de pagamento é obrigatória.";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setIsModalOpen(true);
    } else {
      setErrors(validationErrors);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirm = () => {
    const newOrder = {
      id: Date.now(),
      name,
      phone,
      address,
      paymentMethod,
      cart,
      timestamp: new Date(),
      status: "A FAZER",
    };
    addOrder(newOrder);
    clearCart();
    navigate("/");
  };

  const handleCancel = () => {
    clearCart();
    navigate("/cardapio");
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
          <InputMask
            mask="(99) 99999-9999"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          >
            {(inputProps) => <input {...inputProps} type="text" id="phone" />}
          </InputMask>
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
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              PIX
            </label>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="Cartão de Crédito/Débito"
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
        <ConfirmModal onClose={handleCloseModal} onConfirm={handleConfirm} />
      )}
    </div>
  );
};
