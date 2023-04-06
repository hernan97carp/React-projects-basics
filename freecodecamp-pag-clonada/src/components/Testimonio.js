import React from "react";
import "../stylesheet/Testimonios.css"
function Testimonio(props){
    return(

  <div className="contenedor-testimonio">

  <img 
   className="pictures"
   src={require(`../images/testimonio-${props.imagen}.png`)}
   alt={`foto de ${props.nombre}`}
   />
  <div className="conteiner-text-testimonio">
    <p className="name-testimonio"><strong>{props.nombre}</strong> en {props.pais}</p>
    <p className="cargo-testimonio">{props.cargo} en <strong>{props.empresa}</strong></p>
   <p className="text-testimonio">"{props.testimonio}"</p>
  </div>
  </div>
  

    )
}
export default Testimonio;