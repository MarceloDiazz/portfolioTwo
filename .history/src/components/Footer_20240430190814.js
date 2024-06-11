import React from 'react'
import iconGmail from "../img/IconGmail.png"

const Footer = () => {
  return (
    <div className='footer'>
      <div className='contenedor'>
        Contacto
        <div>
        <img src={iconGmail}/>
        </div>
      </div>
    </div>
  )
}

export default Footer