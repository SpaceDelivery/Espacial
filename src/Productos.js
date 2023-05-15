/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line no-unused-vars
import React from 'react'

import './Style/productos.css';
export const Productos = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='main-content-products' id='products'>
          <div className='three columns'>
            <div className='product-card'>
              <h3>product1</h3>
              <img src='./assets/imgProducts/P-1.jpg' alt='"IMG"' />
              <div className='product-card-info'>
                <p>card info</p>
                <a href='#' className=''><span>Price</span></a>
              </div>
            </div>
          </div>


          <div className='three columns'>
            <div className='product-card'>
              <h3>product1</h3>
              <img src='./assets/imgProducts/P-2.jpg' alt='"IMG"' />
              <div className='product-card-info'>
                <p>card info</p>
                <a href='#' className=''><span>Price</span></a>
              </div>
            </div>
          </div>


          <div className='three columns'>
            <div className='product-card'>
              <h3>product1</h3>
              <img src='./assets/imgProducts/pexels-vlad-chețan-3121979.jpg' alt='"IMG"' />
              <div className='product-card-info'>
                <p>card info</p>
                <a href='#' className=''><span>Price</span></a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
