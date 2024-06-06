import React from "react";
import "./styles.css";
import LogoImg from "../../assets/images/PIZZA_LOGO.png";
import WhatsApp from "../../assets/images/icons/whatsapp.png";
import Instagram from "../../assets/images/icons/instagram.png";
import Telefone from "../../assets/images/icons/telefone.png";
import Email from "../../assets/images/icons/e-mail.png";
import Local from "../../assets/images/icons/local.png";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer-content">
          <div id="site-map">
            <div className="footer-section">
              <h4>Menu</h4>
              <ul id="menu">
                <li id="map-link">
                  <a href="/">Promoções</a>
                </li>
                <li id="map-link">
                  <a href="/">Cardápio</a>
                </li>
                <li id="map-link">
                  <a href="/">Sobre Nós</a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Cardápio</h4>
              <ul id="cardapio">
                <li id="map-link">
                  <a href="/">Pizzas</a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Sobre Nós</h4>
              <ul id="sobre">
                <li id="map-link">
                  <a href="/">Nossa História</a>
                </li>
                <li id="map-link">
                  <a href="/">Nossa Equipe</a>
                </li>
                <li id="map-link">
                  <a href="/">A Pizzaria</a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Termos</h4>
              <ul id="termos">
                <li>
                  <a href="/">Política de Privacidade</a>
                </li>
                <li>
                  <a href="/">Termos de Uso</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-brand">
            <a href="/">
              <img src={LogoImg} alt="Pizza Logo" />
            </a>
          </div>

          <div id="contact">
            <a href="/" id="contact-item">
              <img src={WhatsApp} alt="WhatsApp" />
            </a>
            <a href="/" id="contact-item">
              <img src={Instagram} alt="Instagram" />
            </a>
            <a href="/" id="contact-item">
              <img src={Telefone} alt="Telefone" />
            </a>
            <a href="/" id="contact-item">
              <img src={Email} alt="Email" />
            </a>
            <a href="/" id="contact-item">
              <img src={Local} alt="Local" />
            </a>
          </div>
        </div>

        <div id="copy">
          <p>© 2024 Vovó Beth Pizzaria. All right reserved.</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
