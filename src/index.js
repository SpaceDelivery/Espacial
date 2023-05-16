/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import { Footer, SobreNosotros } from "./footer";
import { Header } from "./Header";
import { Inicio } from "./Inicio";
import { Productos } from "./Productos";
import { Login } from "./login";
import './Style/normalize.css';
import './Style/skeleton.css';
import './Style/style.css';


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <>

        <Header />
        <Inicio />
        <Productos />
        
        

    </>
)