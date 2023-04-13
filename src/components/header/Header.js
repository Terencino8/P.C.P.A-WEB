import React, {useEffect} from 'react'
import "./Header.css"
import Button from '../UI/button/Button'
import "../UI/button/Button.css"

import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Header = () => {
  useEffect (() => {
    AOS.init({
      duration: 1000,
    });
  }, [])
  return (
    <section id='header'>
      <div className="container header">
        <div className="header-left" data-aos="fade-right">
            <h1>
              <span>Welcome to Precious Child Palace Academy </span>
            </h1>
            <p><i>We lay a Strong Foundation that never cracks in a lifetime</i></p>
            <div className="header-cta">
              <Button text={"Apply Now"} btnClass={"btn-red"} to={"/admissions"}/>

              <Button text={"Learn More"} btnClass={"btn-transparent-border"} to={"/about"}/>
            </div>
        </div>
  
      </div>
    </section>
  )
}

export default Header