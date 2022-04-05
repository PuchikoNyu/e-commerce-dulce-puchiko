import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../firebase/baseDatos";

const Cards = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()
    const catalogo = collection (db, "productos")

    const getCatalogo = (query) => {
        getDocs(query)
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
            setProductos(lista)
            
            })
            
            .then(() => {
                setLoading(false)

        })
        .catch((error)=>{
            console.log(error)
        })
    }

    useEffect (() => {    

                if (categoryId) {
                    const filterFB = query(catalogo, where("categoria", "==", categoryId))
                    getCatalogo(filterFB)          
                } else {
                    getCatalogo(catalogo)
                }
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