/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './Style/login.css';

export const Login = () => {
    return (
        <div className="login" id="login">
            <h2> Inicio de Sesión</h2>
            <form>
                <div className="usuario">
                    <input type="text" name="" required=""></input>
                    <label htmlFor="email" id="label">Correo</label>
                </div>
                <div className="usuario">
                    <input type="password" name="" required=""></input>
                    <label htmlFor="password" id="label">Contraseña</label>
                </div>
                <a href="">
                    Iniciar
                </a>
            </form>

        </div>
    )
}