import React from "react";
import "./styles.css";

export class SelectPizza extends React.Component {
  render() {
    return (
      <div className="selection">
        <div className="pizza-info">
          <h1>{this.props.pizzaname}</h1>
          <div className="sizes-options">
            <span className="size">P</span>
            <span className="size">M</span>
            <span className="size">G</span>
          </div>
          <img src={this.props.img} alt="" />
        </div>
      </div>
    );
  }
}
