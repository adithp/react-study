import React, { useEffect, useState } from 'react'

function MouseMove() {
    const [mouseX,setMouseX] = useState(0);
    const [mouseY,setMouseY] = useState(0); 
    let logMouseP = (e) => {
        setMouseX(e.clientX);
        setMouseY(e.clientY);
        console.log("Postion",mouseX,mouseY)
    }
    useEffect((() => {
        console.log("UseEffectCalled");
        window.addEventListener("mousemove",logMouseP);
        return ()=> {
            console.log("uNm ounded")
            window.removeEventListener("mousemove",logMouseP);
        };
    }))

  return (
    <div>
      <h1>X Position:{mouseX}</h1>
      <h1>Y Position:{mouseY}</h1>
      
    </div>
  )
}

export default MouseMove;
