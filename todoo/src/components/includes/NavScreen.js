import React from 'react'
import {NavLink , Outlet} from 'react-router-dom';

export default function NavScreen() {
  return (
    <>
    <div className='hello'>
      <nav className='products'>
        <ul>
            <li>
                <NavLink className={({isActive})=> isActive ? "active" : ""} to="all" >All</NavLink>
            </li>
            <li>
                <NavLink className={({isActive})=> isActive ? "active" : ""} to="mobiles" >Mobiles</NavLink>
            </li>
        </ul>
      </nav>
    </div>
    
    <Outlet />
    </>
  )
}
