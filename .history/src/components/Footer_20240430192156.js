import React from 'react'
import "../css/footer.css"
import iconGmail from "../img/IconGmail.png"
import iconLinkedin from "../img/IconLinkedin.png"

const Footer = () => {
  return (
      <section className='contenedor footer'>
        <div className='contactFooter'>
          <div className='contentContact'>
        <img src={iconGmail} height={30}/>
        <h4>marcelodiazcp@gmail.com</h4>
          </div>
          <div className='contentContact'>
        <img src={iconLinkedin} height={30}/>
        <h4>https://www.linkedin.com/in/marcelo-diaz2000/</h4>
          </div>
        </div>
      </section>
  )
}

export default Footer