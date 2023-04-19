import React from 'react'
import "./Login.css"
import Loginbar from '../loginbar/Loginbar'
import logo from "../../assets/logo.png"
import Button from '../UI/button/Button'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className=" login">
         <Loginbar text={"Home"} to={"/"}/>
         <div className=" container login-desc">
         <img src={logo} alt="" />
         <div className=" contact-view">
          <h1>Login</h1>

          <form action="">
                <label htmlFor="email">E-mail</label>
                <input type="email" placeholder='' id='email'/>

                <label htmlFor="password">Password</label>
                <input type="password" placeholder='' id='password'/>
                  
                  <p>Not Yet Registered?, <Link to={"/signup"}> <span>Register Here</span> </Link> </p> 
                <div className="contact-btn">
              <Button text={"Submit"} btnClass={"btn-brown"}/>

              </div>

            </form>


          </div>
         </div>
         <div className="footer-end">
            <h1>Pcpa @ 2023</h1>
        </div>
    </div>
       
  )
}

export default Login