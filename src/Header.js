import React from 'react'
import'./Style/head.css';
export const Header = () => {
  return (
    <div className='conteiner-H'>
      <header className='head'>
        <a href='#' className='logo'>
          <img className='logo-img' src='./assets/logo.png' alt="LOGO"/>
          <p className='logoName'>SpaceDelivery</p>
        </a>
        <nav className='menu'>

        
        <a href='#Sobrenosotros-Text' className='nav-link'>Inicio</a>
        <a href='#' className='nav-link'>Productos</a>
        <a href='#' className='nav-link'>Contacto</a>
        <button onClick="Login()">Inicia Sesión</button>


        </nav>
      </header>  
    </div>
    
  )
}
