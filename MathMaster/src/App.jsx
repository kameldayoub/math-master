import { useState } from 'react';
import * as math from 'mathjs';
import "./etyle.css"
function App() {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');
  const [history, setHistory] = useState([]); // Nuevo estado para el historial
  const [showHistory, setShowHistory] = useState(false); // Nuevo estado para controlar la visualización del historial
  const [isCalculateDisabled, setIsCalculateDisabled] = useState(false);

  const toggleHistory = () => {
    setShowHistory(!showHistory); // Cambiar el estado de showHistory cada vez que se haga clic en el botón
  };
  const handleNumberClick = (num) => {
    const lastChar = inputValue[inputValue.length - 1];
    if ('+-*/^%'.includes(lastChar) && '+-*/^%'.includes(num)) {
      return;
    }

    setInputValue(inputValue + num);
    setIsCalculateDisabled(false); // Habilitar el botón después de agregar un número válido
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
      const lastChar = inputValue[inputValue.length - 1];
      const isValidLastChar = /[0-9)$]/.test(lastChar);
  
      if (!isValidLastChar) {
        setIsCalculateDisabled(true); // Deshabilitar el botón si el último carácter no es válido
        return;
      }
  
      const input = inputValue.replace(/√/g, 'sqrt');
      const result = math.evaluate(input).toString();
      setInputValue(result);
      const newHistory = [...history, `${input} = ${result}`];
      if (newHistory.length > 5) {
        newHistory.shift();
      }
      setHistory(newHistory);
    } catch (error) {
      setIsCalculateDisabled(true); // Deshabilitar el botón en caso de error
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
        <div className="buttons" id='buttons'>
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
            <button className='square-button' onClick={calculateResult} disabled={isCalculateDisabled}>=</button>
            <button className='buton1' onClick={() => handleNumberClick('*')}>*</button>
          </div>
          {/* <p>Resultado: {result}</p> */}
          
          

        </div>
        
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
  );
}

export default App;
