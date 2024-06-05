import React from "react";
import "./styles.css";
import LogoImg from "../../assets/images/PIZZA_LOGO.png";
import WhatsApp from "../../assets/images/icons/whatsapp.png"
import Instagram from "../../assets/images/icons/instagram.png"
import Telefone from "../../assets/images/icons/telefone.png"
import Email from "../../assets/images/icons/e-mail.png"
import Local from "../../assets/images/icons/local.png"

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div id="site-map">
          <ul id="menu">
            <a href="/">
              <li id="map-link">Promoções</li>
            </a>
            <a href="/">
              <li id="map-link">Cardápio</li>
            </a>
            <a href="/">
              <li id="map-link">Sobre Nós</li>
            </a>
          </ul>

          <ul id="cardapio">
            <a href="/">
              <li id="map-link">Pizzas</li>
            </a>
          </ul>

          <ul id="sobre">
            <li id="map-link">Nossa História</li>
            <li id="map-link">Nossa Equipe</li>
            <li id="map-link">A pizzaria</li>
          </ul>
        </div>

        <div id="copy">
          <p>© 2024 Vovó Beth Pizzaria. All right reserved.</p>
        </div>

        <div id="contact">
          <a href="/" id="contact-item"><img src={WhatsApp} alt="WhatsApp" /></a>
          <a href="/" id="contact-item"><img src={Instagram} alt="Instagram" /></a>
          <a href="/" id="contact-item"><img src={Telefone} alt="Telefone" /></a>
          <a href="/" id="contact-item"><img src={Email} alt="Email" /></a>
          <a href="/" id="contact-item"><img src={Local} alt="Local" /></a>
        </div>

        <div className="footer-brand">
          <a href="/">
            <img src={LogoImg} alt="Pizza Logo" />
          </a>
        </div>
      </footer>
    );
  }
}
