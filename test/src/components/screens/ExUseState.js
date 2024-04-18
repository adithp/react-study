import React,{useState} from 'react'

 function ExUseState() {
    const [student,setStudent] = useState({name:"adith",age:18,});
    
  return( 
        <>
            <h1>{student.name} {student.age}</h1>
            <button onClick={()=>{
                setStudent({...student,name:"sojay"});
                
            }}>Change Character</button>
            <button onClick={()=>{
                setStudent((prevState)=>({ ...student,age: prevState.age + 1}));
                
            }}>Change Character</button>
        </>
        )
   
}
export default ExUseState;