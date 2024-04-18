import React from 'react'
import Nav from '../includes/Nav'
import axios from 'axios';
import {Link} from "react-router-dom";
import { useEffect } from 'react';
import { useState } from 'react';
function blogs() {
    const [blog,setBlog] = useState([]);
    useEffect(()=> {
        axios.get('https://traveller.talrop.works/api/v1/blog/')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
    },[])
    const CallAll = ()=> {

    }
  return (<>
    <div className="container">
        <h1>Blog Posts</h1>
        {CallAll()}
        <div className="items">
            <div className="item">
            <img src={require("../../assets/images/Ellipse -1.png")} alt="logo" />
            <h2>Alphhin Hacathon Reportback</h2>
            <p className="label">
                A guest post by <span className='color'>messico</span>  on 22 oc 2023
            </p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo fugit fuga ex suscipit sequi? Deserunt labore omnis velit commodi ab veniam magnam autem. Accusantium odit harum doloremque pariatur animi doloribus odio, illo sint quod consequatur quas asperiores nesciunt. Incidunt ipsum iure ut dolore delectus laboriosam eos labore quasi, quaerat molestias.</p>
            <Link>Learn More</Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default blogs
