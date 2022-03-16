import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFetch } from './ItemsList';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})
    const { descriptionId } = useParams()

    useEffect (() => {
        getFetch
        .then(resp => setProducto(resp.find(prod => prod.id == descriptionId )))

    }, [descriptionId])

    return (
        <>
            <ItemDetail producto={producto}/>
        </>
)};

export default ItemDetailContainer