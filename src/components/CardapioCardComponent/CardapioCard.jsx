import React from "react";
import "./styles.css"

export class CardapioCard extends React.Component {
  render() {
    return (
      <article id="pizza-card">
        <img src={this.props.img} alt={this.props.title} />
        <div className="card-infos">
          <h3>{this.props.title}</h3>
          <p>{this.props.ingredientes}</p>
          <button>Selecionar</button>
        </div>
      </article>
    );
  }
}
