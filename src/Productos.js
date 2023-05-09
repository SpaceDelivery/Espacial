import React from 'react'

import './Style/productos.css';
export default function Productos() {
  return (
    <div className='conteiner'>
      <section className="conteiner-prod1">
            <article className="tarjet-1" id='1'>
              <div><h1> ¡VENDO¡</h1>
                    <img className='img-producto' src="./assets/P-1.jpg" alt="logo"></img>
              </div>    
                <div className='text-v'><p> Se vende un PS4 en excelentes condiciones, con poco uso y completamente funcional. Incluye un control inalámbrico DualShock 4 y todos los cables necesarios. Ofrece una amplia variedad de juegos, películas y música en línea con gráficos impresionantes y un rendimiento fluido. El PS4 ha sido bien cuidado, restaurado de fábrica y no tiene rasguños o marcas en la superficie. Está listo para ser usado y proporcionará horas de entretenimiento. Si buscas una consola de juegos en excelentes condiciones, este PS4 es perfecto para ti. ¡No pierdas la oportunidad de adquirir este maravilloso sistema de entretenimiento en casa!</p>
                </div>

                <input  className="button-buy"type='submit' value="Agregar al carrito" ></input>
            </article>    
      </section>
      <section className="conteiner-prod2"> 
      <div className="tarjet-2">
                <img className='img-producto' src='./assets/P-2.jpg' alt='Producto'></img>
              </div>
                <div className='text-v'>
                  <p> Venta: PC Mac con 1 mes de uso. Incluye procesador Apple M1, 8GB RAM, 256GB de almacenamiento SSD y pantalla de 13". Perfecta para trabajo y estudio. Precio: menos de $400. ¡Aprovecha esta oportunidad única! </p>
                </div></section>
    </div> 
    )
}
