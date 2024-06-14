import React from "react";
import "./styles.css";

export class Historico extends React.Component {
  render() {
    return (
      <div class="historico">
        <h2>Histórico</h2>
        <div class="pedido">
          <div class="pedido-info">
            <p>Pizza de Sushi - P</p>
            <p>(Sem Pepino)</p>
            <p>Fatiar em 4 pedaços</p>
          </div>
          <div class="pedido-action">
            <span class="pedido-data">11/01 - 20:00</span>
            <button class="ver-pedido">Ver Pedido</button>
          </div>
        </div>
        <div class="pedido">
          <div class="pedido-info">
            <p>Pizza de Calabresa - G</p>
            <p>(Sem Cebola)</p>
            <p>Fatiar em 8 pedaços</p>
          </div>
          <div class="pedido-action">
            <span class="pedido-data">12/01 - 20:10</span>
            <button class="ver-pedido">Ver Pedido</button>
          </div>
        </div>
        <div class="pedido">
          <div class="pedido-info">
            <p>Pizza de Queijo - M</p>
            <p>Não fatiar</p>
          </div>
          <div class="pedido-action">
            <span class="pedido-data">12/01 - 21:00</span>
            <button class="ver-pedido">Ver Pedido</button>
          </div>
        </div>
      </div>
    );
  }
}
