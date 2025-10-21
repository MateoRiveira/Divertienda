import {createContext, useState } from "react";
const CartContext = createContext();
const [cartItems, setcartItems] = useState({});
export function CartProvider( { children }){
   const addItem = () =>  {}
   const countCartItems = () => {}
    return (
 <CartContext.Provider value={{cartItems, addItem, countCartItems}}>
    {children}
 </CartContext.Provider> 

    )
}
export {CartContext}