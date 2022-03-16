
const ItemDetail = ({producto}) => {

    return (
        <div className="tarjetaDescripcion">
            <img src={producto.img} alt={producto.nombre} />
            <div>
                <h3> {producto.nombre} </h3>
                <h4> {producto.descripcion} </h4>
                <p> {producto.descripcion2} </p>
                <p> Precio: ${producto.precio} </p>
            </div>
        </div>
    )
}

export default ItemDetail