import React, { useState } from 'react'
import {RiCloseLine} from "react-icons/ri"
import {AiOutlineBars} from "react-icons/ai"

import "./Navbar.css"
import logo from "../../assets/logo.png"


const Navbar = () => {
  const [showMenu, setshowMenu] = useState(false);

  const toggleMenu =() => {
    setshowMenu(!showMenu);
  }
  return (
  <nav className="navbar">
    <div className="container">
      <div className="logo">
        <img src={logo} alt="logo"  />
      </div>
      <ul className="nav-links" id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide"}>
        <li><a href="">HOME</a></li>
        <li><a href="">ABOUT US</a></li>
        <li><a href="">ADMISSIONS</a></li>
        <li><a href="">CALENDER</a></li>
        <li><a href="">GALLERY</a></li>
        <li><a href="">CONTACT US</a></li>
        <li><a href="">CAREERS</a></li>
        <li><a href="">P.C.P.A BLOG</a></li>

      </ul>
      <div className="nav-icons" onClick={toggleMenu}>
        {
          showMenu ? <RiCloseLine color='#9D573E' size={30}/> : <AiOutlineBars color='#9D573E' size={27}/>
        } 
      </div>
    </div>
  
  </nav>
  )
}

export default Navbar