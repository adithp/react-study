import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {Helmet} from 'react-helmet';


export default function Products() {
  const [ajio,setAjio] = useState([]);
    useEffect(()=> {

        axios.get('https://dummyjson.com/products')
  .then(function (response) {
    setAjio(response.data.products);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
    },[])
    const Render =()=> {
    
        return ajio.map((item)=> (
            <div className='card' key={item.id}>
                <img src={item.images[0]} alt={item.brand}/>
                <h1>{item.title}</h1>
                <h2>${item.price}</h2>
                <p>{item.description}</p>
                <Link className='button'  to={`${item.id}`}>Add to Cart</Link>
            </div>
          
            ))
      
   }
   return (
   <>
   <Helmet>
      <title>Products Page</title>
    </Helmet>
    <div className='items'>
        {Render()}
    </div>
    </>
  
  )
}
