import React from "react";
import {useState} from 'react';

function ItemCount ({}) {

    const [contador, setCount]= useState(0)

    const suma = () => {
        if (contador >= 0 && contador <5) {
            setCount (contador+1)
        } else {
            console.log(" no se puede")
        }
    }

    const resta = () => {
        if (contador > 0) {
            setCount (contador-1)
        } else {
            console.log(" no se puede")
        }
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