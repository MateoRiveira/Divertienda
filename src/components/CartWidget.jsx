import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
function CartWidget(){
    const {countCartItems}= useContext(CartContext)
    return(
        <>
        <button className="cart"><span>🛒 {countCartItems() }</span></button>
        </>
    )
}

export default CartWidget