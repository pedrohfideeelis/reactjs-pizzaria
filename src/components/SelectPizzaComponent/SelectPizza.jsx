import React from "react";
import "./styles.css";

export class SelectPizza extends React.Component {
  render() {
    return (
      <div className="modal">
        <div className="modal-content">
          <div className="pizza-info">
            <h1>{this.props.pizzaName}</h1>
            <div className="size-options">
              <span className="size">P</span>
              <span className="size">M</span>
              <span className="size">G</span>
            </div>
            <img
              src={this.props.pizzaImg}
              alt={this.props.pizzaName}
              className="pizza-img"
              style={{ width: "200px", height: "150px" }}
            />
            <div className="price">Valor R${this.props.pizzaPrice}</div>
          </div>
          <div className="obs">
            <h2>Observações</h2>
            <textarea
              name="obs"
              id="obs"
              cols="30"
              rows="10"
              placeholder="Escreva suas observações aqui"
            ></textarea>
          </div>
          <div className="buttons">
            <button className="add-to-cart">ADICIONAR AO CARRINHO</button>
            <button className="voltar" onClick={this.props.onClose}>
              VOLTAR
            </button>
          </div>
        </div>
      </div>
    );
  }
}
