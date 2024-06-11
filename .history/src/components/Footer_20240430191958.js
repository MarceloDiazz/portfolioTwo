import React from 'react'
import "../css/footer.css"
import iconGmail from "../img/IconGmail.png"
import iconLinkedin from "../img/IconLinkedin.png"

const Footer = () => {
  return (
      <section className='contenedor footer'>
        <div className='contactFooter'>
          <div>
        <img src={iconGmail} height={40}/>
        <h4>marcelodiazcp@gmail.com</h4>
          </div>
          <div>
        <img src={iconLinkedin} height={40}/>
        <h4>marcelodiazcp@gmail.com</h4>
          </div>
        </div>
      </section>
  )
}

export default Footer