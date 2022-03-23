import { useCartContext } from "../../context/CartContext";

function Cart() {

    const {cartList,vaciarCarrito} = useCartContext()
    console.log(cartList)

    return (
        <div>
            {cartList.map(item =>
            <>
                <div className="cart">
                    <p>Produto: {item.nombre}</p>
                    <p>Cantidad: {item.cantidad} u.</p>
                    <p>Precio: ${item.precio}</p>
                </div>
            </>
            ) }
            <button onClick={vaciarCarrito}>Vaciar carrito</button> 
        </div>
    )
};

export default Cart;