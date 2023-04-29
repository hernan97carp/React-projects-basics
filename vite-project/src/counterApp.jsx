 import PropTypes from "prop-types"
 
 import React from "react"
 import "./stylesheet/styles.css"
 import { useState } from "react"
 export const CounterApp = ({value})=>{
  const [counte, setCount] = useState(0)
const handleAdd = () => {
setCount(counte + 1)

}

const handleRest= ()=>{
  setCount(counte - 1)
}
const handleReset = ()=> setCount(value)



return(<>
      <h1>CounterApp</h1>
      <h2>{counte}</h2>
      <button className="button" onClick={handleAdd}>+1</button>
      <button className="button" onClick={handleRest}>-1</button>
      <button className="button" onClick={handleReset}>reset</button>
</>)
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired //en caso de q no mandemos un valor ponemos isRequired

}
