import { useEffect, useState } from "react"
import Item from "./Item"
import getProducts, { getProductbyCategory } from "../data/productsapi"
import { useParams } from "react-router"


export default function ItemListContainer(props){
    const [products, setProducts] = useState([])
    const {categoryParam} = useParams()
    getProductbyCategory(categoryParam)

    useEffect(() => {
        if(categoryParam === undefined){
        console.log("1. Peticion de Datos")
        const promiseData = getProducts()
        promiseData.then((respuesta) => {
            console.log ("3. Datos Recibidos...", respuesta)
            setProducts(respuesta)
        
        }).catch((error)=> alert(`Error ${error}`))}

        else {
            getProductbyCategory(categoryParam).then(response => setProducts(response))
        }
    
    }, [categoryParam])
    
    return(
    <>    
    <section>
        <h2>{props.greeting}</h2>
        <p>Nuestros Productos</p>
        <div>
        {
            products.map( function(item)
        {return <Item
         key={item.id}
         {...item}/>})
        }

        </div>

    </section>

    </>
    )
}

