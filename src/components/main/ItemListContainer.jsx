import React from "react";
import Seccion from "./Seccion"
import './ItemListContainer.css';

const ItemListContainer = ( {saludo, nombre} ) => {
    return(
        <div className="main">
            <Seccion />
        </div>
    );
};

export default ItemListContainer;