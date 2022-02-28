import React from "react";
import {useState} from 'react';

function ItemCount ({}) {
    const [contador, setCount]= useState(0)

    const suma = () => {
        setCount (contador+1)
    }

    const resta = () => {
        setCount (contador-1)
    }

    return (
        <div>
            <button onClick= { resta }>-</button>
            <label> { contador } </label>
            <button onClick= { suma }>+</button>
        </div>
    )
};

export default ItemCount;