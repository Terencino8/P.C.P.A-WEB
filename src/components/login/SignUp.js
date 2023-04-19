import React from 'react'
import "./Login.css"
import Loginbar from '../loginbar/Loginbar'
import logo from "../../assets/logo.png"
import Button from '../UI/button/Button'
import { Link } from 'react-router-dom'


const SignUp = () => {
  return (
    <div className=" login">
    <Loginbar text={"Home"} to={"/"}/>
    <div className=" container login-desc">
    <img src={logo} alt="" />
    <div className=" contact-view">
     <h1>Sign Up</h1>

     <form action="" className='signUp'>
            <label htmlFor="Firstname">First Name</label>
            <input type="text" placeholder='' id='Firstname'/>
            <label htmlFor="lastname">Last Name</label>
            <input type="text" placeholder='' id='lastname'/>
            <label htmlFor="email">E-mail</label>
            <input type="email" placeholder='' id='email'/>
            <label htmlFor="number">Phone Number</label>
            <input type="text" placeholder='' id='number'/>
            <label htmlFor="password">Password</label>
            <input type="password" placeholder='' id='password'/>
            <label htmlFor="Vpassword">Verify Password</label>
            <input type="password" placeholder='' id='Vpassword'/>
             
             <p>Already Registered?, <Link to={"/login"}> <span>Login Here</span> </Link> </p> 
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

export default SignUp