import React from "react";
import "./styles.css";
import { CardapioCard } from "../CardapioCardComponent/CardapioCard";
import { SelectPizza } from "../SelectPizzaComponent/SelectPizza";
import { CartContext } from "../CartComponent/CartContext";
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
  static contextType = CartContext;
  state = {
    selectedPizza: null,
  };

  handleSelectPizza = (pizza) => {
    this.setState({ selectedPizza: pizza });
  };

  handleCloseModal = () => {
    this.setState({ selectedPizza: null });
  };

  handleAddToCart = (pizza) => {
    this.context.addToCart(pizza);
    this.setState({ selectedPizza: null });
  };

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
            img={SushiImg}
            onSelect={() =>
              this.handleSelectPizza({
                pizzaName: "Pizza de Sushi",
                pizzaImg: SushiImg,
                pizzaPrice: 50,
              })
            }
          />
          <CardapioCard
            title="Pizza de Pepperoni"
            ingredientes="Molho de tomate, queijo mussarela,
          pepperoni, orégano"
            img={PepperoniImg}
            onSelect={() =>
              this.handleSelectPizza({
                pizzaName: "Pizza de Pepperoni",
                pizzaImg: PepperoniImg,
                pizzaPrice: 40,
              })
            }
          />
          <CardapioCard
            title="Pizza de Atum"
            ingredientes="Molho de tomate, queijo mussarela, atum, pepino, cebola e tomate"
            img={AtumImg}
            onSelect={() =>
              this.handleSelectPizza({
                pizzaName: "Pizza de Atum",
                pizzaImg: AtumImg,
                pizzaPrice: 45,
              })
            }
          />
          <CardapioCard
            title="Pizza de Sashimi"
            ingredientes="Molho shoyo, queijo mussarela, sashimi, pepino, brócolis e tomate"
            img={SashimiImg}
            onSelect={() =>
              this.handleSelectPizza({
                pizzaName: "Pizza de Sashimi",
                pizzaImg: SashimiImg,
                pizzaPrice: 55,
              })
            }
          />
          <CardapioCard
            title="Pizza de Carne Seca"
            ingredientes="Molho de tomate, queijo mussarela, carne seca, manjericão e tomate"
            img={CarneSecaImg}
            onSelect={() =>
              this.handleSelectPizza({
                pizzaName: "Pizza de Carne Seca",
                pizzaImg: CarneSecaImg,
                pizzaPrice: 47,
              })
            }
          />
          <CardapioCard
            title="Pizza de Guioza"
            ingredientes="Molho de tomate, molho shoyo, queijo e guioza"
            img={GuiozaImg}
            onSelect={() =>
              this.handleSelectPizza({
                pizzaName: "Pizza de Guioza",
                pizzaImg: GuiozaImg,
                pizzaPrice: 48,
              })
            }
          />
          <CardapioCard
            title="Pizza de Queijo"
            ingredientes="Molho de tomate, queijo mussarela, queijo de cabra, provolone, orégano, tomate e manjericão"
            img={QueijoImg}
            onSelect={() =>
              this.handleSelectPizza({
                pizzaName: "Pizza de Queijo",
                pizzaImg: QueijoImg,
                pizzaPrice: 35,
              })
            }
          />
          <CardapioCard
            title="Pizza de Frango"
            ingredientes="Molho de tomate, queijo mussarela, frango desfiado, requeijão e catupiry"
            img={FrangoImg}
            onSelect={() =>
              this.handleSelectPizza({
                pizzaName: "Pizza de Frango",
                pizzaImg: FrangoImg,
                pizzaPrice: 42,
              })
            }
          />
          <CardapioCard
            title="Pizza Vegetariana"
            ingredientes="Molho de tomate, queijo mussarela, brócolis, pepino, cebola, tomate, azeitona e pimentão"
            img={VegImg}
            onSelect={() =>
              this.handleSelectPizza({
                pizzaName: "Pizza Vegetariana",
                pizzaImg: VegImg,
                pizzaPrice: 38,
              })
            }
          />
        </section>
        {this.state.selectedPizza && (
          <SelectPizza
            pizzaName={this.state.selectedPizza.pizzaName}
            pizzaImg={this.state.selectedPizza.pizzaImg}
            pizzaPrice={this.state.selectedPizza.pizzaPrice}
            onAddToCart={this.handleAddToCart}
            onClose={this.handleCloseModal}
          />
        )}
      </div>
    );
  }
}
