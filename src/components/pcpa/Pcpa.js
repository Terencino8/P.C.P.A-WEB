import React, {useEffect} from 'react'
import "./Pcpa.css"
import pcpaimg from "../../assets/bgImg1.png"
import Button from '../UI/button/Button'

import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Pcpa = () => {

  useEffect (() => {
    AOS.init({
      duration: 1500,
    });
  }, [])

  return (
    <section id='pcpa'>
     <div className="container pcpa">
        <div className="pcpa-left">
            <img src={pcpaimg
            } alt="" data-aos="fade-right"/>
        </div>
        <div className="pcpa-right" data-aos="fade-left">
            <h1 className="pcpa-title">P.C.P.A</h1>
            <p className="u-text-small">a flexible container with an opening at the top, used for carrying things. "he arrived at the children's ward carrying a bag full of toys for the young patients" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum similique atque at nulla necessitatibus expedita accusamus amet enim odio nostrum, ab magnam illum doloremque vel a ullam nihil unde possimus!</p>
            <Button text={"Learn More"} btnClass={"btn-dark-purple"} href={"#about-us"} />
        </div>
     </div>
    </section>
  )
}

export default Pcpa
