
function ItemListContainer(props){
    return(
        <>
        
    <div>
      {props.greetings && <h1 className="mensaje">{props.greetings}</h1>}
      {props.title && <h2>{props.title}</h2>}
      {props.image && <img src={props.image} alt={props.title} />}
      {props.price && <p>Precio: {props.price} USD</p>}
    </div>


        </>
    )
}

export default ItemListContainer