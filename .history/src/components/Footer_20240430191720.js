import React from 'react'
import "../css/footer.css"
import iconGmail from "../img/IconGmail.png"
import iconLinkedin from "../img/IconLinkedin.png"

const Footer = () => {
  return (
      <section className='contenedor footer'>
        <div className='contactFooter'>
        <img src={iconGmail} height={20}/>
        <h4>marcelodiazcp@gmail.com</h4>
        <img src={iconLinkedin} height={20}/>
        <h4>marcelodiazcp@gmail.com</h4>
        </div>
      </section>
  )
}

export default Footer