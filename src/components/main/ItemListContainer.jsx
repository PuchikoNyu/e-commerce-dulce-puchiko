import React from "react";
import Cards from "./Cards";
import Carrousel from "./Carrousel";
import './ItemListContainer.css';

const ItemListContainer = ( {saludo, nombre} ) => {
    return(
        <div className="main">
            <Carrousel />
            <Cards />
        </div>
    );
};

export default ItemListContainer;