import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import {BrowserRouter, Routes, Route} from 'react-router'
import ItemDetailContainer from './components/ItemDetailContainer'
import { createContext } from 'react'


const cartContext = createContext()
const CartProvider = cartContext.Provider

export default function App() {
   



  return (
    
    <>
    <CartProvider value="Hola Context">
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
