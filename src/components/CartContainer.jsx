import { useContext } from "react"
import { cartContext } from "../Context/CartContext"
import { Link } from "react-router"

export default function CartContainer(){
    const {cartItems, removeItem}= useContext(cartContext)

    if (cartItems.length === 0)
    {
        return <div> Tu Carrito de compras esta vacio <button>Ir al Inicio</button></div>
    }
    return (
        <>
        <section>
            <div style={{display: "flex", gap:"20px"}}>
                <h2>Tu Carrito de Compras: </h2>
                <div>
                    {

                        cartItems.map(itemInCart => <div>
                            <h4>{itemInCart.title}</h4>
                            <img width="80" src={itemInCart.img}></img>
                            <p>Precio Unitario: ${itemInCart.price}</p>
                            <p>Cantidad: {itemInCart.quantity}</p>
                            <strong><p>Precio Total: ${itemInCart.quantity * itemInCart.price}</p></strong>
                            <button onClick={() => removeItem(itemInCart.id)}>🗑</button>
                        </div>)

                    }
                </div>
                <hr />
                <h4>Total a Pagar: 1000$</h4>
            </div>

          <button>Vaciar Carrito</button>
          <Link to="/checkout">
          <button>Proceder a Pagar</button>
          </Link>
          

            
        </section>
        
        
        </>
    )
}