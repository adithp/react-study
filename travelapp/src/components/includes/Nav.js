import React from 'react'
import logo from '../../assets/images/logo.svg'
export default function Nav() {
  return (
        <header>
                <h1>
                    <img src={logo} alt="logo hd"/>
                </h1>
                <button type='button'>Login</button>
        </header>
  )
}
