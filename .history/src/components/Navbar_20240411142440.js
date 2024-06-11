import React from 'react'
import "../css/navbar.css"
const Navbar = () => {
  return (
    <div className='contenedor'>
        <nav className='content-navbar'>
          <i className='code-icon'></i>
          <div className='line'></div>
            <a href='#'>Proyectos</a>
            <a href='#'>Experiencia</a>
            <a href='#'>Sobre mí</a>
            <a href='#'>Contacto</a>
        </nav>
    </div>
  )
}

export default Navbar