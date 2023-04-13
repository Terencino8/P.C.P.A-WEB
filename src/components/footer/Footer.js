import React from 'react'
import "./Footer.css"
import "../UI/button/Button.css"
import {TiSocialGooglePlus} from "react-icons/ti"
import {FaFacebookF, FaTwitter,FaInstagram} from "react-icons/fa";
import { Link } from 'react-router-dom'



const Footer = () => {


  return (
    <section id='footer'>
        <div className="container footer">

            <div className="footer-values" >
                <h1 className='u-title'>Our Values</h1>
                <p className="u-text-small">
                The Slice Tool is also found under the Region Tooldropdown in the toolbar. Slices allow you to specify a specific region of the screen for export, even if they're not organized into a single group.Just drag a slice around the region you want to export...
                </p>
                <div className="footer-social-icons">
                    <div className="footer-social-icon" data-aos="fade-up">
                        <TiSocialGooglePlus/>
                    </div>

                    <div className="footer-social-icon" data-aos="fade-down">
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


            <div className="footer-links" >
                <h1 className="u-title">Links</h1>
                <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/about">ABOUT US</Link></li>
        <li><Link to="/admissions">ADMISSIONS</Link></li>
        <li><Link to="/calender">CALENDER</Link></li>
        <li><Link to="/gallary">GALLERY</Link></li>
        <li><Link to="/contact">CONTACT US</Link></li>
        <li><Link to="/careers">CAREERS</Link></li>
        <li><Link to="/Pcpa_Blog">P.C.P.A BLOG</Link></li>

      </ul>
            </div>
                <hr />

            <div className="footer-contact" >
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

  