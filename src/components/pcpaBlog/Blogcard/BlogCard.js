import React, {useEffect} from 'react'
import "./BlogCard.css"

import AOS from 'aos';
import 'aos/dist/aos.css'; 

const BlogCard = ({src, title, para, date}) => {
    
  useEffect (() => {
    AOS.init({
      duration: 2000,
    });
  }, [])

  return (
    <div className='blog-card' data-aos="fade-down">
        <img src={src} alt="blog image" />
        <h1 className='blog-title u-title'>
           {title}
        </h1>
        <p className="u-text-small">
        {para}
        </p>
        <div className="blog-date u-text-small">
            {date}
        </div>
    </div>
  )
}

export default BlogCard