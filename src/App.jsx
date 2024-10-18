import React, { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/counter/counter';

function App() {
  const [count,setCount]=useState(0);
 return(
  <Counter/>
 )
}

export default App