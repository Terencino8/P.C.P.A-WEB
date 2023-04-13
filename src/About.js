import React, {useEffect} from 'react'
import { Footer, Loginbar, Navbar } from './components'
import Banner from './Banner_components/Banner'
import aboutImg from "./assets/aboutImg.png"
import "./About.css"



import Aboutcard from './Banner_components/about-card/Aboutcard'

import AOS from 'aos';
import 'aos/dist/aos.css'; 

const About = () => {

  useEffect (() => {
    AOS.init({
      duration: 1500,
    });
  }, [])

  return (
    <main>
       <div className="header-bg-nav">
          <Loginbar/>
          <Navbar/>
       </div>
       <div className="navbar-seating"></div>
       <Banner title={"About Us"} sub={"About Us"} />
       <div className="container about-c">
       <div className="about">
          <div className="about-left" data-aos="fade-right">
              <h2 className='about-label' data-aos="fade-right">ABOUT US</h2>
              <h1>VALUES AND CULTURES <br/>OF  P.C.P.A:</h1>
              <div className=" u-text-small about-descs">
                <p className="about-desc one">
                    Sir / Ma, your mere presence, accompanied with your promises and commitments for support, have further strengthened and sharpened our focus towards achieving our vision of molding these young minds (the children), into pacesetters and societal
                </p>
                <br />
                <p className="about-desc two">
                    standards intellectually and in personality, while caring for them as you do. You have fueled our motivation to do more and give more of ourselves. Thank you. 
                </p>
                <br />
                <p className="about-desc three">
                This is a token of appreciation from the pupils, staff and management at PRECIOUS CHILD PALACE ACADEMY (P. C. P. A) to you, for taking the time to honour our invitation to our cultural day celebration (IGBOAMAKA), on Saturday 9th April, 2022.
                </p>
                <br />
                <p className="about-desc four ">
                    Sir / Ma, your mere presence, accompanied with your promises and commitments for support, have further strengthened and sharpened our focus towards achieving our vision of molding these young minds (the children), into pacesetters and societal
                </p>

              </div>

              </div>


              <div className="about-right" data-aos="fade-down">
              
                      <img src={aboutImg} alt="about" />
                      </div>
       </div>
          <div className="about-cards">
              <Aboutcard number={"I"} label={"P.C.P.A"} paragraph={"Sir / Ma, your mere presence, accompanied with your promises and commitments for support, have further strengthened and sharpened our focus towards achieving our vision of molding these young minds (the children), into pacesetters and societal"}/>
              <Aboutcard number={"II"} label={"Our Mission"} paragraph={"Sir / Ma, your mere presence, accompanied with your promises and commitments for support, have further strengthened and sharpened our focus towards achieving our vision of molding these young minds (the children), into pacesetters and societal "}/>
              <Aboutcard number={"III"} label={"Our Vision"} paragraph={"Sir / Ma, your mere presence, accompanied with your promises and commitments for support, have further strengthened and sharpened our focus towards achieving our vision of molding these young minds (the children), into pacesetters and societal "}/>
              
          </div>
       </div>
       
        
        <Footer/>
    </main>
  )
}

export default About