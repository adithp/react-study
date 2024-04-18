import React, { useEffect, useState,useRef} from 'react'
import axios from 'axios'
import Slider from "react-slick";
export default function ListUsers() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: "linear"
  };
  const Reftask = useRef();
    const [users,setUsers] = useState([]);
    useEffect(()=> {

        axios.get("https://reqres.in/api/users")
  .then(function (response) {
    console.log(response.data.data);
    setUsers(response.data.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
},[]);
const renderTask= ()=> {
    return users.map((user)=>(
        <div className='item' key={user.id}>
            <img src={user.avatar} alt='imager'/>
            <a href={`mailto${user.email}`}>{user.email}</a>
            <p>Name:{user.first_name}{user.last_name}</p>
        </div>
    ))
}
  return (
    <div className='container'>
      <Slider {...settings} ref={Reftask}>
      {renderTask()}
      </Slider>
      <button className="button" onClick={() =>Reftask.current.slickNext()}>
            Previous
          </button>
          <button className="button" onClick={() =>Reftask.current.slickPrev()}>
            Next
          </button>
     
  </div>
  )
}
