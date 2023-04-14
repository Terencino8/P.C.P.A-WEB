import React from 'react'
import "./Careers.css"
import CareerBanner from "./assets/careersBanner.png"
import { Footer, Loginbar, Navbar } from './components'
import Banner from './Banner_components/Banner'
import Button from './components/UI/button/Button'

const Careers = () => {
  return (
    <main>
       <div className="header-bg-nav">
          <Loginbar/>
          <Navbar/>
       </div>
       <div className="navbar-seating"></div>
       <Banner title={"Careers"} sub={"Careers"} url={CareerBanner}/>
       <div className="container careers">
        <form action="">
            <label htmlFor="Firstname">First Name</label>
            <input type="text" placeholder='' id='Firstname'/>
            <label htmlFor="lastname">Last Name</label>
            <input type="text" placeholder='' id='lastname'/>
            <label htmlFor="email">E-mail</label>
            <input type="email" placeholder='' id='email'/>
            <label htmlFor="number">Phone Number</label>
            <input type="text" placeholder='' id='number'/>
            <label htmlFor="address">Address</label>
            <input type="text" placeholder='' id='address'/>
            <label htmlFor="cv">Upload C.V.</label>
            <input type="file" placeholder='' id='cv'/>

            <div className="textarea_btn">
                <textarea name="" id="textarea" cols="30" rows="10" placeholder='Briefly, Tell us about yourself'></textarea>
             

              <Button text={"Submit"} btnClass={"btn-transparent-border"}/>
            </div>
        </form>
       </div>
        <Footer/>
    </main>
  )
}

export default Careers