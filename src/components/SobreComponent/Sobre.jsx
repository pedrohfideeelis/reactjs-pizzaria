import React from "react";
import "./styles.css";
import VovoImg from "../../assets/images/vovo-beth.jpeg";
import VovoImg2 from "../../assets/images/vovo-beth2.png";
import GiuzzepeImg from "../../assets/images/giuzeppe.png";
import AnaImg from "../../assets/images/ana-maria.png";
import GloriaImg from "../../assets/images/gloria.png";
import GiuzzepeJrImg from "../../assets/images/giu-jr.png";
import MarceloImg from "../../assets/images/marcelo.png";
import PizzariaImg from "../../assets/images/pizzaria.png";

export class Sobre extends React.Component {
  render() {
    return (
      <section className="sobre-nos">
        <section className="nossa-historia">
          <h1>Nossa História</h1>
          <div className="content">
            <img src={VovoImg} alt="Foto Vovó Beth" />
            <p>
              Um pedacinho da Itália com um toque especial japonês! Tudo começou
              há décadas, quando a jovem Beth viajou para a Itália e se encantou
              com a culinária local, especialmente com as pizzas. Com o passar
              dos anos, ela aperfeiçoou suas habilidades culinárias, combinando
              técnicas italianas com ingredientes e sabores tradicionais
              japoneses.
            </p>
          </div>
        </section>
        <section className="nossa-equipe">
          <h2>Nossa Equipe</h2>
          <div className="membros">
            <div className="membro">
              <img src={VovoImg2} alt="Vovó Beth" />
              <h3>Vovó Beth</h3>
              <p>Pizzaiolo e Gerente</p>
            </div>
            <div className="membro">
              <img src={GiuzzepeImg} alt="Giuzzepe" />
              <h3>Giuzzepe</h3>
              <p>Pizzaiolo Chefe</p>
            </div>
            <div className="membro">
              <img src={AnaImg} alt="Ana Maria" />
              <h3>Ana Maria</h3>
              <p>Pizzaiolo Ajudante</p>
            </div>
            <div className="membro">
              <img src={GloriaImg} alt="Glória" />
              <h3>Glória</h3>
              <p>Administrativo</p>
            </div>
            <div className="membro">
              <img src={GiuzzepeJrImg} alt="Giuzzepe Jr." />
              <h3>Giuzzepe Jr.</h3>
              <p>Enregador</p>
            </div>
            <div className="membro">
              <img src={MarceloImg} alt="Marcelo" />
              <h3>Marcelo</h3>
              <p>Garçom</p>
            </div>
          </div>
          <section className="pizzaria">
            <h2>A Pizzaria</h2>
            <p>
              Criada em 1824, a Vovó Beth Pizzaria conta com um ambiente
              aconchegante e familiar, combinando aspectos japoneses e italianos
              nas deliciosas pizzas artesanais e feitas com muito amor pela Vovó
              Beth e sua equipe.
            </p>
            <img src={PizzariaImg} alt="Pizzaria" />
          </section>
        </section>
      </section>
    );
  }
}
