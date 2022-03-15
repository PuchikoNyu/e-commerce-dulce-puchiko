import React from "react";
import Carrousel from "./Carrousel";
import Cards from "./Cards";
import ItemDetailContainer from "./ItemDetailContainer";

const Seccion = () => {
    return(
        <div className="seccion">
            <Carrousel />
            <Cards />
            <ItemDetailContainer />
        </div>
    );
};

export default Seccion;