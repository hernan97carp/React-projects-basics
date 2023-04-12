
import './App.css';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Form from './components/Form';
import Todos from './components/Todos';
function App() {
  return (
    <div className="App">
   <NavBar/>
   <Routes>
    <Route path='/' element={<Todos/>}/>
    <Route path='/form' element={<Form/>}/>
   </Routes>
    </div>
  );
}

export default App;
