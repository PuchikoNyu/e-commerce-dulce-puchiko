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

    orden.items = cartList.map(cartItem => {
      const id = cartItem.id;
      const nombre = cartItem.nombre;
      const precio = cartItem.precio * cartItem.cantidad;

    return {id, nombre, precio} 
  })
  console.log(orden)

  const db= getFirestore()
  const queryCollectionSet = collection(db, "orders")
  addDoc(queryCollectionSet, orden)
  .then(resp => setId(resp.id))
  .catch(err => console.error(err))
  .finally(() => console.log('terminado'))

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
          {cartList.map((prod) => (
            <div className="cart">
              <img src={prod.img} alt={prod.nombre} />
              <p>Produto: {prod.nombre}</p>
              <p>Cantidad: {prod.cantidad} u.</p>
              <p>Precio: $ {prod.precio * prod.cantidad}</p>
              <button onClick={() => eliminarId(prod.id)}> X </button>
            </div>
          ))}
          <p className="total">
            Precio total: $
            {cartList.reduce(
              (acc, prod) => acc + prod.precio * prod.cantidad,
              0
            )}
          </p>
          <form
            onSubmit={generarOrden}
          >
            <p>Nombre:</p>
              <input
                  type="text"
                  name="name"
                  placeholder="nombre completo"
                  value={dataForm.name}
                  required="required"
                  maxLength={30}
                  onChange={handleChange}
              /><br />
            <p>Teléfono:</p>
              <input
                  type="phone"
                  name="phone"
                  placeholder="teléfono"
                  value={dataForm.phone}
                  required="required"
                  minLength={8}
                  maxLength={10}
                  onChange={handleChange}
              /><br />
            <p>Mail:</p>
              <input
                  type="email"
                  name="email"
                  placeholder="email@email.com"
                  value={dataForm.email}
                  required="required"
                  onChange={handleChange}
              /><br />
              <p> * Al marcar seleccionar compra se generará el talon de pago con su numero de orden.</p>
              <button>Finalizar Compra</button>
          </form>
          <button onClick={vaciarCarrito}> Vaciar carrito </button>
        </>
      )}
    </>
  );
}

export default Cart;

// onClick={ finalizarCompra }