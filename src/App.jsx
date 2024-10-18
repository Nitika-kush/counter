import React, { useState } from 'react'

function App() {
  const [state,setState]=useState(0);
  return (
    // <div style={{}}>
    <div style={{width:'100%',backgroundColor:'pink',marginLeft: '70%'}}>

      <h1 style={{ textAlign: 'center' }}>Counter app</h1><br/>
      <h3 style={{ textAlign: 'center' }}>{state}</h3>
      <button onClick={()=>{

          if(state>=0){
            setState(state+1);
          }
          else
          {
            setState(state-1);
          }
                }
      }>
        increase</button>
        <button onClick={()=>{
          setState(0);
        }}>clear</button>
      <button onClick={()=>{
        if(state>0)
        {
          setState(state-1);
        }

      }}>decreasee</button>
    </div>
  )
}

export default App