import React from 'react'
import iconGmail from "../img/IconGmail.png"

const Footer = () => {
  return (
    <div className='footer'>
      <div className='contenedor'>
        Contacto
        <div>
        <img src={iconGmail} height={20}/>
        </div>
      </div>
    </div>
  )
}

export default Footer