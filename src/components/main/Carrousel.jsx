import React from "react";

const Carrousel = () => {
    return(
        <div className="container">
            <ul className="slider">
                <li id="slide1">
                    <img src="/media/nankurunaisa.jpeg" />
                </li>
                <li id="slide2">
                    <img src="/media/capilares.jpeg" />
                </li>
                <li id="slide3">
                    <img src="/media/jaboness.jpeg" />
                </li>
            </ul>
            <ul className="menu">
                <li>
                    <a href="#slide1"></a>
                </li>
                <li>
                    <a href="#slide2"></a>
                </li>
                <li>
                    <a href="#slide3"></a>
                </li>
            </ul>
        </div>
    );
};

export default Carrousel;
