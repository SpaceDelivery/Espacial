// eslint-disable-next-line no-unused-vars
import React from 'react'

import './Style/inicio.css';
export const Inicio = () => {
  return (
    <main>
      <div className='container'>
        <div className='main-content-home' id='home'>
          <div className='content-info'>
            <div className='info' data-aos="fade-up">
              <h2>¡Llegamos hasta el espacio para llevarte lo mejor!</h2>
              <h4>SpaceDelivery, tu tienda online segura con productos de alta calidad.</h4>
              <p>Somos una tienda online comprometida con ofrecer productos de alta calidad y una experiencia de compra segura y confiable. Trabajan con marcas de renombre y proveedores confiables, y su equipo de atención al cliente está disponible para ayudar en cualquier momento. La satisfacción del cliente es su principal prioridad.</p>
            </div>

            <div className='info mision' data-aos="fade-up">
              <h2 id='info'>Nuestra misión</h2>
              <p>Nuestra misión es brindar a nuestros clientes la comodidad de hacer compras desde la comodidad de su hogar, sin tener que preocuparse por la calidad de los productos o la seguridad de sus transacciones. Es por eso que solo trabajamos con marcas de renombre y proveedores de confianza, para asegurarnos de que nuestros clientes reciban productos de alta calidad cada vez que hacen una compra.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}