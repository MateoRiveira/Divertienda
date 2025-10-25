 import Swal from 'sweetalert2'
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
      Swal.fire({
        title: 'Productos Agregados ✅',
        text: '"Agregaste otra unidad  al carrito"',
        icon: 'success',
        confirmButtonText: 'Aceptar'
    })
    }

    else{
      newItem.quantity = quantityCount
      newCart.push(newItem)
            Swal.fire({
        title: 'Producto Agregado ✅',
        text: '"Agregaste una unidad al carrito"',
        icon: 'success',
        confirmButtonText: 'Aceptar'
    })
    }

    setcartItems(newCart)

  }

  function countCartItems(){  
    let count = 0;
    cartItems.forEach(item => count += item.quantity)
    return count
  }

  function removeItem(idtoRemove){
   const newCart = cartItems.filter(itemInCart = itemInCart.id !== idtoRemove)
   setcartItems(newCart)
  }

  function clearCart(){
    setcartItems([])
  }

   return (
      <cartContext.Provider value={{cartItems, addItem, countCartItems, removeItem, clearCart}}>
         {children}
      </cartContext.Provider>
   )
  }
  


export {cartContext}