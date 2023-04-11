import React from 'react'
import "./Quotesection.css"
import studentImg from "../../assets/doctors.jpeg"

const Quotesection = () => {
  return (
    <section id='quotesection'>


        <div className="container quotesection">
         <img src={studentImg} alt="students"  />
            
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