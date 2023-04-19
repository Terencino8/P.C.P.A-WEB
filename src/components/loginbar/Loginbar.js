import React from 'react'
import "./Loginbar.css"
import Button from '../UI/button/Button'


const Loginbar = ({text, to}) => {
  return (
<div className="loginbar-bg ">
    <div className="container loginbar-contact">

        <div className="u-text-small">
            <p className="loginbar-mail">Terencino8@gmail.com</p>
            <p className="loginbar-number">0708 542 9640</p>
        </div>
        <Button text={text} btnClass={"btn-transparent"} to={to} />
    </div>
    
</div>
  )
}

export default Loginbar