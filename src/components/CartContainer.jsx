import { useContext, useState } from "react"
import { cartContext } from "../Context/CartContext"
import { Link } from "react-router"
import { createOrder } from "../data/firebase"

export default function CartContainer(){
    const [orderCreatedId, setorderCreated] = useState(false)

    const {cartItems, removeItem}= useContext(cartContext)

    async function handleCheckout(){
        const buyer = {name: "Makoto", email:"mk@yahoo.com", phone: "123123123"}
        const total = 9999;

        const newOrderConfirmed = await createOrder({cartItems, total, buyer,   date: new Date()});
        console.log(newOrderConfirmed.toJSON());
        alert(`Gracias por tu compra. Tu id de la orden es: ${newOrderConfirmed.id}`);

        setorderCreated(newOrderConfirmed.id)

        
    }

    if (orderCreatedId) {
        return (
            <div>
                <h2>Gracias por tu compra</h2>
                <p>Tu id de orden es: <strong>{orderCreatedId}</strong></p>
            </div>
        )

    }

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

          <button onClick={handleCheckout}>Confirmar Compra</button>

          <Link to="/checkout">
          <button>Checkout - TODO</button>
          </Link>
          

            
        </section>
        
        
        </>
    )
}