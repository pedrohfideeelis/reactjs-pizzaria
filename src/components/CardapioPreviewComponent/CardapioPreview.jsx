import React from "react";
import AtumImg from "../../assets/images/pizzas/atum.jpeg";
import CarneSecaImg from "../../assets/images/pizzas/carne_seca.jpeg";
import FrangoImg from "../../assets/images/pizzas/frango.jpeg";
import GuiozaImg from "../../assets/images/pizzas/guioza.jpeg";
import PepperoniImg from "../../assets/images/pizzas/pepperoni.jpeg";
import QueijoImg from "../../assets/images/pizzas/queijo.jpeg";
import SashimiImg from "../../assets/images/pizzas/sashimi.jpeg";
import SushiImg from "../../assets/images/pizzas/sushi.jpeg";
import VegImg from "../../assets/images/pizzas/vegetariana.jpeg";
import "./styles.css";

class CardapioPreview extends React.Component {
  render() {
    return (
      <section id="cardapio-preview">
        <h2>CARDÁPIO</h2>
        <div id="pizza-cards">
          <div className="pizza-card">
            <img src={AtumImg} alt="Pizza de Atum" />
            <button>PEÇA AGORA</button>
          </div>
          <div className="pizza-card">
            <img src={CarneSecaImg} alt="Pizza de Carne Seca" />
            <button>PEÇA AGORA</button>
          </div>
          <div className="pizza-card">
            <img src={FrangoImg} alt="Pizza de Frango" />
            <button>PEÇA AGORA</button>
          </div>
          <div className="pizza-card">
            <img src={GuiozaImg} alt="Pizza de Guioza" />
            <button>PEÇA AGORA</button>
          </div>
          <div className="pizza-card">
            <img src={PepperoniImg} alt="Pizza de Pepperoni" />
            <button>PEÇA AGORA</button>
          </div>
          <div className="pizza-card">
            <img src={QueijoImg} alt="Pizza de Queijo" />
            <button>PEÇA AGORA</button>
          </div>
          <div className="pizza-card">
            <img src={SashimiImg} alt="Pizza de Sashimi" />
            <button>PEÇA AGORA</button>
          </div>
          <div className="pizza-card">
            <img src={SushiImg} alt="Pizza de Sushi" />
            <button>PEÇA AGORA</button>
          </div>
          <div className="pizza-card">
            <img src={VegImg} alt="Pizza Vegetariana" />
            <button>PEÇA AGORA</button>
          </div>
        </div>
      </section>
    );
  }
}

export default CardapioPreview;
