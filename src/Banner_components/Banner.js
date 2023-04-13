import React from 'react'
import "./Banner.css"
const Banner = ({title, sub}) => {
  return (
    <div className="banner">
        <h1 className="banner-title">{title}</h1>
        <h3 className=''>Home /\ {sub}</h3>
    </div>
  )
}

export default Banner