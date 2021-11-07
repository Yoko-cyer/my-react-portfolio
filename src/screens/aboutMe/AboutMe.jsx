import React from 'react'
import './aboutMe.css'
import yoko_img from '../../img/yoko_img.jpg'

function AboutMe() {
  return (
    <div className="about_container" id="about-me">
      <div>
        <img src={yoko_img} alt="person icon" />
      </div>

      <div className="about_text">
        <h1>About Me</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem autem aperiam explicabo, veritatis, mollitia enim quo sunt incidunt aspernatur, possimus dolor. Minus similique maxime nisi distinctio exercitationem quia soluta officia.</p>
      </div>
      
    </div>
  )
}

export default AboutMe
