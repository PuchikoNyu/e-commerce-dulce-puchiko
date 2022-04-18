import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase/baseDatos";

const Cards = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect (() => {

        const catalogo = collection (db, "productos")

        getDocs(catalogo)
            .then((resultado) =>{
                const docs = resultado.docs

                const lista = docs.map((doc)=>{
                    const fid = doc.id
                    const data = doc.data()
                    const producto = {
                        fid: fid,
                        ...data
                    }
                    return producto
                })

                if (categoryId) {
                    setProductos(lista.filter(prod => prod.categoria == categoryId ))
                    setLoading(false)            
                } else {
                    setProductos(lista)
                    setLoading(false)
                }

            })
            .catch((error)=>{
                console.log(error)
        })

    }, [categoryId])
    
    return (
        <div className="items">
            {   loading ? <h2>Cargando...</h2>
                :
                productos.map((prod) =>
                    <div key={prod.fid} className="tarjeta">
                        <img src={prod.img} alt={prod.nombre} />
                        <h3> {prod.nombre} </h3>
                        <p> Tipo: {prod.tipo} </p>
                        <p> Variedad: {prod.variedad} </p>
                        <p> Precio: ${prod.precio} </p>
                        <Link to={`/description/${prod.fid}`}>
                            <button>Descripción</button>
                        </Link>
                    </div>
            ) }
        </div>
    );
};

export default Cards;