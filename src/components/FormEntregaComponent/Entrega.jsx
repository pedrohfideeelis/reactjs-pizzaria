import React from "react";
import "./styles.css";

export class Entrega extends React.Component {
  render() {
    return (
      <div className="delivery-form">
        <h2>Dados para Entrega</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Nome Completo:</label>
            <input
              type="text"
              id="name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Telefone:</label>
            <input
              type="text"
              id="phone"
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Endereço:</label>
            <textarea
              id="address"
            ></textarea>
          </div>
          <div className="form-group">
            <label>Forma de Pagamento:</label>
            <div className="payment-methods">
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="PIX"
                />
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
            <button type="button" className="cancel-button">
              CANCELAR
            </button>
            <button type="submit" className="submit-button">
              ENVIAR
            </button>
          </div>
        </form>
      </div>
    );
  }
}
