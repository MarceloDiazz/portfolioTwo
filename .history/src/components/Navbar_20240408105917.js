import React from 'react'
import "../css/navbar.css"
const Navbar = () => {
  return (
    <div className='contenedor'>
        <div className='content-navbar'>
          <nav>
          <a href='#' style={{position:"absolute", left:"0"}}>Logo</a>
            <a href='#'>Proyectos</a>
            <a href='#'>Sobre mí</a>
            <a href='#'>Contacto</a>
          </nav>
        </div>
    </div>
  )
}

export default Navbar