import React from "react";
import { NavLink } from "react-router-dom";

const CartWidget = () => {
    return(
            <div>
                
                <NavLink to="cart">
                    <button className="carrito">
                        <img src="./media/carrito.png" alt="carrito" className="imgCart" />
                    </button>
                </NavLink>
            </div>
    );
};

export default CartWidget;