import React from 'react'
import "./Loginbar.css"
import Button from '../UI/button/Button'


const Loginbar = () => {
  return (
<div className="loginbar-bg ">
    <div className="container loginbar-contact">

        <div className="u-text-small">
            <p className="loginbar-mail">Terencino8@gmail.com</p>
            <p className="loginbar-number">0708 542 9640</p>
        </div>
        <Button text={"Login / Signup"} btnClass={"btn-transparent"} href={"#"} />
    </div>
    
</div>
  )
}

export default Loginbar