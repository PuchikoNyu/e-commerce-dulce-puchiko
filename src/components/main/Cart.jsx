import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore"

function Cart() {

  const [dataForm, setDataForm] = useState({
    email: '', phone: '', name: ''
  })

  const [id, setId] = useState('')

  const { cartList, vaciarCarrito, eliminarId, finalizarCompra } = useCartContext();

  const generarOrden = async (e) => {
    e.preventDefault();

    let orden = {}

    orden.buyer = dataForm
    // orden.total = precioTotal();

    orden. items = cartList.map(cartItem => {
      const id = cartItem.id;
      const nombre = cartItem.name;
      const precio = cartItem.precio * cartItem.cantidad;

    return {id, nombre, precio} 
  })
  console.log(orden)

  const db= getFirestore()
  const queryCollectionSet = collection(db, 'orders')
  addDoc(queryCollectionSet, orden)
  .then(resp => setId(resp.id))
  .catch(err => console.error(err))
  .finally(() => console.log('termino'))

  }
  const handleChange = (e) => {
      setDataForm (
      {
        ...dataForm,
        [e.target.name]: e.target.value
      })
  }

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
          <form
            onSubmit={generarOrden}
          >
              <input
                  type="text"
                  name="name"
                  placeholder="nombre completo"
                  value={dataForm.name}
                  onChange={handleChange}
              /><br />
              <input
                  type="text"
                  name="phone"
                  placeholder="teléfono"
                  value={dataForm.phone}
                  onChange={handleChange}
              /><br />
              <input
                  type="email"
                  name="email"
                  placeholder="email@email.com"
                  value={dataForm.email}
                  onChange={handleChange}
              /><br />
              <p> Al marcar seleccionar compra se generará el talon de pago con su numero de orden.</p>
              <button>Finalizar Compra</button>
          </form>
        </>
      )}
    </>
  );
}

export default Cart;

// onClick={ finalizarCompra }