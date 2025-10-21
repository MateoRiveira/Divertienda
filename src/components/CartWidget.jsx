import { useContext } from "react"
import { cartContext } from "../Context/CartContext"
export default function CartWidget(){

    const {countCartItems} = useContext(cartContext)
    return(
        <>
        <button className="cart"><span>🛒 {countCartItems()}</span></button>
        </>
    )
}

