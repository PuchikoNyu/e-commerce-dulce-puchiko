import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const {
    cartList,
    vaciarCarrito,
    eliminarId,
    finalizarCompra
  } = useCartContext();

  return (
    <>
      {cartList.length === 0 ? (
        <>
          <p>Su carrito se encuentra vacio...</p>
          <Link to="/">
            <button>Ir al Inicio</button>
          </Link>
        </>
      ) : (
        <>
          {cartList.map((item) => (
            <div className="cart">
              <p>Produto: {item.nombre}</p>
              <p>Cantidad: {item.cantidad} u.</p>
              <p>Precio: $ {item.precio * item.cantidad}</p>
              <button onClick={() => eliminarId(item.id)}> X </button>
            </div>
          ))}
          <p>
            Precio total: $
            {cartList.reduce(
              (acc, item) => acc + item.precio * item.cantidad,
              0
            )}
          </p>
          <button onClick={vaciarCarrito}> Vaciar carrito </button>
          <button onClick={finalizarCompra}> Finalizar Compra </button>
        </>
      )}
    </>
  );
}

export default Cart;
