import propTypes from "prop-types" 

const suma = (a, b) =>{
 return a + b
}

const objeto = {

        nombre: "hernan",
        hola: "hello"
   
}

export function FirstApp({title, edad, subtitle}){
    return(<div><h1>Hernan {suma(1,6)}</h1>
    <code>{JSON.stringify(objeto)}</code>
    <h2>{title} {edad} años {subtitle}</h2>
    </div>)
}


FirstApp.propTypes = {
    title: propTypes.string.isRequired

} 
FirstApp.defaultProps = {
    title: "hola hola tengo",
    subtitle: "No hay sub",
    name: "fernando"
}