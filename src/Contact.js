import React from 'react'
import { Footer, Loginbar, Navbar } from './components'
import Banner from './Banner_components/Banner'
import contactbanner from "./assets/contactBanner.png"
import Button from './components/UI/button/Button'
import "./Contact.css"
import addressMap from "./assets/adressMap.png"
const Contact = () => {
  return (
    <main>
       <div className="header-bg-nav">
          <Loginbar/>
          <Navbar/>
       </div>
       <div className="navbar-seating"></div>
       <Banner title={"Contact Us"} sub={"Contact Us"} url={contactbanner}/>
        <div className="container contact">

          <div className=" contact-view">
          <h1>Air Your View</h1>

          <form action="">
                <label htmlFor="Firstname">First Name</label>
                <input type="text" placeholder='' id='Firstname'/>
                <label htmlFor="lastname">Last Name</label>
                <input type="text" placeholder='' id='lastname'/>
                <label htmlFor="email">E-mail</label>
                <input type="email" placeholder='' id='email'/>
                <label htmlFor="number">Phone Number</label>
                <input type="text" placeholder='' id='number'/>

              
                  <textarea name="" id="textarea" cols="30" rows="10" placeholder='Type In Your Message'></textarea>

            </form>

              <div className="contact-btn">
              <Button text={"Submit"} btnClass={"btn-transparent-border"}/>

              </div>
          </div>

          <div className="contact-address">
              <h1>Address</h1>
              <div className="address-desc">
                <p className="contact-a-location">12/14 Inua Mohammed Street, Off Asa afariogun Street, Ajao Estate, Lagos State.</p>
                  <hr />
                <p className="mail">Terencino8@gmail.com</p>
                  <hr />
                <p className="number">07085429640</p>
                <hr />
                <p className="web">http://www.preciouschildpalace.edu/</p>
              
              </div>

              <div className="address-map">
                  <img src={addressMap} alt="" />

              </div>



          </div>
        </div>

        <Footer/>
    </main>
  )
}

export default Contact