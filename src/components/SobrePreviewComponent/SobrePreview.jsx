import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import VovoImg from "../../assets/images/vovo-beth.jpeg";

class SobrePreview extends React.Component {
  render() {
    return (
      <section id="sobre-preview">
        <img src={VovoImg} alt="Vovó Beth" />
        <div id="info">
          <h3>Conheça nossa história</h3>
          <p>
            Um pedacinho da Itália com um toque especial japonês! Tudo começou
            há décadas, quando a jovem Beth viajou para a Itália e se encantou
            com a culinária local, especialmente com as pizzas. Com o passar dos
            anos, ela aperfeiçoou suas habilidades culinárias, combinando
            técnicas italianas com ingredientes e sabores tradicionais
            japoneses.
          </p>
          <Link to="/sobre-nos">
            <button>Ler Mais</button>
          </Link>
        </div>
      </section>
    );
  }
}

export default SobrePreview;
