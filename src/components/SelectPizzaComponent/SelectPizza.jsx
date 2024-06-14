import React from "react";
import "./styles.css";

export class SelectPizza extends React.Component {
  state = {
    selectedSize: "M",
    pizzaPrices: {
      P: this.props.pizzaPrices.P,
      M: this.props.pizzaPrices.M,
      G: this.props.pizzaPrices.G,
    },
    observations: "",
  };

  handleSizeChange = (size) => {
    this.setState({ selectedSize: size });
  };

  handleObservationChange = (event) => {
    this.setState({ observations: event.target.value });
  };

  render() {
    const { selectedSize, pizzaPrices, observations } = this.state;

    return (
      <div className="modal">
        <div className="modal-content">
          <div className="pizza-info">
            <h1>{this.props.pizzaName}</h1>
            <div className="size-options">
              <span
                className={`size ${selectedSize === "P" ? "selected" : ""}`}
                onClick={() => this.handleSizeChange("P")}
              >
                P
              </span>
              <span
                className={`size ${selectedSize === "M" ? "selected" : ""}`}
                onClick={() => this.handleSizeChange("M")}
              >
                M
              </span>
              <span
                className={`size ${selectedSize === "G" ? "selected" : ""}`}
                onClick={() => this.handleSizeChange("G")}
              >
                G
              </span>
            </div>
            <img
              src={this.props.pizzaImg}
              alt={this.props.pizzaName}
              className="pizza-img"
              style={{ width: "200px", height: "200px" }}
            />
            <div className="price">R${pizzaPrices[selectedSize]},00</div>
          </div>
          <div className="obs">
            <h2>Observações:</h2>
            <textarea
              name="obs"
              id="obs"
              cols="30"
              rows="10"
              placeholder="Escreva suas observações aqui"
              value={observations}
              onChange={this.handleObservationChange}
            ></textarea>
          </div>
          <div className="buttons">
            <button
              className="add-to-cart"
              onClick={() =>
                this.props.onAddToCart({
                  pizzaName: this.props.pizzaName,
                  pizzaImg: this.props.pizzaImg,
                  pizzaPrice: pizzaPrices[selectedSize],
                  pizzaSize: selectedSize,
                  observations: observations,
                })
              }
            >
              ADICIONAR AO CARRINHO
            </button>
            <button className="voltar" onClick={this.props.onClose}>
              VOLTAR
            </button>
          </div>
        </div>
      </div>
    );
  }
}
