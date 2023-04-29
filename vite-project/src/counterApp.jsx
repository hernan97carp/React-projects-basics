 import PropTypes from "prop-types"
 
 import React from "react"
 import "./stylesheet/styles.css"
 export const CounterApp = ({value})=>{

return(<>
      <h1>CounterApp</h1>
      <h2>{value}</h2>
      <button className="button">+1</button>
</>)
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired //en caso de q no mandemos un valor ponemos isRequired

}
