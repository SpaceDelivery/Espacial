import React from "react";
import'./login.css'

export const Login=()=>{
    return(
        <div className="login" id="login">

            <h2> Inicio de Sesión</h2>
            <form>
                <div className="usuario">
                    <input type="text"name=""
                    required=""></input>
                    <label> Correo</label>
                </div>
                <div className="usuario">
                    <input type="password" name=""
                    required=""></input>
                    <label>Contraseña</label>
                </div>
                <a href="">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Iniciar
                </a>
            </form>

        </div>
    )
}