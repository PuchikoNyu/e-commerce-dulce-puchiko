
const ItemDetail = ({producto}) => {

    return (
        <div className="tarjeta">
            <img src={producto.img} alt={producto.nombre} />
            <h3> {producto.nombre} </h3>
            <p> Categoria: {producto.categoria} </p>
            <p> Sub Categoria: {producto.subcategoria} </p>
            <p> Variedad: {producto.variedad} </p>
            <p> Tipo: {producto.tipo} </p>
            <p> Precio: ${producto.precio} </p>
        </div>
    )
}

export default ItemDetail