import { useContext, useState } from "react"
import { cartContext } from "../Context/CartContext"
import { Link } from "react-router"
import { createOrder } from "../data/firebase"
import FormCheckout from "./FormCheckout"



export default function CartContainer(){
    const [orderCreatedId, setorderCreated] = useState(null)

    const {cartItems, removeItem, clearCart}= useContext(cartContext)

    async function handleCheckout(buyer){

        const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
        const newOrder = {
            buyer,
            items: cartItems.map(({id, title, price, quantity}) => ({id, title, price, quantity})),
            total,
            date: new Date(), };

        const newOrderConfirmed = await createOrder(newOrder);
        setorderCreated(newOrderConfirmed.id);
        clearCart()   
    }


    if (orderCreatedId) {
        return (
            <div>
                <h2>Gracias por tu compra</h2>
                <p>Tu id de orden es: <strong>{orderCreatedId}</strong></p>
                <Link to="/">Volver al Inicio</Link>
            </div>
        )

    }

    if (cartItems.length === 0)
    {
        return <div> Tu Carrito de compras esta vacio <Link to="/"><button>Ir al Inicio</button></Link></div>
    }
    return (
        <>
        <section>
            <h2>Tu Carrito de Compras: </h2>
            <div style={{display: "flex", gap:"20px"}}>
                
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
                <h4>Total a Pagar: ${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}</h4>
            </div>
           <FormCheckout handleCheckout={handleCheckout}/>
                    

            
        </section>
        
        
        </>
    )
}