import React from 'react'
import "./Works.css"
import workImg from "../../assets/img2.png"
import Button from '../UI/button/Button'

const Works = () => {
  return (
    <section id='works'>
        <div className="container works">
            <div className="works-left">
                <img src={workImg} alt="" />
            </div>
            <div className="works-right">
                <h2 className="works-label">
                    Our Works
                </h2>
                <h1>Mission Statement</h1>
                <p className="u-text-small">
                The Slice Tool is also found under the Region Tooldropdown in the toolbar. Slices allow youto specify a specific region of the screen for export, even if they're not organized into a single group. Just drag a slice around the region you want to export...
                </p>
                <Button text={"Learn More"} btnClass={"btn-light-purple"}/>
            </div>
        </div>
    </section>
  )
}

export default Works