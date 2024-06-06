import React from "react";
import "./styles.css"
import { CardapioCard } from "../CardapioCardComponent/CardapioCard";

export class Cardapio extends React.Component{
    render(){
        return(
            <div className="cardapio-container">
                <h3>Cardápio</h3>
                <section id="cardapio-cards">
                    <CardapioCard/>
                    <CardapioCard/>
                    <CardapioCard/>
                    <CardapioCard/>
                    <CardapioCard/>
                    <CardapioCard/>
                    <CardapioCard/>
                    <CardapioCard/>
                    <CardapioCard/>
                </section>
            </div>
        );
    }
}
