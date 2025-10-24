import { useParams } from "react-router"
import { getProductbyId } from "../data/firebase"
import { useEffect, useState } from "react";
import { cartContext } from "../Context/CartContext"
import { useContext } from "react";
import ItemCount from "./ItemCount";



export default function ItemDetailContainer() {
    const {idParam} = useParams()
    const [product, Setproduct] = useState({loading: true});
    const {addItem} = useContext(cartContext)
    
    useEffect(() => {
        getProductbyId(idParam)
        .then(response => Setproduct(response))
        .catch(error => alert(error))
    },[])

    function handleAddtoCart(count){
        addItem(product, count)
    }
    
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
            <ItemCount max={product.stock} min={1} onAddtoCart={handleAddtoCart} />
        </div>

        </>
    )
}

