import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Nav() {
  return (
    <div className='nav-cont'>
        <h1>LOGO</h1>
      <nav>
        <ul>
            <li>
                <NavLink className={({isActive})=> isActive ? "active" : ""} to="/" >Home</NavLink>
            </li>
            <li>
                <NavLink className={({isActive})=> isActive ? "active" : ""} to="contact" >Contact</NavLink>
            </li>
            <li>
                <NavLink className={({isActive})=> isActive ? "active" : ""} to="about" >About</NavLink>
            </li>
            <li>
                <NavLink className={({isActive})=> isActive ? "active" : ""} to="products" >Products</NavLink>
            </li>
        </ul>
      </nav>
    </div>
  )
}
