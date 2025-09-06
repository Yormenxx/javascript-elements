import React, { useState } from 'react'

const Ejercicio1 = () => {

    const [counter, setCounter]= useState(()=>{
        const initialValue = 0;
        return initialValue
    });


    const handleIncrement=()=>{
        setCounter(counter+1)
    }

  return (
    <div>

        <h1>{counter}</h1>
        <button onClick={handleIncrement}>Incrementar</button>
      
    </div>
  )
}

export default Ejercicio1
