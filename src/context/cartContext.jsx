import { createContext, useState, useContext } from "react";

const CartContext = createContext ([]);

export const useCartContext = () => useContext(CartContext)

function CartProvider({children}) {

    const [cartList, setCartList] = useState([])

    const agregarCarrito = (item) => {
        
        setCartList([...cartList, item])
    }

    const vaciarCarrito = () => {
        setCartList([])
    }

    return (
        <CartContext.Provider value= {{
            cartList,
            agregarCarrito,
            vaciarCarrito,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider