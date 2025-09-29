
import { Form, Link } from "react-router"

export default function Item({id, title, img, price, description}) {
    return(
    
    <>  
    <div className="card">
        <h2 className="card-title">{title}</h2>
        <img className="card-image" src={img} alt="" />
        <p className="card-price">Precio ${price}</p>
        <p style={{ color: "#000000" }}>{description}</p>
        <hr />
        <Link to={`/detalle/${id}`}>
        <button>Ver Detalle</button>
        </Link>

    </div>  
    </>
    )
}

