 import Swal from 'sweetalert2'
import { useState } from "react";

export default function FormCheckout(props) {
    const[formData, setformData] = useState(
        {username: "", phone: "", email: ""}
    )

    function handleInputChange(event){
        const {value, name} = event.target
        const newformData = {...formData}
        newformData[name] = value;
        setformData(newformData)
    }

    function resetForm(){
        setformData({username: "", phone: "", email: ""})
    }

    function handleSubmit(event){
        event.preventDefault()
        alert("Form enviado")
              Swal.fire({
                title: 'Form Enviado',
                icon: 'success',
                confirmButtonText: 'Aceptar'
            })
        props.handleCheckout(formData)
    }

    function handleNumberInputChange(event){
        console.log(event.key);
        (! [1,2,3,4,5,6,7,8,9,0].includes(Number(event.key)) && event.preventDefault());

    }


    return(
        <form onSubmit={handleSubmit}>
            <label>Nombre
                <input onChange= {handleInputChange}
                value={formData.username}
                type="text" 
                name="username"/>
            </label>
            <label>Email               
                <input onChange= {handleInputChange}
                value={formData.email} 
                type="email" 
                name="email"/>
            </label>
            <label>Telefono
                <input onChange= {handleInputChange}
                value={formData.phone}
                onKeyDown={handleNumberInputChange}
                type="tel" 
                name="phone"/>
            </label> 

            <button type="submit">Enviar</button>
            <button type="button" onClick={resetForm}>Limpiar Form</button> 
        </form>

        
    )
}