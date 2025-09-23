import { useState } from 'react'
import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'


function App() {
  
  return (
    <>
    <NavBar/>
    <section><ItemListContainer greetings="¡Bienvenido a Divertienda! 🎮"/></section>
    

    <div className='contenedor'>   
    <ItemListContainer title="Persona 3 Reload" price="40" image="./src/images/p3r.png"/>
    <ItemListContainer title="FC26" price="70" image="./src/images/fc26.png"/>
    <ItemListContainer title="Hollow Knight: Silksong" price="7" image="./src/images/silksong.png"/>
    </div>


    </>
  )
}

export default App

