import React, {useEffect} from 'react'
import "./Quotesection2.css"
import logo from "../../assets/logo.png"


import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Quotesection2 = () => {

  useEffect (() => {
    AOS.init({
      duration: 1500,
    });
  }, [])

  return (
    <section id='quotesection2'>
        <div className="container quotesection2" data-aos="fade-left">
            <img src={logo} alt="logo" data-aos="fade-up" />



            <h1 data-aos="fade-right">Precious Child Palace Academy</h1>
            <p className="u-text-small u-text-light " >
            with international standards as we take stride towards meeting up with the world's 21st century demand in educating every child, providing quality and standardised education that takes care of all areas of child's life such as moral, emotional, mental, physical, social, spiritual and so on. We on ground with our well trained, competent and dedicated educators in languages eg French, jolly phonics, diction etiquette and manners, Montessori and other extra moral lessons coupled with other learning activities gearing towards bringing out the very best in any child who school here. <br></br>We nurture ! We love! We care! We are PCPA!
            </p>
        </div>
    </section>
  )
}

export default Quotesection2