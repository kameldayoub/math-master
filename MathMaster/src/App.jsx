import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');

  const handleNumberClick = (num) => {
    setInputValue(inputValue + num);
  };

  const clearInput = () => {
    setInputValue('');
    setResult('');
  };

  const calculateResult = () => {
    try {
      setResult(eval(inputValue).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="App">
      <h1>Calculadora Simple</h1>
      <div className="calculator">
        <input type="text" value={inputValue} readOnly />
        <div className="buttons">
          <div className="row">
            <button onClick={() => handleNumberClick('7')}>7</button>
            <button onClick={() => handleNumberClick('8')}>8</button>
            <button onClick={() => handleNumberClick('9')}>9</button>
          </div>
          <div className="row">
            <button onClick={() => handleNumberClick('4')}>4</button>
            <button onClick={() => handleNumberClick('5')}>5</button>
            <button onClick={() => handleNumberClick('6')}>6</button>
          </div>
          <div className="row">
            <button onClick={() => handleNumberClick('1')}>1</button>
            <button onClick={() => handleNumberClick('2')}>2</button>
            <button onClick={() => handleNumberClick('3')}>3</button>
          </div>
          <div className="row">
            <button onClick={() => handleNumberClick('0')}>0</button>
            <button onClick={clearInput}>C</button>
            <button onClick={calculateResult}>=</button>
          </div>
        </div>
      </div>
      <p>Resultado: {result}</p>
    </div>
  );
}

export default App;

