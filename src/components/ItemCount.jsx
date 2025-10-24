import { useState } from "react";

export default function ItemCount({max, min, onAddtoCart}) {
    const [count, setCount] = useState(1);

    const handleSubstract = () => {if(count > min) setCount(count-1)}
    const handleAdd =() => {if(count < max) setCount(count+1)}

    return(
        <div>
            <button onClick={handleSubstract}> - </button>
            <span style={{color:"black", fontSize:"30px"}}>{count}</span>
            <button onClick={handleAdd}> + </button>
            <button onClick={() => onAddtoCart(count)}>Agregar</button>
        </div>
    )

}













