import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import {BrowserRouter, Routes, Route} from 'react-router'
import ItemDetailContainer from './components/ItemDetailContainer'
import { createContext, useState } from 'react'


const cartContext = createContext()
const CartProvider = cartContext.Provider

export default function App() {
   
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


  return (
    
    <>
    <CartProvider value={{test: "Hola Context", cartItems, addItem}}>
    <BrowserRouter>

    <NavBar/>

    <Routes>
      <Route 
      path='/' 
      element={<ItemListContainer greeting="Bienvenidos a Divertienda"/>}/>

      <Route  
      path='/carrito' 
      element={<h1>Carrito de Compras</h1>}/>

      <Route 
      path='/detalle/:idParam' 
      element={<ItemDetailContainer/>}/>

      <Route
       path='/category/:categoryParam'
       element={<ItemListContainer greeting="Categorias de Productos"/>} 
      />

      <Route 
      path='/Videojuegos' 
      element={<h1>Videojuegos</h1>}/>
   
      <Route 
      path='/Consolas' 
      element={<h1>Consolas</h1>}/>

      <Route 
      path='/Computadoras' 
      element={<h1>Computadoras</h1>}/>

      <Route
      path='*'
      element={<h1>Error 404: Pagina no encontrada</h1>}/>
  
    </Routes>

    </BrowserRouter>
    </CartProvider>

    </>
  )
}


export {cartContext}
