import React, {useEffect} from 'react'
import "./Banner.css"


import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Banner = ({title, sub, url}) => {

  useEffect (() => {
    AOS.init({
      duration: 1000,
    });
  }, [])

  return (

    // i passed the background image here and used it as a prop named url to change it any where
    <div className="banner" style={{backgroundImage:`url(${url})`}} data-aos="fade-right">
        <h1 className="banner-title">{title}</h1>
        <h3 className=''>Home /\ {sub}</h3>
    </div>
  )
}

export default Banner