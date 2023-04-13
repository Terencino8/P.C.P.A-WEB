import React from 'react'
import "./Aboutcard.css"




const aboutCard = ({number, label, paragraph}) => {


  return (
    
    <div className="aboutcard"  data-aos="fade-right">
        <h1>{number}</h1>
        <h2 className='about-label '>{label}</h2>
        <p className='about-desc u-text-small'>{paragraph} </p>
    </div>
  )
}

export default aboutCard
