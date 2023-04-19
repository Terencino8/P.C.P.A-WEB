import React from 'react'
import { Footer, Loginbar, Navbar } from './components'
import Banner from './Banner_components/Banner'
import blogbanner from "./assets/blogBanner.png"
const Pcpa_Blog = () => {
  return (
    <main>
       <div className="header-bg-nav">
       <Loginbar text={"Login / Signup"} to={"/login"}/>
          <Navbar/>
       </div>
       <div className="navbar-seating"></div>
       <Banner title={"P.C.P.A Blog"} sub={"P.C.P.A Blog"} url={blogbanner}/>
        <Footer/>
    </main>
  )
}

export default Pcpa_Blog