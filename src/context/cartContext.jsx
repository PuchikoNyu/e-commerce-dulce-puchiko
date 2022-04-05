import { createContext, useState, useContext } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

function CartProvider({ children }) {
  const [cartList, setCartList] = useState([]);

  const anidarCarrito = (id) => {
    return cartList.some((prod) => prod.id === id);
  };

  const agregarCarrito = (item) => {
    if (anidarCarrito(item.id)) {
      const copiaCarrito = [...cartList];
      const encontrado = copiaCarrito.find((copia) => copia.id === item.id);
      encontrado.cantidad += item.cantidad;
      setCartList(copiaCarrito);
    } else {
      setCartList([...cartList, item]);
    }
  };

  const vaciarCarrito = () => {
    setCartList([]);
  };

  const finalizarCompra = () => {
    vaciarCarrito();
  };

  const eliminarId = (prodId) => {
    const copiaCarrito = [...cartList];
    const item = copiaCarrito.find((prod) => prod.id === prodId);
    const indice = copiaCarrito.indexOf(item);
    copiaCarrito.splice(indice, 1);
    setCartList(copiaCarrito);
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        agregarCarrito,
        vaciarCarrito,
        anidarCarrito,
        eliminarId,
        finalizarCompra
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;