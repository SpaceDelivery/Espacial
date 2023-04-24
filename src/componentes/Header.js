import React from 'react'

export const Header = () => {
  return (
    <div>
      <header className='head'>
        <a href='#' className='logo'>
          <img className='logo-img' src='https://cdn.pixabay.com/photo/2023/02/01/17/42/elf-7760932_960_720.png' alt="LOGO"></img>
          <p className='logoName'>SpaceDelivery</p>
        </a>
        <nav className='menu'>

        
        <a href='#Sobrenosotros-Text' className='nav-link'>Inicio</a>
        <a href='#' className='nav-link'>Productos</a>
        <a href='#' className='nav-link'>Contacto</a>
        <a href='#pacedelivery\public\login.html' className='nav-link'>Inicia Sesión</a>


        </nav>
      </header>  
    </div>
    
  )
}
