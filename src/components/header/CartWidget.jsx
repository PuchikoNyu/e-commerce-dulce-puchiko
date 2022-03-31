import React from "react";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { cartList } = useCartContext();

  return (
    <div className="cart1">
      <NavLink to="cart">
        <button className="carrito">
          <img src="/media/carrito.png" alt="carrito" className="imgCart" />
        </button>
      </NavLink>
      {cartList.length === 0 ? (
        <></>
      ) : (
        <p>{cartList.reduce((acc, prod) => acc + prod.cantidad, 0)}</p>
      )}
    </div>
  );
};

export default CartWidget;
