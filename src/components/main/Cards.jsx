import { useState, useEffect, useContext } from "react";
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
            .then((resp) => setProductos(resp.filter(prod => prod.categoria == categoryId )))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        } else {
            getFetch
            .then ((respuesta) => {
                setProductos(respuesta)
                setLoading(false)
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

                        <Link to={`/description/${prod.id}`}>
                            <button>Descripción</button>
                        </Link>
                    </div>
            ) }
        </div>
    );
};

export default Cards;