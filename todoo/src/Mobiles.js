import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function Mobiles() {
  const [ajio,setAjio] = useState([]);
  useEffect(()=> {

      axios.get('https://dummyjson.com/products/search?q=phone')
.then(function (response) {
  setAjio(response.data.products);
  console.log(response.data.products);
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
        <button>Add to Cart</button>
       </div>
        
          ))
    
 }
 return (
  <div className='items'>
      {Render()}
  </div>

)
}
