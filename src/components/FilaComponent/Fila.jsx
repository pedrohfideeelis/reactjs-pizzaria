import React from "react";
import "./styles.css";

export class Fila extends React.Component {
  render() {
    return (
      <>
        <div class="pedidos-container">
          <h2>Pedidos</h2>
          <div class="fila">FILA: 15</div>

          <div class="pedido">
            <div class="pedido-info">
              <p>
                <strong>Pizza de Sushi - P</strong> (Sem Pepino)Fatiar em 4
                pedaços
              </p>
            </div>
            <div class="pedido-horario">19:36</div>
            <button class="ver-pedido">Ver Pedido</button>
            <div class="status entregue">ENTREGUE</div>
          </div>

          <div class="pedido">
            <div class="pedido-info">
              <p>
                <strong>Pizza de Calabresa - G</strong> (Sem Cebola)Fatiar em 8
                pedaços
              </p>
            </div>
            <div class="pedido-horario">20:10</div>
            <button class="ver-pedido">Ver Pedido</button>
            <div class="status a-caminho">À CAMINHO</div>
          </div>

          <div class="pedido">
            <div class="pedido-info">
              <p>
                <strong>Pizza de Queijo - M</strong>Não fatiar
              </p>
            </div>
            <div class="pedido-horario">21:00</div>
            <button class="ver-pedido">Ver Pedido</button>
            <div class="status cancelado">CANCELADO</div>
          </div>
        </div>
      </>
    );
  }
}
