import React, { useState } from 'react'
import {RiCloseLine} from "react-icons/ri"
import {AiOutlineBars} from "react-icons/ai"
import { Link } from 'react-router-dom'

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
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/about">ABOUT US</Link></li>
        <li><Link to="/admissions">ADMISSIONS</Link></li>
        <li><Link to="/calender">CALENDER</Link></li>
        <li><Link to="/gallary">GALLERY</Link></li>
        <li><Link to="/contact">CONTACT US</Link></li>
        <li><Link to="/careers">CAREERS</Link></li>
        <li><Link to="/Pcpa_Blog">P.C.P.A BLOG</Link></li>

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