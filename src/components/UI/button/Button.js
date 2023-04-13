import React from 'react'
import "./Button.css";
import { Link } from 'react-router-dom'


const Button = ({text, btnClass, to}) => {
  return (
    <Link to={to} className={`btn ${btnClass}`}>{text}</Link>
  )
}

export default Button