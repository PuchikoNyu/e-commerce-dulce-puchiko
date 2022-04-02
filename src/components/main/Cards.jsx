import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { getFetch } from "./ItemsList";
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
                    const id = doc.id
                    const data = doc.data()
                    const producto = {
                        id: id,
                        ...data
                    }
                    return producto
                })

                setProductos(lista)

            })
            .catch((error)=>{
                console.log(error)
        })

        // if (categoryId) {

        //     getFetch
        //     .then((resp) => setProductos(resp.filter(prod => prod.categoria == categoryId )))
        //     .catch(err => console.log(err))
        //     .finally(()=> setLoading(false))
        // } else {
        //     getFetch
        //     .then ((respuesta) => {
        //         setProductos(respuesta)
        //         setLoading(false)
        //     })
        // }
}, [categoryId])
    
    return (
        <div className="items">
            {   loading ? <h2>Cargando...</h2>
                :
                productos.map((prod) =>
                    <div key={prod.id} className="tarjeta">
                        <img src={prod.img} alt={prod.nombre} />
                        <h3> {prod.nombre} </h3>
                        <p> Tipo: {prod.tipo} </p>
                        <p> Variedad: {prod.variedad} </p>
                        <p> Precio: ${prod.precio} </p>

                        <Link to={`/description/${prod.id}`}>
                            <button>Descripción</button>
                        </Link>
                    </div>
            ) }
        </div>
    );
};

export default Cards;