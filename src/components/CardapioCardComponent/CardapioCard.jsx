import React from "react";
import SushiImg from "../../assets/images/pizzas/sushi.jpeg";
import "./styles.css"

export class CardapioCard extends React.Component {
  render() {
    return (
      <article id="pizza-card">
        <img src={SushiImg} alt="Pizza de Sushi" />
        <div className="card-infos">
          <h3>Pizza de Sushi</h3>
          <p>
            Massa de alga e arroz, molho shoyo, sushi de salmão, sashimi,
            brócolis e tomate
          </p>
          <button>Selecionar</button>
        </div>
      </article>
    );
  }
}
