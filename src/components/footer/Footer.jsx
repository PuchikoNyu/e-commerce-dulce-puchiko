import React from "react";
import Redes from"./Redes";
import Wsapp from "./Wsapp";
import './Footer.css';

const Footer = () => {
    return(
        <footer className="desarrollado">
            <div>
                <Redes />
                <Wsapp />
            </div>
            <p>Desarrollado por Florencia Belén De Souza</p>
        </footer>
    );
};

export default Footer;