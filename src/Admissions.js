import React from 'react'
import { Footer, Loginbar, Navbar } from './components'
import Banner from './Banner_components/Banner'

import admissionBanner from "./assets/admissionBanner.png"
const Admissions = () => {
  return (
    <main>
       <div className="header-bg-nav">
          <Loginbar/>
          <Navbar/>
       </div>
       <div className="navbar-seating"></div>
       <Banner  title={"Admissions"} sub={"Admissions"} url={admissionBanner}/>

       <Footer/>
</main>
  )
}

export default Admissions