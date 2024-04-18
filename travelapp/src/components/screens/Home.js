import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import {ReactComponent as Location} from "../../assets/images/place.svg";
import {Helmet} from "react-helmet";
export default function Home() {
  const allclick =useNavigate();
    const [places,setPlaces] = useState([]);
     useEffect(()=> {
      axios.get('https://traveller.talrop.works/api/v1/places/')
      .then(function (response) {
        setPlaces(response.data.data);
        
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
     },[]);
    
    const RenderTo = ()=> {
      
    
  return places.map((place)=> (
    <div className="item" key={place.id}  onClick={()=> allclick(`place/${place.id}`)}>
                <div className="top">
                    <img src={place.image} alt={place.name} />
                </div>
                <div className="middle"><h3>{place.name}</h3></div>
                <div className="bottom">
                    <Location className="loc-icon"/>
                    <span>{place.location}</span>
                </div>
        </div>
  ))
    }
  return (
    <>
    <Helmet>
      <title>Places | Travel-Guide</title>
    </Helmet>
        <div className="head">
            <h2>
                Welcome
            </h2>
            <span>Explore the world around you</span>
        </div>
        <div className="items">
            {RenderTo()}
        </div>
    </>
  )
}
