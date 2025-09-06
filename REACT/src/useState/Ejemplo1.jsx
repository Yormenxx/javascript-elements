import React, { useState } from 'react'

const Ejemplo1 = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrementar=()=>{
    setCounter(counter+1);
  }
  const handleDecrementar=()=>{
    setCounter(counter-1);
  }

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleIncrementar}>Incrementar</button>
      <button onClick={handleDecrementar}>Decrementar</button>
    </div>
  )
}

export default Ejemplo1
