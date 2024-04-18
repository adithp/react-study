import React from 'react';
import { useParams } from 'react-router-dom';
export default function ProductView() {
  const params= useParams();
 
  return (
    <div className='box'>
       <h1>{params.id}</h1>
    </div>
  )
}
