/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React from "react";

import './Style/footer.css';
export const Footer = () => {
  return (
    <div className="container">
      <footer className="footer">
        <div className="main-content-footer" id="contact">

          <div className="footer-links">
            <div className="about">
              <h5>¡Gracias por elegirnos como su proveedor de confianza!</h5>
              <p>En SpaceDelivery, nos esforzamos por ofrecer una experiencia de compra en línea excepcional y garantizar la satisfacción del cliente.</p>
            </div>

            <div className="about-links">
              <a href="https://instagram.com" rel="noreferrer" target="_blank" className="foot-link"><i className="fa-brands fa-instagram fa-xl"></i><span id="social">@SpaceDelivery</span></a>
              <a href="https://facebook.com" rel="noreferrer" target="_blank" className="foot-link"><i className="fa-brands fa-facebook fa-xl"></i><span id="social">@SpaceDelivery</span></a>
              <a href="https://twitter.com" rel="noreferrer" target="_blank" className="foot-link"><i className="fa-brands fa-twitter fa-xl"></i><span id="social">@SpaceDeliveryOficial</span></a>
            </div>

          </div>

          <div className="contact-us">

            <form>
              <h3>contáctanos</h3>
              <div className="user-info">
                <label htmlFor="email">email</label>
                <input></input>

                <label htmlFor="fullname">fullname</label>
                <input></input>

                <label htmlFor="phone">phone</label>
                <input></input>

                <a href='' className='nav-link'><span>Envíar</span></a>
              </div>
            </form>

            <div className="footer-img"></div>
          </div>

        </div>

        <div className="copyright">
              <span>© SpaceDelivery 2023</span>
            </div>
            
      </footer>
    </div>
  )
};
