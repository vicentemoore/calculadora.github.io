import Boton from './componentes/boton';
import './App.css';
import Pantalla from './componentes/pantalla';
import BotonClear from './componentes/boton-clear';
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {

  const calcular = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("ingresa valores primero hdp")
    }
  };

  const [input, setInput] = useState("");

  const agregarInput = valor => {
    setInput(input + valor);
  };

  return (
    <div className="App">
      <div className='contenedor-principal'>
        <Pantalla ingreso={input}/>

        <div className='fila'>
          <Boton manejarClick={agregarInput} >1</Boton>
          <Boton manejarClick={agregarInput} >2</Boton>
          <Boton manejarClick={agregarInput} >3</Boton>
          <Boton manejarClick={agregarInput} >+</Boton>
        </div>

        <div className='fila'>
          <Boton manejarClick={agregarInput} >4</Boton>
          <Boton manejarClick={agregarInput} >5</Boton>
          <Boton manejarClick={agregarInput} >6</Boton>
          <Boton manejarClick={agregarInput} >-</Boton>
        </div>

        <div className='fila'>
          <Boton manejarClick={agregarInput} >7</Boton>
          <Boton manejarClick={agregarInput} >8</Boton>
          <Boton manejarClick={agregarInput} >9</Boton>
          <Boton manejarClick={agregarInput} >*</Boton>
        </div>

        <div className='fila'>
          <Boton manejarClick={calcular} >=</Boton>
          <Boton manejarClick={agregarInput} >0</Boton>
          <Boton manejarClick={agregarInput} >.</Boton>
          <Boton manejarClick={agregarInput} >/</Boton></div>

        <div className='fila'>
          <BotonClear manejarClear={() => setInput("")}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
