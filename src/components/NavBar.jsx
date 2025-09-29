import CartWidget from "./CartWidget"
import { Link } from "react-router"


export default function NavBar(){
       
        

    return(
        <>
        <nav className="navbar">

         <Link to="/"><h1 className="title">Divertienda</h1></Link>
        <ul className="list">

            <Link to="category/Videojuegos">
            <li>Videojuegos</li>       
            </Link>
            
            <Link to="category/Consolas">
            <li>Consolas</li>
            </Link>

            <Link to="category/Computadoras">
            <li>Computadoras</li>
            </Link>
            
            
            <Link to="/carrito"><CartWidget/></Link>
               
            
        </ul>

        </nav>

        </>
    )
}

