import { useContext } from "react"
import { cartContext } from "../App"
export default function CartWidget(){
    const valueContext = useContext(cartContext)
    return(
        <>
        <button className="cart"><span>🛒 {valueContext.cartItems.length}</span></button>
        </>
    )
}

