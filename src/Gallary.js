import React from 'react'
import { Footer, Loginbar, Navbar } from './components'
import Banner from './Banner_components/Banner'
// import gallarybanner from "./assets/"
const Gallary = () => {
  return (
    <main>
       <div className="header-bg-nav">
          <Loginbar/>
          <Navbar/>
       </div>
       <div className="navbar-seating"></div>
       <Banner title={"Gallery"} sub={"Gallery"}/>
    <Footer/>
    </main>
  )
}

export default Gallary