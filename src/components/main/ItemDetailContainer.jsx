import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/baseDatos';
import { getDoc, doc, collection } from 'firebase/firestore';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {


    const [producto, setProducto] = useState({})
    const { descriptionId } = useParams()
    const productos = collection (db, "productos")
    const [loading, setLoading] = useState(true)

    useEffect (() => {
        const docRef = doc(productos, descriptionId);
        getDoc(docRef)
            .then((res) => {
                setProducto(res.data())
                setLoading(false)
        })

    }, [descriptionId])

    return (
            <div className='main'>
                { loading ? <h2>Cargando...</h2>
                :
                <ItemDetail producto={producto}/>
                }
            </div>
)};

export default ItemDetailContainer;