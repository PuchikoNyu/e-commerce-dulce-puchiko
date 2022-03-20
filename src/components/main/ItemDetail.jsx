import { useState } from "react"
import { Link } from "react-router-dom"
import ItemCount from "./ItemCount"

const ItemDetail = ({producto}) => {

    const [contador, setCount] = useState (null)
    const onAdd = (cant) =>{
        console.log(cant)
        setCount(cant)
    }

    return (
        <div className="tarjetaDescripcion">
            <img src={producto.img} alt={producto.nombre} />
            <div>
                <h3> {producto.nombre} </h3>
                <h4> {producto.descripcion} </h4>
                <p> {producto.descripcion2} </p>
                <p> Precio: ${producto.precio} </p>
                { contador ?
                <Link to='/cart'>
                    <button>Ir al Carrito</button>
                </Link>
                :
                    <ItemCount  initial={1} stock={5} onAdd={onAdd} />
                }
            </div>
        </div>
    )
}

export default ItemDetail