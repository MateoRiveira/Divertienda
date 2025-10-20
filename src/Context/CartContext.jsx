import {createContext, useState } from "react";

const CartContext = createContext();

const [cartItems, setcartItems] = useState({});

export function CartProvider(children){
    return (
 <CartContext.Provider value={{cartItems, addItem, countCartItems}}>
    {children}
 </CartContext.Provider> 


    )

}

export {CartContext}