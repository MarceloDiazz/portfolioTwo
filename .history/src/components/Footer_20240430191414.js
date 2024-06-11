import React from 'react'
import "../css/footer.css"
import iconGmail from "../img/IconGmail.png"

const Footer = () => {
  return (
      <div className='contenedor'>
        <div className='contactFooter'>
        <img src={iconGmail} height={20}/>
        <h4>marcelodiazcp@gmail.com</h4>
        </div>
      </div>
  )
}

export default Footer