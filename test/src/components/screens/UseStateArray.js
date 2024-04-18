import React, { useState } from 'react'

function UseStateArray() {
    const [items,setItems] = useState([{name:"adith",id:0}]);
    const [input,setInput] = useState("");
    let addItems = ()=> {
        setItems([...items,{name: input , id: items.length}])
    };
  return (
    <>
        <ul>
            {items.map((item)=>(
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
        <input value={input} onChange={(e)=> setInput(e.target.value)} />
        <button onClick={addItems}>Add</button>
    </>
  )
}

export default UseStateArray;
