import React from 'react'
import "./Header.css"
import Button from '../UI/button/Button'
import "../UI/button/Button.css"
import sampleimg2 from "../../assets/img2.png"
const Header = () => {
  return (
    <section id='header'>
      <div className="container header">
        <div className="header-left">
            <h1>
              <span>Welcome to Precious Child Palace Academy </span>
            </h1>
            <p><i>A Something that never cracks in a lifetime</i></p>
            <div className="header-cta">
              <Button text={"Apply Now"} btnClass={"btn-red"} href={"#addmission"}/>

              <Button text={"Learn More"} btnClass={"btn-transparent-border"} href={"#about"}/>
            </div>
        </div>
        <div className="header-right">

        </div>
      </div>
    </section>
  )
}

export default Header