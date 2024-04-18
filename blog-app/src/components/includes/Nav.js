import React from 'react'

function Nav() {
  return (
    <>
    <div className='wrapper'>
        <div className='header'>
            <div className="left">
                <img src={require("../../assets/images/moke.png")} alt="logo" />
            </div>
            <div className="right">
                <ul>
                    <li>
                        <a href='#'>Get signal</a>
                    </li>
                    <li>
                        <a href='#'>Supoort</a>
                    </li>
                    <li>
                        <a href='#'>Blog</a>
                    </li>
                    <li>
                        <a href='#'>Devlopera</a>
                    </li>
                    <li>
                        <a href='#'>Carees</a>
                    </li>
                    <li>
                        <a href='#'>Donate</a>
                    </li>
                    <li>
                        
                        <img src={require("../../assets/images/instagram.png")} alt="instagram" />
                
                    </li>
                    <li>
                        
                        <img src={require("../../assets/images/twitter.png")} alt="" />
                    </li>
                </ul>
            </div>
        </div>
        </div>
        </>
  )
}

export default Nav

