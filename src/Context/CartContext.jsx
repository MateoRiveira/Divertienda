 import { createContext, useState } from "react";

 
  const cartContext = createContext()


  export function CartProvider( {children}){

  const [cartItems, setcartItems] = useState([])

  function addItem(newItem){
    const quantityCount = 1;
    const newCart = structuredClone(cartItems)

    const isinCart = cartItems.some(item => item.id === newItem.id)

    if(isinCart){
      const index = cartItems.findIndex(item => item.id === newItem.id)
      newCart[index].quantity += quantityCount
      alert("Agregaste otra unidad  al carrito")
    }

    else{
      newItem.quantity = quantityCount
      newCart.push(newItem)
      alert("Agregaste al carrito")
    }

    setcartItems(newCart)

  }

  function countCartItems(){  
    let count = 0;
    cartItems.forEach(item => count += item.quantity)
    return count
  }

  function removeItem(){
   alert("Eliminado del carrito")
  }

   return (
      <cartContext.Provider value={{cartItems, addItem, countCartItems, removeItem}}>
         {children}
      </cartContext.Provider>
   )
  }
  


export {cartContext}