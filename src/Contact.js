import React from 'react'
import { Footer, Loginbar, Navbar } from './components'
import Banner from './Banner_components/Banner'
import contactbanner from "./assets/contactBanner.png"
const Contact = () => {
  return (
    <main>
       <div className="header-bg-nav">
          <Loginbar/>
          <Navbar/>
       </div>
       <div className="navbar-seating"></div>
       <Banner title={"Contact Us"} sub={"Contact Us"} url={contactbanner}/>
        <Footer/>
    </main>
  )
}

export default Contact