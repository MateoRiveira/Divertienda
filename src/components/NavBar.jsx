import CartWidget from "./CartWidget"


function NavBar(){
    return(
        <>
        <nav className="navbar">

        <h1 className="title">Divertienda</h1>
        <ul className="list">
            <a href="#"><li>Videojuegos</li></a>
            <a href="#"><li>Consolas</li></a>
            <a href="#"><li>Computadoras</li></a>
            <CartWidget/>
        </ul>

        </nav>

        </>
    )
}

export default NavBar