import { useState } from 'react';
import * as math from 'mathjs';
import "./etyle.css"
function App() {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');
  const [history, setHistory] = useState([]); // Nuevo estado para el historial
  const [showHistory, setShowHistory] = useState(false); // Nuevo estado para controlar la visualización del historial

  const toggleHistory = () => {
    setShowHistory(!showHistory); // Cambiar el estado de showHistory cada vez que se haga clic en el botón
  };
  const handleNumberClick = (num) => {
    const lastChar = inputValue[inputValue.length - 1];
    if ('+-*/^%'.includes(lastChar) && '+-*/^%'.includes(num)) {
      return; // No hacer nada si el último carácter y el nuevo carácter son signos
    }
    setInputValue(inputValue + num);
  };

  const clearInput = () => {
    setInputValue('');
    setResult('');
  };
  
  const deleteLastChar = () => {
    setInputValue(inputValue.slice(0, -1)); // Eliminar el último carácter de inputValue
  };

  const calculateResult = () => {
    try {
      const input = inputValue.replace(/√/g, 'sqrt');
      const result = math.evaluate(input).toString();
      setInputValue(result); // Actualizar inputValue en lugar de result
      const newHistory = [...history, `${input} = ${result}`]; // Agregar al historial
      if (newHistory.length > 5) {
        newHistory.shift(); // Eliminar el cálculo más antiguo si el historial tiene más de 5 elementos
      }
      setHistory(newHistory);
    } catch (error) {
      setInputValue(error.message); // Actualizar inputValue en lugar de result
    }
  };

  const addSqrt = () => {
    setInputValue(`√(${inputValue})`);
  };

  return (
    <div className="App">
      {/* <h1>Math Master</h1> */}
      <div className="calculator">
        <input className='testo' type="text" value={inputValue} readOnly />
        <div className="buttons">
          <div className="row">
          <button className='histo' onClick={toggleHistory}>historial</button>
            <button className='butonAC' onClick={clearInput}>AC</button>
            <button className='butonAC' onClick={deleteLastChar}>DEL</button> {/* Nuevo botón para borrar el último carácter */}
          </div>
          <div className="row">
            <button className='buton1' onClick={() => handleNumberClick('%')}>%</button>
            <button className='buton1' onClick={() => handleNumberClick('^')}>^</button>
            <button className='buton1' onClick={() => handleNumberClick('(')}>{"("}</button>
            <button className='buton1' onClick={() => handleNumberClick(')')}>{")"}</button>
            <button className='buton1' onClick={addSqrt}>√</button>
          </div>
          <div className="row">
            <button className='buton' onClick={() => handleNumberClick('7')}>7</button>
            <button className='buton' onClick={() => handleNumberClick('8')}>8</button>
            <button className='buton' onClick={() => handleNumberClick('9')}>9</button>
            <button className='buton1' onClick={() => handleNumberClick('+')}>+</button>
          </div>
          <div className="row">
            <button className='buton' onClick={() => handleNumberClick('4')}>4</button>
            <button className='buton' onClick={() => handleNumberClick('5')}>5</button>
            <button className='buton' onClick={() => handleNumberClick('6')}>6</button>
            <button className='buton1' onClick={() => handleNumberClick('-')}>-</button>
          </div>
          <div className="row">
            <button className='buton' onClick={() => handleNumberClick('1')}>1</button>
            <button className='buton' onClick={() => handleNumberClick('2')}>2</button>
            <button className='buton' onClick={() => handleNumberClick('3')}>3</button>
            <button className='buton1' onClick={() => handleNumberClick('/')}>/</button>
          </div>
          <div className="row">
            <button className='buton' onClick={() => handleNumberClick(".")}>.</button>
            <button className='buton' onClick={() => handleNumberClick('0')}>0</button>
            <button className='square-button' onClick={calculateResult}>=</button>
            <button className='buton1' onClick={() => handleNumberClick('*')}>*</button>
          </div>
          {/* <p>Resultado: {result}</p> */}
          <center>
            {showHistory && ( // Mostrar el historial solo si showHistory es true
            <div className="history">
              <h2>Historial de cálculos:</h2>
              <ul>
                {history.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
          </center>
          
          

        </div>
      </div>
    </div>
  );
}

export default App;
