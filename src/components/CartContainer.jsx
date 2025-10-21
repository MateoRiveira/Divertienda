import { useContext } from "react"
import { cartContext } from "../Context/CartContext"

export default function CartContainer(){
    const {cartItems, removeItem}= useContext(cartContext)

    return (
        <>
        <section>
            <div>
                <h2>Tu Carrito de Compras: </h2>
                <div>
                    {

                        cartItems.map(itemInCart => <div>
                            <h4>{itemInCart.title}</h4>
                            <img width="80" src={itemInCart.img}></img>
                            <p>Precio: ${itemInCart.price}</p>
                            <p>Cantidad: {itemInCart.quantity}</p>
                            <button onClick={removeItem}>🗑</button>
                        </div>)

                    }
                </div>
            </div>
        </section>
        
        
        </>
    )
}