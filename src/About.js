import React from 'react'
import { Footer, Loginbar, Navbar } from './components'

const About = () => {
  return (
    <main>
       
       <div className="header-bg-nav">
          <Loginbar/>
          <Navbar/>
       </div>
        
        <Footer/>
    </main>
  )
}

export default About