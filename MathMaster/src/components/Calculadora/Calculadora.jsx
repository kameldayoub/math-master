import React, { useState } from 'react'


const Calculadora = () => {
    const [entrada,setEntrada]=useState(0)
  return (
  <>
    <input value={entrada}></input>
   <button></button>

    </>
  )
}

export default Calculadora