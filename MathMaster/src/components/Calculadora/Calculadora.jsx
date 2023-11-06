import React, { useState } from 'react'

const Calculadora = () => {
    const [entrada, setEntrada] = useState(0)
    const [numero2,setNumero2] = useState(0)
    const handleChange = (numero) => {
        let salida = (entrada*10) + numero;
        setEntrada(salida);
    }
    const cambio= () =>{
        setNumero2(entrada)
        setEntrada(0)

        
    }
   

    return (
        <>
            <p>{entrada}</p>
            <button onClick={() => handleChange(0)}>0</button>
            <button onClick={() => handleChange(1)}>1</button>
            <button onClick={() => handleChange(2)}>2</button>
            <button onClick={() => handleChange(3)}>3</button>
            <button onClick={() => handleChange(4)}>4</button>
            <button onClick={() => handleChange(5)}>5</button>
            <button onClick={() => handleChange(6)}>6</button>
            <button onClick={() => handleChange(7)}>7</button>
            <button onClick={() => handleChange(8)}>8</button>
            <button onClick={() => handleChange(9)}>9</button>

            <button onClick={() => cambio}>+</button>

            <button onClick={() => setEntrada(0)}>eliminar</button>
        </>
    )
}
export default Calculadora