import {createContext, useState } from "react";

const CartContext = createContext();

const [cartItems, setcartItems] = useState([]);

  function addItem(newItem){
    const quantityCount = 1;

    const newCart  = structuredClone(cartItems)
    const isInCart = cartItems.some(item => item.id === newItem.id)
     
    if(isInCart){
     const index= cartItems.findIndex(item => item.id === newItem.id)
     newCart[index].quantity += quantityCount
     alert("Sumaste otra unidad al carrito")
    }
    
    else{
     newCart.quantity = quantityCount
     newCart.push({newItem})
     alert("Agregado al carrito")}

     setcartItems(newCart)


    

  }

  function countCartItems() {
    let count = 0;
    cartItems.forEach(item => count += item.quantity)
    return count;
  }

export function CartProvider(children){
    return (
 <CartContext.Provider value={{cartItems, addItem, countCartItems}}>
    {children}
 </CartContext.Provider> 


    )

}

export {CartContext}