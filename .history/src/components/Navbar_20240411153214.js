import React from 'react'
import "../css/navbar.css"
import codeIcon from "../img/code-icon.png"
const Navbar = () => {
  return (
    <div className='contenedor'>
        <nav className='content-navbar'>
          <div className='logo'>
            <img src={codeIcon} />
          </div>
          <div>
            <a href='#'>Proyectos</a>
            <a href='#'>Experiencia</a>
            <a href='#'>Sobre mí</a>
            <a href='#'>Contacto</a>
          </div>
        </nav>
    </div>
  )
}

export default Navbar