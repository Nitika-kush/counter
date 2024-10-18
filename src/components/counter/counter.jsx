import React, { useEffect, useState } from 'react'

const Counter = () => {
  const [count,setCount]=useState(()=>{
    const savedCount=localStorage.getItem('count')
    return savedCount ? JSON.parse(savedCount):0;
  });

  useEffect(()=>{
    localStorage.setItem('count',JSON.stringify(count));
  },[count])
  
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
    <button disabled={count=== 0} onClick={handleDecrement}>Decrement</button>
    <button disabled={count=== 0} onClick={handleReset}>clear</button>
    </>
  
  )
}

export default  Counter