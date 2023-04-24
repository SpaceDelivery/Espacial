import React from "react";
import ReactDOM from "react-dom/client";
import'./style.css';
import { SobreNosotros } from "./componentes/SobreNosotros";
import { Header } from "./componentes/Header";
import { Login } from "./componentes/login";
import Productos from "./componentes/Productos";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <>
    
    <Header/>
    <SobreNosotros/>
    <Productos/>
    <Login/>

    </>
)