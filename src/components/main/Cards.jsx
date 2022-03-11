import { useState, useEffect } from "react";
import ItemCount from './ItemCount';
import { getFetch } from "./ItemsList";

const Cards = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect (() => {
        getFetch
    .then ((respuesta) => {
    return respuesta
})
    .then((resp) => setProductos(resp))
    .catch(err => console.log(err))
    .finally(()=> setLoading(false))

    }, [])
    
    return (
        <div className="items">
            {   loading ? <h2>Cargando...</h2>
                :
                productos.map((prod) =>
                    <div key ={prod.id} className="tarjeta">
                        <img src={prod.img} alt={prod.nombre} />
                        <h3> {prod.nombre} </h3>
                        <p> Tipo: {prod.tipo} </p>
                        <p> Variedad: {prod.variedad} </p>
                        <p> Precio: ${prod.precio} </p>
                        <ItemCount />
                        <button className="botonUno">Agregar</button>
                        <button className="botonUno">Descripción</button>
                    </div>
            ) }
        </div>
    );
};

export default Cards;