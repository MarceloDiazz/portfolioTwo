import React from 'react'
import "../css/navbar.css"
const Navbar = () => {
  return (
    <div className='contenedor'>
<ul>
  <li><a href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li style={{float:"right"}}><a class="active" href="#about">About</a></li>
</ul>
    </div>
  )
}

export default Navbar