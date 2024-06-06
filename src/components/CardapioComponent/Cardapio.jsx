import React from "react";
import "./styles.css";
import { CardapioCard } from "../CardapioCardComponent/CardapioCard";

export class Cardapio extends React.Component{
    render(){
        return(
            <section id="pizza-cards">
                <CardapioCard/>
            </section>
        );
    }
}
