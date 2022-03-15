import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { getFetch } from './ItemsList';

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})
    const { descriptionId } = useParams()

    useEffect (() => {
        getFetch
        .then(resp => setProducto(resp.find(prod => prod.Id === descriptionId )))

    }, [descriptionId])

    return (
        <>
            <ItemDetail producto={producto}/>
        </>
)};

export default ItemDetailContainer