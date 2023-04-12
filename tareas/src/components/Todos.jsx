//componente de funcion
import React from "react"
import { useSelector } from "react-redux";
import Todo from "./Todo"
const Todos= function(props){
const todos = useSelector(state=>state.todos)//del stado me traigo solamente todos
    return(
       <div>
          <h1>tareas</h1>
          {
            todos.map(todo=>(<Todo key={todo.id} id={todo.id} text={todo.text} complete={todo.complete}/>))
          }

       </div>
            
      

)

}
export default Todos;