import React, {useEffect} from 'react'
import "./Quotesection.css"
import studentImg from "../../assets/doctors.jpeg"

import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Quotesection = () => {
  useEffect (() => {
    AOS.init({
      duration: 1500,
    });
  }, [])

  return (
    <section id='quotesection'>


        <div className="container quotesection" data-aos="fade-down">
         <img src={studentImg} alt="students" data-aos="fade-left"/>
            
            <p className="u-text-small u-text-light ">
            the regard that something is held to deserve; the importance, worth, or usefulness of something."your support is of great value" the regard that something is held to deserve; the importance, worth, or usefulness of something."your support is of great value"
            </p>
            <h1>Precious Child Palace Academy</h1>
            <p className='u-text-small u-text-light'>Ajao Estate, Lagos</p>
        </div>
    </section>
  )
}

export default Quotesection