import React from 'react'
import '../Navbar/Navbar.css'
import logoimg from "../../../../Assets/Baikal Logo.png"

const Navbar = () => {
  return (
  <>
   <div className="navbar">
        <div className="nav-logo">
          <img src={logoimg} className="img-background" />
        </div>
        <div className="nav-menu">
        <div className="nav-menu-list">

            <p>BLOG</p>
            <p>WORK</p>
            <p>CREW</p>
            <p>CONTACT</p> 
            
        </div>

        <div className="nav-menu-button">
          <button className="button">HIRE US</button> 
          </div>
        </div>
      </div>
  
  </>
  )
}

export default Navbar