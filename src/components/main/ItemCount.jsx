import React from "react";
import {useState} from 'react';

function ItemCount ({}) {

    const [contador, setCount]= useState(1)

    const suma = () => {
        if (contador >= 1 && contador <5) {
            setCount (contador+1)
        } else {
            console.log(" no se puede")
        }
    }

    const resta = () => {
        if (contador > 1) {
            setCount (contador-1)
        } else {
            console.log(" no se puede")
        }
    }

    return (
        <div>
            <button onClick= { resta } className="botonUno">-</button>
            <label> { contador } </label>
            <button onClick= { suma } className="botonUno">+</button>
        </div>
    )
};

export default ItemCount;