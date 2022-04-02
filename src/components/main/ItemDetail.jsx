import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useCartContext } from "../../context/CartContext";

const ItemDetail = ({ producto }) => {
  const [contador, setCount] = useState(null);

  const { agregarCarrito } = useCartContext();

  const onAdd = (cant) => {
    setCount(cant);
    agregarCarrito({ ...producto, cantidad: cant });
  };


  return (
    <div className="tarjetaDescripcion">
      <img src={producto.img} alt={producto.nombre} />
      <div>
        <h3> {producto.nombre} </h3>
        <h4> {producto.descripcion} </h4>
        <p> {producto.descripcion2} </p>
        <p> Precio: ${producto.precio} </p>
        {contador ? (
          <Link to="/cart">
            <button>Terminar compra</button>:
            <Link to="/">
              <button>Seguir Comprando</button>
            </Link>
          </Link>
        ) : (
          <ItemCount inicio={1} stock={10} onAdd={onAdd} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
