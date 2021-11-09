import React from 'react'
import './contactMe.css'
import { navigationLinks } from '../../helpers/navigationLinks'

function createLinks() {
  return navigationLinks.map((e, idx) => (
    <p key={idx} ><a href="{e.ref}">{e.name}</a></p>
  ))
}

function ContactMe() {
  return (
    <div className="contactMe_container" id="contact">
      <div className="contactMe_data_links">
        <div>
          <p>Brisbane, Australia</p>
          <p>Yoko Ujihara</p>
          <p>yokoujihara622@gmail.com</p>
        </div>
        <div>
          {createLinks()}
        </div>
      </div>
      <div>Copyright&copy;{new Date().getFullYear()} All rights reserved</div>
    </div>
  )
}

export default ContactMe
