
import './App.css';
import Testimonio from './components/Testimonio'

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
      <h1>Esto es lo que dicen nuestros alumnos sobre freecodecamp</h1>
      <Testimonio
      nombre="Shawn Wang"
      cargo="Ingeniero de Software"
      testimonio="Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida."
      pais="Singapur"
      empresa="Amazon"
      imagen="shawn"
      />
     <Testimonio
     nombre ="Emma Bostian"
     cargo = "Ingeniera de Software en Spotify"
     testimonio= "freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble."
     pais="Suecia"
     empresa="Spotify"
     imagen="emma"
      />
     </div>
    </div>
  );
}

export default App;
