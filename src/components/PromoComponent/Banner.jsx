import React from "react";
import BannerImg from "../../assets/images/BANNER.png"
import "./styles.css"


class Banner extends React.Component{
    render() {
        return(
            <div id="promo-banner">
                <img src={BannerImg} alt="Banner Promocional" />
            </div>
        );
    }
}

export default Banner;