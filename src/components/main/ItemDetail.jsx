
const ItemDetail = ({producto}) => {
    return (
        <div className="tarjeta">
            <img src={producto.img} alt={producto.nombre} />
            <h3> {producto.nombre} </h3>
            <p> Tipo: {producto.tipo} </p>
            <p> Variedad: {producto.variedad} </p>
        </div>
    )
}

export default ItemDetail