//componente de funcion
import React from "react"
import Title from "./Title"
import { NavLink } from "react-router-dom"
const NavBar= function(props){

    return(
       <div style={{background: "lightgrey", height: "200px"}}>
          <Title/>
         <NavLink to = "/">
            <button>Tareas</button>
         </NavLink>
         <NavLink to= "/form">
            <button>Nueva TAREA</button>
         </NavLink>
       </div>
            
      

)

}
export default NavBar