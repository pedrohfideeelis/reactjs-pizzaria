import React from "react";
import Banner from "../PromoComponent/Banner";
import CardapioPreview from "../CardapioPreviewComponent/CardapioPreview";
import SobrePreview from "../SobrePreviewComponent/SobrePreview";

class Home extends React.Component{
    render(){
        return(
            <div>
                <Banner/>
                <CardapioPreview/>
                <SobrePreview/>
            </div>
        );
    }
}

export default Home;