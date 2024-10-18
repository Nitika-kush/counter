import React, { useState } from 'react'

const Counter = () => {
  const [count,setCount]=useState(0);
  
  const handleIncrement=()=>{
    setCount(count+1);
  }

  const handleDecrement=()=>{
    setCount(count-1);
  }

  const handleReset=()=>{
    setCount(0);
  }

  return (
    <>
    <h3> Counter app</h3><br/>
    <p>{count}</p>
    <button onClick={handleIncrement}>increment</button>
    <button onClick={handleDecrement}>Decrement</button>
    <button onClick={handleReset}>clear</button>
    </>
  
  )
}

export default  Counter