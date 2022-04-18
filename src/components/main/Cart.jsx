import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { useState } from "react";
import { addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore";

function Cart() {

  const [dataForm, setDataForm] = useState({
    email: '', phone: '', name: ''
  })

  const [id, setId] = useState('')

  const { cartList, vaciarCarrito, eliminarId } = useCartContext();

  const generarOrden = async (e) => {
    e.preventDefault();

    let orden = {}

    orden.buyer = dataForm

    orden.items = cartList.map(cartItem => {
      const id = cartItem.id;
      const nombre = cartItem.nombre;
      const cantidad = cartItem.cantidad;
      const precio = cartItem.precio * cartItem.cantidad;

    return {id, nombre, cantidad, precio} 
  })
  orden.date= serverTimestamp()

  const db= getFirestore()
  const queryCollectionSet = collection(db, "ordenes")
  addDoc(queryCollectionSet, orden)
  .then(resp => setId(resp.id))
  .then(vaciarCarrito())
  .catch(err => console.error(err))

  }
  
  const handleChange = (e) => {
      setDataForm (
      {
        ...dataForm,
        [e.target.name]: e.target.value
      })
  }

  return (
    <div className="fA">
      {cartList.length === 0 ? (
        <>
          {id ? <h3 className="h3">Numero de orden: ${id}</h3> :
          <></>}
          <br />
          <p>Su carrito se encuentra vacio...</p>
          <br />
          <Link to="/">
            <button>Ir al Inicio</button>
          </Link>
        </>
      ) : (
        <>
          {cartList.map((prod) => (
            <div className="cart" key={prod.id}>
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
              <p> * Al marcar finalizar compra se generará su numero de orden.</p>
              <button>Finalizar Compra</button>
          </form>
          <button onClick={vaciarCarrito}> Vaciar carrito </button>
        </>
      )}
    </ div>
  );
}

export default Cart;