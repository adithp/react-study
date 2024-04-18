import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {ReactComponent as Location} from "../../assets/images/place.svg";
import {Helmet} from "react-helmet";
export default function View() {
  const id = useParams();
  const url= 'https://traveller.talrop.works/api/v1/places/view/'+id.id;
  const [place,setPlace] = useState({
    name:"",
  });
  useEffect(()=> {
    axios.get(url)
  .then(function (response) {
    // handle success
    setPlace(response.data.data)
    
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  },[url])
  
  const RenderTo = () => {
    return (
    <div className="container">
        <h1>{place.name}</h1>
        <div className="line">
          <div className="round">
              <span>{place.category_name}</span>
          </div>
          <Location className="loc-icon" />
          <h5>{place.name}</h5>
        </div>
        <div className="box">
          <div className="left">
            <img src={place.image} alt={place.name}/>
          </div>
          <div className="right">
            {place.gallery?.map((image)=> (
      <div className="item">
          <img src={image.image} alt={image.id} />
      </div>
    ))}
          </div>
        </div>
        <div className="content">
          <h2>Place Details</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, impedit. Magni rem fugit sunt molestiae, distinctio sint ad corporis nesciunt. Magnam esse aut quo. A sit reiciendis pariatur velit? At, doloribus voluptas! Perferendis numquam ea eaque vero quam eius aliquam, sequi quo praesentium necessitatibus sapiente id. Quo quas tempora non. ipsum dolor sit amet consectetur adipisicing elit. Ipsum, a? Aspernatur quam nisi et fugiat iure doloremque ex autem odit laborum magni voluptatum eos laudantium possimus architecto enim, fuga perferendis.</p>
        </div>
    </div>
    )
  }
  return (
    <>
      {RenderTo()}
      <Helmet>
      <title>Place {place.name} | Travel-Guide</title>
    </Helmet>
    </>
  )
}
