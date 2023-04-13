import React from 'react'
import { Footer, Loginbar, Navbar } from './components'
import Banner from './Banner_components/Banner'

const About = () => {
  return (
    <main>
       
       <div className="header-bg-nav">
          <Loginbar/>
          <Navbar/>
        <Banner title={"About Us"} sub={"About Us"}/>
       </div>

        
        <Footer/>
    </main>
  )
}

export default About