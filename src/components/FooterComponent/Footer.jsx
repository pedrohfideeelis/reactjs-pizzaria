import React from "react";
import "./styles.css";
import LogoImg from "../../assets/images/PIZZA_LOGO_HORIZONTAL.png";
import WhatsApp from "../../assets/images/icons/whatsapp.png";
import Instagram from "../../assets/images/icons/instagram.png";
import Telefone from "../../assets/images/icons/telefone.png";
import Email from "../../assets/images/icons/e-mail.png";
import Local from "../../assets/images/icons/local.png";
import { Link } from "react-router-dom";

export class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer-content">
          <div id="site-map">
            <div className="footer-section">
              <h4>Menu</h4>
              <ul>
                <li><Link to="/">Promoções</Link></li>
                <li><Link to="/cardapio">Cardápio</Link></li>
                <li><Link to="/sobre-nos">Sobre Nós</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Cardápio</h4>
              <ul>
                <li><Link href="/cardapio">Pizzas</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Sobre Nós</h4>
              <ul>
                <li><Link href="/sobre-nos">Nossa História</Link></li>
                <li><Link href="/sobre-nos">Nossa Equipe</Link></li>
                <li><Link href="/sobre-nos">A Pizzaria</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Termos</h4>
              <ul>
                <li><Link href="/termos">Política de Privacidade</Link></li>
                <li><Link href="/termos">Termos de Uso</Link></li>
              </ul>
            </div>
          </div>

          <div id="contact-brand">
            <div className="footer-brand">
              <a href="/"><img src={LogoImg} alt="Pizza Logo" /></a>
            </div>
            <div id="contact">
              <a href="https://wa.me/5562994500960"><img src={WhatsApp} alt="WhatsApp" /></a>
              <a href="/https://instagram.com/__uaifideeelis"><img src={Instagram} alt="Instagram" /></a>
              <a href="/"><img src={Telefone} alt="Telefone" /></a>
              <a href="/"><img src={Email} alt="Email" /></a>
              <a href="/"><img src={Local} alt="Local" /></a>
            </div>
          </div>
        </div>

        <div id="copy">
          <p>© 2024 Vovó Beth Pizzaria. All right reserved.</p>
        </div>
      </footer>
    );
  }
}
