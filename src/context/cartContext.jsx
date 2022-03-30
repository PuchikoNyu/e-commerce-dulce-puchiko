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

    const anidarCarrito = (id) => {
        return cartList.some ( (prod) => prod.id === id )
    }

    return (
        <CartContext.Provider value= {{
            cartList,
            agregarCarrito,
            vaciarCarrito,
            anidarCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider