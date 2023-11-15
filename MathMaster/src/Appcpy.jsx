import { useState } from 'react';
import * as math from 'mathjs';
import "./etyle.css"
function App() {
  const [inputValue, setInputValue] = useState('');
  const handleNumberClick = (num) => {
    setInputValue(inputValue + num);
  };

  const clearInput = () => {
    setInputValue('');
  };

  const calculateResult = () => {
    try {
      // Replace the square root symbol with 'sqrt' before calculation
      const input = inputValue.replace(/√/g, 'sqrt');
      setInputValue(math.evaluate(input).toString());
    } catch (error) {
      setInputValue(error.message);
    }
  };

  const addSqrt = () => {
    // Add the square root symbol to the input
    setInputValue(`√(${inputValue})`);
  };

  return (
    <div className="App">
      <h1>Math Master</h1>
      <div className="calculator">
        <input className='testo' type="text" value={inputValue} readOnly />
        <div className="buttons">
          <div className="row">
            <button className='histo' onClick={() => handleNumberClick('')}>histotial</button>
            <button className='butonAC' onClick={clearInput}>AC</button>
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
          
        </div>
      </div>
    </div>
  );
}

export default App;
