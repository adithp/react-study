import React, { useState } from 'react'
import MouseMove from './MouseMove';

export default function Container() {
    const [load,setLoad]=useState(true);
    const logMouseP = (e)=>{
        
    }
    
  return (
    <div>
      <>
      {load && <MouseMove />}
      <button onClick={()=> setLoad(!load)}>Toggle</button>
      </>
    </div>
  )
}
