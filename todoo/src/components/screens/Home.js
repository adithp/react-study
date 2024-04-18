import React from 'react';
import { useNavigate,useSearchParams } from 'react-router-dom';
import {Helmet} from 'react-helmet';

export default function Home() {
  const [searchParams,setSearchParams] = useSearchParams();
  const navigate= useNavigate();
  const name =searchParams.get("name");
  return (
    <>
    <Helmet>
      <title>Home Page</title>
    </Helmet>
    <h1>
      Home
    </h1>
    <h4 onClick={()=> navigate("/contact")} >Goto Contact</h4>
    <button onClick={()=> setSearchParams({name:"adith"})}>Add</button>
    <button onClick={()=> setSearchParams()}>remove</button>
    <h1>Name{name}</h1>
    </>
  )
}
