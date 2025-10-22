import { useEffect, useState } from "react"
import { getProducts,  getProductsbyCategory  } from "../data/firebase"
import Item from "./Item"
import { useParams } from "react-router"


export default function ItemListContainer(props){
    const [products, setProducts] = useState([])
    const {categoryParam} = useParams()
    getProductsbyCategory(categoryParam)

    useEffect(() => {
        if(categoryParam === undefined){
        console.log("1. Peticion de Datos")
        const promiseData = getProducts()
        promiseData.then((respuesta) => {
            console.log ("3. Datos Recibidos...", respuesta)
            setProducts(respuesta)
        
        }).catch((error)=> alert(`Error ${error}`))}

        else {
            getProductsbyCategory(categoryParam).then(response => setProducts(response)).catch(err => alert(err))
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

