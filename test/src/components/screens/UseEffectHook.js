import React, { useEffect, useState } from 'react'

export default function UseEffectHook() {
const [count,setCount] =useState(0);
const [name,setName] =useState("");
const IncrC= ()=>{
  setCount((prevState)=>prevState+1)
}; 
useEffect(()=>{
  console.log("Entered");
  document.title = `Current ${count}`
},[count]);
useEffect(()=>{
  console.log("Entered Name");
},[name]);
useEffect(()=>{
  console.log("Mounting Time");
  
},[]);
  return (<>
    <input value={name} onChange={(e)=>setName(e.target.value)}/>
    <div>
      <button onClick={()=>IncrC()}>Increment{count}</button>
    </div>
    </>
  )
}
