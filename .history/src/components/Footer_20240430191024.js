import React from 'react'
import iconGmail from "../img/IconGmail.png"

const Footer = () => {
  return (
    <div className='footer'>
      <div className='contenedor'>
        Contacto
        <div className='contactFooter'>
        <img src={iconGmail} height={20}/>
        <h6>marcelodiazcp@gmail.com</h6>
        </div>
      </div>
    </div>
  )
}

export default Footer