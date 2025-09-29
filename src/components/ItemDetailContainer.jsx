
import { useParams } from "react-router"
import { getProductbyId } from "../data/productsapi"
import { useEffect, useState } from "react";





export default function ItemDetailContainer() {
    const {idParam} = useParams()
    const [product, Setproduct] = useState({});
    
    useEffect(() => {
        getProductbyId(idParam).then(response => Setproduct(response))
    },[])


    return(
        <>
        <div className="card">
            <h2 className="card-title">{product.title}</h2>
            <img className="card-image" src={product.img} alt={product.title} />
            <p className="card-price">Precio ${product.price}</p>
            <p style={{ color: "#000000" }} >{product.description}</p>
            <button>Agregar al carrito</button>
        </div>

        </>
    )
}

