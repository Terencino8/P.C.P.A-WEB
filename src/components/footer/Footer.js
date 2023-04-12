import React, {useEffect} from 'react'
import "./Footer.css"
import "../UI/button/Button.css"
import {TiSocialGooglePlus} from "react-icons/ti"
import {FaFacebookF, FaTwitter,FaInstagram} from "react-icons/fa";


import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Footer = () => {

    useEffect (() => {
        AOS.init({
          duration: 1000,
        });
      }, [])

  return (
    <section id='footer'>
        <div className="container footer">

            <div className="footer-values" data-aos="fade-right">
                <h1 className='u-title'>Our Values</h1>
                <p className="u-text-small">
                The Slice Tool is also found under the Region Tooldropdown in the toolbar. Slices allow you to specify a specific region of the screen for export, even if they're not organized into a single group.Just drag a slice around the region you want to export...
                </p>
                <div className="footer-social-icons">
                    <div className="footer-social-icon"data-aos="fade-up">
                        <TiSocialGooglePlus/>
                    </div>

                    <div className="footer-social-icon"data-aos="fade-down">
                        <FaFacebookF/>
                    </div>

                    <div className="footer-social-icon" data-aos="fade-up">
                        <FaTwitter/>
                    </div>

                    <div className="footer-social-icon" data-aos="fade-down">
                        <FaInstagram/>
                    </div>
                </div>
            </div>

            <hr />


            <div className="footer-links" data-aos="fade-down">
                <h1 className="u-title">Links</h1>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Addmissions</a></li>
                    <li><a href="">Academics</a></li>
                    <li><a href="">Gallery</a></li>
                    <li><a href="">Contact Us</a></li>
                    <li><a href="">Pcpa Blog</a></li>
                </ul>
            </div>
                <hr />

            <div className="footer-contact" data-aos="fade-left">
                <h1 className="u-title">Contact Us</h1>
                <p className="u-text-small">
                12/ 14 Inua Mohammed, <br /> off  Asa_Afariogun Street, <br /> Ajao Estate,Lagos State.<br /> OR <br /> 
                25 Mafolukwu Road Oshodi, Lagos State.
                <br />

                </p>
                
            </div>

        </div>


        <div className="footer-end">
            <h1>Pcpa @ 2023</h1>
        </div>
    </section>
  )
}

export default Footer