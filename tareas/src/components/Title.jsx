//componente de funcion
import React, { useState } from "react"
const Title= function(props){
const [input, setInput] = useState("")
const [user, setUser] = useState("")
const handleChange=(evento)=>{
    
    setInput(evento.target.value)

}
const hanldeClick= (evento)=>{
  
    setUser(input)
    
}


return (
    <div>
        <h1>Lista de tareas de {user}</h1>
        {
            !user &&
            <div>
                <input
                    name="input"
                    type="text"
                    placeholder="Ingrese su nombre"
                    onChange={handleChange}
                />
                <p>{input}</p>
                <button onClick={hanldeClick}>Ingresar nombre</button>
            </div>
        }
    </div>
)

}
export default Title;