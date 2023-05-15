/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Style/head.css';
import { Login } from './login';
export const Header = () => {
  return (
    <div className='container'>
      <input type='checkbox' id='check'></input>
      <header className='head'>

        <div className='logo'>
          <img src='./assets/logo.png' alt="LOGO" />
          <h4>SpaceDelivery</h4>
        </div>

        <div className='menu'>
          <a href='#home' className='nav-link'><span>Inicio</span></a>
          <a href='#products' className='nav-link'><span>Productos</span></a>
          <a href='#contact' className='nav-link'><span>Contacto</span></a>
          <div className='btn'>
            <button type='button' onClick={Login}>Iniciar Sesión</button>
            <button type='button' onClick={Login}>Registrarse</button>
          </div>
        </div>
        <label htmlFor='check' className='label'>
              <i className='fas fa-bars menu-btn fa-xl'></i>
        </label>

      </header>
    </div>

  )
}
