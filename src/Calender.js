import React from 'react'
import { Footer, Loginbar, Navbar } from './components'
import Banner from './Banner_components/Banner'
import calenderbanner from "./assets/calenderBanner.png"
const Calender = () => {
  return (
    <main>
       <div className="header-bg-nav">
       <Loginbar text={"Login / Signup"} to={"/login"}/>
          <Navbar/>
       </div>
       <div className="navbar-seating"></div>
       <Banner title={"Academic Calender"} sub={"Calender"} url={calenderbanner}/>
    <Footer/>
</main>
  )
}

export default Calender