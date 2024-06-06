import React from "react";
import "./styles.css";
import { CardapioCard } from "../CardapioCardComponent/CardapioCard";
import AtumImg from "../../assets/images/pizzas/atum.jpeg";
import CarneSecaImg from "../../assets/images/pizzas/carne_seca.jpeg";
import FrangoImg from "../../assets/images/pizzas/frango.jpeg";
import GuiozaImg from "../../assets/images/pizzas/guioza.jpeg";
import PepperoniImg from "../../assets/images/pizzas/pepperoni.jpeg";
import QueijoImg from "../../assets/images/pizzas/queijo.jpeg";
import SashimiImg from "../../assets/images/pizzas/sashimi.jpeg";
import SushiImg from "../../assets/images/pizzas/sushi.jpeg";
import VegImg from "../../assets/images/pizzas/vegetariana.jpeg";

export class Cardapio extends React.Component {
  render() {
    return (
      <div className="cardapio-container">
        <h3>Cardápio</h3>
        <section id="cardapio-cards">
          <CardapioCard
            title="Pizza de Sushi"
            ingredientes="Massa de alga e arroz, molho shoyo,
                        sushi de salmão, sashimi, brócolis e
                        tomate"
            img = {SushiImg}
          />
          <CardapioCard
            title="Pizza de Pepperoni"
            ingredientes="Molho de tomate, queijo mussarela,
          pepperoni, orégano"
          img = {PepperoniImg}
          />
          <CardapioCard
            title="Pizza de Atum"
            ingredientes="Molho de tomate, queijo mussarela,
          atum, pepino, cebola e tomate"
          img = {AtumImg}
          />
          <CardapioCard
            title="Pizza de Sashimi"
            ingredientes="Molho shoyo, queijo mussarela,
          sashimi, pepino, brócolis e tomate"
          img = {SashimiImg}
          />
          <CardapioCard
            title="Pizza de Carne Seca"
            ingredientes="Molho de tomate, queijo mussarela,
          carne seca, manjericão e tomate"
          img = {CarneSecaImg}
          />
          <CardapioCard
            title="Pizza de Guioza"
            ingredientes="Molho de tomate,
          molho shoyo, queijo e guioza"
          img = {GuiozaImg}
          />
          <CardapioCard
            title="Pizza de Queijo"
            ingredientes="Molho de tomate, queijo mussarela,
          queijo de cabra, provolone,
          orégano, tomate e manjericão"
          img = {QueijoImg}
          />
          <CardapioCard
            title="Pizza de Frango"
            ingredientes="Molho de tomate, queijo mussarela,
          frango desfiado, requeijão e
          catupiry"
          img = {FrangoImg}
          />
          <CardapioCard
            title="Pizza Vegetariana"
            ingredientes="Molho de tomate, queijo mussarela,
          brócolis, pepino, cebola, tomate,
          azeitona e pimentão"
          img = {VegImg}
          />
        </section>
      </div>
    );
  }
}
