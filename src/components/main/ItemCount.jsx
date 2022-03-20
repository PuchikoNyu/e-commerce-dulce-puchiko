import React from "react";
import {useState} from 'react';

function ItemCount ({inicio, stock, onAdd}) {

    const [contador, setCount]= useState(1)

    const suma = () => {
        if (contador < stock) {
            setCount (contador+1)
        } 
    }

    const resta = () => {
        if (contador > inicio) {
            setCount (contador-1)
        }
    }

    const agregar = () => {
        onAdd (contador)
    }

    return (
        <div>
            <button onClick= { resta }>-</button>
            <label> { contador } </label>
            <button onClick= { suma }>+</button>
            <button onClick={ agregar }> Agregar</button>
        </div>
    )
};

export default ItemCount