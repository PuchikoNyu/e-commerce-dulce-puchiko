import React from 'react';
import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { getFetch } from './ItemsList';

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})

    useEffect (() => {

        getFetch
        .then(resp => setProducto(resp.find(prod => prod.id === 2)))

    }, [])

    return (
        <>
            <ItemDetail producto={producto}/>
        </>
)};

export default ItemDetailContainer