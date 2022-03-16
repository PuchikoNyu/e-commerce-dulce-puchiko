import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ItemCount from './ItemCount';
import { getFetch } from "./ItemsList";

const Cards = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect (() => {

        if (categoryId) {
            
            getFetch
            .then((resp) => setProductos(resp.filter(prod => prod.categoria === categoryId )))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        } else {
            getFetch
            .then ((respuesta) => {
                setProductos(respuesta)
            })
        }
}, [categoryId])
    
    return (
        <div className="items">
            {   loading ? <h2>Cargando...</h2>
                :
                productos.map((prod) =>
                    <div key={prod.id} className="tarjeta">
                        <img src={prod.img} alt={prod.nombre} />
                        <h3> {prod.nombre} </h3>
                        <p> Tipo: {prod.tipo} </p>
                        <p> Variedad: {prod.variedad} </p>
                        <p> Precio: ${prod.precio} </p>
                        <ItemCount />
                        <button className="botonUno">Agregar</button>
                        <Link to={`/description/${prod.id}`} className="botonUno">
                            <button>Descripción</button>
                        </Link>
                    </div>
            ) }
        </div>
    );
};

export default Cards;