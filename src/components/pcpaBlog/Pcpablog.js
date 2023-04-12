import React from 'react'
import "./Pcpablog.css"
import BlogCard from './Blogcard/BlogCard'
import blogimg1 from "../../assets/homeblog1.png"
import blogimg2 from "../../assets/homeblog2.png"
import blogimg3 from "../../assets/homeblog3.png"
const Pcpablog = () => {
  return (
    <section id='pcpablog'>
        <div className="pcpablog">
            <div className="pcpablog-title">
                <h2 className="pcpablog-title-small">P.C.P.A News Feed</h2>
                <h1 className="pcpablog-title-big">Recent News | Blog</h1>
            </div>
            <div className="pcpablog-body">
                <BlogCard src={blogimg1} title={"Health And Safety"} para={"a flexible container with an opening at the top, used for carrying things.he arrived at the children's ward carrying a bag full of toys for the young patients"} date={"14 January 2023"}/>

                <BlogCard src={blogimg2} title={"Government News Update"} para={"a flexible container with an opening at the top, used for carrying things.he arrived at the children's ward carrying a bag full of toys for the young patients"} date={"21 Febuary 2023"}/>


                <BlogCard  src={blogimg3} title={"Cultural Celebrations Highlights"} para={"a flexible container with an opening at the top, used for carrying things.he arrived at the children's ward carrying a bag full of toys for the young patients"} date={"12 August 2022"}/>

            </div>
        </div>
    </section>
  )
}

export default Pcpablog