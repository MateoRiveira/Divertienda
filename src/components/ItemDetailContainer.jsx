
import { useParams } from "react-router"
import { getProductbyId } from "../data/productsapi"
import { useEffect, useState } from "react";
import { useContext } from "react";



export default function ItemDetailContainer() {
    const {idParam} = useParams()
    const [product, Setproduct] = useState({loading: true});
    const {addItem} = useContext(CartContext)
    
    useEffect(() => {
        getProductbyId(idParam)
        .then(response => Setproduct(response))
        .catch(error => alert(error))
    },[])

    if (product.loading)
    {
        return <h2>Cargando</h2>

    }


    return(
        <>
        <div className="card">
            <h2 className="card-title">{product.title}</h2>
            <img className="card-image" src={product.img} alt={product.title} />
            <p className="card-price"> Precio ${product.price}</p>
            <p style={{ color: "#000000" }} >{product.description}</p>
            <button onClick={() => addItem(product)}>Agregar al carrito</button>
        </div>

        </>
    )
}

